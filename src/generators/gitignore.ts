import yParser from 'yargs-parser';
import path from 'path';
import * as logger from '../logger';
import { generateFile } from '../utils';
import fsExtra from 'fs-extra';

exports.generate = ({
  cwd,
  args,
}: {
  cwd: string;
  args: yParser.Arguments;
}) => {
  args;
  logger.info('Generating .gitignore');
  const localeTpl = fsExtra.readFileSync(
    path.join(__dirname, '../../templates/.gitignore.tpl'),
    'utf-8',
  );
  generateFile(path.join(cwd, '.gitignore'), localeTpl);
};
