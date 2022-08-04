// alert("working")

const deadline = new Date("aug 10, 2022 00:00:00").getTime();

// alert(deadline);

const now = new Date().getTime();
const t = deadline - now;
const days = Math.floor(t / (1000 * 60 * 60 * 24));
const hours = Math.floor((t%(100*60*60*24))/(1000*60*60));
const minutes = Math.floor((t% (1000*60*60))/(1000*60));
const seconds = Math.floor ((t% (1000*60))/ 1000);

// console.log(days, hours, minutes, seconds)

document.getElementById("d").innerHTML = days
document.getElementById("h").innerHTML = hours
document.getElementById("m").innerHTML = minutes
document.getElementById("s").innerHTML = seconds