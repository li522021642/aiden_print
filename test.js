const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('你好，请输入一些文字: ', (answer) => {
  console.log(`您输入的是: ${answer}`);
  rl.close();
});
