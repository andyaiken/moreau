import { ActionType, DefenceType, PowerCategory, UseType } from './enums';

export interface PowerAction {
	action: ActionType;
	trigger: string;
	sustainAction: ActionType;
	use: UseType;
	recharge: string;
};

export interface PowerAttack {
	bonus: number;
	defence: DefenceType;
};

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

	// TODO: Remove the damage field - it's not used
	damage: string;

	// TODO: Remove the category field - it's not used
	category: PowerCategory;
};
