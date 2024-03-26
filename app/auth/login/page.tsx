import { LoginForm } from "../../ui/Forms";
import { GoogleLoginButton } from "../../ui/Loginbuttons";
import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="min-h-screen text-center flex items-center bg-purple-tones-900 text-purple">
            <section className="absolute bg-bg-img bg-left-bottom w-full h-full sm:block sm:w-1/2 sm:relative sm:h-screen">
            </section>
            <section className="flex flex-col w-full items-center justify-center pb-20 pt-28 sm:w-1/2 sm:p-0">
                <div className="flex flex-col items-center glass shadow-purple shadow-sm p-6 rounded-lg w-11/12 sm:w-8/12 sm:bg-purple-tones-100">
                    <h1 className="text-3xl font-bold text-purple my-4">Ingresa</h1>
                    <LoginForm/>
                    <GoogleLoginButton/>
                    <Link href="/auth/register" className="text-purple mt-4">
                        ¿Aun no tenes cuenta? creala aqui
                    </Link>
                </div>
            </section>
        </main>
    )
}