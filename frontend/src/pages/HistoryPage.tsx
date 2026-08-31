import NotesList from "../components/NotesList";

const HistoryPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Clinical Note History</h1>

      <NotesList refreshTrigger={0} />
    </div>
  );
};

export default HistoryPage;