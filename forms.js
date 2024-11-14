//OVERIDES BROWSER DEFAULT BEHAVIOR OF RESETTING THE FORM
 function processForm(event) { 
    const form = event.target;
    const input = form[0];
    const value = input.value;
    output(displayMessage);
 }

 //PROCESS THE FORM
 const emailSubmitMessage = "<br>" + "<h5>Your message has been sent.</h5>" + "<br>";
 const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Please check for an email confirmation in th enext 24 hours.</h5>" + "<br>";
 
//  function displayMessage(message) {
//   window.outputTag.innerHTML = message;
//  }

 //Simulate form processing
 function handleForm(event) {
    const inputs = event.target;
    const emailInput = inputs[3];
    const email = emailInput.value;
    display("Submitting for " + email + " ...");
    setTimeout(serverResponse, 5000);
}

//Email form server simulation
function serverResponse(message) {
    window.outputTag.innerHTML = message;
}         

function serverResponsePromise() {
    const promise = new Promise(serverResolve);
     promise.then(getMessage);
     display(emailSubmitMessage);
}

function getMessage(resolveValue) {
    display(resolveValue);
}

//Consultation form server simulation
function serverResponse(message) {
    window.outputTag.innerHTML = message;
}         

function serverResponsePromise() {
    const promise = new Promise(serverResolve);
     promise.then(getMessage);
     display(scheduleSubmitMessage);
}

function getMessage(resolveValue) {
    display(resolveValue);
}