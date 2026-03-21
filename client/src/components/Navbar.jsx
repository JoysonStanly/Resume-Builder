import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {
   const {user} = useSelector(state => state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [showLogoutPopup, setShowLogoutPopup] = useState(false)

    const handleLogoutClick = () => {
        setShowLogoutPopup(true)
    }

    const confirmLogout = () => {
        setShowLogoutPopup(false)
        navigate('/')
        dispatch(logout())
    }

    const cancelLogout = () => {
        setShowLogoutPopup(false)
    }

  return (
    <div className='shadow bg-white'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        <Link to='/'>
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        <div className='flex items-center gap-4 text-sm'>
            <p className='max-sm:hidden'>Hi, {user?.name}</p>
            <button onClick={handleLogoutClick} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
        </div>
      </nav>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className='fixed inset-0 flex items-center justify-center z-50 pointer-events-none'>
          <div className='bg-white rounded-xl shadow-2xl p-8 max-w-sm mx-4 border border-green-200 animate-in fade-in zoom-in duration-300 pointer-events-auto'>
            <div className='flex items-center justify-center mb-4'>
              <div className='w-12 h-12 rounded-full bg-green-100 flex items-center justify-center'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                </svg>
              </div>
            </div>
            <h2 className='text-xl font-semibold text-gray-900 mb-2 text-center'>Confirm Logout</h2>
            <p className='text-gray-600 text-sm mb-8 text-center'>Are you sure you want to logout from your account?</p>
            <div className='flex gap-3 justify-center'>
              <button 
                onClick={cancelLogout}
                className='px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200'
              >
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                className='px-6 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200 active:scale-95'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar