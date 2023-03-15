let contacts = []



function addContact(firstname, lastname) {
    let myContact = new Contact(firstname, lastname);
    contacts.push(myContact)
}

addContact('Junus', 'Ergin');
addContact('Manuel', 'Thaler');
addContact('Linus', 'Kauer');