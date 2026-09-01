from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.notes import router as notes_router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://note-insight-livid.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend Running"}


app.include_router(notes_router)