'use strict';


/**
 * adds an inventory item
 * Adds an item to the system
 *
 * inventoryItem Book Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.addInventory = function(inventoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * deletes a single book object
 * when a book id is provided, it deletes a single book from the database
 *
 * id String book id
 * no response value expected for this operation
 **/
exports.deleteBook = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * returns a specific book content
 * when a book id is provided, this endpoint returns book details by book id
 *
 * id String book id
 * no response value expected for this operation
 **/
exports.getBook = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * modifies a specified book content
 * when a book id is provided, this endpoint modifies book content by book id
 *
 * id String book id
 * book details BookUpdate book details (optional)
 * no response value expected for this operation
 **/
exports.modifyBook = function(id,book details) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches inventory
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * returns List
 **/
exports.searchInventory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "author",
  "title" : "title"
}, {
  "author" : "author",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

