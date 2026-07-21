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

export const createImageUrl = async (file,user_id) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `notes/${fileName}`;

    try {
        const { error: uploadError } = await supabase.storage
            .from("post-images")
            .eq('user_id',user_id)
            .upload(filePath, file);

        if (uploadError) {
            console.error("storage upload error", uploadError);
            return;
        }
    } catch (err) {
        console.error("storage upload error (unexpected)", err);
        return;
    }

    try {
        const { data } = await supabase.storage
            .from('post-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    } catch (err) {
        console.error("public url error", err);
        return;
    }
}