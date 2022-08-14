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
  logger.info('Generating .commit.sh');
  const localeTpl = fsExtra.readFileSync(
    path.join(__dirname, '../../templates/commit.sh.tpl'),
    'utf-8',
  );
  generateFile(path.join(cwd, '.commit.sh'), localeTpl);
};
