const ShoppingListDao = require("../../dao/shoppingLists-dao");
const path = require("path");

let dao = new ShoppingListDao(
  path.join(__dirname, "..", "..", "storage", "shoppingLists.json")
);

// console.log(recipeList);

function GetAbl(req, res) {
  const shoppingList = dao.getListById(req.params.id);
  if (shoppingList) {
    res.json(shoppingList);
  } else {
    res.status(400).json({ error: "Shopping list does not exist!" });
  }
}

module.exports = GetAbl;
