import { useState } from "react";
import { createNote, analyzeNote,} from "../services/noteService";

interface NoteFormProps {
  onNoteCreated: () => void;
}

const NoteForm = ({
  onNoteCreated,
}: NoteFormProps) => {
  const [patientPseudo, setPatientPseudo] = useState<string>("");
  const [visitDate, setVisitDate] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
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

      const analysis = await analyzeNote(
        patientPseudo,
        visitDate,
        note
      ); 
      console.log(analysis);

      setAnalysisResult(analysis);

      const result = await createNote(
        patientPseudo,
        visitDate,
        note
      );

      console.log(result);

      onNoteCreated();

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

      {analysisResult && (
        <div
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginTop: "20px",
          }}
        >
          <h3>AI Analysis</h3>

          <p>
            <strong>Summary:</strong>{" "}
            {analysisResult.summary}
          </p>

          <p>
            <strong>Symptoms:</strong>{" "}
            {analysisResult.symptoms.join(", ")}
          </p>

          <p>
            <strong>Risk Level:</strong>{" "}
            {analysisResult.riskLevel}
          </p>

          <h4>Recommendations</h4>

          <ul>
            {analysisResult.recommendations?.map(
              (recommendation: string, index: number) => (
                <li key={index}>
                  {recommendation}
                </li>
              )
            )}
          </ul>

          <h5>Conditions</h5>

          {analysisResult.conditions?.map(
            (condition: any, index: number) => (
              <div
                key={index}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>Condition:</strong>{" "}
                  {condition.conditionName}
                </p>

                <p>
                  <strong>ICD-10:</strong>{" "}
                  {condition.icd10Code}
                </p>

                <p>
                  <strong>Evidence:</strong>{" "}
                  {condition.evidenceQuote}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {condition.documentationStatus}
                </p>

                <p>
                  <strong>Confidence:</strong>{" "}
                  {(condition.confidence * 100).toFixed(0)}%
                </p>
              </div>
            )
          )}  

        </div>
      )}


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