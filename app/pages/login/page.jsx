'use client'
import {Button0} from "@/app/components/CC/Buttons"
import Link from "next/link"

const page = () => {
    const clickHandler = () => {

    }
    return (
        <section className='h-screen grid place-items-center'>
            <Link className="absolute top-20 left-40 text-2xl" href="/">←</Link>
            <form action="" method="post">
                <div className="flex flex-col space-y-6 text-center">
                    <h1 className="font-medium text-2xl">Login to eNotes</h1>
                    <hr className="opacity-30" />
                    <div className="flex flex-col space-y-6">
                        <input className="py-3 px-6 rounded-lg bg-indigo-600 placeholder:text-indigo-200/60" type="email" name="" placeholder="Enter your email" />
                        <input className="py-3 px-6 rounded-lg bg-indigo-600 placeholder:text-indigo-200/60" type="password" name="" placeholder="Enter your password" />
                    </div>
                    <div className="">
                        <Button0 clickHandler={clickHandler} cta="Login" />
                    </div>
                    <hr className="opacity-30" />
                    <p className="opacity-60">Or</p>
                    <div className="underline opacity-60 hover:opacity-100"><Link href="/pages/signup">Sign Up</Link></div>
                </div>
            </form>
        </section>
    )
}

export default page