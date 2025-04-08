const express = require('express');
const { handleBitrix24Webhook } = require('../services/webhookService.js');
const router = express.Router();

// Accept POST requests from Bitrix24
router.post('/bitrix24-webhook', handleBitrix24Webhook);

module.exports = router;