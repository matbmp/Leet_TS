export function plusOne(digits: number[]): number[] {
    digits[digits.length-1]++;
    for(let i = digits.length - 1; i > 0; i--){
        if(digits[i] === 10){
            digits[i] = 0;
            digits[i-1]++;
        } else {
            break;
        }
    }
    if(digits[0] === 10){
        digits = [1, 0, ...digits.slice(1)]
    }
    return digits;
};