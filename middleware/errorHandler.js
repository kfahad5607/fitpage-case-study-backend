const { errorCodes } = require("../utils/constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  let json = { message: err.message };
  switch (statusCode) {
    case errorCodes.NOT_FOUND:
      json.title = "Not Found";
      break;
    case errorCodes.SERVER_ERROR:
      json.title = "Server Error";
      break;
    default:
      console.log("No Error, All good !");
      break;
  }

  if (process.env.NODE_ENV === "dev") {
    json.stackTrace = err.stack;
  }
  res.json(json);
};

module.exports = errorHandler;
