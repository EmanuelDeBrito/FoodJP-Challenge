import Image from "next/image"

export const AboutUs = () => {
    return(
        <section className="flex items-center gap-[100px]">
            <Image 
                src={"/prato.png"}
                width={1200}
                height={800}
                alt="Prato"
                quality={100}            
            />

            <div>
                <div className="mb-2 text-[24px] text-[#FF0000] koh">Sobre nos</div>
                <div className="mb-8 text-[48px] text-[#232323] koh">Feita de forma tradicional</div>
                <div className="text-[20px] text-[#232323] font-400">Cada prato "feita de forma tradicional" é uma ode à excelência. Desde o meticuloso corte do sashimi até a preparação delicada do sushi, cada etapa é uma reverência à herança culinária do Japão.</div>
            </div>
        </section>
    )
}