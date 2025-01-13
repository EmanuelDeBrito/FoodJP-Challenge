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
                <div className="text-[32px] text-[#232323] koh">{data.name}</div>

                <div className="text-[18px] text-[#232323] font-400 text-center">{data.description}</div>

                <div className="text-[32px] text-[#FF0000] koh">R$ {data.price}</div>
            </div>
        </div>
    )
}