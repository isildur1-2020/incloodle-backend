const getCourseByIdService = require("../../../services/database/course/getById");
const getExamsRatedService = require("../../../services/database/student/getExamsRated");
const { jsonToXLSX } = require("../../../utils/xlsx");
const { datetimeFormat } = require("../../../utils/moment");

const validateFields = (req, res, next) => {
  const { student_id, course_id } = req.query;
  if (student_id === undefined || course_id === undefined)
    return res.status(400).json({
      err: true,
      data: null,
      message: "`student_id` and `course_id` are required",
    });
  if (isNaN(parseInt(student_id)) || isNaN(parseInt(course_id)))
    return res.status(400).json({
      err: true,
      data: null,
      message: "`student_id` and `course_id` must be a number",
    });
  next();
};

const getCourseInfo = async (req, res, next) => {
  try {
    const { course_id } = req.query;
    const [courseFound] = await getCourseByIdService(course_id);
    if (courseFound?.length === 0)
      return res.status(400).json({
        err: true,
        message: `Course with id = ${course_id} not found`,
      });
    req.courseName = courseFound[0]?.name;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

const getReportController = async (req, res) => {
  try {
    let average = 0;
    let studentName = null;
    const courseName = req.courseName;
    const { student_id, course_id } = req.query;
    const [examsFound] = await getExamsRatedService(student_id, course_id);
    const dataExams = examsFound.reduce((prev, curr) => {
      if (studentName === null) studentName = curr?.studentName;
      const initDate = curr.init_date;
      const finishDate = curr.finish_date;
      average += parseFloat(curr.score / examsFound.length);
      return [
        ...prev,
        {
          examName: curr.name,
          note: curr.score,
          initDate: datetimeFormat(initDate),
          finishDate: datetimeFormat(finishDate),
        },
      ];
    }, []);

    const content = [
      {
        studentName,
        courseName,
      },
      ...dataExams,
      {
        average,
      },
    ];

    const buffer = jsonToXLSX(content);

    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-disposition": "attachment; filename=report.xlsx",
    });

    res.end(buffer);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      data: null,
      message: err.message,
    });
  }
};

module.exports = [validateFields, getCourseInfo, getReportController];
