function solution(command) {

    switch(command) {
        case 'upvote': this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score':
            let upvotes = this.upvotes;
            let downvotes = this.downvotes;
            let balance = upvotes - downvotes;
            let totalVotes = this.upvotes + this.downvotes

            let rating = '';
            if(upvotes > totalVotes * 0.66){
                rating = 'hot';
            }
            else if((upvotes > 100 || downvotes > 100) && balance >= 0) {
                rating = 'controversial';
            }
            else if(balance < 0) {
                rating = 'unpopular';
            }
            else {
                rating = 'new';
            }

            if(totalVotes > 50) {
                let biggerNum = Math.max(upvotes, downvotes);
                let numberToAdd = Math.ceil(biggerNum * 0.25);
                upvotes += numberToAdd;
                downvotes += numberToAdd;
            }

            return [upvotes, downvotes, balance, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');   // [127, 127, 0, 'controversial']

for(let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');       // [139, 189, -50, 'unpopular']