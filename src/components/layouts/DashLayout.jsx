import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/Navbar"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {
    return(
        <>
            <div>
                <Navbar className="sticky z-30 p-4 bg-black" />
                <div className="flex">
                    <SideBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}