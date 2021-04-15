/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let value = string.split(':')
  let integer = parseInt(value[0])

    if (integer < 12 && integer > 0) {
      return "Good Morning"
    } else if (integer > 12 && integer < 17){
          return "Good Afternoon"
    } else {
          return "Good Evening"}
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}