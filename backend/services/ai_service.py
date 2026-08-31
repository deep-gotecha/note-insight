import os
import json

import google.generativeai as genai

from dotenv import load_dotenv


load_dotenv()


genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)


model = genai.GenerativeModel(
    "gemini-3.6-flash"
)


def analyze_note(note_text: str):

    prompt = f"""
You are a clinical note analysis assistant.

Analyze the following clinical note and return ONLY valid JSON.

Required JSON format:

{{
    "summary": "short clinical summary",
    "symptoms": ["symptom1", "symptom2"],
    "riskLevel": "Low"
}}

Risk level must be:
Low
Medium
High

Clinical Note:
{note_text}
"""

    response = model.generate_content(prompt)

    result_text = response.text.strip()

    result_text = result_text.replace("```json", "")
    result_text = result_text.replace("```", "")
    result_text = result_text.strip()

    return json.loads(result_text)