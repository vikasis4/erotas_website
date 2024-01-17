import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { userTypes } from '../../types'
import { baseUrl } from '@/config/apis'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        fetchUser: builder.query<{ status: string, info: userTypes }, string | null >({
            query: (token) => `auth/token/${token}`,
        }),
    }),
})

export const { useFetchUserQuery } = userApi