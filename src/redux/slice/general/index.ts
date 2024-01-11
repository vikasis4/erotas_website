import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GenralState {
    isLoading: boolean,
    isAuthenticated: boolean
}
const initialState: GenralState = {
    isLoading: false,
    isAuthenticated: false
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {            
            state.isLoading = action.payload
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>)=>{
            state.isAuthenticated = action.payload
        }
    },
})

export const { setIsLoading, setIsAuthenticated } = generalSlice.actions

export default generalSlice.reducer