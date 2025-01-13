import Image from "next/image"

type Props = {
    width: number,
    height: number,
}

export const Logo = ({ width, height }: Props) => {
    return(
        <Image 
            src="/sushiLogo.png"
            width={width}
            height={height}
            alt="Logo"  
            quality={100}      
            className="cursor-pointer"
        />
    )
}