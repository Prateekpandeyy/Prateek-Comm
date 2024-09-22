import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route>
    <Route path = "/" Component={Hero} />
 
  </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
