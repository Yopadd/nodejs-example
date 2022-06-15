import ContactController from "./src/contactController.js";
import ContactRepository from "./src/contactRepository.js";
import ContactService from "./src/contactService.js";

function createApp() {
  const contactRepository = new ContactRepository();
  const contactService = new ContactService(contactRepository);
  return new ContactController(contactService);
}

const app = createApp();

app.print();
