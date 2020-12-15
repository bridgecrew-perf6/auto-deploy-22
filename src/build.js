const shell = require('shelljs');
const { originPath, originDistPath, targetDistPath } = require('./config');

module.exports = () => {
  shell.cd(originPath);
  shell.exec('npm run build');

  shell.rm('-rf');
  shell.cp('-R', originDistPath, targetDistPath);
};
