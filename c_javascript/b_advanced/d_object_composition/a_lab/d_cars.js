function solve(input) {

    function objectsProcessor() {

        let objects = [];

        return {
            create: create,
            createChild: createChild,
            set: set,
            print: print
        };

        function create(name) {
            objects.push({ name: name });
        }

        function createChild(childName, parentName) {
            let parent = objects.find(x => x.name == parentName);
            let child = Object.create(parent);
            child.name = childName;
            objects.push(child);
        }

        function set(name, key, value) {
            let obj = objects.find(x => x.name == name);
            obj[key] = value;
        }

        function print(name) {
            obj = objects.find(x => x.name == name);

            let propertyNames = getAllProperties(obj);

            let output = [];
            for(key of propertyNames) {
                output.push(`${key}: ${obj[key]}`);
            }

            console.log(output.join(', '));
        }

        function getAllProperties(obj) {

            let allProperties = [];

            while(obj && obj !== Object.prototype) {
                let ownProperties = Object.getOwnPropertyNames(obj);
                allProperties = allProperties.concat(ownProperties);
                obj = Object.getPrototypeOf(obj);
            }

            return allProperties;
        }
    }

    let processor = objectsProcessor();

    for(args of input) {

        args = args.split(' ');
        let cmd = args[0];

        if (cmd == 'create')
            args.length == 2
                ? processor.create(args[1])
                : processor.createChild(args[1], args[3]);
        else if (cmd == 'set')
            processor.set(args[1], args[2], args[3]);
        else if (cmd == 'print')
            processor.print(args[1]);
        else
            throw Error('Unknown command!');
    }
}

solve([
    'create c1',
    'set c1 color red',
    'create c2 inherit c1',
    'set c2 model new',
    'print c1',
    'print c2'
]);
