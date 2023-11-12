const express = require("express");
const app = express();
const parseBody = require("body-parser");
const ShoppingListDao = require("../../dao/shoppingLists-dao");
const path = require("path");

app.use(parseBody.json());
app.use(parseBody.urlencoded({ extended: true }));

let listDao = new ShoppingListDao(
  path.join(__dirname, "..", "..", "storage", "shoppingLists.json")
);

// Create List Handler (CreateListHandler.js):
function CreateAbl(req, res) {
  let requestData = req.body;

  if (!requestData.listName) {
    return res
      .status(400)
      .json({ error: "Invalid input: 'listName' parameter is required." });
  }

  let newList = {
    name: requestData.listName,
    owner: requestData.ownerId,
    members: [],
    items: [],
    isArchived: false
  };

  const allLists = listDao.getAllLists();
  const existingList = allLists.find(
    (list) =>
      list.name === newList.name &&
      JSON.stringify(list.items) ===
      JSON.stringify(newList.items)
  );

  if (existingList) {
    res.status(400);
    return res.json({ error: "List already exists with the same name and items." });
  }

  try {
    newList = listDao.addNewList(newList);
    const message = "Shopping list created!";
    res.send({ success: true, message: message, list: newList });
  } catch (error) {
    res.status(500);
    return res.json({ error: error.message });
  }
}

module.exports = CreateAbl;
