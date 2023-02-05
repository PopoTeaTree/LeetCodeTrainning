// 9_Palindrome_Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

main();
function main(){
    console.log("Result: ",isPalindrome(232));
}

function isPalindrome(x: number): boolean {
    var word: string = x.toString();
    var reWord: string="";
    for (var i = word.length - 1; i >= 0; i--) {
        reWord = reWord.concat(word[i].toString());
    }
    return parseInt(reWord) === x;
};