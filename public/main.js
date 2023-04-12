const paintingsBtn = document.querySelector('#paintings')
const resinBtn = document.querySelector('#resin')
const jewleryBtn = document.querySelector('#jewelry')
const allBtn = document.querySelector('#all')
const gallery = document.querySelector('#gallery')

const baseURL = "http://localhost:4754"

const printPaintings = () => {
  axios.get(`${baseURL}/paintings`)
  .then((res) => {
    console.log(res.data)
    printCard(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printJewelry = () => {
  axios.get(`${baseURL}/jewelry`)
  .then((res) => {
    console.log(res.data)
    printCard(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printResin = () => {
  axios.get(`${baseURL}/resin`)
  .then((res) => {
    console.log(res.data)
    printCard(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printAll = () => {
  printPaintings()
  printJewelry()
  printResin()
}
//function to print card
const printCard = item => {
  for(let i=0; i<item.length; i++){
    let card = document.createElement('div')
    card.innerHTML = `
    <img src='${item[i].image}'>
    <h3>${item[i].title}</h3>
    <p>${item[i].desc}</p>
    <p class='prices'>${item[i].price}</p>
    `
    gallery.appendChild(card)
  }
}

printAll()
allBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  printAll()})
paintingsBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  printPaintings()})
jewleryBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  printJewelry()})
resinBtn.addEventListener('click', () => {
  gallery.innerHTML = ''
  printResin()})