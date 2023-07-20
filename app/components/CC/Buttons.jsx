export const Button = (props) => {
    return (
        <button onClick={props.clickHandler} className={`px-6 py-3 rounded-lg bg-orange-400 hover:bg-orange-500 text-zinc-900 text-base font-semibold transition-all hover:scale-95`} type="submit">{props.cta}</button>
    )
}