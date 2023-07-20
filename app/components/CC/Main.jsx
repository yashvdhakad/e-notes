"use client"

import { useState } from "react"
import { Button } from "./Buttons"
import Notes from "./Notes"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState([])

    const tags = ["work", "personal", "life"]

    const [editToggle, setEditToggle] = useState(true)

    const [notes, setNotes] = useState([])

    const addNoteAPI = async () => {
        try {
            const response = await axios.post("/api/notes/create", notes)
            console.log("Added note successfully", response.data)
            toast.success("Note added successfully")
        } catch (error) {
            console.log("Adding note failed", error.message)
            toast.error(error.message)
        }
    }

    const addNoteHandler = () => {
        title === "" || description === "" || tag === "" ? "" : setNotes((arr) => [...arr, { title, description, tag }])
        setTitle("")
        setDescription("")
        addNoteAPI();
    }

    const deleteAllHandler = () => {
        setNotes([]);
    }

    return (
        <>
            {/* Input */}
            <section className='lg:w-1/2 h-full flex flex-col justify-center items-center space-y-6 text-xl'>
                <p className="">Happy eNoting 😎</p>
                <input onChange={(e) => setTitle(e.target.value)} className='py-3 px-6 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60 focus:outline-none' type="text" name="title" placeholder="Title" value={title} />
                <textarea onChange={(e) => setDescription(e.target.value)} className='px-6 py-3 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60 focus:outline-none' name="description" placeholder="Description" cols="24" rows="5" value={description} />

                {/* Tags */}
                <div className='p-2 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60 flex space-x-2'>
                    {
                        tags.map((t, i) => {
                            const tagHandler = () => {
                                setTag([t])
                            }

                            return <div key={i} onClick={tagHandler} className="py-3 px-6 rounded-lg bg-indigo-700 cursor-pointer hover:bg-indigo-800 active:bg-indigo-900 select-none">{t}</div>
                        })
                    }
                </div>
                {/* Buttons */}
                <div className="flex space-x-6">
                    <Button clickHandler={addNoteHandler} cta="Add Note" />
                    <Button clickHandler={deleteAllHandler} cta="Delete All" />
                    <Toaster />
                </div>
            </section>

            {/* Output */}
            <section className='lg:w-1/2 h-full py-40 px-20 flex flex-col justify-start items-center space-y-6 overflow-y-scroll'>
                {
                    notes.map((note, i) => {
                        const editHandler = () => {
                            editToggle ? setEditToggle(false) : setEditToggle(true);
                        }

                        const deleteHandler = () => {
                            setNotes(notes.toSpliced(i, 1))
                        }

                        return <Notes key={i} note={note} i={i} editHandler={editHandler} deleteHandler={deleteHandler} editToggle={editToggle} />
                    })
                }
            </section>
        </>
    )
}

export default Main