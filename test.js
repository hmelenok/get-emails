import fs from 'fs';
import test from 'ava';
import getEmails from '.';

test('main', t => {
	t.deepEqual(
		getEmails(fs.readFileSync('fixture.txt', 'utf8')),
		new Set([
			'sindresorhus@gmail.com',
			'foo@bar.co.uk',
			'unicorn@unicorn.unicorn',
			'cake@cake.cake',
			'pony@power.com'
		])
	);
});

test('main with comma separated 50 emails', t => {
	t.deepEqual(
		getEmails(fs.readFileSync('fixture-comma-separated.txt', 'utf8')),
		new Set([
			'sabren@optonline.net',
			'grothoff@icloud.com',
			'bdthomas@aol.com',
			'rhialto@outlook.com',
			'darin@msn.com',
			'marnanel@msn.com',
			'mxiao@me.com',
			'laird@mac.com',
			'jbailie@outlook.com',
			'hmbrand@live.com',
			'shazow@yahoo.com',
			'dobey@msn.com',
			'bancboy@hotmail.com',
			'marioph@yahoo.ca',
			'parrt@comcast.net',
			'hutton@icloud.com',
			'jnolan@msn.com',
			'farber@yahoo.com',
			'kohlis@msn.com',
			'shaffei@msn.com',
			'stinson@hotmail.com',
			'madler@icloud.com',
			'jguyer@live.com',
			'bwcarty@aol.com',
			'shazow@msn.com',
			'marin@yahoo.ca',
			'ryanvm@yahoo.ca',
			'gregh@msn.com',
			'akoblin@live.com',
			'dsugal@sbcglobal.net',
			'tamas@icloud.com',
			'bryam@mac.com',
			'dalamb@att.net',
			'satishr@att.net',
			'jkegl@comcast.net',
			'fhirsch@yahoo.ca',
			'jaffe@live.com',
			'mglee@yahoo.ca',
			'mallanmba@outlook.com',
			'oster@msn.com',
			'gozer@att.net',
			'naoya@yahoo.ca',
			'sarahs@att.net',
			'rgarton@hotmail.com',
			'mlewan@att.net',
			'stern@live.com',
			'gavinls@icloud.com',
			'netsfr@yahoo.com',
			'gfody@me.com',
			'multiplx@optonline.net'
		])
	);
});

test('matches correctly', t => {
	const fixture = `
		foo bar mailto:sindresorhus@gmail.com unicorn
	`;

	t.deepEqual(
		getEmails(fixture),
		new Set([
			'sindresorhus@gmail.com'
		])
	);
});
