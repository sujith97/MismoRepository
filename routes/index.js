var express = require('express'),
	router = express.Router(),
	mismoService = require('../services/mismo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET all MISMO types. */
router.get('/types', function(req, res, next) {
  mismoService.getAllTypes().then(function(mismoData) {
  	res.send(mismoData);
  })
});

/* GET MISMO type. */
router.get('/types/:type', function(req, res, next) {
  mismoService.getType(req.params.type).then(function(mismoData) {
  	res.send(mismoData);
  })
});

module.exports = router;
