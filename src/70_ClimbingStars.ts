export function climbStairs(n: number): number {
    if(n <= 3) return n;
    let a = 2, b = 3;
    for(let i = 3; i < n; i++){
        [a, b] = [b, a+b]
    }
    return b;
};