"use client";
import { useContext, useEffect } from "react";
import { NoteContext } from "../context/noteContext";
import { Toaster } from 'react-hot-toast'

const page = () => {
    const { verifyEmailAPI, urlToken, setUrlToken } = useContext(NoteContext);

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setUrlToken(urlToken)
    }, [])

    useEffect(() => {
        verifyEmailAPI();
    }, [urlToken])

    return (
        <>
            <section className="font-bold"><Toaster /></section>
            <div>Email verification pending...</div>
        </>
    )
}

export default page