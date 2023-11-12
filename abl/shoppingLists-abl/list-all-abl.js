// implement abl
const ShoppingListDao = require("../../dao/shoppingLists-dao");
const path = require("path");

let dao = new ShoppingListDao(
  path.join(__dirname, "..", "..", "storage", "shoppingLists.json")
);

function ListAllAbl(req, res) {
  const shoppingList = dao.getListById();


  res.json(shoppingList);
}

module.exports = ListAllAbl;
