import { InformationArea } from "@/components/information/information-area"
import { AboutUs } from "@/components/ui/about-us"
import { CardItem } from "@/components/ui/card-item"
import { CommentItem } from "@/components/ui/comment-item"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import { Hero } from "@/components/ui/hero"
import { CardData } from "@/data/card-data"
import { CommentData } from "@/data/comment-data"

const Page = () => {
    return(
        <div className="flex flex-col gap-[30px] max-w-6xl mx-auto py-8 px-6 lg:px-0 lg:gap-[100px]">
            <Header />
            <Hero />
            <AboutUs />
            <section>
                <div className="mb-[130px] text-[34px] text-[#232323] text-center koh lg:text-[48px]">Populares</div>
                <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-3 lg:gap-8">
                    {CardData.map((item, key) => (
                        <CardItem 
                            key={key}
                            data={item}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="mb-14 text-[34px] text-[#232323] text-center koh lg:text-[48px]">Comentarios</div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {CommentData.map((item, key) => (
                        <CommentItem
                            key={key} 
                            data={item}                    
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-10 mb-[50px] lg:flex-row lg:justify-between lg:items-center lg:gap-0">
                    <InformationArea 
                        title="Produto"
                        topics={["Todos", "Sushi", "Premium"]}                
                    />
                    <InformationArea 
                        title="Informaçoes"
                        topics={["FAQ", "Blog", "Suporte"]}                
                    />
                    <InformationArea 
                        title="Empresa"
                        topics={["Sobre Nós", "Local", "Contato"]}                
                    />
                    <InformationArea 
                        title="Social"
                        topics={["Facebook", "Instagram", "Twitter"]}                
                    />
                </div>
                <div className="w-full h-[2px] bg-gray-300"></div>
            </section>
            <Footer />
        </div>
    )
}

export default Page