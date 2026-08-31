import { Link } from "react-router-dom";
import NoteForm from "../components/NoteForm";


const Dashboard = () => {

  return (
    <div style={{ padding: "20px" }}>
      <h1>Note Insight Dashboard</h1>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <Link to="/history">
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            View History
          </button>
        </Link>
      </div>

      <NoteForm
        onNoteCreated={() => {}}
      />

    </div>
  );
};

export default Dashboard;