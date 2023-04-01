const { initDB } = require("../DB");

let DATA = initDB();
//@desc Get all stocks
//@route GET /api/stocks
//@access public
const getStocks = (req, res) => {
  const stocks = DATA;
  res.status(200).json(stocks);
};

//@desc Get stocks
//@route GET /api/stocks/:id
//@access public
const getStock = (req, res) => {
  const stock = DATA.find((item) => item.id === parseInt(req.params.id));
  if (stock) return res.status(200).json(stock);

  res.status(404);
  throw new Error("Not found");
};

module.exports = {
  getStocks,
  getStock,
};
