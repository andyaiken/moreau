import { Encounter } from '../models/encounter';
import { Monster } from '../models/monster';

import { MonsterLogic } from './monster-logic';

import { Collections } from '../utils/collections';

export class EncounterLogic {
	static getXP = (encounter: Encounter, monsters: Monster[]) => {
		return Collections.sum(encounter.waves, wave => {
			return Collections.sum(wave.slots, slot => {
				const monster = monsters.find(m => m.id === slot.threatID);
				const xp = monster ? MonsterLogic.getXP(monster.level, monster.role.flag) : 0;
				return xp * slot.count;
			});
		});
	};
}
