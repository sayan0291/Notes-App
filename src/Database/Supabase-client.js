import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supbaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY

export const supabase =  createClient(supabaseURL,supbaseApiKey)

export const handleRegister = async ({name,email,password}) => {
    const { data:authData,error } = await supabase.auth.signUp({email,password});
    if(error) throw error.message;

    const { error:profileError } = await supabase
                                    .from('users')
                                    .insert({user_id: authData.user.id,name,email})
    if(profileError) throw profileError.message;
    return authData.user;
}

export const userProfile = async (id) => {
    const { data,error } = await supabase
                            .from('users')
                            .select('*')
                            .eq('user_id',id)
                            .single();
    if(error) throw error;
    return data;
}

export const handleLogin = async ({email,password}) => {
    const { data,error } = await supabase.auth.signInWithPassword({email,password});

    if(error) throw error;
    return data.user;
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