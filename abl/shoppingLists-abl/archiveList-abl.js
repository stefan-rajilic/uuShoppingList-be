const ShoppingListDao = require("../../dao/shoppingLists-dao");

let dao = new ShoppingListDao();

async function ArchiveListAbl(req, res) {
  const id = req.params.id;
  try {
    const shoppingList = await dao.getListById(id);
    if (shoppingList) {
      shoppingList.isArchived = true;
      await dao.getListById(id, shoppingList);
      res.json({ success: true, message: "Shopping list archived." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ArchiveListAbl;
