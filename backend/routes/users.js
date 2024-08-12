const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/sign_in', function (req, res, next) {
    res.json({access_token: process.env.ACCESS_TOKEN});
});

module.exports = router;