import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div class="min-h-screen flex flex-col w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <Navbar />
    <Manager />
    <Footer />
  </div>
  )
}

export default App
