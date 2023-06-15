export function searchInsert(nums: number[], target: number): number {
    let a = 0, b = nums.length
    if(target < nums[0]) return 0;
    while(true){
        if(b - a <= 1) return target === nums[a] ? a : a+1
        let index = Math.floor(Math.floor((a+b)/2));
        if(target < nums[index]){
            b = index;
        } else{
            a = index;
        }
    }
};