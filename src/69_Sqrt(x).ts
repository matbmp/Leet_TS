export function mySqrt(x: number): number {
    let a = 0, b = x;
    if(x <= 1) return x
    while(true){
        if(b-a <= 1){
            return Math.floor(a)
        }
        let middle = Math.floor((a+b)/2);
        if(middle*middle <= x){
            a = middle;
        } else {
            b = middle;
        }
    }
};