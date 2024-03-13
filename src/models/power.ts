import { ActionType, DefenceType, UsageType } from '../enums/enums';

export interface PowerAction {
	action: ActionType;
	trigger: string;
	sustainAction: ActionType;
	use: UsageType;
	recharge: string;
}

export interface PowerAttack {
	bonus: number;
	defence: DefenceType;
}

export interface Power {
	id: string;
	name: string;
	action: PowerAction | null;
	keywords: string;
	condition: string;
	range: string;
	attack: PowerAttack | null;
	description: string;
	details: string;
}
