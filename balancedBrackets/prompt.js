// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false

//create an empty array
//create a brackets var with each of the brackets
//create a for loop that will loop through str.length
//if the character is an opening brace push it to the stack
//if the character is a closing brace pop it from the stack



const isBalanced = str => {
const stack = [];

const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
 };

for(let i = 0; i < str.length; i++){
   if(i ==='(' || i === '[' || i === '{'){
        stack.push(str[i])
   } else {
       const last = stack.pop();
       if (str[i] !== brackets[last]) {
           return false
        };
   } 
} 
    if(stack.length = 0) {
        return false 
    };
    return true;

};
