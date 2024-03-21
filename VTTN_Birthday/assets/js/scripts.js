var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");
var muteIcon = document.getElementById("muteIcon");

// Set the initial state of the button and audio
var isMuted = false;
muteIcon.className = "fa fa-volume-up"; // Set initial icon

// Function to toggle mute/unmute
function toggleMute() {
    if (isMuted) {
        audio.muted = false;
        muteIcon.className = "fa fa-volume-up";
    } else {
        audio.muted = true;
        muteIcon.className = "fa fa-volume-mute";
    }
    isMuted = !isMuted;
}

function showContent() {
    var content = document.getElementById("content");
    content.style.opacity = '1';
    var text = content.innerText;
    content.innerHTML = ""; // Xóa nội dung ban đầu

    var index = 0;
    var delay = 100; // Thời gian trễ giữa các ký tự (miliseconds)

    function showText() {
        content.innerHTML += text[index];
        index++;
        if (index < text.length) {
            setTimeout(showText, delay);
        }
    }

    showText();
}


// Add click event listener to the button
muteButton.addEventListener("click", toggleMute);

const stage1 = document.getElementById("stage1");
const stage2 = document.getElementById("stage2");
const stage3 = document.getElementById("stage3");
const stagefinal = document.getElementById("stagefinal");
const stageEnd = document.getElementById("stageEnd");

const letterImage = document.getElementById("letterImage");
const blowOutCandles = document.getElementById("blowOutCandles");
const _continue = document.getElementById("_continue");
const backToStage1 = document.getElementById("backToStage1");

var isblowOutCandles = false;

blowOutCandles.addEventListener('click', () => {
    stage1.style.display = 'none';
    stage2.style.display = 'block';
    stage3.style.display = 'none';
    stagefinal.style.display = 'none';
    stageEnd.style.display = 'none';
});

_continue.addEventListener('click', () => {
    stage1.style.display = 'none';
    stage2.style.display = 'none';
    stage3.style.display = 'none';
    stagefinal.style.display = 'block';
    stageEnd.style.display = 'none';
});

var letterClickCount = 0;
letterImage.addEventListener('click', () => {
    letterClickCount++;
    if (letterClickCount > 1) {
        setTimeout(() => {
            stagefinal.style.display = 'none';
        }, 150);
        stageEnd.style.display = 'block';
        backToStage1.style.display = 'block';
        setTimeout(showContent, 180);
    }
});

document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
    isblowOutCandles = true;
    if (isblowOutCandles) {
        stage1.style.display = 'none';
        stage2.style.display = 'none';
        stage3.style.display = 'block';
        stagefinal.style.display = 'none';
        stageEnd.style.display = 'none';
    }
}

backToStage1.addEventListener('click', () => {
    location.reload();
});

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}