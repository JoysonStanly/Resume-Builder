import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from '../utils/customToast'

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/api/auth/google'
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <form onSubmit={handleSubmit} className="sm:w-[380px] w-full text-center border border-gray-200 rounded-2xl px-8 py-10 bg-white shadow-sm">

                <h1 className="text-gray-900 text-2xl font-semibold">{state === "login" ? "Welcome back" : "Create account"}</h1>
                <p className="text-gray-400 text-sm mt-1.5 mb-7">Please {state === "login" ? "sign in" : "sign up"} to continue</p>

                {/* Google Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 mb-5"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.013 17.64 11.706 17.64 9.2z" fill="#4285F4"/>
                        <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                        <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-gray-100" />
                    <span className="text-xs text-gray-400 font-medium">or</span>
                    <div className="flex-1 h-px bg-gray-100" />
                </div>

                {state !== "login" && (
                    <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 gap-2.5 mb-3 focus-within:border-green-400 transition-colors">
                        <User2Icon size={15} color='#9CA3AF'/>
                        <input type="text" name="name" placeholder="Full name" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 gap-2.5 mb-3 focus-within:border-green-400 transition-colors">
                    <Mail size={14} color="#9CA3AF" />
                    <input type="email" name="email" placeholder="Email address" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 gap-2.5 focus-within:border-green-400 transition-colors">
                    <Lock size={14} color="#9CA3AF"/>
                    <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.password} onChange={handleChange} required />
                </div>

                {state === "login" && (
                    <div className="mt-3 text-right">
                        <button className="text-xs text-green-500 hover:underline" type="reset">Forgot password?</button>
                    </div>
                )}

                <button type="submit" className="mt-4 w-full h-11 rounded-full text-white text-sm font-medium bg-green-500 hover:bg-green-600 transition-colors">
                    {state === "login" ? "Sign in" : "Create account"}
                </button>

                <p className="text-gray-400 text-sm mt-5">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button type="button" onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-green-500 hover:underline font-medium bg-transparent border-none cursor-pointer p-0">
                        {state === "login" ? "Sign up" : "Sign in"}
                    </button>
                </p>

            </form>
        </div>
    )
}

export default Login