
//Fetch the response from the server
function handleQuoteOfTheDay() {
    const proxy = "https://thingproxy.freeboard.io/fetch/"
    const baseUrl = "https://favqs.com/api";
    const endPoint = "/qotd";
    const url = proxy + baseUrl + endPoint;
    debugger;
    const promise = fetch(url, {method: 'no-cors'});
    promise.then(extractResponse);
    return resolveValue;
}

//Extract the response and parse it
function extractResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text();
    promise.then(parseQotdResponse);
}

//Parse the response
function parseQotdResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    outputQotd(response);
}