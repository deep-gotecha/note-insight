import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";
import NoteForm from "../components/NoteForm";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Note Insight Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
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

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <NoteForm onNoteCreated={() => {}} />
    </div>
  );
};

export default Dashboard;