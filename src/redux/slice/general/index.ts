import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GenralState } from '@/redux/types'

const initialState: GenralState = {
    isLoading: false,
    isAuthenticated: false,
    addressId: 'false'
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
        setDeliveryId: (state, action: PayloadAction<string>) => {
            state.addressId = action.payload
        }
    },
})

export const { setIsLoading, setIsAuthenticated, setDeliveryId } = generalSlice.actions

export default generalSlice.reducer