"use client";

import { useContext, useEffect } from "react"
import { NoteContext } from "../context/noteContext"
import { Toaster } from 'react-hot-toast'
import Image from "next/image";
import dp from '../assets/dp.png'
import Nav from '../components/Nav'

const page = () => {
  const { userProfileData, profileAPI } = useContext(NoteContext)

  useEffect(() => {
    profileAPI();
  }, [])

  return (
    <>
    <Nav/>
      <div className="bg-slate-900 text-slate-100 min-h-screen mt-20">
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h2>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Profile</h3>
            <div className="border border-slate-700 bg-slate-800 shadow rounded-lg p-4">
              <div className="flex items-center">
                <Image
                  className="rounded-full"
                  src={dp}
                  alt="Profile Picture"
                  width="48"
                  height="48"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{userProfileData.name}</h4>
                  <p className="text-slate-500">Software Engineer</p>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="text-md font-bold">Contact Information</h5>
                <ul className="mt-2 text-slate-500">
                  <li>Email: {userProfileData.email}</li>
                  <li>Phone: +917017174456</li>
                  <li>Address: Jaipur, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
            <ul className="border border-slate-700 bg-slate-800 shadow rounded-lg p-4">
              <li className="flex items-center space-x-4">
                <span className="bg-blue-500 rounded-full w-8 h-8"></span>
                <p className="">John Doe logged in</p>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <span className="bg-green-500 rounded-full w-8 h-8"></span>
                <p className="">Jane Smith created a new project</p>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <span className="bg-yellow-500 rounded-full w-8 h-8"></span>
                <p className="">Alex Johnson updated the settings</p>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Tasks</h3>
            <ul className="border border-slate-700 bg-slate-800 shadow rounded-lg p-4">
              <li className="flex items-center space-x-4">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                <p className="">Complete the project proposal</p>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                <p className="">Review the design mockups</p>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                <p className="">Prepare presentation slides</p>
              </li>
            </ul>
          </div>
        </main>

        <footer className="bg-slate-900 text-slate-100 py-4">
          <div className="container mx-auto px-4">
            <p className="text-center">
              &copy; {new Date().getFullYear()} YD. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default page