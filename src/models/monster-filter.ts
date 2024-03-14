import { MonsterOrigin, MonsterSize, MonsterType, RoleFlag, RoleType } from '../enums/enums';

export interface MonsterFilter {
	text: string;
	level: number[];
	roleType: RoleType;
	roleFlag: RoleFlag;
	roleLeader: boolean;
	roleNonLeader: boolean;
	monsterSize: MonsterSize;
	monsterOrigin: MonsterOrigin;
	monsterType: MonsterType;
	showOfficial: boolean;
	showHomebrew: boolean;
}
