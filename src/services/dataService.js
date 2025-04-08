/* 
const { getAllDataSources } = require ('../api/smapone');
const {bitrix24API} = require ('../api/bitrix24');

const fetchAndLogDataSources = async () => {
  try {
    const dataSources = await {getAllDataSources(), bitrix24API};
    console.log('--- All available tables (datasources) ---');
    console.dir(dataSources, {depth: null});
  } catch (error) {
    console.error('Error by retrieving the table: ', error.message);
  };
  
};
module.exports = {fetchAndLogDataSources,};
 */

const { getAllDataSources } = require ('../api/smapone');
const bitrix24API = require ('../api/bitrix24');

const fetchAndLogDataSources = async () => {
  try {
    // Retrieving data simultaneously
    const [smaponeDataSources, bitrix24Data] = await Promise.all([
      getAllDataSources(), // We call the fun for SmapOne
      bitrix24API.get('/crm/contact.list') // We call Bitrix24API
    ]);

    // Logging the results
    console.log('--- SmapOne Data Sources ---');
    console.dir(smaponeDataSources, {depth: null});

    console.log('--- Bitrix24 Data ---');
    console.dir(bitrix24Data.data, {depth: null}); // It is possible to need access to .data, it depends on the Bitrix24 response
  } catch (error) {
    console.error('Error by retrieving the data: ', error.message);
  };
};

module.exports = {fetchAndLogDataSources};