function Scrabble(word){
    this.score = 0;
    this.word = word
}

Scrabble.prototype.score = function(){
if (this.word === 'a'){
    this.score += 1;

}
}