import { LoginForm } from "../../ui/Forms";
import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="min-h-screen text-center py-20 flex flex-col items-center">
            <div className="flex flex-col items-center w-4/12 shadow-purple shadow-sm p-6 rounded-lg">
                <h1 className="text-3xl font-bold text-purple my-4">Login</h1>
                <LoginForm/>
                <Link href="/auth/register" className="text-purple mt-4">
                    Don&apos;t have an account? Register here.
                </Link>
            </div>
        </main>
    )
}