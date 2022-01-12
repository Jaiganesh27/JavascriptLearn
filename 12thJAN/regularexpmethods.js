str = `There are 30 passages in each level—90 passages altogether. Start reading at Level I. If the
passages seem too easy, move to Level II.
If you need help reading challenging words, use Passages to Reading with the software
program Developing Reading Fluency (Attainment Company, 2014). Developing Reading
Fluency shows you how to break multisyllabic words into parts that are easier to read.
Developing Reading Fluency also shows you how to break sentences into phrases making
reading easier. These strategies will help you whenever you are reading text.`
let regex = new RegExp('/[abc]/');
regex = /[(ab)+c]/g
result = regex.test(str);  //it will return match is true or not
console.log(result);
result = str.match(regex); // it will return first match string in an array with groups index(no capturegropreturn)
console.log(result);
result = str.matchAll(regex); // it will return all match in a new array with grop index input and searchvalue
console.log(result);
result = str.search(regex);  //it will search and return first match index value
console.log(result);
result = str.replace(regex,'HIII'); //it will replace first caught element with new value like find adn replace
console.log(result);
result = str.replaceAll(regex,'5000'); //it wil replace all the matches in a sttring
console.log(result);
result = regex.exec(str);  // it will return first match string in an array with groups index(capturegrpreturn)
console.log(result);


// diff between match vs exec
