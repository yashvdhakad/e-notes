'use client'
import { useContext } from "react"
import { Button } from "../components/Buttons"
import Link from "next/link"
import { NoteContext } from "../context/noteContext"

const page = () => {
    const context = useContext(NoteContext)
    const { user, loginAPI } = context;

    const changeHandler = (e) => {
        user[e.target.name] = e.target.value;
    }

    const clickHandler = () => {
        loginAPI();
    }
    return (
        <section className='h-screen grid place-items-center'>
            <Link className="absolute top-20 left-40 text-2xl" href="/">←</Link>
            <div className="flex flex-col space-y-6 text-center">
                <h1 className="font-medium text-2xl">Login to eNotes</h1>
                <hr className="opacity-30" />
                <div className="flex flex-col space-y-6">
                    <input className="py-3 px-6 bg-transparent border  border-slate-600 rounded-lg placeholder:text-slate-200/60" onChange={changeHandler} type="email" name="email" placeholder="Enter your email" />
                    <input className="py-3 px-6 bg-transparent border  border-slate-600 rounded-lg placeholder:text-slate-200/60" onChange={changeHandler} type="password" name="password" placeholder="Enter your password" />
                </div>
                <Button clickHandler={clickHandler} cta="Login" />
                <hr className="opacity-30" />
                <p className="opacity-60">Or</p>
                <div className="underline opacity-60 hover:opacity-100"><Link href="/signup">Sign Up</Link></div>
            </div>
        </section>
    )
}

export default page