import { auth }  from '@/auth'

export default async function page() {
    const session = await auth()

  return (
    <main className="min-h-screen w-screen flex flex-col items-center text-center pt-32">
      <h1 className='text-3xl font-bold mt-4'><span className='text-4xl text-purple'>{session?.user?.name}:</span> Profile Page</h1>
      <p className='text-xl font-bold mt-4'>Email: {session?.user?.email}</p>
      <p className='text-xl font-bold mt-4'>Ultimo evento visitado: Poner ultimo evento aqui we</p>
    </main>
  )
}
