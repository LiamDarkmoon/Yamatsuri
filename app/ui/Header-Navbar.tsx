import Link  from 'next/link'
import Image  from 'next/image'
import styles from '../ui/navbar.module.css'

const HeaderNavbar = () => {
    return (
        <header className={styles.headernav + " bg-purple-tones-700"}>
            <nav className={styles.navbar}>
                <Link href="/">
                <Image
                    src="/yamatsuri-logo.png"
                    alt="Yamatsuri Logo"
                    width={40}
                    height={40}
                />
                </Link>
                <ul className={styles.navlist}>
                    <Link href="/about">
                        About us
                    </Link>
                    <Link className={styles.btnsecondary} href="/tickets">
                        Tickets 
                    </Link>
                    <Link className={styles.navbtn} href="/login">
                        login
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavbar