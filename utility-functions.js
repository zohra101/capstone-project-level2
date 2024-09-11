
function bootstrapCard2(card) {  
   const cardString = `<div class="card">
        <img class="card-img-bottom" src="${card.src} alt="${card.title}"/>
            <div class="card-body">
                <h3 class="card-title">${card.description}</h3>
            </div>
        </div>`;
    return cardString;
 } 

function collectMessage() {
//contactType -- individual or company
contactType = prompt(); 

//contactName -- first and last name
contactName = prompt();

//userMessage - message
userMessage = prompt();

}
