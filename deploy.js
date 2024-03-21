const simpleGit = require('simple-git');
const { exec } = require('child_process');

// 创建 simple-git 实例
const git = simpleGit();

// 定义一个异步函数来执行流程
async function deploy() {
  try {
    // 1. 执行 pnpm build
    console.log('执行 pnpm build...');
    await execShellCommand('pnpm build');

    // 2. git add .
    console.log('添加文件到 Git...');
    await git.add('.');

    // 3. git commit --no-verify -m "commit"
    console.log('提交更改...');
    await git.commit('build', '--no-verify');

    // 4. git push
    console.log('推送到远程仓库...');
    await git.push();

    console.log('部署完成！');
  } catch (error) {
    console.error('部署失败:', error);
  }
}

// 定义一个辅助函数来执行 shell 命令
function execShellCommand(cmd, cwd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
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
