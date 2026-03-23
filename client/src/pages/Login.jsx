import { Eye, EyeOff, Lock, Mail, User2Icon } from 'lucide-react'
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
    const [showPassword, setShowPassword] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <form onSubmit={handleSubmit} className="sm:w-[380px] w-full text-center border border-gray-200 rounded-2xl px-8 py-10 bg-white shadow-sm">

                <h1 className="text-gray-900 text-2xl font-semibold">{state === "login" ? "Welcome back" : "Create account"}</h1>
                <p className="text-gray-400 text-sm mt-1.5 mb-7">Please {state === "login" ? "sign in" : "sign up"} to continue</p>

                {state !== "login" && (
                    <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 gap-2.5 mb-3 focus-within:border-green-400 transition-colors">
                        <User2Icon size={15} color='#9CA3AF'/>
                        <input type="text" name="name" placeholder="Full name" autocomplete="name" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 gap-2.5 mb-3 focus-within:border-green-400 transition-colors">
                    <Mail size={14} color="#9CA3AF" />
                    <input type="email" name="email" placeholder="Email address" autocomplete="email" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="flex items-center w-full bg-white border border-gray-200 h-11 rounded-full overflow-hidden pl-5 pr-4 gap-2.5 focus-within:border-green-400 transition-colors">
                    <Lock size={14} color="#9CA3AF"/>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="border-none outline-none ring-0 text-sm w-full text-gray-700 placeholder-gray-400" value={formData.password} onChange={handleChange} autocomplete="current-password" required />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
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