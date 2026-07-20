import { notes } from "../../data/dataHandle"

export default function pinnedSorting(){
    const pinNotes = notes.filter((e) => e.pinned === true).map(obj => {
        return obj;
    })
    return pinNotes;
}