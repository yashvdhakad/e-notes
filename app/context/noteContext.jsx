"use client";
import { createContext, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation"

export const NoteContext = createContext()

const ContextProvider = ({ children }) => {
  const initialNote = { tag: [] }
  const [notes, setNotes] = useState([])
  const tags = ["urg!", "imp!", "do || die", "obsv"]
  const [editToggle, setEditToggle] = useState(true)
  const [newNote, setNewNote] = useState([{ title: "", description: "", tag: [] }])

  // TODO: add loading state, loader, component and buttons disable validations, filters in notes etc.
  
  const user = {};
  const router = useRouter();

  const [userProfileData, setUserProfileData] = useState({})

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

  // Create user
  const signupAPI = async () => {
    try {
      const response = await axios.post("/api/users/sign-up", user)
      response.data.success ? toast.success(response.data.message, { position: "bottom-center" }) && router.push("/login") : toast.error(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }
  
  // Login user
  const loginAPI = async () => {
    try {
      const response = await axios.post("/api/users/login", user)
      response.data.success ? toast.success(response.data.message, { position: "bottom-center" }) && router.push("/dashboard") : toast.error(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }
  
  // Logout user
  const logoutAPI = async () => {
    try {
      const response = await axios.get("/api/users/logout")
      response.data.success ? toast.success(response.data.message, { position: "bottom-center" }) && router.push("/login") : toast.error(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }
  
  // Profile user
  const profileAPI = async () => {
    try {
      const response = await axios.get("/api/users/profile")
      setUserProfileData(response.data.user)
      response.data.success ? toast.success(response.data.message, { position: "bottom-center" }) : toast.error(response.data.message, { position: "bottom-center" })
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  return (
    <NoteContext.Provider value={{ initialNote, tags, notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI, getNoteAPI, deleteNoteAPI, updateNoteAPI, newNote, setNewNote, user, signupAPI, loginAPI, logoutAPI, profileAPI, userProfileData }}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider;