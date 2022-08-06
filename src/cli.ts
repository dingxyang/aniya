import yParser from 'yargs-parser';


export async function run() {
  const args = yParser(process.argv.slice(2));
  const cwd = process.cwd();
  switch (args._[0]) {
    case 'init':
      require('./command-init').run({ cwd, args });
      break;
    case 'generate':
    case 'g':
      require('./command-generate').run({ cwd, args });
      break;
    default:
      console.log('Unknown command');
      break;
  }

}
