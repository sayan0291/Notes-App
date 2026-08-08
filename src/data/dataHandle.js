import pinnedSorting from "../lib/filter/pinnedSorting.js"
import tagsSorting from "../lib/filter/tagsSorting.js"

export default function dataHandle(data,documents) {
    
    if( data==="pincheck" ){
        const sortednotes = pinnedSorting(documents);
        return sortednotes;
    }else if(data==="allnote"){
        return documents;
    }
    else{
        const sortedNotes = tagsSorting(documents)
        return sortedNotes;
    }
}
