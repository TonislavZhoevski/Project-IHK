const axios = require('axios');

const updateDataInSmapOne = async (data) => {
    try {
        const response = await axios.put('https://platform.smapone.com/Backend/intern/DataSource/update', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SMAPONE_API_KEY}`
            }
        });
        console.log('Data successfully updated in SmapOne: ', response.data);
    }catch (error) {
        console.error('Error updating data in SmapOne: ', error.message);
        throw error;
    }
};

module.exports = { updateDataInSmapOne };