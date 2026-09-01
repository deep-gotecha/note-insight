import { auth } from "../firebase";
import { API_BASE_URL } from "./api";



export const createNote = async (
  patientPseudo: string,
  visitDate: string,
  note: string,
  
) => {

  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

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
        userId: user.uid,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return response.json();
};




export const getNotes = async () => {

  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  const response = await fetch(
    `${API_BASE_URL}/notes/${user.uid}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
};



export const analyzeNote = async (
  patientPseudo: string,
  visitDate: string,
  note: string
) => {

  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  const response = await fetch(
    `${API_BASE_URL}/analyze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientPseudo,
        visitDate,
        note,
        userId: user.uid,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to analyze note");
  }

  return response.json();
};