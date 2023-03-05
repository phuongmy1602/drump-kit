for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("i got clicked!");
    // console.log(this.innerHTML);
    this.style.color = "white"
  });
}


// let audio = new Audio("sounds/tom-1.mp3");
//     audio.play();