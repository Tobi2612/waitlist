const express = require('express');
const router = express.Router();
const {
    addWaitlist
} = require('../controllers/waitlist');
const Waitlist = require('../models/Waitlist')


router
    .route('/waitlist')
    .post(addWaitlist)


module.exports = router
