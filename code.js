document.addEventListener('keydown', handleClick)

// const Q = document.getElementById("Q");
// var Q = data-key="81";

function handleClick(e){
    var keyCode = e.keyCode;
    if (keyCode == 81){
        alert("You clicked me!")
    }
}