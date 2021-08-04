const r1 = document.querySelector("#r1")
const box = document.querySelector(".box")

const offsetX = document.querySelector("#offsetX")
const offsetY = document.querySelector("#offsetY")
const spread = document.querySelector("#spread")
const blur = document.querySelector("#blur")
const color = document.querySelector("#color")
const boxColor = document.querySelector("#box-color")
const result = document.querySelector("#result")
const inset = document.querySelector('#inset')
const outset = document.querySelector('#outset')
const offsetXcount = document.querySelector('.offsetX-count')
const offsetYcount = document.querySelector('.offsetY-count')
const blurCount = document.querySelector('.blur-count')
const spreadCount = document.querySelector('.spread-count')
const r1Count = document.querySelector('.r1-count')





// r1.onchange = generateBoxShadow
r1.oninput = generateBoxShadow
offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
spread.onchange = generateBoxShadow
boxColor.oninput = generateColor
result.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow
// result.onchange = resultBoxShadow

function generateBoxShadow() {
    console.log(inset.checked)
    if (inset.checked) {
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} inset`;
    } else {
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`;
    }
    box.style.borderRadius = r1.value + "%"
    result.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${boxColor.value}<br>`
    result.innerHTML += `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${boxColor.value}<br>`
    result.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${boxColor.value}<br>`
    offsetXcount.textContent = `${offsetX.value} px`
    offsetYcount.textContent = `${offsetY.value} px`
    blurCount.textContent = `${blur.value} px`
    spreadCount.textContent = `${spread.value} px`
    r1Count.textContent = `${r1.value} px`
}

function generateColor () {
    box.style.backgroundColor = boxColor.value
}















generateColor()