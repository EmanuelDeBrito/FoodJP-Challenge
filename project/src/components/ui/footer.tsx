import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "./icon"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <footer className="flex items-center">
            <div className="flex-1">
                <Logo 
                    width={150}
                    height={40}                
                />
            </div>
            <div className="flex items-center gap-4">
                <Icon Icon={faFacebook} />
                <Icon Icon={faInstagram} />
                <Icon Icon={faTwitter} />
            </div>
        </footer>
    )
}