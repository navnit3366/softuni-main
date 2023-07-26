function sumRange(start, end) {
    let sum = 0;

    for (let n = +start; n <= +end; n++) {
        sum += n;
    }

    console.log(sum);
}

sumRange('1', '5');