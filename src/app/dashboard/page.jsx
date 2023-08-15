import Main from '../components/Main'
import Nav from '../components/Nav'
import { Toaster } from 'react-hot-toast'
import Link from "next/link";

const page = () => {
  return (
    <>
        <section className="font-bold"><Toaster /></section>
        <section className='max-w-screen-xl lg:h-screen m-auto px-20 flex flex-col items-center'>
          <Nav />
          <Main />
        </section>
    </>
  )
}

export default page