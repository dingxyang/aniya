import yParser from 'yargs-parser';

const args = yParser(process.argv);

const cwd = process.cwd();
switch (args._[0]) {
  case 'init':
    require('./command-init').run({ cwd, args });
    break;
  case 'generate':
    require('./command-generate').run({ cwd, args });
    break;
  default:
    console.log('Unknown command');
    break;
}
