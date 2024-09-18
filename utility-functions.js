function bootstrapCard(card) {  
   const cardString = `<div class="card m-4 p-4">
                            <img class="card-img-top" 
                                src="${card.src}"
                                alt="${card.title}"/>
                             <div class="card-body">
                                <h6 class="card-title">${card.description}</h6>
                            </div>
                        </div>`;
    return cardString;
 } 

 function createColumn(contentString) {
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
  }

  
/* function personalize() {
//get user's first name
const firstName = prompt("Enter your first name.");

//check if first name is not a number
notNumber = isNaN(firstName)
} */