import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GenralState } from '@/redux/types'
import { cartType } from '../../types';

const initialState: GenralState = {
    isLoading: false,
    isAuthenticated: false,
    email: '',
    name: '',
    _id: '',
    cart: []
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setLogOut: (state) => {
            state.email = ''
            state.name = ''
            state._id = ''
            state.isAuthenticated = false
        },
        setUserInfo: (state, action: PayloadAction<{ name: string, email: string, _id: string }>) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state._id = action.payload._id
            state.isAuthenticated = true
        },
        setCart: (state, action: PayloadAction<cartType[]>) => {
            state.cart = action.payload
        }
    },
})

export const { setIsLoading, setLogOut, setUserInfo, setCart } = generalSlice.actions

export default generalSlice.reducer