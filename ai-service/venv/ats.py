def calculate_ats_score(resume_skills, jd_skills):

    matched_skills = []

    missing_skills = []


    for skill in jd_skills:

        if skill.lower() in [
            s.lower() for s in resume_skills
        ]:
            matched_skills.append(skill)

        else:
            missing_skills.append(skill)


    # Score calculation
    if len(jd_skills) == 0:
        score = 0
    else:
        score = int(
            (len(matched_skills) / len(jd_skills)) * 100
        )


    # Suggestions
    suggestions = []

    if missing_skills:
        suggestions.append(
            f"Add missing skills: {', '.join(missing_skills)}"
        )

    if score < 60:
        suggestions.append(
            "Improve resume with more relevant projects and keywords"
        )


    return {
        "ats_score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "suggestions": suggestions,
    }