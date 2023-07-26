function argumentInfo(...args) {

    let types = {};
    for(let obj of args) {
        let objType = typeof obj; 
        console.log(`${objType}: ${obj}`);

        if(!types[objType]) {
            types[objType] = 0;
        }
        types[objType]++;
    }

    let sortedTypes = [];
    for(let key in types) {
        sortedTypes.push([key, types[key]]);
    }
    sortedTypes.sort((a, b) => b[1] - a[1]);

    for(let kvp of sortedTypes) {
        let type = kvp[0];
        let count = kvp[1];
        console.log(`${type}: ${count}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 33);
