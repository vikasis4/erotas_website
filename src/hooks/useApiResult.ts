'use client'
import React from "react"

const useApiResult = () => {

    const validStatus = (status: string | undefined) => {
        if (status === 'true') {
            return true
        } else {
            alert('New System, went wrong')
            return false
        }
    }

    return validStatus
}

export default useApiResult