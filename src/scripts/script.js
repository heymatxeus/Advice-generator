const btn = document.querySelector(".dice-image");
const buttonContainer = document.querySelector(".dice-container");

async function queryAdvice(){
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    return await response.json();
}

async function newAdvice(){
    const adviceObject = await queryAdvice();
    const adviceId = adviceObject.slip.id;
    const adviceQuote = adviceObject.slip.advice;

    const cardAdvice = document.querySelector(".advice");
    const cardQuote = document.querySelector(".quote");
    cardAdvice.textContent = `ADVICE # ${adviceId}`;
    cardQuote.textContent = adviceQuote;
    buttonContainer.classList.add("disabled");
}

function putStyleAgain(){
    setTimeout(
        function activeButton(){        
            buttonContainer.classList.remove("disabled");
        }, 2000);
}

btn.addEventListener("click", function(){
    newAdvice();
    putStyleAgain();
});