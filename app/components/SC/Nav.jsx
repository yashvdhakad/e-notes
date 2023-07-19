import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="w-full z-10 absolute top-0 lg:px-20 py-4 rounded-lg bg-indigo-700 flex justify-between items-center">
      <p className="font-bold"><Link href="/">eNotes</Link></p>
      <ul className='flex space-x-10'>
        <li><Link href="/pages/about">About</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav