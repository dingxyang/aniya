import yParser from 'yargs-parser';
import fs from 'fs';
import path from 'path';

exports.run = ({ cwd, args }: { cwd: string; args: yParser.Arguments }) => {
  const generator = `${args._[1]}.js`;
  const generatorFile = path.join(__dirname, 'generators', generator);
  console.log(generatorFile)
  if (fs.existsSync(generatorFile)) {
    require(generatorFile).generate({ cwd, args });
  } else {
    console.log('Unknown generator type');
  }
};
