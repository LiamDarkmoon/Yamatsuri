import { RegisterForm } from "../../ui/Forms";

export default function SignUpPage() {
    return (
        <main className="min-h-screen text-center pb-20 pt-32 flex flex-col items-center">
            <div className="flex flex-col items-center shadow-purple shadow-sm p-6 rounded-lg w-11/12 sm:w-4/12">
                <h1 className="text-3xl font-bold text-purple my-4">Registrate</h1>
                <RegisterForm/>
            </div>
        </main>
    )
}  