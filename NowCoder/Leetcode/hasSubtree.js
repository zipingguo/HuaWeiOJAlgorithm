/****
 * 
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * 
 * 思路解析：判断两棵树是否相等
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 === null || pRoot2 === null){
        return false;
    }

    this.checkIfEqual = function(tree1, tree2){
        if (tree1 === tree2) {
            return true;
        } else {
            return false;
        }
    }
    

}