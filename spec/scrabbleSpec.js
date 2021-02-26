describe ('scrabble', function(){
   
    it ('counts letter a as 1', function(){
        const scrabble = new Scrabble('a')
        expect(scrabble.score()).toEqual(1);
    });

    it ('counts letter nil as 0', function(){
        const scrabble = new Scrabble('f')
        expect(scrabble.score()).toEqual(0);
    });

});