export function romanToInt(s: string): number {
    let result = 0;
    let lastChar = undefined;
    for(let i = s.length - 1; i >= 0; i--){
        let char = s[i]
        if(char === 'I') result += (lastChar === 'V' || lastChar === 'X') ? -1 : 1
        else if(char === 'X') result += (lastChar === 'L' || lastChar === 'C') ? -10 : 10
        else if(char === 'C') result += (lastChar === 'D' || lastChar === 'M') ? -100 : 100
        else if(char === 'V') result += 5;
        else if(char === 'L') result += 50;
        else if(char === 'C') result += 100;
        else if(char === 'D') result += 500;
        else if(char === 'M') result += 1000;
        lastChar = char;
    }
    return result;
};