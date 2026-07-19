
QUESTION_BANK = {
    "python": [
        "What are Python decorators?",
        "Explain list comprehensions in Python.",
    ],

    "react": [
        "What is Virtual DOM in React?",
        "Explain React Hooks.",
    ],

    "mongodb": [
        "What is the difference between SQL and MongoDB?",
        "Explain MongoDB aggregation.",
    ],

    "node.js": [
        "What is middleware in Express.js?",
        "Explain asynchronous programming in Node.js.",
    ],

    "java": [
        "Explain OOP concepts in Java.",
        "What is JVM?",
    ],
}


def generate_questions(skills):

    questions = []

    for skill in skills:

        skill_lower = skill.lower()

        if skill_lower in QUESTION_BANK:

            questions.extend(
                QUESTION_BANK[skill_lower]
            )

    return questions
