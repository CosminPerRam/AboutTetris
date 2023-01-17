
let settings_width_text;
let settings_width_slider;
let settings_height_text;
let settings_height_slider;

function slider_change(text, slider) {
    return function () {
        text.textContent = slider.value;
    }
}

// init
onload = function init() {
    settings_width_slider = document.getElementById("settings_width");
    settings_width_text = document.getElementById("width_value");
    settings_width_slider.onclick = slider_change(settings_width_text, settings_width_slider);

    settings_height_slider = document.getElementById("settings_height");
    settings_height_text = document.getElementById("height_value");
    settings_height_slider.onclick = slider_change(settings_height_text, settings_height_slider);

    slider_change(settings_width_text, settings_width_slider)();
    slider_change(settings_height_text, settings_height_slider)();
}