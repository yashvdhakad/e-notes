"use client";
// import { NoteContext } from "@/app/context/noteContext";
import { useContext } from "react";

const ThemeToggle = ({color, clickHandler}) => {
    return (
        <button onClick={clickHandler} className={`w-6 h-6 rounded-full ${color} transition-all hover:scale-95`}></button>
    )
}

export default ThemeToggle