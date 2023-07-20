"use client";
import { createContext, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';

export const NoteContext = createContext()

const ContextProvider = ({ children }) => {
  const [editToggle, setEditToggle] = useState(true)
  const [notes, setNotes] = useState([])
  const [showNote, setShowNote] = useState([])

  // Create note
  const addNoteAPI = async () => {
    try {
      const response = await axios.post("/api/notes/create", notes)
      toast.success(response.data.message, {position: "bottom-center"})
    } catch (error) {
      toast.error(error.message, {position: "bottom-center"})
    }
  }

  // Read/Get notes
  const getNoteAPI = async () => {
    try {
      const response = await axios.get("/api/notes/get")
      setShowNote(response.data.note)
      console.log(response.data.note)
      toast.success(response.data.message, {position: "bottom-center"})
    } catch (error) {
      toast.error(error.message, {position: "bottom-center"})
    }
  }
  
  // Delete all note
  const deleteAllNoteAPI = async () => {
    try {
      const response = await axios.delete("/api/notes/delete-all")
      toast.success(response.data.message, {position: "bottom-center"})
    } catch (error) {
      toast.error(error.message, {position: "bottom-center"})
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI, showNote, setShowNote, getNoteAPI }}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;