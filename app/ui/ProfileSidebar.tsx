'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

export default function ProfileSidebar() {
    const { data: session, status } = useSession();


  return (
    <aside className='flex flex-col bg-purple-tones-600 text-purple-tones-200 gap-2 w-full p-6 sm:w-2/12'>
        <section className='self-center flex flex-col items-center border-b border-b-yellow-tones-500 py-4'>
            {
                status === 'loading' ? 
                <>
                    <h1 className='text-xl font-bold mb-4 '>Usuario</h1>
                    <Image
                        src="/profile.png"
                        alt="profile photo"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <p className='text-base font-bold mt-4'>Email@mail.dev</p>
                </>
                    :
                <>
                    <h1 className='text-xl font-bold mb-4 '>{session?.user?.name}</h1>
                    <Image
                        src="/profile.png"
                        alt="profile photo"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <p className='text-base font-bold mt-4'>{session?.user?.email}</p>
                </>
            }
        </section>
        <section className='hidden sm:flex flex-col'>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='text-xl font-bold'>Eventos:</h1>
                <Link href="/events/Yamatsuri" className='text-base font-semibold'><span className='text-success'>Proximo: </span>13/04/2024</Link>
                <ul className='gap-1'>
                    <li>
                        <Link href="/events/Yamatsuri">Yamatsuri 2023</Link>
                    </li>
                    <li>
                        <Link href="/events/Kyomu">Kyomu 2023</Link>
                    </li>
                    <li>
                        <Link href="/events/Kyo">Kyo 2023</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <h1 className='text-xl font-bold'>Premios:</h1>
                <p className='text-base font-semibold'><span className='text-yellow'>Ultimo: </span>1er premio <b className='text-purple-tones-900'>Cosplay</b></p>
                <ul className='gap-1'>
                    <li>Yamatsuri 2023</li>
                </ul>
            </div>
        </section>
    </aside>
  )
}
