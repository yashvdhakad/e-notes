"use client";
import { useContext, useEffect } from "react";
import { NoteContext } from "../context/noteContext";

const page = () => {
    const { verifyEmailAPI, urlToken, setUrlToken } = useContext(NoteContext);
    
    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];
        setUrlToken(urlToken)
    }, [])
    
    useEffect(()=>{
        verifyEmailAPI();
    }, [urlToken])

    return (
        <div>Email verification pending...</div>
    )
}

export default page