
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) return null;
    let current = head;
    while(current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next;
        } else{
            current = current.next;
        }
    }
    return head;
};