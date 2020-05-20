const d1 = document.querySelector("[data-d1]")
const d2 = document.querySelector("[data-d2]")
const d3 = document.querySelector("[data-d3]")
const d4 = document.querySelector("[data-d4]")
const d5 = document.querySelector("[data-d5]")
const d6 = document.querySelector("[data-d6]")
const d7 = document.querySelector("[data-d7]")
const d8 = document.querySelector("[data-d8]")
const d9 = document.querySelector("[data-d9]")
const resetButton = document.querySelector('[data-reset]')
const container = document.querySelector('[data-container]')

let numClick = 1
let xarray = []
let oarray = []

function writerXO(dnum, st){
    if (numClick % 2 === 0){
        dnum.innerText = "O"
        oarray += st
    }
    else {
        dnum.innerText = "X"
        xarray += st
    }
    numClick++
    checkA()
}

function checkA(){
    if (numClick > 4 && numClick % 2 === 0){
        if (check(xarray)){
            container.innerText = 'X wins!'
        }
    }
    if (numClick > 4 && numClick % 2 !== 0){
        if (check(oarray)){
            container.innerText = 'O wins!'
        }
    }
}

function check(arr){
   if (arr.includes('5') && ((arr.includes('2') && arr.includes('8')) || (arr.includes('7') && arr.includes('3')) || (arr.includes('1') && arr.includes('9'))
   || (arr.includes('4') && arr.includes('6'))) ){
       return true
   }
   else if (arr.includes('1') && ((arr.includes('2') && arr.includes('3')) || (arr.includes('4') && arr.includes('7')))){
       return true
   }
   else if (arr.includes('9') && ((arr.includes('8') && arr.includes('7')) || (arr.includes('6') && arr.includes('3')))){
       return true
   }
   return false
}

d1.addEventListener('click', e => {
    writerXO(d1, '1')
    d1.disabled = true
    
})
d2.addEventListener('click', e => {
    writerXO(d2, '2')
    d2.disabled = true
})
d3.addEventListener('click', e => {
    writerXO(d3, '3')
    d3.disabled = true
})
d4.addEventListener('click', e => {
    writerXO(d4, '4')
    d4.disabled = true
})
d5.addEventListener('click', e => {
    writerXO(d5, '5')
    d5.disabled = true
})
d6.addEventListener('click', e => {
    writerXO(d6, '6')
    d6.disabled = true
})
d7.addEventListener('click', e => {
    writerXO(d7, '7')
    d7.disabled = true
})
d8.addEventListener('click', e => {
    writerXO(d8, '8')
    d8.disabled = true
})
d9.addEventListener('click', e => {
    writerXO(d9, '9')
    d9.disabled = true
})


resetButton.addEventListener('click', e => {
    window.location.reload()
})