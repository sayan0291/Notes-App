import { Button } from "../components/common"
import useAuth from "../hooks/useAuth.js"

export const Settings = () => {
    const { user,logout } = useAuth();

    return(
        <div className="bg-black h-screen overflow-hidden scrollbar-hide">
            <div className="flex-bw-ic p-4 text-white">
                <h3 className="uppercase text-md">Settings</h3>
                <h1>{user.name}</h1>
            </div>
            <div className="flex-jc-ic">
                <div className="bg-toolbar min-h-[300px] w-[80%]">
                    
                </div>
            </div>
            <Button varient="logBtn" onClick={logout}>
                logout
            </Button>
        </div>
    )
}