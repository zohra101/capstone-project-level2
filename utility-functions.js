function bootstrapCard(card) {  
   const cardString = `<div class="card">
                            <img class="card-img-top" 
                                src="${card.src}"
                                alt="${card.title}"/>
                             <div class="card-body">
                                <h3 class="card-title">${card.description}</h3>
                            </div>
                        </div>`;
    return cardString;
 } 

/* function personalize() {
//get user's first name
const firstName = prompt("Enter your first name.");

//check if first name is not a number
notNumber = isNaN(firstName)
} */