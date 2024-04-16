import { ActionType, DamageType, DefenceType, MonsterOrigin, MonsterSize, MonsterType, PowerCategory, RoleFlag, RoleType, ThreatType, UsageType } from '../enums/enums';

import { Encounter, EncounterSlot, EncounterWave } from '../models/encounter';
import { Ability, Aura, DamageModifier, Monster, Regeneration, Role } from '../models/monster';
import { MonsterFilter } from '../models/monster-filter';
import { Power, PowerAction, PowerAttack } from '../models/power';

import { Utils } from '../utils/utils';

export class Factory {
	static createMonster = (): Monster => {
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
			immune: ''
		};
	};

	static createRole = (): Role => {
		return {
			type: RoleType.Artillery,
			flag: RoleFlag.Standard,
			leader: false
		};
	};

	static createAbility = (): Ability => {
		return {
			score: 10
		};
	};

	static createRegeneration = (): Regeneration => {
		return {
			value: 5,
			details: ''
		};
	};

	static createAura = (): Aura => {
		return {
			id: Utils.guid(),
			name: '',
			keywords: '',
			details: ''
		};
	};

	static createDamageModifier = (): DamageModifier => {
		return {
			type: DamageType.Fire,
			value: 0
		};
	};

	static createPower = (category: PowerCategory): Power => {
		let action = ActionType.Standard;
		switch (category) {
			case PowerCategory.Trait:
				action = ActionType.None;
				break;
			case PowerCategory.Move:
				action = ActionType.Move;
				break;
			case PowerCategory.Minor:
				action = ActionType.Minor;
				break;
			case PowerCategory.Free:
				action = ActionType.Free;
				break;
			case PowerCategory.Triggered:
				action = ActionType.Reaction;
				break;
		}

		return {
			id: Utils.guid(),
			name: '',
			action: Factory.createPowerAction(action),
			keywords: '',
			condition: '',
			range: '',
			attack: null,
			description: '',
			details: ''
		};
	};

	static createPowerAction = (type: ActionType): PowerAction => {
		return {
			action: type,
			trigger: '',
			sustainAction: ActionType.None,
			use: UsageType.AtWill,
			recharge: ''
		};
	};

	static createPowerAttack = (): PowerAttack => {
		return {
			bonus: 0,
			defence: DefenceType.AC
		};
	};

	static createMonsterFilter = (): MonsterFilter => {
		return {
			text: '',
			level: [1, 5],
			roleType: RoleType.Any,
			roleFlag: RoleFlag.Any,
			roleLeader: true,
			roleNonLeader: true,
			monsterSize: MonsterSize.Any,
			monsterOrigin: MonsterOrigin.Any,
			monsterType: MonsterType.Any,
			showOfficial: true,
			showHomebrew: true
		};
	};

	static createEncounter = (): Encounter => {
		return {
			id: Utils.guid(),
			name: '',
			waves: [ Factory.createEncounterWave() ]
		};
	};

	static createEncounterWave = (): EncounterWave => {
		return {
			id: Utils.guid(),
			name: '',
			slots: []
		};
	};

	static createEncounterSlot = (): EncounterSlot => {
		return {
			id: Utils.guid(),
			templateLevel: 0,
			templateRoles: [ RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier ],
			templateFlag: RoleFlag.Standard,
			threatType: ThreatType.Monster,
			threatID: '',
			count: 1
		};
	};
}
