def analyze_note(note_text: str):

    symptoms = []

    text = note_text.lower()

    if "headache" in text:
        symptoms.append("headache")

    if "fever" in text:
        symptoms.append("fever")

    if "nausea" in text:
        symptoms.append("nausea")

    if "dizziness" in text:
        symptoms.append("dizziness")

    if len(symptoms) >= 3:
        risk_level = "High"
    elif len(symptoms) >= 1:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "summary": note_text,
        "symptoms": symptoms,
        "riskLevel": risk_level
    }