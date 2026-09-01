from pydantic import BaseModel

class Condition(BaseModel):
    conditionName: str
    evidenceQuote: str
    documentationStatus: str
    icd10Code: str
    confidence: float


class AnalysisResponse(BaseModel):
    summary: str
    symptoms: list[str]
    riskLevel: str
    recommendations: list[str]
    conditions: list[Condition]