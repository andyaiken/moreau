import { Monster } from '../../models/monster';

// TODO: Categorise all monsters
// TODO: Separate monsters into files by category

import { monsters as monsters0 } from './monsters.0';
import { monsters as monsters1 } from './monsters.1';
import { monsters as monsters2 } from './monsters.2';
import { monsters as monsters3 } from './monsters.3';
import { monsters as monsters4 } from './monsters.4';
import { monsters as monsters5 } from './monsters.5';
import { monsters as monsters6 } from './monsters.6';
import { monsters as monsters7 } from './monsters.7';
import { monsters as monsters8 } from './monsters.8';
import { monsters as monsters9 } from './monsters.9';

const monsters: Monster[] = [
	...monsters0,
	...monsters1,
	...monsters2,
	...monsters3,
	...monsters4,
	...monsters5,
	...monsters6,
	...monsters7,
	...monsters8,
	...monsters9
];

export { monsters };
