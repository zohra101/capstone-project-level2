//OVERIDES BROWSER DEFAULT BEHAVIOR OF RESETTING THE FORM
//  function processForm(event) { 
//     const form = event.target;
//     const input = form[0];
//     const value = input.value;
//     output(displayMessage);
//  }

 //PROCESS THE FORM
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent.</h5>" + "<br>";
//  const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Please check for an email confirmation in th enext 24 hours.</h5>" + "<br>";
 
//  function displayMessage(message) {
//   window.outputTag.innerHTML = message;
//  }

 //Simulate server processing
 function handleForm(event) {
    debugger;
    const inputs = event.target;
    const emailInput = inputs[3];
    const email = emailInput.value;
    display("Submitting for " + email + " ...");
    setTimeout(serverResponse, 5000);
}
