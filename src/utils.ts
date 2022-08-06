import fsExtra from 'fs-extra';
import path from 'path';

export function generateJson(filePath: string, obj: Object) {
  fsExtra.mkdirpSync(path.dirname(filePath));
  fsExtra.writeJsonSync(filePath, obj, { spaces: 2 });
}

export function generateFile(filePath: string, obj: string) {
  fsExtra.mkdirpSync(path.dirname(filePath));
  fsExtra.writeFileSync(filePath, obj, 'utf-8');
}
