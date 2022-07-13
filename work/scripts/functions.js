function toggleWidth() {
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    right.classList.toggle("right-fullwidth");
    left.classList.toggle("left-smallwidth");
}

function worlds() {
    var frame = document.getElementById("frame");
    frame.src = "pieces/worlds.html";
    frame.classList.toggle("hidden")
}