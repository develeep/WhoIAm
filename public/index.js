const saTriggerMargin = 100;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    console.log(element, element.getBoundingClientRect().top + saTriggerMargin)
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
        element.classList.remove('remove')
      }
    }
    else if(element.classList.contains('show')){
      if (window.innerHeight-200 < element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('remove');
        element.classList.remove('show');
      }
    }
  }
}

document.querySelector('.page').addEventListener('load', saFunc);
document.querySelector('.page').addEventListener('scroll', saFunc);