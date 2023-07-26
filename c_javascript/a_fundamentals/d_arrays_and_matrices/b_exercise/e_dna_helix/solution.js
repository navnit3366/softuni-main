class DNAHelix {
    constructor(length) {
        this.length = length;
        this.seq = ['AT', 'CG', 'TT', 'AG', 'GG'];
    }

    getHelix() {
        let result = '';
        let structureIndex = 0;
        let seqIndex = 0
        for(let i = 0; i < this.length; i++) {
            result += `<p>${this.getStructure(structureIndex, seqIndex)}</p>`;

            structureIndex++;
            if(structureIndex > 3) {
                structureIndex = 0;
            }

            seqIndex++;
            if(seqIndex > this.seq.length - 1) {
                seqIndex = 0;
            }
        }
        return result;
    }

    getStructure(structureIndex, seqIndex) {
        switch(structureIndex) {
            case 0: return `**${this.seq[seqIndex]}**`;
            case 1: return `*${this.seq[seqIndex][0]}--${this.seq[seqIndex][1]}*`;
            case 2: return `${this.seq[seqIndex][0]}----${this.seq[seqIndex][1]}`;
            case 3: return `*${this.seq[seqIndex][0]}--${this.seq[seqIndex][1]}*`;
        }
    }
}

function solve() {
    let length = +document.querySelector('#num').value;
    let dnaHelix = new DNAHelix(length);
    let result = dnaHelix.getHelix();
    document.querySelector('#result').innerHTML = result;
}