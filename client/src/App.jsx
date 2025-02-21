import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import LoginPage from './Pages/HomePage'
import ServicesPage from './Pages/ServicesPage'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import LoginPage from './Pages/AuthPages/LoginPage'
import SignupPage from './Pages/AuthPages/SignupPage'
import ForgetPassword from './Pages/AuthPages/ForgetPassword'
import ResetPassword from './Pages/AuthPages/ResetPassword'
import PrivateRoute from './Components/Routes/PrivateRoute'

// Set default headers
import axios from 'axios'
import { useSelector } from 'react-redux'
import Dashboard from './Pages/User/Dashboard'

const App = () => {

  const { token } = useSelector((state) => state.auth)
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : '';
  }, [token]);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />

        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
        </Route>

        {/* Auth Routes */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
      </Routes>
    </>
  )
}

export default App