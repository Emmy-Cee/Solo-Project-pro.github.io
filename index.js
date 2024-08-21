// Set the initial time in seconds
let time = 0;
let timer = document.getElementById("time")
// Create a function to update the timer every second
function updateTimer() {
  // Update the time and format it as minutes and seconds
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
//   Display the formatted time on the timer function
  timer.textContent = (`${minutes}:${seconds}`);
  // Increase the time by one second
  time++;

    // Check if the time has reached 48 minutes (2880 seconds)
    if (time >= 2880) {
        // Start counting after 48 minutes
        startCounting();
    }

    if (time === 720) {
        function getHighestScoringTeam() {
            if (homeScore > guestScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 1st Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍");
                return messageOutput;
            } else if (guestScore > homeScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 1st Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍");
                return messageOutput;
            } else {
                return "Both teams have the same score";
            }
        }
    } else if (time === 1440) {
        function getHighestScoringTeam() {
            if (homeScore > guestScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 2nd Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍");
                return messageOutput;
            } else if (guestScore > homeScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 2nd Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍");
                return messageOutput;
            } else {
                return "Both teams have the same score";
            }
        }
    } else if (time === 2160) {
        function getHighestScoringTeam() {
            if (homeScore > guestScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 3rd Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍");
                return messageOutput;
            } else if (guestScore > homeScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of 3rd Quarter</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍");
                return messageOutput;
            } else {
                return "Both teams have the same score";
            }
        }
    } else if (time === 2880){
        function getHighestScoringTeam() {
            if (homeScore > guestScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of Game</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍");
                return messageOutput;
            } else if (guestScore > homeScore) {
                messageOutput.innerHTML = "<p id='first-message'>End of Game</p>" + "<p id='second-message'>Whoo! The Home team has won😃😃" + "Guest team better luck next time👍👍</p>";
                // console.log("Whoo! The Guest team has won😃😃" + "Home team strive harder👍👍");
                return messageOutput;
            } else {
                return "Both teams have the same score";
            }
        }
    }
}

// Call the updateTimer function every second (1000 milliseconds for 1 second)
setInterval(updateTimer, 1000);



let count = 0
let output1 = document.getElementById("home-scores")
function startCounting(){
    function add1() {
        count ++
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
    
}