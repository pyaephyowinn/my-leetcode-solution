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

const addTwoNumbers = (l1, l2) => {
  var node = l1;
  var num1 = 0;
  var i = 0;

  while (node) {
    num1 += node.val * 10 ** i++;
    node = node.next;
  }

  node = l2;
  var num2 = 0;
  i = 0;
  while (node) {
    num2 += node.val * 10 ** i++;
    node = node.next;
  }

  var result = (num1 + num2).toString().split("");
  var newNode = new ListNode(0);
  console.log('newNode', newNode)
  // for (let i = 0; i < result.length; i++) {
  //   newNode.val = result[i];
  //   newNode = newNode.next;
  // }
};


addTwoNumbers();