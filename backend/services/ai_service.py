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

Analyze the note and return ONLY valid JSON.

Rules:
1. Return JSON only.
2. No markdown.
3. No explanation.
4. No extra text.
5. riskLevel must be one of:
   Low
   Medium
   High

Required JSON format:

{{
  "summary": "short clinical summary",
  "symptoms": ["symptom1", "symptom2"],
  "riskLevel": "Low"
}}

Clinical Note:
{note_text}
"""

    response = model.generate_content(prompt)

    result_text = response.text.strip()
    if not result_text:
        raise ValueError("Gemini returned empty response")

    result_text = result_text.replace("```json", "")
    result_text = result_text.replace("```", "")
    result_text = result_text.strip()

    return json.loads(result_text)