import { InformationItem } from "./information-item"

type Props = {
    title: string
    topics: string[]
}

export const InformationArea = ({ title, topics }: Props) => {
    return(
        <div>
            <div className="mb-5 text-[20px] text-[#232323] koh">{title}</div>
            <ul className="flex flex-col gap-3">
                {topics.map((item, key) => (
                    <InformationItem
                        label={item}
                        key={key}                    
                    />
                ))}
            </ul>
        </div>
    )
}