// Challenge 1: Your Age in Days

function ageInDays()
{
    if(document.getElementById('ageInDays') != null) reset();

    var today = new Date();

    var birthDate = new Date(calculateBirthDate());

    var ageInDayz = Math.ceil((today-birthDate)/(1000 * 3600 * 24));

    // var diffDays = parseInt((today-birthDate) / (1000 * 60 * 60 * 24),10);
    // alert(diffDays);

    // var ageInDayz = (today.getFullYear()-birthyear)*365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayz + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function calculateBirthDate()
{
    var birthyear = prompt('What is your birthyear,..... Good Friend?');
    var birthmonth = prompt('What is your birthmonth,..... Good Friend?');
    var birthday = prompt('What is your birthday,..... Good Friend?');

    return birthyear + '-' + birthmonth + '-' + birthday;
    
}

function reset()
{
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    if(document.getElementsByClassName('cats') != null) reset2();

    var choice = prompt('How many cats do you want......Good Friend?');
    for(var i=0; i<choice; i++)
    {
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.setAttribute('class', 'cats');
        image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
        div.appendChild(image);
    }
}

function reset2()
{
    var items = document.getElementsByClassName('cats');
    while(items.length >0)
    {
        items[0].parentNode.removeChild(items[0]);
    }  
}

// Challange 3: Rock, Paper & Scissors
function rpsGames(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    //alert(botChoice);
    results = decideWinner(humanChoice, botChoice);
    //console.log(results);
    message = finalMessage(results);
    //console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([humanScore, botScore])
{
    if (humanScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (humanScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'blue'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    humanDiv = document.createElement('div');
    botDiv = document.createElement('div');
    messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150px width=150px style='box-shadow: -1px -1px 62px 4px rgba(35,48,161,0.7);'>";
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150px width=150px style='box-shadow: -1px -1px 62px 4px rgba(243,48,161,0.7);'>";

    var div = document.getElementById('flex-box-rps-div');

    div.appendChild(humanDiv);
    div.appendChild(messageDiv);
    div.appendChild(botDiv);
}

// Challenge 4: Change the Color of All Buttons

var all_buttons = document.getElementsByTagName('button');

var copyOfAllButtons = [];
for(let i=0; i<all_buttons.length; i++)
{
    copyOfAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(choice) {
    
    if(choice.value === 'reset') buttonReset();
    else if(choice.value === 'red') buttonRed();
    else if(choice.value === 'green') buttonGreen();
    else if(choice.value === 'yellow') buttonYellow();
    else if(choice.value === 'blue') buttonBlue();
    else if(choice.value === 'random') buttonRandom();
}

function buttonReset() {
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyOfAllButtons[i]);
    }
}

function buttonRed() {
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonYellow() {
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonBlue() {
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonRandom() {
    var choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];

    for(let i=0; i<all_buttons.length; i++)
    {
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack

let BlackJackGames = {
    'you': {'score-span': 'your-blackjack-result', 'div': 'your-box', 'score': 0},
    'dealer': {'score-span': 'dealer-blackjack-result', 'div': 'dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = BlackJackGames['you'];
const DEALER = BlackJackGames['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

const winSOund = new Audio('static/sounds/cash.mp3')

const lostSOund = new Audio('static/sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackJackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);

function blackJackHit() {
    if(BlackJackGames['isStand'] === false)
    {
        let card = randomCards();
        showCards(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCards()
{
    let randomIndex = Math.floor(Math.random()*13);
    return BlackJackGames['cards'][randomIndex];
}

function showCards(card, activePlayer) {
    if(activePlayer['score'] <=21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector("#" + activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackJackDeal()
{
    if(BlackJackGames['turnsOver'] === true)
    {
        BlackJackGames['isStand'] = false;
        BlackJackGames['turnsOver'] = false;


        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for(let i=0; i<yourImages.length; i++)
        {
            yourImages[i].remove();
        }

        for(let i=0; i<dealerImages.length; i++)
        {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';

        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
        
        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';
    }
}

function updateScore(card, activePlayer) {
    if(card === 'A')
    {
        if(activePlayer['score'] + BlackJackGames['cardMap'][card][1] <= 21)
        {
            activePlayer['score'] += BlackJackGames['cardMap'][card][1];
        }
        else
        {
            activePlayer['score'] += BlackJackGames['cardMap'][card][0];
        }
    }
    else
    activePlayer['score'] += BlackJackGames['cardMap'][card];
}

function showScore(activePlayer)
{
    if(activePlayer['score'] > 21)
    {
        document.querySelector("#"+activePlayer['score-span']).textContent = 'BUST!!';
        document.querySelector("#"+activePlayer['score-span']).style.color = 'red';
    }
    else
    {
        document.querySelector("#"+activePlayer['score-span']).textContent = activePlayer['score'];
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic()
{
    BlackJackGames['isStand'] = true;

    while(DEALER['score'] < 16 && BlackJackGames['isStand'] === true)
    {
        let card = randomCards();
        showCards(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    
    BlackJackGames['turnsOver'] = true;
    showResults(comuputeWinner());
}

function comuputeWinner()
{
    let winner;

    if(YOU['score'] <= 21)
    {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
        {
            winner = YOU;
            BlackJackGames['wins']++;
        }
        else if(YOU['score'] < DEALER['score'])
        {
            winner = DEALER;
            BlackJackGames['losses']++;
        }
        else if(YOU['score'] < DEALER['score'])
        {
            winner = 'DRAW!';
            BlackJackGames['draws']++;
        }
    }
    else if(YOU['score'] > 21 && DEALER['score'] <= 21)
    {
        winner = DEALER;
        BlackJackGames['losses']++;
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21)
    {
        winner = 'DRAW';
        BlackJackGames['draws']++;
    }

    return winner;
}

function showResults(winner)
{
    if(BlackJackGames['turnsOver'] === true)
    {
        let message, messageColor;

        if(winner === YOU)
        {
            document.querySelector('#wins').textContent = BlackJackGames['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSOund.play();
        }
        else if(winner === DEALER)
        {
            document.querySelector('#losses').textContent = BlackJackGames['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lostSOund.play();
        }
        else if(winner === 'DRAW')
        {
            document.querySelector('#draws').textContent = BlackJackGames['draws'];
            message = 'You Drew!';
            messageColor = 'blue';
        }

        //console.log(message);
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }   
}