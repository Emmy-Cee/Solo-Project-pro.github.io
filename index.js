// Set the initial time in seconds
let time = 0;
let timer = document.getElementById("time")
// Create a function to update the timer every second
function updateTimer() {
  // Update the time and format it as minutes and seconds
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  // Display the formatted time on the console or on your webpage
  timer.textContent = (`${minutes}:${seconds}`);
  // Increase the time by one second
  time++;

}
// Call the updateTimer function every second (1000 milliseconds for 1 second)
setInterval(updateTimer, 1000);

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

//Pop-up message response-code: not working
if (timer === "48:0") {
    time = 0
    let homeScore = output1;
    let guestScore = output2;
    // let messageOutput = document.getElementById("message")
    // Function to identify the team with the highest score
        function getHighestScoringTeam() {
        if (homeScore > guestScore) {
            // messageOutput.textContent = "Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍"
            console.log("Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍")
        return messageOutput;
        } else if (guestScore > homeScore) {
            // messageOutput.textContent = "Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍"
            console.log("Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍")
        return messageOutput;
        } else {
        return "Both teams have the same score";
        }
        }
}