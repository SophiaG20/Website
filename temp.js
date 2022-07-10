let whatTemp = prompt("What temp is it where you are dancing");
console.log(whatTemp);
// The best temp to dance is 18 degrees to 24 degrees Celsius
// that temp is 64.4 - 75.2 Fahrenheit

// I want to do Celsius or Fahrenheit and if they are too hot or too cold
// to tell the user to turn up the heat or make it colder before dancing


//if (whatTemp <=64){
//   alert("Warm up your dancing space");
// } else if (whatTemp<=75){
//     alert("Let us get ready to boogie");
// } else if (whatTemp>=76){
//     alert("We need to cool down to get ready to dance");
// }

// learning about functions
// function/ name/ parameters /codeblock
// function whatTemp(){}

// function whatTemp(){
        //code the function executes

function getTempString(temperature){
    if (temperature <=64){
        return "Warm up your dancing space";
    } else if (temperature<=75){
        return "Let us get ready to boogie";
    } else if (temperature>=76){
          return "We need to cool down to get ready to dance";
    }
}
