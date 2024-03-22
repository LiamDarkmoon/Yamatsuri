import { TicketForm } from "../ui/Forms";

export default function TicketPage() {
    return (
        <main className="min-h-screen text-center pb-20 pt-32 flex flex-col items-center">
            <div className="flex flex-col flex-wrap items-center shadow-purple shadow-sm p-6 rounded-lg w-11/12 sm:w-4/12">
                <h1 className="text-3xl font-bold text-purple my-4">Obtene tu entrada</h1>
                <TicketForm/>
            </div>
        </main>
    )
}  