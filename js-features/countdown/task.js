const timer = document.getElementById("timer");
let counter = setInterval(countDown, 200);
function countDown(){
    if (timer.textContent > 0) {
        timer.textContent = timer.textContent - 1;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(counter);
    }
}