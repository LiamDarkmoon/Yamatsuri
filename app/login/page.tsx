import { LoginForm } from "../ui/Forms";
import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="min-h-screen text-center pt-20">
            <h1 className="text-3xl font-bold text-purple my-4">Login</h1>
            <LoginForm/>
            <Link href="/register" className="text-purple mt-4">
                Don&apos;t have an account? Register here.
            </Link>
        </main>
    )
}