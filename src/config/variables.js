const variables = {
  host:
    process.env.NODE_ENV === "production"
      ? "https://incloodle.herokuapp.com"
      : "http://127.0.0.1:64578",
};

module.exports = variables;
