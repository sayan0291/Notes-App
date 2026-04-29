import { useState } from "react";
import Button from "../ui/Buttons.jsx";
import { NavLink } from "react-router-dom";

const NavButton = [
    {id:1,to: "/home",name:"Home"},
    {id:2,to:"/notes",name: "Notes"}
]

const NavView = () => {
    return (
        <ul className="flex gap-5">
            {
                NavButton.map((obj) => 
                    (<NavLink key={obj.id} to={obj.to} className="text-black">{obj.name}</NavLink>)
                )
            }
        </ul>
    )
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fl-jt-ct">
            <header className="fl-bt w-1/2">
                <h1>NotesAPP</h1>
                <NavView />
            </header>
        </div>
    )
}