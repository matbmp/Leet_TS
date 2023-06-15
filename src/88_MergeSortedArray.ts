export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let b = m-1, c = n-1;
    for(let a = n+m-1; a >= 0; a--){
        if(b<0) nums1[a] = nums2[c--]
        else if(c < 0) nums1[a] = nums1[b--]
        else nums1[a] = nums1[b] > nums2[c] ? nums1[b--] : nums2[c--]
    }
};