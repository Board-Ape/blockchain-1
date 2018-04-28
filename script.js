let greeting = document.getElementById("greeting");

const changeBackColor = () => {
  greeting.style.background === "red" ?
    greeting.style.background = "green" :
    greeting.style.background = "red"
}
