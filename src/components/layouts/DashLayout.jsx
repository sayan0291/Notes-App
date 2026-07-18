import { Outlet } from "react-router-dom"
import { Logo, Navbar } from "../shared/Navbar"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {
    return(
        <>
            <div>
                <div className="flex">
                    <SideBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}