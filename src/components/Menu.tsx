'use client'
import React from 'react'
import menu from '@/assets/icon/menu.png'
import useUser from '@/hooks/user/useUser';
import { useRouter } from 'next/navigation';
import useSetAuth from '@/hooks/useSetAuth';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

function Menu() {

    const { name, email } = useUser();
    const router = useRouter();
    const setAuht = useSetAuth();

    const handleLogOut = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('JWT_token')
        };
        setAuht(false)
        router.push('/');
        window.location.reload();
    }

    const divClass = "px-6 py-2 bg-primary rounded w-full flex justify-between"
    const innerDivClass = "flex gap-4 justify-center items-center"
    const mainClass = "text-sm shadow-md flex flex-col gap-4 my-4 w-[90%] m-auto justify-center items-strech font-poppin text-white font-semibold"

    return (
        <Drawer>
            <DrawerTrigger>
                <Image src={menu} alt="erota" height="40" width="40" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{name}</DrawerTitle>
                    <DrawerDescription>{email}</DrawerDescription>
                </DrawerHeader>
                <DrawerClose>
                    {
                        email.length < 5 ?

                            <div className="flex flex-col gap-4 my-4 w-[90%] m-auto justify-center items-strech">
                                <Button onClick={() => router.push('/auth')}>Sign Up</Button>
                                <Button onClick={() => router.push('/')}>Home</Button>
                            </div>
                            :
                            <div className={mainClass}>

                                <div onClick={() => router.push('/')} className={divClass}>
                                    <div className={innerDivClass}>
                                        <Image src={`/icon/home.png`} alt='home' width="20" height="20" />
                                        <h1>Home</h1>
                                    </div>
                                    <Image src={`/icon/right.png`} alt='home' width="20" height="10" />
                                </div>
                                <div onClick={() => router.push('/address')} className={divClass}>
                                    <div className={innerDivClass}>
                                        <Image src={`/icon/delivery.png`} alt='delivery' width="20" height="20" />
                                        <h1>Edit Delivery Address</h1>
                                    </div>
                                    <Image src={`/icon/right.png`} alt='home' width="20" height="10" />
                                </div>
                                <div onClick={() => router.push('/support')} className={divClass}>
                                    <div className={innerDivClass}>
                                        <Image src={`/icon/support.png`} alt='support' width="25" height="25" />
                                        <h1>Customer Support</h1>
                                    </div>
                                    <Image src={`/icon/right.png`} alt='home' width="20" height="10" />
                                </div>
                                <div onClick={() => router.push('/orders')} className={divClass}>
                                    <div className={innerDivClass}>
                                        <Image src={`/icon/ship.png`} alt='orders' width="20" height="20" />
                                        <h1>View Orders</h1>
                                    </div>
                                    <Image src={`/icon/right.png`} alt='home' width="20" height="10" />
                                </div>
                                <div onClick={handleLogOut} className={divClass}>
                                    <div className={innerDivClass}>
                                        <Image src={`/icon/logout.png`} alt='logout' width="24" height="24" />
                                        <h1>LogOut</h1>
                                    </div>
                                    <Image src={`/icon/right.png`} alt='home' width="20" height="10" />
                                </div>

                            </div>
                    }
                </DrawerClose>
                <DrawerFooter>
                    <DrawerClose className="w-full">
                        <Button className="w-full" variant="secondary">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu