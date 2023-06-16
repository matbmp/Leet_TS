function generate(numRows: number): number[][] {
    let result: number[][] = [];

    result[0] = [1]
    for(let i = 1; i < numRows; i++){
        result[i] = Array(i+1);
        result[i][0] = 1;
        result[i][i] = 1;
        for(let j = 1; j < i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    return result;
};