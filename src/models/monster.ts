import { DamageType, MonsterSize, MonsterOrigin, MonsterType, RoleType, RoleFlag } from '../enums/enums';
import { Power } from './power';

export interface Role {
	type: RoleType;
	flag: RoleFlag;
	leader: boolean;
}

export interface Ability {
	score: number;
}

export interface Regeneration {
	value: number;
	details: string;
}

export interface Aura {
	id: string;
	name: string;
	keywords: string;
	details: string;
}

export interface DamageModifier {
	type: DamageType;
	value: number;
}

export interface Monster {
	id: string;
	name: string;
	details: string;

	size: MonsterSize;
	origin: MonsterOrigin;
	type: MonsterType;
	keywords: string;
	category: string;
	level: number;
	role: Role;

	senses: string;
	movement: string;
	alignment: string;
	languages: string;
	skills: string;
	equipment: string;
	tactics: string;

	// Ability scores
	strength: Ability;
	constitution: Ability;
	dexterity: Ability;
	intelligence: Ability;
	wisdom: Ability;
	charisma: Ability;

	hp: number;
	initiative: number;

	// Defences
	ac: number;
	fortitude: number;
	reflex: number;
	will: number;

	regeneration: Regeneration | null;
	auras: Aura[];
	powers: Power[];

	damageModifiers: DamageModifier[];
	resist: string;
	vulnerable: string;
	immune: string;
}
