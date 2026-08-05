import { Outlet } from "react-router-dom"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {

    return(
        <div className="h-screen overflow-auto">
            <div className="flex h-full">
                <SideBar />
                <main className="min-w-0 flex-1 overflow-auto scrollbar-hide">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
