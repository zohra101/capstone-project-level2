function bootstrapCard(card) {  
   const cardString = `<div class="card m-4 p-4 bg-dark text-light">
                            <img class="card-img-top" 
                                src="${card.src}"
                                alt="${card.title}"/>
                             <div class="card-body">
                                <h5 class="card-title p-1">${card.title}</h5>
                                <p class="card-text p-1">${card.description}</p>
                            </div>
                        </div>`;
    return cardString;
 } 

/*  function createColumn(contentString) {
    const columnString = `<div class="col">${contentString}</div>`;
    return columnString;
  }
  
  function createRow(columnString) {
    const rowString = `<div class="row">
        ${columnString}</div>`;
    return rowString;
  }
  function createContainer(rowString){
    const containerString = `<div class="container">
      ${rowString}
    </div>`;
    return containerString;
  } */

  function diaplayOnClick() {
    output.innerHTML = "Your message has been sent.";
  }



/* function personalize() {
//get user's first name
const firstName = prompt("Enter your first name.");

//check if first name is not a number
notNumber = isNaN(firstName)
} */