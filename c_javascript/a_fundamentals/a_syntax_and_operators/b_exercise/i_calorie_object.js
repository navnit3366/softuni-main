/**
 * Composes an object by given properties.
 * 
 * @param {Array} propertiesArray - Array of the object properties. Every even
 * index is the name of the property (string), every odd index is the value.
 */
function composeObject(propertiesArray) {
    let obj = {};
    for(let i = 1; i < propertiesArray.length; i+=2) {
        let name = propertiesArray[i-1];
        let value = propertiesArray[i];
        obj[name] = value;
    }
    console.log(obj);
}

composeObject(['Potato', 93, 'Apple', 22]);