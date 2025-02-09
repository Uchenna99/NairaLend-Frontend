import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'


function App() {
  const [activeUser, setActiveUser] = useState(false);

  useEffect(()=>{
    const checkUser = ()=>{
      const user = localStorage.getItem('nairaLender');
      if(!user){
        console.log('Error: Cannot find user');
      }else{
        setActiveUser(true);
      }
    }
    checkUser();
  },[])

  return (
    <>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={activeUser? <Dashboard/> : <Signup/>} />
          <Route path='/login' element={activeUser? <Dashboard/> : <Login/>} />
          <Route path='/dashboard' element={activeUser? <Dashboard/> : <Login/>} />
        </Routes>
    </>
  )
}

export default App
