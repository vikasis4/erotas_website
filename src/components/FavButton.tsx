import React from 'react'
import useWishList from '@/hooks/wishlist/useWishList'
import { love, ylove } from '@/config/images';
import Image from 'next/image';

function FavButton({ productId }: { productId: string }) {
    const { getWishList, addToWishList, removeFromWishList } = useWishList();
    const wishList = getWishList();
    const [selected, setSelected] = React.useState(false)
    React.useEffect(() => {
        var res = wishList.filter((data: any) => data.productId === productId);
        if (res.length > 0) {
            setSelected(true)
        }
        if (res.length === 0 && selected) {
            setSelected(false)
        }
    }, [wishList])

    return (
        <>
            {
                selected ?
                    <Image onClick={() => removeFromWishList(productId)} src={ylove} height="40" width="40" className='h-6 w-6' alt="erota" />
                    :
                    <Image onClick={() => addToWishList(productId)} src={love} height="40" width="40" className='h-6 w-6' alt="erota" />
            }
        </>
    )
}

export default FavButton