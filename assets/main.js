const button5 = document.querySelector("#plusFive")
const button10 = document.querySelector("#plusTen")
const button15 = document.querySelector("#plusFifteen")
const button20 = document.querySelector("#plusTwenty")

const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  //disp.textContent = "added 5"
  //indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
  let val = 5
  final(val)
})

button10.addEventListener('click', () => {
  //disp.textContent = "added 10"
  //indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
  let val = 10
  final(val)
})

button15.addEventListener('click', () => {
  //disp.textContent = "added 15"
  //indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
  let val = 15
  final(val)
})

button20.addEventListener('click', () => {
  //disp.textContent = "added 20"
  //indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
  let val = 20
  final(val)
})

const final = (val)=>{
	disp.textContent = `added${val}`
 	indicator.textContent = (parseInt(indicator.textContent) + val).toString()
}
