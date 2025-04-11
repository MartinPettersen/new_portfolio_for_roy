import Link from 'next/link'
import CombinedNoteNotFound from './components/(notfound)/CombinedNoteNotFound'
 
export default function NotFound() {
  return (
    <div className="flex flex-col pt-8 rounded-t-[18px] h-screen rounded-br-[18px] rounded-bl-[18px] shadow-nav z-[12] relative bg-[#E8D5B0] items-center justify-center">


      <Link href="/" className="">
      <CombinedNoteNotFound />
      </Link>
    </div>
  )
}