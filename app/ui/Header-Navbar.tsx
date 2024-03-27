'use client'
import Link  from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react';
import Image  from 'next/image'
import styles from '../ui/navbar.module.css'
import { auth }  from '@/auth'
import LogoutButton from '../ui/LogoutButton'
import { User } from '@geist-ui/icons'



function HeaderNavbar() {
    const { data: session, status } = useSession()
    const path = usePathname()

    return (
        <header className={styles.headernav}>
            <nav className={styles.navbar}>
                <div className='flex items-center'>
                    <Link href="/">
                    <Image
                        src="/Yamatsuri-logo.png"
                        alt="Yamatsuri Logo"
                        width={60}
                        height={60}
                    />
                    </Link>
                </div>
                <ul className={styles.navlist}>
                    {
                        path === '/about' || path === '/profile/${session?.user?.name}' ?
                        <>
                            <Link className='text-purple' href="/about">
                                About us
                            </Link>
                            <Link className='flex items-center text-purple' href={`/profile/${session?.user?.name}`}>
                                <User/>
                                <span className='hidden sm:block ml-2'>
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                        :
                        <>
                            <Link href="/about">
                                About us
                            </Link>
                            <Link className='flex items-center text-yellow' href={`/${session?.user?.name}`}>
                                <User/>
                                <span className='hidden sm:block ml-2'>
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                    }
                    {
                        path !== '/auth/login' ?
                        <>
                            {
                                !session ?
                                <Link className={styles.navbtn} href="/auth/login">
                                    login
                                </Link>
                                :
                                <LogoutButton />
                            }
                        </>
                        :
                        null
                    }
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavbar