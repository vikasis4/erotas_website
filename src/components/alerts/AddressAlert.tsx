'use client'
import React from 'react'
import useAddAddress from '@/hooks/address/useAddAddress';
import addressCheck from '@/utils/addressCheck';
import useEditAddress from '@/hooks/address/useEditAddress';
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button';


function AddressAlert({ component, data }: any) {

    const { toast } = useToast()
    const addAdress = useAddAddress();
    const editAddress = useEditAddress();
    var state = data ? data : {
        address: '',
        pincode: '',
        city: '',
        state: '',
        phone: '',
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
        var result: any;
        if (data) {
            result = await editAddress(address, data._id);
        } else {
            result = await addAdress(address);
        }
        console.log(result);
        
        if (result) {
            toast({
                title: "Success",
                description: "Address added successfully",
            })
            setAddress({
                address: '',
                pincode: '',
                city: '',
                state: '',
                phone: '',
                landMark: ''
            })
           
        }else{
            toast({
                variant: "destructive",
                title: "Error",
                description: "Error Something went wrong",
            })
        }
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger>
                {component}
            </AlertDialogTrigger>
            <AlertDialogContent>

                <div className='flex flex-col gap-3'>

                    <Input
                        title='address'
                        name='address'
                        type='text'
                        value={address.address}
                        onChange={handleChange}
                        placeholder='Enter Your Address'
                    />
                    <Input
                        title='pincode'
                        name='pincode'
                        type='number'
                        value={address.pincode}
                        onChange={handleChange}
                        placeholder='Enter Your Pincode'
                    />
                    <Input
                        title='city'
                        name='city'
                        type='text'
                        value={address.city}
                        onChange={handleChange}
                        placeholder='Enter Your City Name'
                    />
                    <Input
                        title='state'
                        name='state'
                        type='text'
                        value={address.state}
                        onChange={handleChange}
                        placeholder='Enter Your State'
                    />
                    <Input
                        title='phone'
                        name='phone'
                        type='number'
                        value={address.phone}
                        onChange={handleChange}
                        placeholder='Enter Your Phone'
                    />
                    <Input
                        title='landMark'
                        name='landMark'
                        type='text'
                        value={address.landMark}
                        onChange={handleChange}
                        placeholder='Enter Your Nearby Landmark'
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel >Cancel</AlertDialogCancel>
                    <Button onClick={addAdressFxn}>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AddressAlert
