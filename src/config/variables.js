const variables = {
  host:
    process.env.NODE_ENV === "production"
      ? "https://incloodle.fly.dev"
      : "http://127.0.0.1:64578",
};

module.exports = variables;
