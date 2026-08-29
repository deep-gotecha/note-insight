from fastapi import APIRouter
from schemas.note import NoteCreate
from services.firestore import db
from datetime import datetime
from services.ai_service import analyze_note

router = APIRouter()


@router.post("/notes")
async def create_note(note: NoteCreate):

    note_data = {
        "patientPseudo": note.patientPseudo,
        "visitDate": note.visitDate,
        "noteText": note.note,
        "createdAt": datetime.utcnow().isoformat()
    }

    doc_ref = db.collection("notes").document()

    doc_ref.set(note_data)

    return {
        "message": "Note stored successfully",
        "documentId": doc_ref.id
    }

@router.get("/notes")
def get_notes():

    docs = db.collection("notes").stream()

    notes = []

    for doc in docs:
        note = doc.to_dict()
        note["id"] = doc.id
        notes.append(note)

    return notes


@router.post("/analyze")
async def analyze_clinical_note(note: NoteCreate):

    result = analyze_note(note.note)

    return result