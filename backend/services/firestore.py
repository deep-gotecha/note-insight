import os
import json

import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

from dotenv import load_dotenv


load_dotenv()


if not firebase_admin._apps:

    firebase_credentials = json.loads(
        os.getenv("FIREBASE_CREDENTIALS")
    )

    cred = credentials.Certificate(
        firebase_credentials
    )

    firebase_admin.initialize_app(cred)


db = firestore.client()