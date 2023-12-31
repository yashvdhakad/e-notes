"use client";

import Link from 'next/link'
import Image from 'next/image';
import noteIcon from '../assets/svg/sticky-note-fill.svg'
import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';
import { Button } from '../components/Buttons'

const Nav = () => {
  const { logoutAPI } = useContext(NoteContext);

  return (
    <nav className="w-full z-10 fixed top-0 m-auto p-4 lg:px-40 rounded-lg bg-slate-700 flex justify-between items-center">
      <Link className='font-medium' href="/">
        <Image
          className='inline invert transition-all hover:scale-95'
          src={noteIcon}
          alt="copy"
          width={20}
          height={20}
        /> eNotes
      </Link>
      <ul className='flex space-x-10'>
        <li><Link className='hover:text-white' href="/about">About</Link></li>
        <li><Link className='hover:text-white' href="/dashboard">Dashboard</Link></li>
        <li><Link className='hover:text-white' href="/profile">Profile</Link></li>
        <li><Button clickHandler={() => logoutAPI()} cta="Logout" /></li>
      </ul>
    </nav>
  )
}

export default Nav