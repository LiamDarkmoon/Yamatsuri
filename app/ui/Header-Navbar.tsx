import Link  from 'next/link'
import Image  from 'next/image'
import styles from '../ui/navbar.module.css'
import { auth }  from '@/auth'
import LogoutButton from '../ui/LogoutButton'
import { User } from '@geist-ui/icons'



async function HeaderNavbar() {
    const session = await auth()

    return (
        <header className={styles.headernav}>
            <nav className={styles.navbar}>
                <div className='flex items-center'>
                    <Link href="/">
                    <Image
                        src="/Yamatsuri-logo.png"
                        alt="Yamatsuri Logo"
                        width={40}
                        height={40}
                    />
                    </Link>
                    <Link className='ml-4 text-purple-tones-50' href={`/${session?.user?.name}`}><User/></Link>
                    <Link className='hidden sm:block ml-2 text-purple-tones-50' href={`/${session?.user?.name}`}>{session?.user?.name}</Link>
                </div>
                <ul className={styles.navlist}>
                    <Link href="/about">
                        About us
                    </Link>
                    <Link className={styles.btnsecondary} href="/tickets">
                        Tickets 
                    </Link>
                    {
                         !session ?
                        <Link className={styles.navbtn} href="/auth/login">
                            login
                        </Link>
                        :
                        <LogoutButton />
                    }
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavbar