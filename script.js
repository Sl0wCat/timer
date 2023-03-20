
let timerInput = document.getElementById("time");
let timerShow = document.getElementById("timer");

//Отрисовка цифр с ведущим нулем
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//var timer;

function callTimer() {
    //Перезапуск таймера
    if (timer) clearInterval(timer);
    time = timerInput.value.split(":");
    //Время для таймера в секундах
    timeOut = Math.trunc(time[0]) * 60 * 60 + Math.trunc(time[1] * 60) + Math.trunc(time[2]);
    timer = setInterval(function () {
        //Часы, минуты, секунды
        hours = Math.trunc(timeOut / (60*60));
        minutes = Math.trunc((timeOut - hours * 60) / 60);
        seconds = timeOut - (hours * 60 * 60) - (minutes * 60);

        // Если время закончилось
        if (timeOut <= 0) {
            clearInterval(timer);
            timerShow.innerHTML = "Время закончилось";
        } else {
            //Если время не закончилось - представление оставшегося времени в формате HH:MM:SS
            let strTimer = checkTime(hours) + ':' + checkTime(minutes) + ':' + checkTime(seconds);
            timerShow.innerHTML = strTimer;
        }
        --timeOut; // Уменьшаем таймер
    }, 1000)
}
