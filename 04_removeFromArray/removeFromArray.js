const removeFromArray = function () {
    // Gets array into a separate variable and then goes over the rest of the arguments.
    let array = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        let position = array.findIndex((element) => element === arguments[i]);
        // After getting the position of the element to search confirm it exist before splicing.
        if (position != -1) {
            array.splice(position, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
