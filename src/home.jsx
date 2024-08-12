import { useState, useEffect } from 'react'
import './App.css'

export default function Home() {
  useEffect(()=>{
    document.title = "Home | Mubarak"
}, [])
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='homeSection'>
        <h1 className='homeHeader'>About Me</h1>
        <p className='bio'>
          Hi, I'm Mubarak Odufade, a full-stack developer and lifelong learner with a strong work ethic and a passion for building applications and solving problems.
          Driven by a deep commitment to excellence, I'm dedicated to using my programming skills to make a meaningful impact and support my family.
          This commitment has led me to secure key roles in IT, education, and tech fellowship programs, where I continue to grow and contribute.
        </p>
        <h1 className='homeHeader'>Socials</h1>
        <p>Email: <a href="mailto:mubarakodufade@gmail.com">mubarakodufade@gmail.com</a></p>
        <p>Github: <a href="https://www.github.com/mao-99">mao-99</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/modufade">Mubarak Odufade</a></p>
        <p>Discord: mao.nda</p>
      </section>
    </>
  )
}
