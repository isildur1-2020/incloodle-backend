const moment = require("moment");

const datetimeFormat = (date) => {
  if (date === undefined) return moment().format("YYYY-MM-DD HH:mm:ss");
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

module.exports = { datetimeFormat };
