const DevBase = 'http://localhost:3001'
const PortBase = 'http://172.16.172.109:3001'
const ProductionBase = 'https://erotasbackend-production.up.railway.app';

var prod = true;
// var prod = false;
const CurrentBase = prod ? ProductionBase : PortBase;

export const baseUrl = CurrentBase + '/api/'
export const otpVerifyApi = CurrentBase + '/api/auth/otp/verify'
export const rzpCallBack = CurrentBase + '/api/pay/handlePayment'
export const rzpOrder = CurrentBase + '/api/pay/order'
export const signUpApi = CurrentBase + '/api/auth/register'
export const signInApi = CurrentBase + '/api/auth/login'
export const otpGenerateApi = CurrentBase + '/api/auth/login'
export const ProductBaseURL = CurrentBase + '/product/'

export const rzp_key = 'rzp_test_VD0r7oIRVyrcyS'
// rzp_live_14f793Ecrb21Gi
// rzp_test_VD0r7oIRVyrcyS