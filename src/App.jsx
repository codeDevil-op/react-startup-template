
import './App.css'
import { lazy,Suspense } from 'react'
import About from './components/About'
import Loader from './components/loader/Loader'

const Home = lazy(()=>import('./components/Home'))

function App() {
  

  return (
    <>
     <h1>hey i am lazy loading</h1>
     <Loader/>
     <Suspense fallback=<Loader/>>
      <Home/>
     </Suspense>
    </>
  )
}

export default App
