// 13_Roman_to_Integer.ts
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
main();
function main(){
    console.log("Result: ",romanToInt("MCMXCIV"));
}
function romanToInt(s: string): number {
    type RomanVal = {
        roman: string;
        value: number;
    }
    var romanSet: RomanVal[] = [
        {
            roman: "I",
            value: 1,
        },
        {
            roman: "V",
            value: 5,
        },
        {
            roman: "X",
            value: 10,
        },
        {
            roman: "L",
            value: 50,
        },
        {
            roman: "C",
            value: 100,
        },
        {
            roman: "D",
            value: 500,
        },
        {
            roman: "M",
            value: 1000,
        },
    ]
    var numArr: number[] = s.split("").map((item)=>romanSet.find((it)=>it.roman === item)!.value);
    var removeSum: number = 0;
    numArr.forEach((ele,index) => {
        if (index != 0) {
            if (ele > numArr[index-1]) {
                removeSum = removeSum + numArr[index-1];
            }
        }
    });
    var allSum: number = numArr.reduce((sum,curr)=> sum=sum+curr);
    return allSum - removeSum - removeSum;
};
