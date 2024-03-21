const simpleGit = require('simple-git');
const { exec } = require('child_process');
const readline = require('readline');

// 创建 simple-git 实例
const git = simpleGit();

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 定义一个辅助函数来获取用户输入
function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

// 定义一个异步函数来执行流程
async function deploy() {
  try {
    // 3. 让用户输入 commit 的内容
    const commitMessage = await getUserInput('请输入 commit 的内容: ');

    // 1. 执行 pnpm build
    console.log('执行 pnpm build...');
    await execShellCommand('pnpm build');

    // 2. git add .
    console.log('添加文件到 Git...');
    await git.add('.');

    console.log('提交更改...');
    await git.commit(commitMessage, '--no-verify');

    // 4. git push
    console.log('推送到远程仓库...');
    await git.push();

    console.log('部署完成！');
  } catch (error) {
    console.error('部署失败:', error);
  } finally {
    rl.close(); // 不要忘记关闭 readline 接口
  }
}

// 定义一个辅助函数来执行 shell 命令
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(stderr);
        reject(error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

// 执行部署流程
deploy();
