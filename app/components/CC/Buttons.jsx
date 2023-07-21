export const Button = (props) => {
    return (
        <button onClick={props.clickHandler} className={`px-6 py-3 rounded-lg bg-orange-400 hover:bg-orange-500 text-slate-900 text-base font-semibold transition-all hover:scale-95 ${props.cta === "Edit" || props.cta === "Delete" || props.cta === "Delete All" ? "border border-orange-400 bg-transparent text-orange-400 hover:border-orange-500 hover:text-slate-900" : ""}`} type="submit">{props.cta}</button>
    )
}