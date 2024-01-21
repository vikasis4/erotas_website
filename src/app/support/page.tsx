'use client'
import React from 'react'
import StyledButton from '@/ui/StyledButton';
import useAddSupport from '@/hooks/support/useAddSupport'
import useGetSupport from '@/hooks/support/useGetSupport'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';




function page() {

  const [phone, setPhone] = React.useState<any>();
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
    <div className="font-playfair py-24 px-6">
      <h1 className="text-2xl mb-12 font-semibold text-center underline">Customer Support</h1>
      {
        !address ?
          <div>
            <Input
              title='phone'
              name='phone'
              type='number'
              value={phone}
              onChange={handleChange}
              placeholder='Enter your phone number'
            />
            <Button className='mt-4' size="lg" onClick={submit} >Submit</Button>
          </div>
          :
          <h1 className="text-xl mb-12 font-semibold text-center">We will contact you soon</h1>
      }
      <h1 className="text-xl my-12 font-semibold text-center">OR</h1>
      <h1 className="text-xl font-semibold text-center">You can send us email to erotasofficial@gmail.com</h1>
    </div>
  )
}

export default page