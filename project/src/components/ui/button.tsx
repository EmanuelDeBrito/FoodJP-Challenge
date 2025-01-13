type Props = {
    label: string
}

export const Button = ({ label }: Props) => {
    return(
        <div className="
                flex justify-center items-center w-[207px] h-[54px] bg-[#FF0000] text-[20px] 
                text-white rounded-3xl transition-all cursor-pointer hover:opacity-60
            "
        >
            {label}
        </div>
    )
}