import { useState } from "react";
import Button from "../ui/Buttons.jsx";
import { TextAlignEnd,X } from 'lucide-react';
import { NavLink } from "react-router-dom";

const NavButton = [
    {id:1,to:"/home",name: "Home"},
    {id:2,to:"/notes",name: "Notes"},
    {id:3,to:"/dashboard",name: "Dashboard"}
]

const NavView = ({classname,setMenuOpen=false}) => {
    return (
            <div className={`${classname}`} onClick={() => setMenuOpen(false)} >
                <X className="top-0 right-0 absolute md:hidden m-5 menu-icon" absoluteStrokeWidth={true} onClick={() => setMenuOpen(false)} />
                    <ul>
                        {
                            NavButton.map((obj) => 
                                (<NavLink key={obj.id} to={obj.to} className="nav-button" onClick={() => setMenuOpen(false)}>{obj.name}</NavLink>)
                            )
                        }
                    </ul>
            </div>

    )
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fl-jt-ct shadow-md border border-gray-200 bg-blue-100/50">
            <header className="fl-bt md:w-3/4 w-full">
                <h1>NotesAPP</h1>
                <TextAlignEnd className="md:hidden block menu-icon" absoluteStrokeWidth={true} onClick={() => setMenuOpen((prev) => !prev)} />
                <NavView classname="desk-view" />
                {menuOpen && (<NavView setMenuOpen={setMenuOpen} classname="mob-view" />)}
            </header>
        </div>
    )
}