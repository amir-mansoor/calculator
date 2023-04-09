const buttons = document.querySelectorAll('button')
const input = document.querySelector("input")

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.textContent === "C") {
      clearInput()
    } else if (button.textContent === "=") {
      evaluate()
    } else {
      appendValue(button.textContent)
    }
  })
})

const clearInput = () => {
  input.value = ""
}

const evaluate = () => {
  input.value = eval(input.value)
}

const appendValue = (num) => {
  input.value += num
}
