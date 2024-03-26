'use server'
import { z  } from 'zod';
import { sql  } from '@vercel/postgres';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import prisma from './db';
import bcrypt from 'bcrypt';
import { State } from '../lib/definitions';


const registerSchema = z.object({
  name: z.string({required_error: 'Por favor ingresa tu nombre.'})
    .trim()
    .min(4,{message: 'El nombre de usuario debe tener al menos 4 caracteres.'})
    .max(20,{message: 'El nombre de usuario es muy largo.'}),
  password: z.string({required_error: 'Por favor ingresa la contraseña.'})
    .trim()
    .min(6,{message: 'La contraseña debe tener al menos 6 caracteres.'})
    .max(18,{message: 'La contraseña es muy larga.'}),
  confirm: z.string({required_error: 'Por favor confirma la contraseña.'})
    .trim()
    .min(6,{message: 'La contraseña debe tener al menos 6 caracteres.'})
    .max(18,{message: 'La contraseña es muy larga.'}),
  email: z.string({required_error: 'Por favor ingresa tu correo.'})
    .trim()
    .min(6,{message: 'El email debe tener al menos 10 caracteres.'})
    .email("el email no es valido")
});


export async function register(prevState: State, formData: FormData) {
  const validate = registerSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
    confirm: formData.get('confirm'),
    email: formData.get('email'),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: 'campos invalidos no se pudo crear usuario.',
    };
  }
 
  const hashedPassword = await bcrypt.hash(validate.data.password, 10);
  const password = hashedPassword;
  const { name, confirm, email } = validate.data;

  try {
    // Check that every field is completed
    if (!name || !password || !confirm || !email) {
      return {
        message: 'quedan campos por completar'
      }
    }

    // Check if password and confirmation match
    if (validate.data.password !== confirm) {
      return {
        message: 'El password no concuerda'
      }
    }

    // Check if user already exists
    const nameFound = await prisma.user.findUnique({
      where: {
        name: name,
      }
    })
    if(nameFound){
      return {
        message: 'El usuario ya existe.'
      }
    }


    // Check if email already exists
    const emailFound = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })
    if(emailFound){
      return {
        message: 'El email ya existe.'
      }
    }

    //Create User
    const newUser = await prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    })

    
    return {
      message: 'Usuario creado correctamente.',
    }

  } catch (error) {
    return { 
      message: 'Error en la base de datos: no se ha creado el usuario.',
    }
  }
}


export async function authenticate(prevState: string | undefined, formData: FormData,){
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Email o password incorrecto.';
          default:
            return 'Ups Algo salio mal.';
      }
    }
    throw error;
  }
}

export async function logout(){
  await signOut();
}

export async function loginGoogle(){
  await signIn('google')
}