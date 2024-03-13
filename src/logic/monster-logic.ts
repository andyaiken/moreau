import { RoleFlag, RoleType } from '../enums/enums';
import { Monster, Role } from '../models/monster';
import { EnumHelper } from '../utils/enum-helper';

export class MonsterLogic {
	static getRole = (role: Role) => {
		let str = EnumHelper.roleType(role.type);

		switch (role.flag) {
			case RoleFlag.Elite:
			case RoleFlag.Solo:
			case RoleFlag.Minion:
				if (role.type === RoleType.None) {
					str = EnumHelper.roleFlag(role.flag);
				} else {
					str = `${EnumHelper.roleFlag(role.flag)} ${EnumHelper.roleType(role.type)}`;
				}
				break;
		}

		if (role.leader) {
			str += ' (L)';
		}

		return str;
	};

	static getPhenotype = (monster: Monster) => {
		let str = `${EnumHelper.monsterSize(monster.size)} ${EnumHelper.monsterOrigin(monster.origin)} ${EnumHelper.monsterType(monster.type)}`;
		if (monster.keywords) {
			str += ` (${monster.keywords})`;
		}
		return str;
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
}
