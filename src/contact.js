export default class Contact {
  id;
  firstName;
  lastName;
  address;
  phone;

  constructor(id, firstName, lastName, address, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
  }

  toString() {
    return `${this.lastName.toUpperCase()} ${this.firstName}`;
  }
}
