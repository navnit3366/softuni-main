function getExtensibleObject() {

    function extend(template) {
        for (prop in template) {
            if(template.hasOwnProperty(prop)) 
                this[prop] = template[prop];
        }
    }

    return {extend: extend};
}

let obj = getExtensibleObject();

let sourceObj = {
    sourceProperty: 'Source property',
    sourceMethod: function() {
        console.log('Source mehtod executed');
    }
};

obj.extend(sourceObj);

console.log(obj);
