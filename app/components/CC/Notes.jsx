"use client";
import { useState } from 'react';
import { Button } from './Buttons'
import ThemeToggle from './ThemeToggle'

const Notes = ({ note, i, editHandler, deleteHandler, editToggle }) => {
    const [newtitle, setNewTitle] = useState("")
    const [newdescription, setNewDescription] = useState("")
    const [newtag, setNewTag] = useState("")

    return (
        // Note Card
        <div className="p-2 rounded-lg bg-indigo-600 flex flex-col space-y-2">
            {!editToggle ? <p className='text-sm text-orange-600 font-medium'>*Editing Mode ON*</p> : ""}
            <input onChange={(e) => setNewTitle(e.target.value)} disabled={editToggle} className="text-xl font-medium py-3 px-6 rounded-lg bg-indigo-700" value={note.title} />
            <textarea onChange={(e) => setNewDescription(e.target.value)} disabled={editToggle} className="resize-none text-lg py-3 px-6 rounded-lg bg-indigo-700" value={note.description} />
            <input onChange={(e) => setNewTag(e.target.value)} disabled={editToggle} className="w-fit py-1 px-2 rounded-lg bg-indigo-700" value={note.tag} />
            <div className=' flex justify-start items-center space-x-2'>
                <Button clickHandler={editHandler} cta="Edit" />
                <Button clickHandler={deleteHandler} cta="Delete" />
                <ThemeToggle color="black" />
                <ThemeToggle color="white" />
                <ThemeToggle color="yellow-500" />
                <ThemeToggle color="green-600" />
            </div>
        </div>
    )
}

export default Notes