import semver from 'semver';

import DocsSource, { json } from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'docs']);

class CommandoSource extends DocsSource {
	public override async fetchDocs(tag: string) {
		const res = await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${tag}.json`);
		return json(res);
	}
}

export default new CommandoSource({
	id: 'commando',
	name: 'commando',
	global: 'commando',
	docsRepo: 'discordjs/commando',
	repo: 'discordjs/commando',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gt(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.4.1'),
});
