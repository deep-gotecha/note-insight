import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Note Insight Dashboard</h1>

      <NoteForm />

      <NotesList />
    </div>
  );
};

export default Dashboard;