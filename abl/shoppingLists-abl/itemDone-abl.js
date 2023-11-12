const ShoppingListDao = require("../../dao/shoppingLists-dao");

let dao = new ShoppingListDao();

async function ItemDoneAbl(req, res) {
  const listId = req.params.listId;
  const itemId = req.params.itemId;
  try {
    const shoppingList = await dao.getListById(listId);
    if (shoppingList) {
      const item = shoppingList.items.find(item => item.id === itemId);
      if (item) {
        item.isCompleted = true;
        await dao.modifyList(listId, shoppingList);
        res.json({ success: true, message: "Item marked as done." });
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ItemDoneAbl;
