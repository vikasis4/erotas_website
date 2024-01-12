'use client'
import { baseUrl } from "@/config/apis";
import axios from "axios";
import { useParams } from "next/navigation"
import React from "react";

export default function Page() {

    const id = useParams();
    const [product, setProduct] = React.useState();
    React.useEffect(() => {
        const fetch = async () => {
            await axios.get(baseUrl + 'product/getProduct/' + id.productId).then((response:any) => {
                if (response.data.status === 'true') {
                    setProduct(response.data.product)
                } else {
                    alert("Something went wrong. Please try again later")
                }
            })
        };
        fetch()
    }, [])

    return (
        <div>
            
        </div>
    )
}