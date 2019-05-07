/******
 * 
 * 将二叉树序列化 和 反序列化
 * 
 * 请实现两个函数， 分别用来序列化和反序列化二叉树
 * 
 * 
 * 
 */


// 根据前序遍历规则完成序列化与反序列化。 
// 所谓序列化指的是遍历二叉树为字符串； 所谓反序列化指的是依据字符串重新构造成二叉树。
// 依据前序遍历序列来序列化二叉树， 因为前序遍历序列是从根结点开始的。 当在遍历二叉树时碰到Null指针时， 这些Null指针被序列化为一个特殊的字符“#”。
// 另外， 结点之间的数值用逗号隔开。


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Serialize(pRoot) {
    // 使用前序遍历的形式访问整个二叉树
    let nodeStr = '';
    if (pRoot === null) {
        nodeStr+= '#,';
        return nodeStr;
    }
    nodeStr += pRoot.val + ',';
    nodeStr += Serialize(pRoot.left);
    nodeStr += Serialize(pRoot.right);
    return nodeStr;
}

let index = -1;

function Deserialize(s) {
    index++;
    if (index >= s.length) {
        return null;
    }
    let nodeArr = s.split(',');
    let treeNode;
    if (nodeArr[index] !== '#') {
        treeNode = new TreeNode(parseInt(nodeArr[index]));
        treeNode.left = Deserialize(s);
        treeNode.right = Deserialize(s);
    }
    return treeNode;
}
