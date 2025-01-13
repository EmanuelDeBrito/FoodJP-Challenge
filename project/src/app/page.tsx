import { Header } from "@/components/ui/header"
import { Hero } from "@/components/ui/hero"

const Page = () => {
    return(
        <div className="flex flex-col gap-[100px] max-w-6xl mx-auto py-8">
            <Header />
            <Hero />
        </div>
    )
}

export default Page