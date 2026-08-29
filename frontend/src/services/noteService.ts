export const createNote = async (
  patientPseudo: string,
  visitDate: string,
  note: string
) => {
  const response = await fetch(
    "http://127.0.0.1:8000/notes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientPseudo,
        visitDate,
        note,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return response.json();
};