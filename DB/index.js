const fs = require("fs");

const initDB = () => {
  let data = fs.readFileSync("./DB/data.json");
  data = JSON.parse(data);

  return data;
};

module.exports = {
  initDB,
};
