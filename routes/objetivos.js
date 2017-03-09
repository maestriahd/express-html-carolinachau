var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('objetivos',
    { title: 'Objetivos',
    saludo: 'Proporcionar un amplio grado de información a quienes comparten el espacio con los pueblos “originarios del territorio” mediante historias pertenecientes a la tradición oral que conduzcan a la comprensión y la reconstrucción de la memoria histórica; con ello la adopción de memoria colectiva en el marco de la interculturalidad que desmitifique los estereotipos profundamente arraigados por la cultura dominante generadora de insondables conflictos culturales.',
    foto: 'https://www.mundogato.net/wp-content/uploads/normas-de-higiene-en-los-gatos-1-485x300.jpg'
  }
  );
});

module.exports = router;
