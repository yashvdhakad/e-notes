"use client"

import { useContext, useState, useEffect } from "react"
import { Button } from "./Buttons"
import Notes from "./Notes"
import { NoteContext } from "../context/noteContext"
import { Toaster } from 'react-hot-toast'

const Main = () => {
    const { initialNote, tags, notes, setNotes, editToggle, setEditToggle, addNoteAPI, deleteAllNoteAPI, getNoteAPI, deleteNoteAPI, updateNoteAPI } = useContext(NoteContext)

    useEffect(() => {
        getNoteAPI();
    }, [])

    const addNoteHandler = () => {
        // note.title === "" || note.description === "" || note.tag === "" ? "" : 
        setNotes((arr) => [...arr, { title: initialNote.title, description: initialNote.description, tag: initialNote.tag }]);

        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            addNoteAPI(note);
        }

        // getNoteAPI();
    }

    const deleteAllHandler = () => {
        setNotes([]);
        deleteAllNoteAPI();
    }

    const onChangeHandler = (e) => {
        initialNote[e.target.name] = e.target.value
    }

    return (
        <main className="flex flex-col lg:flex-row lg:justify-center justify-center items-center lg:overflow-hidden">
            <section className="font-bold"><Toaster /></section>
            {/* Input */}
            <section className='h-full lg:py-40 py-20 lg:px-0 flex flex-col justify-start items-center space-y-6 text-xl'>
                <p className="">Happy e-Noting 🥸</p>

                {/* title */}
                <input onChange={onChangeHandler} className='w-full py-3 px-6 bg-slate-600 rounded-lg placeholder:text-slate-200/60 focus:outline-none' type="text" name="title" placeholder="Title" value={initialNote.title} />

                {/* description */}
                <textarea onChange={onChangeHandler} className='px-6 py-3 bg-slate-600 rounded-lg placeholder:text-slate-200/60 focus:outline-none' name="description" placeholder="Description" cols="24" rows="5" value={initialNote.description} />

                {/* Tags */}
                <div className='p-2 bg-slate-600 rounded-lg placeholder:text-slate-200/60 flex lg:flex-nowrap flex-wrap justify-center items-center gap-2 relative'>
                    <div className="absolute -top-4 left-0 bg-slate-800 text-slate-200 px-2 py-0.5 rounded-tl-lg rounded-br-lg text-xs">TAGS</div>
                    {
                        tags.map((t, i) => {
                            const tagHandler = () => {
                                initialNote.tag.push(t)
                            }

                            return <div key={i} onClick={tagHandler} className="py-3 px-6 rounded-lg bg-slate-700 cursor-pointer hover:bg-slate-800 active:bg-slate-900 select-none">{t}</div>
                        })
                    }
                </div>

                {/* Buttons */}
                <div className="flex space-x-6">
                    <Button clickHandler={addNoteHandler} cta="Add Note" />
                    <Button clickHandler={deleteAllHandler} cta="Delete All" />
                </div>
            </section>

            {/* Output */}
            <section className='h-full lg:py-40 py-20 lg:px-20 flex flex-col justify-start items-center space-y-6 overflow-y-scroll scroll-smooth'>
                {
                    notes.map((note, i) => {
                        const editHandler = () => {
                            editToggle ? setEditToggle(false) : setEditToggle(true);
                            !editToggle && updateNoteAPI(note._id) && updateNoteHandler();
                        }

                        const updateNoteHandler = () => { };

                        const deleteHandler = () => {
                            setNotes(notes.toSpliced(i, 1))
                            alert("Are you sure?")
                            deleteNoteAPI(note._id);
                        }

                        return <Notes key={i} note={note} i={i} editHandler={editHandler} deleteHandler={deleteHandler} editToggle={editToggle} />
                    })
                }
            </section>
        </main>
    )
}

export default Main