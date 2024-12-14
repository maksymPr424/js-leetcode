//TODO: You are given the heads of two sorted linked lists list1 and list2.

//TODO: Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

//TODO: Return the head of the merged linked list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const result = mergeTwoLists(list1, list2);

function printList(head) {
  let current = head;
  while (current) {
    process.stdout.write(current.val + " -> ");
    current = current.next;
  }
  console.log("null");
}

printList(result);
