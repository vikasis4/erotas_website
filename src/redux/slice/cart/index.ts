import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { cartType } from '../../types'
import { baseUrl } from '@/config/apis'
import { products } from '../../../config/dummy';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['refetch'],
    endpoints: (builder) => ({
        AddToCart: builder.mutation<{ status: string }, { userId: string | undefined; productId: String | undefined }>({
            query: (data) => ({
                url: `cart/add`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['refetch']
        }),
        RemoveFromcart: builder.mutation<{ status: string }, { userId: string | undefined; productId: String | undefined }>({
            query: (data) => ({
                url: `cart/remove`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['refetch']
        }),
        GetCart: builder.query<{ status: string, cart: cartType[] }, string | undefined>({
            query: (userId) => `cart/fetch/${userId}`,
            providesTags: ['refetch']
        }),
    }),
})

export const { useAddToCartMutation, useGetCartQuery, useRemoveFromcartMutation } = cartApi