import { RegisterForm } from "../../ui/Forms";

export default function SignUpPage() {
    return (
        <main className="min-h-screen text-center flex items-center  bg-purple-tones-900 text-purple">
            <section className="flex flex-col w-full items-center justify-center pb-20 pt-28 sm:w-1/2 sm:pb-0">
                <div className="flex flex-col glass items-center shadow-purple shadow-sm p-6 rounded-lg w-11/12 sm:w-8/12 sm:bg-purple-tones-100">
                    <h1 className="text-3xl font-bold text-purple my-4">Registrate</h1>
                    <RegisterForm/>
                </div>
            </section>
            <section className="absolute bg-bg-img bg-right-bottom w-full h-screen sm:block sm:relative sm:w-1/2">
            </section>
        </main>
    )
}  