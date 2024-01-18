import React from 'react'
import InputTag from '@/ui/InputTag';
import StyledButton from '@/ui/StyledButton';
import useAddAddress from '@/hooks/address/useAddAddress';
import addressCheck from '@/utils/addressCheck';
import useEditAddress from '@/hooks/address/useEditAddress';
import Image from 'next/image';
import { close } from '@/config/images';

function CreateEditAddress({ setShowConfig, data }: any) {

  const addAdress = useAddAddress();
  const editAddress = useEditAddress();
  var state = data ? data : {
    address: '',
    pincode: 1,
    city: '',
    state: "",
    phone: 1,
    landMark: ''
  }
  const [address, setAddress] = React.useState<any>(state)

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAddress((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  }
  const addAdressFxn = async () => {
    var check_address = addressCheck(address);
    if (check_address !== 'true') { alert(check_address); return }
    var result;
    if (data) {
      result = await editAddress(address, data._id);
    } else {
      result = await addAdress(address);
    }
    setShowConfig(!result)
  }

  return (
    <div className="flex relative bg-red-100 rounded-lg shadow-lg flex-col gap-6 px-8 py-12 justify-center items-center">
      <Image onClick={() => setShowConfig(false)} className="absolute top-4 right-4 lg:hover:cursor-pointer" src={close} alt="erota" height="25" width="25" />
      <InputTag
        title='address'
        name='address'
        type='text'
        value={address.address}
        handler={handleChange}
      />
      <InputTag
        title='pincode'
        name='pincode'
        type='number'
        value={address.pincode}
        handler={handleChange}
      />
      <InputTag
        title='city'
        name='city'
        type='text'
        value={address.city}
        handler={handleChange}
      />
      <InputTag
        title='state'
        name='state'
        type='text'
        value={address.state}
        handler={handleChange}
      />
      <InputTag
        title='phone'
        name='phone'
        type='number'
        value={address.phone}
        handler={handleChange}
      />
      <InputTag
        title='landMark'
        name='landMark'
        type='text'
        value={address.landMark}
        handler={handleChange}
      />
      <StyledButton text="Save Address" handler={addAdressFxn} />
    </div>
  )
}

export default CreateEditAddress