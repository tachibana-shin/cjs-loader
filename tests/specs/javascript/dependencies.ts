import { testSuite, expect } from 'manten';
import type { NodeApis } from '../../utils/node-with-loader';

export default testSuite(async ({ describe }, node: NodeApis) => {
	describe('Dependencies', ({ describe }) => {
		describe('module dependency', ({ test }) => {
			const output = '{"default":"default export","namedExport":"named export"}';

			test('Import', async () => {
				const nodeProcess = await node.import('package-module');
				expect(nodeProcess.stdout).toBe(output);
			});

			test('Require', async () => {
				const nodeProcess = await node.require('package-module');
				expect(nodeProcess.stdout).toBe(output);
			});
		});
	});
});
