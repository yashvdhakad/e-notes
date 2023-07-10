"use client";
import { useState } from 'react';
import { Button } from './Buttons'
import ThemeToggle from './ThemeToggle'

const Notes = ({ note, i, editHandler, deleteHandler, editToggle }) => {
    const [newtitle, setNewTitle] = useState("")
    const [newdescription, setNewDescription] = useState("")
    const [newtag, setNewTag] = useState("")

    const date = new Date();
    let day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    const colorArr = ["yellow-600", "red-600", "blue-600"]

    return (
        // Note Card
        <div className="p-2 rounded-lg bg-indigo-600 flex flex-col space-y-2">
            <div className='flex justify-between items-center'>
                <div className='text-sm font-medium'>{currentDate}</div>
                {!editToggle ? <p className='text-sm text-orange-500 font-medium'>*Editing Mode On*</p> : ""}
            </div>
            <input onChange={(e) => setNewTitle(e.target.value)} disabled={editToggle} className="text-xl font-medium py-3 px-6 rounded-lg bg-indigo-700" value={`${i + 1}. ${note.title}`} />
            <textarea onChange={(e) => setNewDescription(e.target.value)} disabled={editToggle} className={`${editToggle ? "" : "resize-none"} text-lg py-3 px-6 rounded-lg bg-indigo-700`} value={note.description} rows={4} />
            <div className='flex space-x-2'>
                {
                    note.tag.map((t, i) => {
                        const tagHandler = () => { }

                        return <div key={i} onClick={tagHandler} className="py-3 px-6 rounded-lg bg-indigo-700 cursor-pointer border border-transparent hover:bg-indigo-800 focus:outline active:bg-indigo-900 select-none">{t}</div>
                    })
                }
            </div>

            <div className='flex justify-start items-center space-x-2'>
                <Button clickHandler={editHandler} cta={!editToggle ? "Save" : "Edit"} />
                <Button clickHandler={deleteHandler} cta="Delete" />
                {
                    colorArr.map((color, i) => {
                        return <ThemeToggle key={i} color={color} />
                    })
                }
            </div>
        </div>
    )
}

export default Notes