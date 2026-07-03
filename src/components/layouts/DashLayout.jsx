import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/Navbar"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {
    return(
        <>
            <div>
                <div>
                    <SideBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}