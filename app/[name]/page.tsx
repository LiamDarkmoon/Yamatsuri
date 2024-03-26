import { auth }  from '@/auth'

export default async function page() {
    const session = await auth()

  return (
    <main className="min-h-screen flex flex-col p-24 text-purple-tones-900">
      <h1 className='text-2xl font-bold mt-4 sm:text-3xl'><span className='text-3xl sm:text-4xl'>{session?.user?.name}:</span> Profile Page</h1>
      <p className='text-xl font-bold mt-4'>Email: {session?.user?.email}</p>
      <p className='text-xl font-bold mt-4'>Ultimo evento visitado: evento aqui we</p>
    </main>
  )
}
