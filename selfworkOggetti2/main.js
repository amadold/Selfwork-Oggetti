let agenda = {
    contacts: [
        { name: 'Nicola', phone: '3331111111' },
        { name: 'Lucia', phone: '3332222222' },
        { name: 'Marco', phone: '3333333333' },
        { name: 'Antonio', phone: '3334444444' },
        { name: 'Lorenzo', phone: '3335555555' },
        { name: 'Paola', phone: '3336666666' },
    ],

    showContacts: function () {
        this.contacts.forEach((contact, i) => console.log(`${i}. ${contact.name} - ${contact.phone}`)
        );
    },

    searchContact: function (searchedContact) {
        let contact = this.contacts.find((contact) => contact.name.toLowerCase() == searchedContact.toLowerCase());
        if (contact) {
            console.log(`${contact.name} - ${contact.phone}`);
        } else {
            console.log("Questo non è uno dei tuoi contatti");
        }
    },

    removeContact: function (removedContact) {
        let contact = this.contacts.find((contact) => contact.name.toLowerCase() == removedContact.toLowerCase());
        if (contact) {
            let index = this.contacts.indexOf(contact);
            this.contacts.splice(index, 1);
            console.log(`Contatto rimosso: ${contact.name}`);
        } else {
            console.log("Questo non è uno dei tuoi contatti");
        }
    },

    addContact: function (newName, newPhone) {
        this.contacts.push({ name: newName, phone: newPhone });
        console.log(`Contatto aggiunto: ${newName} - ${newPhone}`);
    },

    modifyContact: function (originalName, modifiedName, modifiedPhone) {
        let contact = this.contacts.find((contact) => contact.name.toLowerCase() === originalName.toLowerCase());
        if (contact) {
            if (modifiedName) {
                contact.name = modifiedName;
            }
            if (modifiedPhone) {
                contact.phone = modifiedPhone;
            }
            console.log(`Contatto aggiornato: ${contact.name} - ${contact.phone}`);
        } else {
            console.log("Questo non è uno dei tuoi contatti");
        }
    }
}

let optionsPrompt = prompt("Scegli una delle opzione:\n1. Show\n2. Search\n3. Remove\n4. Add\n5. Edit");
let options = optionsPrompt.toLowerCase();
while (options !== "show" && options !== "search" && options !== "remove" && options !== "add" && options !== "edit") {
    options = prompt("Inserisci un'opzione valida");
}
if (options === "show") {
    agenda.showContacts();
} else if (options === "search") {
    let searchedContact = prompt("Inserisci il nome da cercare:");
    if (searchedContact) {
        agenda.searchContact(searchedContact);
    }
} else if (options === "remove") {
    let removedContact = prompt("Inserisci il contatto da rimuovere:");
    if (removedContact) {
        agenda.removeContact(removedContact);
        agenda.showContacts();
    }
} else if (options === "add") {
    let newName = prompt("Inserisci il nome:");
    let newPhone = prompt("Inserisci il telefono:");
    if (newName && newPhone) {
        agenda.addContact(newName, newPhone);
        agenda.showContacts();
    }
} else if (options === "edit") {
    let originalName = prompt("Inserisci il contatto da modificare:");
    if (originalName) {
        let newName = prompt("Inserisci il nuovo nome se vuoi cambiarlo o lascia il campo vuota se non vuoi cambiarlo:");
        let newPhone = prompt("Inserisci il nuovo numero se vuoi cambiarlo o lascia il campo vuota se non vuoi cambiarlo:");
        agenda.modifyContact(originalName, newName, newPhone);
        agenda.showContacts();
    } else {
        console.log("Questo non è uno dei tuoi contatti");
    }
} 
