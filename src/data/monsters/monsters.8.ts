import { Monster } from '../../models/monster';

const monsters: Monster[] = [
	{
		id: '2426d25a-6f17-43c6-be1c-e3c1685bfa9d',
		name: 'Warforged Savage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 7,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +12, Intimidate +11',
		equipment: 'hide armor; scimitar',
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
		hp: 98,
		initiative: 5,
		ac: 20,
		fortitude: 21,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'de02e2fd-15ec-4d16-a6b3-a1610bdf3a09',
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
				details: '1d8+6 damage (crit 1d8 + 14), and 4 damage to another enemy adjacent to the warforged savage.',
				damage: '1d8+6 damage (crit 1d8 + 14)',
				category: 1
			},
			{
				id: '19b5383e-a723-4a6d-919b-9c1b4dfcc535',
				name: 'Wild Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges after the warforged savage hits two or more targets with a savage sweep'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The savage charges, gains a +3 bonus to AC during the charge, and makes the following attack in place of a melee basic attack',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d8+9 damage (crit 2d8+25).',
				damage: '2d8+9 damage (crit 2d8+25)',
				category: 1
			},
			{
				id: '9883064f-58f6-455d-906f-d1ce2910aef3',
				name: 'Savage Sweep',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage (crit 1d8+14). Miss: 4 damage.',
				damage: '1d8+6 damage (crit 1d8+14)',
				category: 1
			},
			{
				id: '997a9d90-9e7d-4181-aae5-a37ac10ef8b0',
				name: 'Battlefield Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: 'A warforged savage gains a +1 bonus to melee attack rolls while an ally is adjacent to the target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ed731222-908d-4751-bf13-4783f5fbaafe',
				name: 'Savage Bloodlust',
				action: null,
				keywords: '',
				condition: '',
				range: 'Whenever a warforged savage hits with a melee attack, it gains 4 temporary hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '554cd27b-3a4c-4d27-998b-c5b103d18369',
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
				details: 'The warforged savage gains 6 temporary hit points and can make a saving throw against an ongoing damage effect. If it uses this power while bloodied, it also regains 6 hit points.',
				damage: 'the warforged savage gains 6 temporary hit points and can make a saving throw against an ongoing damage effect',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Brute',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '9ee22e89-e3d3-46bd-b402-db2a4b96fc2a',
		name: 'Warforged Titan',
		details: '',
		size: 4,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 19,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 362,
		initiative: 15,
		ac: 35,
		fortitude: 35,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c44e2f97-8ef4-4c00-9462-c482ed4cfe09',
				name: 'Axe',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+9 damage, and 9 damage to one enemy adjacent to the target. Effect: The target is marked until the end of the warforged titan’s next turn.',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: '6405921f-a5b8-47a7-9b94-0f2e33f3fc2d',
				name: 'Hammer',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8+9 damage, the warforged titan slides the target 2 squares, and the target is knocked prone. Miss: 9 damage.',
				damage: '2d8+9 damage',
				category: 3
			},
			{
				id: '85aefaf8-622a-4f21-81c5-8cae99a0aaa8',
				name: 'Unstoppable Charger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A warforged titan can take additional actions after it resolves its charge attack.',
				damage: '',
				category: 0
			},
			{
				id: '5a31ba1a-f76a-4692-a78a-861836bc8346',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A warforged titan can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			},
			{
				id: '4e92490d-f79d-43df-be88-520f3c089224',
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
				details: 'The warforged titan gains 12 temporary hit points and can make a saving throw against an ongoing damage effect. If it uses this power while bloodied, it also regains 12 hit points.',
				damage: 'the warforged titan gains 12 temporary hit points and can make a saving throw against an ongoing damage effect',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Elite Soldier',
		phenotype: 'Huge natural humanoid (living construct)'
	},
	{
		id: '9b1de93b-9194-4f0f-836c-0ccdef67c235',
		name: 'Water Archon Shoal Reaver',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'aquatic, water',
		level: 13,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6, swim 7',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'scale armor; trident',
		category: 'Archon',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 159,
		initiative: 8,
		ac: 25,
		fortitude: 27,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a4b94da9-4758-4f21-8253-63249896b149',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '3d8+3 damage, and the target takes a -2 penalty to AC until the end of its next turn.',
				damage: '3d8+3 damage',
				category: 1
			},
			{
				id: 'aec9fc46-efac-4bc4-9569-62edb75f3292',
				name: 'Water Harpoon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '4d8+5 damage, and the water archon shoal reaver pulls the target adjacent to it.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: 'f5d3bb97-c897-4b53-8432-7bd54a612ff1',
				name: 'Whirlpool of Tines',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d8+5 damage, and the target takes 2 damage for each square it moves on its turn (save ends). Miss: Half damage, and the target takes 1 damage for each square it moves on its turn (save ends).',
				damage: '2d8+5 damage',
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
		vulnerable: 'cold (a water archon shoal reaver that takes cold damage is slowed until the end of its next turn)',
		immune: 'disease, forced movement, poison',
		tactics: '',

		info: 'Level 13 Brute',
		phenotype: 'Medium elemental humanoid (aquatic, water)'
	},
	{
		id: '4d2fd12f-0d56-432b-9393-0a54050ae7b9',
		name: 'Water Archon Tide Strider',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'aquatic, water',
		level: 15,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6, swim 8',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'greatspear; scale armor',
		category: 'Archon',
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
			score: 19,
			modifier: 4,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 144,
		initiative: 13,
		ac: 29,
		fortitude: 27,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '2977ca53-696d-44af-b2f0-468a03d94a2f',
				name: 'Body Torrent',
				keywords: '',
				details: 'aura 1; each enemy within the aura that hits or misses the water archon tide strider with an attack is pushed 1 square.'
			}
		],
		powers: [
			{
				id: '5d4f95d8-b527-4611-970c-a8c94c10e558',
				name: 'Greatspear',
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
				details: 'Reach 2; 2d10+4 damage.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: 'da8c1747-dd3d-4559-a227-24bbb6a2de7e',
				name: 'Way of Water',
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
				attack: null,
				description: '',
				details: 'The water archon tide strider shifts 6 squares and makes one greatspear attack against each enemy within reach at any point during the move.',
				damage: 'The water archon tide strider shifts 6 squares and makes one greatspear attack against each enemy within reach at any point during the move',
				category: 1
			},
			{
				id: '95a39cca-45ea-4bd4-b8c8-6a14c6ea3caa',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Hits from a water archon tide strider’s melee attacks knock prone any target that is granting combat advantage to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -10
			}
		],
		resist: '',
		vulnerable: 'cold (a water archon tide strider that takes cold damage is slowed until the end of its next turn)',
		immune: 'disease, forced movement, poison',
		tactics: '',

		info: 'Level 15 Skirmisher',
		phenotype: 'Medium elemental humanoid (aquatic, water)'
	},
	{
		id: '2d44d089-37cc-4aae-873d-1d4c7b658460',
		name: 'Water Archon Waveshaper',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'aquatic, water',
		level: 16,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6, swim 8',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: 'Archon',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 157,
		initiative: 10,
		ac: 30,
		fortitude: 28,
		reflex: 27,
		will: 30,
		regeneration: null,
		auras: [
			{
				id: '91a6eb8e-bc13-424c-b72b-df9a7cc1a612',
				name: 'Ocean Call',
				keywords: '',
				details: 'Each ally that is within 10 squares of the water archon waveshaper and that has the water keyword or the aquatic keyword shifts 3 squares as a free action and gains 10 temporary hit points.'
			}
		],
		powers: [
			{
				id: '5edf35c5-7c3a-463c-a37b-1437e57208f1',
				name: 'Waveshape',
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
					defence: 2
				},
				description: '',
				details: '2d6+5 damage, and the target is pushed 1 square and knocked prone.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'a49e7919-e997-47ba-964e-be64d930cf73',
				name: 'DIzzying Whirlpool',
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
					defence: 1
				},
				description: '',
				details: '2d8+7 damage, and the target cannot charge or shift (save ends).',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '0af86e9d-ca21-4d13-9a10-b0d653cbaac6',
				name: 'Geyser',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+4 damage, and the target is knocked prone and cannot use immediate actions until the end of its next turn.',
				damage: '2d8+4 damage',
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
		vulnerable: 'cold (a water archon waveshaper that takes cold damage is slowed until the end of its next turn)',
		immune: 'disease, forced movement, poison',
		tactics: '',

		info: 'Level 16 Controller',
		phenotype: 'Medium elemental humanoid (aquatic, water)'
	},
	{
		id: 'dc69d15c-a854-4453-84ee-a55b9523798a',
		name: 'Wereboar',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 6,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '6 (8 in boar form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +13, Endurance +11, Intimidate +8',
		equipment: 'hide armor; maul',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 61,
		initiative: 3,
		ac: 17,
		fortitude: 21,
		reflex: 16,
		will: 17,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: 'd49e12ac-bb4a-4ea7-b81a-aa5fe4c250d8',
				name: 'Maul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'usable only while in humanoid form',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '0393ec60-f28c-49d2-9629-a9669167aaa3',
				name: 'Gore',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: 'usable only while in boar form',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, ongoing 5 damage (save ends), and the target is exposed to moontusk fever.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'af260e92-dd41-4cc5-a543-ac70afcc519f',
				name: 'Death Strike',
				action: null,
				keywords: '',
				condition: 'when the werebear drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The wereboar makes a gore or a maul attack.',
				damage: '',
				category: 0
			},
			{
				id: 'dc7a4541-5e6c-4999-a662-c4afd7f520ec',
				name: 'Bloodied Resilience',
				action: null,
				keywords: '',
				condition: 'while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The wereboar gains a +2 bonus to all defenses and deals ongoing 10 damage with its gore attack instead of ongoing 5 damage.',
				damage: 'the wereboar gains a +2 bonus to all defenses and deals ongoing 10 damage with its gore attack instead of ongoing 5 damage',
				category: 0
			},
			{
				id: 'b573b6d7-665a-4e89-9087-dbbd25b053c5',
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
				details: 'A wereboar can alter its physical form to appear as a dire boar or a unique humanoid.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'silver (if the wereboar takes damage from a silver weapon, its regeneration does not function on its next turn)',
		immune: 'moontusk fever',
		tactics: '',

		info: 'Level 6 Brute',
		phenotype: 'Large natural humanoid (shapechanger)'
	},
	{
		id: '98472e26-ad14-4e18-8b14-7c3404cbb96d',
		name: 'Weretiger',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 11,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6 (8 in tiger form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +12, Bluff +11, Insight +12, Stealth +12',
		equipment: 'katar; leather armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 172,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 22,
		will: 22,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '42c5b4b5-eade-4d53-8b06-6f19bc4065ac',
				name: 'Katar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'usable only while in humanoid form',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage (crit 4d6+18).',
				damage: '2d6+6 damage (crit 4d6+18)',
				category: 1
			},
			{
				id: 'f91769fb-661d-4151-ab89-fae25e5a994a',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: 'usable only while in tiger form',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and the target is exposed to moon rage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '2666bf70-e4d3-4653-9b39-bf9e243f0d94',
				name: 'Feline Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The weretiger makes two melee basic attacks. It shifts 1 square between the attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'c50f39c2-2c7b-48d2-ac74-12bf3bdeab9b',
				name: 'Pounce',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: 'usable only when charging',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+5 damage, and the target is pushed 1 square and knocked prone. The weretiger then shifts into the target’s vacated space.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'f2ac5045-7c26-4ad4-a0e2-ca5792dec792',
				name: 'Slashing Recoil',
				action: {
					action: 4,
					trigger: 'when an attack misses the weretiger',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The weretiger makes a melee basic attack and shifts 2 squares.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '818fe9bf-2c6d-44e5-877d-7719a07484b9',
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
				details: 'A weretiger can alter its physical form to appear as a dire tiger or a unique humanoid.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'silver (if the weretiger takes damage from a silver weapon, its regeneration does not function on its next turn)',
		immune: 'moon rage',
		tactics: '',

		info: 'Level 11 Elite Skirmisher',
		phenotype: 'Large natural humanoid (shapechanger)'
	},
	{
		id: '523a67dc-d6c6-49ad-9946-471fdc4b18f6',
		name: 'Werewolf Lord',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 13,
		role: {
			type: 2,
			flag: 1,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '6 (8 in wolf form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +17, Bluff +14, Endurance +14, Intimidate +14',
		equipment: 'falchion',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 264,
		initiative: 7,
		ac: 25,
		fortitude: 27,
		reflex: 22,
		will: 24,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [
			{
				id: '674dc1bb-879c-431e-a464-b7200a1899cc',
				name: 'Blood Moon',
				keywords: '',
				details: 'aura 5; the werewolf lord and any ally within the aura gain a +2 bonus to attack rolls and a +5 bonus to damage rolls against bloodied targets.'
			}
		],
		powers: [
			{
				id: 'b80e4e0c-04e6-4501-a87a-6b578e80facd',
				name: 'Falchion',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'usable only while in humanoid form',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '4d4+6 damage (crit 8d4+22).',
				damage: '4d4+6 damage (crit 8d4+22)',
				category: 1
			},
			{
				id: 'afb5d449-cc7b-46f1-9ec4-8611296eb545',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease',
				condition: 'usable only while in wolf form',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d12+3 damage, and the target is exposed to greater moon frenzy.',
				damage: '2d12+3 damage',
				category: 1
			},
			{
				id: '12e28ab3-e840-4acf-bc93-a0d660328553',
				name: 'Canine Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The werewolf lord makes two melee basic attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'a3fcc710-a501-4f04-bc4c-fd3d5a99cafc',
				name: 'Speed of the Wolf',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: 'usable only in wolf form',
				range: '',
				attack: null,
				description: '',
				details: 'The werewolf lord shifts 6 squares and makes a bite attack.',
				damage: 'The werewolf lord shifts 6 squares and makes a bite attack',
				category: 1
			},
			{
				id: '23e708bb-c8e7-4b04-b4ab-e046ec0ab451',
				name: 'Savage Howl',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'each ally in the burst gains 15 temporary hit points. In addition, each ally that has a bite attack makes a bite attack as a free action.',
				damage: 'each ally in the burst gains 15 temporary hit points',
				category: 3
			},
			{
				id: 'fa1094ec-44a2-40bc-84a7-130c4ece7d55',
				name: 'Change Shape',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A werewolf lord can alter its physical form to appear as a dire wolf or a unique humanoid.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'silver (if the werewolf lord takes damage from a silver weapon, its regeneration does not function on its next turn)',
		immune: 'greater moon fever',
		tactics: '',

		info: 'Level 13 Elite Brute (L)',
		phenotype: 'Large natural humanoid (shapechanger)'
	},
	{
		id: 'b4c00f0b-4c6b-4a50-95d6-8aa9a7003343',
		name: 'Will-o’-Wisp',
		details: '',
		size: 1,
		origin: 2,
		type: 1,
		keywords: '',
		level: 10,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: 'fly 6 (hover; altitude limit 2)',
		alignment: 'Evil',
		languages: 'Elven',
		skills: 'Stealth +16',
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
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 57,
		initiative: 15,
		ac: 22,
		fortitude: 19,
		reflex: 24,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e882ff2a-b858-4094-a6ad-6159cae0efc0',
				name: 'Glimmer Wisp',
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
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d6+6 radiant damage.',
				damage: '2d6+6 radiant damage',
				category: 1
			},
			{
				id: '56fb2782-70ff-429f-989c-df507c4d58f5',
				name: 'Spirit Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'Reach 3; bloodied target only; 2d8+3 psychic damage, the target is weakened (save ends), and the wisp regains 14 hit points.',
				damage: '2d8+3 psychic damage',
				category: 1
			},
			{
				id: '1753f6c0-0fac-40ba-b78d-656886b3f03d',
				name: 'Luring Glow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 20',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'blind creatures are immune; one target in the burst; the target is pulled 3 squares and dazed (save ends).',
				damage: 'the target is pulled 3 squares and dazed (save ends)',
				category: 1
			},
			{
				id: '1f736a2a-2dff-4b3b-918f-3e559b00dd04',
				name: 'Blink Out',
				action: {
					action: 5,
					trigger: 'when missed by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The will-o’-wisp teleports 5 squares and extinguishes its fey light.',
				damage: 'The will-o’-wisp teleports 5 squares and extinguishes its fey light',
				category: 5
			},
			{
				id: '28d56c62-8233-44e5-bb7f-64e1425bd9bd',
				name: 'Fey Light',
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
				details: 'A will-o’-wisp can give off light as a torch or extinguish this light. Fey light must be on for the will-o’-wisp to make any attack. When darkened, the will-o’-wisp has concealment and can make a Stealth check to remain unnoticed.',
				damage: '',
				category: 4
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Lurker',
		phenotype: 'Small fey beast'
	},
	{
		id: 'f3aa87f2-66e8-468a-8c05-05abca4b37ee',
		name: 'Windfiend Fury',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'air, earth',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '0, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Primordial',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 123,
		initiative: 11,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '08ef8d97-91fc-4e43-8c76-a98c431c57ad',
				name: 'Forceful Zephyr',
				keywords: '',
				details: 'aura 3; the windfiend fury slides each creature that starts its turn within the aura 1 square.'
			}
		],
		powers: [
			{
				id: '4b5bcbb5-33cc-458c-a424-36490ffebeea',
				name: 'Flying Debris',
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
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'c8c296b1-caef-4a3d-8958-9af6c340c3fa',
				name: 'Lightning Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '3d8+5 lightning damage, and the target is dazed until the end of the windfiend fury’s next turn.',
				damage: '3d8+5 lightning damage',
				category: 1
			},
			{
				id: 'da33f049-9e21-425e-85cb-202825884959',
				name: 'Storm Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation, Thunder',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '1d10+5 thunder damage. Effect: The windfiend fury teleports to any space adjacent to the burst’s area of effect.',
				damage: '1d10+5 thunder damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 5,
				value: -15
			},
			{
				type: 10,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Controller',
		phenotype: 'Large elemental beast (air, earth)'
	},
	{
		id: '7e7365c0-b5b4-497c-a446-1083d38f29aa',
		name: 'Windstriker',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'air',
		level: 9,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '0, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 56,
		initiative: 11,
		ac: 21,
		fortitude: 22,
		reflex: 20,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '90a594d5-35b8-4caa-959e-0832b3037804',
				name: 'Windstrike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+2 cold and thunder damage.',
				damage: '1d8+2 cold and thunder damage',
				category: 1
			},
			{
				id: '3549b215-7e6f-4c97-ac13-7c8ae8dca020',
				name: 'Lethal Windstrike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; targets the windstriker’s quarry; 2d12+5 cold and thunder damage, and the target is no longer designated as the windstriker’s quarry.',
				damage: '2d12+5 cold and thunder damage',
				category: 1
			},
			{
				id: 'f9d0cec8-0090-44c8-900a-ceec81579cb0',
				name: 'Searching Wind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the windstriker hits with lethal windstrike'
				},
				keywords: 'Cold, Thunder',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: '2d6+5 cold and thunder damage, and the target is knocked prone. Effect: The target is designated as the windstriker’s quarry.',
				damage: '2d6+5 cold and thunder damage',
				category: 1
			},
			{
				id: '429b4d28-0365-4e08-81a0-a20af2d11a41',
				name: 'Shifting Wind',
				action: {
					action: 4,
					trigger: 'when the windstriker takes damage',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of its next turn, the windstriker does not provoke opportunity attacks and can move through enemies’ spaces.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Lurker',
		phenotype: 'Medium elemental beast (air)'
	},
	{
		id: '29624984-64ed-4ac6-8432-faa38b0555f0',
		name: 'Winged Drone',
		details: 'WINGED DRONES FLOOD FROM THE HIVE during mating season, spreading far and wide on iridescent wings.',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision, tremorsense 10',
		movement: '8, climb 8, fly 8',
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 55,
		initiative: 6,
		ac: 18,
		fortitude: 15,
		reflex: 17,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '07c6c927-181b-45b5-a32a-c9d739b730d8',
				name: 'Acid Sting',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+2 acid damage, and ongoing 5 acid damage (save ends).',
				damage: '1d6+2 acid damage',
				category: 1
			},
			{
				id: 'b5c2fddf-cbf3-45da-9018-9c23de8d4e67',
				name: 'Hive Drone Frenzy',
				action: {
					action: 7,
					trigger: 'when any giant ant within 10 squares of the winged drone drops to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The drone shifts 2 squares and uses acid sting.',
				damage: 'The drone shifts 2 squares and uses acid sting',
				category: 5
			},
			{
				id: '6a866131-a43d-40b1-aee3-434d6382174d',
				name: 'Flyby Attack',
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
				details: 'The winged drone flies 8 squares and makes one acid sting at any point during that movement. The drone doesn’t provoke opportunity attacks when moving away from the target of the attack.',
				damage: 'The winged drone flies 8 squares and makes one acid sting at any point during that movement',
				category: 1
			},
			{
				id: '5714437f-4f05-435d-afda-006c20cf9ec5',
				name: 'Shredding Wings',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while bloodied',
				range: 'Close blast 2',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '3d6+4 damage, and the winged drone loses its fly speed until the end of the encounter.',
				damage: '3d6+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Medium natural beast'
	},
	{
		id: 'f3fbb65c-ccfa-4b93-a5e6-ba110aa366e6',
		name: 'Winter Wolf',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: '',
		category: '',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
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
		hp: 141,
		initiative: 14,
		ac: 28,
		fortitude: 27,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e6980579-8659-40d8-b352-0ad0034d4cfd',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage plus 1d6 cold damage, or 2d10 + 6 damage plus 1d6 cold damage against a prone target.',
				damage: '1d10+6 damage plus 1d6 cold damage',
				category: 1
			},
			{
				id: '4d5bdd5a-6100-4c88-9ebd-d12dbf2c045b',
				name: 'Takedown',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: 'usable only when charging',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d10+6 damage plus 1d6 cold damage, and the target is knocked prone.',
				damage: '2d10+6 damage plus 1d6 cold damage',
				category: 1
			},
			{
				id: 'ea639cff-6a12-4b93-a290-0196428917c4',
				name: 'Freezing Breath',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d6+6 cold damage. Miss: Half damage.',
				damage: '2d6+6 cold damage',
				category: 1
			},
			{
				id: '770fac59-1b25-4f96-9d0c-923eaae2b006',
				name: 'Drag',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while adjacent to a prone enemy',
				range: '',
				attack: null,
				description: '',
				details: 'The winter wolf shifts 1 square and pulls a prone target that is adjacent to it 1 square.',
				damage: 'The winter wolf shifts 1 square and pulls a prone target that is adjacent to it 1 square',
				category: 3
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

		info: 'Level 14 Skirmisher',
		phenotype: 'Medium natural beast'
	},
	{
		id: '0a7d088c-871f-4112-ab37-377715aa8aa0',
		name: 'Winter Wolf Snowfang',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 16,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Stealth +20 (+5 to Stealth checks when in ice or snow)',
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
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 124,
		initiative: 19,
		ac: 30,
		fortitude: 28,
		reflex: 29,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '34ec238a-64b9-4bd8-b8db-68838d7b9a05',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage plus 1d8 cold damage.',
				damage: '1d10+5 damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: '3ddc8601-7c52-47a1-87fa-09c23aa48f4f',
				name: 'Frigid Breath',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+7 cold damage, and ongoing 5 cold damage (save ends). Miss: Half damage.',
				damage: '2d8+7 cold damage',
				category: 1
			},
			{
				id: 'f8fafd4c-0a98-4443-af12-a8f4c8d56aa4',
				name: 'Ice Rending',
				action: null,
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The winter wolf snowfang deals 2d8 extra damage with its bite attack against any creature that is taking ongoing cold damage.',
				damage: 'the winter wolf snowfang deals 2d8 extra damage with its bite attack against any creature that is taking ongoing cold damage',
				category: 0
			},
			{
				id: '1f638bd3-d26d-485a-9934-1e95a771b06e',
				name: 'Snow Zephyr',
				action: {
					action: 4,
					trigger: 'when an attack damages the winterwolf snowfang',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The winter wolf snowfang changes into a whirling zephyr of snow. It gains insubstantial and shifts its speed as a move action. While in this form, the wolf can use only its frigid breath attack. The wolf remains in this form until it uses frigid breath or until it chooses to resume its normal form as a minor action.',
				damage: '',
				category: 5
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

		info: 'Level 16 Lurker',
		phenotype: 'Medium natural beast'
	},
	{
		id: '290b444f-797c-4095-994f-06ef97cfd528',
		name: 'Withering Devil',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 14,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Bluff +18, Insight +13',
		equipment: 'quarterstaff',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
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
		hp: 138,
		initiative: 8,
		ac: 28,
		fortitude: 24,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '6be91bd5-bef4-49c7-98f3-f526fc412f36',
				name: 'Aura of Exhastion',
				keywords: '',
				details: '(Charm) aura 3; each enemy within the aura is weakened'
			}
		],
		powers: [
			{
				id: 'f3a7aee2-76d1-4fb2-b78d-39ac8b94a094',
				name: 'Staff of Weariness',
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
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '1527b829-4306-414d-bce6-ca138fba8fb4',
				name: 'Draining Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d8+6 psychic damage, and the target is immobilized until the end of the withering devil’s next turn.',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: 'a58d3bb0-7115-4626-ae9c-04c4ff80a837',
				name: 'Gaze of Apathy',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm, Gaze',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'the target is slowed (save ends).',
				damage: '',
				category: 3
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

		info: 'Level 14 Controller',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: '268dfab0-fc4e-405b-bcd7-83753aa0de62',
		name: 'Witherling',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '8, climb 6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		initiative: 8,
		ac: 18,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0215c4fe-caca-4f82-891c-fd2165b2526b',
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
				details: '1d6+2 damage, and the target is slowed (save ends).',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: '98a7041a-b7ac-4970-aaee-e6f0b141f0d1',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The witherling makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'afa8781a-47a9-4838-bb9d-ef49f47af53b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A witherling deals 1d6 extra damage on attacks against any creature granting combat advantage to it.',
				damage: 'a witherling deals 1d6 extra damage on attacks against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: 'ca374bdb-27b0-483e-a5fb-9b4092cd1b7d',
				name: 'Blood Dance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The witherling shifts 2 squares.',
				damage: 'The witherling shifts 2 squares',
				category: 3
			},
			{
				id: 'cfd9c1c3-2917-42c4-9e2b-479505086e0a',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'A witherling’s melee attacks deal 2 extra damage against any enemy that has two or more of the witherling’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'fd2278e9-a573-478c-be4d-4c1d090b40c1',
				name: 'Sudden Leap',
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
				details: 'The witherling jumps 4 squares. During the jump, it gains a +5 bonus to AC against opportunity attacks, and any enemy that misses the witherling with an opportunity attack grants combat advantage to it until the end of the witherling’s turn.',
				damage: 'The witherling jumps 4 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: '09637346-55f7-46c2-abb0-f137f3793264',
		name: 'Witherling Death Shrieker',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 65,
		initiative: 5,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6da0235f-8d03-4b70-b3e8-75a33e25d8db',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '67888b1e-6be6-4a59-bdfa-0b35afe066d4',
				name: 'Death Shriek',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+4 damage, and any undead ally adjacent to the target regains 5 hit points. An undead ally can regain hit points only once per round in this way.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '5dc6796b-6135-4054-b7a7-198ded3c4ead',
				name: 'Thunder Shriek',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d6+4 thunder damage, and the witherling death shrieker pushes the target 2 squares.',
				damage: '1d6+4 thunder damage',
				category: 1
			},
			{
				id: 'ee9c7d24-56cb-456b-9bb8-eb3d5fdd4194',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'A witherling death shrieker’s melee attacks deal 2 extra damage against any enemy that has two or more of the death shrieker’s allies adjacent to it.',
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

		info: 'Level 5 Controller (L)',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'c17952be-1553-463b-ad10-4eaf1e5c2e08',
		name: 'Witherling Rabble',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 9,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '8, climb 6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 1,
		initiative: 10,
		ac: 23,
		fortitude: 21,
		reflex: 22,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '33a3a598-2aec-463f-a3b6-2a105451b971',
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
				details: '9 damage.',
				damage: '9 damage',
				category: 1
			},
			{
				id: '6ebe06e4-c0bf-406d-a780-35a185abe5a0',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A witherling rabble deals 2 extra damage on attacks against any creature granting combat advantage to it.',
				damage: 'a witherling rabble deals 2 extra damage on attacks against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: 'ca1c45ea-cb10-4080-a3fb-c5e6c7c5ece8',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'A witherling rabble’s melee attacks deal 2 extra damage against any enemy that has two or more of the rabble’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ca0e1a1f-bfe3-411d-8f13-e86b5f2c0e14',
				name: 'Sudden Leap',
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
				details: 'The witherling rabble jumps 4 squares. During the jump, it gains a +5 bonus to AC against opportunity attacks, and any enemy that misses the rabble with an opportunity attack grants combat advantage to it until the end of the rabble’s turn.',
				damage: 'The witherling rabble jumps 4 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Minion',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'e6180562-bb96-4e03-ac9c-dab15c03bdb7',
		name: 'Wood Woad',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'plant',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Intimidate +11',
		equipment: 'club',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 92,
		initiative: 5,
		ac: 23,
		fortitude: 21,
		reflex: 18,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'db336813-4241-4df3-976b-abff61e1aa3f',
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'f28abc3d-b59a-40ec-9f52-6262d13617bf',
				name: 'Nature’s Judgment',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Reliable, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target is immobilized and takes ongoing 5 damage (save ends both). When the target takes the ongoing damage, the fey enemy or plant enemy nearest to the target regains an equal number of hit points.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'd84c4558-da4b-43a8-bab8-21429c9d64ff',
				name: 'Nature’s Mystery',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'targets one creature; no attack roll; the target takes a -2 penalty to attack rolls, all defenses, and saving throws (save ends). In addition, the target takes a -5 penalty to saving throws against this effect unless it succeeds on a DC 20 Nature check (as a minor action on the target’s turn).',
				damage: 'the target takes a -2 penalty to attack rolls',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Medium fey humanoid (plant)'
	},
	{
		id: '1616b9d1-2fe7-4bff-97c1-772a0b1f3051',
		name: 'Xorn',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'earth',
		level: 9,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; all-around vision, darkvision',
		movement: '5, burrow 5',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: '',
		equipment: '',
		category: '',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 102,
		initiative: 8,
		ac: 23,
		fortitude: 24,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '855ccd5e-ad91-4814-9829-463f81d1e1af',
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
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '91410361-4b24-4f3b-9af0-ac9fe61659d1',
				name: 'Triple Strike',
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
				details: 'The xorn makes three claw attacks, each against a different target.',
				damage: '',
				category: 1
			},
			{
				id: '89b0bdf1-a39e-4c4e-838a-5c392918adab',
				name: 'Earthy Maw',
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
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '0116a8ad-7d56-4939-b6ee-346ae55dba10',
				name: 'Earth Glide',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A xorn can burrow through solid stone as if it were loose earth.',
				damage: '',
				category: 0
			},
			{
				id: '7557919c-1a86-4ea8-920a-f192dfa821dd',
				name: 'Retreat',
				action: {
					action: 4,
					trigger: 'when the xorn is missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The xorn burrows its speed.',
				damage: '',
				category: 5
			},
			{
				id: '9bc4f4a1-d4f9-4696-bac4-fae1fd248352',
				name: 'Submerge',
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
				details: 'The xorn sinks partially under the ground and gains a +2 bonus to AC until it moves.',
				damage: 'The xorn sinks partially under the ground and gains a +2 bonus to AC until it moves',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Skirmisher',
		phenotype: 'Medium elemental beast (earth)'
	},
	{
		id: 'c8181229-dbbe-4263-81f5-1f65f27b19a9',
		name: 'Yochlol Tempter',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon, shapechanger',
		level: 17,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '6, climb 8 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Bluff +20, Intimidate +20, Religion +17, Stealth +19',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 158,
		initiative: 14,
		ac: 31,
		fortitude: 27,
		reflex: 29,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd452c24f-027d-440c-9795-8682ecb55180',
				name: 'Demon Form • Tentacle',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: '3107474c-a03e-4688-a134-2b4e8f789e46',
				name: 'Demon Form • Amorphous Flurry',
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
				details: 'The yochlol tempter makes four tentacle attacks. A target hit by two or more tentacle attacks takes a -4 penalty to Will (save ends).',
				damage: 'A target hit by two or more tentacle attacks takes a -4 penalty to Will (save ends)',
				category: 1
			},
			{
				id: 'cbf880cd-31e3-4b0c-a417-db1bed1f794d',
				name: 'Demon Form • Maddening Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge 4 while bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'targets enemies; the target is immobilized and takes ongoing 5 psychic damage (save ends both).',
				damage: 'the target is immobilized and takes ongoing 5 psychic damage (save ends both)',
				category: 1
			},
			{
				id: '520e2378-1430-422f-b896-f8fa4ba13f0b',
				name: 'Drow Form • Spider Touch',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d6+5 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '366d89ec-8f61-40ad-9d5f-225ba5444c75',
				name: 'Drow Form • Venom Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d6+5 damage, and the target is slowed and takes ongoing 5 poison damage (save ends both).',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '53e9b832-f489-44fd-b4ca-73b176e60fe4',
				name: 'Drow Form • Seductive Glare',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the target saves'
				},
				keywords: 'Charm, Reliable',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'the target is dazed (save ends). First Failed Saving Throw: The target is stunned (save ends). Second Failed Saving Throw: The target is dominated (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '8cf644f4-ca25-486d-8b26-e6ca782d6a75',
				name: 'Drow Shape',
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
				details: 'A yochlol tempter can alter its physical form to take on the appearance of a unique female drow.',
				damage: '',
				category: 3
			},
			{
				id: '5bce1cf8-a66c-41ca-9aa2-6a13ea68460e',
				name: 'Demon Shape',
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
				details: 'A yochlol tempter can alter its physical form to resume its demon form.',
				damage: '',
				category: 3
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

		info: 'Level 17 Controller',
		phenotype: 'Medium elemental humanoid (demon, shapechanger)'
	},
	{
		id: 'd51ef363-6d38-4160-b4b3-d14176fdbb70',
		name: 'Young Adamantine Dragon',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 7,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6, fly 8 (hover), overland flight 10',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Insight +10, Intimidate +9',
		equipment: '',
		category: 'Dragon',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 332,
		initiative: 8,
		ac: 23,
		fortitude: 22,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0fdee0ed-cb2c-48f4-bf10-5cc02211808a',
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
				attack: null,
				description: '',
				details: 'Reach 2; 1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '15e418e4-f039-4ebc-bb77-d4e6621f784d',
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
				attack: null,
				description: '',
				details: 'Reach 2; 1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '479913db-dfe1-45f3-899b-87ad35a010f9',
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
				attack: null,
				description: '',
				details: 'The young adamantine dragon makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '468034fe-6f82-40c3-bf73-7be31bf38175',
				name: 'Wing Buffet',
				action: {
					action: 4,
					trigger: 'when an enemy enters or leaves an adjacent square',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Reach 2; 1d8+3 damage, and the target is knocked prone.',
				damage: '1d8+3 damage',
				category: 5
			},
			{
				id: 'ca653979-9654-4606-a84f-8d60b08a9cd3',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Thunder',
				condition: '',
				range: '2d6+3 thunder damage, and the target is knocked prone. Miss: Half damage. Effect: At the start of the young adamantine dragon’s next turn, it gives a thunderous roar: close burst 3',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'no attack roll; 10 thunder damage.',
				damage: '10 thunder damage',
				category: 1
			},
			{
				id: 'dbd37e5a-6324-4360-a2f2-f9d15c3fc1d4',
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
				details: 'Breath weapon recharges, and the young adamantine dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: '2baa2573-977a-40e0-bfed-4ca3e2636507',
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
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the young adamantine dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 10,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Solo Soldier',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '57281ae1-2203-4ffb-b90b-2fa7da13221e',
		name: 'Young Copper Dragon',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 6,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '8, fly 10 (hover), overland flight 15',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +13, Bluff +9, Insight +10',
		equipment: '',
		category: 'Dragon',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 296,
		initiative: 10,
		ac: 20,
		fortitude: 18,
		reflex: 19,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0382170a-cff7-4089-a54c-a574bd71a124',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'The young copper dragon shifts 2 squares before and after making the attack. Reach 2; 1d10+4 damage plus 1d6 acid damage.',
				damage: '1d10+4 damage plus 1d6 acid damage',
				category: 1
			},
			{
				id: '53695518-d83d-4efd-bdf1-59d66611f0bb',
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
				details: 'Reach 2; 1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '20eea920-f6b3-430a-b15e-d4652eae5298',
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
				attack: null,
				description: '',
				details: 'The young copper dragon makes two claw attacks and then shifts 2 squares.',
				damage: 'The young copper dragon makes two claw attacks and then shifts 2 squares',
				category: 1
			},
			{
				id: '9c3e21f0-2ae4-4fc6-b921-3102adebd1d3',
				name: 'Flyby Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The young copper dragon flies 10 squares and makes one melee basic attack at any point during that movement. The dragon doesn’t provoke opportunity attacks when moving away from the target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '376b688e-8c06-4b20-850d-395d61acdcfb',
				name: 'Cutwing Step',
				action: {
					action: 4,
					trigger: 'when an enemy moves to a space where it flanks the young copper dragon',
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
				details: 'Targets the triggering enemy; 1d8+3 damage, and the copper dragon shifts 2 squares.',
				damage: '1d8+3 damage',
				category: 5
			},
			{
				id: 'c9deceee-3c4b-4b3c-b3fc-be9f9f86a366',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d10+4 acid damage, and the target is slowed (save ends). Miss: Half damage.',
				damage: '1d10+4 acid damage',
				category: 1
			},
			{
				id: '853424c1-8839-47f6-860b-69ff3fc121f8',
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
				details: 'Breath weapon recharges, and the young copper dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: 'ba00a2d3-3fac-4a44-97aa-475ad0b3d9ac',
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
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the young copper dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Solo Skirmisher',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '84ef9eca-760a-421f-94ad-f1e5ca172f77',
		name: 'Young Gold Dragon',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 9,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '8, fly 10 (hover), overland flight 15',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Arcana +15, Athletics +13, Diplomacy +13, Insight +12, Intimidate +13',
		equipment: '',
		category: 'Dragon',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 380,
		initiative: 7,
		ac: 23,
		fortitude: 21,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ccbfa3e-035e-4785-976e-bb496b137a28',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+4 damage plus 2d6 fire damage.',
				damage: '2d8+4 damage plus 2d6 fire damage',
				category: 1
			},
			{
				id: '53da9c07-8608-4305-8c60-144ed97d5fd1',
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
				details: 'Reach 2; 2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '9e07bf99-74e3-44bf-9ecf-ccaf91f71195',
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
				attack: null,
				description: '',
				details: 'The young gold dragon makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '79e4449b-a409-4be2-b93a-83deb53ae6db',
				name: 'Fiery Wing Riposte',
				action: {
					action: 4,
					trigger: 'when the young gold dragon is hit by a creature adjacent to it',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'the target is pushed 5 squares and takes ongoing 5 fire damage (save ends).',
				damage: 'the target is pushed 5 squares and takes ongoing 5 fire damage (save ends)',
				category: 5
			},
			{
				id: '28e33a30-e3de-4580-88c2-c0afc8a29055',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '2d6+5 fire damage, and the target is weakened (save ends). Miss: Half damage.',
				damage: '2d6+5 fire damage',
				category: 1
			},
			{
				id: '78f6927d-33ff-48ef-bf6b-c42dc23d0107',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Breath weapon recharges, and the young gold dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: 'e742cdcd-9cb5-4106-b8ac-fc96c96cdf32',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the young gold dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
				category: 1
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

		info: 'Level 9 Solo Controller',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '35c958ea-aca4-40cc-a52b-8f86899ce5fb',
		name: 'Young Iron Dragon',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 5,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '8, fly 8 (hover), overland flight 10',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +9, Athletics +8, Stealth +9',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 268,
		initiative: 8,
		ac: 19,
		fortitude: 19,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '15d5d1ad-c7cd-4853-9a79-d35aa571bc49',
				name: 'Bite',
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
				attack: null,
				description: '',
				details: 'Reach 2; 2d8+4 damage plus 1d8 lightning damage.',
				damage: '2d8+4 damage plus 1d8 lightning damage',
				category: 1
			},
			{
				id: '545d9556-aaf1-489f-be66-31657c7ae2ac',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'ad297740-ffc7-437c-9b7e-f8fb138a24f3',
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
				attack: null,
				description: '',
				details: 'The young iron dragon makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'dcfeb991-8eb8-420a-a479-cfd7655ce252',
				name: 'Wing Block',
				action: {
					action: 5,
					trigger: 'when the young iron dragon is hit by an attack',
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
				details: 'The dragon gains resist 5 to all damage of the triggering attack, and it makes an attack; 1d6+4 damage.',
				damage: 'the dragon gains resist 5 to all damage of the triggering attack',
				category: 5
			},
			{
				id: '86cd7ef7-4326-45f9-8610-c7639b8769b3',
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
				range: 'Close blast 5',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '2d6+4 lightning damage, and the young iron dragon pulls the target 3 squares. Miss: Half damage.',
				damage: '2d6+4 lightning damage',
				category: 1
			},
			{
				id: '32c94340-319f-47cd-8726-4bdf71f10527',
				name: 'Bloodied',
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
				details: 'Breath weapon recharges, and the young iron dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: '413c4148-c6da-49a4-a8fc-b81a49587b5f',
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
					bonus: 6,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the young iron dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
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

		info: 'Level 5 Solo Lurker',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '15319eb0-7813-4a29-b14a-aa86628a968b',
		name: 'Young Rust Monster Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'swarm',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 92,
		initiative: 12,
		ac: 25,
		fortitude: 19,
		reflex: 24,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '0710053d-7e9e-4500-9be4-3efbf3d98f24',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; each enemy that starts its turn within the aura takes 3 damage. If the enemy has a rusting item, that enemy is also slowed until the end of its turn.'
			}
		],
		powers: [
			{
				id: 'e60e90a2-042a-4967-bf34-f2cc3506b432',
				name: 'Swarm of Teeth',
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
					defence: 2
				},
				description: '',
				details: '2d8+1 damage, and if the target is wearing heavy armor, the armor is rusting until the end of the encounter. While the armor is rusting, the target takes a cumulative -1 penalty to AC, to maximum penalty of -5.',
				damage: '2d8+1 damage',
				category: 1
			},
			{
				id: 'c051b60e-0675-4ab6-a88f-9d186edb00ce',
				name: 'Rusting Defense',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when the rust monster swarm is hit by a weapon attack',
				range: '',
				attack: null,
				description: '',
				details: 'The weapon used in the triggering attack is rusting until the end of the encounter. While the weapon is rusting, the target takes a cumulative -1 penalty to damage rolls on attacks that use the weapon, to a maximum penalty of -5.',
				damage: 'the target takes a cumulative -1 penalty to damage rolls on attacks that use the weapon',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: '',
		tactics: '',

		info: 'Level 9 Soldier',
		phenotype: 'Medium natural beast (swarm)'
	},
	{
		id: 'aa30a1ef-bf28-4fa3-80c1-7455e65e0188',
		name: 'Young Silver Dragon',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 8,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6, fly 6 (hover), overland flight 10',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Athletics +16, Insight +10',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 376,
		initiative: 7,
		ac: 20,
		fortitude: 22,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9750d686-e90a-4a28-89ee-75c150e51802',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'f76530a4-5ce5-4369-b460-f168222b57c0',
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
				details: 'Reach 2; 1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '65842714-a3d1-4d7a-8034-2cbeaaed5452',
				name: 'Dragon Onslaught',
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
				details: 'The young silver dragon makes a claw attack against each enemy within reach.',
				damage: '',
				category: 1
			},
			{
				id: 'e4c7e742-9eea-4b32-9810-f12d0eef2140',
				name: 'Wing Slice',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the young silver dragon while flanking it',
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
				details: 'Reach 2; targets the triggering enemy and an enemy flanking with the triggering enemy; 1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 5
			},
			{
				id: '10fc272c-a3d9-4db4-a752-fdddb571e9b7',
				name: 'Breath Weapon',
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
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d8+5 cold damage, and the target gains vulnerable 5 to all damage (save ends). Miss: Half damage.',
				damage: '1d8+5 cold damage',
				category: 1
			},
			{
				id: '3fa5575d-e0fa-4576-adeb-6bc572ae3b0f',
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
				details: 'Breath weapon recharges, and the young silver dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: '9634163f-747a-4d0b-87f0-4c9b7f1e5a70',
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
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the young silver dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
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

		info: 'Level 8 Solo Brute',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '13ac6db1-63a4-4684-a154-8bcb275eeaf7',
		name: 'Blood Scarab',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 3,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '5, burrow 5',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 41,
		initiative: 8,
		ac: 18,
		fortitude: 15,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ccd609c9-a4fb-4dc5-a7ab-d092c5227469',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'ed28ef05-c1bc-4191-8e32-163e23391b8a',
				name: 'Ambush Bite',
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
				details: 'Use only after scarab emerges after burrowing; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Lurker',
		phenotype: 'Medium natural beast'
	},
	{
		id: 'd6d95212-529d-46e0-b51c-a36f5b739b92',
		name: 'Goblin Delver',
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
		senses: 'Perception +6; low-light vision',
		movement: '6',
		alignment: 'Any',
		languages: 'Common, Goblin',
		skills: 'Dungeoneering +6, Stealth +11, Thievery +11',
		equipment: '',
		category: 'Goblin',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 59,
		initiative: 8,
		ac: 18,
		fortitude: 15,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '09618bc2-eaa8-4f0b-be3f-41aa96bb6ca8',
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
				details: '1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: '6e4edc61-d455-40de-9859-cd821dd1dd5b',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: '1eac8f4b-790f-4580-952a-6c3a9cc950f0',
				name: 'Grab Bag',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'delver randomly pulls an item from pack and throws it; roll 1d4 for effect: 1: Stone, 1d6 + 4 damage; 2: Alchemist’s Fire, 1d8 + 4 fire damage and 5 fire damage to all creatures adjacent to target; 3: Caltrops, 1d6 + 4 damage and target is slowed (save ends); 4: Healing Flask, target heals 5 hp.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: 'bbf75575-bfde-4d6b-a6f1-2db11d7225b6',
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
				details: 'The goblin shifts 1 square.',
				damage: 'The goblin shifts 1 square',
				category: 5
			},
			{
				id: '3fccbbff-b949-430d-b378-798fd71d5cc8',
				name: 'Untidy Death',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the delver is reduced to 0 hit points, it drops everything it carries and its square becomes difficult terrain.',
				damage: '',
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
		id: 'a9faf461-92ab-473b-a087-dce40e6ac8e9',
		name: 'Minotaur Battle Shaman',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Intimidate +14, Nature +17, Religion +12',
		equipment: '',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 94,
		initiative: 9,
		ac: 24,
		fortitude: 24,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '7e63af13-db12-4115-813f-d0210b476d29',
				name: 'Spirit of Health',
				keywords: '',
				details: 'aura 5; allies that start their turn in the aura gain 5 temporary hit points.'
			}
		],
		powers: [
			{
				id: '69fe9ed6-3b0e-47b5-a105-3f329d47a20b',
				name: 'Primal Punch',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d4+5 damage, and shaman shifts 1 square.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '5629f0b7-9fe2-4298-9f85-7ab99f270595',
				name: 'Primal Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d8+5 damage, and the shaman regains 5 hit points.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'd1e5ac47-b600-49c8-9778-1be5cc2c6911',
				name: 'Spirit of Nature’s Rage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'enemies only; 3d6+5 damage, and the target slides 2 squares and makes an immediate basic attack against the nearest ally it can reach.',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: '547d8be4-0345-4e00-8715-0d744d3022f3',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The minotaur makes a melee basic attack.',
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

		info: 'Level 12 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '50e19eef-53cc-4a9e-8169-df2e5d8fa2e9',
		name: 'Orc Terrorblade',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 6,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Endurance +11, Intimidate +7',
		equipment: '',
		category: 'Orc',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 87,
		initiative: 5,
		ac: 18,
		fortitude: 19,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '49dd1b6c-0284-4fcc-9467-02bd8d5f2a0f',
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
				details: '3d4+6 damage (crit 2d4+18).',
				damage: '3d4+6 damage (crit 2d4+18)',
				category: 1
			},
			{
				id: 'ac097559-9a02-4e9a-8fb2-eba96947b84d',
				name: 'Bloodfury Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: 'only while bloodied',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '4d4+6 damage (crit 2d4+22). Hit or Miss: The orc regains 10 hit points.',
				damage: '4d4+6 damage (crit 2d4+22)',
				category: 1
			},
			{
				id: '721d171b-0f64-4ab8-bcbc-52c86f46d249',
				name: 'Bloodthirsty',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the orc hits a bloodied target, the attack deals an extra 2d4 damage.',
				damage: 'the attack deals an extra 2d4 damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Brute',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '3794f872-7ea8-4dd3-abd1-1f419fbc0e01',
		name: 'Yuan-Ti Fangblade',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic',
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
			score: 22,
			modifier: 6,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 170,
		initiative: 13,
		ac: 26,
		fortitude: 27,
		reflex: 27,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: 'a05b2c3a-13b2-4d0e-87ae-a113798249c0',
				name: 'Zehir’s Fang',
				keywords: '',
				details: 'aura 10; reptile allies in the aura gain a +1 power bonus to attack rolls.'
			}
		],
		powers: [
			{
				id: 'a607f326-2047-42ae-a88d-3631a984d487',
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
				details: '2d10+5 damage.',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: 'b30e6257-d0a9-41bd-957e-d11f46d5b851',
				name: 'Poison Bite',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d6+4 damage, and ongoing 5 poison damage (save ends).',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '32fa42ad-ceaa-4f80-83a1-70728ea15a03',
				name: 'Swift Strikes',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when yuan-ti starts its turn adjacent to an immobilized creature'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The yuan-ti fangblade makes a greatsword attack and a poison bite attack.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute (L)',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: 'b5b7a7ae-45bb-4bad-9b44-fc698bda3625',
		name: 'Doomdreamer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common, Primordial',
		skills: '',
		equipment: 'mace',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 87,
		initiative: 6,
		ac: 22,
		fortitude: 18,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '0fa4ce97-3c0d-428e-a2dd-3d98792420c8',
				name: 'Blessing of the Elemental Eye',
				keywords: '',
				details: 'aura 2; elemental and demon allies within the aura gain a +2 bonus to attack rolls.'
			}
		],
		powers: [
			{
				id: '3e2b1b4f-ae82-4409-ab24-baa39be03c58',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '79dab5ab-5639-4503-beee-e0ce9625e412',
				name: 'Chilling Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d8+7 cold damage, and the target is immobilized until the end of the doomdreamer’s next turn.',
				damage: '1d8+7 cold damage',
				category: 1
			},
			{
				id: '321b311d-827d-4251-a1f7-72ddac6ef116',
				name: 'Touch of Insanity',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: '1d6+7 psychic damage, and the target must move at least 1 square during its turn or take 10 psychic damage at the end of its turn (save ends).',
				damage: '1d6+7 psychic damage',
				category: 1
			},
			{
				id: '9455023b-1e59-4d6d-aa63-f6551fa97b7c',
				name: 'Maddening Howl',
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
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+7 thunder damage, and the target is dazed until the end of the doomdreamer’s next turn.',
				damage: '2d8+7 thunder damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'db594f5b-69ca-4132-a365-37f9aa687d59',
		name: 'Duergar Cleric of Asmodeus',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'devil, dwarf',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Dwarven, Supernal',
		skills: 'Arcana +11, Diplomacy +10, Religion +11',
		equipment: '',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 82,
		initiative: 3,
		ac: 20,
		fortitude: 20,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '088befeb-c2c4-49fb-899c-3b092d1b362d',
				name: 'Morningstar',
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
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'a1945010-031f-4ae9-9e09-f253a345609d',
				name: 'Iron Bolt of Obedience',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '(standard',
				range: 'the target slides 3 squares and makes a melee or ranged basic attack against a target of the cleric’s choice with a +4 power bonus to the attack roll.',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '68f79640-d00b-4a9c-b1a3-d2be697667dd',
				name: 'Demand Tribute',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d8+4 necrotic damage. Until the end of the encounter, whenever the target spends a healing surge or allows another creature to spend a healing surge, the cleric regains 10 hit points.',
				damage: '1d8+4 necrotic damage',
				category: 1
			},
			{
				id: 'ceb6653e-2016-47f5-910c-1b551a04d7b4',
				name: 'Tyrannical Judgment',
				action: {
					action: 4,
					trigger: 'when an ally within 5 squares of the cleric misses with an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: null,
				description: '',
				details: 'the ally takes 5 damage and rerolls the attack.',
				damage: 'the ally takes 5 damage and rerolls the attack',
				category: 5
			},
			{
				id: '95ae364c-46a4-49eb-ac29-12510da14719',
				name: 'Wave of Despair',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '2d8+5 psychic damage. Allies in the blast gain 5 temporary hit points and a +2 power bonus to attack rolls until the end of the cleric’s next turn.',
				damage: '2d8+5 psychic damage',
				category: 1
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
		immune: 'illusion',
		tactics: '',

		info: 'Level 7 Controller',
		phenotype: 'Medium natural humanoid (devil, dwarf)'
	},
	{
		id: '3efcc7cb-b479-46c9-8bb0-73f595a602e9',
		name: 'Minotaur Thug',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +12, Athletics +13',
		equipment: 'short sword',
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
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 95,
		initiative: 9,
		ac: 22,
		fortitude: 22,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '46aa33bf-778d-4a4f-81e9-a2d7cd47526b',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '4074ef8c-e923-402e-b65b-e85197c41deb',
				name: 'Slashing Charge',
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
				details: 'The minotaur thug makes a charge attack; 2d6+5 damage, and the target is pushed 1 square. Effect: The minotaur thug shifts 2 squares after the attack.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '50a0b765-d8e6-424a-bfbc-dc0fd7af12e2',
				name: 'Goring Rampage',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'The minotaur thug moves 6 squares and makes up to three attacks at any point during this move, attacking a different target each time; 1d6+5 damage, and the target slides 1 square.',
				damage: '1d6+5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '47d5f546-7f6f-4f0f-882d-7816e3298d9c',
		name: 'Psychic Sentinel',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 0,
		initiative: 10,
		ac: 10,
		fortitude: 10,
		reflex: 10,
		will: 10,
		regeneration: null,
		auras: [
			{
				id: '07ca0df3-0f29-48c7-bce9-40d2b95bc146',
				name: 'Mind Lock Aura',
				keywords: '',
				details: 'aura 2; a creature that starts its turn within'
			}
		],
		powers: [
			{
				id: '66a61bac-42d1-4077-8201-c18d4bd98a51',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+5 damage, and the target is marked until the end of the psychic sentinel’s next turn.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'c46cbb5c-b108-40e0-af51-b1f3796491b7',
				name: 'Ruby Beam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '2d6+7 psychic damage, and the target is marked until the end of the psychic sentinel’s next turn.',
				damage: '2d6+7 psychic damage',
				category: 1
			},
			{
				id: '2cd63771-02ce-4c08-8f9e-871dca14a1bd',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The psychic sentinel makes a slam attack and a ruby beam attack or two slam attacks.',
				damage: '',
				category: 1
			},
			{
				id: '1ac0c92d-cf04-4359-a73d-fd5f7013176d',
				name: 'Psychic Backlash',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d6+10 psychic damage.',
				damage: '3d6+10 psychic damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Soldier',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'a3cc4383-177e-496e-8201-7d94baa2bd24',
		name: 'Bullywug Guard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '5 (swamp walk), swim 4',
		alignment: 'Chaotic Evil',
		languages: 'Primordial',
		skills: 'Athletics +8',
		equipment: 'club; leather armor',
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
			score: 7,
			modifier: -2,
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
		hp: 49,
		initiative: 5,
		ac: 19,
		fortitude: 16,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [
			{
				id: '83eb4f19-44e6-4ec8-96b4-9b690517d8a4',
				name: 'Rancid Air',
				keywords: '',
				details: '(Poison) aura 2; each enemy that spends a healing surge within the aura is weakened until the end of its next turn.'
			}
		],
		powers: [
			{
				id: 'de75cc49-a958-49b8-819f-a85838995e2b',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'ff02db5d-cdc1-40f0-b334-3d8035842608',
				name: 'Leaping Bash',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'The bullywug guard shifts 2 squares and attacks; 2d6+7 damage, and the target is knocked prone.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '665aa0b2-fe2d-4cb4-a3e5-a0c7e41e2f61',
				name: 'Protecting Hop',
				action: {
					action: 5,
					trigger: 'when an adjacent ally is hit by a melee or ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bullywug guard swaps positions with the ally, and the triggering attack is redirected to the bullywug guard.',
				damage: '',
				category: 5
			},
			{
				id: 'e0997855-a783-4569-9e82-5601b0d1671b',
				name: 'Nature’s Release',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any attacker who scores a critical hit against a bullywug guard regains 5 hit points.',
				damage: 'Any attacker who scores a critical hit against a bullywug guard regains 5 hit points',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid (aquatic)'
	},
	{
		id: '237e7788-ad29-4a7f-978a-1c245e23828b',
		name: 'Goblin Wolf Rider',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; low-light vision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +9',
		equipment: 'leather armor; short sword',
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
		hp: 62,
		initiative: 6,
		ac: 19,
		fortitude: 17,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dccf27e2-2e81-4012-ad41-c07d18da2b3b',
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
				details: '1d6+7 damage.',
				damage: '1d6+7 damage',
				category: 1
			},
			{
				id: 'f057afeb-203c-4084-8662-5a0119cf4102',
				name: 'Wolf’s Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: 'prone target only',
				range: '',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'f6bbda08-4c12-4abf-a8cb-b3f1a2fb17d3',
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
				range: 'The goblin wolf rider moves half its speed and makes one melee basic attack during the move. It doesn’t provoke opportunity attacks while moving away from the target of this attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'cf00d5eb-6eeb-49aa-a6f1-a9f957e51132',
				name: 'Knockdown Charge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the goblin wolf rider charges, it deals 1d6 extra damage and knocks the target prone.',
				damage: 'it deals 1d6 extra damage and knocks the target prone',
				category: 0
			},
			{
				id: '2c85c9fe-b131-4cf6-92dd-2f602a69dc31',
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
				details: 'The goblin wolf rider shifts 1 square.',
				damage: 'The goblin wolf rider shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: 'ec8a6d7f-744e-44b4-a7d7-f25597a3199b',
		name: 'Human Outrider',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +12',
		equipment: 'leather armor; longsword',
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
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 74,
		initiative: 9,
		ac: 20,
		fortitude: 19,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0a585ff1-1b99-4c8f-b43a-8393660174d4',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, plus 1d8 damage on charge attacks.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '20a95eb0-c3cc-46b1-93ec-72d2a34e0318',
				name: 'Trample',
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
					defence: 2
				},
				description: '',
				details: 'The human outrider moves its speed and can enter enemies’ spaces. The outrider makes an attack; 1d6+6 damage, and the target is knocked prone.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '8274d308-e600-4528-b27c-4fb6bb6c3b71',
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
				range: 'The human outrider moves half its speed and makes one melee basic attack during the move. It doesn’t provoke opportunity attacks while moving away from the target.',
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

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9060bd4b-6348-46cb-8eb4-227e88ff69c1',
		name: 'Skeletal Cyclops',
		details: '',
		size: 3,
		origin: 2,
		type: 0,
		keywords: 'undead',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '8',
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 147,
		initiative: 12,
		ac: 24,
		fortitude: 24,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '82dd1149-b13c-4da8-8163-39b8bc271076',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12+7 damage.',
				damage: '1d12+7 damage',
				category: 1
			},
			{
				id: 'db1fb659-9e26-46bc-b1e5-f1969f6c2bf4',
				name: 'Brush Aside',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges at the start of the skeletal cyclops’s turn when a creature affected by its undead eye is more than 2 squares away from the cyclops'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 2',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'the target is pushed 2 squares.',
				damage: 'the target is pushed 2 squares',
				category: 3
			},
			{
				id: '8299fdd4-3d12-40c0-bcd0-373fa1cabe25',
				name: 'Undead Eye',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the skeletal cyclops',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering enemy gains vulnerable 10 to the skeletal cyclops’s attacks until the end of the cyclops’s next turn.',
				damage: 'The triggering enemy gains vulnerable 10 to the skeletal cyclops’s attacks until the end of the cyclops’s next turn',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Brute',
		phenotype: 'Large fey animate (undead)'
	},
	{
		id: '3ca0f72a-1032-454f-a813-467c3e4c5155',
		name: 'Skeletal Tiefling',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'longsword; scale armor',
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
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 90,
		initiative: 11,
		ac: 24,
		fortitude: 20,
		reflex: 21,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5697331b-dddb-441f-bf7d-27349ab6d9cf',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '(+17 against bloodied targets)1d8+8 damage, and the target is marked until the end of the skeletal tiefling’s next turn.',
				damage: '(+17 against bloodied targets)1d8+8 damage',
				category: 1
			},
			{
				id: 'cf4e7d0b-8f97-4819-8647-e2af8b6c9268',
				name: 'No Escape',
				action: {
					action: 5,
					trigger: 'when an enemy marked by the skeletal tiefling shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The skeletal tiefling makes a longsword attack against the triggering creature.',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '6cb25615-5fef-4f53-86f8-afb369cb753f',
		name: 'Tiefling Necromancer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +14, Stealth +11',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 188,
		initiative: 6,
		ac: 23,
		fortitude: 20,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cef8d7c0-42c5-49b2-81d3-0cc3a6e0c122',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: '5da44931-3d8a-4402-aaf8-5a00b0298c83',
				name: 'Infernal Puppet',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: '2d8+3 psychic damage, and the target slides 5 squares.',
				damage: '2d8+3 psychic damage',
				category: 3
			},
			{
				id: '9f1b1544-74a3-4ed6-99e8-f110a452eec3',
				name: 'Withering Consumption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '2d8+3 necrotic damage, the target is weakened until the end of the necromancer’s next turn, and one undead ally within 5 squares regains 5 hit points.',
				damage: '2d8+3 necrotic damage',
				category: 1
			},
			{
				id: '2c190ad6-7638-4011-8c89-dc303e17e7d7',
				name: 'Chilling Transfer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Healing',
				condition: 'targets enemies',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '4d6+3 cold damage, and the target is slowed (save ends). Each undead ally in burst regains 5 hit points.',
				damage: '4d6+3 cold damage',
				category: 1
			},
			{
				id: '1c678f19-0bbc-4876-8331-868197620130',
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
				details: 'The tiefling gains a +1 bonus to next attack roll against an enemy that hit the necromancer since its last turn. If the attack hits, it deals 5 extra damage.',
				damage: 'it deals 5 extra damage',
				category: 3
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
			}
		],
		resist: '',
		vulnerable: 'radiant (undead allies within 5 squares of the necromancer are slowed until the end of the necromancer’s next turn.)',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ea7f10a9-d2ae-45e6-91ef-7b538902ede1',
		name: 'Vampire Guildmaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +12; darkvision',
		movement: '8, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 192,
		initiative: 15,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 22,
		regeneration: {
			value: 10,
			details: 'doesn’t function while in direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: '0e5b419f-c615-4199-825a-a7c35a22a988',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'normal form only',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '6c7ce823-f879-4c76-a680-2b57b04879ab',
				name: 'Flash of Steel',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'normal form only',
				range: 'Moves its speed and makes two melee basic attacks against different targets at any point during the move. Doesn’t provoke opportunity attacks when moving away from either target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'd9667967-2b80-4fa4-8f98-1c8bcfb36012',
				name: 'Swarm of Teeth',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: 'animal form only',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+2 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d6+2 necrotic damage',
				category: 1
			},
			{
				id: '8278f908-2a0a-4fd0-9bbb-2252c1abc2ab',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when adjacent creature becomes bloodied'
				},
				keywords: 'Healing',
				condition: 'requires combat advantage',
				range: '',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d10+7 damage, the target is weakened (save ends), and the guildmaster regains 48 hit points.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: '86a4b06b-7ef2-41d2-91aa-e0c96e1677ff',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The vampire guildmaster deals 2d6 extra damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'f21e4c29-c8b4-4233-9049-70343da87ed4',
				name: 'Animal Form',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: 'revert minor',
				range: '',
				attack: null,
				description: '',
				details: 'Transforms into swarm of rats (as MM 219, but resist is 10).',
				damage: 'Transforms into swarm of rats (as MM 219',
				category: 3
			},
			{
				id: 'e91cf9c1-0a1d-4abb-935d-23fabf7dcf63',
				name: 'Inspiring Gaze',
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
				details: 'One humanoid ally within 5 squares of the vampire shifts 1 square and deals 1d6 extra damage until end of guildmaster’s next turn.',
				damage: 'one humanoid ally within 5 squares of the vampire shifts 1 square and deals 1d6 extra damage until end of guildmaster’s next turn',
				category: 3
			},
			{
				id: '89cebdfe-5330-4c63-a5ae-3057dec2e1b2',
				name: 'Blanket of Mist',
				action: {
					action: 5,
					trigger: 'when reduced to 0 hp',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attack misses. The guildmaster becomes insubstantial, shifts 6 squares, and gains a fly speed of 12, but cannot attack. This effect lasts up to 1 hour.',
				damage: 'shifts 6 squares',
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

		info: 'Level 12 Elite Skirmisher (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '66e14ff5-eea6-4cf2-ae60-91b001798ec6',
		name: 'Aarakocra Skyscout',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 1,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7, eagle eyes',
		movement: '6',
		alignment: 'unaligned',
		languages: 'Aarakocra',
		skills: 'Acrobatics +8, Athletics +6, Perception +7',
		equipment: 'spear, 4 javelins',
		category: 'Aarakocra',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 27,
		initiative: 5,
		ac: 14,
		fortitude: 13,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9b36e541-929c-45d1-abc7-9653ae3c914f',
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
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: 'd75c9227-2727-416f-b42b-4eb90e677722',
				name: 'Javelin',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(Standard',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Range 10/20; 1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '17d264f4-c42b-49d6-9137-c65a51cd0dfd',
				name: 'Descending Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The aarakocra charges and descends at least 10�. At the end of this charge, the aarakocra may make a basic attack (thrown or melee) with a +1 bonus to attack. If it hits, it deals 3d8+3 damage and knocks the target prone.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '58475617-b426-4e20-a4c6-cec928da04bf',
				name: 'Eagle Eyes',
				action: null,
				keywords: '',
				condition: 'No Action',
				range: '',
				attack: null,
				description: '',
				details: 'An aarakocra has a +10 check on Perception checks involving seeing objects at least 10 squares away. (Starting encounter distance for aarakocra should be adjusted accordingly by the dm.) ',
				damage: 'An aarakocra has a +10 check on Perception checks involving seeing objects at least 10 squares away',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3125a7c1-e99d-4cbf-ac06-16028e8de112',
		name: 'Abhorrent Reaper',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 23,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '8, fly 12 (hover)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +23',
		equipment: 'sickle',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 424,
		initiative: 18,
		ac: 40,
		fortitude: 37,
		reflex: 34,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '414e3e6c-0c01-4086-826b-be73a7854b2a',
				name: 'Aura of Ruin',
				keywords: '',
				details: 'aura 5; any ally within the aura deals 1d6 extra necrotic damage with melee attacks.'
			}
		],
		powers: [
			{
				id: 'c85fd9a3-aec4-4c98-b2a9-7fc61bcb8091',
				name: 'Abhorrent Sickle',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+8 necrotic damage.',
				damage: '3d6+8 necrotic damage',
				category: 1
			},
			{
				id: '1adcde81-efbf-448a-9f46-c136745c8576',
				name: 'Hateful Charge',
				action: {
					action: 1,
					trigger: 'usable only when charging',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Requires sickle; 3d6+8 necrotic damage, and the target is knocked prone and is immobilized until the end of the abhorrent reaper’s next turn.',
				damage: '3d6+8 necrotic damage',
				category: 5
			},
			{
				id: 'd55eb990-a6ba-4315-8c9e-a21f5b62608d',
				name: 'Hate’s Cleave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: 'close burst 2',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Requires sickle; 6d6+8 necrotic damage.',
				damage: '6d6+8 necrotic damage',
				category: 1
			},
			{
				id: '5f2ca48e-65df-49e3-9d1c-3419b2df4dc1',
				name: 'Bloodthirst',
				action: null,
				keywords: '',
				condition: '',
				range: 'When an abhorrent reaper bloodies an enemy, one of the abhorrent reaper’s allies can make a melee basic attack against the bloodied creature as a free action.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'e946b526-84d4-4be9-a4a7-e2fcf183ef04',
				name: 'Umbral Phantasm',
				action: {
					action: 5,
					trigger: 'when the abhorrent reaper would take damage',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The abhorrent reaper becomes insubstantial until it attacks or until the end of its next turn.',
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
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 23 Elite Soldier (L)',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '84ebce60-0c82-4285-ba53-160b1bc76e0e',
		name: 'Accipitridae',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: 'fly 7 (hover)',
		alignment: 'Evil',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 63,
		initiative: 7,
		ac: 19,
		fortitude: 16,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '981ce77f-4c55-45d6-b9af-27996298b5e3',
				name: 'Rake',
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
				attack: null,
				description: '',
				details: '1d6+2 necrotic damage, and the target is blinded until the end of the accipitridae’s next turn.',
				damage: '1d6+2 necrotic damage',
				category: 1
			},
			{
				id: 'ffbf9272-d44a-492b-8dae-1aac0baaeb00',
				name: 'Bite',
				action: {
					action: 3,
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
				details: 'Targets a bloodied enemy; 1d8+4 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+4 necrotic damage',
				category: 3
			},
			{
				id: 'f5e77b12-fa68-4dd2-bb8a-2c6a6c15cb77',
				name: 'Screeching Retreat',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '2d6+5 thunder damage, and the target is dazed (save ends). Hit or Miss: The accipitridae shifts up to 3 squares.',
				damage: '2d6+5 thunder damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Medium natural beast (undead)'
	},
	{
		id: '02ddb355-c793-411b-9245-ae82736056f9',
		name: 'Acererak (Demilich)',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 26,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: 'fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +28, History +25, Insight +26',
		equipment: '',
		category: 'Acererak',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 1000,
		initiative: 20,
		ac: 44,
		fortitude: 39,
		reflex: 43,
		will: 42,
		regeneration: {
			value: 30,
			details: 'if Acererak takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: 'fb10a1fe-c98d-4678-bb13-28219bf2a916',
				name: 'Intruding Terror',
				keywords: '',
				details: '(Fear) aura 2; enemies within the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: 'fd6a4c7b-f6ec-47af-a026-d3b2ad8f3e12',
				name: 'Shadow Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '3d8+8 necrotic damage.',
				damage: '3d8+8 necrotic damage',
				category: 1
			},
			{
				id: '8e51d706-d083-48d4-b2a3-f1f82be390f7',
				name: 'Shadow Drain',
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
				attack: null,
				description: '',
				details: 'Acererak makes a shadow ray attack and a drain soul attack.',
				damage: '',
				category: 1
			},
			{
				id: '33634679-6f17-4dc7-bbf1-724b72c90897',
				name: 'Drain Soul',
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
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'does not provoke opportunity attacks; the target is dazed and restrained (save ends both). First Failed Saving Throw: The target is instead stunned and restrained (save ends both). Second Failed Saving Throw: The target dies, and its soul is trapped in one of Acererak’s soul gems until Acererak is destroyed.',
				damage: '',
				category: 1
			},
			{
				id: 'd3455582-f9c5-4558-9e92-d04f8d05a246',
				name: 'Azure Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: 'the target takes ongoing 10 psychic damage and is slowed (save ends both).',
				damage: 'the target takes ongoing 10 psychic damage and is slowed (save ends both)',
				category: 3
			},
			{
				id: 'd2ceea72-1d9d-4325-a986-c55af2bbcd38',
				name: 'Prismatic Burst',
				action: {
					action: 1,
					trigger: 'expends a trapped soul',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Cold, Fire, Lightning, Thunder',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '3d8+8 cold, fire, lightning, and thunder damage, and the target is stunned until the end of Acererak’s next turn.',
				damage: 'and thunder damage',
				category: 5
			},
			{
				id: '8e1924fb-609f-40ea-b734-37ece3759f34',
				name: 'Soul Shriveling Pulse',
				action: {
					action: 4,
					trigger: 'when a creature fails a saving throw against drain soul',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: '3d8+8 necrotic damage, and the target is immobilized and takes a -2 penalty to saving throws (save ends both).',
				damage: '3d8+8 necrotic damage',
				category: 5
			},
			{
				id: 'd72eba34-f24a-4cbd-b3a6-5f7defaed5b1',
				name: 'Consume Soul',
				action: {
					action: 3,
					trigger: 'expends a trapped soul',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Acererak regains 250 hit points.',
				damage: 'Acererak regains 250 hit points',
				category: 5
			},
			{
				id: '998fa346-6b67-4539-af08-ba60564300e9',
				name: 'Soul Gems',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Acererak’s eight soul gems can each hold the soul of one of his victims. At the beginning of an encounter, the soul gems contain three souls. Crushing a gem after Acererak is defeated releases the soul to the Shadowfell.',
				damage: '',
				category: 0
			},
			{
				id: '1a217746-a4a1-441b-98b5-79a4230a76b3',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Acererak’s skull (but not the soul gems) crumbles to dust, but Acererak is not destroyed. He reappears in 1 day adjacent to his phylactery, unless the phylactery is also found and destroyed.',
				damage: 'He reappears in 1 day adjacent to his phylactery',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 8,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 26 Solo Controller',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: '14f39d22-f91b-4cbe-897c-5fb6bdbe3bbf',
		name: 'Acererak Construct',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'homunculus, undead',
		level: 13,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: 'fly 10 (hover)',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Acererak',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 600,
		initiative: 9,
		ac: 28,
		fortitude: 29,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: 'd7c55fd3-62cf-41d0-a969-c6539879bdea',
				name: 'Intruding Terror',
				keywords: '',
				details: '(Fear) aura 2; enemies within the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '4ea3fad9-26cb-439f-918b-c8a3191cb933',
				name: 'Shadow Ray',
				action: {
					action: 1,
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
				id: '8ef8f929-7e1e-4f28-9017-93c1d398a300',
				name: 'Twin Rays',
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
				attack: null,
				description: '',
				details: 'The Acererak construct makes two shadow ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: '161db3a3-385c-4927-b431-c00abd60182c',
				name: 'Drain Soul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'the target is dazed and restrained (save ends both). First Failed Saving Throw: The target is instead stunned and restrained (save ends both). Second Failed Saving Throw: The target dies, and its soul is trapped in one of the Acererak construct’s soul gems until the construct is destroyed.',
				damage: '',
				category: 1
			},
			{
				id: 'd4c927a9-bea9-4505-be6e-ac5633ea3eba',
				name: 'Soul Shriveling Pulse',
				action: {
					action: 4,
					trigger: 'when a creature fails a saving throw against drain soul',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '2d6+4 necrotic damage, and the target takes a -2 penalty to saving throws (save ends).',
				damage: '2d6+4 necrotic damage',
				category: 5
			},
			{
				id: '7d1c5253-7c1a-4ee3-a33b-ce35ed9b4a32',
				name: 'Guard Area',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An Acererak construct can use its drain soul power against any creature in its guarded area, even if the power hasn’t recharged.',
				damage: '',
				category: 0
			},
			{
				id: 'caab6bb3-5923-463a-bb88-7f6538cfa432',
				name: 'Consume Soul',
				action: {
					action: 3,
					trigger: 'expends a trapped soul',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Acererak construct regains 150 hit points.',
				damage: 'The Acererak construct regains 150 hit points',
				category: 5
			},
			{
				id: 'f9496c1c-30bd-4a35-ad47-598f959e3368',
				name: 'Soul Gems',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Acererak construct’s four soul gems can each hold the soul of one of its victims. At the beginning of an encounter, the soul gems contain one soul. Crushing a gem after the construct is defeated releases the soul to the Shadowfell.',
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
				type: 8,
				value: -10
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 13 Solo Artillery',
		phenotype: 'Tiny natural animate (homunculus, undead)'
	},
	{
		id: '14712448-d665-42aa-8ec1-26c0dc5163f2',
		name: 'Alhoon Lich',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +16; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: 'Arcana +23, Bluff +17, Insight +21',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 26,
			modifier: 8,
			cost: -1
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
		hp: 394,
		initiative: 15,
		ac: 37,
		fortitude: 31,
		reflex: 35,
		will: 33,
		regeneration: {
			value: 10,
			details: 'if an alhoon takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '7d9f2a19-9fd8-481f-a653-be17c133fdee',
				name: 'Necromantic Aura',
				keywords: '',
				details: '(Necrotic) aura 5; any living creature that enters the aura or starts its turn within the aura takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: '5a7236bc-ea15-4690-bfe8-e20fc7ab5dc6',
				name: 'Tentacles',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '3d8+3 damage, and the target is grabbed. The alhoon can have only one creature grabbed at a time.',
				damage: '3d8+3 damage',
				category: 1
			},
			{
				id: '6fbe1d3e-57e6-4a58-aa1b-d2d1c8022f0a',
				name: 'Bore into Brain',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the alhoon or a dazed or stunned creature; 3d10+3 damage, and the target is stunned (save ends). If this power reduces the target to 0 hit points or fewer, the alhoon can use devour brain or create thrall.',
				damage: '3d10+3 damage',
				category: 1
			},
			{
				id: 'c756e205-448d-40bf-bf01-34b67022dbc0',
				name: 'Enslave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends). While dominated, the target is immune to mind blast and gains a +5 bonus to Will while within 10 squares of the alhoon that dominated it. The alhoon can have only one creature dominated using enslave at a time.',
				damage: 'the target is immune to mind blast and gains a +5 bonus to Will while within 10 squares of the alhoon that dominated it',
				category: 1
			},
			{
				id: '4f03d9f7-cff4-41ee-950c-2672ef4d7f4b',
				name: 'Mind Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'does not target mind flayers and their thralls; 4d8+7 psychic damage, and the target is dazed (save ends). Miss: Half damage, and the target is not dazed.',
				damage: '4d8+7 psychic damage',
				category: 1
			},
			{
				id: '7db7f800-cf95-47bc-9296-5d648cf654eb',
				name: 'Interpose Thrall',
				action: {
					action: 4,
					trigger: 'when an enemy targets the alhoon with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attack targets a thrall within the attacker’s reach.',
				damage: '',
				category: 5
			},
			{
				id: '5d65547b-bda7-42e1-81e9-3b130adb071d',
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
				details: 'The alhoon spends a healing surge and regains 98 hit points. The alhoon gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The alhoon spends a healing surge and regains 98 hit points',
				category: 1
			},
			{
				id: 'efcbdebf-b766-4030-8197-2416e009657e',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an alhoon is reduced to 0 hit points, its body and possessions crumble into dust, but it is not destroyed. It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery, unless the phylactery is also found and destroyed.',
				damage: 'It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Elite Controller (L)',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: '2d6d6085-aa8a-443b-acb4-a1b2dc30fd60',
		name: 'Aspect of Vecna',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'undead',
		level: 25,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +25; darkvision, truesight 10',
		movement: '6, teleport 6',
		alignment: 'Evil',
		languages: 'all',
		skills: 'Arcana +25, Bluff +23, Diplomacy +25, Dungeoneering +25, Heal +25, History +25, Intimidate +23, Nature +25, Religion +25',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 464,
		initiative: 18,
		ac: 41,
		fortitude: 39,
		reflex: 37,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '27d63dcb-42fe-40ff-a8df-4f011999f6ae',
				name: 'Vecna’s Aura',
				keywords: '',
				details: '(Healing, Necrotic) aura 10; any living creature that starts its turn within the aura takes 10 necrotic damage. Any undead creature that starts its turn within the aura regains 5 hit points.'
			}
		],
		powers: [
			{
				id: '3f48fac6-cd1f-4261-a854-9073df7b1954',
				name: 'Paralyzing Touch',
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
					defence: 2
				},
				description: '',
				details: '3d6+14 necrotic damage, and the target is immobilized and weakened (save ends both).',
				damage: '3d6+14 necrotic damage',
				category: 1
			},
			{
				id: '375be3b2-d34f-4a76-99c4-cf3b451affc8',
				name: 'Ray of Death',
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
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '2d8+15 necrotic damage, and the target loses a healing surge.',
				damage: '2d8+15 necrotic damage',
				category: 1
			},
			{
				id: '3f5b5ed5-9f2e-44b0-9e33-f984f8cfa27c',
				name: 'Necrotic Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: 'targets living creatures; 2d6+12 necrotic damage, and the target is immobilized and takes ongoing 10 necrotic damage (save ends both). The burst creates a zone of webs that lasts until the end of the encounter. The zone is difficult terrain, and a living creature that ends its move in the web is immobilized and takes ongoing 10 necrotic damage (save ends both).',
				damage: '2d6+12 necrotic damage',
				category: 1
			},
			{
				id: '8c74e046-4c5a-465d-8b9a-7c5ce1ab3599',
				name: 'Vecna’s Ambition',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when the aspect of vecna reduces a creature to 0 hit points or fewer',
				range: '',
				attack: null,
				description: '',
				details: 'The aspect of Vecna regains an action point.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 25 Elite Controller',
		phenotype: 'Medium immortal humanoid (undead)'
	},
	{
		id: '88cb2825-f3b1-476f-81cc-64e2db22c430',
		name: 'Baelnorn Lich',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Any',
		languages: 'Common, Elven',
		skills: 'Arcana +20, History +20, Insight +16',
		equipment: '',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 292,
		initiative: 10,
		ac: 31,
		fortitude: 27,
		reflex: 30,
		will: 29,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [
			{
				id: '7591897e-6175-4ceb-8e3c-5f7009279000',
				name: 'Baelnorn’s Will',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to Will and to saving throws against psychic effects.'
			}
		],
		powers: [
			{
				id: 'ddd67cce-9194-4f61-b293-b868a4462f4f',
				name: 'Grasp of Enfeeblement',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d10+7 necrotic damage, and the target is weakened until the end of the baelnorn’s next turn.',
				damage: '1d10+7 necrotic damage',
				category: 1
			},
			{
				id: '253834ae-98f5-400d-b2d9-0d00209db4c8',
				name: 'Dream Haunting',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+6 psychic damage.',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: '541c1b01-6f80-4849-b79e-adfd12552aa9',
				name: 'Voice of Solemnity',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'the target falls into a sleepy trance. While in this trance state, the target is immobilized and dominated (save ends both). In addition, the target truthfully answers any question the baelnorn asks.',
				damage: '',
				category: 3
			},
			{
				id: '08c5387b-3055-4748-a7a9-25c360f21627',
				name: 'Fey Ire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic, Radiant',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '2d8+9 radiant damage, and the target takes ongoing 5 psychic damage and is dazed (save ends both). Miss: Half damage, and the target is instead slowed (save ends).',
				damage: '2d8+9 radiant damage',
				category: 1
			},
			{
				id: 'ef8f4207-ab3d-4847-9840-7da1ff131c84',
				name: 'Ethereal Shift',
				action: {
					action: 4,
					trigger: 'when an enemy’s melee attack misses the baelnorn',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The baelnorn shifts up to 3 squares.',
				damage: 'The baelnorn shifts up to 3 squares',
				category: 5
			},
			{
				id: '4dc65814-6bcd-42d9-8dc6-df88b0f74832',
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
				details: 'The baelnorn teleports up to 5 squares.',
				damage: 'The baelnorn teleports up to 5 squares',
				category: 2
			},
			{
				id: '37eb6b98-81c9-4b38-8654-80bfa0ec775f',
				name: 'Projection',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Conjuration, Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'the baelnorn creates a conjuration of itself, turns invisible, and teleports up to 5 squares. The conjuration can be attacked and damaged, though it is unaffected by conditions and effects. The conjuration occupies one square and has 1 hit point (a missed attack never damages the conjuration). The baelnorn becomes visible if it attacks or when the conjuration is reduced to 0 hit points. As a move action, the baelnorn can move the conjured illusion up to 6 squares.',
				damage: 'the conjuration can be attacked and damaged',
				category: 5
			},
			{
				id: '5d42651e-1822-4422-8c0c-63fe3ef76269',
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
				details: 'The baelnorn spends a healing surge and regains 73 hit points. It gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The baelnorn spends a healing surge and regains 73 hit points',
				category: 1
			},
			{
				id: '93e3a51c-be0f-4c4c-9d52-81c15a4a3526',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a baelnorn is reduced to 0 hit points, its body and possessions crumble into dust, but it is not truly destroyed. It reappears in 1d10 days within 1 square of its phylactery (if it has one), unless the phylactery is also found and destroyed.',
				damage: 'It reappears in 1d10 days within 1 square of its phylactery (if it has one)',
				category: 0
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

		info: 'Level 15 Elite Controller',
		phenotype: 'Medium fey humanoid (undead)'
	},
	{
		id: 'd5fbc7f2-4768-4a15-969a-44ca9f0d3d26',
		name: 'Beholder Death Tyrant',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 15,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +15; all-around vision, darkvision',
		movement: 'fly 4 (hover)',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: '',
		equipment: '',
		category: 'Beholder',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 740,
		initiative: 14,
		ac: 29,
		fortitude: 29,
		reflex: 27,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: 'b75e4a14-0520-417e-8322-48a1c7092896',
				name: 'Eyes of the Beholder',
				keywords: '',
				details: 'aura 5; the beholder death tyrant uses one random eye ray as a free action against any enemy within the aura at the start of the enemy’s turn.'
			}
		],
		powers: [
			{
				id: 'b5d52410-88c8-4f10-84ac-85a2e0c6b5a3',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d4+1 damage.',
				damage: '2d4+1 damage',
				category: 1
			},
			{
				id: '2c7d636e-10b6-4f52-9347-e0a8830b661e',
				name: 'Central Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'the target is slowed and loses necrotic resistance until the end of the beholder death tyrant’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '0cbec548-ee08-4daf-ad6c-9650f586fa04',
				name: 'Eye Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'see text',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The beholder death tyrant uses up to two different eye ray powers (chosen from the list below). Each ray must target a diff erent creature, and using eye ray does not provoke opportunity attacks.',
				damage: '',
				category: 1
			},
			{
				id: '69278f11-8540-4390-a870-7373f23e04cd',
				name: 'Killing Look',
				action: {
					action: 4,
					trigger: 'when an enemy within 10 squares fails a saving throw against ongoing necrotic damage',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets the triggering creature; the target loses a healing surge.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 15 Solo Artillery',
		phenotype: 'Large aberrant beast (undead)'
	},
	{
		id: '18c3f39b-1857-4d77-8a38-b85d76991a9f',
		name: 'Blackstar Knight',
		details: '',
		size: 2,
		origin: 5,
		type: 0,
		keywords: 'construct, undead',
		level: 23,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Primordial',
		skills: '',
		equipment: 'greatsword',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 212,
		initiative: 21,
		ac: 40,
		fortitude: 35,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: 'ed59dd21-4956-4d80-9aae-b287247e14fd',
				name: 'No Escape',
				keywords: '',
				details: '(Teleportation) The blackstar knight teleports up to 10 squares, ending the move in a square adjacent to a creature marked by the blackstar knight.'
			}
		],
		powers: [
			{
				id: '332102a9-5b78-4a74-a0f8-edd7e39f5e33',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d10+9 damage, and the target is marked until the end of the blackstar knight’s next turn.',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: '6c84feaa-3dc1-4bfe-93bb-8c64b380d9c6',
				name: 'Deathsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; targets a creature marked by the blackstar knight; 3d10+9 damage, and ongoing 10 necrotic damage (save ends).',
				damage: '3d10+9 damage',
				category: 1
			},
			{
				id: '7d8031a8-7262-46c9-b756-4588fbe10c32',
				name: 'Soldier’s Duty',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'targets undead allies; the target gains 25 temporary hit points.',
				damage: 'the target gains 25 temporary hit points',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 23 Soldier',
		phenotype: 'Medium shadow animate (construct, undead)'
	},
	{
		id: '13562378-a3ff-4818-bbc2-e2f6bde7e6ee',
		name: 'Blaspheme Disciple',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 13,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Heal +16, Religion +14',
		equipment: 'holy symbol',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 100,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 24,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95de57e8-23f1-49cf-bb0c-73ddadf701d5',
				name: 'Unholy Smite',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 necrotic damage.',
				damage: '1d8+5 necrotic damage',
				category: 1
			},
			{
				id: '7ec34581-b341-4c35-817e-86c5c863ec0c',
				name: 'Unholy Ray',
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
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '1d10+7 necrotic damage, and the target takes a -2 penalty to attack rolls until the end of the blaspheme disciple’s next turn.',
				damage: '1d10+7 necrotic damage',
				category: 1
			},
			{
				id: '012e4b5c-aa28-4b9f-a125-d6a72e4abf7c',
				name: 'Words of Undeath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+5 necrotic and psychic damage. In addition, undead allies within the burst regain 5 hit points.',
				damage: '2d6+5 necrotic and psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 7,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 13 Artillery (L)',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'b4a5d06f-974a-46dd-a6b7-248ae5c77972',
		name: 'Blaspheme Entomber',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 244,
		initiative: 7,
		ac: 28,
		fortitude: 27,
		reflex: 23,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '5c301aa5-2a69-432c-960b-0b6bea03f829',
				name: 'Grave Dust',
				keywords: '',
				details: 'aura 1; any living creature that starts its turn within the aura takes a -2 penalty to all defenses until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '5cc3d7d3-eceb-4a82-96ac-4c316d534060',
				name: 'Grave Slam',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+5 necrotic damage, and the target is knocked prone until it succeeds on a DC 20 Strength check to stand up.',
				damage: '2d6+5 necrotic damage',
				category: 1
			},
			{
				id: 'd2f57a7b-835d-41a0-82cc-c05319acc59b',
				name: 'Entomb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'the target is stunned and entombed 2 squares beneath the ground, blocking line of sight and line of effect to the target (save ends both). On a save, the target returns to the square it occupied before it was entombed. First Failed Saving Throw: The target is no longer entombed and returns to the surface in the square it occupied before it was entombed. The target is dominated instead of stunned (save ends).',
				damage: 'the target is stunned and entombed 2 squares beneath the ground',
				category: 1
			},
			{
				id: 'd886a0f8-e662-4b6d-9151-2cbc7c32f74a',
				name: 'Beckoning Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Gaze, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: '1d8+5 psychic damage, and the target is pulled 4 squares.',
				damage: '1d8+5 psychic damage',
				category: 3
			},
			{
				id: 'd07c5902-ec93-426f-8b8a-2a7f20e1d281',
				name: 'Bloodied Entombment',
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
				details: 'The blaspheme entomber’s entomb power recharges, and the blaspheme entomber uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '94a35230-2a04-4aa6-98e8-4f2ed9466b57',
				name: 'Command of the Grave',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The blaspheme entomber causes a creature dominated by it to take a free action to move its speed, shift up to 1 square, or make a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: 'da7febed-0eef-40cb-b7d8-65f717cd2dc3',
				name: 'Grave Stride',
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
				details: 'The blaspheme entomber burrows 6 squares.',
				damage: 'The blaspheme entomber burrows 6 squares',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 7,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: '3ca76e8b-5990-412b-b400-a7082ed15375',
		name: 'Blaspheme Imperfect',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 14,
			modifier: 2,
			cost: 5
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
		hp: 164,
		initiative: 9,
		ac: 26,
		fortitude: 27,
		reflex: 23,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '638abdb3-059a-4532-b084-d5d411f31ed0',
				name: 'Life Sap',
				keywords: '',
				details: '(Healing, Necrotic) aura 1; any living enemy that starts its turn within the aura takes 5 necrotic damage. Each round, if at least one enemy is damaged by the aura, the blaspheme imperfect regains 5 hit points.'
			}
		],
		powers: [
			{
				id: '69691e82-2755-4ea6-8850-97ccaa8f21a5',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d10+6 necrotic damage.',
				damage: '2d10+6 necrotic damage',
				category: 1
			},
			{
				id: '77490689-b87e-43b6-b705-53cbbc6bbb18',
				name: 'Deadly Clutch',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'Requires free hand; 2d10+6 necrotic damage, and the target is grabbed.',
				damage: '2d10+6 necrotic damage',
				category: 1
			},
			{
				id: 'd6af31bf-3366-409c-a027-3bd011044e1e',
				name: 'Life Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the blaspheme imperfect; 2d10+4 necrotic damage, and the target loses a healing surge, and the blaspheme regains 10 hit points.',
				damage: '2d10+4 necrotic damage',
				category: 1
			},
			{
				id: '45f9788e-8cd2-499d-914f-363c93da15c9',
				name: 'Bloodied Degeneration',
				action: null,
				keywords: '',
				condition: 'while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The blaspheme imperfect’s body begins to degenerate, and it enters a state of bloodlust. The blaspheme gains vulnerable 5 to all damage and deals 2d6 extra damage on a hit.',
				damage: 'the blaspheme gains vulnerable 5 to all damage and deals 2d6 extra damage on a hit',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'de92fd7c-51f8-49c8-a484-9a2baa0283f7',
		name: 'Blaspheme Knight',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 14,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'greatsword',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
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
		hp: 142,
		initiative: 13,
		ac: 30,
		fortitude: 26,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '879a6993-e347-48e6-8e36-2a01ae81eef1',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d10+8 damage, and the target is marked until the end of the blaspheme knight’s next turn.',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: 'd4e8f5b8-6a19-4a38-b1e2-eabc1eff1949',
				name: 'Sweeping Cleave',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; 2d10+8 damage, and the target is marked until the end of the blaspheme knight’s next turn.',
				damage: '2d10+8 damage',
				category: 1
			},
			{
				id: '6ffbf7bb-2086-482c-a103-7210c1bde9b5',
				name: 'Blasphemous Might',
				action: null,
				keywords: '',
				condition: 'when a creature marked by the blaspheme knight makes an attack that doesn’t include the knight',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of its next turn, the blaspheme knight deals 2d10 extra necrotic damage when it hits the marked creature.',
				damage: 'the blaspheme knight deals 2d10 extra necrotic damage when it hits the marked creature',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 7,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 14 Soldier',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: '3977a46a-631b-493a-a05a-3fca75fe889b',
		name: 'Blaspheme Soul Vessel',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 15,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +19, Religion +19',
		equipment: 'chainmail; mace',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 292,
		initiative: 11,
		ac: 29,
		fortitude: 26,
		reflex: 26,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f683faaa-16ba-4265-af6d-1ab328c18838',
				name: 'Mace',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d8+6 necrotic damage.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: '209cf1d7-1fee-405d-985f-ac5108012847',
				name: 'Arcane Sparks',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d6+5 fire and necrotic damage.',
				damage: '2d6+5 fire and necrotic damage',
				category: 1
			},
			{
				id: '531364fb-88c1-4221-9dc5-598b9acab3bb',
				name: 'Warring Wills',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A blaspheme soul vessel’s mind constantly struggles against the body it was placed in. At the start of the blaspheme soul vessel’s turn, roll 1d6.',
				damage: 'roll 1d6',
				category: 0
			},
			{
				id: '5436d78f-2935-4f30-9310-dd4ef9f5ee3c',
				name: 'Will Transfer',
				action: null,
				keywords: '',
				condition: 'when the blaspheme soul vessel is hit by an attack vs. will',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker chooses whether the blaspheme soul vessel’s body or mind is dominant until the end of the blaspheme’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: 'bf56f8cf-2e05-44d8-9015-85dd79ff7183',
				name: 'Dominant Action',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a blaspheme soul vessel spends an action point, the creature determines whether its body or mind is dominant.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 7,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 15 Elite Controller',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'c473aecf-7067-4ec7-8a84-7dd3b6358ebf',
		name: 'Blaspheme Unholy Slayer',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +17',
		equipment: 'dagger',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
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
		hp: 92,
		initiative: 16,
		ac: 26,
		fortitude: 24,
		reflex: 26,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '380c0f5d-5c2d-44a4-931c-0eb71566e2f1',
				name: 'Dagger',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '75d52a5a-c090-4377-8997-9a1ee2141507',
				name: 'Thrown Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: 'c6cb7b83-9439-4d90-8830-17a336c8bcb1',
				name: 'Blasphemous Blades',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 3d4+5 damage plus 1d12 necrotic damage. Miss: Half damage.',
				damage: '3d4+5 damage plus 1d12 necrotic damage',
				category: 1
			},
			{
				id: '0255aeae-5d4d-428d-801c-11ac91bc43f5',
				name: 'Sightless Sands',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d8+5 damage and the target is blinded until the end of the blaspheme’s next turn. Hit or Miss: The blaspheme shifts up to 2 squares.',
				damage: '1d8+5 damage and the target is blinded until the end of the blaspheme’s next turn',
				category: 1
			},
			{
				id: 'b4a00338-a25e-48c6-b868-cfda817db6b5',
				name: 'Death Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'the target takes ongoing 5 necrotic damage (save ends).',
				damage: 'the target takes ongoing 5 necrotic damage (save ends)',
				category: 0
			},
			{
				id: 'd9cf699a-055f-458b-9807-36fe91e988c1',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The blaspheme deals 2d6 extra damage when it makes a successful melee attack on a target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
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
				type: 7,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 12 Skirmisher',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'd30c723c-97d7-4c56-886b-d981be5d2977',
		name: 'Blood Amniote',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 9,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6; blindsight 10',
		movement: '6, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +14',
		equipment: '',
		category: '',
		strength: {
			score: 24,
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
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 204,
		initiative: 11,
		ac: 27,
		fortitude: 24,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '81f760bb-d045-499e-89a0-d4315ef691d0',
				name: 'Blood Call',
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
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 2d8+4 necrotic damage, and the target is grabbed. If the blood amniote scores a critical hit, the target loses a healing surge.',
				damage: '2d8+4 necrotic damage',
				category: 1
			},
			{
				id: '178f742c-c8c5-45da-bdbe-bb3ac0441f90',
				name: 'Body Snatch',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is pulled to a space adjacent to the blood amniote and is grabbed.',
				damage: '',
				category: 3
			},
			{
				id: '6e6c128b-c0f8-46f7-97f0-c02518c6264b',
				name: 'Blood Drain',
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
				details: 'Targets each creature grabbed by the blood amniote; the target loses a healing surge (no attack roll required).',
				damage: '',
				category: 3
			},
			{
				id: '659215d2-7c85-48c2-bac2-6fb9f5f979bf',
				name: 'Grasping Tendrils',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A blood amniote can sustain a grab as a free action.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 9 Elite Soldier',
		phenotype: 'Large natural animate (blind, ooze, undead)'
	},
	{
		id: 'e6017341-b41e-43e2-b5c4-b8528e182351',
		name: 'Blood Elemental',
		details: '',
		size: 4,
		origin: 1,
		type: 1,
		keywords: 'blind, ooze, water',
		level: 9,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; blindsight 10',
		movement: '6, climb 4',
		alignment: 'Unaligned',
		languages: 'Primordial, telepathy 5',
		skills: '',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 232,
		initiative: 11,
		ac: 23,
		fortitude: 23,
		reflex: 22,
		will: 19,
		regeneration: null,
		auras: [
			{
				id: '2fb1b50a-d96e-4f8c-9651-b3faca93c9f6',
				name: 'Blood Call',
				keywords: '',
				details: '(Healing) aura 5; whenever a creature within the aura takes ongoing necrotic damage from the blood elemental’s coagulated smash, the blood elemental regains 5 hit points.'
			}
		],
		powers: [
			{
				id: '092f75ae-a42a-4c5f-9b1e-f0924d454001',
				name: 'Coagulated Smash',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+5 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'ade3cae9-d72e-43ea-ace9-84ba348ec44a',
				name: 'Flowing Form',
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
				details: 'The blood elemental shifts up to 4 squares.',
				damage: 'The blood elemental shifts up to 4 squares',
				category: 2
			},
			{
				id: 'f5cf3a0c-c251-489c-acd6-c427d7d4c49c',
				name: 'Bloodied Spawn',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The blood elemental splits into two Huge individuals, the second one occupying a space adjacent to the original creature. Each of the two creatures has hit points equal to one-half the original’s current hit points. Both creatures act on the original creature’s initiative count. Effects applied to the original blood elemental do not apply to either of the individuals after the split occurs. A blood elemental can’t split if reduced to 0 hit points by the attack that bloodied it.',
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
		resist: '',
		vulnerable: '',
		immune: 'disease, gaze, illusion, poison',
		tactics: '',

		info: 'Level 9 Elite Brute',
		phenotype: 'Huge elemental beast (blind, ooze, water)'
	},
	{
		id: 'd5576ca5-a5c7-4684-a964-eec733f12991',
		name: 'Blood Sea Zombie',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'aquatic, undead',
		level: 7,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '4, swim 8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 97,
		initiative: 4,
		ac: 19,
		fortitude: 21,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '411a1cd9-7521-41ab-99a3-f6517ef7ea74',
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
					defence: 0
				},
				description: '',
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'cf2e38d9-749a-4558-8fdc-c9896bdfc38b',
				name: 'Zombie Grab',
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
					defence: 1
				},
				description: '',
				details: 'the target is grabbed. Attempts to escape the zombie’s grab take a -5 penalty.',
				damage: 'Attempts to escape the zombie’s grab take a -5 penalty',
				category: 1
			},
			{
				id: 'd07dc58a-dfee-4b0e-8de2-dc9de57f40a8',
				name: 'Gory Death',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: '4d6 + 4 necrotic damage, and the target is blinded (save ends).',
				damage: '4d6 + 4 necrotic damage',
				category: 0
			},
			{
				id: '6118223f-1bfc-4dfc-a1a9-d011eb8b0da9',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A critical hit scored against a blood sea zombie reduces the zombie to 0 hit points.',
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

		info: 'Level 7 Brute',
		phenotype: 'Medium elemental animate (aquatic, undead)'
	},
	{
		id: '8f32bbe5-b910-4de5-a94c-1b10ed168a32',
		name: 'Bloodkiss Beholder',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 9,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +12; all-around vision, darkvision',
		movement: 'fly 6 (hover)',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 412,
		initiative: 6,
		ac: 25,
		fortitude: 25,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: 'b277778f-1bc4-43be-9c2f-477822616160',
				name: 'Unquenchable Thirst',
				keywords: '',
				details: 'aura 2; the bloodkiss beholder makes an eye bite attack as a free action against any enemy within the aura at the start of the enemy’s turn.'
			}
		],
		powers: [
			{
				id: '1fa88c8b-9301-4816-b52e-f7911be0d6c4',
				name: 'Eye Bite',
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
				details: 'Reach 2; 1d8+3 damage plus 10 necrotic damage.',
				damage: '1d8+3 damage plus 10 necrotic damage',
				category: 1
			},
			{
				id: '2e47362c-d164-4281-8ece-fbd2b7a8c6f2',
				name: 'Eye Writhe',
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
				attack: null,
				description: '',
				details: 'The bloodkiss beholder makes three eye bite attacks.',
				damage: '',
				category: 1
			},
			{
				id: '609b1d1e-dcae-4403-a8ea-1fd4cb9a3d9a',
				name: 'Blood Call',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'targets a bloodied enemy; the target is stunned (save ends). Aftereffect: The target is slowed (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '38250520-e848-48b1-a8c7-91cfde35cb9a',
				name: 'Bloodkiss',
				action: {
					action: 4,
					trigger: 'when a creature within 2 squares of the bloodkiss beholder becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'Reach 2; targets the triggering creature; 4d6+6 damage, and the target is weakened (save ends). In addition, the bloodkiss beholder spends a healing surge to regain 103 hit points.',
				damage: '4d6+6 damage',
				category: 5
			},
			{
				id: '3accffaa-fcc3-487c-93bd-6457d212d739',
				name: 'Death Scream',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '4d6+6 psychic damage, and the target is dazed (save ends).',
				damage: '4d6+6 psychic damage',
				category: 1
			},
			{
				id: '6d919d31-3b5b-4d98-9191-eac2dadf8acd',
				name: 'Bloodied Writhe',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bloodkiss beholder’s death scream power recharges, and the beholder uses it immediately.',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Solo Controller',
		phenotype: 'Large aberrant beast (undead)'
	},
	{
		id: '24f81551-0547-4515-8070-4f6e29115a09',
		name: 'Bloodrot',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 7,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; tremorsense 10',
		movement: '5, climb 3',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 1,
			modifier: -5,
			cost: 0
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 168,
		initiative: 9,
		ac: 25,
		fortitude: 22,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd119c75f-4855-473a-ae5a-5a78c5e0d2f4',
				name: 'Blood Tendril',
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
					defence: 2
				},
				description: '',
				details: '2d6+4 damage, and the target is grabbed.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'a67d09a4-bdf7-43b6-9a95-61c7c04136d7',
				name: 'Bloodsqueeze',
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
				details: 'Targets a creature grabbed by the bloodrot; 2d6 + 4 damage (no attack roll required).; 2d6+5 damage.',
				damage: '2d6 + 4 damage (no attack roll required)',
				category: 1
			},
			{
				id: '70ad2a9c-cc83-4f13-b92e-d5ca838aeb82',
				name: 'Taint',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d8+6 necrotic damage, and the target loses a healing surge.',
				damage: '2d8+6 necrotic damage',
				category: 3
			},
			{
				id: 'e3bccf76-a257-480d-9d20-41ec2fb1f463',
				name: 'Split',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The bloodrot splits into two Medium individuals, the second one occupying a space adjacent to the original creature. Each of the two creatures has hit points equal to one-half the original’s current hit points. Both creatures act on the original creature’s initiative count. Effects applied to the original bloodrot do not apply to either of the individuals after the split occurs. A bloodrot can’t split if reduced to 0 hit points by the attack that bloodied it.',
				damage: '',
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
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 7 Elite Soldier',
		phenotype: 'Medium natural animate (blind, ooze, undead)'
	},
	{
		id: '43ff845f-28d4-41d3-a344-692b2ba71ab3',
		name: 'Bone Collector',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 22,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11; tremorsense 20',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 36,
			modifier: 13,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 520,
		initiative: 9,
		ac: 34,
		fortitude: 36,
		reflex: 32,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8012c8e8-e72d-4235-8770-873bf3addbcd',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d6+10 necrotic damage.',
				damage: '4d6+10 necrotic damage',
				category: 1
			},
			{
				id: '2cdd6cbf-f748-4948-8a2a-12db8c9b8f38',
				name: 'Tendrils',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '4d6+10 necrotic damage, and the target is grabbed and loses a healing surge. The bone collector regains 5 hit points for each healing surge a target loses in this way.',
				damage: '4d6+10 necrotic damage',
				category: 1
			},
			{
				id: '33b7412c-6758-43ab-9827-42a7b80c9d7b',
				name: 'Lurch',
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
				details: 'The bone collector shifts up to 3 squares.',
				damage: 'The bone collector shifts up to 3 squares',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 22 Elite Brute',
		phenotype: 'Huge natural animate (blind, ooze, undead)'
	},
	{
		id: 'c27478ac-3ab9-4d44-97ce-ac5e426a4985',
		name: 'Bonewretch Skeleton',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +13',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 55,
		initiative: 10,
		ac: 18,
		fortitude: 16,
		reflex: 20,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b9f001ad-058a-4d46-9d76-fb6fc10280ec',
				name: 'Ankle Bite',
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
				details: '1d6+6 damage, and the target is slowed until the end of the bonewretch skeleton’s next turn.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '050cd756-7831-4517-8e23-aac67c6ba152',
				name: 'Rattling Shift',
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
				details: 'The bonewretch skeleton shifts up to 4 squares, ignoring difficult terrain.',
				damage: 'The bonewretch skeleton shifts up to 4 squares',
				category: 2
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

		info: 'Level 4 Skirmisher',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: '46717b90-87c1-4879-a1ae-9eae880f1dfa',
		name: 'Brain in a Broken Jar',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: 'fly 4 (hover)',
		alignment: 'Evil',
		languages: 'Common, telepathy 10',
		skills: 'Arcana +11, Bluff +9, Diplomacy +9',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
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
			score: 18,
			modifier: 4,
			cost: 16
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
		hp: 50,
		initiative: 2,
		ac: 18,
		fortitude: 14,
		reflex: 14,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a10a6c91-766a-421b-99a5-f57cf405d915',
				name: 'Dominate',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: '7 the target is dominated until the end of the brain in a broken jar’s next turn.',
				damage: '7 the target is dominated until the end of the brain in a broken jar’s next turn',
				category: 1
			},
			{
				id: 'be5986fe-0210-477e-86f1-17534afe4cda',
				name: 'Mind Stab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d6+4 psychic damage, and the target takes a -2 penalty to Will (save ends).',
				damage: '1d6+4 psychic damage',
				category: 1
			},
			{
				id: 'b805b67a-ac14-45f8-99c3-38f29da7a98a',
				name: 'Faulty Invisibility',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The brain becomes invisible until the start of its next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Controller',
		phenotype: 'Small natural animate'
	},
	{
		id: '83640d1f-a9b0-45ea-8489-6f765889b902',
		name: 'Brain in a Jar',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 4 (hover)',
		alignment: 'Evil',
		languages: 'Common, telepathy 10',
		skills: 'Arcana +13, Bluff +11, Diplomacy +11',
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
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 68,
		initiative: 3,
		ac: 20,
		fortitude: 16,
		reflex: 15,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9319db49-dd76-48d3-b946-fa46a6582ca0',
				name: 'Dominate',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends). A brain in a jar can dominate only one creature at a time.',
				damage: '',
				category: 1
			},
			{
				id: 'a7ab60b8-730f-4b34-9503-4b5f97effd40',
				name: 'Telekinetic Thrust',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 6',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'the target is pushed 4 squares, and if the target ends the push adjacent to a wall, it is knocked prone.',
				damage: 'the target is pushed 4 squares',
				category: 3
			},
			{
				id: '8076802f-e72b-49b3-94b3-564d8fe26895',
				name: 'Mind Stab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: '1d6+6 psychic damage, and the target takes a -2 penalty to Will (save ends).',
				damage: '1d6+6 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller',
		phenotype: 'Small natural animate'
	},
	{
		id: '7dc0c48d-1259-4bec-a6c8-c460b134290a',
		name: 'Cadaver Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 12,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6 can’t shift',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 228,
		initiative: 6,
		ac: 26,
		fortitude: 27,
		reflex: 22,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '29840d42-96ec-4680-b08f-152f7cc8acda',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage, and the target is dazed (save ends).',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '75ddc578-7b2c-4514-b12e-9af013fb24e2',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'The cadaver golem makes two slam attacks.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '30cdde48-08ec-46bc-8bfb-ea199ad3852c',
				name: 'Assimilate Flesh',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy becomes bloodied or is reduced to 0 hit points or fewer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'Targets the triggering enemy; 2d12+5 damage, and the cadaver golem regains 57 hit points.',
				damage: '2d12+5 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 12 Elite Brute',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: '0654603e-dc9f-47f3-b0fd-3bc0592a0a71',
		name: 'Caller in Darkness',
		details: '',
		size: 3,
		origin: 5,
		type: 0,
		keywords: 'undead',
		level: 19,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: '',
		equipment: '',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 253,
		initiative: 13,
		ac: 33,
		fortitude: 33,
		reflex: 28,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd8b0b8d8-7943-4401-8073-11836d16978e',
				name: 'Spirit Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+7 necrotic damage, and ongoing 10 psychic damage (save ends).',
				damage: '1d10+7 necrotic damage',
				category: 1
			},
			{
				id: 'af8ddfe7-67b3-45cc-9983-88b32153873f',
				name: 'Double Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'The caller in darkness makes two spirit bite attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '26fb1199-b210-4ea0-ba74-2ec5edaa242a',
				name: 'Steal Essence',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'Reach 2; targets a creature marked by the caller in darkness; 1d10+9 necrotic damage, and ongoing 5 psychic damage (save ends). First Failed Saving Throw: The target takes ongoing 5 psychic damage and is weakened (save ends both). Second Failed Saving Throw: The target takes ongoing 10 psychic damage and is stunned instead of weakened (save ends both).',
				damage: '1d10+9 necrotic damage',
				category: 1
			},
			{
				id: '381d5e76-6c91-41c8-89fb-3a1fc2f7a0c9',
				name: 'Advantage of Fear',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'targets one creature; the target is marked and grants combat advantage to the caller in darkness (save ends both); see also steal essence.',
				damage: '',
				category: 3
			},
			{
				id: '8dc3ba88-b1e9-492b-b336-fc10aa18754f',
				name: 'Soulstorm',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '1d10+9 psychic damage plus 1d10+9 necrotic damage. In addition, a target that grants combat advantage to the caller in darkness takes ongoing 5 psychic damage and ongoing 5 necrotic damage (save ends both).',
				damage: '1d10+9 psychic damage plus 1d10+9 necrotic damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Elite Soldier',
		phenotype: 'Large shadow animate (undead)'
	},
	{
		id: '911e79c1-bb04-4b74-b149-fab547b8b762',
		name: 'Calvary Creekrotter',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'plant, undead, water',
		level: 24,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision, tremorsense 10',
		movement: '6, swim 12',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 25,
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 270,
		initiative: 18,
		ac: 36,
		fortitude: 35,
		reflex: 34,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eee4bf14-c7f2-44e7-b58b-f796030907ab',
				name: 'Snatch',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8+9 damage, and the target is grabbed.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: 'b19d871c-435b-499c-ba15-e76bc4d8ba74',
				name: 'Douse',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the calvary creekrotter; the target takes ongoing 10 poison damage (save ends).',
				damage: 'the target takes ongoing 10 poison damage (save ends)',
				category: 3
			},
			{
				id: '9a357f32-5d35-433a-b5ef-f55b4ed0fad7',
				name: 'Entangling Execration',
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
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: 'the target is restrained (save ends). Miss: The target is instead immobilized (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 24 Brute',
		phenotype: 'Huge natural beast (plant, undead, water)'
	},
	{
		id: '8cb0ad28-aff2-4880-a930-d39a71db0440',
		name: 'Carcass Eater',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6, burrow 4',
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
			score: 5,
			modifier: -3,
			cost: 0
		},
		hp: 1,
		initiative: 5,
		ac: 21,
		fortitude: 19,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '300a27a1-7390-48cf-9aeb-7d2350b647c7',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '5 necrotic damage.',
				damage: '5 necrotic damage',
				category: 1
			},
			{
				id: 'ca0215f1-5b58-4fea-b14a-f78f4f92ae46',
				name: 'Blood Frenzy',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'The carcass eater makes a melee basic attack against the triggering creature.',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Minion',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'a811ba69-3015-4390-8fa1-58aeb2d2aef0',
		name: 'Charnel Cinderhouse',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'fire, undead',
		level: 9,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 392,
		initiative: 8,
		ac: 27,
		fortitude: 25,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: 'e7fc3b77-bf80-4f56-824a-67eb897daaaf',
				name: 'Charnel Blaze',
				keywords: '',
				details: '(Fire) aura 2; any enemy that starts its turn within the aura takes 10 fire damage.'
			}
		],
		powers: [
			{
				id: '112bed71-2d38-4426-9932-d5b4a5d37757',
				name: 'Charnel Slam',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+6 necrotic damage, and ongoing 5 fire damage (save ends).',
				damage: '2d6+6 necrotic damage',
				category: 1
			},
			{
				id: '21c4c401-953c-40f7-863a-5e712d87b559',
				name: 'Prison of Flame and Bones',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+6 fire and necrotic damage, and the target is grabbed.',
				damage: '2d8+6 fire and necrotic damage',
				category: 1
			},
			{
				id: 'eae92ceb-4873-499d-bf16-420dcbde0f50',
				name: 'Crushing Prison',
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
				details: 'Targets a creature grabbed by the charnel cinderhouse; 2d6 + 6 damage (no attack roll required).',
				damage: '2d6 + 6 damage (no attack roll required)',
				category: 4
			},
			{
				id: '10847faf-77c6-4c25-8ec7-cdd45d86a89c',
				name: 'Charnel Action',
				action: {
					action: 7,
					trigger: 'when an enemy within 2 squares of the cinderhouse is reduced to 0 hit points or fewer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Make a charnel slam attack against the triggering creature.',
				damage: '',
				category: 5
			},
			{
				id: 'b8080476-95f3-4fdf-ab87-0021bffd5b11',
				name: 'Charnel Pyre',
				action: null,
				keywords: 'Fire, Necrotic',
				condition: 'when first bloodied and again when the charnel cinderhouse is reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '2d6 fire damage plus 2d6 necrotic damage. Miss: Half damage.',
				damage: '2d6 fire damage plus 2d6 necrotic damage',
				category: 0
			},
			{
				id: 'da9b79bb-d642-4cb0-b14b-eda9cfbc4c9c',
				name: 'Rejuvenation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A charnel cinderhouse rises at full hit points one day after it has been destroyed. Performing the Gentle Repose ritual on the creature’s remains destroys the creature completely, preventing it from using the rejuvenation power.',
				damage: '',
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

		info: 'Level 9 Solo Soldier',
		phenotype: 'Large natural animate (fire, undead)'
	},
	{
		id: '95c3dc06-5901-4733-89a4-00aef26cae25',
		name: 'Charnel Hound',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 13,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 316,
		initiative: 9,
		ac: 27,
		fortitude: 27,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '631db304-30eb-4c7c-b2a8-a409e4d831a8',
				name: 'Inspire Fear',
				keywords: '',
				details: '(Fear) aura 5; any enemy that starts its turn within the aura takes a -2 penalty to attack rolls until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '45ac843d-f1d6-4ac4-9d67-cba9d730ae31',
				name: 'Gaping Maw',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '3d8+8 necrotic damage, and ongoing 10 necrotic damage (save ends), and the target is knocked prone.',
				damage: '3d8+8 necrotic damage',
				category: 1
			},
			{
				id: '01466631-9a3a-4f97-a034-5a6961c9ff8f',
				name: 'Doom Claws',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'The charnel hound makes two attacks; 2d8+8 necrotic damage each. If both attacks hit the same target, the charnel hound makes a gaping maw attack against the target.',
				damage: '2d8+8 necrotic damage each',
				category: 1
			},
			{
				id: 'b8351ee9-69c3-490a-879e-53b72826e512',
				name: 'Assimilation',
				action: {
					action: 7,
					trigger: 'when a creature is reduced to 0 hit points or fewer by the charnel hound',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Targets the triggering creature; the target loses a healing surge, and the charnel hound regains 79 hit points.',
				damage: 'and the charnel hound regains 79 hit points',
				category: 5
			},
			{
				id: 'fb6c451b-cf67-47d9-962a-864f7e160568',
				name: 'Opportunistic',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A charnel hound scores a critical hit on a roll of 18–20 and deals 2d8 extra damage against prone targets.',
				damage: 'a charnel hound scores a critical hit on a roll of 18–20 and deals 2d8 extra damage against prone targets',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 13 Elite Brute',
		phenotype: 'Large natural beast (undead)'
	},
	{
		id: '8f0ca753-0a96-4d45-98d5-c0c6646ec23b',
		name: 'Cindergrove Spirit',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'fire, undead',
		level: 27,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; darkvision, tremorsense 20',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
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
			score: 22,
			modifier: 6,
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 0,
		initiative: 19,
		ac: 10,
		fortitude: 10,
		reflex: 10,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '00524938-a6cf-458e-ae94-2dad0b5b44c0',
				name: 'Burning Grasp',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d6+8 damage, and ongoing 10 fire damage (save ends).',
				damage: '4d6+8 damage',
				category: 1
			},
			{
				id: '357f6c76-e5a9-4fa0-b3a2-7a0670ccb292',
				name: 'Final Conflagration',
				action: null,
				keywords: 'Fire',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '5d8+6 fire damage. Miss: Half damage.',
				damage: '5d8+6 fire damage',
				category: 0
			},
			{
				id: '30887d0c-f4a7-4f0e-9915-0e4c2402aa01',
				name: 'Fiery Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 5 within 10',
				attack: {
					bonus: 29,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 4d6+8 fire damage, and ongoing 10 fire damage (save ends). Aftereffect: The target is weakened (save ends). Miss: Half damage, and no ongoing damage or aftereffect.',
				damage: '4d6+8 fire damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Artillery',
		phenotype: 'Huge natural beast (fire, undead)'
	},
	{
		id: '50332236-cbc9-493a-aded-e3ed48ade939',
		name: 'Corpse Rat Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'swarm, undead',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '4, climb 2',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 53,
		initiative: 8,
		ac: 20,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: '8ca761d6-8ea9-46b7-bc63-ba73df202eeb',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the corpse rat swarm makes a swarm of teeth attack as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: 'a1d131d3-781b-4032-8565-f7b7d0fc27cb',
				name: 'Swarm of Teeth',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, and ongoing 3 damage (save ends). First Failed Saving Throw: The target contracts filth fever.',
				damage: '1d6+5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural animate (swarm, undead)'
	},
	{
		id: '1a3374af-7e24-411d-9ef6-f80f6ef2daae',
		name: 'Corpse Vampire',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '4, burrow 1, climb 4 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +14, Stealth +13',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 88,
		initiative: 10,
		ac: 22,
		fortitude: 21,
		reflex: 20,
		will: 18,
		regeneration: {
			value: 5,
			details: 'if a corpse vampire takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '80440bac-570a-4625-8ba4-e967514b4b0c',
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
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '7c5f276b-f7c1-46f4-bbd5-088dc8e11e45',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; 2d8+6 damage, and the target is weakened (save ends), and the corpse vampire regains 24 hit points.',
				damage: '2d8+6 damage',
				category: 5
			},
			{
				id: '654356a5-1e94-4031-93b1-bf46d47407fc',
				name: 'Rending',
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
				details: 'The corpse vampire shifts up to 6 squares and makes a claw attack.',
				damage: 'The corpse vampire shifts up to 6 squares and makes a claw attack',
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

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'bbdb01c5-d4b1-4845-8076-031679cc029a',
		name: 'Corrupted Offspring',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +15, Stealth +16',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 122,
		initiative: 13,
		ac: 25,
		fortitude: 24,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '15a3f42c-9bd4-49d3-b14b-c1d041825abc',
				name: 'Filthy Razor',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'The corrupted offspring shifts up to 2 squares before or after the attack; 3d4+6 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '3d4+6 damage',
				category: 1
			},
			{
				id: '43249995-eda3-488e-a6fe-1b720b41a0da',
				name: 'Cut the Tendons',
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
					defence: 2
				},
				description: '',
				details: 'The corrupted offspring shifts up to 2 squares before or after the attack; 5d4+8 damage, and the target is knocked prone and slowed (save ends).',
				damage: '5d4+8 damage',
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

		info: 'Level 12 Skirmisher',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: '9c7d9469-d47b-4370-91cf-523f173191a3',
		name: 'Corrupted Yuan-ti Malison Incanter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile, undead',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Arcana +19, Bluff +19, History +19, Insight +18, Stealth +18',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 118,
		initiative: 13,
		ac: 29,
		fortitude: 26,
		reflex: 27,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '59628167-2aec-4b71-ae1c-eb7c2bf91eb1',
				name: 'Zehir’s Shield',
				keywords: '',
				details: 'aura 10; allies in the aura gain a +2 power bonus to all defenses.'
			}
		],
		powers: [
			{
				id: '875b06e9-5bad-46aa-82a7-89e04fc461cf',
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
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '1d6+6 damage, and the target takes ongoing 5 poison damage (save ends).',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'bcbe13d3-5c6f-40da-b001-03e417aafaf5',
				name: 'Mindwarp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: null,
				description: '',
				details: '2d6+7 psychic damage, and the target is dazed (save ends).',
				damage: '2d6+7 psychic damage',
				category: 1
			},
			{
				id: '9fbe4893-e0ed-404b-9681-758af2cb675a',
				name: 'Poisoned Domination',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'affects a creature taking ongoing poison damage; ; the target is dominated until the end of the incanter’s next turn. Aftereffect: The target is dazed (save ends).',
				damage: 'affects a creature taking ongoing poison damage',
				category: 5
			},
			{
				id: '41b60620-22ce-488d-9a04-e4b06904aeb2',
				name: 'Zehir’s Venom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'affects a creature taking ongoing poison damage; 2d10+6 poison damage, and the target is dazed (save ends).',
				damage: 'affects a creature taking ongoing poison damage',
				category: 1
			},
			{
				id: 'c6749c81-e995-4f3e-b593-73b9d56d84b4',
				name: 'Deflect Attack',
				action: {
					action: 5,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The corrupted yuan-ti malison incanter transfers the attack’s damage and effects to an adjacent ally.',
				damage: 'the corrupted yuan-ti malison incanter transfers the attack’s damage and effects to an adjacent ally',
				category: 5
			},
			{
				id: 'cecab367-76a2-4722-87da-6814146da84e',
				name: 'Slither Away',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While bloodied, the corrupted yuan-ti malison incanter gains +2 speed and a +5 bonus to all defenses.',
				damage: 'the corrupted yuan-ti malison incanter gains +2 speed and a +5 bonus to all defenses',
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

		info: 'Level 15 Artillery (L)',
		phenotype: 'Medium natural humanoid (reptile, undead)'
	},
	{
		id: 'c4bb6d6d-290d-48f2-8b27-2838c12c0645',
		name: 'Couatl Mockery',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'blind, undead',
		level: 26,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13; blindsight 20',
		movement: 'fly 12 (hover)',
		alignment: 'Evil',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 22,
		ac: 40,
		fortitude: 36,
		reflex: 40,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7a5d836f-119b-47d4-95f5-bc257125dc14',
				name: 'Wing Slash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '6 damage plus 5 radiant and necrotic damage.',
				damage: '6 damage plus 5 radiant and necrotic damage',
				category: 1
			},
			{
				id: '1186d266-b13e-4619-b98d-6135c5c2dcea',
				name: 'Corrupt Cloud',
				action: null,
				keywords: 'Necrotic, Radiant',
				condition: 'when the couatl mockery is reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 26,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 10 radiant and necrotic damage, and the target cannot spend healing surges until the end of its next turn.',
				damage: '10 radiant and necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, gaze',
		tactics: '',

		info: 'Level 26 Minion',
		phenotype: 'Medium natural animate (blind, undead)'
	},
	{
		id: '3dffe0e2-7727-4584-bfc2-f77ba85e186c',
		name: 'Count Strahd von Zarovich',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger, undead',
		level: 20,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +18; blindsight 10, darkvision',
		movement: '6, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Bluff +23, Insight +18, Intimidate +23, Stealth +20',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 930,
		initiative: 17,
		ac: 34,
		fortitude: 32,
		reflex: 32,
		will: 32,
		regeneration: {
			value: 10,
			details: 'regeneration doesn’t function while Strahd is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: 'da2fd11e-431f-460f-8d78-b456494d2a35',
				name: 'Crippling Strike',
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
					bonus: 23,
					defence: 1
				},
				description: '',
				details: '3d10+5 necrotic damage, and the target is slowed until the end of Strahd’s next turn. Hit or Miss: Strahd shifts up to 2 squares.',
				damage: '3d10+5 necrotic damage',
				category: 1
			},
			{
				id: '76523337-7169-4c50-b73a-1a28d1be18d3',
				name: 'Blood Drain',
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
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; 3d10+5 damage, and the target is weakened (save ends), and Strahd regains 20 hit points.',
				damage: '3d10+5 damage',
				category: 1
			},
			{
				id: '2263b1d4-81bf-4ff6-b703-82a7fbee7ef8',
				name: 'Dominating Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Gaze',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'the target is dominated and takes a -2 penalty to saving throws against being dominated (save ends both). Aftereffect: The target is dazed and takes ongoing 10 psychic damage (save ends both). Strahd can have only one creature dominated at a time.',
				damage: 'the target is dazed and takes ongoing 10 psychic damage (save ends both)',
				category: 3
			},
			{
				id: '1fa8a6c3-51c2-4242-8b59-c64121bcce33',
				name: 'Strahd’s Choking Fog',
				action: {
					action: 1,
					trigger: 'sustain minor or move',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison, Zone',
				condition: '',
				range: 'Area burst 5 within 10',
				attack: null,
				description: '',
				details: 'the burst creates a zone of poisonous vapors that lasts until the end of Strahd’s next turn. A creature that enters the zone or that starts its turn in the zone takes 1d10 + 5 poison damage, and ongoing 5 poison damage (save ends). Sustain Minor: The zone persists. Sustain Move: The zone persists, and Strahd can move it up to 5 squares.',
				damage: 'a creature that enters the zone or that starts its turn in the zone takes 1d10 + 5 poison damage',
				category: 5
			},
			{
				id: 'bec748f5-6d2b-4399-a945-e85dbe41b561',
				name: 'Animal Form',
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
				details: 'Strahd transforms into a swarm of bats or a black wolf. He cannot use crippling strike or choking fog, though he gains new powers and statistics in addition to those he regularly has. Strahd can revert to his normal form as a minor action.',
				damage: '',
				category: 3
			},
			{
				id: '56cea70f-00af-4572-92a6-92a3450f9495',
				name: 'Mist Form',
				action: {
					action: 1,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All conditions affecting Strahd end, and he becomes insubstantial and gains fly (hover) 12 until the end of his next turn. Strahd cannot attack while in this form.',
				damage: 'and he becomes insubstantial and gains fly (hover) 12 until the end of his next turn',
				category: 5
			},
			{
				id: '3aaf5262-3ef1-4824-9a4a-0c4bf76fa7a6',
				name: 'Scent of Blood',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Strahd gains combat advantage against living, bloodied foes.',
				damage: '',
				category: 0
			},
			{
				id: '77ab587c-59fd-426a-b657-c58293e5768c',
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
				details: 'Strahd spends a healing surge and regains 232 hit points. Strahd gains a +2 bonus to all defenses until the start of his next turn.',
				damage: 'Strahd spends a healing surge and regains 232 hit points',
				category: 1
			},
			{
				id: '9df107f7-7cb0-4714-9c7e-f2f69c636c76',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Strahd’s mist form power recharges, and he uses it immediately. Strahd does not die, but he must reach his coffin within 2 hours or be destroyed.',
				damage: 'but he must reach his coffin within 2 hours or be destroyed',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 20 Solo Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger, undead)'
	},
	{
		id: '2e95fd42-49fb-4c4d-a37b-9add211a7105',
		name: 'Crawling Claw',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; tremorsense 10',
		movement: '8, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +8',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 14,
		fortitude: 12,
		reflex: 13,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '018f59d4-769d-433b-b6c0-811c400779ff',
				name: 'Jumping Claw',
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
					bonus: 3,
					defence: 2
				},
				description: '',
				details: '2 damage.',
				damage: '2 damage',
				category: 1
			},
			{
				id: '239cd80c-0d0a-44b7-8eb8-3d16c483e893',
				name: 'Digit Slide',
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
				details: 'The crawling claw shifts up to 8 squares.',
				damage: 'The crawling claw shifts up to 8 squares',
				category: 2
			},
			{
				id: 'e0d30ee0-5b92-489c-9246-0ade5fd3f121',
				name: 'Hampering Claws',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature that starts its turn adjacent to three or more crawling claws is slowed until the start of its next turn.',
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

		info: 'Level 1 Minion',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: 'b6fbc41b-7bc1-44f8-9171-49e318e459a1',
		name: 'Crawling Claw Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'swarm, undead',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; tremorsense 10',
		movement: '8, climb 4',
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
		hp: 53,
		initiative: 7,
		ac: 20,
		fortitude: 16,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [
			{
				id: '3e46ae38-7318-48b7-b349-512e79694836',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the crawling claw swarm makes a swarm of claws attack as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: '4216870d-4160-4877-9cfe-74096385eaaa',
				name: 'Swarm of Claws',
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
					defence: 2
				},
				description: '',
				details: '1d8+5 damage, and the target is immobilized.',
				damage: '1d8+5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attack',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural animate (swarm, undead)'
	},
	{
		id: '01e64ac5-59fa-43dc-9418-802d689b4b49',
		name: 'Crawling Gauntlet',
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
		senses: 'Perception +2; tremorsense 10',
		movement: '8, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 7,
			modifier: -2,
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
			score: 3,
			modifier: -4,
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
		initiative: 5,
		ac: 17,
		fortitude: 17,
		reflex: 18,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ef38d898-16e2-4d3f-b0ae-7e48f9a66f73',
				name: 'Jumping Claw',
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
					bonus: 3,
					defence: 2
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'c9eabfda-ed80-4ed2-9b83-04da33cb6ce0',
				name: 'Anchoring Claws',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature that starts its turn adjacent to three or more crawling claws is immobilized until the start of its next turn.',
				damage: '',
				category: 0
			},
			{
				id: 'ef3b2dc9-37da-4942-adec-8c86dd05f1ab',
				name: 'Digit Slide',
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
				details: 'The crawling gauntlet shifts up to 8 squares.',
				damage: 'The crawling gauntlet shifts up to 8 squares',
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

		info: 'Level 3 Minion',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: 'b52832b0-2f5b-4cac-a6ff-1640531580c1',
		name: 'Dark Pharaoh',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 264,
		initiative: 8,
		ac: 30,
		fortitude: 28,
		reflex: 22,
		will: 27,
		regeneration: {
			value: 10,
			details: 'if a dark pharaoh takes fire damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: 'a82a702c-80fb-4a07-a01d-679830aedc4f',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to attack rolls against the dark pharaoh.'
			}
		],
		powers: [
			{
				id: '59b05724-d0cf-4655-bb32-2881551541df',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+6 necrotic damage.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: '47cc57b4-d604-4399-a8b7-38d779a8c323',
				name: 'Slamming Fury',
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
				attack: null,
				description: '',
				details: 'The dark pharaoh makes two slam attacks, each one against a different target.',
				damage: '',
				category: 1
			},
			{
				id: '023679da-594b-4aa2-8d8a-c3e31f339663',
				name: 'Psychic Block',
				action: {
					action: 5,
					trigger: 'when an enemy would target the dark pharaoh with an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets the triggering enemy; the target designates another target for the attack, or the attack is negated. A negated daily power or encounter power is expended.',
				damage: '',
				category: 5
			},
			{
				id: 'f552f9f5-6a4b-4de6-87ed-87e8368729e6',
				name: 'Psychic Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '2d8+6 psychic damage, and each time the target uses an attack power, it takes 5 psychic damage (save ends). Aftereffect: The target is dazed (save ends).',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: 'e37e7366-4d0e-4221-9148-251f0097ea42',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts mummy rot.',
				damage: '',
				category: 0
			},
			{
				id: '929d4f74-eee5-47a6-94d6-19aa516fcfb4',
				name: 'False Faith',
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
				details: 'The dark pharaoh assumes a meditative stance. Until the end of its next turn, it gains resist 20 to all damage, and allies in its line of sight gain a +2 bonus to attack rolls. If the dark pharaoh moves, the effect ends.',
				damage: 'it gains resist 20 to all damage',
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
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 13 Elite Controller (L)',
		phenotype: 'Large natural animate (construct, undead)'
	},
	{
		id: '3791dc22-738e-4b37-b580-6fe5578be3d9',
		name: 'Darkflame Taskmaster',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'fire, undead',
		level: 17,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Giant',
		skills: '',
		equipment: 'chainmail; scourge',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 330,
		initiative: 12,
		ac: 33,
		fortitude: 30,
		reflex: 27,
		will: 34,
		regeneration: {
			value: 10,
			details: 'if a darkflame taskmaster takes cold damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '1dc704c5-55c3-4e19-bc0a-4d18c2b4ae63',
				name: 'Clinging Darkflame',
				keywords: '',
				details: '(Fire, Necrotic) aura 5; any enemy that starts its turn within the aura takes 5 fire and necrotic damage.'
			}
		],
		powers: [
			{
				id: '25f2ca87-236a-4629-97d0-4862731b5de3',
				name: 'Scourge',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '7bb84b14-ea6e-4b59-8aef-613e84c78163',
				name: 'Burning Despair',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Fire',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'the target takes ongoing 5 fire damage and a -2 penalty to all defenses (save ends both).',
				damage: 'the target takes ongoing 5 fire damage and a -2 penalty to all defenses (save ends both)',
				category: 1
			},
			{
				id: 'c25650d4-85f0-459b-86f4-43c28f3cab3e',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts mummy rot.',
				damage: '',
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
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Elite Controller',
		phenotype: 'Medium elemental humanoid (fire, undead)'
	},
	{
		id: '68c340c7-0713-4213-9f3d-44b39a58688f',
		name: 'Darkhoof',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 18,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +17',
		equipment: '',
		category: '',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 336,
		initiative: 14,
		ac: 35,
		fortitude: 31,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd056cd16-a344-489f-b3dd-3ac4f54c40b4',
				name: 'Hoof Strike',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '50dbbe81-f1ff-41ba-9808-5c2f79f2f536',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'The darkhoof makes two hoof strike attacks.; 2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'f549f649-ac8a-4c47-8918-477f50cb0afd',
				name: 'Lifebite',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'the target loses a healing surge, and the darkhoof regains 10 hit points.',
				damage: 'and the darkhoof regains 10 hit points',
				category: 3
			},
			{
				id: 'ca0cead5-8d7b-4d55-b4ac-3309df8c496e',
				name: 'Unstoppable Charge',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'The darkhoof makes a charge attack; 3d10+8 damage, and the target is pushed 1 square and knocked prone.',
				damage: '3d10+8 damage',
				category: 1
			},
			{
				id: 'a65320ef-50db-4afb-95ad-b90b077606d1',
				name: 'Call of Darkness',
				action: null,
				keywords: 'Necrotic',
				condition: 'when first bloodied and again when the darkhoof is reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is blinded and weakened (save ends both).',
				damage: '',
				category: 0
			},
			{
				id: 'e861651b-48f3-4e5b-b4f1-45058b29e746',
				name: 'Equine Bound',
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
				details: 'The darkhoof shifts up to 5 squares.',
				damage: 'The darkhoof shifts up to 5 squares',
				category: 2
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

		info: 'Level 18 Elite Skirmisher',
		phenotype: 'Medium natural beast (undead)'
	},
	{
		id: '7753f51d-871c-4c3c-8795-eef87620140d',
		name: 'Darkpact Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 19,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +19',
		equipment: '',
		category: 'Ghoul',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
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
		hp: 360,
		initiative: 16,
		ac: 35,
		fortitude: 29,
		reflex: 33,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: 'd74cd69a-4e65-4249-a90a-04d6ece9f6b8',
				name: 'Nauseating Stench',
				keywords: '',
				details: 'aura 6; any living creature within the aura takes a -2 penalty to attack rolls, skill checks, and ability checks.'
			}
		],
		powers: [
			{
				id: '444e3121-155c-4cb3-b320-4ef753757b7a',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d10+8 damage, and the target is immobilized.',
				damage: '2d10+8 damage',
				category: 1
			},
			{
				id: '787f24db-401c-4ae5-97f3-f0f5ca57dec0',
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
				attack: null,
				description: '',
				details: 'The darkpact ghoul makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'aa834b20-a798-4675-90ef-831e4cce06dc',
				name: 'Ravenous Bite',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Targets a bloodied creature; 2d12+10 damage, or against an immobilized target: 3d12+10 damage, and the target is weakened (save ends).',
				damage: '2d12+10 damage',
				category: 1
			},
			{
				id: '763820b3-0495-4868-b612-2cf8a56faad3',
				name: 'Baleful Step',
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
				details: 'The darkpact ghoul teleports up to 10 squares. Each enemy adjacent to the darkpact ghoul after it teleports is dazed until the end of the darkpact ghoul’s next turn.',
				damage: 'The darkpact ghoul teleports up to 10 squares',
				category: 2
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

		info: 'Level 19 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '84128c2d-b405-45c7-91c9-56486dd2cb88',
		name: 'Death Cultist',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +19',
		equipment: 'mace; plate armor',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 215,
		initiative: 13,
		ac: 38,
		fortitude: 38,
		reflex: 34,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: 'b454fcf6-1c4d-4adf-8b3f-f2bab50e6cd6',
				name: 'Aura of Decay',
				keywords: '',
				details: '(Necrotic) aura 5; living enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '23444ee4-3a07-482a-aa5d-0a23467b42f5',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, and the target is immobilized (save ends).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'e09e08e3-c76e-416d-9e7d-12f236f52fb9',
				name: 'Word of Orcus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+8 necrotic damage, and the target is stunned (save ends). Undead in the burst regain 15 hit points.',
				damage: '2d6+8 necrotic damage',
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
		immune: '',
		tactics: '',

		info: 'Level 24 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6e2bb71d-2554-4e49-b6da-602c2ff4bde9',
		name: 'Death Kin Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 9,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +15',
		equipment: '',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 76,
		initiative: 14,
		ac: 22,
		fortitude: 19,
		reflex: 23,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '353e2209-d02b-45ff-85cb-4974f9306066',
				name: 'Double Dagger',
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
				details: '4d4+3 damage.',
				damage: '4d4+3 damage',
				category: 1
			},
			{
				id: '8edcf8d8-5ad1-432a-9104-c0e3bf805dee',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A death kin skeleton deals 1d6 extra damage when it makes a successful melee attack on any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'f5d6c5f4-0fd9-455d-9709-6e9633dc3bdb',
				name: 'Death’s Kin',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a death kin skeleton takes damage, it can transfer any amount of the damage to another death kin skeleton within 3 squares of it.',
				damage: 'when a death kin skeleton takes damage',
				category: 0
			},
			{
				id: 'e95b972a-33a8-4c00-b60a-4119e4b591c3',
				name: 'Skeletal Harmony',
				action: null,
				keywords: '',
				condition: '',
				range: 'A death kin skeleton deals 1d6 extra damage on melee attacks against any target adjacent to two or more death kin skeletons.',
				attack: null,
				description: '',
				details: '',
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

		info: 'Level 9 Lurker',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'f115a928-73a5-44f5-aa8c-f71fc7615aa7',
		name: 'Deathdog',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: '',
		level: 6,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6; darkvision',
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
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 176,
		initiative: 6,
		ac: 20,
		fortitude: 19,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e4d9c670-1b92-4a33-9a26-db6ebc6f99f2',
				name: 'Pouncing Bite',
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
				details: '4d6+3 necrotic damage, and the target is knocked prone.',
				damage: '4d6+3 necrotic damage',
				category: 1
			},
			{
				id: '4505b7b8-98f3-4c81-bb3e-a8d023472180',
				name: 'Go for the Legs',
				action: {
					action: 1,
					trigger: 'when an adjacent enemy stands up',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: 'opportunity',
				range: '',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'The deathdog makes a pouncing bite attack against the triggering creature.; 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 5
			},
			{
				id: '1169019c-2e3c-4f1e-a723-819c58953d93',
				name: 'Unholy Animation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A living humanoid killed by a deathdog rises as a free-willed corruption corpse at the end of its creator’s next turn.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Elite Brute',
		phenotype: 'Large shadow beast'
	},
	{
		id: 'f4e382dc-fe89-4385-b775-61b2457508c1',
		name: 'Demilich',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 20,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: 'fly 12 (hover)',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Arcana +17, Insight +18, Religion +18',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 800,
		initiative: 13,
		ac: 33,
		fortitude: 35,
		reflex: 32,
		will: 32,
		regeneration: {
			value: 20,
			details: 'if a demilich takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: 'c9b6694a-c72b-44fa-b1da-7d1c4bd68572',
				name: 'Intruding Terror',
				keywords: '',
				details: '(Fear) aura 2; enemies within the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '8eee276e-64ab-4cfd-ae7e-e7bab64ad9c6',
				name: 'Shadow Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '3d6+8 necrotic damage.',
				damage: '3d6+8 necrotic damage',
				category: 1
			},
			{
				id: 'b0a7391e-52fe-4b66-b353-7fc4f3c03395',
				name: 'Twin Rays',
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
				attack: null,
				description: '',
				details: 'The demilich makes two shadow ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'dc86a016-55e6-4891-abf1-2eaab8734fa8',
				name: 'Drain Soul',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'does not provoke opportunity attacks; the target is dazed and restrained (save ends both). First Failed Saving Throw: The target is instead stunned and restrained (save ends both). Second Failed Saving Throw: The target dies, and its soul is trapped in one of the demilich’s soul gems until the demilich is destroyed.',
				damage: '',
				category: 1
			},
			{
				id: '0d65369d-162a-49be-a8f0-107a07330d49',
				name: 'Obsidian Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'the target takes ongoing 10 necrotic damage.',
				damage: 'the target takes ongoing 10 necrotic damage',
				category: 3
			},
			{
				id: 'ebb1a9f0-930e-4a05-9c32-a7b24340df25',
				name: 'Soul Shriveling Pulse',
				action: {
					action: 4,
					trigger: 'when a creature fails a saving throw against drain soul',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: '3d6+5 necrotic damage, and the target takes a -2 penalty to saving throws (save ends).',
				damage: '3d6+5 necrotic damage',
				category: 5
			},
			{
				id: 'ff93a7b4-1029-47d4-bf08-473e8460bce7',
				name: 'Consume Soul',
				action: {
					action: 3,
					trigger: 'expends a trapped soul',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The demilich regains 200 hit points.',
				damage: 'The demilich regains 200 hit points',
				category: 5
			},
			{
				id: '4c37ffa8-125e-4664-a7ea-7193005b26ba',
				name: 'Soul Gems',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The demilich’s six soul gems can each hold the soul of one of its victims. At the beginning of an encounter, the soul gems contain two souls. Crushing a gem after the demilich is defeated releases the soul to the Shadowfell.',
				damage: '',
				category: 0
			},
			{
				id: '5145bbc2-7fe8-49c8-89c7-da3a7cdcae2f',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a demilich is reduced to 0 hit points or fewer, its skull (but not the soul gems) crumbles into dust, but it is not destroyed. It reappears in 1d10 days within 1 square of its phylactery, unless the phylactery is also found and destroyed.',
				damage: 'It reappears in 1d10 days within 1 square of its phylactery',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 8,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison. sleep',
		tactics: '',

		info: 'Level 20 Solo Artillery',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: '47144ae0-6f84-471d-910e-2398ee8b98f5',
		name: 'Deranged Champion',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 300,
		initiative: 8,
		ac: 26,
		fortitude: 29,
		reflex: 22,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: 'f23ada8f-0aab-46d3-9215-9e41580aa36b',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to attack rolls against the deranged champion.'
			}
		],
		powers: [
			{
				id: '20a3acf6-b46c-4c7c-a405-91ca716c0ba1',
				name: 'Rotting Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Disease, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+19 while bloodied)2d8+7 necrotic damage (3d8 + 9 necrotic damage while bloodied), and the target contracts mummy rot.',
				damage: '(+19 while bloodied)2d8+7 necrotic damage (3d8 + 9 necrotic damage while bloodied)',
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
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 12 Elite Brute',
		phenotype: 'Large aberrant humanoid (undead)'
	},
	{
		id: 'd60e07b6-362b-40cf-af37-5894b952653d',
		name: 'Desecration',
		details: '',
		size: 5,
		origin: 4,
		type: 0,
		keywords: 'earth, undead',
		level: 23,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 1075,
		initiative: 14,
		ac: 39,
		fortitude: 38,
		reflex: 33,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: '46d4ed54-415e-4b85-8ac0-68faa9440e0d',
				name: 'Aura of Malevolence',
				keywords: '',
				details: '(Fear) aura 10; any enemy within the aura that attacks with a radiant power takes a -2 penalty to the attack roll.'
			}
		],
		powers: [
			{
				id: 'e2b31fe4-5779-4298-b4d6-8894c30ed175',
				name: 'Unholy Smite',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d6+15 necrotic damage, and ongoing 15 necrotic damage (save ends).',
				damage: '3d6+15 necrotic damage',
				category: 1
			},
			{
				id: '67173881-6619-41f6-ac7a-9d3a2f9bacd3',
				name: 'Double Attack',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'The desecration makes two unholy smite attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: 'dd8c2ec5-fed7-4936-a1a5-08b9c6aa42cc',
				name: 'Mouth of Darkness',
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
					bonus: 26,
					defence: 2
				},
				description: '',
				details: 'Reach 4; 2d12+15 necrotic damage, and the target is grabbed.',
				damage: '2d12+15 necrotic damage',
				category: 1
			},
			{
				id: '71281074-f808-42a7-8fad-aba94bffce34',
				name: 'Dark Plague',
				action: null,
				keywords: 'Necrotic',
				condition: 'when first bloodied and again when the desecration is reduced to 0 hit points',
				range: 'Close burst 20',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is weakened (save ends). In addition, the target loses a healing surge. Miss: Half damage, and the target is weakened until the end of its next turn. The target does not lose a healing surge.',
				damage: 'half damage',
				category: 0
			},
			{
				id: 'a28d3d2a-f53e-4d4c-957b-79777cb014f4',
				name: 'Rejuvenation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A desecration rises at full hit points one day after it has been destroyed. Only a quest destroys the creature completely, preventing it from using the rejuvenation power.',
				damage: '',
				category: 0
			},
			{
				id: '1eab11c9-96fd-4272-b3e6-0505217144a2',
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
				details: 'The desecration spends a healing surge and regains 269 hit points. The desecration gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The desecration spends a healing surge and regains 269 hit points',
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

		info: 'Level 23 Solo Controller',
		phenotype: 'Gargantuan natural animate (earth, undead)'
	},
	{
		id: '65648a89-3746-4f3a-b1ee-a1a46cbf4f3e',
		name: 'Discord Incarnate',
		details: '',
		size: 4,
		origin: 3,
		type: 2,
		keywords: 'undead',
		level: 29,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +17; truesight 5',
		movement: '8, fly 10',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 1340,
		initiative: 18,
		ac: 43,
		fortitude: 43,
		reflex: 38,
		will: 39,
		regeneration: null,
		auras: [
			{
				id: '65355289-c439-49ca-b6ff-9c35c06b7c15',
				name: 'Discordant Aura',
				keywords: '',
				details: '(Fear) aura 10; while the discord incarnate is not bloodied, any enemy that starts its turn within the aura takes a -2 penalty to all defenses until the end of its next turn.'
			},
			{
				id: '3cf361bc-ff5c-4cf2-afcb-6b484db1be39',
				name: 'Retribution Aura',
				keywords: '',
				details: '(Necrotic, Radiant) aura 5; while the discord incarnate is bloodied, any enemy that starts its turn within the aura takes 15 necrotic and radiant damage.'
			}
		],
		powers: [
			{
				id: 'cc1c2114-19ef-4105-903c-e0374d62f978',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d12+13 necrotic and radiant damage.',
				damage: '3d12+13 necrotic and radiant damage',
				category: 1
			},
			{
				id: '857ec40b-b74b-46af-9350-62588230b67d',
				name: 'Discord’s Wrath',
				action: {
					action: 1,
					trigger: 'while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Radiant, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Requires longsword; reach 3; make three longsword attacks, each against a different target.',
				damage: 'reach 3',
				category: 5
			},
			{
				id: 'bc83c6fd-86e9-431d-b5b0-44bad1aa929a',
				name: 'Discordant Retaliation',
				action: null,
				keywords: 'Necrotic, Radiant',
				condition: 'when first bloodied and again when the discord incarnate is reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: '5d6+8 necrotic and radiant damage, and the target is knocked prone and dazed (save ends). Miss: Half damage, and the target is knocked prone but not dazed.',
				damage: '5d6+8 necrotic and radiant damage',
				category: 0
			},
			{
				id: '430d9761-8d4d-41a1-ab8f-ca5e970776df',
				name: 'Create Couatl Mockeries',
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
				details: 'Four couatl mockeries appear within 10 squares of the discord incarnate and act as it wishes. They take their turns directly after the discord incarnate in the initiative order.',
				damage: 'Four couatl mockeries appear within 10 squares of the discord incarnate and act as it wishes',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'radiant 10, necrotic 10 (if a discord incarnate takes radiant damage or necrotic damage, it gains a +5 bonus to damage rolls until the end of its next turn)',
		vulnerable: '',
		immune: 'disease, fear',
		tactics: '',

		info: 'Level 29 Solo Brute',
		phenotype: 'Huge immortal humanoid (undead)'
	},
	{
		id: 'c2c2ab17-f17f-45d2-86d9-f2f439b6a957',
		name: 'Dragon Shell',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'dragon, undead',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6, fly 4',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 92,
		initiative: 8,
		ac: 24,
		fortitude: 21,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '99f17d4d-ac07-47c4-ab32-34d69e33bef5',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Healing; Acid, Cold, Fire, Lightning, or Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+5 damage plus 1d6 acid, cold, fire, lightning, or poison damage, depending on the dragon shell’s origin dragon, and the target is grabbed; see also clench. In addition, the target loses a healing surge, and the dragon shell regains 5 hit points.',
				damage: '1d10+5 damage plus 1d6 acid',
				category: 1
			},
			{
				id: '5ec5ab70-11f0-40a7-9492-3a1b28ffdc56',
				name: 'Clench',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the forsaken shell; the dragon shell shifts up to 3 squares before or after the attack, pulling the target with it; 1d10 + 5 necrotic damage (no attack roll required).; 2d6+5 damage.',
				damage: '1d10 + 5 necrotic damage (no attack roll required)',
				category: 1
			},
			{
				id: '293b16ff-59a7-42d5-822c-b5302c5da2c9',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '3d8+5 acid, cold, fire, lightning or poison damage, depending of the dragon shell’s origin dragon.',
				damage: 'lightning or poison damage',
				category: 1
			},
			{
				id: '29c853e2-85d5-4206-a442-e77d882763f0',
				name: 'Flexibility',
				action: {
					action: 5,
					trigger: 'when the forsaken shell would be immobilized; restrained; pushed; pulled; or slid',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The forsaken shell makes saving throw. On a save, the triggering effect is negated.',
				damage: '',
				category: 5
			},
			{
				id: 'a517a01a-4621-41b6-b328-67824733187a',
				name: 'Spawn Shell',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the forsaken shell kills a living dragon creature, the slain creature rises as a free-willed dragon shell at the start of its creator’s next turn.',
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
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Large natural animate (dragon, undead)'
	},
	{
		id: 'f6579927-b4c6-4605-ae78-263e9a6bf2ae',
		name: 'Dragonclaw Swarm',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'swarm, undead',
		level: 22,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; tremorsense 10',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
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
			score: 3,
			modifier: -4,
			cost: 0
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
		hp: 252,
		initiative: 16,
		ac: 34,
		fortitude: 35,
		reflex: 34,
		will: 33,
		regeneration: null,
		auras: [
			{
				id: '8f687a50-d608-4ce0-8e6f-827c63fcba75',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 3; the dragonclaw swarm makes a dragonclaw pin attack as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: '7312e411-3cf1-40cb-93f0-68f1f7d181c9',
				name: 'Dragonclaw Pin',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d8+14 damage, and the target is restrained until the start of tis next turn.',
				damage: '2d8+14 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 22 Brute',
		phenotype: 'Huge natural animate (swarm, undead)'
	},
	{
		id: 'f976fd98-6b85-4e67-87e8-c33c88130197',
		name: 'Dragonscale Slough',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 18,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +20',
		equipment: '',
		category: '',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 1,
			modifier: -5,
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
		hp: 1,
		initiative: 15,
		ac: 33,
		fortitude: 29,
		reflex: 30,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95ba0742-ab7f-4861-8492-b4c440447349',
				name: 'Grabbing Slam',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '9 damage, and the target is grabbed.',
				damage: '9 damage',
				category: 1
			},
			{
				id: '169f55b7-ad4d-4be0-ba20-51ec120158ef',
				name: 'Squeezing Scales',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the dragonscale slough; 9 damage (no attack roll required).; 2d8+7 damage.',
				damage: '9 damage (no attack roll required)',
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

		info: 'Level 18 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '63d864c4-05e1-4f64-9696-98ca7ca6663f',
		name: 'Dread Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'heavy shield; longsword; plate armor',
		category: 'Zombie',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 66,
		initiative: 3,
		ac: 21,
		fortitude: 19,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '59cf2dc5-304a-4f78-a4e0-f68d72aa87b6',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '50220f18-a985-44b3-9913-3bcabb28145c',
				name: 'Zombie Grab',
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
				details: 'the target is grabbed. Attempts to escape the zombie’s grab take a -5 penalty.',
				damage: 'Attempts to escape the zombie’s grab take a -5 penalty',
				category: 1
			},
			{
				id: '9e05505b-1710-47e8-8db5-58c0d75e4215',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a dread zombie is reduced to 0 hit points by an attack that does not deal fire or radiant damage, the creature is not destroyed. The dread zombie falls prone and appears to be destroyed, but instead, the creature returns with 10 hit points at the beginning of its next turn.',
				damage: 'if a dread zombie is reduced to 0 hit points by an attack that does not deal fire or radiant damage',
				category: 0
			},
			{
				id: 'd270b3de-37f1-4aa2-b13c-1217e1373e43',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A critical hit scored against a dread zombie reduces the zombie to 0 hit points.',
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

		info: 'Level 5 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '5d7273ca-c7e9-4b16-8bf6-50a310b512de',
		name: 'Dread Zombie Myrmidon',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 10,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'heavy shield; longsword; plate armor',
		category: 'Zombie',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 109,
		initiative: 8,
		ac: 26,
		fortitude: 23,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3001cb43-d3fc-4cac-a897-916bbabcd4f2',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d8+4 damage, and the target is marked until the end of the dread zombie myrmidon’s next turn.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: '2481533f-aafb-4480-a41a-c386563131a7',
				name: 'Necrotic Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires longsword; 2d8+4 necrotic damage, and the target is immobilized until the end of the dread zombie myrmidon’s next turn. If the target is marked by the dread zombie myrmidon, it is immobilized and dazed until the end of the dread zombie myrmidon’s next turn.',
				damage: '2d8+4 necrotic damage',
				category: 1
			},
			{
				id: 'b05905f1-befd-4eb1-8807-69ad06d6443c',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a dread zombie myrmidon is reduced to 0 hit points by an attack that does not deal fire damage or radiant damage, the creature is not destroyed. The dread zombie myrmidon falls prone and appears to be destroyed, but instead, the creature returns with 15 hit points at the start of its next turn.',
				damage: 'if a dread zombie myrmidon is reduced to 0 hit points by an attack that does not deal fire damage or radiant damage',
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

		info: 'Level 10 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '6db7a832-610d-4d8b-918c-e316a69f5d4a',
		name: 'Drowned One',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'aquatic, undead',
		level: 2,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: '4, swim 8',
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
			score: 12,
			modifier: 1,
			cost: 2
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
		initiative: 1,
		ac: 13,
		fortitude: 13,
		reflex: 9,
		will: 10,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c630e1f8-bfac-47a1-a5de-f26b4aa64c7f',
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
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Minion',
		phenotype: 'Medium natural animate (aquatic, undead)'
	},
	{
		id: '8607afa3-9f48-4939-99ec-d22e0ab4cfee',
		name: 'Entropic Reaper',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +14',
		equipment: 'scythe',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 232,
		initiative: 15,
		ac: 31,
		fortitude: 29,
		reflex: 29,
		will: 27,
		regeneration: {
			value: 10,
			details: 'if an entropic reaper takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '875f5a83-5878-4c9f-b33c-d26d05319551',
				name: 'Umbral Scythe',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d4+5 necrotic damage.',
				damage: '4d4+5 necrotic damage',
				category: 1
			},
			{
				id: 'cae04092-0a5e-44b7-847c-f8f43c524b06',
				name: 'Entropic Assault',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic, Weapon',
				condition: '',
				range: 'close burst 2',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Requires scythe; 4d4 + 5 necrotic damage, the target is dazed (save ends). First Failed Saving Throw: The target is instead stunned (save ends). Second Failed Saving Throw: The target takes ongoing 10 psychic damage and is stunned (save ends both).; 2d8+6 damage.',
				damage: '4d4 + 5 necrotic damage',
				category: 1
			},
			{
				id: '771384f2-1c54-4343-9f78-16d4773f843f',
				name: 'Eye of Impending Doom',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Gaze, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'targets one creature; the target takes 10 psychic damage if it attacks the entropic reaper (save ends).',
				damage: 'the target takes 10 psychic damage if it attacks the entropic reaper (save ends)',
				category: 3
			},
			{
				id: '6b28e9de-dd20-4f62-ae23-b1341669bf0b',
				name: 'Shift Into Nothing',
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
				details: 'The entropic reaper disappears, negating line of sight and line of effect to it for all creatures. At the start of its next turn, it returns to a square within 5 squares of the square it occupied when it last used shift into nothing.',
				damage: 'it returns to a square within 5 squares of the square it occupied when it last used shift into nothing',
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

		info: 'Level 15 Elite Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '41c1f417-b66c-48b9-bf3d-47a08483cbf6',
		name: 'Exalted Brain in a Jar',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: 'fly 6 (hover)',
		alignment: 'Evil',
		languages: 'Common, telepathy 10',
		skills: 'Arcana +16, Bluff +15, Diplomacy +15, Intimidate +15',
		equipment: '',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 123,
		initiative: 7,
		ac: 26,
		fortitude: 22,
		reflex: 18,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '50af14a3-5cbd-4e73-9d5c-ac497ec11fbb',
				name: 'Teleportation Field',
				action: {
					action: 4,
					trigger: 'when an enemy hits the exalted brain in a jar with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'Targets the triggering creature; the target is teleported up to 8 squares.',
				damage: 'the target is teleported up to 8 squares',
				category: 5
			},
			{
				id: '4fbb7368-3bcd-4b0a-80ba-b5747af71999',
				name: 'Fearful Recoil',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 8',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target immediately moves its speed plus 4 squares away from the exalted brain in a jar. The target avoids hazardous terrain and difficult terrain if possible.',
				damage: 'the target immediately moves its speed plus 4 squares away from the exalted brain in a jar',
				category: 3
			},
			{
				id: '18c7a2ab-affe-45df-a06b-d0c5cd8ecbf7',
				name: 'Supreme Domination',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'a9a5e457-3f11-41b0-bb67-1092c9eb4bdb',
				name: 'Mind Stab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '1d10+8 psychic damage, and the target takes a -2 penalty to Will (save ends).',
				damage: '1d10+8 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Controller',
		phenotype: 'Medium natural animate'
	},
	{
		id: 'cdd5a87d-000f-4312-bf96-3754d296cb8c',
		name: 'Famine Hound',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '8',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 38,
		initiative: 6,
		ac: 16,
		fortitude: 14,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '819141f4-5cd0-4d9e-a03e-d6c0a63e7ec5',
				name: 'Gnash',
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
					bonus: 5,
					defence: 2
				},
				description: '',
				details: '1d4+2 necrotic damage, and ongoing 5 damage (save ends).',
				damage: '1d4+2 necrotic damage',
				category: 1
			},
			{
				id: '7b2f152a-6f37-4c45-9dac-e0d76d7b0e42',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a famine hound hits a target it has combat advantage against, the target is knocked prone.',
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

		info: 'Level 2 Skirmisher',
		phenotype: 'Small natural beast (undead)'
	},
	{
		id: 'ea0c3243-2506-4ed0-ac84-479e0c3bdf7e',
		name: 'Famine Spirit',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '4 phasing',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 167,
		initiative: 12,
		ac: 33,
		fortitude: 34,
		reflex: 32,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e5d628ee-78a0-4294-b2e2-1f9b33259db2',
				name: 'Rending Claws',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Requires a free hand; reach 2; 3d8+8 necrotic damage, and the target is grabbed.',
				damage: '3d8+8 necrotic damage',
				category: 1
			},
			{
				id: '8798a6d8-e3f8-4dbf-ab3e-1441c073865f',
				name: 'Swallow Whole',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the famine spirit; 2d8+4 necrotic damage, and the target is engulfed, entering the famine spirit’s space and disappearing from sight and removing line of effect to all squares. While engulfed, the target takes ongoing 10 acid damage and is stunned and immobilized (save ends all). The famine spirit gains regeneration 10 while a target is engulfed.',
				damage: '2d8+4 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Brute',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: 'abc74e5c-02a7-454d-93e9-fda2933c5293',
		name: 'Fear Moth',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'swarm, undead',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; blindsight 10, darkvision',
		movement: 'fly 8 (hover)',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 143,
		initiative: 17,
		ac: 31,
		fortitude: 26,
		reflex: 29,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '11cbb58f-2f00-4103-965e-df4c21837d82',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 2; the fear moth makes a basic attack as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: 'e904c492-fee2-4572-b924-6ef489e642af',
				name: 'Winged Assault',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target is knocked prone.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '0b411b7b-f140-4314-9449-10721366f16b',
				name: 'Wave of Fear',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d8+6 psychic damage, and the target is stunned until the end of the fear moth’s next turn. Miss: Half damage, and the target is not stunned.',
				damage: '4d8+6 psychic damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Large shadow beast (swarm, undead)'
	},
	{
		id: 'ae9a3efc-691f-4d69-8685-abede249770b',
		name: 'Flesh Acolyte',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 109,
		initiative: 10,
		ac: 28,
		fortitude: 25,
		reflex: 25,
		will: 28,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [
			{
				id: '393ad881-e300-4d59-aba9-5fa9f959e2d2',
				name: 'Sickening Stench',
				keywords: '',
				details: 'aura 2; any living creature that starts its turn within the aura is weakened until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '2456b29d-cbda-41c3-8464-dac35b72adf2',
				name: 'Putrid Slam',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage, and the target is dazed until the end of the flesh acolyte’s next turn.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '51ad9714-3333-43b5-a051-79abd48f389a',
				name: 'Ghastly Glob',
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
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '2d8+4 necrotic damage, and the target cannot make saving throws or spend healing surges until the start of its next turn.',
				damage: '2d8+4 necrotic damage',
				category: 1
			},
			{
				id: '504bc69f-13cb-49f8-9250-4d8867bb67f0',
				name: 'Exploding Entrails',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'targets living creatures; 1d10+4 necrotic damage, and ongoing 10 necrotic damage (save ends).',
				damage: '1d10+4 necrotic damage',
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
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 14 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6d947f0c-703a-4beb-9fc5-30f42d607ae5',
		name: 'Flesh Scamp',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'homunculus',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '7, climb 7',
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
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 21,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '350d100f-6376-4fea-bb05-0a2b42eedfd8',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '005c28bc-6087-4518-aa39-29c62b8fa508',
				name: 'Scamp’s Dance',
				action: {
					action: 1,
					trigger: 'while at least three flesh scamps are adjacent to the target',
					sustainAction: 0,
					use: 1,
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
				details: '2 damage per flesh scamp adjacent to the target, and the target is immobilized until the end of the flesh scamp’s next turn. If the target is already immobilized, the target is instead dazed until the end of the flesh scamp’s next turn. If the target is already dazed, the attack deals 2 extra damage.',
				damage: '2 damage per flesh scamp adjacent to the target',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Small natural animate (homunculus)'
	},
	{
		id: '737ea1cc-4a05-4d5c-a7ff-47cd247167d4',
		name: 'Forsaken Hierophant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +17',
		equipment: 'mace; plate armor',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 955,
		initiative: 11,
		ac: 37,
		fortitude: 37,
		reflex: 32,
		will: 41,
		regeneration: {
			value: 10,
			details: 'if a forsaken hierophant takes fire damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '4debf779-63a8-42ea-af47-40a5321f4a1f',
				name: 'Decaying Hope',
				keywords: '',
				details: '(Fear, Necrotic) aura 5; any enemy within the aura takes a -2 penalty to all defenses and a -2 penalty to attack rolls against the forsaken hierophant.'
			}
		],
		powers: [
			{
				id: 'd57c151e-1d13-48ea-bcbe-8335881f487a',
				name: 'Mace',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and ongoing 10 necrotic damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '045a121f-eeab-48c0-b164-e04ac243e060',
				name: 'Vision of Death',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets one creature; 2d6+7 psychic damage, and the target is dazed (save ends).',
				damage: '2d6+7 psychic damage',
				category: 3
			},
			{
				id: '9fdbf352-d73a-4497-af0e-64b762a276a2',
				name: 'Word of Orcus',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+7 necrotic damage, and the target is stunned (save ends). Undead in the burst regain 15 hit points.',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: '410fbfd1-d821-49af-8756-b763823e0e3e',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts mummy rot.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Solo Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'f8aa27b5-c434-4a73-be44-7084a37e89a1',
		name: 'Forsaken Shell',
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
		senses: 'Perception +5; darkvision',
		movement: '8, climb 8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +15',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 70,
		initiative: 12,
		ac: 20,
		fortitude: 16,
		reflex: 20,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c673998c-28b2-48c1-8e7a-5485d217fa8f',
				name: 'Necrotic Slap',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6 damage plus 5 necrotic damage, and the target is grabbed; see also envelop. In addition, the target loses a healing surge, and the forsaken shell regains 5 hit points.',
				damage: '1d6 damage plus 5 necrotic damage',
				category: 1
			},
			{
				id: '17dc15a0-94bf-40d5-a544-e69e42e38218',
				name: 'Envelop',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the forsaken shell; the forsaken shell shifts up to 3 squares before or after the attack, pulling the target with it; 2d6 + 3 necrotic damage (no attack roll required).; 1d10+4 damage.',
				damage: '2d6 + 3 necrotic damage (no attack roll required)',
				category: 1
			},
			{
				id: 'ee978059-9fc3-4324-88bd-f14542a00e04',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A forsaken shell deals 2d6 extra damage when it hits a target it has combat advantage against.',
				damage: 'a forsaken shell deals 2d6 extra damage when it hits a target it has combat advantage against',
				category: 0
			},
			{
				id: '27672207-0b1a-4a51-ab47-222607de7a31',
				name: 'Flexibility',
				action: {
					action: 5,
					trigger: 'when the forsaken shell would be immobilized; restrained; pushed; pulled; or slid',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The forsaken shell makes a saving throw. On a save, the triggering effect is negated.',
				damage: '',
				category: 5
			},
			{
				id: '68ba8985-b95f-493d-9ec6-e0d96b16242d',
				name: 'Spawn Shell',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a forsaken shell kills a Medium living humanoid creature, the slain creature rises as a free-willed forsaken shell at the start of its creator’s next turn.',
				damage: '',
				category: 0
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

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '2c343016-160c-4403-a579-1036f6a3074f',
		name: 'Giant Skeletal Bat',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 10,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; blindsight 5, darkvision',
		movement: '4, fly 8 (clumsy)',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		dexterity: {
			score: 22,
			modifier: 6,
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 104,
		initiative: 13,
		ac: 24,
		fortitude: 22,
		reflex: 24,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '71182ec0-558a-4e6a-85f0-a0bb8e65e892',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d8+4 damage, and the target is pushed 1 square and knocked prone.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: '1f310c09-5763-471f-b729-a53208d2b9d4',
				name: 'Swoop and Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'The giant skeletal bat shifts up to 6 squares and can move through occupied squares as it moves. It makes a melee basic attack against any creature whose space it enters. The skeleton cannot attack a single target more than once in this fashion, and it must end its movement in an unoccupied square.',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: '63894301-290f-4283-aa5f-9de02866fcf7',
				name: 'Swoop and Drop',
				action: {
					action: 7,
					trigger: 'when the giant skeletal bat attacks a creature with swoop and claw',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attack deals no damage. Instead, the target is grabbed. When the giant skeletal bat moves, the grabbed creature slides along with it, remaining in the same space relative to the bat.',
				damage: 'the attack deals no damage',
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

		info: 'Level 10 Skirmisher',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: 'ae79235f-05b7-44e7-bcf4-dac7f46b55fa',
		name: 'Grave Chill Blaspheme',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 150,
		initiative: 11,
		ac: 25,
		fortitude: 23,
		reflex: 25,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: '554c68ae-b351-4f8f-b3a8-58c37976b50b',
				name: 'Seeping Chill',
				keywords: '',
				details: '(Cold) aura 1; while the grave chill blaspheme is bloodied, any enemy that enters the aura or starts its turn within the aura takes 5 cold damage.'
			}
		],
		powers: [
			{
				id: 'eac318f4-7a7a-4112-b445-2c30ad9b90f5',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d10+5 cold and necrotic damage.',
				damage: '2d10+5 cold and necrotic damage',
				category: 1
			},
			{
				id: 'd0da0f3e-cb25-4754-93fb-edb656d78fc1',
				name: 'Chill to the Bone',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '3d10+5 cold and necrotic damage, and the target is weakened (save ends).',
				damage: '3d10+5 cold and necrotic damage',
				category: 1
			},
			{
				id: 'b733d4a8-20fe-4fe1-b5fe-f6f1f96dfa62',
				name: 'Nimble Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The grave chill blaspheme shifts up to 1 square and makes a bite attack.',
				damage: 'The grave chill blaspheme shifts up to 1 square and makes a bite attack',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -10
			},
			{
				type: 6,
				value: -10
			},
			{
				type: 7,
				value: -10
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

		info: 'Level 12 Brute',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'ac9102d6-6063-48fa-8e5f-fa0310f450f5',
		name: 'Grave Dirt Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 15,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6, burrow 4',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 7,
			modifier: -2,
			cost: 0
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
		hp: 368,
		initiative: 5,
		ac: 29,
		fortitude: 31,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '87cebda5-199d-48fe-b953-830b41df0122',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+20 while bloodied)2d8+6 damage, and the target takes ongoing 10 necrotic damage and is dazed (save ends both).',
				damage: '(+20 while bloodied)2d8+6 damage',
				category: 1
			},
			{
				id: 'c24ca29c-e243-454c-85ee-6cdbd0cc3521',
				name: 'Double Attack',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'The grave dirt golem makes two slam attacks.; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '4cb332b9-dbe5-4e1a-a072-acae2c7fc120',
				name: 'Grave Dirt Rampage',
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
				details: 'The grave dirt golem moves up to its speed plus 2 and can move through enemies’ spaces without provoking opportunity attacks. When it enters a creature’s space (ally or enemy), the golem makes a slam attack against that creature. The grave dirt golem must end its movement in an unoccupied space, and it can make no more than one slam attack against any single creature when using this power.',
				damage: 'The grave dirt golem moves up to its speed plus 2 and can move through enemies’ spaces without provoking opportunity attacks',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 15 Elite Brute',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'ca34d4e6-eb06-4b62-b84c-eaab0b60ae15',
		name: 'Hangman Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 20,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +18',
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 476,
		initiative: 13,
		ac: 34,
		fortitude: 36,
		reflex: 32,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd663ef2a-93d3-4b25-a0b0-a8fc15c61163',
				name: 'Hangman’s Lash',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+25 while bloodied)2d8+7 damage, and the target is immobilized until the end of the hangman golem’s next turn.',
				damage: '(+25 while bloodied)2d8+7 damage',
				category: 1
			},
			{
				id: '936877c1-7a3d-4ddd-813d-0da48c028bb4',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'The hangman golem makes two hangman’s lash attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: 'ad852d20-b6bc-443f-8b68-ea6370c5119d',
				name: 'Strangle',
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
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'Reach 2; targets a creature immobilized by the hangman golem; 3d8+8 damage, and the target takes ongoing 10 damage and is restrained (save ends both).',
				damage: '3d8+8 damage',
				category: 3
			},
			{
				id: 'beb77456-7b40-44f5-9d04-241defc3dec1',
				name: 'Rope Whirlwind',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d8+6 damage, and the target is immobilized (save ends).',
				damage: '2d8+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 20 Elite Brute',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'b3ff2902-1072-43aa-8f72-162d3710f785',
		name: 'Harrazau the God Swallower',
		details: '',
		size: 5,
		origin: 3,
		type: 2,
		keywords: 'undead',
		level: 31,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +26; darkvision',
		movement: '8, burrow 8, climb 8',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Insight +26, Religion +19',
		equipment: '',
		category: '',
		strength: {
			score: 42,
			modifier: 16,
			cost: -1
		},
		constitution: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 1440,
		initiative: 23,
		ac: 43,
		fortitude: 42,
		reflex: 37,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '04ee547b-286f-4054-98a4-df3a3a0abb07',
				name: 'Gaping Maw',
				keywords: '',
				details: 'aura 6; at the start of Harrowzau’s turn, any enemy within the aura is pulled 2 squares.'
			}
		],
		powers: [
			{
				id: '06da0761-e448-4640-9eb5-e35a39cdafa7',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d8+16 damage.',
				damage: '2d8+16 damage',
				category: 1
			},
			{
				id: '42a49505-1fc6-43a1-9ee3-9db19e6e55a9',
				name: 'Bite',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d8+16 damage.',
				damage: '2d8+16 damage',
				category: 3
			},
			{
				id: 'b08062ef-802a-4aab-a92e-8b615392700f',
				name: 'Rending Claws',
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
				details: 'Harrowzau makes four claw attacks, no more than two of them against a single target. If two attacks hit the same target, it is grabbed, and it takes ongoing 15 damage until the grab ends. Harrowzau cannot use rending claws against another target while it is grabbing a creature.',
				damage: 'and it takes ongoing 15 damage until the grab ends',
				category: 1
			},
			{
				id: '3415da57-ab90-4b8c-8551-d2ec7f1837e7',
				name: 'Consume',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '2d8+16 necrotic damage, and the target is trapped (save ends). A trapped target is removed from play and can take no actions, and takes ongoing 15 acid damage. Harrowzau occupies the target’s former space and gains regeneration 15. If the target succeeds on the saving throw, Harrowzau takes 1d6 damage, and the target escapes and appears in an unoccupied space of Harrowzau’s choice adjacent to Harrowzau. A trapped target automatically escapes when Harrowzau is destroyed, reappearing in a space of its choice within the space previously occupied by Harrowzau.',
				damage: '2d8+16 necrotic damage',
				category: 1
			},
			{
				id: 'f44268bb-1835-4465-b5af-8e4cadae7eed',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Harrowzau makes an extra bite attack against any enemy it has combat advantage against. Harrowzau automatically gains combat advantage against any living, bloodied enemy.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, necrotic, poison',
		tactics: '',

		info: 'Level 31 Solo Brute',
		phenotype: 'Gargantuan immortal humanoid (undead)'
	},
	{
		id: '1dee2baf-de84-4f8e-8f59-7cb353f34ee5',
		name: 'Harrowzau the Unborn',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'undead',
		level: 28,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: 'fly 9 (hover)',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Insight +25, Religion +19',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
			cost: -1
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 634,
		initiative: 18,
		ac: 42,
		fortitude: 42,
		reflex: 37,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '6d32f4e7-8550-431f-b1b8-e551485cd856',
				name: 'Shroud of Death',
				keywords: '',
				details: '(Necrotic) aura 5; at the beginning of the atropal’s turn, undead allies within the aura regain 20 hit points, and living creatures in the aura take 10 necrotic damage. Radiant damage to the atropal ends its shroud of death. The atropal can restore the aura as a minor action.'
			}
		],
		powers: [
			{
				id: '49f64f92-edf4-40f6-883d-3af52a994f85',
				name: 'Necrotizing Touch',
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
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d10+10 damage, and the target takes ongoing 15 necrotic damage and a -2 penalty to attack rolls, and the target loses any resistance or immunity to necrotic damage (save ends all).',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: '218e8ebc-b765-4534-8abe-e93c934cb43e',
				name: 'Atropos Burst',
				action: {
					action: 1,
					trigger: 'recharges when a living creature is reduced to 0 hit points within the atropal’s aura',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '4d8+5 necrotic damage, and the target loses a healing surge. The atropal gains 1 action point if it hits any creatures with atropos burst.',
				damage: '4d8+5 necrotic damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, necrotic, poison',
		tactics: '',

		info: 'Level 28 Elite Brute',
		phenotype: 'Large immortal beast (undead)'
	},
	{
		id: '42b0b6fa-441c-4696-a2eb-b8525614ada4',
		name: 'High Preceptor',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +17',
		equipment: 'leather armor; mace',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 254,
		initiative: 11,
		ac: 29,
		fortitude: 25,
		reflex: 27,
		will: 27,
		regeneration: {
			value: 10,
			details: 'regeneration doesn’t function while the high preceptor is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: 'cd3ce432-1808-4185-9a9d-f0a7203c7628',
				name: 'Mace',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'b576222d-b887-4038-8c9e-d47016ea6a99',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; 1d12+8 damage, and the target is weakened (save ends), and the high preceptor regains 63 hit points.',
				damage: '1d12+8 damage',
				category: 5
			},
			{
				id: '66ac56a1-41f5-4dd2-803d-b95157bcb0a3',
				name: 'Betraying Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'the target makes a melee basic attack as free action against an adjacent ally of the high preceptor’s choice.',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: 'f69f393e-4134-4676-915a-7632e2f19136',
				name: 'Blood Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d6+7 necrotic damage, and the target is dazed (save ends). Undead within the burst regain 15 hit points.',
				damage: '1d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'de0b43f5-ef5c-4256-b885-2f7cb9cc6bd8',
				name: 'Bloody Mist Form',
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
				details: 'The high preceptor becomes insubstantial and gains a fly speed of 12, but cannot make attacks. The high preceptor can remain in mist form for up to 1 hour or can end the effect as a minor action.',
				damage: 'The high preceptor becomes insubstantial and gains a fly speed of 12',
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

		info: 'Level 13 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '0b0442db-1f10-41ab-8c75-0aa5a5ea824c',
		name: 'Hooded Master',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +17, Religion +17',
		equipment: 'implement, staff',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 240,
		initiative: 10,
		ac: 32,
		fortitude: 28,
		reflex: 27,
		will: 30,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [
			{
				id: 'be2d67dd-dd8c-45a2-a056-f0c7221dbf1f',
				name: 'Sickening Stench',
				keywords: '',
				details: 'aura 2; any living creature that starts its turn within the aura is weakened until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '2f9485a5-8569-4700-be24-05842fbaf668',
				name: 'Master’s Staff',
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
				details: '1d8+8 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: 'f6933354-1995-45d1-8e53-cd68e2a8466a',
				name: 'Death Eagle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 5',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d4+7 necrotic damage, and the target is weakened until the end of the hooded master’s next turn.',
				damage: '2d4+7 necrotic damage',
				category: 1
			},
			{
				id: 'efb76504-faec-4c48-9407-d11d37ad4951',
				name: 'Organ Spawn',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: 'Close blast 3',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the master’s next turn. Hit or Miss: An organ wretch appears adjacent to the hooded master and acts immediately after the master. An organ spawn created in this way does not contribute to an encounter’s experience total.',
				damage: '',
				category: 1
			},
			{
				id: '7d3d1b00-fa72-493f-856f-a54e02bf7a1e',
				name: 'Writhing Entrails',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d6+6 necrotic damage, and the target is slowed and dazed (save ends both).',
				damage: '2d6+6 necrotic damage',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 16 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '0bb3c5a0-70bb-4843-b67a-64ec008e2187',
		name: 'Howling Spirit',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Evil',
		languages: 'Common, Giant',
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
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 14,
		ac: 30,
		fortitude: 26,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: 'e3d637a4-aece-4266-9e78-6629efe9c813',
				name: 'Choir of Madness',
				keywords: '',
				details: 'aura 1; any enemy within the aura that takes damage from a power that has the fear or psychic keyword takes 5 extra psychic damage.'
			}
		],
		powers: [
			{
				id: '0a7bfd4d-d220-4719-b7ed-c7c10301d9a7',
				name: 'Spectral Strafe',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'The howling spirit shifts up to 1 square before or after the attack; 7 necrotic damage.',
				damage: '7 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '9bd39d4b-3da4-4d9f-8052-35c2aeee37a0',
		name: 'Kas the Betrayer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 26,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '7, climb 3 (spider climb)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +25, Insight +22, Intimidate +27, Religion +25, Stealth +21',
		equipment: 'black iron armor; plate armor; lifedrinker weapon; bastard sword',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 1190,
		initiative: 20,
		ac: 44,
		fortitude: 41,
		reflex: 39,
		will: 41,
		regeneration: {
			value: 20,
			details: 'regeneration doesn’t function while Kas is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: '1dd458fb-f45c-459e-95ed-a05ad3e60cb0',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d10+14 damage (crit 34+5d6).',
				damage: '2d10+14 damage (crit 34+5d6)',
				category: 1
			},
			{
				id: '7dbe8743-91e8-46ce-9f1a-39a674215fab',
				name: 'Blood Drain',
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
					bonus: 31,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; 2d12+14 damage, and the target is weakened (save ends), and Kas regains 297 hit points.',
				damage: '2d12+14 damage',
				category: 1
			},
			{
				id: 'bde7ff45-9f69-4cd4-868e-25f83deaa973',
				name: 'Terrifying Smite',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Requires bastard sword; 2d10+14 damage (crit 34+5d6), and the target is pushed 5 squares and immobilized (save ends).',
				damage: '2d10+14 damage (crit 34+5d6)',
				category: 1
			},
			{
				id: 'ea976841-37ea-43a5-929f-0060f71ab1dc',
				name: 'Dominating Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm, Gaze',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: 'the target is dominated and takes a -2 penalty to saving throws against being dominated (save ends both). Aftereffect: The target is dazed (save ends). Kas can have only one creature dominated at a time.',
				damage: 'the target is dominated and takes a -2 penalty to saving throws against being dominated (save ends both)',
				category: 3
			},
			{
				id: '8e961297-4e55-4f41-90ca-7eb413a2c760',
				name: 'Betrayer’s Whirlwind',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Requires bastard sword; 2d10+17 damage (crit 37+5d6), and the target is blinded (save ends).',
				damage: '2d10+17 damage (crit 37+5d6)',
				category: 1
			},
			{
				id: '91b930b8-b6c1-46b0-b763-8901ac789c02',
				name: 'Kas’s Challenge',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'targets one enemy; the target is marked until the end of Kas’s next turn. If the marked target makes an attack that doesn’t include Kas as a target, it takes ongoing 10 necrotic damage (save ends).',
				damage: 'it takes ongoing 10 necrotic damage (save ends)',
				category: 3
			},
			{
				id: '8c17ea58-2c7f-4f19-9c8f-234d0f9ea8a8',
				name: 'Kas’s Recovery',
				action: {
					action: 7,
					trigger: 'while kas is bloodied; recharges when kas reduces an enemy to 0 hit points or fewer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kas spends a healing surge to regain 297 hit points and end all adverse effects currently affecting him.',
				damage: 'Kas spends a healing surge to regain 297 hit points and end all adverse effects currently affecting him',
				category: 5
			},
			{
				id: 'f9eabdbf-b4b7-42ba-9be5-71c928cb0667',
				name: 'Mist Form',
				action: {
					action: 1,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Kas becomes insubstantial and gains fly (hover) 12 until the end of his next turn. Kas cannot attack while in this form and can sustain this form for up to 1 hour.',
				damage: 'The Kas becomes insubstantial and gains fly (hover) 12 until the end of his next turn',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
			},
			{
				type: 6,
				value: -15
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

		info: 'Level 26 Solo Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '8a585d1d-ed7e-490f-9987-ddfb078b7d9a',
		name: 'Kellemor and Przithnee',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abysssal, Common, Elven',
		skills: 'Arcana +25, History +20, Nature +21, Religion +23',
		equipment: 'implement, staff',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 316,
		initiative: 14,
		ac: 37,
		fortitude: 34,
		reflex: 35,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b5710515-7358-4399-8af4-3f1c5e959fe5',
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '99ee85a7-9e1c-4cd8-adbf-15f1a5ca2eb6',
				name: 'Disintegrate',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '5d10+12 damage, and the target takes ongoing 10 damage (save ends). Aftereffect: Ongoing 5 damage (save ends). Miss: 3d10+12 damage, and the target takes ongoing 5 damage (save ends).',
				damage: '5d10+12 damage',
				category: 5
			},
			{
				id: 'a8c6e4a2-2663-4de5-a66e-6013c3980e79',
				name: 'Blast of Flame',
				action: {
					action: 1,
					trigger: '2/day',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '6d8+12 fire damage.',
				damage: '6d8+12 fire damage',
				category: 5
			},
			{
				id: '08043e7d-6486-4624-9937-e6fc839827aa',
				name: 'Scorching Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '2d6+12 fire damage.',
				damage: '2d6+12 fire damage',
				category: 1
			},
			{
				id: '6da7b8e9-ac4e-433a-98c7-cff500262052',
				name: 'Combust',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '5d6+12 fire damage.',
				damage: '5d6+12 fire damage',
				category: 1
			},
			{
				id: 'a895aa6f-67e7-42a7-8e9a-44079b5e9d28',
				name: 'Displacement',
				action: {
					action: 5,
					trigger: 'when a ranged or a melee attack hits the caster or one of his allies in range',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Ranged 5',
				attack: null,
				description: '',
				details: 'the attacker must reroll the attack roll.',
				damage: '',
				category: 5
			},
			{
				id: '11daec34-6b5d-43db-a911-c14a65c158d3',
				name: 'Irresistible Flame',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kellemor or Przithnee treats his targets’ resist fire as 20 lower than normal when determining damage for his attacks.',
				damage: 'kellemor or przithnee treats his targets’ resist fire as 20 lower than normal when determining damage for his attacks',
				category: 0
			},
			{
				id: '7a9358c7-074c-4459-8da8-6c618ec57aed',
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
				details: 'Kellemor or Przithnee teleports up to 5 squares.',
				damage: 'Kellemor or Przithnee teleports up to 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Elite Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'cdf9cf0d-7f90-44bd-a66d-af47c4fb73d9',
		name: 'Kravenghast',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 17,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +19',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 560,
		initiative: 18,
		ac: 32,
		fortitude: 29,
		reflex: 32,
		will: 30,
		regeneration: {
			value: 10,
			details: 'if Kravenghast takes radiant damage, regeneration doesn’t function until the end of his next turn'
		},
		auras: [],
		powers: [
			{
				id: 'aec830d5-806a-40f2-84d0-543460431528',
				name: 'Decomposing Touch',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+5 necrotic damage, and the target takes ongoing 10 necrotic damage (save ends). While taking this ongoing damage, the target cannot spend healing surges.',
				damage: '2d8+5 necrotic damage',
				category: 1
			},
			{
				id: '698568e0-36b2-4f35-be57-46d69aef4753',
				name: 'Deadly Reaction',
				action: {
					action: 5,
					trigger: 'when an enemy moves to a position where it flanks kravenghast',
					sustainAction: 0,
					use: 1,
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
				details: 'Kravenghast attacks the enemy with his decomposing touch. If the attack hits, he can make another decomposing touch attack against another creature he is adjacent to.; 2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 5
			},
			{
				id: '679f087c-0e70-498f-82c5-f4a32b9bfcf7',
				name: 'Shadowdrain Ray',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+6 necrotic damage, and the target is weakened (save ends).',
				damage: '2d8+6 necrotic damage',
				category: 3
			},
			{
				id: 'c83fea72-21fb-4831-8af3-a2827ecd252d',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kravenghast deals 2d6 extra necrotic damage against any target he has combat advantage against.',
				damage: 'kravenghast deals 2d6 extra necrotic damage against any target he has combat advantage against',
				category: 0
			},
			{
				id: 'cb5a9a67-9d63-4758-89f3-801658469226',
				name: 'Kravenghast’s Evasion',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an area or close attack targeting AC, Fortitude, or Will misses Kravenghast but deals damage on a miss, Kravenghast takes no damage from the attack.',
				damage: 'or will misses kravenghast but deals damage on a miss',
				category: 0
			},
			{
				id: '0fa08cac-2fcf-450e-90e6-17469ae72141',
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
				details: 'Kravenghast shifts up to 6 squares.',
				damage: 'Kravenghast shifts up to 6 squares',
				category: 2
			},
			{
				id: '187d3f7f-3f48-49af-80cd-6b4fe066f9e8',
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
				details: 'Kravenghast spends a healing surge and regains 140 hit points. He gains a +2 bonus to all defenses until the start of his next turn.',
				damage: 'Kravenghast spends a healing surge and regains 140 hit points',
				category: 1
			},
			{
				id: '991636cb-46d1-4f99-bdd7-0d4df17ba8f3',
				name: 'Demesne',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Kravenghast is aware of all that goes on in the mausoleum. While within, he cannot be surprised and does not grant combat advantage. He knows the location and appearance of all creatures in the area.',
				damage: '',
				category: 0
			},
			{
				id: '271e23ae-fe9a-4919-8447-4cae10e22c2c',
				name: 'Binding',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Kravenghast is forced to leave the mausoleum (through forced movement or a compulsion), he suffers excruciating pain. Each round that he spends outside the mausoleum, he takes 2d6 damage, and his regeneration doesn’t function until the end of his next turn. If he is reduced to 0 hit points because of this damage, he reforms in the mausoleum 1d6 days later. He can be permanently killed only by damage from living creatures.',
				damage: 'he takes 2d6 damage',
				category: 0
			},
			{
				id: 'f6086b8c-a617-435f-95a3-8ce4a6d7b63c',
				name: 'Spawn Wraith',
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
				details: 'Any humanoid killed by a wraith rises as a free-willed wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the raise dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Solo Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '46a8ecf6-78ef-405a-9c62-57eb8d8775d3',
		name: 'Kyuss',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 31,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +29; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +25, Dungeoneering +29, Religion +25',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 1425,
		initiative: 18,
		ac: 46,
		fortitude: 46,
		reflex: 41,
		will: 47,
		regeneration: null,
		auras: [
			{
				id: '43486a0c-0aed-4367-a46e-39d4b1444a85',
				name: 'Visions of Worms',
				keywords: '',
				details: '(Fear, Psychic) aura 5; any enemy that starts its turn within the aura takes 20 psychic damage, and is slowed until the start of its next turn.'
			}
		],
		powers: [
			{
				id: 'f30049d8-bd1c-4822-a3dd-b7987f734f5b',
				name: 'Corrupting Touch',
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
					bonus: 34,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 4d8+7 necrotic damage. Miss: Half damage.',
				damage: '4d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'bcc8a541-9631-4b6f-86f8-12812dbafea5',
				name: 'Mind Worm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 34,
					defence: 3
				},
				description: '',
				details: '2d10+8 psychic damage. In addition during the target’s next turn, Kyuss determines what actions the creature takes and how the target uses those actions.',
				damage: '2d10+8 psychic damage',
				category: 1
			},
			{
				id: 'e3d96fbd-35cf-43d0-a648-675db7d9c9ab',
				name: 'Ray of Cold Death',
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
					bonus: 34,
					defence: 2
				},
				description: '',
				details: '4d8+8 cold and necrotic damage, and the target is slowed and weakened (save ends both).',
				damage: '4d8+8 cold and necrotic damage',
				category: 1
			},
			{
				id: '66f2a375-2e58-435c-b44b-3a0852f9cd60',
				name: 'Squirming Assault',
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
				details: 'Kyuss makes up to five attacks using corrupting touch and ray of cold death.',
				damage: '',
				category: 1
			},
			{
				id: 'c328edd0-1986-49e0-b6d8-65d50442d313',
				name: 'Eye of Kyuss',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear, Gaze, Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 34,
					defence: 3
				},
				description: '',
				details: 'targets one enemy; the target is stunned until the end of Kyuss’s next turn. If the target is in Kyuss’s visions of worms aura, it also takes 2d10+5 psychic damage.',
				damage: 'it also takes 2d10+5 psychic damage',
				category: 3
			},
			{
				id: 'b00b129d-5ad6-44ed-92d2-b2ee0c41ff45',
				name: 'Kyuss’s Fearful Hold',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 34,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d10+9 damage, and the target is stunned (save ends). Miss: Half damage, and the target is instead dazed (save ends).',
				damage: '2d10+9 damage',
				category: 5
			},
			{
				id: 'c1aeb6f1-64e7-4575-b6af-9c1b006ed43b',
				name: 'Arcane Recall',
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
				details: 'Kyuss recharges Kyuss’s fearful hold or mind worm.',
				damage: '',
				category: 3
			},
			{
				id: '3f81e83e-ddd8-484d-b7d1-6daf537ac1bd',
				name: 'Spawn Larva',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A humanoid killed by Kyuss rises as a wormspawn praetorian at the start of Kyuss’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: '9b53b503-7754-4361-8e82-bfe9f39947ce',
				name: 'Squeezing Swarm',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'By altering his shape, Kyuss can squeeze as if he were a Tiny creature.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: 'half damage from melee and ranged attack',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 31 Solo Controller',
		phenotype: 'Huge natural beast (undead)'
	},
	{
		id: '57f509e0-34fb-4fea-b1c2-ff76e80ca3ee',
		name: 'Larva Sniper',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 21,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +18, Stealth +18',
		equipment: 'leather armor; longbow',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 306,
		initiative: 13,
		ac: 36,
		fortitude: 33,
		reflex: 36,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '16539ae6-01bb-4fb5-b7d8-dc978aed1847',
				name: 'Stinging Swipe',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d8+2 poison damage.',
				damage: '2d8+2 poison damage',
				category: 1
			},
			{
				id: 'e4d521d5-0d42-43d3-bcf1-01e9fb709936',
				name: 'Wasp-Flight Arrow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '(standard',
				range: 'ranged 20/40',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Requires longbow; 1d10+2 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: '5be91344-ac70-4395-a4f7-f154c7c68e8f',
				name: 'Disrupting Double Arrow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Requires longbow; the larva sniper makes two wasp-flight arrow attacks. If both attacks hit the same target, it takes ongoing 10 poison damage and is dazed (save ends both).',
				damage: 'it takes ongoing 10 poison damage and is dazed (save ends both)',
				category: 1
			},
			{
				id: 'baf359b0-727e-4e60-9a2c-22fdfdd5bef6',
				name: 'Escaping Sting',
				action: {
					action: 4,
					trigger: 'when targeted by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The larva sniper shifts up to 3 squares and makes a basic attack.',
				damage: 'The larva sniper shifts up to 3 squares and makes a basic attack',
				category: 5
			},
			{
				id: 'b17c386a-7c49-45d1-a91c-188dc50f00bd',
				name: 'Vespine Speed',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The larva sniper makes a basic attack.',
				damage: '',
				category: 3
			},
			{
				id: '6a891af3-e39b-4839-8acd-bde6565b06ce',
				name: 'Vengeful Hive',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: '3d8+5 poison damage.',
				damage: '3d8+5 poison damage',
				category: 1
			},
			{
				id: '19c284a8-eb5f-4606-a843-ec3b03571d3e',
				name: 'Squeezing Swarm',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'By altering its shape, a larva sniper can squeeze through small openings as if it were a Tiny creature.',
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
				value: 10
			}
		],
		resist: 'takes half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Elite Artillery',
		phenotype: 'Medium natural beast (undead)'
	},
	{
		id: 'b9364edc-c87e-402a-b476-9660be8bf945',
		name: 'Leflanth and Yargo',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Arcana +25, History +20, Religion +23',
		equipment: 'implement, staff',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 316,
		initiative: 14,
		ac: 37,
		fortitude: 34,
		reflex: 35,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '55281075-e3d0-4783-bfa1-cdc6ddbd1c42',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '6b40b933-27ee-437c-b7f8-74313252e6d8',
				name: 'Chain Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '4d6+12 lightning damage. Secondary Targets: Two creatures within 5 squares of the primary target; +28 vs. Reflex; 2d6+12 damage. Tertiary Targets: All other enemies within 20 squares of the caster; +28 vs. Reflex; 1d6+12 lightning damage.',
				damage: '4d6+12 lightning damage',
				category: 1
			},
			{
				id: '2f459b86-aa6b-40ee-982e-09bfc814e173',
				name: 'Disintegrate',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '5d10+12 damage, and the target takes ongoing 10 damage (save ends). Aftereffect: Ongoing 5 damage (save ends). Miss: 3d10+12 damage, and the target takes ongoing 5 damage (save ends).',
				damage: '5d10+12 damage',
				category: 5
			},
			{
				id: '645ea1b0-8a81-4cad-bf42-d71b1256595c',
				name: 'Force Volley',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: 'targets up to three creatures; (+4 power bonus to attack roll if targeting one creature)3d6+12 force damage, and the target is dazed until the end of the caster’s next turn.',
				damage: '(+4 power bonus to attack roll if targeting one creature)3d6+12 force damage',
				category: 1
			},
			{
				id: '3210c37d-6119-4956-a5dc-9690dd7d5c57',
				name: 'Thunderwave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '2d6+11 thunder damage, and the target is pushed 5 squares.',
				damage: '2d6+11 thunder damage',
				category: 1
			},
			{
				id: 'd9950b94-5b66-496b-8f6b-78cf928ef226',
				name: 'Displacement',
				action: {
					action: 5,
					trigger: 'when a ranged or a melee attack hits the caster or one of his allies in range',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Ranged 5',
				attack: null,
				description: '',
				details: 'the attacker must reroll the attack roll.',
				damage: '',
				category: 5
			},
			{
				id: '841ae08a-5dbc-4e82-b6ad-1a6174f1024a',
				name: 'Blur',
				action: {
					action: 3,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the encounter, Leglanth or Yargo gains a +2 power bonus to all defenses, and enemies more than 5 squares away from him cannot see him.',
				damage: 'Leglanth or Yargo gains a +2 power bonus to all defenses',
				category: 5
			},
			{
				id: 'c18ad69d-43ef-422d-8276-26ffe7524fdd',
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
				details: 'Leglanth or Yargo teleports up to 5 squares.',
				damage: 'Leglanth or Yargo teleports up to 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Elite Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'ce562602-9fcb-4541-b084-f54faf79196c',
		name: 'Lich Claw',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8; tremorsense 10',
		movement: '8, climb 4',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 16,
		ac: 29,
		fortitude: 27,
		reflex: 29,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a3afffb6-50fe-4901-984e-941e87573eee',
				name: 'Death’s Touch',
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
					defence: 1
				},
				description: '',
				details: '5 necrotic damage, and the target is weakened until the end of the lich claw’s next turn.',
				damage: '5 necrotic damage',
				category: 1
			},
			{
				id: 'a19cba14-be62-4b84-9231-55b7e2940d0b',
				name: 'Anchoring Claws',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature that starts its turn adjacent to three or more lich claws is immobilized until the start of its next turn.',
				damage: '',
				category: 0
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

		info: 'Level 14 Minion',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: 'd161b81c-bfdb-4edd-864f-56040d2dc267',
		name: 'Loratha',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Arcana +23, History +18, Intimidate +23',
		equipment: 'dagger',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 412,
		initiative: 16,
		ac: 39,
		fortitude: 35,
		reflex: 37,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3aac3ba3-e379-416a-b7bf-a38dd8d37533',
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
				details: '1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: 'a905a383-21a5-4d81-adf8-a2763c8dc280',
				name: 'Eyebite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d6+11 psychic damage, and Loratha is invisible to the target until the start of her next turn.',
				damage: '2d6+11 psychic damage',
				category: 1
			},
			{
				id: 'ad24c6e0-ba6a-45b1-a187-8da1660bdf65',
				name: 'Bewitching Whispers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'until the end of Loratha’s next turn, the target treats all creatures as enemies for the purpose of opportunity attacks and must take every opportunity attack possible (with a +5 bonus to the attack roll).',
				damage: 'the target treats all creatures as enemies for the purpose of opportunity attacks and must take every opportunity attack possible (with a +5 bonus to the attack roll)',
				category: 1
			},
			{
				id: '3c90da54-0d93-4e7b-a552-9bf7d8347974',
				name: 'Curse of the Golden Mist',
				action: {
					action: 1,
					trigger: 'sustain standard; daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'the target loses its next standard action. Loratha must make a new attack roll when she sustains this effect. If the attack misses, the effect ends.',
				damage: '',
				category: 5
			},
			{
				id: '96d9aab9-21a6-42d9-bdcc-b62c239dc8ce',
				name: 'Thirsting Tendrils',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: '3d6+11 damage, and Loratha can spend a healing surge to regain 113 hit points.',
				damage: '3d6+11 damage',
				category: 1
			},
			{
				id: '0d934353-8740-4e0c-a978-71c5af277804',
				name: 'Twofold Curse',
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
				details: 'Loratha can place her Warlock’s Curse on the two nearest enemies she can see. Once per round, when Loratha damages a cursed enemy, she can deal 3d6 extra damage to that target.',
				damage: 'when loratha damages a cursed enemy',
				category: 3
			},
			{
				id: '88a4c4d7-84e3-401f-81e8-985b5e3eb112',
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
				details: 'Loratha teleports up to 5 squares.',
				damage: 'Loratha teleports up to 5 squares',
				category: 2
			},
			{
				id: 'e8e08711-05f0-423c-b48f-507c34a2756e',
				name: 'Infuriating Elusiveness',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion, Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Loratha becomes invisible and then teleports up to 4 squares. The invisibility lasts until the start of Loratha’s next turn.',
				damage: 'Loratha becomes invisible and then teleports up to 4 squares',
				category: 2
			},
			{
				id: '0613f06f-a55b-45fa-ac3c-6ca75af77b90',
				name: 'Warding Blade',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a creature Loratha has cursed makes a melee attack against her, that creature takes 5 damage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'f1f8e529-d003-4ae8-95a5-284a663871d5',
				name: 'Wings of the Fiend',
				action: {
					action: 3,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Loratha grows wings and gains a fl y speed of 6 until the end of the encounter.',
				damage: 'Loratha grows wings and gains a fl y speed of 6 until the end of the encounter',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Elite Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'd8b32383-cf66-4080-89db-fd77fce810ec',
		name: 'Maheghoda the Black Courser Nightmare',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'mount',
		level: 19,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '10, teleport 10',
		alignment: 'Evil',
		languages: '',
		skills: 'Endurance +22',
		equipment: '',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 186,
		initiative: 15,
		ac: 33,
		fortitude: 34,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6f5505a8-3ffd-4fcc-8be8-a5420f0f918b',
				name: 'Hooves',
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
				details: '1d8+7 damage, and ongoing 5 fire damage (save ends).',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '8ecb331e-6ea0-41ed-b889-2193a0cf6443',
				name: 'Trample',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'Maheghoda can move up to its speed and enter enemies’ spaces. This movement provokes opportunity attacks, and Maheghoda must end its move in an unoccupied space. When it enters an enemy’s space, the black courser makes a trample attack; 1d8+6 damage, and the target is knocked prone.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'eacc6af7-0adb-44bd-9505-7e072790b3eb',
				name: 'Hell’s Ride',
				action: null,
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 13th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'Maheghoda’s rider gains resist 20 fire.',
				damage: 'Maheghoda’s rider gains resist 20 fire',
				category: 0
			},
			{
				id: '90bf544d-f5f4-421a-8d93-4dbe5e42b195',
				name: 'Hooves of Hell',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Maheghoda moves up to 10 squares. Each square it leaves is filled with fire to a height of 10 feet until the end of its next turn. Any creature that hits Maheghoda with a melee attack during this move, or that enters one of the flaming squares, takes 10 fire damage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
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

		info: 'Level 19 Skirmisher',
		phenotype: 'Large shadow beast (mount)'
	},
	{
		id: '478203d3-9cce-4242-bfd4-08ba9508e109',
		name: 'Malicious Ghost',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6 (hover); phasing',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +18',
		equipment: '',
		category: '',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 72,
		initiative: 14,
		ac: 27,
		fortitude: 23,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aee0efcb-576a-464a-ba90-fa0c9b91c114',
				name: 'Spirit Touch',
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
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '(+18 with inexorable creep)2d8+4 necrotic damage.',
				damage: '(+18 with inexorable creep)2d8+4 necrotic damage',
				category: 1
			},
			{
				id: '2b17b112-6439-4653-b112-72f72bff99d6',
				name: 'Piercing Malice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '(+18 with inexorable creep)2d8+4 psychic damage, and the target is slowed (save ends).',
				damage: '(+18 with inexorable creep)2d8+4 psychic damage',
				category: 1
			},
			{
				id: '273b793f-4853-4048-8e99-dbfd47f8cbd1',
				name: 'Inky Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '(+17 with inexorable creep)2d8+4 necrotic damage, and the target takes ongoing 10 necrotic damage and is immobilized (save ends both).',
				damage: '(+17 with inexorable creep)2d8+4 necrotic damage',
				category: 1
			},
			{
				id: '982ab078-2b36-4259-93de-ddca8a0f897c',
				name: 'Inexorable Creep',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a malicious ghost uses phasing to move through obstacles, it gains a +2 bonus to attack rolls and all defenses, and deals 1d6 extra damage on melee attacks and ranged attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Lurker',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: '03ea1a49-82a2-45a0-bf13-94abf05d42d9',
		name: 'Marrowshriek Skeleton',
		details: '',
		size: 2,
		origin: 5,
		type: 0,
		keywords: 'undead',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +17',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 95,
		initiative: 16,
		ac: 27,
		fortitude: 24,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4a6aff14-4840-4cef-a781-a769c21780e7',
				name: 'Osseous Thrust',
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
				details: '1d8+9 damage.',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: '83d4a1b8-7a06-4797-92fc-f7e76634b9bf',
				name: 'Marrow Feast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires combat advantage against the target; 2d8+12 damage, and the target is grabbed. Each round that the marrowshriek skeleton sustains the grab, the target takes 15 damage and is weakened until the end of the marrowshriek skeleton’s next turn.',
				damage: '2d8+12 damage',
				category: 1
			},
			{
				id: '159e34b8-ebf2-4fe6-a7ae-a57a5c19df28',
				name: 'Marrowshriek',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'targets living creatures; the target is dazed until the end of the marrowshriek skeleton’s next turn. If the target is grabbed by the marrowshriek skeleton, it is stunned until the end of the marrowshriek skeleton’s next turn instead of dazed.',
				damage: '',
				category: 3
			},
			{
				id: 'ffba208f-e475-4aad-a2a1-55006c04317f',
				name: 'Shadowrought',
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
				details: 'The marrowshriek skeleton becomes invisible until it attacks.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 12 Lurker',
		phenotype: 'Medium shadow animate (undead)'
	},
	{
		id: '4052c0e2-adf2-405c-9fc8-d1aecd3a8390',
		name: 'Master Enigma of Vecna',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 22,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +22',
		equipment: 'dagger',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 203,
		initiative: 16,
		ac: 36,
		fortitude: 33,
		reflex: 34,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '27915792-8910-415a-aa73-ac5bf1a7dcd1',
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
				details: '4d4+5 damage.',
				damage: '4d4+5 damage',
				category: 1
			},
			{
				id: '03619a3b-81d3-4862-abc5-3a2a47f6076b',
				name: 'Memory Rage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '3d10+3 psychic damage, and the target cannot use encounter attack powers, daily attack powers, or utility powers (save ends). Aftereffect: The target is stunned until the end of its next turn.',
				damage: '3d10+3 psychic damage',
				category: 1
			},
			{
				id: '63bd620d-1d29-431c-aace-70385e98b039',
				name: 'Shock Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '4d6+5 lightning damage, and the target is dazed (save ends).',
				damage: '4d6+5 lightning damage',
				category: 1
			},
			{
				id: 'd6c98264-371b-459c-87b4-fc27175df621',
				name: 'Horrific Visage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d8+5 psychic damage, and the target is pushed 5 squares.',
				damage: '3d8+5 psychic damage',
				category: 1
			},
			{
				id: '67556ceb-dbdd-4d19-9510-ea4057021d1c',
				name: 'Rend Flesh',
				action: {
					action: 1,
					trigger: 'usable only after flesh ripper rage',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 5
			},
			{
				id: 'e1ab6822-373c-4bde-b734-48720dff9998',
				name: 'Flesh Ripper Rage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Once a master enigma of Vecna has been bloodied, it gains regeneration 5 and cannot use any power except rend flesh until the end of the encounter.',
				damage: 'it gains regeneration 5 and cannot use any power except rend flesh until the end of the encounter',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 22 Controller',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'f378c62e-552a-4dcb-a40a-2505be85f1b5',
		name: 'Mauthereign Human Lich',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead; human',
		level: 18,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '6, swim 6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +20, Heal +23, History +20, Insight +23, Religion +20',
		equipment: 'implement, staff',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
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
		hp: 344,
		initiative: 11,
		ac: 34,
		fortitude: 29,
		reflex: 30,
		will: 33,
		regeneration: {
			value: 10,
			details: 'if Mauthereign takes radiant damage, regeneration doesn’t function until the end of his next turn'
		},
		auras: [
			{
				id: 'a6a5de28-7876-47d6-8819-3991391c3a86',
				name: 'Necromantic Aura',
				keywords: '',
				details: '(Necrotic) aura 5; any living creature that enters the aura or starts its turn within the aura takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: '23a61479-bc3a-42d8-a90c-60f676c0abb3',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage (crit 4d8+12).',
				damage: '1d8+4 damage (crit 4d8+12)',
				category: 1
			},
			{
				id: '14bfb8d6-df15-492f-b96d-73e716a9f57a',
				name: 'Lash of Grazroblain',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '3d6+5 necrotic damage, and the target is dazed until the end of Mauthereign’s next turn.',
				damage: '3d6+5 necrotic damage',
				category: 1
			},
			{
				id: 'c906416f-c91b-4963-9736-a71df4dcc2b1',
				name: 'Wither',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '4d6+5 necrotic damage, and the target takes ongoing 10 necrotic damage and is slowed (save ends both). Aftereffect: The target is slowed until it takes an extended rest, it is the subject of a Remove Affliction ritual, or Mauthereign is slain (whichever occurs first).',
				damage: '4d6+5 necrotic damage',
				category: 1
			},
			{
				id: '7eb880e8-833f-4260-833f-c1c0533c6520',
				name: 'Stunning Escape',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'the target is stunned until the end of the Mauthereign’s next turn, and Mauthereign teleports up to 10 squares.',
				damage: 'and Mauthereign teleports up to 10 squares',
				category: 5
			},
			{
				id: '5d9279f5-a0fc-4373-86f0-371907aae97a',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When Mauthereign is reduced to 0 hit points, his body and possessions fall into dust, but he is not destroyed. He reappears, along with his possessions, within 1 square of his phylactery (an amulet hidden under the bed in his ritual chamber) 1d10 days later.',
				damage: 'within 1 square of his phylactery (an amulet hidden under the bed in his ritual chamber) 1d10 days later',
				category: 0
			},
			{
				id: 'b5f961b4-69fa-4fcd-a1fb-1df2aa88d2f3',
				name: 'Spellmaster',
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
				details: 'Mauthereign recharges wither.',
				damage: '',
				category: 3
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

		info: 'Level 18 Elite Controller',
		phenotype: 'Medium natural humanoid (undead; human)'
	},
	{
		id: '89c76756-3a24-4604-ae5f-1f99dd880b05',
		name: 'Moon Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 7,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: 'fly 10 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
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
			score: 8,
			modifier: -1,
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
		hp: 56,
		initiative: 9,
		ac: 21,
		fortitude: 19,
		reflex: 20,
		will: 18,
		regeneration: {
			value: 5,
			details: 'if a moon wraith takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '06333e4f-9ad8-4aec-80ac-5a039eafded5',
				name: 'Lunar Violation',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'The moon wraith shifts up to 2 squares before or after the attack; 2d4+6 necrotic damage, and the target is weakened until the end of its next turn.',
				damage: '2d4+6 necrotic damage',
				category: 1
			},
			{
				id: '70e47e33-2c94-41c9-b00c-fccf784c28ad',
				name: 'Crescent Arc',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'The moon wraith shifts up to 10 squares, moving through any creatures’ spaces; (against each enemy whose space it enters)2d4+6 necrotic damage, and the target is dazed (save ends). A wraith can pass through a single creature’s space only once when using crescent arc. Miss: Half damage, and the target is not dazed.',
				damage: '(against each enemy whose space it enters)2d4+6 necrotic damage',
				category: 1
			},
			{
				id: 'd8427a15-26b0-427f-af51-2038f1c9ed86',
				name: 'Moon Wrath',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a moon wraith is in moonlight or starlight, its melee attacks deal 1d4 extra necrotic damage, and the weakened condition caused by lunar violation is ended by a save.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '8847df0c-ea49-4982-bacf-3c50a6eac4ef',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a moon wraith rises as a free-willed moon wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 7 Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '87cfef49-47a8-457c-bf6b-c287d3e48d45',
		name: 'Necrosphinx',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'undead',
		level: 16,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6, fly 8 (clumsy), overland flight 10',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Arcana +16, History +16, Insight +17, Intimidate +16, Religion +16',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 760,
		initiative: 12,
		ac: 31,
		fortitude: 29,
		reflex: 26,
		will: 31,
		regeneration: {
			value: 10,
			details: 'if a necrosphinx takes fire damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: 'e2a2e804-1150-4333-a5ee-338af7908a5e',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to attack rolls against the necrosphinx.'
			}
		],
		powers: [
			{
				id: '71e7a75f-68fd-495f-b5a3-162940bd51a3',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d10+5 damage, and the target is marked until the end of the sphinx’s next turn.',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: 'def9b9c1-d761-4dca-bc71-a7e116de2859',
				name: 'Death’s Pounce',
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
				attack: null,
				description: '',
				details: 'The necrosphinx moves up to 6 squares and makes two claw attacks, each one against a different target. If an attack hits, that target is knocked prone. If both attacks hit, each target also takes ongoing 5 necrotic damage (save ends).',
				damage: 'each target also takes ongoing 5 necrotic damage (save ends)',
				category: 1
			},
			{
				id: '2ef03f0a-dfb2-4597-b9fc-a54c024a7ed6',
				name: 'Fierce Retort',
				action: {
					action: 5,
					trigger: 'when a creature marked by the necrosphinx makes a melee attack against it',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Targets the triggering creature; 2d10+5 damage, and the target takes ongoing 5 necrotic damage and is marked (save ends both).',
				damage: '2d10+5 damage',
				category: 5
			},
			{
				id: '341f264f-6fc5-4aad-b6f5-0d473a1101c2',
				name: 'Necrotic Roar',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target takes ongoing 5 necrotic damage and a -2 penalty to attack rolls (save ends both).',
				damage: 'the target takes ongoing 5 necrotic damage and a -2 penalty to attack rolls (save ends both)',
				category: 3
			},
			{
				id: 'd6b3f937-e2e1-4d3e-95e7-ff35f3a13ef8',
				name: 'Mummies Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target contracts mummy rot.',
				damage: '',
				category: 0
			},
			{
				id: '3bd725c1-eeae-4bbf-b529-dd6a99cc9a3d',
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
				details: 'The necrosphinx spends a healing surge and regains 190 hit points. It gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The necrosphinx spends a healing surge and regains 190 hit points',
				category: 1
			},
			{
				id: '04e377a5-0d17-495b-8ea5-bc391bc6c04f',
				name: 'Sphinx’s Challenge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The necrosphinx poses a question or riddle out of combat. If the challenged creatures refuse to answer or fail to',
				damage: '',
				category: 0
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

		info: 'Level 16 Solo Soldier',
		phenotype: 'Large immortal beast (undead)'
	},
	{
		id: 'b3886482-791e-4b76-821e-63bd58adda3a',
		name: 'Nighthaunt Shrine',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +12; darkvision',
		movement: '4 (clumsy), fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Insight +17, Stealth +14',
		equipment: '',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 182,
		initiative: 9,
		ac: 28,
		fortitude: 24,
		reflex: 26,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: 'a1c3f405-4992-4df9-8750-7135ef40e8b4',
				name: 'Death Shield',
				keywords: '',
				details: 'aura 3; any undead ally or shadow ally within the aura gains a +2 bonus to all defenses.'
			}
		],
		powers: [
			{
				id: 'aec8bd07-3d89-4266-99a7-8781a2efc54f',
				name: 'Claw Touch',
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
					defence: 2
				},
				description: '',
				details: '1d8+1 damage (3d8+3 while bloodied).',
				damage: '1d8+1 damage (3d8+3 while bloodied)',
				category: 1
			},
			{
				id: 'a803163b-bda4-4830-a2b6-d7b26beab470',
				name: 'Terrifying Vision',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Gaze, Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '2d6+5 psychic damage, and the target is pushed 1 square and knocked prone.',
				damage: '2d6+5 psychic damage',
				category: 3
			},
			{
				id: '3af7d2e3-3ab3-4b7e-b9c6-60887efa29a8',
				name: 'Life Leak',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 5 centered on a bloodied enemy within 10',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '4d6+6 necrotic damage. Miss: Half damage. Hit or Miss: Each undead ally or shadow ally in the burst gains 20 temporary hit points.',
				damage: '4d6+6 necrotic damage',
				category: 1
			},
			{
				id: 'ab6a4f74-df1e-47a7-8c91-5dd87862deda',
				name: 'Shadowfell Taint',
				action: {
					action: 3,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: null,
				description: '',
				details: 'the burst creates a zone of darkness that lasts until the end of the nighthaunt shrine’s next turn. The zone’s space is totally obscured and blocks line of sight for creatures without darkvision. A creature that starts its turn in the zone takes 10 necrotic damage. When the nighthaunt shrine sustains this power, the zone lasts until the end of its next turn. In addition, it can use a move action to move the zone 5 squares.',
				damage: 'a creature that starts its turn in the zone takes 10 necrotic damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Elite Controller (L)',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'daf17ac1-0f15-4412-8e99-e6c989270e7a',
		name: 'Nighthaunt Slip',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '4 (clumsy), fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 12,
		ac: 26,
		fortitude: 24,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f81cc4f1-ee95-469a-b0c9-dcc940985e3d',
				name: 'Claw Touch',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '5 damage plus necrotic damage equal to the number of nighthaunt slips adjacent to the target.',
				damage: '5 damage plus necrotic damage equal to the number of nighthaunt slips adjacent to the target',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'ff6781fa-e895-415c-b172-00b48bee12ed',
		name: 'Nighthaunt Whisperer',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '4 (clumsy), fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +17',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 65,
		initiative: 14,
		ac: 26,
		fortitude: 22,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: 'b85ddd70-3b62-4c6a-9432-22b6869ef27a',
				name: 'Death Whisper',
				keywords: '',
				details: '(Fear, Necrotic) aura 2; any enemy within the aura takes a -2 penalty to Will, and at the start of its turn takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: '13ae7c50-1198-4041-83ba-53acb48bdbd0',
				name: 'Claw Touch',
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
					defence: 2
				},
				description: '',
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '66d31223-6dce-41a7-bf9f-f25c3bd6e317',
				name: 'Night’s Embrace',
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
				details: 'The nighthaunt whisperer makes two claw touch attacks. If both attacks hit the same target, the target is grabbed. A nighthaunt whisperer can grab only one creature at a time.',
				damage: '',
				category: 1
			},
			{
				id: '66a3e70b-92b9-4fb6-8bcd-f282442703df',
				name: 'Night’s Fell Kiss',
				action: {
					action: 1,
					trigger: 'recharges after the nighthaunt whisperer uses shadow wing',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'The nighthaunt whisperer shifts up to 2 squares, sliding the creature it has grabbed with it. If the nighthaunt whisperer ends this movement adjacent to no other enemy aside from the grabbed target, it makes an attack against the creature; 2d6+4 necrotic damage, and the target is stunned (save ends).',
				damage: '2d6+4 necrotic damage',
				category: 5
			},
			{
				id: 'f9bdd9a0-04f3-45ae-bca9-c82c95b62614',
				name: 'Shadow Wing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a nighthaunt whisperer moves at least 8 squares on its turn, it is invisible until the start of its next turn.',
				damage: 'If a nighthaunt whisperer moves at least 8 squares on its turn',
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '696783bf-0813-4ca9-ad02-bb5bff818259',
		name: 'Oblivion Wraith',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +18',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 116,
		initiative: 13,
		ac: 26,
		fortitude: 25,
		reflex: 27,
		will: 24,
		regeneration: {
			value: 10,
			details: 'if an oblivion wraith takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '8fa50451-9689-4f0c-b2dd-2b2f9475bc42',
				name: 'Nihil',
				keywords: '',
				details: '(Necrotic) aura 2; any enemy that starts its turn within the aura takes 10 necrotic damage and cannot spend a healing surge until the start of its next turn.'
			}
		],
		powers: [
			{
				id: 'c1df6892-4a6d-489a-aa60-eb5bea05495b',
				name: 'Nihil Strike',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d8+7 necrotic damage, and the oblivion wraith is invisible to the target until the end of the oblivion wraith’s next turn.',
				damage: '2d8+7 necrotic damage',
				category: 1
			},
			{
				id: '09707917-18e1-446e-82d0-771028b25870',
				name: 'Obliviate',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d8+4 necrotic damage, and the target takes ongoing 15 necrotic damage and a -2 penalty to saving throws (save ends both).',
				damage: '2d8+4 necrotic damage',
				category: 1
			},
			{
				id: 'c98c500d-280e-4371-a93f-192f92611fdb',
				name: 'Death Blast',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close blast 3',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d8+7 necrotic damage, and the target loses two healing surges. Miss: Half damage, and the target loses a healing surge.',
				damage: '2d8+7 necrotic damage',
				category: 0
			},
			{
				id: '278a04b7-8d7c-453f-8997-d325406d965d',
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
				details: 'The oblivion wraith shifts up to 6 squares.',
				damage: 'The oblivion wraith shifts up to 6 squares',
				category: 2
			},
			{
				id: '09d4baa0-a890-4942-8e08-dfaa4cb4b291',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by an oblivion wraith rises as a free-willed oblivion wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '89aa5f24-3048-477a-9be9-4d2bff6a14e9',
		name: 'Offalian',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 6,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '7, climb 7',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 88,
		initiative: 8,
		ac: 18,
		fortitude: 21,
		reflex: 18,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '86dbc61b-88f1-49cf-b020-361df4376785',
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
				details: 'Reach 2; 2d6+7 damage, and the target is grabbed. An offalian can have only one creature grabbed at a time.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'e1274911-2dfa-496f-a0ee-ce08c88cb80b',
				name: 'Clamp Down',
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
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the offalian; 1d10 + 7 necrotic damage (no attack roll required).; 1d10+4 damage.',
				damage: '1d10 + 7 necrotic damage (no attack roll required)',
				category: 1
			},
			{
				id: 'f90837fa-8336-4a4d-a66c-c0ac81238599',
				name: 'Effluvia Expulsion',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '2d8+11 acid and necrotic damage, and the target is blinded (save ends).',
				damage: '2d8+11 acid and necrotic damage',
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

		info: 'Level 6 Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: '3dec7194-692c-45f4-a11d-a302b959888c',
		name: 'Oni Souleater',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 11,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Bluff +16, Insight +13',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
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
		hp: 232,
		initiative: 11,
		ac: 25,
		fortitude: 25,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1687b63f-537f-4b32-93bf-a8ca0594a93e',
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
				details: '2d8+2 damage.',
				damage: '2d8+2 damage',
				category: 1
			},
			{
				id: '816cc8a1-3415-4614-8a58-8a0d5b36c707',
				name: 'Soul Grasp',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d6+7 necrotic damage, and the target is immobilized (save ends).',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'eedd9723-ed4e-405e-8aa7-4b032bd0f30c',
				name: 'Consume Essence',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'Targets an immobilized creature; 1d8+4 necrotic damage, and the target loses a healing surge. In addition, the oni souleater regains 5 hit points.',
				damage: '1d8+4 necrotic damage',
				category: 3
			},
			{
				id: '1bf85293-c795-46e7-bc67-e5c9962ac2fa',
				name: 'Harvest Souls',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The oni souleater makes three soul grasp attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'd251c08a-79d4-4ad1-93dd-30182008ea5f',
				name: 'Deceptive Veil',
				action: {
					action: 3,
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
				details: 'An oni souleater can appear as a Medium or Large humanoid. A successful insight check (opposed by the oni’s Bluff check) pierces the illusion.',
				damage: '',
				category: 3
			},
			{
				id: '25963e2d-89c2-4f0a-8b1c-0a7e3124111f',
				name: 'Devour Soul',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature reduced to 0 healing surges by an oni souleater is killed and its body is reduced to dust. The oni souleater acquires the languages and memories of a target it kills in this way.',
				damage: '',
				category: 0
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

		info: 'Level 11 Elite Controller',
		phenotype: 'Large natural humanoid (undead)'
	},
	{
		id: '1a2188ae-0d12-4e87-a263-704ee21bb98f',
		name: 'Oni Spiritmaster',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '7, fly 8 (clumsy) see also spirit form',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Bluff +17, Insight +14, Religion +14',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 19,
			modifier: 4,
			cost: -1
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
		hp: 142,
		initiative: 12,
		ac: 26,
		fortitude: 27,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '229c11a3-abce-4b0e-baa6-1ff5c7c5afa7',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d8+4 damage.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: '2799d515-a4a2-476c-b31f-ba4e1bb61442',
				name: 'Dread Fear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '3d6+5 necrotic damage, and the target takes a -2 penalty to attack rolls against the oni spiritmaster and undead creatures (save ends).',
				damage: '3d6+5 necrotic damage',
				category: 1
			},
			{
				id: 'b087d00a-6212-4970-8982-2be727a9e51e',
				name: 'Harassing Spirits',
				action: {
					action: 1,
					trigger: 'see also devour spirit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '3d10+5 necrotic damage, and the target is dazed and takes ongoing 10 psychic damage (save ends both).',
				damage: '3d10+5 necrotic damage',
				category: 5
			},
			{
				id: '15047633-406c-41dc-9a56-14142835e1cb',
				name: 'Howling Blast',
				action: {
					action: 1,
					trigger: 'see also devour spirit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+6 psychic damage, and the target is knocked prone.',
				damage: '2d8+6 psychic damage',
				category: 5
			},
			{
				id: 'ceb355af-d565-4c8d-ac73-bff531cc8cf4',
				name: 'Deceptive Veil',
				action: {
					action: 3,
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
				details: 'An oni spiritmaster can appear as a Medium or Large humanoid. A successful insight check (opposed by the oni’s Bluff check) pierces the illusion.',
				damage: '',
				category: 3
			},
			{
				id: '95641293-2721-4218-80e3-a17b64fea85d',
				name: 'Devour Spirit',
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
				details: 'The oni spirit master devours one howling spirit within sight, killing it and recharging harassing spirits, howling blast, or spirit form.',
				damage: '',
				category: 3
			},
			{
				id: '93471b2e-4837-486c-b46c-9eb43b8edcb2',
				name: 'Spirit Form',
				action: {
					action: 1,
					trigger: 'see also devour spirit',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The oni spiritmaster becomes insubstantial, gains phasing, and gains fly (hover) 8 until the end of its next turn.',
				damage: 'and gains fly (hover) 8 until the end of its next turn',
				category: 5
			},
			{
				id: 'c82870b0-685f-4dbf-a241-5753b016dbbb',
				name: 'Spirit Retinue',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An oni spiritmaster starts combat with four howling spirits. These four spirits are part of the oni spiritmaster’s XP value. An oni spiritmaster can have up to twelve howling spirits as part of its retinue, with each howling spirit beyond the first four counting toward the encounter’s XP value.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Artillery',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '10042488-44c9-4e3b-b97c-a28aa3d2096b',
		name: 'Oreiax',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon, undead',
		level: 24,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Intimidate +25, Religion +23',
		equipment: '',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 23,
			modifier: 6,
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
		hp: 562,
		initiative: 16,
		ac: 39,
		fortitude: 40,
		reflex: 37,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '0ce9cecf-c468-406f-a085-c8248f40fdb8',
				name: 'Aura of Death',
				keywords: '',
				details: 'aura 20; enemies that enter or start their turns in the aura take 10 necrotic damage (20 necrotic damage while Oreiax is bloodied).'
			}
		],
		powers: [
			{
				id: 'ba25b36e-6a78-4846-976c-8253ac80c397',
				name: 'Death Rattle',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d12+10 damage, and the target is slowed (save ends). If the target is already slowed, it is instead slowed and weakened until the end of Oreiax’s next turn.',
				damage: '3d12+10 damage',
				category: 1
			},
			{
				id: 'a7718c5e-5c0c-456e-9e2a-0ca6deef6964',
				name: 'Reactive Rattle',
				action: {
					action: 5,
					trigger: 'when an enemy moves to a position where it flanks oreiax',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Oreiax makes a death rattle attack against the enemy.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 5
			},
			{
				id: '81962dd7-c75e-46eb-a0c6-fcf96871675d',
				name: 'Petrifying Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '4d6+20 damage, and the target is slowed and weakened (save ends). If the target is already slowed and weakened, it is instead stunned (save ends). If it is already stunned, it is instead petrified (save ends).',
				damage: '4d6+20 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '15 variable (3/encounter)',
		vulnerable: '',
		immune: 'disease, necrotic, poison',
		tactics: '',

		info: 'Level 24 Elite Brute',
		phenotype: 'Large elemental humanoid (demon, undead)'
	},
	{
		id: 'c84fb446-dbb4-4d78-9053-0ee7089996b0',
		name: 'Organ Wretch',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'homunculus',
		level: 16,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 376,
		initiative: 10,
		ac: 32,
		fortitude: 28,
		reflex: 27,
		will: 30,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [
			{
				id: 'd41e9c1f-a2b7-4ad5-b600-024b41998c4e',
				name: 'Sickening Stench',
				keywords: '',
				details: 'aura 2; any living creature that starts its turn within the aura is weakened until the end of its next turn.'
			}
		],
		powers: [
			{
				id: '78a15c6c-c8cf-422b-820e-7e1eb7711c3c',
				name: 'Writhing Strangle',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+6 damage, and the target is dazed (save ends).',
				damage: '2d8+6 damage',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 16 Elite Brute',
		phenotype: 'Medium natural animate (homunculus)'
	},
	{
		id: '2f486c99-8dc0-4fd1-bfed-32eaed1ff666',
		name: 'Osteopede',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 8,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '9, climb 9',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
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
		hp: 178,
		initiative: 14,
		ac: 24,
		fortitude: 21,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '9d6c9d4d-cd96-4797-a74d-df1d09a6b61a',
				name: 'Bone Scraping Stone',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to attack rolls and damage rolls.'
			}
		],
		powers: [
			{
				id: '8593108c-9546-44d5-8df0-29bc38b3828f',
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
				details: 'The osteopede shifts up to 2 squares before or after the attack; 1d8+5 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'c129c788-901f-4f5b-ab61-cd98dee16757',
				name: 'Skittering Rake',
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
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'The osteopede shifts up to 9 squares and makes up to three attacks during its move; 2d4+6 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d4+6 damage',
				category: 1
			},
			{
				id: 'fe20a8f4-6fdb-4b18-b23d-0cec01e532a6',
				name: 'Deep Laceration',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An osteopede deals 2d6 extra damage when it hits a target it has combat advantage against.',
				damage: 'an osteopede deals 2d6 extra damage when it hits a target it has combat advantage against',
				category: 0
			},
			{
				id: '66940972-7e17-4e9c-a6fd-9b097163da9d',
				name: 'Necrotic Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An osteopede gains combat advantage against a creature affected by ongoing necrotic damage.',
				damage: 'an osteopede gains combat advantage against a creature affected by ongoing necrotic damage',
				category: 0
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

		info: 'Level 8 Elite Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'ff599ede-f7cc-476d-bca4-3c8e42689e5c',
		name: 'Pale Reaver',
		details: '',
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
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 49,
		initiative: 9,
		ac: 19,
		fortitude: 16,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '69012494-f9bd-4e43-8b97-b313dcbfdfe9',
				name: 'Deadly Mane',
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
				details: 'Reach 2; 1d8+6 necrotic damage.',
				damage: '1d8+6 necrotic damage',
				category: 1
			},
			{
				id: '8b906438-f842-4d70-8fcb-156885638b63',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; reach 2; 2d12+6 damage, and the target loses a healing surge and is weakened (save ends). In addition, the pale reaver regains 12 hit points.',
				damage: '2d12+6 damage',
				category: 5
			},
			{
				id: '06254efc-ba9d-4961-bbc4-75f1681bfb15',
				name: 'Image of Life',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The pale reaver adopts the appearance of a living humanoid until it attacks or is hit by an attack.',
				damage: '',
				category: 1
			},
			{
				id: 'cfadbf56-0e72-452b-b2b1-235cd8e80410',
				name: 'Insubstantial Transformation',
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
				details: 'The pale reaver becomes insubstantial and gains fly 6 (hover) and phasing until it attacks or becomes dazed, stunned, or unconscious.',
				damage: 'The pale reaver becomes insubstantial and gains fly 6 (hover) and phasing until it attacks or becomes dazed',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: 'radiant (if the pale reaver takes radiant damage, it cannot use insubstantial transformation until the end of its next turn)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 5 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'deea9b85-1f96-4031-b8e9-a8752d0a8699',
		name: 'Pale Reaver Creeper',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6 phasing',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 7,
			modifier: -2,
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 4,
		ac: 20,
		fortitude: 18,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd10db057-eac5-4b49-9562-8e8469338257',
				name: 'Deadly Mane',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 5 necrotic damage, and if another deadly mane attack has hit the target since the end of the target’s last turn, the creature is immobilized until the end of its next turn.',
				damage: '5 necrotic damage',
				category: 1
			},
			{
				id: 'fc3379de-a37c-4b60-9ea1-ce20ad203243',
				name: 'Blood Rain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
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
				details: 'Reach 2; targets an immobilized creature; the target loses a healing surge.',
				damage: 'Reach 2',
				category: 5
			},
			{
				id: '3d1f104f-9b1d-44bc-b825-1c05abcbac31',
				name: 'Image of Life',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The pale reaver adopts the appearance of a living humanoid until it attacks or is hit by an attack.',
				damage: '',
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

		info: 'Level 6 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '10e652e8-49a2-475e-96d8-aec528f4fe8e',
		name: 'Pale Reaver Lord',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 8,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +13, Diplomacy +13, Intimidate +13, Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
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
			score: 14,
			modifier: 2,
			cost: 5
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
		hp: 119,
		initiative: 7,
		ac: 24,
		fortitude: 18,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f024e05a-d3d1-45fc-80be-b55da5c07c1b',
				name: 'Deadly Mane',
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
				details: 'Reach 2; 2d6+6 necrotic damage.',
				damage: '2d6+6 necrotic damage',
				category: 1
			},
			{
				id: 'a17a591d-6278-49f1-9e0f-7a8972cebd33',
				name: 'Entrapping Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Gaze',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '8b94e904-6814-47c8-878a-6b1e12093dfe',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage against the target; reach 2; 2d12+8 damage, and the target loses a healing surge and is weakened (save ends). In addition, the pale reaver lord regains 29 hit points.',
				damage: '2d12+8 damage',
				category: 5
			},
			{
				id: '9cd98099-4515-4697-b02e-c1cf07bc7823',
				name: 'Terrifying Shriek',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+3 psychic damage, and the target is immobilized (save ends).',
				damage: '2d8+3 psychic damage',
				category: 1
			},
			{
				id: 'df1951eb-bc98-467f-9c1e-dbcba1237cb5',
				name: 'Image of Life',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The pale reaver lord adopts the appearance of a living humanoid until it attacks or is hit by an attack.',
				damage: '',
				category: 1
			},
			{
				id: 'd0d4aaaa-5bb7-43f2-b726-c34b3688f5d0',
				name: 'Insubstantial Transformation',
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
				details: 'The pale reaver lord becomes insubstantial and gains fly 8 (hover) and phasing until it attacks or becomes stunned or unconscious.',
				damage: 'The pale reaver lord becomes insubstantial and gains fly 8 (hover) and phasing until it attacks or becomes stunned or unconscious',
				category: 3
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

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '9d47057f-4097-4dd2-b4d6-b413b45b49d6',
		name: 'Paralyth',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5, fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Common, telepathy 10',
		skills: '',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 96,
		initiative: 11,
		ac: 25,
		fortitude: 21,
		reflex: 23,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e01f9624-20e8-410f-8562-9e5044dcb1f6',
				name: 'Pain Lash',
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
				details: '1d6+6 damage, and the target is slowed until the end of the paralyth’s next turn.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '69932f4e-224a-4036-958e-e2385bbab4f3',
				name: 'Nervous Feedback',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'The paralyth makes two pain lash attacks against a single target. If both hit, the target takes ongoing 5 psychic damage and is marked (save ends both).; 2d6+5 damage.',
				damage: 'the target takes ongoing 5 psychic damage and is marked (save ends both)',
				category: 1
			},
			{
				id: '596b72ad-b96a-4741-8cc8-4aecb21944a0',
				name: 'Spinal Domination',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'targets one creature marked by the paralyth; the target is dominated until the end of the paralyth’s next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Soldier',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'd98ebd6d-0b35-4e0c-86ae-cdc39db9e09e',
		name: 'Pit of the Abandoned Regiment',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'earth, undead',
		level: 14,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +8; darkvision, tremorsense 5',
		movement: '5, burrow 7',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +15',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 700,
		initiative: 12,
		ac: 32,
		fortitude: 28,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: 'bb98730a-2e73-490f-a27c-0d44d1e2b2f6',
				name: 'Aura of Abandonment',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura cannot spend action points.'
			}
		],
		powers: [
			{
				id: '3c87de22-5eb7-41fb-b71a-093156e7b47d',
				name: 'Regimental Retaliation',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8+10 necrotic damage, and ongoing 10 damage (save ends).',
				damage: '2d8+10 necrotic damage',
				category: 1
			},
			{
				id: '0a23346a-d882-4fbb-8479-b28e5032e729',
				name: 'Bone Grab',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 2d10+10 necrotic damage, and the target is grabbed.',
				damage: '2d10+10 necrotic damage',
				category: 1
			},
			{
				id: '6fca1670-9efc-4756-a1cb-fa4de52ac69e',
				name: 'Crushing Hate',
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
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the pit of the abandoned regiment; 3d10+10 damage.',
				damage: '3d10+10 damage',
				category: 3
			},
			{
				id: 'bc43e6f7-21f9-48a3-9093-57ad640e3f22',
				name: 'Skeletal Eruption',
				action: null,
				keywords: 'Necrotic',
				condition: 'when first bloodied and again when the pit of the abandoned regiment is reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '5d6 necrotic damage. Miss: Half damage.',
				damage: '5d6 necrotic damage',
				category: 0
			},
			{
				id: '027c00b4-fdfe-429d-a62b-94698031a08c',
				name: 'Regimental Discipline',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the pit spends an action point to take an extra action, it also gains an extra move action or minor action.',
				damage: '',
				category: 0
			},
			{
				id: '4c033929-45d3-4666-ba86-42ce0eb7f99a',
				name: 'Rejuvenation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A pit of the abandoned regiment rises at full hit points one day after it has been destroyed. Performing the Gentle Repose ritual on the creature’s remains destroys the creature completely, preventing it from using the rejuvenation power.',
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

		info: 'Level 14 Solo Soldier',
		phenotype: 'Huge natural animate (earth, undead)'
	},
	{
		id: '899dc56f-db6b-4ee3-9096-f07e19cd784d',
		name: 'Poltergeist',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 6 (hover)',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +15',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
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
		hp: 42,
		initiative: 8,
		ac: 18,
		fortitude: 17,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '13fe33f5-457b-412a-8f82-c8f446478116',
				name: 'Spirit Touch',
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
				details: '1d6+6 necrotic damage.',
				damage: '1d6+6 necrotic damage',
				category: 1
			},
			{
				id: 'c0ebf9d2-14a7-4837-b14d-1cd94add4fd6',
				name: 'Hurl Away',
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
					defence: 2
				},
				description: '',
				details: '1d6+8 necrotic damage, and the target is pushed 3 squares.',
				damage: '1d6+8 necrotic damage',
				category: 1
			},
			{
				id: '77304670-7b71-4201-bb56-9646ed488a51',
				name: 'Kinetic Claw',
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
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d6+10 necrotic damage, and the target slides 5 squares and is restrained (save ends).',
				damage: '2d6+10 necrotic damage',
				category: 1
			},
			{
				id: '8a19ac44-392a-46b3-b040-ecedde31c5ea',
				name: 'Flinging Rebuke',
				action: {
					action: 5,
					trigger: 'when an enemy moves adjacent to the poltergeist',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The poltergeist shifts up to 1 square and uses hurl away on the triggering enemy. If the attack hits, the target is knocked prone.',
				damage: 'The poltergeist shifts up to 1 square and uses hurl away on the triggering enemy',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Artillery',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'bf181355-82e0-46a4-929e-ef31860803b5',
		name: 'Putrescent Zombie',
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
		senses: 'Perception +6; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
		initiative: 3,
		ac: 25,
		fortitude: 26,
		reflex: 20,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd669dded-19f0-4b2c-822a-2735f2db17fc',
				name: 'Sickening Slam',
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
				details: '7 damage, and the target takes a -2 penalty to all defenses until the end of its next turn.',
				damage: '7 damage',
				category: 1
			},
			{
				id: 'c683f366-90ad-4700-accc-c2cb87177e7d',
				name: 'Putrescent Explosion',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '7 necrotic damage.',
				damage: '7 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '5310d6cf-fcba-4b81-b833-9e3e95d0a760',
		name: 'Reaper',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 9,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +9',
		equipment: 'scythe',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 77,
		initiative: 11,
		ac: 23,
		fortitude: 21,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e63e42df-26e1-4a77-b89e-127d60996076',
				name: 'Scythe',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d4+6 necrotic damage.',
				damage: '2d4+6 necrotic damage',
				category: 1
			},
			{
				id: '18b42e06-b529-4128-9383-a63f715585db',
				name: 'Reap and Fade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'The reaper makes a scythe attack and then teleports up to 5 squares. The reaper becomes insubstantial and gains phasing until the start of its next turn.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'df028873-c8cc-42f1-a065-087920d4cfb6',
				name: 'Eye of Impending Doom',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Gaze, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'targets one creature; the target takes 10 psychic damage if it attacks the reaper (save ends).',
				damage: 'the target takes 10 psychic damage if it attacks the reaper (save ends)',
				category: 3
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

		info: 'Level 9 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'c2cd0e5a-6e34-4eae-ab5e-71918627a852',
		name: 'Rot Hound',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '8',
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
		ac: 15,
		fortitude: 11,
		reflex: 17,
		will: 11,
		regeneration: null,
		auras: [
			{
				id: '024a8c6d-8c58-4c10-a30c-98eea1ce451f',
				name: 'Rotting Stench',
				keywords: '',
				details: 'aura 1; any enemy that starts its turn in the rotting stench aura of at least three rot hounds takes a -2 penalty to attack rolls, skill checks, and ability checks until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '84f44b2c-e271-49c1-97aa-3910982bbd2a',
				name: 'Gravebite',
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
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '5 necrotic damage.',
				damage: '5 necrotic damage',
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

		info: 'Level 1 Minion',
		phenotype: 'Small natural beast (undead)'
	},
	{
		id: 'fa5440b7-da65-4e5e-87d4-0c91b8582f09',
		name: 'Rot Slinger Captain',
		details: 'This humanoid creature’s lanky form sports two leathery, rotting wings. Its corpselike flesh continually shivers and splits into endless rivulets of decay that pool around the creature’s feet.',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 22,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +21',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 330,
		initiative: 18,
		ac: 36,
		fortitude: 35,
		reflex: 36,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9d79748e-f84c-4593-a9f4-9f377c9f51aa',
				name: 'Rotting Claw',
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
				attack: null,
				description: '',
				details: '1d10+10 damage, and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '1d10+10 damage',
				category: 1
			},
			{
				id: '789417b2-e65e-4a8a-8490-474bbbd2c374',
				name: 'Orb of Decay',
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
					bonus: 29,
					defence: 1
				},
				description: '',
				details: '2d8+5 necrotic damage, and the target is weakened and takes a -3 penalty to saving throws (save ends both).',
				damage: '2d8+5 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'acid, disease, poison',
		tactics: '',

		info: 'Level 22 Elite Artillery',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '4a7691bb-f3e8-4801-b49b-fdc1433e282d',
		name: 'Rotvine Defiler',
		details: 'THE ROTVINE DEFILER HAS BUT ONE PURPOSE: to ingest and spoil all that is living. A profane vestige of a powerful immortal devoted to fertility, the rotvine defiler seeks to destroy that which it has lost—life. In its wake, the creature leaves a trail of despoiled organic matter, a record of its vindictive mission.',
		size: 5,
		origin: 3,
		type: 1,
		keywords: 'plant, undead',
		level: 26,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +16; darkvision, tremorsense 10',
		movement: '8, burrow 8',
		alignment: 'Chaotic evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 1210,
		initiative: 19,
		ac: 42,
		fortitude: 41,
		reflex: 39,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: '9d64d6d5-aac1-4fb8-a492-52d7557c51ec',
				name: 'Despoiled Morass',
				keywords: '',
				details: 'aura 4; any creature that starts its turn within the aura is slowed until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '7ea00714-9040-4a1b-83f7-f48a2ecba4dd',
				name: 'Lashing Tendrils',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d8+9 necrotic damage, and the target cannot shift until the end of its next turn.',
				damage: '3d8+9 necrotic damage',
				category: 1
			},
			{
				id: '0c689ce9-d974-4589-90e7-a823fc6df0ec',
				name: 'Tendrils of Rot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 3d8+9 necrotic damage, and the target is restrained (save ends). Miss: Half damage, and the target is not restrained.',
				damage: '3d8+9 necrotic damage',
				category: 1
			},
			{
				id: '234d21b4-01a5-488c-bdee-b2070c9d31e7',
				name: 'Earthly Maw',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'targets each creature restrained by the rotvine defiler; the target takes ongoing 15 necrotic damage, loses a healing surge at the start of each of its turns and is grabbed (escape ends all).',
				damage: 'the target takes ongoing 15 necrotic damage',
				category: 3
			},
			{
				id: 'e5e043e7-1ae5-4fea-af5f-d4eef08407d1',
				name: 'Putrescent Explosion',
				action: null,
				keywords: 'Necrotic',
				condition: 'when first bloodied and again when the rotvine defiler is reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '3d8+9 necrotic damage.',
				damage: '3d8+9 necrotic damage',
				category: 0
			},
			{
				id: '8b48ea31-fc95-407f-a1c2-6f72fb77a2aa',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A rotvine defiler can make opportunity attacks against all enemies within its reach (4 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 7,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 26 Solo Controller',
		phenotype: 'Gargantuan immortal beast (plant, undead)'
	},
	{
		id: '03a5aa01-644e-4893-903b-71ef3edb954e',
		name: 'Sceptenar Vasabhakti Death Knight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 22,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +13; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: '',
		equipment: 'heavy shield; plate armor',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 398,
		initiative: 15,
		ac: 40,
		fortitude: 38,
		reflex: 35,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '25d57ea5-16a3-4f3b-960c-541ec67f3bd3',
				name: 'Marshal Undead',
				keywords: '',
				details: 'aura 10; lower-level undead allies in the aura gain a +2 bonus to their attack rolls.'
			}
		],
		powers: [
			{
				id: '4671841e-9af0-4b2a-83f3-42944a1b46f4',
				name: 'Soulsword',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '1d8+9 damage plus 5 necrotic damage (plus an extra 2d6 necrotic damage on a critical hit).',
				damage: '1d8+9 damage plus 5 necrotic damage (plus an extra 2d6 necrotic damage on a critical hit)',
				category: 1
			},
			{
				id: '27a0bc4d-7b0f-4c14-9a3f-fd6d7487b8d6',
				name: 'Valiant Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Requires soulsword; (with a +1 bonus to the attack roll for each adjacent ally)2d8+9 damage plus 5 necrotic damage.',
				damage: '(with a +1 bonus to the attack roll for each adjacent ally)2d8+9 damage plus 5 necrotic damage',
				category: 1
			},
			{
				id: 'd482e456-efb9-4074-97cb-26963af3420a',
				name: 'Terrifying Smite',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Requires soulsword; 2d8+9 damage plus 5 necrotic damage, and the target is pushed 2 squares and can’t move closer to Sceptenar Vasabhakti on its next turn.',
				damage: '2d8+9 damage plus 5 necrotic damage',
				category: 1
			},
			{
				id: 'f64e0312-47cf-4fa0-aa9e-58cc77061bd6',
				name: 'Divine Challenge',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'targets one creature in burst; the target is marked until Sceptenar Vasabhakti uses this power against another target. If the target makes an attack that doesn’t include Sceptenar Vasabhakti as a target, the target takes a -2 penalty to attack rolls and 16 necrotic damage.',
				damage: 'the target takes a -2 penalty to attack rolls and 16 necrotic damage',
				category: 3
			},
			{
				id: 'addd4698-8bac-4bad-9b45-d3184d1cf2b9',
				name: 'Unholy Flames',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '6d8+13 fire and necrotic damage to living creatures. Undead creatures within the area (including Sceptenar Vasabhakti) deal 2d6 extra fire damage with melee attacks until the end of Sceptenar Vasabhakti’s next turn.',
				attack: {
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '035d7156-01f2-4392-a5d4-18724d57b4f5',
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
				details: 'Sceptenar Vasabhakti spends a healing surge and regains 99 hit points. Sceptenar Vasabhakti gains a +2 bonus to all defenses until the start of her next turn.',
				damage: 'Sceptenar Vasabhakti spends a healing surge and regains 99 hit points',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 22 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'ba599f99-453b-4e12-857d-d7ca9d266745',
		name: 'Servile Ghost',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6 phasing',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 9,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'e8a00a59-a7b8-4159-9971-70e8bf6a8ede',
				name: 'Faceless Dread',
				keywords: '',
				details: '(Fear) aura 2; any living creature that starts its turn within the aura takes a -2 penalty to saving throws until the end of its next turn.'
			}
		],
		powers: [
			{
				id: 'ef831945-944e-4255-9d84-ee35d12bb407',
				name: 'Spirit Touch',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '7 necrotic damage, or 9 necrotic damage if the target is granting combat advantage to the servile ghost.',
				damage: '7 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'c84d5611-744e-4327-8e1d-e8aa85954970',
		name: 'Shattergloom Skeleton',
		details: '',
		size: 2,
		origin: 5,
		type: 0,
		keywords: 'undead',
		level: 8,
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
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 86,
		initiative: 11,
		ac: 24,
		fortitude: 22,
		reflex: 23,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '03dd3dc3-ee30-4313-9ec4-7be629c14781',
				name: 'Shadowy Claws',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage, and the target takes ongoing 5 necrotic damage and is slowed (save ends both). After the shattergloom skeleton uses shadowy rejuvenation, on a hit, the target takes ongoing 10 necrotic damage and is immobilized (save ends both) instead of slowed.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'e830e227-6265-4e56-8c1b-9ccbd66d5f13',
				name: 'Shadowy Rejuvenation',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6 + 4 necrotic damage (no attack roll required); the power creates a zone of darkness that lasts until the end of the encounter. The zone blocks line of sight (creatures that have darkvision ignore this effect). All effects on the shattergloom skeleton end, and the skeleton’s shadowy claws attack deals ongoing 10 necrotic damage instead of ongoing 5 necrotic damage, and the attack renders a target immobilized instead of slowed.; 3d10+5 damage.',
				damage: '2d6 + 4 necrotic damage (no attack roll required)',
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

		info: 'Level 8 Soldier',
		phenotype: 'Medium shadow animate (undead)'
	},
	{
		id: '7965653f-6edc-4454-acfa-0384d3274e65',
		name: 'Skeletal Archer',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 3,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'arrows (30); leather armor; longbow; short sword',
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 37,
		initiative: 5,
		ac: 16,
		fortitude: 14,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '86a8ab8e-f1d1-4c25-811f-106a24f93468',
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
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '24b88ed0-b7c3-4d88-a639-69fe917eabb0',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '98696788-82bf-4754-93bd-59cf38e3c377',
				name: 'Double Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'ranged 20/40',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Requires longbow; two attacks; each one against a different target; (each)2d10+4 damage each.',
				damage: '(each)2d10+4 damage each',
				category: 1
			},
			{
				id: 'a79ced39-e8af-42a8-bbf6-b11c1e484441',
				name: 'Prime Shot',
				action: null,
				keywords: '',
				condition: '',
				range: 'A skeletal archer gains a +1 bonus to ranged attack rolls against the closest enemy.',
				attack: null,
				description: '',
				details: '',
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

		info: 'Level 3 Artillery',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '9c6f0d84-60f9-4a8e-9113-5f2214032bee',
		name: 'Skeletal Hauler',
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
				id: 'c8986ecc-dafc-4a64-92b3-f86798d624ca',
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
		id: 'efc44f1b-5386-4142-8197-971bcfbbb9ca',
		name: 'Skeleton Soldier',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 6,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'arrow; heavy shield; longsword; shortbow',
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
		hp: 1,
		initiative: 6,
		ac: 21,
		fortitude: 18,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '178b74bc-73ec-41bc-9a8a-55704a546d20',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '2290fdd9-9495-4507-b2e3-98011947d980',
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
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Range 15/30; 4 damage.',
				damage: '4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '09a7c334-7b54-4f17-9e5b-d2bc412fa453',
		name: 'Skin Kite',
		details: '',
		size: 1,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: 'fly 5 (hover)',
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
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 35,
		initiative: 8,
		ac: 17,
		fortitude: 13,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '88a88765-f78c-467b-adc0-132ca99b0bf0',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d4+3 necrotic damage.',
				damage: '1d4+3 necrotic damage',
				category: 1
			},
			{
				id: '000d6203-f734-439b-aa6f-88ba5b369084',
				name: 'Blinding Grab',
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
					bonus: 6,
					defence: 1
				},
				description: '',
				details: '1d4+3 necrotic damage, and the target is grabbed. The target is blinded until the grab ends. A skin kite can have only one creature grabbed at a time.',
				damage: '1d4+3 necrotic damage',
				category: 1
			},
			{
				id: 'd94e2a9c-70cf-4670-8e93-05738d61d499',
				name: 'Flyby Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'The skin kite moves up to 5 squares and makes one melee basic attack at any point during the movement. A skin kite doesn’t provoke opportunity attacks from the target of its attack when moving away from the creature.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '9b4db2e3-df4e-420f-85fe-ce4c9f58f603',
				name: 'Kite Spawn',
				action: {
					action: 7,
					trigger: 'when the skin kite reduces an enemy to 0 hit points or fewer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The skin kite splits, and a new skin kite appears in a square adjacent to the original skin kite. The new skin kite has the same current hit points as the original skin kite but is otherwise a new creature. The new skin kite acts immediately after the original skin kite’s initiative count.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Small aberrant beast (undead)'
	},
	{
		id: '53a69a90-9bd6-432e-b2df-eef54ccd1637',
		name: 'Skinwalker Skeleton',
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
		senses: 'Perception +3; darkvision',
		movement: '5',
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
		initiative: 4,
		ac: 16,
		fortitude: 15,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e0952b67-e48f-47a6-b7a2-150caa1eb57f',
				name: 'Putrefying Pummel',
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
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage (crit 15 damage, and the target contracts skinrot).',
				damage: '1d8+8 damage (crit 15 damage',
				category: 1
			},
			{
				id: '1856040c-45bd-4725-9d1d-67fe2a862ab0',
				name: 'Skin Case',
				action: null,
				keywords: '',
				condition: 'until first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'A skinwalker skeleton’s fleshy exterior grants it a +2 bonus to AC and Fortitude (already included), negates its vulnerable 5 radiant, and infects a target with skinrot (see below) when the skinwalker skeleton scores a critical hit. These benefits end when the skinwalker skeleton is first bloodied.',
				damage: 'A skinwalker skeleton’s fleshy exterior grants it a +2 bonus to AC and Fortitude (already included)',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '',
		vulnerable: '5 radiant (while bloodied)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '428e21a3-8ee1-4a32-a10d-3374373afc2b',
		name: 'Skulk Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +9',
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
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 45,
		initiative: 6,
		ac: 17,
		fortitude: 15,
		reflex: 17,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f3cb363b-9107-418d-9502-7c2c90a2fe2f',
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
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'c599133b-7ed0-487d-a6c1-d87853e8901a',
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
				range: 'The skulk zombie moves up to half its speed and makes one melee basic attack at any point during that movement. The skulk zombie doesn’t provoke opportunity attacks from the target of its attack when moving away from the creature.',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: 'b968dd41-cec3-453f-8442-aa76c093ebed',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A skulk zombie deals 2d6 extra damage when it makes a successful melee attack on any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
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

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '19b5c254-3fc0-4af0-aa90-49d8c1e46eb4',
		name: 'Sodden Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic, undead',
		level: 4,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; darkvision',
		movement: '6, climb 4, swim 8',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +9, Stealth +10',
		equipment: '',
		category: 'Ghoul',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 53,
		initiative: 7,
		ac: 20,
		fortitude: 16,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e2ecb783-c2cf-4b62-a99e-1321d9149c87',
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
				details: 'Requires a free hand; 1d6+6 damage, and the target is grabbed .',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'e38a2e0d-4274-4c65-a10e-4a21fa902b3d',
				name: 'Lacedon Bite',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the sodden ghoul; 1d10+6 damage, and the target is dazed (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'cc471541-f9d3-4f75-91c5-eb49585df851',
				name: 'Rending Pounce',
				action: {
					action: 1,
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
				details: 'The sodden ghoul makes two claw attacks, each at a -2 penalty to the attack roll. If both attacks hit the same target, the target is grabbed, and it takes ongoing 5 damage (save ends).',
				damage: 'and it takes ongoing 5 damage (save ends)',
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

		info: 'Level 4 Soldier',
		phenotype: 'Medium natural humanoid (aquatic, undead)'
	},
	{
		id: '9972e3cd-76f4-4186-8e1f-5776ad2ec09b',
		name: 'Sodden Ghoul Wailer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic, undead',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6, climb 4, swim 8',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +13, Stealth +14',
		equipment: '',
		category: 'Ghoul',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 85,
		initiative: 10,
		ac: 25,
		fortitude: 21,
		reflex: 22,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2ef00ec7-2000-41fa-bab5-c29c3a364272',
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
				details: 'Requires a free hand; 2d6+5 damage, and the target is grabbed .',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '762764fb-164e-4e95-b28e-eafe9d24939a',
				name: 'Lacedon Bite',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Targets a creature grabbed by the sodden ghoul; 1d10+7 damage, and the target is dazed (save ends).',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '330e2998-2517-4361-9b1e-a55c44a46cb2',
				name: 'Rending Pounce',
				action: {
					action: 1,
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
				details: 'The sodden ghoul makes two claw attacks, each at a -2 penalty to the attack roll. If both attacks hit the same target, the target is grabbed, and it takes ongoing 5 damage (save ends).',
				damage: 'and it takes ongoing 5 damage (save ends)',
				category: 1
			},
			{
				id: '9693226c-b8d4-460a-93d2-aad4ea608ddd',
				name: 'Frightful Dirge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of its next turn.',
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
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Soldier',
		phenotype: 'Medium natural humanoid (aquatic, undead)'
	},
	{
		id: 'ed99bc75-1e36-4410-a7da-b452ccffb6a4',
		name: 'Spine Creep Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'scale armor',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
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
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 113,
		initiative: 11,
		ac: 27,
		fortitude: 25,
		reflex: 25,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9eff363b-179f-4c90-8484-aab6d01e1658',
				name: 'Spinal Flail',
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
				details: 'Reach 2; 2d10+3 damage, and the target slides 1 square.',
				damage: '2d10+3 damage',
				category: 1
			},
			{
				id: 'cb228087-e15b-43dc-b253-af0c23faefe9',
				name: 'Spinal Whirlwind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'close burst 2',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Requires flail; targets enemies; 2d8+6 damage, and the target slides 1 square and is immobilized.',
				damage: '2d8+6 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
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

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '76d2b016-7371-4f26-b63e-edecb9fe652d',
		name: 'Spirit Ooze',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 16,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; blindsight 10',
		movement: 'fly 6 (hover)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +21',
		equipment: '',
		category: '',
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
			score: 26,
			modifier: 8,
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 166,
		initiative: 20,
		ac: 32,
		fortitude: 27,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '074be3d2-0fb6-4860-b0e7-99354ca3c586',
				name: 'Spirit Sink',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 3d6+5 necrotic damage, and the target is weakened (save ends). In addition, the spirit ooze gains phasing until the end of its next turn.',
				damage: '3d6+5 necrotic damage',
				category: 1
			},
			{
				id: '7fbe8cf5-c923-4f7a-b2d9-95bd810e8ce8',
				name: 'Split',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit ooze splits into two Large individuals, the second one occupying a space adjacent to the original creature. Each of the two creatures has hit points equal to one-half the original’s current hit points. Both creatures act on the original creature’s initiative count. Effects applied to the original ooze do not apply to either of the individuals after the split occurs. A spirit ooze can’t split if reduced to 0 hit points by the attack that bloodied it.',
				damage: '',
				category: 1
			},
			{
				id: '34036fee-ee98-4dfd-a4fc-0faeed3bd0ae',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A spirit ooze deals 2d6 extra damage when it hits a target it has combat advantage against.',
				damage: 'a spirit ooze deals 2d6 extra damage when it hits a target it has combat advantage against',
				category: 0
			},
			{
				id: 'abc10f3a-0969-4a4d-a2cd-3646b0554031',
				name: 'Phase Away',
				action: {
					action: 3,
					trigger: 'while the spirit ooze has phasing',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit ooze shifts up to 1 square.',
				damage: 'The spirit ooze shifts up to 1 square',
				category: 5
			},
			{
				id: '2cf94e29-00e0-4f6d-b8ca-0f2c6f1b06dd',
				name: 'Slippery Phasing',
				action: null,
				keywords: '',
				condition: 'while the spirit ooze has phasing',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit ooze gains a +2 bonus to AC and Reflex.',
				damage: 'The spirit ooze gains a +2 bonus to AC and Reflex',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 16 Elite Lurker',
		phenotype: 'Large natural animate (blind, ooze, undead)'
	},
	{
		id: 'b9641d5b-d56c-44c3-86b9-0ac25427dba2',
		name: 'Spirit Vampire',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6 (possessed body only), fly 6 (spirit form only); phasing (spirit form only)',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Bluff +17, Stealth +15',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 66,
		initiative: 14,
		ac: 24,
		fortitude: 23,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3a1ec977-54c5-45fc-850a-cfc28226f16a',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires a possessed body; 1d6+4 damage plus 1d6+4 necrotic damage.',
				damage: '1d6+4 damage plus 1d6+4 necrotic damage',
				category: 1
			},
			{
				id: '8dd2758e-abc9-4e5b-adf4-89c38777db23',
				name: 'Spirit Touch',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'Requires spirit form; 2d6+6 necrotic damage.',
				damage: '2d6+6 necrotic damage',
				category: 1
			},
			{
				id: '82ed6d5e-effe-4649-a671-43c3ad1c59f2',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'Requires a possessed body and combat advantage against the target; 2d12+8 damage, and the target is weakened (save ends), and the spirit vampire regains 16 hit points.',
				damage: '2d12+8 damage',
				category: 5
			},
			{
				id: '9d6d6791-63ee-43d8-90fd-a00a7140df81',
				name: 'Possess Body',
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
				details: 'A spirit vampire’s natural form is its spirit form. However, it can enter the form of a dead or unconscious Medium or smaller humanoid, possessing the body. While in a possessed body, the spirit vampire has the following traits:',
				damage: '',
				category: 3
			},
			{
				id: 'd4cbb5a3-47b1-4968-a591-419a39d482aa',
				name: 'Vulnerable to Sunlight',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A spirit vampire that starts its turn in direct sunlight is dazed and cannot use possess body.',
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
		resist: 'insubstantial (spirit form only)',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '7ce0d2ad-3fad-41da-b1fa-439a8b28fa71',
		name: 'Ssra-Tauroch Mummy Lord',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'reptile, undead',
		level: 17,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'History +15, Insight +17, Intimidate +18, Religion +15',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 820,
		initiative: 12,
		ac: 33,
		fortitude: 31,
		reflex: 28,
		will: 31,
		regeneration: {
			value: 10,
			details: 'if Ssra-Tauroch takes fire damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: 'ff13e216-7269-40db-af2c-047790767dd3',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 3; any enemy within the aura takes a -4 penalty to attack rolls against Ssra-Tauroch until it damages Ssra-Tauroch.'
			},
			{
				id: '8a7157bb-6929-4924-853a-64c6b9abd133',
				name: 'Zehir’s Favor',
				keywords: '',
				details: '(Healing, Poison) aura 10; allies in the aura at the start of their turns regain 5 hit points, while enemies in the aura at the start of their turns take 5 poison damage.'
			}
		],
		powers: [
			{
				id: 'b73f2968-cfe2-44f3-957c-f84b3e297cec',
				name: 'Scepter of Ssra-Tauroch',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d8+9 damage, and the target takes ongoing 10 poison damage (save ends).',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: '32c00f12-6594-4f43-8279-d45c58276c6f',
				name: 'Shielding Wallop',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ssra-Tauroch makes two scepter of Ssra-Tauroch attacks against the same target. If both attacks hit, the target is also pushed 3 squares and is immobilized (save ends), and Ssra-Tauroch and one adjacent ally gain a +1 power bonus to AC until the end of Ssra-Tauroch’s next turn.',
				damage: 'the target is also pushed 3 squares and is immobilized (save ends)',
				category: 1
			},
			{
				id: '9d52c0c1-d159-4470-bc52-6e4c63a62a50',
				name: 'Scaletongue',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends). Aftereffect: The target is dazed (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '98a19a96-7229-48da-bea6-4d769c4aa915',
				name: 'Curse of Ssra-Tauroch',
				action: null,
				keywords: 'Cold, Necrotic',
				condition: 'when first bloodied',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '2d4+6 necrotic damage, and the target takes ongoing 10 cold damage and is immobilized (save ends both).',
				damage: '2d4+6 necrotic damage',
				category: 0
			},
			{
				id: 'fad43cb0-c040-48a5-a03b-bc478295ebfd',
				name: 'Pestilence of Doom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '3d8+9 necrotic damage, and the target takes a -2 penalty to all defenses until the end of Ssra-Tauroch’s next turn. Aftereffect: The target contracts level 17 mummy rot.',
				damage: '3d8+9 necrotic damage',
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

		info: 'Level 17 Solo Controller',
		phenotype: 'Large natural humanoid (reptile, undead)'
	},
	{
		id: '4e448a6c-fead-42f2-9e57-e299f725d385',
		name: 'Stench Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 6,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +11, Stealth +12',
		equipment: '',
		category: 'Ghoul',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 142,
		initiative: 9,
		ac: 23,
		fortitude: 19,
		reflex: 21,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '474ae619-9d07-44e0-9f30-349781324a56',
				name: 'Nauseating Stench',
				keywords: '',
				details: 'aura 2; any living creature within the aura takes a -2 penalty to attack rolls, skill checks, and ability checks.'
			}
		],
		powers: [
			{
				id: '12cd7d1c-a088-4e8e-8bf6-e3753b7787c7',
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
				details: '2d6+4 damage, and the target is immobilized (save ends).',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '3abfe771-3f91-4ce9-9fad-1de16fb0cc24',
				name: 'Ghoulish Bite',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Targets an immobilized creature; 1d10+4 damage, and the target is dazed (save ends).',
				damage: '1d10+4 damage',
				category: 3
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

		info: 'Level 6 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '778c3a85-8cb4-47ed-bbf0-b5a09f2c72b3',
		name: 'Stonespawned Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 7,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision, tremorsense 3',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +10',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
		hp: 64,
		initiative: 9,
		ac: 20,
		fortitude: 21,
		reflex: 17,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6710ca51-6ea5-4e4a-b0cc-5a494551ece4',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '97489ea5-8119-41fc-be2b-103e5edd2fc2',
				name: 'Stone Shunt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d6+9 damage, and the target is restrained (save ends).',
				damage: '2d6+9 damage',
				category: 1
			},
			{
				id: '13fba8a4-8eca-4a47-b6bb-f1cc4ca88ad9',
				name: 'Merge With Stone',
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
				details: 'The stonespawned skeleton merges with an adjacent stone surface of equal or greater size and then shifts up to 3 squares. The stone blocks line of sight and line of effect to the stonespawned skeleton. The skeleton can remain merged with stone indefinitely, but it can take only move actions while merged. A creature can attack a square in which the stonespawned skeleton is merged with the stone, but the skeleton has resist 20 to all damage while merged.',
				damage: 'but the skeleton has resist 20 to all damage while merged',
				category: 2
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

		info: 'Level 7 Lurker',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'cbbbd876-59e9-4837-8b38-5e55ca124d49',
		name: 'Strahd’s Dread Zombie',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 16,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +16; blindsight 10, darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 10,
		ac: 30,
		fortitude: 31,
		reflex: 27,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1955ecbb-333b-4cce-924c-bade8fb62d21',
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
				details: '8 damage.',
				damage: '8 damage',
				category: 1
			},
			{
				id: '843f8fc2-1276-46c3-b7ce-349fc344177a',
				name: 'Zombie Smash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '8 damage, and the target is knocked prone.',
				damage: '8 damage',
				category: 1
			},
			{
				id: '39035b26-5437-4f63-95be-03381113b927',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a Strahd’s dread zombie is reduced to 0 hit points by an attack that does not deal fire or radiant damage, the creature is not destroyed. The Strahd’s dread zombie falls prone and appears to be destroyed, but instead, the creature returns with 1 hit point at the beginning of its next turn.',
				damage: 'if a strahd’s dread zombie is reduced to 0 hit points by an attack that does not deal fire or radiant damage',
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

		info: 'Level 16 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '7def7b55-8ebe-4685-8a5f-a9ffa424e2d5',
		name: 'Tainted Priest',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +16, Religion +16, Stealth +14',
		equipment: 'implement, staff',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 147,
		initiative: 9,
		ac: 29,
		fortitude: 28,
		reflex: 23,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c9077eb8-22c9-4c88-ade1-5809cb41351f',
				name: 'Unholy Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Healing, Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target loses a healing surge, and the tainted priest regains 5 hit points.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'fc7aad0d-dda8-4fcf-b2a6-83880940fb6a',
				name: 'Ray of Weakness',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '3d6+9 necrotic damage, and the target is weakened (save ends).',
				damage: '3d6+9 necrotic damage',
				category: 1
			},
			{
				id: '2ea5f766-65c0-44b9-9135-1f29dcab1ed4',
				name: 'Vile Eruption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '6d4+8 necrotic damage, and the target is stunned until the end of its next turn. In addition, each undead ally in the burst regain 20 hit points.',
				damage: '6d4+8 necrotic damage',
				category: 1
			},
			{
				id: '3e12f08c-7a54-4144-9ce0-03aa9181a1c9',
				name: 'Waves of the Grave',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '4d6+8 damage, and ongoing 10 necrotic damage (save ends).',
				damage: '4d6+8 damage',
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

		info: 'Level 15 Controller (L)',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '09403f61-34fb-4f40-bd04-d43db72f8be7',
		name: 'Thicket Dryad Lich',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'plant, undead',
		level: 16,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '8 (forest walk)',
		alignment: 'Evil',
		languages: 'Elven, telepathy 10',
		skills: 'Arcana +17, Bluff +20, Insight +16, Stealth +18',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 690,
		initiative: 13,
		ac: 34,
		fortitude: 32,
		reflex: 30,
		will: 34,
		regeneration: {
			value: 10,
			details: '(if a thicket dryad lich takes radiant damage, regeneration doesn’t function until the end of its next turn).'
		},
		auras: [
			{
				id: '52975be1-f561-4917-9996-183ee93aab47',
				name: 'Death Thorns',
				keywords: '',
				details: '(Necrotic) aura 3; any creature without forest walk takes 5 necrotic damage each time it moves or is pushed, pulled, or slid into a square within the aura.'
			}
		],
		powers: [
			{
				id: 'eb53c9e9-1f26-4315-be3c-bbe87e1b033b',
				name: 'Rot Claws',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d8+3 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '38c3be40-6553-4822-8b47-a222686a5dac',
				name: 'Necrocreeper Vines',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'two attacks, each one against a different target; 2d8+3 damage per attack and the target slides 4 squares. At the end of the slide, the target takes ongoing 5 necrotic damage and is restrained (escape ends both).',
				damage: '2d8+3 damage per attack and the target slides 4 squares',
				category: 1
			},
			{
				id: '45f38601-f84b-4f12-94a9-cd276496d48a',
				name: 'Blight Burst',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d10+3 poison damage, and the target takes ongoing 10 poison damage and is weakened (save ends both).',
				damage: '2d10+3 poison damage',
				category: 5
			},
			{
				id: '07dbe4cb-df79-44a6-893a-9af81f32f4ab',
				name: 'Death Spike',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'targets one creature restrained by necrocreeper vines; 1d6+8 damage plus 2d8 necrotic damage, and the target is weakened and takes a -2 penalty to Athletics checks and Acrobatics checks (save ends both).',
				damage: '1d6+8 damage plus 2d8 necrotic damage',
				category: 3
			},
			{
				id: '0c76d084-86c8-44f1-80e9-2d9aa6fe0228',
				name: 'Deceptive Veil',
				action: {
					action: 3,
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
				details: 'A thicket dryad lich can disguise itself to appear as any Medium humanoid, usually a beautiful elf or eladrin. A successful Insight check (opposed by the dryad’s Bluff check) pierces the disguise.',
				damage: '',
				category: 3
			},
			{
				id: '79aa6a11-3f95-4ad7-8e9d-63800f3df723',
				name: 'Necrotic Treestride',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A thicket dryad lich teleports up to 8 squares if it begins and ends the move adjacent to a tree, a treant, or a plant of Large size or bigger. When it teleports in this manner, a thicket dryad lich deals 10 necrotic damage to all nonplant creatures adjacent to it at the end of the teleport.',
				damage: 'a thicket dryad lich deals 10 necrotic damage to all nonplant creatures adjacent to it at the end of the teleport',
				category: 2
			},
			{
				id: '1a79f4d7-7cab-4734-b5e3-7165972034ef',
				name: 'Thorny Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature that a thicket dryad lich has grabbed takes 10 damage when the dryad sustains the grab.',
				damage: 'a creature that a thicket dryad lich has grabbed takes 10 damage when the dryad sustains the grab',
				category: 0
			},
			{
				id: 'd30f8b24-ac77-40e7-9070-cab9e8fef76d',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a thicket dryad lich is reduced to 0 hit points, it dissipates into a spray of dead leaves, but it is not truly destroyed. It reappears in 1d10 days within 1 square of its phylactery tree, unless the phylactery tree is also found and destroyed.',
				damage: 'It reappears in 1d10 days within 1 square of its phylactery tree',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 16 Solo Controller',
		phenotype: 'Medium fey humanoid (plant, undead)'
	},
	{
		id: '56403060-6c70-4aca-a33d-7cdacf37667e',
		name: 'Titan Shell',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'giant, undead',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7, climb 7',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 149,
		initiative: 14,
		ac: 24,
		fortitude: 24,
		reflex: 26,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a1f467d5-3643-4915-a893-1f114160c043',
				name: 'Necrotic Slap',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+3 damage plus 5 necrotic damage, and the target is grabbed. In addition, the target loses a healing surge, and the forsaken shell regains 10 hit points.',
				damage: '2d6+3 damage plus 5 necrotic damage',
				category: 1
			},
			{
				id: '63f8b721-380d-4a9c-957b-3d0b98c8055a',
				name: 'Absorb Life',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the titan shell; the titan shell shifts up to 2 squares before or after the attack, pulling the target with it; the target loses a healing surge, and the forsaken shell regains 10 hit points.',
				damage: 'the titan shell shifts up to 2 squares before or after the attack',
				category: 3
			},
			{
				id: 'd871fe36-63c9-46b3-9881-fb8d2452d5c0',
				name: 'Flexibility',
				action: {
					action: 5,
					trigger: 'when the titan shell would be immobilized; restrained; pushed; pulled; or slid',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The titan shell makes a saving throw. On a save, the triggering effect is negated and the titan shell can make a necrotic slap attack as a free action.',
				damage: '',
				category: 5
			},
			{
				id: 'b75d4be9-9a6e-4a80-8a4b-360a1003a599',
				name: 'Spawn Shell',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a titan shell kills a Large living humanoid creature, the slain creature rises as a free-willed titan shell at the start of its creator’s next turn.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Brute',
		phenotype: 'Large natural animate (giant, undead)'
	},
	{
		id: '440b6ee5-600b-43ae-a686-74bfa64c8d61',
		name: 'Tomb Mote',
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
		skills: 'Stealth +14',
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
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 9,
		ac: 17,
		fortitude: 13,
		reflex: 18,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3b261521-1532-4366-893f-2fc83d563538',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '3 necrotic damage, and ongoing 2 necrotic damage (save ends).',
				damage: '3 necrotic damage',
				category: 1
			},
			{
				id: 'bfbe5daa-1cc1-4593-b0aa-440b92e3d520',
				name: 'Tomb Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a tomb mote hits a target adjacent to three or more tomb motes, it instead deals 6 damage and ongoing 5 necrotic damage (save ends).',
				damage: 'it instead deals 6 damage and ongoing 5 necrotic damage (save ends)',
				category: 0
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
		id: '05da6f95-04de-47a6-975f-6b2f08d7696e',
		name: 'Tombstone Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 17,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6 can’t shift',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
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
			score: 7,
			modifier: -2,
			cost: 0
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
		hp: 336,
		initiative: 8,
		ac: 35,
		fortitude: 32,
		reflex: 27,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'df6c8ba4-dbea-4f68-983c-55ebe29d6364',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+7 damage, and the target is pushed 1 square and dazed (save ends).',
				damage: '3d6+7 damage',
				category: 1
			},
			{
				id: 'a81e9129-962e-4024-8e06-48e7e76f2219',
				name: 'Double Attack',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'The tombstone golem makes two slam attacks, or one touch of the grave attack and one slam attack.; 2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '0dd0797c-5808-4182-a1f6-a4e9f09bf3a9',
				name: 'Golem Rampage',
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
				attack: null,
				description: '',
				details: 'The tombstone golem moves up to its speed plus 2 and can move through enemies’ spaces, provoking opportunity attacks as normal. When it enters a creature’s space (ally or enemy), the golem makes a slam attack against that creature. The golem must end its movement in an unoccupied space, and it can make no more than one slam attack against any single creature when using this power.',
				damage: 'The tombstone golem moves up to its speed plus 2 and can move through enemies’ spaces',
				category: 1
			},
			{
				id: '4c7bcce9-c187-424b-aa12-9039647ef092',
				name: 'Touch of the Grave',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 4d8+15 necrotic damage, and the target is weakened (save ends).',
				damage: '4d8+15 necrotic damage',
				category: 5
			},
			{
				id: 'd266eecc-0f06-44a7-8472-c9b4e87b6fa9',
				name: 'Death Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'The tombstone golem explodes in a burst of jagged stones and necrotic energy. Close burst 1',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d6+2 damage plus 5 necrotic damage, and the space it occupied is difficult terrain until cleared.',
				damage: '2d6+2 damage plus 5 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 17 Elite Skirmisher',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'bcdd9de8-3cd2-4227-9d26-433535ecac4c',
		name: 'Undead Vecna Cultist',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 17,
		ac: 35,
		fortitude: 35,
		reflex: 34,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aa739f53-cab3-4b73-96ed-785b4ce75923',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '7 damage, and the target loses a healing surge.',
				damage: '7 damage',
				category: 1
			},
			{
				id: '52789a82-808a-4660-85da-bb2356001782',
				name: 'Explosion',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '10 necrotic damage. Miss: Half damage.',
				damage: '10 necrotic damage',
				category: 0
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

		info: 'Level 21 Minion',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '6fee4bde-5d07-4130-b311-df607d19f215',
		name: 'Vecna',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'undead',
		level: 35,
		role: {
			type: 3,
			flag: 2,
			leader: true
		},
		senses: 'Perception +34; darkvision, truesight 20',
		movement: '8, fly 8 (hover), teleport 10',
		alignment: 'Evil',
		languages: 'all, telepathy 20',
		skills: 'Arcana +34, Bluff +31, Diplomacy +31, Dungeoneering +34, Heal +34, History +34, Insight +34, Intimidate +31, Nature +34, Religion +34',
		equipment: '',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 34,
			modifier: 12,
			cost: -1
		},
		wisdom: {
			score: 34,
			modifier: 12,
			cost: -1
		},
		charisma: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		hp: 1580,
		initiative: 25,
		ac: 49,
		fortitude: 49,
		reflex: 47,
		will: 51,
		regeneration: null,
		auras: [
			{
				id: '849e741e-a6a5-4d8b-93b0-a84c9e7ad628',
				name: 'Vecna’s Aura',
				keywords: '',
				details: '(Healing, Necrotic) aura 10; any living creature that starts its turn within the aura takes 50 necrotic damage. Any undead creature that starts its turn within the aura regains 50 hit points.'
			}
		],
		powers: [
			{
				id: '28594acc-ed95-4369-a724-22142efb87e3',
				name: 'Paralyzing Touch',
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
					bonus: 39,
					defence: 2
				},
				description: '',
				details: '3d6+14 necrotic damage, and the target is restrained and weakened (save ends both).',
				damage: '3d6+14 necrotic damage',
				category: 1
			},
			{
				id: 'ba6b5513-fa37-4516-9602-994b106b2192',
				name: 'Banish to the Dread Realm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: '2d10+9 psychic damage. The target is banished to a demiplane, disappearing from sight. The target cannot be targeted and cannot take actions until the start of its next turn, at which time the target reappears in the original space it occupied or in the nearest space of Vecna’s choice if that space is occupied. The target immediately makes a melee basic attack as a free action against the nearest creature. In addition, the target treats its allies as enemies for the purpose of making opportunity attacks, and if an ally performs an action that would normally provoke an opportunity attack from an enemy, the target makes an opportunity attack against the ally (save ends).',
				attack: {
					bonus: 39,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '5f339205-4091-4805-90b0-e83b7454226b',
				name: 'Ray of Death',
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
					bonus: 39,
					defence: 2
				},
				description: '',
				details: '2d8+15 necrotic damage, and the target loses a healing surge.',
				damage: '2d8+15 necrotic damage',
				category: 1
			},
			{
				id: '2a57d68c-25ee-429f-9e06-72ed4b72a0ec',
				name: 'Necrotic Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 39,
					defence: 2
				},
				description: '',
				details: 'targets living creatures; 2d6+12 necrotic damage, and the target is restrained and takes ongoing 20 necrotic damage (save ends both). The burst creates a zone of webs that lasts until the end of the encounter. The zone is difficult terrain, and a living creature that ends its move in the web is restrained and takes ongoing 20 necrotic damage (save ends both).',
				damage: '2d6+12 necrotic damage',
				category: 1
			},
			{
				id: 'edda3759-f5aa-4769-9383-ffb05eba23a2',
				name: 'Divine Discorporation',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'Vecna discorporates.',
				damage: '',
				category: 1
			},
			{
				id: 'fb42db5a-123d-4499-81d6-566ca815b45e',
				name: 'Esoteric Action',
				action: {
					action: 5,
					trigger: 'when an enemy within sight spends an action point',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Vecna spends an action point and takes an extra action.',
				damage: '',
				category: 5
			},
			{
				id: 'c9533032-26b2-4283-9eab-1708d6438919',
				name: 'Immortal Resistance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when vecna gains an effect that a save can end',
				range: '',
				attack: null,
				description: '',
				details: 'Vecna makes a saving throw. On a save, Vecna is unaffected by the effect.',
				damage: '',
				category: 1
			},
			{
				id: '7a9e9d61-ac4a-4b2e-afda-9a5816c61221',
				name: 'Vecna’s Ambition',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when vecna reduces a creature to 0 hit points or fewer',
				range: '',
				attack: null,
				description: '',
				details: 'Vecna regains an action point.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 9,
				value: 20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'attacks by characters below level 20, disease, illusion, poison',
		tactics: '',

		info: 'Level 35 Solo Controller (L)',
		phenotype: 'Medium immortal humanoid (undead)'
	},
	{
		id: 'ff6e83c7-243c-4d1f-97ea-c70bbc66aa95',
		name: 'Vile Pet',
		details: '',
		size: 1,
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
		movement: '8, climb 6',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +15',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 10,
		ac: 25,
		fortitude: 21,
		reflex: 26,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a70df7f6-cbfb-4396-91a8-fc92a761d64e',
				name: 'Filthy Claws',
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
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '88745986-b33a-451f-8f36-5db3b4cf00b3',
				name: 'Infectious Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Disease, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Requires combat advantage against the target; 2d4+5 damage, and the target contracts cemetery rot (see below) and takes ongoing 5 necrotic damage (save ends).',
				damage: '2d4+5 damage',
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
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'cc97470c-8c9e-4b53-88d8-9833d469f719',
		name: 'Void Lich',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 20,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '4, fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, telepathy 10',
		skills: 'Arcana +22, Intimidate +20',
		equipment: '',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 296,
		initiative: 13,
		ac: 34,
		fortitude: 31,
		reflex: 32,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '35bacdf2-3648-4879-a420-b91920f9c3a4',
				name: 'Shroud of Night',
				keywords: '',
				details: 'aura 5; bright light within the aura is reduced to dim light, and dim light within the aura is reduced to darkness (if the void lich takes radiant damage, the aura is negated until the end of the void lich’s next turn).'
			}
		],
		powers: [
			{
				id: '36d8ae09-ae7f-414b-91b2-6592b5e4e2ae',
				name: 'Life Trap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Healing Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: '2d6+7 necrotic damage, and the void lich regains 15 hit points.',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: '4f14aa2b-e6b4-43b7-9155-0259f98de651',
				name: 'Void Tendrils',
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
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '2d6+7 necrotic damage, and the target is knocked prone and dazed (save ends).',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: '2acf75ec-967e-4e19-9e38-490ca71a5a57',
				name: 'Frightful Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Gaze',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'the target is pushed 5 squares and takes a -2 penalty to attack rolls (save ends). First Failed Saving Throw: The target is dazed, immobilized, and takes a -2 penalty to attack rolls (save ends all).',
				damage: 'the target is pushed 5 squares and takes a -2 penalty to attack rolls (save ends)',
				category: 3
			},
			{
				id: '897304c3-a7d7-4ab5-a451-9ca6d19c1aa1',
				name: 'Hideous Laughter',
				action: {
					action: 3,
					trigger: 'recharges when the void lich bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '2d8+7 psychic damage, and the target takes a -5 penalty to all defenses until the end of the void lich’s next turn.',
				damage: '2d8+7 psychic damage',
				category: 5
			},
			{
				id: '04ab5247-6f17-406b-ba43-c63b68423373',
				name: 'Fade to Dusk',
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
				details: 'The void lich becomes insubstantial and invisible until it attacks or until the end of its next turn.',
				damage: '',
				category: 3
			},
			{
				id: '3595b0e7-c7a6-4c0a-8bc3-1595ed5d850f',
				name: 'Phase Step',
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
				details: 'The void lich teleports up to 2 squares.',
				damage: 'The void lich teleports up to 2 squares',
				category: 3
			},
			{
				id: '5af049ab-6fc1-412c-bf2d-fdbdf73c1928',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a void lich is reduced to 0 hit points, its body and possessions dissipate into whips of darkness, but it is not destroyed. It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery, unless the phylactery is also found and destroyed.',
				damage: 'It reappears (along with its possessions) in 1d10 days within 1 square of its phylactery',
				category: 0
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
		immune: 'disease, poison, fear',
		tactics: '',

		info: 'Level 20 Elite Lurker',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: '288fdcb3-3241-4af3-957d-d933ab1578b8',
		name: 'Vortex Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +14',
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
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 67,
		initiative: 11,
		ac: 25,
		fortitude: 21,
		reflex: 23,
		will: 20,
		regeneration: {
			value: 5,
			details: 'if a vortex wraith takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '422f67c6-fe8c-49a2-ab8f-7fcea9540ecd',
				name: 'Vortex',
				keywords: '',
				details: '(Force) aura 3; any enemy that starts its turn within the aura takes 5 force damage and is pulled 1 square.'
			}
		],
		powers: [
			{
				id: 'efa68c4f-2567-4aab-818d-130f67aa1d7c',
				name: 'Spiral Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d6+5 force damage, and the target is slowed until the end of the vortex wraith’s next turn.',
				damage: '2d6+5 force damage',
				category: 1
			},
			{
				id: 'd8728986-44ad-4b75-ab7e-0c963d28ed9a',
				name: 'Spectral Helix',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 1d6+3 force damage, and the target takes ongoing 10 force damage and is immobilized (save ends both). Hit or Miss: The vortex wraith shifts up to 1 square but must end adjacent to the target.',
				damage: '1d6+3 force damage',
				category: 1
			},
			{
				id: '1c59f1da-c310-4cfc-8fac-21d057de67d4',
				name: 'Final Vortex',
				action: null,
				keywords: 'Force, Teleportation',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d6+5 force damage, and the target is teleported up to 5 squares and knocked prone. Miss: Half damage, and the target is not teleported or knocked prone.',
				damage: '2d6+5 force damage',
				category: 0
			},
			{
				id: '973bf903-dc93-4db7-9014-9d6cd9ec39d0',
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
				details: 'The vortex wraith shifts up to 6 squares.',
				damage: 'The vortex wraith shifts up to 6 squares',
				category: 2
			},
			{
				id: '55a22b11-027e-4cba-843c-037b2e7ae621',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a vortex wraith rises as a free-willed vortex wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 9 Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'b42904c0-3dbc-42d6-8116-3be0e7c4bab8',
		name: 'Watchful Ghost',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Unaligned',
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
			score: 20,
			modifier: 5,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 104,
		initiative: 11,
		ac: 31,
		fortitude: 26,
		reflex: 26,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b394e1a-b2ec-497d-acf9-62ed6d95b1e3',
				name: 'Spectral Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+7 psychic damage, and the target is marked (save ends).',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: 'cc18b1bc-a9b2-481b-b9f4-a582f0fdc0a5',
				name: 'Spectral Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 15',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+7 psychic damage, and the target is marked until the end of the watchful ghost’s next turn.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '7aa53cf6-295e-4223-a0ef-71bbb11d71e8',
				name: 'Halting the Marked',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'targets each creature marked by the watchful ghost; the target takes ongoing 10 psychic damage and is immobilized (save ends both). Miss: No ongoing damage, and the target is slowed until the end of the watchful ghost’s next turn instead of immobilized.',
				damage: 'the target takes ongoing 10 psychic damage and is immobilized (save ends both)',
				category: 3
			},
			{
				id: '2503e5ad-f77e-4a26-9f91-0e5506cb0208',
				name: 'Harry the Marked',
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
				details: 'The watchful ghost teleports up to 10 squares into a square adjacent to an enemy it has marked.',
				damage: 'The watchful ghost teleports up to 10 squares into a square adjacent to an enemy it has marked',
				category: 2
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '6ac95737-c184-42a0-879e-41c7a63d6da0',
		name: 'Wisp Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +0; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +8',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 3,
		ac: 13,
		fortitude: 11,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd28e418d-8dc5-4efa-b13e-9fb2ae45566e',
				name: 'Shadow Caress',
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
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '4 necrotic damage, and the target is slowed until the end of the wisp wraith’s next turn.',
				damage: '4 necrotic damage',
				category: 1
			},
			{
				id: '24bc7045-3b9d-42a6-a173-7631e3803247',
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
				details: 'The wisp wraith shifts up to 6 squares.',
				damage: 'The wisp wraith shifts up to 6 squares',
				category: 2
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

		info: 'Level 1 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'a8c3b440-fc7e-47da-a12d-c40fc4e7537b',
		name: 'Wormspawn Praetorian',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 28,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 317,
		initiative: 24,
		ac: 40,
		fortitude: 40,
		reflex: 42,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f8c7c3a6-fcb0-47df-9d49-eeb0249f0394',
				name: 'Clacking Mandible',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '4d8+4 damage.',
				damage: '4d8+4 damage',
				category: 1
			},
			{
				id: '7dd1a660-3600-4b3c-81e6-aa6d3ed0b77e',
				name: 'Swarm-Through',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'The wormspawn praetorian shifts up to 5 squares and can move through enemies’ spaces when doing so. When it enters an enemy’s space, it makes an attack; 3d12+4 poison damage. The wormspawn praetorian can make no more than one attack against a single creature when using this power.',
				damage: '3d12+4 poison damage',
				category: 2
			},
			{
				id: '6fc8d5e5-4fb1-49d1-9cee-b2ccb36e2a11',
				name: 'Swarm Split',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The wormspawn praetorian splits into two Large individuals, the second one occupying a space adjacent to the original creature. Each of the two creatures has hit points equal to one half the original’s current hit points. Both creatures act on the original creature’s initiative count. Effects applied to the original wormspawn praetorian do not apply to either of the individuals after the split occurs. A wormspawn praetorian can’t split if reduced to 0 hit points by the attack that bloodied it.',
				damage: '',
				category: 1
			},
			{
				id: '224bc6ad-eb43-464d-8d7d-08586590c3cd',
				name: 'Squeezing Swarm',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'By altering its shape, a wormspawn praetorian can squeeze as if it were a Tiny creature.',
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
				value: 10
			}
		],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 28 Brute',
		phenotype: 'Large natural beast (undead)'
	},
	{
		id: '5dc2aede-0869-428a-886c-30a211b02f50',
		name: 'Wrath Spirit',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 17,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 111,
		initiative: 11,
		ac: 33,
		fortitude: 27,
		reflex: 29,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'abe82ed8-c02e-4c06-91eb-61fdcb770535',
				name: 'Keening Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d8+7 psychic damage, and the target is marked until the end of the wrath spirit’s next turn.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '19ca94cc-fd2e-45a1-a050-332f1327a75f',
				name: 'Exploding Head',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'area burst 2 within 10',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'The wrath spirit materializes a flaming semblance of its missing head and hurls it; 3d10+7 necrotic damage, and the target is immobilized and marked (save ends both). Miss: Half damage, and the target is marked but not immobilized.',
				damage: '3d10+7 necrotic damage',
				category: 1
			},
			{
				id: '9e59979f-53cb-4f96-880d-9b92cbaa70bb',
				name: 'Burning Challenge',
				action: {
					action: 4,
					trigger: 'when a target marked by the wrath spirit makes an attack that does not include the wrath spirit',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering enemy target takes ongoing 10 psychic damage and is dazed (save ends both).',
				damage: 'the triggering enemy target takes ongoing 10 psychic damage and is dazed (save ends both)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'd64e75f4-6a0d-495e-a208-5b4f40905b7d',
		name: 'Wrathborn',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 7,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 150,
		initiative: 7,
		ac: 25,
		fortitude: 23,
		reflex: 21,
		will: 19,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '31cf7d84-de01-4edd-b222-60cf506c2c28',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d8+2 damage.',
				damage: '2d8+2 damage',
				category: 1
			},
			{
				id: '315f43ae-436e-4fba-adc4-209c769a24f1',
				name: 'Vengeful Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Requires longsword; 1d8+1 damage plus 5 necrotic damage, and the target is pushed 1 square and knocked prone.',
				damage: '1d8+1 damage plus 5 necrotic damage',
				category: 1
			},
			{
				id: '4b7476d5-f221-4a1e-8458-5f6a5ceec829',
				name: 'Pinning Chains',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 3d8+3 necrotic damage. Hit or Miss: Each enemy adjacent to the wrathborn is immobilized until the end of the wrathborn’s next turn.',
				damage: '3d8+3 necrotic damage',
				category: 1
			},
			{
				id: 'b3e9a7b8-17cf-472f-9aec-fc832fd8f9e1',
				name: 'Find the Guilty',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While a wrathborn and its killer are on the same plane, the wrathborn knows the direction and distance to its killer.',
				damage: '',
				category: 0
			},
			{
				id: 'de904b17-3aa4-41cc-b4f0-e482694867ae',
				name: 'Survival Instinct',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A wrathborn gains a +2 bonus to all defenses while bloodied.',
				damage: 'A wrathborn gains a +2 bonus to all defenses while bloodied',
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
		immune: 'disease, poison, fear',
		tactics: '',

		info: 'Level 7 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'df8a41c4-ed58-4571-8b83-e9d6fb93ef07',
		name: 'Wretched Stench Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +15, Stealth +16',
		equipment: '',
		category: 'Ghoul',
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
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 240,
		initiative: 13,
		ac: 29,
		fortitude: 24,
		reflex: 25,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: '1cbeccdc-f674-4bbf-b224-83f8bf0b499b',
				name: 'Nauseating Stench',
				keywords: '',
				details: 'aura 4; any living creature within the aura takes a -2 penalty to attack rolls, skill checks, and ability checks.'
			}
		],
		powers: [
			{
				id: '0f1f5a83-bf31-45c4-8501-978d9bbd4f95',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage, and the target is immobilized (save ends).',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'b4c929fc-ab40-494d-a77a-d200d0b1bbc9',
				name: 'Ghoulish Bite',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Targets a dazed, immobilized, or stunned creature; 1d10+8 damage, and if the target is immobilized, it is instead dazed (save ends), or if the target is dazed, it is instead stunned (save ends).',
				damage: '1d10+8 damage',
				category: 3
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

		info: 'Level 12 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '3f194740-3b3c-4389-bde4-20020053e44a',
		name: 'Yuan-Ti Abomination Mummy Lord',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'reptile, undead',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10; darkvision',
		movement: '7, climb 7',
		alignment: 'Evil',
		languages: 'Draconic',
		skills: 'Endurance +15, Intimidate +14, Stealth +14',
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
		hp: 280,
		initiative: 13,
		ac: 32,
		fortitude: 32,
		reflex: 28,
		will: 31,
		regeneration: {
			value: 10,
			details: 'if the yuan-ti mummy lord takes fire damage, regeneration doesn’t function on its next turn'
		},
		auras: [
			{
				id: 'a4f02365-51cd-4075-a1be-2727a6b6b34d',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; enemies within the aura receive a -2 penalty to attack rolls against the mummy lord.'
			}
		],
		powers: [
			{
				id: '03113c33-5806-4848-92eb-7289c31c9763',
				name: 'Grasping Coils',
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
					defence: 2
				},
				description: '',
				details: '1d10+5 damage, and the target is pulled 1 square and grabbed. The yuan-ti mummy lord can grab only one creature at a time.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '5135e9e1-0fa9-430c-875e-fc27f65fd266',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'poison',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'Grabbed target only; 1d12+5 poison damage, and ongoing 10 poison damage (save ends).',
				damage: '1d12+5 poison damage',
				category: 1
			},
			{
				id: '1e60a7fc-3f9b-4ff8-8c11-15a066cd82e1',
				name: 'Mummy’s Curse',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'all enemies within the burst contract level 14 mummy rot (Endurance improve DC 24, maintain DC 19, worsen DC 18).',
				damage: 'all enemies within the burst contract level 14 mummy rot (Endurance improve DC 24',
				category: 0
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

		info: 'Level 14 Elite Controller (L)',
		phenotype: 'Large natural humanoid (reptile, undead)'
	},
	{
		id: 'e2c9cab4-6a89-41fd-afbe-b0c3a2abbbc4',
		name: 'Zombie Throng',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'swarm, undead',
		level: 9,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 121,
		initiative: 2,
		ac: 21,
		fortitude: 24,
		reflex: 18,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: 'e6dc752f-121f-4af0-a21d-bb51d99a48d9',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the zombie throng makes a mob of crushing blows attack as a free action against any enemy that starts its turn within the aura. While the zombie throng is bloodied, it makes a zombie grab attack instead.'
			}
		],
		powers: [
			{
				id: 'e21063bc-979d-42e5-9e24-683122211c43',
				name: 'Mob of Crushing Blows',
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
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '10516446-3725-4f5b-ab75-19669e53539e',
				name: 'Zombie Grab',
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
					defence: 1
				},
				description: '',
				details: 'the target is grabbed. Attempts to escape the zombie throng’s grab take a -5 penalty.',
				damage: 'Attempts to escape the zombie throng’s grab take a -5 penalty',
				category: 1
			},
			{
				id: '3c078294-5b4e-4e39-bfbb-9bf3b5a8c8cc',
				name: 'Zombie Mess Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is grabbed. Attempts to escape the zombie throng’s grab take a -5 penalty.',
				damage: 'Attempts to escape the zombie throng’s grab take a -5 penalty',
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
		resist: 'takes half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks, 20 against critical hits',
		immune: 'disease, poison, fear',
		tactics: '',

		info: 'Level 9 Brute',
		phenotype: 'Huge natural animate (swarm, undead)'
	},
	{
		id: '5dc7f17f-dc0a-4f56-8560-8acf4204a7cb',
		name: 'Giant Archerfish',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: 'aquatic',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Low-light vision',
		movement: '1 (clumsy); swim 6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Perception +7',
		equipment: '',
		category: 'Fish',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 1,
			modifier: -5,
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
		hp: 45,
		initiative: 6,
		ac: 18,
		fortitude: 16,
		reflex: 18,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'baa18389-3e4a-495d-868a-16b7c0c45ea5',
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
				range: 'Melee 1',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Hit: 2d8 +2 damage',
				damage: '2d8 +2 damage',
				category: 1
			},
			{
				id: '46acc92f-1936-45e6-8104-845ac3bdaaa4',
				name: 'Water Bullet',
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
					bonus: 9,
					defence: 2
				},
				description: '',
				details: 'Hit: 2d6 +5 damage, and the giant archerfish slides the target 1 square.',
				damage: '2d6 +5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Small natural beast (aquatic)'
	},
	{
		id: '53ac1359-54c3-4777-a186-f584a5166a3a',
		name: 'Bax',
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
		senses: 'Perception +7',
		movement: '5',
		alignment: 'Good',
		languages: 'Common, Draconic',
		skills: 'Athletics +14, Endurance +11, History +8, Intimidate +15',
		equipment: 'heavy shield; potion of healing; scale armor; vicious weapon; flail',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 115,
		initiative: 9,
		ac: 32,
		fortitude: 26,
		reflex: 26,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9c506af2-3d5e-4831-9736-d9215480f0db',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+19 while bloodied)2d10+12 damage (crit 2d12+32).',
				damage: '(+19 while bloodied)2d10+12 damage (crit 2d12+32)',
				category: 1
			},
			{
				id: '6aac4d70-c9f3-4b16-895d-61cbce3aecd4',
				name: 'Tide of Iron',
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
				details: '(+19 while bloodied)2d10+12 damage (crit 2d12+32), and the target is pushed 1 square if it is Large or smaller. Bax can shift into the space the creature occupied.',
				damage: '(+19 while bloodied)2d10+12 damage (crit 2d12+32)',
				category: 1
			},
			{
				id: '5946ee85-08d8-46eb-8b1d-1a4ef703982a',
				name: 'Sweeping Blow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '(+21 while bloodied)1d10+12 damage (crit 2d12+22).',
				damage: '(+21 while bloodied)1d10+12 damage (crit 2d12+22)',
				category: 1
			},
			{
				id: 'c2087631-5abe-46c6-a3df-c3827a9274f5',
				name: 'Come And Get It',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: 'enemies in the burst are pulled 2 squares, then Bax makes an attack against any that are adjacent to him: close burst 1',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+19 while bloodied)1d10+12 damage (crit 2d12+22).',
				damage: '(+19 while bloodied)1d10+12 damage (crit 2d12+22)',
				category: 1
			},
			{
				id: '6d727dbf-63d6-40f3-aeba-7884da03863e',
				name: 'Stalwart Guard',
				action: {
					action: 3,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Martial',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'allies in the burst gain a +2 shield bonus to AC and Reflex until the end of the encounter.',
				damage: 'allies in the burst gain a +2 shield bonus to AC and Reflex until the end of the encounter',
				category: 5
			},
			{
				id: '52a6971f-c098-4013-8c8d-a41fc6700946',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '(+16 while bloodied)2d10+2 cold damage.',
				damage: '(+16 while bloodied)2d10+2 cold damage',
				category: 3
			},
			{
				id: '1be24402-bf5e-4ae3-a342-d37f1eb0b380',
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
		id: '562b78d4-4ea5-4f56-b863-d81521e0ca9a',
		name: 'Blackfire Flameskull',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 10,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: 'fly 10 (hover)',
		alignment: 'Unaligned',
		languages: 'Common, one other',
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
		hp: 82,
		initiative: 7,
		ac: 23,
		fortitude: 20,
		reflex: 25,
		will: 23,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '2e7b7127-99b6-41ae-8eb1-7bba57842165',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Reach 0; 1d4 damage plus 1d8 fire damage.',
				damage: '1d4 damage plus 1d8 fire damage',
				category: 1
			},
			{
				id: '663f4d95-d515-47aa-888f-a3f77f89db62',
				name: 'Blackfire Ray',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '2d6+6 fire damage, plus target is blinded (save ends).',
				damage: '2d6+6 fire damage',
				category: 1
			},
			{
				id: 'd0d34314-0ab6-45ed-ad83-b4ab04197149',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '3d6+6 fire damage. Miss: Half damage. The flameskull can exclude two allies from the effect.',
				damage: '3d6+6 fire damage',
				category: 1
			},
			{
				id: '0f9db2e3-ac76-4fb7-9630-3ff3a7659b87',
				name: 'Mage Hand',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Conjuration',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As the wizard power mage hand.',
				damage: '',
				category: 3
			},
			{
				id: '54dc21b9-60e0-436e-89a8-ff5e70620de0',
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

		info: 'Level 10 Artillery',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: '00578ffa-047b-4570-a0fe-8f7855d6a464',
		name: 'Blightborn Demonthorn',
		details: '',
		size: 3,
		origin: 2,
		type: 1,
		keywords: 'plant',
		level: 11,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '4',
		alignment: 'Chaotic evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
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
		hp: 110,
		initiative: 9,
		ac: 25,
		fortitude: 21,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '19378dc3-4076-4923-83a6-391aeb97f2c9',
				name: 'Tangle Roots',
				keywords: '',
				details: 'aura 4; all nonplant creatures treat the area as difficult terrain'
			}
		],
		powers: [
			{
				id: '2588512c-1783-4928-b800-40c99141f430',
				name: 'Vine Slash',
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
				details: '2d4+6 damage.',
				damage: '2d4+6 damage',
				category: 1
			},
			{
				id: '68d30d3b-28f9-48a9-bf96-368eeab9f5f1',
				name: 'Seed Pods',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '1d8+4 damage, plus ongoing 5 damage and all creatures have concealment against the target (save ends both).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '04545531-3e09-4423-875d-7f94f20f345d',
				name: 'Root Grab',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'Make an attack against every creature without forest walk in a square of tangling roots; the target is restrained (save ends). The blightborn can use this power only once per turn.',
				damage: '',
				category: 3
			},
			{
				id: '522bba31-d212-4263-b1cd-3763810ec6fc',
				name: 'Expansive Roots',
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
				details: 'Create two squares of tangling roots adjacent to other tangling roots.',
				damage: '',
				category: 3
			},
			{
				id: '91f60e3f-5801-4224-ac03-50c407a96202',
				name: 'Root Move',
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
				details: 'The mandrake teleports to any space where at least one square of its space occupies a square that has tangling roots in it.',
				damage: '',
				category: 2
			},
			{
				id: 'b4acc743-d500-4cdd-ac07-4be0edfcd1dd',
				name: 'Dying Roots',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the demonthorn mandrake is reduced to 0 hit points or fewer, all spaces affected by its tangling roots remain difficult terrain until the end of the encounter.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Controller',
		phenotype: 'Large fey beast (plant)'
	},
	{
		id: 'e3422448-5ee4-477a-bc0a-5ed3ca608df4',
		name: 'Blightborn Thorn Blight',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'plant',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14',
		movement: '8 (forest walk), climb 5',
		alignment: 'Chaotic evil',
		languages: 'Elven',
		skills: 'Stealth +16',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 5,
			modifier: -3,
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
		hp: 1,
		initiative: 11,
		ac: 25,
		fortitude: 21,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'efcd9d2f-daaa-4396-972b-13e2a006b625',
				name: 'Thorns',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '4 poison damage (5 poison damage with combat advantage).',
				damage: '4 poison damage (5 poison damage with combat advantage)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium fey humanoid (plant)'
	},
	{
		id: '70bfa832-2af6-4bed-9aff-53bd1440ea3b',
		name: 'Blightborn Thorndrake',
		details: '',
		size: 3,
		origin: 2,
		type: 1,
		keywords: 'plant',
		level: 11,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Chaotic evil',
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
			score: 5,
			modifier: -3,
			cost: 0
		},
		hp: 138,
		initiative: 8,
		ac: 23,
		fortitude: 24,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '77486ed1-b67f-4a99-8cde-bd983f382900',
				name: 'Thorn Claw',
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
				details: 'Reach 2; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '2f979c55-1a6b-4a4b-998b-df9e9664ded5',
				name: 'Poison Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '3d6+5 poison damage, plus ongoing 5 poison damage and the target is immobilized (save ends both).',
				damage: '3d6+5 poison damage',
				category: 1
			},
			{
				id: 'ce347c73-e2f7-409c-aa29-166afdaf0e95',
				name: 'Tactical Shift',
				action: {
					action: 4,
					trigger: 'when the blightborn hits a target with its poison bite',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blightborn can shift 1 square.',
				damage: 'The blightborn can shift 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Brute',
		phenotype: 'Large fey beast (plant)'
	},
	{
		id: '9b86a4c4-165a-476e-a50d-df14ed836fb0',
		name: 'Blightborn Troglodyte',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'plant',
		level: 10,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Draconic',
		skills: 'Nature +13',
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
			score: 8,
			modifier: -1,
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 105,
		initiative: 4,
		ac: 23,
		fortitude: 21,
		reflex: 20,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '5639c9f7-00c6-4794-8b7e-e92cbd9368c2',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 2; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '939d5795-f0a1-4eaf-a072-296d2035ec05',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'd77c08a5-0163-42da-a35d-8e749da89abf',
				name: 'Acid Lance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '2d4+6 acid damage, plus 5 acid damage to each creature adjacent to the target.',
				damage: '2d4+6 acid damage',
				category: 1
			},
			{
				id: '7d8ec967-450f-446b-aae2-dbe510611af8',
				name: 'Black Roots',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'Restrained (save ends). Aftereffect: Ongoing 10 necrotic damage and the target can’t move closer to the blightborn (save ends both).',
				damage: 'ongoing 10 necrotic damage and the target can’t move closer to the blightborn (save ends both)',
				category: 1
			},
			{
				id: '14bf1424-33f8-4103-ab7f-2a64e8b048d3',
				name: 'Instinctual Shift',
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
				details: 'All allies within 20 squares of the blightborn can shift 2.',
				damage: 'All allies within 20 squares of the blightborn can shift 2',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Controller (L)',
		phenotype: 'Medium fey humanoid (plant)'
	},
	{
		id: '059ec3a6-f019-4b34-a6cb-7842e1a961d0',
		name: 'Blightborn Twig Blight',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: 'plant',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6',
		movement: '7 (forest walk), climb 5',
		alignment: 'Chaotic evil',
		languages: 'Elven',
		skills: 'Stealth +16',
		equipment: '',
		category: '',
		strength: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		constitution: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 3,
		ac: 15,
		fortitude: 11,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '378e01a7-0b75-42e9-a433-8116fe198789',
				name: 'Claw',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '2 poison damage (3 poison damage with combat advantage).',
				damage: '2 poison damage (3 poison damage with combat advantage)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Small fey humanoid (plant)'
	},
	{
		id: '24b7488c-b596-4ff4-9102-74116ce13304',
		name: 'Boneshard Troll Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 11,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'scimitar',
		category: '',
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
		hp: 137,
		initiative: 8,
		ac: 23,
		fortitude: 22,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b3035b23-e39f-48f5-b503-f9fc3d3ddfdd',
				name: 'Scimitar',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage (crit 2d8 + 22)plus 10 necrotic damage. If the troll skeleton takes acid or fire damage, it does not deal necrotic damage with this attack until the end of its next turn.',
				damage: '2d8+6 damage (crit 2d8 + 22)plus 10 necrotic damage',
				category: 1
			},
			{
				id: '315a7352-cf18-4826-ae71-7faa02722a4b',
				name: 'Boneshard',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '79192dd4-5f0b-4ead-a10c-42ec5e1e3f93',
				name: 'Boneshard Burst',
				action: {
					action: 4,
					trigger: 'when first bloodied and again when the boneshard skeleton is reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '2d6+6 necrotic damage.',
				damage: '2d6+6 necrotic damage',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '7ff05d1f-d22d-4112-bfe8-691b37a73e02',
		name: 'Briar Hag',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '7 (forest walk)',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +13, Intimidate +14, Nature +14',
		equipment: '',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 123,
		initiative: 11,
		ac: 26,
		fortitude: 23,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '2398117f-17ee-44ca-8620-006ecf5dda2f',
				name: 'Feverish Presence',
				keywords: '',
				details: 'aura 3; bloodied enemies in the aura are weakened.'
			}
		],
		powers: [
			{
				id: 'ef3d4bdb-da98-4b2f-9f1f-7b4344bbef81',
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
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'f8e841e6-38b4-4bac-bd43-3acf7a47a548',
				name: 'Rake the Eyes',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, and the target is blinded until the end of the briar hag’s next turn. The briar hag shifts 2 squares before or after making this attack.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '91c37048-46bc-4ed2-8637-d77161bb2ae2',
				name: 'Call Briar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Conjuration, Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d4+5 damage and the target is immobilized (save ends). This attack’s area becomes a zone of difficult terrain until the end of the encounter. Any creature that enters or starts its turn in the zone takes 1d4 damage. A briar hag is immune to its own briars.',
				damage: '2d4+5 damage and the target is immobilized (save ends)',
				category: 1
			},
			{
				id: '628c9d83-45b2-431b-ab3e-faad4e0b15bd',
				name: 'Curse of Thorns',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '3d4+5 damage and the target is restrained (save ends).',
				damage: '3d4+5 damage and the target is restrained (save ends)',
				category: 1
			},
			{
				id: '40503e91-dd39-450f-a323-9502e6219cb9',
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
				details: 'A briar hag can alter its physical form to appear as a young human woman or an old crone.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '32e6869c-c0ba-4073-80dd-c48290d3149d',
		name: 'Displacer Beast Nightmare',
		details: '',
		size: 3,
		origin: 2,
		type: 1,
		keywords: '',
		level: 15,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '12',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +14',
		equipment: '',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 6,
			modifier: -2,
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
		hp: 292,
		initiative: 13,
		ac: 29,
		fortitude: 26,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b0054de-9763-4735-a457-a96ea85ee1ca',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '6daae1ef-3e4b-4632-be62-8807e1cdde49',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '071533fb-a19f-4dee-8db8-20e38245868c',
				name: 'Beast’s Fury',
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
				details: 'Requires combat advantage; the displacer beast makes two tentacle attacks and two bite attacks against a single target.',
				damage: '',
				category: 1
			},
			{
				id: 'e837bdcc-2e9a-42ce-967c-9248c5e19c14',
				name: 'Nightmare Rend',
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
				details: 'The displacer beast nightmare makes two bite attacks against a single target within reach. If the two attacks hit, the target takes an additional 1d10 + 7 damage and the target is dazed (save ends).',
				damage: 'the target takes an additional 1d10 + 7 damage and the target is dazed (save ends)',
				category: 1
			},
			{
				id: '5413f8b8-b05a-4c32-885d-0c674cde5ca2',
				name: 'Nightmare Tentacles',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d8+6 damage and the target is pushed 1 square and knocked prone.',
				damage: '2d8+6 damage and the target is pushed 1 square and knocked prone',
				category: 1
			},
			{
				id: '9368eadc-6c89-41c3-95b0-7b0bbcf9fd49',
				name: 'Displacement',
				action: null,
				keywords: 'Illusion',
				condition: '',
				range: 'All melee and ranged attacks have a 50% chance to miss the displacer beast. The effect ends when the displacer beast is hit by an attack, but it recharges as soon as the displacer beast moves 2 or more squares on its turn. Critical hits ignore displacement.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '45384364-e340-489b-98eb-c2fb8f400a2a',
				name: 'Shifting Tactics',
				action: {
					action: 7,
					trigger: 'when an attack misses the displacer beast because of its displacement',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The displacer beast shifts 2 squares.',
				damage: 'The displacer beast shifts 2 squares',
				category: 5
			},
			{
				id: '75339042-ebe4-4bb5-a7d9-29ef7cc34d05',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The displacer beast can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Skirmisher',
		phenotype: 'Large fey beast'
	},
	{
		id: 'f8bb9e86-48cb-419d-9ee4-004a7d8baac2',
		name: 'Fomorian Dark Initiate',
		details: '',
		size: 4,
		origin: 2,
		type: 2,
		keywords: 'giant',
		level: 13,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +13; truesight 6',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Insight +13, Stealth +12',
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
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 650,
		initiative: 7,
		ac: 29,
		fortitude: 27,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '723b077d-a5fc-4159-bf64-f5c578246bf9',
				name: 'Necrotic Staff',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 1d10+7 necrotic damage, and the target is pushed 1 square.',
				damage: '1d10+7 necrotic damage',
				category: 1
			},
			{
				id: '4aa61e5a-d84d-47a7-8669-48c45ea0b99a',
				name: 'Evil Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'and the dark initiate is invisible to the target until the start of the dark initiate’s next turn. If the dark initiate uses this power against a new target, the previous target is no longer affected.',
				damage: '',
				category: 3
			},
			{
				id: '2345b009-fbec-43eb-afef-a9eeb14d6a87',
				name: 'Black Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d8+7 fire and necrotic damage.',
				damage: '2d8+7 fire and necrotic damage',
				category: 1
			},
			{
				id: '8ecf5449-ceee-4eee-9cb4-f46123e5ca6c',
				name: 'Mind Wrack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '2d6+7 psychic damage, and the target is dazed (save ends).',
				damage: '2d6+7 psychic damage',
				category: 1
			},
			{
				id: '357eada6-023a-4734-895d-e777cb8b2193',
				name: 'Double Spell',
				action: {
					action: 1,
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
				details: 'The dark initiate makes a black flame attack and a mind wrack attack.',
				damage: '',
				category: 1
			},
			{
				id: 'bcecd381-633d-47a3-a6ec-f166d4310297',
				name: 'Dark Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '1d10+7 necrotic damage and the target is immobilized (save ends). The dark initiate teleports 10 squares, and can teleport creatures in the burst into a square the dark initiate occupied before teleporting.',
				damage: '1d10+7 necrotic damage and the target is immobilized (save ends)',
				category: 2
			},
			{
				id: 'aa3a683b-ea8f-42bf-9771-96e395602ec7',
				name: 'Bloodied Invisibility',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dark initiate teleports 10 squares and becomes invisible until the end of its next turn.',
				damage: 'The dark initiate teleports 10 squares and becomes invisible until the end of its next turn',
				category: 5
			},
			{
				id: '33ba71b0-d214-487f-ae8b-fb4119cdca34',
				name: 'Shadow Gaze',
				action: {
					action: 4,
					trigger: 'when damaged by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation, Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attacker is teleported 3 squares and takes ongoing 5 necrotic damage (save ends).',
				damage: 'the triggering attacker is teleported 3 squares and takes ongoing 5 necrotic damage (save ends)',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
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

		info: 'Level 13 Solo Controller',
		phenotype: 'Huge fey humanoid (giant)'
	},
	{
		id: '234c38bc-4c4a-4dfe-9d1f-946ef61014d4',
		name: 'Fomorian Dark Master',
		details: '',
		size: 4,
		origin: 2,
		type: 2,
		keywords: 'giant',
		level: 19,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +16; truesight 6',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Insight +13, Stealth +12',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 890,
		initiative: 9,
		ac: 35,
		fortitude: 33,
		reflex: 30,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '28288745-d4c9-44f1-ae66-860e815f0d7c',
				name: 'Necrotic Staff',
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
					bonus: 23,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 1d12+9 necrotic damage, and the target is pushed 1 square.',
				damage: '1d12+9 necrotic damage',
				category: 1
			},
			{
				id: '9dc728c5-8750-42a8-9248-ba12c4236728',
				name: 'Evil Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'and the dark initiate is invisible to the target until the start of the dark initiate’s next turn. If the dark initiate uses this power against a new target, the previous target is no longer affected.',
				damage: '',
				category: 3
			},
			{
				id: 'db222919-c0e1-411b-adc4-f105c1f1a871',
				name: 'Black Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '3d8+7 fire and necrotic damage.',
				damage: '3d8+7 fire and necrotic damage',
				category: 1
			},
			{
				id: '0e73d456-eed1-413b-bafa-8def0384a126',
				name: 'Mind Wrack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '3d6+7 psychic damage, and the target is dazed (save ends).',
				damage: '3d6+7 psychic damage',
				category: 1
			},
			{
				id: '5f968e86-3915-4824-bb66-2e1fdf4ade25',
				name: 'Double Spell',
				action: {
					action: 1,
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
				details: 'The dark initiate makes a black flame attack and a mind wrack attack.',
				damage: '',
				category: 1
			},
			{
				id: '836d1141-2a21-444d-b918-8267fc344df7',
				name: 'Dark Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: '1d12+9 necrotic damage and the target is immobilized (save ends). The dark initiate teleports 10 squares, and can teleport creatures in the burst into a square the dark initiate occupied before teleporting.',
				damage: '1d12+9 necrotic damage and the target is immobilized (save ends)',
				category: 2
			},
			{
				id: '2cf8aa2d-661a-4be5-8aec-2aeff0b49118',
				name: 'Bloodied Invisibility',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dark master teleports 10 squares and becomes invisible until the end of its next turn.',
				damage: 'The dark master teleports 10 squares and becomes invisible until the end of its next turn',
				category: 5
			},
			{
				id: '0eec2b1c-b638-4ea9-978e-6de2cc92a49b',
				name: 'Shadow Gaze',
				action: {
					action: 4,
					trigger: 'when damaged by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation, Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attacker is teleported 3 squares and takes ongoing 10 necrotic damage (save ends).',
				damage: 'the triggering attacker is teleported 3 squares and takes ongoing 10 necrotic damage (save ends)',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
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

		info: 'Level 19 Solo Controller',
		phenotype: 'Huge fey humanoid (giant)'
	},
	{
		id: 'f2d79502-2412-493a-b9ea-ecebbe563cb5',
		name: 'Ghost Troll Devourer',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: 'fly 7 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 82,
		initiative: 14,
		ac: 27,
		fortitude: 27,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '42fda379-1afa-4096-a776-0f63f928bc10',
				name: 'Spirit Bite',
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
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 1d8+5 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '48dc2290-8eb8-4c06-a2b0-ca5b7b1a9977',
				name: 'Entrapping Jaws',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage, plus the target is restrained (save ends) and the ghost troll devourer gains +2 to all defenses. The restrained condition and defense bonus end automatically when the ghost troll is no longer adjacent to the target.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '98ebdee5-f544-4161-812f-85e7de4f37f7',
				name: 'Frenzied Jaws',
				action: {
					action: 7,
					trigger: 'when the ghost troll’s attack bloodied an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ghost troll recharges entrapping jaws.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Lurker',
		phenotype: 'Large shadow humanoid'
	},
	{
		id: '1268af63-b03d-4c15-aaa3-735f20531b97',
		name: 'Ghost Troll Render',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: 'fly 7 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: '',
		equipment: '',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 121,
		initiative: 10,
		ac: 25,
		fortitude: 27,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '50cdf568-c0c3-4195-9cf9-44b7de0a3490',
				name: 'Spirit Claw',
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
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d10+7 damage.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: '72f57746-677e-4ccc-a715-1befaa6c830a',
				name: 'Terror Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'Reach 2; bloodied target only; 3d6+3 psychic damage and the target is slowed (save ends). Failed Save: The target is unconscious (save ends). If the target takes damage, it is no longer unconscious.',
				damage: '3d6+3 psychic damage and the target is slowed (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Brute',
		phenotype: 'Large shadow humanoid'
	},
	{
		id: 'cefe0921-fd2a-496b-a500-a29ea33d7eb7',
		name: 'Kasszt',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 9,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +13; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Draconic',
		skills: 'Dungeoneering +13, Endurance +14, Religion +9',
		equipment: 'quarterstaff',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 202,
		initiative: 5,
		ac: 25,
		fortitude: 23,
		reflex: 19,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: 'e9aa7592-e9a3-49b6-a850-a5e31f476466',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 1; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '52536fe8-1fcb-4f0c-b297-cff95998e22a',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '7913496d-2754-4b88-8435-ecd2b6159bb0',
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
				details: '1d4+2 damage.',
				damage: '1d4+2 damage',
				category: 1
			},
			{
				id: '7712aec6-648f-44ac-9580-eb5f16e18f5f',
				name: 'Poison Ray',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '1d6+5 poison damage, and the target is weakened (save ends).',
				damage: '1d6+5 poison damage',
				category: 1
			},
			{
				id: '4ff94a2b-8d2c-4583-9c8e-b59550abcb01',
				name: 'Double Ray',
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
				attack: null,
				description: '',
				details: 'Kasszt makes two poison ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: '1903ec66-82a7-4a41-90c9-3694731c13e7',
				name: 'Cavern Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'the target takes ongoing 5 necrotic damage and is slowed (save ends both).',
				damage: 'the target takes ongoing 5 necrotic damage and is slowed (save ends both)',
				category: 1
			},
			{
				id: '76d6e5ef-def3-4a59-b843-60e39621dd1e',
				name: 'Tunnel Grace',
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
				details: 'all allies in the burst gain +5 speed until the end of the troglodyte shaman’s next turn.',
				damage: 'all allies in the burst gain +5 speed until the end of the troglodyte shaman’s next turn',
				category: 3
			},
			{
				id: '3db6263d-fdca-4f65-9904-7768f9013119',
				name: 'Chant of Renewal',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
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

		info: 'Level 9 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: '68caf7b6-5eaa-4493-bfc3-d227c9ef29ec',
		name: 'Marrowmaw Mauler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 8,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: 'Athletics +13, Endurance +13',
		equipment: 'greatclub; javelin',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 90,
		initiative: 6,
		ac: 24,
		fortitude: 23,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'edbe7bcf-d102-44e3-addb-1ec264eb236f',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 1; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '9b296d63-efe6-4970-b3ed-759bad57689d',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '2d4+5 damage, and the target is marked until the end of the troglodyte mauler’s next turn.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '8ce95290-fc97-4c61-be15-12ba9d09b736',
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
				details: '1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '39f49e28-c803-4483-b044-550f9359b876',
				name: 'Bite',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 1d6+5 damage, and until the end of the troglodyte mauler’s next turn, healing on the target restores only half the total amount.',
				damage: '1d6+5 damage',
				category: 3
			},
			{
				id: '2ba8455b-bc41-4dbf-8635-95191fd84671',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Soldier',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: 'a3f18bc4-8118-4259-be84-e71609dafaf8',
		name: 'Nothic Gazer',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision, truesight 10',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Deep Speech',
		skills: 'Stealth +13',
		equipment: '',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 91,
		initiative: 8,
		ac: 23,
		fortitude: 24,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '10d2c0c4-d8a9-4b4e-972a-3ddbe72757ed',
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
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '41cf6ab0-1cff-4ba9-ade2-9eb6f2c186e3',
				name: 'Rotting Gaze',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '1d12+5 necrotic damage, plus the target is slowed and takes a -2 penalty to attack rolls (save ends both). The nothic gazer loses this power while blinded.',
				damage: '1d12+5 necrotic damage',
				category: 1
			},
			{
				id: '4d92de3f-a053-4d49-a2d8-2f82a6a88cf3',
				name: 'Retaliate',
				action: {
					action: 4,
					trigger: 'when hit by a melee or close attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The nothic shifts and makes a claw attack or a rotting gaze attack against the triggering attacker.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Artillery',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'a4f6d7ae-496f-4dd3-bf98-9e4d75f9c918',
		name: 'Nothic Stalker',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision, truesight 10',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Deep Speech',
		skills: 'Stealth +14',
		equipment: '',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 115,
		initiative: 11,
		ac: 25,
		fortitude: 23,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bd78013c-fc80-4dd6-a675-da3ef1d917a6',
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
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '9e272be1-1024-4c41-a4b0-fb9526d31c44',
				name: 'Dazing Gaze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '1d8+5 necrotic damage, plus the target is dazed until the end of the nothic stalker’s next turn. The nothic stalker loses this power while blinded.',
				damage: '1d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'a63e9e6a-ea62-4b40-8241-fb32a8929999',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'When the nothic stalker has combat advantage, its melee attacks deal an extra 2d6 damage on a hit.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '819cd3ad-6842-40f1-9784-7c84766fcfd1',
				name: 'Retaliate',
				action: {
					action: 4,
					trigger: 'when hit by a melee or close attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The nothic shifts and makes a claw attack or a dazing gaze attack against the triggering attacker.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '916def62-05ad-499f-8cde-a285a39f4745',
		name: 'Skalmad of the Cauldron',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +20, Endurance +18, Intimidate +15',
		equipment: 'greataxe; hide armor',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 262,
		initiative: 13,
		ac: 31,
		fortitude: 29,
		reflex: 25,
		will: 24,
		regeneration: {
			value: 10,
			details: 'if Skalmad takes acid or fire damage, regeneration does not function until the end of his next turn'
		},
		auras: [
			{
				id: '629f5c1e-0137-4a70-94f7-1aae0e4225a4',
				name: 'Aura of Rage',
				keywords: '',
				details: 'aura 5; bloodied allies within the aura gain +2 to attack rolls.'
			}
		],
		powers: [
			{
				id: '67e0abb5-0803-499d-8a0f-ba9e140bc7e6',
				name: 'Greataxe',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+8 damage.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'c04c2815-6449-4198-bc37-16f52ef1d719',
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
				details: 'Reach 2; 1d10+8 damage.',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: '90698219-99a9-4a31-a1f6-4dc7c6a54196',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when skalmad’s attack bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Skalmad makes a greataxe or claw attack.',
				damage: '',
				category: 5
			},
			{
				id: 'b001e126-dc52-4a1f-a54c-0e97b818b88b',
				name: 'Toppling Swing',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'close blast 2',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Requires greataxe; 2d6+8 damage, and the target is knocked prone.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'dba94ead-2176-4b43-9937-6f65cd11c643',
				name: 'Baleful Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged sight',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'the target is slowed and cannot teleport (save ends both). The effect ends if Skalmad uses baleful eye on another target.',
				damage: '',
				category: 3
			},
			{
				id: '98013993-37cc-4ad5-bbcd-586908ef41fc',
				name: 'Smoldering Eye',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '1d10+7 fire damage, plus ongoing 10 fire damage and a -2 penalty to attack rolls (save ends both). Skalmad takes 10 psychic damage when he uses this power.',
				damage: '1d10+7 fire damage',
				category: 1
			},
			{
				id: 'cdf5db87-caca-48d6-83b1-69fe10fd7ea0',
				name: 'Cauldron’s Wrath',
				action: {
					action: 4,
					trigger: 'when skalmad is hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes ongoing 10 fire damage (save ends).',
				damage: 'the attacker takes ongoing 10 fire damage (save ends)',
				category: 5
			},
			{
				id: '6415ea99-93e2-4f27-b490-f3024be1c0a7',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Soldier',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '13196fef-2a65-43e6-856d-20ac81084cc4',
		name: 'Skalmad the Troll King',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +19, Endurance +17, Intimidate +14',
		equipment: 'greataxe; hide armor',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 240,
		initiative: 12,
		ac: 29,
		fortitude: 27,
		reflex: 23,
		will: 22,
		regeneration: {
			value: 10,
			details: 'if Skalmad takes acid or fire damage, regeneration does not function until the end of his next turn'
		},
		auras: [
			{
				id: '4c966675-0a8e-4066-8efc-7686433b90c9',
				name: 'Aura of Rage',
				keywords: '',
				details: 'aura 5; bloodied allies within the aura gain +2 to attack rolls.'
			}
		],
		powers: [
			{
				id: 'db209048-e808-42f9-8d9d-cbf2ce5328db',
				name: 'Greataxe',
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
				details: 'Reach 2; 2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'b2267780-b1cb-4258-a535-145e207f5de8',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+7 damage.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: 'e48d9238-0b2a-4021-8f66-3dbf29cb7787',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when skalmad’s attack bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Skalmad makes a greataxe or claw attack.',
				damage: '',
				category: 5
			},
			{
				id: 'a095882d-176d-4b69-bc07-9081713860ee',
				name: 'Toppling Swing',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'close blast 2',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Requires greataxe; 2d6+7 damage, and the target is knocked prone.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'f634af54-2cb0-40f2-8db4-083430024d1e',
				name: 'Baleful Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged sight',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'the target is slowed and cannot teleport (save ends both). The effect ends if Skalmad uses baleful eye on another target.',
				damage: '',
				category: 3
			},
			{
				id: '0d3bd102-505d-49cc-acaa-0f7b532afc3d',
				name: 'Smoldering Eye',
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
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '3d10+6 fire damage, plus ongoing 10 fire damage and a -2 penalty to attack rolls (save ends both). Skalmad takes 10 psychic damage when he uses this power.',
				damage: '3d10+6 fire damage',
				category: 1
			},
			{
				id: '644e1c13-615e-486a-ad00-c88f975867b5',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Soldier',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '6370bcb7-c47b-49ec-b833-cee634af5b83',
		name: 'Troll Worgmaster',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '9',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Giant',
		skills: 'Athletics +16, Endurance +15, Nature +13',
		equipment: 'leather armor; longspear',
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
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 102,
		initiative: 13,
		ac: 27,
		fortitude: 24,
		reflex: 24,
		will: 21,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '2c364013-4fa9-4ffd-a055-d120c711c009',
				name: 'Longspear',
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
				details: 'Reach 3; 1d12+5 damage.',
				damage: '1d12+5 damage',
				category: 1
			},
			{
				id: '1c39ea85-4860-4dc3-bc0d-b6658e80fd4a',
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
				details: 'Reach 2; 2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '82e15995-ea6d-4761-85a9-d61e890f3973',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when the troll’s attack bloodied an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The troll makes a longspear or claw attack.',
				damage: '',
				category: 5
			},
			{
				id: '117bb267-dbcc-4e7d-b368-70f621229761',
				name: 'Lead the Pack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll hits with a attack, each worg ally within 5 squares of it can shift 2 squares.',
				damage: 'each worg ally within 5 squares of it can shift 2 squares',
				category: 0
			},
			{
				id: 'ef27b1c1-0a7e-4f94-8490-125d700b3b56',
				name: 'Assisted Withdrawal',
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
				details: 'If the troll is adjacent to a worg, the troll can shift 4 squares. The worg shifts into the space the troll vacates.',
				damage: 'the troll can shift 4 squares',
				category: 2
			},
			{
				id: 'b6792661-cc8e-4921-9375-94e4cecba7e8',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Skirmisher (L)',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '6966e465-4c84-4099-8335-4fa430788fb1',
		name: 'Warren Troll',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +16, Endurance +15',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 120,
		initiative: 8,
		ac: 22,
		fortitude: 23,
		reflex: 20,
		will: 19,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '3f84fd42-b719-4e20-ad5a-97ab780f2f43',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'a1d859e0-91f8-4a9a-829a-b48898b4a978',
				name: 'Powerful Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '3d6+7 damage, plus ongoing 5 poison damage (save ends).',
				damage: '3d6+7 damage',
				category: 1
			},
			{
				id: '6a4bb719-1ccb-4db7-882b-2f7022bafca6',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when the troll’s attack bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The troll makes a claw attack.',
				damage: '',
				category: 5
			},
			{
				id: '04fbd7d8-b064-489d-8685-88eb07dd062d',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points or fewer by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'c594f2f2-cca2-4706-a399-1f43a6318323',
		name: 'Abyssal Ghoul Devourer',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 18,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Stealth +19',
		equipment: '',
		category: 'Abyssal Ghoul',
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
			score: 16,
			modifier: 3,
			cost: 9
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
		hp: 172,
		initiative: 17,
		ac: 32,
		fortitude: 30,
		reflex: 29,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '9759dfbc-0fa5-4594-a7ec-0bbad05c08b2',
				name: 'Sepulchral Stench',
				keywords: '',
				details: 'aura 3; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '76623f06-876e-4c5b-abfe-50da74d382dd',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '2d8+9 damage, and the target is immobilized (save ends). If the target is a living creature that is already immobilized, stunned, or unconscious, the bite deals an extra 2d6 damage.',
				damage: '2d8+9 damage',
				category: 1
			},
			{
				id: '184aaedb-c045-484c-878b-1af027b7a939',
				name: 'Dead Blood',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'all enemies in the burst take 10 necrotic damage.; 4d10+7 damage.',
				damage: 'all enemies in the burst take 10 necrotic damage',
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

		info: 'Level 18 Skirmisher',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '088b0d42-001d-46ab-b0be-8cce703f1841',
		name: 'Arath Nightcaller',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 18,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +17, Intimidate +17, Religion +17',
		equipment: 'implement, staff; plate armor',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 166,
		initiative: 9,
		ac: 32,
		fortitude: 28,
		reflex: 28,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8c2b262a-ef50-4ff2-b586-6320cd53d41b',
				name: 'Ghoul Strike',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d10+8 necrotic damage, and target is immobilized (save ends).',
				damage: '1d10+8 necrotic damage',
				category: 1
			},
			{
				id: '3f8a3886-27db-4b32-9e24-25491d6dae7a',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 4d10+7 damage, the target is weakened (save ends), and Arath regains 40 hit points.',
				damage: '4d10+7 damage',
				category: 5
			},
			{
				id: '60e4a067-605a-48c4-91dc-f6b3283174b3',
				name: 'Ghoul Curse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: 'the target is dominated (save ends). While dominated, the target deals an extra 1d8 with its basic melee attack. In addition, the dominated target’s attack immobilizes its target on a hit (save ends).',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'e95a02fa-a7d7-4f53-a226-10cea1578d74',
				name: 'Gleeful Damage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Arath deals an extra 1d10 damage on melee attacks against immobilized targets.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '034afc82-2b73-4961-97c2-acf39bbd7f5b',
				name: 'Shadow Step',
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
				details: 'Arath teleports 5 squares.',
				damage: 'Arath teleports 5 squares',
				category: 2
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
		immune: '',
		tactics: '',

		info: 'Level 18 Controller (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'df5f8f20-5ffb-49fc-9e5f-b0eb722a0248',
		name: 'Baaldran the Flayer',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'demon',
		level: 18,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '8, fly 8 (hover)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 350,
		initiative: 3,
		ac: 32,
		fortitude: 32,
		reflex: 28,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1ffe4735-72f5-42b3-bd44-49594d1705db',
				name: 'Painblade',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+6 damage, and the target is dazed (save ends).',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: '7c6b274c-a68b-4a7a-841b-928ef3cd63c8',
				name: 'Whip of Howling Souls',
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
					defence: 2
				},
				description: '',
				details: 'Reach 4; 1d10+6 damage, pull 4 and the target is knocked prone.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '5681b91e-57b5-4875-8086-846fff0f7b11',
				name: 'Blade and Lash',
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
				details: 'Baaldran makes a whip of howling souls attack. He can make a painblade attack against the target if Baaldran pulls him within his painblade’s reach.',
				damage: '',
				category: 1
			},
			{
				id: '38248377-1e32-4430-b9e7-c7b6c43547ee',
				name: 'Poison Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison, Zone',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '1d10+6 damage, and ongoing 5 poison damage and the target is slowed (save ends both). In addition, this attack’s area becomes a zone that blocks line of sight and deals 10 poison damage to any creature that enters or begins its turn in the cloud. Baaldran ignores this damage and can see through the cloud. The cloud persists until the end of the encounter.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '2a069406-8150-4f68-9122-de2ea6824d5f',
				name: 'Horrid Roar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge 5 when bloodied'
				},
				keywords: 'Fear, Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '1d10+6 thunder damage, push 4, and the target is stunned until the end of Baaldran’s next turn.',
				damage: '1d10+6 thunder damage',
				category: 1
			},
			{
				id: '58f8db4e-7120-4150-aacf-3200983ac777',
				name: 'Whip Crack',
				action: {
					action: 5,
					trigger: 'when attacked',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'Targets triggering creature, reach 4; 1d10+6 damage and -4 penalty to the interrupted attack.',
				damage: '1d10+6 damage and -4 penalty to the interrupted attack',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Elite Controller',
		phenotype: 'Large natural humanoid (demon)'
	},
	{
		id: '605de114-14cd-4a7b-9542-34c74fe1e1ea',
		name: 'Boneclaw Impaler',
		details: '',
		size: 3,
		origin: 5,
		type: 0,
		keywords: 'undead',
		level: 17,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +17, Stealth +20',
		equipment: '',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 160,
		initiative: 17,
		ac: 33,
		fortitude: 24,
		reflex: 27,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a120aa02-ef59-4bc6-bcad-7f8b26e57e94',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 1d12+8 damage.',
				damage: '1d12+8 damage',
				category: 1
			},
			{
				id: '031ad7e6-b3df-48e9-946f-7d698785fda6',
				name: 'Impaling Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'targets enemies in burst; 1d12+8 damage plus ongoing 5 necrotic damage (save ends).',
				damage: '1d12+8 damage plus ongoing 5 necrotic damage (save ends)',
				category: 1
			},
			{
				id: '2f1efafc-c7e4-400d-a603-e8b2a9f76942',
				name: 'Necrotic Pulse',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'undead allies in the burst regain 10 hit points, and enemies in the burst take 10 necrotic damage.',
				damage: 'and enemies in the burst take 10 necrotic damage',
				category: 5
			},
			{
				id: '2c8f37bf-ffcc-40b1-9d31-6ff8628c7607',
				name: 'Relentless Opportunist',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the boneclaw hits with an opportunity attack, it makes another opportunity attack against the same target the next time it provokes during its current turn.',
				damage: '',
				category: 0
			},
			{
				id: '7e42a236-05a9-429f-83a7-6c7272ea6f7b',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The boneclaw can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
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

		info: 'Level 17 Soldier',
		phenotype: 'Large shadow animate (undead)'
	},
	{
		id: '18b26fec-dd9b-4b24-90ad-dcc06c43569a',
		name: 'Chwidencha',
		details: '',
		size: 2,
		origin: 2,
		type: 1,
		keywords: 'shunned, spider',
		level: 13,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision, tremorsense 10',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Stealth +14',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 160,
		initiative: 9,
		ac: 25,
		fortitude: 25,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a9fc5514-85cf-44f6-b617-7cd945bee718',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '3d6+6 damage and slide 2 squares.',
				damage: '3d6+6 damage and slide 2 squares',
				category: 1
			},
			{
				id: '58aec414-4e39-4d7d-8712-d55611896deb',
				name: 'Impaling Claws',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage and grab (escape ends).',
				damage: '2d6+6 damage and grab (escape ends)',
				category: 1
			},
			{
				id: 'a7f9bdaf-6039-4996-b397-90af6ba03e8c',
				name: 'Scuttling Charge',
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
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'The chwidencha makes a charge attack. It can charge over difficult terrain with no penalty to movement; 4d10+6 damage.',
				damage: '4d10+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Brute',
		phenotype: 'Medium fey beast (shunned, spider)'
	},
	{
		id: 'd3659a3f-f370-44d2-8490-f88d14c101ea',
		name: 'Commander Zaknoril',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Diplomacy +15, History +16, Intimidate +12, Stealth +11',
		equipment: 'chainmail; light shield; longsword',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 266,
		initiative: 11,
		ac: 31,
		fortitude: 27,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '24dea60e-0918-4285-8872-d6b870701c39',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+10 damage.',
				damage: '1d8+10 damage',
				category: 1
			},
			{
				id: '6ffc0ef8-bfb5-4a13-8f7d-be7d84ce0eab',
				name: 'Commander’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Martial, Weapon',
				condition: '',
				range: 'Zaknoril chooses one ally who can see and hear him to make a melee basic attack against a target. On a hit, the ally deals an extra 4 damage.',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'bdb23865-f159-4aac-9759-48e4858b4c78',
				name: 'Surprise Attack',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+10 damage. An ally within 5 squares of Zaknoril makes a basic attack with combat advantage and a +4 bonus to the attack roll as a free action against a target of its choice.',
				damage: '1d8+10 damage',
				category: 1
			},
			{
				id: 'ce41d679-268a-44b2-a874-bc0de844da3b',
				name: 'Beat Them into the Ground',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '2d8+10 damage, and the target is knocked prone. Every ally within 5 squares of Zaknoril makes a basic attack with a +4 bonus to one target of its choice as a free action. These attacks deal no damage but knock a target prone on a hit.',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '6cad7acd-ae86-4057-a00d-b0b5e8632658',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'until the end of Zaknoril’s next turn, all attacks against the target have combat advantage, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: 'c24ddc4f-df17-4c23-a860-8f35554ce6ea',
				name: 'Inspiring Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Martial, Healing',
				condition: '',
				range: 'Zaknoril or one ally in a close burst 10 heals 20 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: '634fe47a-0a95-4543-ac43-7dbe68d29b50',
				name: 'Combat Leader',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All allies within 10 squares of Zaknoril who can see and hear him gain a +2 power bonus to initiative.',
				damage: 'All allies within 10 squares of Zaknoril who can see and hear him gain a +2 power bonus to initiative',
				category: 0
			},
			{
				id: 'a4830690-0163-45b1-8d84-d7a6113b86e2',
				name: 'Tactical Shift',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Martial',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Zaknoril chooses one ally who can see and hear him. That ally can shift up to 5 squares.',
				damage: 'That ally can shift up to 5 squares',
				category: 3
			},
			{
				id: '1402d573-b56b-4a58-a196-30047decb7ec',
				name: 'House Insignia',
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
				details: 'Zaknoril gains concealment until the end of the encounter.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '14bdd9bc-e976-45d9-8707-13fd7925ea23',
		name: 'Deepspawn Nightmare',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 17,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Acrobatics +18, Bluff +18, Stealth +18, Thievery +18',
		equipment: 'death weapon; spear',
		category: 'Dragonspawn',
		strength: {
			score: 19,
			modifier: 4,
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 128,
		initiative: 17,
		ac: 31,
		fortitude: 29,
		reflex: 29,
		will: 29,
		regeneration: {
			value: 10,
			details: 'if the deepspawn nightmare takes radiant damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: 'b5be9c74-f659-4826-a99b-c8ca8cb8d79f',
				name: 'Death Spear',
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
				details: '1d8+9 necrotic damage, and the target is weakened (save ends).',
				damage: '1d8+9 necrotic damage',
				category: 1
			},
			{
				id: '39f56b04-308c-4fff-8cfc-d607c0d1b3c9',
				name: 'Tail',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Sleep',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+8 damage, and the target is dazed (save ends). First Failed Saving Throw: The target is dazed and slowed (save ends both). Second Failed Saving Throw: The target falls unconscious (save ends).',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '267e63f0-e316-4fa6-8840-d49591a2752c',
				name: 'Nightmare Form',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: 'The deepspawn nightmare can alter its physical form to appear as an enemy of its choice. While the nightmare is adjacent to that enemy, roll 1d20 whenever a melee or ranged attack targets the nightmare. On a roll of 10 or higher, the attack instead targets the copied enemy. The copied enemy’s attacks are not subject to this effect.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'efab3f99-903b-4b59-87df-745a6c9be610',
				name: 'Nightmarish Torment',
				action: null,
				keywords: 'Psychic',
				condition: '',
				range: 'If the deepspawn nightmare’s melee attack hits an enemy it is copying with nightmare form or a sleeping target, that target takes ongoing 10 psychic damage (save ends) in addition to the attack’s other effects.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Lurker',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: 'a242d617-71de-4304-8c86-510acf5a506a',
		name: 'Demonic Flameskull',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'demon, undead',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: 'fly 10 (hover)',
		alignment: 'Unaligned',
		languages: 'Common, one other',
		skills: 'Stealth +12',
		equipment: '',
		category: '',
		strength: {
			score: 6,
			modifier: -2,
			cost: 0
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
			score: 23,
			modifier: 6,
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
		hp: 114,
		initiative: 11,
		ac: 27,
		fortitude: 25,
		reflex: 27,
		will: 26,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '5d769975-e412-48c6-a2ea-dd83d8476465',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 0; 1d8 damage plus 1d8 fire damage.',
				damage: '1d8 damage plus 1d8 fire damage',
				category: 1
			},
			{
				id: '62685468-6cd4-44e6-b7ce-8dc55e611b16',
				name: 'Unholy Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d8+8 fire damage, plus ongoing 5 necrotic damage (save ends).',
				damage: '2d8+8 fire damage',
				category: 1
			},
			{
				id: '0ae9f4ce-bb8d-49c1-9076-88e725f4c014',
				name: 'Vile Consecration',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d8+8 fire and necrotic damage. Miss: Half damage. The flameskull can exclude two allies from the effect.',
				damage: '3d8+8 fire and necrotic damage',
				category: 1
			},
			{
				id: '988bfb3f-3fc0-4788-8339-c295249f3665',
				name: 'Demonic Fury',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While the demonic flameskull is bloodied, it deals an extra 1d8 damage with its attacks.',
				damage: 'it deals an extra 1d8 damage with its attacks',
				category: 0
			},
			{
				id: 'a6f02fff-1733-48e6-84a4-ffc12427c919',
				name: 'Mage Hand',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Conjuration',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As the wizard power mage hand.',
				damage: '',
				category: 3
			},
			{
				id: 'df2a427a-41b7-4331-8ed3-664bc110e38f',
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

		info: 'Level 15 Artillery',
		phenotype: 'Tiny natural animate (demon, undead)'
	},
	{
		id: 'b7e4d50d-9aba-4b59-8473-15caf24f41a7',
		name: 'Drow Battle Wight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Intimidate +16',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 122,
		initiative: 8,
		ac: 28,
		fortitude: 24,
		reflex: 21,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b6e96732-1d62-4f64-90fe-516e6e573e1d',
				name: 'Souldraining Longsword',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, and the target loses a healing surge and is immobilized (save ends).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '0137397e-db8f-4b14-bb32-14e6a15621d8',
				name: 'Soul Reaping',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'affects an immobilized target only; 3d6+5 necrotic damage, and the battle wight regains 10 hit points.',
				damage: '3d6+5 necrotic damage',
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

		info: 'Level 12 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'e61ecd3b-fdeb-477f-a523-34d59304e051',
		name: 'Drow Battle Wight Commander',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Intimidate +19',
		equipment: 'heavy shield; longsword; plate armor',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 114,
		initiative: 13,
		ac: 29,
		fortitude: 27,
		reflex: 24,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c3d8d8f7-f7e0-4a02-9e8f-065003afd0f2',
				name: 'Souldraining Longsword',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and the target loses a healing surge and is immobilized and weakened (save ends both).',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '69fe2420-2632-489e-be98-43f0a46da1c9',
				name: 'Soul Harvest',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'affects an immobilized target only; 2d8+8 necrotic damage, and the drow battle wight commander and all undead allies within 2 squares of it regain 10 hit points.',
				damage: '2d8+8 necrotic damage',
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

		info: 'Level 13 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '554a2e9e-057a-4230-8c1f-ca3eb2df9659',
		name: 'Drow Demonbinder',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'demon',
		level: 15,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Elven',
		skills: '',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 153,
		initiative: 12,
		ac: 29,
		fortitude: 31,
		reflex: 27,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95a61297-3aa7-47fe-a33d-516490bc25dc',
				name: 'Demon Rod',
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
				details: '1d8+3 damage, and the target is dazed until the end of its next turn. Miss: The demonbinder can shift 1 square as a free action.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '09c24044-3e57-47b1-a768-b35affd1de2d',
				name: 'Abyssal Blast',
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
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d6+7 damage, and the target is dazed (save ends).',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '95edfc70-5f5e-4ddf-847e-365d874af808',
				name: 'Hideous Transformation',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Polymorph',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'target is stunned until the end of the demonbinder’s next turn. In addition, the demonbinder can shift 3 squares.',
				damage: 'the demonbinder can shift 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '10 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Skirmisher',
		phenotype: 'Medium fey humanoid (demon)'
	},
	{
		id: '31e1701c-bd19-405f-a54e-2ae553b56c8c',
		name: 'Drow Horde Ghoul',
		details: 'This pallid humanoid has a twisted, feral visage, and its gruesomely misshapen hands end in black, flesh-rending claws. The stench of the grave surrounds it.',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +16',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 11,
		ac: 25,
		fortitude: 22,
		reflex: 24,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1b1e45e3-9070-49e5-a0d4-af9522c42731',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '6 damage, and the target is immobilized (save ends).',
				damage: '6 damage',
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

		info: 'Level 13 Minion',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '0f8e97fc-780b-4dc4-ac44-97951518c43c',
		name: 'Drow Inquisitor',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Intimidate +16, Stealth +13',
		equipment: 'chainmail; light shield; scourge',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 147,
		initiative: 10,
		ac: 31,
		fortitude: 27,
		reflex: 23,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '781be966-7126-4672-8d1f-b1147eef0276',
				name: 'Despair',
				keywords: '',
				details: 'aura 1; enemies within the aura take a -2 penalty to attack rolls, and marked enemies within the aura are slowed.'
			}
		],
		powers: [
			{
				id: '982a6f1c-323d-4bd0-8366-8235bbec0a7d',
				name: 'Scourge',
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
				details: 'Reach 2; 1d8+6 damage, and the target is marked until the end of the drow inquisitor’s next turn.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'c2a54eab-3bb4-452a-99be-da5e4cd3d522',
				name: 'Punishing Strike',
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
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'Marked target only; 2d8+6 damage, and ongoing 10 damage (save ends).',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'd0b334b3-00f9-4046-b964-58667b2fa8ed',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow inquisitor’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '254bbf83-7e23-4ccb-b815-4615333c97f1',
				name: 'Not So Fast',
				action: {
					action: 5,
					trigger: 'when a marked target moves or shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'the target is pulled 1 square and is dazed until the end of its next turn.',
				damage: 'the target is pulled 1 square and is dazed until the end of its next turn',
				category: 5
			},
			{
				id: 'eab89600-72f3-407a-979d-37391f0efcc0',
				name: 'Sadistic Reward',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'During any round in which the drow inquisitor deals damage, it gains a +1 bonus to saving throws and attack rolls until the end of its next turn.',
				damage: 'during any round in which the drow inquisitor deals damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '58d59f50-7684-4998-a73b-096f80012513',
		name: 'Drow Spiderguard',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Dungeoneering +10, Intimidate +13, Stealth +10',
		equipment: 'chainmail; light shield; longsword',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 118,
		initiative: 11,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3fd35905-5465-44e3-9e36-fbe3bc4edad3',
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
				details: '1d8+6 damage, and the target is marked until the end of the spiderguard’s next turn.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'f085dc13-79de-46fe-8758-04907ceb17cc',
				name: 'Spider Bite Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'Requires longsword; 2d8+6 damage, and the target takes ongoing 5 poison damage (save ends) and is dazed until the end of the spiderguard’s next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'b7309b97-67a1-49cd-bf1d-6be1c824d59d',
				name: 'Combat Opportunist',
				action: {
					action: 4,
					trigger: 'when adjacent creature shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Make a longsword attack against the triggering creature, and that creature immediately ends its movement.',
				damage: '',
				category: 5
			},
			{
				id: 'dda41a82-2a0d-462f-98df-a63e003c0420',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow spiderguard’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '501fc66d-68c3-408b-be66-e5c6ccc9660a',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A spiderguard deals an extra 2d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '76c52dd2-7590-4fc2-8c23-d453ccbd84b4',
				name: 'Lolth’s Guidance',
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
				details: 'The spiderguard gains combat advantage against an adjacent creature until the end of its next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'b09c0a7d-e25c-4fb0-b73d-a7d176c56b79',
		name: 'Drow Templar',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Intimidate +17, Stealth +9',
		equipment: 'plate armor; spear',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 150,
		initiative: 11,
		ac: 32,
		fortitude: 28,
		reflex: 22,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '631759c4-78f0-4a47-ae9b-8a0a3c25c752',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and the target is marked until the end of the drow templar’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '67184380-c4e7-4214-ab18-b69b3ecd212c',
				name: 'Fierce Rebuke',
				action: {
					action: 5,
					trigger: 'when an adjacent marked target shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Requires spear; 2d8+8 damage, and the target is knocked prone.',
				damage: '2d8+8 damage',
				category: 5
			},
			{
				id: '9c3a4718-61cc-4493-a335-803bdc3de790',
				name: 'Wrath of Lolth',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '1d10+4 poison damage, and ongoing 5 poison damage (save ends), and the target is pushed 1 square.',
				damage: '1d10+4 poison damage',
				category: 5
			},
			{
				id: 'dd6973b9-3429-4ba6-bdaa-806253537bf1',
				name: 'Whispers of the Spider Queen',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The drow templar gains a +2 bonus to attack rolls against a bloodied target.',
				damage: 'The drow templar gains a +2 bonus to attack rolls against a bloodied target',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 16 Soldier',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '6a81e772-265b-4956-8a28-bc88e660ec6f',
		name: 'Drow Vampire Spawn',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Elven',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 8,
		ac: 26,
		fortitude: 23,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2c3d336a-6ca4-41be-8d51-4b578305c240',
				name: 'Claws',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '6 necrotic damage (8 necrotic damage against a bloodied target).',
				damage: '6 necrotic damage (8 necrotic damage against a bloodied target)',
				category: 1
			},
			{
				id: 'a1e2fc38-4058-4dcb-9370-84bc580e3156',
				name: 'Destroyed by Sunlight',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A vampire spawn that begins its turn in direct sunlight can take only a single move action on its turn. If it ends the turn in direct sunlight, it burns to ash and is destroyed.',
				damage: '',
				category: 0
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

		info: 'Level 12 Minion',
		phenotype: 'Medium fey humanoid (undead)'
	},
	{
		id: 'be3b48df-d020-4b9f-baed-53b45f089ec5',
		name: 'Evistro Rampager',
		details: 'Though it walks on two legs, this creature is more beast than biped. Its arms are too large for its body, and they end in enormous claws. Sharp tusks jut from its lower jaw, and unholy fire burns in its eyes. Its skin is an angry shade of crimson.',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 1,
		initiative: 8,
		ac: 21,
		fortitude: 23,
		reflex: 19,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'da9343e8-9db3-448e-ae1a-da7eef791698',
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
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '1eb301c1-da16-4c38-a4be-6839ebef59e6',
				name: 'Carnage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The carnage demon minion gains a +1 bonus to melee attacks if it has one or more allies adjacent to its target (+3 if one of these allies is another carnage demon). This bonus stacks with combat advantage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '10 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: '23cea101-24f9-43e5-a418-90cd277c3537',
		name: 'Fithrichen',
		details: '',
		size: 2,
		origin: 2,
		type: 1,
		keywords: 'shunned, spider',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision, tremorsense 10',
		movement: '6, climb 4 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Stealth +13',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 121,
		initiative: 8,
		ac: 26,
		fortitude: 22,
		reflex: 20,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '53e7913c-4997-4790-934b-c9296f6aba5b',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage, and ongoing 5 poison damage (save ends). First Failed Save: The target is slowed (save ends). Second Failed Save: The target becomes unconscious (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'bb5591a5-0d2a-4163-9f84-c2b46a8eb182',
				name: 'Disgorge Spiders',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison, Zone',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: 'crawling poisonous spiders cover the area, attacking the fithrichen’s enemies; 1d6+6 poison damage, and ongoing 5 poison damage (save ends). The zone is difficult terrain until the end of the encounter. The fithrichen can move the zone up to 3 squares as a minor action once per round. After the zone is created, any enemy that enters or starts its turn inside the zone is subject to attack.',
				damage: '1d6+6 poison damage',
				category: 1
			},
			{
				id: 'dbf02f15-9c6c-4e5d-a92d-883b658cf6b3',
				name: 'Cloud of Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'this power creates a zone of darkness that remains in place until the end of the fithrichen’s next turn. The zone blocks line of sight for all creatures except the fithrichen and other shunned. Any creature entirely within the area (except those immune) is blinded.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Controller',
		phenotype: 'Medium fey beast (shunned, spider)'
	},
	{
		id: '8fb653f7-72f6-4a97-a442-063d54a6609c',
		name: 'Ghoul Eyebiter',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 16,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +9; darkvision',
		movement: '6, climb 6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Insight +14, Stealth +12',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 151,
		initiative: 7,
		ac: 30,
		fortitude: 28,
		reflex: 27,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: 'b1b72580-9fed-4d8f-b66f-a8da4d9425d3',
				name: 'Sepulchral Stench',
				keywords: '',
				details: 'aura 3; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '3f26a366-9166-4c73-8cf4-6963d091ac93',
				name: 'Serrated Claws',
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
				details: '2d8+7 damage, and ongoing 5 damage and slowed (save ends both).',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'edd33d75-7070-4daf-9f0b-68c30f67a1bf',
				name: 'Eye of Doresain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '3d6+8 necrotic damage, and the target is weakened (save ends). For every creature the ghoul eyebiter hits with the attack, it gains 5 temporary hit points.',
				damage: '3d6+8 necrotic damage',
				category: 1
			},
			{
				id: 'b3ed5761-be55-42e1-a067-47b0b1beedee',
				name: 'Deathly Snarl',
				action: {
					action: 1,
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
				details: 'undead allies remove a condition as if they had succeeded on a saving throw and can shift 2 squares. Those without a condition gain 10 temporary hit points and can shift 2 squares.',
				damage: 'undead allies remove a condition as if they had succeeded on a saving throw and can shift 2 squares',
				category: 1
			},
			{
				id: 'a071936a-3dd3-493c-b222-1d734dd655a7',
				name: 'Dead Blood',
				action: {
					action: 7,
					trigger: 'when first bloodied and when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'all enemies in the burst take 10 necrotic damage, and if the ghoul eyebiter is still alive, they are dazed until the end of the ghoul eyebiter’s next turn.',
				damage: 'all enemies in the burst take 10 necrotic damage',
				category: 5
			},
			{
				id: '3e84bae1-cc9f-43b4-93ae-fc624684099a',
				name: 'Rotten Harvest',
				action: null,
				keywords: 'Conjuration',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever a creature weakened by a ghoul eyebiter is reduced to 0 hit points, the ghoul eyebiter conjures four horde ghouls. These minions appear in a space adjacent to the ghoul eyebiter. The ghoul eyebiter can have up to four horde ghouls at a time. The minions disappear if the eyebiter dies.',
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

		info: 'Level 16 Controller (L)',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '39873095-afe2-44e5-b9fb-f3d0983a6cdc',
		name: 'Gyldra the Death Hag',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 18,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Bluff +19, Insight +17, Intimidate +19, Nature +17',
		equipment: '',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 171,
		initiative: 15,
		ac: 34,
		fortitude: 34,
		reflex: 31,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7a942f9c-c645-4b1f-b93d-79a0be67a9b4',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d8+7 necrotic damage, and the target is marked and cannot spend healing surges or regain hit points until the end of the death hag’s next turn.',
				damage: '1d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'ddd7b5db-06ff-489c-9065-9aa789cd9258',
				name: 'Displace',
				action: {
					action: 3,
					trigger: '1/round',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'the target teleports into a zombie mob.',
				damage: '',
				category: 5
			},
			{
				id: '36343e4d-e8ef-4cc2-ae82-984d954e8193',
				name: 'Life Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '1d8+4 necrotic damage, and the death hag regains 5 hit points for each creature damaged by this attack.',
				damage: '1d8+4 necrotic damage',
				category: 1
			},
			{
				id: '49c28fab-f176-4cf1-8530-3a535e11c433',
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
				details: 'A death hag can alter its physical form to appear as female of any Medium humanoid race.',
				damage: '',
				category: 3
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
		immune: '',
		tactics: '',

		info: 'Level 18 Soldier',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'd1600770-d8d6-4649-8930-9d7bca146b59',
		name: 'Husk Spider',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 14,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; tremorsense 10',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +18',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 344,
		initiative: 13,
		ac: 26,
		fortitude: 29,
		reflex: 26,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a826a817-edad-463b-814c-c8703fbc5237',
				name: 'Horrific Bite',
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
				details: '2d10+9 damage, and the target gains vulnerable 5 necrotic (save ends).',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: 'b5af89a8-4308-414a-88c2-694904f3bbc7',
				name: 'Flurry of Bites',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'The husk spider makes two horrific bite attacks, each against a different target.; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '5afb04e8-b3c2-443e-9943-669c36110e4a',
				name: 'Rotting Webs',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'target is slowed, and takes ongoing 10 necrotic damage (save ends both).',
				damage: 'and takes ongoing 10 necrotic damage (save ends both)',
				category: 1
			},
			{
				id: 'bce806f8-5ab0-4cc6-a30c-202afa0ab2e4',
				name: 'Web of Souls',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'enemies only; push 3 and immobilize target until the end of the husk spider’s next turn.',
				damage: 'push 3 and immobilize target until the end of the husk spider’s next turn',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: 'a48093f5-96ee-40a5-a164-79ed1a75b75a',
		name: 'Lolth’s Brutal Swarm',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'spider, swarm',
		level: 17,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; truesight 10',
		movement: '8, climb 6 (spider climb)',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +21',
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
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 162,
		initiative: 18,
		ac: 33,
		fortitude: 29,
		reflex: 32,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: 'ce5ee938-4bcc-4a8f-94eb-a48f791fab78',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; Lolth’s brutal swarm makes a basic attack as a free action against each enemy that begins its turn in the aura. In addition, an enemy that enters or starts its turn in the aura is immobilized (save ends) by strands of clinging webs.'
			}
		],
		powers: [
			{
				id: 'fad1ec5f-2d1b-4fd2-af1d-3a425e246da7',
				name: 'Swarm of Fangs',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+7 damage, and ongoing 10 poison damage (save ends).',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '8863e90a-8c66-4ff8-a88d-8b942bf27c11',
				name: 'Venom Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'enemies in burst take 3d10 + 6 poison damage, and are weakened (save ends).',
				damage: 'enemies in burst take 3d10 + 6 poison damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks.',
		immune: '',
		tactics: '',

		info: 'Level 17 Soldier',
		phenotype: 'Large natural beast (spider, swarm)'
	},
	{
		id: 'ee11d63d-c4be-4c62-ab8d-12f8b96b4ab6',
		name: 'Lord Dust the Lich',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 18,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Abyssal',
		skills: 'Arcana +21, Diplomacy +18, Religion +21',
		equipment: 'dagger; implement, staff',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 126,
		initiative: 11,
		ac: 32,
		fortitude: 28,
		reflex: 32,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '42c6079a-c1d7-4bd4-a5d2-af088a949d62',
				name: 'Dagger',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d4+4 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: '2034cb2f-2e16-4e5f-8507-320217924c18',
				name: 'Grave Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d6+5 damage, and the target is slowed until the end of Lord Dust’s next turn.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '7366f9ec-265c-4d88-ae1e-928c36a6f466',
				name: 'Choking Shadow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '1d8+4 damage, and the target cannot gain healing from any source until the end of Lord Dust’s next turn.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '70930dbf-96e8-4edf-be7a-df8d90f34ac8',
				name: 'Orb of Wraiths',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement, Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: '3d10+10 necrotic damage, and the target loses a healing surge. On a miss, half damage and no healing surge loss. Lord Dust regains 10 hit points per healing surge lost to this attack.',
				damage: '3d10+10 necrotic damage',
				category: 1
			},
			{
				id: 'fca45c88-3f3c-4fae-9df8-d73b1ca6f7be',
				name: 'Black Tide',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Implement, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '3d10+10 necrotic damage, and the target is blinded until the end of Lord Dust’s next turn.',
				damage: '3d10+10 necrotic damage',
				category: 1
			},
			{
				id: '8417e20b-14f7-4224-955b-3df39f353b91',
				name: 'Soul Reaper',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'destroy one allied minion within range. Lord Dust gains a +5 power bonus on his next damage roll.; damage.',
				damage: 'lord dust gains a +5 power bonus on his next damage roll',
				category: 3
			},
			{
				id: 'b802da96-93b7-4b7b-b8dd-775823af4ecc',
				name: 'Phantom Step',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: 'no action',
				range: '',
				attack: null,
				description: '',
				details: 'The first time Lord Dust is bloodied, he can teleport to any square within the ziggurat, no line of sight or line of effect needed.',
				damage: '',
				category: 1
			},
			{
				id: 'c38e7363-2595-44ec-9125-23e26d394a66',
				name: 'Focused Magic',
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
				details: 'Lord Dust gains a +4 bonus on his next attack. If he uses an area or close attack, this bonus applies to one target of the attack.',
				damage: 'Lord Dust gains a +4 bonus on his next attack',
				category: 3
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
		immune: '',
		tactics: '',

		info: 'Level 18 Artillery',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '78585069-3853-4d21-8915-5f1829327771',
		name: 'Matron Urlvrain',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Bluff +19, Insight +21, Intimidate +19, Religion +21, Stealth +17',
		equipment: 'chainmail; mace; mask of the matriarch; potion of vitality',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 304,
		initiative: 12,
		ac: 32,
		fortitude: 25,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [
			{
				id: '137e98a9-ef23-475b-ad68-e337c0f95742',
				name: 'Lolth’s Authority',
				keywords: '',
				details: 'aura 5; drow and spider allies in the aura gain a +1 bonus to attack rolls and a +2 bonus to damage rolls.'
			}
		],
		powers: [
			{
				id: 'dfd52860-90e5-4e82-b281-24bef74017bf',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'bf3beb71-17bd-4a9d-abd2-2720984fe657',
				name: 'Wrath of the Spider Queen',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 1,
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
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 5
			},
			{
				id: '22090566-c8a7-458c-b87d-fc7d50908a59',
				name: 'Webs of Madness',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d10+9 psychic damage, and the target is dazed and slowed (save ends both).',
				damage: '2d10+9 psychic damage',
				category: 1
			},
			{
				id: '38d6f28b-bfce-4bf6-bf16-137a6b868ba2',
				name: 'Lolth’s Rebuke',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'target is weakened and dazed (save ends both). If the target is slain while weakened and dazed, it explodes in a burst 3: +17 vs. Reflex; 3d6 + 7 poison damage.',
				damage: '3d6 + 7 poison damage',
				category: 3
			},
			{
				id: '37a14d41-3ab5-4093-88ce-109b590f239e',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'until the end of Matron Urlvrain’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '2f68d6f5-9dcd-42ed-9a64-16a35dbe24fc',
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
				details: 'Matron Urlvrain can transfer up to 75 damage she has taken to a spider or drow within 5 squares of her. She cannot transfer more hit points than the creature has remaining.',
				damage: 'matron urlvrain can transfer up to 75 damage she has taken to a spider or drow within 5 squares of her',
				category: 3
			},
			{
				id: '5f4f80e2-aba3-41a0-866c-6fbdfa6b03e5',
				name: 'Mask of the Matriarch',
				action: {
					action: 5,
					trigger: 'when matron urlvrain is targeted by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target moves its speed away from Matron Urlvrain.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Elite Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'ebb8a4cd-017b-4724-bb0e-60a91bcf8b58',
		name: 'Mithrenda',
		details: '',
		size: 2,
		origin: 2,
		type: 1,
		keywords: 'shunned, spider',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; darkvision, tremorsense 10',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Dungeoneering +10, Intimidate +8, Stealth +15',
		equipment: '',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 8,
			modifier: -1,
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
		hp: 110,
		initiative: 10,
		ac: 25,
		fortitude: 23,
		reflex: 22,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ecd863ad-78f7-4c4c-8614-cf71f5e4ead3',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: 'a8b593e5-1e59-4e67-b152-2bad4e7c680b',
				name: 'Fling Web',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'target is immobilized (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'a81e8bfb-2ddf-4f62-a20b-59e158e52388',
				name: 'Drag',
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
				details: 'Immobilized targets only; 1d8+6 damage and pull target 2 squares. If the mithrenda hits with this attack, it can use hideous bite (see below) against the target as a minor action.',
				damage: '1d8+6 damage and pull target 2 squares',
				category: 1
			},
			{
				id: '80d255a7-b035-423a-b383-20c84681fc84',
				name: 'Hideous Bite',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Immobilized targets only; 1d6+6 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d6+6 damage',
				category: 1
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

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium fey beast (shunned, spider)'
	},
	{
		id: 'a48cef58-953a-4f9f-9cb2-e0665cc31f0f',
		name: 'Nightbringer',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: '',
		level: 24,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +25; darkvision',
		movement: '12',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +22, Diplomacy +22, Intimidate +22, Stealth +25',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 1135,
		initiative: 11,
		ac: 40,
		fortitude: 38,
		reflex: 37,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '169418b7-e09e-4a65-82b4-873b4101b3a4',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+10 damage, and the target is slowed (save ends).',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: '4513f707-18f3-4d1f-bcfe-65213f41fac1',
				name: 'Claw Flurry',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Make four claw attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '51a5d335-7584-4784-a38e-0f09ac10e9bc',
				name: 'Soul Vortex',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: '5d6+15 damage, the target is immobilized until the end of Nightbringer’s next turn, and the target loses a healing surge. For each healing surge lost, Nightbringer regains 20 hit points. Targets take half damage on a miss but do not lose healing surges.',
				damage: '5d6+15 damage',
				category: 1
			},
			{
				id: 'dedcd783-86c4-4108-b981-8ddfe02d3fca',
				name: 'Soul Theft',
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
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '2d10+5 damage, and deals an extra 1d10 damage on all attacks against the target (save ends).',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: '5bd3e2af-d38b-45de-ba7b-ff523b963f08',
				name: 'Vicious Rebuke',
				action: {
					action: 1,
					trigger: 'immediate reaction when hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 2; against triggering creature; 1d10+5 damage and push 3 squares.',
				damage: '1d10+5 damage and push 3 squares',
				category: 5
			},
			{
				id: '5a51cf36-9076-45db-99e6-eda044ea2cd7',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Nightbringer makes opportunity attacks against all creatures in its reach.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Solo Soldier',
		phenotype: 'Large elemental beast'
	},
	{
		id: '6b91fad9-728c-433e-a978-f9b8ce61957c',
		name: 'Ogre Executioner',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Elven, Giant',
		skills: '',
		equipment: 'hide armor',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 173,
		initiative: 8,
		ac: 26,
		fortitude: 28,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '041ac4b5-7d10-4759-87b5-f60ff9a3ec50',
				name: 'Executioner’s Blade',
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
				details: 'Reach 2; 1d12+9 damage, and the target is knocked prone. On a critical hit, the target takes ongoing 10 damage (save ends).',
				damage: '1d12+9 damage',
				category: 1
			},
			{
				id: 'ef0c34e6-2837-4727-ad5a-331ed108f626',
				name: 'Savage Cut',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Requires executioner’s blade; reach 2; 3d12+9 damage, and the target is dazed (save ends).',
				damage: '3d12+9 damage',
				category: 1
			},
			{
				id: '4fb71d9b-21fd-4b50-8f3c-9438b28e79be',
				name: 'Finish Him',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Against prone, immobilized, or restrained targets, the ogre executioner can score critical hits on attack rolls of natural 19 or 20.',
				damage: 'the ogre executioner can score critical hits on attack rolls of natural 19 or 20',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'c75ea267-8232-45a4-89f1-fd87d718beee',
		name: 'Rotting Hook Horror',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; blindsight 10',
		movement: '4, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +18',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 19,
			modifier: 4,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 137,
		initiative: 12,
		ac: 28,
		fortitude: 27,
		reflex: 24,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b9e7b63c-5196-4c41-b0c3-7f823c4d57c1',
				name: 'Hook',
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
				details: 'Reach 2; 1d12+7 damage, and the target is pulled 1 square.',
				damage: '1d12+7 damage',
				category: 1
			},
			{
				id: '8a7cf2cc-58f5-452b-98b6-e7f523c4c7cb',
				name: 'Rending Hooks',
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
				details: 'The hook horror makes two hook attacks, each at a -2 penalty. If both hooks hit the same target, the hook horror deals an extra 1d12 damage and the target is grabbed (until escape).',
				damage: 'the hook horror deals an extra 1d12 damage and the target is grabbed (until escape)',
				category: 1
			},
			{
				id: '4cecffb4-c0c1-41e4-9218-38c5c4ddf604',
				name: 'Bite',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
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
				details: 'Grabbed target only; 1d8+7 necrotic damage, and the target is slowed (save ends).',
				damage: '1d8+7 necrotic damage',
				category: 3
			},
			{
				id: 'd6082c90-eacf-4204-afb7-a8b28a4a8b02',
				name: 'Fling',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '2d12+7 damage, and the target slides 3 squares and is knocked prone.',
				damage: '2d12+7 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Large natural beast'
	},
	{
		id: 'ecbfef75-9f25-4841-8612-f7c54a9667e5',
		name: 'Vampire Spawn Bloodstalker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 12,
		ac: 29,
		fortitude: 26,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2f3e477c-d216-4871-a947-c7bd4513ab85',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '8 necrotic damage (10 necrotic damage against a bloodied target).',
				damage: '8 necrotic damage (10 necrotic damage against a bloodied target)',
				category: 1
			},
			{
				id: '574beb7c-2063-44de-9162-0b86f08a3252',
				name: 'Destroyed by Sunlight',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A vampire spawn that begins its turn in direct sunlight can take only a single move action on its turn. If it ends the turn in direct sunlight, it burns to ash and is destroyed.',
				damage: '',
				category: 0
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

		info: 'Level 14 Minion',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '9f2de50c-3322-4d1f-9bb2-ca2a9adbed8d',
		name: 'Venomscorched Eidolon',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Evil',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 264,
		initiative: 8,
		ac: 30,
		fortitude: 28,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '77d63253-e97e-4c56-ac3f-ec5534b52250',
				name: 'Fearless Followers',
				keywords: '',
				details: 'aura 5; allies in the aura are immune to fear.'
			}
		],
		powers: [
			{
				id: 'bf8b1a73-7de5-47ec-8e94-e1885275db04',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'd7fc283a-2660-4825-8219-ace20041aea2',
				name: 'Toxic Assault',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'The eidolon makes two slam attacks. If both slam attacks hit the same target, the eidolon makes a secondary attack. Secondary Attack: Close burst 1',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '1d8+3 poison damage and the target is slowed (save ends).',
				damage: '1d8+3 poison damage and the target is slowed (save ends)',
				category: 1
			},
			{
				id: 'fe3d5b34-ebf5-4017-b21c-bb79e535abfb',
				name: 'Toxic Rebuke',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the eidolon while unhallowed stance is active',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d8+5 poison damage. Miss: Half damage. This attack does not provoke opportunity attacks.',
				damage: '2d8+5 poison damage',
				category: 5
			},
			{
				id: 'cf14f368-9ea0-4dee-afda-549109f548d7',
				name: 'Storm of Death',
				action: {
					action: 4,
					trigger: 'when an enemy kills one of the eidolon’s allies in the eidolon’s line of sight',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d6+5 necrotic damage, and the target is blinded and takes ongoing 5 necrotic damage (save ends both). This attack does not provoke opportunity attacks.',
				damage: '1d6+5 necrotic damage',
				category: 5
			},
			{
				id: '08d3bf3f-eb02-4e33-98f8-ce8df4232025',
				name: 'Unhallowed Stance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'The eidolon assumes a meditative stance. Until the end of its next turn, the eidolon gains resist 20 to all damage, and all allies in its line of sight deal an extra 1d8 poison damage on their melee attacks. If the eidolon moves, the effect ends.',
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
		immune: 'disease, fear, sleep',
		tactics: '',

		info: 'Level 13 Elite Controller',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: '80a365a5-b908-4eb2-9d8a-3775b7a9a55b',
		name: 'Web Golem Grappler',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6, climb 4 (spider climb)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +14',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 272,
		initiative: 9,
		ac: 27,
		fortitude: 25,
		reflex: 21,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: 'acffe33d-92d8-4d70-8bac-8883c9fd67c0',
				name: 'Cloud of Webs',
				keywords: '',
				details: 'aura 2; enemies that enter or start their turn in the aura are slowed and take a -2 penalty to attacks.'
			}
		],
		powers: [
			{
				id: '63bab4fc-c11b-4331-9391-88db2a409003',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+5 damage, and target is grabbed (until escape). A web golem grappler can grab up to two enemies at a time.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'feaa0feb-9a96-4604-9305-c5a698f06611',
				name: 'Living Weapon',
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
				details: 'Must currently have an opponent grabbed, the grappler uses the grabbed foe as a club against the target; reach 2; 2d8+5 damage to the target and the grabbed opponent.',
				damage: '2d8+5 damage to the target and the grabbed opponent',
				category: 1
			},
			{
				id: '91e52a6f-8d0b-4c6a-bdb5-6bda24e02dd7',
				name: 'Adhesive',
				action: {
					action: 4,
					trigger: 'when struck by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: 'the target is immobilized (save ends).',
				damage: '',
				category: 5
			},
			{
				id: '01da9e2c-6290-4389-b6f7-08d07a069453',
				name: 'Blinding Strands',
				action: {
					action: 7,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'close burst 3',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'The web golem grappler explodes in a burst of sticky strands; target is slowed (save ends).',
				damage: '',
				category: 5
			},
			{
				id: '4d7f5fe8-a30c-433f-95de-c742b7d335d6',
				name: 'Drag and Move',
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
				details: 'The web golem moves up to its speed, moving any grabbed creatures with it. At the end of its movement, it places the grabbed creatures in any squares adjacent to it.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Controller',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'dbae1fcb-72da-4fbd-bb45-8c728c111cc3',
		name: 'Web Golem Thresher',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 14,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6, climb 6 (spider climb)',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 284,
		initiative: 16,
		ac: 30,
		fortitude: 25,
		reflex: 26,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2d04f24c-26e9-4ce6-9a2b-7882ba5aece1',
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
				details: 'Reach 2; 2d8+6 damage, and the target is marked until the end of the web golem thresher’s next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'e01b7884-49f4-40ae-85cf-e9c4b41396fc',
				name: 'Double Slam',
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
				details: 'The web golem thresher makes two slam attacks.; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '6db74e1e-2880-49c2-910c-3b48a88dc459',
				name: 'Catch and Release',
				action: {
					action: 4,
					trigger: 'when a marked target shifts',
					sustainAction: 0,
					use: 1,
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
				details: 'Reach 2; 1d8+6 damage, and the web golem thresher slides the target 5 squares and knocks it prone.',
				damage: '1d8+6 damage',
				category: 5
			},
			{
				id: '861bded7-4895-4f86-9696-3b9947159657',
				name: 'Spit Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'the target is slowed (save ends). First Failed Saving Throw: The target is immobilized (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Soldier',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'e5cfb313-7a33-43ae-9749-9baf1fa64ca3',
		name: 'Zirithian',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 17,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Athletics +18, Diplomacy +19, Intimidate +19, Religion +16, Stealth +20',
		equipment: 'chainmail',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
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
		hp: 318,
		initiative: 15,
		ac: 33,
		fortitude: 29,
		reflex: 31,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '624cb628-a8c5-4407-9d0f-fa21335dac5b',
				name: 'Nightbringer',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '2d8+5 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'fae1e45d-ac2b-4a92-b00c-a9e01132ecd9',
				name: 'Death Grip',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '1d10+6 necrotic damage, and the target is immobilized (save ends).',
				damage: '1d10+6 necrotic damage',
				category: 1
			},
			{
				id: '6f713ffa-8431-455f-9bd4-9f11534d7e77',
				name: 'Mighty Assault',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Zirithian makes a Nightbringer attack and a death grip attack.',
				damage: '',
				category: 1
			},
			{
				id: '9da18f58-1e05-4622-9028-594b44e2fd1d',
				name: 'Blood Feast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'Immobilized or helpless targets only; 2d10+10 damage, Zirithian heals 20 damage, and the target is dominated until the end of Zirithian’s next turn.',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: 'abb901e3-8771-4c68-814e-1d72411e2220',
				name: 'Winds of Deadhold',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Teleport',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: '1d10+8 damage, teleport the target 10 squares, and the target is immobilized (save ends).',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: 'fd7ccc27-f180-45b6-80b5-879ce3d3525f',
				name: 'Blackfire Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '2d8+6 fire damage and push 3.',
				damage: '2d8+6 fire damage and push 3',
				category: 1
			},
			{
				id: '772fbb5f-f2c0-4a2d-9bd5-706d4b6cea4e',
				name: 'Cloud of Bats',
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
				details: 'Zirithian transforms into a swarm of bats. While in this form, he gains fl y 8 (hover) and his walking speed becomes 2. He gains insubstantial and a +5 AC bonus against opportunity attacks. As a second minor action, he returns to his normal form.',
				damage: 'he gains fl y 8 (hover) and his walking speed becomes 2',
				category: 3
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

		info: 'Level 17 Elite Controller',
		phenotype: 'Medium fey humanoid (undead)'
	},
	{
		id: '9d9ffb05-845f-492d-bb8f-711fd2486654',
		name: 'Zombie Tombwalker',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 15,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
		strength: {
			score: 20,
			modifier: 5,
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
		hp: 1,
		initiative: 9,
		ac: 27,
		fortitude: 27,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7fe6faee-23f9-4b18-802c-bc2fda3e7d0e',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			},
			{
				id: '677f39e9-391d-406a-86e5-e0c20a8bc09e',
				name: 'Flesh Ripping Bite',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '9 damage, plus ongoing 5 necrotic damage (save ends).',
				damage: '9 damage',
				category: 1
			},
			{
				id: '151a919f-4151-49c7-8601-39e4e3c9ec13',
				name: 'Death Burst',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'The tombwalker explodes. Close burst 1',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '7 necrotic damage.',
				damage: '7 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 15 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'eabea2ee-2d28-48d3-aa22-8485a932c06f',
		name: 'Abyssal Zealot Brawler',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 20,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '6, fly 4 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Athletics +19',
		equipment: '',
		category: 'Abyssal Zealot',
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
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 230,
		initiative: 12,
		ac: 32,
		fortitude: 32,
		reflex: 29,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '870bcd2c-a5f3-44dc-b7f9-45918fc51b96',
				name: 'Death Claw',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target takes ongoing 5 necrotic damage (save ends).',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '7215916e-4a1f-4604-8751-e76eae15bcbe',
				name: 'Death Strike',
				action: {
					action: 7,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d8+6 necrotic damage.',
				damage: '1d8+6 necrotic damage',
				category: 5
			},
			{
				id: 'dd2b37ef-5a03-41b9-bb9a-e4dcabdc3e27',
				name: 'Blood Smite',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When bloodied, the abyssal zealot’s attacks deal an extra 2d6 necrotic damage.',
				damage: 'the abyssal zealot’s attacks deal an extra 2d6 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Brute',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '24e081b3-53fb-4bae-9b49-2f655dab327e',
		name: 'Abyssal Zealot Hurler',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 20,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '4, fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +21',
		equipment: '',
		category: 'Abyssal Zealot',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 148,
		initiative: 15,
		ac: 32,
		fortitude: 32,
		reflex: 32,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '10cf0c9e-6bd4-4d20-8ff1-c90d12d4d892',
				name: 'Death Tail',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '3d6+8 damage, and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '70f85c1e-04f6-474f-995f-87abc413fd36',
				name: 'Abyssal Arrow',
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
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '2d8+9 necrotic damage, and target takes ongoing 5 necrotic damage (save ends).',
				damage: '2d8+9 necrotic damage',
				category: 1
			},
			{
				id: '581cc177-dcbb-483e-a1f2-adbe814b73c7',
				name: 'Forlorn Burst',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '1d10+9 necrotic damage, and the target is weakened (save ends).',
				damage: '1d10+9 necrotic damage',
				category: 1
			},
			{
				id: '10597983-a9d1-4064-ab2e-2d44fc5bf6b5',
				name: 'Blood Smite',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When bloodied, the abyssal zealot’s attacks deal an extra 2d6 necrotic damage.',
				damage: 'the abyssal zealot’s attacks deal an extra 2d6 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Artillery',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '6c2e74a2-c8ef-4320-84ee-d688a2f9c493',
		name: 'Adult Shadow Dragon',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon',
		level: 14,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '9, fly 9 (hover), overland flight 12, swim 9',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Intimidate +14, Stealth +22',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 685,
		initiative: 21,
		ac: 29,
		fortitude: 25,
		reflex: 27,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1b075220-0e0f-474e-b25e-0519b7193c70',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+5 damage, and the target is weakened (save ends).',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'b2135b8d-c239-4980-ace7-c8f8fb4bcea4',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '8623e5b5-2b33-48eb-9882-8236eb329dea',
				name: 'Draconic Frenzy',
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
				details: 'The dragon makes a bite attack and a claw attack.',
				damage: '',
				category: 1
			},
			{
				id: '0a785051-e67c-4e42-ad70-ef141e2ef120',
				name: 'Tail Slash',
				action: {
					action: 4,
					trigger: 'when an enemy misses the dragon with a melee attack',
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
				details: 'The dragon attacks the enemy that missed it; 1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 5
			},
			{
				id: '6268db7b-cbe8-4d08-91de-e9ce582fafe3',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '2d8+6 necrotic damage, and the target loses one healing surge and is weakened (save ends). Aftereffect: The target’s necrotic damage is negated until the end of the encounter. Miss: Half damage, and the target does not lose a healing surge.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: 'd7e77701-12d3-43a3-bba5-271d03546259',
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
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is dazed until the end of the dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
				category: 1
			},
			{
				id: '12cd89a9-fbb4-4d3e-b679-35fdcbda4772',
				name: 'Globe of Darkness',
				action: {
					action: 3,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: null,
				description: '',
				details: 'this power creates a zone of darkness that remains in place until the end of the dragon’s next turn. The zone blocks line of sight for all creatures except the dragon. Any creature entirely within the area (except the dragon) is blinded.',
				damage: '',
				category: 5
			},
			{
				id: 'c8c9bd5d-9cb1-48e2-a126-a6830d0d6de0',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow dragon deals an extra 2d6 damage against a target it has combat advantage against.',
				damage: 'the shadow dragon deals an extra 2d6 damage against a target it has combat advantage against',
				category: 0
			},
			{
				id: 'b1aedf74-eaf4-4632-854b-b7222e938dfb',
				name: 'Shadow Walk',
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
				details: 'A shadow dragon that is in at least one square of a globe of darkness can teleport to any other globe of darkness within line of sight. It must end this move in at least one square of that globe of darkness.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: 'radiant (whenever a shadow dragon takes radiant damage, one of its globes of darkness ends)',
		immune: '',
		tactics: '',

		info: 'Level 14 Solo Lurker',
		phenotype: 'Large shadow beast (dragon)'
	},
	{
		id: '616b20c4-5e72-4f09-a486-1921b3e8fbeb',
		name: 'Bodak Reaver Death Knight',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 18,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'greataxe; plate armor',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 342,
		initiative: 16,
		ac: 33,
		fortitude: 35,
		reflex: 30,
		will: 33,
		regeneration: null,
		auras: [
			{
				id: 'a2a03463-70b5-45d4-a41d-518ff1043ac5',
				name: 'Agonizing Gaze ',
				keywords: '',
				details: '(Fear, Gaze, Necrotic) aura 5; a creature in the aura that makes a melee or a ranged attack against the bodak reaver death knight takes 5 necrotic damage before the attack roll is made and takes a -2 penalty to the attack roll.'
			},
			{
				id: '68952c77-3ee1-4abf-96d5-1fbaa39b9c93',
				name: 'Marshal Undead',
				keywords: '',
				details: 'aura 10; lower-level undead allies in the aura gain a +2 bonus to their attack rolls.'
			}
		],
		powers: [
			{
				id: '28fe4044-9708-4f6f-addb-492aadf185e4',
				name: 'Soul Greataxe',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d12+6 damage (crit 2d12+18) plus 1d8 necrotic damage, and the target is dazed and weakened (save ends both).',
				damage: '1d12+6 damage (crit 2d12+18) plus 1d8 necrotic damage',
				category: 1
			},
			{
				id: '3a8ea680-9a20-4ae8-af2b-32fef76379e4',
				name: 'Death Gaze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'targets a living creature; if the target is weakened, it is reduced to 0 hit points; otherwise, the target takes 1d6+6 necrotic damage and loses a healing surge.',
				damage: 'the target takes 1d6+6 necrotic damage and loses a healing surge',
				category: 1
			},
			{
				id: 'f8a5634d-1d2e-45a2-966d-5b89a7f7d147',
				name: 'Unholy Flames',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'undead creatures within the burst (including the death knight) deal an extra 2d6 fire damage with melee attacks until the end of the death knight’s next turn.',
				attack: {
					bonus: 2,
					defence: 2
				},
				description: '',
				details: '6d8 + 6 necrotic and fire damage to living creatures',
				damage: '6d8 + 6 necrotic and fire damage to living creatures',
				category: 1
			},
			{
				id: '9282506e-6ce9-41fe-bff8-32a092b8ffa5',
				name: 'Death Drinker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a living creature is reduced to 0 hit points within 5 squares of the bodak reaver death knight, the death knight gains a +1 bonus to attack rolls until the end of its next turn, as well as 15 temporary hit points.',
				damage: 'If a living creature is reduced to 0 hit points within 5 squares of the bodak reaver death knight',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: 'a bodak reaver death knight that takes radiant damage can’t weaken a target until the end of its next turn.',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 18 Elite Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '8500bdba-3246-4651-a54b-f7d67bd8d1dc',
		name: 'Bonechill Chimera',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 15,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; all-around vision, darkvision',
		movement: '6, fly 10 (clumsy), overland flight 15',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 366,
		initiative: 10,
		ac: 27,
		fortitude: 29,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad376fdb-d8dc-469c-8c09-d377f3d69a3c',
				name: 'Lion’s Bite',
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
				details: '2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '6ea5af56-73ee-4565-8e0e-f1c830b9433f',
				name: 'Ram’s Charge',
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
				details: 'The chimera makes a charge attack; 1d10+11 damage, and the target is pushed 1 square and knocked prone.',
				damage: '1d10+11 damage',
				category: 1
			},
			{
				id: 'e284eabd-dbe6-48ca-89d1-5b0e1b686789',
				name: 'Triple Threat',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The chimera makes the following three melee attacks, each one against a different target:',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '12b6a4a8-97d8-4edf-9e96-07915038cd2a',
				name: 'Dragon Breath',
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
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '2d6+3 damage, and the target takes ongoing 5 cold damage and is slowed (save ends both).',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: 'bc1ba558-dd17-4b22-90bd-532bfd73e0b1',
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
				details: 'The chimera’s breath weapon recharges, and the chimera uses it immediately.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Brute',
		phenotype: 'Large natural beast'
	},
	{
		id: 'b9398ecd-03f1-4879-b1a7-06f558043fdc',
		name: 'Cold-Eye Basilisk',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'cold, reptile',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '4 (ice walk)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +13',
		equipment: '',
		category: 'Basilisk',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 151,
		initiative: 11,
		ac: 31,
		fortitude: 27,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '73b61992-d38d-423a-bff9-9887f30b1859',
				name: 'Icy Aura',
				keywords: '',
				details: 'aura 2; any non-cold creature that starts its turn in the aura is slowed and enemies treat the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: 'c7563a19-9fb7-4008-bfb5-8b4ae2c9ba6e',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '176f688e-9bcb-4743-80d7-a57222305151',
				name: 'Freezing Gaze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Gaze',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '2d6 cold damage and ongoing 5 cold damage (save ends). First Failed Saving Throw: Ongoing 5 cold damage and the target is immobilized (save ends). Second Failed Saving Throw: Ongoing 10 cold damage and the target is stunned (save ends). Third Failed Saving Throw: Ongoing 15 cold damage and the target is frozen (save ends). A frozen target is stunned and unaware of its surroundings.',
				damage: '2d6 cold damage and ongoing 5 cold damage (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'cold',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Large natural beast (cold, reptile)'
	},
	{
		id: '29653980-8241-4c3c-b2b8-e0a5ae0dfed5',
		name: 'Draconic Wraith',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon, undead',
		level: 19,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: '',
		equipment: '',
		category: '',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 107,
		initiative: 18,
		ac: 33,
		fortitude: 32,
		reflex: 31,
		will: 32,
		regeneration: {
			value: 10,
			details: 'if the draconic wraith takes radiant damage, regeneration does not function until the end of its next turn'
		},
		auras: [
			{
				id: '18426750-dbbf-43ad-9d3e-112f724d8262',
				name: 'Mist of Decay',
				keywords: '',
				details: 'aura 2; enemies in the aura are weakened.'
			}
		],
		powers: [
			{
				id: 'e80d81db-6c49-4e5f-8053-50320a38df2e',
				name: 'Shadow Bite',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+6 necrotic damage.',
				damage: '1d10+6 necrotic damage',
				category: 1
			},
			{
				id: 'd38a9160-f92c-43ed-965f-20825c83655d',
				name: 'Shadow Claw',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+8 necrotic damage, and the target loses 1 healing surge.',
				damage: '3d6+8 necrotic damage',
				category: 1
			},
			{
				id: '8b66906e-e41e-4fb1-ba49-d56d2d7a960d',
				name: 'Fell Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d6+7 necrotic damage, and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'b89adcc9-182d-463a-9ebb-43af0629c574',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The draconic wraith deals an extra 2d6 necrotic damage against any target it has combat advantage against.',
				damage: 'the draconic wraith deals an extra 2d6 necrotic damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '743142b4-b2a6-4e07-afdf-d4a847cad053',
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
				details: 'The draconic wraith shifts 8 squares.',
				damage: 'The draconic wraith shifts 8 squares',
				category: 2
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Lurker',
		phenotype: 'Large shadow beast (dragon, undead)'
	},
	{
		id: 'e728f435-3c07-448c-b41f-0e6e683d4e11',
		name: 'Draconic Wraith Soulbinder',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon, undead',
		level: 20,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 141,
		initiative: 16,
		ac: 34,
		fortitude: 32,
		reflex: 33,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: '4263f726-ae2e-4dcf-aba2-356072e6642c',
				name: 'Tendrils of Terror',
				keywords: '',
				details: 'aura 5; enemies in the aura are slowed and take a -2 penalty to attack rolls. If the draconic wraith takes radiant damage, aura is negated until the end of the wraith’s next turn.'
			}
		],
		powers: [
			{
				id: 'b6e762fb-28fc-45d0-9156-501236f6170c',
				name: 'Binding Strike',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 necrotic damage, and the target is immobilized (save ends).',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: '92d7503f-6bad-41c1-839c-92e22936fdc9',
				name: 'Binding Burst',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '4d8+7 necrotic damage, and the target is immobilized (save ends).',
				damage: '4d8+7 necrotic damage',
				category: 1
			},
			{
				id: '6cb19305-1e3d-4fed-8737-23c2d081de47',
				name: 'Shadow Breath',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '4d10+7 necrotic damage.',
				damage: '4d10+7 necrotic damage',
				category: 1
			},
			{
				id: '886a93ad-36c7-4d9b-813c-e9fbd89bace9',
				name: 'Soulbinding',
				action: null,
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the soulbinder successfully attacks an immobilized creature, it regains 10 hit points.',
				damage: 'it regains 10 hit points',
				category: 0
			},
			{
				id: 'ddf39d87-f994-479b-8188-3cfbb6d4a122',
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
				details: 'The draconic wraith shifts 8 squares.',
				damage: 'The draconic wraith shifts 8 squares',
				category: 2
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 20 Controller',
		phenotype: 'Large shadow beast (dragon, undead)'
	},
	{
		id: 'f72d11f4-3f3c-4c41-9e2d-e9c52f02e8a8',
		name: 'Draconic Wraith Souleater',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon, undead',
		level: 19,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: 'fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: '',
		equipment: '',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 136,
		initiative: 15,
		ac: 33,
		fortitude: 32,
		reflex: 30,
		will: 31,
		regeneration: {
			value: 10,
			details: 'if the draconic wraith takes radiant damage, regeneration does not function until the end of its next turn'
		},
		auras: [
			{
				id: '92c8cd2a-c17f-46df-bbd1-bb8cffb9d204',
				name: 'Cloud of Death',
				keywords: '',
				details: 'aura 2; enemies in the aura cannot spend healing surges. Enemies treat the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: 'feb3d837-b61a-439d-8c49-5390661a7fe0',
				name: 'Shadow Bite',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12+6 necrotic damage.',
				damage: '1d12+6 necrotic damage',
				category: 1
			},
			{
				id: '3865aaa3-fcef-472c-9a40-bd655e368681',
				name: 'Fell Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '1d12+6 necrotic damage, and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '1d12+6 necrotic damage',
				category: 1
			},
			{
				id: '5f65dd25-0771-4b81-a131-94472ad52726',
				name: 'Steal Volition',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'targets one creature within the burst; automatic hit; the target is slowed (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '8f5c5c34-fd89-49d7-9d86-28be0a59a71c',
				name: 'Soul Feast',
				action: {
					action: 7,
					trigger: 'when the souleater bloodied an enemy with its bite or fell breath attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target loses 1 healing surge, and the souleater regains 34 hit points.',
				damage: 'The target loses 1 healing surge',
				category: 5
			},
			{
				id: '48576dd5-3adb-42c4-a9ee-4bdfe703b54a',
				name: 'Shadow Strike',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The souleater shifts 8 squares and can make a melee basic attack either before, during, or after the move.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 2
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Skirmisher',
		phenotype: 'Large shadow beast (dragon, undead)'
	},
	{
		id: '28a6f790-a14e-4e8b-bfce-d60a3989b2ed',
		name: 'Draconic Wraith Soulravager',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon, undead',
		level: 21,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 183,
		initiative: 15,
		ac: 33,
		fortitude: 33,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: '41ee75ce-b71b-4acd-bf36-7b006affc902',
				name: 'Tendrils of Reaping',
				keywords: '',
				details: 'aura 2; enemies that enter or start their turn in the aura take 10 points of necrotic damage.'
			}
		],
		powers: [
			{
				id: 'd44486cb-514e-44b0-9ccf-2a6bc032469e',
				name: 'Ravaging Strike',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+7 necrotic damage.',
				damage: '3d8+7 necrotic damage',
				category: 1
			},
			{
				id: '796f8d86-aabe-4d4c-837f-bf99196505bb',
				name: 'Soul Ravage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+7 necrotic damage, and the target loses 1 healing surge, and the wraith regains 45 hit points. If the draconic wraith takes radiant damage, it cannot use this power until after the end of the wraith’s next turn.',
				damage: '4d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'bfb9eb08-c524-4c1e-80e0-522101d8dbd4',
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
				details: 'The draconic wraith shifts 8 squares.',
				damage: 'The draconic wraith shifts 8 squares',
				category: 2
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Brute',
		phenotype: 'Large shadow beast (dragon, undead)'
	},
	{
		id: '4cb344c9-b23e-4cb9-8abd-610701374f5e',
		name: 'Foulspawn Oracle',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6, teleport 3',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: '',
		equipment: 'implement, staff',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 112,
		initiative: 10,
		ac: 27,
		fortitude: 24,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: 'a555f8a6-5edb-4e96-a7f0-b2fb46603290',
				name: 'Foul Insight',
				keywords: '',
				details: 'aura 10; allies in the aura that can hear the foulspawn oracle gain a +2 power bonus to one attack roll, skill check, ability check, or saving throw on their turn.'
			}
		],
		powers: [
			{
				id: 'de6d4acb-162c-4ce6-8902-f721b527ee68',
				name: 'Warp Staff',
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
				details: '1d8+8 damage, and the target teleports 2 squares.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '57e1e04e-764a-4ea2-af80-970328af7349',
				name: 'Prophetic Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'ranged 10',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'Dark energy reveals a nightmarish vision; 1d8+8 damage, and the target is dazed (save ends).',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: 'ba1140ae-eeaf-4fda-bb1f-2f36a8f8fe95',
				name: 'Doomsayer blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'close blast 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'The oracle utters a word of doom; 3d10+6 damage, and the target is stunned until the end of the oracle’s next turn. Aberrant creatures take half damage and are dazed instead of stunned.',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: 'a990c2fc-17b0-487d-88d0-0ab2493407f6',
				name: 'Warp Dodge',
				action: {
					action: 5,
					trigger: 'when the oracle would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn oracle teleports 5 squares.',
				damage: 'The foulspawn oracle teleports 5 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Artillery',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '57692b37-da2d-4e6a-825e-52560cae461c',
		name: 'Foulspawn Ragehulks',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 180,
		initiative: 10,
		ac: 27,
		fortitude: 29,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '00bba466-9da9-4bdb-bfea-14a0d0c267ec',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+20 when bloodied)2d8+9 damage, or 3d8+10 damage when bloodied.',
				damage: '(+20 when bloodied)2d8+9 damage',
				category: 1
			},
			{
				id: '66f11b3c-9f3a-4bc0-979f-9570130b5a13',
				name: 'Furious Rage',
				action: {
					action: 1,
					trigger: 'only usable while bloodied',
					sustainAction: 0,
					use: 0,
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
				details: 'The foulspawn ragehulk makes three slam attacks divided among two or more targets.; 4d8+6 damage.',
				damage: '4d8+6 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 15 Brute',
		phenotype: 'Large aberrant humanoid'
	},
	{
		id: 'e06c9977-83a0-4bd5-8a4d-aaf977dc3eac',
		name: 'Immolith Inferno',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon, fire, undead',
		level: 19,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Giant',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 374,
		initiative: 13,
		ac: 33,
		fortitude: 31,
		reflex: 31,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: 'c2b03aef-ea4b-40aa-92e1-a2b5dc99ee75',
				name: 'Flaming Aura ',
				keywords: '',
				details: '(Fire) aura 1; any creature that enters or starts its turn in the aura takes 15 fire damage.'
			}
		],
		powers: [
			{
				id: 'b6afb573-409b-46af-925f-7f73082916c4',
				name: 'Claw',
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
				details: 'Reach 4; 1d8+9 fire damage, and ongoing 10 fire damage (save ends).',
				damage: '1d8+9 fire damage',
				category: 1
			},
			{
				id: '0ef21b9b-e154-4b0a-9293-aaf44ec97a70',
				name: 'Double Claw',
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
				details: 'The immolith inferno makes two claw attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: 'd00ea248-77ba-445c-9fe1-5fff6d47aa6e',
				name: 'Fiery Grab',
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
				details: 'The immolith inferno makes a claw attack (see above) against a Large or smaller target. On a hit, the target slides into a square adjacent to the immolith and is grabbed (until escape). While grabbed, the target loses any resistance it has to fire. The immolith can hold up to five grabbed creatures using this power.',
				damage: '',
				category: 1
			},
			{
				id: '45a241df-8c20-4350-97ee-73d96ec23bf6',
				name: 'Deathfire Rebuke',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'the target is pushed 4 squares, falls prone at the end of the push, and takes ongoing 10 fire damage (save ends).',
				damage: 'and takes ongoing 10 fire damage (save ends)',
				category: 3
			},
			{
				id: 'f3749a0b-1590-4415-a0e4-ad427834cf1c',
				name: 'Selfish Vigor',
				action: {
					action: 3,
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
				details: 'The immolith inferno regains 20 hit points.',
				damage: 'The immolith inferno regains 20 hit points',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 15
			}
		],
		resist: '15 variable (2/encounter)',
		vulnerable: '',
		immune: 'disease, fire, poison',
		tactics: '',

		info: 'Level 19 Elite Controller',
		phenotype: 'Large elemental beast (demon, fire, undead)'
	},
	{
		id: '63738725-0304-4848-b8df-632446173c83',
		name: 'Moyshanna',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +15, Insight +15, Stealth +15',
		equipment: 'frost weapon; longsword; leather armor',
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
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 152,
		initiative: 12,
		ac: 30,
		fortitude: 28,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cc378f3b-663b-4374-a400-7baefc244b42',
				name: 'Longsword',
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
				details: '1d8+6 damage (crit 3d6+14 cold damage). Moyshanna can choose to make this weapon’s damage cold.',
				damage: '1d8+6 damage (crit 3d6+14 cold damage)',
				category: 1
			},
			{
				id: '8f0f3c6b-b0eb-421d-93a1-96dc010d056a',
				name: 'Frost Longsword',
				action: {
					action: 7,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Moyshanna can use this power when she hits with a longsword attack. The target takes an extra 2d8 cold damage and is slowed until the end of Moyshanna’s next turn.',
				damage: 'the target takes an extra 2d8 cold damage and is slowed until the end of moyshanna’s next turn',
				category: 5
			},
			{
				id: 'dd3cbcdf-cfde-439d-8d6d-156af15c11ce',
				name: 'Shadow Jaunt',
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
				details: 'Moyshanna teleports 3 squares and becomes insubstantial until the start of her next turn.',
				damage: 'Moyshanna teleports 3 squares and becomes insubstantial until the start of her next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'edefb57e-9b5a-46cd-8517-e39a99aea666',
		name: 'Redspawn Flamespewer',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'reptile',
		level: 16,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Dragonspawn',
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
			score: 2,
			modifier: -4,
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
		hp: 121,
		initiative: 10,
		ac: 28,
		fortitude: 28,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f973f7c0-7033-465a-99a7-ec3ac978aa7c',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d10+8 damage, and the target takes ongoing 5 fire damage (save ends).',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: '322df057-3fad-4416-a4cf-44496f357ac0',
				name: 'Flame Spew',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 12',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '2d8+5 fire damage, and the target takes ongoing 5 fire damage (save ends).',
				damage: '2d8+5 fire damage',
				category: 1
			},
			{
				id: 'e1494130-9ce2-4521-a0b8-163c27c5a1e5',
				name: 'Flaming Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '3d8+5 fire damage, and the target takes ongoing 10 fire damage (save ends). Miss: Half damage, and the target takes ongoing 5 fire damage (save ends).',
				damage: '3d8+5 fire damage',
				category: 1
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

		info: 'Level 16 Artillery',
		phenotype: 'Large natural beast (reptile)'
	},
	{
		id: '3143c266-bdfa-449d-9676-48eb4282cc23',
		name: 'Sage Ghost',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 19,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		wisdom: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 360,
		initiative: 16,
		ac: 33,
		fortitude: 31,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b5763f0-6c43-4a52-8626-26a647cea6a6',
				name: 'Spirit Touch',
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
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '1d6+7 necrotic damage, and the target is weakened (save ends).',
				damage: '1d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'c414b559-9942-4db3-810e-c54300671c1c',
				name: 'Poltergeist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'area burst 1 within 10',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: 'The sage ghost animates objects in the area, causing them to become necrotically charged and turning them into a barrage of missile weapons; 2d6+7 necrotic damage and the target is dazed (save ends).',
				damage: '2d6+7 necrotic damage and the target is dazed (save ends)',
				category: 1
			},
			{
				id: '7e4a937d-83fd-4c0b-9266-cd3f41fb0e35',
				name: 'Burst of Terror',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d6+7 necrotic damage, the target is pushed 3 squares, and the target is immobilized (save ends).',
				damage: '1d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'e9f38087-90a6-43ac-9f6c-b294defe87b3',
				name: 'Departed Knowledge',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'the area is suddenly filled with ghostly wisps of mist that chill the bone and seep into the brain; the target is slowed and suffers a -2 penalty to attack rolls and skill and ability checks until the end of the sage ghost’s next turn.',
				damage: 'the target is slowed and suffers a -2 penalty to attack rolls and skill and ability checks until the end of the sage ghost’s next turn',
				category: 3
			},
			{
				id: '679ff635-2df5-4e06-a328-81e0e8ef9520',
				name: 'Spectral Redirection',
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
				details: 'The missed ghost shifts 2 squares and makes a spirit touch attack.',
				damage: 'The missed ghost shifts 2 squares and makes a spirit touch attack',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '906a199c-e929-4580-9fad-88ad1b576511',
		name: 'Shadow Hydra',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'reptile',
		level: 17,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +18; all-around vision, low-light vision',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 2,
			modifier: -4,
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
		hp: 816,
		initiative: 14,
		ac: 29,
		fortitude: 30,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '407062f1-4773-43f6-b4f2-2b1ab069a5c6',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+5 damage, and the target takes ongoing 10 poison damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '29edf604-54f8-4db3-b8b2-3b0f9e40eea3',
				name: 'Poison Spit',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '1d8+5 poison damage.',
				damage: '1d8+5 poison damage',
				category: 1
			},
			{
				id: 'cbc2ccf3-9aa2-4175-8ab9-2a101d73affd',
				name: 'Hydra Fury',
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
				details: 'The shadow hydra makes six basic attacks (any combination of bite attacks and poison spit attacks). For each basic attack that hits, subsequent attacks gain a cumulative +1 bonus to attack rolls until the end of the shadow hydra’s turn. This attack bonus applies only to attacks made with hydra fury.',
				damage: 'subsequent attacks gain a cumulative +1 bonus to attack rolls until the end of the shadow hydra’s turn',
				category: 1
			},
			{
				id: 'da7b7fbf-0473-4347-9bf9-56594e44024b',
				name: 'Many-Headed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Each time the shadow hydra would become dazed or stunned, it loses one attack when using hydra fury during its next turn instead. Multiple such effects stack.',
				damage: '',
				category: 0
			},
			{
				id: '12041f4e-d11f-45c6-81e9-64f7710ce582',
				name: 'Regenerating Heads',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The first time the shadow hydra is reduced to or below 600, 400, and 200 hit points, the attack severs or destroys one of its heads. At the start of the hydra’s next turn, two heads grow back in the lost head’s place, and the hydra makes an additional attack when it uses hydra fury.',
				damage: 'The first time the shadow hydra is reduced to or below 600',
				category: 0
			},
			{
				id: 'a760ccf7-8809-4981-bc84-8c1c6da2b15c',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow hydra can make opportunity attacks against all enemies with its reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: 'c5ab3d49-c3f7-4091-b6d9-f8dbf3298aaf',
				name: 'Shadow Shift',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow hydra can shift 1 square.',
				damage: 'The shadow hydra can shift 1 square',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Solo Brute',
		phenotype: 'Large shadow beast (reptile)'
	},
	{
		id: '9197c72d-d037-48d7-b717-af137e916591',
		name: 'Vrock Warwing',
		details: 'This creature looks like an oversized vulture with a hunched posture, mold-encrusted feathers, and sickly patches of purple skin. Its malevolent eyes clearly indicate a demonic intellect.',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 17,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6, fly 8',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Bluff +15, Insight +13',
		equipment: '',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 132,
		initiative: 12,
		ac: 27,
		fortitude: 25,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ffaab45d-8965-4ef9-a049-e034928ae676',
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
				details: 'Reach 2; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '9dad3801-e69d-4ae1-8d90-14fe6b95a3e0',
				name: 'Flyby Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The vrock flies up to 8 squares and makes one melee basic attack at any point during that movement. The vrock doesn’t provoke opportunity attacks when moving away from the target of the attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'a728f9b1-409b-4888-9a02-cc0119f906c3',
				name: 'Stunning Screech',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'deafened creatures are immune; the target is stunned until the end of the vrock’s next turn.',
				damage: '',
				category: 1
			},
			{
				id: '0add65b0-2658-4f0b-abb3-ccd4ea1ed4b7',
				name: 'Spores of Madness',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'demons are immune; 1d10+4 poison damage, and the target is dazed (save ends).',
				damage: '1d10+4 poison damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '10 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Skirmisher',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: 'fedee31b-f031-4bef-8ce9-1c72193d3499',
		name: 'Young Shadow Dragon',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'dragon',
		level: 8,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '8, fly 8 (hover), overland flight 10, swim 8',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Intimidate +9, Stealth +15',
		equipment: '',
		category: 'Dragon',
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
			score: 23,
			modifier: 6,
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 344,
		initiative: 14,
		ac: 23,
		fortitude: 20,
		reflex: 21,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cb6076d9-ce79-4983-a369-6a0e97bf28de',
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
				details: 'Reach 2; 1d8+4 damage, and the target is weakened (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '6224bfc8-9162-47d1-a18e-8a5f7199cf6a',
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
				details: 'Reach 2; 1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '36a222a9-63f6-4618-a88d-ded5ac899a33',
				name: 'Draconic Frenzy',
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
				details: 'The dragon makes a bite attack and a claw attack.',
				damage: '',
				category: 1
			},
			{
				id: '5a4358a5-efc3-4653-99b5-afae0abf1607',
				name: 'Tail Slash',
				action: {
					action: 4,
					trigger: 'when an enemy misses the dragon with a melee attack',
					sustainAction: 0,
					use: 1,
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
				details: 'The dragon attacks the enemy that missed it; 1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 5
			},
			{
				id: '22ba3261-1a4e-42bd-8b70-af43d9244192',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d6+5 necrotic damage, and the target loses one healing surge and is weakened (save ends). Aftereffect: The target’s necrotic resistance is negated until the end of the encounter. Miss: Half damage, and the target does not lose a healing surge.',
				damage: '2d6+5 necrotic damage',
				category: 1
			},
			{
				id: '85d0a5ea-4299-463c-806c-f26d31fb2a3d',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dragon’s breath weapon recharges, and the dragon uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '86662fc0-7fd6-42c7-b636-47a5655be7cb',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is dazed until the end of the dragon’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls (save ends)',
				category: 1
			},
			{
				id: '8ee40fcb-ad8e-4275-99fd-e4118dd77092',
				name: 'Globe of Darkness',
				action: {
					action: 3,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: null,
				description: '',
				details: 'this power creates a zone of darkness that remains in place until the end of the dragon’s next turn. The zone blocks line of sight for all creatures except the dragon. Any creature entirely within the area (except the dragon) is blinded.',
				damage: '',
				category: 5
			},
			{
				id: '4667aac6-cffa-45f1-9092-22f3ede5efbe',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow dragon deals an extra 1d6 damage against a target it has combat advantage against.',
				damage: 'the shadow dragon deals an extra 1d6 damage against a target it has combat advantage against',
				category: 0
			},
			{
				id: '2b114b23-43c5-4023-9685-931078cf0ef4',
				name: 'Shadow Walk',
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
				details: 'The shadow walker turns invisible until the end of its next turn or until it attacks when it moves 3 or more squares on its turn.',
				damage: 'The shadow walker turns invisible until the end of its next turn or until it attacks when it moves 3 or more squares on its turn',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: 'radiant (whenever a shadow dragon takes radiant damage, one of its globes of darkness ends)',
		immune: '',
		tactics: '',

		info: 'Level 8 Solo Lurker',
		phenotype: 'Large shadow beast (dragon)'
	},
	{
		id: 'b4b7e2d2-6d9c-4124-b740-c61ceeefe230',
		name: 'Acererak',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 15,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +17',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +19, History +19, Insight +17',
		equipment: 'implement, wand; quarterstaff',
		category: 'Acererak',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 584,
		initiative: 11,
		ac: 29,
		fortitude: 26,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: 'dde60cd0-ad73-4395-9b8e-a41293717627',
				name: 'Arcane Shield',
				keywords: '',
				details: 'aura 1; enemies that end their turn in the aura are pushed 1 square. The aura dissipates when Acererak is bloodied.'
			}
		],
		powers: [
			{
				id: '3112d39b-bf45-44d6-af21-8264b4e72a5a',
				name: 'Dazzling Touch',
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
				details: '1d10+6 damage, and the target is dazed (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '4f191673-aad0-414f-9d93-fe187b07d8f6',
				name: 'Acererak’s Missiles',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '1d10+6 damage, and one other enemy within 2 squares of the target takes the same damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '4888cdfa-4c64-42ae-8ba7-51685d31ef01',
				name: 'Acererak’s Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '1d10+6 cold damage, and ongoing 5 cold damage and the target is slowed (save ends both).',
				damage: '1d10+6 cold damage',
				category: 1
			},
			{
				id: 'c0bb8f44-19b2-4453-860b-44a8d2e2f3c4',
				name: 'Necrotic Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '2d8+6 necrotic damage, and Acererak heals 10 hit points.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: '835f596e-e6ee-4272-82c4-70b3c860710c',
				name: 'Shadow Burst',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 3d10+6 necrotic damage, the target slides 2 squares, and the target is blinded (save ends).',
				damage: '3d10+6 necrotic damage',
				category: 5
			},
			{
				id: '0fdad63d-0db4-4d53-913c-b9d419287cd3',
				name: 'Prismatic Beams',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Poison',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; ',
				damage: '',
				category: 1
			},
			{
				id: '60900534-cba0-4928-8f31-834d3a65a647',
				name: 'Temporal Warp',
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
				attack: null,
				description: '',
				details: 'Acererak warps time, allowing him to act faster than those around him. For the rest of this round, Acererak gains a +2 bonus to all defenses. In the next round, Acererak acts three times, at initiative count 30, 20, and 10. At each of these counts, he gets to perform a standard action, a move action, and a minor action. At the end of this round, Acererak takes 20 damage. In the round after that, he acts normally at his original count in the initiative order',
				damage: 'acererak takes 20 damage',
				category: 5
			},
			{
				id: '548397a5-e69c-4915-b195-ae18d36b11d7',
				name: 'Feather Fall',
				action: {
					action: 7,
					trigger: 'when acererak falls',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Acererak takes no damage from the fall, regardless of the distance, and does not fall prone at the end of the fall.',
				damage: 'acererak takes no damage from the fall',
				category: 5
			},
			{
				id: 'b1f931e6-0dcb-4692-98de-e54909c3699f',
				name: 'Summon Spectral Servant',
				action: {
					action: 3,
					trigger: '1/round',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Acererak summons a spectral servant. The servant appears in one of the magic circles. Acererak can summon up to a total of 5 spectral servants during the course of an encounter. When a spectral servant is destroyed, Acererak takes 10 damage and gains +1d8 necrotic damage on his next damage roll',
				damage: 'acererak takes 10 damage and gains +1d8 necrotic damage on his next damage roll',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Solo Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '4285a9cd-b05e-4cc0-a20b-9d695eda2fce',
		name: 'Argent Haunt (Ghost)',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +15',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 77,
		initiative: 14,
		ac: 29,
		fortitude: 26,
		reflex: 27,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '88d2e63e-c66f-479d-8b4b-31b4143a9707',
				name: 'Grave Touch',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d10 + 6 necrotic damage.',
				damage: '1d10 + 6 necrotic damage',
				category: 1
			},
			{
				id: '34d233e6-899c-4a38-b2ed-d449237a93b1',
				name: 'Fading Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'The Argent haunt turns invisible as a standard action and shifts 2 squares. On its next turn, it shifts 2 squares, turns visible, and makes an attack.; 2d8 + 6 necrotic damage, and the target is pushed 2 squares.',
				damage: '2d8 + 6 necrotic damage',
				category: 1
			},
			{
				id: 'ad8864ac-2197-44ef-9292-3333783d26f2',
				name: 'Frightening Moan',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8 + 6 necrotic damage, the target is pushed 5 squares.',
				damage: '2d8 + 6 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 15 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '05fc372a-4415-4519-819b-06d16875398e',
		name: 'Astral Giant',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'giant',
		level: 16,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '8 see also astral leap',
		alignment: 'Unaligned',
		languages: 'Giant, Supernal',
		skills: 'Athletics +21, Religion +16',
		equipment: 'plate armor; spear',
		category: 'Giant',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 160,
		initiative: 14,
		ac: 32,
		fortitude: 31,
		reflex: 27,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '12a32e10-8dbf-41e6-bdc4-e75395d38cb9',
				name: 'Spear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+7 radiant damage. The target is marked until the end of the astral giant’s next turn.',
				damage: '2d8+7 radiant damage',
				category: 1
			},
			{
				id: '6bc8e486-22d2-498c-8e39-10d00fcc61c6',
				name: 'Astral Resonance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares, it receives a +2 bonus to attack rolls.',
				damage: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares',
				category: 0
			},
			{
				id: 'd5fb0160-2a1c-471a-a09d-aac978493be3',
				name: 'Astral Leap',
				action: {
					action: 2,
					trigger: 'only within the astral sea; recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant can fl y up to 10 squares.',
				damage: 'The astral giant can fl y up to 10 squares',
				category: 5
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

		info: 'Level 16 Soldier',
		phenotype: 'Large immortal humanoid (giant)'
	},
	{
		id: 'f1dd3f7c-1d15-4a85-adb3-793ed228643c',
		name: 'Astral Giant Lightpriest',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'giant',
		level: 17,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '8 see also astral leap',
		alignment: 'Unaligned',
		languages: 'Giant, Supernal',
		skills: '',
		equipment: 'holy symbol; quarterstaff',
		category: 'Giant',
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
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 164,
		initiative: 13,
		ac: 31,
		fortitude: 30,
		reflex: 28,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9187cdae-ec50-4a45-8146-11e5a1a66b17',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 radiant damage.',
				damage: '2d6+7 radiant damage',
				category: 1
			},
			{
				id: '952b7e30-ebde-4fca-866f-c4645b9737c9',
				name: 'Lightwave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '(standard',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d6+7 radiant damage, and the target is pushed 3 squares.',
				damage: '1d6+7 radiant damage',
				category: 1
			},
			{
				id: 'b78db43c-b723-4b83-98f6-99556501e11c',
				name: 'Blinding Light',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '2d8+7 radiant damage, and the target is blinded until the end of the astral giant’s next turn.',
				damage: '2d8+7 radiant damage',
				category: 1
			},
			{
				id: '562d40e9-706a-4a39-84ac-506498cd9b6c',
				name: 'Life-Absorbing Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Radiant',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d8+7 radiant damage, and the astral giant and all allies in the burst regain 20 hit points.',
				damage: '1d8+7 radiant damage',
				category: 1
			},
			{
				id: '6cd0c65c-61c6-4ce4-b072-280500fdaf62',
				name: 'Lighttrap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d6+7 radiant damage, and the target is slowed (save ends). First failed save: Target takes 5 radiant damage and is immobilized (save ends). Second failed save: Target takes 10 radiant damage and is restrained (save ends).',
				damage: '3d6+7 radiant damage',
				category: 1
			},
			{
				id: '344f850b-da94-42dd-b5ae-06a2cc41de7a',
				name: 'Astral Resonance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares, it receives a +2 bonus to attack rolls.',
				damage: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares',
				category: 0
			},
			{
				id: 'cf005084-7267-45e4-b6a9-41d505b6c2b4',
				name: 'Astral Leap',
				action: {
					action: 2,
					trigger: 'only within the astral sea; recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant can fly up to 10 squares.',
				damage: 'The astral giant can fly up to 10 squares',
				category: 5
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

		info: 'Level 17 Controller (L)',
		phenotype: 'Large immortal humanoid (giant)'
	},
	{
		id: '993607a6-f206-49f9-9785-c4ed60f846b4',
		name: 'Astral Giant Star-strider',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'giant',
		level: 17,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '8 see also astral leap',
		alignment: 'Unaligned',
		languages: 'Giant, Supernal',
		skills: '',
		equipment: 'crossbow; longsword',
		category: 'Giant',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 128,
		initiative: 17,
		ac: 31,
		fortitude: 29,
		reflex: 29,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ddb17409-d255-488b-9914-3ed6f8dbdb92',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+7 radiant damage.',
				damage: '2d8+7 radiant damage',
				category: 1
			},
			{
				id: '401d87a0-aea6-47ab-8293-ef174aeb6411',
				name: 'Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '(standard',
				range: 'Ranged 15/30',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+7 radiant damage.',
				damage: '2d8+7 radiant damage',
				category: 1
			},
			{
				id: '68a6c6d3-b62e-4147-893f-54c9c7a62fed',
				name: 'Astral Shadows',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '(enemies only)1d8+7 radiant damage, and the astral giant becomes invisible until the end of its next turn.',
				damage: '(enemies only)1d8+7 radiant damage',
				category: 1
			},
			{
				id: '350a2e96-cf1d-45a1-9bfb-a33e6b77097a',
				name: 'Star-stride',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Radiant, Teleportation',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d8+7 radiant damage, and the astral giant teleports 3 squares and gains combat advantage against all enemies until the end of its next turn.',
				damage: '3d8+7 radiant damage',
				category: 1
			},
			{
				id: '303acbf2-28a9-4e59-ad60-e33e2bd7b10f',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the astral giant deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '5a1391ae-7021-475f-9a43-02a2ca469d69',
				name: 'Astral Resonance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares, it receives a +2 bonus to attack rolls.',
				damage: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares',
				category: 0
			},
			{
				id: '268b809c-8806-4767-94ee-e14b43c5c26a',
				name: 'Astral Leap',
				action: {
					action: 2,
					trigger: 'only within the astral sea; recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant can fly up to 10 squares.',
				damage: 'The astral giant can fly up to 10 squares',
				category: 5
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

		info: 'Level 17 Lurker',
		phenotype: 'Large immortal humanoid (giant)'
	},
	{
		id: '04fc5321-2fee-4eec-95c0-788da2f0aabe',
		name: 'Astral Giant Warpsword',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'giant',
		level: 16,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8 see also astral leap',
		alignment: 'Unaligned',
		languages: 'Giant, Supernal',
		skills: 'Athletics +21, Religion +16',
		equipment: 'greatsword',
		category: 'Giant',
		strength: {
			score: 24,
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 158,
		initiative: 15,
		ac: 30,
		fortitude: 28,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0f0cdad5-6baf-4682-b9ee-354d2a136352',
				name: 'Warpsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+7 damage, plus ongoing 5 radiant damage (save ends).',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: 'c30ce35d-7598-445e-9dea-05f3583a07b9',
				name: 'Dimensional Blow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Radiant, Teleportation, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+10 radiant damage, the target is teleported 5 squares, and the target is dazed until the end of its next turn.',
				damage: '2d10+10 radiant damage',
				category: 1
			},
			{
				id: '734ab755-6984-448f-a830-9e540a863386',
				name: 'Astral Retreat',
				action: {
					action: 1,
					trigger: 'immediate reaction when damaged by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant teleports 2 squares.',
				damage: 'The astral giant teleports 2 squares',
				category: 5
			},
			{
				id: '6cd8cd1d-1eac-426f-b522-c34740da2783',
				name: 'Astral Resonance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares, it receives a +2 bonus to attack rolls.',
				damage: 'As long as the astral giant has an unbloodied astral giant ally within 10 squares',
				category: 0
			},
			{
				id: '510c130a-d06a-4f7e-addf-9c3250ea2a15',
				name: 'Astral Leap',
				action: {
					action: 2,
					trigger: 'only within the astral sea; recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral giant can fly up to 10 squares.',
				damage: 'The astral giant can fly up to 10 squares',
				category: 5
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

		info: 'Level 16 Skirmisher',
		phenotype: 'Large immortal humanoid (giant)'
	},
	{
		id: '3deb7837-c41a-4943-815c-f01bee2a9d5e',
		name: 'Azer Flameward',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'fire',
		level: 19,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Giant',
		skills: '',
		equipment: '',
		category: 'Azer',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 18,
			modifier: 4,
			cost: 16
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
		hp: 181,
		initiative: 15,
		ac: 33,
		fortitude: 31,
		reflex: 29,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: '52678968-b0bb-4299-81d4-566e7c411311',
				name: 'Warding Flame',
				keywords: '',
				details: '(Fire) Any enemy adjacent to two or more azers at the start of its turn takes 5 fire damage.'
			}
		],
		powers: [
			{
				id: '2c04b436-2651-4d3a-a939-230f15ae55bd',
				name: 'Glaive',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+7 damage plus 2d6 fire damage.',
				damage: '1d10+7 damage plus 2d6 fire damage',
				category: 1
			},
			{
				id: 'e439a84a-a32c-49b1-83a7-a302d1c431fd',
				name: 'Flameward',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the azer flameward',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The azer flameward shifts 5 squares and the enemy that triggered this reaction takes ongoing 10 fire damage (save ends).',
				damage: 'the azer flameward shifts 5 squares and the enemy that triggered this reaction takes ongoing 10 fire damage (save ends)',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -30
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Skirmisher',
		phenotype: 'Medium elemental humanoid (fire)'
	},
	{
		id: '9ca10004-1c14-4f54-a2ac-766acd4cb182',
		name: 'Behir Young Adult',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +12; tremorsense 10',
		movement: '7, climb 5',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: '',
		equipment: '',
		category: '',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 500,
		initiative: 0,
		ac: 28,
		fortitude: 25,
		reflex: 24,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: 'd607211e-5873-44e2-b648-cc44c1d725e2',
				name: 'Lightning Storm',
				keywords: '',
				details: 'aura 5; an enemy that starts its turn in the aura takes 5 lightning damage.'
			}
		],
		powers: [
			{
				id: '297dd9db-6775-43c8-8f2d-c55a8fae8485',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'reach 3; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '676b0426-dba0-48a1-a9a8-e812ecdac70e',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 1d8+5 damage plus 1d8 lightning damage.',
				damage: '1d8+5 damage plus 1d8 lightning damage',
				category: 1
			},
			{
				id: '4cb96c5e-11bc-43af-9e25-60e540cca52d',
				name: 'Devour',
				action: {
					action: 1,
					trigger: 'recharges when no creature is affected by this power',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 2d6+5 damage, and a Medium or smaller target is swallowed. A swallowed target is grabbed and restrained (escape ends both). A swallowed creature has line of sight and line of effect only to the behir, and no creature has line of sight or line of effect to it. A creature that escapes the grab is no longer swallowed and appears in a space adjacent to the behir. A behir can move normally and use other attacks against other targets while it has a target grabbed in this way. When the behir dies, the target can escape as a move action, appearing adjacent to the behir’s former space.',
				damage: '2d6+5 damage',
				category: 5
			},
			{
				id: '6914ea6b-766e-4a98-8000-d370a82fb8df',
				name: 'Devouring Damage',
				action: {
					action: 7,
					trigger: '1/turn; affects target grabbed by devour only',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target takes 5 damage.',
				damage: 'the target takes 5 damage',
				category: 5
			},
			{
				id: '6c59c598-5734-4d26-9d4e-68ce897b60ee',
				name: 'Lightning Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '3d8+5 lightning damage and the target is dazed. Miss: Half damage.',
				damage: '3d8+5 lightning damage and the target is dazed',
				category: 1
			},
			{
				id: 'afd9f250-0af9-49cb-8623-11a6b6f10dff',
				name: 'Thunderleg Stomp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '1d8+5 damage, and the target is knocked prone.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '26bec675-a876-4d6c-960e-eab38c713fc6',
				name: 'Lightning Leap',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The behir acts three times in a round, on initiative counts 30, 20, and 10. It cannot delay or ready actions. On each turn in the round, it has a standard action to use. It can turn a standard action into a move action if it wants. It can use one immediate action between each turn.',
				damage: 'on initiative counts 30',
				category: 0
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

		info: 'Level 12 Solo Soldier',
		phenotype: 'Huge natural beast'
	},
	{
		id: '68462ce4-ca03-4ebb-8d9d-1c1190f24d56',
		name: 'Bone Naga Arcanist',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'undead',
		level: 18,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Draconic, Supernal',
		skills: 'Arcana +19, History +19, Insight +19, Religion +19',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 360,
		initiative: 12,
		ac: 32,
		fortitude: 32,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: 'c190ab47-215d-43bf-a5b1-67f2b8553a5a',
				name: 'Death Rattle',
				keywords: '',
				details: '(Necrotic) aura 2; enemies that start their turns in the aura are dazed.'
			}
		],
		powers: [
			{
				id: 'c1e9f13e-fff0-494e-a6fc-45255133aca7',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4+7 damage, and ongoing 5 necrotic damage (save ends). Aftereffect: The target is weakened (save ends).',
				damage: '2d4+7 damage',
				category: 1
			},
			{
				id: 'e2e81925-b15d-4420-9fc2-d95c7c9960ba',
				name: 'Death Dance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'blind creatures are immune; 2d6+7 necrotic damage and the target is dazed (save ends). If the target is already dazed, it takes an additional 2d6 + 7 necrotic damage.',
				damage: '2d6+7 necrotic damage and the target is dazed (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
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

		info: 'Level 18 Elite Controller',
		phenotype: 'Large immortal beast (undead)'
	},
	{
		id: '5ec5df0a-fe6a-4531-99bc-03634a54b212',
		name: 'Breven Foss',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +18',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Arcana +17, Insight +18, Religion +17',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 264,
		initiative: 7,
		ac: 27,
		fortitude: 25,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '062b6fd3-fada-4ad4-a300-80f1534a3f04',
				name: 'Elemental Energy',
				keywords: '',
				details: 'aura 10; each elemental ally within the aura regenerates 10 hp at the start of its turn.'
			}
		],
		powers: [
			{
				id: '5b9a3beb-d018-4838-bdab-8a4a73782478',
				name: 'Fire Touch',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d10+6 fire damage, and the target takes a –2 penalty to attack rolls until the end of Foss’s next turn.',
				damage: '1d10+6 fire damage',
				category: 1
			},
			{
				id: '282f276c-e0fa-4bdc-abc2-494bc677d796',
				name: 'Frost Bolt',
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
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '2d8+6 cold damage, and until the end of Foss’s next turn, the target is slowed and takes a –2 penalty to all defenses.',
				damage: '2d8+6 cold damage',
				category: 1
			},
			{
				id: '446ef4aa-08b4-472e-b828-a0ea1b4ea3fe',
				name: 'Elemental Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d10+6 cold and fire damage, Foss slides the target 3 squares, and the target is dazed (save ends).',
				damage: '1d10+6 cold and fire damage',
				category: 1
			},
			{
				id: 'ef073b7e-c13e-444e-9653-e31246ae24f7',
				name: 'Elemental Recall',
				action: {
					action: 4,
					trigger: 'when foss is reduced to 132 hp or fewer',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'close burst 5',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: 'Foss teleports away to a predetermined location; 3d10 + 6 cold and fire damage.',
				damage: '3d10 + 6 cold and fire damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '157e6914-9749-4606-a410-7d8ed0ffc252',
		name: 'Champion Wight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 17,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +18',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 328,
		initiative: 14,
		ac: 33,
		fortitude: 31,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7b8254fa-290f-493f-981a-f2afeb8fc54f',
				name: 'Souldraining Longsword',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d8 + 11 necrotic damage (crit 4d8 + 27), and the target loses a healing surge and is immobilized (save ends).',
				damage: '2d8 + 11 necrotic damage (crit 4d8 + 27)',
				category: 1
			},
			{
				id: '9a77472c-84ea-48b1-8d9a-0ea0e5946b3e',
				name: 'Double Attack',
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
				attack: null,
				description: '',
				details: 'The champion wight makes two souldraining longsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'f79cf0b6-fd1e-4317-bde1-c67f2b6b291f',
				name: 'Soul Reaping',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'affects an immobilized target only; 3d8 + 7 necrotic damage, and the champion wight regains 25 hit points.',
				damage: '3d8 + 7 necrotic damage',
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

		info: 'Level 17 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '38536f5f-1af0-432f-bdc1-b667b39ecc11',
		name: 'Demon Furor',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon, Shadow',
		level: 12,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +14',
		movement: '4, fly 4 (hover)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 2,
			modifier: -4,
			cost: 0
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
		hp: 488,
		initiative: 17,
		ac: 26,
		fortitude: 24,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5500d575-a9fe-4ad3-a85f-de77bc5fd590',
				name: 'Angry Tendril Strike',
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
				details: 'Reach 3; 2d6+5 damage, and the target is pulled 2 squares.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '881223ff-66c8-4251-a58e-8306163d3b2f',
				name: 'Flurry of Tendril Strikes',
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
				details: 'The demon furor makes three angry tendril strike attacks.',
				damage: '',
				category: 1
			},
			{
				id: '0eb68d05-952e-43d8-86e9-22be998016f9',
				name: 'Debilitating Anger',
				action: {
					action: 3,
					trigger: '1/round',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'the target takes a –2 penalty to AC and Reflex defenses (save ends).',
				damage: '',
				category: 5
			},
			{
				id: 'b50eb7f5-aaab-4d8e-88ea-238b8a778f29',
				name: 'Blinding Fear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '1d8+5 damage, the target is pushed 3 squares, and the target is blind (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '0eabd795-696d-4bbc-a1a8-35db3f24dc25',
				name: 'Infectious Rage',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '1d8+5 damage, and the target makes an immediate basic melee or basic ranged attack against its closest ally.',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'a896b1fd-2bfb-4c60-bf4f-f2b5a2bdebb6',
				name: 'Bloodied Fury',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While bloodied, the demon furor gains a +2 bonus to attacks, an additional +1d6 to all damage rolls, and it takes a –2 penalty to AC and Reflex defenses.',
				damage: 'an additional +1d6 to all damage rolls',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Solo Skirmisher',
		phenotype: 'Large elemental beast (demon, shadow)'
	},
	{
		id: '24caa853-28ce-4f2c-8d43-303b2be237ce',
		name: 'Demon Manipulator',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 11,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +13, Bluff +16, Insight +15, Streetwise +16',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 448,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cf9899bd-efd2-432d-9484-b0d39792ce4a',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '2f4434e0-ed52-4de3-8954-e7f8c0c3c360',
				name: 'Ray of Manipulation',
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
					defence: 3
				},
				description: '',
				details: '1d8+5 damage, and the target is dominated (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'e3da0f53-844f-4dd6-ae9f-1e8bb56f68b4',
				name: 'Deceptive Attack',
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
				details: 'The demon manipulator makes either two claw attacks or two ray of manipulation attacks.',
				damage: '',
				category: 1
			},
			{
				id: '829217cc-0a02-45d8-beef-ee99fb12ef9a',
				name: 'Whispers of Manipulation',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: '2d6+5 damage, and the target slides 3 squares and is dazed (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '75d91d79-956e-4f74-9fd1-d56087c00130',
				name: 'Demonic Suggestion',
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
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8+5 damage, and the target is pushed 2 squares and immobilized (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '937332ab-96cd-48e4-818b-1d99f9a04359',
				name: 'Demonic Manifestation',
				action: {
					action: 3,
					trigger: '1/round; when bloodied only',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The demon manipulator spawns a demonic manifestation in an adjacent square.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
			},
			{
				type: 9,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Solo Controller',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '5c2ab9bd-fbd5-412f-9d15-7641e6278b23',
		name: 'Demonic Manifestation',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '4, fly 8',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 8,
		ac: 25,
		fortitude: 23,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5b374a06-e0b0-4ee5-809b-a72584a75141',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '9 damage.',
				damage: '9 damage',
				category: 1
			},
			{
				id: '42877dc2-7228-4b0e-91ba-07003df4802e',
				name: 'Sudden Strike',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'The manifestation flies up to 8 squares, avoiding opportunity attacks along the way. It attacks once at any time during its movement; 9 damage.',
				damage: '9 damage',
				category: 1
			},
			{
				id: 'c0a0c299-5dae-4109-8cd0-6c89541f5914',
				name: 'Demonic Persuasion',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is pulled 2 squares toward the manifestation. Then the manifestation explodes, dealing 9 damage to every enemy that is adjacent to it. This destroys the manifestation.',
				damage: 'dealing 9 damage to every enemy that is adjacent to it',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '4ebd7732-de6f-45b1-970e-954c927acc0a',
		name: 'Dire Winter Wolf Iceclaw',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 17,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; low-light vision',
		movement: '8 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Stealth +22 (+5 to Stealth checks when in ice or snow)',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 168,
		initiative: 19,
		ac: 31,
		fortitude: 29,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3cf375b1-a48c-4ce4-b4da-a4c37669063a',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage plus 1d8 cold damage.',
				damage: '1d10+7 damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: 'ebd306e3-4aa1-456d-8e78-1fea702c8caf',
				name: 'Claw and Run',
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
					defence: 0
				},
				description: '',
				details: 'Two attacks against one or two targets; 1d8+7 cold damage per attack. After the first or second attack, the dire winter wolf can shift 4 squares.',
				damage: '1d8+7 cold damage per attack',
				category: 1
			},
			{
				id: '4823116e-4440-49cb-b009-5c76669beb6a',
				name: 'Freezing Breath',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d8+7 cold damage, and ongoing 5 cold damage (save ends). Miss: Half damage.',
				damage: '2d8+7 cold damage',
				category: 1
			},
			{
				id: 'a087fbd9-8169-4aad-a564-8ab78e12ae45',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dire winter wolf gains combat advantage against a target that has one or more of the dire winter wolf’s allies adjacent to it. The dire winter wolf deals an extra 2d6 cold damage on attacks against any target it has combat advantage against.',
				damage: 'the dire winter wolf deals an extra 2d6 cold damage on attacks against any target it has combat advantage against',
				category: 0
			},
			{
				id: '212b8fdb-c17d-4b2c-a3ff-ee6dacf272b1',
				name: 'Slipstream',
				action: {
					action: 4,
					trigger: 'when an attack damages the dire winter wolf',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dire winter wolf shifts 4 squares and gains +2 to all defenses until the start of its next turn.',
				damage: 'The dire winter wolf shifts 4 squares and gains +2 to all defenses until the start of its next turn',
				category: 5
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

		info: 'Level 17 Skirmisher',
		phenotype: 'Large natural beast'
	},
	{
		id: 'aca8a913-01a6-4c98-8ad7-7bccc84a2106',
		name: 'Djinn Windsword',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'air',
		level: 17,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; blindsight 10',
		movement: '6, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Bluff +18, Insight +19, Nature +19, Thievery +19',
		equipment: 'scimitar',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 19,
			modifier: 4,
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
		hp: 162,
		initiative: 16,
		ac: 33,
		fortitude: 31,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6f8b8eb8-b5d6-41b0-a513-a350c0988933',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+7 damage (crit 3d8 + 23), and the target is marked until the end of the djinn windsword’s next turn.',
				damage: '2d8+7 damage (crit 3d8 + 23)',
				category: 1
			},
			{
				id: '9cdcbe57-be55-4c5f-80f5-59130f9240c1',
				name: 'Come to Me',
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
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'the djinn windsword pulls the target 5 squares.',
				damage: 'the djinn windsword pulls the target 5 squares',
				category: 3
			},
			{
				id: '9a64c54c-4dda-4644-8b6d-3218c2912a0e',
				name: 'Wind Vortex',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'the target slides 3 squares.',
				damage: 'the target slides 3 squares',
				category: 1
			},
			{
				id: '9fd41a1c-4051-4afe-8536-16f0c762bd4f',
				name: 'Whirlwind Dervish',
				action: {
					action: 1,
					trigger: 'recharges when the djinn windsword is struck by a critical hit',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning, Thunder',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '3d10+6 lightning and thunder damage.',
				damage: '3d10+6 lightning and thunder damage',
				category: 5
			},
			{
				id: '24a3bca8-3097-4b18-903d-454d1acdd8be',
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
				details: 'A djinn windsword can alter its physical form to appear as an attractive Medium humanoid of any race or gender.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 5,
				value: -15
			},
			{
				type: 10,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Soldier',
		phenotype: 'Large elemental humanoid (air)'
	},
	{
		id: '84bca5fc-4342-4555-8f4a-297f0c0b09a6',
		name: 'Doppelganger Rogue',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 16,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Giant',
		skills: 'Bluff +17, Insight +14, Stealth +17',
		equipment: '',
		category: 'Doppelganger',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 150,
		initiative: 14,
		ac: 30,
		fortitude: 28,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b7edeba8-f7eb-4e75-b0c1-a343b9a33f71',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: 'bd53f424-3101-43ec-a0c3-25531f1f8aec',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'the doppelganger gains combat advantage against the target until the end of the doppelganger’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '8be63a55-6652-4f6b-9534-dfd13771d29e',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The doppelganger sneak deals an extra 3d8 damage against any target it has combat advantage against.',
				damage: 'the doppelganger sneak deals an extra 3d8 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: 'bfd6a7d0-5f86-49a9-b489-3a32993aef64',
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

		info: 'Level 16 Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'fec0f9b3-4947-4be7-b75e-4656172042a8',
		name: 'Drider Battlelord',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: 'spider',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '8, climb 8 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Giant, Elven',
		skills: 'Dungeoneering +15, Stealth +17',
		equipment: 'greatsword; leather armor',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 13,
			modifier: 1,
			cost: 3
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
		hp: 182,
		initiative: 12,
		ac: 27,
		fortitude: 28,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95234cad-f0fb-46de-b814-f78f03f04a90',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d12+8 damage.',
				damage: '1d12+8 damage',
				category: 1
			},
			{
				id: 'e21f58aa-714f-4b0e-aa42-918e54c0d931',
				name: 'Quick Bite',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'Requires combat advantage; 1d4+1 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d4+1 damage',
				category: 3
			},
			{
				id: 'dbddd788-060c-482d-ba57-eb119866ab8a',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'until the end of the drider’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: 'f5ebbdc2-785c-4216-bcf9-30255a3e9323',
				name: 'Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: 'the target is restrained (until escape). Escaping from the web requires a successful DC 25 Acrobatics check or DC 27 Athletics check.',
				damage: 'Escaping from the web requires a successful DC 25 Acrobatics check or DC 27 Athletics check',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Brute',
		phenotype: 'Large fey humanoid (spider)'
	},
	{
		id: '1ae78c52-09ac-46a9-a88e-3af5e2707adb',
		name: 'Drow Arcanist',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +17, Nature +19, Religion +17',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 156,
		initiative: 10,
		ac: 31,
		fortitude: 26,
		reflex: 29,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1c55035c-e098-439e-9fc6-185239562688',
				name: 'Dagger',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d4+9 damage, and the drow arcanist makes a secondary attack against the same target. Secondary Attack: +21 vs. Fortitude; see drow poison for the effect.',
				damage: '1d4+9 damage',
				category: 1
			},
			{
				id: '6bbe2267-d605-4651-98f9-15a69d6bebec',
				name: 'Shadow Missile',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '1d10+7 necrotic damage, and the target is slowed (save ends).',
				damage: '1d10+7 necrotic damage',
				category: 1
			},
			{
				id: 'e9b6dbb6-d6b2-4e63-a99e-c550bd5df2e4',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow arcanist’s next turn, the target grants combat advantage to all attacks, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '54a34620-d15e-45fd-b6a0-c3e436483255',
				name: 'Shadow Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '5d6+7 fire damage, and the target is immobilized (save ends).',
				damage: '5d6+7 fire damage',
				category: 1
			},
			{
				id: '7e63227e-2a48-484f-8db0-51e73d906b72',
				name: 'Drow Poison',
				action: null,
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature hit by a weapon coated in drow poison takes a –2 penalty to attack rolls (save ends). First Failed Saving Throw: The target is also weakened (save ends). Second Failed Saving Throw: The target falls unconscious until the end of the encounter.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'ae5b201c-35d5-4198-ac3f-4688be6ea013',
		name: 'Drow Matron',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '7',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Bluff +19, Insight +21, Intimidate +19, Religion +21, Stealth +17',
		equipment: 'chainmail; mace',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 304,
		initiative: 12,
		ac: 32,
		fortitude: 25,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [
			{
				id: 'e661f482-522c-4a51-b828-464e986aafb1',
				name: 'Lolth’s Authority',
				keywords: '',
				details: 'aura 5; drow and spider allies in the aura gain a +1 bonus to attack rolls and a +2 bonus to damage rolls.'
			}
		],
		powers: [
			{
				id: '7d57932f-6a8f-48da-87df-068a57ad4490',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '5dfc0c05-5ac3-4a75-a5e3-2eefb74df910',
				name: 'Wrath of the Spider Queen',
				action: {
					action: 4,
					trigger: 'when the drow matron is hit by a melee attack',
					sustainAction: 0,
					use: 1,
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
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 5
			},
			{
				id: '56a7fa41-a8a3-498b-96e9-81e69156b526',
				name: 'Webs of Madness',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'Burst 2 within 20; 2d10+9 psychic damage, and the target is dazed and slowed (save ends both).',
				damage: '2d10+9 psychic damage',
				category: 1
			},
			{
				id: '7598be03-5781-4f87-a678-6cdbd787130b',
				name: 'Lolth’s Rebuke',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'target is weakened and dazed (save ends both). If the target is slain while weakened and dazed, it explodes in a burst 3: +17 vs. Reflex; 3d6 + 7 poison damage.',
				damage: '3d6 + 7 poison damage',
				category: 3
			},
			{
				id: '9473ec73-128a-4142-aec9-fbed65ac63f9',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow matron’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '360a3920-ef4d-437c-b431-5e979ae7fa6f',
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
				details: 'The drow matron can transfer up to 75 damage she has taken to a spider or drow within 5 squares of her. She cannot transfer more hit points than the creature has remaining.',
				damage: 'the drow matron can transfer up to 75 damage she has taken to a spider or drow within 5 squares of her',
				category: 3
			},
			{
				id: '1bc5aaee-0005-4300-8730-705818e412b6',
				name: 'Mask of the Matriarch',
				action: {
					action: 5,
					trigger: 'when the drow matron is targeted by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target moves its speed away from the drow matron.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Elite Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'daefd80a-e030-4f1c-aecf-b9f884b61478',
		name: 'Drow Noble',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 18,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +20; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven, Giant',
		skills: 'Bluff +19, Diplomacy +19, Insight +20, Stealth +16',
		equipment: 'chainmail; longsword',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 164,
		initiative: 11,
		ac: 32,
		fortitude: 27,
		reflex: 29,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: '73bdb6b9-0bd0-4fd3-b316-da6ad4de6cc4',
				name: 'Noble Authority',
				keywords: '',
				details: 'aura sight; drow and spider allies in the aura gain a +2 bonus to attack rolls and a +2 bonus to damage rolls.'
			}
		],
		powers: [
			{
				id: '19bd0d9d-7566-4dbe-a4d9-40e42a651bf8',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d8+9 damage.',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: 'a36892f5-03e9-4872-be9a-e01c20639547',
				name: 'Fire Web',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '1d10+7 fire damage, and the target is immobilized and gains vulnerable 5 fire (save ends both).',
				damage: '1d10+7 fire damage',
				category: 1
			},
			{
				id: 'ed5b4fc7-981d-4c21-a3ef-1fcafad82bfb',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow noble’s next turn, the target grants combat advantage to all attacks, and the target cannot benefit from invisibility or concealmen.',
				damage: '',
				category: 3
			},
			{
				id: 'a41f5d1b-30bd-42c3-95a6-3c0d5edd8b4c',
				name: 'Shadow Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d10+7 necrotic damage, and the target is blinded (save ends).',
				damage: '4d10+7 necrotic damage',
				category: 1
			},
			{
				id: '141cd61c-00cb-4b9f-994a-5f072d9fe37c',
				name: 'Maddening Oratory',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '3d8+7 psychic damage, and the target is dazed (save ends). Drow allies in the burst gain 10 hit points.',
				damage: '3d8+7 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Controller (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'e6ddb977-14a4-4c84-bc8f-e0e19fb3cba7',
		name: 'Drow Ranger',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Dungeoneering +15, Stealth +18',
		equipment: 'leather armor; longbow; longsword',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 122,
		initiative: 13,
		ac: 29,
		fortitude: 29,
		reflex: 31,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '58c19188-30ac-44de-a481-ceda25e6489b',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '5b7b2cea-a333-44e0-8718-d6d96b7ded7f',
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
				range: 'Ranged 10/20',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage, plus 2d6 quarry damage if the target is the closest enemy.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: 'a8e025c5-409c-414d-a108-86acb5583397',
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
				attack: null,
				description: '',
				details: 'The drow ranger makes two longbow attacks against the same target.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'e1b70eff-bcf6-4f9f-b539-ed7a00a1bad6',
		name: 'Drow Venomblade',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Acrobatics +16, Dungeoneering +12, Intimidate +14, Stealth +18',
		equipment: 'longsword; scale armor; short sword',
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
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 124,
		initiative: 13,
		ac: 27,
		fortitude: 23,
		reflex: 25,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '464c27aa-f8fc-4966-9ba2-3ceebe112bfc',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '1273130a-2c97-42e0-aa17-81589c8137f7',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'a3f80527-bb25-4e15-b017-d6684b9791f9',
				name: 'Blade Mastery',
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
				details: 'The drow venomblade makes one longsword attack and one short sword attack.',
				damage: '',
				category: 1
			},
			{
				id: '402b87f3-2c06-428f-9aa6-43b8f90ec8b0',
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
				details: 'this power creates a cloud of darkness that remains in place until the end of the drow venomblade’s next turn. The cloud blocks line of sight for all creatures except the drow venomblade. Any creature entirely within the cloud (except the drow venomblade) is blinded until it exits.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'f645b036-83c4-4a83-8457-ddbd9c81c8dc',
		name: 'Drow Warblade',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Dungeoneering +15, Intimidate +14, Stealth +17',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 114,
		initiative: 16,
		ac: 30,
		fortitude: 28,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4215368e-764d-429f-b7a4-4a1cf9b4848e',
				name: 'Warblade',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage, and the drow warblade makes a secondary attack against the same target. Secondary Attack: +19 vs. Fortitude; see drow poison for the effect.',
				damage: '1d10+7 damage',
				category: 1
			},
			{
				id: '5003a3fe-adc8-41d3-9d1c-6a6c2feaa5d8',
				name: 'Hand Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: 'Ranged 10/20',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage, and the drow warblade makes a secondary attack against the same target. Secondary Attack: +19 vs. Fortitude; see drow poison for the effect.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '6f2fee18-c748-4d13-b413-2d560751566a',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: 'until the end of the drow warblade’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: 'f347df49-0531-406f-bd1a-29a8c64ca1fb',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The drow warblade deals an extra 3d8 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '5cd978c2-aadb-4d9d-86ee-d0dfe4fe6158',
				name: 'Drow Poison',
				action: null,
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature hit by a weapon coated in drow poison takes a –2 penalty to attack rolls (save ends). First Failed Saving Throw: The target is also weakened (save ends). Second Failed Saving Throw: The target falls unconscious until the end of the encounter.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Lurker',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '2a82932f-b927-4f54-9b68-be8606dacebf',
		name: 'Earth Elemental Battlewall',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'earth',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 168,
		initiative: 9,
		ac: 26,
		fortitude: 26,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: '915bcb0d-6820-4a68-84ad-4d372d743dff',
				name: 'Battlewall',
				keywords: '',
				details: 'aura 2; each ally in the aura and touching the ground receives a +2 bonus to AC and Fortitude defenses.'
			}
		],
		powers: [
			{
				id: 'a2f20f8c-5747-4f18-9053-3e93f501d79a',
				name: 'Earthen Strike',
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
				details: 'Reach 2; 2d12+8 damage, and if the target is bloodied, it is knocked prone.',
				damage: '2d12+8 damage',
				category: 1
			},
			{
				id: '55e28004-cd20-46a9-b361-29b7cddfbb20',
				name: 'Earthstorm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'The ground around the earth elemental churns and explodes. Close burst 2',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '3d10+8 damage, and the target is pushed 2 squares.',
				damage: '3d10+8 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, petrification, poison',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Large elemental beast (earth)'
	},
	{
		id: '873e1522-0e61-4020-8d3b-e69eecb402ac',
		name: 'Earth Elemental Gravelshard',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'earth',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6 earthwalk',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 9,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ae783c4a-ac79-4f20-ac44-6e5c500852da',
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
				details: '8 damage.',
				damage: '8 damage',
				category: 1
			},
			{
				id: '511f39da-de64-4e70-af73-27c925141b86',
				name: 'Gravelshard Collision',
				action: {
					action: 4,
					trigger: 'when an attack misses the gravelshard',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'The gravelshard shifts up to 3 squares to move adjacent to another elemental with the earth keyword, granting that elemental 10 temporary hit points. Then it charges the nearest enemy; 9 and the target is knocked prone.',
				damage: 'The gravelshard shifts up to 3 squares to move adjacent to another elemental with the earth keyword',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium elemental beast (earth)'
	},
	{
		id: '09754af8-e579-4a4d-bef6-812e8057a526',
		name: 'Earth Elemental Quake',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'earth',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 125,
		initiative: 7,
		ac: 22,
		fortitude: 24,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b26f4b4b-fc54-491a-9c2f-eb46b41fd6e7',
				name: 'Granite Punch',
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
				details: 'Reach 2; 2d10+6 damage.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: 'a78f4e4f-785c-4d76-be88-a6a768661697',
				name: 'Earthquake',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'The ground around the earth elemental shakes violently. Close burst 2',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '3d8 + 5 damage, and the target is pushed 2 squares.',
				damage: '3d8 + 5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, petrification, poison',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Large elemental beast (earth)'
	},
	{
		id: '2ee13557-824e-4c8b-99bd-c9f52bda1d84',
		name: 'Earth Giant',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'giant',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6 see also earth step',
		alignment: 'Chaotic Evil',
		languages: 'Giant, Primordial',
		skills: 'Athletics +17',
		equipment: '',
		category: 'Giant',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 8,
			modifier: -1,
			cost: 0
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 170,
		initiative: 6,
		ac: 26,
		fortitude: 28,
		reflex: 22,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '78a77e5c-f3dc-4b36-a0a5-44a82a19146a',
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
				details: 'Reach 2; 2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '5d457690-b036-4a74-a252-365f414cc562',
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
				range: 'Ranged 20',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '9d264db0-eae7-439e-9e7c-344963e58a75',
				name: 'Earth Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The earth giant ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Large elemental humanoid (giant)'
	},
	{
		id: '51c7e551-ecc2-4eef-b674-1272fd2b0bb0',
		name: 'Earth Giant Soldier',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'giant',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6 see also earth step',
		alignment: 'Chaotic Evil',
		languages: 'Giant, Primordial',
		skills: 'Intimidate +13',
		equipment: '',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 150,
		initiative: 12,
		ac: 31,
		fortitude: 30,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '52a71558-f75b-49c5-bc5f-2b8da4a692df',
				name: 'Thunder Maul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Thunder, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+4 thunder damage.',
				damage: '2d10+4 thunder damage',
				category: 1
			},
			{
				id: 'bd065277-b064-47e7-9da6-080324c4a424',
				name: 'Thunder Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Thunder, Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '3d10+6 thunder damage, and the target is dazed (save ends).',
				damage: '3d10+6 thunder damage',
				category: 1
			},
			{
				id: '8c1990f8-d350-49ff-bf87-80514f75977c',
				name: 'Battle Focus',
				action: {
					action: 4,
					trigger: 'when an enemy leaves an adjacent square',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The earth giant soldier makes a melee basic attack against the enemy, even if the enemy is shifting.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '10dab2f8-49ce-4630-88b0-3ddc879d37fd',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The earth giant soldier can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: 'b22c55de-8999-422c-867a-a347a1afbc83',
				name: 'Earth Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The earth giant ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Large elemental humanoid (giant)'
	},
	{
		id: '750a8a40-1157-4256-b1b8-e2c5e848ada1',
		name: 'Earth Giant Stalker',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'giant',
		level: 14,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6 see also earth step',
		alignment: 'Chaotic Evil',
		languages: 'Giant, Primordial',
		skills: 'Stealth +14',
		equipment: '',
		category: 'Giant',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 108,
		initiative: 18,
		ac: 28,
		fortitude: 26,
		reflex: 24,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9c063591-c584-402c-8785-77b28b9a9fd7',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '3bc4d6f1-e858-4272-a2ea-13db708ddb4d',
				name: 'Stone Merge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'The earth giant stalker shifts 3 squares and merges into the ground or a stone wall, disappearing from view. When the earth giant merges, it causes a thunderous shockwave. Close burst 1',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'enemies only; the target is dazed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '12f7295e-5c1c-4883-9a36-6c56d5bae6fb',
				name: 'Deadly Eruption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Can only be used if the earth giant used stone merge in the previous round. The earth giant stalker shifts 3 squares and erupts from the ground or a stone wall, rejoining the battle. Close burst 1',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '3d6+6 damage.',
				damage: '3d6+6 damage',
				category: 1
			},
			{
				id: 'cd5b8707-9244-4adc-8125-6ed7c882f2c7',
				name: 'Earth Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The earth giant ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Lurker',
		phenotype: 'Large elemental humanoid (giant)'
	},
	{
		id: 'a82e280d-55aa-4005-8701-d812737d7cea',
		name: 'Elemental Spawn',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: '',
		level: 18,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 13,
		ac: 30,
		fortitude: 30,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '43cc52a5-59fd-4896-88d7-894d65c198b2',
				name: 'Elemental Storm',
				keywords: '',
				details: 'aura 1; each enemy that starts its turn within the aura takes 5 cold, fire, and lightning damage.'
			}
		],
		powers: [
			{
				id: '8845cf95-8da9-4f1f-a66c-17d6d35edb9b',
				name: 'Elemental Smash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Fire, Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '12 cold, fire, or lightning damage, determined randomly each time an attack hits.',
				damage: 'or lightning damage',
				category: 1
			},
			{
				id: 'e837eea1-ac6c-4764-8d80-7c404bafac11',
				name: 'Elemental Explosion',
				action: {
					action: 7,
					trigger: 'when the elemental spawn is reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire, Lightning',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '12 cold, fire, and lightning damage.',
				damage: 'and lightning damage',
				category: 5
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
			},
			{
				type: 5,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 18 Minion',
		phenotype: 'Large elemental beast'
	},
	{
		id: '28065c91-edd6-4bc3-85da-2148b0375e44',
		name: 'Ethereal Marauder',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: '',
		level: 15,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '7, teleport 3, phasing; see also ethereal jaunt',
		alignment: 'Unaligned',
		languages: 'Deep Speech',
		skills: 'Stealth +18',
		equipment: '',
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
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 115,
		initiative: 17,
		ac: 29,
		fortitude: 27,
		reflex: 28,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e5681372-978e-417a-ae1c-cf050b5f5e79',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '92ed5202-d8b1-45a9-8110-74cc90502cd6',
				name: 'Reality Warp',
				action: {
					action: 1,
					trigger: 'usable only while insubstantial',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '3d6+6 damage, and the ethereal marauder teleports the target 3 squares. The marauder then teleports 3 squares into a space adjacent to the target.',
				damage: '3d6+6 damage',
				category: 5
			},
			{
				id: '33eff2d4-e0fd-4bc1-a683-e39fcbaf35d2',
				name: 'Ethereal Jaunt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '3d10+6 damage, the target is dazed (save ends), and the ethereal marauder teleports 3 squares and gains planephase form until the end of it next turn.',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: 'ce13ea78-b027-4e4a-a819-10d785c5976f',
				name: 'Planar Evasion',
				action: {
					action: 4,
					trigger: 'when the ethereal marauder is hit by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marauder teleports 3 squares.',
				damage: 'The marauder teleports 3 squares',
				category: 5
			},
			{
				id: '158f8f5b-4de7-4ff9-8388-bcb819405862',
				name: 'Planephase Form',
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
				details: 'The ethereal marauder partially phases into another plane, gaining insubstantial and phasing until the end of its next turn or until it hits or misses with an attack. Sustain Minor: The effect persists.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'psychic, an ethereal marauder that takes psychic damage immediately ends planephase form.',
		immune: '',
		tactics: '',

		info: 'Level 15 Lurker',
		phenotype: 'Medium aberrant beast'
	},
	{
		id: '9ad5fee9-fbc5-490a-9ab6-c0d8d548a521',
		name: 'Fire Archon Flameshield',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'fire',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'light shield; plate armor; scimitar',
		category: 'Archon',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 116,
		initiative: 13,
		ac: 27,
		fortitude: 23,
		reflex: 24,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: 'e15072c9-dbdc-4d14-9e85-495f06136184',
				name: 'Ember Cloud ',
				keywords: '',
				details: '(Fire) aura 1; each creature that begins its turn in the aura takes 5 fire damage and is marked by the flameshield until the end of the flameshield’s next turn.'
			}
		],
		powers: [
			{
				name: 'Scimitar',
				action: {

