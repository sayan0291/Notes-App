import { Icon } from "../common/Icon"
import Button from "../common/Button.jsx"
import { NavLink } from "react-router-dom"

export const Navbar = ({className=""}) => {
    
    return(
        <div className={`nav-bar ${className}`}>
            <Logo className2="text-white" />
            <NavLink className="nav-btn" to="/register" >Getting Started</NavLink>
        </div>
    )
}

export const Logo = ({className1="",className2=""}) => {
    return(
        <>
            <div className={`flex-ic gap-1 text-lg font-medium ${className1}`}>
                <img src="/paper.png" className="w-10" />
                <h1 className={className2}>zenotes</h1>
            </div>
        </>
    )
}