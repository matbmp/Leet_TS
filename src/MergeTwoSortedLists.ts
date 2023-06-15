
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let result;
    if(list1.val < list2.val){
        result = list1
        list1 = list1.next;
    } else{
        result = list2
        list2 = list2.next;
    }
    let current = result;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        } else{
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        }
    }
    if(list1 === null){
        current.next = list2
    }
    if(list2 === null){
        current.next = list1;
    }
    return result;
};