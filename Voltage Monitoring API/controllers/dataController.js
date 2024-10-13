const { response } = require('express')
const Data = require('../models/data')
const mongoose = require('mongoose')


const addData = async(req, res) =>{
    const {voltage, power, ampere} = req.body

    try{
        const new_data = await Data.create({voltage, power, ampere})
        res.status(200).json(new_data)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const  getAllData = async(req, res) =>{
    const data =   await Data.find({})
    res.status(200).json(data)
}

module.exports = {
    addData,
    getAllData
}
