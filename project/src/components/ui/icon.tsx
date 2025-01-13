import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    Icon: IconDefinition
}

export const Icon = ({ Icon }: Props) => {
    return(
        <div className="flex justify-center items-center size-10 border border-[#232323] rounded-full cursor-pointer hover:scale-105">
            <FontAwesomeIcon 
                icon={Icon}
                className="size-4 text-[#232323]"            
            />
        </div>
    )
}