from services.firestore import db

doc_ref = db.collection("notes").document()

doc_ref.set({
    "test": "connection successful"
})

print("Firestore Connected")