import { SectionHeader } from "../components/common/SectionHeader.jsx"
import dataHandle from "../data/dataHandle.js"
import { useEffect, useState } from "react";

function NoteCard({ title, description }) {
  return (
    <div className="section-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function NotesPage({data}) {
  const [notes,setNotes] = useState([]);

  useEffect(() => {
    console.log(notes)
    setNotes(dataHandle(data))
  },[data])

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