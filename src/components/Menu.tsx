'use client'
import React from 'react'
import { MenuS, LoginS } from '@/components/ui/svg/Menu'
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

function Menu() {

    const { name, email } = useUser();
    const router = useRouter();
    const setAuht = useSetAuth();

    const handleLogOut = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('JWT_token')
        };
        setAuht(false)
        router.refresh();
        router.push('/');
    }

    return (
        <Drawer>
            <DrawerTrigger>
                <MenuS />
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
                                <Button onClick={() => router.push('/auth')}><LoginS />&nbsp; Sign Up</Button>
                                <Button onClick={() => router.push('/')}>Home</Button>
                            </div>
                            :
                            <div className="flex flex-col gap-4 my-4 w-[90%] m-auto justify-center items-strech">
                                <Button onClick={() => router.push('/')}>Home</Button>
                                <Button onClick={() => router.push('/address')}>Edit Delivery Address</Button>
                                <Button onClick={() => router.push('/support')}>Customer Support</Button>
                                <Button onClick={() => router.push('/orders')}>Check Your Orders</Button>
                                <Button onClick={handleLogOut}>Log Out</Button>
                            </div>
                    }
                </DrawerClose>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="secondary">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu