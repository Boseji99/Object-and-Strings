// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

// function countWords(sentence) {
//   const words = sentence.split(" ").filter((word) => word.trim() !== "");
//   return words.length;
// }

// console.log(countWords("Hello world!"));
// console.log(countWords("   This is a test   "));

// function startsWithPrefix(str, prefix) {
//     return str.startsWith(prefix);
// }

// console.log(startsWithPrefix("hello world", "hello"));
// console.log(startsWithPrefix("hello world", "world"));

// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }

// console.log(containsSubstring("hello world", "world"));
// console.log(containsSubstring("hello world", "planet"));

// function csvToArray(csvString) {
//     return csvString.split(',');
// }

// console.log(csvToArray("apple,banana,cherry"));
// console.log(csvToArray("car,bike,train"));
// console.log(csvToArray("one,two,three,four"));

// function TWS(twsString) {
//   return twsString.trim();
// }
// console.log(TWS("   i was thinking of it    "));

// function convertCase(str) {
//     return {
//         lowercase: str.toLowerCase(),
//         uppercase: str.toUpperCase()
//     };
// }
// const result = convertCase("Hello, World!");
// console.log(result.lowercase);
// console.log(result.uppercase); 

// function extractSubstring(str,start, end) {
//     return str.slice(start, end);
    
// }
// console.log(extractSubstring("Hello, World!", 7, 12)); 
      
// function getCharAt(str, index) {
//     return str.charAt(index);
// }
// console.log(getCharAt("Hello, World!", 0)); 
// console.log(getCharAt("JavaScript", 4));    
// console.log(getCharAt("Frontend", 7));   

// function mergeObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }
// const obj1 = { name: "John", age: 30 };
// const obj2 = { job: "Developer", country: "USA" };

// const mergedObj = mergeObjects(obj1, obj2);
// console.log(mergedObj); 

// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     country: "USA"
// };
// const propertyNames = Object.keys(person);
// console.log(propertyNames); 

// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     country: "USA"
// };
// console.log(countProperties(person)); 

// function hasOwnKey(obj, key) {
//     return obj.hasOwnProperty(key);
// }

// const person = { name: "John", age: 30 };
// console.log(hasOwnKey(person, "name")); 
// console.log(hasOwnKey(person, "job"));  

// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     country: "USA"
// };
// const values = Object.values(person);
// console.log(values); 

// function shallowCopy(obj) {
//     return { ...obj };
// }

// const original = { name: "John", age: 30, job: "Developer" };
// const copy = shallowCopy(original);

// console.log(copy); 
// console.log(copy === original); 

// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     country: "USA"
// };
// const entries = Object.entries(person);
// console.log(entries);

// function freezeObject(obj) {
//     Object.freeze(obj);
//     return obj;
// }

// const person = {
//     name: "John",
//     age: 30
// };

// const frozenPerson = freezeObject(person);
// console.log(frozenPerson); 

// frozenPerson.age = 35;
// console.log(frozenPerson.age); 

// frozenPerson.country = "USA"; 
// console.log(frozenPerson.country); 

// function sealObject(obj) {
//     Object.seal(obj);
//     return obj;
// }

// const person = {
//     name: "John",
//     age: 30
// };

// const sealedPerson = sealObject(person);
// console.log(sealedPerson); 

// sealedPerson.age = 35; 
// console.log(sealedPerson.age); 

// sealedPerson.country = "USA";
// console.log(sealedPerson.country); 

// delete sealedPerson.name;
// console.log(sealedPerson.name);

// const person = {
//     name: "John",
//     age: 30,
//     job: "Developer"
// };

// console.log("Before deletion:", person);
// delete person.job;

// console.log("After deletion:", person); 

// console.log("job" in person); 
// console.log(person.job); 

