const paintingsBtn = document.querySelector('#paintings')
const resinBtn = document.querySelector('#resin')
const jewleryBtn = document.querySelector('#jewelry')

const baseURL = "http://localhost:4754"

const printPaintings = () => {
  axios.get(`${baseURL}/paintings`)
  .then((res) => {
    console.log(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printJewelry = () => {
  axios.get(`${baseURL}/jewelry`)
  .then((res) => {
    console.log(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printResin = () => {
  axios.get(`${baseURL}/resin`)
  .then((res) => {
    console.log(res.data)
  })
  .catch((theseHands) => console.log(theseHands))
}
const printAll = () => {
  printResin()
  printJewelry()
  printPaintings()
}

// printAll() It works great
paintingsBtn.addEventListener('click', printPaintings)
jewleryBtn.addEventListener('click', printJewelry)
resinBtn.addEventListener('click', printResin)