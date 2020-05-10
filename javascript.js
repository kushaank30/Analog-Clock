const deg=6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() => {


    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


})



var month = document.getElementById('month')
var date = document.getElementById('date')
var year = document.getElementById('year')
var day = document.getElementById('day')

var weekdays = new Array(7)
weekdays[0] ="Sunday"
weekdays[1] ="Monday"
weekdays[2] ="Tuesday"
weekdays[3] ="Wednesday"
weekdays[4] ="Thursday"
weekdays[5] ="Friday"
weekdays[6] ="Saturday"

var Months = new Array(12)
Months[1] = "January"
Months[2] = "February"
Months[3] = "March"
Months[4] = "April"
Months[5] = "May"
Months[6] = "June"
Months[7] = "July"
Months[8] = "August"
Months[9] = "September"
Months[10] = "October"
Months[11] = "November"
Months[12] = "December"

month.innerHTML = Months[new Date().getMonth() + 1]
date.innerHTML = new Date().getDate()
year.innerHTML = new Date().getFullYear()
day.innerHTML = weekdays[new Date().getDay()]

if(month.innerHTML.toString().length==1){
    month.innerHTML = "0" + month.innerHTML
}

if(date.innerHTML.toString().length==1){
    date.innerHTML = "0" + date.innerHTML
}

