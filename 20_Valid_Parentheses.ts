//20_Valid_Parentheses.ts
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

import { count } from "console";

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
main()
function main() {
    console.log("Result: ",isValid("()"))
}

function isValid(s: string): boolean {
    // Check string length (it has to be a pair)
    if (s.length%2 !== 0) return false;
    var arrTemp: string[] = [];
    var strArr: string[] = s.split("");
    for(let i=0; i<strArr.length;i++){
        var item: string = strArr[i];
        console.log("item: ", item);
        if (item === "(" || item === "{" || item === "[") {
            arrTemp.push(item);
        } else if (item===")" && arrTemp.length !== 0 && arrTemp[arrTemp.length-1] === "(") {
            arrTemp.pop();
        } else if (item==="}" && arrTemp.length !== 0 && arrTemp[arrTemp.length-1] === "{") {
            arrTemp.pop();
        } else if (item==="]" && arrTemp.length !== 0 && arrTemp[arrTemp.length-1] === "[") {
            arrTemp.pop();
        } else {
            return false;
        }
    }
    return arrTemp.length === 0;
};
