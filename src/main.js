var shell = require('shelljs');

if(!shell.which('git')) {
    shell.echo('sorry，需要安装 Git');
    shell.exit(1)
}

const basePath = `${__dirname}/demo`
const aDistPath = `${basePath}/project-a/dist`
const bDistPath = `${basePath}/project-b/dist`

shell.cp('-R', aDistPath, bDistPath);