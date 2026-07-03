import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supbaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY

export const supabase =  createClient(supabaseURL,supbaseApiKey)

export const userProfile = async ({name,email,password}) => {
    try {
        const { data:authData,error } = await supabase.auth.signUp({email,password});
        if(error) throw error.message;

        const { error:profileError } = supabase
                                        .from('users')
                                        .insert({user_id: authData.user.id,name: name,email: email})
        if(profileError) throw profileError;
    } catch (error) {
        console.log("Registration Error",error)
    }
    
}


export const createImageUrl = async (file) => {

    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `notes/${fileName}`;

    console.log(filePath)

    try {
        const { error:uploadError } = await supabase.storage
                                                .from("post-images")
                                                .upload(filePath,file);
        throw new error;
        
    } catch (error) {
        console.log("storage upload error",error);
        return;
    }

    try {
        const { data } = await supabase
                            .storage
                            .from('post-images')
                            .getPublicUrl(filePath)

        const publicUrl = data.publicUrl;
        return publicUrl;
    } catch (error) {
        console.log("public url error",error);
        return;
    }
}