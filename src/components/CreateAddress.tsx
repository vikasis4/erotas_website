import React from 'react'
import InputTag from '@/ui/InputTag';
import StyledButton from '@/ui/StyledButton';
import useAddAddress from '@/hooks/address/useAddAddress';
import addressCheck from '@/utils/addressCheck';

function CreateAddress({ setCreateAddress }: any) {

  const addAdress = useAddAddress();
  const [address, setAddress] = React.useState<any>({
    address: '',
    pincode: 1,
    city: '',
    state: "",
    phone: 1,
    landMark: ''
  })

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
    var result = await addAdress(address);
    setCreateAddress(!result)
  }

  return (
    <div className="flex flex-col gap-6 px-8 py-12 justify-center items-center">
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

export default CreateAddress