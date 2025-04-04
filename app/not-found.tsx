import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="">
      <h2 className="">Page Not Found</h2>
      <p className="">Could not find the requested resource</p>
      <Link href="/" className="">
        Return Home
      </Link>
    </div>
  )
}