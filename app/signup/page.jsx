'use client'
import { Button } from "../components/Buttons"
import Link from "next/link"
import { NoteContext } from "../context/noteContext"
import { useContext } from "react"
import { Toaster } from 'react-hot-toast';

const page = () => {
    const context = useContext(NoteContext)
    const { user, signupAPI } = context;

    const changeHandler = (e) => {
        user[e.target.name] = e.target.value;
    }

    const clickHandler = () => {
        signupAPI();
    }
    return (
        <section className='h-screen grid place-items-center'>
            <section className="font-bold"><Toaster /></section>
            <Link className="absolute top-20 left-40 text-2xl" href="/">←</Link>
            <div className="flex flex-col space-y-6 text-center">
                <h1 className="font-medium text-2xl">Sign Up for eNotes</h1>
                <hr className="opacity-30" />
                <div className="flex flex-col space-y-6">
                    <input onChange={changeHandler} className="py-3 px-6 rounded-lg bg-transparent border border-slate-600 placeholder:text-slate-200/60 focus:bg-transparent" type="text" name="name" placeholder="Enter your full name" autoComplete="off" />
                    <input onChange={changeHandler} className="py-3 px-6 rounded-lg bg-transparent border border-slate-600 placeholder:text-slate-200/60 focus:bg-transparent" type="email" name="email" placeholder="Enter your email" autoComplete="off" />
                    <input onChange={changeHandler} className="py-3 px-6 rounded-lg bg-transparent border border-slate-600 placeholder:text-slate-200/60 focus:bg-transparent" type="password" name="password" placeholder="Enter your password" autoComplete="off" />
                </div>
                <Button clickHandler={clickHandler} cta="Sign Up" />
                <hr className="opacity-30" />
                <p className="opacity-60">Or</p>
                <div className="underline opacity-60 hover:opacity-100"><Link href="/login">Log In</Link></div>
            </div>
        </section>
    )
}

export default page