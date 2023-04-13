// require('dotenv').config()
// const {CONNECTION_STRING} = process.env

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize(CONNECTION_STRING, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   }
// })
const db = require('./db.json')

module.exports = {
  getPaintings: (req, res) => {
    let paintings = db.items.filter(item => item.type==="painting")
    res.status(200).send(paintings)
  },
  getJewelry: (req, res) => {
    let jewelry = db.items.filter(item => item.type==="jewelry")
    res.status(200).send(jewelry)
  },
  getResin: (req, res) => {
    let resin = db.items.filter(item => item.type==="resin")
    res.status(200).send(resin)
  },
  getAll: (req, res) => {
    res.status(200).send(db.items)
  },
  addToBucket: (req, res) => {
    db.bucket.push(req.body)
    res.status(200).send(db.bucket)
  },
  removeFromBucket: (req, res) => {
    index = req.params.index
    db.bucket.splice(index, 1)
    res.status(200).send(db.bucket)
  }
}