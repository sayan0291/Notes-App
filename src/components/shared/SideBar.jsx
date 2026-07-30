import { Button, Icon } from "../common";
import { TextAlignEnd,X,NotebookText,Library,NotepadText,Pin,Trash2,Tags, CircleUserRound, Settings, Cog  } from 'lucide-react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Navbar.jsx";
import useAuth from "../../hooks/useAuth.js"

const sideButton = [
    {id:1,name: "Library",children: [ {id: "all-notes",to: "/library/all-notes",name: "All notes",icon: <NotepadText className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />},{id: "pinned",to: "/library/pinned",name: "Pinned",icon: <Pin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />} ]},
    {id:2,name: "Tags",children: [{id: "work",to: "/tags/work",name:"Work",color: "#7F77DD"},{id: "personal",to: "/tags/personal",name:"Personal",color: "#1D9E75"},{id: "ideas",to: "/tags/ideas",name:"Ideas",color:"#D85A30"},{id: "study",to: "/tags/study",name:"Study",color: "#378ADD"}]}
]

export const SideBar = () => {
    const [open,setOpen] = useState(true);
    const { user } = useAuth();
    console.log(user)

    return (
        <div className={`${open ? "flex" : "hidden" } side-bar`}>
            <div className="flex-ic p-2">
                <Logo className1="text-white" />
            </div>
            <div className="side-bar-section" >
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
                                    <NavLink key={btn.id} to={btn.to} className={({isActive}) => isActive ? "bg-toolbar text-tertiary-change nav-btn" : "nav-btn"} >
                                        {btn.icon ? ( 
                                            <Icon varient="navIcons">
                                                {btn.icon}
                                            </Icon>): (
                                            <div className="points" style={{background: btn.color}} />
                                        )}
                                        <h2 to={btn.to}>{btn.name}</h2>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div class="sidebar-footer">
                <div class="avatar">{user.name.at(0)}</div>
                <div class="profile-info">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
                <div class="profile-actions">
                    <Button varient="profileBtn">
                        <Cog />
                    </Button>
                </div>
            </div>
        </div>
    )
}