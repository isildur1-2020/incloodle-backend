const verifyCreateFields = (req, res, next) => {
  const { name, course_id, num_of_questions } = req.query;
  if (!name || !course_id || !num_of_questions)
    return res.status(400).json({
      err: true,
      message:
        "You must provide `name`, `course_id` and `num_of_questions` fields",
    });
  if (isNaN(parseInt(course_id)) || isNaN(parseInt(num_of_questions)))
    return res.status(400).json({
      err: true,
      message: "`course_id` and `num_of_questions` must be a number",
    });
  next();
};

module.exports = { verifyCreateFields };
