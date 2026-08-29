import { useEffect, useState } from "react";

interface Note {
  id: string;
  patientPseudo: string;
  visitDate: string;
  noteText: string;
}

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/notes"
      );

      const data = await response.json();

      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Saved Notes</h2>

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