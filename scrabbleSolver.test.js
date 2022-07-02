const ScrabbleSolver = require('./scrabbleSolver');

describe('ScrabbleSolver', () => {
  it('returns 0 if the string is empty', () => {
    const scrabble = new ScrabbleSolver('');
    expect(scrabble.score()).toEqual(0);
  });

  it('returns 5 if word is K', () => {
    const scrabble = new ScrabbleSolver('K');
    expect(scrabble.score()).toEqual(5);
  });

  it('returns 5 if word is k', () => {
    const scrabble = new ScrabbleSolver('k');
    expect(scrabble.score()).toEqual(5);
  });

  it('returns 1 if word is a', () => {
    const scrabble = new ScrabbleSolver('a');
    expect(scrabble.score()).toEqual(1);
  });

  it('returns 4 if word is f', () => {
    const scrabble = new ScrabbleSolver('f');
    expect(scrabble.score()).toEqual(4);
  });

  it('returns 6 if word is street', () => {
    const scrabble = new ScrabbleSolver('street');
    expect(scrabble.score()).toEqual(6);
  });

  it('returns 22 if word is quirky', () => {
    const scrabble = new ScrabbleSolver('quirky');
    expect(scrabble.score()).toEqual(22);
  });

  it('returns 41 if word is OXYPHENBUTAZONE', () => {
    const scrabble = new ScrabbleSolver('OXYPHENBUTAZONE');
    expect(scrabble.score()).toEqual(41);
  });

  it('returns 87 if word is abcdefghijklmnopqrstuvwxyz', () => {
    const scrabble = new ScrabbleSolver('abcdefghijklmnopqrstuvwxyz');
    expect(scrabble.score()).toEqual(87);
  });

  it('returns 0 if the string is nil', () => {
    const scrabble = new ScrabbleSolver(null);
    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 if the string is full of random shit', () => {
    const scrabble = new ScrabbleSolver('\t\n');
    expect(scrabble.score()).toEqual(0);
  });
});