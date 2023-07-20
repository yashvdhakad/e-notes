"use client";
import { createContext, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';

export const NoteContext = createContext()

const ContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(true)
  const [notes, setNotes] = useState([])

  // Create note
  const addNoteAPI = async () => {
    try {
      const response = await axios.post("/api/notes/create", notes)
      console.log("Added note successfully", response.data)
      toast.success("Note added successfully", {position: "bottom-center"})
    } catch (error) {
      console.log("Adding note failed", error.message)
      toast.error(error.message, {position: "bottom-center"})
    }
  }
  
  // Delete all note
  const deleteAllNoteAPI = async () => {
    try {
      const response = await axios.delete("/api/notes/delete-all", notes)
      console.log("All notes deleted successfully", response.data)
      toast.success("All notes deleted successfully", {position: "bottom-center"})
    } catch (error) {
      console.log("Deleting all notes failed", error.message)
      toast.error(error.message, {position: "bottom-center"})
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI }}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;