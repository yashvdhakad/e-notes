"use client";
import { createContext, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';

export const NoteContext = createContext()

const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState([])

  const tags = ["urg! && imp", "!urg && imp", "do || die"]

  const [notes, setNotes] = useState([])

  const [editToggle, setEditToggle] = useState(true)

  const [newtitle, setNewTitle] = useState("")
  const [newdescription, setNewDescription] = useState("")
  const [newtag, setNewTag] = useState("")

  // Create note
  const addNoteAPI = async () => {
    try {
      const response = await axios.post("/api/notes/create", { title, description, tag })
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  // Read/Get notes
  const getNoteAPI = async () => {
    try {
      const response = await axios.get("/api/notes/get")
      setNotes(response.data.note)
      toast.success(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  // Update note
  const updateNoteAPI = async (id) => {
    try {
      const response = await axios.put(`/api/notes/updatenote/${id}`, { newtitle, newdescription, newtag })
      // console.log(response.data.note)
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
    <NoteContext.Provider value={{ notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI, getNoteAPI, deleteNoteAPI, title, setTitle, description, setDescription, tag, setTag, tags, updateNoteAPI, newtitle, setNewTitle, newdescription, setNewDescription, newtag, setNewTag }}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;