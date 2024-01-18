'use client'

const useApiResult = () => {

    const validStatus = (status: string | undefined) => {        
        if (status) {
            if (status === 'true') {
                return true
            } else {
                alert('API STATUS NOT TRUE');
                return false
            }
        }
    }

    return validStatus
}

export default useApiResult