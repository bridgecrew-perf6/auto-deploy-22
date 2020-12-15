const shell = require('shelljs');
const { targetPath } = require('./config');

module.exports = (branch = 'develop') => {
  shell.cd(targetPath);
  shell.exec(`git checkout ${branch}`);
  shell.exec(`git commit -am "feat: qa-release"`);
  shell.exec('git push origin develop');
  shell.exit(0);
};
