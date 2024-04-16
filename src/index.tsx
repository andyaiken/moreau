import localforage from 'localforage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ActionType } from './enums/enums.ts';

import { Factory } from './logic/factory.ts';

import { Encounter } from './models/encounter.ts';
import { Monster } from './models/monster.ts';

import { Main } from './components/main/main.tsx';

import './index.scss';

import encounterTemplates from './data/encounter-templates.ts';
import monsters from './data/monsters';

monsters.forEach(monster => {
	monster.powers.forEach(power => {
		if (!power.action) {
			power.action = Factory.createPowerAction(ActionType.None);
		}
	});
});

localforage
	.getItem<Monster[]>('moreau-homebrew-monsters')
	.then(homebrewMonsters => {
		localforage
			.getItem<Encounter[]>('moreau-encounters')
			.then(encounters => {
				createRoot(document.getElementById('root')!).render(
					<StrictMode>
						<Main
							officialMonsters={monsters}
							homebrewMonsters={homebrewMonsters ?? []}
							encounters={encounters ?? []}
							encounterTemplates={encounterTemplates}
						/>
					</StrictMode>
				);
			});
	});
