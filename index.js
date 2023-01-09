// rgb
let rgb_title = undefined;

let color_r = 0, color_g = 0, color_b = 0;
let increment = true;

function getIncrementChange() {
    return increment ? 1 : -1;
}

function getIncrementMaximum() {
    return increment ? 255 : 0;
}

function changeColors() {
    rgb_title.style.color = `rgb(${color_r}, ${color_g}, ${color_b})`;

    if (color_r !== getIncrementMaximum()) {
        color_r += getIncrementChange();
        return;
    }

    if (color_g !== getIncrementMaximum()) {
        color_g += getIncrementChange();
        return;
    }

    if (color_b !== getIncrementMaximum()) {
        color_b += getIncrementChange();
        return;
    }

    increment = !increment;
}

// draggable
let draggable = undefined;

let position_x = 0, position_y = 0;

const mouseDownHandler = function (e) {
    position_x = e.clientX;
    position_y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - position_x; // e.clientX este pozitia pe viewport
    const dy = e.clientY - position_y;

    draggable.style.top = `${draggable.offsetTop + dy}px`; // draggable.offsetTop este pozitia de sus fata de cea originala
    // setam pozitia superioara la pozitia noua de la mouse
    draggable.style.left = `${draggable.offsetLeft + dx}px`;

    position_x = e.clientX; // memoram ultima pozitie
    position_y = e.clientY;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// init
onload = function init() {
    // rgb init
    rgb_title = document.getElementById("rgb_title");
    setInterval(changeColors, 1);

    // draggable init
    draggable = document.getElementById('draggable');
    draggable.addEventListener('mousedown', mouseDownHandler);
}
