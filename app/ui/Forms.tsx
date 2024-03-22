'use client'
import { useSession } from "next-auth/react"
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate, register } from '../lib/actions';
import { State } from '../lib/definitions';


export const RegisterForm = () => {
    const { pending } = useFormStatus();
    const initialState: State = { message:  null, errors: {} };
    const [state, dispatch] = useFormState(register, initialState);

    return(
            <form className='flex flex-col items-center w-full' action={dispatch}>
                <div className='flex flex-col items-start w-full mt-2'>
                    <label htmlFor="name" className="ms-2">Nombre de usuario</label>
                    <input type="text" name="name" id="name" placeholder="janedoe" aria-describedby='name-error'className="p-2 rounded-lg w-full"/>
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-warning" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-start w-full mt-2'>
                    <label htmlFor="password" className="ms-2">Password</label>
                    <input type="password" name="password" id="password" placeholder="******" aria-describedby='password-error'className="p-2 rounded-lg w-full"/>
                    <div id="password-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.password &&
                        state.errors.password.map((error: string) => (
                            <p className="mt-2 text-sm text-warning" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-start w-full mt-2'>
                    <label htmlFor="confirm" className="ms-2">Confirmar password</label>
                    <input type="password" name="confirm" id="confirm" placeholder="******" aria-describedby='confirm-error'className="p-2 rounded-lg w-full"/>
                    <div id="confirm-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.confirm &&
                        state.errors.confirm.map((error: string) => (
                            <p className="mt-2 text-sm text-warning" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-start w-full mt-2'>
                    <label htmlFor="email" className="ms-2">Email</label>
                    <input type="email" name="email" id="email" placeholder="janedoe@xmail.com" aria-describedby='email-error'className="p-2 rounded-lg w-full"/>
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                        state.errors.email.map((error: string) => (
                            <p className="mt-2 text-sm text-warning" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <button className='btn mt-4' type="submit" aria-disabled={pending}>Crear cuenta</button>
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state.message && (
                        <>
                        <p className={ state.message === 'Usuario creado correctamente.' ? "text-sm text-success" : "text-sm text-warning"}>{state.message}</p>
                        </>
                    )}
                </div> 
            </form>
    )
}

export const LoginForm = () =>{
    const { pending } = useFormStatus();
    const initialState: State = { message:  null, errors: {} };
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return(
        <form className='flex flex-col items-center w-full' action={dispatch}>
            <div className='flex flex-col items-start w-full mt-2'>
                <label htmlFor="email" className="ms-2">Email</label>
                <input type="email" name="email" id="email" placeholder="janedoe@xmail.com" className="p-2 rounded-md w-full"/>
            </div>
            <div className='flex flex-col items-start w-full mt-2'>
                <label htmlFor="password" className="ms-2">Password</label>
                <input type="password" name="password" id="password" placeholder="******" className="p-2 rounded-md w-full"/>
            </div>
            <button className='btn mt-4' type="submit" aria-disabled={pending}>Ingresar</button>
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <>
                    <p className="text-sm text-warning">{errorMessage}</p>
                    </>
                )}
            </div> 
        </form>
    )
}

export const TicketForm = () =>{
    /* const [errorMessage, dispatch] = useFormState(, undefined); */

    return(
        <form className='flex flex-col items-center w-full'>
            <div className="flex justify-between">
                <div className='flex flex-col items-start w-1/2 mt-2 mr-2'>
                    <label htmlFor="name" className="ms-2">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Jane" className="p-2 rounded-lg w-full"/>
                </div>
                <div className='flex flex-col items-start w-1/2 mt-2 ml-2'>
                    <label htmlFor="lastname" className="ms-2">Apellido</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Doe" className="p-2 rounded-lg w-full"/>
                </div>
            </div>
            <div className='flex flex-col items-start w-full mt-2'>
                <label htmlFor="phone" className="ms-2">Numero de whatsapp</label>
                <input type="number" name="phone" id="phone" placeholder="1234-123456" className="p-2 rounded-lg w-full"/>
            </div>
            <div className='flex flex-col text-center items-start w-full mt-2'>
                <label htmlFor="tickets" className="ms-2 w-full mx-auto">Entradas</label>
                <input type="number" min="1" defaultValue="1" max="99" name="tickets" id="tickets" className="p-2 rounded-lg w-1/3 mx-auto"/>
            </div>
            <button className='btn mt-4' type="submit">Comprar</button>
        </form>
    )
}
