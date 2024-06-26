export const getJWTtoken = (): string | null => {
    var token: string | null = null;
    if (typeof localStorage !== 'undefined') {
        token = localStorage.getItem('JWT_token')
        if (!token) {
            return 'null'
        }
    };
    return token
}