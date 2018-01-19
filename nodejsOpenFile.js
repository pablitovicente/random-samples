const fs = require('fs');
console.log('*'.repeat(200));
console.log('start');

fs.readFile('./song.txt', (err, data) => {
  if (err) throw err;
  console.log('*'.repeat(200));
  console.log('file was opened');
  setTimeout(() => {
    console.log(data.toString());
    console.log('*'.repeat(200));
    console.log('Code finished executing');
  }, 3000);
});
