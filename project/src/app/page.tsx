import { AboutUs } from "@/components/ui/about-us"
import { CardItem } from "@/components/ui/card-item"
import { CommentItem } from "@/components/ui/comment-item"
import { Header } from "@/components/ui/header"
import { Hero } from "@/components/ui/hero"
import { CardData } from "@/data/card-data"
import { CommentData } from "@/data/comment-data"

const Page = () => {
    return(
        <div className="flex flex-col gap-[100px] max-w-6xl mx-auto py-8">
            <Header />
            <Hero />
            <AboutUs />
            <section>
                <div className="mb-[130px] text-[48px] text-[#232323] text-center koh">Populares</div>
                <div className="grid grid-cols-3 gap-8">
                    {CardData.map((item, key) => (
                        <CardItem 
                            key={key}
                            data={item}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="mb-14 text-[48px] text-[#232323] text-center koh">Comentarios</div>
                <div className="grid grid-cols-2 gap-8">
                    {CommentData.map((item, key) => (
                        <CommentItem
                            key={key} 
                            data={item}                    
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Page