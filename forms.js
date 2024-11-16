 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";


 //OVERIDES BROWSER DEFAULT BEHAVIOR OF RESETTING THE FORM
//  function processForm(event) { 
//     const form = event.target;
//     const input = form[0];
//     const value = input.value;
//     output(displayMessage);
//  }

//Click handler with spinner
// function handleClick(event) {
//     // event.preventDefault();
//     output(`<div class="spinner-border text-primary" role="status"></div>`);
// }

//Submit handler
function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[3];
    const email = emailInput.value;
    output("<br>" + "<h5>Submitting for " + email + "...<br>");
    const promise = new Promise(serverResponse);
    promise.then(parseResponse);
}

function parseResponse(resolveValue) {
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}

function serverResponse(resolve) {
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response={
            message:"Your message was sent successfully."
        }
        const finalResponse = JSON.stringify(response);
        resolve(finalResponse);
    }
 }    


