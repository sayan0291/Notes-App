import { Supabse } from "../Database/Supabase-client";

export const AddNotes = async (Notesdata) => {
    const {data,error} = await Supabse.from('NotesFolder').insert(Notesdata).single();
    if(error){
        console.log("error in add data",error);
        return;
    }
}

export const ReadData = async (setData) => {
    const {data,error} = await Supabse.from("NotesFolder").select("*").order("created_at",{ascending: true})

    if(error){
        console.error("error in Read Data",error);
        return;
    }else{
        setData(data)
    }
}

export const DeleteData = async (id) => {

    const {data,error} = await Supabse.from("NotesFolder").delete().eq("id",id)
}