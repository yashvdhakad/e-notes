"use client";
import { useContext } from 'react';
import { Button } from './Buttons'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import copyIcon from '../assets/svg/clipboard-fill.svg'
import { toast } from 'react-hot-toast';
import { NoteContext } from '../context/noteContext';

const Notes = ({ note, i, editHandler, deleteHandler, editToggle }) => {
    const context = useContext(NoteContext)
    const { newNote } = context;

    // Date & Time
    const date = new Date(note.createdAt);
    let day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear();
    let createdDate = `${day}/${month}/${year}`;
    let hours = date.getHours(), minutes = date.getMinutes()
    let createdTime = `${hours}:${minutes}`

    // Theme colors
    const colorArr = ["bg-rose-700", "bg-indigo-800", "bg-zinc-900"]

    const onChangeHandler = (e) => {
        for (let i = 0; i < newNote.length; i++) {
            const newNoteElement = newNote[i];
            newNoteElement[e.target.name] = e.target.value
        }
    }

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
            <input onChange={onChangeHandler} disabled={editToggle} className="text-xl font-medium py-3 px-6 rounded-lg bg-slate-700 shadow-inner shadow-slate-800 focus:outline-none" value={editToggle ? note.title : newNote.title} type='text' name="title" />


            {/* description */}
            <textarea onChange={onChangeHandler} disabled={editToggle} className={`shadow-inner shadow-slate-800 ${editToggle ? "resize-none" : ""} text-lg py-3 px-6 rounded-lg bg-slate-700 focus:outline-none`} value={editToggle ? note.description : newNote.description} rows={6} name='description' />

            <Image
                className='invert opacity-40 hover:opacity-100 absolute right-6 top-60 cursor-pointer transition-all hover:scale-95'
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
            <div className='flex justify-between items-end'>
                <Button clickHandler={editHandler} cta={!editToggle ? "Save" : "Edit"} />
                <div className="flex gap-2">
                {/* <div className="absolute -top-4 left-0 bg-slate-800 text-slate-200 px-2 py-0.5 rounded-tl-lg rounded-br-lg text-xs">TAGS</div> */}
                    {
                        colorArr.map((color, i) => {
                            const clickHandler = () => {
                                // color === "bg-red-600"
                            }

                            return <ThemeToggle clickHandler={clickHandler} key={i} color={color} />
                        })
                    }
                </div>
                <Button clickHandler={deleteHandler} cta="Delete" />
            </div>
        </div>
    )
}

export default Notes