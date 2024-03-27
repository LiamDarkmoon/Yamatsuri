'use client'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const FooterNav = () => {
    const { data: session } = useSession()
    const path = usePathname()

     return (
      <>
         {
            path === '/auth/login' || path === '/auth/register' ?

            null

            :

            <footer className="absolute left-0 right-0 h-56 flex justify-center items-center text-center bg-purple-tones-900">
               <nav>
                  <ul className="flex justify-center items-center gap-8">
                     <li>Instagram</li>
                     <li>Facebook</li>
                     <li>Whatsapp</li>
                  </ul>
               </nav>
               <h4 className="text-purple-tones-50 text-sm p-6">
                  @Yamatsuri 2024 All-rights reserved
               </h4>
            </footer>
         
         }
      </>
     )
}

export default FooterNav;