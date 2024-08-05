let count = 0
let output1 = document.getElementById("home-scores")
function add1() {
    count += 1
    output1.textContent = count
}
function add2() {
    count += 2
    output1.textContent = count
}
function add3() {
    count += 3
    output1.textContent = count
}

let value = 0
let output2 = document.getElementById("guest-scores")
function add1Value() {
    value += 1
    output2.textContent = value
}
function add2Value() {
    value += 2
    output2.textContent = value
}
function add3Value() {
    value += 3
    output2.textContent = value
}