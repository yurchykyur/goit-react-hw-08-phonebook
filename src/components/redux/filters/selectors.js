import { createSelector } from '@reduxjs/toolkit';

import { contactsSelectors } from '../contacts';

const selectFilter = state => state.filter;

const selectFilteredContacts = createSelector(
  [contactsSelectors.selectContacts, selectFilter],
  (contacts, valueFilter) => {
    const normalizedFilterQuery = valueFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterQuery)
    );
  }
);

export { selectFilter, selectFilteredContacts };
