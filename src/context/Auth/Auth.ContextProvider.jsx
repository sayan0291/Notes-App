import { useState,useEffect, use } from "react"
import { supabase } from "../../Database/Supabase-client.js"
import AuthContext from "./auth.context";

export default function AuthProvider({ children }) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        try {
            const userData = async ()=> {
                    const {data: {userData},error: authError} = await supabase.auth.getUser();

                    if(user) setUser(userData);
                    setLoading(false);
            }
        } catch (error) {
            console.log("Unable to get the user data",error)
        }
    },[])

    const login = async () => {
        try {
            const userData = async ()=> {
                    const {data: {userData},error: authError} = await supabase.auth.getUser();

                    if(user) setUser(userData);
                    setLoading(false);
            }
        } catch (error) {
            console.log("login data error",error)
        }
    }
    const logout = () => {
        setUser(null);
    }

    const value = { user,loading,login,logout };
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
