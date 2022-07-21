function toggleWidth() {
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    right.classList.toggle("right-fullwidth");
    // right.classList.toggle("right-fullwidth.background-image");
    left.classList.toggle("left-fullwidth");
}

function worlds() {
    var frame = document.getElementById("frame");
    frame.src = "pieces/worlds.html";
    frame.classList.toggle("hidden")
}
