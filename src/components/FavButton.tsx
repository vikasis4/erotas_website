import React from 'react'
import useWishList from '@/hooks/wishlist/useWishList'
import { Button } from '@/components/ui/button'

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
                    <Button className='w-full' size="lg" onClick={() => removeFromWishList(productId)}>Remove From Favorites</Button>
                    :
                    <Button className='w-full' size="lg" onClick={() => addToWishList(productId)}>Add To Favorites</Button>
            }
        </>
    )
}

export default FavButton