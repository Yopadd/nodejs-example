export default class ContactController {
  constructor(contactService) {
    this.contactService = contactService;
  }

  print() {
    this.contactService.getContacts((err, contacts) => {
      if (err) {
        console.error(err);
      }
      contacts.forEach((contact) => {
        console.log(contact.toString());
      });
    });
  }
}
