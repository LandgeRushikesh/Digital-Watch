let date = document.querySelector(".date")
let day = document.querySelector(".day")
let time = document.querySelector(".time")
let indicator = document.querySelector("#indicator")

setInterval(()=>{
    const now = new Date()
    getTime(now.getHours(),now.getMinutes(),now.getSeconds())
    getDate(now.getDate(),now.getMonth(),now.getFullYear())
    getDay(now.getDay())
},1000)

let getTime = (hour,min,sec) =>{
    let d = ""
    hour<12?d="AM":d="PM"
    hour = hour%12
    if(sec<10){
        sec = '0'+sec
    }
    if(min<10){
        min = '0'+min
    }
    if(hour<10){
        hour = '0'+hour
    }
    let str = `${hour}:${min}:${sec} <span id="indicator">${d}</span>`
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
let getDay = (today)=>{
    day.innerText = days[today]
}