"use client"

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    email: string,
    name: string,
    _id: string,
    otp: number,
    cart: [{
        name: string,
        price: number,
        productId: string
    }],
    tokens: [{
        token: string
    }]
}

const initialState: CounterState = {
    email: '',
    name: '',
    _id: '',
    otp: 0,
    cart: [{
        name: '',
        price: 0,
        productId: ''
    }],
    tokens: [{
        token: ''
    }]
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.otp += 1
        },
        decrement: (state) => {
            state.otp -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.otp += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer