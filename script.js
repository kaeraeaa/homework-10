let count = 0;
const intervalId = setInterval(() => {
    count++;
    document.getElementById('message').textContent = `Message ${count}`;
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);



const box = document.getElementById('box1');
let size = 50;
let position = 50;
const maxLimit = 100;
const interval = setInterval(() => {
    size += 5;
    position += 5;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.top = position + 'px';
    box.style.left = position + 'px';

    if (size >= maxLimit || position >= maxLimit) {
        clearInterval(interval);
    }
}, 500);



let score = 0;

const scoreDisplay = document.getElementById('score');
const target = document.getElementById('target');

target.onclick = () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveTarget();
};

function moveTarget() {
   // const x = Math.floor(Math.random() * (window.innerWidth - 50));
   // const y = Math.floor(Math.random() * (window.innerHeight - 50));
   // target.style.left = `${x}px`;
   // target.style.top = `${y}px`;
}

setInterval(() => {
    moveTarget();
}, 1000);



function startTimer() {
    const timeInput = document.getElementById('time-input').value;
    setTimeout(() => {
        document.getElementById('output').textContent = 'Time is up!';
    }, timeInput * 1000);
}
