const express = require('express');
const router = express.Router();
const smaponeController = require('../controllers/smaponeController');

// The other routes...

// New:

router.get('/datasources', smaponeController.getAllDataSourcesView);

module.exports = router;
