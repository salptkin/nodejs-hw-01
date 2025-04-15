import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(fileContent);
    return parsedContacts;
  } catch (error) {
    console.log(error);
    return [];
  }
};