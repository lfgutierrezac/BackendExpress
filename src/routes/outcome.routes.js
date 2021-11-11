const express = require('express')
const router = express.Router()
const outcomeController = require('../controllers/outcome.controller')
const { check } = require('express-validator')

/**
 * @api
 * @apiName
 * @apiDescription
 */
router.post('/', outcomeController.add)
router.get('/', outcomeController.list)
router.get('/:id', outcomeController.find)

module.exports = router