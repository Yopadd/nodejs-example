import Contact from "./contact.js";

export default class ContactService {
  constructor(repository) {
    this.repository = repository;
  }

  getContacts(callback) {
    this.repository.getAll((err, data) => {
      if (err) {
        callback(err);
      }
      const contacts = data.map(
        (item) =>
          new Contact(
            item.id,
            item.firstName,
            item.lastName,
            item.address,
            item.phone
          )
      );
      callback(null, contacts);
    });
  }
}
