describe ('scrabble', function(){
   
    it ('counts letter a as 1', function(){
        const scrabble = new Scrabble('a')
        expect(scrabble.score()).toEqual(1);
    });

    it ('counts letter aaa as 3', function(){
        const scrabble = new Scrabble('aaa')
        expect(scrabble.score()).toEqual(3);
    });

    it ('counts letter aaA as 3', function(){
        const scrabble = new Scrabble('aaA')
        expect(scrabble.score()).toEqual(3);
    });

    it ('counts letter aeA as 3', function(){
        const scrabble = new Scrabble('aeA')
        expect(scrabble.score()).toEqual(3);
    });

    it ('counts letter aaf as 2', function(){
        const scrabble = new Scrabble('aaf')
        expect(scrabble.score()).toEqual(2);
    });

    it ('counts letter abf as 2', function(){
        const scrabble = new Scrabble('abf')
        expect(scrabble.score()).toEqual(4);
    });

    it ('counts letter null as 0', function(){
        const scrabble = new Scrabble(null)
        expect(scrabble.score()).toEqual(0);
    });

});