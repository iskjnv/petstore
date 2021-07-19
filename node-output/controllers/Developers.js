'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.addInventory = function addInventory (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  Developers.addInventory(inventoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBook = function deleteBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.deleteBook(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBook = function getBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.getBook(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyBook = function modifyBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  var book details = req.swagger.params['book details'].value;
  Developers.modifyBook(id,book details)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchInventory = function searchInventory (req, res, next) {
  Developers.searchInventory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
