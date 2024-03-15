import { Encounter } from '../models/encounter';
import { Monster } from '../models/monster';

import { MonsterLogic } from './monster-logic';

import { Collections } from '../utils/collections';
import { DifficultyLevel, RoleFlag } from '../enums/enums';

export class EncounterLogic {
	static getMonsterCount = (encounter: Encounter) => {
		return Collections.sum(encounter.waves, wave => {
			return Collections.sum(wave.slots, slot => slot.count);
		});
	};

	static getXP = (encounter: Encounter, monsters: Monster[]) => {
		return Collections.sum(encounter.waves, wave => {
			return Collections.sum(wave.slots, slot => {
				const monster = monsters.find(m => m.id === slot.threatID);
				const xp = monster ? MonsterLogic.getXP(monster.level, monster.role.flag) : 0;
				return xp * slot.count;
			});
		});
	};

	static getLevel = (encounterXP: number, partySize: number) => {
		const budgets: { level: number, budget: number }[] = [];
		for (let level = 1; level <= 30; ++level) {
			budgets.push({
				level: level,
				budget: MonsterLogic.getXP(level, RoleFlag.Standard) * partySize
			});
		}

		const closest = Collections.min(budgets, b => Math.abs(encounterXP - b.budget));
		return closest ? closest.level : 0;
	};

	static getDifficulty = (encounterLevel: number, partyLevel: number) => {
		const diff = encounterLevel - partyLevel;

		if (diff < -2) {
			return DifficultyLevel.Trivial;
		}

		if (diff < 0) {
			return DifficultyLevel.Easy;
		}

		if (diff < 2) {
			return DifficultyLevel.Moderate;
		}

		if (diff < 5) {
			return DifficultyLevel.Hard;
		}

		return DifficultyLevel.Extreme
	}
}
