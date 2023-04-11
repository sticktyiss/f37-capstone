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
    console.log('hit paintings')
    res.status(200).send(db.paintings)
  },
  getJewelry: (req, res) => {
    console.log('hit jewelry')
    res.status(200).send(db.jewelry)
  },
  getResin: (req, res) => {
    console.log('hit resin')
    res.status(200).send(db.resin)
  }
}