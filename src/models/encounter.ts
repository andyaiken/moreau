import { ThreatType } from './enums';

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
	threatType: ThreatType;
	threatID: string;
	count: number;
}
