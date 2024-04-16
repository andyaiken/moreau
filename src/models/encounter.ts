import { RoleFlag, RoleType, ThreatType } from '../enums/enums';

export interface Encounter {
	id: string;
	name: string;
	waves: EncounterWave[];
}

export interface EncounterWave {
	id: string;
	name: string;
	slots: EncounterSlot[];
}

export interface EncounterSlot {
	id: string;
	templateLevel: number;
	templateRoles: RoleType[];
	templateFlag: RoleFlag,
	threatType: ThreatType;
	threatID: string;
	count: number;
}
