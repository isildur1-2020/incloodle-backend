const verifyFields = (req, res, next) => {
  try {
    const { exam_id, answers, init_date } = req.body;
    const dataAnswers = JSON.parse(answers);
    if (!exam_id || !answers || !init_date)
      return res.status(400).json({
        err: true,
        message:
          "You must provide a `exam_id`, `answers` and `init_date` fields",
      });
    if (isNaN(parseInt(exam_id)))
      return res.status(400).json({
        err: true,
        message: "`exam_id` field must be a number",
      });
    if (typeof dataAnswers !== "object")
      return res.status(400).json({
        err: true,
        message: "`answers` field must be an array",
      });
    req.dataAnswers = dataAnswers;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = verifyFields;
