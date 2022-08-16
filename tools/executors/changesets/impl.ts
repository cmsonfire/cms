import type { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface ChangeSetsOptions {
  pathToPackage: string;
}

export default async function removeDirectoryExecutor(
  options: ChangeSetsOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const command = `jq 'del(.publishConfig.directory)' ${options.pathToPackage}/package.json > ${options.pathToPackage}/temp.json && mv ${options.pathToPackage}/temp.json ${options.pathToPackage}/package.json`;
  console.info(`Executing: ${command}`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);

  const { stdout, stderr } = await promisify(exec)(command);
  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}
