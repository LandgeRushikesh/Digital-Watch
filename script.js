let date = document.querySelector(".date")
let day = document.querySelector(".day")
let time = document.querySelector(".time")
let indicator = document.querySelector("#indicator")
let colon = document.querySelector(".colon")

// for updating time,date,day
setInterval(()=>{
    const now = new Date()
    getTime(now.getHours(),now.getMinutes(),now.getSeconds())
    getDate(now.getDate(),now.getMonth(),now.getFullYear())
    getDay(now.getDay())
},1000)

// for blinking of the colon
setInterval(()=>{
    colon.classList.toggle("blink")
},500)

// time function
let getTime = (hour,min,sec) =>{
    let d = ""
    hour<12?d="AM":d="PM"
    hour = hour%12//converting 24 hrs clock into 12 hrs clock
    sec = sec<10 ? '0' + sec : sec
    min = min<10 ? '0' + min : min
    hour = hour<10 ? '0' + hour : hour
    let str = `${hour}<span class="colon">:</span>${min}<span class="colon">:</span>${sec} <span id="indicator">${d}</span>`
    time.innerHTML = str
}


const Months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
};

// date function
let getDate = (dt,month,year)=>{
    let str = `<span id="da-mo">${dt} ${Months[month]}</span> ${year}`
    date.innerHTML = str
}

let days = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
}

// day function
let getDay = (today)=>{
    day.innerText = days[today]
}
