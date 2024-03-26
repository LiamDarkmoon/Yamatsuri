import { signIn } from '@/auth'
import { loginGoogle } from '../lib/actions';

export const GoogleLoginButton = () => {

    return (
        <form action={loginGoogle}>
            <button type="submit" className="rounded-lg w-full bg-purple-tones-600 text-purple-tones-50 mt-2 px-4 py-2 hover:bg-purple-tones-700 active:bg-purple-tones-900">
                ingresar con google
            </button>
        </form>
    )
}