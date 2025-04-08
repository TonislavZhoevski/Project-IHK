// Importing the necessary function for updating data in SmapOne
const { updateDataInSmapOne } = require('../service/smaponeService');

// Synchronize data between Bitrix24 and SmapOne
for (let contact of bitrix24Contacts.data) {
    const matchingContact = smaponeDataSources.find(ds => ds.is === contact.id); // Check if contact matches

    if (matchingContact && matchingContact.updatedAt !== contact.updatedAt) {
        // Prepare data for update in SmapOne
        const updatedData = {
            id: matchingContact.id,
            name: contact.name,
            email: contact.email,
            updatedAt: contact.updatedAt,
            // Include other fields as needed
        };

        // Use the existing updateDataInSmapOne function to update the contact in SmapOne
        await updateDataInSmapOne(updatedData);
    }
}