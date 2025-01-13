import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "./icon"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <footer className="flex flex-col gap-5 items-center lg:flex-row lg:gap-0">
            <div className="flex-1">
                <div className="hidden lg:block">
                    <Logo 
                        width={150}
                        height={40}                
                    />
                </div>
                <div className="block lg:hidden">
                    <Logo 
                        width={100}
                        height={40}                
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Icon Icon={faFacebook} />
                <Icon Icon={faInstagram} />
                <Icon Icon={faTwitter} />
            </div>
        </footer>
    )
}