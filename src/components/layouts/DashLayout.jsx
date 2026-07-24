import { Outlet } from "react-router-dom"
import { AuthProvider } from "../../context/Auth"
import { SideBar } from "../shared/SideBar"

export const DashLayout = () => {
    return(
        <>
            <AuthProvider>
                <div className="h-screen overflow-hidden">
                    <div className="flex h-full">
                        <SideBar />
                        <main className="min-w-0 flex-1 overflow-y-auto">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </AuthProvider>
        </>
    )
}
