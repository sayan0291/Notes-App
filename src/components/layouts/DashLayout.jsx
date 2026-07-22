import { Outlet } from "react-router-dom"
import { Logo, Navbar } from "../shared/Navbar"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {
    return(
        <>
            <div className="h-screen overflow-hidden">
                <div className="flex h-full">
                    <SideBar />
                    <main className="min-w-0 flex-1 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
