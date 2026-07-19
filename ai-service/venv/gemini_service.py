
import os

from dotenv import load_dotenv

from google import genai


load_dotenv()


client = genai.Client(
    api_key=os.getenv(
        "GEMINI_API_KEY"
    )
)



def generate_ai_questions(skills):

    return f"""
1. Explain React Hooks.
2. What is JWT Authentication?
3. Explain MongoDB indexing.
4. What is FastAPI?
5. Difference between SQL and NoSQL?
"""



def evaluate_ai_answer(
    question,
    answer
):

    feedback = f"""
Question:
{question}

Candidate Answer:
{answer}

Evaluation:
Good understanding of the topic.

Strengths:
- Clear explanation
- Good technical understanding

Weaknesses:
- Could include more examples
- Add deeper technical details

Final Score: 8/10
"""

    return feedback
