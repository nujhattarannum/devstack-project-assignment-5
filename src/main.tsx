import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technology from './components/Technology'
import type { ITechnology } from './types/techtype'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'


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
  <Suspense fallback ={ <div className =" font-bold text-4xl text-center">  Loading Technologies...</div>}>
  <Technology technologiesPromise={technologiesPromise}/>
  </Suspense>
  <Footer/>
   <ToastContainer/>
  </StrictMode>,
)
