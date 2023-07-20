"use client";
import { createContext, useState } from "react";

export const NoteContext = createContext()

const ContextProvider = ({children}) => {
  

  return (
    <NoteContext.Provider value={{}}>
        {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;