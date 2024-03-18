'use server'
import { z  } from 'zod';
import { sql  } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { State } from './definitions';
import { PrismaClient } from '@prisma/client';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import prisma from './db';
import bcrypt from 'bcrypt';


const registerSchema = z.object({
  name: z.string({required_error: 'Por favor ingresa tu nombre.'})
    .trim()
    .min(4,{message: 'El nombre de usuario debe tener al menos 4 caracteres.'})
    .max(20,{message: 'El nombre de usuario es muy largo.'}),
  password: z.string({required_error: 'Por favor ingresa la contraseña.'})
    .trim()
    .min(6,{message: 'La contraseña debe tener al menos 6 caracteres.'})
    .max(18,{message: 'La contraseña es muy larga.'}),
  confirm: z.string({required_error: 'Por favor ingresa la contraseña.'})
    .trim()
    .min(6,{message: 'La contraseña debe tener al menos 6 caracteres.'})
    .max(18,{message: 'La contraseña es muy larga.'}),
  email: z.string({required_error: 'Por favor ingresa tu correo.'})
    .trim()
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
    if (!name || !password || !confirm || !email) {
      throw new Error('Todos los campos son requeridos');
    }

    // Check if password and confirmation match
    if (validate.data.password !== confirm) {
      throw new Error('El password no concuerda');
    }

    // Check if user already exists



    // Check if email already exists
    const emailFound = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })

    if(emailFound){
      return {
        errors: {email: 'El email usuario ya existe.'},
      }
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });

    return {
      success: true,
      message: 'Usuario creado correctamente.',
    };

    redirect('/');
  } catch (error) {
    return { 
      message: 'Error en la base de datos: no se ha creado el usuario.',
    };
  }
}


  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
      redirect('/');
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