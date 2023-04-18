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
  asideL.style.transitionDelay = '3s'
  asideL.transitionDuration = '2s'
  asideImgChange()
}

asideImgChange()