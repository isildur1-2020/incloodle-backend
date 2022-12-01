const verifyCreateFields = (req, res, next) => {
  const { name, course_id } = req.query;
  if (!name || !course_id)
    return res.status(400).json({
      err: true,
      message: "You must provide `name` and `course_id` fields",
    });
  if (isNaN(parseInt(course_id)))
    return res.status(400).json({
      err: true,
      message: "`course_id` must be a number",
    });
  next();
};

module.exports = { verifyCreateFields };
