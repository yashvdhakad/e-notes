"use client";
const ThemeToggle = ({color}) => {
    return (
        <div className={`w-8 h-8 rounded-full bg-${color} cursor-pointer transition-all hover:scale-95 border`}></div>
    )
}

export default ThemeToggle