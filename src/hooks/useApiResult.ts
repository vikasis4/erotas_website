'use client'

const useApiResult = () => {

    const validStatus = (status: string | undefined) => {
        switch (status) {
            case 'true':
                return true;
            case 'empty':
                console.log('API empty');
                return false;
            case 'error':
                alert('Something went wrong')
                return false;
            default:
                return false
        }
    }

    return validStatus
}

export default useApiResult