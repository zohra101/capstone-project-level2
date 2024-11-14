 //Form processing messages
//  const emailSubmitMessage = "<br>" + "<h5>Your message has been sent from" + email + ".</h5>" + "<br>";
 // const scheduleSubmitMessage = "<br>" + "<h5>Your consultation request has been submitted. Confirmation will be sent to" + email + ".</h5>" + "<br>";
//  function displayMessage(message) {
//     window.outputTag.innerHTML = message;
//    }

 //OVERIDES BROWSER DEFAULT BEHAVIOR OF RESETTING THE FORM
//  function processForm(event) { 
//     const form = event.target;
//     const input = form[0];
//     const value = input.value;
//     output(displayMessage);
//  }

//Stringify form information 
function formObject(event) {
    const inputs = event.target;
    const formDetails = JSON.stringify(inputs, ["input[2]","input[3]"])
    return formDetails();
}

//Submit handler
function handleSubmit(event) {
    event.preventDefault();
    output("<br>" + "<h5>Submitting for " + formDetails() + "...<br>");
    const promise = makeRequest("https://dummyurl.com");
    promise.then(parseResponse);
}

function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000)
    
    function activateResolve () {
        const response = {
            message: "<br>" + "<h5>Your message has been sent from" + formDetails() + ".</h5>" + "<br>",
        };
       const resolveValue = JSON.stringify(response);
       resolve(resolveValue);
    }
}

// function parseResponse(resolveValue) {   
    
// }