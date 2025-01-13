type Props = {
    label: string
}

export const NavItem = ({ label }: Props) => {
    return(
        <li className="text-[20px] text-[#232323] cursor-pointer hover:underline">{label}</li>
    )
}