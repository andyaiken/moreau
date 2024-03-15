import { MonsterOrigin, MonsterSize, MonsterType, RoleFlag, RoleType } from '../enums/enums';

import { Monster } from '../models/monster';
import { MonsterFilter } from '../models/monster-filter';

import { EnumHelper } from '../utils/enum-helper';

export class MonsterLogic {
	static getLevelAndRole = (monster: Monster) => {
		let str = EnumHelper.roleType(monster.role.type);

		switch (monster.role.flag) {
			case RoleFlag.Elite:
			case RoleFlag.Solo:
			case RoleFlag.Minion:
				if (monster.role.type === RoleType.None) {
					str = EnumHelper.roleFlag(monster.role.flag);
				} else {
					str = `${EnumHelper.roleFlag(monster.role.flag)} ${EnumHelper.roleType(monster.role.type)}`;
				}
				break;
		}

		if (monster.role.leader) {
			str += ' (L)';
		}

		return `Level ${monster.level} ${str}`;
	};

	static getPhenotype = (monster: Monster) => {
		return `${EnumHelper.monsterSize(monster.size)} ${EnumHelper.monsterOrigin(monster.origin)} ${EnumHelper.monsterType(monster.type)}`;
	};

	static getXP = (level: number, flag: RoleFlag) => {
		let xp = 0;

		switch (level) {
			case 1:
				xp = 100;
				break;
			case 2:
				xp = 125;
				break;
			case 3:
				xp = 150;
				break;
			case 4:
				xp = 175;
				break;
			case 5:
				xp = 200;
				break;
			case 6:
				xp = 250;
				break;
			case 7:
				xp = 300;
				break;
			case 8:
				xp = 350;
				break;
			case 9:
				xp = 400;
				break;
			case 10:
				xp = 500;
				break;
			case 11:
				xp = 600;
				break;
			case 12:
				xp = 700;
				break;
			case 13:
				xp = 800;
				break;
			case 14:
				xp = 1000;
				break;
			case 15:
				xp = 1200;
				break;
			case 16:
				xp = 1400;
				break;
			case 17:
				xp = 1600;
				break;
			case 18:
				xp = 2000;
				break;
			case 19:
				xp = 2400;
				break;
			case 20:
				xp = 2800;
				break;
			case 21:
				xp = 3200;
				break;
			case 22:
				xp = 4150;
				break;
			case 23:
				xp = 5100;
				break;
			case 24:
				xp = 6050;
				break;
			case 25:
				xp = 7000;
				break;
			case 26:
				xp = 9000;
				break;
			case 27:
				xp = 11000;
				break;
			case 28:
				xp = 13000;
				break;
			case 29:
				xp = 15000;
				break;
			case 30:
				xp = 19000;
				break;
			case 31:
				xp = 23000;
				break;
			case 32:
				xp = 27000;
				break;
			case 33:
				xp = 31000;
				break;
			case 34:
				xp = 39000;
				break;
			case 35:
				xp = 47000;
				break;
			case 36:
				xp = 55000;
				break;
			case 37:
				xp = 63000;
				break;
			case 38:
				xp = 79000;
				break;
			case 39:
				xp = 95000;
				break;
			case 40:
				xp = 111000;
				break;
		}

		switch (flag) {
			case RoleFlag.Elite:
				xp *= 2;
				break;
			case RoleFlag.Solo:
				xp *= 5;
				break;
			case RoleFlag.Minion:
				xp *= 0.25;
				break;
		}

		return xp;
	};

	static matches = (monster: Monster, filter: MonsterFilter) => {
		if (filter.text) {
			if (!monster.name.toLowerCase().includes(filter.text.toLowerCase())) {
				return false;
			}

			if (!monster.keywords.toLowerCase().includes(filter.text.toLowerCase())) {
				return false;
			}
		}

		const min = Math.min(...filter.level);
		const max = Math.max(...filter.level);
		if ((monster.level < min) || (monster.level > max)) {
			return false;
		}

		if ((filter.roleType !== RoleType.Any) && (monster.role.type !== filter.roleType)) {
			return false;
		}

		if ((filter.roleFlag !== RoleFlag.Any) && (monster.role.flag !== filter.roleFlag)) {
			return false;
		}

		if (!filter.roleLeader && monster.role.leader) {
			return false;
		}

		if (!filter.roleNonLeader && !monster.role.leader) {
			return false;
		}

		if ((filter.monsterSize !== MonsterSize.Any) && (monster.size !== filter.monsterSize)) {
			return false;
		}

		if ((filter.monsterOrigin !== MonsterOrigin.Any) && (monster.origin !== filter.monsterOrigin)) {
			return false;
		}

		if ((filter.monsterType !== MonsterType.Any) && (monster.type !== filter.monsterType)) {
			return false;
		}

		if (!filter.showOfficial && !monster.category) {
			return false;
		}

		if (!filter.showHomebrew && monster.category) {
			return false;
		}

		return true;
	};

	static getHP = (monster: Monster) => {
		if (monster.role.flag === RoleFlag.Minion) {
			return 1;
		}

		let value = 0;

		switch (monster.role.type) {
			case RoleType.Artillery:
			case RoleType.Lurker:
				value = 21 + (6 * monster.level);
				break;
			case RoleType.Brute:
				value = 26 + (10 * monster.level);
				break;
			case RoleType.Controller:
			case RoleType.Skirmisher:
			case RoleType.Soldier:
				value = 24 + (8 * monster.level);
				break;
		}

		switch (monster.role.flag) {
			case RoleFlag.Elite:
				value *= 2;
				break;
			case RoleFlag.Solo:
				value *= 4;
				break;
		}

		return value;
	};

	static getAC = (monster: Monster) => {
		let value = 14 + monster.level;

		switch (monster.role.type) {
			case RoleType.Artillery:
			case RoleType.Brute:
				value -= 2;
				break;
			case RoleType.Soldier:
				value += 2;
				break;
		}

		return value;
	};

	static getNAD = (monster: Monster) => {
		return 12 + monster.level;
	};

	static getAttack = (monster: Monster) => {
		return 5 + monster.level;
	};

	static getAverageDamage = (monster: Monster) => {
		let value = 8 + monster.level;

		if (monster.role.type === RoleType.Brute) {
			value *= 1.25;
		}

		if (monster.role.flag === RoleFlag.Minion) {
			value *= 0.5;
		}

		return Math.round(value);
	};
}
