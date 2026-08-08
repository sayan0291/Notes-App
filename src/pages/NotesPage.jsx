import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "../components/common/SectionHeader.jsx";
import useNotes from "../hooks/useNotes.js";
import dataHandle from "../data/dataHandle.js";

function deltaToPreview(content) {
  let delta = content;

  if (typeof content === "string") {
    try {
      delta = JSON.parse(content);
    } catch {
      return content.trim();
    }
  }

  if (!delta?.ops) return "";

  return delta.ops
    .map((op) => (typeof op.insert === "string" ? op.insert : ""))
    .join("")
    .trim();
}

function NoteCard({ note }) {
  const navigate = useNavigate();
  const preview = deltaToPreview(note.content);

  return (
    <button
      className="section-card"
      onClick={() => navigate(`/editor/${note.id}`)}
      type="button"
    >
      <h3>{note.title || "Untitled"}</h3>

      {note?.length > 0 && (
        <div className="section-card-tags">
          {note.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <p className="section-card-preview">
        {preview || "No content yet."}
      </p>
    </button>
  );
}

export default function NotesPage({data}) {
  const { documents, loading } = useNotes();
  
  const notes = dataHandle(data, documents);

  return (
    <div className="bg-[#121212] section">
      <SectionHeader sectiontitle={data} />
      <div className="section-body">
        {loading && <p className="section-empty">Loading documents...</p>}
        {!loading && notes.length === 0 && (
          <p className="section-empty">No documents found.</p>
        )}
        {!loading && notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
