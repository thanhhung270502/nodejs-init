const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

// newsController.index
router.use('/services', siteController.services);
router.use('/contact', siteController.contact);
router.use('/about', siteController.about);
router.use('/', siteController.home)

module.exports = router;