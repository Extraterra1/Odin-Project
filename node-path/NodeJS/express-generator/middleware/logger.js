const logger = (req, res, next) => {
  console.log(`request received at ${req.path}`);
  next();
};

module.exports = logger;
