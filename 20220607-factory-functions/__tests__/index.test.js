const createPlayList = require('../index');

describe('#createPlayList', () => {
  test('returns the name of the playlist', () => {
    const testInput = createPlayList('happy');
    expect(testInput.name).toBe('happy');
  });

  test('returns a tracks property, which defaults to an empty array', () => {
    const testInput = createPlayList('gym grind');
    expect(testInput.tracks).toEqual([]);
  });

  test('.addTrack() - adds a track to the playlist', () => {
    // arrange
    const testInput = createPlayList('studying');

    // act
    testInput.addTrack('lofi pokemon theme');

    // assert
    expect(testInput.tracks).toEqual(['lofi pokemon theme']);
  });

  test('.getCurrentTrack - returns a string of "Now playing: " + the first track on the playlist', () => {
    // arrange
    const testInput = createPlayList('playing tracks');

    // act
    testInput.addTrack('Africa');
    testInput.addTrack('Viva Las Vengeance');
    const actual = testInput.getCurrentTrack();

    // assert
    expect(actual).toBe('Now playing: Africa');
  });

  test('.nextTrack - change the current song to the next song in the tracks list', () => {
    // arrange
    const testInput = createPlayList('playing tracks');

    // act
    testInput.addTrack('Africa');
    testInput.addTrack('Viva Las Vengeance');
    testInput.nextTrack();
    const actual = testInput.getCurrentTrack();

    // assert
    expect(actual).toBe('Now playing: Viva Las Vengeance');
  });

  test('.nextTrack - changes track to first track after last track', () => {
    // arrange
    const testInput = createPlayList('playing tracks');

    // act
    testInput.addTrack('Africa');
    testInput.addTrack('Viva Las Vengeance');
    testInput.nextTrack();
    testInput.nextTrack();
    const actual = testInput.getCurrentTrack();

    // assert
    expect(actual).toBe('Now playing: Africa');
  });
});
