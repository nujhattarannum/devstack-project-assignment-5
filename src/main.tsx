import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technology from './components/Technology'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Navbar/>
  <Banner/>
  <Technology/>
   <h2>banner</h2>
   <h2>herosection</h2>
   
     <h2>footer</h2>
  </StrictMode>,
)
