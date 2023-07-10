"use client"

import { useState } from "react"
import { Button } from "./Buttons"
import Notes from "./Notes"

const Main = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState([])

    const [editToggle, setEditToggle] = useState(true)

    const [notes, setNotes] = useState([
        {
            title: "Bugs to be fixed",
            description: "editToggle fix, ThemeToggle Fix, input section blank on onclick, tag array wiring",
            tag: ["work", "personal", "general"]
        }
    ])

    const addNoteHandler = () => {
        title === "" || description === "" || tag === "" ? "" : setNotes((arr) => [...arr, { title, description, tag }])
    }

    const deleteAllHandler = () => {
        setNotes([]);
    }

    return (
        <>
            {/* Input */}
            <section className='lg:w-1/2 h-full flex flex-col justify-center items-center space-y-6 text-xl'>
                <p>Happy eNoting 😎</p>
                <input onChange={(e) => setTitle(e.target.value)} className='py-3 px-6 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60' type="text" name="title" placeholder="Title" />
                <textarea onChange={(e) => setDescription(e.target.value)} className='px-6 py-3 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60' name="description" placeholder="Description" cols="24" rows="5"></textarea>
                <div className='p-2 bg-indigo-600 rounded-lg placeholder:text-indigo-200/60 flex space-x-2'>
                    {
                        notes.map((note) => {
                            return note.tag.map((t, i) => {
                                const tagHandler = () => {
                                    setTag((arr) => [...arr, t])
                                }
                                return <div key={i} onClick={tagHandler} className="py-3 px-6 rounded-lg bg-indigo-700 cursor-pointer border border-transparent hover:bg-indigo-800 focus:outline active:bg-indigo-900 select-none">{t}</div>
                            })
                        })
                    }
                </div>
                <div className="flex space-x-6">
                    <Button clickHandler={addNoteHandler} cta="Add Note" />
                    <Button clickHandler={deleteAllHandler} cta="Delete All" />
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