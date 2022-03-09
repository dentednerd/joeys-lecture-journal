const fs = require('fs');

function countJSFiles(path, cb) {
  fs.readdir(path, (err, fileNames) => {
    const jsFiles = fileNames.filter((fileName) => {
      return fileName.endsWith('.js');
    });

    cb(null, jsFiles.length);
  });
  return;
}

module.exports = { countJSFiles };
