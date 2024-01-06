const random_color = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval;
const start_color = function () {
    if (!interval) {
        interval = setInterval(changebgc, 1000);
    }

    function changebgc() {
        document.body.style.backgroundColor = random_color();
    }
};

const stop_color = function () {
    clearInterval(interval);
    interval = null;
};

document.querySelector("#start").addEventListener("click", start_color);
document.querySelector("#stop").addEventListener("click", stop_color);
