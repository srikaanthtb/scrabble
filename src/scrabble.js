class Scrabble {
    constructor(word) {
        this.points = 0;
        this.word = word;
    }
}

Scrabble.prototype.score = function(){
if (this.word === 'a'){
    this.points += 1;
}
return this.points;
}