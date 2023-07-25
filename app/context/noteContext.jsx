"use client";
import { createContext, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';

export const NoteContext = createContext()

const ContextProvider = ({ children }) => {
  const initialNote = { tag: [] }
  const [notes, setNotes] = useState([])
  const tags = ["urg!", "imp!", "do || die", "obsv"]
  const [editToggle, setEditToggle] = useState(true)
  const [newNote, setNewNote] = useState([{ title: "", description: "", tag: [] }])

  // Create note
  const addNoteAPI = async () => {
    try {
      const response = await axios.post("/api/notes/create", { title: initialNote.title, description: initialNote.description, tag: initialNote.tag })
      setNotes(notes.concat(response.data.note))
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error("Please fill all fields above.", { position: "bottom-center" })
    }
  }

  // Read/Get notes
  const getNoteAPI = async () => {
    try {
      const response = await axios.get("/api/notes/get")
      setNotes(notes.concat(response.data.note))
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  // Update note
  const updateNoteAPI = async (id) => {
    try {
      const response = await axios.put(`/api/notes/update/${id}`, newNote[0])
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  // Delete note
  const deleteNoteAPI = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/delete/${id}`)
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  // Delete all note
  const deleteAllNoteAPI = async () => {
    try {
      const response = await axios.delete("/api/notes/delete-all")
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  return (
    <NoteContext.Provider value={{ initialNote, tags, notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI, getNoteAPI, deleteNoteAPI, updateNoteAPI, newNote, setNewNote }}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;