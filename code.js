document.addEventListener('keydown', handleClick) // listen for keypress

/*
KEYCODE INFO
Q = 81
W = 87
E = 69
R = 82
T = 84
Y = 89
*/

function handleClick(e){
    //Pre-load otherwise only half sample is played
    document.getElementById('Q').load();
    document.getElementById('W').load();
    document.getElementById('E').load();
    document.getElementById('R').load();
    document.getElementById('T').load();
    document.getElementById('Y').load();
    var keyCode = e.keyCode;
    if (keyCode == 81){
        // alert("You clicked me!")
        document.getElementById('Q').play();
    } else if (keyCode == 87) {
        document.getElementById('W').play();
    } else if (keyCode == 69) {
        document.getElementById('E').play();
    } else if (keyCode == 82) {
        document.getElementById('R').play();
    } else if (keyCode == 84) {
        document.getElementById('T').play();
    } else if (keyCode == 89) {
        document.getElementById('Y').play();
    }
}
