import { Monster } from '../../models/monster';

const monsters: Monster[] = [
	{
		id: '1382daa8-3198-423e-91b1-a6caf2d44cf3',
		name: 'Frost Giant Hunter',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Athletics +17, Endurance +16, Stealth +16',
		equipment: 'crossbow; hide armor',
		category: 'Giant',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 114,
		initiative: 16,
		ac: 27,
		fortitude: 27,
		reflex: 26,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4664433e-e414-4bcb-9411-62e2c3d6c7b7',
				name: 'Icy Harpoon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+5 cold damage.',
				damage: '2d10+5 cold damage',
				category: 1
			},
			{
				id: '47b45637-b4c6-4d78-a8ee-6e1372869c98',
				name: 'Icy Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '3d6+5 cold damage.',
				damage: '3d6+5 cold damage',
				category: 1
			},
			{
				id: '9e049360-7f78-4bc8-9bdf-3661a7125284',
				name: 'Skewering Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 3d10+5 cold damage, and the target slides 3 squares and is slowed (save ends).',
				damage: '3d10+5 cold damage',
				category: 1
			},
			{
				id: '457f993e-7a85-4191-b9a3-109d6243795a',
				name: 'Opening Strike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant gains combat advantage against enemies that have not yet acted during an encounter.',
				damage: '',
				category: 0
			},
			{
				id: 'ce1618e0-5150-4e47-bfb9-16f3ef555644',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant deals an extra 1d10 damage against any target it has combat advantage against.',
				damage: 'the frost giant deals an extra 1d10 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: 'f29f1e58-8050-4dee-bd7f-8bff90c1074e',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides a frost giant, the giant moves 2 squares less than the effect specifies. Also, a frost giant can make a saving throw to avoid being knocked prone.',
				damage: 'the giant moves 2 squares less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Artillery',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: '6167f893-9cbc-44c1-9162-cdd7f92df5bc',
		name: 'Frost Giant Marauder',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 17,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Giant',
		skills: 'Athletics +19',
		equipment: 'handaxe; hide armor',
		category: 'Giant',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 168,
		initiative: 14,
		ac: 31,
		fortitude: 30,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eb7a3410-712a-4490-8219-abe55a6a254a',
				name: 'Icy Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+8 cold damage; hit or miss, the frost giant may shift 2 squares after the attack.',
				damage: '2d8+8 cold damage',
				category: 1
			},
			{
				id: 'ffc37d57-ae84-4a6c-96ad-2fb26c26bea7',
				name: 'Icy Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d6+6 cold damage; hit or miss, the frost giant may shift 2 squares after the attack.',
				damage: '2d6+6 cold damage',
				category: 1
			},
			{
				id: '87e5702f-abd4-4ade-8bca-1cf5e2f91ed0',
				name: 'Hurling Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d8+8 cold damage; hit or miss, the frost giant then makes a charge against the target.',
				damage: '1d8+8 cold damage',
				category: 1
			},
			{
				id: '8d326d5e-bf5e-4007-9ebc-b6dbf31070d8',
				name: 'Twin Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant makes two icy handaxe attacks; the frost giant may shift 2 squares after the first attack.',
				damage: 'the frost giant may shift 2 squares after the first attack',
				category: 1
			},
			{
				id: '9beb1491-62d3-48cc-8c3a-37c8e1c67bc9',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides a frost giant, the giant moves 2 squares less than the effect specifies. Also, a frost giant can make a saving throw to avoid being knocked prone.',
				damage: 'the giant moves 2 squares less than the effect specifies',
				category: 0
			},
			{
				id: 'e972b131-c3fb-46d6-b608-9b058c8fdcb5',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Skirmisher',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: 'e0cd846d-d842-4da5-9f33-c5bdb87c240d',
		name: 'Frost Giant Raider',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Giant',
		skills: 'Athletics +19',
		equipment: 'greataxe; handaxe; hide armor',
		category: 'Giant',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 11,
		ac: 29,
		fortitude: 32,
		reflex: 27,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2d2c1346-1e9d-4fdd-91f6-ce1df891ffd0',
				name: 'Icy Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 10 cold damage.',
				damage: '10 cold damage',
				category: 1
			},
			{
				id: '490afe75-c548-412a-9b56-808f3e7c5a29',
				name: 'Dying Swipe',
				action: null,
				keywords: '',
				condition: 'when the frost giant drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant makes an icy greataxe attack.',
				damage: '',
				category: 0
			},
			{
				id: 'f4484c57-54db-49cc-a9ea-9113f60f8f85',
				name: 'Icy Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '9 cold damage.',
				damage: '9 cold damage',
				category: 1
			},
			{
				id: '67c59318-c221-4373-84aa-81ab04615c2b',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides a frost giant, the giant moves 2 squares less than the effect specifies. Also, a frost giant can make a saving throw to avoid being knocked prone.',
				damage: 'the giant moves 2 squares less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Minion',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: '93e0380c-4df2-490c-9be6-9226a51b04ba',
		name: 'Frost Giant Sword Wraith',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'cold, giant, undead',
		level: 17,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: 'fly 8 (hover); phasing; see also shadow glide',
		alignment: 'Chaotic Evil',
		languages: 'Giant',
		skills: 'Stealth +20',
		equipment: '',
		category: 'Giant',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 90,
		initiative: 19,
		ac: 30,
		fortitude: 29,
		reflex: 30,
		will: 32,
		regeneration: {
			value: 10,
			details: 'if the sword wraith takes radiant damage, regeneration is negated until the end of the sword wraith’s next turn'
		},
		auras: [],
		powers: [
			{
				id: '72f1ca68-eec7-4af4-b693-dee5f9cbac82',
				name: 'Shadow Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d8+7 necrotic damage, and the target is weakened (save ends).',
				damage: '2d8+7 necrotic damage',
				category: 1
			},
			{
				id: '5a116ff2-3768-4611-b21f-84c542c2ac5c',
				name: 'Death Strike',
				action: null,
				keywords: 'Cold, Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'The sword wraith shifts 4 squares and makes a melee basic attack, dealing an extra 2d8 cold and necrotic damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '7e4c4eef-68ed-44b8-8716-0221737e1848',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Cold, Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sword wraith deals an extra 2d6 cold and necrotic damage against any target it has combat advantage against.',
				damage: 'the sword wraith deals an extra 2d6 cold and necrotic damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '77958156-9b7e-4f8d-8148-44a2322bf746',
				name: 'Shadow Glide',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sword wraith shifts 6 squares.',
				damage: 'The sword wraith shifts 6 squares',
				category: 2
			},
			{
				id: 'd4f446c2-b5b0-4826-a989-f171f972ab93',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a sword wraith rises as a free-willed sword wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			},
			{
				type: 6,
				value: -20
			}
		],
		resist: 'insubstantial',
		vulnerable: '10 radiant (see also regeneration above)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Lurker',
		phenotype: 'Large shadow humanoid (cold, giant, undead)'
	},
	{
		id: 'dd1d528f-5d58-4507-afb1-4505a7defd28',
		name: 'Frost Giant Warchief',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 20,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant, Primordial',
		skills: 'Athletics +23',
		equipment: 'greataxe; handaxe; hide armor',
		category: 'Giant',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 233,
		initiative: 15,
		ac: 32,
		fortitude: 32,
		reflex: 30,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '26d30cad-4ffc-48d5-867f-17b8a25cf3af',
				name: 'Icy Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6+9 (crit 8d6 + 33) cold damage.',
				damage: '4d6+9 (crit 8d6 + 33) cold damage',
				category: 1
			},
			{
				id: 'df54b76f-6a39-4944-8032-d1f972912115',
				name: 'Dying Swipe',
				action: null,
				keywords: '',
				condition: 'when the frost giant drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The frost giant makes an icy greataxe attack.',
				damage: '',
				category: 0
			},
			{
				id: 'f062f512-6fdb-4cc0-b226-df0f17ec7f22',
				name: 'Chilling Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+9 cold damage, and the target gains vulnerable 10 cold (save ends).',
				damage: '2d6+9 cold damage',
				category: 1
			},
			{
				id: '72ec2a34-97c2-48f4-ab33-9cd8d186090c',
				name: 'Icy Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d8+9 cold damage.',
				damage: '2d8+9 cold damage',
				category: 1
			},
			{
				id: 'c51336c1-e0f6-4c58-99e9-5da28c16b0a1',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides a frost giant, the giant moves 2 squares less than the effect specifies. Also, a frost giant can make a saving throw to avoid being knocked prone.',
				damage: 'the giant moves 2 squares less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Brute',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: 'c1b34d64-c562-46f1-811c-4e34c4cb88b9',
		name: 'Frost Giant Windkeeper',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 16,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +20',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Arcana +17, Nature +20, Religion +17',
		equipment: 'drum; hide armor; longspear',
		category: 'Giant',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 158,
		initiative: 13,
		ac: 30,
		fortitude: 31,
		reflex: 30,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ac4becdc-3987-4339-8430-793b3ad4ec84',
				name: 'Spear of Storms',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+5 cold damage, and the target slides 3 squares.',
				damage: '2d10+5 cold damage',
				category: 1
			},
			{
				id: '3fa69ca9-a375-464d-91f9-e9419a50b93d',
				name: 'Arctic Vortex',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '2d6+5 cold damage, and the target slides 3 squares.',
				damage: '2d6+5 cold damage',
				category: 1
			},
			{
				id: '5bf7a5bd-e783-4529-96b8-20587c9eba3a',
				name: 'Driving Blizzard',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d6+5 cold damage, and the target is immobilized (save ends). Until the end of the encounter, the area becomes difficult terrain for creatures smaller than Large size.',
				damage: '3d6+5 cold damage',
				category: 1
			},
			{
				id: 'a19a3a3a-9727-49df-8259-791c5425b22d',
				name: 'Gale of the North Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'targets enemies only; 4d10+5 cold damage, and the target is pushed 2 squares and knocked prone. Miss: Half damage and push 1 square.',
				damage: '4d10+5 cold damage',
				category: 1
			},
			{
				id: '73057ef6-f0ce-403c-8960-774e27f4629e',
				name: 'Drums of the North',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Implement',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is pushed 2 squares and slowed until the end of the frost giant’s next turn. Allies in the burst immediately shift 3 squares. The frost giant must sheath his longspear to play the drum.',
				damage: 'the target is pushed 2 squares and slowed until the end of the frost giant’s next turn',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Controller (L)',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: '58658952-25fe-4d4d-8b24-82a2c7b578b8',
		name: 'Frostfell Harrier',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'cold',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10',
		movement: '5, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 14,
		ac: 27,
		fortitude: 24,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '18cfc9c3-d005-474b-8afe-813cc739fc42',
				name: 'Frostfield',
				keywords: '',
				details: 'aura 1; each enemy within the aura takes a –2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: 'ea4a652a-b953-4e15-ae80-283dca72c8d7',
				name: 'Ice Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '9 cold damage.',
				damage: '9 cold damage',
				category: 1
			},
			{
				id: '14ae560d-89c4-4760-8868-fed065c7d12b',
				name: 'Ice Slide',
				action: {
					action: 4,
					trigger: 'when a melee attack misses the frostfell harrier',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes 4 cold damage and slides 3 squares.',
				damage: 'the attacker takes 4 cold damage and slides 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Medium elemental beast (cold)'
	},
	{
		id: '369aa635-8a2d-4920-b5dc-294825b2b923',
		name: 'Frostfell Harrower',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'cold',
		level: 20,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14',
		movement: '5, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 19,
		ac: 34,
		fortitude: 32,
		reflex: 34,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: 'd90bbefb-8332-4d6a-8631-ce8748eabe33',
				name: 'Frostfield',
				keywords: '',
				details: 'aura 1; each enemy within the aura takes a –2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '330382a9-a155-4cb8-bb26-157a8c350b57',
				name: 'Ice Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: '15 cold damage.',
				damage: '15 cold damage',
				category: 1
			},
			{
				id: '2ff46000-6975-46cc-b81b-69da04eb7db8',
				name: 'Ice Slide',
				action: {
					action: 4,
					trigger: 'when a melee attack misses the frostfell harrower',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes 7 cold damage and slides 3 squares.',
				damage: 'the attacker takes 7 cold damage and slides 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 20 Minion',
		phenotype: 'Medium elemental beast (cold)'
	},
	{
		id: '74e3ef39-573f-4c8d-9b7b-bd192e9d906e',
		name: 'Galeb Duhr Stoneshaper',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'earth',
		level: 10,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; tremorsense 10',
		movement: '4 (earth walk), burrow 6',
		alignment: 'Unaligned',
		languages: 'Dwarven, Giant',
		skills: 'Stealth +13',
		equipment: '',
		category: 'Galeb Duhr',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 86,
		initiative: 8,
		ac: 22,
		fortitude: 23,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8f1e9705-8969-4523-bcdb-770cf961139b',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '2297626e-d428-46ca-820c-9f487d67394b',
				name: 'Stone Shard',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d6+5 damage. The stoneshaper can create shards to hurl when none are present.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '7931c69f-ec2d-43fe-80af-36b67e88e759',
				name: 'Stone Wall',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'The stoneshaper calls forth a wall of stone. Close burst 2',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '1d10+6 damage, and the target is pushed 1 square and knocked prone. The stoneshaper gains +2 to all defenses until the beginning of its next turn.',
				damage: '1d10+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'petrification, poison',
		tactics: '',

		info: 'Level 10 Artillery',
		phenotype: 'Medium elemental humanoid (earth)'
	},
	{
		id: '85cb066d-648c-4216-a20b-c54b16b01ef4',
		name: 'Ghost Worg Packmate',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'undead',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '8, fly 6 (hover); phasing',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 14,
		ac: 29,
		fortitude: 30,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: '19a18507-44d8-4134-9168-2f03c82168a6',
				name: 'Death Mist',
				keywords: '',
				details: 'aura 1; enemies that enter or start their turn in the aura take 10 necrotic damage.'
			}
		],
		powers: [
			{
				id: '0550564e-e352-4831-a59f-b20919d924b2',
				name: 'Ghost Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '12 necrotic damage.',
				damage: '12 necrotic damage',
				category: 1
			},
			{
				id: 'ce83850b-ce4d-4143-a691-8c9398430b4c',
				name: 'Insubstantial Defense',
				action: {
					action: 7,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ghost worg makes a saving throw. If the save succeeds, the attack passes harmlessly through the ghost worg’s form.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Minion',
		phenotype: 'Large shadow beast (undead)'
	},
	{
		id: '4e261504-2fbe-479b-a643-5573c3ffa016',
		name: 'Gorrick Frostcaller',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 18,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +14',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant, Primordial',
		skills: 'Arcana +20, Bluff +17, Diplomacy +17, History +20, Thievery +17',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 172,
		initiative: 12,
		ac: 32,
		fortitude: 30,
		reflex: 31,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd7a059ee-ddd1-440b-9443-ded9174339c0',
				name: 'Frost Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8+6 cold damage, and the target is immobilized until the end of Gorrick’s next turn.',
				damage: '2d8+6 cold damage',
				category: 1
			},
			{
				id: '7d493d9c-422f-4bb0-9073-91e1976774ab',
				name: 'Ray of Frost',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '2d10+6 cold damage, and the target is slowed until the end of Gorrick’s next turn.',
				damage: '2d10+6 cold damage',
				category: 1
			},
			{
				id: 'ff02f59f-f7aa-493c-888c-21b21e110018',
				name: 'Ice Tomb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '3d10+6 cold damage, and the target is entombed in a block of ice until the end of Gorrick’s next turn. While entombed, the target is stunned, and attacks cannot gain line of effect against the target.',
				damage: '3d10+6 cold damage',
				category: 1
			},
			{
				id: 'ceca98a3-4b5e-41ec-863d-efbb04a6ad83',
				name: 'Elemental Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: null,
				description: '',
				details: 'targets one elemental ally; the elemental ally makes a basic attack with a +4 bonus to the attack roll and damage roll.',
				damage: 'the elemental ally makes a basic attack with a +4 bonus to the attack roll and damage roll',
				category: 1
			},
			{
				id: 'decc93e1-17ef-459a-8fe1-cf6749bab3ac',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Gorrick moves 2 squares fewer than any forced movement specifies. He makes a saving throw to avoid being knocked prone.',
				damage: 'Gorrick moves 2 squares fewer than any forced movement specifies',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Controller (L)',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: '8a5e67f3-de0f-4f43-bfea-487ff67e7b47',
		name: 'Haunted Armor Animus',
		details: '',
		size: 2,
		origin: 3,
		type: 0,
		keywords: 'undead',
		level: 19,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: 'heavy shield; longsword',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 14,
		ac: 35,
		fortitude: 31,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd1c6f63d-a4b7-4d9e-aa17-39875f17c22e',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '12 necrotic damage.',
				damage: '12 necrotic damage',
				category: 1
			},
			{
				id: 'fad8fe02-85c5-4b13-afe0-456fd80672c8',
				name: 'Ectoplasmic Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the haunted armor animus drops to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: '12 necrotic damage and the target is dazed (save ends).',
				damage: '12 necrotic damage and the target is dazed (save ends)',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 7,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Minion',
		phenotype: 'Medium immortal animate (undead)'
	},
	{
		id: '1ff1a0ca-98ea-4e0f-b2d4-553a60dc09b0',
		name: 'Hill Giant Battlechief',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'giant',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: 'Athletics +18, Intimidate +14, Stealth +16',
		equipment: 'battleaxe; hide armor',
		category: 'Giant',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 144,
		initiative: 13,
		ac: 28,
		fortitude: 28,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '275877a4-5c95-40fe-9440-5c51f37fe61e',
				name: 'Battleaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+8 damage.',
				damage: '2d10+8 damage',
				category: 1
			},
			{
				id: 'faf4db2e-7d23-43a8-843e-d0b8b691adc9',
				name: 'Inspiring Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+8 damage, and all allies within 10 squares heal 15 hit points.',
				damage: '3d10+8 damage',
				category: 1
			},
			{
				id: '4c822013-b6c2-4674-913f-30fbe0440ed2',
				name: 'Frenzied Advance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'allies within the burst shift 3 squares.',
				damage: 'allies within the burst shift 3 squares',
				category: 3
			},
			{
				id: 'e7b1a292-75c3-4fbc-adea-254da528f848',
				name: 'Battle Weave',
				action: {
					action: 4,
					trigger: 'when an attack hits or misses the hill giant',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hill giant battlechief shifts up to 3 squares and gains combat advantage against all enemies until the end of his next turn.',
				damage: 'The hill giant battlechief shifts up to 3 squares and gains combat advantage against all enemies until the end of his next turn',
				category: 5
			},
			{
				id: '9dc397b0-efc4-4c22-ad9f-af24a0d71c3a',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hill giant battlechief deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the hill giant battlechief deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Skirmisher (L)',
		phenotype: 'Large natural humanoid (giant)'
	},
	{
		id: '4cc5fb27-e823-4223-897b-b9483152ae46',
		name: 'Hill Giant Grunt',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'giant',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Giant',
		skills: 'Athletics +15',
		equipment: 'greatclub; hide armor',
		category: 'Giant',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		intelligence: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 25,
		fortitude: 27,
		reflex: 21,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '796078da-28b2-4297-96c3-bc7908789f18',
				name: 'Greatclub',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 9 damage and the target is pushed 1 square.',
				damage: '9 damage and the target is pushed 1 square',
				category: 1
			},
			{
				id: '6a096798-b9d1-45e0-bde9-549585f11fed',
				name: 'Hurl Rock',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 8/16',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '9 damage.',
				damage: '9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Large natural humanoid (giant)'
	},
	{
		id: '35ca5fce-2099-4894-98fe-a82c4ae92ee1',
		name: 'Hill Giant High Shaman',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'giant',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: 'Arcana +13, Nature +13',
		equipment: 'hide armor',
		category: 'Giant',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 262,
		initiative: 9,
		ac: 27,
		fortitude: 25,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f71afd76-60d2-4cc7-a3a8-50189079eb92',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'ee8f21d6-066a-47aa-b6dd-35c354687147',
				name: 'Whisper of Pain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '1d10+6 damage, and the hill giant shaman and his allies gain a +1 bonus to attack rolls against the target until the end of the hill giant shaman’s next turn.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '9be975d1-85d6-439f-8b4a-785279d6a673',
				name: 'Earthrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'targets enemies only; 1d10+6 damage, and target is knocked prone.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '7deb33e0-112a-4146-9e53-37b515804031',
				name: 'Earthstorm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: 'Requires quarterstaff. Close blast 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '3d10+6 damage, and the target is pushed 1 square and blinded (save ends).',
				damage: '3d10+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Controller',
		phenotype: 'Large natural humanoid (giant)'
	},
	{
		id: 'd459716c-3506-4a11-946d-07eb3c91f6bb',
		name: 'Hill Giant Shaman',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'giant',
		level: 13,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: 'Arcana +13, Nature +13',
		equipment: 'hide armor',
		category: 'Giant',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 131,
		initiative: 9,
		ac: 27,
		fortitude: 25,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a16a58d1-d71a-4781-a6e1-663744ef41c4',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'eee3094a-4ed3-479c-b799-3efb6a529410',
				name: 'Earthstorm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: 'Requires quarterstaff. Close blast 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '3d10+6 damage, and the target is pushed 1 square and blinded (save ends).',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: '76771726-91dd-47bd-bdd4-79ca49c65ae8',
				name: 'Volcanic Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Weapon',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d10+6 damage, and target gains vulnerable 5 fire (save ends).',
				damage: '1d10+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Controller',
		phenotype: 'Large natural humanoid (giant)'
	},
	{
		id: '653997cb-d0fa-4a71-b07a-cb3eb4be2b2a',
		name: 'Hill Giant Slinger',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'giant',
		level: 14,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Giant',
		skills: 'Acrobatics +17, Nature +15, Stealth +17',
		equipment: 'hide armor; sling',
		category: 'Giant',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 112,
		initiative: 12,
		ac: 26,
		fortitude: 26,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '32f3329a-eeac-4749-b694-fca423097b7d',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '5ca76ee3-8baa-47f6-9c57-cf956b93f5cd',
				name: 'Sling',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '157edc62-d02a-44e9-b40a-c3840291eaf1',
				name: 'Special Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+6 damage, and target is slowed and takes ongoing 5 acid damage (save ends both).',
				damage: '2d8+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Artillery',
		phenotype: 'Large natural humanoid (giant)'
	},
	{
		id: 'd78a767f-a886-42e8-a4d4-3279725ef7a6',
		name: 'King Snarr',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'giant',
		level: 18,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Arcana +18, Endurance +21, Intimidate +20',
		equipment: 'maul',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 428,
		initiative: 16,
		ac: 30,
		fortitude: 30,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '69055fae-60ac-49cc-8166-264ee1c61545',
				name: 'Searing Maul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+7 damage plus 2d8 fire damage.',
				damage: '2d8+7 damage plus 2d8 fire damage',
				category: 1
			},
			{
				id: '8fa4ad79-c357-46e0-96a1-696157ccbc60',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'King Snarr makes two searing maul attacks.',
				damage: '',
				category: 1
			},
			{
				id: '0e94e397-51b0-4b5d-b453-8453072a886f',
				name: 'Thundering Smash',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Thunder, Weapon',
				condition: '',
				range: 'close blast 3',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Requires maul; 3d8+7 damage plus 2d8 fire and thunder damage, and the target is pushed 2 squares and dazed (save ends).',
				damage: '3d8+7 damage plus 2d8 fire and thunder damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Elite Brute',
		phenotype: 'Large elemental humanoid (giant)'
	},
	{
		id: 'b00cc24c-1559-4b2a-b600-10effa71fff1',
		name: 'Ogre Warrior',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'club; hide armor; javelin',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 115,
		initiative: 10,
		ac: 25,
		fortitude: 24,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2335ebbc-5cbb-4fdd-8860-e91f1e9de77c',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+5 damage; see also skirmish.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'd9cddc1b-2d1f-4ac8-9f0a-54c32af6b7be',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage; see also skirmish.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '1bef1d51-9cbd-47bc-afa9-622afca68e61',
				name: 'Hurling Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ogre warrior makes a javelin attack followed by a charge attack.',
				damage: '',
				category: 1
			},
			{
				id: 'd0adef03-3a87-4af1-be98-1c3e43922470',
				name: 'Skirmish +1d10',
				action: null,
				keywords: '',
				condition: '',
				range: 'If, on its turn, the ogre warrior ends its move at least 4 squares away from its starting point, it deals an extra 1d10 damage on its melee attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Skirmisher',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'e9a2f186-e0bc-4c6c-8805-6b80d183e733',
		name: 'Orc Mercenary',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: 'Endurance +14, Intimidate +9',
		equipment: 'greataxe; handaxe; leather armor',
		category: 'Orc',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 120,
		initiative: 11,
		ac: 26,
		fortitude: 25,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f2861f6f-91bf-48f9-875d-23a3749f5e28',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d12+5 damage (crit 1d12 + 17).',
				damage: '1d12+5 damage (crit 1d12 + 17)',
				category: 1
			},
			{
				id: 'b76cb9c1-4c04-4a6e-906b-81d54734da07',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage; see also killer’s eye.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'cfdb23ef-e88e-4879-bd32-f133695ace47',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: 'The orc mercenary makes a melee basic attack and regains 30 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '99963bb0-60e0-4f64-bf89-d579f3e07c7d',
				name: 'Killer’s Eye',
				action: null,
				keywords: '',
				condition: '',
				range: 'When making a ranged attack, the orc mercenary ignores cover and concealment (but not total concealment) if the target is within 5 squares of it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4db4cee2-f3f0-426a-9fea-e6ab8167e2a3',
		name: 'Piranoth (Diminished State)',
		details: '',
		size: 4,
		origin: 1,
		type: 1,
		keywords: 'primordial',
		level: 19,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 752,
		initiative: 0,
		ac: 30,
		fortitude: 31,
		reflex: 30,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: 'eaa2b0c5-feb1-4557-9e5e-e76b9988d890',
				name: 'Cloud of Elemental Chaos',
				keywords: '',
				details: 'aura 3; each enemy that starts its turn in the aura takes damage; roll 1d6: 1–3, 10 fire damage; 4–5, 10 cold damage; 6, 15 cold and fire damage.'
			}
		],
		powers: [
			{
				id: '60f60c8a-d30f-4762-89af-25ba9124d10c',
				name: 'Magma Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d6+8 fire damage.',
				damage: '3d6+8 fire damage',
				category: 1
			},
			{
				id: '1ccd5f7b-c304-4aaa-af75-ae444f556dec',
				name: 'Arctic Whip',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '(standard',
				range: 'Ranged 30',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '2d6+7 cold damage, and the target is slowed (save ends).',
				damage: '2d6+7 cold damage',
				category: 1
			},
			{
				id: '3b4d24df-fc13-4c4c-8584-379a1dc06065',
				name: 'Earthen Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '1d10+8 damage, and the target is pushed 3 squares.',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: '3ac78d89-047a-4597-8bf5-ee118d33ae12',
				name: 'Icefire Slash',
				action: {
					action: 4,
					trigger: 'when an attack misses piranoth',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 1d10+8 cold and fire damage.',
				damage: '1d10+8 cold and fire damage',
				category: 5
			},
			{
				id: '509a155c-d554-4bd0-823c-d9acb45ec67b',
				name: 'Elemental Torrent',
				action: {
					action: 1,
					trigger: 'recharges each time piranoth spends an action point',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '4d8+7 cold and fire damage, and the target slides 2 squares and is immobilized (save ends).',
				damage: '4d8+7 cold and fire damage',
				category: 5
			},
			{
				id: '41a905a6-82d4-45e3-8e51-30d110de37a8',
				name: 'Chaos Jump',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Piranoth teleports 10 squares. Any enemies adjacent to Piranoth when he teleports are dazed (save ends).',
				damage: 'Piranoth teleports 10 squares',
				category: 2
			},
			{
				id: '5ab825a5-6ce1-42ac-85ca-f851a6b18026',
				name: 'Earth Shift',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Piranoth shifts 3 squares. Any enemies adjacent to Piranoth when he shifts are knocked prone.',
				damage: 'Piranoth shifts 3 squares',
				category: 3
			},
			{
				id: '19d51a74-9adf-4368-98ab-9d70fa8507f3',
				name: 'Triple Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Piranoth acts three times in a round, on initiative counts 35, 25, and 15. It cannot delay or ready actions. On each turn, it can use one action, either a minor, a move, or a standard. It can use one immediate action between each turn.',
				damage: 'on initiative counts 35',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -10
			},
			{
				type: 3,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'attacks by characters below level 15',
		tactics: '',

		info: 'Level 19 Solo Skirmisher',
		phenotype: 'Huge elemental beast (primordial)'
	},
	{
		id: '36425a95-e1d5-46e1-a9d6-dd9c0146332f',
		name: 'Rage Drake Ravager',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 178,
		initiative: 9,
		ac: 27,
		fortitude: 28,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0de53a2f-4662-4e73-8ee5-f7c5e51c7a78',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage; see also bloodied rage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'f2da50bf-c028-4fe7-a60c-1d217d8b0d71',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage; see also bloodied rage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '039a152b-95c9-4e18-b9c2-94cfa174b27e',
				name: 'Raking Leap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The rage drake leaps up to 8 squares, making four claw attacks against a single target as it lands.',
				damage: 'The rage drake leaps up to 8 squares',
				category: 1
			},
			{
				id: '447da252-26b8-4778-b46e-c61aecde15cc',
				name: 'Bloodied Rage',
				action: null,
				keywords: '',
				condition: 'while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The rage drake gains a +2 bonus to attack rolls and deals an extra 10 damage per attack.',
				damage: 'the rage drake gains a +2 bonus to attack rolls and deals an extra 10 damage per attack',
				category: 0
			},
			{
				id: 'e09c6ddb-4e02-4fd9-81ad-707450593528',
				name: 'Raging Mount',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while bloodied and mounted by a friendly rider of 15th level or higher',
				range: 'The rage drake grants its rider a +2 bonus to attack rolls and damage rolls with melee attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear (while bloodied only)',
		tactics: '',

		info: 'Level 15 Brute',
		phenotype: 'Large natural beast (mount, reptile)'
	},
	{
		id: '96086dcf-8bb7-49ad-82ea-5abedeb2ff09',
		name: 'Salamander Swordbearer',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'fire, reptile',
		level: 16,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'khopesh',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 153,
		initiative: 14,
		ac: 32,
		fortitude: 28,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f1f11968-adab-42ee-8d6a-5128e1f5b098',
				name: 'Khopesh',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+7 damage, plus 5 fire damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: 'd05f0985-1654-448a-b01f-b3176af4d016',
				name: 'Executioner’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'Targets bloodied enemy only; reach 2; 2d8+7 damage, plus 5 fire damage. If the target is prone, it takes an additional 10 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '9451c5d9-14c9-4bc5-9c85-da6bfda61e54',
				name: 'Tail Lash',
				action: {
					action: 4,
					trigger: 'when an enemy moves within 2 squares of the salamander swordbearer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'The salamander attacks the enemy; reach 2; 1d10+7 fire damage, the target is knocked prone, and the target’s move action ends in that square.',
				damage: '1d10+7 fire damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Soldier',
		phenotype: 'Large elemental humanoid (fire, reptile)'
	},
	{
		id: 'fbbe9cf4-c44b-4d64-a8ae-0dd2621528ab',
		name: 'Skeletal Arcane Guardian',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'scimitar',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 176,
		initiative: 12,
		ac: 27,
		fortitude: 27,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e4d1d094-2380-4748-83f4-8f99df06e8a1',
				name: 'Twin Scimitar Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'The skeletal arcane guardian makes two scimitar attacks against the same target; 1d10+6 damage (crit 1d10 + 16). This also holds true for opportunity attacks.',
				damage: '1d10+6 damage (crit 1d10 + 16)',
				category: 1
			},
			{
				id: '6db72199-414d-4d72-a3e8-ea25698e2432',
				name: 'Cascade of Steel',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The skeletal arcane guardian makes two twin scimitar strike attacks (four scimitar attacks total).',
				damage: '',
				category: 1
			},
			{
				id: 'bf1e21e1-8e97-49a5-9249-b7e6db171352',
				name: 'Arcane Assassin',
				action: {
					action: 4,
					trigger: 'when an enemy uses an arcane power',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The skeletal arcane guardian shifts 8 squares and makes a melee basic attack against the triggering target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '86a5b87d-8530-4909-aa64-8fec1b6cf90e',
				name: 'Sudden Strike',
				action: {
					action: 4,
					trigger: 'when an adjacent enemy shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The skeletal arcane guardian makes a melee basic attack against the enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 15 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '21815c47-f1fc-4a25-b3ee-ffafbb849217',
		name: 'Spectral Servant',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '4',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 11,
		ac: 29,
		fortitude: 27,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '475a9c1f-8288-4fb2-8b7a-0c4876c50293',
				name: 'Spectral Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '9 necrotic damage.',
				damage: '9 necrotic damage',
				category: 1
			},
			{
				id: 'c1c15112-30ec-4f82-88cc-fea0c6018abb',
				name: 'Spectral Dance',
				action: {
					action: 4,
					trigger: 'when missed by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The spectral servant shifts 3 squares and makes a spectral claw attack at any point during that movement. It gains resist all damage until the start of its next turn.',
				damage: 'it gains resist all damage until the start of its next turn',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'f9848446-2496-456a-bf3f-dfc4bce4512d',
		name: 'Torrian',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +15',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 94,
		initiative: 14,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9ac452be-e5bc-46db-8258-147bb300216d',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '04720148-03c4-4fa6-93b9-575c99584885',
				name: 'Strike from Hiding',
				action: {
					action: 1,
					trigger: 'the torrian must be invisible',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8+3 damage, and the target is dazed (save ends).',
				damage: '2d8+3 damage',
				category: 5
			},
			{
				id: '678e2410-e8f7-4efd-a63b-98f1556aaaf8',
				name: 'Stealthy Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian shifts 4 squares and becomes invisible until the end of its next turn.',
				damage: 'The torrian shifts 4 squares and becomes invisible until the end of its next turn',
				category: 2
			},
			{
				id: '7cdf71b6-8ece-4ad2-a98a-5057685168a9',
				name: 'Primal Focus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn',
				category: 1
			},
			{
				id: '135b416b-4e3d-4ee8-819e-86256040e03d',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian deals an extra 1d8 damage against any target it has combat advantage against.',
				damage: 'the torrian deals an extra 1d8 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '8b6ba9ba-f135-4cb4-9f06-26f9e4c1f938',
		name: 'Torrian Guard',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +15, Endurance +16, Intimidate +12',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 132,
		initiative: 11,
		ac: 29,
		fortitude: 28,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '72c197bf-a9d1-44bd-910f-61771fdb9004',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'ff0d224e-55e1-4974-b67e-abfc9ca1f7b2',
				name: 'Torrian’s Challenge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'targets enemies; the torrian pulls each target 2 squares to an adjacent square and then makes a close attack against each adjacent enemy; 1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '568f9555-cb34-4faa-aa0d-3feccd4a1b60',
				name: 'Rending Claw',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+6 damage, and the target takes a –2 penalty to all defenses until the end of the torrian’s next turn.',
				damage: '3d6+6 damage',
				category: 5
			},
			{
				id: '13e6f237-6b6e-485a-96e3-c59e670737fc',
				name: 'Sudden Strike',
				action: {
					action: 4,
					trigger: 'when an enemy moves or shifts out of a square adjacent to the torrian',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian makes an immediate claw attack against the triggering target.',
				damage: '',
				category: 5
			},
			{
				id: '6bb90eea-f563-4c54-a4e6-fd791671a515',
				name: 'Primal Focus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '49bcea96-bcf6-4092-9a04-c429530ed600',
		name: 'Torrian Hurler',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Nature +13, Stealth +16',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 100,
		initiative: 11,
		ac: 25,
		fortitude: 25,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1d1f4907-79e8-45cd-8a0f-020416c2a81d',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '812ffced-1b50-4ed6-976f-29bb0feb3cc2',
				name: 'Torrian Sling',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '926b6e6f-1708-4bc0-8374-991c9bfdec9d',
				name: 'Double Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'targets one or two creatures; 2d8+8 damage.',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: '52eca53b-c153-4332-9ee6-3929042e83bd',
				name: 'Primal Focus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Artillery',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '1f8e2184-6c43-4b1a-91cf-dc00164e3ce0',
		name: 'Torrian Seneschal',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +15, Diplomacy +14, Nature +13, Religion +15',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 128,
		initiative: 9,
		ac: 27,
		fortitude: 25,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1d72f177-01c1-44cf-84d1-ab19b9b97892',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'a5335ccc-233f-45ef-8bab-06b0ba78bc0a',
				name: 'Torrian’s Roar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+6 damage, and (hit or miss) all allies within 5 squares regain 10 hit points and gain a +2 bonus to attacks until the end of the torrian’s next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'b4c35c6f-68a1-448a-834e-43c22afae5fb',
				name: 'Cause Fear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is pushed 3 squares and is immobilized (save ends).',
				damage: 'the target is pushed 3 squares and is immobilized (save ends)',
				category: 1
			},
			{
				id: 'edf365b6-8be6-4899-99f8-2d556be249f4',
				name: 'Healing Word',
				action: {
					action: 3,
					trigger: '1/round; recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'targets one ally; the target can spend a healing surge and regain an additional 3d6 hit points.',
				damage: 'the target can spend a healing surge and regain an additional 3d6 hit points',
				category: 5
			},
			{
				id: '51ea9c3f-55ad-48d2-9161-8457988e234f',
				name: 'Primal Focus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The torrian regains 10 hit points and gains a +2 bonus to all defenses until the end of its next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Controller (L)',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '3243cfbc-0bb2-4ff5-95e0-9c4177f33012',
		name: 'Warforged Destroyer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 14,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +15, Nature +14, Stealth +16',
		equipment: 'quarterstaff',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 105,
		initiative: 11,
		ac: 26,
		fortitude: 26,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0ca4d498-6280-4d01-ac2d-ce3f03fa4d47',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '2f1afbe5-5956-4e19-9bbf-0f04c925319e',
				name: 'Rumble Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '2d8+6 force damage, and the target is pushed 2 squares and knocked prone.',
				damage: '2d8+6 force damage',
				category: 1
			},
			{
				id: '88ccffde-0e12-4252-aaf5-f6b3df40b01a',
				name: 'Collision Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d8+6 force damage, and the warforged destroyer makes a secondary attack against one or two targets within 3 squares of the primary target. Secondary Attack: +19 vs. Fortitude; 1d8 + 6 force damage, and the destroyer slides the target 3 squares toward the primary target. Effect: After all attacks are resolved, any target hit by an attack is knocked prone if it is adjacent to another target.',
				damage: '1d8+6 force damage',
				category: 1
			},
			{
				id: '5201f804-647c-476c-b696-e9f91f864e10',
				name: 'Thunder Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Thunder',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+6 thunder damage, and the warforged destroyer pushes the target 2 squares.',
				damage: '2d8+6 thunder damage',
				category: 1
			},
			{
				id: '9675e282-5c00-4318-a3dc-0e7d7fdc53e9',
				name: 'Destruction Sphere',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement, Thunder',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '3d8+6 thunder damage, and the target is knocked prone. Miss: Half damage.',
				damage: '3d8+6 thunder damage',
				category: 1
			},
			{
				id: '40a6ce30-d835-4112-855b-dfecd9c0d5fe',
				name: 'Warforged Resolve',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The warforged destroyer gains 9 temporary hit points and can make a saving throw against an ongoing damage effect. If it uses this power while bloodied, it also regains 9 hit points.',
				damage: 'the warforged destroyer gains 9 temporary hit points and can make a saving throw against an ongoing damage effect',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Artillery',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '85912297-9e36-4433-98f8-6b4430cdc046',
		name: 'Warforged Flamepriest',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 13,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Heal +16, Religion +14',
		equipment: 'chainmail; holy symbol; warhammer',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 129,
		initiative: 7,
		ac: 27,
		fortitude: 25,
		reflex: 25,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3da93a13-c2e8-4412-bedd-4d27c00ee47a',
				name: 'Fiery Warhammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage plus 1d8 fire damage, and the target takes a –2 penalty to AC until the end of the warforged flamepriest’s next turn.',
				damage: '1d10+6 damage plus 1d8 fire damage',
				category: 1
			},
			{
				id: 'c7deea48-e189-4c4d-9335-0857f2d71529',
				name: 'Heat of Battle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d10+6 plus 1d8 fire damage, and ongoing 5 fire damage until the target ends its turn in a space that isn’t adjacent to the warforged flamepriest.',
				damage: '1d10+6 plus 1d8 fire damage',
				category: 1
			},
			{
				id: '3dd0b1aa-7ea1-4626-9193-0d1308e027d7',
				name: 'Mending Flash Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Implement',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d8+6 fire damage. Effect: The warforged flamepriest and each ally within the burst gain 10 temporary hit points. Each warforged ally within the burst uses warforged resolve as an immediate reaction.',
				damage: '1d8+6 fire damage',
				category: 1
			},
			{
				id: '1e2104cc-48c3-4135-93b7-7f8667f07ec1',
				name: 'Blunted Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Psychic',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+6 psychic damage, and the target takes a –2 penalty to attack rolls and a –4 penalty to damage rolls (save ends both).',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: 'd30ebbc0-a876-40ec-a60e-e6a142ebb7fe',
				name: 'Warforged Resolve',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The warforged flamepriest gains 9 temporary hit points and can make a saving throw against an ongoing damage effect. If it uses this power while bloodied, it also regains 9 hit points.',
				damage: 'the warforged flamepriest gains 9 temporary hit points and can make a saving throw against an ongoing damage effect',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Controller',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '1ae5b274-2cd8-4a81-ad3f-2d87ab3d3793',
		name: 'Warforged Knight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 12,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +14, Intimidate +12',
		equipment: 'heavy shield; longsword; plate armor',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 122,
		initiative: 11,
		ac: 28,
		fortitude: 26,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9cd64acd-d948-4fd9-be57-ee5d6b42e5d4',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and the target is marked until the end of the warforged knight’s next turn; see also battlefield tactics.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'd7173f78-225e-4b9c-89b5-079862e71561',
				name: 'Knight’s Honor',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d8+5 damage, and ongoing 5 damage until the target attacks the warforged knight.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'a0c120bc-737e-4202-9566-3a7c53cfe766',
				name: 'Battlefield Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: 'The warforged knight gains a +2 bonus to melee attacks if it has an ally adjacent to the target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '0ce56c5d-9732-45ff-a24d-1aaa363e287f',
				name: 'Warforged Resolve',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The warforged knight gains 10 temporary hit points and can make a saving throw against an ongoing damage effect. If it uses this power while bloodied, it also regains 10 hit points.',
				damage: 'the warforged knight gains 10 temporary hit points and can make a saving throw against an ongoing damage effect',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Soldier',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '5060d189-8a3a-4826-ae2e-3d4b63feb6a0',
		name: 'Winter Wolf Frostbreath',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 18,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; low-light vision',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Stealth +22 (+27 in snow or ice)',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 136,
		initiative: 17,
		ac: 30,
		fortitude: 29,
		reflex: 31,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a44806f7-d233-43b7-97e8-40428dc2320e',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '1d10 + 7 damage plus 1d8 cold damage.',
				damage: '1d10 + 7 damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: 'e893342d-cd17-49e6-be86-cf50f0a1eff6',
				name: 'Ray of Cold',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '2d8 + 7 cold damage, and the target is slowed (save ends).',
				damage: '2d8 + 7 cold damage',
				category: 1
			},
			{
				id: 'b6527ae2-3fbd-4dea-a674-d52c4503b60a',
				name: 'Blast of Sleet',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '3d8 + 7 cold damage, and the target slides 3 squares and falls prone.',
				damage: '3d8 + 7 cold damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Artillery',
		phenotype: 'Medium natural beast'
	},
	{
		id: '58d7de2c-0d72-4741-bacb-2567c807ff4e',
		name: 'Zaelex',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'cold; ice archon',
		level: 19,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +14',
		movement: '6 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant, Primordial',
		skills: 'Arcana +20, Bluff +17, Diplomacy +17, History +20',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 180,
		initiative: 12,
		ac: 33,
		fortitude: 31,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3daa3739-3bb9-49ba-811d-710bc1887a86',
				name: 'Ice Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d8+3 cold damage, and the target is immobilized until the end of Zaelex’s next turn.',
				damage: '2d8+3 cold damage',
				category: 1
			},
			{
				id: 'a618abcb-7d7a-4fc6-b455-ee58acfb9657',
				name: 'Ice Shard',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '1d6+3 cold damage, and the target is slowed and takes ongoing 10 cold damage (save ends both).',
				damage: '1d6+3 cold damage',
				category: 1
			},
			{
				id: '92ab5d9e-3e57-4a5c-b30c-2e9ab714e60d',
				name: 'Blizzard Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 3d8+5 cold damage, and the area becomes a zone that lasts until the end of the encounter. If a creature begins its turn in the zone, Zaelex can slide the creature 2 squares as a free action.',
				damage: '3d8+5 cold damage',
				category: 1
			},
			{
				id: '859e6d4b-6047-4f00-a0e4-20f7dcf56e80',
				name: 'Winter’s Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 4d10+7 cold damage, and the target is immobilized (save ends). First Failed Save: The target is restrained (save ends). Second Failed Save: The target turns to ice and is petrified.',
				damage: '4d10+7 cold damage',
				category: 1
			},
			{
				id: 'd7641b7e-3472-42e1-a749-01ac72ee34fc',
				name: 'Master of the Tower',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Zaelex can utilize the effects described under “Tower Effects,” and can move through tower walls as though they weren’t there.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -30
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Controller (L)',
		phenotype: 'Medium elemental humanoid (cold; ice archon)'
	},
	{
		id: '6e5a5047-0fb6-4592-8ca1-a8d459f873b2',
		name: 'Havastav',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '5 see also shadow stride',
		alignment: 'Evil',
		languages: 'Common, Netherese',
		skills: 'Diplomacy +14, Insight +11, Intimidate +14, Stealth +11',
		equipment: 'bastard sword; heavy shield; plate armor',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 184,
		initiative: 10,
		ac: 25,
		fortitude: 23,
		reflex: 21,
		will: 22,
		regeneration: {
			value: 10,
			details: '(If Havastav takes radiant damage, his regeneration'
		},
		auras: [],
		powers: [
			{
				id: '46153638-cb81-4ee2-9334-187443d601b5',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage (crit 1d6+16).',
				damage: '1d10+6 damage (crit 1d6+16)',
				category: 1
			},
			{
				id: '49bf0dca-f906-4916-9b4e-391b7e0e968f',
				name: 'Gloom Chakram',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Range 5; 2d6+3 force damage.',
				damage: '2d6+3 force damage',
				category: 1
			},
			{
				id: 'b5cf8b65-eea4-4127-adb6-e2085b1ad817',
				name: 'Arching Swings',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Havastav makes two basic melee attacks and shifts 1 square after the first attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '217ff648-be5c-4c15-bc52-7d968a45900e',
				name: 'Disrupting Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Force, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '3d10+6 damage plus ongoing 5 force damage (save ends).',
				damage: '3d10+6 damage plus ongoing 5 force damage (save ends)',
				category: 1
			},
			{
				id: 'a76df9cc-f4b4-48ad-8574-dbbc8f1c61f8',
				name: 'Triumphant Cry',
				action: {
					action: 7,
					trigger: 'when havastav scores a critical hit or reduces an enemy to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Havastav or an ally within 20 squares can make a melee or ranged attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '731f1327-59a4-487a-a5e0-f2c151fdf803',
				name: 'Shadow Stride',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Havastav can teleport 20 squares but must end his move in dim light or darkness.',
				damage: 'Havastav can teleport 20 squares but must end his move in dim light or darkness',
				category: 2
			},
			{
				id: 'daf9dc31-9204-424a-bd96-ba459a1ec4f6',
				name: 'Coalescing Darkness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Havastav moves 3 or more squares by any means, he is cloaked with supernatural darkness, gaining total concealment.',
				damage: 'If Havastav moves 3 or more squares by any means',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Skirmisher (L)',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'dae3d73f-d7fa-41d1-9289-f6f2eb8df3a4',
		name: 'Crathlorth',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Arcana +11, Athletics +5, History +13',
		equipment: 'quarterstaff',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 54,
		initiative: 5,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e3878545-f8da-4a7a-b5fb-601abf028cb3',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'c7d949d9-8109-4781-bfc9-dffeeb7ee4f8',
				name: 'Shock Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Requires quarterstaff; 2d10+4 lightning damage, and the target is dazed until the end of Crathlorth’s next turn.',
				damage: '2d10+4 lightning damage',
				category: 1
			},
			{
				id: '93c44e8f-ec45-4726-9aa1-765347f85eb9',
				name: 'Force Lure',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '2d6+4 force damage, and the target slides 3 squares.',
				damage: '2d6+4 force damage',
				category: 1
			},
			{
				id: 'f971dfde-7b32-4102-9b9f-bece522e3c8e',
				name: 'Force Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d8+4 force damage, and the target is pushed 1 square and knocked prone. Miss: Half damage, and the target is neither pushed nor knocked prone.',
				damage: '2d8+4 force damage',
				category: 1
			},
			{
				id: 'f678d12f-aa55-4e06-9abe-436845b9dfbd',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when crathlorth suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Crathlorth rolls a saving throw against the effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '87bfd028-e417-4d91-9299-2218bbb0c137',
		name: 'Haldar',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Good',
		languages: 'Common, Goblin',
		skills: 'Acrobatics +10, Stealth +8, Thievery +10',
		equipment: 'dagger; leather armor; thieves’ tools',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 26,
		initiative: 6,
		ac: 15,
		fortitude: 12,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '55ef03f1-990c-466a-8080-527c7767cc61',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '7eb07393-816c-45e1-8103-e402ae6652e3',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '083c7f43-b4e8-4c37-97f3-7d96d6c1fbb0',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Haldar can move up to 3 squares and make one melee basic attack at any point during that movement. He doesn’t provoke opportunity attacks when moving away from the target of his attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '588560d0-7bb6-4329-a0c5-170afbc77bd9',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Haldar deals an extra 1d6 damage on melee attacks against any target he has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '398d58d7-1b27-48c6-8a66-ecdbb985ba29',
				name: 'Nimble Reaction',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Haldar gains a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Haldar gains a +2 racial bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: '173475b8-5f84-4515-94da-765994ad90d5',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the halfling would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Haldar forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Skirmisher',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '2252d99e-d87c-4275-a318-d97ebba9a73c',
		name: 'Pirate Scallywag',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Acrobatics +10',
		equipment: 'chainmail; crossbow; crossbow bolts (20); halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 55,
		initiative: 5,
		ac: 19,
		fortitude: 17,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '58c1ba4c-a24c-4597-bf38-2a24faf368ab',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+3 damage, and the target is marked until the end of the human guard’s next turn.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '8e678b55-9b9e-47a2-b786-addcab48d8ca',
				name: 'Powerful Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Requires halberd; reach 2; 1d10+7 damage, and the target is knocked prone.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '3f1b1a20-f8e6-4285-990c-db8d437c9d43',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'db9005c0-3cbc-4e9c-92c8-23a87c146c9c',
		name: 'Scurvy Sea Dog',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Acrobatics +5',
		equipment: 'club',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 16,
		fortitude: 14,
		reflex: 12,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4359067a-c0fa-4230-a30d-50da1485877e',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '1b6518fb-45c6-4a7d-b0f0-9730b812eec2',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The scurvy dog gains a +2 power bonus to all defenses while at least two other scurvy dogs are within 5 squares of it.',
				damage: 'The scurvy dog gains a +2 power bonus to all defenses while at least two other scurvy dogs are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ae1a9623-6ac0-44fa-aa45-4d5865d88005',
		name: 'Ship’s Mage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Acrobatics +10, Arcana +11',
		equipment: 'implement, wand; quarterstaff',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 42,
		initiative: 4,
		ac: 17,
		fortitude: 13,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e4abaa0c-31cf-4ac4-a73d-0d81a3af45c9',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '14c0988e-0d13-4a62-a5a2-07b28c1e937c',
				name: 'Magic Missile',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d4+4 force damage.',
				damage: '2d4+4 force damage',
				category: 1
			},
			{
				id: 'a43d8a01-b5d2-4feb-85f9-59361d8ba8e5',
				name: 'Dancing Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'The mage makes a separate attack against 3 different targets; 1d8+4 lightning damage.',
				damage: '1d8+4 lightning damage',
				category: 1
			},
			{
				id: '07b7d517-52a0-4bcd-a6a4-c97a50f6ad26',
				name: 'Thunder Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d8+4 thunder damage, and the target is dazed (save ends).',
				damage: '1d8+4 thunder damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a86a2b3b-008d-4acc-b594-d8f0285063e3',
		name: 'Elite Orcus Underpriest',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Abyssal',
		skills: 'Religion +8',
		equipment: 'leather armor; mace',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 160,
		initiative: 4,
		ac: 21,
		fortitude: 19,
		reflex: 14,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '10ddc3db-ded1-413d-9423-cae9db76fd7c',
				name: 'Blessing of Orcus',
				keywords: '',
				details: 'aura 10; allies in the aura can use death strike.'
			}
		],
		powers: [
			{
				id: '748a5cd6-656b-4d98-9160-6ffa68882447',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '580444d1-6c5f-4cb8-89c8-1ea766cb65f4',
				name: 'Shadow Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '2d8+8 necrotic damage, and the target has -2 AC until the end of Rafe’s next turn.',
				damage: '2d8+8 necrotic damage',
				category: 1
			},
			{
				id: 'edf7cf2b-da76-4a2b-8c6a-802bd4a46fac',
				name: 'Cursed Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Rafe attacks with his mace and if it hits, he may make a secondary attack on the same target with his shadow curse as if it were a melee attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '1e2fc7dc-1139-4ae7-872e-8f828257f9bc',
				name: 'Infuse with Shadow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Target ally within 5 squares gains a +5 bonus to attack rolls until the end of its next turn. In addition, the target heals 10 hp.',
				damage: 'Target ally within 5 squares gains a +5 bonus to attack rolls until the end of its next turn',
				category: 1
			},
			{
				id: '2306821c-b6a5-487e-ab11-14d3a7ac617e',
				name: 'Demons Empower Me',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: 'immediate reaction when bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'Rafe gains a +5 bonus to attack rolls until the end of his next turn and heals 10 hp.',
				damage: 'Rafe gains a +5 bonus to attack rolls until the end of his next turn and heals 10 hp',
				category: 1
			},
			{
				id: '771b021c-22af-42cd-8b98-f3fe0679dbae',
				name: 'Death Strike',
				action: {
					action: 7,
					trigger: 'when reduced to 0 hp',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Before he dies, Rafe can make a basic melee or ranged attack against a target within reach.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '38fcb6bb-6880-43d8-8a1e-2c9fc44c636e',
				name: 'Demon’s Blood',
				action: null,
				keywords: '',
				condition: '',
				range: 'While bloodied, Rafe gains a +2 bonus to melee attack rolls and a +3 bonus to melee damage rolls.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'ba8ad0de-f024-48a4-9f53-a1c898d05645',
		name: 'Green Dragon Wyrmling Companion',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '8, fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Draconic',
		skills: 'Bluff +11, Diplomacy +11, Insight +9, Intimidate +11',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 80,
		initiative: 9,
		ac: 21,
		fortitude: 18,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0f0b7dda-712e-4a5b-acf8-69260d7d5146',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and the target takes ongoing 5 poison damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'e9030d02-8c39-4dc8-b6fa-859a4750e9dc',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '5c157159-c48c-4dd7-899f-0d09efe56742',
				name: 'Luring Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'the target slides 1 square.',
				damage: 'the target slides 1 square',
				category: 3
			},
			{
				id: 'bd2e6369-4c09-4838-82af-6b79c23e1971',
				name: 'Dragon Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '3d8+4 poison damage, and the target takes ongoing 5 poison damage and is slowed (save ends both).',
				damage: '3d8+4 poison damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Small natural beast (dragon)'
	},
	{
		id: '2ff5bdd1-ffd6-4cfb-83ad-5d370af32122',
		name: 'Mezzodemon Fighter',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 10,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Intimidate +11',
		equipment: 'trident',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 256,
		initiative: 9,
		ac: 26,
		fortitude: 26,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '393956d3-c38d-472d-935b-da7533916bde',
				name: 'Trident',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '3222e39b-f6aa-410a-a9f1-b54b78b85b65',
				name: 'Skewering Tines',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Requires Trident; reach 2; 1d8+5 damage, ongoing 5 damage and the target is restrained (save ends both). While the target is restrained, the mezzodemon can’t make trident attacks.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '71b1b5db-f086-4651-b1a6-cfc375668733',
				name: 'Cleave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Requires trident; reach 2; 2d8+5 damage, and another enemy adjacent to the mezzodemon fighter takes 5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'cd3fd736-2839-43cd-b4cc-d2d25fe6c1c3',
				name: 'Covering Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Requires trident; reach 2; 1d8+5 damage, and an ally of the mezzodemon that is adjacent to the target can shift 2 squares.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '28c17fde-4416-45fd-a78b-fdb7303bc9fa',
				name: 'Brute Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Requires trident; reach 2; 3d8+5 damage.',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: 'b77be048-c915-4a25-ae21-3f25840e3ed7',
				name: 'Poison Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+3 poison damage, and ongoing 5 poison damage (save ends).',
				damage: '2d6+3 poison damage',
				category: 1
			},
			{
				id: '2d175bc1-4c5d-4e08-b94c-12374b574c00',
				name: 'Unstoppable',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Martial',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mezzodemon fighter gains 2d6+3 temporary hit points.',
				damage: 'The mezzodemon fighter gains 2d6+3 temporary hit points',
				category: 3
			},
			{
				id: '92322ed9-758b-4453-a6cc-1f9260fceafd',
				name: 'Combat Superiority',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mezzodemon fighter gains +3 to attack rolls on opportunity attacks. An enemy struck by an opportunity attack stops moving if a move provoked the attack.',
				damage: 'The mezzodemon fighter gains +3 to attack rolls on opportunity attacks',
				category: 0
			},
			{
				id: 'd00cdd24-1661-408c-b3fa-96b737dec205',
				name: 'Combat Challenge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mezzodemon fighter marks any target it attacks. The mark lasts until the mezzodemon fighter’s next turn. If the marked target makes an attack that does not include the mezzodemon, the attack is made at -2. In addition, when a marked target adjacent to the mezzodemon shifts or makes an attack that does not include the mezzodemon, the mezzodemon can make an attack against the marked creature as an immediate interrupt.',
				damage: 'the attack is made at -2',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -20
			}
		],
		resist: '10/variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Brute',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: '4319afb1-3640-4b5f-9c44-1039eb3b5f07',
		name: 'Berserker Savage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 2,
			flag: 1,
			leader: true
		},
		senses: 'Perception +4',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +11, Endurance +11',
		equipment: 'greataxe; handaxe; hide armor',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 212,
		initiative: 5,
		ac: 19,
		fortitude: 22,
		reflex: 18,
		will: 18,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '13f10f87-4464-47b0-bb3a-75611c008a6e',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d12+6 damage (crit 1d12+18).',
				damage: '1d12+6 damage (crit 1d12+18)',
				category: 1
			},
			{
				id: 'b41333ec-6c4c-4cf4-be81-bc3c93979211',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '2cf7e826-7911-42b5-abe8-e9fcdeca32b2',
				name: 'Battle Fury',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The berserker savage makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'fe033358-1708-4a79-9bbc-1d1094f1eb50',
				name: 'Murderous Frenzy',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The berserker savage gains 1 action point the first time it reduces a foe to 0 hit points in an encounter.',
				damage: 'The berserker savage gains 1 action point the first time it reduces a foe to 0 hit points in an encounter',
				category: 0
			},
			{
				id: '91e51386-d453-41c3-b04d-277ea49cd20c',
				name: 'Savage Rebuke',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'The berserker savage makes a basic melee attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Brute (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'e3f79017-a068-44c3-9013-b0a9db77bca5',
		name: 'Gnoll Minion',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +7, Stealth +11',
		equipment: 'arrows (30); handaxe; leather armor; longbow',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 6,
		ac: 19,
		fortitude: 16,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6a01cddb-bc94-4bc5-b19a-e7f9a09eb303',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '869a39c3-f84e-43ee-8020-0ac864bae6dd',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '9e0ad8a4-b901-4459-84db-ccb981416b25',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll minion deals an extra 5 damage on melee and ranged attacks against an enemy that has two or more of the gnoll minion’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'dc47f5c6-bf0c-486e-93c7-640f6269712a',
		name: 'Sergeant Villmore',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Chondathan, Common',
		skills: 'Athletics +11, Intimidate +9, Streetwise +9',
		equipment: 'chainmail; crossbow; crossbow bolts (20); longsword',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 70,
		initiative: 5,
		ac: 18,
		fortitude: 15,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '82e30487-e29b-4999-a863-9fca672706c6',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, and the target is marked until the end of the Sergeant Villmore’s next turn.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '20e5edc8-cc9d-46b6-a8f8-052fc678e8b0',
				name: 'Crossbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '9655bdb4-4626-4e2c-b89f-c55d50f09064',
				name: 'Sly Cut',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Requires longsword; affects a target marked by Sergeant Villmore; 1d8+6 damage, and the target is slowed (save ends).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '50e9fea5-2a0b-416e-8587-59563a28c1a0',
				name: 'Commander’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'an ally makes a melee basic attack against the target and deals his basic attack damage + 2.',
				attack: null,
				description: '',
				details: 'Target: one creature',
				damage: '',
				category: 1
			},
			{
				id: '5dae3628-371d-439e-af28-f979cb4b2586',
				name: 'Leaf on the Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and Sergeant Villmore or an ally adjacent to the target swaps places with the target.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '8244d186-fb21-4ffe-a169-dc7f3725fd65',
				name: 'White Raven Onslaught',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '3d8+6 damage, and slide an adjacent ally 1 square. Until the end of the encounter, whenever Sergeant Villmore or an ally within 10 squares makes a successful attack, the attacker slides an adjacent ally 1 square. Miss: Choose one ally within 10 squares. Until the end of the encounter, the ally slides an adjacent ally 1 square after making a successful attack.',
				damage: '3d8+6 damage',
				category: 1
			},
			{
				id: '326d0385-6bcc-4828-afa0-e58f5eba4627',
				name: 'Combat Leader',
				action: null,
				keywords: '',
				condition: 'encounter',
				range: '',
				attack: null,
				description: '',
				details: 'Sergeant Villmore and each of his allies within 10 squares who Can see and hear him gain a +2 power bonus to initiative.',
				damage: 'Sergeant Villmore and each of his allies within 10 squares who Can see and hear him gain a +2 power bonus to initiative',
				category: 0
			},
			{
				id: 'a6217b8e-8d66-4e44-b144-c7c5717d9d65',
				name: 'Inspiring Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '2/encounter',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'target: Sergeant Villmore or one ally in burst; the target can spend a healing surge and regain an additional 1d6 hit points.',
				damage: 'the target can spend a healing surge and regain an additional 1d6 hit points',
				category: 3
			},
			{
				id: 'b5938342-9950-4b63-bfda-288372876114',
				name: 'Knight’s Move',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'One ally within 10 squares takes a move action as a free action.',
				damage: 'One ally within 10 squares takes a move action as a free action',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'fb09e523-c68f-4219-a98a-7ce3dc4a2bad',
		name: 'Horryl van Deesbrock',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +16, History +16, Nature +10',
		equipment: 'spear',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 124,
		initiative: 6,
		ac: 21,
		fortitude: 19,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8f5e72d1-8d55-4ba7-aa12-c897f9bc916b',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage, and the target is slowed until the end of Horryl’s next turn.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'dc7a16f5-8145-45bd-8174-5fb1d69ef649',
				name: 'Blinding Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d8+3 damage, and the target is immobilized until the end of Horryl’s next turn.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'da65ee12-97bc-4556-88cb-527f460c4cbb',
				name: 'Teleporting Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d8+3 damage, and the target is teleported up to 3 squares. The target cannot be teleported into an unsafe space.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'f117c525-e650-4283-84d7-996edaeb8382',
				name: 'Dazzling Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: '2d6+4 radiant damage, and the target is blinded until the end of Horryl’s next turn.',
				damage: '2d6+4 radiant damage',
				category: 1
			},
			{
				id: '4c91a127-c8e7-4246-90ef-52d1f12b582d',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Horryl can teleport 5 squares.',
				damage: 'Horryl can teleport 5 squares',
				category: 2
			},
			{
				id: '2d774775-4b2b-45e5-b4da-9ebd4dc4d23f',
				name: 'Abyssal Might',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Horyll gains a +2 power bonus to damage rolls with all attacks (already added).',
				damage: 'horyll gains a +2 power bonus to damage rolls with all attacks (already added)',
				category: 1
			},
			{
				id: '98f0f562-2541-471c-97a0-7ad8146cda2c',
				name: 'Consume Soul',
				action: {
					action: 4,
					trigger: 'when an ally within 5 squares of the acolyte is reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Horryl regains 3 hit points.',
				damage: 'Horryl regains 3 hit points',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 5,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Elite Controller (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '917ed502-e273-4e33-a0b7-37bc62480692',
		name: 'Cultist Acolyte',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3a135c1e-2a15-4127-aba6-ef23e69cbc7f',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the cultist acolyte shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'ce9edabe-a98a-444b-a4fd-fe97cb0c93f7',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '79066da2-cbf1-4782-aa0f-4486a86aa589',
				name: 'Dazing Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: 'Requires mace; 1d8+1 damage, the target is dazed until the end of the cultist acolyte’s next turn, and the cultist acolyte shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'c6c6ead8-d73c-4fe7-bcd8-b9117eaa80db',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The cultist acolyte deals 1d6 extra damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'b4e0c40a-2df8-4472-8817-6305cd31b06e',
		name: 'Cultist Bowman',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6; see also flame step',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Nature +11, Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 32,
		initiative: 5,
		ac: 15,
		fortitude: 11,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '10936bf3-a422-4288-91fa-91a968127567',
				name: 'Short sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '74fb50bd-d72f-4275-a332-049d07043617',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage; see also archer’s mobility.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '58b8ea49-458c-4d24-a3f6-728b4c51b73e',
				name: 'Archer’s Mobility',
				action: null,
				keywords: '',
				condition: '',
				range: 'If the cultist bowman moves at least 4 squares from its original position, it gains a +2 bonus to ranged attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ebe9b45e-a3bf-4f3f-aecb-bcf0b5a7e4c2',
				name: 'Flame’s Favor',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The cultist bowman can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: 'db697401-255c-45a5-ac0e-ebf2e42f26f2',
				name: 'Flame’s Escape',
				action: {
					action: 4,
					trigger: 'when an enemy makes a melee attack against the cultist bowman',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The cultist bowman shifts 1 square and makes a ranged attack against the enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '8a2df466-a990-48b7-811a-caf1d13a6618',
				name: 'Flame Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The cultist bowman ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'f6ea03b7-6fe6-45b4-a6e6-3bfc94e1b51b',
		name: 'Cultist Doombringer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +9, Endurance +9',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 76,
		initiative: 3,
		ac: 16,
		fortitude: 16,
		reflex: 15,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1ba2994f-f403-400a-b479-6d6af8d3bfaf',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12+4 damage (crit 1d12 + 16).',
				damage: '1d12+4 damage (crit 1d12 + 16)',
				category: 1
			},
			{
				id: 'e73ab3c2-f15a-4dae-be77-77f110fc4ee3',
				name: 'Doom Strike',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The cultist doombringer makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '05a55889-5900-4aea-9278-d77808507a05',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '69ea4a3a-c662-46f3-ab70-a3eac275b28d',
		name: 'Cultist Mage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +11',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 42,
		initiative: 4,
		ac: 17,
		fortitude: 13,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0be5e427-e851-4cb1-83b6-0d87de0f221c',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'ce8f3c15-10e9-49e8-abec-52591bbe1706',
				name: 'Magic Missile',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d4+4 force damage.',
				damage: '2d4+4 force damage',
				category: 1
			},
			{
				id: 'ffb25d46-87f9-470c-bf02-28a25ae503bd',
				name: 'Dancing Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'The cultist mage makes a separate attack against 3 different targets; 1d6+4 lightning damage.',
				damage: '1d6+4 lightning damage',
				category: 1
			},
			{
				id: '1e6fe7a9-b556-4639-8781-85ffc171a6bf',
				name: 'Flame Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d8+4 fire damage, and the target is dazed (save ends).',
				damage: '1d8+4 fire damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4f43fc8e-94d8-460c-a2a3-d27ed23e7e2a',
		name: 'Gnoll Cultist Enforcer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +5, Stealth +8',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 44,
		initiative: 3,
		ac: 14,
		fortitude: 14,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd9f765d1-eed6-4d10-807d-6b5dfc598ded',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage, or 1d8 + 6 damage while bloodied; see also quick bite and pack attack.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'dd4bdd7c-588d-4d7f-8c3c-6daf7c546d8e',
				name: 'Quick Bite',
				action: {
					action: 7,
					trigger: 'when the gnoll cultist enforcer hits a bloodied enemy with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 3,
					defence: 0
				},
				description: '',
				details: 'The gnoll cultist enforcer makes a bite attack against the same target; 1d6 damage, or 1d6 + 2 damage while bloodied.',
				damage: '1d6 damage',
				category: 5
			},
			{
				id: 'f0bacfd6-1b82-47c6-9b57-d106402d7dd2',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll cultist enforcer deals an extra 5 damage on melee and ranged attacks against an enemy that has two or more of the enforcer’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd309a52f-51e3-4de3-a5c6-f594a8a884f0',
		name: 'Gnome Cultist Fireflinger',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '5 ; see also fey step',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +12, Bluff +8, Insight +6, Stealth +8',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 46,
		initiative: 1,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e3249130-8d96-4a27-a87a-a770b5051da6',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: 'f433731b-6714-4266-949f-8b598e1a0bfb',
				name: 'Fiery Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d6+4 fire damage, and the target is dazed (save ends).',
				damage: '1d6+4 fire damage',
				category: 1
			},
			{
				id: 'bfd18263-42ad-4ed8-a2e8-4f91de849e0a',
				name: 'Flame Spark',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'the target slides 1 square.',
				damage: 'the target slides 1 square',
				category: 3
			},
			{
				id: '1e6d506c-a9cf-4624-9ce7-018aedff7f1e',
				name: 'Shimmering Terrain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is slowed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '24983f08-1fb2-49b2-8460-709c79324dc5',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when the gnome cultist fireflinger takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gnome cultist fireflinger turns invisible until it attacks or until the end of its next turn.',
				damage: '',
				category: 5
			},
			{
				id: '429feb62-b88e-40a2-ac89-a0c1eb9897a2',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gnome cultist fireflinger teleports 5 squares.',
				damage: 'The gnome cultist fireflinger teleports 5 squares',
				category: 2
			},
			{
				id: '405a8390-0478-48f4-a354-29b482fb1c9c',
				name: 'Reactive Stealth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a gnome cultist fireflinger has cover or concealment when it makes an initiative check at the start of an encounter, it can make a Stealth check to escape notice.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '243ef835-fb7a-4814-9f32-31f90c4c27ea',
		name: 'Hobgoblin Cultist Watcher',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Arcana +10, Athletics +4, History +12',
		equipment: '',
		category: 'Goblin',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 46,
		initiative: 5,
		ac: 17,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3046846b-68fd-47d1-a349-1d8220ab9cc5',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '441a0207-5c12-44d8-9bca-8cd75f203004',
				name: 'Fire Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires quarterstaff; 2d10+4 fire damage, and the target is dazed until the end of the hobgoblin cultist watcher’s next turn.',
				damage: '2d10+4 fire damage',
				category: 1
			},
			{
				id: '0ee2045b-74c8-42a7-8a2e-6583b0095496',
				name: 'Force Lure',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '2d6+4 force damage, and the target slides 3 squares.',
				damage: '2d6+4 force damage',
				category: 1
			},
			{
				id: 'f2a8197b-c1b7-47dd-bfda-0727778ae02c',
				name: 'Hell’s Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d8+4 fire damage, and the target is pushed 1 square and knocked prone. Miss: Half damage, and the target is neither pushed nor knocked prone.',
				damage: '2d8+4 fire damage',
				category: 1
			},
			{
				id: '2d07dbe2-a0ee-4e22-a30e-3dd47f5d6f99',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the hobgoblin cultist watcher suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Hobgoblin Cultist Watcher makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ca9dc94f-e318-47b4-b512-7947df0b6786',
		name: 'Dark Smasher',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +11, Thievery +11',
		equipment: 'dagger; greataxe',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 98,
		initiative: 8,
		ac: 19,
		fortitude: 18,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6bb654ac-6beb-44f9-bb76-36acf8a3f299',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d12+5 damage (crit 1d12 +17).',
				damage: '1d12+5 damage (crit 1d12 +17)',
				category: 1
			},
			{
				id: 'aa62d3ab-14e7-403f-94f1-5ab9e8954cb2',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: 'ea455149-5be6-4cd7-9502-e769541635c4',
				name: 'Bloodfury Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The dark smasher makes a melee basic attack and then spends a healing surge.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '46fdd0da-a735-4dd0-bb99-a703720cec7f',
				name: 'Killing Dark',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'targets enemies; each target is blinded (save ends). When slain, a dark creeper explodes in a shower of darkness.',
				damage: '',
				category: 0
			},
			{
				id: '05127dcb-2662-40e4-a425-8e3543b52f5f',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The dark smasher deals +1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '19adcfbc-a339-45e4-afff-401fc5220b7a',
				name: 'Dark Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dark creeper moves up to 4 squares, gains a +4 bonus to AC against opportunity attacks, and gains combat advantage against any target that it ends its move adjacent to.',
				damage: 'The dark creeper moves up to 4 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Brute',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'b6055d58-a64b-4390-a5cc-e941ef540833',
		name: 'Watcher of Shar',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'chainmail; mace; whip',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 62,
		initiative: 3,
		ac: 18,
		fortitude: 14,
		reflex: 14,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '607bf9de-7e32-4f15-9648-026105737b49',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '2ca89132-de2d-4d1d-8888-f668e2862c93',
				name: 'Whip of Shar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Divine, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d4+4 damage and the creature is weakened until the end of the watcher’s next turn.',
				damage: '2d4+4 damage and the creature is weakened until the end of the watcher’s next turn',
				category: 1
			},
			{
				id: 'b3dc6d14-0847-4920-84e7-acdc38b187f3',
				name: 'Shar’s Dark Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Divine, Implement, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d8+4 necrotic damage.',
				damage: '1d8+4 necrotic damage',
				category: 1
			},
			{
				id: '96304433-a5c3-4867-a3e3-86f24b3f70aa',
				name: 'Shadow’s Grasp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Divine, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'the target is dazed until the end of the watcher’s next turn. In addition, the watcher can choose to knock the target prone or slide the target 5 squares.',
				damage: 'the watcher can choose to knock the target prone or slide the target 5 squares',
				category: 1
			},
			{
				id: '308f656f-22f5-44ea-9195-638620a82e2c',
				name: 'Shar’s Move',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Divine',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The watcher teleports 5 squares. He cannot take other creatures with him.',
				damage: 'The watcher teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'b4665c66-fcef-451f-bcf4-2552c08eae43',
		name: 'Almros Hammerhand',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +11, Endurance +5',
		equipment: 'heavy shield; plate armor; throwing hammer; warhammer',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 128,
		initiative: 4,
		ac: 25,
		fortitude: 20,
		reflex: 15,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2d500378-2229-4c83-b676-5f05c4812b26',
				name: 'Warhammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '68ca4ab7-7ceb-45a0-b10c-5ecaf9f0de5e',
				name: 'Shield Bash',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '2d6+3 damage, and the target is knocked prone or pushed 1 square (Almros’ choice).',
				damage: '2d6+3 damage',
				category: 3
			},
			{
				id: '5b16525a-27d1-4fdb-ba3f-e2cca1c67a1e',
				name: 'Throwing Hammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '6d3ff237-3f32-4002-99e8-9d908188c20a',
				name: 'Stubborn',
				action: {
					action: 5,
					trigger: 'when an enemy tries to push almros or knock him prone',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Almros makes a melee basic attack against the triggering enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '02853575-c256-4dde-af76-12bf4209893e',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a dwarf to move—through a push, a pull, or a slide—the dwarf moves 1 square less than the effect specifies. When an attack would knock the dwarf prone, the dwarf gains an immediate saving throw to avoid falling prone.',
				damage: 'or a slide—the dwarf moves 1 square less than the effect specifies',
				category: 0
			},
			{
				id: 'd91ddd28-8dee-4f78-8f09-c2091ce8ffe6',
				name: 'Battle Champion Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Almros and his allies deal an extra 1d6 damage against enemies that Almros flanks.',
				damage: 'almros and his allies deal an extra 1d6 damage against enemies that almros flanks',
				category: 0
			},
			{
				id: '033bfdc9-00d8-4b7e-b343-6c6caabce6fc',
				name: 'Battle Talent',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Almros can score critical hits on attack rolls of natural 19 and 20.',
				damage: 'Almros can score critical hits on attack rolls of natural 19 and 20',
				category: 0
			},
			{
				id: '498a683c-cc6d-40ef-a874-1e609b925f63',
				name: 'Inspiring Assault',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever he scores a critical hit, Almros and all allies within 5 squares of him regain 2 hit points.',
				damage: 'Almros and all allies within 5 squares of him regain 2 hit points',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4d2a8f2d-fbec-4516-93e5-5b2e03efa71e',
		name: 'Dathor the Devastator',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 0,
			flag: 1,
			leader: true
		},
		senses: 'Perception +4',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +10',
		equipment: 'master’s wand of thunderwave; quarterstaff',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 72,
		initiative: 3,
		ac: 18,
		fortitude: 12,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ebc7f2d1-0ee0-4e98-88be-2f40b6743d5d',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 3,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '573f5ec4-9150-46b9-b029-af7cc253b13c',
				name: 'Magic Missile',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d4+4 force damage.',
				damage: '2d4+4 force damage',
				category: 1
			},
			{
				id: '450e0d22-8ca6-4370-8a6d-4ffaf7f2f920',
				name: 'Dancing Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'Dathor makes a separate attack against 3 different targets; 1d6+4 lightning damage.',
				damage: '1d6+4 lightning damage',
				category: 1
			},
			{
				id: '43a8e7a0-31c8-462b-a01f-7cd6ed8d60f6',
				name: 'Thunderwave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Item, Thunder',
				condition: '',
				range: 'close blast 3 or close burst 1',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'Requires master’s wand of thunderwave +1; 1d6+4 thunder damage, and Dathor pushes the target 3 squares.',
				damage: '1d6+4 thunder damage',
				category: 1
			},
			{
				id: 'e71051a1-025b-4d65-af33-1662bb431084',
				name: 'Thunder Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d8+4 thunder damage, and the target is dazed (save ends).',
				damage: '1d8+4 thunder damage',
				category: 1
			},
			{
				id: '1523c00c-b498-4e2e-bed2-372469d89ceb',
				name: 'Critical Hit',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever Dathor scores a critical hit with his magic missile, dancing lightning, thunder burst, or thunderwave powers, he deals an additional 1d8 damage.',
				damage: 'he deals an additional 1d8 damage',
				category: 0
			},
			{
				id: '7c9e62a1-4061-4f34-a298-0562da46d981',
				name: 'Spell Shaper',
				action: null,
				keywords: '',
				condition: '',
				range: 'Whenever Dathor uses a close burst or an area attack power, he can choose up to two allies in the power’s area of effect. These allies are not targeted by the power.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'd3455063-537d-4ed9-98e6-2312ea74ef26',
				name: 'Endless Power',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Dathor regains the use of an expended encounter power. (This may not be used to regain the use of the item power thunderwave.)',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Artillery (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a5526d82-08a9-4237-8273-fceae0734424',
		name: 'Human Soldier',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +5, Intimidate +7, Streetwise +7',
		equipment: 'crossbow; crossbow bolts (20); heavy shield; longsword; scale armor',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 31,
		initiative: 4,
		ac: 17,
		fortitude: 14,
		reflex: 12,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '63f83d8e-cd22-4e89-859a-769005d86f9c',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage, and the target is marked until the end of the human soldier’s next turn.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '2facc07a-43c7-4d93-ab0c-bd1edea09c3b',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'c8d1704c-4cff-4bac-9ef8-50476d527e83',
				name: 'Sly Cut',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires longsword; affects a target marked by the human soldier; 1d8+4 damage, and the target is slowed (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'e0421a98-d089-4388-a3ca-3bfa88b9dc14',
				name: 'Tide of Iron',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Requires shield; 1d8+2 damage, and the target is pushed 1 square if it is Large or smaller. The human soldier can shift 1 square into the space vacated by the target.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '2acb7a4f-9031-4a55-9138-1bdc1a50ff2c',
				name: 'Phalanx',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a human soldier is adjacent to an ally, he or she doesn’t grant combat advantage to flanking enemies.',
				damage: '',
				category: 0
			},
			{
				id: '6f224428-ff15-4bcd-9089-723b1303e800',
				name: 'Marked Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The human soldier deals an extra 1d4 damage on all attacks against a target that is marked by it.',
				damage: 'the human soldier deals an extra 1d4 damage on all attacks against a target that is marked by it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '25a1c0cf-e69d-4edf-b0bc-ad47692fbedf',
		name: 'Deathpriest of Tiamat',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '5',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Draconic',
		skills: 'Arcana +10, Religion +10',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 88,
		initiative: 4,
		ac: 22,
		fortitude: 20,
		reflex: 18,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '37854cdd-42a5-4446-81e5-ea1769c2150d',
				name: 'Death’s Embrace',
				keywords: '',
				details: '(Necrotic) aura 10; each enemy within the aura takes a -2 penalty to death saving throws.'
			}
		],
		powers: [
			{
				id: '4f3b0850-efb6-43a2-a7ee-432176018fe6',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '(+12 while bloodied)1d8+1 damage plus 1d8 necrotic damage.',
				damage: '(+12 while bloodied)1d8+1 damage plus 1d8 necrotic damage',
				category: 1
			},
			{
				id: '70d79425-c515-4d31-915e-9fd017a02294',
				name: 'Ray of Black Ice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '(+10 while bloodied)1d8+3 cold and necrotic damage, and one ally in the deathpriest’s line of sight gains a +2 power bonus to its next attack roll against the target.',
				damage: '(+10 while bloodied)1d8+3 cold and necrotic damage',
				category: 1
			},
			{
				id: '8822b6d8-b8ac-4a1e-97cb-ec88030a9cc9',
				name: 'Dark Blessing',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '(+10 while bloodied)2d8+3 necrotic damage, and the target is pushed 1 square. Effect: The deathpriest and all allies in the burst gain a +2 power bonus to AC until the end of the encounter.',
				damage: '(+10 while bloodied)2d8+3 necrotic damage',
				category: 1
			},
			{
				id: '73aba1f8-233e-47f6-883e-7659712e3f93',
				name: 'Dragon Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '(+10 while bloodied)1d6+3 cold damage.',
				damage: '(+10 while bloodied)1d6+3 cold damage',
				category: 3
			},
			{
				id: '31e0dfa8-ef3d-45a0-9494-c3c14543f500',
				name: 'Dragonborn Fury',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonborn gains a +1 racial bonus to attack rolls while bloodied.',
				damage: 'A dragonborn gains a +1 racial bonus to attack rolls while bloodied',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: '34257a1e-1ae2-4d75-b4d2-f1bde57b3e8c',
		name: 'Drow Demonologist',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +12, Dungeoneering +11, Intimidate +6, Stealth +8',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 64,
		initiative: 6,
		ac: 21,
		fortitude: 17,
		reflex: 19,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3a61953f-74af-469a-8463-ba53fc22e01d',
				name: 'Demonic Rod',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6 damage, and the target is immobilized (save ends); see also Lolth’s judgment.',
				damage: '1d6 damage',
				category: 1
			},
			{
				id: 'b7e89e90-bb98-4b1e-8ac2-bcd8e52f50ee',
				name: 'Immolating Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '2d8+1 fire damage, and ongoing 5 fire damage (save ends); see also Lolth’s judgment.',
				damage: '2d8+1 fire damage',
				category: 1
			},
			{
				id: '24684fdb-8b61-4f75-b098-bb3c105d2939',
				name: 'Demonic Grasp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Zone',
				condition: '',
				range: 'Area burst 4 within 10',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'spectral flames fill the zone (drow and demons are immune); the target is restrained (save ends). The zone is difficult terrain until the end of the encounter. Any creature that starts its turn in the zone takes 5 fire damage.',
				damage: 'any creature that starts its turn in the zone takes 5 fire damage',
				category: 1
			},
			{
				id: 'bcc86eaf-0089-4071-bfb4-edb4b312bfbf',
				name: 'Demon Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Spectral imps swarm over and bite the target: ranged 20',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '1d6+5 necrotic damage, and the target takes ongoing 5 necrotic damage and is weakened (save ends both); see also Lolth’s judgment.',
				damage: '1d6+5 necrotic damage',
				category: 1
			},
			{
				id: '65c53777-c483-4d60-993e-6589860860bf',
				name: 'Flame Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '2d6+8 fire damage. Miss: Half damage.',
				damage: '2d6+8 fire damage',
				category: 1
			},
			{
				id: 'dfa17ac9-a0c5-4471-b2c6-98a3be1107bd',
				name: 'Cloud of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'this power creates a cloud of darkness that remains in place until the end of the drow demonologist’s next turn. The cloud blocks line of sight for all creatures except the drow demonologist. Any creature entirely within the cloud (except the drow demonologist) is blinded until it exits.',
				damage: '',
				category: 3
			},
			{
				id: '347b1648-6768-442e-bb64-55bc826a0eaf',
				name: 'Lolth’s Judgment',
				action: {
					action: 7,
					trigger: 'when the demonologist hits a target with a melee or a ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All demon allies within 20 squares of the demonologist gain a +2 bonus to attack rolls against the target until the end of the demonologist’s next turn.',
				damage: 'All demon allies within 20 squares of the demonologist gain a +2 bonus to attack rolls against the target until the end of the demonologist’s next turn',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Artillery (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '63534b61-aa2b-4d85-a709-acd23da128aa',
		name: 'Adept (White Petal Tong)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6, fly 8',
		alignment: 'Evil',
		languages: 'Common, Chondathan, Shou',
		skills: 'Arcana +13, Diplomacy +9, Insight +11, Stealth +11',
		equipment: 'dagger; implement, wand',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 70,
		initiative: 8,
		ac: 20,
		fortitude: 17,
		reflex: 20,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9c6946e8-3dcb-46ad-9b0e-535a536f4736',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d4 + 4 damage.',
				damage: '1d4 + 4 damage',
				category: 1
			},
			{
				id: '97265a91-dfdb-4f51-9622-2bb578b10274',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '2d4 + 4 damage.',
				damage: '2d4 + 4 damage',
				category: 1
			},
			{
				id: '8b3bc8b0-0b4c-4e61-9b0b-eb47e52efa7b',
				name: 'Snow Fog',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Conjuration',
				condition: '',
				range: 'Area burst 4 within 20 squares, creating a zone of heavy fog that blocks line of sight until the adept’s next turn. The fog cloud can be sustained as a minor action. As a move action, the adept can move the zone up to 6 squares.',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3b81af47-1020-4231-a61a-daefdb734086',
		name: 'Doppleganger Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 8,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +15, Insight +12, Stealth +14',
		equipment: 'dagger',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 69,
		initiative: 13,
		ac: 23,
		fortitude: 18,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '96adf330-9341-4926-a0b7-d80fa563c466',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d4 + 5 damage.',
				damage: '1d4 + 5 damage',
				category: 1
			},
			{
				id: '406398da-00a2-4121-bd8b-af51bee7fe06',
				name: 'Shapeshifter Feint',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'the doppelganger assassin gains combat advantage against the target until the end of the doppelganger assassin’s next turn; .',
				damage: '',
				category: 3
			},
			{
				id: '68dc0ff9-494f-4f5c-b2e7-d67251761dd0',
				name: 'Cloud Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'the doppelganger assassin is invisible to the target. Affected targets are unable to see the doppelganger for as long as it sustains the effect, until the doppelganger attacks, or until it is hit by an attack; .',
				damage: '',
				category: 1
			},
			{
				id: '6b1311e6-8a9a-4d41-807c-28365f24cb4d',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The doppelganger assassin deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the doppelganger assassin deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '6cb2c775-7bb5-4759-806a-b48d3c09d286',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A doppelganger can alter its physical form to take on the appearance of any medium humanoid, including a unique individual',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Lurker',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '46b1a517-223a-467c-bb45-3e8da7af9cce',
		name: 'Tong Initiate (White Petal Tong)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Chondathan, Shou',
		skills: 'Stealth +7, Streetwise +7',
		equipment: 'chainmail; crossbow; halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 47,
		initiative: 5,
		ac: 19,
		fortitude: 16,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '43b4d1a9-2f5f-40a0-a296-4f8e629c2700',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10 + 3 damage and the target is marked until the end of the tong initiate’s next turn.',
				damage: '1d10 + 3 damage and the target is marked until the end of the tong initiate’s next turn',
				category: 1
			},
			{
				id: '9f58fcc1-b896-406b-b194-352be0c1c510',
				name: 'Falling Snow Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The tong initiate can fly 4 squares and make one melee basic attack at any point during that movement. He must both start and end this movement standing upon a solid surface. The tong Initiate does not provoke opportunity attacks when moving away from the target of its attack.',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '1b485b1f-4982-4242-b966-bec540c1c793',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15 / 30',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8 + 3 damage.',
				damage: '1d8 + 3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '91056a90-3f12-4839-a12e-bd6c3a2b656f',
		name: 'Tong Minion (White Petal Tong)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Chondathan, Shou',
		skills: 'Stealth +7',
		equipment: 'chainmail; crossbow; halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 5,
		ac: 33,
		fortitude: 29,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '88925c9c-e1d4-4d35-8874-0d64eb49a296',
				name: 'Iron Hand Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'decc4693-00e3-45f6-84d1-ad62a35267da',
				name: 'Falling Snow Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The tong minion can fly 4 squares and make one melee basic attack at any point during that movement. He must both start and end this movement standing upon a solid surface. The tong Initiate does not provoke opportunity attacks when moving away from the target of its attack.',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a2094e33-3a21-4ae1-a42b-a0364dc3349c',
		name: 'Zen Bow Master (White Petal Tong)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Chondathan, Shou',
		skills: 'Acrobatics +13, Athletics +11, Nature +11, Stealth +13',
		equipment: 'longbow; short sword',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 56,
		initiative: 8,
		ac: 21,
		fortitude: 18,
		reflex: 21,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5cf3e549-284f-4da1-9db7-f363592d8296',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: 'afcd9460-846d-4b1a-a8ee-bacd646bcb58',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '1d10 + 4 damage.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: '2360d821-457b-4e5a-a3cc-b3979bb6b485',
				name: 'Deadly Blossom Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The zen bow master makes three ranged basic attacks, each with a ---2 penalty to the attack roll.',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: '81149fb5-c1d8-43f9-9318-4104560c3d15',
				name: 'Floating Snow Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The zen bow master can fly 4 squares and make one ranged basic attack at any point during that movement. He must both start and end this movement on the ground. The zen bow master does not provoke opportunity attacks when moving away from the target of its attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'd94cd0c2-2ab7-485a-b98d-97c5678d6001',
				name: 'Zen Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'If the zen bow master has not attacked or moved in the previous round he can make an extreme ranged basic attack from any range between 41-80 squares with his longbow with a +2 bonus to attack rolls and +1d6 damage vs. creatures with no cover.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '56373159-7971-43a0-9c4e-303f8d4e88eb',
		name: 'Crazed Necromancer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +10, Religion +10',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 54,
		initiative: 4,
		ac: 18,
		fortitude: 15,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '541879f3-e785-442b-9b0c-133f6a61cb7e',
				name: 'Staff of Death',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 necrotic damage, and the target is immobilized (save ends).',
				damage: '1d6 necrotic damage',
				category: 1
			},
			{
				id: '957e3715-99c3-4b02-9ce8-77c0999e2cce',
				name: 'Grave Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6+4 necrotic damage, and the target is immobilized (save ends).',
				damage: '1d6+4 necrotic damage',
				category: 1
			},
			{
				id: 'fd814a80-00ac-4862-aebe-491a87970426',
				name: 'Horrific Visage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close blast 3 (blast 6 if adjacent to the statue)',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: '1d6 damage, and the target is pushed 3 squares.',
				damage: '1d6 damage',
				category: 1
			},
			{
				id: '1a62abdb-c5b2-45d7-bd13-4a8a67210022',
				name: 'Reanimate',
				action: {
					action: 4,
					trigger: 'when an undead minion ally within 5 squares of the crazed necromancer (10 if adjacent to the statue) is reduced to 0 hit points',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The undead minion ally regains 1 hit point.',
				damage: 'The undead minion ally regains 1 hit point',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd0fb8cbd-0a80-4452-8caf-5f19102f92fd',
		name: 'Wererat Rogue',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 3,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '6, climb 4 (not in human form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +10, Bluff +6, Stealth +10, Streetwise +6, Thievery +10',
		equipment: 'dagger; short sword; thieves’ tools',
		category: 'Wererat',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 57,
		initiative: 7,
		ac: 17,
		fortitude: 15,
		reflex: 18,
		will: 13,
		regeneration: {
			value: 5,
			details: 'if the wererat takes damage from a silver weapon, its regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '43830b74-fc39-472d-8457-348e01bc9657',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'a5831b37-8013-4bc4-bc49-87b88720a5e6',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage plus ongoing 2 damage (save ends), and the target contracts filth fever.',
				damage: '1d4+2 damage plus ongoing 2 damage (save ends)',
				category: 1
			},
			{
				id: '70528a1c-84c4-497d-985e-b9d77445fb20',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '21a23bcf-1edc-4810-8076-7f76f1c35ee8',
				name: 'Riposte Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage. If the target attacks you before the start of your next turn, you make your riposte against the target as immediate interrupt, +8 vs AC; 1d6 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '4d979ef0-f516-4ed9-8c26-8836f9f88368',
				name: 'Setup Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d6+4 damage, and the target grants you combat advantage until the end of your next turn.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'bf9dce13-385a-438c-a8b1-3a664c13d410',
				name: 'Easy Target',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d6+4 damage, and the target is slowed and grants combat advantage to you (save ends both).',
				damage: '2d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'filth fever',
		tactics: '',

		info: 'Level 3 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '30c997cd-e460-4829-a2f0-fefd238dd335',
		name: 'Berdine Gaelle',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, one regional language',
		skills: 'Diplomacy +11, Insight +11, Intimidate +13, Stealth +13, Thievery +11',
		equipment: 'dagger; hide armor',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 196,
		initiative: 7,
		ac: 24,
		fortitude: 22,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '63c103c9-4f45-4101-8a7b-78aea2f14b9d',
				name: 'Daggers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Two attacks; 1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: 'a568ff10-e906-49d9-930e-4e010a1f05e6',
				name: 'Flick of the Wrist',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(minor',
				range: 'Ranged 6/12',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: 'e75eacef-dc66-444a-811e-9f7d8e2a631a',
				name: 'Crushing Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d4+5 damage, and the target is grabbed (until escape).',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: 'ad86828f-7a07-447c-b34a-e796d9ed8814',
				name: 'Strangle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'Grabbed target only; 2d8+4 damage. Miss: half damage.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: '07b5baf2-2f84-4068-9783-6daeb904288e',
				name: 'Choke and Throw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '2d4+5 damage, and the target slides 3 squares, is knocked prone, and is stunned until the end of Berdine’s next turn.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '66dd7aa7-3ab7-4397-b4b3-e2b0837ade20',
				name: 'Quick Counter',
				action: {
					action: 4,
					trigger: 'when an enemy misses berdine with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Berdine makes an attack against that enemy; 1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 5
			},
			{
				id: '69728d9d-c7af-480b-97d5-790893c34ea5',
				name: 'Predatory Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Berdine deals an extra 1d6 damage on the next attack it makes with combat advantage. It must apply this bonus before the end of its next turn.',
				damage: 'berdine deals an extra 1d6 damage on the next attack it makes with combat advantage',
				category: 3
			},
			{
				id: '759eb8a5-83ed-496d-a535-b51b64fa60f6',
				name: 'Quick Draw',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Berdine can draw a weapon as a free action.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '18bbce69-1971-4c4b-93ec-22e9ac4931f1',
		name: 'Gloomblade Dread Warrior',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +14, Stealth +14',
		equipment: 'chainmail; greatsword',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 96,
		initiative: 12,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ce64a983-34d8-4492-87b3-d8677492e343',
				name: 'Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '938ee750-2f93-4189-9f4f-dd929d45381b',
				name: 'Gloomstrike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the gloomblade hits a target that can’t see him, the target is blinded until the end of the gloomblade’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: '90e32f43-d8a4-4ab8-875a-a21261cf961d',
				name: 'Shadow Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gloomblade teleports 3 squares and becomes insubstantial until the start of his next turn.',
				damage: 'The gloomblade teleports 3 squares and becomes insubstantial until the start of his next turn',
				category: 2
			},
			{
				id: 'bfd126c4-cb42-443f-91d3-d49111e365bc',
				name: 'Veil of Shadows',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gloomblade turns invisible and moves up to his speed. The gloomblade cannot use this power while bloodied.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Elite Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '6285bdbc-184a-4f84-8cb4-e5e4801410dc',
		name: 'Death Master Specter',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 3,
		role: {
			type: 4,
			flag: 1,
			leader: true
		},
		senses: 'Perception +5; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +8',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 52,
		initiative: 7,
		ac: 17,
		fortitude: 17,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: '6336a3f2-8516-4b40-a0d3-6d00258144f0',
				name: 'Shroud of the Grave',
				keywords: '',
				details: '(Necrotic) aura 5; all undead lose any vulnerability to radiant damage.'
			},
			{
				id: '5a2f70ed-f084-48c6-a06c-30199afdb93d',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: 'fe8d53e2-4c96-4d28-ac97-dd453af44fb3',
				name: 'Spectral Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6+2 necrotic damage.',
				damage: '1d6+2 necrotic damage',
				category: 1
			},
			{
				id: '963adace-cfc1-4db8-b5b0-0329a5ec9571',
				name: 'Spectral Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Illusion, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+2 psychic damage, and the target is knocked prone.',
				damage: '2d6+2 psychic damage',
				category: 1
			},
			{
				id: '4754bfd6-cf92-4cd9-b4f8-2dcf68b4d414',
				name: 'Call of the Grave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'four undead minions of the death master’s level, or lower, appear in any unoccupied space within range. These undead minions take their turns immediately after the death master.',
				damage: '',
				category: 1
			},
			{
				id: 'cc253ef6-91db-4871-99ba-4f6bd8b7a6f5',
				name: 'Invisibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The specter becomes invisible until it attacks or until it is hit by an attack.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 3 Elite Lurker (L)',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'e6f90c75-4d35-4e0d-a2ad-9547bf8779f1',
		name: 'Animated Statue',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 2,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +1; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 86,
		initiative: 2,
		ac: 17,
		fortitude: 16,
		reflex: 12,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f40721c0-2299-4537-bc38-fd71b2c489db',
				name: 'Smashing Fist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: '8093d567-9ea4-40cc-9af5-f6cb074c37a6',
				name: 'Knockdown Fist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 3,
					defence: 1
				},
				description: '',
				details: '2d6+3 and knock prone.',
				damage: '2d6+3 and knock prone',
				category: 1
			},
			{
				id: '632a0d28-b5d9-4532-a14d-ac9ffb9a043a',
				name: 'Kick when Down',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When adjacent to a prone enemy at the end of its turn, the Animated Statue may make a smashing fist attack against that enemy',
				damage: '',
				category: 4
			},
			{
				id: '383c4d47-de0d-42a7-b3f7-0907fddfcf4d',
				name: 'Keep Them Down',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an adjacent enemy attempts to stand, make a Smashing Fist against that foe. On hit, the target stays prone and its turn ends.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'charm, fear, poison, sleep',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Elite Brute',
		phenotype: 'Medium natural animate (construct)'
	},
	{
		id: 'e357ae5f-3685-440f-bb75-7968e93694d6',
		name: 'Helvec',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +2; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +9, Bluff +9, Intimidate +9',
		equipment: 'quarterstaff; ritual book',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 47,
		initiative: 2,
		ac: 14,
		fortitude: 13,
		reflex: 14,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '1927cf60-e150-4289-9b8e-47e3e5863920',
				name: 'Magic Circle',
				keywords: '',
				details: 'Helvec gains +2 to his defenses on the platform.'
			}
		],
		powers: [
			{
				id: '3fbe195e-9176-4a30-a8d9-0857401c8754',
				name: 'Dark Staff Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+1 damage.',
				damage: '1d6+1 damage',
				category: 1
			},
			{
				id: 'e504c986-fc7d-407c-8caa-6625a27923f6',
				name: 'Bone-Wearying Glance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 5,
					defence: 1
				},
				description: '',
				details: 'two targets; 1d6+2 necrotic damage and slowed (save ends).',
				damage: '1d6+2 necrotic damage and slowed (save ends)',
				category: 1
			},
			{
				id: '62a939cb-4c3b-4967-a623-9988ceb32d9e',
				name: 'Vampiric Embrace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: '1d8+2 necrotic damage and Helvec heals 5 hp.',
				damage: '1d8+2 necrotic damage and helvec heals 5 hp',
				category: 1
			},
			{
				id: '48d9cfca-7266-4ee7-8070-360223315604',
				name: 'Flesh-Rotting Cloud',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 1
				},
				description: '',
				details: 'Burst 2 within 10; living creatures only; 1d6+3 necrotic damage and undead gain +2 attack and +2 damage against target (save ends).',
				damage: '1d6+3 necrotic damage and undead gain +2 attack and +2 damage against target (save ends)',
				category: 1
			},
			{
				id: 'b99e2cc0-f3af-469c-ae47-22921898ad96',
				name: 'Necromantic Reinvigoration',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Burst 5; undead creatures regain 5 hit points.',
				damage: 'Burst 5',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller (L)',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '2fb71386-7d38-4e76-b05d-8cbc1f1bf4bb',
		name: 'Hobgoblin Mercenary',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 2,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +11, History +8',
		equipment: 'arrow; light shield; longbow; longsword',
		category: 'Goblin',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 39,
		initiative: 7,
		ac: 19,
		fortitude: 17,
		reflex: 12,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7f2427fc-d841-4dce-a690-e2a2a60a14a4',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '52000c3a-f225-40a5-bbf6-1791e7ef48e9',
				name: 'Longbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: '2531d441-fe7a-4684-8b6a-ac0b437da117',
				name: 'Phalanx Soldier',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A hobgoblin soldier gains a +2 bonus to AC while at least one hobgoblin ally is adjacent to it.',
				damage: 'A hobgoblin soldier gains a +2 bonus to AC while at least one hobgoblin ally is adjacent to it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium natural humanoid (goblin)'
	},
	{
		id: 'd538e745-e4d2-41cc-ba64-02c0a386ce1b',
		name: 'Prisoner',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 1,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		dexterity: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 27,
		initiative: 1,
		ac: 9,
		fortitude: 11,
		reflex: 10,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '32ba26d4-1263-4ec5-a5f1-ad714c0daa7f',
				name: 'Fist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 0,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'aa81684c-89d3-42b3-a210-c14fe62186fd',
		name: 'Shadow Spirit',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '7, fly 7 phasing',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +9, Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 44,
		initiative: 6,
		ac: 19,
		fortitude: 17,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f8adfb8c-5ed8-4fd3-b014-a53a5b309df6',
				name: 'Shadow Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d6+2 damage.',
				damage: '2d6+2 damage',
				category: 1
			},
			{
				id: '93e6dfff-30ff-4d38-b96b-0514f8a2e799',
				name: 'Life Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d8+2 damage, and the target is weakened until the end of the shadow spirit’s next turn.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '5ddd8ec0-014f-4b55-a51a-cc32744e6c78',
				name: 'Shadow Hunger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: '+1d6 damage against weakened targets.',
				damage: '+1d6 damage against weakened targets',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'poison',
		tactics: '',

		info: 'Level 4 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '0cb4ba54-0d59-46fe-b556-f0752d71bded',
		name: 'Skeleton Trooper',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common (understand only)',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 29,
		initiative: 4,
		ac: 16,
		fortitude: 14,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c0b0fdda-515d-4ab3-a568-a7065a053f42',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'fa60043d-1ebe-4339-9a03-a8fc154a1267',
				name: 'Forward the Line',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 1
				},
				description: '',
				details: '1d6+2 damage, and push 1.',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: '4b777742-c90b-4efa-a9d7-92ed86c2e7c0',
				name: 'Speed of the Dead',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: '2 bonus on attack rolls and +1d6 damage with opportunity attacks.',
				damage: '2 bonus on attack rolls and +1d6 damage with opportunity attacks',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'Poison',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '6792c6ac-733b-4422-be91-02cd94d1dd9e',
		name: 'Cult Fanatic',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human, orc; half-orc',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 5,
		ac: 16,
		fortitude: 15,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95f1802a-7248-4c3d-82e4-fe6d2fb396de',
				name: 'Glass Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '488f69bb-ac13-4025-b94b-d8ddc91c1e0d',
				name: 'Death Strike',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'The cult fanatic makes a dagger attack against each adjacent enemy.; .',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural humanoid (human, orc; half-orc)'
	},
	{
		id: '1005f4e2-20c1-45cc-8a07-b92c64a1bb69',
		name: 'Cultist Eyeblade',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +9, Athletics +7, Stealth +9',
		equipment: 'dagger; short sword',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 45,
		initiative: 6,
		ac: 17,
		fortitude: 14,
		reflex: 15,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3b0511f9-8047-46b9-85b8-3273d670d310',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+6 Damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '17eb5fe3-951c-42f9-ad34-41147ccfc2de',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d4+5 Damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '6ead03bd-8a41-40d1-84e9-14023a869965',
				name: 'Belashyrra’s Blade',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The cultist eyeblade gains combat advantage against any enemy marked by an ally.',
				damage: '',
				category: 0
			},
			{
				id: '5ce1af03-6fab-4d59-9bf4-7b100c3be5f7',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The cultist eyeblade deals 1d6 extra damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'e359135d-598d-4409-abc5-583894ac89e5',
		name: 'Dolgaunt Acolyte',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'blind',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; blindsight 20',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +9, Athletics +8',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 55,
		initiative: 3,
		ac: 18,
		fortitude: 15,
		reflex: 15,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2aa77947-2572-4a42-bafd-326e23e5d590',
				name: 'Leaching Tentacle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d6+5 damage, and the dolgaunt acolyte gains 5 temporary hit points.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'dde70c05-3a3c-4c80-aa14-977d836984ca',
				name: 'Warp Flesh',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: '1d6+6 necrotic damage, and the target is immobilized (save ends).',
				damage: '1d6+6 necrotic damage',
				category: 1
			},
			{
				id: '8a381c15-45d3-45bd-9054-9d12a7bd7e06',
				name: 'Maddening Whispers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 5,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d6+4 psychic damage and the target slides 3 squares.',
				damage: '1d6+4 psychic damage and the target slides 3 squares',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'gaze',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium aberrant humanoid (blind)'
	},
	{
		id: 'd4fa2b5c-6a65-431c-9971-298402f89ee2',
		name: 'Living Darkness',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'blind, ooze',
		level: 6,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; blindsight 10',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 168,
		initiative: 7,
		ac: 18,
		fortitude: 17,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a558cb68-adf6-4b56-99c3-7d8b6f4c3d2b',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '2d8 + 4 necrotic damage.',
				damage: '2d8 + 4 necrotic damage',
				category: 1
			},
			{
				id: '5d96a7dc-e4d2-4211-a4cb-ac8af0893670',
				name: 'Engulf',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'On a hit, the target is grabbed and pulled into the living darkness’s space; the target is dazed and takes ongoing 10 necrotic damage until the grab ends. A creature that escapes the grab shifts to a square of its choosing adjacent to the living darkness. The living darkness can move normally while creatures are engulfed within it.; Targets one or two Medium or smaller creatures; .',
				damage: 'the target is dazed and takes ongoing 10 necrotic damage until the grab ends',
				category: 1
			},
			{
				id: 'c24bb52d-0b2a-4bfe-99b5-2c2a24fcd166',
				name: 'Cloud Drift',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The living darkness shifts its speed and can move through enemies’ spaces. It must end this movement in an unoccupied space.',
				damage: '',
				category: 2
			},
			{
				id: '4e03eb01-7628-474f-b6b2-8fbdc1b776bd',
				name: 'Chilling Move',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'On its turn, if the living darkness moves through a creature’s space, that creature takes 5 necrotic damage.',
				damage: 'that creature takes 5 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 10
			}
		],
		resist: 'insubstantial (does not apply to radiant damage)',
		vulnerable: '',
		immune: 'gaze, poison',
		tactics: '',

		info: 'Level 6 Elite Brute',
		phenotype: 'Large aberrant beast (blind, ooze)'
	},
	{
		id: '80952c3d-77f9-4a24-b0c7-ec32cde67a3e',
		name: 'Orc Warden',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Evil',
		languages: 'Common, Giant, Deep Speech',
		skills: 'Athletics +11, Endurance +10',
		equipment: 'greataxe; hide armor',
		category: 'Orc',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 56,
		initiative: 4,
		ac: 20,
		fortitude: 17,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '96ab8b77-834e-46b0-8354-e7dd1f4fb8f5',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d12+4 damage.',
				damage: '1d12+4 damage',
				category: 1
			},
			{
				id: 'd9155c5b-6f87-48ef-951f-d9439b9f8c55',
				name: 'Tongueworm',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '(If the attack roll is a 1, the orc warden is dazed until the end of its next turn.)1d6+1 poison damage.',
				damage: ')1d6+1 poison damage',
				category: 3
			},
			{
				id: 'f69cd4fe-fb23-4a7f-9bc0-6f562844803d',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'healing, weapon',
				condition: '',
				range: 'The orc warden makes a melee basic attack and regains 14 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'b924b4db-4153-456d-a381-d954f4fae938',
				name: 'Belashyrra’s Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The orc warden makes a melee basic attack and regains 14 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: '9763593e-92d4-42d2-8055-0ea4186515bf',
				name: 'Warden’s Wrath',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The orc warden makes a basic attack against the triggering enemy.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd4658089-4a1f-4761-871a-7e5fd5087102',
		name: 'Toraash',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 4,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; blindsight 5, low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Evil',
		languages: 'Common, Giant, Deep Speech',
		skills: 'Athletics +11, Endurance +10',
		equipment: 'greataxe',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 112,
		initiative: 6,
		ac: 22,
		fortitude: 19,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: '7fbc45af-9ad5-4efa-9c61-0ceb8fe49dbd',
				name: 'Watchful Eye',
				keywords: '',
				details: 'aura 1; an enemy that begins its turn in the aura is marked until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '84ce2d87-e172-4469-ac7b-36e908b3e6a6',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d12 + 4 damage.',
				damage: '1d12 + 4 damage',
				category: 1
			},
			{
				id: '2dc2d253-4e0c-40d7-8ad7-de2d697177ce',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: 'usable only while bloodied',
				range: 'Toraash makes a melee basic attack and regains 28 hit points',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: 'ff5641d6-4fc4-4f51-85bf-f804a54a8197',
				name: 'Intimidating Presence',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'targets a marked enemy; 1d4 + 3 damage, and the target is dazed until the end of its next turn.',
				damage: '1d4 + 3 damage',
				category: 3
			},
			{
				id: 'd31ae827-23fe-4d6d-8ba9-b047bc8a5214',
				name: 'Furious Surge',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Toraash makes an intimidating presence attack against each marked enemy within the burst, with a +2 bonus to the attack roll.; .',
				damage: 'with a +2 bonus to the attack roll',
				category: 5
			},
			{
				id: '04885d4c-e254-49ab-aec2-e918405ab398',
				name: 'Warden’s Wrath',
				action: {
					action: 5,
					trigger: 'when an adjacent enemy toraash has marked makes an attack that does not include him as a target',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Toraash makes a basic attack against the triggering enemy',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -10
			},
			{
				type: 7,
				value: -10
			},
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Soldier',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '572d3a56-d06d-4b98-abf7-8e00fe43bef2',
		name: 'Feyborn Ettercap Webspinner',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'spider',
		level: 8,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11',
		movement: '5, climb 5 (spider climb)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +11',
		equipment: 'leather armor; longspear',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 168,
		initiative: 8,
		ac: 22,
		fortitude: 20,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f609b482-6e0f-4bc2-b9b3-bf8c84f61d1d',
				name: 'Lognspear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '3d3a0f6b-08c0-4fe2-a913-7879d8fce04a',
				name: 'Spider Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Requires combat advantage; 1d6+5 damage, and the ettercap makes a secondary attack against the same target. Secondary Attack: +11 vs. Fortitude; ongoing 5 poison (save ends).',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'c9f162dd-d21e-45ac-bbc4-b4bd45f3b3a2',
				name: 'Undeniable Beauty',
				action: {
					action: 5,
					trigger: 'when feyborn creature is targeted by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'against attacker; the attacker must target a different creature or end its attack.',
				damage: '',
				category: 5
			},
			{
				id: '38800ad7-9b0d-48d4-b26c-7e71e1252d6d',
				name: 'Lure of the Wild',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'target is pulled 5 squares and dazed (save ends).',
				damage: 'target is pulled 5 squares and dazed (save ends)',
				category: 1
			},
			{
				id: '0101e883-305a-48a6-8687-cb70018859eb',
				name: 'Web Net',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'the target is restrained (save ends).',
				damage: '',
				category: 3
			},
			{
				id: 'dd3944f9-150a-4b21-9350-8cbc5b186ac1',
				name: 'Webbed Terrain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'the target is immobilized (save ends). The zone is filled with spider webs and is considered difficult terrain until the end of the encounter.',
				damage: '',
				category: 1
			},
			{
				id: '3856b95c-9816-4589-81f2-93a133ea74ae',
				name: 'Step Through the Mists',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The feyborn creature teleports up to 3 squares.',
				damage: 'The feyborn creature teleports up to 3 squares',
				category: 2
			},
			{
				id: '02b8ff4e-7474-4768-80bb-2f691e28212b',
				name: 'Web Walker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An ettercap ignores movement effects of spider webs and difficult terrain related to spider swarms.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Skirmisher',
		phenotype: 'Medium fey humanoid (spider)'
	},
	{
		id: '0dd4ce43-533b-452a-a31f-07aacfd68540',
		name: 'Moonshadow',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '6 see also fey step',
		alignment: 'Good',
		languages: 'Common, Elven',
		skills: 'Arcana +19, History +19, Nature +13',
		equipment: 'spear',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 1,
		initiative: 10,
		ac: 29,
		fortitude: 26,
		reflex: 28,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '315ba04b-debf-40a2-9828-74abce5af3a3',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage and the target is slowed until the end of Moonshadow’s next turn.',
				damage: '1d8+4 damage and the target is slowed until the end of moonshadow’s next turn',
				category: 1
			},
			{
				id: '7264bb3c-2327-48d1-a309-c9992a309b1f',
				name: 'Binding Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '1d8+6 damage and the target is immobilized until the end of Moonshadow’s next turn.',
				damage: '1d8+6 damage and the target is immobilized until the end of moonshadow’s next turn',
				category: 1
			},
			{
				id: '9b15c2bd-eefd-4d28-9f33-be1787819337',
				name: 'Teleporting Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage and the target is teleported up to 3 squares. The target cannot be teleported into an unsafe square.',
				damage: '1d8+5 damage and the target is teleported up to 3 squares',
				category: 1
			},
			{
				id: '0a1c4aab-0446-4e8c-b91b-3be327adca98',
				name: 'Dazzling Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d6+6 radiant damage, and the target is blinded until the end of Moonshadow’s next turn.',
				damage: '2d6+6 radiant damage',
				category: 1
			},
			{
				id: '3bddbe16-a8d4-4ce3-882d-a18d8e47caa2',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Moonshadow can teleport 5 squares.',
				damage: 'Moonshadow can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'd375913e-1771-4862-aa1f-cb915260e006',
		name: 'Marlug',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 9,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +10, Athletics +14, Stealth +12, Thievery +12',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 198,
		initiative: 10,
		ac: 25,
		fortitude: 24,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e262e09f-ebe8-4ca0-93fc-b13f574f50a6',
				name: 'Withering Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage and the target is slowed and takes a -2 penalty to attack rolls (save ends).',
				damage: '2d8+5 damage and the target is slowed and takes a -2 penalty to attack rolls (save ends)',
				category: 1
			},
			{
				id: 'f74cecce-80ce-4567-9904-0a16157f35ca',
				name: 'Throat Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage, and the target is grabbed. Marlug can grab only one creature at a time.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '97680bba-1d52-485e-bae7-1f343637c1de',
				name: 'Devour Soul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'Reach 2; affects immobilized target only; 3d8+5 psychic damage, and Marlug regains 10 hit points.',
				damage: '3d8+5 psychic damage',
				category: 1
			},
			{
				id: 'd40699f8-af3f-49e7-83e4-8de9d86350af',
				name: 'Soul Heave',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+5 psychic damage and the target is pulled into an unoccupied space adjacent to Marlug.',
				damage: '2d6+5 psychic damage and the target is pulled into an unoccupied space adjacent to marlug',
				category: 3
			},
			{
				id: 'fd212c2f-71b6-4664-8852-d891974ee8d2',
				name: 'Demonic Vigor',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Marlug gains 1 action point whenever he reduces a foe to 0 hit points or less with his devour soul attack.',
				damage: 'Marlug gains 1 action point whenever he reduces a foe to 0 hit points or less with his devour soul attack',
				category: 0
			},
			{
				id: 'b41f0e57-4c8d-43b6-ab68-251b75e7652f',
				name: 'Lifebound',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When reduced to 0 hit points or less, Marlug returns to life at 9 hit points after two rounds unless the Dark Heart of the Altar is destroyed.',
				damage: 'Marlug returns to life at 9 hit points after two rounds unless the Dark Heart of the Altar is destroyed',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			}
		],
		resist: '10 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Controller',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: 'df90c5c0-d674-4541-bc4a-cec0e17bcaed',
		name: 'Pelgor',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +13, Religion +13',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 92,
		initiative: 6,
		ac: 25,
		fortitude: 24,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1c0100c9-45bb-4c9c-8e84-97b581447217',
				name: 'Barbed Rod',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage, and ongoing 5 damage (save ends).',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '6ffe2194-db74-43f6-b337-f7aa0314aa28',
				name: 'Hellish Rebuke',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Arcane, Fire',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '1d6+8 fire damage. If Pelgor takes damage before the end of his next turn, the target takes an extra 1d6+5 fire damage.',
				damage: '1d6+8 fire damage',
				category: 1
			},
			{
				id: 'ba748fc5-a4f4-447a-b401-4fbc9c4672d4',
				name: 'Howl of Doom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Arcane, Fear, Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '2d6+8 thunder damage, and the target is pushed 5 squares.',
				damage: '2d6+8 thunder damage',
				category: 1
			},
			{
				id: '596aae62-ee19-4ef0-8f51-994aa5a95c0b',
				name: 'Summons of Marlug',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Psychic, Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d10+8 psychic damage, and Pelgor teleports the target to an unoccupied square within 3 squares of him. Sustain Minor: +16 vs. Will; Pelgor teleports the target to an unoccupied square within 3 squares of him. On a miss, the effect ends.',
				damage: '2d10+8 psychic damage',
				category: 1
			},
			{
				id: '7ff87920-b8ec-45c7-a954-2987cd50e1bf',
				name: 'Shielding Shades',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Arcane',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Reduce the damage from the attack to 0.',
				damage: 'reduce the damage from the attack to 0',
				category: 5
			},
			{
				id: '5ea3af01-fca6-4add-8390-4a51068cdd3b',
				name: 'Soulbound',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Pelgor is ever more than 3 squares away from the altar, his powers deal -2 damage and he cannot use his summons of Marlug power.',
				damage: 'his powers deal -2 damage and he cannot use his summons of marlug power',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'b85f03e4-edda-45f9-b1cf-1386d8cb5691',
		name: 'Berrian Truescourge',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Arcana +15, History +15, Nature +9',
		equipment: 'spear',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 66,
		initiative: 6,
		ac: 20,
		fortitude: 17,
		reflex: 19,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'be5ef312-5a9e-4edf-a310-e8828d3ebb0e',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 damage, and the target is slowed until the end of Berrian’s next turn.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '03b6b51e-c88d-4187-98af-36e64f0fe930',
				name: 'Binding Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d8+2 damage, and the target is immobilized until the end of Berrian’s next turn.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '997ceb83-4905-40a9-930b-c01dd212a58e',
				name: 'Teleporting Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d8+1 damage, and the target is teleported up to 3 squares. The target cannot be teleported into an unsafe space.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'f5c8e04d-a372-4a86-92cd-888fdbfe2052',
				name: 'Dazzling Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: '2d6+2 radiant damage, and the target is blinded until the end of Berrian’s next turn.',
				damage: '2d6+2 radiant damage',
				category: 1
			},
			{
				id: 'b6e32ed1-4d6b-4c3b-b5c6-0626cda3130e',
				name: 'Fey Step',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Berrian can teleport 5 squares.',
				damage: 'Berrian can teleport 5 squares',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'bca2a360-e65b-49fc-aaac-47133412de77',
		name: 'Feyborn Ant Swarm',
		details: '',
		size: 2,
		origin: 2,
		type: 1,
		keywords: 'swarm',
		level: 3,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '4, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 88,
		initiative: 10,
		ac: 18,
		fortitude: 15,
		reflex: 19,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '8946588e-9d9d-4a7f-a647-7fc6e392de6d',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the ant swarm makes a basic attack as a free action against each enemy that begins its turn in the aura.'
			}
		],
		powers: [
			{
				id: 'cd6e5c37-5fc4-4039-9b13-6e0c4ba0c4da',
				name: 'Swarm of Mandibles',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage, and ongoing 3 damage (save ends).',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'e909a5e8-8d03-4cae-b46a-8e71151fc4fe',
				name: 'Undeniable Beauty',
				action: {
					action: 5,
					trigger: 'when feyborn creature is targeted by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 3
				},
				description: '',
				details: 'against the attacker; the attacker must target a different creature or end its attack.',
				damage: '',
				category: 5
			},
			{
				id: '33267fc8-97f6-4bea-a6f2-6cd1f37087e0',
				name: 'Lure of the Wild',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 5,
					defence: 3
				},
				description: '',
				details: 'The target is pulled 5 squares and is dazed (save ends).',
				damage: 'The target is pulled 5 squares and is dazed (save ends)',
				category: 1
			},
			{
				id: '1708faf3-d73b-4193-a260-6b0a3145f850',
				name: 'Step Through the Mists',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The feyborn creature teleports up to 3 squares.',
				damage: 'The feyborn creature teleports up to 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '5 against close and area attacks',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Skirmisher',
		phenotype: 'Medium fey beast (swarm)'
	},
	{
		id: '8faf1697-5811-4158-a113-22662697c80b',
		name: 'Voldini Archer',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Nature +10, Stealth +9',
		equipment: 'arrows (30); leather armor; longbow; short sword',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 26,
		initiative: 4,
		ac: 14,
		fortitude: 10,
		reflex: 12,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c3fec939-bc98-472a-b403-af1097671012',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'f7562129-06cf-48f2-9384-793c85c95174',
				name: 'Longbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'e82f3250-3fc7-40a8-80f2-e6e5329e8d80',
				name: 'Archer’s Mobility',
				action: null,
				keywords: '',
				condition: '',
				range: 'If the archer moves at least 4 squares from its original position, it gains a +2 bonus to ranged attack rolls until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '12320111-7899-4613-b2eb-b4df6a8d7dcb',
				name: 'Elven Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The archer can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: 'a4db01ea-894b-4674-93c0-06a77603d447',
				name: 'Not So Close',
				action: {
					action: 4,
					trigger: 'when an enemy makes a melee attack against the archer',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The archer shifts 1 square and makes a ranged attack against the enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '35169fc5-1804-4ca7-8486-383b9f37e1e3',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The archer ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'caeda84f-ae2a-4722-9f44-0dae3ae9a6d9',
		name: 'Voldini Cultist',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Arcana +2, History +2, Nature +6',
		equipment: 'leather armor; light shield; longsword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 16,
		fortitude: 12,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e33d58a6-89e5-4db9-b4c3-b9969a21436e',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: 'ea6dd50e-223a-4fd5-ad07-08ee1e05812c',
				name: 'Fey Step',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The cultist can teleport 5 squares.',
				damage: 'The cultist can teleport 5 squares',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '3ef21d12-66c0-4aca-9a94-b25280f5eb3a',
		name: 'Ostram del’Fargo',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +11, Stealth +9, Thievery +11',
		equipment: 'dagger; goblin totem; dagger; leather armor; thieves’ tools',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 34,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ea5190dc-f6b8-47c5-8b3d-8852e06604f1',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage, or 1d4+4 damage against medium sized opponents.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: 'd657e152-b4d7-45cf-82b7-3643c4f78fc6',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage, or 1d4+4 damage against medium sized opponents.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: 'a448bc5b-72a3-44e8-9f14-d779de2aae4f',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The halfling can move up to 3 squares and make one melee basic attack at any point during that movement. The halfling thief doesn’t provoke opportunity attacks when moving away from the target of its attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '1a9609fd-3cac-468e-874e-ff23dceb1fd5',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The halfling thief deals an extra 1d6 damage on melee attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '00169658-4006-435e-88aa-8235c4bc2470',
				name: 'Nimble Reaction',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Halflings gain a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Halflings gain a +2 racial bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: 'ab6a185d-1977-4422-9db6-0fd99dbda03b',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the halfling would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The halfling thief forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Small natural humanoid'
	},
	{
		id: 'f7f716fd-fed7-47f0-91da-f2ea417bd653',
		name: 'Selmik the Master Rat',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 2,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7; low-light vision',
		movement: '6, climb 4 (not in human form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +6, Stealth +10, Streetwise +6, Thievery +10',
		equipment: 'short sword',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 72,
		initiative: 7,
		ac: 18,
		fortitude: 16,
		reflex: 15,
		will: 12,
		regeneration: {
			value: 5,
			details: 'if the wererat takes damage from a silver weapon its regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: 'a291a275-a34a-4b48-8106-28b76a3c3367',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'bc211115-d8f5-44cc-816d-973c7b3aa71d',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage and the target takes ongoing 2 damage (save ends) and contracts filth fever.',
				damage: '1d4+2 damage and the target takes ongoing 2 damage (save ends) and contracts filth fever',
				category: 1
			},
			{
				id: '2844f5a0-f106-4ec4-b448-fdffded35eae',
				name: 'Summon Dire Rat',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Summoning',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Selmik summons one dire rat to fight for him. The rat appears beneath a trapdoor (DM’s choice). If Selmik is standing on his hallowed fountain, then he summons one extra dire rat. The dire rat acts on Selmik’s initiative.',
				damage: '',
				category: 3
			},
			{
				id: 'bbb34584-6487-47f9-9d11-d65a54bc723e',
				name: 'Inspire Rat Servants',
				action: null,
				keywords: '',
				condition: '',
				range: 'Selmik and any rat it directs deals an extra 1d6 damage on melee attacks against any target they have combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'filth fever',
		tactics: '',

		info: 'Level 2 Elite Skirmisher (L)',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '08d7af81-769e-44a8-a314-559328197136',
		name: 'Zombie Abomination',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 4,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +4',
		movement: '7, climb 7',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'bastard sword',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 232,
		initiative: 4,
		ac: 18,
		fortitude: 22,
		reflex: 18,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6a774930-dfeb-484a-b07e-abfd60002aef',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12+5 damage and the target is marked until the end of the abomination’s next turn.',
				damage: '1d12+5 damage and the target is marked until the end of the abomination’s next turn',
				category: 1
			},
			{
				id: '94a59853-a452-4eb4-92c6-3faefba7b550',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'The zombie abomination makes two bastard sword attacks.; 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'ca655528-ebcb-404c-bcef-d4d811b752ef',
				name: 'Grasping Coils',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 2
				},
				description: '',
				details: 'the target is pulled 1 square and grabbed (until escape). The abomination can grab only one creature at time. Checks made to escape the abomination’s grab take a -5 penalty.',
				damage: 'the target is pulled 1 square and grabbed (until escape)',
				category: 3
			},
			{
				id: 'a13e2467-2ff4-4479-8869-648141d94374',
				name: 'Crush',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 1
				},
				description: '',
				details: 'Grabbed target only; 2d8+4 damage.',
				damage: '2d8+4 damage',
				category: 3
			},
			{
				id: 'de8ed018-1f12-429b-a060-18858f275c54',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: 'the first time the abomination drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Make a new initiative check for the abomination. On its next turn, the abomination rises (as a move action) with 116 hit points',
				damage: 'the abomination rises (as a move action) with 116 hit points',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Solo Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: '6e8b1587-5f96-4233-a2be-12a1bd8959a3',
		name: 'Human Bowman Lackey',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 7,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
		skills: '',
		equipment: 'club; leather armor',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 6,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '836ec70f-c35b-4447-af7a-bba5b023da68',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: 'dc6e6a0d-d1c2-4689-aa07-9a6250452600',
				name: 'Bow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '7bba08ed-d6d7-4d4b-b888-1fdcf955bb17',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A human lackey gains a +2 power bonus to all defenses while at least two other human lackeys are within 5 squares of it.',
				damage: 'A human lackey gains a +2 power bonus to all defenses while at least two other human lackeys are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'f6c98b1e-753b-4984-90c8-dd7c22b02d2d',
		name: 'Laundae Ethari',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 9,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +9, Arcana +13, Religion +13, Stealth +14',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 178,
		initiative: 7,
		ac: 25,
		fortitude: 22,
		reflex: 23,
		will: 23,
		regeneration: {
			value: 5,
			details: 'regeneration does not function while Laundae Ethari is exposed to direct sunlight'
		},
		auras: [
			{
				id: 'f32c1795-e8c2-4529-9fc4-48dafb082526',
				name: 'Deep Shadow',
				keywords: '',
				details: '(Necrotic) Aura 2; thick, writhing shadows surround the shadar-kai witch. The witch and any other shadow creatures in the aura gain concealment. In addition, enemies that enter or start their turns in the aura take 5 necrotic damage, and enemies (including flying ones) also treat the area within the aura as difficult terrain. The shadar-kai witch can sustain the aura as a minor action. However, the effect ends if she uses shadow jaunt or moves more than half her speed on her turn.'
			}
		],
		powers: [
			{
				id: '75a34f4d-4100-4e6f-8c38-9b8e504e513c',
				name: 'Blackfire Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '2d6+5 fire and necrotic damage.',
				damage: '2d6+5 fire and necrotic damage',
				category: 1
			},
			{
				id: 'd01165d5-4531-4f18-b0c7-edb77b0e4ae7',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when an adjacent creature becomes bloodied'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 2d12+7 damage, and the target is weakened (save ends), and Laundae Ethari regains 44 hit points.',
				damage: '2d12+7 damage',
				category: 1
			},
			{
				id: '60c5a194-09bf-4783-8e11-71d6a1c562e5',
				name: 'Beshadowed Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: '2d6+5 necrotic damage, and the target has no line of sight to anything more than 2 squares from it (save ends).',
				damage: '2d6+5 necrotic damage',
				category: 1
			},
			{
				id: 'b8835d4b-3309-4593-ab69-2fde8ec56b7f',
				name: 'Dominating Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends, with a -2 penalty on the saving throw). Aftereffect: The target is dazed (save ends). Laundae Ethari can dominate only one creature at a time.',
				damage: 'with a -2 penalty on the saving throw)',
				category: 3
			},
			{
				id: '6146f3d1-5a84-4e91-9593-c67715d92eb2',
				name: 'Mist Form',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Laundae Ethari becomes insubstantial and gains a fly speed of 12, but cannot make attacks. Laundae Ethari can remain in mist form for up to 1 hour or end the effect as a minor action.',
				damage: 'Laundae Ethari becomes insubstantial and gains a fly speed of 12',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '2a20c211-f2ed-4e50-8ea4-ca777ddb4811',
		name: 'Orc Favored of Gruumsh',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +3; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Endurance +10, Intimidate +10, Religion +7',
		equipment: 'leather armor; spear',
		category: 'Orc',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 128,
		initiative: 6,
		ac: 20,
		fortitude: 17,
		reflex: 14,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '20bcc353-53cd-4893-bce9-dff5d0fb0509',
				name: 'Wrath of Gruumsh',
				keywords: '',
				details: 'aura 10; orcs in the aura can use death strike.'
			}
		],
		powers: [
			{
				id: '4002149f-0804-4bf4-a311-fb7a2cadd546',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'b1255fe3-5093-407a-b07e-835cb991bdd8',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: 'usable only while bloodied',
				range: 'The favored of Gruumsh makes a melee basic attack and regains 16 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '6cf2f2dc-be7d-4025-9770-060b3f12d819',
				name: 'Death Strike',
				action: null,
				keywords: '',
				condition: 'when the favored of gruumsh drops to 0 hit points',
				range: 'The orc makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '278e3ddd-f70d-4232-baba-1d3dfb930eea',
				name: 'Eye of Wrath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'the target takes a -4 penalty to AC (save ends).',
				damage: 'the target takes a -4 penalty to AC (save ends)',
				category: 3
			},
			{
				id: '100637cd-3a4a-410c-8177-77a8ae5603ff',
				name: 'Swift Arm of Destruction',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing',
				condition: '',
				range: 'one orc within range makes a melee basic attack (as a free action) and regains 15 hit points on a hit or 5 hit points on a miss.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'c3bbfa75-e5fe-4574-8d8a-85c2ec075529',
				name: 'Chaos Hammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d6+3 force damage, and the target is knocked prone. Miss: Half damage, and the target is not knocked prone.',
				damage: '2d6+3 force damage',
				category: 1
			},
			{
				id: '292df0cb-50d3-4c0b-8424-36db8c93b0c2',
				name: 'Call to Battle',
				action: {
					action: 4,
					trigger: 'when first hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'One orc ally within 10 squares charges an enemy adjacent to the favored of Gruumsh.',
				damage: 'One orc ally within 10 squares charges an enemy adjacent to the favored of Gruumsh',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '5f19d163-48b2-47ed-a0f7-d3a076e9cc15',
		name: 'Stonetrap Scarab',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '5, burrow 5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 67,
		initiative: 3,
		ac: 21,
		fortitude: 18,
		reflex: 15,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: 'c325347e-0ac8-49e1-b091-5d2a062ccd67',
				name: 'Scarab’s Mark',
				keywords: '',
				details: 'aura 1; any creature that starts its turn in the aura is marked by the scarab until the start of its next turn. The aura requires line of effect, and does not function if the scarab is burrowing.'
			}
		],
		powers: [
			{
				id: 'cd736c51-331f-4ca2-81ee-cc131a6e8ea5',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '9d6bfb06-79c1-41eb-a261-b40c055dcfb6',
				name: 'Stone Trap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'The stonetrap scarab burrows its speed and rises in a square adjacent to the target; 1d6+4 damage, and the target is immobilized (save ends). The immobilized condition ends if the scarab is no longer adjacent to the target.',
				damage: '1d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium natural beast'
	},
	{
		id: 'c2ab8388-3215-405c-a0e6-3b818236298a',
		name: 'Deranged Elf Berserker',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Athletics +9, Endurance +9',
		equipment: 'greataxe; handaxe; leather armor',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 56,
		initiative: 2,
		ac: 14,
		fortitude: 14,
		reflex: 13,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4766760b-b420-496a-b5fd-5dd763416889',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d12+3 damage (crit 1d12+15).',
				damage: '1d12+3 damage (crit 1d12+15)',
				category: 1
			},
			{
				id: '6e4a1639-9a01-4128-96bf-52d808af184d',
				name: 'Battle Fury',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The deranged elf scout makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '775ac51c-3d12-40bf-9d7c-c5e1b417a7f1',
				name: 'Handaxe',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: '9635db03-36ee-4583-ac4a-b8d557562c1d',
				name: 'Elven Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '432565d8-5032-477e-9d87-efb9f782ce92',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Brute',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'fa2e37ff-52d8-4649-9aca-8adae8895d98',
		name: 'Drow Cleric of Lolth',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Bluff +9, Insight +10, Intimidate +9, Religion +9, Stealth +8',
		equipment: 'chainmail; holy symbol; mace',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 57,
		initiative: 3,
		ac: 18,
		fortitude: 17,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '611f5903-9a0e-416f-9b7e-d589ed900045',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'b207a934-0f8a-4040-b57c-ddd95bca29b7',
				name: 'Lolth’s Sting',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '(standard',
				range: 'Ranged 5',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d6+2 poison damage, and ongoing 5 poison damage (save ends).',
				damage: '1d6+2 poison damage',
				category: 1
			},
			{
				id: 'a5a9c28b-6736-4df9-b79a-b78de59c101a',
				name: 'Surge of Terror',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: '1d6+2 psychic damage, push 3, and dazed (save ends).',
				damage: '1d6+2 psychic damage',
				category: 1
			},
			{
				id: '72138c07-b080-4b96-8a20-b58560fa5e84',
				name: 'Devoured by Spiders',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d6+3 damage, and the target is immobilized (save ends). Each time the target fails its save against this effect, it takes 1d6 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: 'a2b81a79-cdb6-403d-b9d5-0da3add6ec7d',
				name: 'Darkfire',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow cleric of Lolth’s next turn, the target grants combat advantage to all attacks, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: 'ff1d2177-b7c5-406f-bf55-e98b6d0b6372',
				name: 'Spider Link',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The drow cleric of Lolth can transfer up to 8 points of damage she has taken to a spider or drow ally within 5 squares of her. She cannot transfer more hit points than the creature has remaining.',
				damage: 'the drow cleric of lolth can transfer up to 8 points of damage she has taken to a spider or drow ally within 5 squares of her',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'd9533aa1-98ff-4a4e-9e52-715e3ce076e5',
		name: 'Drow Scavenger',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Stealth +9',
		equipment: 'javelin; leather armor; light shield; longsword',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 16,
		fortitude: 16,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '294e8077-7dd8-4f1f-b345-317da872b1c4',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '3 damage (5 with combat advantage).',
				damage: '3 damage (5 with combat advantage)',
				category: 1
			},
			{
				id: 'a6ba2079-f958-4a8b-a5f3-f27e8beffa9e',
				name: 'Javelin',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '3 damage (5 with combat advantage).',
				damage: '3 damage (5 with combat advantage)',
				category: 1
			},
			{
				id: '0caf0a66-1dc1-4ac2-8fdd-8780d6e48704',
				name: 'Dirty Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A drow scavenger gains combat advantage against a target adjacent to one or more creatures.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '90eacdc3-5bb2-4585-9485-fbe36ff5375f',
		name: 'Drow Shadowblade',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Stealth +9, Thievery +9',
		equipment: 'crossbow bolts (20); hand crossbow; leather armor; short sword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 37,
		initiative: 8,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '175e8572-415d-4212-a16c-a2e863207da3',
				name: 'Short sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '18d56d4e-41a9-4e96-a409-ca148504e6c8',
				name: 'Hand crossbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '307cf1ef-b703-48f5-b08f-672d3b1123f9',
				name: 'Cloud of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'the burst creates a cloud of darkness that remains in place until the end of the drow shadowblade’s next turn. The cloud blocks line of sight, squares within it are totally obscured, and creatures entirely within it are blinded until they exit. The drow shadowblade is immune to these effects.',
				damage: '',
				category: 3
			},
			{
				id: '7825119b-1d24-4ce1-909d-7a8211cf6b40',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The drow shadowblade deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Lurker',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '4ac58c92-0432-49c7-a50b-8ce2fe124c90',
		name: 'Drow Shadowhunter',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Stealth +10',
		equipment: 'drow long knife; leather armor',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 46,
		initiative: 7,
		ac: 17,
		fortitude: 14,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c86c68a2-f1b6-4013-92f9-31e4b9a8846d',
				name: 'Drow Long Knife',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'c205cedb-9560-42fc-835f-006275ff961d',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires two weapons; (two attacks)1d6 damage per attack.',
				damage: '(two attacks)1d6 damage per attack',
				category: 1
			},
			{
				id: 'ed0a421d-d92a-409f-b221-4bdd806ff30a',
				name: 'Drow Long Knife',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'c8a4ed47-31e0-473d-85eb-fd1c90821c9f',
				name: 'Darkfire',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow shadowhunter’s next turn, the target grants combat advantage to all attacks, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '104e5b7d-ca3f-4200-be29-85c384427644',
				name: 'Shadow Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The drow shadowhunter moves up to 4 squares, gains a +4 bonus to AC against opportunity attacks, and gains combat advantage against any target that it ends its move adjacent to.',
				damage: 'The drow shadowhunter moves up to 4 squares',
				category: 2
			},
			{
				id: '738cf0ab-11f0-4ee3-ba0a-69bc81bf5c48',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The drow shadowhunter deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '949ded3f-11c0-4a13-9b36-e95f0dc1d332',
		name: 'Insane Elf Scout',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Nature +10, Stealth +9',
		equipment: 'chainmail; longsword; short sword',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 47,
		initiative: 7,
		ac: 17,
		fortitude: 14,
		reflex: 16,
		will: 13,
		regeneration: null,
		auras: [
			{
				id: '11556ccd-7fa4-44a8-bcf4-7da7d6170f64',
				name: 'Group Awareness',
				keywords: '',
				details: 'aura 5; non-elf allies in the aura gain a +1 racial bonus to Perception checks.'
			}
		],
		powers: [
			{
				id: '249f6297-abdd-453a-a79a-8cd41df1271d',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '543833cc-3dab-4f04-a2ad-4266a9815b0d',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '4230827f-e399-47da-bfd1-093fbf6cbc95',
				name: 'Two-Weapon Rend',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The elf scout makes a longsword attack and a shortsword attack against the same target. If both attacks hit, the elf scout deals an additional 4 damage.',
				damage: 'the elf scout deals an additional 4 damage',
				category: 1
			},
			{
				id: '89a51b28-431a-4458-b693-267995c346ea',
				name: 'Elven Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: 'd8c5aad6-bf38-48e4-9fe9-fa089d5d810b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf scout that has combat advantage deals an extra 1d6 damage on its attacks.',
				damage: 'an elf scout that has combat advantage deals an extra 1d6 damage on its attacks',
				category: 0
			},
			{
				id: '01707d8e-7728-4cda-8891-bf48c425fe53',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '0bf52493-97cc-4d3c-a4a9-326d82e27bbf',
		name: 'Mad Elf Journeyman',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Athletics +6',
		equipment: 'leather armor; light shield; longsword',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 4,
		ac: 17,
		fortitude: 15,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'acc2b684-b044-4654-80d7-8fdf8a51f6b0',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '37f4d3ba-ee1b-475b-a5b3-b267aa57d9c1',
				name: 'Elven Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '944267cb-f489-4938-9f68-e5ca49fbe006',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An elf ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '3338d336-c507-4436-9400-1fdf5260af17',
		name: 'Sea Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'aquatic, undead',
		level: 8,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: 'fly 6 (hover), swim 6 , phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 47,
		initiative: 11,
		ac: 19,
		fortitude: 16,
		reflex: 19,
		will: 17,
		regeneration: {
			value: 5,
			details: 'if the wraith takes radiant damage, regeneration is negated until the end of the wraith’s next turn'
		},
		auras: [],
		powers: [
			{
				id: '37caa6da-860e-482c-8b2a-9accac506220',
				name: 'Shadow Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+5 cold and necrotic damage.',
				damage: '1d8+5 cold and necrotic damage',
				category: 1
			},
			{
				id: 'dd3306dd-ec18-4168-a57d-e4e0c5410ddb',
				name: 'Embrace of the Deep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'The target must be dazed or stunned; the sea wraith attacks one Medium or smaller target; 2d6+6 cold and necrotic damage and target is weakened (save ends) and grabbed (until escape).',
				damage: '2d6+6 cold and necrotic damage and target is weakened (save ends) and grabbed (until escape)',
				category: 1
			},
			{
				id: '5a1e912b-857b-4065-aea7-6ad4f6c15414',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic, Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sea wraith deals an extra 1d6 necrotic and cold damage against Any target it has combat advantage against and the target is dazed until the end of the next turn of the sea wraith.',
				damage: 'the sea wraith deals an extra 1d6 necrotic and cold damage against any target it has combat advantage against and the target is dazed until the end of the next turn of the sea wraith',
				category: 0
			},
			{
				id: '186efa34-efb2-4115-9219-4d48ce486481',
				name: 'Shadow Glide',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'only works underwater',
				range: '',
				attack: null,
				description: '',
				details: 'The sea wraith shifts 6 squares.',
				damage: 'The sea wraith shifts 6 squares',
				category: 2
			},
			{
				id: '0d360449-2c26-4b12-bb7f-f92793240927',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a sea wraith rises as a free willed sea wraith at the start of its creators next turn, appearing in the space where it died (or in the nearest unoccupied square). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 8 Lurker',
		phenotype: 'Medium shadow humanoid (aquatic, undead)'
	},
	{
		id: '39c6c657-c5ea-4dd7-91ab-709c4b779f4e',
		name: 'Sea Wraith Lord',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'aquatic, undead',
		level: 9,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: 'fly 6, swim 6 , phasing',
		alignment: 'Chaotic evil',
		languages: 'Commonr',
		skills: 'Stealth +13',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 70,
		initiative: 8,
		ac: 22,
		fortitude: 17,
		reflex: 20,
		will: 21,
		regeneration: {
			value: 5,
			details: 'if the wraith takes radiant damage, regeneration is negated until the end of the wraith’s next turn'
		},
		auras: [],
		powers: [
			{
				id: 'bc51d5f4-b42b-4a33-9078-754575aee7a7',
				name: 'Shadow Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d8+5 cold and necrotic damage.',
				damage: '1d8+5 cold and necrotic damage',
				category: 1
			},
			{
				id: 'ecaacf45-8c87-4cf5-b9cf-6ee7278f3c60',
				name: 'Deep’s Pain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Cold',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '3d8+3 cold and necrotic damage. The burst creates a zone that lasts until the end of the sea wraith lord’s next turn. Any creature that starts turn within the zone takes 10 cold and necrotic damage. The sea wraith lord can dismiss the zone as a minor action.',
				damage: '3d8+3 cold and necrotic damage',
				category: 1
			},
			{
				id: '1bffe22a-6fe3-4616-95e1-864783d84850',
				name: 'Embrace of the Deep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'The target must be dazed or stunned; the sea wraith attacks one Medium or smaller target; 2d6+6 cold and necrotic damage and target is weakened (save ends) and grabbed (until escape).',
				damage: '2d6+6 cold and necrotic damage and target is weakened (save ends) and grabbed (until escape)',
				category: 1
			},
			{
				id: 'e1db6be5-21af-4957-80e4-5f11504351cb',
				name: 'Vortex of Death',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+6 necrotic damage; the target is dazed until the end of the sea wraith lord’s next turn.',
				damage: '2d6+6 necrotic damage',
				category: 5
			},
			{
				id: 'bf34a3f1-d573-4e2b-b064-0fa61934bf5e',
				name: 'Shadow Glide',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'only works underwater',
				range: '',
				attack: null,
				description: '',
				details: 'The sea wraith shifts 6 squares.',
				damage: 'The sea wraith shifts 6 squares',
				category: 2
			},
			{
				id: '0c88cfc0-7dd6-43e9-b4a3-7b04ceb048ea',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a sea wraith rises as a free willed sea wraith at the start of its creators next turn, appearing in the space where it died (or in the nearest unoccupied square). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Controller',
		phenotype: 'Medium shadow humanoid (aquatic, undead)'
	},
	{
		id: 'e6a3d98e-427f-4526-ae42-9ff10a9cc104',
		name: 'Sea Wraith Warrior',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'aquatic, undead',
		level: 8,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: 'fly 6, swim 6 , phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +13',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 11,
		ac: 22,
		fortitude: 8,
		reflex: 8,
		will: 8,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '50512f6a-8685-487d-86d6-f53c94352a9a',
				name: 'Shadow Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '5 necrotic damage.',
				damage: '5 necrotic damage',
				category: 1
			},
			{
				id: 'a91a568b-9f65-432f-b22d-fbc893de9833',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sea wraith warrior deals an extra 1d6 necrotic damage against any target it has combat advantage against and the target is dazed until the end of the next turn of the sea wraith.',
				damage: 'the sea wraith warrior deals an extra 1d6 necrotic damage against any target it has combat advantage against and the target is dazed until the end of the next turn of the sea wraith',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 8 Minion',
		phenotype: 'Medium shadow humanoid (aquatic, undead)'
	},
	{
		id: 'bba92a8a-525d-4600-8f76-e576ec5fb7f1',
		name: 'Zombie Boar',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 128,
		initiative: 4,
		ac: 22,
		fortitude: 25,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c3a9cb5d-69d1-4f05-951a-b28fe3aaf7c0',
				name: 'Gore',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage, or 2d6+11 damage against a prone target.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '18e07cc2-8513-460a-adcd-2aa0ead0e6b6',
				name: 'Death Strike',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The zombie boar makes a gore attack.',
				damage: '',
				category: 0
			},
			{
				id: '1c9e53b1-a736-4a2e-ac08-a4b4908fa658',
				name: 'Slough Off Skin',
				action: {
					action: 4,
					trigger: 'when the dire boar is affected by ongoing damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All ongoing damage effects end immediately. Other ongoing effects are unaffected.',
				damage: 'all ongoing damage effects end immediately',
				category: 5
			},
			{
				id: '030559ff-ade3-4306-8b1d-621416d5cea1',
				name: 'Furious Charge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a zombie boar charges, its gore deals an extra 5 damage, pushes the target 2 squares, and knocks the target prone on a hit.',
				damage: 'its gore deals an extra 5 damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: '4977a585-c9fa-476e-8c1a-727de4764f9a',
		name: 'Amnite Freebooter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +10, Thievery +10',
		equipment: 'dagger; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 74,
		initiative: 6,
		ac: 17,
		fortitude: 15,
		reflex: 15,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '5e38cda2-6bd2-425d-9d7d-978514a39a07',
				name: 'Deathless Fanaticism',
				keywords: '',
				details: 'aura 5; allies below the demagogue’s level in the area remain alive when reduced to zero hit points. They die at the end of their next turn if they are still at zero or below.'
			}
		],
		powers: [
			{
				id: '147ce604-6be2-423a-9e66-e65c1268faa2',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the human bandit shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '1e9b74d1-ac6a-4efe-8d35-edb7c94b7f56',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '4a7dbb56-e6bd-4107-8a9c-1cc8145d566c',
				name: 'Dazzling Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'Requires mace; 1D8+1 damage, the target is dazed until the end of the human bandit’s next turn, and the human bandit shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'aa685598-4c41-489b-8c55-58acdc486789',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The human bandit deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'c6e8a974-34f3-42b1-82af-58dc76c8c9ad',
				name: 'Mob Defense',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The demagogue gains+1 bonus to all defenses for each ally adjacent to it.',
				damage: 'The demagogue gains+1 bonus to all defenses for each ally adjacent to it',
				category: 0
			},
			{
				id: '27732377-060d-4935-9e6f-e3f164f9abfb',
				name: 'Strike on My Order',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5, up to three allies, in area make basic attacks with a +2 attack bonus and a +1 damage bonus.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '13794096-de20-46fb-b5f0-64e1fff26312',
				name: 'Clever Escape',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shift 3 squares. One square shifted through must be occupied by an ally.',
				damage: 'Shift 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3744c3b6-2910-435f-aeb5-aa996eb2dc94',
		name: 'Relentless Bounty Hunter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: '',
		equipment: 'greataxe; leather armor',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 196,
		initiative: 4,
		ac: 21,
		fortitude: 22,
		reflex: 17,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ea1a6f73-8a74-48b3-8940-d168d6f66f83',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d12+8 (crit 1d12 + 20) damage.',
				damage: '1d12+8 (crit 1d12 + 20) damage',
				category: 1
			},
			{
				id: '1f92df6b-d6dd-4cba-b49f-ffede9e40b1f',
				name: 'Clear the Area',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'close burst 1',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires greataxe; 2d12+10 damage, and the target is pushed 1 square.',
				damage: '2d12+10 damage',
				category: 1
			},
			{
				id: 'a61d1359-47fd-41c6-9da8-9781e4de97d5',
				name: 'Mark of Death',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'targets one creature; the target is marked and grants combat advantage to the relentless bounty hunter (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '8da48ea8-74ef-4dd5-83df-710cae1627bc',
				name: 'Brute Rush',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a relentless bounty hunter makes a bull rush attack, he pushes the target 2 squares instead of 1 square.',
				damage: 'he pushes the target 2 squares instead of 1 square',
				category: 0
			},
			{
				id: '7cecd1b6-40d4-4799-94a7-6246af42cf6d',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces the relentless bounty hunter to move------ through a push, a pull, or a slide------the relentless bounty hunter moves 1 square less than the effect specifies. When an attack would knock the relentless bounty hunter prone, the relentless bounty hunter can roll a saving throw to avoid falling prone.',
				damage: 'or a slide------the relentless bounty hunter moves 1 square less than the effect specifies',
				category: 0
			},
			{
				id: '8d6acc5c-ca97-4001-8d3b-dc410ab49302',
				name: 'Death’s Release',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the relentless killer is reduced to 0 hit points or fewer',
				range: 'Close burst 3',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '2d6 + 7 necrotic damage, and the target is knocked prone.',
				damage: '2d6 + 7 necrotic damage',
				category: 0
			},
			{
				id: 'b3f10662-3986-4f51-bb03-1747c87578e9',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The relentless bounty hunter deals 2d6 extra damage when it hits a creature it has combat advantage against.',
				damage: 'the relentless bounty hunter deals 2d6 extra damage when it hits a creature it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Elite Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '37c427f2-ecbc-48ad-8aaa-bfd1f4d83cf0',
		name: 'Infernal Battle Armor',
		details: '',
		size: 2,
		origin: 3,
		type: 0,
		keywords: 'devil, undead',
		level: 8,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Understands Common, Supernal',
		skills: '',
		equipment: 'club',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 6,
		ac: 20,
		fortitude: 21,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '9bc7e186-8e60-40b5-85c5-d96e65909929',
				name: 'Bloodlust',
				keywords: '',
				details: 'aura 2; non-minion devils in the aura gain a +1 bonus to damage. This bonus is cumulative, so a devil within the aura of 4 infernal armors deals 4 additional points of damage per attack.'
			}
		],
		powers: [
			{
				id: '65c3cd04-3f15-453a-94a2-b9b1af8b5b3c',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			},
			{
				id: 'fa72902c-5dd4-405c-ad39-9693802e9c0d',
				name: 'Transference',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an infernal armor dies, it transfers its essence to the nearest non-minion devil within 5 squares. That devil regains 15 hit points.',
				damage: 'it transfers its essence to the nearest non-minion devil within 5 squares',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Minion',
		phenotype: 'Medium immortal animate (devil, undead)'
	},
	{
		id: 'f89bd001-7e5b-4c59-b31c-9f59f10ee361',
		name: 'Minotaur Berserker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Dungeoneering +13, Intimidate +12, Nature +10',
		equipment: 'battleaxe; heavy shield; scale armor',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 122,
		initiative: 8,
		ac: 28,
		fortitude: 29,
		reflex: 23,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44aff480-2d90-40e2-a84b-72251d638934',
				name: 'Battleaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage, and the target is marked until the end of the minotaur warrior’s next turn.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: 'be517f7e-b6bb-4015-bffa-417221ee4664',
				name: 'Goring Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'The minotaur warrior makes a charge attack; 1d6+7 damage, and the target is knocked prone.',
				damage: '1d6+7 damage',
				category: 1
			},
			{
				id: '44cbee37-e911-48e4-afad-e82f33ea43dc',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The minotaur warrior makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'bcc494e8-b48f-47e0-b004-b7569088ac1a',
		name: 'Quickling Jack',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '12, climb 6',
		alignment: 'Evil',
		languages: 'Elven',
		skills: 'Acrobatics +22, Bluff +10, Stealth +17',
		equipment: 'short sword',
		category: '',
		strength: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 112,
		initiative: 14,
		ac: 26,
		fortitude: 22,
		reflex: 26,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c1c35fdb-37e0-4ba7-9dae-4b92b01f5d1b',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d6+8 damage.',
				damage: '1d6+8 damage',
				category: 1
			},
			{
				id: '45993473-5b3a-4fad-986e-23733b8509fd',
				name: 'Quick Cuts',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The quickling moves its speed. At any two points during its move, the quickling makes a melee basic attack at a -2 penalty. The quickling cannot use this power while immobilized or slowed.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '115fb5b4-0edf-4afb-b8d2-4338a31f3657',
				name: 'Fey Shift',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The quickling runner shifts 10 squares.',
				damage: 'The quickling runner shifts 10 squares',
				category: 1
			},
			{
				id: '7513430c-ff2f-4337-959c-5dd0c4e95fa6',
				name: 'Maintain Mobility',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An immobilized quickling runner is no longer immobilized.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Lurker',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '7fdebd20-9e9e-41b8-b9d1-40d2bb6bab8f',
		name: 'Rastiel the Mezzodemon',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Intimidate +13',
		equipment: 'lifedrinker weapon; trident',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 145,
		initiative: 11,
		ac: 31,
		fortitude: 29,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f9237d26-f43d-45c2-88d8-a101e58d8476',
				name: 'Trident',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Requires trident; reach 2; 1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '95fd2ee7-86fa-4652-90a2-b357735cb572',
				name: 'Skewering Tines',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+7 damage, ongoing 5 damage and the target is restrained (save ends both). While the target is restrained, the mezzodemon can’t make trident attacks.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: 'c9798a25-b7da-437a-8622-b041eab55bc2',
				name: 'Poison Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+5 poison damage, and ongoing 5 poison damage (save ends).',
				damage: '2d6+5 poison damage',
				category: 1
			},
			{
				id: '749e9f1f-4da3-453f-8d4d-1f07cd75cc0b',
				name: 'Lifedrinker Trident',
				action: null,
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the mezzodemon reduces an enemy to 0 hit points or fewer with a weapon attack, it gains 10 temporary hit points.',
				damage: 'it gains 10 temporary hit points',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -20
			}
		],
		resist: '10 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: '8bceb9b4-d993-4a82-8368-bb0eb3dcdd0a',
		name: 'Runespiral Demon Netherflame',
		details: '',
		size: 1,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 10,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 81,
		initiative: 9,
		ac: 22,
		fortitude: 21,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b1e608db-760f-4521-b26f-b225f502a472',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: '743b6767-7102-45e5-bc51-677c823bb120',
				name: 'Fell Arc',
				action: {
					action: 5,
					trigger: 'when an enemy moves adjacent to this creature',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d6+6 necrotic, and fire damage.',
				damage: 'and fire damage',
				category: 5
			},
			{
				id: 'b8c69357-e12c-42ed-9c17-3e8ffd42b08d',
				name: 'Fell Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d6+6 necrotic and fire damage, and this attack deals an additional 1 fire damage for each creature in the burst.',
				damage: '1d6+6 necrotic and fire damage',
				category: 1
			},
			{
				id: '1d28131f-a1ae-4b2b-b2b8-b3057520bc80',
				name: 'Bloodied Shock',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'use when first bloodied',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d6+6 necrotic and fire damage and daze.',
				damage: '1d6+6 necrotic and fire damage and daze',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '10 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Artillery',
		phenotype: 'Small elemental beast (demon)'
	},
	{
		id: 'c6c30806-65ee-475b-b65d-72b1d1ea62e8',
		name: 'Troglodyte Bruiser',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 11,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 140,
		initiative: 7,
		ac: 23,
		fortitude: 23,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '88f00be3-d266-4aa3-8993-b5956c039053',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 1; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: 'dedb5e5a-7210-4030-87e1-dd5ab769937e',
				name: 'Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '3d6+6 damage.',
				damage: '3d6+6 damage',
				category: 1
			},
			{
				id: 'dd324b54-7ca5-4dc2-80d0-3add1a071eaa',
				name: 'Tooth and Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2 attacks; 1d6+6 damage. If the target is bloodied by this attack, the troglodyte brute can make a claw attack against it.',
				damage: '1d6+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Brute',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: '3f413eec-8f01-4863-bf2b-021c95a3f7b4',
		name: 'Werewolf Savage Berserker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 8,
		role: {
			type: 2,
			flag: 1,
			leader: true
		},
		senses: 'Perception +11; low-light vision',
		movement: '6 (8 in werewolf form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +9, Insight +11, Intimidate +9, Nature +11',
		equipment: 'greatclub; leather armor',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 206,
		initiative: 7,
		ac: 20,
		fortitude: 20,
		reflex: 20,
		will: 20,
		regeneration: {
			value: 5,
			details: 'if the werewolf takes damage from a silver weapon, its regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '37ec60b0-6a3e-44a6-a8b3-3e5b2a4862d5',
				name: 'Greatclub',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d4+4 damage.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: 'f8c25d4b-cbf5-4945-81cd-8358cfb4eb46',
				name: 'Special Bite template',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage, and the target takes ongoing 5 damage (save ends) and contracts moon frenzy.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'ad3f19bb-907b-44b5-8141-62710edb9d42',
				name: 'Murderous Frenzy',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The savage berserker gains 1 action point the first time it reduces a foe to 0 hit points in an encounter.',
				damage: 'The savage berserker gains 1 action point the first time it reduces a foe to 0 hit points in an encounter',
				category: 0
			},
			{
				id: '8a37cc31-7295-4aea-9d6e-006f0a3a9c05',
				name: 'Savage Rebuke',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The savage berserker makes a basic melee attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'f4a25a93-c686-4a60-ba93-0927f7cb25db',
				name: 'Blood Rage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The werewolf’s melee attacks deal 4 extra damage against a bloodied target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '595d1d9e-ee41-41e3-9d6d-ac2d2b12f983',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A werewolf can alter its physical form to appear as a gray wolf or a unique human. It cannot use its bite attack in human form and cannot make weapon attacks in wolf form.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'moon frenzy',
		tactics: '',

		info: 'Level 8 Elite Brute (L)',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'a4d1c31c-4215-40d9-af23-f32b34ca4bf6',
		name: 'Werewolf Stormcaller',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 5,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6 (8 in wolf form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +10, Bluff +8, Insight +10, Intimidate +8, Nature +10, Religion +10',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 108,
		initiative: 6,
		ac: 17,
		fortitude: 17,
		reflex: 16,
		will: 17,
		regeneration: {
			value: 5,
			details: 'if the werewolf takes damage from a silver weapon, its regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '91d4bf46-37df-4a1f-bd70-f77121522ee0',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage, and the target takes ongoing 5 damage (save ends) and contracts moon frenzy.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'b2ea2876-98b3-4923-8595-0f3c9375cbb9',
				name: 'Storm Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Arcane, Lightning',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d8+4 lightning damage.',
				damage: '1d8+4 lightning damage',
				category: 1
			},
			{
				id: '92c06f3a-d211-474a-a3b8-b89517e90f90',
				name: 'Stormcaller',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Arcane, Thunder',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '1d6+4 thunder damage; and the target is pushed 2 squares.',
				damage: '1d6+4 thunder damage',
				category: 1
			},
			{
				id: '96b86242-65c1-490f-beee-6af7dafef3ae',
				name: 'Disrupting Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Arcane, Lightning',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d10+4 lightning damage; and the target is slowed (save ends).',
				damage: '1d10+4 lightning damage',
				category: 1
			},
			{
				id: '2b48e703-9d14-4b72-b5b7-1b8e292b2d00',
				name: 'Blood Rage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The werewolf’s melee attacks deal 4 extra damage against a bloodied target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '856ec0e9-c78d-4c95-a4fe-32cf76086638',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A werewolf can alter its physical form to appear as a gray wolf or a unique human. It cannot use its bite attack in human form and cannot make weapon attacks in wolf form.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'moon frenzy',
		tactics: '',

		info: 'Level 5 Elite Artillery',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '2bb7b766-a950-46f5-9fb6-c9e311e91535',
		name: 'Drow Arachnomancer Vampire Lord',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +14, Dungeoneering +13, Intimidate +8, Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 184,
		initiative: 8,
		ac: 25,
		fortitude: 21,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8c93e617-ebd3-4817-a271-a8ed1b2b5f44',
				name: 'Spider Rod',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d6 damage, and the target is immobilized (save ends); see also Lolth’s judgment.',
				damage: '1d6 damage',
				category: 1
			},
			{
				id: '013c3b76-6e40-44fe-ac00-281b0b7a318f',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharges when an adjacent creature becomes bloodied'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 2d12+7 damage, and the target is weakened (save ends), and the vampire lord heals 56 hit points; see also Lolth’s judgment.',
				damage: '2d12+7 damage',
				category: 1
			},
			{
				id: 'd848417b-bcaa-4871-8fc8-3ffc3be8638e',
				name: 'Venom Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d8+3 poison damage, and ongoing 5 poison damage (save ends); see also Lolth’s judgment.',
				damage: '2d8+3 poison damage',
				category: 1
			},
			{
				id: 'd8b89254-1ac1-41a8-92d1-aad1c585c534',
				name: 'Dominating Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends, with a -2 penalty to the saving throw). Aftereffect: the target is dazed (save ends). The vampire lord can dominate only one creature at a time; see also Lolth’s judgment.',
				damage: 'with a -2 penalty to the saving throw)',
				category: 3
			},
			{
				id: '31c4f6ba-eae3-46c7-90e7-ee4b1a5f39e6',
				name: 'Lolth’s Grasp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 4',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'within 10; webs full of spectral spiders cover the zone; drow and spiders are immune; the target is restrained (save ends). The zone is difficult terrain until the end of the encounter. Any creature that starts its turn in the zone takes 10 necrotic damage.',
				damage: 'any creature that starts its turn in the zone takes 10 necrotic damage',
				category: 1
			},
			{
				id: '95f19bd6-8d58-46c4-bde7-cdb340cbbd51',
				name: 'Spider Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'ranged 20',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'Spectral spiders swarm over and bite the target; 1d6+7 necrotic damage, and the target takes ongoing 5 necrotic damage and is weakened (save ends both); see also Lolth’s judgment.',
				damage: '1d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'feb49703-7feb-4a22-9e71-074c7bed0bdd',
				name: 'Venom Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '2d6+10 poison damage. Miss: Half damage.',
				damage: '2d6+10 poison damage',
				category: 1
			},
			{
				id: 'ab094dfe-ab7d-45f4-a268-179079e52e33',
				name: 'Cloud of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 1',
				attack: null,
				description: '',
				details: 'this power creates a cloud of darkness that remains in place until the end of the drow arachnomancer’s next turn. The cloud blocks line of sight for all creatures except the drow arachnomancer. Any creature entirely within the cloud (except the drow arachnomancer) is blinded until it exits.',
				damage: '',
				category: 3
			},
			{
				id: '50e589ca-abef-49ad-a6c2-55fa5c6349c9',
				name: 'Lolth’s Judgment',
				action: {
					action: 7,
					trigger: 'when the arachnomancer hits a target with a melee or ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All spider allies within 20 squares of the arachnomancer gain a +2 bonus to attack rolls against the target until the end of the arachnomancer’s next turn.',
				damage: 'All spider allies within 20 squares of the arachnomancer gain a +2 bonus to attack rolls against the target until the end of the arachnomancer’s next turn',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Medium fey humanoid (undead)'
	},
	{
		id: 'cd4c6554-d059-46e3-a7dc-8123455e7b94',
		name: 'Gelatinous Ice Cube',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'blind, ooze',
		level: 5,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +3; tremorsense 5',
		movement: '3 see also engulf',
		alignment: 'Unaligned',
		languages: 'Deep Speech',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 152,
		initiative: 4,
		ac: 18,
		fortitude: 18,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: 'b70113e5-7f27-4567-b361-40f3a5d98521',
				name: 'Frozen Radiance',
				keywords: '',
				details: 'aura 1; any creature that starts its turn or enters the aura takes 3 cold damage.'
			}
		],
		powers: [
			{
				id: '88a64097-7457-489b-a273-daf35e020305',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '1d6+2 damage and the target is immobilized (save ends).',
				damage: '1d6+2 damage and the target is immobilized (save ends)',
				category: 1
			},
			{
				id: 'dfe2cefe-7b33-4ce6-8834-7067dde7793a',
				name: 'Engulf',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: 'The gelatinous ice cube attacks one or two Medium or smaller targets; the target is dazed and takes ongoing 10 cold damage until it escapes the grab. A creature that escapes the grab shifts to a square of its choosing adjacent to the cube. The cube can move normally while creatures are engulfed within it.',
				damage: 'the target is dazed and takes ongoing 10 cold damage until it escapes the grab',
				category: 1
			},
			{
				id: '680e0d15-9005-4345-8b5d-a3b7d87560a6',
				name: 'Translucent',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A gelatinous ice cube is invisible until seen (Perception DC 25) or until it attacks. Creatures that fail to notice the gelatinous cube might walk into it, automatically being engulfed.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -10
			}
		],
		resist: '',
		vulnerable: '5 electricity',
		immune: 'gaze',
		tactics: '',

		info: 'Level 5 Elite Brute',
		phenotype: 'Large natural beast (blind, ooze)'
	},
	{
		id: 'c92b69c0-d36d-42a0-83e3-6be767608618',
		name: 'Bog Toad',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6, swim 6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +10, Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 63,
		initiative: 5,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a9e4a629-c4bc-4991-b7ea-2b59225ecf69',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage and slow (save ends).',
				damage: '1d10+3 damage and slow (save ends)',
				category: 1
			},
			{
				id: 'e3cb0fbe-6cab-4ce5-8386-9e4e772123f4',
				name: 'Grasping Tongue',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: 'grab and pull 3.',
				damage: 'grab and pull 3',
				category: 1
			},
			{
				id: 'e91cd12a-cd83-4874-b8f4-3264e26c4c08',
				name: 'Sudden Leap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Jump 4 squares without provoking; 1d10+6 damage and knock prone.',
				damage: '1d10+6 damage and knock prone',
				category: 1
			},
			{
				id: 'db5540ab-b610-4777-a1fa-7b694291cc36',
				name: 'Prodigious Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Jump 4 squares without provoking.',
				damage: 'Jump 4 squares without provoking',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Controller',
		phenotype: 'Medium natural beast'
	},
	{
		id: '50c8cf0b-c310-4e62-899d-d83d3a75dfee',
		name: 'Gnome Sniper',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'None',
		skills: 'Athletics +7, Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 63,
		initiative: 7,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e4e46749-d2b3-4b90-bf75-642d3b275148',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage.',
				damage: '1d4+2 damage',
				category: 1
			},
			{
				id: '31e7d289-5555-4fa6-ac67-45236acd1f51',
				name: 'Short Bow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'd39571f8-fafa-4d57-8df0-44446a7752d8',
				name: 'Rapid Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Make two shots.',
				damage: '',
				category: 1
			},
			{
				id: '9ef327a6-b4ae-42b0-a9c1-ba5a487ac085',
				name: 'Shadow Sniper',
				action: null,
				keywords: '',
				condition: '',
				range: 'If a hiding sniper misses with a ranged attack, it remains hidden.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '0bd4926f-bf9e-4cc9-b8a8-d290a44cb54a',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: '+1d6 damage',
				damage: '+1d6 damage',
				category: 0
			},
			{
				id: 'f84f90a8-0f9c-4348-bad8-8560c7c35efc',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gnome sniper turns invisible until it attacks or until the end of its next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Small fey humanoid'
	},
	{
		id: 'e63b0c94-a0eb-4f58-870e-95726dd58812',
		name: 'Kerek the Deceptor',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'None',
		skills: 'Arcana +12, Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 73,
		initiative: 6,
		ac: 21,
		fortitude: 19,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6ac19346-af3d-4508-9623-0e4e0dcd44fa',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage.',
				damage: '1d4+2 damage',
				category: 1
			},
			{
				id: '2be33501-50be-420e-bc79-245b96af2c37',
				name: 'Scintillating Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '1d8+5 damage and dazed (save ends).',
				damage: '1d8+5 damage and dazed (save ends)',
				category: 1
			},
			{
				id: '0971e205-0cc0-4d32-bcef-4d2799f83ccd',
				name: 'Illusory Terrain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'targets enemies; target is slowed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'b1aeb13d-f23d-46c5-bcac-d31d1dca24b3',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kerek turns invisible until it attacks or until the end of its next turn.',
				damage: '',
				category: 5
			},
			{
				id: 'b828205a-af68-4a53-a87f-945af0f74dd1',
				name: 'Blur',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Teleport 1 square.',
				damage: 'Teleport 1 square',
				category: 5
			},
			{
				id: '5ca92e66-2938-4f54-b282-7c07ed15fb40',
				name: 'Mist Walk',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Teleport 5 squares.',
				damage: 'Teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '0f44f214-4ab1-4c0b-92b2-f06d9ae24aa4',
		name: 'Runeflame Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 71,
		initiative: 9,
		ac: 21,
		fortitude: 18,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: 'd032fc8e-1377-4125-900f-423d13c992db',
				name: 'Burning Aura',
				keywords: '',
				details: 'Enemies within 3 squares take 2 points of fire damage at the start of their turns. Unlike normal auras, this aura’s damage stacks.'
			}
		],
		powers: [
			{
				id: 'caa7d129-3888-471c-8ae1-c32e233778f2',
				name: 'Fiery Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+5 fire damage.',
				damage: '1d8+5 fire damage',
				category: 1
			},
			{
				id: '4d1b3f05-ca05-4c35-b7c6-bd81edc8343e',
				name: 'Flame Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d8+5 fire damage and push 2.',
				damage: '1d8+5 fire damage and push 2',
				category: 1
			},
			{
				id: '808cafcb-b715-426c-9987-6b94f769468d',
				name: 'Fiery Eidolon',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The runeflame skeleton gains insubstantial until the end of its turn and moves 8 squares. When it enters a square during this movement, that square bursts into flames. Until the end of its next turn, any creature that enters or begins its turn in that square suffers 5 fire damage. The flames block line of sight. They last until the end of the skeleton’s next turn.',
				damage: 'any creature that enters or begins its turn in that square suffers 5 fire damage',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'd1e10bc5-cc5f-4d3d-ab08-337df7ea0703',
		name: 'Sevvik Water-Blessed',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'water; orc',
		level: 6,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6, swim 6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +9, Bluff +8, Stealth +12, Thievery +12',
		equipment: 'dagger; leather armor',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 61,
		initiative: 11,
		ac: 20,
		fortitude: 18,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8e1ad293-1837-4c38-8da1-44dd50944f21',
				name: 'Daggers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d4+4 poison damage and ongoing 5 poison damage (save ends).',
				damage: '1d4+4 poison damage and ongoing 5 poison damage (save ends)',
				category: 1
			},
			{
				id: 'a2ba9570-acf1-4cd7-b059-924bacf29202',
				name: 'Thrown Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d4+4 poison damage and ongoing 5 poison damage (save ends).',
				damage: '1d4+4 poison damage and ongoing 5 poison damage (save ends)',
				category: 1
			},
			{
				id: '0a16c48f-1c83-46af-821a-915d0ad259dd',
				name: 'Drowning Embrace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '2d6+4 damage and ongoing 5 damage (save ends).',
				damage: '2d6+4 damage and ongoing 5 damage (save ends)',
				category: 1
			},
			{
				id: 'aeeb46a1-9dc1-4691-9657-6a2474ad3db6',
				name: 'Water Form',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Sevvik turns into a pool of water. He gains insubstantial, a +5 bonus on Stealth checks, and can shift 5 squares as a move action in this form but cannot use his melee or ranged basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: 'aef6df9f-5577-4a96-9a07-7535bfcfcb04',
				name: 'Water Shift',
				action: {
					action: 4,
					trigger: 'when damaged by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Sevvik gains insubstantial against the attack and can slide 5 squares.',
				damage: 'Sevvik gains insubstantial against the attack and can slide 5 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Lurker',
		phenotype: 'Medium elemental humanoid (water; orc)'
	},
	{
		id: '23c53560-531e-418a-830a-d6577688fccb',
		name: 'Tahrg Soulhammer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +11, Intimidate +10, Religion +9, Stealth +7',
		equipment: 'chainmail; light shield; mace',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 73,
		initiative: 4,
		ac: 20,
		fortitude: 19,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2cd260f1-bb19-4703-9916-01b50f4d4059',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage and daze until the end of Tahrg’s next turn.',
				damage: '1d8+4 damage and daze until the end of tahrg’s next turn',
				category: 1
			},
			{
				id: 'ae86c62c-7062-4cb4-bbee-38607599a12d',
				name: 'Blackfire Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '1d8+4 necrotic damage and immobilized until the end of Tahrg’s next turn.',
				damage: '1d8+4 necrotic damage and immobilized until the end of tahrg’s next turn',
				category: 1
			},
			{
				id: '21696b06-aacb-4c47-bb0d-a69f383a63b4',
				name: 'Wasting Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement or Weapon',
				condition: '',
				range: 'melee +12 vs AC, ranged +10 vs Reflex',
				attack: null,
				description: '',
				details: '1d6+4 damage, vulnerability 5 all ongoing 5 damage (save ends both). Aftereffect: Ongoing 5 damage (save ends).',
				damage: '1d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller (L)',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '2cd266d8-3331-4505-a712-f6992368f0c8',
		name: 'Wind Dragon',
		details: '',
		size: 3,
		origin: 2,
		type: 0,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'None',
		skills: 'Stealth +14',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 73,
		initiative: 9,
		ac: 20,
		fortitude: 17,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: '8a755ab3-7dea-4351-870a-00ef0600086e',
				name: 'Aura of Mist',
				keywords: '',
				details: 'An ally who begins his turn within 5 squares of the wind dragon gains invisibility until the end of his turn.'
			}
		],
		powers: [
			{
				id: '116b77a2-eef3-4668-93f6-3faf83003c12',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+4 damage and slide 3.',
				damage: '2d6+4 damage and slide 3',
				category: 1
			},
			{
				id: '07352845-a4c1-449e-bf05-6e431395f855',
				name: 'Maddening Roar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '1d8+4 damage and dazed (save ends).',
				damage: '1d8+4 damage and dazed (save ends)',
				category: 1
			},
			{
				id: '4a5a8744-293b-4eda-b019-0c94103cd38d',
				name: 'Prismatic Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '2d6+4 radiant damage and blinded until the end of the target’s next turn.',
				damage: '2d6+4 radiant damage and blinded until the end of the target’s next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller (L)',
		phenotype: 'Large fey animate'
	},
	{
		id: 'd70731ea-8df9-4ca0-90b4-fe87e765984d',
		name: 'Zombie of Iuz',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Evil',
		languages: 'None',
		skills: 'Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 20,
		fortitude: 18,
		reflex: 17,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9e024ff2-147c-4439-84a3-dad798f355f3',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '71071ed2-a1ea-40d7-8ebf-8e03a1283707',
				name: 'Clutch of Death',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: 'target grabbed and suffers -1 on attacks and all defenses (including AC) per zombie of Iuz that is grabbing it.',
				damage: 'target grabbed and suffers -1 on attacks and all defenses (including AC) per zombie of Iuz that is grabbing it',
				category: 1
			},
			{
				id: '65b1dcd9-53f3-45e9-a490-6d26f889ef53',
				name: 'Death Burst',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When reduced to 0 hit points, all living creatures adjacent to the zombie of Iuz suffer 4 necrotic damage.',
				damage: 'all living creatures adjacent to the zombie of iuz suffer 4 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '3ff257af-6cb7-4850-8488-19fb8e2a2991',
		name: 'Elite Fire Bat',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'fire',
		level: 5,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '2 (clumsy), fly 8 ; see also fiery swoop',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 120,
		initiative: 8,
		ac: 22,
		fortitude: 17,
		reflex: 22,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '23bf4f84-e027-4540-9b3a-4fe141ccf540',
				name: 'Fiery Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6+4 fire damage, and ongoing 5 fire damage (save ends).',
				damage: '1d6+4 fire damage',
				category: 1
			},
			{
				id: '10306e7f-7016-4932-8163-1200637116d6',
				name: 'Fiery Swoop',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'The fire bats shifts up to 4 squares and can move through occupied squares as it moves. It makes a melee basic attack against any creature whose space it enters. The fire bat cannot attack a target more than once in this fashion, and it must end its movement in an unoccupied square.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '7ae6ec60-ff89-4262-941b-d6667f73b854',
				name: 'Spout of Ash',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d6+4 damage, and the target is blinded (save ends).',
				damage: '1d6+4 damage',
				category: 3
			},
			{
				id: '91deaad7-da2b-4049-985a-64439173411b',
				name: 'Wisp of Smoke',
				action: {
					action: 5,
					trigger: 'when elite fire bat is targeted by a melee or ranged attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The elite fire bat may immediately shift up to 4 squares and gain concealment until the beginning of its next turn.',
				damage: 'The elite fire bat may immediately shift up to 4 squares and gain concealment until the beginning of its next turn',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Skirmisher',
		phenotype: 'Medium elemental beast (fire)'
	},
	{
		id: 'bfbdb3f0-bb30-4b78-9584-c003e0b0fc99',
		name: 'Glimnock Klemwocket',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +4; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Arcana +8, Religion +8, Thievery +6',
		equipment: 'adventurer’s kit; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 34,
		initiative: 1,
		ac: 17,
		fortitude: 13,
		reflex: 14,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '467df1fa-2b68-459c-b739-7580bffdb6ca',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '7a9a1825-7810-4262-8bb0-a006678adf61',
				name: 'Command',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Divine, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 5,
					defence: 3
				},
				description: '',
				details: 'the target is dazed until the end of Glimnock’s next turn. In addition, Glimnock can choose to knock the target prone or slide the target up to 6 squares.',
				damage: 'Glimnock can choose to knock the target prone or slide the target up to 6 squares',
				category: 1
			},
			{
				id: '28c03561-39ee-45c3-8f42-3f6a79304b2b',
				name: 'Healing Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Divine, Healing',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'Glimnock or one ally in burst can spend a healing surge and regain an additional 1d6 hit points.',
				damage: 'Glimnock or one ally in burst can spend a healing surge and regain an additional 1d6 hit points',
				category: 3
			},
			{
				id: '38e39b83-2db1-45e5-bbb0-e5335b6d927a',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when glimnock takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Glimnock turns invisible until he attacks or until the end of his next turn.',
				damage: '',
				category: 5
			},
			{
				id: 'a1e415bf-9eb5-4421-9a12-2fa4ec7bbb0e',
				name: 'Reactive Stealth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Glimnock has cover or concealment when he makes an initiative check at the start of an encounter, he can make a Stealth check to escape notice.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller (L)',
		phenotype: 'Small fey humanoid'
	},
	{
		id: 'bb81a3b1-38d7-4a4a-bc9d-d145427c13c3',
		name: 'Guardian Commander',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 2,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 39,
		initiative: 6,
		ac: 16,
		fortitude: 15,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '7cdfb7e3-aa75-4c5e-ab21-4e664a776c1b',
				name: 'Repair Damage',
				keywords: '',
				details: 'aura 2; allied constructs that start their turn within the guardian commander’s aura heal 2 hit points.'
			}
		],
		powers: [
			{
				id: '7bddaf1c-0cbc-4014-8c47-fa3c5cf17a8a',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: '75338b8d-af4e-4ffa-b352-c9db312e0894',
				name: 'Force Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6+3 damage plus 1d6 force damage.',
				damage: '1d6+3 damage plus 1d6 force damage',
				category: 1
			},
			{
				id: '1a7b891f-00ec-4add-8255-aa08e2826e29',
				name: 'Guardian Tactics',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'Choose up to 3 allies in burst and slide each of those allies up to 3 squares each.',
				damage: 'Choose up to 3 allies in burst and slide each of those allies up to 3 squares each',
				category: 2
			},
			{
				id: '68c9db8a-a4d5-4b11-8468-7260d74def80',
				name: 'Guardian Onslaught',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Choose up to 3 allies in burst. Each of those allies immediately makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '793ff556-ecd6-4823-a14b-892e9612c25b',
				name: 'Self-Repair',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The guardian commander heals 9 hit points.',
				damage: 'The guardian commander heals 9 hit points',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Controller (L)',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: '092c78b9-d8be-4e52-83c9-a89a88a751e6',
		name: 'Hammer of Gond',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 31,
		initiative: 3,
		ac: 17,
		fortitude: 15,
		reflex: 13,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4a040bea-52c0-46fa-9d71-b88ce5109ad4',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'bee1c50b-f831-476f-923f-179cfce34a57',
				name: 'Powerful Wallop',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage and target is dazed (save ends).',
				damage: '2d6+3 damage and target is dazed (save ends)',
				category: 1
			},
			{
				id: 'bfc53dcf-61b3-4fb9-98ec-ae3fd1c41f0f',
				name: 'Wheelie',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hammer of Gond gains a +2 bonus to its speed until the end of its turn.',
				damage: 'The hammer of Gond gains a +2 bonus to its speed until the end of its turn',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural animate (construct)'
	},
	{
		id: '34a9e714-71e0-4e25-9454-5c6ee48f7cf1',
		name: 'Pirate Thug',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'club',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 14,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd1bffb19-4a8f-457a-9e07-50c73bbe4b23',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '133205b2-96f0-4e18-9f36-b9a0a6942a1e',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A pirate thug gains a +2 power bonus to damage while at least two other pirate thugs are within 5 squares of it.',
				damage: 'a pirate thug gains a +2 power bonus to damage while at least two other pirate thugs are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6a0196f9-9b24-4c24-97f9-7a87e9346a79',
		name: 'The Big Man',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +8, Intimidate +6',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 74,
		initiative: 2,
		ac: 15,
		fortitude: 19,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2b07ce46-0f7e-46d2-aa73-124c1fba6f39',
				name: 'Cudgel',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '8c663811-d431-4912-8b2d-5cd5ce377f66',
				name: 'Head Butt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 1
				},
				description: '',
				details: '1d6+3 damage and the target is dazed (save ends).',
				damage: '1d6+3 damage and the target is dazed (save ends)',
				category: 1
			},
			{
				id: 'f5a8e3ba-039f-4a5c-9173-3701e517fea2',
				name: 'Double Whammy',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Make two cudgel attacks against two different foes, or one cudgel attack and one head butt attack against the same foe.',
				damage: '',
				category: 1
			},
			{
				id: '65f4bf10-638a-4632-b756-ac0a310d70ce',
				name: 'Battle Fury',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'The Big Man makes a cudgel attack against each enemy within the burst, gaining a +4 power bonus on the attack roll. If the attack hits, the target is also knocked prone.',
				damage: 'gaining a +4 power bonus on the attack roll',
				category: 5
			},
			{
				id: '1acbe5a2-b7b9-4249-889e-40b9badab4fb',
				name: 'Murderous Frenzy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Big Man gains 1 action point the first time he reduces a foe to 0 hit points during an encounter.',
				damage: 'The Big Man gains 1 action point the first time he reduces a foe to 0 hit points during an encounter',
				category: 4
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Elite Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a759f371-d1e7-4e14-9df2-1d17bbf1f8c2',
		name: 'Adept of Bane',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +10, Religion +10',
		equipment: 'holy symbol; longsword; scale armor',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 58,
		initiative: 3,
		ac: 19,
		fortitude: 18,
		reflex: 13,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aef750ad-c43b-42e1-b030-393b1ea70ec0',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '2e98d2a0-d105-4237-a151-02c7b171ab5f',
				name: 'Dominating Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: '1d6+3 damage and the target is slowed (save ends).',
				damage: '1d6+3 damage and the target is slowed (save ends)',
				category: 1
			},
			{
				id: '89ea2816-4f47-4b3e-9a7d-c55dcba893ce',
				name: 'Withering Glance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'the target takes 5 ongoing necrotic damage and is weakened (save ends both).',
				damage: 'the target takes 5 ongoing necrotic damage and is weakened (save ends both)',
				category: 1
			},
			{
				id: 'b5edc689-d795-4396-b0e2-48ac02257114',
				name: 'Battle Grace',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'all allies in the burst gain +5 speed until the end of the adept of Bane’s next turn.',
				damage: 'all allies in the burst gain +5 speed until the end of the adept of Bane’s next turn',
				category: 3
			},
			{
				id: '3ddc7475-c898-4868-bc26-32078fc93ac8',
				name: 'Bane’s Command',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'bloodied allies in the burst regain 15 hit points.',
				damage: 'bloodied allies in the burst regain 15 hit points',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '298e03b0-2d18-4be6-a5cb-06c8205d33ef',
		name: 'Blade of Bane',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +10, Religion +6',
		equipment: 'greatsword; javelin; scale armor',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 50,
		initiative: 4,
		ac: 19,
		fortitude: 18,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b661139f-681c-495b-aaf2-42bf2bec6b87',
				name: 'Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d12+2 damage, and the target is marked until the end of the blade of Bane’s next turn.',
				damage: '1d12+2 damage',
				category: 1
			},
			{
				id: 'bff3a40b-f1e0-40b6-9532-d5e90d79784c',
				name: 'Kick',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 1d4+2 damage.',
				damage: '1d4+2 damage',
				category: 3
			},
			{
				id: '629765b6-bd6e-4da4-9e05-4bc873c7dfa3',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'b640503e-3afa-4c82-8f9f-b3848a6abd20',
		name: 'Bloody Scalp Pirate',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +8, Thievery +8',
		equipment: 'leather armor; longsword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 30,
		initiative: 5,
		ac: 17,
		fortitude: 14,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '478aaa9d-3900-4d06-8c87-367f8c025ad4',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'c36014c5-a150-4045-9447-52ccf4ba1046',
				name: 'Dirty Fighting',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage and the target is dazed (save ends).',
				damage: '1d8+2 damage and the target is dazed (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ccbf5142-5091-4c4a-b7f8-fe967e9fc1cd',
		name: 'Bloody Scalp Swashbuckler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +8, Thievery +8',
		equipment: 'leather armor; longsword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 64,
		initiative: 7,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c084cf9b-2b19-4ba2-a597-f7613aeec120',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '63ddc6ea-0544-4bb6-a8b3-5814efec4106',
				name: 'Double Slash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'The bloody scalp swashbuckler makes two longsword attacks (each attack must be made against a different target).; 1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '21d22a65-c4b0-4fda-808c-f870b5c9e443',
		name: 'Dark Hammer',
		details: '',
		size: 2,
		origin: 5,
		type: 0,
		keywords: 'construct',
		level: 1,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '4 (8 when charging)',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 34,
		initiative: 3,
		ac: 17,
		fortitude: 15,
		reflex: 11,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6cc5c5e1-0bd3-42c3-9636-5f5bf29009eb',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage plus 1d6 cold damage.',
				damage: '1d6+3 damage plus 1d6 cold damage',
				category: 1
			},
			{
				id: 'e65829de-0a6b-47ad-8374-ebb436bd156c',
				name: 'Frosty Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 3,
					defence: 2
				},
				description: '',
				details: 'the target takes ongoing 3 cold damage and is immobilized (save ends both).',
				damage: 'the target takes ongoing 3 cold damage and is immobilized (save ends both)',
				category: 1
			},
			{
				id: 'f2c770bb-a4ce-4947-95e9-7b67e58c95a7',
				name: 'Umbral Blend',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When adjacent to an ally with the shadow origin, both creatures gain +1 to AC and Reflex defense.',
				damage: 'both creatures gain +1 to AC and Reflex defense',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'cold 5',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 1 Brute',
		phenotype: 'Medium shadow animate (construct)'
	},
	{
		id: 'e19fe65f-4aa7-484a-b3d1-d99715ea9bf6',
		name: 'Energy Mote',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6, fly 6 (hover)',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 2,
		ac: 15,
		fortitude: 13,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5ae40317-d116-44ff-98f2-c0e78d04a2ae',
				name: 'Energy Ray',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '3 radiant damage.',
				damage: '3 radiant damage',
				category: 1
			},
			{
				id: '38c46b67-f297-4d45-af46-9db57f129c06',
				name: 'Kinetic Burst',
				action: {
					action: 7,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 2,
					defence: 2
				},
				description: '',
				details: 'enemies in burst suffer 3 radiant damage. Effect: Allies in burst region regain 6 hit points.',
				damage: 'enemies in burst suffer 3 radiant damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Small natural animate (construct)'
	},
	{
		id: '45897b02-fa11-482b-8b18-0a681e8d7c72',
		name: 'Fist of Bane',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'javelin; leather armor; short sword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 0,
		ac: 15,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4b906dbf-fec5-4aa8-9c84-7754c1ace8d1',
				name: 'Shortsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '4d6c0ef7-5f08-4b05-9ba0-e910b6d414dc',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '6517b6f8-7d0c-4cd1-95db-c9b74735eb07',
				name: 'Fervor of Bane',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fist of Bane gains a +1 power bonus to damage while at least 2 other fists of Bane are within 5 squares of it.',
				damage: 'the fist of bane gains a +1 power bonus to damage while at least 2 other fists of bane are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a2f82ad0-95a6-4f00-ac30-ed236a6ec69b',
		name: 'Shadow Shaper',
		details: '',
		size: 2,
		origin: 5,
		type: 0,
		keywords: 'construct',
		level: 1,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +7',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 22,
		initiative: 5,
		ac: 15,
		fortitude: 12,
		reflex: 14,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bc95a8da-4bb6-411a-8f39-79ed538bd3b1',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '0a4aea1f-7da0-46c0-9cc7-c8724bc5839f',
				name: 'Freezing Shadow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 15',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '1d6+4 cold damage. Miss: 2 cold damage.',
				damage: '1d6+4 cold damage',
				category: 1
			},
			{
				id: 'd163237a-a221-4d7b-8221-56d89fa97690',
				name: 'Umbral Blend',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When adjacent to an ally with the shadow origin, both creatures gain +1 to AC and Reflex defense.',
				damage: 'both creatures gain +1 to AC and Reflex defense',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'cold 5',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 1 Artillery',
		phenotype: 'Medium shadow animate (construct)'
	},
	{
		id: '2e11736b-b788-4187-a6a4-4dc33bdfbbbe',
		name: 'Shar’s Guardian',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +12, Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 156,
		initiative: 7,
		ac: 19,
		fortitude: 18,
		reflex: 18,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9089b527-8ad3-4d31-a9e7-732c62bb8bc4',
				name: 'Shadow Tendril',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4+2 damage.',
				damage: '2d4+2 damage',
				category: 1
			},
			{
				id: '6369b0fb-364e-48b9-9952-a90c53f98d07',
				name: 'Shadow’s Lash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Reach 2; Shar’s guardian can make 2 shadow tendril attacks. If both shadow tendril attacks hit the same target, that target is grabbed. Up to 3 targets can be grabbed at one time.; 1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: 'c0226c15-6548-477e-961c-4b465344972b',
				name: 'Dark Whirlwind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shar’s guardian shifts 8 squares and makes 3 shadow tendril attacks at any point during the shift. It can attack a given enemy only once, but it deals an extra 1d6 necrotic damage on each hit. Shar’s guardian can squeeze as a free action as part of this power.',
				damage: 'but it deals an extra 1d6 necrotic damage on each hit',
				category: 1
			},
			{
				id: '243d6f7d-bb6e-4ac0-9bdd-0207321da52d',
				name: 'Shar’s Noose',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'when Shar’s guardian begins its turn with a grabbed foe, it can move the grabbed foe (and itself with it) up to 3 squares. If the attack misses, the guardian decides whether to continue its move by itself (which ends the grab) or to remain in place (which maintains the grab).',
				damage: 'it can move the grabbed foe (and itself with it) up to 3 squares',
				category: 2
			},
			{
				id: '85d0d3ae-5cef-4b5d-ace6-2e782ccf5e0e',
				name: 'Shadow Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when first bloodied'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shar’s guardian teleports 3 squares and becomes insubstantial until the start of its next turn.',
				damage: 'Shar’s guardian teleports 3 squares and becomes insubstantial until the start of its next turn',
				category: 2
			},
			{
				id: '8f5be52b-eecd-4418-a691-09cc0814f3ca',
				name: 'Steal Hope',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a grabbed creature uses or receives the benefits of a healing surge, Shar’s guardian may make a shadow tendril attack against that creature. If the attack hits, it deals no damage, but Shar’s guardian regains the hit points that the grabbed creature would have regained, the grabbed creature regains no hit points, and the healing surge is still expended.',
				damage: 'it deals no damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Solo Skirmisher',
		phenotype: 'Large shadow humanoid'
	},
	{
		id: '2445a62c-fac9-4750-995c-b432a48547b1',
		name: 'Spellwrought Guardian',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Acrobatics +10',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 38,
		initiative: 7,
		ac: 18,
		fortitude: 15,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e2d2c21f-9549-49f3-b882-6a1a2d9394b5',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'b64c3362-6c42-49a4-b534-b73b0d3b7b1b',
				name: 'Energy Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire, Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Must use the charge action and must move through at least one of the teleport portals on the map; 1d10+3 damage. Roll 1d4 to determine the type of damage: 1 = acid, 2 = cold, 3 = fire, 4 = lightning.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '99677bdf-6be4-423a-8db0-154244d3bb33',
				name: 'Energy Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire, Lightning',
				condition: '',
				range: 'May not be used until the spellwrought guardian has used energy charge at least once during the encounter. Close burst 1',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '3d6+3 energy damage of the same type of energy as the last time the spellwrought guardian used energy charge.',
				damage: '3d6+3 energy damage of the same type of energy as the last time the spellwrought guardian used energy charge',
				category: 1
			},
			{
				id: '74829862-ec2e-4e3e-8199-3c2b52956cc2',
				name: 'Adaptive Energy Resistance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'After the spellwrought guardian takes damage from a particular type of energy, it gains resist 10 against that type of energy. Only one type of energy resistance can be active at any time, and it can only resist acid, cold, fire, or lightning.',
				damage: 'after the spellwrought guardian takes damage from a particular type of energy',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '10 any one type of energy',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '088560f6-ed1c-43ee-9ebe-9c584e9b7b41',
		name: 'Dragonborn Gladiator Battle Champion',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Athletics +14, History +6, Intimidate +14',
		equipment: 'bastard sword; scale armor',
		category: 'Dragonborn',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 196,
		initiative: 8,
		ac: 25,
		fortitude: 22,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '136883e8-26e5-4a36-8824-9875ca5de805',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '(+15 while bloodied); 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'afb79bfc-2de2-47ba-950d-56713852cfbe',
				name: 'Finishing Blow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Target must be bloodied; (+15 while bloodied); 2d10+4 damage, and the dragonborn gladiator’s allies gain a +2 bonus to attack rolls until the end of the dragonborn gladiator’s next turn.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: 'f1bbc947-3571-4cf9-84c4-af49fe235d7b',
				name: 'Dragon Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '(+13 while bloodied); 1d6+4 poison damage.',
				damage: '1d6+4 poison damage',
				category: 3
			},
			{
				id: 'a031cc11-bc28-4eeb-b405-be0281844ba5',
				name: 'Dragonborn Fury',
				action: null,
				keywords: '',
				condition: 'only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonborn gains a +1 racial bonus to attack rolls while bloodied.',
				damage: 'A dragonborn gains a +1 racial bonus to attack rolls while bloodied',
				category: 0
			},
			{
				id: '6ac9c937-a947-44ac-9ecf-725d2fc6c96a',
				name: 'Gladiator’s Strike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the dragonborn gladiator hits an enemy with an opportunity attack, the target is knocked prone.',
				damage: '',
				category: 0
			},
			{
				id: '9267fe03-d1f4-4ca6-903a-23f857c433ee',
				name: 'Battle Lord Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The battle champion and its allies deal an extra 1d6 damage against enemies that the battle champion flanks.',
				damage: 'the battle champion and its allies deal an extra 1d6 damage against enemies that the battle champion flanks',
				category: 0
			},
			{
				id: '74c55779-f32e-41af-a365-b3fa92281072',
				name: 'Battle Talent',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The battle champion can score critical hits on attack rolls of natural 19 and 20.',
				damage: 'The battle champion can score critical hits on attack rolls of natural 19 and 20',
				category: 0
			},
			{
				id: 'd51e5358-0947-4f2c-98d9-c79375fa042f',
				name: 'Inspiring Assault',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever it scores a critical hit, the battle champion and all allies within 5 squares regain hit points equal to one-half the battle champion’s level.',
				damage: 'the battle champion and all allies within 5 squares regain hit points equal to one-half the battle champion’s level',
				category: 0
			},
			{
				id: '7a2f00c6-b286-45e1-aa6a-a52c02433e80',
				name: 'Lone Fighter',
				action: null,
				keywords: '',
				condition: '',
				range: 'The dragonborn gladiator gains a +2 bonus to melee attack rolls when adjacent to only one enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '638abbe5-434d-4d9d-9a48-5f283e372cbe',
		name: 'Spellplague Adept',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'spellscarred',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +10, Athletics +4, History +12',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 46,
		initiative: 5,
		ac: 17,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3c86653e-6bfd-4707-ba6e-8d197001f86e',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 + 1 damage.',
				damage: '1d8 + 1 damage',
				category: 1
			},
			{
				id: '31bcfd3d-e626-4601-940c-30deee316721',
				name: 'Withering Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires quarterstaff; 2d10 + 4 necrotic damage, and the target is dazed until the end of the spellplague adept’s next turn.',
				damage: '2d10 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'c2cc17a2-c9fa-49ca-a167-ad41acf87827',
				name: 'Call of the Plague',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '2d6 + 4 necrotic damage, and the target slides 3 squares.',
				damage: '2d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: '89a91740-3989-45a4-be9a-713d32455b99',
				name: 'Plague Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d8 + 4 necrotic damage, and the target is pushed 1 square and knocked prone. Miss: Half damage, and the target is neither pushed nor knocked prone.',
				damage: '2d8 + 4 necrotic damage',
				category: 1
			},
			{
				id: '4eec3720-0891-425d-a3f1-e35f73030581',
				name: 'Spellplague Resilience',
				action: {
					action: 4,
					trigger: 'when the spellplague adept suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The spellplague adept makes a saving throw against the triggering effect',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller (L)',
		phenotype: 'Medium natural humanoid (spellscarred)'
	},
	{
		id: 'f8593463-d263-4547-b437-7826a2e14a12',
		name: 'Spellscarred Dwarf Bolter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +10, Endurance +9',
		equipment: 'chainmail; crossbow; warhammer',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 34,
		initiative: 5,
		ac: 15,
		fortitude: 14,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd33295bf-ab7b-430c-9e81-418e3c42b0fa',
				name: 'Warhammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10 + 1 damage.',
				damage: '1d10 + 1 damage',
				category: 1
			},
			{
				id: '59bad3f1-9138-4b8a-bfd7-8a3577a9f867',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 + 2 damage.',
				damage: '1d8 + 2 damage',
				category: 1
			},
			{
				id: '625c635e-e599-4cab-a25c-c6d027108ef7',
				name: 'Plague Lash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d6 + 1 psychic damage. Each time the target attacks on its next turn, it also coughs up sickly blue-black blood, taking 5 necrotic damage.',
				damage: '1d6 + 1 psychic damage',
				category: 1
			},
			{
				id: '34ef239b-3167-4002-ac36-3ec8d560a79b',
				name: 'Aimed Shot',
				action: null,
				keywords: '',
				condition: '',
				range: 'The dwarf bolter gains a +2 bonus to attack rolls and deals an extra 1d6 damage with ranged attacks against creatures that don’t have cover',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'd9ef170a-7ee1-423a-8cbe-93000f618b86',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a dwarf to move --- through a push, a pull, or a slide --- the dwarf moves 1 square less than the effect specifies. When an attack would knock the dwarf prone, the dwarf gains an immediate saving throw to avoid falling prone.',
				damage: 'or a slide --- the dwarf moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '0a169110-9e28-4507-a2af-e8b24694a7b0',
		name: 'Spellscarred Halfling Thief',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Acrobatics +11, Stealth +9, Thievery +11',
		equipment: 'dagger; leather armor; thieves’ tools',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 34,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ee5f853-0ed1-4209-8813-ce17fd10ad9b',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4 + 3 damage.',
				damage: '1d4 + 3 damage',
				category: 1
			},
			{
				id: '62fd8ebe-dfdb-45a1-bdf1-8cd4e5de0e49',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4 + 3 damage.',
				damage: '1d4 + 3 damage',
				category: 1
			},
			{
				id: '4178b094-83f3-4abc-9345-6ec4da783a42',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The halfling thief can move up to 3 squares and make one melee basic attack at any point during that movement. The halfling thief doesn’t provoke opportunity attacks when moving away from the target of its attack.',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: '2ccd6993-a870-4776-9db6-38e2527f1f03',
				name: 'Combat Advantage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The halfling thief deals an extra 1d6 damage on melee attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '1d0074cd-ee49-4c1e-9f93-9db9fdba2429',
				name: 'Nimble Reaction',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Halflings gain a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Halflings gain a +2 racial bonus to AC against opportunity attacks',
				category: 1
			},
			{
				id: '20296c45-cd2a-424d-b988-89ff94510348',
				name: 'Spellmirror',
				action: {
					action: 4,
					trigger: 'when a creature misses the spellscarred halfling thief with an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 2
				},
				description: '',
				details: 'Targets the creature that missed the spellscarred halfling thief; 2d10 + 2 damage. This damage is of the same type (or types) as the attack that missed. The target also gains any effect (and its duration) that its attack would have inflicted on the spellscarred halfling thief. Miss: Half damage, and the attack does not produce any effects.',
				damage: '2d10 + 2 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '872f9c51-c413-4f02-bef5-5c44619b3636',
		name: 'Werewolf Rite Defender',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 30,
		initiative: 2,
		ac: 17,
		fortitude: 13,
		reflex: 14,
		will: 13,
		regeneration: {
			value: 3,
			details: 'if the werewolf takes damage from a silver weapon, its regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: 'f61d52b2-37d6-4e00-8b31-2bbfd6588bb2',
				name: 'Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 + 1 damage.',
				damage: '1d8 + 1 damage',
				category: 1
			},
			{
				id: '63807ff1-b89a-45f0-a222-0d80d143d9d2',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: '1bb662f1-3b9c-4b1d-8f11-1762579b4973',
				name: 'Protective Snarl',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d8 + 2 damage, and the target is marked until the end of the werewolf rite defender’s next turn.',
				damage: '2d8 + 2 damage',
				category: 1
			},
			{
				id: '5d4dabd7-8f1c-4eba-bfc4-8ef071ccc6d0',
				name: 'Blood Rage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The werewolf’s melee attacks deal 4 extra damage against a bloodied target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'a7f58633-d026-4067-8c3f-0257c63a443d',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A werewolf can alter its physical form to appear as a gray wolf or a unique human. It cannot use its bite attack in human form and it cannot make claw attacks in wolf form.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'd60ad063-9138-427f-84bf-1c63f1b69573',
		name: 'Elm Skirmisher',
		details: '',
		size: 2,
		origin: 4,
		type: 3,
		keywords: 'living construct',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Elf',
		skills: 'Acrobatics +9, Athletics +8',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 37,
		initiative: 5,
		ac: 16,
		fortitude: 13,
		reflex: 17,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f67d73da-ae7e-4800-8534-478fcecd5ad3',
				name: 'Stony Branch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage and slide 1 square.',
				damage: '1d10+3 damage and slide 1 square',
				category: 1
			},
			{
				id: '222990eb-5b06-4314-b7af-fb82ff87e438',
				name: 'Fleeting Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The elm skirmisher moves up 8 squares and make one melee basic attack at any point during that movement. The elm skirmisher doesn’t provoke opportunity attacks when moving away from the target of the attack.',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural magical beast (living construct)'
	},
	{
		id: 'd0c7aad6-a434-42b9-90e5-bc323ed4e3ec',
		name: 'Oak Brute',
		details: '',
		size: 2,
		origin: 4,
		type: 3,
		keywords: 'living construct',
		level: 1,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Elf',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 32,
		initiative: 2,
		ac: 13,
		fortitude: 14,
		reflex: 12,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd4aed33e-2723-4dff-b277-21fffcfa0757',
				name: 'Stony Branch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '2d6+1 damage.',
				damage: '2d6+1 damage',
				category: 1
			},
			{
				id: '0532efa8-4740-46b7-a359-177e2205685f',
				name: 'Trample',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 2,
					defence: 2
				},
				description: '',
				details: 'The oak brute can move up to its speed and enter enemies’ spaces. This movement provokes opportunity attacks, and the oak brute must end its move in an unoccupied space. When it enters an enemy’s space, the oak brute makes a trample attack; 1d6+4 damage, and the target is knocked prone.',
				damage: '1d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Brute',
		phenotype: 'Medium natural magical beast (living construct)'
	},
	{
		id: '45a9e8da-107e-43c2-b009-f641d7f71b51',
		name: 'Silvered Hurler',
		details: '',
		size: 2,
		origin: 4,
		type: 3,
		keywords: 'living construct',
		level: 3,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Elf',
		skills: 'Acrobatics +9, Athletics +7',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 37,
		initiative: 5,
		ac: 15,
		fortitude: 14,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e0a2ca5b-f04b-4524-976f-ccea362393bb',
				name: 'Unarmed Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage and slide 1 square.',
				damage: '1d10+3 damage and slide 1 square',
				category: 1
			},
			{
				id: '6dc1d3c8-3c0e-4cf4-8843-90874231370f',
				name: 'Silver Javelin',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '58feb3b9-152f-4031-bc11-b2bcda701332',
				name: 'Combat Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The silvered hurler shifts 1 square.',
				damage: 'The silvered hurler shifts 1 square',
				category: 5
			},
			{
				id: '3ac65ee8-0a90-4450-b857-4ade841e85ef',
				name: 'Preternatural Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The silver hurler can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Artillery',
		phenotype: 'Medium natural magical beast (living construct)'
	},
	{
		id: '01f95de2-b786-4bdb-9ba4-f3342edd27a9',
		name: 'Silvered Spearman',
		details: '',
		size: 2,
		origin: 4,
		type: 3,
		keywords: 'living construct',
		level: 3,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Elf',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 52,
		initiative: 3,
		ac: 15,
		fortitude: 17,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a0eb7f92-8be7-4775-8da2-dc2ea08de18c',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: 'e0269f4d-5e68-4f8f-9570-3c351a236c17',
				name: 'Cunning Thrust',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: 'The silvered spearman makes a spear attack, but gets two attack rolls and takes the better result; 2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Brute',
		phenotype: 'Medium natural magical beast (living construct)'
	},
	{
		id: '3f62bd84-fe4b-47b2-8c5f-c4b8cb9ba6a4',
		name: 'Elalaran',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +8, Stealth +10, Thievery +10',
		equipment: 'dagger; leather armor',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 35,
		initiative: 7,
		ac: 17,
		fortitude: 13,
		reflex: 18,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2123354c-f437-4225-9c5d-136c522107f1',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '83eea086-9c11-457d-a42f-4b6cfd544a0e',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '2a4c2186-57fa-4040-867a-6ac231a4079c',
				name: 'Deft Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d4+4 damage; Special: you can move 2 squares before the attack.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: 'b862ad96-f8b0-4365-8be6-c1bd226f99f1',
				name: 'Bait and Switch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '2d4+4 damage; in addition Elalaran switches places with the target and can then shift 3 squares.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: '48d5d0b8-8556-4613-a6e5-e765b0a0ed1b',
				name: 'Blinding Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d4+4 damage; Hit: the target is blinded until the end of your next turn; Miss: Half damage and the target is not blinded.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: 'fcce19e9-7b5c-48c1-b069-4dda87c98d79',
				name: 'First Strike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'At the start of an encounter, Elalaran has combat advantage against any creatures that have not yet acted.',
				damage: '',
				category: 0
			},
			{
				id: '9b06b545-3fe7-4ec3-a9be-2e378aaaaa11',
				name: 'Artful Dodger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Elalaran gains a +2 bonus to AC against opportunity attacks.',
				damage: 'Elalaran gains a +2 bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: 'bec862f9-1193-4bac-ac06-4cda6d0e80b5',
				name: 'Sneak Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Once per round, when Elalaran has combat advantage against an enemy, Elalaran deals extra +2d6 damage if the attack hits.',
				damage: 'elalaran deals extra +2d6 damage if the attack hits',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '17449096-5026-4a86-9735-eeaa7203b62f',
		name: 'Halfling Sellsword',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6 see also mobile melee attack',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +11, Stealth +9, Thievery +11',
		equipment: 'dagger; leather armor; thieves’ tools',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 34,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'acb1355d-ca86-48c8-993f-7d7701e7bb94',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '25d362af-c7d3-4c96-a1f2-5351a84cd0e8',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '9a845784-4e77-4c09-8b4a-6e84a74ebc8c',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The halfling sellsword can move up to 3 squares and make one melee basic attack at any point during the movement. The halfling sellsword does not provoke opportunity attacks when moving away from the target of its attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '82b664ce-7709-4794-9df9-61589e2fb7ed',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The halfling sellsword deals an extra 1d6 damage on melee attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'cf332872-9c6a-4265-90fe-3ea99085d84c',
				name: 'Nimble Reaction',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Halfings gain a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Halfings gain a +2 racial bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: 'ee0899cc-57f2-4578-a414-1c0c50d4dacf',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the halfling would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The halfling forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '86a21766-d9a1-4c6b-91ab-6a904483a467',
		name: 'Human Cult Acolyte',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'leather armor; short sword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 14,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a8d6663a-c859-499d-9be8-5bbf3a0f352f',
				name: 'Shortsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '1967f04c-8a0e-428e-b878-39a459498be8',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A human cult acolyte gains a +2 power bonus to defenses while at least two other human cult acolytes are within 5 squares of it.',
				damage: 'A human cult acolyte gains a +2 power bonus to defenses while at least two other human cult acolytes are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'fc9896bb-8d4c-4c5e-93aa-a9ca677402a6',
		name: 'Human Cult Devotee',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Streetwise +7',
		equipment: 'chainmail; crossbow; crossbow bolts (20); halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 47,
		initiative: 5,
		ac: 18,
		fortitude: 16,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '255b98b6-d0c2-44cb-9b26-4a588eb0690e',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+3 damage, and the target is marked until the end of the human cult initiate’s next turn.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '709fa293-5049-4242-b85c-8288bfdbf1fa',
				name: 'Powerful Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Requires halberd; reach 2; 1d10+7 damage, and the target is knocked prone.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '82333bf9-3af0-41c8-8bde-6802ea8da7bd',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c8147625-1e3e-42f7-8244-48760a792cf7',
		name: 'Human Cult Fanatic',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +9, Endurance +9',
		equipment: 'greataxe; handaxe; hide armor',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 66,
		initiative: 2,
		ac: 15,
		fortitude: 15,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bce5c070-5bb4-40f3-9ebf-437bff5efd51',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d12+4 damage (crit 1d12+16).',
				damage: '1d12+4 damage (crit 1d12+16)',
				category: 1
			},
			{
				id: 'd46d03e4-6a27-4ea9-b5bc-8b9786ab0df1',
				name: 'Battle Fury',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: 'The human cult fanatic makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '999e80a8-9bbb-4122-8167-f4aa793bf46c',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3e5d3310-a280-4f63-b8e4-e1b8e46e8e91',
		name: 'Human Hired Goon',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'club; leather armor',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 14,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c913c3b9-8974-478a-9999-dd43ff332298',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '0fe71d21-ebef-4a87-8bf2-68580593a689',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A human hired goon gains a +2 power bonus to defenses while at least two other human hired goons are within 5 squares of it.',
				damage: 'A human hired goon gains a +2 power bonus to defenses while at least two other human hired goons are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'be6dc2a3-8d66-42c8-bee8-099789c40cab',
		name: 'Human Hired Goon Leader',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: 'dagger; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd6e7959f-e0ae-4f70-aa8c-07efd86edf68',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the human press gang leader shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'e5d33b70-6bf5-453e-bba7-556aff10a1f3',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: 'aac60ed6-1fe3-44bc-bb19-34c392013608',
				name: 'Dazing Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: 'Requires mace; 1d8+1 damage, the target is dazed until the end of the human press gang leader’s next turn, and the human press gang leader shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'f5d07355-2e16-4a9b-b72b-cf5ed72b30da',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The human press gang leader deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a43b1fd8-0f21-467a-92f5-ffa032301c00',
		name: 'Human Press Gang Leader',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: 'dagger; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a5679127-9844-4461-a3ae-cb7bb6812706',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the human press gang leader shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '6c997d7b-b818-408a-827f-91d873649058',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: 'e838b778-92e7-47eb-9e91-9b5360128af7',
				name: 'Dazing Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: 'Requires mace; 1d8+1 damage, the target is dazed until the end of the human press gang leader’s next turn, and the human press gang leader shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '6ea589e4-298a-4f23-a581-2959ae71eee6',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The human press gang leader deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd7e1af67-6501-455c-be3f-75d3874dafe8',
		name: 'Human Press Gang Member',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'club',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 1,
		ac: 15,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '54a54042-f738-4ea2-bfb4-5ee85b69e646',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: 'b2f2e5a8-48a7-415b-ab70-a449b2b0b6fe',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The human press gang member gains a +2 power bonus to all defenses while at least two other human press gang members are within 5 squares of it.',
				damage: 'The human press gang member gains a +2 power bonus to all defenses while at least two other human press gang members are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'de055711-dfa0-4929-bbaf-cdf2dd264f1f',
		name: 'Lekaral',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +8, Athletics +6, Bluff +11, Diplomacy +11, Intimidate +11',
		equipment: 'dagger; shimmering armor',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 80,
		initiative: 2,
		ac: 13,
		fortitude: 14,
		reflex: 15,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fff90887-8ba7-41b7-a8f6-32b936136af4',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: '843c6a6b-07c4-4df0-a7b7-85f735223d09',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: 'b5a4ec4d-1cff-4714-9be2-5177c0dab450',
				name: 'Chaos Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Arcane, Implement, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: '1d10+6 psychic damage; If you rolled an even number for the primary attack, make a secondary attack. Secondary Target: One creature within 5 squares of the target last hit by this power. Secondary Attack: +5 vs. Will; 1d6 psychic damage. If you rolled an even number for the secondary attack roll, repeat the secondary attack. You can attack a creature only once with a single use of this power.',
				damage: '1d10+6 psychic damage',
				category: 1
			},
			{
				id: '8527cacc-4a59-4f29-88c2-a7975be9df72',
				name: 'Bedeviling Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Implement, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: '1d10+6 psychic damage, and you push the target 2 squares. If you rolled an even number on the attack roll, you slide the target instead of pushing it.',
				damage: '1d10+6 psychic damage',
				category: 1
			},
			{
				id: '01d24284-aa83-4dd2-82e5-4c43d6bbcbe8',
				name: 'Dazzling Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Arcane, Implement, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '6d6+6 radiant damage. If you rolled an even number on the attack roll, the target takes a -2 penalty to attack rolls against you (save ends). Miss: Half damage.',
				damage: '6d6+6 radiant damage',
				category: 1
			},
			{
				id: '7f256d8c-3ce2-4484-ba30-be82fd8a5c43',
				name: 'Elemental Shift',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Arcane',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Lekaral can change his resistance to one of the other damage types for the rest of the encounter. In addition, one ally adjacent to Lekaral gains resist 5 to the damage type that he resists until the end of the encounter.',
				damage: 'lekaral can change his resistance to one of the other damage types for the rest of the encounter',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'cold 5',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '01b6109d-041e-433f-a511-b689b734e492',
		name: 'Lekaral’s Double',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +10, Insight +9, Stealth +10',
		equipment: 'short sword',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 45,
		initiative: 6,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b87c777a-5c41-40bf-89ff-f69a3aeee4c2',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '43ef438d-232e-4843-a3f7-c86a73b561b7',
				name: 'Shapeshifter Feint',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: 'the doppelganger gains combat advantage against the target until the end of the doppleganger’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '010daf6e-67db-4f9f-92ad-71742a8cd934',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The doppelganger sneak deals an extra 1d6 damage against any target it has combat advantage against.',
				damage: 'the doppelganger sneak deals an extra 1d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '9f803dc8-f241-4c4a-837f-a23fd3b397e9',
				name: 'Change Shape',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A doppelganger can alter its physical form to take on the appearance of any Medium humanoid, including a unique individual.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'ba08bc01-6ed6-46cd-9a6a-083d54ec6574',
		name: 'Dark Skull',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5',
		alignment: 'Good',
		languages: 'Common',
		skills: '',
		equipment: 'greatsword; plate armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 56,
		initiative: 1,
		ac: 20,
		fortitude: 19,
		reflex: 16,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b857d6b9-b296-4839-b2de-67735ae9ac18',
				name: 'Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage and push 1 square. Dark Skull can then shift into the vacated square.',
				damage: '1d10+3 damage and push 1 square',
				category: 1
			},
			{
				id: 'f1c77aab-c94e-47d9-bcce-5349f73af674',
				name: 'Furious Roar',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'targets pushed 2 squares and knocked prone.',
				damage: 'targets pushed 2 squares and knocked prone',
				category: 3
			},
			{
				id: 'a0aa9f83-f75c-484c-b2e0-a7752304ace9',
				name: 'Face of Fright',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 20',
				attack: {
					bonus: 5,
					defence: 3
				},
				description: '',
				details: 'target takes a -2 penalty to attack rolls (save ends).',
				damage: 'target takes a -2 penalty to attack rolls (save ends)',
				category: 3
			},
			{
				id: 'a654ba76-0950-4289-a408-d80379bdb24a',
				name: 'Through the Shadows',
				action: {
					action: 4,
					trigger: 'when an enemy hits dark skull with a ranged attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Dark Skull can teleport up to 5 squares towards the attacker.',
				damage: 'Dark Skull can teleport up to 5 squares towards the attacker',
				category: 5
			},
			{
				id: '2f72d349-c3c8-4566-8356-2e5f9c3055b6',
				name: 'Bloody Roar',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Furious Roar recharges and Dark Skull uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: 'd28a669a-35d7-490a-b0f0-749873b5cca8',
				name: 'Fade to Shadow',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Teleport 10 squares to an area of shadow or darkness.',
				damage: 'Teleport 10 squares to an area of shadow or darkness',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Elite Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9cfcd597-5053-4b43-8054-24ca27214efc',
		name: 'Draft Horse (Suzy)',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 1,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '10',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 32,
		initiative: 1,
		ac: 14,
		fortitude: 15,
		reflex: 13,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad249b40-835f-40dd-a0df-2e4adb665dd6',
				name: 'Kick',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage. A draft horse can’t attack while harnessed to a carriage.',
				damage: '1d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Brute',
		phenotype: 'Large natural beast'
	},
	{
		id: 'c981a1bc-5abc-4fe6-b25c-5f83e6fc5954',
		name: 'Initiate of the Dark Eclipse',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'chainmail',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 20,
		initiative: 5,
		ac: 16,
		fortitude: 14,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '767c16fc-0f3b-4f46-bd3c-fdbeb2444775',
				name: 'Basic Chakram template',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '606263fe-98ad-4b9e-ad3e-f5217e2c647e',
				name: 'Chakram Thrown',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: 'b8c34924-1c95-4425-b833-462db812c38c',
				name: 'The Dark Eclipse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'An initiate can make two melee chakram attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '60c2b056-5778-4c67-8590-8d3aab6a1390',
				name: 'Returning Chakram',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An Initiate can throw a chakram in a sweeping arc so that it will return to him.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'fe68fdfb-d09b-4794-b446-bd2c640814a0',
		name: 'Nightcloak of the Dark Eclipse',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 84,
		initiative: 1,
		ac: 20,
		fortitude: 15,
		reflex: 17,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '348e35c3-4ce2-4dd8-bd9f-e3f256921e37',
				name: 'The Fear',
				keywords: '',
				details: 'aura 10; human allies gain + 2 to Will defense until the Master is bloodied.'
			}
		],
		powers: [
			{
				id: '1835f3e6-e046-49a7-8d4d-fbf92466bd3b',
				name: 'Chakram',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6 damage.',
				damage: '1d6 damage',
				category: 1
			},
			{
				id: 'd3c867d5-b0e9-4bae-8fc1-78abb3bbee27',
				name: 'Fear Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '1d6 damage and push target 2 squares.',
				damage: '1d6 damage and push target 2 squares',
				category: 1
			},
			{
				id: 'cafc8225-8eff-4e37-9c4a-a705533c951b',
				name: 'Cloud of Fear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'enemies within burst are dazed until end of their next turn. Aftereffect: -2 penalty to attacks (save ends).',
				damage: '-2 penalty to attacks (save ends)',
				category: 1
			},
			{
				id: 'b23e8bd0-9fda-4435-9ebc-3e7250cfe978',
				name: 'Quell the Flame',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'after a radiant power targets nightcloak',
				range: '',
				attack: null,
				description: '',
				details: 'The Nightcloak makes a Fear Bolt attack on creature that used radiant power against Nightcloak.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'bc83ac1f-0912-41c8-a357-fb69474c7687',
		name: 'Petitioner of the Dark Eclipse',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'club; leather armor',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 14,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ac14ebdc-8fd6-482c-807c-808ee293f2fe',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '6ee84c2b-ab3c-4f09-83e5-ad7bf296139e',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A petitioner gains a + 2 power bonus to defenses while at least two other petitioners are within 5 squares of it.',
				damage: 'A petitioner gains a + 2 power bonus to defenses while at least two other petitioners are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'd0814136-ef8f-45ac-a293-7aaf44a923d3',
		name: 'Shadow Juggernaut',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'Shadow',
		level: 2,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '5, fly 5 (hover; limit 1) no more than 1 square high',
		alignment: 'Evil',
		languages: '',
		skills: 'Intimidate +6',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 32,
		initiative: 4,
		ac: 14,
		fortitude: 15,
		reflex: 12,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f8b40fa8-b98c-47ef-b286-cfca17ff3d79',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '2d6+2 damage.',
				damage: '2d6+2 damage',
				category: 1
			},
			{
				id: 'ad8e88c3-a170-47bd-848c-d7a9caa00d4a',
				name: 'Wave of Shadows',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 3,
					defence: 2
				},
				description: '',
				details: '1d6+1 damage and enemies fall prone. Miss: Enemies fall prone.',
				damage: '1d6+1 damage and enemies fall prone',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Brute',
		phenotype: 'Large elemental beast (shadow)'
	},
	{
		id: 'ad217ef8-d784-4855-8741-40d3a2128586',
		name: 'Shadow Mote',
		details: '',
		size: 1,
		origin: 1,
		type: 1,
		keywords: 'Shadow',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6, fly 6 (hover; limit 1) no more than 1 square high',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +8',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 16,
		fortitude: 13,
		reflex: 13,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e83c7682-17e2-44bd-b792-e061b00a3ff6',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1 damage.',
				damage: '1 damage',
				category: 1
			},
			{
				id: '5d24fd20-79a1-4a1a-9994-e67c22567638',
				name: 'Shadowplay Distraction',
				action: null,
				keywords: '',
				condition: '',
				range: 'Opponents adjacent to a shadow mote take a -1 penalty to melee or ranged attacks per mote (up to -5).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Small elemental beast (shadow)'
	},
	{
		id: 'd6eba1ce-3a73-4b3e-b448-7a70c5b4d13e',
		name: 'Shadow Seeker',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'Shadow',
		level: 1,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6, fly 6 (hover; limit 1) no more than 1 square high',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 16,
		initiative: 3,
		ac: 16,
		fortitude: 13,
		reflex: 13,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c25c95ae-2c5a-4858-999e-c88cacd941b6',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'f14d95e0-ba3a-42aa-98c3-088a29ad74fa',
				name: 'Flitting Shadows',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d8 damage; a shadow seeker can move its speed and make this attack, gaining a +5 bonus to AC vs. opportunity attacks incurred by the movement.',
				damage: '1d8 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Skirmisher',
		phenotype: 'Medium elemental beast (shadow)'
	},
	{
		id: 'da88d072-2dd0-46e5-b4d4-633ea6c53a19',
		name: 'Dragonborn Fireseeker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'History +2, Intimidate +3',
		equipment: 'battleaxe; leather armor',
		category: 'Dragonborn',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 38,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2160933f-fbff-4d8f-94f0-94fc6fab0e54',
				name: 'Battleaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '((+8 while bloodied))1d10+4 damage.',
				damage: '((+8 while bloodied))1d10+4 damage',
				category: 1
			},
			{
				id: '0130fb86-7777-4bfe-9755-6c2f11578f8b',
				name: 'Overwhelming Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Requires battleaxe; ((+8 while bloodied))1d10+4 damage, and the target grants combat advantage to the dragonborn fireseeker until the end of the fireseeker’s next turn.',
				damage: '((+8 while bloodied))1d10+4 damage',
				category: 1
			},
			{
				id: '7bcac2b2-d35f-4c4d-b5dc-217cba470110',
				name: 'Dragon Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 5,
					defence: 2
				},
				description: '',
				details: '((+6 while bloodied))1d6+2 fire damage.',
				damage: '((+6 while bloodied))1d6+2 fire damage',
				category: 3
			},
			{
				id: '296bf654-88d6-43ac-83b0-10257bc1375b',
				name: 'Dragonborn Fury',
				action: null,
				keywords: '',
				condition: '(only while bloodied)',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonborn fireseeker gains a +1 racial bonus to attack rolls.',
				damage: 'A dragonborn fireseeker gains a +1 racial bonus to attack rolls',
				category: 0
			},
			{
				id: 'db86ed2c-4164-461b-a926-f180adf7283f',
				name: 'Skirmish +1d6',
				action: null,
				keywords: '',
				condition: '',
				range: 'If, on its turn, the dragonborn fireseeker ends its move at least 4 squares away from its starting point, it deals 1d6 extra damage with its melee attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'd71ed437-3139-4028-819c-f96779d77a54',
				name: 'Tactical Withdrawal',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dragonborn fireseeker shifts 3 squares.',
				damage: 'The dragonborn fireseeker shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd65af55f-343d-4744-99d6-ca47cd61f37e',
		name: 'Firebird',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'air, fire',
		level: 2,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: 'fly 6 (hover)',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: 'Athletics +11',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 168,
		initiative: 2,
		ac: 18,
		fortitude: 18,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [
			{
				id: '0b553574-fd47-4025-a960-bc6043274c10',
				name: 'Body Blaze',
				keywords: '',
				details: '(Fire) aura 2; any creature that enters the aura or starts its turn within the aura takes 5 fire damage.'
			}
		],
		powers: [
			{
				id: '0e523f1e-725a-4e8d-aa43-6c760f6825ff',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 fire damage.',
				damage: '2d8+5 fire damage',
				category: 1
			},
			{
				id: '1263003d-82b5-48ac-8982-7db2b2afc35b',
				name: 'Firebird Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The firebird makes two bite attacks. If both bites hit a single target, it makes a third bite attack against the same target.',
				damage: '',
				category: 1
			},
			{
				id: '8e4cd07e-fa18-4d9a-bbb7-73211017da0c',
				name: 'Tumbling Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Teleportation',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 3,
					defence: 2
				},
				description: '',
				details: '3d6+3 fire damage and the target takes ongoing 5 fire damage (save ends). Effect: The firebird teleports to any open space adjacent to the border of the blast’s area.',
				damage: '3d6+3 fire damage and the target takes ongoing 5 fire damage (save ends)',
				category: 1
			},
			{
				id: 'f349fa5a-9b7e-46ab-b65f-d7509af19466',
				name: 'Fire Spray',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the firebird with a ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 3,
					defence: 2
				},
				description: '',
				details: 'targets the triggering enemy; 1d6+1 fire damage, and the target is blinded until the end of the firebird’s next turn.',
				damage: '1d6+1 fire damage',
				category: 5
			},
			{
				id: '1325bb5f-9117-4c9f-9233-78f603868c86',
				name: 'Feeding the Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharges when an adjacent creature becomes bloodied'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 3,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 2d8+5 fire damage and the target is weakened (save ends), and the firebird heals 42 hit points.',
				damage: '2d8+5 fire damage and the target is weakened (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fire',
		tactics: '',

		info: 'Level 2 Solo Brute',
		phenotype: 'Large elemental beast (air, fire)'
	},
	{
		id: 'ee91d3e1-d46c-4101-ac13-dd47f242e70d',
		name: 'Human Firetender',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Streetwise +7',
		equipment: 'chainmail; crossbow; crossbow bolts (20); halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 39,
		initiative: 5,
		ac: 17,
		fortitude: 15,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2593992f-931f-4d7e-86da-565dfcf6b5dc',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+3 damage, and the target is marked until the end of the human firetender’s next turn.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '96657e22-ab53-4848-81ee-7188dd62415a',
				name: 'Powerful Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Requires halberd; reach 2; 1d10+7 damage, and target is knocked prone.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '1fd17359-2b6d-4685-a70e-5d982e634efe',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4a255f9c-041e-404d-b184-f9ac20e56989',
		name: 'Myrelas the Gallant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +10, Intimidate +9, Stealth +9',
		equipment: 'rapier',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 45,
		initiative: 6,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0bd7c15d-b910-45fb-9527-a9ba1b812b78',
				name: 'Rapier',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '3845bbfc-b2b7-405c-aec5-dab0950b6b7a',
				name: 'Bravo Feint',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: 'The doppelganger shifts 3 then attacks an adjacent target; the doppelganger gains combat advantage against the target until the end of the doppelganger’s next turn.',
				damage: 'The doppelganger shifts 3 then attacks an adjacent target',
				category: 2
			},
			{
				id: '4cc4b097-c9da-4cb8-97fb-73fa37574555',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The doppelganger sneak deals an extra 1d6 damage against any target it has combat advantage against.',
				damage: 'the doppelganger sneak deals an extra 1d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '9a988951-f1f0-48b6-b12c-68cd0db62b24',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A doppelganger can alter its physical form to take on the appearance of any Medium humanoid, including a unique individual.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '71176f27-de72-4be9-b728-a53f559eca26',
		name: 'Perfumed Lackey',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'short sword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 0,
		ac: 15,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cf72ec6a-ffa5-4d05-838b-b314d3bcf2e7',
				name: 'Short sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '510d3c36-84a6-4aea-abeb-f4bc8ef38884',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A perfumed lackey gains a +2 power bonus to all defenses while at least two other perfumed lackeys are within 5 squares of it.',
				damage: 'A perfumed lackey gains a +2 power bonus to all defenses while at least two other perfumed lackeys are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2b44b93e-c9f4-401e-80af-452a0c56466c',
		name: 'Perfumed Sentry',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: 'dagger; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6ee537b2-b809-4a5e-b07a-67781dfe87c2',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage and the perfumed sentry shifts 1 square.',
				damage: '1d8+1 damage and the perfumed sentry shifts 1 square',
				category: 1
			},
			{
				id: 'bd40a43d-52c9-4563-ae9a-a4e7f30e8e05',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '55d05a36-2b6e-48cb-8a27-3eea2cf82db6',
				name: 'Dazing Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the target is dazed until the end of the perfumed sentry’s next turn, and the perfumed sentry shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'cf5970ef-bfd8-4e04-8de9-1161e517ff9d',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The perfumed sentry deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c796c4a5-8ead-4d09-9023-b744ec625d14',
		name: 'Sambral Bravo',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +6',
		equipment: 'leather armor; short sword',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 37,
		initiative: 5,
		ac: 16,
		fortitude: 15,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '085c8d16-a730-4ee9-b5f0-4dd88c2886e0',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, and the Sambral bravo can shift 1 square.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'c699e01d-bae4-4120-b090-dc3f4e969cfb',
				name: 'Double Slash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage (two attacks); 1d6+1 damage per attack. If both attacks hit the same target, the target is pushed 1 square.',
				damage: '2d6+3 damage (two attacks)',
				category: 1
			},
			{
				id: '4cf75a15-298d-4369-8138-a00cca7f18f1',
				name: 'Deep Cut',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage, ongoing damage 3 (save ends), and the Sambral bravo can shift 1 square.',
				damage: '2d6+3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4ba69594-667a-4b3d-8276-7b73e5621e3f',
		name: 'Genasi Bandit',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: 'dagger; leather armor; mace',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 15,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5d41a3fa-6288-4700-afd6-3e15e952540a',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the genasi thug shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '2ffa51b7-59c4-41fe-8859-e78d02abdb17',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '2ba4f5d4-f3c1-481a-9c57-565b610fa37c',
				name: 'Dazing Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: 'Requires mace; 1d8+1 damage, the target is dazed until the end of the genasi thug’s next turn, and the genasi thug shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'ed1e45cf-1830-4253-a298-6c3d26f89406',
				name: 'Earthshock',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: 'target is knocked prone.',
				damage: '',
				category: 3
			},
			{
				id: '728b0a4e-8cc7-4110-ae61-51cbc07ddc4e',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The genasi thug deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage again.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '0df3263b-1f6f-4453-a89e-c3924e88f9d5',
		name: 'Genasi Miller',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Athletics +9, Endurance +9',
		equipment: 'greataxe; handaxe; hide armor',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 66,
		initiative: 3,
		ac: 15,
		fortitude: 14,
		reflex: 12,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e62edbc2-c0e7-47d8-9be6-d17f1eb8bef8',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d12+4 damage (crit 1d12+16).',
				damage: '1d12+4 damage (crit 1d12+16)',
				category: 1
			},
			{
				id: 'e80ceaff-3dcd-47d9-b2e2-662e6548d389',
				name: 'Battle Fury',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The genasi miller makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '3d10+5 damage.',
				damage: '3d10+5 damage',
				category: 5
			},
			{
				id: '3ddeffe2-95af-4443-b5b0-1704e3c061f0',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'ab993e46-d9fc-487a-a95c-e221bab8f87c',
				name: 'Firepulse',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'when an enemy hits the genasi miller with a melee attack, the genasi miller makes an attack against the target',
				attack: {
					bonus: 5,
					defence: 2
				},
				description: '',
				details: '1d6+5 fire damage.',
				damage: '1d6+5 fire damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '27c0d98d-8436-42d6-b15d-6085e15f0ad5',
		name: 'Genasi Thundermage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Arcana +11',
		equipment: 'implement, wand; quarterstaff',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 42,
		initiative: 4,
		ac: 17,
		fortitude: 12,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0b23c8d1-edca-4de5-9377-fc0876250255',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'b4b10e8c-7478-4720-b56d-9197d48b6aef',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d4+4 force damage.',
				damage: '2d4+4 force damage',
				category: 1
			},
			{
				id: '7ab92474-87f3-417d-ab69-111afe5d6977',
				name: 'Dancing Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'The genasi thundermage makes a separate attack against 3 different targets ranged 10',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d6+4 lightning damage.',
				damage: '1d6+4 lightning damage',
				category: 1
			},
			{
				id: '5d879875-99f7-4c58-a441-e01f52cdcf24',
				name: 'Thunder Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d8+4 thunder damage and the target is dazed (save ends).',
				damage: '1d8+4 thunder damage and the target is dazed (save ends)',
				category: 1
			},
			{
				id: 'a78079c7-1a7d-49d3-8d6e-b84629573509',
				name: 'Promise of Storm',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the genasi thundermage’s next turn, he deals an extra 1d8 damage with any lightning or thunder power he uses.',
				damage: 'he deals an extra 1d8 damage with any lightning or thunder power he uses',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 5,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '1a6d60d3-b572-4a1c-af23-d736486f32c9',
		name: 'Hooked Claw Harpy',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 110,
		initiative: 5,
		ac: 20,
		fortitude: 15,
		reflex: 17,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9f46c898-9ef4-4d81-815e-9b2f44ac0f47',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '0d1bf150-98f0-4513-8154-95a3976ac7b4',
				name: 'Alluring Song',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'deafened creatures are immune; the target is pulled 3 squares and immobilized (save ends). When the harpy sustains the power, any target that has not yet saved against the effect is pulled 3 squares and immobilized (save ends).',
				damage: 'the target is pulled 3 squares and immobilized (save ends)',
				category: 1
			},
			{
				id: '1a8f2fc9-21f9-44b0-8e11-049119dc25f0',
				name: 'Deadly Screech',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '1d6+3 thunder damage, and the target is dazed (save ends).',
				damage: '1d6+3 thunder damage',
				category: 1
			},
			{
				id: '6df16b0b-ce9b-4e38-a833-ebf2b5408a0f',
				name: 'Desperate Screech',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Hooked Claw harpy’s deadly screech recharges, and the harpy uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '0d1e22dd-78b5-4752-956e-82ed0d9446dd',
				name: 'Hideous Visage',
				action: {
					action: 5,
					trigger: 'when hooked claw harpy is targeted by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'the attacker must target a different creature with the melee attack or forego its attack.',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets attacker only',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 10,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '5db6a249-c11a-4422-aa07-5eb2a1618557',
		name: 'Duergar Fleshtearer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'devil, dwarf',
		level: 11,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Dwarven',
		skills: 'Bluff +10, Dungeoneering +14, Stealth +14',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 89,
		initiative: 13,
		ac: 26,
		fortitude: 25,
		reflex: 24,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c207de6b-34e0-4aef-9273-620db7b1cd4a',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage, and ongoing 5 damage (save ends).',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'ef642398-d7b7-4b5d-a34a-10eebb7288d7',
				name: 'Quill Stab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the fleshtearer hits with its claw attack'
				},
				keywords: 'Poison',
				condition: 'requires combat advantage against the target',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8 damage, and target takes ongoing 5 poison damage and a -2 penalty to attack rolls (save ends both).',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '6ed120c7-55bf-470b-865b-aa983ce544ff',
				name: 'Infernal Quills',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 3',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8 damage and the target takes ongoing 5 poison damage and a -2 penalty to attack rolls (save ends both).',
				damage: '1d8 damage and the target takes ongoing 5 poison damage and a -2 penalty to attack rolls (save ends both)',
				category: 1
			},
			{
				id: '55ae2fc2-6aa6-4900-a158-4c65fbe99a25',
				name: 'Shadow Scourge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While the duergar fleshtearer is invisible, its attacks deal twice the normal amount of ongoing damage.',
				damage: 'its attacks deal twice the normal amount of ongoing damage',
				category: 0
			},
			{
				id: '2d636e16-6124-4df9-b297-fde13e313832',
				name: 'Underdark Sneak',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'while in dim light or darkness and adjacent to an object or a wall that occupies at least 1 square',
				range: '',
				attack: null,
				description: '',
				details: 'The duergar fleshtearer becomes invisible until the end of its next turn or until it hits or misses with an attack.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 7,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Lurker',
		phenotype: 'Medium natural humanoid (devil, dwarf)'
	},
	{
		id: '8abfbf83-9bae-4e9b-a1de-a594f4367c80',
		name: 'Duergar Thrall',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'devil, dwarf',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: '',
		equipment: 'chainmail; warhammer',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 9,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '59373c9c-8e14-4418-9040-b7333b59041c',
				name: 'Warhammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '8 damage.',
				damage: '8 damage',
				category: 1
			},
			{
				id: '048a15ab-9442-4871-a697-0f620711e928',
				name: 'Infernal Quills',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 3',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '8 poison damage.',
				damage: '8 poison damage',
				category: 1
			},
			{
				id: 'ba6760ed-a519-48ff-a21d-76c8b627c5b8',
				name: 'Mind Flayer Thrall',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The thrall is immune to the mind blast power of mind flayers, and gains a +5 bonus to its Will defense while within 10 squares of its controlling mind flayer.',
				damage: 'and gains a +5 bonus to its Will defense while within 10 squares of its controlling mind flayer',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 7,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural humanoid (devil, dwarf)'
	},
	{
		id: 'bd4b87ac-445a-4c73-ba4d-891983c270be',
		name: 'Dwarf Ruffian Thrall',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dwarf',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Athletics +14',
		equipment: 'chainmail; warhammer',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 112,
		initiative: 12,
		ac: 27,
		fortitude: 23,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ead3c83-b29f-4a35-ad0a-c05cbcbae037',
				name: 'Hammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target is marked until the end of the dwarf ruffian’s next turn.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'a9ed7123-00a0-4361-bf01-29a382b62f9e',
				name: 'Mighty Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '3d8+5 damage, and the target is pushed 3 squares. The dwarf ruffian can use this power as part of a charge.',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: 'f3f28c35-6ce0-4eba-a819-8673a87af8ad',
				name: 'Mad Dash',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the dwarf ruffian makes a charge attack, the enemy is knocked prone on a hit, in addition to any other effects of the attack.',
				damage: '',
				category: 0
			},
			{
				id: 'd02da1df-bc89-4efc-8af7-8c8c7d2cff58',
				name: 'Mind Flayer Thrall',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The thrall is immune to the mind blast power of mind flayers, and gains a +5 bonus to its Will defense while within 10 squares of its controlling mind flayer.',
				damage: 'and gains a +5 bonus to its Will defense while within 10 squares of its controlling mind flayer',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural humanoid (dwarf)'
	},
	{
		id: '799dd438-86ed-48ec-b07c-a4b5f2d2eadf',
		name: 'Bonepile Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 79,
		initiative: 8,
		ac: 21,
		fortitude: 21,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8e063076-2172-48f5-883e-b3b2db5a1dc7',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '2e07a16c-e1ae-4952-9f31-72a59ed54289',
				name: 'Bone Cyclone',
				action: null,
				keywords: 'Necrotic',
				condition: 'recharge 5 6',
				range: 'Close burst 2',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d6+5 necrotic damage, and the target is pushed 1 square and knocked prone. Miss: half damage and the target is neither pushed nor knocked prone.',
				damage: '2d6+5 necrotic damage',
				category: 0
			},
			{
				id: '607b2dad-88eb-43ba-951f-ded945091928',
				name: 'Bone Furrow',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 1
				},
				description: '',
				details: 'The bonepile skeleton can shift 6 squares and move through other creatures’ squares. If the bone cloud enters another creature’s square, it makes an attack against the creature; target is knocked prone.',
				damage: 'The bonepile skeleton can shift 6 squares and move through other creatures’ squares',
				category: 2
			},
			{
				id: 'b0083d92-9b8f-47de-8f44-ab6180859e16',
				name: 'Speed of the Dead',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When making an opportunity attack, the bonepile skeleton gains a +2 bonus to the attack roll and deals and extra 1d6 damage.',
				damage: 'the bonepile skeleton gains a +2 bonus to the attack roll and deals and extra 1d6 damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '59c8e7a5-f675-472d-9285-f39fcd62fabf',
		name: 'Eladrin Spellscarred Knight',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'spellscarred; eladrin',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +3; low-light vision',
		movement: '5',
		alignment: 'Any',
		languages: 'Common, Elven',
		skills: 'Arcana +6, Athletics +11, History +6, Nature +8',
		equipment: 'chainmail; light shield; longsword',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 61,
		initiative: 10,
		ac: 21,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '06dbaa1d-3057-481a-8feb-06e7f5f8c426',
				name: 'Feywild Tactics',
				keywords: '',
				details: 'aura 10; fey creatures in the aura score a critical hit on a roll of 19 or 20 (a roll of 19 is not an automatic hit, however).'
			}
		],
		powers: [
			{
				id: '10bb0b7e-3b11-4992-8ea0-62e3f1c04ee9',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '7b0c5c28-6ed0-4e7c-9035-688305dbf6d0',
				name: 'Stab of the Entangling Wild',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Requires Longsword; 3d8+3 damage, and the target is restrained until the end of the eladrin spellscarred knight’s next turn. The eladrin spellscarred knight cannot attack with its longsword while the target is restrained.',
				damage: '3d8+3 damage',
				category: 1
			},
			{
				id: '341e478f-7a62-402b-ace0-1066789f5f32',
				name: 'Spellscarred Challenge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Range 10; the target is marked until the end of the encounter or until the eladrin spellscarred knight dies, taking 4 fire damage each round it does not attack the eladrin spellscarred knight.',
				damage: 'taking 4 fire damage each round it does not attack the eladrin spellscarred knight',
				category: 1
			},
			{
				id: '823d7bc1-d9a5-45cb-877c-f94aaf1cce06',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleport',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The eladrin spellscarred knight can teleport 5 squares.',
				damage: 'The eladrin spellscarred knight can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier (L)',
		phenotype: 'Medium fey humanoid (spellscarred; eladrin)'
	},
	{
		id: 'ebaa9020-1596-47aa-b5c3-0b2ad792f454',
		name: 'Plaguechanged Harpy',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'spellscarred',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 68,
		initiative: 8,
		ac: 23,
		fortitude: 19,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '4db4fcc0-453c-4199-b8d4-69bbe1533676',
				name: 'Burning Song',
				keywords: '',
				details: '(Fire) aura 20; enemies within the aura at the start of their turns take 5 fire damage (deafened creatures are immune).'
			}
		],
		powers: [
			{
				id: 'fbf6c3ea-2c97-43ef-bbfb-8dfa17595f3c',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '18f47267-ef00-41f1-810a-5c0fef90353f',
				name: 'Belching Blue Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d10+3 fire damage, and the target is blinded (save ends).',
				damage: '1d10+3 fire damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium fey humanoid (spellscarred)'
	},
	{
		id: '01453b4f-bcd7-4dc6-8e24-d1543c9ff334',
		name: 'Flameskull Death Master',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11',
		movement: 'fly 10 (hover)',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 128,
		initiative: 7,
		ac: 20,
		fortitude: 17,
		reflex: 20,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '432d8a4d-efaf-4ada-977e-4b7057c4e145',
				name: 'Shroud of the Grave',
				keywords: '',
				details: 'aura 5; all undead within 5 squares of the death master lose any vulnerability to radiant damage.'
			}
		],
		powers: [
			{
				id: '7dfe984f-2ed8-47c0-b6a5-2e346318879b',
				name: 'Fiery Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Reach 0; 1 damage plus 1d8 fire damage.',
				damage: '1 damage plus 1d8 fire damage',
				category: 1
			},
			{
				id: '082a66c9-7c40-4ec7-9ca7-8288f68d183e',
				name: 'Flame Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '2d6+5 fire damage.',
				damage: '2d6+5 fire damage',
				category: 1
			},
			{
				id: 'f42b1299-1827-45a3-a1b0-acaaf65e9f9b',
				name: 'Fireball',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '3d6+5 fire damage. Miss: Half damage. The flameskull can exclude two allies from the effect.',
				damage: '3d6+5 fire damage',
				category: 1
			},
			{
				id: 'ad7ec287-2fee-4ccb-a6f3-e1da09adc404',
				name: 'Call of the Grave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'four undead minions of the death master’s level or lower appear in any unoccupied space within range. These undead minions take their turns immediately after the death master.',
				damage: '',
				category: 1
			},
			{
				id: '88cd19f8-fe32-4df5-bbf2-e67341d248f7',
				name: 'Illumination',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The flameskull sheds bright light out to 5 squares, but it can reduce its brightness to dim light out to 2 squares as a free action.',
				damage: 'The flameskull sheds bright light out to 5 squares',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Elite Controller',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: '205336ad-7a37-4422-83b4-630656857198',
		name: 'Gnoll Packrunner',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +8, Stealth +10',
		equipment: 'hide armor; light shield',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 13,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '71c3abf5-41fc-4f6c-9e33-e3e1264dfe27',
				name: 'Torch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1 fire damage.',
				damage: '1 fire damage',
				category: 1
			},
			{
				id: '79f0542a-30a9-490e-b4db-cbd23d9a7d28',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '72325f29-8c47-4770-936e-bcb5445a4272',
				name: 'Quick Bite',
				action: {
					action: 7,
					trigger: 'when the gnoll packrunner hits a bloodied enemy with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'The gnoll packrunner makes a bite attack against the same target; 2 damage.',
				damage: '2 damage',
				category: 5
			},
			{
				id: 'ec25044d-91c0-4026-ba16-db712a3a8637',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll packrunner deals an extra 4 damage on melee attacks against an enemy that has two or more of the packrunner’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a9fdd9c6-7366-4b20-b908-709ab3f13284',
		name: 'Halfling Camper',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Good',
		languages: 'Common, Dwarven',
		skills: 'Acrobatics +9, Thievery +9',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 3,
		ac: 15,
		fortitude: 12,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9c5f32bf-e193-42eb-874b-1ae23a558be6',
				name: 'Nimble Reaction',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Halflings gain a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Halflings gain a +2 racial bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: 'b2138b26-9524-4736-a8bf-9f8caebe5817',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The halfling camper forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '28424b41-ff71-4a6f-898d-0afb4a3c6418',
		name: 'Human Militia',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'spear',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 0,
		ac: 15,
		fortitude: 13,
		reflex: 11,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '61d11436-f985-4be7-baec-262061d51db6',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: 'a89dcd12-3612-498c-b1e7-5ae4b27dca87',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: 'encounter',
				range: '',
				attack: null,
				description: '',
				details: 'The human militia gains a +2 power bonus to all defenses while at least two other human militia are within 5 squares of it.',
				damage: 'The human militia gains a +2 power bonus to all defenses while at least two other human militia are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '1de2c6e5-2a2c-4207-a52b-9b7e2e5a0c96',
		name: 'Hyena Whelp',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 16,
		fortitude: 14,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'caf382b9-4b9f-4773-9043-8e49af739568',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: 'ae2b3142-13a5-4f56-b282-352eb16e6874',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The hyena whelp deals an extra 4 damage on melee attacks against an enemy that has two or more of the whelp’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'd67b5341-8f65-45bd-8931-5071601b1808',
				name: 'Harrier',
				action: null,
				keywords: '',
				condition: '',
				range: 'If a hyena whelp is adjacent to an enemy, all other creatures have combat advantage against that enemy when making melee attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural beast'
	},
	{
		id: '5d396a83-ab71-448b-a0da-da708c5a7266',
		name: 'Talbot Artfulhands',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Arcana +9',
		equipment: 'cloak of survival; implement, orb',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 43,
		initiative: 2,
		ac: 17,
		fortitude: 14,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2e3a99e5-cb17-457d-b387-2dc4c9a390de',
				name: 'Ray of Frost',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d6+5 cold damage, and the target is slowed until the end of Talbot’s next turn.',
				damage: '1d6+5 cold damage',
				category: 1
			},
			{
				id: '3fe611e3-0ab3-49e0-b9d8-50a3164235b9',
				name: 'Icy Rays',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: 'one or two creatures; (one attack per target)1d10+5 cold damage, and the target is immobilized until the end of Talbot’s next turn.',
				damage: '(one attack per target)1d10+5 cold damage',
				category: 1
			},
			{
				id: '4a4b8644-cea2-4509-8cba-c65af5270af3',
				name: 'Sleep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Sleep',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: 'the target is slowed (save ends). If the target fails its first saving throw against this power the target becomes unconscious (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '220acb35-49e5-4732-aabe-d9df209d99e0',
				name: 'Nimble Reaction',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Halflings gain a +2 racial bonus to AC against opportunity attacks.',
				damage: 'Halflings gain a +2 racial bonus to AC against opportunity attacks',
				category: 0
			},
			{
				id: 'f03478cd-483a-467e-a8fe-f51f6e1a9ae5',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the halfling would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The halfling thief forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -5
			},
			{
				type: 3,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller',
		phenotype: 'Small natural humanoid'
	},
	{
		id: 'd837e907-2d28-45c6-be23-ab75f428865e',
		name: 'Llewan Aspenhold',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Unaligned',
		languages: 'Common, Draconic, Elven',
		skills: 'Arcana +9, Religion +9, Stealth +7',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 71,
		initiative: 6,
		ac: 17,
		fortitude: 17,
		reflex: 17,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '52f5674e-7897-4e06-8693-863e066fbd09',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: 'c7083d40-8b67-4494-9da9-d40fd4fbd21b',
				name: 'Spectral Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d6+2 necrotic damage.',
				damage: '1d6+2 necrotic damage',
				category: 1
			},
			{
				id: '35bf9304-af0a-4717-ad73-929487ed088d',
				name: 'Spectral Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'affects enemies only; 2d6+2 psychic damage, and the target is knocked prone.',
				damage: '2d6+2 psychic damage',
				category: 1
			},
			{
				id: '4140a0f9-269f-4e33-b4fb-b7c2fd1b8fbd',
				name: 'Sacred Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Divine, Implement, Radiant',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d6+2 radiant damage, and Llewan gains 4 temporary hit points or may make a saving throw.',
				damage: '1d6+2 radiant damage',
				category: 1
			},
			{
				id: '85ccd764-c6b8-402d-abd5-3c2ada170559',
				name: 'Command',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Divine, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'target is dazed, and either knocked prone or slide 5.',
				damage: 'and either knocked prone or slide 5',
				category: 1
			},
			{
				id: 'db2ca7a1-6b98-42ea-a3ee-b1cc149c4d3a',
				name: 'Spiritual Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Conjuration, Divine, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Conjures a weapon that appears in the target’s square and attacks; 1d10+2 damage. Llewan and her allies gain combat advantage against the target. She can move the weapon up to 10 squares as a move action. Lasts until the end of her next turn.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: 'e537b7e5-1219-4314-ad1e-33a377122276',
				name: 'Healing Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Divine',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Llewan regains 19 + 1d6 hp.',
				damage: 'Llewan regains 19 + 1d6 hp',
				category: 3
			},
			{
				id: '582630f7-2cf7-40fc-9374-9194119d579a',
				name: 'Channel Divinity',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Divine',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Llewan gains a +1 to her next attack roll or saving throw before the end of her next turn.',
				damage: 'Llewan gains a +1 to her next attack roll or saving throw before the end of her next turn',
				category: 4
			},
			{
				id: '862c6cfa-7257-445f-8207-40a9cf4975a5',
				name: 'Cure Light Wounds',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Divine, Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Llewan regains 19 hp.',
				damage: 'Llewan regains 19 hp',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Elite Controller (L)',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'dff41641-2e49-4f71-8d44-48f8649b11e3',
		name: 'Spitting Drake (Bombardier Beetle)',
		details: 'This cunning reptile spits acid, hence the name. In the wild, spitting drakes attack without provocation, but they can be domesticated and trained. They instinctively focus their attacks on one target at a time, determined to take it down quickly.',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'reptile',
		level: 3,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 38,
		initiative: 5,
		ac: 17,
		fortitude: 14,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3ae632d5-8aab-43b5-b25d-0586c71c3f76',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: 'b236b52e-62ed-4c21-80a5-8b4f8d27ee93',
				name: 'Caustic Spit',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d10+4 acid damage.',
				damage: '1d10+4 acid damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Artillery',
		phenotype: 'Medium natural beast (reptile)'
	},
	{
		id: 'd0e04f03-6165-45e3-8f2d-ab0e5113ebaf',
		name: 'Ogre Savage Boss',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4',
		movement: '8',
		alignment: 'Evil',
		languages: 'Giant',
		skills: '',
		equipment: 'greatclub; hide armor',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 222,
		initiative: 4,
		ac: 21,
		fortitude: 21,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4400057f-6f2f-41e8-a6ad-7194d8a13aa7',
				name: 'Greatclub',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+5 damage.',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: 'e21c5454-6419-479c-b152-6b369bb11d87',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'The ogre savage boss makes two greatclub attacks.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '272a410c-2388-4aaf-a83f-7b394dd3b876',
				name: 'Angry Smash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ogre savage boss makes a greatclub attack, but gets two attack rolls and takes the better result.',
				damage: '',
				category: 1
			},
			{
				id: 'd3b0eecd-460c-4b0a-854d-fefe8f82f8ab',
				name: 'Bloody Smash',
				action: {
					action: 4,
					trigger: 'when bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When bloodied, the ogre savage boss’s angry smash attack automatically recharges, and the ogre savage boss makes an angry smash attack as an immediate reaction.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '4f84c8bf-e523-46a9-b7e5-636a5baf2362',
		name: 'Mummy Lord (Human Cleric 10)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead; human',
		level: 10,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'History +12, Insight +14, Intimidate +12, Religion +12',
		equipment: 'chainmail; mace',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 157,
		initiative: 6,
		ac: 24,
		fortitude: 22,
		reflex: 20,
		will: 24,
		regeneration: {
			value: 10,
			details: 'if the mummy lord takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [
			{
				id: 'ebbf4971-ea16-4782-b3c1-26e346b5818c',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; An enemy takes a -2 penalty on attack rolls against the mummy guardian until it damages the mummy guardian.'
			}
		],
		powers: [
			{
				id: '4824b236-eddc-400f-8110-d3e4f1a9e59d',
				name: 'Shielding Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and the mummy lord and one adjacent ally gain a +1 power bonus to AC until the end of the mummy lord’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: 'eb0c47e8-6314-4e4f-812c-93f2e139cbbf',
				name: 'Awe Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'Requires mace; 1d8+8 damage, and the target is immobilized (save ends).',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: 'f6b8a9ba-9f68-4d81-a92e-00c64a2578c7',
				name: 'Plague of Doom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '3d8+8 necrotic damage, and the target takes a -2 penalty to all defenses until the end of the mummy lord’s next turn.',
				damage: '3d8+8 necrotic damage',
				category: 1
			},
			{
				id: 'e209f964-343b-4dfe-90ac-eff5d252ae35',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts level 10 mummy rot.',
				damage: 'the target contracts level 10 mummy rot',
				category: 0
			},
			{
				id: '4717892c-8424-45fb-8ac4-85d6fb23ff73',
				name: 'Unholy Aid',
				action: {
					action: 5,
					trigger: 'when affected by a condition',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mummy lord removes the condition.',
				damage: '',
				category: 5
			},
			{
				id: '98f8d15a-21af-47f2-8b71-086a68f09ef8',
				name: 'Second Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mummy lord spends a healing surge and regains 51 hit points. The mummy lord gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The mummy lord spends a healing surge and regains 51 hit points',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 3,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 10 Elite Controller',
		phenotype: 'Medium natural humanoid (undead; human)'
	},
	{
		id: '809a6a7a-0300-4d86-9840-1499fffb4925',
		name: 'Mummy Lord (Human Cleric 12)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead; human',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'History +13, Insight +15, Intimidate +13, Religion +13',
		equipment: 'chainmail; mace',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 189,
		initiative: 7,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 26,
		regeneration: {
			value: 10,
			details: 'if the mummy lord takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [
			{
				id: 'a567eafc-5218-487b-90cc-f3802c4737f0',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; An enemy takes a -2 penalty on attack rolls against the mummy guardian until it damages the mummy guardian.'
			}
		],
		powers: [
			{
				id: '49e00e24-407d-48ac-a8af-c96ed752347e',
				name: 'Shielding Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d8+9 damage, and the mummy lord and one adjacent ally gain a +1 power bonus to AC until the end of the mummy lord’s next turn.',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: 'a08241c3-f8f8-4dc3-a186-207c7cf822af',
				name: 'Awe Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'Requires mace; 1d8+9 damage, and the target is immobilized (save ends).',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: 'cde901fb-cef9-481b-b0f0-3bd251d22334',
				name: 'Plague of Doom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '3d8+9 necrotic damage, and the target takes a -2 penalty to all defenses until the end of the mummy lord’s next turn.',
				damage: '3d8+9 necrotic damage',
				category: 1
			},
			{
				id: '23cf6634-946b-4e1d-87d3-7885a94c3333',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts level 12 mummy rot.',
				damage: 'the target contracts level 12 mummy rot',
				category: 0
			},
			{
				id: '14a21af6-6f3b-4c81-957f-1c9397c52760',
				name: 'Unholy Aid',
				action: {
					action: 5,
					trigger: 'when affected by a condition',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mummy lord removes the condition.',
				damage: '',
				category: 5
			},
			{
				id: '654ecbce-46f7-4ad9-aaff-6424878f053f',
				name: 'Second Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mummy lord spends a healing surge and regains 51 hit points. The mummy lord gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The mummy lord spends a healing surge and regains 51 hit points',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 3,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Medium natural humanoid (undead; human)'
	},
	{
		id: '8a087f10-663a-4c05-87ec-6c91780cad04',
		name: 'Stone Bear Alchemist',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +13',
		equipment: 'leather armor; short sword',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 72,
		initiative: 7,
		ac: 21,
		fortitude: 18,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8ae29e1a-f03c-4408-8d79-75188cf32d94',
				name: 'Shortsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'ff495532-7882-4a2d-97c0-efb048af8e90',
				name: 'Alchemist’s Acid',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Consumable',
				condition: '',
				range: 'ranged 5/10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'Requires alchemist’s acid flask; 1d10 acid damage and ongoing 5 acid damage (save ends).',
				damage: '1d10 acid damage and ongoing 5 acid damage (save ends)',
				category: 1
			},
			{
				id: 'b3d5399d-ef15-4f0d-9e74-ce2fa314e0fc',
				name: 'Alchemist’s Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Consumable, Fire',
				condition: '',
				range: 'area burst 1 within 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'Requires alchemist’s fire flask; 2d6 fire damage. Miss: half damage.',
				damage: '2d6 fire damage',
				category: 1
			},
			{
				id: 'f7136ea4-1454-4350-b4e8-9a4ae9adbc93',
				name: 'Alchemist’s Frost',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Consumable',
				condition: '',
				range: 'ranged 5/10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'Requires alchemist’s frost flask; 1d10 cold damage and the target is slowed until the end of the alchemist’s next turn. Miss: half damage, and the target is not slowed.',
				damage: '1d10 cold damage and the target is slowed until the end of the alchemist’s next turn',
				category: 1
			},
			{
				id: 'a70ff237-44f1-4d71-8f03-459b147263c9',
				name: 'Jolt Flask',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Consumable',
				condition: '',
				range: 'area burst 1 within 10',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'Requires jolt flask; on a hit, the target is dazed until the end of the alchemist’s next turn.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2248c604-f04b-4092-8d52-6a97a8557b3f',
		name: 'Stone Bear Lackey',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'club; leather armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 4,
		ac: 20,
		fortitude: 18,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '757b0ebe-a977-4876-8ce3-9f5daffc00bc',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'b1e55e79-793f-4cbb-a5e7-0b6bed687d86',
				name: 'Mob Rule',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Stone Bear lackey gains a +2 power bonus to all defenses while at least two other Stone Bear lackeys are within 5 squares of it.',
				damage: 'The Stone Bear lackey gains a +2 power bonus to all defenses while at least two other Stone Bear lackeys are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '1e6f8088-0f09-46db-a2cc-9fb1b0483234',
		name: 'Stone Bear Lieutenant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +12, Stealth +13, Streetwise +12',
		equipment: 'heavy flail; scale armor',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 126,
		initiative: 8,
		ac: 24,
		fortitude: 22,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '73db3ff0-8489-43a5-8ca9-69e748ac02d9',
				name: 'Heavy Flail',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage (2d6+7 while bloodied).',
				damage: '2d6+5 damage (2d6+7 while bloodied)',
				category: 1
			},
			{
				id: '0e829327-ea53-496a-8685-9160b8eb932b',
				name: 'Spinning Sweep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Requires heavy flail; 2d6+5 damage (2d6+7 while bloodied) and the target is knocked prone.',
				damage: '2d6+5 damage (2d6+7 while bloodied) and the target is knocked prone',
				category: 1
			},
			{
				id: '1111fcf6-9e68-475e-9687-d4e36da47979',
				name: 'Come and Get It',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'targets enemies. Effect: the Stone Bear lieutenant pulls each target 2 squares to a space adjacent to it. The Stone Bear lieutenant cannot pull a target that cannot end adjacent to it. The Stone Bear lieutenant then makes a close burst 1 attack targeting each adjacent enemy. Attack:',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Requires heavy flail; 2d6+5 damage (2d6+7 while bloodied).',
				damage: '2d6+5 damage (2d6+7 while bloodied)',
				category: 1
			},
			{
				id: '3bb41b86-1960-4ae0-8e09-99a0a65896f1',
				name: 'Sweeping Blow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'close burst 1',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires heavy flail; targets enemies; 2d6+5 damage (2d6+7 while bloodied) and the target is knocked prone.',
				damage: '2d6+5 damage (2d6+7 while bloodied) and the target is knocked prone',
				category: 1
			},
			{
				id: '67d10e2a-b091-4be3-bae5-9bf3f4e2c755',
				name: 'Prone Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Stone Bear lieutenant deals an extra 2d6 damage against any prone target.',
				damage: 'the stone bear lieutenant deals an extra 2d6 damage against any prone target',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Brute (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'bb538f8b-6e24-4cea-936a-3c224ef2bc89',
		name: 'Stone Bear Taskmaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +9, Stealth +14',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 85,
		initiative: 11,
		ac: 22,
		fortitude: 20,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '46a9495b-e06d-4c48-92bc-7891644652d2',
				name: 'Barbed Whip',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+4 damage and ongoing 5 damage (save ends).',
				damage: '1d8+4 damage and ongoing 5 damage (save ends)',
				category: 1
			},
			{
				id: '42fb51ee-35de-4224-827b-36da20aba2e4',
				name: 'Whip Flay',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Requires barbed whip; reach 2; 3d8+7 damage and ongoing 10 damage (save ends).',
				damage: '3d8+7 damage and ongoing 10 damage (save ends)',
				category: 1
			},
			{
				id: 'fad75fd7-0cc0-4ebe-b1ae-5e2563801c4e',
				name: 'Drag Around',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'Requires barbed whip; reach 2; 2d8+5 damage and the Stone Bear taskmaster may slide the target 3 squares.',
				damage: '2d8+5 damage and the stone bear taskmaster may slide the target 3 squares',
				category: 1
			},
			{
				id: '16c52e33-fb57-418d-874e-412c973314d5',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Stone Bear taskmaster deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the stone bear taskmaster deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2b53068c-5290-4f99-ab85-31989a93cb7d',
		name: 'Stone Bear Thug',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +10, Stealth +11, Streetwise +10',
		equipment: 'chainmail; crossbow; crossbow bolts (20); halberd',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 87,
		initiative: 8,
		ac: 24,
		fortitude: 21,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0f9438b7-8566-4b68-99a1-23b24c3983fe',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+7 damage, and the target is marked until the end of the stone bear thug’s next turn.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: 'a43a7230-aef9-46ac-8fe2-88e1f4cbc3e8',
				name: 'Pushback Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Requires halberd; reach 2; 1d10+10 damage, and the target is pushed 1 square and knocked prone.',
				damage: '1d10+10 damage',
				category: 1
			},
			{
				id: '875954f5-5142-4877-99cc-630d387d6bff',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '7eff4b81-9b80-47ef-85ca-0ba79534678d',
		name: 'Eladrin Blade of Summer',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'eladrin',
		level: 9,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: '',
		equipment: 'chainmail; longsword',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 7,
		ac: 23,
		fortitude: 21,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4b59d05d-46e4-44d9-97c6-78529c2d2a0d',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '5 damage; see also fiery wounding.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '35f4e3a6-92e8-4ff9-8cf7-2babb47f4746',
				name: 'Fiery Wounding',
				action: null,
				keywords: 'Fire',
				condition: '',
				range: 'A blade of summer’s melee basic attack deals 1 extra point of fire damage for each blade of summer adjacent to the target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ccf36a9c-e488-4ce3-9a21-db1ecda0882d',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blade of summer can teleport 5 squares.',
				damage: 'The blade of summer can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Minion',
		phenotype: 'Medium fey humanoid (eladrin)'
	},
	{
		id: 'b8e31209-27a0-4f56-a6e4-6289daafac4b',
		name: 'Eladrin Guard',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'eladrin',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Arcana +5, History +5',
		equipment: 'longsword; scale armor',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 62,
		initiative: 7,
		ac: 21,
		fortitude: 17,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '73966815-fa89-4dc8-8c27-582fc113f941',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '5a65ff27-f66d-4a3d-8d68-eed50bde5921',
				name: 'Protective Swing',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target is marked until the end of the eladrin guard’s next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '5be099ff-369f-4134-a499-029c2311ceb5',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The eladrin guard can teleport 5 squares.',
				damage: 'The eladrin guard can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium fey humanoid (eladrin)'
	},
	{
		id: 'f182fd53-c308-4cd2-8cc5-8fa7911824ff',
		name: 'Kir-Lanan Darklasher',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '5, fly 8',
		alignment: 'Evil',
		languages: 'Common, Kirlanan',
		skills: 'Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 52,
		initiative: 5,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3a407b85-2722-417f-ad6e-9177a1f4ad4c',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage plus 1d4 necrotic damage.',
				damage: '1d4+5 damage plus 1d4 necrotic damage',
				category: 1
			},
			{
				id: '18b36505-b5c7-4958-bea3-88691bb0a0c1',
				name: 'Tendril Rake',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: 'Reach 5; 1d6+4 damage plus 1d4 necrotic damage, and the target is weakened and immobilized (save ends both).',
				damage: '1d6+4 damage plus 1d4 necrotic damage',
				category: 1
			},
			{
				id: 'd77ba4be-38d9-42d1-b4dd-493677a402be',
				name: 'Reel',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'immobilized target only',
				range: '',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'target is pulled 5 squares.',
				damage: 'target is pulled 5 squares',
				category: 3
			},
			{
				id: 'c03b2642-64d0-454a-af08-433c164d4a2b',
				name: 'Enfeebling Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d6+3 necrotic damage, and the target takes a -2 penalty on attack rolls (save ends).',
				damage: '1d6+3 necrotic damage',
				category: 1
			},
			{
				id: '733527b1-9ca0-449f-81c9-dbff8baa54ad',
				name: 'Necrotic Healing',
				action: {
					action: 4,
					trigger: 'when damaged by a necrotic attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The kir-lanan darklasher heals 13 hit points.',
				damage: 'The kir-lanan darklasher heals 13 hit points',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '4a2f5048-409b-4528-8d67-12e32cc76cb6',
		name: 'Nightcloak Felomin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 4,
		role: {
			type: 0,
			flag: 1,
			leader: true
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +11, Bluff +12',
		equipment: 'implement, staff; leather armor',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 100,
		initiative: 5,
		ac: 16,
		fortitude: 18,
		reflex: 16,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '0d7d3d15-8a4c-4cae-9e41-1c1e46577a76',
				name: 'Deathless Fanaticism',
				keywords: '',
				details: 'aura 5; Lower-level allies in the aura remain alive when reduced to 0 hit points. An affected creature dies at the end of its next turn if it is still at 0 hit points or below.'
			}
		],
		powers: [
			{
				id: '36265034-3ea6-4881-917c-7d72ae0bd7bd',
				name: 'Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '063ebce8-0566-43d7-8c59-aac212a57383',
				name: 'Eldritch Blast',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'a9eca639-0ab4-4360-8144-bd9c1f0d081c',
				name: 'Arc of Darkness',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Felomin makes a separate attack against 3 different targets: Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '2d6+4 necrotic damage.',
				damage: '2d6+4 necrotic damage',
				category: 1
			},
			{
				id: '1f23d3ed-980d-4e21-8428-4e9b3efee33c',
				name: 'Cloud of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'Felomin creates a cloud of darkness that remains in place until the end his next turn. The cloud blocks line of sight for all creatures except Felomin. Any creature entirely within the cloud (except Felomin) is blinded as long as it exists.',
				damage: '',
				category: 3
			},
			{
				id: 'ab8897f4-fad5-404b-bf9c-be44012b5a95',
				name: 'Dark Escape',
				action: {
					action: 4,
					trigger: 'when felomin is hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Felomin teleports 5 squares.',
				damage: 'Felomin teleports 5 squares',
				category: 5
			},
			{
				id: 'b3dec6dc-81bd-45c2-bc54-c0bb9bcb1569',
				name: 'Invisibility',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when first bloodied'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Felomin turns invisible until he attacks or until the end of his next turn.',
				damage: '',
				category: 3
			},
			{
				id: '872c10be-e3f5-45a5-a3f7-6be9006f3ccb',
				name: 'Mob Defense',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Felomin gains a +1 bonus to all defenses for each ally adjacent to him.',
				damage: 'Felomin gains a +1 bonus to all defenses for each ally adjacent to him',
				category: 0
			},
			{
				id: '48fddfcd-bef2-4206-a2e0-bb694bcf26e8',
				name: 'Clever Escape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Felomin moves up to twice his speed. He can move only into squares that take it farther away from his enemies. This movement does not provoke opportunity attacks.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Artillery (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'db7fa747-7839-4a18-acc0-d307e0037fb4',
		name: 'Fleshtearer Shark',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'aquatic',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '1 (clumsy), swim 8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 128,
		initiative: 8,
		ac: 22,
		fortitude: 23,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '537e768b-08ad-4d51-ae87-fffc982fa4c9',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '6b49e625-ffc4-43dd-9f54-bca525b4db5f',
				name: 'Lockjaw Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while the fleshtearer shark is not grabbing a creature',
				range: 'The shark charges and makes the following attack in place of a melee basic attack',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d8+7 damage, and the target is grabbed. When the grab ends, the target takes ongoing 5 damage (save ends).',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '0298c23b-cbeb-4449-a917-64e5e0a8fbae',
				name: 'Shredding Teeth',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Targets a creature grabbed by the fleshtearer shark; no attack roll; 3d8+7 damage.',
				damage: '3d8+7 damage',
				category: 1
			},
			{
				id: '4c9130f2-e199-45d1-b32a-0c0c4a3b8183',
				name: 'Feeding Frenzy',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when the fleshtearer shark starts its turn within 5 squares of a bloodied creature',
				range: '',
				attack: null,
				description: '',
				details: 'The shark must make a bite attack against a creature adjacent to it. If the shark is grabbing a creature, the grab ends.',
				damage: '',
				category: 1
			},
			{
				id: '610ef97b-058a-4630-bb6d-630d3ff721de',
				name: 'Waterborn',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While in water, a Fleshtearer shark gains a +2 bonus to damage rolls against any creature without a swim speed.',
				damage: 'a fleshtearer shark gains a +2 bonus to damage rolls against any creature without a swim speed',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Large natural beast (aquatic)'
	},
	{
		id: 'd578fb64-9f11-484a-8679-ffbc12de913e',
		name: 'Skeleton Hauler',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 8,
		ac: 25,
		fortitude: 25,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6595f0d4-c842-47e7-aa78-aeb8d2c67f04',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'd893b52f-6bd8-4d82-99a5-f618c24c705b',
		name: 'Pack Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 14,
		fortitude: 14,
		reflex: 10,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3a1816e5-aaa6-4800-87ed-5bac96fa3995',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '7ff199a5-6a2b-4c84-ac4c-a407623bec65',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A pack of zombies gains a +2 bonus to its attack roll if it is adjacent to at least one other pack zombie.',
				damage: 'A pack of zombies gains a +2 bonus to its attack roll if it is adjacent to at least one other pack zombie',
				category: 0
			},
			{
				id: '1095b6fd-1907-4281-b48b-35fb72d76285',
				name: 'Lurching Sacrifice',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'This power triggers automatically when a nonminion ally adjacent to a pack zombie is hit by a melee attack. The pack zombie is destroyed, and the damage dealt to the ally is reduced by 5.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '53b014c6-ef52-48bd-b3ed-95b5d588bc36',
		name: 'Giant Crayfish',
		details: '',
		size: 4,
		origin: 0,
		type: 1,
		keywords: 'blind',
		level: 4,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +3; blindsight',
		movement: '2, swim 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		hp: 224,
		initiative: 7,
		ac: 22,
		fortitude: 21,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7b0ed766-8c62-4603-a455-1615b7363d1f',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '3d8 +4 damage.',
				damage: '3d8 +4 damage',
				category: 1
			},
			{
				id: 'bb82c30a-9cc4-42a7-bda4-f4f5f05950d4',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'The crayfish makes two claw attacks. If both attacks hit a single target, the target is grabbed. As long as a target is grabbed, the crayfish can’t make claw attacks (but see pincer crush).; .',
				damage: '',
				category: 1
			},
			{
				id: 'c33d53ac-0526-48a8-a5fb-c4830c37cc59',
				name: 'Pincer Crush',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'targets a creature the giant crayfish has grabbed; 4d10 + 4 damage.',
				damage: '4d10 + 4 damage',
				category: 1
			},
			{
				id: '3e55e02a-9d40-4f17-8701-1b52dcf89a6f',
				name: 'Bloodied Rage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While the crayfish is bloodied, it takes a –2 penalty to attacks and defenses but gains a +5 bonus on damage rolls.',
				damage: 'it takes a –2 penalty to attacks and defenses but gains a +5 bonus on damage rolls',
				category: 1
			},
			{
				id: '2d21ccca-3cca-4926-9da7-6eadf1b2acb3',
				name: 'Natural Camouflage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the crayfish begins its turn underwater, it becomes invisible until it moves or attacks.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Solo Soldier',
		phenotype: 'Huge aberrant beast (blind)'
	},
	{
		id: '0ee740fc-178a-4f8d-9324-a20dd9d41338',
		name: 'Giant Frog',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 3,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '4, swim 6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +8, Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 44,
		initiative: 5,
		ac: 18,
		fortitude: 15,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a042fbca-2705-46f9-a8de-e7047d8c6a1a',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '3 damage, and a Medium or smaller target is swallowed. A swallowed target is stunned, takes ongoing 5 damage, and can’t be targeted by any effect (save ends all effects). A giant frog can have only one target swallowed at a time and cannot make bite attacks as long as the swallowed target is alive.',
				damage: '3 damage',
				category: 1
			},
			{
				id: '992c1873-2382-47e4-b123-3c42041a93fd',
				name: 'Grasping Tongue',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'The target is pulled 2 squares; 3; .',
				damage: 'The target is pulled 2 squares',
				category: 3
			},
			{
				id: 'a4935731-63e9-46dd-9dd0-ef6cb5a27852',
				name: 'Prodigious Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The giant frog shifts 4 squares. It can shift through enemy squares as long as it ends its movement in an unoccupied space.',
				damage: 'The giant frog shifts 4 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller',
		phenotype: 'Medium natural beast'
	},
	{
		id: '8b90a28a-cece-4d41-bbbe-cba106fcb99a',
		name: 'Gremag',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Bluff +7, Stealth +11, Thievery +11',
		equipment: 'dagger',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 96,
		initiative: 8,
		ac: 22,
		fortitude: 20,
		reflex: 22,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7bc6f73c-d0d0-4cc0-b1da-fa59f242e2cb',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d4 + 4 damage.',
				damage: '1d4 + 4 damage',
				category: 1
			},
			{
				id: '8add8fb3-8f0f-405c-ad89-2d83490152e6',
				name: 'Thrown Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d4 + 4 damage.',
				damage: '1d4 + 4 damage',
				category: 1
			},
			{
				id: 'eff38523-99d4-45ef-9104-1681d57d8c2a',
				name: 'Sudden Riposte',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Gremag makes a dagger attack against the triggering attacker. This attack gains a +2 bonus to the attack roll and deals 5 extra damage; .',
				damage: 'this attack gains a +2 bonus to the attack roll and deals 5 extra damage',
				category: 5
			},
			{
				id: 'c136fc14-56c9-4689-9b12-3351998a23ca',
				name: 'Poison Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The next time Gremag hits with a dagger or thrown dagger attack during this encounter, the target also takes ongoing 10 poison damage (save ends).',
				damage: 'the target also takes ongoing 10 poison damage (save ends)',
				category: 1
			},
			{
				id: 'cd103a6f-eb98-44db-9a9e-3cd57df9d7ee',
				name: 'Cowardly Stance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If two or more enemies are adjacent to Gremag, he takes a –4 penalty to all defenses.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Lurker',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '1e0ff640-4bd2-4a2d-86b6-a1c9d27e856b',
		name: 'Human Bandit Archer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'crossbow; leather armor; spear',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 4,
		ac: 16,
		fortitude: 13,
		reflex: 14,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eb276812-ffb0-44a2-8233-010496966794',
				name: 'Crossbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '3 damage.',
				damage: '3 damage',
				category: 1
			},
			{
				id: '1df8dcc0-8f5e-41a5-a61e-40e1b6142ee0',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '0abf4851-811d-411f-aed6-05cd1142e3b6',
				name: 'Mob Rule',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A human bandit archer gains a +2 power bonus to all defenses while at least two other human bandit archers are within 5 squares of it.',
				damage: 'A human bandit archer gains a +2 power bonus to all defenses while at least two other human bandit archers are within 5 squares of it',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'a3af4df6-7881-4136-b332-1c6a500e3c2a',
		name: 'Lareth the Beautiful',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 4,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +4',
		movement: '5',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +11, Diplomacy +11, Religion +9',
		equipment: 'light shield; plate armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 104,
		initiative: 2,
		ac: 20,
		fortitude: 17,
		reflex: 16,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '86ad043d-617a-495e-a557-326196903e3a',
				name: 'Ward of Vitality',
				keywords: '',
				details: 'allies who begin their turn within the aura gain 3 temporary hit points as long as Lareth is not bloodied'
			}
		],
		powers: [
			{
				id: '22e29e9e-fd39-497b-a059-bb661917c648',
				name: 'Scepter of Striking',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 6 damage, and the target is dazed until the end of Lareth’s next turn.',
				damage: '2d6 + 6 damage',
				category: 1
			},
			{
				id: '7bcd7b53-7a72-42ee-b9a0-5994fcec2b95',
				name: 'Commanding Voice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'targets enemies in burst; 1d6 + 4 psychic damage, and Lareth slides the target 2 squares.',
				damage: '1d6 + 4 psychic damage',
				category: 1
			},
			{
				id: '12f06bd0-5632-4139-b176-98e5ec618b86',
				name: 'Curse of Blindness',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'targets enemies in burst; 1d6 + 4 necrotic damage, and the target is blinded (save ends).',
				damage: '1d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'a2c8b9f4-cf18-4ca4-be9f-6f3efa5efe94',
				name: 'Terrible Visage',
				action: null,
				keywords: '',
				condition: '',
				range: 'After Lareth first becomes bloodied, until the end of the encounter, he gains a +2 bonus on melee attacks and melee damage rolls against the character who bloodied him.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '8d117f3e-5373-4d9d-962b-9cf8dccaf200',
		name: 'Lubash the Ogre',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'club; hide armor; javelin',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 91,
		initiative: 8,
		ac: 22,
		fortitude: 22,
		reflex: 20,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7c2f241b-aa72-495d-b87d-2d2ae6208e50',
				name: 'Club',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8 + 4 damage; see also skirmish.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: 'fa0796d9-73c7-468d-a088-fa12bfcec2c4',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 damage; see also skirmish.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: 'd942a131-cc4f-4673-965f-62c3ca0f99dc',
				name: 'Hurling Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Lubash makes a javelin attack followed by a charge attack; damage; see also skirmish.',
				damage: 'damage',
				category: 1
			},
			{
				id: '2a4777d8-a27f-4422-857e-bd37471047ec',
				name: 'Skirmish',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'If, on his turn, Lubash ends his move at least 4 squares away from his starting point, he deals 1d8 extra damage on his melee attacks until the start of his next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '82dffd4e-c637-4627-8fbe-435d4c98516b',
		name: 'Rannos Davl',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: '',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 126,
		initiative: 6,
		ac: 22,
		fortitude: 17,
		reflex: 20,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd2a14aa0-330f-48e1-87b1-e41f80d27142',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: '3984cd00-43fe-401a-af5b-cad7cf7a8aa9',
				name: 'Blade Flurry',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Rannos Davl makes two short sword attacks and shifts 1 square before either or both attacks.; .',
				damage: 'Rannos Davl makes two short sword attacks and shifts 1 square before either or both attacks',
				category: 1
			},
			{
				id: 'd8befaf4-7d79-430b-aa0f-80df65818f50',
				name: 'Surprise Lunge',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when bloodied'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Rannos Davl shifts 4 squares. When he ends this move, he gains combat advantage against each enemy adjacent to him until the end of his turn.',
				damage: 'Rannos Davl shifts 4 squares',
				category: 2
			},
			{
				id: '6a0e29f7-7978-40d6-b4d5-bcf1cef60eea',
				name: 'Marked Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Rannos Davl gains combat advantage against any target marked by one of Davl’s allies',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'fb166988-a659-43df-b6f9-420269a5b1da',
		name: 'Lich (Thayan)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +18, History +18, Insight +13',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 218,
		initiative: 8,
		ac: 28,
		fortitude: 24,
		reflex: 28,
		will: 26,
		regeneration: {
			value: 10,
			details: 'if the lich takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [
			{
				id: '553024fa-e900-48b3-b93c-94ed24651fc4',
				name: 'Necrotic Aura',
				keywords: '',
				details: '(Necrotic) aura 5; any living creature that enters or starts its turn in the aura takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: 'dbed5fa5-e9d7-4f4f-9d69-6bd77b93b2bc',
				name: 'Shadow Ray',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d8+6 necrotic damage.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: '746fd26a-4fda-4484-be0c-31ebeaf6f56c',
				name: 'Frostburn',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Necrotic, Zone',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '3d8+6 cold and necrotic damage. The burst creates a zone that lasts until the end of the lich’s next turn. The zone is considered difficult terrain. Any creature that starts its turn within the zone takes 10 cold and necrotic damage. The lich can sustain or dismiss the zone as a minor action.',
				damage: '3d8+6 cold and necrotic damage',
				category: 1
			},
			{
				id: '913c99e2-465c-4355-a01b-eb64afc970f7',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a lich is reduced to 0 hit points, its body and possessions crumble into dust, but it is not destroyed. It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery, unless the phylactery is also found and destroyed.',
				damage: 'It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery',
				category: 0
			},
			{
				id: '4fe43390-f2c3-4351-a3cd-c5fd9f77258c',
				name: 'Lich Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The lich teleports up to 8 squares and recharges one encounter or recharge power (including lich step).',
				damage: 'The lich teleports up to 8 squares and recharges one encounter or recharge power (including lich step)',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Elite Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '040b5b1b-65ba-4155-8b12-fc7268187892',
		name: 'Dark Angel of Valor',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6, Fly 9 (hover)',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Intimidate +12',
		equipment: 'chainmail; dagger; longsword',
		category: 'Angel',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 88,
		initiative: 10,
		ac: 24,
		fortitude: 22,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '2d8116ce-9c14-48ce-9af4-9130d3742447',
				name: 'Angelic Presence',
				keywords: '',
				details: 'Attacks against the angel of battle take a -2 penalty unless the angel is bloodied.'
			}
		],
		powers: [
			{
				id: '77617156-bb51-44fe-a91d-196505d76ac2',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'ffe945e5-e1d2-46d6-92ff-4614bc8fe61b',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: '745b2716-6a42-4f62-a6fa-25bcd8a73dea',
				name: 'Blade Flurry',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The angel of valor makes a longsword attack and a dagger attack.',
				damage: '',
				category: 1
			},
			{
				id: '06929368-113c-448b-813c-c9919e8c420c',
				name: 'Lightning Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d8+4 lightning damage, and the target is dazed until the end of the angel of valor’s next turn.',
				damage: '1d8+4 lightning damage',
				category: 1
			},
			{
				id: 'e29ac500-f7cd-455f-be27-4e117363d239',
				name: 'Dark Blades',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: 'usable only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'Until the start of the angel of valor’s next turn, the angel of valor’s weapons deal cold damage and attack the target’s Reflex defense instead of AC.',
				damage: 'the angel of valor’s weapons deal cold damage and attack the target’s reflex defense instead of ac',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Medium immortal humanoid (angel)'
	},
	{
		id: '536061e7-971d-4ef4-bdae-48bd04822cfd',
		name: 'Kerstol Cobb',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +13, Streetwise +11',
		equipment: 'chainmail; longsword; short sword',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 87,
		initiative: 7,
		ac: 22,
		fortitude: 19,
		reflex: 21,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eb35af46-2d95-4d14-8e58-61ae2f2c1900',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '82cb847c-06a8-42bb-800e-2af6baec25ab',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d6+8 damage.',
				damage: '1d6+8 damage',
				category: 1
			},
			{
				id: 'e06b9876-fee0-42a3-9794-3347c57ec56e',
				name: 'Two-Weapon Rend',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kerstol makes a longsword attack and a short sword attack against the same target. If both attacks hit, Kerstol deals an additional 8 damage.',
				damage: 'kerstol deals an additional 8 damage',
				category: 1
			},
			{
				id: 'cbdf1937-19e0-4d0c-895d-0d6bd7000e79',
				name: 'Clever Ploy',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'Kerstol makes two attack rolls and uses the higher result. 1d8 + 8 damage, and the target grants combat advantage to an ally of Kerstol’s choice until the start of Kerstol’s next turn. Kerstol can then shift 3 squares.',
				damage: '1d8 + 8 damage',
				category: 1
			},
			{
				id: '7c7c0c1b-d224-4059-8457-9701b082aa75',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kerstol deals an extra 2d6 damage on his attacks when he has combat advantage against the target.',
				damage: 'kerstol deals an extra 2d6 damage on his attacks when he has combat advantage against the target',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3eea2572-c7e2-4796-bbd7-51ac5782d923',
		name: 'Knight of Shade',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +12; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Netherese',
		skills: 'Diplomacy +15, Insight +12, Intimidate +15, Stealth +12',
		equipment: 'bastard sword; heavy shield; plate armor',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 212,
		initiative: 11,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 23,
		regeneration: {
			value: 10,
			details: 'if the knight of shade takes radiant damage, his regeneration doesn’t function on his next turn.'
		},
		auras: [
			{
				id: 'd3903a9c-332a-42d7-88cb-696468a203a0',
				name: 'Benighted Presence',
				keywords: '',
				details: 'aura 10; light-producing effects within the aura whose level is lower than Naramus’s can create only dim light.'
			}
		],
		powers: [
			{
				id: '72e29842-a546-4dc0-b7aa-3b60ddfeabd1',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage (crit 1d10+17).',
				damage: '1d10+7 damage (crit 1d10+17)',
				category: 1
			},
			{
				id: 'dd15c09b-4064-41b1-a9fb-c1f8cec5b5e3',
				name: 'Gloom Chakram',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Ranged 5',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d6+4 force damage.',
				damage: '2d6+4 force damage',
				category: 1
			},
			{
				id: '35c944e1-505f-4823-a3b9-fd27fd56aa9a',
				name: 'Arcing Swings',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The knight of shade makes two basic melee attacks and shifts 1 square after the first attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'f84c0682-1bc7-4d82-9933-ec70473c4a94',
				name: 'Disrupting Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Force, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '3d10+7 damage plus ongoing 5 force damage (save ends).',
				damage: '3d10+7 damage plus ongoing 5 force damage (save ends)',
				category: 1
			},
			{
				id: '51531a6d-170f-4de3-b875-11cdb14db4f5',
				name: 'Triumphant Cry',
				action: {
					action: 7,
					trigger: 'when the knight of shade scores a critical hit or reduces an enemy to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The knight of shade or an ally within 20 squares can make a melee or ranged attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'a447711d-5433-4146-88b2-e65fef510657',
				name: 'Shadow Stride',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The knight of shade can teleport 20 squares, but must end his move in dim light or darkness.',
				damage: 'The knight of shade can teleport 20 squares',
				category: 2
			},
			{
				id: 'b1c87fca-ce6a-40b5-9b35-904506f81c9f',
				name: 'Coalescing Darkness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the knight of shade moves 3 or more squares by any means, he is cloaked with supernatural darkness, gaining total concealment.',
				damage: 'If the knight of shade moves 3 or more squares by any means',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Skirmisher (L)',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '1b39396f-889f-4ed4-9e57-f4debb7cd4e3',
		name: 'Twilight Incanter of Shar',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +16, History +16, Nature +10',
		equipment: 'implement, orb; spear',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 82,
		initiative: 7,
		ac: 22,
		fortitude: 19,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bf08f6a1-f96d-4bfd-b55d-16dcd95a9375',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage, and the target is slowed until the end of the twilight incanter’s next turn.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '4fb444a9-164c-4002-a083-50eae73749fc',
				name: 'Binding Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d8+3 damage, and the target is immobilized until the end of the twilight incanter’s next turn.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '13f4f838-7b62-46e7-9622-b9d4f17790f7',
				name: 'Teleporting Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d8+2 damage, and the target is immobilized until the end of the twilight incanter’s next turn.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '723ba2d5-1c34-47f7-92d8-8b31d54cef95',
				name: 'Shadow Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Illusion, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '2d6+3 psychic damage, and the target is blinded until the end of the twilight incanter’s next turn.',
				damage: '2d6+3 psychic damage',
				category: 1
			},
			{
				id: 'aae645c0-b129-4cff-bc62-081a64bbcee3',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The twilight incanter can teleport 5 squares.',
				damage: 'The twilight incanter can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '550f3c97-882f-47da-ab83-6b1f56f05d6e',
		name: 'War Troll Vampire Lord',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 11,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +16, Endurance +14',
		equipment: 'arrows (30); greatsword; longbow; plate armor',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 194,
		initiative: 11,
		ac: 29,
		fortitude: 28,
		reflex: 24,
		will: 24,
		regeneration: {
			value: 10,
			details: 'regeneration does not function while the vampire lord is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: '6274ed94-8b9a-4daa-a700-58024ebebc8c',
				name: 'Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12+7 damage, and the target is marked until the end of the vampire lord’s next turn.',
				damage: '1d12+7 damage',
				category: 1
			},
			{
				id: '5c62ad61-9197-4a00-a99b-5ba806e4d5b7',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'b4826ba3-6fff-4473-a2b8-2f6392ed8da9',
				name: 'Longbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d12+2 damage.',
				damage: '1d12+2 damage',
				category: 1
			},
			{
				id: '7134a76e-bd4f-4127-ab41-0ef21dc15c70',
				name: 'Sweeping Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'close blast 2',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; 1d12+7 damage and the target is knocked prone.',
				damage: '1d12+7 damage and the target is knocked prone',
				category: 1
			},
			{
				id: '45b487c2-2741-463d-9f58-7c2880013ca2',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when an adjacent creature becomes bloodied'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 2d12+8 damage, and the target is weakened (save ends), and the vampire lord regains 48 hit points.',
				damage: '2d12+8 damage',
				category: 1
			},
			{
				id: '999c89f4-8aa9-4356-af4e-6456d60eee47',
				name: 'Dominating Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends, with a -2 penalty on the saving throw). Aftereffect: The target is dazed (save ends). The vampire lord can dominate only one creature at a time.',
				damage: 'with a -2 penalty on the saving throw)',
				category: 3
			},
			{
				id: '5f991923-e4ce-4b9f-b828-f7136d1c61a5',
				name: 'Blood Pursuit',
				action: {
					action: 4,
					trigger: 'when a bloodied enemy within 2 squares of the vampire lord moves or shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vampire lord shifts 1 square closer to the enemy.',
				damage: 'The vampire lord shifts 1 square closer to the enemy',
				category: 5
			},
			{
				id: 'fecd16e0-fdec-4bb9-a2c1-ab5a8bcfe3e9',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vampire lord can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: '34d2e8a3-c9e4-4294-ad02-53e7783e234f',
				name: 'Mist Form',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vampire lord becomes insubstantial and gains a fly speed of 12, but cannot make attacks. The vampire lord can remain in mist form for up to 1 hour or end the effect as a minor action.',
				damage: 'The vampire lord becomes insubstantial and gains a fly speed of 12',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Elite Soldier',
		phenotype: 'Large natural humanoid (undead)'
	},
	{
		id: '37c775a0-5c91-40eb-b9ec-165096c87c06',
		name: 'Akitani',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 3,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Nature +7, Stealth +10',
		equipment: 'hide armor; waraxe',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 54,
		initiative: 3,
		ac: 16,
		fortitude: 16,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4536fe33-fd7c-4c62-a622-3a38095d41b2',
				name: 'Waraxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d12 + 3 damage, or 2d12 + 3 damage while bloodied.',
				damage: '1d12 + 3 damage',
				category: 1
			},
			{
				id: '38ba78b5-eb9b-4075-a37e-9224b1b576d4',
				name: 'Rabid Wolf Charge',
				action: {
					action: 1,
					trigger: 'requires a waraxe',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '1d12 + 3 plus 1d8 damage. When charging, Akitani can use this power in place of a melee basic attack. While bloodied, Akitani’s movement during a charge doesn’t provoke opportunity attacks.',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '3aef4d0e-301a-408f-8470-03bb03d8ccae',
				name: 'Rampage',
				action: {
					action: 7,
					trigger: 'when akitani scores a critical hit',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Akitani makes a melee basic attack',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 5
			},
			{
				id: '28799012-eed2-44a3-ab5b-334e9a69a436',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Akitani shifts 1 square.',
				damage: 'Akitani shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Brute',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: 'd21b9152-6788-4c09-a1b0-ee7fb542e1db',
		name: 'Ancient Tomb Mote',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 3,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 6,
		ac: 31,
		fortitude: 27,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '24d93dd5-5b98-446a-a395-2bfb8c0285b9',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '3 necrotic damage, and ongoing 2 necrotic damage (save ends); 6 necrotic damage, and ongoing 5 necrotic damage (save ends) instead, if the target is adjacent to three or more tomb motes.',
				damage: '3 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 3 Minion',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: '7f2f536f-37b1-411b-8962-247501a0a380',
		name: 'Ashurta',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead, wight; hobgoblin',
		level: 4,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +10, Intimidate +11',
		equipment: 'light shield; scale armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 108,
		initiative: 7,
		ac: 22,
		fortitude: 18,
		reflex: 17,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5a4695d4-226d-4384-b745-890f7e9ae493',
				name: 'Ashurta’s Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d10 + 5 damage (crit 2d6 + 15), and an ally within line of sight can shift 1 square as a free action.',
				damage: '1d10 + 5 damage (crit 2d6 + 15)',
				category: 1
			},
			{
				id: 'd13bd756-d7f1-4d97-a1b3-f69b88db1c6d',
				name: 'Dispatch',
				action: {
					action: 1,
					trigger: 'requires ashurta’s blade',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d10 + 3 damage, and two allies can each shift 1 square as a free action.',
				damage: '2d10 + 3 damage',
				category: 5
			},
			{
				id: '4ebbb443-dad2-4416-abe6-6a4e55b22c07',
				name: 'Bloodcurdling Shriek',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close Burst 2',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6 + 4 necrotic damage, and the target is slowed and takes a –2 penalty to all defenses (save ends both). Ashurta slides each undead ally within the burst 2 squares.',
				damage: '2d6 + 4 necrotic damage',
				category: 5
			},
			{
				id: 'dce57928-3826-4346-aa88-c93cdd619cdb',
				name: 'Blade Daze',
				action: {
					action: 7,
					trigger: 'when ashurta hits with ashurta’s blade; daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target is dazed until the end of Ashurta’s next turn.',
				damage: '',
				category: 5
			},
			{
				id: 'c4f0bcbf-3c23-4588-ba3a-6f35cf1d97f6',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'When Ashurta hits with a melee attack against a creature that grants combat advantage to it, that creature also loses a healing surge.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'd05230b2-067c-448d-9cb7-ad3b1ba7f81d',
				name: 'Death Scream',
				action: null,
				keywords: '',
				condition: 'when ashurta drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Ashurta unleashes a bloodcurdling shriek.',
				damage: '',
				category: 0
			},
			{
				id: '677a4285-7afe-48c2-a861-025f2f138c4a',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when ashurta suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ashurta makes a saving throw against the triggering eff ect',
				damage: '',
				category: 5
			},
			{
				id: 'b8cff4bf-8def-4ac1-8642-88b7e4c5900a',
				name: 'Quick Command',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'An ally within 10 squares makes a melee basic attack',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (undead, wight; hobgoblin)'
	},
	{
		id: '66c3e93c-753f-4ae3-ae7c-214f168b8a56',
		name: 'Bladebearer Sharpshooter',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +10, Thievery +10',
		equipment: 'leather armor; short sword; short sword',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 31,
		initiative: 5,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '47bcd9b1-7ffc-4b98-9856-ba3c054a797f',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 2 damage.',
				damage: '1d6 + 2 damage',
				category: 1
			},
			{
				id: '79f07c40-7b3a-4ad5-9a92-ee26e8256689',
				name: 'Shortbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 damage.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: '20b18958-34a1-4784-bd53-6532cb4e4cd4',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Bladebearer sharpshooter deals 1d6 extra damage against any creature that grants combat advantage to it.',
				damage: 'a bladebearer sharpshooter deals 1d6 extra damage against any creature that grants combat advantage to it',
				category: 0
			},
			{
				id: '04eb2cf1-1ee4-4c69-813a-090f00d53a7e',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer sharpshooter shifts 1 square.',
				damage: 'The Bladebearer sharpshooter shifts 1 square',
				category: 5
			},
			{
				id: '52e127cd-a277-46ff-bf47-0003e1dc80f0',
				name: 'Sniper',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a Bladebearer sharpshooter makes a ranged attack from hiding and misses, it is still considered to be hiding.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: '4ad6e408-2226-4746-b444-151b3f4458e3',
		name: 'Bloodblade Hobgoblin Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: 'falchion',
		category: 'Skeleton',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 78,
		initiative: 4,
		ac: 17,
		fortitude: 17,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '93b652b2-d690-47ef-be2d-a32021b55ce1',
				name: 'Falchion',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d4 + 3 damage (crit 2d4 + 11), and ongoing 5 damage (save ends).',
				damage: '2d4 + 3 damage (crit 2d4 + 11)',
				category: 1
			},
			{
				id: '433084fd-04f6-4bde-90bd-ab13e28791bb',
				name: 'Bloodblade Sweep',
				action: {
					action: 1,
					trigger: 'requires a falchion',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'when first bloodied and again when the bloodblade hobgoblin skeleton drops to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d4 + 3 damage (crit 2d4 + 11), and ongoing 5 damage (save ends).',
				damage: '2d4 + 3 damage (crit 2d4 + 11)',
				category: 5
			},
			{
				id: 'd7cd8add-c5f5-4e38-b0c0-50aa8f319a12',
				name: 'Bloodblade',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a bloodblade hobgoblin skeleton scores a critical hit, it regains 5 hit points.',
				damage: 'it regains 5 hit points',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'ee070eb6-365a-4e30-b5a6-b0b742108ee6',
		name: 'Blue Dragon Sky Bandit',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 4,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '8, fly 10 (hover), overland flight 15',
		alignment: '',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 232,
		initiative: 4,
		ac: 21,
		fortitude: 19,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7ea3b25e-184b-4765-ba40-40d7af1ecc44',
				name: 'Gore',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d6 + 4 plus 1d6 lightning damage.',
				damage: '1d6 + 4 plus 1d6 lightning damage',
				category: 1
			},
			{
				id: '5b671ff2-360a-4275-a84d-c7ea7260a7c1',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d4 + 4 damage.',
				damage: '1d4 + 4 damage',
				category: 1
			},
			{
				id: 'baf1a877-bc02-4af5-9082-5e54ce7dd1fb',
				name: 'Draconic Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'The dragon makes a gore attack and two claw attacks; .',
				damage: '',
				category: 1
			},
			{
				id: '6352f72d-c953-4974-bdb8-6410644cc1d3',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: 'The dragon targets up to three creatures with its lightning breath; the first target must be within 10 squares of the dragon, the second target within 10 squares of the first, and the third target within 10 squares of the second; 1d12 + 4 lightning damage. Miss: Half damage. This attack does not provoke opportunity attacks.',
				damage: '1d12 + 4 lightning damage',
				category: 1
			},
			{
				id: '9a775641-f443-47b6-963b-fef6011382dd',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Breath weapon recharges, and the dragon uses it; .',
				damage: '',
				category: 5
			},
			{
				id: '9e1cb57e-d751-4036-9b63-4eb7905affd9',
				name: 'Frightful Presence',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'the target is stunned until the end of the dragon’s next turn. Aftereffect: The target takes a –2 penalty to attack rolls (save ends).; targets enemies; .',
				damage: '',
				category: 1
			},
			{
				id: 'b0ad1264-d5ad-4198-b583-fe2a0321218b',
				name: 'Lightning Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d6 + 3 lightning damage. Miss: Half damage.',
				damage: '1d6 + 3 lightning damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 5,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Solo Artillery',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '0663c867-7fbe-465a-a881-c1636adb36f3',
		name: 'Bonepile Hobgoblin Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Skeleton',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 29,
		fortitude: 24,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7c561ad0-decd-4e2f-85c9-4bf46e97f74e',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '918bbf7d-a24d-4fea-95ec-706c2e0b69f8',
		name: 'Captain Warrik',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 4,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'History +9, Intimidate +10',
		equipment: 'halberd; plate armor',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 106,
		initiative: 4,
		ac: 22,
		fortitude: 18,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '36e38bfd-96f4-4c81-9b0d-48976501f532',
				name: 'Halberd',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10 + 5 damage, and the target is marked until the end of Captain Warrik’s next turn.',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: '5c79190b-1adb-4ef0-ad97-d2ec42ca0bab',
				name: 'Staggering Slash',
				action: {
					action: 1,
					trigger: 'requires a halberd',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'targets a creature marked by Captain Warrik; Reach 2; 2d10 + 5 damage, and the target slides 2 squares. On a critical hit, the target is also knocked prone.',
				damage: '2d10 + 5 damage',
				category: 5
			},
			{
				id: 'ac10be3e-96d3-472c-b1f6-31fa8f9e322d',
				name: 'Inspire Zeal',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'An ally within 5 squares gains 10 temporary hit points; .',
				damage: 'An ally within 5 squares gains 10 temporary hit points',
				category: 3
			},
			{
				id: '4807dc04-65b6-4f5c-8904-5539e784e61c',
				name: 'True Fanatic',
				action: {
					action: 1,
					trigger: 'requires a halberd',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when captain warrik drops to 0 hit points',
				range: 'Close blast 2',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Targets enemies; 2d10 + 5 damage, and the target is pushed 1 square.',
				damage: '2d10 + 5 damage',
				category: 5
			},
			{
				id: 'ecb39981-e8b7-4ab7-bd00-2c69ffabdc9d',
				name: 'Baiting Ploy',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Captain Warrik moves 1 square, and grants combat advantage until the start of his next turn. If an enemy attacks Captain Warrik due to this movement, Captain Warrik (with reach) or one of his allies adjacent to that enemy makes a melee basic attack with combat advantage against that enemy as a free action.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: 'de11e1ba-485f-4a51-849e-fcc2b860ccdf',
				name: 'Claw Maneuver',
				action: {
					action: 3,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Each ally within 5 squares shifts 2 squares. During its next turn, an ally that shifts because of this power deals +2 damage with its next attack, or +4 if that attack is made with combat advantage',
				damage: 'an ally that shifts because of this power deals +2 damage with its next attack',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'b792ead9-6854-46e9-99b4-44b1518ea655',
		name: 'Chainfighter Wight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead; hobgoblin',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +12, Stealth +11',
		equipment: 'leather armor; spiked chain',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 64,
		initiative: 10,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7f17408b-9cf1-41e8-8560-d59f4fd6eb73',
				name: 'Spiked Chain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '2d4 + 5 damage, and the chainfighter wight can shift 2 squares.',
				damage: '2d4 + 5 damage',
				category: 1
			},
			{
				id: '3cab0db3-62a9-4545-8509-dc86dc7f6b9f',
				name: 'Revolving Strike',
				action: {
					action: 1,
					trigger: 'requires a spiked chain',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'The chainfighter wight makes spiked chain attacks against two different targets; .',
				damage: '',
				category: 5
			},
			{
				id: 'ee75ea60-8944-42c9-b5c3-95781b693224',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a chainfi ghter wight hits with a melee attack against a creature that grants combat advantage to it, that creature also loses a healing surge',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'b7d26482-4c8f-4e18-99e4-ea6ffb849e78',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the chainfighter wight suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The chainfighter wight makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 5
			}
		],
		resist: '5 necrotic (if the wight takes necrotic damage, it gains an extra move action on its next turn)',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Medium natural humanoid (undead; hobgoblin)'
	},
	{
		id: '27349762-b4e2-4333-8fc0-9cc2dacd7738',
		name: 'Chib Naersaar',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'hobgoblin',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +12, Stealth +11',
		equipment: 'leather armor; scimitar',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 62,
		initiative: 10,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '15529fea-2a39-4d80-ac42-3e47608f4af5',
				name: 'Scimitar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8 + 6 damage (crit 1d8 + 14).',
				damage: '1d8 + 6 damage (crit 1d8 + 14)',
				category: 1
			},
			{
				id: '19d5c9fe-22af-4ddc-a946-9e0f9688ac1e',
				name: 'Bladebearer Engagement',
				action: {
					action: 1,
					trigger: 'requires a scimitar; recharges when naersaar hits with at least one bladebearer strike attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Naersaar charges, but doesn’t provoke opportunity attacks for leaving the initial square. Eff ect: Naersaar shifts 1 square.; .',
				damage: 'Naersaar shifts 1 square',
				category: 5
			},
			{
				id: 'c4ebacc2-5b30-432e-bce3-10e2d157992e',
				name: 'Bladebearer Strike',
				action: {
					action: 1,
					trigger: 'requires a scimitar',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Naersaar makes a melee basic attack with each of the two scimitars it wields.',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 5
			},
			{
				id: '4de06f8b-a177-4e62-a22d-5972158fcd40',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Naersaar deals 1d6 extra damage against any creature that grants combat advantage to him.',
				damage: 'naersaar deals 1d6 extra damage against any creature that grants combat advantage to him',
				category: 0
			},
			{
				id: 'a0fb1e13-c01f-45e6-9f7a-7ee39d13b1bc',
				name: 'Dhakaani Footwork',
				action: {
					action: 7,
					trigger: 'when naersaar hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Naersaar shifts 1 square.',
				damage: 'Naersaar shifts 1 square',
				category: 5
			},
			{
				id: 'f0664b50-c0f1-47a5-bd69-c7a93aa0b836',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when naersaar suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Naersaar makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Medium natural humanoid (hobgoblin)'
	},
	{
		id: '62433330-3842-4b34-9a4c-2e37ab9db46c',
		name: 'Claw Doppelganger Darkmage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven, Goblin',
		skills: 'Arcana +10, Intimidate +11',
		equipment: 'implement, rod; mace',
		category: 'Doppelganger',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 42,
		initiative: 2,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd4650194-a76b-47d3-8b94-054ca75db56a',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '9e5a038a-e5ef-4616-a064-10c0bb515250',
				name: 'Dark Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '1d10 + 4 necrotic damage, or 2d6 + 4 necrotic damage against a target at full normal hit points.',
				damage: '1d10 + 4 necrotic damage',
				category: 1
			},
			{
				id: '1279754b-97fd-4946-bcd2-7c38fb7b2f08',
				name: 'Cursebite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement, Necrotic',
				condition: '',
				range: 'Close burst 20',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'targets cursed enemies; 2d8 + 5 necrotic damage.',
				damage: '2d8 + 5 necrotic damage',
				category: 1
			},
			{
				id: '79ca264f-c471-4ef4-bc28-e758ea638843',
				name: 'Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Claw doppelganger darkmage curses the nearest noncursed enemy. The curse lasts until the end of the encounter. Once per round when the darkmage hits a cursed enemy, it can deal that enemy 1d6 extra damage.',
				damage: 'it can deal that enemy 1d6 extra damage',
				category: 1
			},
			{
				id: '29fb5ea8-f96d-4300-aa26-55cb23a7a08b',
				name: 'Darkmage Fanatic',
				action: null,
				keywords: '',
				condition: 'when the claw doppelganger darkmage drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The Claw doppelganger darkmage makes a basic attack',
				damage: '',
				category: 0
			},
			{
				id: '3c217ebd-dd56-462d-99d4-d4622bd032ef',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A doppelganger can alter its physical form to take on the appearance of any Medium humanoid, including a unique individual (see Monster Manual, page 280)',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '153813e4-2209-4d20-9211-c426b267695f',
		name: 'Deathgaunt Drover',
		details: '',
		size: 1,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic Evil',
		languages: 'Deep Speech, Goblin',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 52,
		initiative: 8,
		ac: 18,
		fortitude: 15,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd5b556ae-2fc4-4e91-bc9d-41fb2d8af81d',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 3 damage.',
				damage: '2d6 + 3 damage',
				category: 1
			},
			{
				id: 'd74a64fe-3ab4-4c6f-9687-391b696e10bf',
				name: 'Dirty Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Targets a creature that grants combat advantage to the deathgaunt drover; 1d6 + 2 necrotic damage, and the target loses a healing surge.',
				damage: '1d6 + 2 necrotic damage',
				category: 1
			},
			{
				id: 'fa896dfd-a031-4f7d-b006-e41e0fcfa360',
				name: 'Dark Rendering',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The deathgaunt drover shifts 4 squares. At any point during that movement, it can make two melee attacks',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '33180363-f52f-4f4d-8ec1-c82125c1aba2',
				name: 'Horde Tactics',
				action: {
					action: 7,
					trigger: 'when the deathgaunt drover hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The deathgaunt drover shifts 1 square',
				damage: 'The deathgaunt drover shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small aberrant humanoid (undead)'
	},
	{
		id: '51cd51a3-5fb1-4a4c-b505-7f50290c38d0',
		name: 'Deathgaunt Hordeling',
		details: '',
		size: 1,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic Evil',
		languages: 'Deep Speech, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 5,
		ac: 18,
		fortitude: 14,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8a222c83-4375-48c8-aba5-8203ce2e1bef',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			},
			{
				id: 'eb4245c5-1511-4cfc-823c-5549d0801c4b',
				name: 'Horde Tactics',
				action: {
					action: 1,
					trigger: 'when the deathgaunt hordeling hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(free',
				range: '',
				attack: null,
				description: '',
				details: 'The deathgaunt hordeling shifts 1 square',
				damage: 'The deathgaunt hordeling shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Minion',
		phenotype: 'Small aberrant humanoid (undead)'
	},
	{
		id: '14e39a9a-6fa9-41bd-b3ba-d79a826f5347',
		name: 'Deathgaunt Lasher',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Deep Speech, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 63,
		initiative: 8,
		ac: 21,
		fortitude: 16,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1e7a96d0-5dbf-4a42-b71b-6c878d323b2c',
				name: 'Tentacle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 1d6 + 4 damage, and the target is marked until the end of the deathgaunt lasher’s next turn.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: '68f1690a-5c55-447b-9495-6cb48a8f47ab',
				name: 'Tentacle Lash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Reach 3; targets a creature marked by the deathgaunt lasher; 1d10 + 4 damage, and the target is dazed and marked until the end of the lasher’s next turn.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: '613bdce0-4217-4511-8cd2-16ba42fd087b',
				name: 'Deathgaunt Kiss',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Targets a dazed, stunned, or unconscious creature; 2d8 + 4 necrotic damage, and ongoing 5 necrotic damage.',
				damage: '2d8 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'ff3a41f6-0e6d-414f-9120-fa936137343e',
				name: 'Marked Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A deathgaunt lasher can make opportunity attacks against all enemies within its reach (3 squares) that it has marked.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: 'e11d88f4-68f0-495c-baa4-4968f822e30b',
		name: 'Deathgaunt Madcaster',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Deep Speech, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 68,
		initiative: 6,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '1e718a5b-408c-4ee1-84d9-90b4bf0bd456',
				name: 'Xoriat’s Shadow',
				keywords: '',
				details: '(Psychic) each enemy that starts its turn within the aura takes 5 psychic damage and a –2 penalty to all checks and rolls until the start of its next turn. If the deathgaunt madcaster takes radiant damage, its aura is negated until the end of its next turn.'
			}
		],
		powers: [
			{
				id: 'dec1a4e2-81ec-420a-a8e9-22802c884d66',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10 + 5 damage.',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: '57a39028-5d58-40b7-a47f-a0d281e404fa',
				name: 'Push over the Edge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'Reach 2; 1d10 + 5 necrotic and psychic damage, and the target moves its speed and makes a basic attack against a target of the deathgaunt madcaster’s choice as a free action.',
				damage: '1d10 + 5 necrotic and psychic damage',
				category: 1
			},
			{
				id: '6451d45e-2b9d-4372-a0cf-cd3e0a8a9654',
				name: 'Flying Fangs',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: '5; 1d10 + 5 necrotic damage, and the target is dazed until the end of the deathgaunt madcaster’s next turn.',
				damage: '1d10 + 5 necrotic damage',
				category: 1
			},
			{
				id: '6000c370-d04c-4698-989a-b03c6c614aff',
				name: 'Reanimate',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Targets one destroyed undead creature within 10 squares and of a level no higher than the deathgaunt madcaster’s level. The target regains 15 hit points and stands as a free action.',
				damage: 'Targets one destroyed undead creature within 10 squares and of a level no higher than the deathgaunt madcaster’s level',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '5 radiant (see also Xoriat’s shadow)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Controller',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: 'cc8f1657-b824-4bc1-8548-3fb3e7a86450',
		name: 'Deathgaunt Spiner',
		details: '',
		size: 1,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Deep Speech, Goblin',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 45,
		initiative: 6,
		ac: 16,
		fortitude: 15,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '56a01f16-ab13-4fee-b337-9511d5fc26dc',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: 'f30c3172-8aa2-4eda-b1d8-0283dccb6447',
				name: 'Death Spine',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '2d8 + 4 necrotic damage.',
				damage: '2d8 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'a7ed472e-b138-4a5b-8f12-19c67e18197b',
				name: 'Death Spine Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d8 + 4 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8 + 4 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Small aberrant humanoid (undead)'
	},
	{
		id: '4cc4866b-b363-4dd8-918d-f5179f9ccbfe',
		name: 'Decrepit Goblin Skeleton',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Skeleton',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 30,
		fortitude: 25,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7d95c4fc-b210-45bf-b039-40f285cd4609',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '1c51cb13-3bd0-481a-9251-902b7126d462',
				name: 'Foul Strength',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A decrepit goblin skeleton gains a +2 power bonus to all defenses while at least two other decrepit goblin skeletons are within 5 squares of it.',
				damage: 'A decrepit goblin skeleton gains a +2 power bonus to all defenses while at least two other decrepit goblin skeletons are within 5 squares of it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'ee4a4cd4-b91a-47ae-9499-1647aa8ec2ca',
		name: 'Deep Goblin Curser',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +3; darkvision',
		movement: '6, climb 6',
		alignment: 'Unaligned',
		languages: 'Goblin',
		skills: 'Stealth +11, Thievery +9',
		equipment: '',
		category: 'Goblin',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 54,
		initiative: 4,
		ac: 18,
		fortitude: 15,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e57684c8-5ced-400d-ae80-0d2df8fd11b7',
				name: 'Stone Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 + 2 damage, and the target is slowed until the end of the deep goblin curser’s next turn.',
				damage: '1d8 + 2 damage',
				category: 1
			},
			{
				id: '5ceac76d-b7ed-411d-8f17-36f1855c8077',
				name: 'Caveroot Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d6 + 1 damage, and the target is restrained (save ends).',
				damage: '2d6 + 1 damage',
				category: 1
			},
			{
				id: '88f89357-2084-41e4-9fa6-0cd2b1834583',
				name: 'Rage Rot Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'the target takes a –2 penalty to attack rolls until the end of the curser’s next turn and, if it attacks during its next turn, it takes 2d6 + 6 necrotic damage.; .',
				damage: 'it takes 2d6 + 6 necrotic damage',
				category: 1
			},
			{
				id: 'f395dc76-f4ed-4689-9551-0624e44bde78',
				name: 'Incite Bravery',
				action: {
					action: 4,
					trigger: 'when an ally uses goblin tactics',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'the triggering ally can shift 2 more squares as a free action and make an attack as a free action.; .',
				damage: 'the triggering ally can shift 2 more squares as a free action and make an attack as a free action',
				category: 5
			},
			{
				id: '4800c3e6-37e8-4672-8e9d-430c5fe096f1',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The deep goblin curser shifts 1 square.',
				damage: 'The deep goblin curser shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '8451a55a-32b8-4872-b31c-0ed7b9b647a9',
		name: 'Deep Goblin Stoneblade',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6, climb 6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +9, Stealth +11',
		equipment: 'leather armor',
		category: 'Goblin',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 52,
		initiative: 8,
		ac: 18,
		fortitude: 14,
		reflex: 19,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '53d5c50c-bacf-475a-b763-9195fe654170',
				name: 'Stone Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 + 6 damage.',
				damage: '1d6 + 6 damage',
				category: 1
			},
			{
				id: 'ba6e767b-9eec-4a77-a460-3346d7cf2d99',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'A goblin stoneblade can move up to half its speed and make one melee basic attack at any point during that movement. The goblin doesn’t provoke opportunity attacks when moving away from the target of this attack.',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: 'a2f37c27-5de5-4e36-9455-7fce8a072947',
				name: 'Stoneblade Storm',
				action: {
					action: 1,
					trigger: 'requires two stone blades',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 5
			},
			{
				id: '1edb018e-13de-4733-acbf-a5a1570ae0d5',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A goblin stoneblade deals 1d6 extra damage against any creature that grants combat advantage to it',
				damage: 'a goblin stoneblade deals 1d6 extra damage against any creature that grants combat advantage to it',
				category: 0
			},
			{
				id: '782b5e3c-c518-40a5-8ad3-d059a1936abf',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The goblin stoneblade shifts 1 square.',
				damage: 'The goblin stoneblade shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '5b2e37bc-797d-4157-848b-e53a147f4387',
		name: 'Deep Goblin Wretch',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6, climb 6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Stealth +12, Thievery +11',
		equipment: '',
		category: 'Goblin',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 6,
		ac: 32,
		fortitude: 27,
		reflex: 29,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '225e2893-9665-46cf-93f4-c308f3ff4948',
				name: 'Stone Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '5 damage (6 damage if the deep goblin wretch has combat advantage against the target).',
				damage: '5 damage (6 damage if the deep goblin wretch has combat advantage against the target)',
				category: 1
			},
			{
				id: '092eb7a5-a30f-45f2-82ce-6a5c3fdbb5e1',
				name: 'Shortbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '6c5d10c7-f083-4ce7-a0fe-8fc55f4fe016',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The deep goblin wretch shifts 1 square.',
				damage: 'The deep goblin wretch shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Minion',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '2a905f52-0150-4c93-ab8b-2a38dc460955',
		name: 'Demise',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 8,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic, Elven, Giant',
		skills: 'Arcana +13, Bluff +12, History +13, Religion +13, Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 174,
		initiative: 5,
		ac: 22,
		fortitude: 20,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c08352d8-7e3b-4aa6-94fe-2993f4ca4774',
				name: 'Staff of Ruin',
				action: {
					action: 1,
					trigger: 'requires a staff',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d6 + 6 cold damage (crit 2d10 + 18), and the target is slowed and takes a –2 penalty to Fortitude until the end of Demise’s next turn.',
				damage: '2d6 + 6 cold damage (crit 2d10 + 18)',
				category: 5
			},
			{
				id: '768cad6c-ce9e-4917-858e-7900144bf8cc',
				name: 'Vampiric Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d8 + 6 necrotic damage (crit 2d10 + 22), and Demise gains 4 temporary hit points. If this attack bloodies a target, that target is weakened until the end of Demise’s next turn.',
				damage: '2d8 + 6 necrotic damage (crit 2d10 + 22)',
				category: 1
			},
			{
				id: '18c20e2a-295a-4ac4-9726-82eff58fc9c7',
				name: 'Death Glare',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d10 + 6 necrotic damage (crit 2d10 + 26), and ongoing 10 necrotic damage (save ends both). The target cannot save until it ends its turn farther from Demise than it was at the start of its turn.',
				damage: '2d10 + 6 necrotic damage (crit 2d10 + 26)',
				category: 1
			},
			{
				id: '69b9ab2d-925d-469e-b949-395b1cee8c8f',
				name: 'Zombie Cloud',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Zone',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '1d8 + 4 poison damage (crit 2d10 + 12). The burst creates a zone of lightly obscured squares. A creature that enters the zone or starts its turn there takes 1d8 + 4 poison damage. A living creature reduced to 0 hit points or fewer within the zone rises on its turn with 1 hit point and is dominated (no save), but can use only basic attacks. Any healing used on a dominated target works normally and ends the dominated effect. Demise can move the cloud 3 squares as a move action. Sustain Minor: The zone persists.',
				damage: '1d8 + 4 poison damage (crit 2d10 + 12)',
				category: 5
			},
			{
				id: '6b051418-f713-4f5f-b41c-17a9d2c704b4',
				name: 'Elven Accuracy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Demise can reroll an attack roll, taking the second result.',
				damage: '',
				category: 4
			},
			{
				id: '3c5e6af5-cdb2-42ac-b1ab-e3800b40cb93',
				name: 'False Life',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Demise gains 22 temporary hit points.',
				damage: 'Demise gains 22 temporary hit points',
				category: 3
			},
			{
				id: 'fa41f913-3491-4ec6-be0f-a6c4e9b8be28',
				name: 'Ghostwalk',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Demise can move up to her speed, and she has insubstantial and phasing until the start of her next turn.',
				damage: '',
				category: 2
			},
			{
				id: '611a0787-79a7-46ef-8f6a-b664e64ce981',
				name: 'Shadowdance Robes',
				action: null,
				keywords: '',
				condition: '',
				range: 'Demise’s area attacks and ranged attacks don’t provoke opportunity attacks',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '9517ff25-5fae-4e13-b34d-fd8d9d347a4c',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Demise ignores difficult terrain when she shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '5a499695-9d08-4ab2-93cd-3fdc25195366',
		name: 'Dolgaunt',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'blind',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; blindsight 20',
		movement: '7',
		alignment: 'Evil',
		languages: 'Deep Speech, Goblin',
		skills: 'Acrobatics +11, Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 61,
		initiative: 8,
		ac: 19,
		fortitude: 17,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '09dea187-a0d5-4871-95d6-fd90a90d163a',
				name: 'Fist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '2d4 + 4 damage.',
				damage: '2d4 + 4 damage',
				category: 1
			},
			{
				id: '754f8e0b-8ed9-4da2-9486-bd3bdc2cd5a7',
				name: 'Tentacle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d4 + 4 damage, and the target is slid 2 squares and grabbed.',
				damage: '1d4 + 4 damage',
				category: 1
			},
			{
				id: '129ea538-023f-4538-977e-95811395555f',
				name: 'Grasping Tentacles',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dolgaunt can grab with up to two tentacles at a time. While grabbing an enemy, the dolgaunt can’t move more than 2 squares from that creature, and the dolgaunt can’t use the grabbing tentacle to attack.',
				damage: 'the dolgaunt can’t move more than 2 squares from that creature',
				category: 0
			},
			{
				id: '8a4b0132-dca5-4e19-9325-ad2b50c7a803',
				name: 'Vitality Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dolgaunt deals 5 damage to each target it has grabbed. It regains half that amount of hit points.',
				damage: 'the dolgaunt deals 5 damage to each target it has grabbed',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Controller',
		phenotype: 'Medium aberrant humanoid (blind)'
	},
	{
		id: '69fd6936-5c68-4db0-ac0d-c2142cbc9259',
		name: 'Dreadclaw Darkliege',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +11, Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 55,
		initiative: 5,
		ac: 18,
		fortitude: 16,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '20c0f85b-1426-43c4-beaa-547d2dd974d7',
				name: 'Dread Wrath',
				keywords: '',
				details: '(Necrotic) aura 5; each creature within the aura that attacks the dreadclaw darkliege takes 5 necrotic damage before making the attack roll.'
			}
		],
		powers: [
			{
				id: '98c4db10-9890-4dbe-be3b-a8322c67b423',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 + 2 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d6 + 2 necrotic damage',
				category: 1
			},
			{
				id: '973ee989-d1a2-4c85-9201-2869e7031202',
				name: 'Dark Howl',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 2',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d4 + 4 necrotic damage, and the target is dazed until the end of the dreadclaw darkliege’s next turn.',
				damage: '1d4 + 4 necrotic damage',
				category: 1
			},
			{
				id: '0d4735a2-919d-4c9e-82c0-c62f869fac71',
				name: 'Terrifying Splendor',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: '3d6 + 4 necrotic damage, and the target is knocked prone.',
				damage: '3d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'ad5b14b2-0544-4ca3-9f28-e80a944e38c4',
				name: 'Living Seeming',
				action: null,
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dreadclaw darkliege appears as it did in life, usually as a Medium humanoid. A DC 15 Insight check pierces the illusion',
				damage: 'A DC 15 Insight check pierces the illusion',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '88b545e7-af95-4e8d-b4b7-5aeb8b7707c0',
		name: 'Dreadclaw Reaver',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Bluff +9, Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 56,
		initiative: 8,
		ac: 18,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3301ec26-086f-4a04-9782-db68c7e90367',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 4 necrotic damage, and the dreadclaw reaver shifts 2 squares.',
				damage: '2d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'f8c0f48d-86ab-40e2-a6e5-c99bf3671848',
				name: 'Wrathful Retribution',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the dreadclaw reaver is hit by a melee attack on its turn',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes 5 necrotic damage.',
				damage: 'the attacker takes 5 necrotic damage',
				category: 0
			},
			{
				id: '0532a9c8-ee55-440e-bdbc-29e72a55ab96',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dreadclaw reaver deals ongoing 5 necrotic damage (save ends) on successful attacks against creatures that grant combat advantage to it',
				damage: 'a dreadclaw reaver deals ongoing 5 necrotic damage (save ends) on successful attacks against creatures that grant combat advantage to it',
				category: 0
			},
			{
				id: '6c8fa63a-2d14-4ef7-aa7e-646a772dc90b',
				name: 'Living Seeming',
				action: null,
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dreadclaw reaver appears as it did in life. A DC 13 Insight check pierces the illusion.',
				damage: 'A DC 13 Insight check pierces the illusion',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small natural humanoid (undead)'
	},
	{
		id: '4e0ecb3f-82cb-4fa0-8d58-923d87573c14',
		name: 'Emerald Claw Fireblade Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'tiefling',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +13, Stealth +14',
		equipment: 'leather armor; short sword',
		category: 'Emerald Claw',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 71,
		initiative: 9,
		ac: 20,
		fortitude: 17,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '10ed9332-467e-4677-984b-05ecf9d2ee5f',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: 'requires a short sword',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '(+12 against a bloodied target)1d6 + 5 damage plus 1d6 fire damage.',
				damage: '(+12 against a bloodied target)1d6 + 5 damage plus 1d6 fire damage',
				category: 5
			},
			{
				id: 'e19943c4-f780-4a3c-81f5-d30a7d396fa0',
				name: 'Mobile Melee Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The Emerald Claw fi reblade assassin moves half its speed and makes one melee basic attack at any point during that movement. The assassin doesn’t provoke opportunity attacks when moving away from the target of its attack.',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: '7eff6233-d458-40ce-aa02-d78d77d7fff0',
				name: 'Fanatic',
				action: null,
				keywords: '',
				condition: 'when the emerald claw fireblade assassin is reduced to 0 hit points',
				range: 'The Emerald Claw fireblade assassin makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '512afdb3-1fe4-4903-9ae2-80a65aeacc79',
				name: 'Infernal Wrath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Emerald Claw fireblade assassin gains a +1 power bonus to its next attack roll against an enemy that hit it since its last turn. If the attack hits and deals damage, it deals 3 extra damage.',
				damage: 'if the attack hits and deals damage',
				category: 3
			},
			{
				id: 'f00467cc-cc33-433c-a882-6625e1988ef5',
				name: 'Path of Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when the emerald claw fireblade assassin is hit by a melee attack during its turn',
				range: '',
				attack: null,
				description: '',
				details: 'The target takes ongoing 3 fire damage (save ends).',
				damage: 'the target takes ongoing 3 fire damage (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -8
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural humanoid (tiefling)'
	},
	{
		id: '7944475a-1095-4d3b-87c9-61fe9914ffaa',
		name: 'Emerald Claw Necromancer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +9, Religion +9',
		equipment: 'quarterstaff',
		category: 'Emerald Claw',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 38,
		initiative: 2,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3bb1e260-d1ab-4aa2-97cf-a9ae5488666a',
				name: 'Bone Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage plus 1d6 necrotic damage.',
				damage: '1d6+2 damage plus 1d6 necrotic damage',
				category: 1
			},
			{
				id: 'e94b1e8f-79e7-4deb-955d-41f820842462',
				name: 'Ray of Enfeeblement',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d10+4 necrotic damage, and the target is weakened until the end of the Emerald Claw necromancer’s next turn.',
				damage: '1d10+4 necrotic damage',
				category: 1
			},
			{
				id: '823079a9-3d64-464f-9a68-b0006e54a0b0',
				name: 'Deathly Summons',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d12+3 necrotic damage, and the target is pulled 1 square toward the burst’s origin square.',
				damage: '1d12+3 necrotic damage',
				category: 1
			},
			{
				id: 'b7994e18-23ef-4c8d-8c84-6495e5d4911d',
				name: 'Fanatic',
				action: {
					action: 1,
					trigger: 'requires a quarterstaff',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when the emerald claw necromancer drops to 0 hit points',
				range: 'The emerald claw necromancer makes a melee basic attack against an adjacent enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Artillery',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'e1bac028-08d4-4313-8249-a27f6570e66d',
		name: 'Emerald Claw Scout',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Nature +6, Stealth +9',
		equipment: 'leather armor; short sword; shortbow',
		category: 'Emerald Claw',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 14,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '50298da8-cb7d-4ce3-9183-1d997d9a956c',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage, and an ally within 5 squares shifts 1 square as a free action.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: '02cce3de-3d89-4c48-ab0d-716003d020a9',
				name: 'Shortbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 damage.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: '302bb6f2-3860-4f6e-b9ff-5fe6447c53a3',
				name: 'Alchemist’s Fire Arrows',
				action: {
					action: 1,
					trigger: 'requires a shortbow; usable three times only)',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 15',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '1d6 fire damage. Miss: Half damage.',
				damage: '1d6 fire damage',
				category: 5
			},
			{
				id: '7ea7544f-c76f-498f-9f92-f2784a2202f4',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An Emerald Claw scout deals 1d6 extra damage against any creature that grants combat advantage to it.',
				damage: 'an emerald claw scout deals 1d6 extra damage against any creature that grants combat advantage to it',
				category: 0
			},
			{
				id: 'fe1d9dd8-6385-4203-be98-fce401dcdb99',
				name: 'Fanatic',
				action: null,
				keywords: '',
				condition: 'when the emerald claw scout drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The Emerald Claw scout makes a basic attack',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '9010a15e-3188-4e0f-9757-f35ca8f748e4',
		name: 'Emerald Claw Stalwarts',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +9, Religion +8',
		equipment: 'broadsword; heavy shield; plate armor',
		category: 'Emerald Claw',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 62,
		initiative: 6,
		ac: 22,
		fortitude: 19,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62714d24-8ab2-42fa-a4b8-323f64f8d89a',
				name: 'Broadsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d10 + 5 damage, and the target is marked until the end of the Emerald Claw stalwart’s next turn.',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: '3a985358-9f96-41bb-bda2-1cdf691cb9eb',
				name: 'Craven Smile',
				action: {
					action: 1,
					trigger: 'requires a broadsword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'targets a creature marked by the Emerald Claw stalwart; 1d10 + 5 damage, and the target is slowed and takes 2 necrotic damage for each square it moves away from the Emerald Claw stalwart each turn (save ends both).',
				damage: '1d10 + 5 damage',
				category: 5
			},
			{
				id: '74a51063-0daf-4494-bc32-5d247c7ba130',
				name: 'Imposing Smite',
				action: {
					action: 1,
					trigger: 'requires a broadsword',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d10 + 5 damage, and the target is pushed 2 squares and knocked prone. The target can instead ignore these effects, but if it does, it grants grant combat advantage to all enemies until the end of the Emerald Claw stalwart’s next turn.',
				damage: '2d10 + 5 damage',
				category: 5
			},
			{
				id: 'e98614d6-ddd8-4171-8dd6-52db9025d581',
				name: 'Fanatic',
				action: {
					action: 1,
					trigger: 'requires a broadsword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'when the emerald claw stalwart drops to 0 hit points',
				range: 'The Emerald Claw stalwart makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'dcacebc5-5e24-4810-bc91-2c6dd1b27a0a',
		name: 'Filching Wraith',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +11, Thievery +11',
		equipment: '',
		category: '',
		strength: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 30,
		initiative: 10,
		ac: 17,
		fortitude: 14,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '23c74eae-4845-46ce-9986-4793126c1c7c',
				name: 'Filching Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d10 + 5 necrotic damage. If the wraith was invisible or hidden, the target takes ongoing 5 necrotic damage (save ends) or the filching wraith can make a Thievery check to pickpocket the target (see PH 189). The wraith ignores the penalty for attempting to pickpocket in combat. If the target was unaware of the wraith’s location when the attack occurred, the wraith receives a +2 bonus to the Thievery check.',
				damage: '1d10 + 5 necrotic damage',
				category: 1
			},
			{
				id: '40aa3648-3866-4fe0-9f7e-075ef17be5a4',
				name: 'Filcher’s Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The filching wraith becomes invisible until the end of its next turn or until it attacks, and it shifts 1 square.',
				damage: 'and it shifts 1 square',
				category: 2
			},
			{
				id: 'db782fd3-21bc-47dc-ba87-72c8011d12ce',
				name: 'Hide Away',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The filching wraith can teleport an object it’s holding 5 squares to a place it knows or can see.',
				damage: 'The filching wraith can teleport an object it’s holding 5 squares to a place it knows or can see',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Lurker',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: 'a5a05ce5-c47e-4bd2-8149-1609d3c6d396',
		name: 'Fire Sink',
		details: 'A wisp of animate flame.',
		size: 1,
		origin: 1,
		type: 0,
		keywords: 'blind, fire',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +2; blindsight 10',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 4,
		ac: 30,
		fortitude: 25,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '2db22a50-891d-4079-b649-05448c57900f',
				name: 'Fiery Breach',
				keywords: '',
				details: 'aura1; each enemy that starts its turn within the aura loses all fire resistance until the end of the fire sink’s next turn. An enemy that ends its turn within the aura takes 3 fire damage.'
			}
		],
		powers: [],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Small elemental animate (blind, fire)'
	},
	{
		id: '38f164a2-5294-43ce-b8b7-7db575e99398',
		name: 'Force Specter',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 3,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 26,
		initiative: 8,
		ac: 15,
		fortitude: 15,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '784eaaf7-6416-4ceb-adb8-e126146439dc',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; an enemy within the aura takes a –2 penalty to all defenses'
			}
		],
		powers: [
			{
				id: '9519b0f0-a6ea-4395-a2c8-e21ec62d2504',
				name: 'Spectral Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6 + 4 necrotic damage.',
				damage: '1d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: '1df868c3-a871-4ea8-82b8-7ac38c593f86',
				name: 'Spectral Force',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close Burst 2',
				attack: {
					bonus: 6,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6 + 4 force damage, and the target slides 1 square.',
				damage: '2d6 + 4 force damage',
				category: 1
			},
			{
				id: '98852491-b622-4f98-b3e3-666b54ef4708',
				name: 'Invisibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The force specter becomes invisible until it attacks or until it is hit by an attack.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 3 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'a8a91cfc-938c-4758-a0e9-c76bca1fe429',
		name: 'Fresh-Hatched Kruthik Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'reptile, swarm',
		level: 3,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '8, climb 8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 55,
		initiative: 4,
		ac: 15,
		fortitude: 15,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [
			{
				id: 'df3a00ae-969b-47c5-ac6a-76a7ce070991',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; when any enemy starts its turn within the aura, it takes 6 damage.'
			}
		],
		powers: [
			{
				id: 'bc3c9edf-64a4-4285-be67-e3609355f76f',
				name: 'Gnashing Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 3 damage.',
				damage: '1d6 + 3 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Brute',
		phenotype: 'Medium natural beast (reptile, swarm)'
	},
	{
		id: '6516dcaf-5d24-42a8-b6f9-8524a4ff0d8c',
		name: 'Gnoll Mockery Priest',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +7, Religion +6',
		equipment: 'chainmail; light shield',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 54,
		initiative: 3,
		ac: 18,
		fortitude: 17,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5bd4d3bc-5f29-4791-a160-0e68987f8340',
				name: 'Pain Khopesh',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8 + 5 damage, or 1d8 + 7 damage while bloodied, and the target takes a –2 penalty to its next attack roll. Reroll any damage result of 1.',
				damage: '1d8 + 5 damage',
				category: 1
			},
			{
				id: 'feace522-6c73-4b29-b27c-d96662bbc2af',
				name: 'Peel Flesh',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d6 + 1 damage, and ongoing 5 damage (save ends).',
				damage: '1d6 + 1 damage',
				category: 1
			},
			{
				id: '8a8dc5ab-24ad-4ac7-8f85-f67686b298e4',
				name: 'Shuddering Agony',
				action: {
					action: 1,
					trigger: 'recharges when no enemy is taking ongoing damage',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'targets a creature taking ongoing damage; 2d6 + 4 damage, and the target is knocked prone and takes a –2 penalty to attack rolls, all defenses, and checks until the end of the gnoll Mockery priest’s next turn.',
				damage: 'targets a creature taking ongoing damage',
				category: 5
			},
			{
				id: 'fcd3ae01-5c5a-4063-adb3-f0a9b709d9c9',
				name: 'Symbol of Battle',
				action: {
					action: 7,
					trigger: 'when the gnoll mockery priest hits with an implement attack; daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attack deals 1d10 extra damage.',
				damage: 'the triggering attack deals 1d10 extra damage',
				category: 5
			},
			{
				id: '58cd0f3a-8ea5-489c-87b5-b03013aebb8e',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll Mockery priest deals 5 extra damage on melee and ranged attacks against an enemy that has two or more of the priest’s allies adjacent to it',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9326eb72-cca9-4b48-9c88-98bc166da6a6',
		name: 'Goblin Dreadclaw Reaver',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Bluff +9, Stealth +11',
		equipment: '',
		category: 'Goblin',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 56,
		initiative: 8,
		ac: 18,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6cf1865f-9d0e-407d-819b-10d5266a798a',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 4 necrotic damage, and the dreadclaw reaver shifts 2 squares.',
				damage: '2d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: '4dd581da-a50b-4c77-9ae4-f9facfa3ce75',
				name: 'Wrathful Retribution',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the dreadclaw reaver is hit by a melee attack on its turn',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes 5 necrotic damage',
				damage: 'the attacker takes 5 necrotic damage',
				category: 0
			},
			{
				id: 'f0c3298d-5c82-4e1e-a03c-c67421db1bf9',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dreadclaw reaver deals ongoing 5 necrotic damage (save ends) on successful attacks against creatures that grant combat advantage to it.',
				damage: 'a dreadclaw reaver deals ongoing 5 necrotic damage (save ends) on successful attacks against creatures that grant combat advantage to it',
				category: 0
			},
			{
				id: '635a628a-10a3-496d-8542-a27a4c9e0239',
				name: 'Living Seeming',
				action: null,
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dreadclaw reaver appears as it did in life. A DC 15 Insight check pierces the illusion.',
				damage: 'A DC 15 Insight check pierces the illusion',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'd5c9cd91-454b-4c7d-a24f-7e0e588df3e4',
		name: 'Goblin Fire Phantom',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6, fly 6 phasing',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 36,
		initiative: 6,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4df35809-ef93-49ae-aae3-7182f0e121bf',
				name: 'Phantom Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d8 + 3 fire and necrotic damage.',
				damage: '1d8 + 3 fire and necrotic damage',
				category: 1
			},
			{
				id: '6aad4eb5-a3cb-49fd-83f6-492fc79b8d3d',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The goblin fire phantom shifts 1 square.',
				damage: 'The goblin fire phantom shifts 1 square',
				category: 5
			},
			{
				id: '152655e2-a93f-4c7e-b0dc-2dde17d91774',
				name: 'Phantom Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a target has an ally of the goblin fire phantom adjacent to it, the goblin fire phantom has combat advantage against that target.',
				damage: '',
				category: 0
			},
			{
				id: 'fc1472e2-7b74-4556-8fd9-988725568104',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A goblin fire phantom deals 1d8 extra fire and necrotic damage against any creature that grants combat advantage to it.',
				damage: 'a goblin fire phantom deals 1d8 extra fire and necrotic damage against any creature that grants combat advantage to it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'fire 5, insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: '72214ab8-52fc-4a23-a476-ee63ce7d9e29',
		name: 'Goblin Flame Vent Haunt',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: 'fly 6 phasing',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 56,
		initiative: 11,
		ac: 18,
		fortitude: 16,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '275822f1-8d89-412e-bec5-0ed3ef1c7105',
				name: 'Fiery Death Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '2d6 fire and necrotic damage.',
				damage: '2d6 fire and necrotic damage',
				category: 1
			},
			{
				id: 'acf313f6-ed54-48fb-b1bc-0158ff003a6f',
				name: 'Fiery Possession',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm, Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'Targets a living humanoid; the goblin flame vent haunt enters the target’s space and is removed from the map, and the target is dominated (save ends). The haunt can use this power against only one creature at a time. When its target is no longer dominated, or when the haunt chooses to end its fiery possession (a free action), it reappears in a square of its choice adjacent to the target. While dominated, the target takes 5 fire and necrotic damage at the start of each of its turns.; .',
				damage: 'the target takes 5 fire and necrotic damage at the start of each of its turns',
				category: 1
			},
			{
				id: '189f3017-bf96-44aa-8d7e-153a4797aa2a',
				name: 'Trapbound',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The goblin flame vent haunt cannot voluntarily move more than 5 squares from the flame vent trap. If it is forced beyond this range, it is weakened and unable to use its fiery possession power until it moves back within range.',
				damage: 'The goblin flame vent haunt cannot voluntarily move more than 5 squares from the flame vent trap',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'fire 5, insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Lurker',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: '4052310d-9cc0-4276-be7f-62562adfbe9d',
		name: 'Goblin Ghost Boss',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: 'fly 6 phasing',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +9, Thievery +9',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 38,
		initiative: 4,
		ac: 16,
		fortitude: 16,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b47c483d-420d-4e27-bf5d-233731c113af',
				name: 'Ghost Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 necrotic damage.',
				damage: '1d8 + 4 necrotic damage',
				category: 1
			},
			{
				id: 'b5207178-7069-45fc-8bfa-c2974c6d5344',
				name: 'Ghost Mash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '2d8 + 6 damage, and the target slides 1 square. Miss: An ally adjacent to the target can make a melee basic attack against the target as a free action.',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'dcdd64a1-08c6-4820-b40c-2bd23ed9d30c',
				name: 'Superior Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The goblin ghost boss and up to two allies within its line of sight shift 1 square',
				damage: 'The goblin ghost boss and up to two allies within its line of sight shift 1 square',
				category: 5
			},
			{
				id: '4838dfc7-0f91-4175-83a3-ecc787c463e1',
				name: 'Phantom Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a target has an ally of the goblin ghost boss adjacent to it, the goblin phantom has combat advantage against that target.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: 'd8416d9e-d383-450a-9a2f-63107efc539e',
		name: 'Goblin Phantom',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: 'fly 6 phasing',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 36,
		initiative: 8,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fc57b587-75b6-446d-bb68-a4c63e15f089',
				name: 'Phantom Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d8 + 2 necrotic damage.',
				damage: '1d8 + 2 necrotic damage',
				category: 1
			},
			{
				id: 'ea4b1a5f-bc54-4992-8d82-5e77534b9d0e',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A goblin phantom deals 1d8 extra necrotic damage against any creature that grants combat advantage to it.',
				damage: 'a goblin phantom deals 1d8 extra necrotic damage against any creature that grants combat advantage to it',
				category: 0
			},
			{
				id: '7382f1c4-5603-41fc-b197-18918009bef8',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The goblin phantom shifts 1 square.',
				damage: 'The goblin phantom shifts 1 square',
				category: 5
			},
			{
				id: 'f3df70c0-eca6-4745-9a10-393aa2a56db7',
				name: 'Phantom Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a target has an ally of the goblin phantom adjacent to it, the goblin phantom has combat advantage against that target.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: '0f29c65e-6554-4fe4-9d12-da09ae4171ed',
		name: 'Goblin Zombie Archers',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'leather armor; shortbow',
		category: 'Zombie',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 31,
		initiative: 5,
		ac: 28,
		fortitude: 25,
		reflex: 27,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6c91d5cf-8924-431d-9ece-4997fa0e34d7',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d6 + 2 damage.',
				damage: '1d6 + 2 damage',
				category: 1
			},
			{
				id: 'a579812c-b282-4c4d-89c7-a2a6c31e9220',
				name: 'Shortbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 damage.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: '9a3be6c2-79f8-4ed2-a0a0-9499766a8074',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A critical hit to a goblin zombie shooter reduces it to 0 hit points instantly.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: '550cb02e-9ef1-4628-800b-dd82968c1d79',
		name: 'Govaan',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Acrobatics +11, Athletics +8, Bluff +7, Nature +9, Stealth +13',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 55,
		initiative: 8,
		ac: 19,
		fortitude: 15,
		reflex: 19,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4a36f5ec-a3df-4d85-ba66-b93a7017db3f',
				name: 'Katar',
				action: {
					action: 1,
					trigger: 'requires a katar',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 + 5 damage (crit 1d6 + 11).',
				damage: '1d6 + 5 damage (crit 1d6 + 11)',
				category: 5
			},
			{
				id: '0f0e8ca4-b754-483e-98cc-468d0d9ca348',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: 'requires a shuriken',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage.',
				damage: '1d6 + 4 damage',
				category: 5
			},
			{
				id: '192011c4-37d1-4bbc-9b16-d7e928f7b12b',
				name: 'Shifty Attack',
				action: {
					action: 1,
					trigger: 'requires a katar or a shuriken',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Govaan shifts 3 squares and makes one basic attack at any point during that movement. He doesn’t provoke opportunity attacks when using this power; .',
				damage: 'Govaan shifts 3 squares and makes one basic attack at any point during that movement',
				category: 5
			},
			{
				id: '2e15a988-f3ef-4f71-be94-709ddb88d69b',
				name: 'Setup Strike',
				action: {
					action: 1,
					trigger: 'requires a katar',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 5 damage (crit 1d6 + 17), and the target grants combat advantage to Govaan until the end of his next turn.',
				damage: '2d6 + 5 damage (crit 1d6 + 17)',
				category: 5
			},
			{
				id: '29fea0dc-62f9-423f-961b-efae04eedfdb',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Govaan shifts 1 square.',
				damage: 'Govaan shifts 1 square',
				category: 5
			},
			{
				id: '827966b8-c27d-46c6-a98d-a48d76cf6f03',
				name: 'Sneak Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Once per round, when Govaan hits a target that grants combat advantage to him, he can deal that target 2d6 extra damage.',
				damage: 'he can deal that target 2d6 extra damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: '98de4620-6905-4d81-a132-86e1e3a2dbb8',
		name: 'Grave Drake',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 49,
		initiative: 5,
		ac: 19,
		fortitude: 16,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd3ce32d1-5e52-4620-94c7-4cc6f4c17d0b',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10 + 3 damage, and the target is grabbed.',
				damage: '1d10 + 3 damage',
				category: 1
			},
			{
				id: '7374e556-27b1-4203-8043-a48fa1f21916',
				name: 'Gnaw',
				action: {
					action: 1,
					trigger: 'usable only against a target grabbed by the grave drake',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10 + 9 damage.',
				damage: '1d10 + 9 damage',
				category: 5
			},
			{
				id: '94910d55-768b-4ed7-9697-d2dc5fcc8260',
				name: 'Death Grip',
				action: null,
				keywords: '',
				condition: 'when the grave drake drops to 0 hit points',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'The grave drake makes a bite attack against an adjacent target. It can maintain the grab only until the end of its next turn, during which time it can gnaw. If it takes 10 damage, its grab ends.; .',
				damage: 'if it takes 10 damage',
				category: 0
			},
			{
				id: '6ccba7e6-16d7-4963-88cf-8ff7961466c4',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to the grave drake drops reduces it to 0 hit points instantly.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'acb80ebc-df10-43a1-9c6a-72f3d9f89286',
		name: 'Graywall Gnoll Mercenary',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Intimidate +8',
		equipment: 'light shield; scale armor; triple-headed flail',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 54,
		initiative: 6,
		ac: 20,
		fortitude: 17,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f5877fcc-36e4-4cfe-9306-09c4511d182e',
				name: 'Triple-Headed Flail',
				action: {
					action: 1,
					trigger: 'requires a flail',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d10 + 5 damage, and the target is marked until the end of the Graywall gnoll mercenary’s next turn.',
				damage: '1d10 + 5 damage',
				category: 5
			},
			{
				id: '14405430-ce41-43bd-b7df-7f11ad7ede63',
				name: 'Marked Bite',
				action: {
					action: 5,
					trigger: 'when an adjacent enemy marked by the graywall gnoll mercenary shifts or attacks a target other than the gnoll',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6 + 2 damage, and the target is slowed until the end of the Graywall gnoll mercenary’s next turn.',
				damage: '1d6 + 2 damage',
				category: 5
			},
			{
				id: '7d13d0e0-468f-45e6-8729-53523bd8f23f',
				name: 'Line Sweep',
				action: {
					action: 1,
					trigger: 'requires a flail',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '1d10 + 7 damage, and the target is marked until the end of the Graywall gnoll mercenary’s next turn. Special: When charging, the gnoll can use this power in place of a melee basic attack.',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'targets enemies',
				damage: '',
				category: 5
			},
			{
				id: 'd79adf15-571a-424a-bb13-c3df6492b47d',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The Graywall gnoll mercenary deals 5 extra damage on melee and ranged attacks against an enemy that has two or more of the gnoll’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'edcfbf80-1c1f-4933-8dfb-7269add96ed5',
		name: 'Hobgoblin Shadow Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 53,
		initiative: 6,
		ac: 18,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '07c80810-209b-4e2f-96a2-57546c367cbc',
				name: 'Black Aura',
				keywords: '',
				details: '(Necrotic) aura 1; when any creature starts its turn within the aura, it takes 5 necrotic damage'
			}
		],
		powers: [
			{
				id: 'b9c13c68-3dce-443f-817c-8259cd7ea59b',
				name: 'Shadow Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d4 + 1 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d4 + 1 damage',
				category: 1
			},
			{
				id: 'a26772cc-775b-4b34-99ea-de6029022b44',
				name: 'Black Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '2d4 + 2 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d4 + 2 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Artillery',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '417d4b69-e020-4124-bb5d-a946b1a06b7e',
		name: 'Hobgoblin Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'chainmail; heavy shield; scimitar',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 45,
		initiative: 6,
		ac: 18,
		fortitude: 15,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9efd3710-7225-4995-8721-46aabee67e79',
				name: 'Scimitar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8 + 2 damage (crit 1d8 + 10), and the target is marked until the end of the hobgoblin skeleton’s next turn; see also speed of the dead.',
				damage: '1d8 + 2 damage (crit 1d8 + 10)',
				category: 1
			},
			{
				id: '990ce0ee-3644-4a4d-84fd-9ee3fb46b842',
				name: 'Speed of the Dead',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When making an opportunity attack, a hobgoblin skeleton gains a +2 bonus to the attack roll and deals 1d6 extra damage.',
				damage: 'a hobgoblin skeleton gains a +2 bonus to the attack roll and deals 1d6 extra damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'b04844da-c442-41c0-a747-bcdc76e9bfdb',
		name: 'Hobgoblin Soldier Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +6',
		equipment: 'light shield; scale armor; scimitar',
		category: 'Zombie',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 41,
		initiative: 4,
		ac: 17,
		fortitude: 16,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd65bc2ce-b39c-4c88-afce-f2e23fcfc8b3',
				name: 'Scimitar',
				action: {
					action: 1,
					trigger: 'requires a scimitar',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8 + 5 damage (crit 1d8 + 13), and the target is marked until the end of the hobgoblin soldier zombie’s next turn.',
				damage: '1d8 + 5 damage (crit 1d8 + 13)',
				category: 5
			},
			{
				id: '4bd15b48-d3a5-4de4-9afa-b38c3830e345',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the hobgoblin soldier zombie suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hobgoblin soldier zombie makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			},
			{
				id: '46b7d953-1592-4eae-a52a-4317b5eb709a',
				name: 'Phalanx Soldier',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hobgoblin soldier zombie gains a +2 bonus to AC while at least one ally is adjacent to it.',
				damage: 'The hobgoblin soldier zombie gains a +2 bonus to AC while at least one ally is adjacent to it',
				category: 1
			},
			{
				id: '515d6ea0-1883-477d-a699-803e3bc78d2d',
				name: 'Rise Again',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a hobgoblin soldier zombie is reduced to 0 hit points or fewer by an attack that does not deal radiant damage, it rises on its next turn (as a move action) with 5 hit points. If it takes a critical hit after using this power or is reduced to 0 hit points after the second time this power triggers, it is permanently destroyed',
				damage: 'if a hobgoblin soldier zombie is reduced to 0 hit points or fewer by an attack that does not deal radiant damage',
				category: 1
			},
			{
				id: '335a97c1-2e8a-4217-b2f3-0af8d6493890',
				name: 'Zombie Weakness',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to a hobgoblin soldier zombie drops it to 0 hit points.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '18a03629-365c-4332-9576-1a60c1a0637b',
		name: 'Hobgoblin Specter',
		details: 'A distorted black and crimson apparition with a burning red hobgoblin skull floating at its head',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 5,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 6 phasing',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 36,
		initiative: 10,
		ac: 17,
		fortitude: 16,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: 'ea7ba2ac-0912-4a43-ab1a-29cc78348e2c',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; an enemy within the aura takes a –2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '3a2ecd98-0927-4fac-a3f4-c0b871fdee6d',
				name: 'Spectral Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d8 + 2 necrotic damage.',
				damage: '1d8 + 2 necrotic damage',
				category: 1
			},
			{
				id: '9f588e59-f44c-4f3e-abbd-f9534c1da75f',
				name: 'Spectral Scream',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8 + 2 psychic damage, and the target is pushed 3 squares and knocked prone.',
				damage: '1d8 + 2 psychic damage',
				category: 1
			},
			{
				id: 'fe983d4b-4888-45fa-b598-0f7434cfbfec',
				name: 'Invisibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The specter becomes invisible until it attacks or until it is hit by an attack. It remains invisible when it uses spectral scream.',
				damage: '',
				category: 1
			},
			{
				id: '942be799-7f72-4478-8625-2ae6fd049ca4',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A specter deals 1d8 extra damage against any creature granting combat advantage to it.',
				damage: 'a specter deals 1d8 extra damage against any creature granting combat advantage to it',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'b08b685e-07ad-4737-816d-d18949c0079e',
		name: 'Hobgoblin Wight',
		details: 'A pale hobgoblin in tattered rags. It has wild hair, wicked claws, and eyes burning with hate',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +10, Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 64,
		initiative: 10,
		ac: 20,
		fortitude: 17,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a8e53ea3-74d8-48eb-a2ee-f3b4d9b6e779',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 necrotic damage, the target loses a healing surge, and the hobgoblin wight shifts 3 squares.',
				damage: '1d6 + 4 necrotic damage',
				category: 1
			},
			{
				id: '70fc8a33-40d6-46f3-9c3a-5e875bebf54b',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the wight suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hobgoblin wight makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 5
			}
		],
		resist: '5 necrotic (if the hobgoblin wight takes necrotic damage, it can move 7 squares or shift 1 square as a free action)',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '98de0658-b7f3-4c90-9d74-e400212c53d2',
		name: 'Hobgoblin Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		dexterity: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 40,
		initiative: 1,
		ac: 25,
		fortitude: 25,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4e949c8a-258c-42fa-825c-21c840f3211c',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '2d6 + 2 damage.',
				damage: '2d6 + 2 damage',
				category: 1
			},
			{
				id: '71195a91-2ad5-49e5-a0fa-3b02b6a755f4',
				name: 'Zombie Grab',
				action: {
					action: 1,
					trigger: 'requires a free hand',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: 'the target is grabbed. Checks made to escape the hobgoblin zombie’s grab take a -5 penalty.',
				damage: 'Checks made to escape the hobgoblin zombie’s grab take a -5 penalty',
				category: 5
			},
			{
				id: '58420049-1626-412b-83b9-d19164cf9ac6',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A critical hit to a hobgoblin zombie reduces it to 0 hit points instantly.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'fc18fb32-6803-4b67-ba42-a037ed02b272',
		name: 'Kruthik Young Zombie',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'reptile, undead',
		level: 5,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision, tremorsense 5',
		movement: '6, burrow 1, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 75,
		initiative: 4,
		ac: 17,
		fortitude: 18,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '13aee0ba-9df7-4066-9cef-f13c10626700',
				name: 'Gnashing Horde',
				keywords: '',
				details: 'aura 1; when any enemy ends its turn within the aura, it takes 2 damage.'
			}
		],
		powers: [
			{
				id: '90e1e129-6749-47b3-b75c-fd32df7a2535',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '2d6 + 3 damage.',
				damage: '2d6 + 3 damage',
				category: 1
			},
			{
				id: 'f9216424-5da0-48b9-a05f-7438512e5359',
				name: 'Death Spiral',
				action: null,
				keywords: '',
				condition: 'when the kruthik young zombie drops to 0 hit points',
				range: 'The kruthik young zombie deals gnashing horde damage and makes a melee basic attack.',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 0
			},
			{
				id: '930d9e87-6d4b-4b34-909e-aa5e9d9a8cef',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to the kruthik young zombie reduces it to 0 hit points instantly.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Brute',
		phenotype: 'Small natural animate (reptile, undead)'
	},
	{
		id: 'e57686de-4303-4f23-ac24-249008205eeb',
		name: 'Magma Runner',
		details: 'A little, humanoid-shaped hunk of lava',
		size: 1,
		origin: 1,
		type: 2,
		keywords: 'earth, fire',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: 'Acrobatics +9, Athletics +6',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 37,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '35fa143d-42a6-42bf-94b9-944454bc6094',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 3 damage plus 1d6 fire damage.',
				damage: '1d6 + 3 damage plus 1d6 fire damage',
				category: 1
			},
			{
				id: '0416eb0f-5965-46e2-8db1-f226dea31559',
				name: 'Molten Rush',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: 'The magma runner moves at half speed, and can make a slam attack against each creature it moves adjacent to. Any creature that attacks the magma runner during this movement takes 5 fire damage.; .',
				damage: 'any creature that attacks the magma runner during this movement takes 5 fire damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '5 fire (a magma runner that takes fire damage gains +2 speed until the end of its next turn)',
		vulnerable: 'cold (a magma runner that takes cold damage is slowed until the end of its next turn)',
		immune: 'petrification',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Small elemental humanoid (earth, fire)'
	},
	{
		id: '070a84ea-a878-4f27-b403-235e74e35eb4',
		name: 'Orc Marauder',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Endurance +9, Intimidate +5, Stealth +8',
		equipment: 'greataxe; handaxe; leather armor',
		category: 'Orc',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 48,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '773023f3-94cc-407a-9af0-43bb189d1f41',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12 + 3 damage (crit 1d12 + 15).',
				damage: '1d12 + 3 damage (crit 1d12 + 15)',
				category: 1
			},
			{
				id: '98d03292-3630-40ca-a380-31b7e5b1a6ad',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 3 damage.',
				damage: '1d6 + 3 damage',
				category: 1
			},
			{
				id: 'ee88ba04-53e3-4881-a1ab-0624817c1a53',
				name: 'Marauder’s Onsluaght',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires a greataxe',
				range: '1d12 + 3 damage (crit 1d12 + 15), and the target is pushed 1 square (2 squares on a charge). Special: When charging, the Turakbar orc marauder can use this power in place of a melee basic attack.',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'a4df98a2-f050-43c6-a6c4-dd312cc4fdbd',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12 + 3 damage (crit 1d12 + 15), and the Turakbar orc marauder regains 12 hit points.',
				damage: '1d12 + 3 damage (crit 1d12 + 15)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '78e51b1c-f631-40a3-875e-402fd6f857d9',
		name: 'Shadowskull',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 7,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: 'fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 64,
		initiative: 7,
		ac: 21,
		fortitude: 17,
		reflex: 21,
		will: 19,
		regeneration: {
			value: 5,
			details: 'if the shadowskull takes radiant damage, regeneration is negated until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '59a3f970-c76a-42a4-b8db-e302e739c52b',
				name: 'Bite to the Bone',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Reach 0; 1d4 damage, and ongoing 5 damage (save ends).',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: 'b0eb32bd-d998-481c-a482-d4fbdc9f97ba',
				name: 'Ghost Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '1d10 + 5 necrotic damage, and the target treats the shadowskull as insubstantial until the end of its next turn.',
				damage: '1d10 + 5 necrotic damage',
				category: 1
			},
			{
				id: '36167a6f-0cd7-4e66-9f97-597611820d05',
				name: 'Grave Strands',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d8 + 5 necrotic damage, and the target is restrained until the end of the shadowskull’s next turn. Enemies adjacent to the target take 5 necrotic damage and are slowed until the end of the shadowskull’s next turn.',
				damage: '2d8 + 5 necrotic damage',
				category: 1
			},
			{
				id: '4a990205-0eca-4740-a8b6-5d7d1ebcc0fb',
				name: 'Column of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadowskull’s square is filled with darkness 4 squares high until the end of its next turn.',
				damage: 'The shadowskull’s square is filled with darkness 4 squares high until the end of its next turn',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 7 Artillery',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: 'a727eee4-4ff3-4564-a0a3-f9c90b1e5e5c',
		name: 'Sharn Kruthik',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: 'reptile',
		level: 2,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; blindsight 10, low-light vision 10',
		movement: '8, burrow 2, climb 8, fly 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 32,
		initiative: 9,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 13,
		regeneration: null,
		auras: [
			{
				id: '060303fe-d645-46c7-86eb-cab863d7192a',
				name: 'Gnashing Horde',
				keywords: '',
				details: 'aura 1; an enemy that ends its turn within the aura takes 2 damage.'
			}
		],
		powers: [
			{
				id: '9233c6fe-b600-4042-a200-fb05510d806d',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d8 + 1 damage, and the target is grabbed. While grabbing, the kruthik can claw only the grabbed target, and that target takes 6 damage, instead of 2 damage, from the grabbing kruthik’s gnashing horde aura. The kruthik gains +2 to AC and Reflex while grabbing a target.',
				damage: '1d8 + 1 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Lurker',
		phenotype: 'Small natural beast (reptile)'
	},
	{
		id: 'ae6aefff-965d-48f9-84fd-2b9297772bb4',
		name: 'Skullborn Deathlock Wight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +10, Religion +10',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 56,
		initiative: 4,
		ac: 18,
		fortitude: 16,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'def7ec90-cf8e-460f-a210-ea49d5dc888a',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 necrotic damage, and an immobilized target loses a healing surge. When it causes the loss of a healing surge, the Skullborn deathlock wight regains 5 hit points.',
				damage: '1d6 necrotic damage',
				category: 1
			},
			{
				id: 'd3abbf9f-abba-4b48-9094-ca58dc23479c',
				name: 'Skullborn Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d6 + 4 cold and necrotic damage, and the target is immobilized (save ends).',
				damage: '1d6 + 4 cold and necrotic damage',
				category: 1
			},
			{
				id: '0b77c79d-d00d-4eda-9c61-423b0c23224c',
				name: 'Horrific Visage',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6 + 4 psychic damage, and the target is pushed 3 squares.',
				damage: '2d6 + 4 psychic damage',
				category: 5
			},
			{
				id: '3f00dbdc-deda-4e9f-84b5-2892e7b3da82',
				name: 'Reanimate',
				action: {
					action: 3,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'targets one destroyed undead creature of a level no higher than the Skullborn deathlock wight’s level + 2; the target regains 10 hit points and stands as a free action. This power does not affect minions.',
				damage: 'targets one destroyed undead creature of a level no higher than the Skullborn deathlock wight’s level + 2',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '94c8d574-91a5-42d2-b27d-39b11b9140ae',
		name: 'Skullborn Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '8, climb 4',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Stealth +11',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 63,
		initiative: 8,
		ac: 21,
		fortitude: 17,
		reflex: 20,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0ca782fa-1139-425a-84a3-c161488a1749',
				name: 'Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage, and the target is immobilized (save ends).',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '234fa7ca-6632-4e9b-a0c5-85ac32403116',
				name: 'Bloody Ghoulish Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '(targets an immobilized, stunned, or unconscious creature)2d6+4 damage, and the target takes ongoing 5 damage and is dazed (save ends both).',
				damage: 'or unconscious creature)2d6+4 damage',
				category: 1
			},
			{
				id: '964e1acf-27ba-4d5f-a928-80ebec3deae9',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An skullborn ghoul ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '1fb7bbf0-acc5-4e8f-a755-06700bd1df48',
		name: 'Skullborn Rotwing Zombie',
		details: 'This corpse has leathery wings magically grafted to its flanks.',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '6, fly 6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 54,
		initiative: 7,
		ac: 17,
		fortitude: 16,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7a43e024-9040-4458-8f0d-25191eed6c98',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6 + 3 damage.',
				damage: '2d6 + 3 damage',
				category: 1
			},
			{
				id: 'f63c76bd-474a-4388-b52b-f2e9f301ca85',
				name: 'Flying Charge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a skullborn rotwing zombie charges while flying and hits with a slam attack, that attack deals 1d8 extra damage, and the target is pushed 2 squares',
				damage: 'that attack deals 1d8 extra damage',
				category: 0
			},
			{
				id: 'dab86fd8-6c4c-4892-90ce-2474a95cc7c6',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to a Skullborn rotwing zombie drops it to 0 hit points instantly.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '648caa9d-4dff-4cf6-9638-d0102e8872f7',
		name: 'Skullborn Zombie',
		details: 'A dessicated elf corpse draped in a fine loincloth, its withered face tattooed to look like a skull',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; darkvision',
		movement: '6, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 40,
		initiative: 4,
		ac: 17,
		fortitude: 16,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '64aa53a5-d776-4750-8609-53dfc1f638cd',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d4 + 3 damage. On a critical hit, the Skullborn zombie can make a Skullborn zombie grab as a free action.',
				damage: '2d4 + 3 damage',
				category: 1
			},
			{
				id: '12804f9a-9ab4-4e1c-8afa-a359ea6c7b25',
				name: 'Skullborn Zombie Grab',
				action: {
					action: 1,
					trigger: 'requires a free claw',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d4 + 3 damage, and the target is grabbed. Any escape attempt must target the Skullborn zombie’s Fortitude, rather than its Reflex.',
				damage: '1d4 + 3 damage',
				category: 5
			},
			{
				id: '3f55baa1-c2ce-460a-bb12-3d5ff4e9ed96',
				name: 'Zombie Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Targets an immobilized, stunned, or unconscious creature; 2d6 + 3 damage, and the target is dazed (save ends).',
				damage: '2d6 + 3 damage',
				category: 1
			},
			{
				id: '04ecc96a-1295-45b1-9013-b86ae3b4a060',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to a Skullborn zombie drops it to 0 hit points instantly',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '9eb3ea91-8b94-4506-b851-8f24065c4c0f',
		name: 'Skullborn Zombie Husks',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '6, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 1,
		initiative: 4,
		ac: 21,
		fortitude: 19,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6428038d-b8a7-4752-881b-72e0974fbc90',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '7 damage, and the target is marked until the end of the Skullborn zombie husk’s next turn.',
				damage: '7 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '643431cd-97cd-4b66-b01c-994ca49f1ae9',
		name: 'Sodden Corruption Corpse',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '4',
		alignment: 'Chaotic Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 48,
		initiative: 3,
		ac: 17,
		fortitude: 17,
		reflex: 15,
		will: 14,
		regeneration: {
			value: 5,
			details: 'if the sodden corruption corpse takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '1d8d3d46-bd09-41f0-98b6-383fd92855f6',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: 'd648f545-21f2-41e8-bb26-95d4fb07341d',
				name: 'Corruption of Flesh',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '2d6 + 3 necrotic damage, and the target is weakened until the end of the sodden corruption corpse’s next turn.',
				damage: '2d6 + 3 necrotic damage',
				category: 1
			},
			{
				id: '4c5b246e-92c8-4994-8cfc-201f695fd413',
				name: 'Death Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the sodden corruption corpse drops to 0 hit points',
				range: 'Close burst 2',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '2d6 + 5 Necrotic damage.',
				damage: '2d6 + 5 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '6dd2a592-eca3-478b-8ff5-c435fac49422',
		name: 'Tikulti',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'doppelganger',
		level: 6,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic, Goblin',
		skills: 'Acrobatics +13, Bluff +13, Insight +11, Stealth +13, Thievery +13',
		equipment: 'rapier; shuriken',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 142,
		initiative: 10,
		ac: 22,
		fortitude: 18,
		reflex: 22,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd58dbed5-c053-4228-a236-806f2890b63f',
				name: 'Rapier',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8 + 7 damage.',
				damage: '1d8 + 7 damage',
				category: 1
			},
			{
				id: '3d7ad63a-557c-468c-a131-04a5b5f75c88',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 6/12',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6 + 6 damage.',
				damage: '1d6 + 6 damage',
				category: 1
			},
			{
				id: '0b540588-27bc-4699-939e-bdb81ae69b14',
				name: 'Riposte Strike',
				action: {
					action: 1,
					trigger: 'requires a rapier',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8 + 7 damage. If the target attacks Tikulti before the start of its next turn, Tikulti can make a rapier attack against that target as an immediate interrupt.',
				damage: '1d8 + 7 damage',
				category: 5
			},
			{
				id: 'c6bf10a6-eb14-4602-ae48-dbc3529706c4',
				name: 'Sharp Feint',
				action: {
					action: 3,
					trigger: 'requires a rapier',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d8 damage, and the target grants combat advantage to Tikulti until the end of his next turn.',
				damage: '1d8 damage',
				category: 5
			},
			{
				id: '387baa96-420c-4b75-bbca-49ed23d64857',
				name: 'Blinding Barrage',
				action: {
					action: 1,
					trigger: 'requires a shuriken for each target',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'targets enemies Tikulti can see; 1d6 + 6 damage, and the target is blinded until the end of Tikulti’s next turn. Miss: Half damage.',
				damage: '1d6 + 6 damage',
				category: 5
			},
			{
				id: '321b9ec1-0a20-4a08-b12f-2d50a81546e5',
				name: 'Change Shape',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Tikulti can alter his physical form to take on the appearance of any Medium humanoid, including a unique individual',
				damage: '',
				category: 3
			},
			{
				id: 'ad1685e6-8b62-4622-839d-eea9d7170626',
				name: 'Sneak Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Once per round, Tikulti deals 2d8 extra damage against a target that grants combat advantage to him.',
				damage: 'tikulti deals 2d8 extra damage against a target that grants combat advantage to him',
				category: 0
			},
			{
				id: '55e148d1-eecc-4932-a0e7-1333de1afab8',
				name: 'Tumble',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Tikulti shifts 3 squares.',
				damage: 'Tikulti shifts 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (doppelganger)'
	},
	{
		id: 'a0db3512-9709-4f9a-8d7f-50a36f1c3294',
		name: 'Turakbar Gnoll Hunter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +8, Endurance +8, Intimidate +5, Stealth +9',
		equipment: 'battleaxe; leather armor; longbow',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 38,
		initiative: 4,
		ac: 17,
		fortitude: 15,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '28e4349b-4e96-4ebd-be86-5ef2803d60e9',
				name: 'Battleaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d10 + 3 damage, or 1d10 + 5 damage while bloodied.',
				damage: '1d10 + 3 damage',
				category: 1
			},
			{
				id: 'dfc9f56f-327c-45fa-b058-e296fde6ed57',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage, or 1d10 + 6 damage while bloodied.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: 'ddd5e1aa-feb5-4409-825f-9875f03c2aa4',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The Turakbar gnoll hunter deals 5 extra damage on melee and ranged attacks against an enemy that has two or more of the gnoll’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd853cc5d-8bfa-4ea7-8370-dbf67acd9814',
		name: 'Turakbar Orc Marauder',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Endurance +9, Intimidate +5, Stealth +8',
		equipment: 'greataxe; handaxe; leather armor',
		category: 'Orc',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 48,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62bc8684-8e96-4c05-89ff-b63aaf396653',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12 + 3 damage (crit 1d12 + 15).',
				damage: '1d12 + 3 damage (crit 1d12 + 15)',
				category: 1
			},
			{
				id: '0149671a-05bd-4abc-ab37-9a7c678df3ec',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6 + 3 damage.',
				damage: '1d6 + 3 damage',
				category: 1
			},
			{
				id: 'c49bdf91-7fb1-4391-866b-7e2771153e04',
				name: 'Marauder’s Onsluaght',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires a greataxe',
				range: '1d12 + 3 damage (crit 1d12 + 15), and the target is pushed 1 square (2 squares on a charge). Special: When charging, the Turakbar orc marauder can use this power in place of a melee basic attack.',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'b99bd859-2e54-4a67-9718-5043f36a7fb5',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: 'usable only while bloodied',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12 + 3 damage (crit 1d12 + 15), and the Turakbar orc marauder regains 12 hit points.',
				damage: '1d12 + 3 damage (crit 1d12 + 15)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '35307cca-1833-4531-82c7-095c92f87bf5',
		name: 'Weak Kruthik Zombies',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'reptile, undead',
		level: 4,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +2; darkvision, tremorsense 5',
		movement: '6, climb 2',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 4,
		ac: 30,
		fortitude: 28,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '706a051c-ac73-4ea1-9d98-ce438b963071',
				name: 'Gnashing Horde',
				keywords: '',
				details: 'aura 1; when any enemy ends its turn within the aura, it takes 2 damage.'
			}
		],
		powers: [
			{
				id: 'e3bd6b7d-ff0c-40ef-921d-0410f0c0b382',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Minion',
		phenotype: 'Small natural animate (reptile, undead)'
	},
	{
		id: '4115f6a0-2455-42e0-8d70-521c6ce95327',
		name: 'Yeraa',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'hobgoblin',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech, Goblin',
		skills: 'Arcana +10, Diplomacy +11, History +12',
		equipment: 'chainmail',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 56,
		initiative: 2,
		ac: 18,
		fortitude: 16,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0eb98839-23c2-4fff-8551-23a1072f4cfc',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage (crit 2d6 + 14 thunder damage).',
				damage: '1d10 + 4 damage (crit 2d6 + 14 thunder damage)',
				category: 1
			},
			{
				id: '796a3ecb-78bd-4ef6-8c03-31b8707fd0c7',
				name: 'War Chanter’s Strike',
				action: {
					action: 1,
					trigger: 'requires a resounding bastard sword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage (crit 2d6 + 14 thunder damage), and any ally who hits the target before the end of Yeraa’s next turn gains 4 temporary hit points.',
				damage: '1d10 + 4 damage (crit 2d6 + 14 thunder damage)',
				category: 5
			},
			{
				id: '6e467e5c-1d12-411c-b200-f6b2ffc3ebe0',
				name: 'Dire Radiance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Radiant',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '1d6 + 3 radiant damage. If the target moves nearer to Yeraa on its next turn, it takes an additional 1d6 + 3 radiant damage.',
				damage: '1d6 + 3 radiant damage',
				category: 1
			},
			{
				id: 'c19e3188-a645-41e7-957d-a0edc6498251',
				name: 'Designating Hum',
				action: {
					action: 1,
					trigger: 'requires a resounding bastard sword',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d10 + 4 damage (crit 2d6 + 24 thunder damage), and allies gain a +2 bonus to attack rolls against the target until the end of Yeraa’s next turn.',
				damage: '2d10 + 4 damage (crit 2d6 + 24 thunder damage)',
				category: 5
			},
			{
				id: '0d312f18-4f20-473b-a06c-b88964bba922',
				name: 'Raise Spirits',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'targets Yeraa or one of her allies; the target regains 12 hit points and slides 1 square as a free action; Burst 5; .',
				damage: 'the target regains 12 hit points and slides 1 square as a free action',
				category: 3
			},
			{
				id: '1d9568a1-b614-4650-b37b-66c11ffe0ebc',
				name: 'Bard’s Valor',
				action: null,
				keywords: '',
				condition: 'when an ally within 10 squares bloodies an enemy or reduces an enemy to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering ally gains 6 temporary hit points',
				damage: 'The triggering ally gains 6 temporary hit points',
				category: 0
			},
			{
				id: 'fe2b2d8e-023d-4d8b-abbf-ffc246d600db',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when yeraa suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Yeraa makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Medium natural humanoid (hobgoblin)'
	},
	{
		id: '7fe2d486-7119-46e8-96cd-e009977d1a3c',
		name: 'Young Kruthik Hive Lord',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'reptile',
		level: 4,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; low-light vision, tremorsense 10',
		movement: '6, burrow 3 (tunneling), climb 6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 110,
		initiative: 5,
		ac: 20,
		fortitude: 20,
		reflex: 19,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '295bcf1c-32d1-47e6-a537-726f1f6f8a77',
				name: 'Hive Frenzy',
				keywords: '',
				details: 'aura 2; allied kruthiks within the aura deal double damage with basic attacks.'
			}
		],
		powers: [
			{
				id: '384e36ea-f751-4806-bdf5-39f7fbf071a8',
				name: 'Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: '7835cc8e-0ef3-42c9-81cd-56dc0b1a4274',
				name: 'Acid Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d6 + 4 acid damage, the target is weakened and takes ongoing 5 acid damage (save ends both).',
				damage: '1d6 + 4 acid damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Controller (L)',
		phenotype: 'Medium natural beast (reptile)'
	},
	{
		id: '2ba15ee2-09ff-462d-aab1-dc09ce893224',
		name: 'Young Turakbar Minotaur Raider',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Common, Goblin',
		skills: 'Endurance +11, Intimidate +9, Nature +10',
		equipment: 'battleaxe; heavy shield; scale armor',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 72,
		initiative: 7,
		ac: 22,
		fortitude: 20,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e7c2e425-5000-407f-bd8e-5f1f3bc58346',
				name: 'Battleaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d12 + 4 damage, and the target is marked until the end of the young Turakbar minotaur raider’s next turn.',
				damage: '1d12 + 4 damage',
				category: 1
			},
			{
				id: 'ee7061fa-dbb5-48b1-8f75-7bce8b071ef3',
				name: 'Goring Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The young Turakbar minotaur raider charges and makes the following attack in place of a melee basic attack',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d6 + 5 damage, and the target is knocked prone.',
				damage: '1d6 + 5 damage',
				category: 1
			},
			{
				id: '272ad7af-4178-4a32-9b09-fdc064ad9be1',
				name: 'Shield Smash',
				action: {
					action: 5,
					trigger: 'when an adjacent target marked by the young turakbar minotaur raider shifts or attacks a target other than the minotaur; requires a shield',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d6 + 4 damage, and the target is knocked prone.',
				damage: '1d6 + 4 damage',
				category: 5
			},
			{
				id: 'a08f0fd9-bbdc-4c8e-9b0b-533e68ac97c8',
				name: 'Turakbar Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The young Turakbar minotaur raider makes a goring charge, followed by a melee basic attack against the same target',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: '6a3f9d75-4048-4771-ad47-40c69dc20179',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when the raider drops to 0 hit points',
				range: 'The young Turakbar minotaur raider makes a melee basic attack',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ac23e08b-b56c-4a20-9f17-bd160eaf1a04',
		name: 'Astral Giant Blazing Javelineer',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'giant',
		level: 19,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +18',
		movement: '8 see also astral leap',
		alignment: 'Unaligned',
		languages: 'Giant, Supernal',
		skills: '',
		equipment: 'javelin',
		category: 'Giant',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 144,
		initiative: 15,
		ac: 31,
		fortitude: 29,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f55750a3-edcb-4cb8-a482-15425f57111d',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8 + 4 damage + 2d8 radiant damage.',
				damage: '1d8 + 4 damage + 2d8 radiant damage',
				category: 1
			},
			{
				id: '3d150599-88ae-4267-9478-dd09c4d14e1f',
				name: 'Blazing Throw',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d8 + 5 damage, and the target grants combat advantage and takes ongoing 5 radiant damage (save ends both).',
				damage: '2d8 + 5 damage',
				category: 1
			},
			{
				id: '3413b8af-cdf8-48e5-aaed-0ecb77608335',
				name: 'Astral Winds',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '3d8 + 4 radiant damage, and the astral giant blazing javelineer pushes the target 3 squares.',
				damage: '3d8 + 4 radiant damage',
				category: 1
			},
			{
				id: 'a6faaec1-c991-44cb-a502-1982cc8e6a58',
				name: 'Brilliant Lance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8 + 9 damage, and the target is blinded until the end of the astral giant blazing javelineer’s next turn.',
				damage: '2d8 + 9 damage',
				category: 1
			},
			{
				id: 'aca3fe97-fad8-4b6f-900c-73289000419c',
				name: 'Astral Resonance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as an astral giant has an unbloodied astral giant ally within 10 squares of it, it gains a +2 bonus to attack rolls.',
				damage: 'As long as an astral giant has an unbloodied astral giant ally within 10 squares of it',
				category: 0
			},
			{
				id: '9dcc135b-5393-40ff-b2aa-2fd53ea20a6b',
				name: 'Astral Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: 'only within the astral sea',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant blazing javelineer flies 10 squares.',
				damage: 'The astral giant blazing javelineer flies 10 squares',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Artillery (L)',
		phenotype: 'Large immortal humanoid (giant)'
	},
	{
		id: '7bd07d04-d40d-48aa-a467-1e9d45b75d08',
		name: 'Banesworn Iron Bulwark',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 19,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +21, Intimidate +18, Religion +18',
		equipment: 'heavy shield; longsword; plate armor',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 184,
		initiative: 16,
		ac: 34,
		fortitude: 32,
		reflex: 30,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: '28426191-0181-4d65-aa71-a997af6314c8',
				name: 'Ubiquitous Threat',
				keywords: '',
				details: 'aura 2; each enemy that starts its turn within the aura is marked by the Banesworn iron bulwark until the start of the enemy’s next turn.'
			}
		],
		powers: [
			{
				id: 'e79e02b8-31f4-46d1-961e-76dd8c769290',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d8+8 damage.',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: '42b94e28-7a20-41e2-b59a-3e8a16e6182d',
				name: 'Shield Shove',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires a shield',
				range: '',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'Targets a creature marked by the Banesworn iron bulwark; the iron bulwark pushes the target 1 square and shifts into the space the target left. On a critical hit, the target is also knocked prone.',
				damage: 'the iron bulwark pushes the target 1 square and shifts into the space the target left',
				category: 3
			},
			{
				id: '9b0df7ec-7a7d-4aa2-8aa5-1b2669556bed',
				name: 'Bane’s Retribution',
				action: {
					action: 4,
					trigger: 'when a creature marked by the banesworn iron bulwark makes an attack that does not include the iron bulwark',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets the triggering creature; the target takes 10 damage for each creature it targeted with the triggering attack.',
				damage: 'the target takes 10 damage for each creature it targeted with the triggering attack',
				category: 5
			},
			{
				id: '99eaabb6-8916-49b4-9c06-212cfe64320e',
				name: 'Brutal Intercept',
				action: {
					action: 4,
					trigger: 'when the banesworn iron bulwark hits with an opportunity attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target is knocked prone.',
				damage: '',
				category: 5
			},
			{
				id: 'bb8ad636-932b-4da7-a79f-ae7254fc33b9',
				name: 'Impassable Bulwark',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a Banesworn iron bulwark makes an opportunity attack, it rolls twice and uses the higher of the two results.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 19 Soldier',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '264d2103-5642-43e9-a42b-2a1a4b8142e6',
		name: 'Banesworn War Priest',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Religion +17',
		equipment: 'mace; plate armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 141,
		initiative: 10,
		ac: 28,
		fortitude: 27,
		reflex: 25,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5174c4a2-d318-4c2e-9b9a-f0c194492cf4',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+3 damage.',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '3ec82728-3a60-4904-a640-bf635ac57905',
				name: 'Lance of Fear',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Necrotic, Radiant',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '2d8+6 necrotic and radiant damage, and the target is slowed (save ends).',
				damage: '2d8+6 necrotic and radiant damage',
				category: 1
			},
			{
				id: '82858eba-d8fb-4cec-b87d-c404120d5c3b',
				name: 'Imperator’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+3 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '2a45eb36-c147-4da5-988b-2be233e8a8b8',
				name: 'Curse of Doom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Implement, Fear',
				condition: '',
				range: 'Area burst 1 within 10 targets enemies',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '2d8+6 radiant damage. Effect: The target takes a -2 penalty to all defenses until the end of its next turn.',
				damage: '2d8+6 radiant damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Controller (L)',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '7b54f6aa-433e-419f-b380-278ec006a95a',
		name: 'Banesworn Warrior',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +17, Religion +12',
		equipment: 'scale armor; shortbow; spear',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 133,
		initiative: 11,
		ac: 29,
		fortitude: 26,
		reflex: 24,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eec1c4d8-d775-4910-b6f1-6e2049ff02c2',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+8 damage. Effect: The target is marked until the end of the Banesworn warrior’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '55d06fbf-5189-4e74-aaf4-5d497ceb0c77',
				name: 'Shortbow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage. Effect: The target is marked until the end of the Banesworn warrior’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: 'efeea8c1-99d5-4c38-aace-9e4351c40f86',
				name: 'Spearmaster’s Stand',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: 'requires a spear',
				range: '',
				attack: null,
				description: '',
				details: 'The Banesworn warrior gains threatening reach, allowing it to make opportunity attacks against all enemies within its reach (2 squares). This effect ends when the Banesworn warrior moves.',
				damage: '',
				category: 3
			},
			{
				id: 'e47b2388-e385-4ad6-aac1-c69361c88bb8',
				name: 'Brutal Intercept',
				action: {
					action: 4,
					trigger: 'when the banesworn warrior hits with an opportunity attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target is knocked prone.',
				damage: '',
				category: 5
			},
			{
				id: '5ab03a1f-fa6b-4de9-9a69-550856575721',
				name: 'Chosen Foe',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any target marked by a Banesworn warrior also grants combat advantage to it.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '68383ec8-0f29-453f-af4a-039fdab9bd9f',
		name: 'Battlesworn Ogre Mauler',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'javelin; maul',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 275,
		initiative: 17,
		ac: 36,
		fortitude: 36,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '572e8618-c277-4ce8-aef3-b1b2ce6258ff',
				name: 'Maul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+8 damage.',
				damage: '4d8+8 damage',
				category: 1
			},
			{
				id: '4373ad84-7f50-4071-80fa-1f8c9818bff2',
				name: 'Javelin',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d8+8 damage.',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: '2da03c07-080d-4822-8f00-88d26b329d4f',
				name: 'Brutal Hammer',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+8 damage, and the target is stunned until the end of its next turn. Aftereffect: The target is dazed (save ends).',
				damage: '2d8+8 damage',
				category: 3
			},
			{
				id: 'cbd27730-2801-40ea-b5e1-46b18de447fd',
				name: 'Roar of Destruction',
				action: {
					action: 7,
					trigger: 'when the battlesworn ogre mauler hits with a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: '2d6+8 thunder damage, and the target is knocked prone and pushed 3 squares.',
				damage: '2d6+8 thunder damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Brute',
		phenotype: 'Large immortal humanoid'
	},
	{
		id: '72b71ebe-4d60-43b7-a627-6b221dbfe760',
		name: 'Battlesworn Orc Bloodsage',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 26,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'hide armor; longspear',
		category: 'Orc',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 1,
		initiative: 21,
		ac: 38,
		fortitude: 37,
		reflex: 38,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '17a0aa7f-a736-4db3-9072-6dd50e71f63f',
				name: 'Longspear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 14 damage.',
				damage: '14 damage',
				category: 1
			},
			{
				id: 'ece0f6d0-67c9-4cd2-a832-9824555af846',
				name: 'Blood Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning, Necrotic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '14 lightning damage, and any enemy adjacent to the target takes 7 necrotic damage, or 14 necrotic damage if the target is bloodied.',
				damage: '14 lightning damage',
				category: 1
			},
			{
				id: '8705577d-c96b-48bc-af6b-59425f6217ef',
				name: 'Blood Energy Burst',
				action: null,
				keywords: 'Lightning, Necrotic',
				condition: 'when the battlesworn orc bloodsage drops to 0 hit points',
				range: '14 lightning and necrotic damage. Effect: Each ally within the burst can make a melee basic attack as a free action.',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: 'targets enemies',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 26 Minion',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'c1ed8dab-7b60-4e94-8c5b-2d64c5636ad8',
		name: 'Battlesworn Orc Legionnaire',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'chainmail; greataxe; handaxe',
		category: 'Orc',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 19,
		ac: 39,
		fortitude: 36,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '245b108d-e018-458f-8077-8a13c5642112',
				name: 'Greataxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '13 damage.',
				damage: '13 damage',
				category: 1
			},
			{
				id: '0910c3ea-5322-420c-805c-e39db46289c4',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 5/10',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '13 damage.',
				damage: '13 damage',
				category: 1
			},
			{
				id: '8e4f596c-9224-48e2-b69b-71c4af7b375b',
				name: 'Mocking Fury',
				action: {
					action: 5,
					trigger: 'when an enemy misses the battlesworn orc legionnaire with an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The battlesworn orc legionnaire makes a basic attack or a charge attack against the triggering enemy.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '06ba092d-f51c-4e31-a325-9886580fe301',
		name: 'Battlesworn War Troll Defender',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: '',
		level: 26,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +24',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Common, Giant',
		skills: 'Athletics +28, Endurance +26',
		equipment: 'flail; heavy shield; plate armor',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 242,
		initiative: 21,
		ac: 42,
		fortitude: 40,
		reflex: 36,
		will: 36,
		regeneration: {
			value: 20,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '60c7c03d-0107-4d6f-868f-be248f2473e7',
				name: 'Flail',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+10 damage, and the battlesworn war troll defender slides the target 1 square.',
				damage: '3d10+10 damage',
				category: 1
			},
			{
				id: 'ba416099-cdc0-4af7-b51c-1c7252c73055',
				name: 'Not So Fast',
				action: {
					action: 5,
					trigger: 'when an enemy within reach shifts away from the battlesworn war troll defender',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 3d10+10 damage, and the target is knocked prone and immobilized until the end of its next turn.',
				damage: '3d10+10 damage',
				category: 5
			},
			{
				id: '28074dbc-c7e6-4d3c-bd57-6cd8a784293b',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A battlesworn war troll defender can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: 'ad656144-2f47-4eb4-a8ba-526fca3922ba',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a battlesworn war troll defender is reduced to 0 hit points by an attack that doesn’t deal acid or fire damage, it falls prone and remains at 0 hit points until the start of its next turn, when it regains 35 hit points. If an attack deals acid or fire damage to the defender while it’s at 0 hit points, it is destroyed.',
				damage: 'if a battlesworn war troll defender is reduced to 0 hit points by an attack that doesn’t deal acid or fire damage',
				category: 0
			},
			{
				id: '15613c46-502b-43ea-95c1-a2a040e419d0',
				name: 'Vicious Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A battlesworn war troll defender deals 2d10 extra damage against targets that are marking it.',
				damage: 'a battlesworn war troll defender deals 2d10 extra damage against targets that are marking it',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'acid or fire (if the battlesworn war troll defender takes acid or fire damage, its regeneration doesn’t function until the end of its next turn)',
		immune: '',
		tactics: '',

		info: 'Level 26 Soldier',
		phenotype: 'Large immortal humanoid'
	},
	{
		id: '94cc7dc0-cf08-4666-b4ed-f7c26af6a7fd',
		name: 'Blackfire Burning Devil',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 22,
		ac: 39,
		fortitude: 36,
		reflex: 38,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '18883472-197b-485c-a0f8-99f0c32f0fff',
				name: 'Burning Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '13 necrotic damage.',
				damage: '13 necrotic damage',
				category: 1
			},
			{
				id: 'fa2be812-f1f9-44b3-bf10-3b7aa149ee73',
				name: 'Blackflame Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '13 necrotic damage.',
				damage: '13 necrotic damage',
				category: 1
			},
			{
				id: '46823e09-65ff-4f0a-946b-587f1993fad8',
				name: 'Blackfire Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the blackfire burning devil drops to 0 hit points',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'no attack roll; the target takes ongoing 10 necrotic damage and is weakened (save ends both).',
				damage: 'the target takes ongoing 10 necrotic damage and is weakened (save ends both)',
				category: 0
			},
			{
				id: '8e126c66-ce47-4b08-840a-d87df79ee713',
				name: 'Deadly Alacrity',
				action: {
					action: 7,
					trigger: 'when a blackfire burning devil is missed with a fire or necrotic attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blackfire burning devil teleports 8 squares. At the end of the movement, the burning devil makes a blackflame bolt attack against the creature that made the triggering attack.',
				damage: 'The blackfire burning devil teleports 8 squares',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Minion',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: '8848f470-cd57-407b-9238-3faecd09bbb4',
		name: 'Burning Devil',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 4,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 6,
		ac: 18,
		fortitude: 16,
		reflex: 18,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd2049ad2-c0f2-49c1-8bda-ffe5632f358d',
				name: 'Burning Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '5 fire damage.',
				damage: '5 fire damage',
				category: 1
			},
			{
				id: 'a8099663-85ad-4bb1-a6dc-4c5bdc66d7bb',
				name: 'Fire Burst',
				action: null,
				keywords: 'Fire',
				condition: 'when the burning devil drops to 0 hit points',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'no attack roll; 5 fire damage.',
				damage: '5 fire damage',
				category: 0
			},
			{
				id: '93e8ebd0-c548-408f-9afd-2077a4b1cd0e',
				name: 'Fire Alacrity',
				action: {
					action: 7,
					trigger: 'when the burning devil is missed by a fire attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The burning devil teleports 7 squares.',
				damage: 'The burning devil teleports 7 squares',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Minion',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: '15c49a8c-e71a-4687-8ac5-ebe8fa80b7da',
		name: 'Ch’r’ai Inquisitor',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +14, Insight +15',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 114,
		initiative: 17,
		ac: 28,
		fortitude: 26,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '93ec874c-217e-4d85-bca5-e4c0d8ef4c32',
				name: 'Silver Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage plus 1d6 psychic damage.',
				damage: '1d8+4 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: '38691a93-c440-444e-91ed-2ccd5000e6c5',
				name: 'Inquisitor’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: 'usable only against a target not affected by inquisitor’s strike',
				range: '',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '1d8+4 damage plus 1d6 psychic damage, and the target is dominated until the end of the ch’r’ai inquisitor’s next turn.',
				damage: '1d8+4 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: '675f05ff-0028-4696-a874-f9dcc95795ba',
				name: 'Bend the Will',
				action: {
					action: 7,
					trigger: 'when the ch’r’ai inquisitor is hit with a melee or ranged attack while dominating a creature',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The creature dominated by the ch’r’ai inquisitor uses an at-will attack power of the ch’r’ai inquisitor’s choice against the enemy making the triggering attack as a free action.',
				damage: '',
				category: 5
			},
			{
				id: 'e252d010-cf02-4bdd-98ee-48844be52ccf',
				name: 'Keep Enemies Close',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A ch’r’ai inquisitor gains a +4 bonus to all defenses while a creature it’s dominating is within 5 squares of it.',
				damage: 'A ch’r’ai inquisitor gains a +4 bonus to all defenses while a creature it’s dominating is within 5 squares of it',
				category: 0
			},
			{
				id: '35d5b806-9921-46ae-b666-6f84f3261b6e',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ch’r’ai inquisitor or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The ch’r’ai inquisitor or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Lurker',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'e361b28d-e706-42de-aaaa-064a8f1bbc8f',
		name: 'Durud Fragment Mage',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 20,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; all-around vision',
		movement: '8, fly 6, teleport 3',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: '',
		equipment: 'dagger',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 376,
		initiative: 15,
		ac: 33,
		fortitude: 30,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c3e0b701-a6be-41b8-bf3e-e616c935f045',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d4+8 damage.',
				damage: '2d4+8 damage',
				category: 1
			},
			{
				id: '66409d0c-889a-403f-802d-fb6ac6342ed0',
				name: 'Fragment Spike',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: 'targets one or two creatures; 3d8+8 force damage, and the target is knocked prone.',
				damage: '3d8+8 force damage',
				category: 1
			},
			{
				id: 'c550a80c-6653-4311-a6f9-0c6e503518a5',
				name: 'Vortex of Lakal',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Force, Implement, Radiant, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 26,
					defence: 1
				},
				description: '',
				details: '2d10+7 radiant damage, and the target is pulled 2 squares toward the origin square of the burst and slowed (save ends). The burst creates a zone that lasts until the end of the durud fragment mage’s next turn. Any creature that ends its turn within the zone takes 20 force damage.',
				damage: '2d10+7 radiant damage',
				category: 1
			},
			{
				id: '9f06f048-bf0a-4bc4-913d-c902e6f8bee6',
				name: 'Implacable Determination',
				action: {
					action: 7,
					trigger: 'when an enemy within 5 squares of the durud fragment mage scores a critical hit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud fragment mage can make a basic attack, shift 1 square, or move its speed.',
				damage: 'shift 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Elite Controller',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'cbd5dd47-007f-41e5-b812-85a5f261024f',
		name: 'Durud Healer',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 21,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +20; all-around vision',
		movement: '6, fly 3 (while within the Astral Sea)',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: 'Heal +20, Insight +20',
		equipment: 'chainmail',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 196,
		initiative: 16,
		ac: 35,
		fortitude: 33,
		reflex: 33,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44188e7b-e541-48e5-b0ca-0fdc5b99d953',
				name: 'Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: 'a394798f-f3c4-4f7d-990b-d39f94e0c9cd',
				name: 'Lakal’s Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Radiant',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '3d6+7 radiant damage, and the target grants combat advantage until the end of the durud healer’s next turn. The first ally of the durud healer to hit the target while it is granting combat advantage in this way regains 20 hit points.',
				damage: '3d6+7 radiant damage',
				category: 1
			},
			{
				id: 'de9ec10f-4071-4cb1-a934-174526cf7f92',
				name: 'Binding Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: null,
				description: '',
				details: 'targets enemies; 2d10+8 radiant damage, and the target is immobilized until the end of the durud healer’s next turn.',
				damage: '2d10+8 radiant damage',
				category: 1
			},
			{
				id: 'b2850bf4-ba12-4909-ad59-a392c2c1ff43',
				name: 'Implacable Determination',
				action: {
					action: 7,
					trigger: 'when an enemy within 5 squares of the durud healer scores a critical hit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud healer can make a basic attack, shift 1 square, or move its speed.',
				damage: 'shift 1 square',
				category: 5
			},
			{
				id: 'bc5552e5-7f9e-4155-8b91-44a6668c7291',
				name: 'Surge Siphon',
				action: {
					action: 5,
					trigger: 'when an enemy within 3 squares of the durud healer uses or is the target of a healing power',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud healer shifts 3 squares. If it ends this movement adjacent to the triggering enemy, the healing power grants only half its normal hit points, and each of the durud healer’s allies within 5 squares of it regains 10 hit points.',
				damage: 'The durud healer shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Controller (L)',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '10094f6b-c532-4a77-a161-0cb2faba9275',
		name: 'Durud Slayer',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; all-around vision',
		movement: '8, fly 3 (while within the Astral Sea)',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: '',
		equipment: 'dagger; scale armor',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 165,
		initiative: 23,
		ac: 37,
		fortitude: 35,
		reflex: 36,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '021380fb-b12e-4dec-9ac5-b61795635749',
				name: 'Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '4d4+10 damage.',
				damage: '4d4+10 damage',
				category: 1
			},
			{
				id: '87a73de7-08c5-4246-99e3-065967afaae8',
				name: 'Radiant Garrote',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '3d6+8 radiant damage, and the target is grabbed. The durud slayer can have only one target grabbed at a time. Sustain Minor: The grabbed target takes 4d4 + 10 damage.',
				damage: '3d6+8 radiant damage',
				category: 1
			},
			{
				id: '583bbf00-9fea-4641-8b66-1ad62ec25d4a',
				name: 'Implacable Determination',
				action: {
					action: 7,
					trigger: 'when an enemy within 5 squares of the durud slayer scores a critical hit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud slayer can make a basic attack, shift 1 square, or move its speed.',
				damage: 'shift 1 square',
				category: 5
			},
			{
				id: 'eda84ea0-ce2a-4e2a-8e99-c239fd950920',
				name: 'Retreating Step',
				action: {
					action: 4,
					trigger: 'when an enemy grabbed by the durud slayer succeeds on its escape check',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud slayer teleports 8 squares.',
				damage: 'The durud slayer teleports 8 squares',
				category: 5
			},
			{
				id: 'b0ca4661-7910-480d-94bf-c7e281aa9b8c',
				name: 'Slayer’s Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The durud slayer and any creature it has grabbed teleport 8 squares. If the durud slayer has a creature grabbed, that creature must end its teleport adjacent to the slayer.',
				damage: 'The durud slayer and any creature it has grabbed teleport 8 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Lurker',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '08f00ee5-7097-4d20-b571-c9119898ac33',
		name: 'Duthka’gith',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 19,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +14, Intimidate +20',
		equipment: 'scale armor',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 222,
		initiative: 14,
		ac: 31,
		fortitude: 31,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e528f037-ed70-44ec-aabd-bd37297e89ff',
				name: 'Silver Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage plus 1d10 psychic damage, and the duthka’gith slides the target 1 square.',
				damage: '1d10+6 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: '2be991d6-638c-4e3b-8ce0-8297ebd54bbc',
				name: 'Battering Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '3d10+6 damage, the duthka’gith pushes the target 3 squares, and the target is immobilized until the end of the duthka’gith’s next turn.',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: '218308e2-5757-47b9-9607-604f8ddec973',
				name: 'Buckle the Knees',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '1d10+5 psychic damage, and the target is immobilized until the end of the duthka’gith’s next turn.',
				damage: '1d10+5 psychic damage',
				category: 3
			},
			{
				id: '7f64ef5a-6e28-41f8-86c8-2e594f122127',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d12+5 fire damage. Miss: Half damage.',
				damage: '2d12+5 fire damage',
				category: 1
			},
			{
				id: '4cd3e3aa-79ae-49d1-8c86-9b50670a652e',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Breath weapon recharges, and the duthka’gith uses it.',
				damage: '',
				category: 5
			},
			{
				id: 'b27b0cb8-a981-414e-933c-4e052fdf73de',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The duthka’gith or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The duthka’gith or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'dec766e6-a886-40ac-aed8-e1efa603c1b3',
		name: 'Githyanki Blackweave',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +17, Religion +17',
		equipment: 'leather armor; rod implement',
		category: 'Githyanki',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 136,
		initiative: 9,
		ac: 28,
		fortitude: 24,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f73f8f07-814f-4da5-8346-a132047bd760',
				name: 'Silver Rapier',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8 +2 damage plus 1d8 psychic damage.',
				damage: '2d8 +2 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '88f8dae2-1849-43b1-a618-93da7b0352aa',
				name: 'Eldritch Blast',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d10 +4 damage, and the target is slowed until the end of the githyanki blackweave’s next turn.',
				damage: '2d10 +4 damage',
				category: 1
			},
			{
				id: 'e373f9b4-276e-4685-b17b-cfb002a1b3b9',
				name: 'Wracking Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '2d6 + 4 psychic damage, and until the end of the githyanki blackweave’s next turn whenever the target damages the githyanki blackweave, the target takes 2d6 psychic damage.',
				damage: '2d6 + 4 psychic damage',
				category: 1
			},
			{
				id: '2c35eba9-9e06-40bf-be7d-a4685bef36c6',
				name: 'Psychic Sinkhole',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Psychic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d6 + 4 psychic damage. Effect: The burst creates a zone of energy that lasts until the end of the githyanki blackweave’s next turn. Any creature that starts its turn within the zone loses its move action during that turn.',
				damage: '2d6 + 4 psychic damage',
				category: 1
			},
			{
				id: '37555740-fd89-4e22-a6b9-b972b1b76993',
				name: 'Pact of the Lich-Queen',
				action: {
					action: 7,
					trigger: 'when the githyanki blackweave damages a bloodied enemy',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering enemy loses a healing surge and cannot spend healing surges (save ends).',
				damage: '',
				category: 5
			},
			{
				id: '4603e906-cc48-4319-8249-feebaf7c968a',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki blackweave or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The githyanki blackweave or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4e975d87-df79-40da-8664-ce0e5cc4f3b4',
		name: 'Githyanki Far Wanderer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +17, Athletics +13, Nature +13',
		equipment: 'leather armor',
		category: 'Githyanki',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 131,
		initiative: 14,
		ac: 27,
		fortitude: 25,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4fbb0914-0b69-481a-9fac-60f1534282c8',
				name: 'Silver Rapier',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d8 psychic damage.',
				damage: '1d8+5 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '3c710b7c-3788-4bde-8e99-2b6dc7ba791f',
				name: 'Positioning Lunge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d8 psychic damage, and the githyanki far wanderer shifts 2 squares.',
				damage: '1d8+5 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: 'c2cea658-253d-4075-9de5-d63d0a345f99',
				name: 'Silver Step',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki far wanderer makes three silver rapier attacks, each against a different target. The githyanki far wanderer can teleport 5 squares before each attack.',
				damage: 'The githyanki far wanderer can teleport 5 squares before each attack',
				category: 1
			},
			{
				id: '5bfb439b-8c1a-46bf-b97c-2d08b49e94dd',
				name: 'Liberating Strike',
				action: {
					action: 4,
					trigger: 'when the githyanki far wanderer is grabbed',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'or restrained',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Targets the creature that grabbed, restrained, or immobilized the githyanki far wanderer; 2d8 + 5 damage, and the githyanki far wanderer ends the grabbed, immobilized, or restrained condition and shifts 3 squares.',
				damage: '2d8 + 5 damage',
				category: 5
			},
			{
				id: '1c303a0f-645f-482f-8169-ed9c7ca33c2d',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki far wanderer or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The githyanki far wanderer or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '5149677d-021c-4a67-9b9b-64b86f19801c',
		name: 'Githyanki Ghustil',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 4,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +15, Religion +15',
		equipment: 'cloth armor (basic clothing)',
		category: 'Githyanki',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 108,
		initiative: 15,
		ac: 28,
		fortitude: 25,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4d77a7f4-4951-4d31-a1d8-bfbe6c4db9ca',
				name: 'Silver Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage plus 1d6 psychic damage.',
				damage: '1d8+3 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: '004f2cfc-d17c-4fd4-849d-12ec782c0284',
				name: 'Necrotic Smite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Radiant, Weapon',
				condition: 'usable only while affected by cloak of shadows',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+3 damage plus 1d8 necrotic damage plus 1d8 radiant damage.',
				damage: '2d8+3 damage plus 1d8 necrotic damage plus 1d8 radiant damage',
				category: 1
			},
			{
				id: '28d0bfe9-970b-41eb-ba8f-c7f63125c759',
				name: 'Capture Divinity',
				action: {
					action: 4,
					trigger: 'when an enemy within 10 squares of the githyanki ghustil uses a divine power',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki ghustil regains 27 hit points.',
				damage: 'The githyanki ghustil regains 27 hit points',
				category: 5
			},
			{
				id: '70dab231-a538-4254-9364-28333af462c1',
				name: 'Cloak of Shadows',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki ghustil gains total concealment against all enemies until the end of its next turn.',
				damage: '',
				category: 1
			},
			{
				id: '7afa3525-70ad-4fde-869a-0c613ea722b3',
				name: 'Gift of Vlaakith',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'One githyanki ally within 10 squares of the githyanki ghustil gains 15 temporary hit points.',
				damage: 'One githyanki ally within 10 squares of the githyanki ghustil gains 15 temporary hit points',
				category: 3
			},
			{
				id: 'a7425aef-c19a-4f08-86e7-bf5c4615f3f0',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki ghustil or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The githyanki ghustil or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Lurker (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a61e5875-6c7e-4bbb-858a-e69e82e7d554',
		name: 'Githyanki Pyroclast',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +18',
		equipment: 'cloth armor (basic clothing)',
		category: 'Githyanki',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 161,
		initiative: 9,
		ac: 31,
		fortitude: 27,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '17e435b9-0177-432d-b719-16552ce131d2',
				name: 'Silver Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+4 damage plus 1d8 psychic damage.',
				damage: '2d8+4 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '0c64a9e7-67b5-4e3a-9f7c-9967b7e6a748',
				name: 'Psychic Flames',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Psychic',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d10+5 fire damage plus 1d10 psychic damage.',
				damage: '1d10+5 fire damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: 'e8023eb4-ef62-4483-9975-76e8e7bf606c',
				name: 'Searing Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Fire, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'targets one, two, or three creatures; 1d10+5 fire damage, and the target’s healing surge value is halved (save ends).',
				damage: '1d10+5 fire damage',
				category: 1
			},
			{
				id: 'abbcb8e0-6b64-44a9-9246-89fd2bdf99c2',
				name: 'Fire of the Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Psychic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d6+3 fire damage, and ongoing 10 psychic damage (save ends).',
				damage: '1d6+3 fire damage',
				category: 1
			},
			{
				id: '007a6e1f-def0-45a0-a2c9-37d5d032cb67',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki pyroclast or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The githyanki pyroclast or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '790036d1-f38a-4553-9153-8714389935a5',
		name: 'Githyanki Sword Stalker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Stealth +17',
		equipment: 'plate armor',
		category: 'Githyanki',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 160,
		initiative: 14,
		ac: 33,
		fortitude: 30,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '40a9fb4f-5d18-4b19-b726-dc3ae9ce8ec3',
				name: 'Silver Fullblade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d12+6 damage plus 1d6 psychic damage (crit 2d12 + 24 damage). Effect: The target is marked until the end of the githyanki sword stalker’s next turn.',
				damage: '1d12+6 damage plus 1d6 psychic damage (crit 2d12 + 24 damage)',
				category: 1
			},
			{
				id: 'a9a739f0-e871-4231-8fcb-a43a30273ad2',
				name: 'Disarming Reclamation',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d12+3 damage (crit 2d12 + 27 damage), and the target drops any weapon it’s holding.',
				damage: '2d12+3 damage (crit 2d12 + 27 damage)',
				category: 1
			},
			{
				id: '0b69a896-b15e-4710-bd63-49898623c71a',
				name: 'Unavoidable Swordsmanship',
				action: {
					action: 5,
					trigger: 'when an enemy adjacent to the sword stalker that is marked by it makes a melee attack that does not include the sword stalker',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d12+3 damage (crit 2d12 + 27 damage), and the triggering attack instead targets the githyanki sword stalker. The githyanki sword stalker gains a +2 bonus to AC and Reflex against this attack.',
				damage: '2d12+3 damage (crit 2d12 + 27 damage)',
				category: 5
			},
			{
				id: '76493498-9731-4a27-b316-20b08aedf223',
				name: 'Vortex of Silver Blades',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '1d12+3 damage (crit 2d12 + 15 damage), and until the end of the githyanki sword stalker’s next turn, the target is marked and slowed by it.',
				damage: '1d12+3 damage (crit 2d12 + 15 damage)',
				category: 1
			},
			{
				id: '37b03eb7-57d3-44a6-981b-0885a32055ce',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki sword stalker or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The githyanki sword stalker or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '18c976eb-24a1-4f4f-92a2-e01f210716e9',
		name: 'Gul’othran Dragon Raider',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'githyanki',
		level: 17,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'History +13, Insight +18',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 128,
		initiative: 15,
		ac: 29,
		fortitude: 28,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b3f7263-f041-48dd-9353-c9eca2cb3fbd',
				name: 'Silver Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d8+3 damage plus 1d8 psychic damage.',
				damage: '2d8+3 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '53816e73-d045-4e84-ad81-3b0cdc979aad',
				name: 'Psychic Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: '3d6+6 psychic damage, and the target takes a -2 penalty to attack rolls against the gul’othran dragon raider and its mount until the end of the dragon raider’s next turn.',
				damage: '3d6+6 psychic damage',
				category: 1
			},
			{
				id: 'fdbe707c-e1fe-4731-a875-264b7b64e2eb',
				name: 'Burst of Oppression',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '2d8+6 psychic damage, and the target is knocked prone.',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: '6f7debf6-e94e-4aa2-89d3-e3fbbb800400',
				name: 'Psychic Sunder',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '2d6+6 psychic damage, and whenever the target makes an attack, it takes 2d6 psychic damage (save ends).',
				damage: '2d6+6 psychic damage',
				category: 1
			},
			{
				id: '51f18acf-d394-480e-93b8-39c3ceb212cd',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gul’othran dragon raider or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The gul’othran dragon raider or an ally within 10 squares of it can fly 5 squares',
				category: 2
			},
			{
				id: '979b029a-f485-48b8-96a6-dde0a2d4f5b2',
				name: 'Master Dragon Rider',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While mounted on a dragon, a gul’othran dragon raider can make either a silver longsword attack or a psychic bolt attack once per round as a minor action.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Artillery',
		phenotype: 'Medium natural humanoid (githyanki)'
	},
	{
		id: 'f593a4b5-bdbe-4672-b382-c15a67ab2027',
		name: 'Gul’othran Marauder',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'githyanki',
		level: 16,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Nature +17',
		equipment: 'plate armor',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 190,
		initiative: 11,
		ac: 28,
		fortitude: 29,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1f4164cc-3c55-4358-bbaa-bf50f3cd3b20',
				name: 'Silver Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d10+4 damage plus 1d10 psychic damage.',
				damage: '2d10+4 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: '4baab4e6-8d4e-48c2-97bc-d7fa5af3b790',
				name: 'Break-Through Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '3d10+4 damage, and the gul’othran marauder pushes the target 3 squares.',
				damage: '3d10+4 damage',
				category: 1
			},
			{
				id: 'cf4dc7ef-3d91-4c60-a045-ed6427c8aa16',
				name: 'Driving Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d10+7 damage, and the gul’othran marauder pushes the target 3 squares.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: 'b923b030-fefe-4377-8b6a-c2f2b553d216',
				name: 'Slave Taker',
				action: {
					action: 7,
					trigger: 'when the gul’othran marauder bloodies an enemy',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering enemy is dominated (save ends). The target takes a -5 penalty to saving throws against this effect if it’s within 5 squares of the gul’othran marauder.',
				damage: 'The target takes a -5 penalty to saving throws against this effect if it’s within 5 squares of the gul’othran marauder',
				category: 5
			},
			{
				id: '709a68f3-4889-40e7-9d88-ba3d3c6c04d3',
				name: 'Telekinetic Leap',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gul’othran marauder or an ally within 10 squares of it can fly 5 squares.',
				damage: 'The gul’othran marauder or an ally within 10 squares of it can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Brute',
		phenotype: 'Medium natural humanoid (githyanki)'
	},
	{
		id: '23e6d782-f322-4d3e-9be6-d75e464282bb',
		name: 'Half-Void Nullifier',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +16; truesight 10',
		movement: '8, fly 4 (hover), teleport 4',
		alignment: 'Evil',
		languages: 'Primordial, Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 228,
		initiative: 20,
		ac: 40,
		fortitude: 38,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: '0b98bd34-97ad-4d9b-b4b5-c8093a620903',
				name: 'Void Feedback',
				keywords: '',
				details: 'aura 5; when an enemy within the aura hits the half-void nullifier, as a free action, one ally within the aura can make a saving throw or gain 5 temporary hit points (the ally’s choice).'
			}
		],
		powers: [
			{
				id: 'cb6f9f1d-5cfc-4d55-a1c4-042ed1fefc01',
				name: 'Void Fist',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+10 damage, and an ally within 5 squares of the half-void nullifier can teleport to any square adjacent to the target as a free action.',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: 'a35a543f-dc12-474d-bd52-ec84fc98a1db',
				name: 'Half-Cosmic Rip',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic, Teleportation',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 29,
					defence: 3
				},
				description: '',
				details: '3d10+10 psychic damage, and the half-void nullifier teleports the target 5 squares.',
				damage: '3d10+10 psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 10,
				value: -10
			}
		],
		resist: '',
		vulnerable: 'if a half-void nullifier takes at least 30 radiant damage from a single attack, its aura ends until the nullifier reactivates it.',
		immune: 'sleep',
		tactics: '',

		info: 'Level 24 Soldier (L)',
		phenotype: 'Large immortal humanoid'
	},
	{
		id: '7a459284-0035-4208-a507-e5a5a0da0961',
		name: 'Hundred-Handed One',
		details: '',
		size: 4,
		origin: 3,
		type: 0,
		keywords: 'construct',
		level: 29,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '8 see also earth reaver',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: 'longsword',
		category: '',
		strength: {
			score: 33,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 540,
		initiative: 23,
		ac: 47,
		fortitude: 46,
		reflex: 42,
		will: 43,
		regeneration: null,
		auras: [
			{
				id: 'a7e822bf-733c-47a8-8e1f-7744fdbc7925',
				name: 'Avalanche of Blades',
				keywords: '',
				details: 'aura 3; each creature that enters the aura or starts its turn there takes 10 damage.'
			}
		],
		powers: [
			{
				id: '070f9a82-2010-4faf-8a3a-f9b9f66d6408',
				name: 'Whirling Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 36,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d8+4 damage.',
				damage: '4d8+4 damage',
				category: 1
			},
			{
				id: 'f5ca73ac-df26-4ed5-bbde-2f8432a6a04b',
				name: 'Hundred Hands',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '4d6+8 damage, and the target is knocked prone. Special: When charging, the hundred-handed one can use this power in place of a melee basic attack.',
				attack: {
					bonus: 36,
					defence: 0
				},
				description: '',
				details: 'Reach 3; targets each enemy within reach',
				damage: 'Reach 3',
				category: 1
			},
			{
				id: '456048f2-c919-4e6f-9f24-39867422e8ab',
				name: 'Hail of Steel',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '4d6+8 damage, and the target is marked until the end of the hundred-handed one’s next turn.',
				damage: '4d6+8 damage',
				category: 1
			},
			{
				id: '55272dad-5369-4595-ac63-780ce6d3d7c3',
				name: 'Blades of Death',
				action: null,
				keywords: '',
				condition: 'when the hundred-handed one hits a creature with an opportunity attack',
				range: '',
				attack: null,
				description: '',
				details: 'The target is dazed until the end of the hundred-handed one’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: '92617ab1-5659-4fda-bafe-43a244142866',
				name: 'Earth Reaver',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A hundred-handed one ignores difficult terrain.',
				damage: '',
				category: 0
			},
			{
				id: 'ba32cfd5-fa7c-4e51-adc2-ba2e9086b490',
				name: 'Indiscriminate Carnage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A hundred-handed one can score a critical hit against a prone creature on a roll of 17-20.',
				damage: 'A hundred-handed one can score a critical hit against a prone creature on a roll of 17-20',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '5 to all damage',
		vulnerable: '',
		immune: 'charm, fear',
		tactics: '',

		info: 'Level 29 Elite Soldier',
		phenotype: 'Huge immortal animate (construct)'
	},
	{
		id: 'c94f41d3-6258-4608-a41d-e1ae99cf2dc3',
		name: 'Illyram Brackz',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 24,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +24, History +24, Insight +19',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 362,
		initiative: 14,
		ac: 38,
		fortitude: 33,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: 'cfa9f36d-3491-4d95-9f7d-757dbfb7e94a',
				name: 'Necromantic Aura',
				keywords: '',
				details: '(Necrotic) aura 5; any living creature that enters or starts its turn in the aura takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: '50581041-ecd9-46c1-830b-eab81ad290ba',
				name: 'Shadow Ray',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '3d8+7 necrotic damage.',
				damage: '3d8+7 necrotic damage',
				category: 1
			},
			{
				id: '519af721-ed27-4e27-a05c-9b7ccc6fad44',
				name: 'Necrotic Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '3d8+7 necrotic damage, and the target is stunned until the end of Illyram’s next turn.',
				damage: '3d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'b606cdf0-2452-4f62-ba49-d9027a43d258',
				name: 'Entropic Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '6d6+7 necrotic damage.',
				damage: '6d6+7 necrotic damage',
				category: 1
			},
			{
				id: '5c741d5c-9cdf-4e1a-b1e7-7137f47dbfc8',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When Illyram is reduced to 0 hit points, his body and possessions crumble into dust, but he is not destroyed. He reappears (along with his possessions) in 1d10 days within 1 square of his phylactery, unless the phylactery is also found and destroyed.',
				damage: 'He reappears (along with his possessions) in 1d10 days within 1 square of his phylactery',
				category: 0
			},
			{
				id: '03c39e2e-3857-4d68-a646-acf2b4b345bd',
				name: 'Second Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				category: 1
			}

