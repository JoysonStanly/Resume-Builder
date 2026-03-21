import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../app/features/authSlice'

const AuthCallback = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (!token) {
            navigate('/?state=login', { replace: true })
            return
        }

        localStorage.setItem('token', token)
        dispatch(login(token))
        navigate('/dashboard', { replace: true })
    }, [dispatch, navigate])

    return (
        <div className='min-h-screen flex items-center justify-center text-gray-600'>
            Signing you in...
        </div>
    )
}

export default AuthCallback