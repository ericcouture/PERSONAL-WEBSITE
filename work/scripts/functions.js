function toggleWidth() {
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    right.classList.add("right-fullwidth");
    // right.classList.toggle("right-fullwidth.background-image");
    left.classList.add("left-fullwidth");
}

function worlds() {
    var frame = document.getElementById("frame");
    frame.src = "pieces/worlds.html";
    if (frame.classList.contains("hidden")) {
        frame.src = "pieces/worlds.html";
        frame.classList.toggle("hidden");
    }
    else {
        frame.src = "pieces/worlds.html";
    }

}

function worldsBook() {
    var frame = document.getElementById("frame");

    if (frame.classList.contains("hidden")) {
        frame.src = "pieces/worlds-book.html";
        frame.classList.toggle("hidden");
    }
    else {
        frame.src = "pieces/worlds-book.html";
    }

}

function queerJoy() {
    var frame = document.getElementById("frame");

    if (frame.classList.contains("hidden")) {
        frame.src = "pieces/queer-joy.html";
        frame.classList.toggle("hidden");
    }
    else {
        frame.src = "pieces/queer-joy.html";
    }

}
