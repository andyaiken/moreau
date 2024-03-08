import { Encounter, EncounterSlot, EncounterWave } from '../models/encounter';
import { ActionType, DamageType, DefenceType, MonsterOrigin, MonsterSize, MonsterType, PowerCategory, RoleFlag, RoleType, ThreatType, UsageType } from '../enums/enums';
import { Ability, Aura, DamageModifier, Monster, Regeneration, Role } from '../models/monster';
import { Power, PowerAction, PowerAttack } from '../models/power';
import { Utils } from '../utils/utils';

export class Factory {
	static createMonster: () => Monster = () => {
		return {
			id: Utils.guid(),
			name: '',
			details: '',
			size: MonsterSize.Medium,
			origin: MonsterOrigin.Natural,
			type: MonsterType.Humanoid,
			keywords: '',
			category: '',
			level: 1,
			role: this.createRole(),
			senses: '',
			movement: '6',
			alignment: 'Unaligned',
			languages: '',
			skills: '',
			equipment: '',
			tactics: '',
			strength: this.createAbility(),
			constitution: this.createAbility(),
			dexterity: this.createAbility(),
			intelligence: this.createAbility(),
			wisdom: this.createAbility(),
			charisma: this.createAbility(),
			hp: 1,
			initiative: 0,
			ac: 10,
			fortitude: 10,
			reflex: 10,
			will: 10,
			regeneration: null,
			auras: [],
			powers: [],
			damageModifiers: [],
			resist: '',
			vulnerable: '',
			immune: '',
			info: '',
			phenotype: ''
		};
	};

	static createRole: () => Role = () => {
		return {
			type: RoleType.Artillery,
			flag: RoleFlag.Standard,
			leader: false
		};
	};

	static createAbility: () => Ability = () => {
		return {
			score: 10,
			modifier: 0,
			cost: 0
		};
	};

	static createRegeneration: () => Regeneration = () => {
		return {
			value: 5,
			details: ''
		};
	};

	static createAura: () => Aura = () => {
		return {
			id: Utils.guid(),
			name: '',
			keywords: '',
			details: ''
		};
	};

	static createDamageModifier: () => DamageModifier = () => {
		return {
			type: DamageType.Fire,
			value: 0
		};
	};

	static createPower: () => Power = () => {
		return {
			id: Utils.guid(),
			name: '',
			action: null,
			keywords: '',
			condition: '',
			range: '',
			attack: null,
			description: '',
			details: '',
			damage: '',
			category: PowerCategory.Standard
		};
	};

	static createPowerAction: () => PowerAction = () => {
		return {
			action: ActionType.Standard,
			trigger: '',
			sustainAction: ActionType.None,
			use: UsageType.AtWill,
			recharge: ''
		};
	};

	static createPowerAttack: () => PowerAttack = () => {
		return {
			bonus: 0,
			defence: DefenceType.AC
		};
	};

	static createEncounter: () => Encounter = () => {
		return {
			id: Utils.guid(),
			name: '',
			waves: []
		};
	};

	static createEncounterWave: () => EncounterWave = () => {
		return {
			id: Utils.guid(),
			name: '',
			slots: []
		};
	};

	static createEncounterSlot: () => EncounterSlot = () => {
		return {
			id: Utils.guid(),
			threatType: ThreatType.Monster,
			threatID: '',
			count: 1
		};
	};
}
