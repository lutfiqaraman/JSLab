function deepEqual(object1, object2) {

    if (object1 === object2)
        return true;

    if ((object1 == null || typeof object1 != "object") || (object2 == null || typeof object2 != "object"))
        return false;

    let keysA = Object.keys(object1),
        keysB = Object.keys(object2);

    if (keysA.length !== keysB.length)
        return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(object1[key], object2[key]))
            return false;
    }

    return true;
}

let obj1 = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "a"}, object: 2};


console.log(deepEqual(obj1, obj2)); //output false
