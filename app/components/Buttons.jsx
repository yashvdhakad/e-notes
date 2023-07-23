export const Button = ({ cta, clickHandler }) => { 
    return (
        <button onClick={clickHandler} className={`px-6 py-3 rounded-lg bg-slate-400 hover:bg-orange-500 text-slate-900 text-base font-semibold transition-all hover:scale-95`} type="submit">{cta}</button>
        //  ${cta === "Edit" || cta === "Delete" || cta === "Delete All" ? "border border-orange-400 bg-transparent text-orange-400 hover:border-orange-500 hover:text-slate-900" : ""}
    )
}