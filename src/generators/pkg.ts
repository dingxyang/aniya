import yParser from 'yargs-parser';
import path from 'path';
import * as logger from '../logger';
import { generateJson } from '../utils';

exports.generate = ({
  cwd,
  args,
}: {
  cwd: string;
  args: yParser.Arguments;
}) => {
  args;
  logger.info('Generating package.json');
  generateJson(path.join(cwd, 'package.json'), {
    private:true,
    author:'dingxyang <https://github.com/dingxyang>',
    scripts:{},
    license: "MIT",
  });
};
