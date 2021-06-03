import "./style/style";

let [img, elementSlides, startTouch, startDown] = [null],
allSlides = document.querySelector(".slides"),
addStyle,
numb = 1,
i = 0;
window.onload = async  function (){
    let response = await fetch ("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
    let characterTwo = await response.json();
    for (let i = 0; i < characterTwo.length; i ++){
      img = document.createElement("img");
      img.src = characterTwo[i].image;
      img.alt = "image";
      allSlides.append(img);
      elementSlides = document.getElementsByTagName("img");
      elementSlides[0].classList = 'block';
    }
      };

addStyle = () => elementSlides[i].classList.add("block");

function prev() {
  --i;  
  i < 0 ? elementSlides[i + 1].classList.remove("block") | (i = elementSlides.length - 1) | addStyle() :
  elementSlides[i + 1].classList.remove("block") | addStyle()
};
function next() {
  ++i;
  i >= elementSlides.length? elementSlides[i - 1].classList.remove("block") | (i = 0) | addStyle() : 
  elementSlides[i - 1].classList.remove("block") | addStyle()
};

function deletListener(del = 2){
  del === 1 ? allSlides.removeEventListener("mouseup", scroll) : allSlides.removeEventListener("touchend", scroll);
}

function touches(e) {
  let touch = e.changedTouches;
  let coordTouchs;
  for (let i = 0; i < touch.length; i ++){
    coordTouchs = touch[i].screenX
  }
  return coordTouchs;
};

scroll = (start, end) => start > end && start - end > 30 ? prev(): start < end && end - start > 30 ? next(): false;

allSlides.addEventListener("touchstart",function (e){
    startTouch = touches(e);
  },false);

allSlides.addEventListener("touchend",function (e) {
  let endTouch = touches(e);
    scroll (startTouch,endTouch)
    deletListener(numb)
  },false);

allSlides.addEventListener("mousedown", function (e) {
    startDown = e.clientX; 
    allSlides.classList.add('slides_grabbing');
  },false);

allSlides.addEventListener("mouseup", function (e) {
  let endUp = e.clientX;
    scroll (startDown,endUp)
    allSlides.classList.remove('slides_grabbing')
    deletListener()
  },false);
  

