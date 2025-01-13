import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    qtd: 1 | 2 | 3 | 4 | 5
}

export const Stars = ({ qtd }: Props) => {
    return(
        <>
            {qtd === 1 &&
                <FontAwesomeIcon 
                    icon={faStar}
                    className="size-6 text-[#FF0000]"
                />
            }
            {qtd === 2 &&
                <>
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                </>
            }
            {qtd === 3 &&
                <>
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                </>
            }
            {qtd === 4 &&
                <>
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                </>
            }    
            {qtd === 5 &&
                <>
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                    <FontAwesomeIcon 
                        icon={faStar}
                        className="size-6 text-[#FF0000]"
                    />
                </>
            }    
        </>
    )
}