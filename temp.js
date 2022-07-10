let WhatTemp = prompt("What temp is it where you are dancing");
// The best temp to dance is 18 degrees to 24 degrees Celsius
// that temp is 64.4 - 75.2 Fahrenheit

// I want to do Celsius or Fahrenheit and if they are too hot or too cold
// to tell the user to turn up the heat or make it colder before dancing
let message;

if (WhatTemp <=64){
    alert = "Warm up your dancing space";
} else if (WhatTemp<=75){
    alert = "Let us get ready to boogie";
} else if (WhatTemp=>75){
    alert = "We need to cool down to get ready to dance";
}
  