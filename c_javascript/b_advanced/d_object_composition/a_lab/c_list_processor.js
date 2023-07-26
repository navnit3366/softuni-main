function solve(input) {

    function listProcessor() {
        let list = [];

        function add(str) {
            list.push(str);
        }

        function remove(str) {
            list = list.filter(item => item !== str)
        }

        function print() {
            console.log(list.join(', '));
        }

        return {
            add: add,
            remove: remove,
            print: print
        };
    }

    let processor = listProcessor();

    for(args of input) {
        args = args.split(' ');
        let cmd = args[0];

        switch(cmd) {
            case 'add':
                processor.add(args[1]);
                break;
            case 'remove':
                processor.remove(args[1]);
                break;
            case 'print':
                processor.print();
                break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
