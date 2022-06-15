import fs from "fs";

export default class ContactRepository {
  getAll(callback) {
    fs.readFile("./db/contacts.json", "utf8", (err, data) => {
      if (err) {
        callback(err);
      }
      callback(null, JSON.parse(data));
    });
  }
}
