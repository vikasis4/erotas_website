import { ProductBaseURL } from "@/config/apis";
import Image from "next/image";

const YesImage = ({ l, d, c }: { l: string, d: number, c: string }) => {

    const myLoader = () => {
        return ProductBaseURL + l;
    }

    return (
        <>
            <Image loader={myLoader} src={ProductBaseURL + l} alt="product" height={d} width={d}
                className={c} />
        </>
    )
}

export default YesImage