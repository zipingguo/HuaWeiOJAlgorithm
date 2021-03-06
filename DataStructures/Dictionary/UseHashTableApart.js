/*****
 * 
 * @author SkylineBin
 * @time 2018-10-16
 * @function Create HashTable Structure (Apart Link) by JavaScript
 * @function 使用分离链接的方法来处理Hash表的冲突
 * 
 * 
 */

const LinkedList = require('../LinkedList/CreateLinkedList');

function HashTable() {
    var table = [];

    //  lose lose hash code
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash += key.charCodeAt(index);
        }
        return hash % 37;
    };

    // 
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    //  put this value at the position computed by this key
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    }

    //  get this value by key
    this.get = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };

    // remove this value by key
    this.remove = function (key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }

    // print values of this HashTable
    this.print = function () {
        for (let index = 0; index < table.length; index++) {
            if (table[index] !== undefined) {
                console.log(index + " : " + table[index]);
            }

        }
    }
}

let hash = new HashTable();
hash.put('John', 'jogn@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');
hash.put('Shanny', 'shanny@gmail.com');
hash.put('Mike', 'mike@gmail.com');

console.log('------------------------------------');
console.log(hash.get('Mike'));
console.log(hash.get('Rick'));
console.log('------------------------------------');


hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');

hash.print();