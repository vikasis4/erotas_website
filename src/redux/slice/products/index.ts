import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { productTypes } from '../../types'
import { baseUrl } from '@/config/apis'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        fetchProducts: builder.query<{ status: string, product: productTypes[] }, string>({
            query: () => `product/getAll`,
        }),
        fetchProduct: builder.query<{ status: string, product: productTypes }, string | string[]>({
            query: (id) => `product/getProduct/${id}`,
        }),
    }),
})

export const { useFetchProductsQuery, useFetchProductQuery } = productsApi