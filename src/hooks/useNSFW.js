import { useState,useEffect } from "react"
import * as nsfwjs from "nsfwjs"

export default function useNSFW() {
    const [model,setModel] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        async function init() {
            const loaded = await nsfwjs.load();
            console.log("nsfwjs is running")
            setModel(loaded);
            setLoading(false)
        }
        init();
    },[]);

    return {
        model,
        loading
    };
}