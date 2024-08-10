import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Home() {
  useEffect(()=>{
    document.title = "Home | Mubarak"
}, [])
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='homeSection'>
        <h1>About Me</h1>
        <p>Hi, I'm Mubarak Odufade, a software developer passionate about applications and building system solutions to everyday problems.</p>
        <h1>Socials</h1>
        <p>Email: <a href="mailto:mubarakodufade@gmail.com">mubarakodufade@gmail.com</a></p>
        <p>Github: <a href="https://www.github.com/mao-99">mao-99</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/modufade">Mubarak Odufade</a></p>
        <p>Discord: mao.nda</p>
      </section>
    </>
  )
}
