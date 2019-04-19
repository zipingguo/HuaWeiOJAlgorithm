/******
 * 
 * 找数组中重复的数字
 * 
 * 在一个长度为n的数组里的所有数字都在0到n - 1 的范围内。 
 * 数组中某些数字是重复的， 但不知道有几个数字是重复的。 也不知道每个数字重复几次。 
 * 请找出数组中任意一个重复的数字。 
 * 例如， 如果输入长度为7的数组 {2, 3, 1, 0, 2, 5, 3 }，那么对应的输出是第一个重复的数字 2。
 * 
 * 
 */

function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var len = numbers.length;
    var temparr = [];
    for (let i = 0; i < len; i++) {
        if(temparr[numbers[i]]) {
            temparr[numbers[i]]++;
        } else {
            temparr[numbers[i]] = 1;
        }
    }

    for (var index in temparr) {
        if (temparr[index] !== 1) {
            duplication[0] = parseInt(index);
            return 'true';
        }
    }
    return 'false';
}

// 11ms 占用 5356k


// var arr = [2, 3, 1, 0, 2, 5, 3];
var arr = [2, 1, 3, 1, 4];
console.log(duplicate(arr));

// 以上过程较为复杂，可以简化
function duplicateOnce(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var temparr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (temparr[numbers[i]]) {
            temparr[numbers[i]]++;
            if (temparr[numbers[i]] === 2) {
                duplication[0] = numbers[i];
                return true;
            }
        } else {
            temparr[numbers[i]] = 1;
        }
    }
    return 'false';
}

// 运行时间： 15 ms
// 占用内存： 7572 k