// ===== INTERFACES CAN BE SELF REFERENTIAL
interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}
let node: LinkedListNode<string>;
// node.next.next.next.next.next.next.next.next.next.value;
