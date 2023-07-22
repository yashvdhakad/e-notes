import Main from './components/Main'
import Nav from './components/Nav'

export default function Home() {
  return (
    <section className='max-w-screen-xl lg:h-screen m-auto px-20 flex flex-col items-center'>
      <Nav />
      <Main />
    </section>
  )
}
