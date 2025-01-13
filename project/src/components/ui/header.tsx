import { NavItem } from "../nav/nav-item"
import { Button } from "./button"
import { Logo } from "./logo"

export const Header = () => {
    return(
        <header className="flex justify-center items-center lg:justify-between">
            <Logo 
                width={154}
                height={41}
            />

            <nav className="hidden items-center lg:flex">
                <ul className="flex items-center gap-14">
                    <NavItem label="Início" />
                    <NavItem label="Sobre Nós" />
                    <NavItem label="Populares" />                
                </ul>
            </nav>

            <div className="hidden lg:block">
                <Button 
                    label="Baixar o App"            
                />
            </div>
        </header>   
    )
}