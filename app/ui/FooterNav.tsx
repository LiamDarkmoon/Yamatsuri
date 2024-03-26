'use client'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const FooterNav = () => {
    const { data: session } = useSession()
    const pathname = usePathname()

     return (
        <footer className="absolute left-0 right-0 h-16 flex justify-center items-center text-center bg-purple-tones-900">
         <h4 className="text-purple-tones-50 text-sm">
            @Yamatsuri 2024 All-rights reserved
         </h4>
        </footer>
     )
}

export default FooterNav;