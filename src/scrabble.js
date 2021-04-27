class Scrabble {
    constructor(word) {
        this.points = 0;
        this.word = word;
    }
}

Scrabble.prototype.score = function(){
    if (this.word === null ) {
        this.points == 0;
    } else {
    let letters = this.word.toLowerCase().split('')
    letters.forEach(letter => {
        switch (letter){
            case 'e':
            case 'a':
            case 'i':
            case 'o':
            case 'n':
            case 'r':
            case 't':
            case 'l':
            case 's':
            case 'u':
                this.points += 1;
            break
            case 'd':
            case 'g':
                this.points += 2;
            break
            case 'b':
            case 'c':
            case 'm':
            case 'p':
                this.points += 3;
            break
            case 'f':
            case 'h':
            case 'v':
            case 'w':
            case 'y': 
                this.points += 4;
            break
            case 'k':
                this.points += 5;
            break
            case 'j':
            case 'x':
                this.points += 8;
            break
            case 'q':
            case 'z':
                this.points += 10;
            break
        }
    });
    }
return this.points;
}