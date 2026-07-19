SKILLS_DB = [
    "python",
    "java",
    "javascript",
    "react",
    "node.js",
    "mongodb",
    "sql",
    "fastapi",
    "django",
    "aws",
    "docker",
    "kubernetes",
    "machine learning",
    "data science",
    "spring boot",
]


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in SKILLS_DB:

        if skill.lower() in text:
            found_skills.append(skill)

    return list(set(found_skills))