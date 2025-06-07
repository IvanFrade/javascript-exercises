const removeFromArray = function() {
    return arguments[0].filter((element) => !([...arguments].includes(element)));
};

// Do not edit below this line
module.exports = removeFromArray;