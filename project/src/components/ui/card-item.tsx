import { CardItemType } from "@/types/card-item-type"
import Image from "next/image"

type Props = {
    data: CardItemType
}

export const CardItem = ({ data }: Props) => {
    return(
        <div className="flex flex-col justify-center items-center h-[434px] bg-[#F8F5F2] rounded-xl transition-all cursor-pointer hover:scale-110">
            <div className="-mt-[114px]">
                <Image 
                    src={data.image}
                    width={250}
                    height={250}
                    alt=""
                    quality={100}                
                />
            </div>

            <div className="flex flex-col items-center gap-6 px-5 mt-10">
                <div className="text-[20px] text-[#232323] koh lg:text-[32px]">{data.name}</div>

                <div className="text-[14px] text-[#232323] font-400 text-center lg:text-[18px]">{data.description}</div>

                <div className="text-[20px] text-[#FF0000] koh lg:text-[32px]">R$ {data.price}</div>
            </div>
        </div>
    )
}