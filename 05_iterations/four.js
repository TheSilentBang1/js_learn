const myObj = {
    js : 'javascript',
    cpp : "c++",
    py : "python"
}

// iterating objects : using for in loop

for (const key in myObj) {
    // console.log(`${key} is shortcut for : ${myObj[key]}`);
    
}

//can we use this for in loop on arrays?

const prog = ["js", "py", "cpp"]
for (const key in prog) {
    // console.log(key);//we get keys of arrays : the indices, always, we cant change keys of object -> disadvantage -> objects solve this issue
    // console.log(prog[key]); // gives values at keys/indices
}


//using for in loop on maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")

for (const key in map) {
    // console.log(key);//nothing printed : maps are not iteratable using for in
}