/***
* 
* 输入某二叉树的前序遍历和中序遍历的结果， 请重建出该二叉树。
* 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。 例如输入前序遍历序列 
* {1,2,4,7,3,5,6,8}
* 和中序遍历序列 
* {4,7,2,1,5,3,8,6}，
* 则重建二叉树并返回。
* 
* 
***/
// ! 本质涉及: 二叉树的前序，中序，后序遍历的规则
// ! 主要还是使用前序遍历找到中间(根)节点的形式，根据中序遍历确认左右两侧的长度，进行递归

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length === 0 || vin.length === 0 || pre.length !== vin.length) {
        return null;
    }
    // 获取中间节点(根节点)
    let index = vin.indexOf(pre[0]);
    let left = vin.slice(0, index);
    let right = vin.slice(index+1);
    return {
        val: pre[0],
        left: reConstructBinaryTree(pre.slice(1, index+1), left),
        right: reConstructBinaryTree(pre.slice(index+1), right)
    };
}

// Test Algorithm
// var testNum = 5;
let pre = [1, 2, 4, 7, 3, 5, 6, 8];
let vin = [4,7,2,1,5,3,8,6];
console.log(reConstructBinaryTree(pre, vin));
console.log(reConstructBinaryTree(pre, vin).left.left.right);