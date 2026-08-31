import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";

const Dashboard = () => {
  const [refreshTrigger, setRefreshTrigger] =
    useState(0);

  const handleNoteCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Note Insight Dashboard</h1>

      <NoteForm
        onNoteCreated={handleNoteCreated}
      />

      <NotesList
        refreshTrigger={refreshTrigger}
      />
    </div>
  );
};

export default Dashboard;