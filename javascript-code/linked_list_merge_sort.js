import { LinkedList } from "./linked_list.js";
function mergeSort(list) {
  if (list && list.size() <= 1) return list;
  let [leftHalf, rightHalf] = split(list);
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);
  return merge(left, right);
}
function split(list) {
  let leftHalf;
  let rightHalf;
  if (list === undefined || list.head === undefined) {
    leftHalf = list;
    rightHalf = undefined;
    return [leftHalf, rightHalf];
  } else {
    let size = list.size();
    let mid = Math.floor(size / 2);
    let midNode = list.findByIndex(mid - 1);
    leftHalf = list;
    rightHalf = new LinkedList();
    rightHalf.head = midNode.nextNode;
    midNode.nextNode = undefined;
    return [leftHalf, rightHalf];
  }
}
function merge(left, right) {
  const merged = new LinkedList();
  merged.add(0);
  let current = merged.head;
  let leftHead = left.head;
  let rightHead = right.head;
  while (leftHead || rightHead) {
    if (leftHead === undefined) {
      current.nextNode = rightHead;
      rightHead = rightHead.nextNode;
    } else if (rightHead === undefined) {
      current.nextNode = leftHead;
      leftHead = leftHead.nextNode;
    } else {
      let leftData = leftHead.data;
      let rightData = rightHead.data;
      if (leftData < rightData) {
        current.nextNode = leftHead;
        leftHead = leftHead.nextNode;
      } else {
        current.nextNode = rightHead;
        rightHead = rightHead.nextNode;
      }
    }
    current = current.nextNode;
  }
  let head = merged.head.nextNode;
  merged.head = head;
  return merged;
}
const l = new LinkedList();
l.add(23);
l.add(12);
l.add(53);
l.add(93);
l.add(21);
l.add(99);
console.log(l.show());
const sorted = mergeSort(l);
console.log(sorted.show());
