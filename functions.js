 /***********************************
 Automatically populate card tiles and images on the portfolio.html page
***********************************/

function bootstrapCard(deliverableCard) {  
    let deliverableCardString ='<div class="card">';
        deliverableCardString +='<img class="card-img-bottom" src="'+ deliverableCard.src +'"/>';
        deliverableCardString +='<div class="card-body">';
        deliverableCardString +='<h3 class="card-title">'+ deliverableCard.title +'</h3>';
        deliverableCardString +='</div>';
        deliverableCardString +='</div>';
    return deliverableCardString;

}