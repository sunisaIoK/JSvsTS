import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>
      About Page
      </Link>
    </div>
  )
}

export default HomePage