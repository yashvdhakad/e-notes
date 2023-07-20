"use client";
import { createContext, useState } from "react";

export const NoteContext = createContext()

const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [noteColor, setNoteColor] = useState("")

  return (
    <NoteContext.Provider value={{user, setUser, noteColor, setNoteColor}}>
        {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;