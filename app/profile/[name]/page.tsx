import ImageCarousel from '@/app/ui/ImageCarousel';
import ProfileSidebar from '@/app/ui/ProfileSidebar';
import { auth }  from '@/auth'
import Image from 'next/image';

export default async function page() {
    const session = await auth()

  return (
    <main className="min-h-screen flex flex-wrap pt-[92px] bg-purple-tones-900 text-purple-tones-900">
      <ProfileSidebar/>
      <ImageCarousel/>
    </main>
  )
}
