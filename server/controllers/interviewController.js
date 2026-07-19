const axios = require("axios");


// Evaluate Interview Answer
const evaluateAnswer = async (
  req,
  res
) => {

  try {

    const {
      question,
      answer,
    } = req.body;


    const aiResponse =
      await axios.post(
        "http://127.0.0.1:8000/gemini-evaluate",
        {
          question,
          answer,
        }
      );


    res.status(200).json({

      message:
        "Answer evaluated successfully",

      evaluation:
        aiResponse.data,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        error.message,
    });
  }
};


module.exports = {
  evaluateAnswer,
};
