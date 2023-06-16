
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let sp : (TreeNode | null)[] = [], sq : (TreeNode | null)[] = [];
    sp.push(p);
    sq.push(q);
    while(sp.length > 0){
        let np = sp.pop();
        let nq = sq.pop();
        if(np?.val !== nq?.val) return false;

        if(np == null || nq == null) continue;
        sp.push(np.left);
        sp.push(np.right);
        sq.push(nq.left);
        sq.push(nq.right);
    }
    return true;
};