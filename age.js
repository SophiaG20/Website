let ageStr = prompt('how old are you (I will not tell anyone)?')
let age = Number(ageStr);
// let us see if this works now 09July2022 7:47PM
let feedback = age >= 13 ?
    'You are eligible to use these YouTube videos':
    'You must be at least 13 years old to use these YouTube videos';

alert(feedback);