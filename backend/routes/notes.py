from fastapi import APIRouter
from datetime import datetime

from schemas.note import NoteCreate
from schemas.analysis import AnalysisResponse

from services.firestore import db
from services.ai_service import analyze_note

router = APIRouter()


@router.post("/notes")
async def create_note(note: NoteCreate):
    
    analysis = analyze_note(note.note)
    
    print("\n===== ANALYSIS RESULT =====")
    print(analysis)
    print("===========================\n")


    validated_analysis = AnalysisResponse(**analysis)

    note_data = {
        "userId": note.userId,

        "patientPseudo": note.patientPseudo,
        "visitDate": note.visitDate,
        "noteText": note.note,

        "createdAt": datetime.utcnow().isoformat(),

        "summary": analysis["summary"],
        "symptoms": analysis["symptoms"],
        "riskLevel": analysis["riskLevel"],
        
        "recommendations": analysis["recommendations"],
        "conditions": analysis["conditions"],
    }

    doc_ref = db.collection("notes").document()

    doc_ref.set(note_data)

    return {
        "message": "Note stored successfully",
        "documentId": doc_ref.id
    }


@router.get("/notes/{user_id}")
def get_notes(user_id: str):

    docs = (
        db.collection("notes")
        .where("userId", "==", user_id)
        .stream()
    )

    notes = []

    for doc in docs:
        note = doc.to_dict()
        note["id"] = doc.id
        notes.append(note)

    return notes


@router.post("/analyze", response_model=AnalysisResponse)
async def analyze_clinical_note(note: NoteCreate):

    analysis = analyze_note(note.note)

    validated_analysis = AnalysisResponse(**analysis)

    return validated_analysis