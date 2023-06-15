export function isPalindrome(x: number): boolean {
    let s = x.toString()
    let end = Math.floor(s.length/2)
    for(var i = 0; i <= end; i++){
        if(s[i] !== s[s.length-1-i]) return false;
    }
    return true;
};