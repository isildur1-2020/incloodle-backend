const isRoot = (req, res, next) => {
  const { root_password } = req.body;
  if (!root_password)
    return res.status(401).json({
      err: true,
      message: "You must provide a `root_password` field",
    });
  if (root_password !== process.env.ROOT_PASSWORD)
    return res.status(401).json({
      err: true,
      message: "Password incorrect",
    });
  next();
};

module.exports = { isRoot };
