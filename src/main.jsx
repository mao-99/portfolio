import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'\
import Home from './home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Blog from './components/blog.jsx'
import Projects from './components/projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
