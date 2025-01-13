import Image from "next/image"
import { Button } from "./button"

export const Hero = () => {
    return(
        <section className="flex flex-col items-center gap-[50px] lg:flex-row lg:gap-[200px]">
            <div>
                <div className="mb-[18px] text-[48px] text-[#232323] koh">
                    Comida Oriental
                </div>
                <div className="mb-12 text-[24px] text-[#232323]">
                    A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3),
                    vegetais, massas e ingredientes frescos.
                </div>
                <Button 
                    label="Ver o cardápio"            
                />
            </div>
            <div className="hidden lg:block">
                <Image 
                    src="/hero.png"
                    width={1000}
                    height={535}
                    alt="Hero Image"
                    quality={100}                
                />
            </div>
            <div className="block lg:hidden">
                <Image 
                    src="/hero.png"
                    width={500}
                    height={535}
                    alt="Hero Image"
                    quality={100}                
                />
            </div>
        </section>
    )
}