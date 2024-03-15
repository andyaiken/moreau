import { ActionType, DamageType, DefenceType, DifficultyLevel, MonsterOrigin, MonsterSize, MonsterType, PowerCategory, RoleFlag, RoleType, ThreatType, UsageType } from '../enums/enums';

export class EnumHelper {
	static monsterSize(value: MonsterSize) {
		switch (value) {
			case MonsterSize.Tiny: return 'Tiny';
			case MonsterSize.Small: return 'Small';
			case MonsterSize.Medium: return 'Medium';
			case MonsterSize.Large: return 'Large';
			case MonsterSize.Huge: return 'Huge';
			case MonsterSize.Gargantuan: return 'Gargantuan';
			case MonsterSize.None: return 'None';
			case MonsterSize.Any: return 'Any Size';
		}
	}

	static monsterOrigin(value: MonsterOrigin) {
		switch (value) {
			case MonsterOrigin.Aberrant: return 'Aberrant';
			case MonsterOrigin.Elemental: return 'Elemental';
			case MonsterOrigin.Fey: return 'Fey';
			case MonsterOrigin.Immortal: return 'Immortal';
			case MonsterOrigin.Natural: return 'Natural';
			case MonsterOrigin.Shadow: return 'Shadow';
			case MonsterOrigin.None: return 'None';
			case MonsterOrigin.Any: return 'Any Origin';
		}
	}

	static monsterType(value: MonsterType) {
		switch (value) {
			case MonsterType.Animate: return 'Animate';
			case MonsterType.Beast: return 'Beast';
			case MonsterType.Humanoid: return 'Humanoid';
			case MonsterType.MagicalBeast: return 'Magical Beast';
			case MonsterType.None: return 'None';
			case MonsterType.Any: return 'Any Type';
		}
	}

	static roleType(value: RoleType) {
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
			case RoleType.Any: return 'Any Role';
		}
	}

	static roleFlag(value: RoleFlag) {
		switch (value) {
			case RoleFlag.Standard: return 'Standard';
			case RoleFlag.Elite: return 'Elite';
			case RoleFlag.Solo: return 'Solo';
			case RoleFlag.Minion: return 'Minion';
			case RoleFlag.None: return 'None';
			case RoleFlag.Any: return 'Any Modifier';
		}
	}

	static powerCategory(value: PowerCategory) {
		switch (value) {
			case PowerCategory.Trait: return 'Trait';
			case PowerCategory.Standard: return 'Standard Action';
			case PowerCategory.Move: return 'Move Action';
			case PowerCategory.Minor: return 'Minor Action';
			case PowerCategory.Free: return 'Free Action';
			case PowerCategory.Triggered: return 'Triggered Action';
		}
	}

	static defenceType(value: DefenceType) {
		switch (value) {
			case DefenceType.AC: return 'AC';
			case DefenceType.Fortitude: return 'Fortitude';
			case DefenceType.Reflex: return 'Reflex';
			case DefenceType.Will: return 'Will';
		}
	}

	static actionType(value: ActionType) {
		switch (value) {
			case ActionType.None: return 'None';
			case ActionType.Standard: return 'Standard Action';
			case ActionType.Move: return 'Move Action';
			case ActionType.Minor: return 'Minor Action';
			case ActionType.Reaction: return 'Reaction';
			case ActionType.Interrupt: return 'Interrupt Action';
			case ActionType.Opportunity: return 'Opportunity Action';
			case ActionType.Free: return 'Free Action';
		}
	}

	static usageType(value: UsageType) {
		switch (value) {
			case UsageType.Encounter: return 'Encounter';
			case UsageType.AtWill: return 'At Will';
			case UsageType.Basic: return 'At Will (basic attack)';
			case UsageType.Daily: return 'Daily';
		}
	}

	static damageType(value: DamageType) {
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
	}

	static threatType(value: ThreatType) {
		switch (value) {
			case ThreatType.Monster: return 'Monster';
			case ThreatType.Trap: return 'Trap';
		}
	}

	static difficultyLevel(value: DifficultyLevel) {
		switch (value) {
			case DifficultyLevel.Trivial: return 'Trivial';
			case DifficultyLevel.Easy: return 'Easy';
			case DifficultyLevel.Moderate: return 'Moderate';
			case DifficultyLevel.Hard: return 'Hard';
			case DifficultyLevel.Extreme: return 'Extreme';
		}
	}
}
