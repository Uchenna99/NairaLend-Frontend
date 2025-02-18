import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Toaster } from 'sonner'


function App() {

  return (
    <>
      <div className="nairalender-app">
        <Toaster richColors position='top-right'/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
