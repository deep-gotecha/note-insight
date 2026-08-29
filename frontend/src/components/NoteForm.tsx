import { useState } from "react";
import { createNote } from "../services/noteService";

const NoteForm = () => {
  const [patientPseudo, setPatientPseudo] = useState<string>("");
  const [visitDate, setVisitDate] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAnalyze = async () => {
    setError("");
    setSuccess("");

    if (!patientPseudo.trim()) {
      setError("Patient Pseudonym is required");
      return;
    }

    if (!visitDate) {
      setError("Visit Date is required");
      return;
    }

    if (!note.trim()) {
      setError("Clinical Note is required");
      return;
    }

    try {
      setLoading(true);
      // backend call will go here later

      const result = await createNote(
        patientPseudo,
        visitDate,
        note
      );

      console.log(result);

      setSuccess("Note stored successfully");
    } 
    catch (err) {
      setError("Failed to save note.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Clinical Note</h2>

      <div>
        <label>Patient Pseudonym</label>
        <br />
        <input
          type="text"
          value={patientPseudo}
          onChange={(e) => setPatientPseudo(e.target.value)}
          placeholder="P001"
        />
      </div>

      <br />

      <div>
        <label>Visit Date</label>
        <br />
        <input
          type="date"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Clinical Note</label>
        <br />
        <textarea
          rows={8}
          cols={60}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter clinical note..."
        />
      </div>

      <br />

      {error && (<p style={{ color: "red" }}>{error}</p>)}
      {success && (<p style={{ color: "green" }}>{success}</p>)}

      <button
        onClick={handleAnalyze} 
        disabled={loading}
      >
        {loading ? "Loading..." : "Analyze"}
      </button>
    </div>
  );
};

export default NoteForm;