import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';



export const writeContacts = async (updatedContacts) => {
  try {
    const stringifiedContacts = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, stringifiedContacts, { encoding: 'utf-8' });
    console.log(`\n✅ The db.json is successfully written. 😊`);

    writeSizeToConsole();

  } catch (error) {
    console.log(error);
  }
};


const writeSizeToConsole = async () => {
  const stats = await fs.stat(PATH_DB);
  if (stats.size > 1000000) {
    console.log(`✅ The size of db.json is ${(stats.size / 1000000).toFixed(2)} MB`);
  } else {
    console.log(`✅ The size of db.json is ${(stats.size / 1000).toFixed(2)} KB`);
  }
};