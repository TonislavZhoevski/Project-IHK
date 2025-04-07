const axios = require('axios');
const { SMAPONE_API_KEY, SMAPONE_REQ_DATASOURCE_ALLLISTS_META } = require('../../config/config');

const getAllDataSources = async () => {
  try {
    const response = await axios.get('https://platform.smapone.com/Backend/intern/DataSource?accessToken=452ab15f3aec793473ef4395c02752c055031102', {
      headers: {
        Authorization: `ApiKey ${SMAPONE_API_KEY}`,
        'Accept': 'application/json'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error by retrieving the datasources: ', error.message);
    throw error;
  }
};

module.exports = { getAllDataSources, };