"use client";

export const Button = (props) => {
    return (
        <button onClick={props.clickHandler} className={`px-6 py-3 rounded-lg bg-orange-700 hover:bg-orange-800 text-base font-medium transition-all hover:scale-95 ${props.cta === 'Login' || props.cta === 'Sign Up' ? "" : "w-full"}`} type="submit">{props.cta}</button>
    )
}