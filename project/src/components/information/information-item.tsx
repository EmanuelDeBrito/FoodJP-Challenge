type Props = {
    label: string
}

export const InformationItem = ({ label }: Props) => {
    return(
        <li className="text-[18px] text-[#232323] font-400 transition-all cursor-pointer hover:underline">{label}</li>
    )
}