import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GenralState } from '@/redux/types'

const initialState: GenralState = {
    isLoading: false,
    isAuthenticated: false,
    delivery_address: {
        _id: '',
        address: '',
        pincode: 0,
        city: '',
        state: '',
        phone: 7988500286,
        landMark: ''
    },
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
        }
    },
})

export const { setIsLoading, setIsAuthenticated } = generalSlice.actions

export default generalSlice.reducer