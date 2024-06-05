export default function addressCheck({ address, pincode, city, state, phone, landMark }: any) {

    if (address.length < 5) {
        return 'address is too short'
    } else if (pincode.toString().length < 2) {
        return 'Enter Valid pincode'
    } else if (city.length < 2) {
        return 'Enter Valid city name'
    } else if (state.length < 2) {
        return 'Enter Valid state name'
    } else if (phone.toString().length !== 10) {
        return 'Enter Valid Phone Number'
    } else if (landMark.length < 2) {
        return 'Enter Valid LandMark'
    }
    return 'true'
}