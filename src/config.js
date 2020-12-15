const path = require('path');

const originName = 'nest-demo';
const targetName = 'nest-demo-build';

const basePath = path.resolve(__dirname, '../../');
const originPath = `${basePath}/${originName}`;
const originDistPath = `${originPath}/dist`;
const targetPath = `${basePath}/${targetName}`;
const targetDistPath = `${basePath}/${targetName}/dist`;

module.exports = {
  originName,
  targetName,
  basePath,
  originPath,
  originDistPath,
  targetPath,
  targetDistPath
};
