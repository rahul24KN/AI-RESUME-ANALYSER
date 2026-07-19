from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File
import shutil
import os
from pydantic import BaseModel
from ats import calculate_ats_score
from interview import generate_questions
from evaluator import evaluate_answer


from gemini_service import (
    generate_ai_questions,
    evaluate_ai_answer,
)


from resume_parser import (
    extract_text_from_pdf,
    extract_text_from_docx,
)

from skills import extract_skills


app = FastAPI()


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "AI Service Running"}



@app.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):

    # Save uploaded file
    file_path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)


    # Extract text
    if file.filename.endswith(".pdf"):

        text = extract_text_from_pdf(file_path)

    elif file.filename.endswith(".docx"):

        text = extract_text_from_docx(file_path)

    else:
        return {
            "error": "Unsupported file format"
        }


    # Extract skills
    skills = extract_skills(text)


    return {
        "file_name": file.filename,
        "skills": skills,
        "resume_text": text[:1000]
    }

class ATSRequest(BaseModel):
    resume_skills: list
    jd_skills: list


class InterviewRequest(BaseModel):
    skills: list


@app.post("/generate-questions")
def generate_interview_questions(
    data: InterviewRequest
):

    questions = generate_questions(
        data.skills
    )

    return {
        "questions": questions
    }


@app.post("/calculate-ats")
def calculate_ats(data: ATSRequest):

    result = calculate_ats_score(
        data.resume_skills,
        data.jd_skills
    )

    return result


class EvaluationRequest(BaseModel):

    question: str

    answer: str


@app.post("/evaluate-answer")
def evaluate_interview_answer(
    data: EvaluationRequest
):

    result = evaluate_answer(
        data.question,
        data.answer,
    )

    return result




@app.post("/gemini-questions")
def gemini_questions(
    data: InterviewRequest
):

    try:

        result = generate_ai_questions(
            data.skills
        )

        return {
            "questions": result
        }

    except Exception as e:

        print("GEMINI ERROR:", e)

        return {
            "error": str(e)
        }


@app.post("/gemini-evaluate")
def gemini_evaluate(
    data: EvaluationRequest
):

    result = evaluate_ai_answer(
        data.question,
        data.answer
    )

    return {
        "evaluation": result
    }



