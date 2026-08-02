import { useState,useEffect, use } from "react"
import { supabase,userProfile } from "../../Database/Supabase-client.js"
import AuthContext from "./auth.context";

export default function AuthProvider({ children }) {
    const [user,setUser] = useState([]);
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        let timeoutId;

        const fetchUser = async () => {
            try {
                const { data: { user }, error: authError } = await supabase.auth.getUser();

                if (authError) throw authError;

                const profile = await userProfile(user.id)

                if(!profile) throw "Something went wrong";
                
                if (profile) setUser(profile);
            
            } catch (error) {
                console.error("Unable to get the user data:", error);
            } finally {
                timeoutId = setTimeout(() => setLoading(false), 3000);
            }
        };

        fetchUser();

        return () => clearTimeout(timeoutId);
    },[])

    const login = async () => {
        try {
            const { data: { user: userData }, error: authError } = await supabase.auth.getUser();

            if (authError) throw authError;
            if (userData) setUser(userData);
        } catch (error) {
            console.log("login data error", error);
        } finally {
            setLoading(false);
        }
    };
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
