const verifyCreateFields = (req, res, next) => {
  const { name, course_id, num_of_questions, max_score } = req.query;
  if (!name || !course_id || !num_of_questions || !max_score)
    return res.status(400).json({
      err: true,
      message:
        "You must provide `name`, `course_id`, `num_of_questions` and `max_score` fields",
    });
  if (
    isNaN(parseInt(course_id)) ||
    isNaN(parseInt(num_of_questions)) ||
    isNaN(parseInt(max_score))
  )
    return res.status(400).json({
      err: true,
      message:
        "`course_id`, `num_of_questions` and `max_score` must be a number",
    });
  next();
};

module.exports = { verifyCreateFields };
