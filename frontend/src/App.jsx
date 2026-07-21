
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { lazy , Suspense } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

const Challenges = lazy(()=> import('./pages/Challenges'))
const Challengedetails = lazy(()=> import('./pages/Challengedetails'))
const Dashboard = lazy(()=>import('./pages/Dashboard'))
const Login = lazy(()=>import('./pages/Login'))
const Profile = lazy(()=> import('./pages/Profile'))
const Leaderboard = lazy(()=>import('./pages/Leaderboard'))



const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Navbar />

      <Suspense 
      fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}
      >
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/challenges' element={<Challenges/>} />
          <Route path='/challengedetails/:id' element={<Challengedetails/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>} />
        </Routes>
      </Suspense>

      


      <Footer/>
        
    </div>
  )
} 

export default App