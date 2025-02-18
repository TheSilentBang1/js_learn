// problem arises when we compare diff. datatypes 
//when comparing diff. dataypes, results can be unpredictable, therefore, before comparing, ensure that the datatypes are same

// console.log(null > 0); // null conv to 0 by comparision op
// console.log(null == 0); // == doesnt convert null to 0
// console.log(null >= 0); // null conv to 0 

//equality check doesnt convert null to 0(==), comparision does (>=,>,<,<=) they are implemented diff by ecma

// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined <= 0); //false
//avoid such comparisions, checks, keep code clean

// === : strict equality check : checks value awa datatype
//console.log("2" === 2); //false as value same by type diff