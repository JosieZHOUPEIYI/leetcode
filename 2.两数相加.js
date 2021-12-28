/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers1 = function (l1, l2) {
    let [head, tail] = [null, null]
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        const sum = n1 + n2 + carry
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }
        carry = Math.floor(sum / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    console.log(111, carry);
    if (carry > 0) tail.next = new ListNode(carry);
    return head
};

var addTwoNumbers = function (l1, l2) {
    // 存储head和tail
    let [head, tail] = [null, null]
    // carry进位数
    let carry = 0
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        const sum = n1 + n2 + carry
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            // tail 移位
            tail = tail.next
        }
        carry = Math.floor(sum / 10)
        // l1 l2移位
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry > 0) tail.next = new ListNode(carry)
    return head
}
// @lc code=end

