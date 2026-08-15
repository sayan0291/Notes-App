import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { SideBar,MobileNavbar } from "../shared"

export const DashLayout = () => {
    const [open,setOpen] = useState(false)

    useEffect(() => {

    }, [])

    return(
        <div className="h-screen overflow-auto">
            <MobileNavbar open={open} setOpen={setOpen} />
            <div className="flex h-full">
                <SideBar open={open} />
                <main className="min-w-0 flex-1 overflow-auto scrollbar-hide">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
