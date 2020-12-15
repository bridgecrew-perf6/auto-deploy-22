const shell = require('shelljs');
const { originDistPath, targetPath } = require('./config');
const build = require('./build');
const pull = require('./pull');
const push = require('./push');

if (!shell.which('git')) {
  shell.echo('sorry，需要安装 Git');
  shell.exit(1);
}

// 原仓库拉取代码
pull();

// 项目构建，cp 构建产出
build();

// 目标仓库推送
push();
