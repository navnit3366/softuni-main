let closure = (function () {
    let str = '';
    return {
        append: (value) => str += value,
        removeStart: (n) => str = str.substring(+n),
        removeEnd: (n) => str = str.substring(0, str.length - +n),
        print: () => console.log(str)
    };
})();

let input = ['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print'];

for(let args of input) {
    args = args.split(' ');
    closure[args[0]](args[1]);
}
