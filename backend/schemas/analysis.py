from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    summary: str
    symptoms: list[str]
    riskLevel: str