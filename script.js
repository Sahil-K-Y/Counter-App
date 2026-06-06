let currentValue = 0;

function inc() {
    let a = document.getElementById("value").innerText;
    a = parseInt(a);
    a++;
    document.getElementById("value").innerText = a;
}
function dec() {
    let a = document.getElementById("value").innerText;
    a = parseInt(a);
    a--;
    document.getElementById("value").innerText = a;
}
function save() {
    let a = document.getElementById("value").innerText;
    a = parseInt(a);
    currentValue = a;

    let history = document.getElementById("history");
    let item = document.createElement("p");
    item.innerText = "Saved value: " + a;
    history.appendChild(item);
}
function reset() {
    document.getElementById("value").innerText = 0;
}
function load() {
    let a = currentValue;
    document.getElementById("value").innerText = a;
    document.querySelector(".history").classList.add("show");
}
