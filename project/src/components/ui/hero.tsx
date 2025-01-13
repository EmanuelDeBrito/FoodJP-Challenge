import Image from "next/image"
import { Button } from "./button"

export const Hero = () => {
    return(
        <section className="flex items-center gap-[200px]">
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
            <div>
                <Image 
                    src="/hero.png"
                    width={1000}
                    height={535}
                    alt="Hero Image"
                    quality={100}                
                />
            </div>
        </section>
    )
}