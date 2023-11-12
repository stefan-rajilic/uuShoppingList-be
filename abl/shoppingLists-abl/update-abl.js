const express = require("express");
const app = express();

const ShoppingListDao = require("../../dao//shoppingLists-dao");
const path = require("path");

let dao = new ShoppingListDao(
  path.join(__dirname, "..", "storage", "shoppingLists.json")
);

function UpdateAbl(req, res) {
  const id = req.params.id;

  let body = req.body;

  let updatedFields = {
    name: body.name,
    owner: body.owner,
    members: [],
    items: [],
    isArchived: body.isArchived || false,
  };

  const shoppingList = dao.getListById(id);

  if (shoppingList) {
    dao.modifyList(id, updatedFields);
    const successMessage = "Shopping list updated!";
    res.json({ success: true, message: successMessage, shoppingList: updatedFields });
  } else {
    res.status(400).json({ error: "Shopping list does not exist" });
  }
}

module.exports = UpdateAbl;
