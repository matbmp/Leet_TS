
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
// inorder - first we visit left, then center, then right

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []
    let stack: TreeNode[] = [];
    let current = root;

    while(current !== null || stack.length > 0){
        while(current !== null) {
            stack.push(current);
            current = current.left;
        }
        if(current === null && stack.length > 0){
            let node = stack.pop();
            if(node !== undefined){
                result.push(node.val);
                current = node.right;
            }
        }
    }
    return result;
};