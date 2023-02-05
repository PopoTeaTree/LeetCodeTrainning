// 21_Merge_Two_Sorted_Lists.ts
main()
function main() {
    console.log("Result: ",mergeTwoLists(CreateListNode([1,2,4]),CreateListNode([1,3,4])))
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function CreateListNode(nums: number[]): ListNode {
    var headNode: ListNode = {
        val: 0,
        next: null
    };
    var tempNode: ListNode | null = null;
    nums.slice().reverse().forEach(x => {
        headNode = {
            val: x,
            next: tempNode
        }
        tempNode = headNode;
    })
    return headNode;
}

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     // Check null listNode
//     if (list1 === null && list2 === null ){
//         return null;
//     }
//     if (list1 === null && list2 ) {
//         return list2;
//     }
//     if (list2 === null && list1 ) {
//         return list1;
//     } 
//     var result: ListNode = {
//         val: list1!.val,
//         next: null
//     }
//     while (list1 && list2 ) {
//         console.log("list1!.val - list2!.val", list1!.val,list2!.val);
//         var tail: ListNode = {
//             val: 0,
//             next: null
//         };
//         if (list1!.val < list2!.val) {
//             console.log("> if 1 : ", list1!.val);
//             tail.val = list1!.val;
//             list1 = list1!.next
//         } else {
//             console.log("> if 2 : ", list2!.val);
//             tail.val = list2!.val;
//             list2 = list2!.next;
//         }
//         console.log("tail : ", tail);
//         result.next = tail;
//     } 
//     return null;
//     // return head;
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    mergeLists(list1, list2, null);
    return null;
};

function mergeLists(list1: ListNode | null, list2: ListNode | null, resultList: ListNode | null ): ListNode | null {
    // Checking to end the reult
    // if (list1?.val === null) {
    //     resultList.next = list2
    // }
    // if (list2?.val === null ) {
    //     resultList?.next = list1
    // }
    console
    return resultList;
}