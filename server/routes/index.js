var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Mgamez', appName: 'Fishapp', company: 'MarinFor' });
});

/* Agregando nueva ruta;*/
router.get('/greeting', function(req, res, next){
  res.status(200).json({message:'Hola campeon'})
})

module.exports = router;
