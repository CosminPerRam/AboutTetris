// rgb
function changeTitleColor(r, g, b) {
    document.getElementById("rgb_title").style.color = `rgb(${r}, ${g}, ${b})`;
}

let color_r = 0, color_g = 0, color_b = 0;
let increment = true;

function getIncrementChange() {
    return increment ? 1 : -1;
}

function getIncrementMaximum() {
    return increment ? 255 : 0;
}

function changeColors() {
    changeTitleColor(color_r, color_g, color_b);

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
let x = 0, y = 0;
let draggable = undefined;

const mouseDownHandler = function (e) {
    x = e.clientX;
    y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    draggable.style.top = `${draggable.offsetTop + dy}px`;
    draggable.style.left = `${draggable.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// init
window.onload = function init() {
    draggable = window.document.getElementById('draggable');
    draggable.addEventListener('mousedown', mouseDownHandler);

    setInterval(changeColors, 1);
}
