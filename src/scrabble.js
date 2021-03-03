class Scrabble {
    constructor(word) {
        this.points = 0;
        this.word = word;
    }
}

Scrabble.prototype.score = function(){
    let letters = this.word.split('')
    letters.forEach(letter => {
        if (letter === 'a'){
            this.points += 1;
        }
    });

return this.points;
}