/*
Write a function to delete a node (except the tail) in a singly linked list, 
given only access to that node.
Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]


Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]


Note:

The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	if (node.val !== undefined || node.next !== null) {
		node.val = node.next.val;
		node.next = node.next.next;
	}
};
