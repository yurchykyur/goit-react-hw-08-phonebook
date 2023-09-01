const selectContacts = state => state.contacts.items;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

export { selectContacts, selectIsLoading, selectError };
