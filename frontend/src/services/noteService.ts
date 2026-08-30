import { API_BASE_URL } from "./api";

export const createNote = async (
  patientPseudo: string,
  visitDate: string,
  note: string
) => {
  const response = await fetch(
    `${API_BASE_URL}/notes`,
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



export const getNotes = async () => {
  const response = await fetch(`${API_BASE_URL}/notes`);

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
};