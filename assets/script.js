
const stage = document.querySelector('.stage');
const startbtn = document.querySelector('#srt-btn');
const endbtn = document.querySelector('#end-btn');

startbtn.addEventListener('click', write);
endbtn.addEventListener('click', clear);


var easyWords = ['pulse', 'cakes', 'climb', 'light'];
var mediumWords = ['potency', 'amusing', 'castile', 'oranges', 'showbiz',] 
var hardWords = ['uncharted', 'lecturing', 'shrinkage', 'spreading', 'dismantle',] 

 
var chosenWord = easyWords[1]
var gameword = chosenWord.split('');

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

function write() {
    for (let i = 0; i < gameword.length; i++) {
        stage.appendChild(htmlBoxCreate());
        addletter(i);

    }
}


function clear() {
    while (stage.firstChild) {
        stage.removeChild(stage.firstChild);
    }
}

// function changeBoxColor(event){
//     var keytest = event.key
//     var box = document.querySelectorAll('.letterBox')

//     if (keytest == 'c' | box.getAttribute('lettervalue','c')) {
//         console.log('c is the box')
//     }
//     else if (keytest == 'a') {   
//     }
//     else if (keytest == 'k') {   
//     }
//     else if (keytest == 'e') {   
//     }
//     else if (keytest == 's') {   
//     }

// }



function gamechecker(event) {
    for (let i = 0; i < 5; i++) {
        var letterboxInterval = stage.children[i].getAttribute('lettervalue');
        var boxinside = stage.children[i];
        if (letterboxInterval == event.key) {
            stage.children[i].setAttribute('style', 'background: black')
            boxinside.innerText = letterboxInterval


        }
    }
}







document.addEventListener("keydown", gamechecker)

