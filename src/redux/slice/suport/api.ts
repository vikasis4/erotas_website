import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/config/apis';
import { SupportType } from '@/redux/types';


export const supportApi = createApi({
    reducerPath: 'supportApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['updateSupport'],
    endpoints: (builder) => ({
        getSupport: builder.query<{ status: string, support: SupportType }, string>({
            query: (userId) => `/support/get/${userId}`,
            providesTags: ['updateSupport']
        }),
        addSupport: builder.mutation<{ status: string }, SupportType>({
            query: (data) => ({
                url: `/support/add`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['updateSupport']
        })

    })
})

export const { useGetSupportQuery, useAddSupportMutation } = supportApi