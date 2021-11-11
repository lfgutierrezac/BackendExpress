const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller')
const { check } = require('express-validator')

/**
 * @api
 * @apiName
 * @apiDescription
 */
router.post('/', incomeController.add)

/**
 * @api
 * @apiName
 * @apiDescription
 */
router.get('/',incomeController.list)

/**
 * @api
 * @apiName
 * @apiDescription
 */
router.get('/:id', incomeController.find) //ruta dinámica

module.exports = router