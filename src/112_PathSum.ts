function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root === null) return false;
    return hasPathSum2(root, targetSum)
};

function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
    if(root !== null){
        if(root.left === null) return hasPathSum2(root.right, targetSum-root.val);
        if(root.right === null) return hasPathSum2(root.left, targetSum-root.val);
        return hasPathSum2(root.left, targetSum-root.val) || hasPathSum2(root.right, targetSum-root.val)
    } else if(targetSum === 0){
        return true;
    } else{
        return false;
    }
};