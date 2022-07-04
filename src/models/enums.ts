/* eslint no-unused-vars: 0 */

export enum MonsterSize {
	Tiny = 0,
	Small = 1,
	Medium = 2,
	Large = 3,
	Huge = 4,
	Gargantuan = 5,
	None = 6,
	Any = 7
};

export enum MonsterOrigin {
	Aberrant = 0,
	Elemental = 1,
	Fey = 2,
	Immortal = 3,
	Natural = 4,
	Shadow = 5,
	None = 6,
	Any = 7
};

export enum MonsterType {
	Animate = 0,
	Beast = 1,
	Humanoid = 2,
	MagicalBeast = 3,
	None = 4,
	Any = 5
};

export enum RoleType {
	Artillery = 0,
	Blaster = 1,
	Brute = 2,
	Controller = 3,
	Lurker = 4,
	Obstacle = 5,
	Skirmisher = 6,
	Soldier = 7,
	Warder = 8,
	None = 9,
	Any = 10
};

export enum RoleFlag {
	Standard = 0,
	Elite = 1,
	Solo = 2,
	Minion = 3,
	None = 4,
	Any = 5
};

export enum PowerCategory {
	Trait = 0,
	Standard = 1,
	Move = 2,
	Minor = 3,
	Free = 4,
	Triggered = 5
};

export enum DefenceType {
	AC = 0,
	Fortitude = 1,
	Reflex = 2,
	Will = 3
};

export enum ActionType {
	None = 0,
	Standard = 1,
	Move = 2,
	Minor = 3,
	Reaction = 4,
	Interrupt = 5,
	Opportunity = 6,
	Free = 7
};

export enum UseType {
	Encounter = 0,
	AtWill = 1,
	Basic = 2,
	Daily = 3
};

export enum DamageType {
	Untyped = 0,
	Acid = 1,
	Cold = 2,
	Fire = 3,
	Force = 4,
	Lightning = 5,
	Necrotic = 6,
	Poison = 7,
	Psychic = 8,
	Radiant = 9,
	Thunder = 10
};

export enum ThreatType {
	Monster = 0,
	Trap = 1
};

export class EnumHelper {
	public static monsterSize(value: MonsterSize) {
		switch (value) {
		case MonsterSize.Tiny: return 'Tiny';
		case MonsterSize.Small: return 'Small';
		case MonsterSize.Medium: return 'Medium';
		case MonsterSize.Large: return 'Large';
		case MonsterSize.Huge: return 'Huge';
		case MonsterSize.Gargantuan: return 'Gargantuan';
		case MonsterSize.None: return 'None';
		case MonsterSize.Any: return 'Any';
		}
	};

	public static monsterOrigin(value: MonsterOrigin) {
		switch (value) {
		case MonsterOrigin.Aberrant: return 'Aberrant';
		case MonsterOrigin.Elemental: return 'Elemental';
		case MonsterOrigin.Fey: return 'Fey';
		case MonsterOrigin.Immortal: return 'Immortal';
		case MonsterOrigin.Natural: return 'Natural';
		case MonsterOrigin.Shadow: return 'Shadow';
		case MonsterOrigin.None: return 'None';
		case MonsterOrigin.Any: return 'Any';
		}
	};

	public static monsterType(value: MonsterType) {
		switch (value) {
		case MonsterType.Animate: return 'Animate';
		case MonsterType.Beast: return 'Beast';
		case MonsterType.Humanoid: return 'Humanoid';
		case MonsterType.MagicalBeast: return 'Magical Beast';
		case MonsterType.None: return 'None';
		case MonsterType.Any: return 'Any';
		}
	};

	public static roleType(value: RoleType) {
		switch (value) {
		case RoleType.Artillery: return 'Artillery';
		case RoleType.Blaster: return 'Blaster';
		case RoleType.Brute: return 'Brute';
		case RoleType.Controller: return 'Controller';
		case RoleType.Lurker: return 'Lurker';
		case RoleType.Obstacle: return 'Obstacle';
		case RoleType.Skirmisher: return 'Skirmisher';
		case RoleType.Soldier: return 'Soldier';
		case RoleType.Warder: return 'Warder';
		case RoleType.None: return 'None';
		case RoleType.Any: return 'Any';
		}
	};

	public static roleFlag(value: RoleFlag) {
		switch (value) {
		case RoleFlag.Standard: return 'Standard';
		case RoleFlag.Elite: return 'Elite';
		case RoleFlag.Solo: return 'Solo';
		case RoleFlag.Minion: return 'Minion';
		case RoleFlag.None: return 'None';
		case RoleFlag.Any: return 'Any';
		}
	};

	public static powerCategory(value: PowerCategory) {
		switch (value) {
		case PowerCategory.Trait: return 'Trait';
		case PowerCategory.Standard: return 'Standard Action';
		case PowerCategory.Move: return 'Move Action';
		case PowerCategory.Minor: return 'Minor Action';
		case PowerCategory.Free: return 'Free Action';
		case PowerCategory.Triggered: return 'Triggered Action';
		}
	};

	public static defenceType(value: DefenceType) {
		switch (value) {
		case DefenceType.AC: return 'AC';
		case DefenceType.Fortitude: return 'Fortitude';
		case DefenceType.Reflex: return 'Reflex';
		case DefenceType.Will: return 'Will';
		}
	};

	public static actionType(value: ActionType) {
		switch (value) {
		case ActionType.None: return 'None';
		case ActionType.Standard: return 'Standard Action';
		case ActionType.Move: return 'Move Action';
		case ActionType.Minor: return 'Minor Action';
		case ActionType.Reaction: return 'Reaction Action';
		case ActionType.Interrupt: return 'Interrupt Action';
		case ActionType.Opportunity: return 'Opportunity Action';
		case ActionType.Free: return 'Free Action';
		}
	};

	public static useType(value: UseType) {
		switch (value) {
		case UseType.Encounter: return 'Encounter';
		case UseType.AtWill: return 'At Will';
		case UseType.Basic: return 'At Will (basic attack)';
		case UseType.Daily: return 'Daily';
		}
	};

	public static damageType(value: DamageType) {
		switch (value) {
		case DamageType.Untyped: return 'Untyped';
		case DamageType.Acid: return 'Acid';
		case DamageType.Cold: return 'Cold';
		case DamageType.Fire: return 'Fire';
		case DamageType.Force: return 'Force';
		case DamageType.Lightning: return 'Lightning';
		case DamageType.Necrotic: return 'Necrotic';
		case DamageType.Poison: return 'Poison';
		case DamageType.Psychic: return 'Psychic';
		case DamageType.Radiant: return 'Radiant';
		case DamageType.Thunder: return 'Thunder';
		}
	};

	public static threatType(value: ThreatType) {
		switch (value) {
		case ThreatType.Monster: return 'Monster';
		case ThreatType.Trap: return 'Trap';
		}
	};
};
