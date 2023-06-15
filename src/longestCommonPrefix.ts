export function longestCommonPrefix(strs: string[]): string {
    let i = 0;
    let end = false
    while(true){
        let char = strs[0][i]
        if(char === undefined) break;
        for(var j = 1; j < strs.length && !end; j++){
            if(char !== strs[j][i]) end = true;
        }
        if(end) break;
        i++;
    }
    return strs[0].substring(0, i);
};