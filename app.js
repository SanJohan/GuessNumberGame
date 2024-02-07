let randomNumber = 0;
let tryTimes = 1;
let randomNumberArray = []
let maxNumber = 10;

function randomNumberGenerator() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;

    if( randomNumberArray.length == maxNumber){
        setTextElement('p','all possible numbers have been drawn')
    }else{
        if(randomNumberArray.includes(generatedNumber)){
            return randomNumberGenerator();
        }else{
            randomNumberArray.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function setTextElement(element, text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}

function checkUserTry() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    if(userNumber === randomNumber){
        setTextElement('p',`You guessed the number in ${tryTimes} ${tryTimes > 1 ? 'tries':'try'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        tryTimes++;
        if(userNumber > randomNumber){
            setTextElement('p','The number is less than yours');
        }else{
            setTextElement('p','The number is greather than yours');
        }
        cleanInput();
    }
    console.log(userNumber);
}

function cleanInput(){
    document.querySelector('#userValue').value ='';
}

function initialConditions(){
    setTextElement('h1','Secret Number Game'); 
    setTextElement('p',`Enter a number from 1 to ${maxNumber}`);
    randomNumber = randomNumberGenerator();
    tryTimes = 1;
    cleanInput();
    
}

function restartGame(){
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

initialConditions();
