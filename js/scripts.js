
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var newAdd = new AddressBook();

function addOutput (arrayNum) {
  $("#contacts").empty();
  $("#contacts").append(arrayNum + 1);
  $("#contacts").append("<ul>");
  $("#contacts").append("<li>" + newAdd.contacts[arrayNum].firstName + "</li>");
  $("#contacts").append("<li>" + newAdd.contacts[arrayNum].lastName + "</li>");
  $("#contacts").append("<li>" + newAdd.contacts[arrayNum].phoneNumber + "</li>");
  $("#contacts").append("</ul>");
}


$(document).ready(function(){
  $("form#address-book").submit(function(event) {
    event.preventDefault();
      var userFN = $("input#firstN").val();
      var userLN = $("input#lastN").val();
      var userPN = $("input#phoneN").val();
      var userID = $("input#userID").val();
      var newCon = new Contact(userFN, userLN, userPN);

      newAdd.addContact(newCon);
      var prevID = newAdd.currentId - 1;
      addOutput(prevID);

  });


  document.getElementById('search').onclick = function() {                //Alternate reverse button
  var beepVar = parseInt($("input#userID").val());                      //user input number
  addOutput(beepVar - 1);
}

document.getElementById('delete').onclick = function() {                //Alternate reverse button
var beepVar = parseInt($("input#userID").val());                      //user input number
newAdd.deleteContact(beepVar);
  $("#contacts").empty();
}

document.getElementById('overwrite').onclick = function() {                //Alternate reverse button
var beepVar = parseInt($("input#userID").val());                      //user input number
var arrayNum = beepVar - 1;
newAdd.contacts[arrayNum].firstName = $("input#firstN").val();
newAdd.contacts[arrayNum].lastName = $("input#lastN").val();
newAdd.contacts[arrayNum].phoneNumber= $("input#phoneN").val();


addOutput(beepVar - 1);
}





});
