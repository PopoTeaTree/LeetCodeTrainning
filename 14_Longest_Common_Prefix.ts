// 14_Longest_Common_Prefix.ts
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
main();
function main(){
    console.log("Result: ", longestCommonPrefix(["ab", "a"]));
}

function longestCommonPrefix(strs: string[]): string {
    // Check lenght of the array 
    if (strs.length <= 1) {
        console.log("> return 1 <", strs.length)
        return strs[0];
    }
    // Check string is null or not
    var nullArr = strs.filter(ele=> ele == "");
    if (nullArr.length != 0) {
        console.log("> return 2 <",nullArr.length)
        return "";
    }
    // Init the prefix of string
    var prefix: string = "";
    // Find the shortest string in string array
    var shortestLen: number = strs.reduce((min,curr)=> curr.length < min.length ? curr : min).length;
    // console.log("shortestLen: ", shortestLen);
    // Looping in in each position of the string
    for (let i = 0; i <= shortestLen-1; i++) {
        // Looping in word get the charactor
        var counter: number = 0;
        var prePrefix: string = strs[0][i];
        console.log("> prePrefix: ", i,prePrefix);
        while(counter<strs.length) {
            // console.log("Get counter: ", strs[counter],strs[counter][i]);
            // Get the charactor
            var getChar: string = strs[counter][i];
            // console.log("prePrefix - getChar : ", strs[counter], prePrefix,getChar);
            // Compare prefix is the same to other
            if (getChar != prePrefix) {
                console.log("> 1 Return point <");
                return prefix;
            }
            counter++;
        }
        prefix = prefix.concat(prePrefix);
        // console.log("Concat string: ",prefix);
    }
    // console.log("> return 3 <");
    return prefix;
};