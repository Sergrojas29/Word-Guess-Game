
const stage = document.querySelector('.stage');
const startScreen = document.querySelector('#startScreen')
const startEasybtn = document.querySelector('#srt-easy-btn');
const startMediumbtn = document.querySelector('#srt-medium-btn');
const startHardbtn = document.querySelector('#srt-hard-btn');
const endbtn = document.querySelector('#end-btn');

startEasybtn.addEventListener('click', write);
startMediumbtn.addEventListener('click', write);
startHardbtn.addEventListener('click', write);
endbtn.addEventListener('click', clear);


var easyWords = ['pulse', 'cakes', 'climb', 'light'];
var mediumWords = ['potency', 'amusing', 'castile', 'oranges', 'showbiz',]
var hardWords = ['uncharted', 'lecturing', 'shrinkage', 'spreading', 'dismantle',]
var chosenWord = []
var gameTime = 0
var gameScore = 0

// var chosenWord = easyWords[1]
// var gameword = chosenWord.split('');

function ranNum(max) {
    var numberRand = Math.floor(Math.random() * max - 1);
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
    // stage.children[Letter].innerText = gameword[Letter]
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
    mode(level)
    for (let i = 0; i < gameword.length; i++) {
        stage.appendChild(htmlBoxCreate());
        addletter(i);
        startScreen.setAttribute('style', 'display: none ')

    }
}


function clear() {
    while (stage.firstChild) {
        stage.removeChild(stage.firstChild);
    }
    startScreen.setAttribute('style', 'display: flex ')
}


function gamechecker(event) {
    for (let i = 0; i < gameword.length; i++) {
        var letterboxInterval = stage.children[i].getAttribute('lettervalue');
        var boxinside = stage.children[i];
        if (letterboxInterval == event.key) {
            stage.children[i].setAttribute('style', 'background: var(--color3)')
            boxinside.innerText = letterboxInterval


        }
    }
}







document.addEventListener("keydown", gamechecker)

