let cWidth = document.querySelector('#cWidth')
let cWidthh = document.querySelector('#cWidthh')
let cLength = document.querySelector('#cLength')
let cLengthh = document.querySelector('#cLengthh')
let cHeight = document.querySelector('#cHeight')
let cHeighth = document.querySelector('#cHeighth')
let cSquare = document.querySelector('#cSquare')


cWidth.addEventListener('input', function (e) {
  let widthValue = parseInt(e.target.value)
  return cWidthh.value = widthValue
})

cLength.addEventListener('input', function (e) {
  let lenghtValue = parseInt(e.target.value)
  return cLengthh.value = lenghtValue
})

cHeight.addEventListener('input', function (e) {
  let heightValue = parseInt(e.target.value)
  return cHeight.value = heightValue
})

setInterval(function () {
  cSquare.value = parseInt(cWidthh.value * cLengthh.value * cHeight.value)
}, 100)







