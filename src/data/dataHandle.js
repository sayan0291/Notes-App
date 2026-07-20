import pinnedSorting from "../lib/filter/pinnedSorting.js"
import tagsSorting from "../lib/filter/tagsSorting.js"

export const notes = [
  { title: "Api useEffect", pinned: true, tags: "work", description: "Fetch data inside useEffect to avoid render issues." },
  { title: "Sabarmati report", pinned: false, tags: "personal", description: " Complete the report before the deadline.Complete the report before the deadline.Complete the report before the deadline.Complete the report before the deadline.Complete the report before the deadline.Complete the report before the deadline.Complete the report before the deadline." },
  { title: "Multiplication table", pinned: true, tags: "work", description: "Write a loop from 1 to 10 and print each result." },
  { title: "React", pinned: true, tags: "ideas", description: "A JavaScript library for building user interfaces." },
  { title: "List style none", pinned: true, tags: "ideas", description: "Use list-style-type: none to remove bullet points." },
  { title: "Heapsort", pinned: false, tags: "personal", description: "A comparison-based sorting algorithm using a binary heap." },
  { title: "Api useEffect", pinned: true, tags: "study", description: "Fetch data inside useEffect to avoid render issues." },
  { title: "Sabarmati report", pinned: false, tags: "personal", description: "Complete the report before the deadline." },
  { title: "Multiplication table", pinned: false, tags: "work", description: "Write a loop from 1 to 10 and print each result." },
  { title: "React", pinned: true, tags: "personal", description: "A JavaScript library for building user interfaces." },
  { title: "List style none", pinned: true, tags: "ideas", description: "Use list-style-type: none to remove bullet points." },
  { title: "Heapsort", pinned: false, tags: "work", description: "A comparison-based sorting algorithm using a binary heap." },
]

export default function dataHandle(data) {
    if( data==="pincheck" ){
        const sortednotes = pinnedSorting();
        return sortednotes;
    }else if(data==="allnote"){
        return notes;
    }
    else{
        const sortedNotes = tagsSorting(data)
        return sortedNotes;
    }
}
