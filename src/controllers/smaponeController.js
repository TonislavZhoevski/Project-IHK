const { getAllDataSources } = require('../services/dataSource');

exports.getAllDataSourcesView = async (req, res) => {
  try {
    const dataSources = await getAllDataSources(); // use my services
    res.render('datasources', { dataSources });
  } catch (error) {
    console.error('Error by loading the datasources: ', error.message);
    res.status(500).send('Error by loading the tables.');
  }
};
