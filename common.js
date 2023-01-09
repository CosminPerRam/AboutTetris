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

window.onload = function init() {
    setInterval(changeColors, 1);
}
