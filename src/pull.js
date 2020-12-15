const shell = require('shelljs');
const { originPath } = require('./config');

module.exports = (branch = 'develop') => {
  shell.cd(originPath);
  shell.exec(`git checkout ${branch}`);
  shell.exec('git pull origin develop');
};
