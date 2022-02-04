const time = document.getElementById ('time');

function showTime() {
  
    //Time
let today = new Date(),
hour = today.getHours(),
min = today.getMinutes(),
sec = today.getSeconds();


time.innerHTML = `${addZeros(hour)}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)}`

setTimeout (showTime, 1000);
}

function addZeros(n) {
return(parseInt(n, 10) < 10 ? '0' : '') + n;
}


/*Date - Ne Valja Kod
const date = document.getElementById ('date');

function showDate() {

let date = new Date(),                                                        
year = date.getFullYear(),
month = date.getMonth(),
day = date.getDay();

date.innerHTML = `${year}<span>-</span>${month}<span>-</span>${day}`
}
*/



//Run
showTime ();
showDate ();
