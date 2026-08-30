import { useEffect, useState } from "react";
import { getNotes } from "../services/noteService";

interface Note {
  id: string;
  patientPseudo: string;
  visitDate: string;
  noteText: string;
}



const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError("");


      const data = await getNotes();

      
      setNotes(data);
    } catch (error) {
      console.error(error);

      setError("Unable to load notes");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading notes...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Saved Notes</h2>

      {notes.length === 0 && (
        <p>No notes found.</p>
      )}

      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>Patient:</strong>{" "}
            {note.patientPseudo}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {note.visitDate}
          </p>

          <p>
            <strong>Note:</strong>{" "}
            {note.noteText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;