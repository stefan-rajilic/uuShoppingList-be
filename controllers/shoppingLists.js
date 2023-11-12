var express = require("express");
var router = express.Router();
const CreateAbl = require("../abl/shoppingLists-abl/create-abl");
const GetAbl = require("../abl/shoppingLists-abl/get-abl");
const ListAll = require("../abl/shoppingLists-abl/list-all-abl");
const DeleteAbl = require("../abl/shoppingLists-abl/delete-abl");
const UpdateAbl = require("../abl/shoppingLists-abl/update-abl");
const ArchiveListAbl = require("../abl/shoppingLists-abl/archiveList-abl");
const InviteAbl = require("../abl/shoppingLists-abl/invite-abl");
const ItemDeleteAbl = require("../abl/shoppingLists-abl/itemDelete-abl");
const ItemDoneAbl = require("../abl/shoppingLists-abl/itemDone-abl");

// get Shopping list by its ID
router.get("/get/:id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  GetAbl(req, res);
});

// returns a list of all Shopping list
router.get("/list", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  ListAll(req, res);
});

//create a new Shopping list
router.post("/create", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  CreateAbl(req, res);
});

//update a certain Shopping list by its ID
router.put("/update/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  UpdateAbl(req, res);
});

//delete a certain shopping list by its ID
router.delete("/delete/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  DeleteAbl(req, res);
});

// archive a shopping list by its ID
router.put("/archive/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  ArchiveListAbl(req, res);
});

// invite a member to a shopping list
router.post("/invite/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  InviteAbl(req, res);
});

// delete an item from a shopping list
router.delete("/itemDelete/:listId/:itemId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  ItemDeleteAbl(req, res);
});

// mark an item as done in a shopping list
router.put("/itemDone/:listId/:itemId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  ItemDoneAbl(req, res);
});

module.exports = router;
