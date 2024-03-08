import localforage from 'localforage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Monster } from './models/monster.ts';

import { Main } from './components/main/main.tsx';

import './index.css';

import monsters from './data/monsters';

localforage
	.getItem<Monster[]>('moreau-homebrew-monsters')
	.then(homebrewMonsters => {
		createRoot(document.getElementById('root')!).render(
			<StrictMode>
				<Main
					officialMonsters={monsters}
					homebrewMonsters={homebrewMonsters ?? []}
				/>
			</StrictMode>
		);
	});
