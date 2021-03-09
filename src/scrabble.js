class Scrabble {
    constructor(word) {
        this.points = 0;
        this.word = word;
    }
}

Scrabble.prototype.score = function(){
    let letters = this.word.toLowerCase().split('')
    letters.forEach(letter => {
        switch (letter){
            case 'a':
            case 'e':
            this.points += 1;
            break
        }
    });

return this.points;
}