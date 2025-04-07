const axios = require('axios');
const {BITRIX_WEBHOOK_URL} = require('../../config/config.js');

// Create an Axios instance for Bitrix24
const bitrix24API = axios.create({
    baseURL: BITRIX24_WEBHOOK_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = bitrix24API;