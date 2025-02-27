const express = require('express')
const router = express.Router()

const {addData, getAllData} = require('../controllers/dataController')

//POST REQUEST
router.post('/new', addData)

//GET REQUEST
router.get('/all', getAllData)

module.exports = router