import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="max-w-screen-xl z-10 sticky top-0 m-auto lg:px-20 py-4 rounded-lg bg-slate-700 flex justify-between items-center">
      <p className="text-2xl"><Link href="/">🤓</Link></p>
      <ul className='flex space-x-10'>
        <li><Link className='hover:text-white' href="/about">About</Link></li>
        <li><Link className='hover:text-white' href="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav