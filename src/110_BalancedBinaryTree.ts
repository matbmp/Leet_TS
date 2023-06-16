function isBalanced(root: TreeNode | null): boolean {
    return checkDepth(root)[1];
};


function checkDepth(root: TreeNode | null): [number, boolean]{
    if(root === null) return [0, true];
    let [leftDepth, leftOk]= checkDepth(root.left);
    let [rightDepth, rightOk] = checkDepth(root.right);
    if(!leftOk || !rightOk) return [0, false];
    return [Math.max(leftDepth, rightDepth) + 1, Math.abs(leftDepth-rightDepth) <= 1]
}