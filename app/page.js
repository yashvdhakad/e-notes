import Nav from './components/SC/Nav'
import Footer from './components/SC/Footer'
import Main from './components/CC/Main'

export default function Home() {
  return (
    <section className='max-w-screen-xl h-screen m-auto'>
      <header className='relative'>
        <Nav />
      </header>

      <main className='h-full lg:px-20 flex justify-between items-center'>
        <Main />
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </section>
  )
}
