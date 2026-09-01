# Note Insight

AI-powered clinical note analysis platform that helps healthcare professionals document, review, and analyze clinical notes with structured insights, symptom extraction, risk assessment, ICD-10 condition mapping, and recommendations.

---

## Overview

Note Insight is a full-stack web application built to streamline clinical documentation and provide AI-assisted insights from clinical notes.

Users can:

- Securely log in and manage notes
- Create and analyze clinical notes
- Extract symptoms automatically
- Generate concise clinical summaries
- Assess patient risk levels
- Map symptoms to ICD-10 conditions
- Receive clinical recommendations
- Store and review note history

The application is deployed using:

- Frontend: React + TypeScript + Vercel
- Backend: FastAPI + Python + Render
- Authentication: Firebase Authentication

---

# Live Demo

### Frontend

https://note-insight-livid.vercel.app

### Backend

https://note-insight-backend-6qan.onrender.com

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- CSS
- Axios

## Backend

- FastAPI
- Python
- Pydantic

## Authentication

- Firebase Authentication

## Deployment

- Vercel
- Render

---

# Features

## Authentication

- User registration
- User login
- Protected dashboard routes
- Logout functionality

---

## Clinical Note Creation

Users can create clinical notes by entering:

- Patient pseudonym
- Visit date
- Clinical observations

---

## AI Analysis

The system generates:

### Summary

A concise explanation of the patient encounter.

Example:

Patient reports experiencing headache, body pain, knee pain, and acidity.

---

### Symptom Extraction

Identifies symptoms from free-text clinical notes.

Example:

- Headache
- Body pain
- Knee pain
- Acidity

---

### Risk Assessment

Categorizes notes into:

- Low Risk
- Medium Risk
- High Risk

---

### ICD-10 Mapping

Maps symptoms to corresponding ICD-10 codes.

Example:

| Condition | ICD-10 |
|------------|----------|
| Headache | R51.9 |
| Myalgia | M79.10 |
| Arthralgia of Knee | M25.569 |
| Dyspepsia | K30 |

---

### Recommendations

Provides contextual recommendations based on documented symptoms.

Example:

- Follow-up if symptoms persist
- Lifestyle modifications
- OTC management guidance where appropriate

---

# System Architecture

```text
┌──────────────────┐
│ React Frontend   │
│  (Vercel)        │
└────────┬─────────┘
         │
         │ HTTPS
         ▼
┌──────────────────┐
│ FastAPI Backend  │
│   (Render)       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Analysis Engine  │
│ ICD Mapping      │
│ Risk Assessment  │
│ Recommendations  │
└──────────────────┘
```

---

# Data Model

The application currently uses a structured note model.

```text
Clinical Note
│
├── Patient Pseudonym
├── Visit Date
├── Clinical Note Text
│
└── Analysis Result
      │
      ├── Summary
      ├── Symptoms
      ├── Risk Level
      ├── Recommendations
      └── Conditions
             │
             ├── Condition Name
             ├── ICD-10 Code
             ├── Evidence
             ├── Status
             └── Confidence
```

### Example

```json
{
  "patient_pseudonym": "P033",
  "visit_date": "2026-09-02",
  "clinical_note": "Patient reports headache and knee pain."
}
```

Analysis Response:

```json
{
  "summary": "...",
  "symptoms": ["headache", "knee pain"],
  "risk_level": "Low",
  "recommendations": [...],
  "conditions": [...]
}
```

---

# Project Structure

```text
note_insight/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── firebase/
│   │   └── App.tsx
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── schemas/
│   ├── data/
│   └── main.py
│
├── requirements.txt
├── package.json
└── README.md
```

---

# Running Locally (From Zero)

## 1. Clone Repository

```bash
git clone <repository-url>
cd note_insight
```

---

## 2. Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows

```bash
venv\Scripts\activate
```

Mac/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend should run on:

```text
http://localhost:8000
```

Verify:

```text
http://localhost:8000
```

Expected response:

```json
{
  "message": "Backend Running"
}
```

---

## 3. Frontend Setup

Open a new terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend should run on:

```text
http://localhost:5173
```

---

## 4. Firebase Configuration

Create a Firebase project.

Enable:

- Authentication
- Email/Password Sign-In

Create:

```text
frontend/src/firebase/firebase.ts
```

Add your Firebase credentials:

```typescript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

## 5. Verify End-to-End Flow

1. Register a user
2. Login
3. Open Dashboard
4. Enter a clinical note
5. Submit analysis
6. Verify generated results

If all steps succeed, the project is running correctly.

---

# Design Decisions

## 1. FastAPI Instead of Flask

### Alternative

Flask

### Why FastAPI

- Built-in request validation
- Automatic API documentation
- Better type safety
- Cleaner schema management
- Faster development for API-heavy applications

---

## 2. Rule-Based Clinical Analysis Instead of External LLM APIs

### Alternative

OpenAI or other LLM providers

### Why This Choice

- No API costs
- Predictable outputs
- Easier testing
- Faster response times
- Simpler deployment

This was appropriate for the assessment scope and timeline.

---

## 3. Firebase Authentication Instead of Custom Authentication

### Alternative

Building authentication from scratch

### Why This Choice

- Secure by default
- Reduced implementation time
- Production-ready authentication
- Less risk of security issues

---

## 4. Separate Frontend and Backend Deployments

### Alternative

Single monolithic deployment

### Why This Choice

- Independent scaling
- Easier maintenance
- Cleaner architecture
- Industry-standard deployment pattern

---

# Known Limitations

Current implementation focuses on demonstrating the end-to-end workflow rather than replacing a production clinical system.

Limitations include:

- Limited symptom vocabulary
- Static ICD mapping dataset
- Rule-based recommendations
- No clinician note editing history
- No collaborative review workflow
- No advanced patient timeline view

---

# What I Would Build Next (One More Week)

If given one additional week, I would focus on improving the human workflow around clinical documentation rather than only adding more AI features.

### Note Editing Workflow

- Edit previously created notes
- Track note revisions
- Maintain version history
- Compare changes between versions

### Clinical Review Process

- Mark notes as reviewed
- Add reviewer comments
- Request clarification on documentation
- Review status tracking

### Smart Draft Assistance

- Improve incomplete notes
- Suggest missing clinical information
- Highlight ambiguous wording
- Improve documentation quality

### Patient Timeline View

- Chronological history of notes
- Previous symptoms and diagnoses
- Follow-up tracking
- Trend visualization

### Better Risk Analysis

- More nuanced risk scoring
- Multi-symptom reasoning
- Confidence explanations

### Search and Filtering

- Search historical notes
- Filter by symptom
- Filter by condition
- Filter by date ranges

### Export Functionality

- PDF export
- Structured clinical reports
- Downloadable summaries

### Audit and Compliance Features

- Activity logging
- Review tracking
- Documentation audit trails

These enhancements would make the product more useful in real clinical workflows and improve day-to-day usability.

---

# Time Spent

Approximately 20–25 hours.

This includes:

- Requirements analysis
- Architecture design
- Frontend development
- Backend development
- Authentication integration
- Clinical analysis implementation
- Deployment
- Testing
- Debugging
- Documentation

---

# Author

Deep Gotecha
AIML Engineer
