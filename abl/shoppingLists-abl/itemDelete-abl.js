const ShoppingListDao = require("../../dao/shoppingLists-dao");

let dao = new ShoppingListDao();

async function ItemDeleteAbl(req, res) {
  const listId = req.params.listId;
  const itemId = req.params.itemId;
  try {
    const shoppingList = await dao.getListById(listId);
    if (shoppingList) {
      shoppingList.items = shoppingList.items.filter(item => item.id !== itemId);
      await dao.modifyList(listId, shoppingList);
      res.json({ success: true, message: "Item deleted." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ItemDeleteAbl;
