import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/config/apis';
import { AddressType } from '@/redux/types';

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery(({ baseUrl })),
    tagTypes: ['updateAddress'],
    endpoints: (builder) => ({
        getAddress: builder.query<{ status: string, address: AddressType[] }, string>({
            query: (userId) => `address/fetch/${userId}`,
            providesTags: ['updateAddress']
        }),
        addAddress: builder.mutation<{ status: string }, { userId: string, address: AddressType }>({
            query: (data) => ({
                url: `address/add`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['updateAddress']
        }),
        editAddress: builder.mutation<{ status: string }, { userId: string, addressId: string, address: AddressType }>({
            query: (data) => ({
                url: `address/edit`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['updateAddress']
        }),
        deleteAddress: builder.mutation<{ status: string }, { userId: string, addressId: string }>({
            query: (data) => ({
                url: `address/delete`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['updateAddress']
        })
    })
})

export const { useGetAddressQuery, useAddAddressMutation, useEditAddressMutation, useDeleteAddressMutation } = addressApi
