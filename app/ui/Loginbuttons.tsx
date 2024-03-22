import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

export const GoogleLoginButton = () => {

    return (
        <form action={ async ()=> {
            'use server'
            await signIn('google')
            redirect('/')
        }
        }>
            <button type="submit" className="border border-solid rounded-lg border-purple-tones-600 text-purple mt-2 px-4 py-2 hover:border-purple-tones-700 active:text-purple-tones-700">
                ingresar con google
            </button>
        </form>
    )
}