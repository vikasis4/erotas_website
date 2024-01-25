import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { wishListType } from '@/redux/types'
import { baseUrl } from '@/config/apis';

export const wishListApi = createApi({
    reducerPath: 'wishListApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['refetch'],
    endpoints: (builder) => ({
        fetchWishList: builder.query<{ status: string, wishList: wishListType[] }, string>({
            query: (data) => `wishlist/get/${data}`,
            providesTags: ['refetch']
        }),
        addToWishList: builder.mutation<{ status: string, data: wishListType }, { userId: string, productId: string }>({
            query: (data) => ({
                url: 'wishlist/add',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['refetch']
        }),
        removeFromWishList: builder.mutation<{ status: string, data: wishListType }, { userId: string, productId: string }>({
            query: (data) => ({
                url: 'wishlist/remove',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['refetch']
        }),
    })

})

export const {useFetchWishListQuery, useAddToWishListMutation, useRemoveFromWishListMutation } = wishListApi