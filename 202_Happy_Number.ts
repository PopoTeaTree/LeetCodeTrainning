// 202_Happy_Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

main()
function main(){
    console.log("> result : ",isHappy(11));
}

function isHappy(n: number): boolean {
    return isHappy2(n, []);
};

function isHappy2(n: number, prev: number[]): boolean {
    var nums: number[] = String(n).split("").map(ele=> Math.pow(Number(ele), 2));
    var result: number = nums.reduce((a, b) => a + b);
    if (result != 1 && prev.find(ele => ele === result) != undefined) {
        return false;
    }
    if (result == 1 ) {
        return true;
    } else {
        prev.push(result);
        return isHappy2(result, prev);
    }
};

