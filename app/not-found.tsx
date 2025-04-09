import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col pt-8 rounded-t-[18px] rounded-br-[18px] rounded-bl-[18px] shadow-nav z-[12] relative bg-[#E8D5B0] items-center justify-center">
      <h2 className="">Page Not Found</h2>
      <p className="">Could not find the requested resource</p>
      <Link href="/" className="">
        Return Home
      </Link>
    </div>
  )
}