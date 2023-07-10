"use client";

export const Button0 = (props) => {
    return (
        <button onClick={props.clickHandler} className='w-full px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-base font-medium transition-all hover:scale-95' type="submit">{props.cta}</button>
    )
}

export const Button = (props) => {
    return (
        <button onClick={props.clickHandler} className='px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-base font-medium transition-all hover:scale-95' type="submit">{props.cta}</button>
    )
}