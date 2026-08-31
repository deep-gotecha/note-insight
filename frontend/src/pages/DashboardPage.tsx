import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";

const DashboardPage = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNoteCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <>
      <h1>Note Insight Dashboard</h1>

      <NoteForm onNoteCreated={handleNoteCreated} />

      <NotesList refreshTrigger={refreshTrigger} />
    </>
  );
};

export default DashboardPage;