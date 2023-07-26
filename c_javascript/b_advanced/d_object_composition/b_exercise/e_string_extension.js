(function solution() {

    String.prototype.ensureStart = ensureStart;
    String.prototype.ensureEnd = ensureEnd;
    String.prototype.isEmpty = isEmpty;
    String.prototype.truncate = truncate;
    String.format = format;

    function ensureStart(str) {
        if (!this.startsWith(str)) 
            return str + this;
    }

    function ensureEnd(str) {
        if (!this.endsWith(str))
            return this + str;
    }

    function isEmpty() {
        return this.length == 0;
    }

    function truncate(n) {
        return this.length > n
            ? `${this.substring(0, n-3)}...`
            : this;
    }

    function format(string, ...params) {

        for (let i = 0; i < params.length; i++) {
            let regex = new RegExp(`\\{${i}\\}`, 'g');
            string = string.replace(regex, params[i]);
        }

        return string;
    }
})();

let str = 'pesho';
str = str.truncate(1);
str = str.truncate(1);
console.log(str);