const { getAllDataSources } = require ('../api/smapone');

const fetchAndLogDataSources = async () => {
  try {
    const dataSources = await getAllDataSources();
    console.log('--- All available tables (datasources) ---');
    console.dir(dataSources, {depth: null});
  } catch (error) {
    console.error('Error by retrieving the table: ', error.message);
  };
  
};
module.exports = {fetchAndLogDataSources,};