// 1
function getCurrentDateTime() {
    let now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1);
    let day = String(now.getDate());

    let hours = String(now.getHours());
    let minutes = String(now.getMinutes());
    let seconds = String(now.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


// 2
function calculateAge(birthdate) {
    let today = new Date();
    let birth = new Date(birthdate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}


// 3
function getDayOfWeek(dateString) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(dateString);
    return days[date.getDay()];
}


// 4
function timer() {
    let count = 0
    setInterval(function(){
        console.log(count);
        count++
    }, 1000)
}


// 5
function hms() {
    setInterval(function () {
        let now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        if (hours < 10){
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }    
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}


// 6
function rn() {
    setInterval(function () {
        console.log(Math.random());
    },1000)
}


// 7
function delayedMessage(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}


// 8
function greet() {
    setTimeout(function() {
        console.log('hello user');
    },2000)
}


// 9
function secuenc() {
    setTimeout(
        function sayHello(){
        console.log('hello');
    },1000),
    setTimeout(
        function sayDear() {
        console.log('dear'); 
    },2000),
    setTimeout(
        function sayGuest() {
        console.log('Guest');
    },3000)
}

// 10
function whatTime() {
    setInterval(() => {
        let date = new Date()
        console.log(date);
        let hour = date.getHours()
        if (hour < 12) {
            console.log('Good Morning');
            
        } else if(hour < 18 ) {
            console.log("Good Afternoon");
        }else{
            console.log("Good Evening");
        }
    }, 1000);
}

