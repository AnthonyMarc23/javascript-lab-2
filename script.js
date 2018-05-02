"using strict";
{

  class Contacts {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  }

  class AddressBook {
    constructor(contacts) {
      this.contacts = [contacts];
    }

    add(info) {
      // Adds the new contact into the Address Book
      let newContact = new Contacts(info.name, info.email, info.phone, info.relation);
      this.contacts.push(newContact);
    }

    deleteAt(index) {
      // Deletes an entry at an index point
      this.contacts.splice(index, 1);
    }

    print() {
      // Log each contact
      for (let i = 0; i < this.contacts.length; i++) {
        console.log(this.contacts[i]);        
      };
    }
  }

  function getUserSelection() {
    let selection = prompt("(A)dd, (R)emove, (P)rint, (Q)uit?");
    return selection;
  }

  let blankContact = new Contacts("", "", "", "");
  let addressBook = new AddressBook(blankContact);
  console.log(addressBook);
  
  while(true) {
    
    let choice = getUserSelection().toLowerCase();
    switch (choice) {
      case "a":
        let info = {
          name: prompt("Enter the contact's Name"),
          email: prompt("Enter the contact's Email"),
          phone: prompt("Enter the contact's Phone"),
          relation: prompt("What is your relation to this contact?")
        }
          addressBook.add(info);
        break;
      case "r":
        let entry = prompt("Which entry would you like to delete?");
        addressBook.deleteAt(entry);
        break;
      case "p":
        addressBook.print();
        break;
      case "q":
        console.log("Adios.");
        break;
      default:
        console.log("Please choose a valid entry.");
        break;
    }
        
    if (choice === "q") {
      break;
    }
    //     addressBook.add(contacts);
  }
}