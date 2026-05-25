import Button from "../components/ui/Buttons.jsx"
import { SectionHeader } from "../components/ui/SectionHeader.jsx"

const notes = [
  { title: "Api useEffect", description: "Fetch data inside useEffect to avoid render issues." },
  { title: "Sabarmati report", description: "Complete the report before the deadline." },
  { title: "Multiplication table", description: "Write a loop from 1 to 10 and print each result." },
  { title: "React", description: "A JavaScript library for building user interfaces." },
  { title: "List style none", description: "Use list-style-type: none to remove bullet points." },
  { title: "Heapsort", description: "A comparison-based sorting algorithm using a binary heap." },
  { title: "Api useEffect", description: "Fetch data inside useEffect to avoid render issues." },
  { title: "Sabarmati report", description: "Complete the report before the deadline." },
  { title: "Multiplication table", description: "Write a loop from 1 to 10 and print each result." },
  { title: "React", description: "A JavaScript library for building user interfaces." },
  { title: "List style none", description: "Use list-style-type: none to remove bullet points." },
  { title: "Heapsort", description: "A comparison-based sorting algorithm using a binary heap." },
];

function NoteCard({ title, description }) {
  return (
    <div className="section-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export const AllNotes = () => {
  return (
    <div className="bg-[#121212] section">
      <SectionHeader sectiontitle="All Notes" />
      <div className="section-body">
        {notes.map((note, i) => (
          <NoteCard key={i} title={note.title} description={note.description} />
        ))}
      </div>
    </div>
  );
}