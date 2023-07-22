"use client";
// import { NoteContext } from "@/app/context/noteContext";
import { useContext } from "react";

const ThemeToggle = ({color}) => {
    return (
        <div className={`w-8 h-8 rounded-full ${color} cursor-pointer transition-all hover:scale-95`}></div>
    )
}

export default ThemeToggle