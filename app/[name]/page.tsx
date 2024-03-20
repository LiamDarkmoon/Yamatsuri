import { auth }  from '@/auth'

export default async function page() {
    const session = await auth()

  return (
    <main className="min-h-screen flex justify-center items-center w-screen">
      <h1 className='text-3xl font-bold text-center'><span className='text-4xl text-purple'>{session?.user?.name}:</span> Profile Page</h1>
    </main>
  )
}
