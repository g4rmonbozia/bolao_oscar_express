const express = require('express')
const router = express.Router()

const apostaController = require('../controller/apostaFileController') 

router.get('/',apostaController.getApostas)

router.post('/add',apostaController.addApostas)

router.put('/:id',apostaController.updateApostas )

router.delete('/:id',apostaController.removeApostas )

module.exports= router