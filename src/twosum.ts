export function twoSum(nums: number[], target: number): number[] {
    let dict = new Map<number, number>()
    for(var i = 0; i < nums.length; i++){
        let foundIndex = dict.get(target - nums[i])
        dict.set(nums[i], i)
        if(foundIndex !== undefined){
            return [i, foundIndex]
        }
    }
    return []
};