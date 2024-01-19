'use client'
import React from 'react'
import InputTag from '@/ui/InputTag';
import StyledButton from '@/ui/StyledButton';
import useAddSupport from '@/hooks/support/useAddSupport'
import useGetSupport from '@/hooks/support/useGetSupport'

function page() {

  const [phone, setPhone] = React.useState(0);
  const address = useGetSupport();
  const addSupport = useAddSupport();

  const handleChange = (e: any) => {
    setPhone(e.target.value);
  }
  const submit = (e: any) => { 
    if (phone.toString().length !== 10) {
      alert('Please enter a valid phone number');
      return;
    }
    addSupport(phone)
  }

  return (
    <div className="font-poppin py-4 px-6">
      <h1 className="text-2xl mb-12 font-semibold text-center">Customer Support</h1>
      {
        !address ?
          <div>
            <InputTag
              title='phone'
              name='phone'
              type='number'
              value={phone}
              handler={handleChange}
            />
            <StyledButton text="Submit" handler={submit} />
          </div>
          :
          <h1 className="text-xl mb-12 font-semibold text-center">We will contact you soon</h1>
        }
        <h1 className="text-xl my-12 font-semibold text-center">OR</h1>
        <h1 className="text-xl mb-12 font-semibold text-center">You can send us email to erotasofficial@gmail.com</h1>
    </div>
  )
}

export default page