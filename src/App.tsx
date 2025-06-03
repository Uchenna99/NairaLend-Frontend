import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/UserDashboard/Dashboard'
import { Toaster } from 'sonner'
import TakeLoan from './components/TakeLoan/TakeLoan'
import BankAccounts from './components/BankAccounts/BankAccounts'
import PaymentCards from './components/PaymentCards/PaymentCards'
import Faq from './components/Faq'


function App() {

  return (
    <>
      <div className="nairalender-app">
        <Toaster richColors position='top-right'/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />

          <Route path='/dashboard' element={<Dashboard/>} >
            <Route path='loan' element={<TakeLoan/>} />
            <Route path='bank-accounts' element={<BankAccounts/>} />
            <Route path='payment-cards' element={<PaymentCards/>} />
            <Route path='faq' element={<Faq/>} />
            <Route path='settings' />
          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App
