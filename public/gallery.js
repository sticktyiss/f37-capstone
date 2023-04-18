const paintingsBtn = document.querySelector('#paintings')
const resinBtn = document.querySelector('#resin')
const jewleryBtn = document.querySelector('#jewelry')
const allBtn = document.querySelector('#all')
const sortForm = document.querySelector('#sortPrice')
const minVal = document.querySelector('#minSort')
const maxVal = document.querySelector('#maxSort')
const gallery = document.querySelector('#gallery')
const bucketList = document.querySelector('#bucketList')
const addItemOrderBtn = document.querySelector('button[class="hide"]')
const bucketMsg = document.querySelector('#bucketMsg')
const bucketForm = document.querySelector('#bucketForm')

const baseURL = "http://localhost:4754"
let arr = []

const printPaintings = () => {
  axios.get(`${baseURL}/paintings`)
  .then((res) => {
    arr = res.data
    handleItems()
  })
  .catch((theseHands) => console.log(theseHands))
}
const printJewelry = () => {
  axios.get(`${baseURL}/jewelry`)
  .then((res) => {
    arr = res.data
    handleItems()
  })
  .catch((theseHands) => console.log(theseHands))
}
const printResin = () => {
  axios.get(`${baseURL}/resin`)
  .then((res) => {
    arr = res.data
    handleItems()
  })
  .catch((theseHands) => console.log(theseHands))
}
const printAll = () => {
  axios.get(`${baseURL}/all`)
  .then((res) => {
    arr = res.data
    handleItems()
  })
  .catch((theseHands) => console.log(theseHands))
}
//FUNCTIONS TO PRINT ITEMS
const printCard = items => {
  gallery.innerHTML = ''
  items.reverse()
  for(let i=0; i<items.length; i++){
    let card = document.createElement('div')
    card.innerHTML = `
    <img src='${items[i].image}'>
    <h3>${items[i].title}</h3>
    <p>${items[i].desc}</p>
    <p class='prices'>${items[i].price}</p>
    <button class="addItem" onclick="addToBucket(arr[${i}])">Add to bucket</button>
    `
    gallery.appendChild(card)
  }
}
const printBucketItem = bucket => {
  bucketList.innerHTML = ''
  for(let i=0; i<bucket.length; i++){
    let addedItem = document.createElement('li')
    addedItem.innerHTML = `
    <img src='${bucket[i].image}'>
    <div>
      <h4>${bucket[i].title}</h4>
      <p class=' bucketPrices'>${bucket[i].price}</p>
      <button class="rmItem" onclick="removeFromBucket(${i})">Remove</button>
    </div>
    `
    bucketList.appendChild(addedItem)
  }
}
//function to filter by PRICE
const handleItems = (min, max) => {
  let newArr = arr
  if(min || max){
    newArr = newArr.filter(item => {
      if(min && max){
        if(item.price >= min && item.price <= max){
          return true
        }
      } else if(min){
        if(item.price >= min){
          return true
        }
      } else if(max){
        if(item.price <= max){
          return true
        }
      }
    }).reverse()
  }
  printCard(newArr)
}
//BUTTON FX
const clearBtnFX = () => {
  allBtn.style.boxShadow = ""
  resinBtn.style.boxShadow = ""
  paintingsBtn.style.boxShadow = ""
  jewleryBtn.style.boxShadow = ""
}
const currentBtnFX = (btn) => {
  btn.style.boxShadow = "0px 1px 5px black"
}
//BUCKET FUNCTIONS
const addToBucket = (item) => {
  axios.post(`${baseURL}/bucket`, item)
  .then(res => {
    printBucketItem(res.data)
    showBucketForm()
  })
  .catch(theseHands => console.log(theseHands))
}
const removeFromBucket = (bucketIndex) => {
  axios.delete(`${baseURL}/bucket/${bucketIndex}`)
  .then(res => {
    printBucketItem(res.data)
    showBucketForm()
  })
  .catch(theseHands => console.log(theseHands))
}
const showBucketForm = () => {
  if(bucketList.innerHTML !== ""){
    console.log('show', bucketForm.display)
    bucketForm.display.value = "flex"
    addItemOrderBtn.classList = ""
  } else {
    console.log('hide', bucketForm.display)
    bucketForm.display = "none"
    addItemOrderBtn.classList = "hide"
  }
}
const addBucketToForm = () => {
  axios.get(`${baseURL}/bucket`)
  .then(res => {
    let items = res.data.map()
    console.log(items)
    let msg = document.createElement('input')
    msg.type = "text"
    msg.name = `${items}`
    console.log(msg)
    // sendOrderForm.appendChild(items)
  })
  .catch(theseHands => console.log(theseHands))
}

printAll()
currentBtnFX(allBtn)

allBtn.addEventListener('click', () => {
  clearBtnFX()
  currentBtnFX(allBtn)
  printAll()})
paintingsBtn.addEventListener('click', () => {
  clearBtnFX()
  currentBtnFX(paintingsBtn)
  printPaintings()})
jewleryBtn.addEventListener('click', () => {
  clearBtnFX()
  currentBtnFX(jewleryBtn)
  printJewelry()})
resinBtn.addEventListener('click', () => {
  clearBtnFX()
  currentBtnFX(resinBtn)
  printResin()})
sortForm.addEventListener('submit', (e) => {
  e.preventDefault()
  handleItems(minVal.value?+minVal.value:false, maxVal.value?+maxVal.value:false)})
// sendOrderBtn.addEventListener('click', showSendOrderForm)
// sendOrderForm.addEventListener('submit', addBucketToForm)