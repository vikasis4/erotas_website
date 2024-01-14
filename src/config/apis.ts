const DevBase = 'http://localhost:3001'
const PortBase = 'http://172.16.172.109:3001'
const ProductionBase = '';
const CurrentBase = PortBase

export const baseUrl = CurrentBase + '/api/'
export const otpVerifyApi = CurrentBase + '/api/auth/otp/verify'
export const signUpApi = CurrentBase + '/api/auth/register'
export const signInApi = CurrentBase + '/api/auth/login'
export const otpGenerateApi = CurrentBase + '/api/auth/login'
export const ProductBaseURL = CurrentBase + '/product/'