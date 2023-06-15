export function isValid(s: string): boolean {
    let stack = []
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char === '(' || char === '[' || char === '{') stack.push(char)
        else if(char === ')'){
            if(stack.at(-1) === '(') stack.pop();
            else return false;
        }
        else if(char === ']'){
            if(stack.at(-1) === '[') stack.pop();
            else return false;
        }
        else if(char === '}'){
            if(stack.at(-1) === '{') stack.pop();
            else return false;
        }
    }
    return stack.length === 0
};