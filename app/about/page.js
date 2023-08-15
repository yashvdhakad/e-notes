import Nav from '../components/Nav'

const page = () => {
  return (
    <>
    <Nav/>
    <div className="bg-slate-900 text-slate-200 h-screen flex items-center justify-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our dark-themed About page. We are a team of passionate individuals who love exploring the depths of darkness and embracing the beauty it holds. Our mission is to bring the dark side to life through our creations.
        </p>
        <p className="text-lg mb-6">
          With Next.js and Tailwind CSS, we have the power to build stunning websites and applications that reflect our love for the dark aesthetic. We combine the simplicity and efficiency of Next.js with the flexibility and utility of Tailwind CSS to create a seamless development experience.
        </p>
        <p className="text-lg mb-6">
          Our team is dedicated to pushing the boundaries of design and technology. We believe that darkness can be elegant, mysterious, and captivating. Through our projects, we aim to inspire and intrigue our audience, inviting them to explore the beauty that lies within the shadows.
        </p>
        <p className="text-lg mb-6">
          Whether you are a fellow dark enthusiast or simply curious about our work, we invite you to join us on this journey. Explore our website, check out our projects, and feel free to reach out if you have any questions or collaborations in mind. Together, let's embrace the darkness and create something extraordinary.
        </p>
      </div>
    </div>
    </>
  )
}

export default page