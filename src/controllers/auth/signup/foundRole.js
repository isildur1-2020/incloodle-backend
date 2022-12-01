const getAdminByEmail = require("../../../services/database/admin/getByEmail");
const getTeacherByEmail = require("../../../services/database/teacher/getByEmail");
const getStudentByEmail = require("../../../services/database/student/getByEmail");

const foundRole = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(200).json({
        err: true,
        message: "You must provide `email` and `password` fields",
        jwt: null,
      });
    // verify if is admin
    const [dataAdmin] = await getAdminByEmail(email);
    if (dataAdmin?.length !== 0) {
      req.userFound = dataAdmin?.[0];
      return next();
    }
    // verify if is teacher
    const [dataTeacher] = await getTeacherByEmail(email);
    if (dataTeacher?.length !== 0) {
      req.userFound = dataTeacher?.[0];
      return next();
    }
    // verify if is student
    const [dataStudent] = await getStudentByEmail(email);
    if (dataStudent?.length !== 0) {
      req.userFound = dataStudent?.[0];
      return next();
    }
    res.status(200).json({
      err: true,
      message: "Credentials incorrect",
      jwt: null,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err.message,
      jwt: null,
    });
  }
};

module.exports = foundRole;
