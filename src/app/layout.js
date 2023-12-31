import ContextProvider from './context/noteContext'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'eNotes | Note whenever & wherever',
  description: 'The eNotes App is a simple and user-friendly note-taking application that allows users to create, organize, and manage their notes efficiently.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
