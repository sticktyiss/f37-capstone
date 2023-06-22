asideL = document.querySelector("#asideLeft")

const baseURL = "http://localhost:4754" 


//aside slide show
imageI = 1
const asideImgChange = () => {
  images = ['../images/spray-pattern.jpg', 'beads.jpg']

  asideL.style.backgroundImage = images[imageI]
  if(imageI < 2){
    imageI++
  } else {
    imageI = 1
  }
  console.log(asideL.transitionDelay)
  console.log(asideL.transitionDuration)
  // asideImgChange()
}

asideImgChange()