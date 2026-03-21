import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        loading: true
    },
    reducers: {
        login: (state, action)=>{
            if(typeof action.payload === 'string'){
                state.token = action.payload
                return
            }
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: (state)=>{
            state.token = '',
            state.user = null,
            localStorage.removeItem('token')
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
})

export const {login, logout, setLoading} = authSlice.actions

export default authSlice.reducer