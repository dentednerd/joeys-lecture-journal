const { countJSFiles } = require('./async');

describe('countJsFiles', () => {
  test('invokes the callback with no error', (done) => {
    countJSFiles('test-data/empty-dir', (err, jsCount) => {
      expect(err).toBe(null);
      done();
    });
  });

  test('invokes the callback with 0 if there are no files in the directory', (done) => {
    countJSFiles(`test-data/empty-dir`, (err, jsCount) => {
      expect(jsCount).toBe(0);
      done();
    });
  });

  test('invokes the callback with the number of files in a folder only containing JS files', (done) => {
    countJSFiles(`test-data/js-only-dir`, (err, jsCount) => {
      expect(jsCount).toBe(2);
      done();
    });
  });

  test('invokes the callback with the number of files in a folder only mixed files', (done) => {
    countJSFiles(`test-data/mixed-dir`, (err, jsCount) => {
      expect(jsCount).toBe(3);
      done();
    });
  });
});
