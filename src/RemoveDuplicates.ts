export function removeDuplicates(nums: number[]): number {
    let index = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[index] !== nums[i]){
            index++;
            nums[index] = nums[i]
        }
    }
    return index+1;
};