import axios from 'axios';
axios.defaults.baseURL = 'https://652e62470b8d8ddac0b14795.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};

export const createContact = async contact => {
  return await axios.post('/contacts', contact);
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};
