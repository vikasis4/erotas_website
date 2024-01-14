import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GenralState } from '@/redux/types'

const initialState: GenralState = {
    isLoading: false,
    isAuthenticated: false,
    email: '',
    name: '',
    _id: ''
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload
        },
        setUserInfo: (state, action: PayloadAction<{ name: string, email: string, _id: string }>) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state._id = action.payload._id
        }
    },
})

export const { setIsLoading, setIsAuthenticated, setUserInfo } = generalSlice.actions

export default generalSlice.reducer