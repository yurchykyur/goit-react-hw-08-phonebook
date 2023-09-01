import axios from 'axios';

axios.defaults.baseURL = 'https://64e87afc99cf45b15fdfa20d.mockapi.io/api/v1/';

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
