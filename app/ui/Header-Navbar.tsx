import Link  from 'next/link'
import Image  from 'next/image'

function HeaderNavbar() {
    return (
        <header className="headernav">
            <nav className="absolute top-0 left-0 right-0 w-full flex justify-center items-center p-5">
                <Link href="/">
                <Image
                    src="/Yamatsuri-logo.png"
                    alt="Yamatsuri Logo"
                    width={75}
                    height={75}
                />
                </Link>
            </nav>
        </header>
    )
}

export default HeaderNavbar