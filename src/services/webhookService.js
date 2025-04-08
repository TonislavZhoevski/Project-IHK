const { updateDataInSmapOne } = require('./smaponeService'); // Importing fun for updating data in SmapOne

const handleBitrix24Webhook = async (req, res) => {
    const updatedData = req.body; // We recieve data from Bitrix24's webhook

    // Here we add logic to handle data from Bitrix24
    console.log('Received data from Bitrix24: ', updatedData);

    // We call the function to uptade SmapOne

    try {
        await updateDataInSmapOne(updatedData);
        res.status(200).send('Data uptadet in SmapOne');
    } catch (error) {
        console.error('Error updating data in SmapOne: ', error.message);
        res.status(500).send('Error updating data');
    }
};

module.exports = { handleBitrix24Webhook };