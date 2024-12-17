const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

plus.addEventListener('click', () => {
  let num = parseInt(plus.previousElementSibling.innerHTML);
  plus.previousElementSibling.innerHTML = num + 1;
})

minus.addEventListener('click', () => {
  let num = parseInt(minus.nextElementSibling.innerHTML);
  if(num > 1){
    minus.nextElementSibling.innerHTML = num - 1;
  }
})

let bigDisplay = document.querySelector('.big-display img')
const listDisplay = document.querySelector('.small-display')

for (const element of listDisplay.children) {
  let imageUrl;
  element.addEventListener('click', () => {
    imageUrl = element.firstElementChild.getAttribute("src")

    bigDisplay.setAttribute("src", imageUrl.replace('-thumbnail', ''));

    listDisplay.childNodes.forEach((element, index) => {
      if (index % 2 != 0) {
        if(bigDisplay.getAttribute("src") === element.firstElementChild.getAttribute('src').replace('-thumbnail', '')){
              element.firstElementChild.style.border = "2px solid hsl(26, 100%, 55%)"
              element.firstElementChild.style.opacity = "0.5"
        }else{
          element.firstElementChild.style.border = "none"
        }  
      }}
    )

  })
}


const cartContent = document.querySelector('.user-cart img')
cartContent.addEventListener('click', () => {
  document.querySelector('.carted-items').toggleAttribute("hidden")
})