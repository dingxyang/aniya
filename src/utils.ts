import fsExtra from 'fs-extra';
import path from 'path';

export function generateJson(filePath: string, obj: Object) {
  fsExtra.mkdirpSync(path.dirname(filePath));
  fsExtra.writeJsonSync(filePath, obj, { spaces: 2 });
}
