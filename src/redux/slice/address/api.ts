import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/config/apis';
import { AddressType } from '@/redux/types';

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery(({ baseUrl })),
    endpoints: (builder) => ({
        getAddress: builder.query<{ status: string, address: AddressType[] }, { userId: string }>({
            query: (userId) => `address/fetch/${userId}`
        })
    })
})

export const { useGetAddressQuery } = addressApi
