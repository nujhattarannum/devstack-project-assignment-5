import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technology from './components/Technology'
import type { ITechnology } from './types/techtype'


const technologyFetch = async () : Promise<ITechnology[]> => {
   const response = await fetch("/technologies.json");
   const data = await response.json();
   return data;
}

const technologiesPromise =  technologyFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Navbar/>
  <Banner/>
  <Technology technologiesPromise={technologiesPromise}/>
   <h2>banner</h2>
   <h2>herosection</h2>
   
     <h2>footer</h2>
  </StrictMode>,
)
