// 54_Spiral_Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.
main()
function main(){
    var matrix: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
    console.log("> result : ",spiralOrder(matrix));
}

function spiralOrder(matrix: number[][]): number[] {
    console.log("matrix: ", matrix);
    var temp: number[];
    var result: number[] = spiralOrderRecurr(matrix, 0, 0,[]);
    return result;
};

function spiralOrderRecurr(matrix: number[][], row: number, col: number, temp: number[]): number[]{
    // Get column length
    const lenCol: number = matrix[0].length;
    const lenRow: number = matrix[1].length;
    // Check is the ending
    if (row === 1 ){
        if ( lenRow%2 === 0 ) {
            if (col === 0) {
                return temp;
            }
        } else {
            if (col === lenCol-2) {
                return temp;
            }
        }
    }
    if (row === lenRow && col === lenCol) {
        console.log("Final Return: ",row,col);
        return temp;
    }
    // add item to the matrix 
    temp.push(matrix[row][col]);
    // case 1 : col equals to column length 
    if ( col === lenCol-1 ) {  
        console.log("case 1: ",row,col,matrix[row][col]);
        return spiralOrderRecurr(matrix,row+1,col,temp);
    // case 2 : row mod 2 equals 0
    } else if (row%2 === 0) {
        console.log("case 2: ",row,col,matrix[row][col]);
        // Increase col 
        return spiralOrderRecurr(matrix,row,col+1,temp);
    // case 3 : row mod 2 equals 1
    } else if (row%2 !== 0) {
        console.log("case 3: ",row,col,matrix[row][col]);
        // Decrease col
        return spiralOrderRecurr(matrix,row,col-1,temp);
    // Final the result
    } else {
        console.log("case 4: if-return: ",row,col,matrix[row][col]);
        return temp;
    }
}
