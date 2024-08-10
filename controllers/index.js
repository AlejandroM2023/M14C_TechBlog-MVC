const router = require('express').Router();

const api = require('./api');
const pages = require('./page-routes');


router.use('/api',api);
router.use('/',pages);

module.exports = router;
