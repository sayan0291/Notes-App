import { notes } from "../../data/dataHandle"

export default function tagsSorting(tag) {
    const sortedNotes = notes.filter((e) => e.tags === tag).map(obj => {
        return obj;
    })

    return sortedNotes;
}