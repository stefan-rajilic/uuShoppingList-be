const ShoppingListDao = require("../../dao/shoppingLists-dao");

let dao = new ShoppingListDao();

async function InviteAbl(req, res) {
  const id = req.params.id;
  const newMember = req.body.member;
  try {
    const shoppingList = await dao.getListById(id);
    if (shoppingList) {
      shoppingList.members.push(newMember);
      await dao.modifyList(id, shoppingList);
      res.json({ success: true, message: "Member invited." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = InviteAbl;
