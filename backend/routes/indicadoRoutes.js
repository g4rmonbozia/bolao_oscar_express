const express = require('express')
const router = express.Router()

const indicadoController = require('../controller/indicadoFileController')

router.get('/', indicadoController.getIndicados)

module.exports= router