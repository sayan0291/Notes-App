import { Icon } from "../common/Icon"
import Button from "../common/Button.jsx"

export const Navbar = () => {
    
    return(
        <div className="nav-bar">
            <Icon varient="logo">
                <img src="paper.png" className="w-10" />
                <h1>zenotes</h1>
            </Icon>
            <Button varient="regBtn">
                Getting Started
            </Button>

        </div>
    )
}