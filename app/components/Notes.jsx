"use client";
import { useContext, useState } from 'react';
import { Button } from './Buttons'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import copyIcon from '../../assets/svg/copy-solid.svg'
import { toast } from 'react-hot-toast';
import { NoteContext } from '../../context/noteContext';

const Notes = ({ note, i, editHandler, deleteHandler, editToggle }) => {
    const context = useContext(NoteContext)
    const { newtitle, setNewTitle, newdescription, setNewDescription, newtag, setNewTag} = context;

    const date = new Date(note.createdAt);
    let day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear();
    let createdDate = `${day}/${month}/${year}`;
    let hours = date.getHours(), minutes = date.getMinutes()
    let createdTime = `${hours}:${minutes}`

    const colorArr = ["bg-yellow-600", "bg-red-600", "bg-black"]

    return (
        // Note Card
        <div className="relative w-full p-2 rounded-lg bg-slate-600 flex flex-col space-y-2">
            {/* head */}
            <div className='flex justify-between items-center'>
                <div className='text-sm font-medium'>{createdDate}</div>
                {!editToggle ? <p className='text-sm text-orange-500 font-medium'>*Editing Mode On*</p> : ""}
                <div className='text-sm font-medium'>{createdTime}</div>
            </div>

            {/* title */}
            <input onChange={(e) => setNewTitle(e.target.value)} disabled={editToggle} className="text-xl font-medium py-3 px-6 rounded-lg bg-slate-700" value={note.title} />

            {/* description */}
            <textarea onChange={(e) => setNewDescription(e.target.value)} disabled={editToggle} className={`${editToggle ? "resize-none" : ""} text-lg py-3 px-6 rounded-lg bg-slate-700`} value={note.description} rows={4} />

            <Image
                className='invert opacity-60 hover:opacity-100 absolute right-6 top-28 cursor-pointer transition-all hover:scale-95'
                src={copyIcon}
                alt="copy"
                width={20}
                height={20}
                onClick={() => { navigator.clipboard.writeText(note.description); toast.success("Copied to clipboard", { position: "bottom-center" }) }}
            />

            {/* Tags */}
            <div className='flex space-x-2'>
                {
                    note.tag.map((t, i) => {
                        const tagHandler = () => { }

                        return <div key={i} onClick={tagHandler} className={`py-3 px-6 rounded-lg bg-slate-700 border border-transparent focus:outline select-none ${editToggle ? "" : "hover:bg-slate-800 active:bg-slate-900 cursor-pointer"} ${t === "urgent" ? "bg-red-800" : ""}`}>{t}</div>
                    })
                }
            </div>

            {/* Button & ThemeToggle */}
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