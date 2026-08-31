from pydantic import BaseModel

class NoteCreate(BaseModel):
    patientPseudo: str
    visitDate: str
    note: str
    userId: str