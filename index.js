document.addEventListener("DOMContentLoaded", function(){
    console.log("Script loaded");

    let output1 = document.getElementById("home-scores")
    let output2 = document.getElementById("guest-scores")
    let messageOutput = document.querySelector("#message-output")
    function startCounting(){
        let count = 0
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
                    
        document.getElementById("home-add1").addEventListener("click", add1)
        document.getElementById("home-add2").addEventListener("click", add2)
        document.getElementById("home-add3").addEventListener("click", add3)
            
        let value = 0
        function add1Value() {
            value ++
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
        document.getElementById("guest-add1").addEventListener("click", add1Value)
        document.getElementById("guest-add2").addEventListener("click", add2Value)
        document.getElementById("guest-add3").addEventListener("click", add3Value)
        
    }
    startCounting();
    // Set the initial time in seconds
    let time = 0;
    let timer = document.getElementById("time")
    // Create a function to update the timer every second
    function updateTimer() {
    // Update the time and format it as minutes and seconds
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    //   Display the formatted time on the timer function
    timer.textContent = `${minutes}:${seconds}`;
    // Increase the time by one second
    time++;

        // Check if the time has reached 48 minutes (2880 seconds)
        if (time >= 2880) {
            // Start counting after 48 minutes
            time = 0
            startCounting();
            document.querySelector(".startGame").addEventListener("click", startCounting)
        }


        let homeScore = parseInt(output1.textContent, 10)
        let guestScore = parseInt(output2.textContent, 10)
        if (time === 720 || time === 1440 || time === 2160 || time === 2880) {
            let quarterEndMessage = ""

            if (time === 720) {
                quarterEndMessage = "End of 1st Quarter"
            } else if (time === 1440) {
                quarterEndMessageEndMessage = "End of 2nd Quarter"
            } else if(time === 2160) {
                quarterEndMessageEndMessage = "End of 3rd Quarter"
            } else if(time === 2880) {
                quarterEndMessage = "End of 4th Quarter"
            }

            if (homeScore> guestScore) {
                messageOutput.innerHTML = `<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! The Home team has won😃😃 Guest team better luck next time 👍👍</p>`
                console.log(`<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! The Home team has won😃😃 Guest team better luck next time 👍👍</p>`)
            } else if (guestScore > homeScore) {
                messageOutput.innerHTML = `<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! The Guest team has won😃😃 Home team better luck next time 👍👍<p>`
                console.log(`<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! The Guest team has won😃😃 Home team better luck next time 👍👍</p>`)
            } else {
                messageOutput.innerHTML = `<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! Both teams took a draw😒😒. Play to win 👍👍<p>`
                console.log(`<p id="first-message">${quarterEndMessage}</p><p id="second-message">Whoo! The Home team has won😃😃 Guest team better luck next time 👍👍</p>`)
            }
        }
    }
    // Call the updateTimer function every second (1000 milliseconds for 1 second)
    setInterval(updateTimer, 1000);
});

