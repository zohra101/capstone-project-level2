function bootstrapCard(card) {  
   const cardString = `<div class="card m-4 p-4 bg-dark text-light">
                            <img class="card-img-top" 
                                id="${card.id}"
                                src="${card.src}"
                                alt="${card.title}"/>
                             <div class="card-body">
                                <h5 class="card-title p-1">${card.title}</h5>
                                <p class="card-text p-1">${card.description}</p>
                            </div>
                        </div>`;
    return cardString;
 } 

function displaySentMessage(message) {
 window.outputTag.innerHTML = "<br>" + "<h5>Your message has been sent.</h5>" + "<br>";
}

