function solve() {
    let mat1 = document.querySelector('#mat1').value;
    let mat2 = document.querySelector('#mat2').value;
    let parsedMatrix1 = parseMatrix(mat1);
    let parsedMatrix2 = parseMatrix(mat2);
    let dp = dotProduct(parsedMatrix1, parsedMatrix2);
    let output = formatOutput(dp);
    document.querySelector('#result').innerText = output;
}

function formatOutput(matrix) {
    let output = '';
    for(let r of matrix) {
        output += r.join(' ');
        output += '\n';
    }
    return output.trim();
}

function dotProduct(mat1, mat2) {

    let dotProduct = [];
    for(let mat1Index in mat1) {
        let r1 = mat1[mat1Index];
        dotProduct[mat1Index] = [];
        for(let mat2Index in mat2) {
            let r2 = mat2[mat2Index];
            let sum = 0;
            for(let i = 0; i < r2.length; i++) {
                sum += r1[i] * r2[i];
            }
            dotProduct[mat1Index][mat2Index] = sum;
        }
    }

    return dotProduct;
}

function parseMatrix(matrix) {
    let rows = matrix.substring(2, matrix.length - 2);
    rows = rows.split('], [');

    let parsedMatrix = [];
    for(let i in rows) {
        let row = rows[i].split(', ');
        parsedMatrix[i] =  row;
    }

    return parsedMatrix;
}

/**
 * [0][0] * [0][0]
 * [0][1] * [0][1]
 * [0][2] * [0][2]
 * 
 * [0][0] * [1][0]
 * [0][1] * [1][1]
 * [0][2] * [1][2]
 * 
 * [1][0] * [0][0]
 * [1][1] * [0][1]
 * [1][2] * [0][2]
 * 
 * [1][0] * [1][0]
 * [1][1] * [1][1]
 * [1][2] * [1][2]
 */