import { NavItem } from "../nav/nav-item"
import { Button } from "./button"
import { Logo } from "./logo"

export const Header = () => {
    return(
        <header className="flex justify-between items-center">
            <Logo 
                width={154}
                height={41}
            />

            <nav className="flex items-center">
                <ul className="flex items-center gap-14">
                    <NavItem label="Início" />
                    <NavItem label="Sobre Nós" />
                    <NavItem label="Populares" />                
                </ul>
            </nav>

            <Button 
                label="Baixar o App"            
            />
        </header>   
    )
}