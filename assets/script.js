
const stage = document.querySelector('.stage');
const startScreen = document.querySelector('#startScreen')
const endScreen = document.querySelector('#endScreen')
const startEasybtn = document.querySelector('#srt-easy-btn');
const startMediumbtn = document.querySelector('#srt-medium-btn');
const startHardbtn = document.querySelector('#srt-hard-btn');
const endbtn = document.querySelector('#end-btn');
const timerhtml = document.querySelector('#timer')
const scorehtml = document.querySelector('#score')
const liveshtml = document.querySelector('#lives')

startEasybtn.addEventListener('click', write);
startMediumbtn.addEventListener('click', write);
startHardbtn.addEventListener('click', write);
endbtn.addEventListener('click', clear);

var easyWords = ['light','maids, equal','nepal','links','april','brazil'];
var mediumWords = ['potency', 'amusing', 'computer', 'oranges', 'showbiz','vietnam']
var hardWords = ['uncharted', 'lecturing', 'shrinkage', 'spreading', 'dismantle',]

var chosenWord = []

function gameState(level) {
    if (level == 'Easy') {
        var gameTime = 60
        var gameScore = 0
        var gameLives = 20
        timerhtml.innerText = gameTime
        scorehtml.innerText = gameScore
        liveshtml.innerText = gameLives
    }
    else if (level == 'Medium') {
        var gameTime = 60
        var gameScore = 0
        var gameLives = 20
        timerhtml.innerText = gameTime
        scorehtml.innerText = gameScore
        liveshtml.innerText = gameLives
    }
    else if (level == 'Hard') {
        var gameTime = 80
        var gameScore = 0
        var gameLives = 20
        timerhtml.innerText = gameTime
        scorehtml.innerText = gameScore
        liveshtml.innerText = gameLives
    }

}

function timestart() {
    clockInterval = setInterval(timedown, 1000)
}

function timedown(){
    time = timerhtml.innerText
    time--
    timerhtml.innerText = time
    if (time == 0) { 
        endgame();
        console.log("endtimer")
        clearInterval(clockInterval)        
    }
}


function ranNum(max) {
    var numberRand = Math.floor(Math.random() * max);
    return numberRand;
}




// box is create through a temple html because it need id that are custom
function htmlBoxCreate() {
    const createLetterBox = document.createElement('template');

    var html = '<div class="letterBox" lettervalue="none"></div>';
    createLetterBox.innerHTML = html.trim();
    return createLetterBox.content.firstChild;
}

// Adds the letter to the box or in the future will just add it attribute
function addletter(Letter) {
    stage.children[Letter].setAttribute('lettervalue', gameword[Letter])

}


function mode(level) {
    if (level == 'Easy') {
        var wnum = ranNum(easyWords.length)
        var randWord = easyWords[wnum];
        gameword = randWord.split('');
    }
    else if (level == 'Medium') {
        var wnum = ranNum(mediumWords.length)
        var randWord = mediumWords[wnum];
        gameword = randWord.split('');
    }
    else if (level == 'Hard') {
        var wnum = ranNum(hardWords.length)
        var randWord = hardWords[wnum];
        gameword = randWord.split('');
    }
}

function write(event) {
    var level = event.target.innerText
    gameState(level)
    mode(level)
    timestart()
    for (let i = 0; i < gameword.length; i++) {
        stage.appendChild(htmlBoxCreate());
        addletter(i);
        startScreen.setAttribute('style', 'display: none ')

    }
}

function endgame(){
    endScreen.setAttribute('style', 'display: flex ')
    clearInterval(clockInterval)
}


function clear() {
    while (stage.firstChild) {
        stage.removeChild(stage.firstChild);
    }
    startScreen.setAttribute('style', 'display: flex ')
    endScreen.setAttribute('style','display: hidden')
}


function gamechecker(event) {
    var score = scorehtml.innerText 
    var lives = liveshtml.innerText

    for (let i = 0; i < gameword.length; i++) {
        var letterboxInterval = stage.children[i].getAttribute('lettervalue');
        var boxinside = stage.children[i];
        if (letterboxInterval == event.key) {
            stage.children[i].setAttribute('style', 'background: var(--color3)')
            boxinside.innerText = letterboxInterval
            score++
            scorehtml.innerText = score
        }

    }
        if ((letterboxInterval != event.key)) {
        lives--
        liveshtml.innerText = lives
    }
        if ( lives == 0 | score == gameword.length){
            endgame()
        }
}







document.addEventListener("keydown", gamechecker)

