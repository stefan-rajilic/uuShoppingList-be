const ShoppingListDao = require("../../dao/shoppingLists-dao");
const path = require("path");
let dao = new ShoppingListDao(
  path.join(__dirname, "..", "..", "storage", "shoppingLists.json")
);

function DeleteAbl(req, res) {
  const shoppingList = dao.getListById(req.params.id);

  const updatedObject = { ...shoppingList, ...req.params };
  if (shoppingList) {
    dao.removeList(shoppingList);
  } else {
    res.status(400).json({ error: "Shopping list does not exist" });
  }

  res.json(`Shopping list  deleted!`);
}
module.exports = DeleteAbl;
