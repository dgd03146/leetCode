/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head)return null
    if(!head.next)return null
    
    let slow = head
    let fast = head
    
    let pointer = head
    
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        
        if(fast ===slow)break;
        
    }
    
    if(fast!==slow) return null
    
    while(pointer!== slow){
        pointer= pointer.next
        slow = slow.next
    }
    return slow
    
};