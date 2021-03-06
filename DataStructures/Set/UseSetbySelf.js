/****
 * 
 * @author SkylineBin
 * @time 2018-10-11
 * @function create a set structure by JavaScript
 * 
 */

function SetS() {
    let items = {};

//  check if value in this set
    this.has = function (value) {
    //  return value in items;  // old function
        return items.hasOwnProperty(value);
    }

    //  add this value
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    // remove this value from this Set
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    // clear this set
    this.clear = function () {
        items = {};
    }

    // get the size of this Set
    this.size = function () {
        return Object.keys(items).length;
    }

    // another function of getting the size of this Set
    this.sizeLegacy = function (){
        let count = 0;
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                // avoid count the repeated key
                ++count;
            }            
        }
        return count;
    };

    // get all values of this Set
    this.values = function() {
        let values = [];
        for (let index = 0, keys=Object.keys(items); index < keys.length; index++) {
            values.push(items[keys[index]]);
        }
        return values;
    }

    this.valuesLegacy = function (){
        let values = [];
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };

    // union this set and otherSet
    this.union = function (otherSet) {
        let unionSet = new SetS();

        let values = this.values();
        for (let index = 0; index < values.length; index++) {
            unionSet.add(values[index]);
        }

        values = otherSet.values();
        for (let j = 0; j < values.length; j++) {
            unionSet.add(values[j]);            
        }
        return unionSet;
    };

    // intersection two sets
    this.intersection = function (otherSet) {
        let intersectionSet = new SetS();

        let values = this.values();
        for (let index = 0; index < values.length; index++) {
            if (otherSet.has(values[index])) {
                intersectionSet.add(values[index]);
            }
        }
        return intersectionSet;
    }

    // difference of set and setone
    this.difference =function (otherSet) {
        let differenceSet = new SetS();

        let values = this.values();
        for (let index = 0; index < values.length; index++) {
            if (!otherSet.has(values[index])) {
                differenceSet.add(values[index]);
            }
        }
        return differenceSet;
    };

    // judge if set if a subset if otherSet
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for (let index = 0; index < values.length; index++) {
                if (!otherSet.has(values[index])) {
                    return false;
                }
            }
            return true;
        }
    }

}


let set = new SetS();
set.add(1);
set.add(2);
set.add(3);
set.add(6);
set.add(7);
console.log('------------------------------------');
console.log(set.values());
console.log('------------------------------------');
console.log(set.has(1));
console.log('------------------------------------');
console.log(set.size());
console.log('------------------------------------');
set.add(4);
set.add(7);
console.log('------------------------------------');
console.log(set.values());
console.log('------------------------------------');
set.remove(2);
console.log('-------------set valuse-----------------------');
console.log(set.values());
console.log('------------------------------------');



let settwo = new SetS();
settwo.add(79);
settwo.add(5);
settwo.add(3);
settwo.add(16);
settwo.add(49);

console.log('-------------settwo valuse-----------------------');
console.log(settwo.values());
console.log('------------------------------------');

let unionOneTwo = set.union(settwo);
console.log('--------------set union setone--------------------');
console.log(unionOneTwo.values());
console.log('------------------------------------');

let intersectionSetone = set.intersection(settwo);
console.log('---------------set intersectate settwo---------------------');
console.log(intersectionSetone.values());
console.log('------------------------------------');
