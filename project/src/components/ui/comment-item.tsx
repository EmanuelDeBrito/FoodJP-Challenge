import { CommentType } from "@/types/comment-type"
import Image from "next/image"
import { Stars } from "./stars"

type Props = {
    data: CommentType
}

export const CommentItem = ({ data }: Props) => {
    let i = 0;

    return(
        <div className="w-full h-[390px] px-10 py-8 bg-[#F8F5F2] rounded-xl transition-all cursor-pointer hover:scale-105">
            <div className="mb-6">
                <Image
                    src={data.personImage}
                    width={100}
                    height={100}
                    alt="avatar"
                    quality={100}            
                />
            </div>

            <div className="mb-4 text-[20px] text-[#232323] koh lg:text-[32px]">{data.name}</div>

            <div className="mb-7 text-[14px] text-[#232323] font-400 lg:text-[24px]">{data.opinion}</div>

            <div className="flex items-center gap-3">
                <Stars 
                    qtd={data.stars}                
                />
            </div>
        </div>
    )
}