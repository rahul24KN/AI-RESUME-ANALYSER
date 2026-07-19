
def evaluate_answer(question, answer):

    answer = answer.lower()

    score = 0

    feedback = []


    if len(answer) > 30:
        score += 4
        feedback.append(
            "Good detailed answer."
        )
    else:
        feedback.append(
            "Answer is too short."
        )


    keywords = [
        "state",
        "component",
        "function",
        "data",
        "api",
        "hook",
        "database",
    ]


    matched = 0

    for word in keywords:

        if word in answer:
            matched += 1


    score += matched


    if matched >= 3:
        feedback.append(
            "Technical explanation looks strong."
        )
    else:
        feedback.append(
            "Add more technical depth."
        )


    final_score = min(score, 10)


    return {
        "score": final_score,
        "feedback": feedback,
    }
