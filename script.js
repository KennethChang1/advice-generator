const quote = document.querySelector('.quote');
const title = document.querySelector('.title');
const container = document.querySelector('.dice-container');


function getQuote(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        title.textContent = `ADVICE #${data.slip.id}`;
        quote.textContent = data.slip.advice;
    });
}

container.addEventListener('click', ()=>{
    getQuote();
})

getQuote();