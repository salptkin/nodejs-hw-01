import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);

    Progress(i, number);
  }
  await writeContacts(contacts);

};

generateContacts(20000);


const Progress = (i , number) => {
  if (number >= 10000) {
    if (i % 10000 === 0 && i !== 0) {
      console.log(`▶️  Generated ${i / 1000}k / ${number / 1000}k contacts and still running...`);
    } else if (i === number - 1) {
      console.log(`✅ Generated ${(i + 1) / 1000}k / ${number / 1000}k contacts and finished!`);
    }
  } else if (number < 10000) {
    if (i % 1000 === 0 && i !== 0) {
      console.log(`▶️  Generated ${i} / ${number} contacts and still running...`);
    } else if (i === number - 1) {
      console.log(`✅ Generated ${(i + 1)} / ${number} contacts and finished!`);
    }
  }
};