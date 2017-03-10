var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('sobre',
    { title: 'Sobre',
    saludo: 'Voces de Bacatá es un proyecto centrado en la colección y preservación digital de la tradición oral de las comunidades y las investigaciones realizadas sobre los pueblos indigenas (Embera Katíos, Embera Chami y Muiscas) que residen en Bogotá, Colombia. A través de distintos trabajos de multimedia se dan a conocer las historias, costumbres y la cosmovisión de un grupo social que ha sido imperceptible para la cultura dominante, los habitantes de la ciudad y sus gobernantes durante el tiempo en que se han confrontado con la colonización cultural generada por Europa. La intención de este proyecto es preservar la integridad cultural de las comunidades indígenas que habitan Bogotá y sirve para que se apliquen políticas conducentes a que quienes comparten el territorio, comprendan que los indígenas no pertenecen al pasado, sino que existen en la sociedad contemporánea y comparten el territorio cultural y geográfico de la ciudad, al construirla de manera colectiva.',
    foto: 'http://i63.tinypic.com/2rffog1.jpg'
  }
  );
});

module.exports = router;
