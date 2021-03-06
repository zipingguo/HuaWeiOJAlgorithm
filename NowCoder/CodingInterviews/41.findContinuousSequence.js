/******
 * 
 * 小明很喜欢数学, 有一天他在做数学作业时, 要求计算出9~16 的和, 他马上就写出了正确答案是100。
 * 但是他并不满足于此, 他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。 
 * 没多久, 他就得到另一组连续正数和为100的序列: 18, 19, 20, 21, 22。 
 * 现在把问题交给你, 你能不能也很快的找出所有和为S的连续正数序列 ? Good Luck!
 * 
 * 
 * 输出所有和为S的连续正数序列。 序列内按照从小至大的顺序， 序列间按照开始数字从小到大的顺序
 * 
 */

// 算法复杂度 O(n^2) 解法

function FindContinuousSequence(sum) {
    let output = [];
    if (sum <= 0) {
        return output;
    }
    let count = 0;
    for (let i = 1; i <=sum; i++) {
        let sumArr = 0;
        for (let j = i; j <= sum; j++) {
            sumArr+=j;
            if (sumArr === sum) {
                if (j > i) {
                    output[count] = [];
                    let tempstart = i;
                    for (let k = 0; k <= j - i; k++) {
                        output[count][k] = tempstart++;
                    }
                    count++;
                    break;
                }
            }
            
        }
    }
    return output;
}

// let sum = 1;
let sum = 100;
console.log(FindContinuousSequence(sum));

// 双指针思路解法，算法复杂度较低

function FindContinuousSequence2(sum) {
    let output = [];
    if (sum <= 0) {
        return output;
    }
    let left = 1;
    let right = 2;
    while(left < right){
        let currentSum = (left + right)*(right - left + 1)/2;
        if (currentSum < sum) {
            right++;
        }
        if (currentSum === sum) {
            let list = [];
            for (let i = left; i <=right; i++) {
                list.push(i);
            }
            output.push(list);
            left++;
        }
        if (currentSum > sum) {
            left++;
        }
    }
    return output;
}

let sum2 = 100;
console.log(FindContinuousSequence2(sum2));