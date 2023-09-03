import axios from 'axios';

async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

async function addContact(contact) {
  await axios.post('contacts', contact);
}

async function deleteContact(idContact) {
  await axios.delete(`contacts/${idContact}`);
}

export { deleteContact, addContact, fetchContacts };
