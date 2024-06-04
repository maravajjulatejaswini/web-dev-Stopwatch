let startTime, elapsedTime = 0, timerInterval;

function print(txt) {
    document.querySelector('.display').innerHTML = txt;
}

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(formatTime(elapsedTime));
        }, 10);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    print('00:00:00.000');
    document.querySelector('.laps').innerHTML = '';
}

function lap() {
    const li = document.createElement('li');
    li.innerText = formatTime(elapsedTime);
    document.querySelector('.laps').appendChild(li);
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let millisecondsFormatted = milliseconds % 1000;
    return (
        pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + '.' + pad(millisecondsFormatted, 3)
    );
}

function pad(num, size = 2) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

document.querySelector('.start').addEventListener('click', start);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.lap').addEventListener('click', lap);
