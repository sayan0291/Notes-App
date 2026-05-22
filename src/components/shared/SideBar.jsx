import { useState } from "react";
import { Icon } from "../ui/Icon.jsx";
import { TextAlignEnd,X,NotebookText,Library,NotepadText,Pin,Trash2,Tags } from 'lucide-react';
import { NavLink } from "react-router-dom";
import Button from "../ui/Buttons.jsx";

const sideButton = [
    {id:1,name: "Library",mainicon: <Library size={26} strokeWidth={1} />,children: [ {id: "all-notes",to: "/library/all-notes",name: "All notes",icon: <NotepadText size={23} strokeWidth={1} />},{id: "pinned",to: "/library/pinned",name: "Pinned",icon: <Pin size={23} strokeWidth={1} />},{id: "trash",to: "/library/trash",name: "Trash",icon: <Trash2 size={23} strokeWidth={1} />} ]},
    {id:2,to:"/tags",name: "Tags",mainicon: <Tags size={26} strokeWidth={1} />,children: [{id: "work",to: "/tags/work",name:"Work",color: "#7F77DD"},{id: "personal",to: "/tags/personal",name:"Personal",color: "#1D9E75"},{id: "ideas",to: "/tags/ideas",name:"Ideas",color:"#D85A30"},{id: "study",to: "/tags/study",name:"Study",color: "#378ADD"}]}
]

export default function SideBar() {

    const [menuOpen,setMenuOpen] = useState(false);

    return (
        <div className="side-bar">
            <div className="flex-bw-ic p-3">
                <Icon varient="logo">
                    <NotebookText  strokeWidth={1.5} size={25} />
                    <h1 className="text-white font-sans hidden sm:block">Notes</h1>
                </Icon>
                <Button varient="menuBtn">
                    <TextAlignEnd strokeWidth={1} size={25} onClick={() => setMenuOpen((prev) => !prev)} />
                </Button>
            </div>
            <div className={`${menuOpen ? "block h-screen" : "hidden md:block"} side-bar-section`} >
                {sideButton.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="name-section">
                                <h2>{item.name}</h2>
                                <Icon varient="navIcon">
                                    {item.mainicon}
                                </Icon>
                            </div>
                            <div className="child-btn">
                                {item.children.map((btn) => (
                                    <NavLink key={btn.id} to={btn.to} varient="navBtn" className={({isActive}) => isActive ? "bg-tertiary text-tertiary-change nav-btn" : "nav-btn"} onClick={() => setMenuOpen(!menuOpen)} >
                                        {btn.icon ? ( 
                                            <Icon varient="navIcons">
                                                {btn.icon}
                                            </Icon>): (
                                            <div className="points" style={{background: btn.color}} />
                                        )}
                                        <span to={btn.to}>{btn.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}