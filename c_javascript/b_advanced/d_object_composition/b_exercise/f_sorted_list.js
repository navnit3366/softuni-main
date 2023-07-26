let collection = (function () {

    let collection = [];

    function add(element) {
        collection.push(element);
        collection = collection.sort((a, b) => a - b);
    }

    function remove(index) {
        collection.splice(index, 1)
    }

    function get(index) {
        return collection[index]
    }

    function size() {
        return collection.length
    }

    collection.add = add;
    collection.remove = remove;
    collection.get = get;
    Object.defineProperty(collection, 'size', { get: size });

    return collection;
})();

collection.add(5);
collection.add(4);
collection.add(3);
collection.add(2);
collection.add(1);
collection.remove(0);

console.log(collection.toString());