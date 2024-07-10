const local = 'http://localhost:3001'
const port = 'http://192.168.11.36:3001'
const production = 'https://erotas-backend.onrender.com';

var prod = true;
// var prod = false;
const CurrentBase = prod ? production : port;

export const baseUrl = CurrentBase + '/api/'
export const otpVerifyApi = CurrentBase + '/api/auth/otp/verify'
export const googleAuth = CurrentBase + '/api/auth/google'
export const rzpCallBack = CurrentBase + '/api/pay/handlePayment'
export const rzpOrder = CurrentBase + '/api/pay/order'
export const signUpApi = CurrentBase + '/api/auth/register'
export const signInApi = CurrentBase + '/api/auth/login'
export const otpGenerateApi = CurrentBase + '/api/auth/login'
export const ProductBaseURL = CurrentBase + '/product/'

export const rzp_key = 'rzp_live_14f793Ecrb21Gi'
// rzp_live_14f793Ecrb21Gi
// rzp_test_VD0r7oIRVyrcyS