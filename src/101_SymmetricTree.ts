export function isSymmetric(root: TreeNode | null): boolean {
    let sp : (TreeNode | null)[] = [], sq : (TreeNode | null)[] = [];
    sp.push(root);
    sq.push(root);
    while(sp.length > 0){
        let np = sp.pop();
        let nq = sq.pop();
        if(np?.val !== nq?.val) return false;

        if(np == null || nq == null) continue;
        sp.push(np.left);
        sp.push(np.right);
        sq.push(nq.right);
        sq.push(nq.left);
    }
    return true;
};

