const xlsx = require("json-as-xlsx");

const jsonToXLSX = (content) => {
  try {
    let data = [
      {
        sheet: "Reporte general",
        columns: [
          { label: "Nombre Alumno", value: "studentName" },
          { label: "Nombre Curso", value: "courseName" },
          { label: "Nombre Evaluación", value: "examName" },
          { label: "Fecha realización", value: "initDate" },
          { label: "Fecha finalización", value: "finishDate" },
          { label: "Nota", value: "note" },
          { label: "Promedio", value: "average" },
        ],
        content,
      },
    ];

    const settings = {
      writeOptions: {
        type: "buffer",
        bookType: "xlsx",
      },
    };

    const buffer = xlsx(data, settings);
    return buffer;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { jsonToXLSX };
