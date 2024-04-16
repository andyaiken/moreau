import { RoleFlag, RoleType, ThreatType } from '../enums/enums';
import { Encounter } from '../models/encounter';

const encounterTemplates: Encounter[] = [
	{
		id: 'bc',
		name: 'Battlefield Control',
		waves: [
			{
				id: 'wave1',
				name: 'wave',
				slots: [
					{
						id: 'slot1',
						templateLevel: 1,
						templateRoles: [ RoleType.Controller ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 1
					},
					{
						id: 'slot2',
						templateLevel: -2,
						templateRoles: [ RoleType.Skirmisher ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 6
					}
				]
			}
		]
	},
	{
		id: 'ct',
		name: 'Commander and Troops',
		waves: [
			{
				id: 'wave1',
				name: 'wave',
				slots: [
					{
						id: 'slot1',
						templateLevel: 3,
						templateRoles: [ RoleType.Controller, RoleType.Soldier ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 1
					},
					{
						id: 'slot2',
						templateLevel: -2,
						templateRoles: [ RoleType.Brute, RoleType.Soldier ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 5
					}
				]
			}
		]
	},
	{
		id: 'dd',
		name: 'Dragon\'s Den',
		waves: [
			{
				id: 'wave1',
				name: 'wave',
				slots: [
					{
						id: 'slot1',
						templateLevel: 0,
						templateRoles: [ RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier ],
						templateFlag: RoleFlag.Solo,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 1
					}
				]
			}
		]
	},
	{
		id: 'dl',
		name: 'Double Line',
		waves: [
			{
				id: 'wave1',
				name: 'Front Line',
				slots: [
					{
						id: 'slot1',
						templateLevel: 0,
						templateRoles: [ RoleType.Brute, RoleType.Soldier ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 3
					}
				]
			},
			{
				id: 'wave2',
				name: 'Rear Line',
				slots: [
					{
						id: 'slot1',
						templateLevel: 0,
						templateRoles: [ RoleType.Artillery, RoleType.Controller ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 2
					}
				]
			}
		]
	},
	{
		id: 'wp',
		name: 'Wolf Pack',
		waves: [
			{
				id: 'wave1',
				name: 'wave',
				slots: [
					{
						id: 'slot1',
						templateLevel: 0,
						templateRoles: [ RoleType.Skirmisher ],
						templateFlag: RoleFlag.Standard,
						threatType: ThreatType.Monster,
						threatID: '',
						count: 5
					}
				]
			}
		]
	}
];

export default encounterTemplates;
