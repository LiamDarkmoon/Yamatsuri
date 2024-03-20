import { RegisterForm } from "../../ui/Forms";

export default function SignUpPage() {
    return (
        <main className="min-h-screen text-center py-20 flex flex-col items-center">
            <div className="flex flex-col items-center w-4/12 shadow-purple shadow-sm p-6 rounded-lg">
                <h1 className="text-3xl font-bold text-purple my-4">Sign Up</h1>
                <RegisterForm/>
            </div>
        </main>
    )
}  