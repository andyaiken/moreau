import { Monster } from '../../models/monster';

const monsters: Monster[] = [
	{
		id: '1c2ec56d-8d50-451a-9f3e-25967783c6e3',
		name: 'Wight Life-Eater',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 10,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +13',
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
			score: 10,
			modifier: 0,
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
		hp: 104,
		initiative: 9,
		ac: 24,
		fortitude: 22,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fd2cefa9-fc78-4338-a7b3-b3338d252023',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+5 necrotic damage, the target loses a healing surge, and the wight shifts 3 squares.',
				damage: '2d6+5 necrotic damage',
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

		info: 'Level 10 Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '47f9137d-3b79-49bf-a197-d362b4197ba9',
		name: 'Young Blue Dragon Goblin Ally',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 6,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '8, fly 10 (hover), overland flight 15',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Athletics +20, Insight +10, Nature +10',
		equipment: '',
		category: 'Dragon',
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
		hp: 296,
		initiative: 5,
		ac: 23,
		fortitude: 24,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'c0f92614-bb41-4233-9b7b-1f7479c1bb7f',
				name: 'Tactical Orders',
				keywords: '',
				details: 'aura 5; any bugbear, hobgoblin, or goblin ally within the aura deals 1d6 extra damage to a creature granting combat advantage to it (or 1 extra damage if the ally is a minion).'
			}
		],
		powers: [
			{
				id: '1892e044-e046-4793-8712-ee71d075f1dc',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d6+5 plus 1d6 lightning damage.',
				damage: '1d6+5 plus 1d6 lightning damage',
				category: 1
			},
			{
				id: 'fd64771a-6ec6-4268-82ec-d403fe5daee9',
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
				details: 'Reach 2; 1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '127b6e95-71b3-4235-be1f-2b484a81e4d9',
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
				attack: null,
				description: '',
				details: 'The dragon makes a gore attack and two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '32bc02d4-6441-476e-98ab-cbdf376bba33',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'The dragon targets up to three creatures with its lightning breath; the first target must be within 10 squares of the dragon, the second target within 10 squares of the first, and the third target within 10 squares of the second; 1d12+5 lightning damage. Miss: Half damage. This attack does not provoke opportunity attacks.',
				damage: '1d12+5 lightning damage',
				category: 1
			},
			{
				id: '55187c0c-7358-4bd9-8d46-23973e9c2c31',
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
				details: 'Breath weapon recharges, and the dragon uses it.',
				damage: '',
				category: 5
			},
			{
				id: '28e096cb-c1c0-4acc-a3c6-8c457ef55709',
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
				details: 'targets enemies; the target is stunned until the end of the dragon’s next turn. Aftereffect: The target takes a –2 penalty to attack rolls (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '77cb52dc-b98d-4c42-ae5d-6cca9c220429',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d6+4 lightning damage. Miss: Half damage.',
				damage: '1d6+4 lightning damage',
				category: 1
			},
			{
				id: '870c10d5-7030-4d02-b60d-c3fe343f09a4',
				name: 'Phalanx Soldier',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The young blue dragon gains a +2 bonus to AC while at least one hobgoblin ally is adjacent to it. The dragon also counts as a hobgoblin for the purpose of other creatures’ phalanx soldier ability.',
				damage: 'The young blue dragon gains a +2 bonus to AC while at least one hobgoblin ally is adjacent to it',
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

		info: 'Level 6 Solo Artillery',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: 'f7c312c6-a11a-4ff6-94f5-ef1bcca4c596',
		name: 'Zombie Hulk of Orcus',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 8,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Zombie',
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
		hp: 88,
		initiative: 2,
		ac: 20,
		fortitude: 23,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: '15522909-84bd-4f5e-aa51-b357c07dead4',
				name: 'Death’s Embrace',
				keywords: '',
				details: 'aura 5; each enemy within the aura takes a –2 penalty to death saving throws.'
			}
		],
		powers: [
			{
				id: 'a1a08e14-c44f-47e7-a5ff-9f1f371db549',
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
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'de104c24-1026-468d-8fb9-d08715c981fb',
				name: 'Zombie Smash',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Reach 2; targets a Medium or smaller creature; 4d8+5 damage, and the target is knocked prone.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: 'd93119dc-4fd4-4406-bdac-d59029c6e1d0',
				name: 'Rotting Strike',
				action: {
					action: 7,
					trigger: 'when the zombie hulk hits with a melee basic attack during its turn',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target takes ongoing 6 necrotic damage (save ends).',
				damage: 'the target takes ongoing 6 necrotic damage (save ends)',
				category: 5
			},
			{
				id: '5214dba3-d74b-4e2e-823d-773921fbbb6b',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: 'the first time the zombie hulk drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The zombie hulk makes a new initiative check. On its next turn, the zombie hulk rises (as a move action) with 44 hit points.',
				damage: 'the zombie hulk rises (as a move action) with 44 hit points',
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

		info: 'Level 8 Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: 'c0cf07ea-3b37-4f54-9ecf-cfbec8c57a15',
		name: 'Abyssal Ghoul Horde',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'swarm, undead',
		level: 21,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Stealth +21',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 240,
		initiative: 16,
		ac: 30,
		fortitude: 34,
		reflex: 33,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: '4912a23e-d916-4758-a85b-a64a4ff35617',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the abyssal ghoul horde makes a melee basic attack as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: '466daac1-752c-4eb2-a26d-473dcf805ff3',
				name: 'Horde of Fangs',
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
				details: '3d8+7 damage, and the target is immobilized (save ends). An immobilized target takes an extra 3d6 damage.',
				damage: '3d8+7 damage',
				category: 1
			},
			{
				id: '880aa3c4-7782-49b2-a969-6c69f03a272e',
				name: 'Sprays of Dead Blood',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the horde is damaged',
				range: 'Close burst 1',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '10 necrotic damage.',
				damage: '10 necrotic damage',
				category: 0
			},
			{
				id: '0090b3a7-062d-4aa6-b14c-8708a3a5e37f',
				name: 'Ghoul Stragglers',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the horde takes forced movement and when it is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Each square the ghoul horde formerly occupied now contains one abyssal ghoul hungerer, which acts just after the horde.',
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
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 damage from close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Brute',
		phenotype: 'Huge elemental humanoid (swarm, undead)'
	},
	{
		id: '0ff0b378-f1d9-4a5d-9553-132f20f6b96d',
		name: 'Angel of Protection Shieldbearer',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 21,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: 'Insight +21, Intimidate +19',
		equipment: 'greatsword; plate armor',
		category: 'Angel',
		strength: {
			score: 25,
			modifier: 7,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 197,
		initiative: 17,
		ac: 37,
		fortitude: 33,
		reflex: 31,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: '5ab2ac61-12ed-47a3-92c5-c61b8a2f6577',
				name: 'Angelic Presence',
				keywords: '',
				details: 'Attacks against the angel of protection take a -2 penalty until the angel is bloodied.'
			},
			{
				id: '7e22d031-47a4-4e8e-aa54-cdbcca97c552',
				name: 'Angelic Shield',
				keywords: '',
				details: 'aura 5; any enemy treats the area within the aura as difficult terrain as long as the angel’s angelic presence is active and the angel is within 5 squares of the angel of secrets.'
			}
		],
		powers: [
			{
				id: '001e0cac-9f1e-4feb-a7c3-72f7ccbedb42',
				name: 'Greatsword',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d10+7 damage plus 10 radiant damage, and the target is marked until the end of the angel of protection’s next turn.',
				damage: '2d10+7 damage plus 10 radiant damage',
				category: 1
			},
			{
				id: '19e46de7-c6aa-4125-b44a-0e53e35b8fb0',
				name: 'Ward Angel of Secrets',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'When the angel is within 5 squares of the angel of secrets, the angel of secrets takes only half damage from melee and ranged attacks',
				attack: null,
				description: '',
				details: 'the angel of protection takes the rest. While the angel is adjacent to the angel of secrets, the angel of secrets gains a +2 bonus to AC.',
				damage: 'the angel of secrets gains a +2 bonus to AC',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Soldier',
		phenotype: 'Medium immortal humanoid (angel)'
	},
	{
		id: '1d80dd52-8067-48f6-904c-bb538696c8de',
		name: 'Angel of Secret Legionaire',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +16',
		movement: '6, fly 9 (hover)',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: '',
		equipment: 'chainmail',
		category: 'Angel',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 1,
		initiative: 18,
		ac: 35,
		fortitude: 32,
		reflex: 33,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0cca6457-850f-4b09-ad55-6902a6bcda1d',
				name: 'Shadowsword',
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
				details: '10 necrotic damage.',
				damage: '10 necrotic damage',
				category: 1
			},
			{
				id: '89e04acd-cc9a-4216-8b65-594b11142441',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The angel deals an extra 5 damage to a target it has combat advantage against.',
				damage: 'the angel deals an extra 5 damage to a target it has combat advantage against',
				category: 0
			},
			{
				id: 'e6f901f7-d749-4ac8-b345-8c5018eadf4d',
				name: 'Shadow Play',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an attack misses the angel, it becomes insubstantial until the end of its next turn. The angel gains combat advantage against all enemies while it is insubstantial.',
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
				type: 9,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 21 Minion',
		phenotype: 'Medium immortal humanoid (angel)'
	},
	{
		id: '5da2c019-2f67-466d-9430-3bb8097747ac',
		name: 'Angel of Secrets',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 22,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: '6, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'All',
		skills: 'Arcana +22, History +22, Stealth +20',
		equipment: 'chainmail',
		category: 'Angel',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 408,
		initiative: 20,
		ac: 36,
		fortitude: 34,
		reflex: 34,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '7ace6ea8-4036-4575-90b5-e8615e0f7d18',
				name: 'Angelic Presence',
				keywords: '',
				details: 'Attacks against the angel of secrets take a -2 penalty until the angel is bloodied; once bloodied, the penalty increases to -4.'
			}
		],
		powers: [
			{
				id: 'f0478bb2-2391-4d92-8a7b-0d84f2205ac1',
				name: 'Memory Blade',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+8 psychic damage, and the target can’t use encounter powers or daily powers until the end of the angel’s next turn.',
				damage: '3d6+8 psychic damage',
				category: 1
			},
			{
				id: '54895ff9-4cb4-454c-a741-a21fcc704420',
				name: 'Mind Lash',
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
					bonus: 25,
					defence: 3
				},
				description: '',
				details: '2d10+8 psychic damage, and the target is dazed until the end of the angel’s next turn.',
				damage: '2d10+8 psychic damage',
				category: 1
			},
			{
				id: 'f007a7cb-ae7f-4b5e-b90b-b2f7126664e5',
				name: 'Roaring Revelation',
				action: {
					action: 1,
					trigger: 'encounter and when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Thunder',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d10+8 psychic and thunder damage, and the target is stunned until the end of the angel’s next turn.',
				damage: '2d10+8 psychic and thunder damage',
				category: 5
			},
			{
				id: 'c15a6440-3b2d-4a31-ab08-602355041182',
				name: 'Foresight',
				action: {
					action: 5,
					trigger: 'when attacked',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The angel of secrets teleports 4 squares and makes a memory blade attack.',
				damage: 'The angel of secrets teleports 4 squares and makes a memory blade attack',
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
		immune: 'disease, fear',
		tactics: '',

		info: 'Level 22 Elite Controller',
		phenotype: 'Large immortal humanoid (angel)'
	},
	{
		id: '8bb2091a-8867-4cc3-ab4f-da1106857454',
		name: 'Angel of Shadow Legionnaire',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6, fly 9 (hover)',
		alignment: 'Any',
		languages: 'Supernal',
		skills: '',
		equipment: 'chainmail; greatsword',
		category: 'Angel',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 14,
		ac: 35,
		fortitude: 35,
		reflex: 31,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c5e763cb-5584-43d6-a6a3-997dbc453694',
				name: 'Greatsword',
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
			}
		],
		damageModifiers: [
			{
				type: 6,
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

		info: 'Level 21 Minion',
		phenotype: 'Medium immortal humanoid (angel)'
	},
	{
		id: '1bb3e4a1-d257-42d8-8048-404c943cac66',
		name: 'Angel of Vengeance Retaliator',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 21,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17',
		movement: '8, fly 12',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: 'Insight +22, Intimidate +23',
		equipment: 'longsword; plate armor',
		category: 'Angel',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 486,
		initiative: 15,
		ac: 34,
		fortitude: 34,
		reflex: 32,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1929283a-0c26-4945-8400-bf8b713ca120',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+9 damage plus 2d8 cold and fire damage.',
				damage: '1d10+9 damage plus 2d8 cold and fire damage',
				category: 1
			},
			{
				id: '5f387ea7-4814-438a-b7b0-7f81b7229f17',
				name: 'Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The angel of vengeance makes two longsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: '5528551d-a695-41a4-a7d8-401777ec8d8e',
				name: 'Sign of Vengeance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged sight',
				attack: null,
				description: '',
				details: 'the angel of vengeance places an invisible sign upon the target. Until the end of the encounter, as a move action, the angel of vengeance can teleport adjacent to the target.',
				damage: '',
				category: 3
			},
			{
				id: 'b7901c90-6d3d-4505-9eaf-dedc6a410130',
				name: 'Coldfire Pillar',
				action: {
					action: 4,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Fire, Polymorph',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '3d8+9 cold and fire damage. The angel of vengeance transforms into a 30-foot-high pillar of blue fire and is immune to all damage until the start of its next turn.',
				damage: '3d8+9 cold and fire damage',
				category: 5
			},
			{
				id: 'f957c3d8-b809-4470-ad39-e35d3eecfe3b',
				name: 'Cloak of Vengeance',
				action: null,
				keywords: 'Cold, Fire',
				condition: 'until bloodied',
				range: 'Attacks against the angel of vengeance take a -2 penalty until the angel is bloodied. While cloak of vengeance is in effect, a creature that hits the angel with a melee attack takes 2d8 cold and fire damage.',
				attack: null,
				description: '',
				details: '',
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
		immune: 'disease, fear',
		tactics: '',

		info: 'Level 21 Elite Brute',
		phenotype: 'Large immortal humanoid (angel)'
	},
	{
		id: '409f287f-df20-4d1a-9d42-84d034c9105b',
		name: 'Beholder Death Emperor',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 22,
		role: {
			type: 0,
			flag: 2,
			leader: false
		},
		senses: 'Perception +20; all-around vision, darkvision',
		movement: 'fly 5 (hover)',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Beholder',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 832,
		initiative: 19,
		ac: 34,
		fortitude: 35,
		reflex: 36,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: '2a5d6b19-5924-4cd0-a51d-4447409c1334',
				name: 'Eyes of the Beholder',
				keywords: '',
				details: 'aura 5; the beholder death emperor uses one random eye ray as a free action against any enemy within the aura at the start of that enemy’s turn.'
			}
		],
		powers: [
			{
				id: '568939fd-fc4b-434f-8e36-f7ec548d4d98',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d4+12 damage.',
				damage: '3d4+12 damage',
				category: 1
			},
			{
				id: '017d6aa7-61c0-4e3f-83cf-71d1f24a7154',
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
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'the target is slowed and loses necrotic resistance until the end of the beholder death emperor’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '2f71b77b-0062-4e3e-8318-d77ddd7e1492',
				name: 'Eye Ray',
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
				details: 'The beholder death emperor uses up to two different eye ray powers (chosen from the list below). Each ray must target a different creature, and using eye ray does not provoke opportunity attacks.',
				damage: '',
				category: 1
			},
			{
				id: '786e1232-1123-4778-9c80-ac943bbb6acb',
				name: 'Killing Look',
				action: {
					action: 4,
					trigger: 'when an enemy within 10 squares of the beholder death emperor fails a saving throw against ongoing damage',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'targets the triggering creature; the target loses 2 healing surges.',
				damage: 'the target loses 2 healing surges',
				category: 5
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 22 Solo Artillery',
		phenotype: 'Large aberrant beast (undead)'
	},
	{
		id: 'f76972c2-bfa2-4684-af6c-756b6bd77bcc',
		name: 'Blackstar Annihilator',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 23,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: '5, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 168,
		initiative: 20,
		ac: 35,
		fortitude: 34,
		reflex: 36,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f46777ad-52e8-40ec-9ed3-bdcbaf6a28b3',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d6+8 damage, and ongoing 5 damage (save ends).',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: '33949c4b-c2e7-4694-aa19-1ad8bf6541e8',
				name: 'Meteor Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '3d6+8 damage, and the target takes a -2 penalty to saving throws and ongoing 5 damage (save ends both).',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: 'f879788c-dff0-4902-b4a4-0662deaabbc5',
				name: 'Blackstar Fall',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '4d6 + 8 damage, and the target is pushed 2 squares and knocked prone. Miss: The target is pushed 1 square. If the target cannot be pushed, the blackstar annihilator ends its move in an unoccupied square adjacent to the target. Secondary Attack: When it lands, the blackstar annihilator attacks: close burst 3',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: 'The blackstar annihilator can fl y 8 squares and enter an enemy’s space; targets enemies; +26 vs. Reflex; 2d6 + 8 damage, and the target is pushed 1 square and knocked prone. The burst area becomes difficult terrain.',
				damage: '2d6 + 8 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Artillery',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '2446d8db-062f-4e7d-91ba-447aa17e1414',
		name: 'Blackstar Crawler',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 20,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: '',
		skills: 'Endurance +20, Stealth +22',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 188,
		initiative: 19,
		ac: 34,
		fortitude: 32,
		reflex: 34,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '85462fc2-c5bb-405a-938f-ba4120c8af40',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'dfdd3d55-d8a9-41ba-8c29-304f33a8bb8c',
				name: 'Disengage',
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
				details: 'The blackstar crawler shifts up to 8 squares to end its move adjacent to an enemy other than the one that caused this reaction and makes a bite attack.',
				damage: 'The blackstar crawler shifts up to 8 squares to end its move adjacent to an enemy other than the one that caused this reaction and makes a bite attack',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Skirmisher',
		phenotype: 'Medium elemental animate'
	},
	{
		id: 'cadf0a5f-78ba-4c4a-9677-a098a1dd6704',
		name: 'Blackstar Crusher',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 24,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: 'fly 5 (clumsy)',
		alignment: 'Evil',
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 275,
		initiative: 19,
		ac: 36,
		fortitude: 36,
		reflex: 34,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9afb4286-2633-462c-b23c-a461254e3610',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d12+6 damage.',
				damage: '2d12+6 damage',
				category: 1
			},
			{
				id: '35d5eb99-1d43-4e70-a3ff-e2dd33c5e2d2',
				name: 'Meteoric Shockwave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '2d12+12 force damage, and the target is pushed 4 squares and knocked prone.',
				damage: '2d12+12 force damage',
				category: 1
			},
			{
				id: '140107f2-2999-4749-8a34-69985af92f88',
				name: 'Focused Gravity',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '2d8+7 force damage, and the target is knocked prone.',
				damage: '2d8+7 force damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Brute',
		phenotype: 'Large elemental animate'
	},
	{
		id: '65053146-aed8-41b2-92a7-a6fdb830fca1',
		name: 'Blackstar Idol',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 22,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +21; darkvision',
		movement: 'fly 8 (hover), teleport 4',
		alignment: 'Evil',
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
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 420,
		initiative: 12,
		ac: 36,
		fortitude: 34,
		reflex: 27,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '29946430-d9c8-4dce-b772-96395cfea1ea',
				name: 'Force Slam',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '2d6+8 force damage.',
				damage: '2d6+8 force damage',
				category: 1
			},
			{
				id: 'b285bfca-2ddb-4212-a03f-079964967ab6',
				name: 'Mindrip',
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
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '1d10+8 psychic damage, and the target is slowed (save ends).',
				damage: '1d10+8 psychic damage',
				category: 3
			},
			{
				id: '6271c250-b3bf-4635-b8d0-d82296b08859',
				name: 'Blackstar Nova',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d6+8 psychic damage, and the target is pushed 2 squares and knocked prone. Miss: Half damage, and the target is neither pushed nor knocked prone.',
				damage: '4d6+8 psychic damage',
				category: 5
			},
			{
				id: '4fcfec92-c76e-4aa4-9dd5-faef550be39c',
				name: 'Mindquake',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 5 within 20',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d6+8 psychic damage, and the target is dazed (save ends).',
				damage: '4d6+8 psychic damage',
				category: 1
			},
			{
				id: 'f7e546cf-5e9e-489a-bd34-3e466ba8b314',
				name: 'Animate Blackstar',
				action: {
					action: 1,
					trigger: 'at-will or encounter',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The idol targets the remains of a fallen blackstar creature and imbues it with energy. As an at-will power, the fallen blackstar rises as a blackstar pawn. If the blackstar idol targets a blackstar pawn as an encounter power, it becomes a blackstar knight.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 22 Elite Controller (L)',
		phenotype: 'Large elemental animate'
	},
	{
		id: 'fa3901cb-f68d-4ed6-ae11-7618a695b977',
		name: 'Blackstar Idol of Timesus',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 22,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +21; darkvision',
		movement: 'fly 8 (hover), teleport 4',
		alignment: 'Evil',
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
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 420,
		initiative: 12,
		ac: 36,
		fortitude: 34,
		reflex: 27,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: 'b0f214e3-181c-4ac9-9cf5-fe4f1b0f8500',
				name: 'Blackstar Pulse',
				keywords: '',
				details: '(Healing) aura 3; enemies that start their turns within the aura take 10 damage, and blackstar host that start their turns within the aura heal 10 hit points.'
			}
		],
		powers: [
			{
				id: '7e9db39c-dc31-4e9c-b879-ab4ad71701fc',
				name: 'Force Slam',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '2d6+8 force damage.',
				damage: '2d6+8 force damage',
				category: 1
			},
			{
				id: '922c0a33-d66c-499b-b2c4-c228fcf804be',
				name: 'Mindrip',
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
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '1d10+8 psychic damage, and the target is slowed (save ends).',
				damage: '1d10+8 psychic damage',
				category: 3
			},
			{
				id: '1a4e76ef-6c64-4899-acfb-dfe7e2be1039',
				name: 'Blackstar Nova',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d6+8 psychic damage, and the target is pushed 2 squares and knocked prone. Miss: Half damage, and the target is neither pushed nor knocked prone.',
				damage: '4d6+8 psychic damage',
				category: 5
			},
			{
				id: '9ecf6205-274c-4c06-891a-1fe009cbe5c0',
				name: 'Mindquake',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 5 within 20',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d6+8 psychic damage, and the target is dazed (save ends).',
				damage: '4d6+8 psychic damage',
				category: 1
			},
			{
				id: '7d6a0d02-690d-461c-ab39-128cb45d4a2a',
				name: 'Animate Blackstar',
				action: {
					action: 1,
					trigger: 'at-will or encounter',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The idol targets the remains of a fallen blackstar creature and imbues it with energy. As an at-will power, the fallen blackstar rises as a blackstar pawn. If the blackstar idol targets a blackstar pawn as an encounter power, it becomes a blackstar knight.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 22 Elite Controller (L)',
		phenotype: 'Large elemental animate'
	},
	{
		id: '08e97a21-0427-4170-b6d6-8d8e0cbc9f86',
		name: 'Blackstar Pawn',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Evil',
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
		initiative: 18,
		ac: 37,
		fortitude: 37,
		reflex: 36,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '86120170-98b2-4f84-a33a-e0587d747fbf',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '12 damage (crit 18 damage).',
				damage: '12 damage (crit 18 damage)',
				category: 1
			},
			{
				id: '8b02340f-a70b-44b6-b8e2-f2fd091b5bd1',
				name: 'Blackstar Ricochet',
				action: {
					action: 4,
					trigger: 'when a blackstar pawn within 5 squares is reduced to 0 hit points',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'The blackstar pawn shifts 3 squares and collides with an enemy; 8 damage.',
				damage: '8 damage',
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

		info: 'Level 23 Minion',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '1557acc7-5d99-4174-aa0d-074944affbd7',
		name: 'Blackstar Prowler',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 23,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: '',
		skills: 'Endurance +22, Stealth +25',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 214,
		initiative: 22,
		ac: 37,
		fortitude: 33,
		reflex: 35,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3da23744-b199-4e63-9767-a96560d94753',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d10+8 damage, or 2d10+13 damage against a prone target.',
				damage: '2d10+8 damage',
				category: 1
			},
			{
				id: 'aba62523-68f9-4cc4-b345-194a4bb145b1',
				name: 'Blackstar Charge',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'The prowler makes a charge attack; 3d10+10 damage, and the target is knocked prone. When the target stands up, it provokes opportunity attacks from adjacent blackstar prowlers.',
				damage: '3d10+10 damage',
				category: 1
			},
			{
				id: 'e34794fd-3b02-4c28-af65-7a9ff81691cd',
				name: 'Pounce on the Fallen',
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
				details: 'The blackstar prowler teleports up to 8 squares to end its move adjacent to a prone enemy.',
				damage: 'The blackstar prowler teleports up to 8 squares to end its move adjacent to a prone enemy',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -10
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Skirmisher',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '5ecd0c38-0586-4b3a-a59d-d43520262c22',
		name: 'Blaspheme Disciple Keeper',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 19,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Heal +19, Religion +17',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 136,
		initiative: 14,
		ac: 31,
		fortitude: 29,
		reflex: 31,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '81b6eaea-efe4-4f75-99cb-09f7a96711e8',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '1d10+10 necrotic damage.',
				damage: '1d10+10 necrotic damage',
				category: 1
			},
			{
				id: 'd66cc91d-6022-421c-8cc0-78ee45304cd8',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '1d12+12 necrotic damage, and the target takes a -2 penalty to attack rolls until the end of the blaspheme disciple’s next turn.',
				damage: '1d12+12 necrotic damage',
				category: 1
			},
			{
				id: 'f613d9ea-1790-4591-b661-c68d709e11af',
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
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d6+12 necrotic and psychic damage. In addition, undead allies within the burst regain 10 hit points.',
				damage: '3d6+12 necrotic and psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 7,
				value: -15
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

		info: 'Level 19 Artillery (L)',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: '3d7ff72a-819c-4ac5-a35f-a5193c1795e9',
		name: 'Blaspheme Fragment Keeper',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 19,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '7',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 16,
		ac: 33,
		fortitude: 32,
		reflex: 31,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd8412b89-12b9-462f-a557-51f2941c298e',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '12 damage, and the target is slowed (save ends).',
				damage: '12 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 7,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 19 Minion',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'fdcfff18-c21b-458a-a044-3b61dc5826e5',
		name: 'Blaspheme Imperfect Keeper',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 19,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 214,
		initiative: 13,
		ac: 31,
		fortitude: 32,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: 'a6b52ece-2c73-4cb0-8426-5d75b5b61c7b',
				name: 'Life Sap',
				keywords: '',
				details: '(Healing, Necrotic) aura 1; any living enemy that starts its turn within the aura takes 5 necrotic damage. Each round, if at least one enemy is damaged by the aura, the blaspheme imperfect keeper regains 5 hit points.'
			}
		],
		powers: [
			{
				id: 'be4fdb29-9cd8-4dc0-a301-09e0c247b8ed',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d12+11 necrotic damage.',
				damage: '2d12+11 necrotic damage',
				category: 1
			},
			{
				id: '3740bcd4-4deb-45e7-bd0b-e5e7c81199ea',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'Requires free hand; 2d12+11 necrotic damage, and the target is grabbed.',
				damage: '2d12+11 necrotic damage',
				category: 1
			},
			{
				id: '91fd633b-d1bf-4d62-8a08-ec63ea930623',
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
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the blaspheme imperfect keeper; 2d10+9 necrotic damage, and the target loses a healing surge, and the blaspheme imperfect keeper regains 15 hit points.',
				damage: '2d10+9 necrotic damage',
				category: 1
			},
			{
				id: '8829ee0a-cbab-482d-ba2f-e14932a49e13',
				name: 'Bloodied Degeneration',
				action: null,
				keywords: '',
				condition: 'while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The blaspheme imperfect keeper’s body begins to degenerate, and it enters a state of bloodlust. The blaspheme gains vulnerable 5 to all damage and deals 3d6 extra damage on a hit.',
				damage: 'the blaspheme gains vulnerable 5 to all damage and deals 3d6 extra damage on a hit',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 19 Brute',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: '7820fbf6-2fe4-4eb6-a366-3522bfa4dce1',
		name: 'Blaspheme Knight Keeper',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, undead',
		level: 19,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
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
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 182,
		initiative: 16,
		ac: 35,
		fortitude: 31,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a076beab-efc7-4258-b501-ce6d6cee21fc',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '1d12+13 damage, and the target is marked until the end of the blaspheme knight keeper’s next turn.',
				damage: '1d12+13 damage',
				category: 1
			},
			{
				id: '50ca8ed0-652f-4903-a96a-b7d34dc5517c',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; 2d12+13 damage, and the target is marked until the end of the blaspheme knight’s next turn.',
				damage: '2d12+13 damage',
				category: 1
			},
			{
				id: '8c041db7-1d39-43aa-b63a-c57c3d72f3a1',
				name: 'Blasphemous Might',
				action: null,
				keywords: '',
				condition: 'when a creature marked by the blaspheme knight makes an attack that doesn’t include the knight',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of its next turn, the blaspheme knight deals 3d10 extra necrotic damage when it hits the marked creature.',
				damage: 'the blaspheme knight deals 3d10 extra necrotic damage when it hits the marked creature',
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
				value: -15
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

		info: 'Level 19 Soldier',
		phenotype: 'Medium natural animate (construct, undead)'
	},
	{
		id: 'bf17c94d-9d69-417b-9d2b-70790298bdb9',
		name: 'Blood Fiend Martyr',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 1,
		initiative: 19,
		ac: 37,
		fortitude: 36,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9eabd6e0-603f-4f44-9047-a948779007ef',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '15 damage, and the target is grabbed and takes ongoing 10 damage until the grab ends.',
				damage: '15 damage',
				category: 1
			},
			{
				id: 'cb895277-c227-4a90-ae41-96191919ba4c',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blood fiend martyr gains combat advantage against any living, bloodied enemy.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '17c392e4-5eea-4f2a-aa2a-51cbcb9186ca',
		name: 'Bone Naga Corruptor',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'undead',
		level: 21,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Draconic',
		skills: '',
		equipment: '',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 199,
		initiative: 18,
		ac: 37,
		fortitude: 33,
		reflex: 33,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '2a5240a1-54ad-493e-966b-c7a0556d29c5',
				name: 'Lethal Fascination',
				keywords: '',
				details: 'aura 5; the aura is difficult terrain for enemies.'
			}
		],
		powers: [
			{
				id: 'aa1f7ef2-8f06-40d2-8458-3b0e651ae342',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 poison and necrotic damage, and ongoing 10 poison and necrotic damage (save ends). Aftereffect: The target is dazed until the end of the bone naga’s next turn. In addition, a target is marked as long as it suffers any effect from the bite.',
				damage: '2d6+7 poison and necrotic damage',
				category: 1
			},
			{
				id: 'dd5950c5-44ff-45e7-87a1-b1d0716b84b5',
				name: 'Death Lure',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+7 necrotic and psychic damage, and the target is marked (save ends) and pulled 1 square closer to the bone naga.',
				damage: '2d6+7 necrotic and psychic damage',
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

		info: 'Level 21 Soldier',
		phenotype: 'Large immortal beast (undead)'
	},
	{
		id: '574fa692-fb31-497e-acb3-92bf424653a5',
		name: 'Bonestorm',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'blind, swarm, undead',
		level: 20,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +16; blindsight 20',
		movement: '8, burrow 8, fly 8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +20',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 752,
		initiative: 15,
		ac: 34,
		fortitude: 32,
		reflex: 29,
		will: 30,
		regeneration: null,
		auras: [
			{
				id: '9506039f-5462-4f8b-a457-012b4f042d44',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; any enemy that starts its turn within the aura takes 10 damage.'
			}
		],
		powers: [
			{
				id: 'b324dfb2-446b-49d7-96a3-cb488d9a1955',
				name: 'Bone Trash',
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
				details: '2d10+9 damage (2d12+10 damage while bloodied).',
				damage: '2d10+9 damage (2d12+10 damage while bloodied)',
				category: 1
			},
			{
				id: '89be092f-dc1a-4394-a931-2d8f0f49715d',
				name: 'Bonestorm',
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
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '3d10+9 necrotic damage, and the target is grabbed. At the start of a grabbed target’s turn, it takes 15 necrotic damage. While grabbed, a target cannot be hit by another bonestorm.',
				damage: '3d10+9 necrotic damage',
				category: 1
			},
			{
				id: 'fd296b88-cb76-4c75-a87c-38da0a5f7fa5',
				name: 'Soul Plague',
				action: {
					action: 7,
					trigger: 'when first bloodied and when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 20',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is weakened (save ends) and loses a healing surge. Miss: The target is weakened until the end of its next turn and does not lose a healing surge.',
				damage: '',
				category: 5
			},
			{
				id: '900b2fbf-3cb7-4ed1-94ca-21a9a3f3692f',
				name: 'Hide in Plain Sight',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While inactive, the bonestorm appears as rubble and remains. It can make a Stealth check to remain unnoticed until it takes an action.',
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
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 20 Solo Controller',
		phenotype: 'Huge natural animate (blind, swarm, undead)'
	},
	{
		id: 'e22813b3-91d4-4c14-a8c6-fb0df1af432a',
		name: 'Dawn War Ghost',
		details: 'This shadowy spirit wears the form of a regal male eladrin in ancient robes. Its hollow eyes are wide with madness.',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 23,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Stealth +24',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 148,
		initiative: 19,
		ac: 37,
		fortitude: 32,
		reflex: 35,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '0a883fab-4380-44c9-ba60-6a8eb6e30a11',
				name: 'Memories of War',
				keywords: '',
				details: 'aura 3; enemies that enter or start their turns in the aura take 10 psychic damage and is slowed. The area is filled with ghostly images and sounds of the ghost’s memories of the Dawn War.'
			}
		],
		powers: [
			{
				id: 'b1ceb40a-7dec-459a-9bc6-096f738e394b',
				name: 'Trauma Touch',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d6+9 psychic damage, and the target is dazed until the end of the ghost’s next turn.',
				damage: '2d6+9 psychic damage',
				category: 1
			},
			{
				id: '46ea6d6b-c546-45f9-beb4-4556a3fd8e2c',
				name: 'Traumatic Possession',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'Targets a living humanoid; the ghost enters the target’s space and is removed from play, and the target is dominated (save ends). The ghost can use this power against one creature at a time. Instead of dictating the target’s action, the ghost can cause the target to take no action and deal it 20 psychic damage. When the target is no longer dominated, or when the ghost chooses to end its ghostly possession (a free action), the ghost reappears in an unoccupied square adjacent to the target.',
				damage: 'the ghost can cause the target to take no action and deal it 20 psychic damage',
				category: 1
			},
			{
				id: 'a13ed9ee-4afb-4752-805f-91a3f1551395',
				name: 'Mortal Terror',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8+9 psychic damage, the target is pushed 5 squares, and the target is dazed, and takes ongoing 10 psychic damage (save ends both).',
				damage: '1d8+9 psychic damage',
				category: 1
			},
			{
				id: '8e767d3f-9831-40a6-bbbb-a98987a8744f',
				name: 'Spectral Shift',
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
				details: 'The ghost shifts 3 squares.',
				damage: 'The ghost shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 23 Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'a195c324-839c-4bb2-87a1-fc6955f7b5d5',
		name: 'Death Knight Mauglurien',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 23,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Dwarven',
		skills: 'Athletics +22, Endurance +18, Intimidate +23',
		equipment: 'light shield; plate armor',
		category: '',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
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
		hp: 422,
		initiative: 14,
		ac: 39,
		fortitude: 35,
		reflex: 31,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '591ac358-afe3-4e8b-8de1-f3a056e0c9f7',
				name: 'Undead Warlord',
				keywords: '',
				details: 'aura 10; any ally within the aura gains +5 to initiative.'
			}
		],
		powers: [
			{
				id: '63ed0c9d-e5a2-4698-9ec0-b9211a5acdf1',
				name: 'Boneshredder',
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
				details: '2d10+10 necrotic damage (crit 5d12 + 30).',
				damage: '2d10+10 necrotic damage (crit 5d12 + 30)',
				category: 1
			},
			{
				id: '088db415-d727-4361-bef1-6eed81627cc9',
				name: 'Black Anvil',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '2d10+10 necrotic damage (crit 5d12 + 30 ), and an ally adjacent to target makes a melee basic attack against it as a free action with a +5 damage bonus.',
				attack: null,
				description: '',
				details: 'Requires Boneshredder',
				damage: '',
				category: 1
			},
			{
				id: '143b811c-f5c5-4d0b-920a-4049c97e23f5',
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
				range: 'undead creatures within the burst (including Mauglurien) deal an extra 2d6 fire damage with melee attacks until the end of Mauglurien’s next turn.',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '6d8+4 necrotic and fire damage to all living creatures',
				damage: '6d8+4 necrotic and fire damage to all living creatures',
				category: 1
			},
			{
				id: '31ec30fe-76c2-4cbd-b265-b447de43e3e9',
				name: 'Ebon Rider Banner',
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
				details: 'each ally in the burst regains 20 hit points and gains a +4 bonus to its next attack roll.',
				damage: 'each ally in the burst regains 20 hit points and gains a +4 bonus to its next attack roll',
				category: 1
			},
			{
				id: '1274683e-d820-4bab-ad43-84e0b37de0b9',
				name: 'Shadow Weapon',
				action: {
					action: 3,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Mauglurien’s melee attacks target Reflex instead of AC until the start of his next turn.',
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

		info: 'Level 23 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'bd3f6c0a-9ad8-4e66-87a0-173a03cc41ca',
		name: 'Ebon Rider',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 18,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Athletics +20, Endurance +18, Intimidate +16',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 170,
		initiative: 14,
		ac: 34,
		fortitude: 31,
		reflex: 28,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5bec124f-9b35-42eb-a4de-c134203a5661',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '1d8+9 damage.',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: 'a2020091-e3de-4af5-8cb1-06aec2b7dd3e',
				name: 'Death Mark',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '3d8+9 damage, and the target is marked (save ends). While marked, the target grants combat advantage.',
				damage: '3d8+9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'b67acbc1-32e2-4cb6-8ea2-d989baa4fd6a',
		name: 'Flameharrow Lord',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 20,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +17; darkvision',
		movement: '6, teleport 5',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 374,
		initiative: 13,
		ac: 34,
		fortitude: 31,
		reflex: 33,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aa540e57-b1bf-4656-8e00-e0b578b4d99a',
				name: 'Flameharrow Claw',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '1d10+9 fire damage, and the target can’t spend healing surges until the end of the flameharrow’s next turn.',
				damage: '1d10+9 fire damage',
				category: 1
			},
			{
				id: '79d18336-9df7-493f-a5cb-7b65c62db053',
				name: 'Harrowing Gaze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Gaze, Psychic',
				condition: '(minor 1/round',
				range: 'Ranged 10',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: '2d8+5 psychic damage, and the target is pushed 4 squares. The target is dazed until the end of the flameharrow’s next turn.',
				damage: '2d8+5 psychic damage',
				category: 1
			},
			{
				id: '17c938d0-2a86-4e7f-a51f-5e5a871a7d66',
				name: 'Deadfire Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Gaze, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d8+10 necrotic damage, ongoing 10 fire damage, and the target is immobilized (save ends both).',
				damage: '1d8+10 necrotic damage',
				category: 3
			},
			{
				id: '8a9e0832-a712-472a-91b1-84525001aa72',
				name: 'Death’s Salvation',
				action: {
					action: 5,
					trigger: 'when an undead ally is reduced to 0 hit points',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Healing',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'targeted undead ally regains 25 hit points.',
				damage: 'targeted undead ally regains 25 hit points',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 3,
				value: -25
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

		info: 'Level 20 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '1e29a5d3-494f-4a9c-829a-48cdab824f98',
		name: 'Ghostfire Flameskull',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 22,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; truesight 6',
		movement: 'fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +25',
		equipment: '',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 163,
		initiative: 20,
		ac: 34,
		fortitude: 32,
		reflex: 34,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4d739f44-a2df-4e39-bcce-544b21819eb0',
				name: 'Ghostfire Bite',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '2d4+5 fire and necrotic damage, and ongoing 5 fire and necrotic damage (save ends).',
				damage: '2d4+5 fire and necrotic damage',
				category: 1
			},
			{
				id: '8bb61c6c-2660-4450-8d3b-f0ebc0ce816e',
				name: 'Cremation Ray',
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
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d12+7 fire and necrotic damage, and ongoing 5 fire and necrotic damage (save ends).',
				damage: '2d12+7 fire and necrotic damage',
				category: 1
			},
			{
				id: '094a8b8d-2221-4f24-9b34-ecf57187836f',
				name: 'Ghostfire Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 3 within 15',
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '2d10+7 fire and necrotic damage. Miss: Half damage. The storm blocks line of sight, deals 10 fire and necrotic damage to any creature that starts its turn in the area, and disappears at the end of the flameskull’s next turn. The flameskull can exclude allies from the effect.',
				damage: '2d10+7 fire and necrotic damage',
				category: 1
			},
			{
				id: '9d7b8ffd-1bf6-4c6f-b2f7-307dbb2cc424',
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
				details: 'As mage hand (wizard 1).',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 6,
				value: -10
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 22 Artillery',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: '5d5a8ba6-8a82-4785-815a-7277b88a1810',
		name: 'Ghovran Aki',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Elven',
		skills: 'Arcana +19, History +19, Religion +19',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 392,
		initiative: 18,
		ac: 35,
		fortitude: 33,
		reflex: 36,
		will: 36,
		regeneration: {
			value: 10,
			details: 'if Ghovran takes radiant damage, regeneration doesn’t function until the end of his next turn'
		},
		auras: [
			{
				id: '315517dc-ffcd-4981-ad27-3d87fd0baf17',
				name: 'Necromantic Aura',
				keywords: '',
				details: '(Necrotic) aura 5; any living enemy that enters or starts its turn within the aura takes 5 necrotic damage.'
			}
		],
		powers: [
			{
				id: 'c02ea343-3102-4404-ac98-eea51a395c5f',
				name: 'Deadwinter Touch',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d6+7 cold and necrotic damage, and the target is slowed (save ends).',
				damage: '2d6+7 cold and necrotic damage',
				category: 1
			},
			{
				id: '43945efc-9873-4e66-b493-956c88ae016c',
				name: 'Deadwinter Ray',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '3d8+7 cold and necrotic damage, and the target is immobilized (save ends).',
				damage: '3d8+7 cold and necrotic damage',
				category: 1
			},
			{
				id: '80b6e53a-919b-4777-9a75-27b230528c7d',
				name: 'Double Attack',
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
				details: 'Ghovran makes two deadwinter touch attacks or two deadwinter ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a3bd7806-43ed-443d-b532-509049fa8009',
				name: 'Lifesapping Hate',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 4d8+7 cold and necrotic damage, and the target takes ongoing 10 cold and necrotic damage (save ends). Ghovran gains 5 temporary hit points for each enemy he damages with this power.',
				damage: '4d8+7 cold and necrotic damage',
				category: 1
			},
			{
				id: '8799e377-5438-40d6-bbb5-7a8fa9aa4d90',
				name: 'Deadwinter Step',
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
				details: 'Ghovran can teleport 5 squares. At the end of that move, enemies adjacent to him take 10 cold and necrotic damage.',
				damage: 'enemies adjacent to him take 10 cold and necrotic damage',
				category: 2
			},
			{
				id: 'a09b1b33-57f6-498b-9478-8e3631a8d5d1',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When Ghovran is reduced to 0 hit points, his body and possessions crumble into dust, but he is not destroyed. He reappears (along with its possessions) in 1d10 days within 1 square of its phylactery, unless the phylactery is also found and destroyed.',
				damage: 'He reappears (along with its possessions) in 1d10 days within 1 square of its phylactery',
				category: 0
			},
			{
				id: '28fdc88e-0db8-4e9c-81ff-b5b73319527d',
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
				details: 'Ghovran regains the use of an expended encounter power.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -15
			},
			{
				type: 2,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Elite Controller',
		phenotype: 'Medium fey humanoid (undead)'
	},
	{
		id: '17ee7231-8d1a-4978-a821-751b45d8667d',
		name: 'Githyanki Dreamslicer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 18,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'History +17, Insight +15',
		equipment: '',
		category: 'Githyanki',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 128,
		initiative: 16,
		ac: 32,
		fortitude: 29,
		reflex: 30,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f34dbbb6-714d-447b-b6cc-b0b83c30a798',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d10 psychic damage.',
				damage: '1d8+5 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: '478008d9-5978-42a0-a76a-1841d704c41e',
				name: 'Mindslice',
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
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '2d10+5 psychic damage.',
				damage: '2d10+5 psychic damage',
				category: 1
			},
			{
				id: '3de347b3-482c-424a-a26e-6f373beb73dd',
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
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'the githyanki dreamslicer or an ally within range can fly up to 5 squares.',
				damage: 'the githyanki dreamslicer or an ally within range can fly up to 5 squares',
				category: 2
			},
			{
				id: '1ac46f59-c287-4f48-a41b-45dae2e782a2',
				name: 'Psychic Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '1d8+5 psychic damage, and ongoing 5 psychic damage (save ends), and the target can’t use daily or encounter powers (save ends).',
				damage: '1d8+5 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '880d93d2-cc5f-4560-9c2f-61a5e8f5c40f',
		name: 'Immolith Claw',
		details: 'The spirits of deceased demons sometimes fuse together as they fall back into the Abyss that spawned them. The event is unpredictable, and the result is a horrid demonic entity called an immolith.',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon, fire, undead',
		level: 20,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 193,
		initiative: 14,
		ac: 34,
		fortitude: 35,
		reflex: 32,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: 'bce50968-bb69-4200-a18e-48f867f9d3ff',
				name: 'Flaming Aura ',
				keywords: '',
				details: '(Fire) aura 1; any creature that enters or starts its turn within the aura takes 10 fire damage.'
			}
		],
		powers: [
			{
				id: '1d535e36-8016-4f79-97de-7bf72e03d8c7',
				name: 'Flaming Claw',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 1d10+9 fire damage, and ongoing 5 fire damage (save ends).',
				damage: '1d10+9 fire damage',
				category: 1
			},
			{
				id: '2b747fea-6845-4648-8064-54167300c0cc',
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
				details: 'The immolith claw makes a flaming claw attack against a Large or smaller target. On a hit, the target slides into a square adjacent to the immolith claw and is grabbed. While grabbed, the target loses any resistance it has to fire. An immolith claw can hold up to five grabbed creatures using this power.',
				damage: '',
				category: 1
			},
			{
				id: '42db009e-710a-4dbb-b40b-8b8b171a2c7f',
				name: 'Deathfire Curse',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'Range 10; the target is slowed (save ends). Aftereffect: The target takes ongoing 5 fire damage (save ends).',
				damage: 'the target takes ongoing 5 fire damage (save ends)',
				category: 3
			},
			{
				id: 'a1921bbd-58d4-4edc-9646-005c3a988b2a',
				name: 'Fiery Lash',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 1d10+9 fire damage, and ongoing 10 fire damage (save ends).',
				damage: '1d10+9 fire damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: 10
			}
		],
		resist: '15 variable (2/encounter)',
		vulnerable: '',
		immune: 'disease, fire, poison',
		tactics: '',

		info: 'Level 20 Controller',
		phenotype: 'Large elemental beast (demon, fire, undead)'
	},
	{
		id: '68f05790-726b-4ee3-9277-9c4cd0a9429d',
		name: 'Larva War Master',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 23,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +22, Athletics +23, Intimidate +22',
		equipment: 'plate armor',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 528,
		initiative: 19,
		ac: 37,
		fortitude: 37,
		reflex: 35,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: 'd40fc741-a38a-4402-abb5-abfef4cb43f6',
				name: 'Tactical Feedback',
				keywords: '',
				details: '(Psychic) aura 6; any enemy within the aura takes 10 psychic damage when it shifts.'
			}
		],
		powers: [
			{
				id: 'b2dcb52e-e687-466c-915a-f48e849c37c7',
				name: 'Mandible Blade',
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
					defence: 1
				},
				description: '',
				details: '3d10+8 necrotic damage.',
				damage: '3d10+8 necrotic damage',
				category: 1
			},
			{
				id: '033c4ced-3507-4b28-98f0-f2577b62ae29',
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
				attack: null,
				description: '',
				details: 'The larva war master makes two mandible blade attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'e1bcec7d-ff99-4b58-94ab-6c95c0d8f2dd',
				name: 'Punishing Beetle',
				action: {
					action: 4,
					trigger: 'when a creature regains hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets the triggering creature; 5d10+12 poison damage. Miss: Half damage.',
				damage: '5d10+12 poison damage',
				category: 5
			},
			{
				id: '5e3a31fe-6b2f-4cf3-86cf-9c826f223d74',
				name: 'Squeezing Swarm',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'By altering its shape, a larva war master can squeeze through small openings as if it were a Tiny creature.',
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

		info: 'Level 23 Elite Brute',
		phenotype: 'Medium natural beast (undead)'
	},
	{
		id: '74645cd5-28e0-4622-8197-d9b728fc4e59',
		name: 'Petrified Treant',
		details: '',
		size: 4,
		origin: 2,
		type: 1,
		keywords: 'plant, undead',
		level: 20,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 376,
		initiative: 16,
		ac: 34,
		fortitude: 32,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1eaf3b08-ad0d-406c-87b2-37a7189387fe',
				name: 'Petrifying Slam',
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
				details: 'Reach 3; 2d12+8 damage, and the target is immobilized (save ends). First Failed Saving Throw: Target is restrained (save ends). Second Failed Saving Throw: Target is restrained and takes ongoing 5 necrotic damage (save ends). Third Failed Saving Throw: Target is petrified (no save).',
				damage: '2d12+8 damage',
				category: 1
			},
			{
				id: 'db0fccff-39d3-40b9-8eeb-c97d370c8f4a',
				name: 'Petrifying Roots',
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
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '1d12+8 damage and the target is knocked prone.',
				damage: '1d12+8 damage and the target is knocked prone',
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
		immune: '',
		tactics: '',

		info: 'Level 20 Elite Controller',
		phenotype: 'Huge fey beast (plant, undead)'
	},
	{
		id: '45c50885-2bb1-4401-a4b0-93da92821b41',
		name: 'Phane Wraith',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'undead',
		level: 24,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +24; darkvision',
		movement: 'fly 10 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Primordial, Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 315,
		initiative: 21,
		ac: 38,
		fortitude: 36,
		reflex: 38,
		will: 36,
		regeneration: {
			value: 15,
			details: 'if the phane wraith takes radiant damage, regeneration is negated until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '7fbc60ab-75d3-4867-8388-5434308f9262',
				name: 'Ghost Touch',
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
				details: 'Reach 2; 2d10+11 necrotic damage, and the target is pushed 2 squares, and is weakened until the end of the phane wraith’s next turn. The phane wraith can shift before and after the attack, up to a total of 4 squares.',
				damage: '2d10+11 necrotic damage',
				category: 1
			},
			{
				id: '88e6ce76-ee1e-40be-9036-7fa4f0cd0dfd',
				name: 'Ray of Temporal possibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d10+11 psychic damage, and the target is teleported 7 squares and restrained (save ends). Aftereffect: The target is slowed (save ends).',
				damage: '2d10+11 psychic damage',
				category: 1
			},
			{
				id: '292cd7a1-48e3-45f6-8e59-77af25fb447e',
				name: 'Ghost Tempest',
				action: {
					action: 1,
					trigger: 'not usable when bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: '1d10+11 necrotic damage, and the target is pushed 2 squares, and is weakened and insubstantial until the end of the phane wraith’s next turn. If possible, a time wraith appears in the target’s original space and enters the initiative order.',
				damage: '1d10+11 necrotic damage',
				category: 5
			},
			{
				id: '80251409-569a-49ff-8b03-8ec7e56654d4',
				name: 'Temporal Fugue',
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
				details: 'By moving backward and forward in time, a phane wraith cancels one condition or type of ongoing damage effecting it.',
				damage: 'a phane wraith cancels one condition or type of ongoing damage effecting it',
				category: 3
			},
			{
				id: '011f8a4d-9805-442d-a25b-99d84db34083',
				name: 'Dead to Time and Space',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The phane wraith is invisible and immune to all damage until it attacks or avoids the damage from an area or close attack.',
				damage: 'the phane wraith is invisible and immune to all damage until it attacks or avoids the damage from an area or close attack',
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

		info: 'Level 24 Elite Controller',
		phenotype: 'Large shadow beast (undead)'
	},
	{
		id: '72588c0d-119c-43d9-b42a-380268196979',
		name: 'Portal Thing',
		details: '',
		size: 3,
		origin: 5,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 22,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; blindsight 20, tremorsense 20',
		movement: '0 immobile',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 520,
		initiative: 15,
		ac: 34,
		fortitude: 38,
		reflex: 32,
		will: 32,
		regeneration: {
			value: 20,
			details: 'if the portal thing takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '9eef6b6b-c74f-4041-a828-14a88c1ec085',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 4d6+10 necrotic damage, and the target is pulled 1.',
				damage: '4d6+10 necrotic damage',
				category: 1
			},
			{
				id: 'f8514794-314d-4eda-8fef-d1653358fd22',
				name: 'Death’s Tendrils',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close blast 4',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d6+10 necrotic damage, and the target is pulled 1.',
				damage: '2d6+10 necrotic damage',
				category: 1
			},
			{
				id: 'ecd2ccc9-9886-4411-89c4-cbe551f9b81b',
				name: 'Into the Thing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature that enters or starts its turn in a square containing the portal thing takes 20 necrotic damage and is immobilized (save ends). A creature that dies in the portal thing is slowly dissolved over a 24-hour period.',
				damage: 'a creature that enters or starts its turn in a square containing the portal thing takes 20 necrotic damage and is immobilized (save ends)',
				category: 0
			},
			{
				id: '0c1af938-14b6-4f97-8b49-40bcc8d601f2',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The portal thing can make opportunity attacks against all enemies within its reach.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -15
			},
			{
				type: 3,
				value: -15
			},
			{
				type: 6,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 22 Elite Brute',
		phenotype: 'Large shadow animate (blind, ooze, undead)'
	},
	{
		id: 'e05fff85-6e65-471a-8b9a-9cadbe5f1164',
		name: 'Rakshasa Noble Huecuva',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 19,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +20, Athletics +17, Bluff +21, Diplomacy +21, History +20, Insight +19, Intimidate +21',
		equipment: '',
		category: 'Rakshasa',
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
			score: 22,
			modifier: 6,
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
		hp: 356,
		initiative: 14,
		ac: 33,
		fortitude: 31,
		reflex: 33,
		will: 34,
		regeneration: {
			value: 5,
			details: 'damage from silver weapons negates regeneration until the end of the rakshasa noble huecuva’s next turn'
		},
		auras: [],
		powers: [
			{
				id: 'fa6289ec-a75d-4c0d-bcac-25a1bde86838',
				name: 'Unholy Claw',
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
				details: '1d6+3 damage, and the target takes ongoing 10 necrotic damage (save ends). When the target takes ongoing necrotic damage from this power, all adjacent living creatures take 5 necrotic damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'b973ae56-17e7-49ee-9ceb-f476eae56c2e',
				name: 'Mind Twist',
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
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '3d6+7 psychic damage, and the target is dazed (save ends).',
				damage: '3d6+7 psychic damage',
				category: 1
			},
			{
				id: 'd55df7b2-1e2d-43c2-acc9-518408ad1046',
				name: 'Phantom Lure',
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
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'the target slides 5 squares.',
				damage: 'the target slides 5 squares',
				category: 1
			},
			{
				id: 'caaef9da-79e5-4cf0-8511-1cb33d4300a8',
				name: 'Frightful Phantom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '4d8+7 psychic damage, the target is pushed 5 squares, and the target is stunned (save ends).',
				damage: '4d8+7 psychic damage',
				category: 1
			},
			{
				id: '2c80437f-f3fa-4610-8a84-ebb02b358eb5',
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
				details: 'The rakshasa noble huecuva can disguise itself to appear as any Medium humanoid. A successful Insight check (opposed by the rakshasa’s Bluff check) pierces the disguise.',
				damage: '',
				category: 3
			},
			{
				id: '4176a3b9-7bb2-4120-a9be-ea9df2e2040a',
				name: 'Phantom Image',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the rakshasa noble huecuva’s next turn, any creature that attacks the rakshasa’s AC or Reflex defense must roll twice and use the lower attack roll result. If either result is a critical hit, use that result instead.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '98b4f38c-9f13-45d6-abb7-f74e41f1e7fa',
		name: 'Shadowclaw',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'mount, undead',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Evil',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 13,
		ac: 33,
		fortitude: 36,
		reflex: 33,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ddd53229-51f8-470b-80ab-a4a27647dedd',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '8 damage (12 damage after reanimation).',
				damage: '8 damage (12 damage after reanimation)',
				category: 1
			},
			{
				id: '5305ff81-25ee-4465-a0d7-e897fef5f08f',
				name: 'Charger',
				action: null,
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider',
				range: '',
				attack: null,
				description: '',
				details: 'Shadowclaw grants rider +10 to damage rolls on charge attacks.',
				damage: 'shadowclaw grants rider +10 to damage rolls on charge attacks',
				category: 0
			},
			{
				id: '7d7ef063-9ac3-49b3-8e14-729837dfe31a',
				name: 'Reanimation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'On the turn after it is first reduced to 0 hit points, the shadowclaw rises again with 1 hit point.',
				damage: 'the shadowclaw rises again with 1 hit point',
				category: 0
			},
			{
				id: 'ffe0a1a3-74cf-4eda-b17e-b2b1e30e4a63',
				name: 'Shadow Jump',
				action: {
					action: 2,
					trigger: 'recharges with reanimation',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shadowclaw teleports 3 squares and becomes immune to all damage until the start of its next turn.',
				damage: 'shadowclaw teleports 3 squares and becomes immune to all damage until the start of its next turn',
				category: 5
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

		info: 'Level 21 Minion',
		phenotype: 'Large shadow beast (mount, undead)'
	},
	{
		id: '67fa32e5-db57-44f1-8218-ba1d722e5f9b',
		name: 'Shadowclaw Nightmare',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: 'mount, undead',
		level: 21,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '8',
		alignment: 'Evil',
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 4,
			modifier: -3,
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
		hp: 206,
		initiative: 18,
		ac: 34,
		fortitude: 34,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '04421497-eaf3-46b0-be93-29eeb03b4ce5',
				name: 'Shadowclaws',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '2d6+7 necrotic damage, and ongoing 10 cold damage (save ends). (Damage increases to 2d8 + 9 after reanimation.).',
				damage: '2d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'aff41bea-26bb-48ee-a360-11963ac4e615',
				name: 'Shadowride',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: 'Shadowclaw moves its speed. Each creature that makes a melee attack against the shadowclaw during this move takes 15 cold and necrotic damage. Each square the shadowclaw leaves is filled with swirling shadows until the end of the shadowclaw’s next turn. A living creature that enters an affected square is blinded (save ends).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '315fcd2c-ffbf-4645-bcce-63bb1769de36',
				name: 'Charger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 20th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'Shadowclaw grants rider +15 to damage rolls on charge attacks.',
				damage: 'shadowclaw grants rider +15 to damage rolls on charge attacks',
				category: 1
			},
			{
				id: '65f0c3fe-8118-4244-8298-7043a8a3c34d',
				name: 'Reanimation',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'On the turn after it is first reduced to 0 hit points, a shadowclaw rises again with 25 hit points.',
				damage: 'a shadowclaw rises again with 25 hit points',
				category: 0
			},
			{
				id: '524df30e-48f1-42da-977d-2e1e75245039',
				name: 'Shadow Jump',
				action: {
					action: 2,
					trigger: 'recharges with reanimation',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shadowclaw teleports 5 squares and becomes immune to all damage until the start of its next turn.',
				damage: 'shadowclaw teleports 5 squares and becomes immune to all damage until the start of its next turn',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 2,
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

		info: 'Level 21 Skirmisher',
		phenotype: 'Large shadow beast (mount, undead)'
	},
	{
		id: 'd186c6c8-342d-4d8c-9ba0-9d02f27b8d30',
		name: 'Shonvurru',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon, undead',
		level: 24,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +19, History +19, Insight +21, Stealth +25',
		equipment: 'scimitar',
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
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 440,
		initiative: 22,
		ac: 38,
		fortitude: 34,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a3b6b85c-e7b6-449a-ae43-d92c95281596',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+9 damage (crit 6d10+29), and ongoing 10 necrotic damage (save ends).',
				damage: '2d10+9 damage (crit 6d10+29)',
				category: 1
			},
			{
				id: '8abb37c2-84b7-4283-ab19-37825a523c57',
				name: 'Deadly Steel Mantle',
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
				details: 'Shonvurru makes two scimitar attacks and uses two scimitars to parry incoming attacks, gaining a +2 bonus to AC until the start of her next turn.',
				damage: 'gaining a +2 bonus to AC until the start of her next turn',
				category: 1
			},
			{
				id: 'd76b99f1-a8ac-4fc5-9e97-b08df4384965',
				name: 'Hacking Blades',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy misses shonvurru with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shonvurru makes a scimitar attack against the enemy.',
				damage: '',
				category: 5
			},
			{
				id: '065fdfea-2536-4900-9b0b-9788566ba822',
				name: 'Wraith Dance',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shonvurru can shift 4 squares, including through enemy spaces, and make up to four scimitar attacks, shifting 1 extra square each time she hits. She gains insubstantial and phasing while shifting this way, and deals 5 necrotic damage to any creature whose space she shifts through. She must end the dance in an unoccupied space.',
				damage: 'and deals 5 necrotic damage to any creature whose space she shifts through',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: '15 variable (3/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Elite Skirmisher',
		phenotype: 'Large elemental humanoid (demon, undead)'
	},
	{
		id: '2b278539-d3ad-40d9-b15d-4e9133dad6e1',
		name: 'Sorrowsworn Doomguard',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 21,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +20',
		equipment: 'scythe',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 198,
		initiative: 20,
		ac: 37,
		fortitude: 33,
		reflex: 35,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '188d3a6d-78fd-4953-ba87-125749743a01',
				name: 'Scythe',
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
				details: '4d4+9 damage, and the target is marked until the end of the sorrowsworn doomguard’s next turn.',
				damage: '4d4+9 damage',
				category: 1
			},
			{
				id: '468a3ebc-1956-4f86-aa63-2a49ba27fae6',
				name: 'Shadow Reap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 2
				},
				description: '',
				details: 'Requires scythe; targets an enemy marked by a sorrowsworn doomguard; 4d4+15 psychic damage, the target is immobilized and marked—both until the end of the sorrowsworn doomguard’s next turn. If this attack reduces a target to 0 or fewer hit points, the sorrowsworn doomguard gains 20 temporary hit points.',
				damage: '4d4+15 psychic damage',
				category: 1
			},
			{
				id: '63eae8a4-ca69-4f3f-b373-9e8825bb6015',
				name: 'Doomguard Jaunt',
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
				details: 'The sorrowsworn doomguard teleports 8 squares.',
				damage: 'The sorrowsworn doomguard teleports 8 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Soldier',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'e4968d29-ead3-4093-8c0e-aea946d69f71',
		name: 'Sorrowsworn Fleshripper',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 21,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +23',
		equipment: 'spiked gauntlet',
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
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
		hp: 196,
		initiative: 20,
		ac: 35,
		fortitude: 32,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd70912bd-71dc-4946-ab97-788b30c37894',
				name: 'Spiked Gauntlet',
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
				details: '2d6+11 damage.',
				damage: '2d6+11 damage',
				category: 1
			},
			{
				id: '58e53774-7114-4457-ad0d-c58450107f3f',
				name: 'Bereaving Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sorrowsworn fleshripper teleports 5 squares and makes a spiked gauntlet attack with combat advantage.',
				damage: 'The sorrowsworn fleshripper teleports 5 squares and makes a spiked gauntlet attack with combat advantage',
				category: 1
			},
			{
				id: 'd31a14df-66e2-49cf-88ac-d8a8379849de',
				name: 'Corpse Dance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sorrowsworn initiate fleshripper shifts 8 squares and makes three spiked gauntlet attacks at any point during the move, dealing an extra 1d8 psychic damage on each attack. Each attack must be made against a different target.',
				damage: 'dealing an extra 1d8 psychic damage on each attack',
				category: 1
			},
			{
				id: '30b87ad9-0249-44dc-820b-45fd1da962a5',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sorrowsworn fleshripper deals an extra 2d8 psychic damage to a target it has combat advantage against.',
				damage: 'the sorrowsworn fleshripper deals an extra 2d8 psychic damage to a target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Skirmisher',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '3881308c-ad76-4bd4-b055-aac1987d358f',
		name: 'Time Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: 'fly 6 (hover); phasing',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 17,
		ac: 36,
		fortitude: 32,
		reflex: 33,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '01717bf6-9558-4884-9889-2c5fba4cd3eb',
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
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '12 necrotic damage.',
				damage: '12 necrotic damage',
				category: 1
			},
			{
				id: '0948d38e-fbef-46a8-ad86-56d24fc31489',
				name: 'Spiritual Connection',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The time wraith marks the target from which it was created until the time wraith is destroyed, or the mark is otherwise superseded or ended. A target cannot produce another time wraith while so marked. When the time wraith is reduced to 0 hit points, the target from which it originated is dazed until the end of that target’s next turn.',
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

		info: 'Level 21 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'a83091d6-755f-4165-a418-99d86c28152c',
		name: 'Uganon',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 21,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +18; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +22, Bluff +22, Religion +22, Stealth +19',
		equipment: 'magic armor; feyleather armor; pact blade; potion of recovery',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 304,
		initiative: 14,
		ac: 33,
		fortitude: 33,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: 'b8192bc6-d217-4a5c-9f4b-b22979255ec4',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 5; any enemy within the aura takes a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '359ba0bf-d440-451b-94b8-0a49abd60173',
				name: 'Pact Blade',
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
				details: '(+29 against bloodied enemies)2d4+6 damage plus 2d6 necrotic damage (crit 5d6+14 +12 necrotic).',
				damage: '(+29 against bloodied enemies)2d4+6 damage plus 2d6 necrotic damage (crit 5d6+14 +12 necrotic)',
				category: 1
			},
			{
				id: '31c9ab5a-01d6-44a1-9f2e-867df69ebdc5',
				name: 'Ghoulish Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 15',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '2d8+7 necrotic damage (crit 5d6 + 23 necrotic), and the target is immobilized (save ends).',
				damage: '2d8+7 necrotic damage (crit 5d6 + 23 necrotic)',
				category: 1
			},
			{
				id: 'f9e660d4-da45-4d63-8c12-5ad056eeea5f',
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
				details: 'Uganon makes either two pact blade or two ghoulish ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: '617bc52e-fd1c-4b53-bf30-391fdfe82f67',
				name: 'Thantos Pall',
				action: {
					action: 1,
					trigger: 'sustain minor',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 5 within 20',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d4+7 necrotic damage. Enemies treat the area as lightly obscured. A creature that enters or starts its turn within the zone is attacked. As a move action, Uganon can move the zone 3 squares. Sustain Minor: The zone persists.',
				damage: '2d4+7 necrotic damage',
				category: 5
			},
			{
				id: 'fbfa5fb4-5163-41f3-8e7b-f25a39daf4e7',
				name: 'Uganon’s Curse',
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
				attack: null,
				description: '',
				details: 'Targets closest enemy; the curse remains in effect until either the target or Uganon is destroyed. Once per round, Uganon can deal an extra 4d6 necrotic damage to a cursed target he hits with an attack. Cursed targets that make an attack against Uganon take 5 necrotic damage.',
				damage: 'uganon can deal an extra 4d6 necrotic damage to a cursed target he hits with an attack',
				category: 3
			},
			{
				id: '573121ac-159b-4401-ba1a-4b4facbf9299',
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
				details: 'Uganon gains a +1 power bonus to his next attack roll against an enemy that hit him since his last turn. If the attack hits and deals damage, Uganon deals an extra 7 damage, and the target is pushed 3 squares.',
				damage: 'if the attack hits and deals damage',
				category: 3
			},
			{
				id: 'c27e887b-8b8e-4179-adf6-e9b498bb3055',
				name: 'Wraith’s Transposition',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Uganon teleports 8 squares and becomes insubstantial until the end of his next turn. He can teleport into a space occupied by an ally or a cursed target, switching places with that target. A cursed enemy takes 10 necrotic damage from this switch.',
				damage: 'a cursed enemy takes 10 necrotic damage from this switch',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
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

		info: 'Level 21 Elite Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd45bf619-0cbe-4a96-b83b-c38f33287cdc',
		name: 'Undead Goristro',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon, undead',
		level: 21,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 500,
		initiative: 12,
		ac: 33,
		fortitude: 36,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8de03c81-4f50-4258-b476-f0cf42d19652',
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
				details: 'Reach 3; 2d12+10 damage.',
				damage: '2d12+10 damage',
				category: 1
			},
			{
				id: '4fc1309b-e5ee-4bcc-a0e1-688dc7085abd',
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
				details: 'The undead goristro makes two slam attacks.',
				damage: '',
				category: 1
			},
			{
				id: '1c48c132-736c-4f5c-90f7-bb54027c1fc8',
				name: 'Deadly Rampage',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
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
				details: 'The undead goristro moves its speed and can move through enemy spaces. Each time it enters a creature’s space, it makes a gore attack; 2d10+10 damage, and the target is pushed 2 squares and knocked prone. The goristro must end its move in an unoccupied space.',
				damage: '2d10+10 damage',
				category: 5
			},
			{
				id: '5cf0f67a-7771-4350-955e-f3731737de14',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'The undead goristro makes a charge attack; 3d12+10 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '3d12+10 damage',
				category: 1
			},
			{
				id: '2befa758-a068-4b87-bf7a-316a9ec90485',
				name: 'Raging Frenzy',
				action: {
					action: 4,
					trigger: 'when attacked by an adjacent enemy while bloodied',
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
				details: 'The undead goristro makes a frenzied gore attack against the enemy; 2d10+10 damage.',
				damage: '2d10+10 damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon, undead)'
	},
	{
		id: '93813391-e084-4992-bbe0-ec47ab22d183',
		name: 'Worm of Ages',
		details: '',
		size: 4,
		origin: 5,
		type: 1,
		keywords: 'blind, undead',
		level: 24,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +19; blindsight 10, tremorsense 20',
		movement: '8, burrow 4 (tunneling)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +22',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 916,
		initiative: 17,
		ac: 38,
		fortitude: 36,
		reflex: 32,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'afb9082f-d4ca-4bea-bb33-34cb0d4504fe',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+9 damage, and the target is grabbed (escape ends). Place a grabbed target in the maw. While the worm has a target grabbed, it cannot bite and no creature can enter the maw. The maw adjoins the throat. If a creature moves into the maw from the throat without being grabbed, it can shift to an unoccupied space adjacent to the worm.',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: 'fd9060d3-56d5-48c0-8f61-b88bbf6890d7',
				name: 'Gulping Bite',
				action: {
					action: 1,
					trigger: 'recharges when the worm is bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '2d10+9 damage, and the target is grabbed (escape ends). Place a grabbed target in the maw. Miss: Half damage, and the target is pushed 2 squares and knocked prone, but not grabbed.',
				damage: '2d10+9 damage',
				category: 5
			},
			{
				id: 'f8f4182a-4e9c-4e70-9174-b488e05a1fff',
				name: 'Sections',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The inside of each section of the worm—maw, throat, gullet, and stomach—is 2-by-2 squares and dark. A creature inside the worm but not swallowed has combat advantage against the worm. Moving from a section deeper in the worm to a section closer to the maw requires a move action and a DC 24 Strength check. Moving deeper into the worm requires only a move action.',
				damage: 'and stomach—is 2-by-2 squares and dark',
				category: 0
			},
			{
				id: '706a73bd-d53d-4141-a4cc-c9cb20c886e4',
				name: 'Maw',
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
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '1d12 + 4 damage, and the target is swallowed. The target is forced into the throat.',
				damage: '1d12 + 4 damage',
				category: 3
			},
			{
				id: 'd5cf8219-b44a-4f95-a3d3-6c5fdb26ff59',
				name: 'Throat',
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
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '1d12 + 4 damage, and the target is swallowed. The target is forced into the gullet.',
				damage: '1d12 + 4 damage',
				category: 3
			},
			{
				id: '71c84c5b-0287-4b71-aec7-eb98180c2d33',
				name: 'Gullet',
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
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '1d12 + 4 damage, and the target is swallowed. The target is forced into the stomach.',
				damage: '1d12 + 4 damage',
				category: 3
			},
			{
				id: '2b4cd9f9-3fcb-4c5d-bfec-02d074309dc6',
				name: 'Stomach',
				action: null,
				keywords: 'Acid, Necrotic',
				condition: 'no action',
				range: '',
				attack: null,
				description: '',
				details: 'At the start of its turn, a creature in the stomach takes 1d10 + 9 acid and necrotic damage, and the target is swallowed.',
				damage: 'a creature in the stomach takes 1d10 + 9 acid and necrotic damage',
				category: 0
			},
			{
				id: '700709af-143a-437c-9f57-fc55bfc68c1c',
				name: 'Swallowed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A swallowed target is restrained (escape ends), and takes 1d12 + 4 damage at the start of each of its turns. The area of effect for its area and close attacks cannot extend beyond the section of the worm it currently occupies. If the target succeeds on an escape action, it ends the swallowed condition. If any target deals damage to the throat, gullet, or stomach, that target and all others in that same section of the worm gain a +2 bonus to escape rolls until the start of the worm’s next turn. Creatures outside the worm have no line of effect on creatures inside the worm. If the worm drops to 0 hit points, its flesh turns to dust in a matter of moments, freeing any creatures inside it.',
				damage: 'and takes 1d12 + 4 damage at the start of each of its turns',
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
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Solo Controller',
		phenotype: 'Huge shadow beast (blind, undead)'
	},
	{
		id: '00d03f94-0034-4cc2-a5e6-fb45d17d2712',
		name: 'Abhorrent Reaper Terror',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 26,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +16; darkvision',
		movement: '8, fly 12 (hover)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +25',
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
		hp: 472,
		initiative: 20,
		ac: 42,
		fortitude: 38,
		reflex: 35,
		will: 37,
		regeneration: {
			value: 15,
			details: 'if an abhorrent reaper takes radiant damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '50a4b73c-94c1-4042-9eb5-173d725997c2',
				name: 'Aura of Ruin',
				keywords: '',
				details: 'aura 5; any ally within the aura deals 1d6 extra necrotic damage with melee attacks.'
			}
		],
		powers: [
			{
				id: 'bb8b08f6-633c-4483-a7a5-8dc9cf9bc620',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 necrotic damage.',
				damage: '3d8+9 necrotic damage',
				category: 1
			},
			{
				id: 'f7c9f676-56e1-458e-83db-a0b870f68510',
				name: 'Hateful Charge',
				action: {
					action: 1,
					trigger: 'requires sickle; usable only when charging',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '3d8+9 necrotic damage, and the target is knocked prone and is immobilized until the end of the abhorrent reaper’s next turn.',
				damage: '3d8+9 necrotic damage',
				category: 5
			},
			{
				id: '9027365b-13a1-4466-b750-39b1c5624366',
				name: 'Hate’s Cleave',
				action: {
					action: 1,
					trigger: 'requires sickle',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 4d6+9 necrotic damage.',
				damage: '4d6+9 necrotic damage',
				category: 5
			},
			{
				id: '18b5166e-bc9c-4b06-a85b-154a595989b1',
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
				id: 'fc2e3358-aa9d-44ca-bed8-4ebba3cbd735',
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
				details: 'The abhorrent reaper terror becomes insubstantial until it attacks or until the end of its next turn.',
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

		info: 'Level 26 Elite Soldier (L)',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: 'b0da4e93-2ed5-4d51-8327-f59229998bee',
		name: 'Abyssal Horde Ghoul',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 26,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +25',
		equipment: '',
		category: 'Abyssal Ghoul',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 20,
		ac: 40,
		fortitude: 38,
		reflex: 39,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '2e0000c2-7e68-458b-a22b-2cd1decd7eb5',
				name: 'Unending Hunger',
				keywords: '',
				details: 'aura 1; each enemy that starts its turn within the aura takes 5 damage.'
			}
		],
		powers: [
			{
				id: '6cb3fbda-9631-48f0-bac7-00cfdc6bca9b',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '14 necrotic damage, and the target is immobilized (save ends).',
				damage: '14 necrotic damage',
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

		info: 'Level 26 Minion',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'ed795264-ef46-44e2-bc6b-c6d7dd9618d6',
		name: 'Balor Battlewhip',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 24,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22; truesight 6',
		movement: '8, fly 10 (clumsy)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +19, Insight +22, Intimidate +19',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 560,
		initiative: 16,
		ac: 38,
		fortitude: 40,
		reflex: 34,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: 'eeeb5f40-3c75-40eb-84cd-58ee6037429e',
				name: 'Flaming Body',
				keywords: '',
				details: '(Fire) aura 1 (aura 2 while the balor is bloodied); each enemy that starts its turn within the aura takes 10 fire damage (15 fire damage while the balor is bloodied).'
			}
		],
		powers: [
			{
				id: '37f2f68f-1d92-4341-bb3c-a7aedfcf5557',
				name: 'Lightning Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8+8 lightning damage, or 3d8+24 lightning damage on a critical hit.',
				damage: '2d8+8 lightning damage',
				category: 1
			},
			{
				id: '4165c78c-d96b-4a3f-ba9b-a44022852fd8',
				name: 'Flame Whip',
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
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: 'Reach 5; 3d6+3 fire damage, and ongoing 5 fire damage (save ends). Also, the target is pulled into an unoccupied space adjacent to the balor.',
				damage: '3d6+3 fire damage',
				category: 1
			},
			{
				id: 'b6013822-8a52-4083-9a5b-a77dfcdb7ff4',
				name: 'Fire and Lightning',
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
				details: 'The balor battlewhip makes a lightning sword attack and a flame whip attack.',
				damage: '',
				category: 1
			},
			{
				id: '95d92c7b-5097-42a3-b3e7-bd1a52416cca',
				name: 'Death Burst',
				action: null,
				keywords: 'Fire',
				condition: 'when reduced to 0 hit points',
				range: 'The balor explodes in a burst of flame. The balor and its weapons are destroyed. Close burst 5',
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '5d10 fire damage. Miss: Half damage.',
				damage: '5d10 fire damage',
				category: 0
			},
			{
				id: '6e1f3820-c5d8-4a2e-9715-ea84d23bbf8d',
				name: 'Demonic Accuracy',
				action: {
					action: 7,
					trigger: 'when the balor misses with an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The balor rerolls the attack and gains a +5 bonus to the roll.',
				damage: 'The balor rerolls the attack and gains a +5 bonus to the roll',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -40
			}
		],
		resist: '15 variable (3/encounter)',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 24 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: '740cdb63-603e-4d36-8b3f-9627557f890c',
		name: 'Black Blood Bone Collector',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'blind, ooze, undead',
		level: 25,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; tremorsense 20',
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
		hp: 580,
		initiative: 10,
		ac: 37,
		fortitude: 39,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3642dd33-668a-4daf-aaff-fdd04721f372',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d6+11 necrotic damage.',
				damage: '4d6+11 necrotic damage',
				category: 1
			},
			{
				id: '30e2cb2c-fc82-4873-9620-89489d5c4b47',
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
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '3d6+11 necrotic damage, and the target is grabbed and loses a healing surge. The black blood bone collector regains 5 hit points for each healing surge a target loses in this way.',
				damage: '3d6+11 necrotic damage',
				category: 1
			},
			{
				id: '2c436336-41e9-4e37-ac75-ba4b0475833a',
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
				details: 'The black blood bone collector shifts up to 3 squares.',
				damage: 'The black blood bone collector shifts up to 3 squares',
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

		info: 'Level 25 Elite Brute',
		phenotype: 'Huge natural animate (blind, ooze, undead)'
	},
	{
		id: '7244a7cc-27d9-41f3-a4a8-3f3a7a9d30d3',
		name: 'Black Blood Hydra',
		details: '',
		size: 5,
		origin: 1,
		type: 1,
		keywords: 'reptile',
		level: 26,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +22; all-around vision, darkvision',
		movement: '7, swim 14',
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
			score: 32,
			modifier: 11,
			cost: -1
		},
		dexterity: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 4,
			modifier: -3,
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
		hp: 992,
		initiative: 19,
		ac: 38,
		fortitude: 40,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1add9c60-2741-4508-ae29-2cc10d61e473',
				name: 'Death Bite',
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
				details: 'Reach 3; 3d8+9 necrotic damage, and ongoing 15 necrotic damage (save ends).',
				damage: '3d8+9 necrotic damage',
				category: 1
			},
			{
				id: 'cf510423-8336-4fb7-b7f4-a0a85739beb4',
				name: 'Acid Bite',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8+9 acid damage, and -2 to AC and Reflex (save ends).',
				damage: '3d8+9 acid damage',
				category: 1
			},
			{
				id: '588596ae-0aad-49c0-b174-747692a58abb',
				name: 'Blood Bite',
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
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 3d8+9 poison damage, and ongoing 15 poison (save ends).',
				damage: '3d8+9 poison damage',
				category: 1
			},
			{
				id: '13b9d3c7-8fc2-441b-ac66-1e848f54edaf',
				name: 'Black Blood Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Necrotic',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d8+9 acid and necrotic damage, and the target is immobilized (save ends).',
				damage: '2d8+9 acid and necrotic damage',
				category: 1
			},
			{
				id: 'daa1d488-4c70-411e-9fc5-f87ad434d565',
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
				details: 'The black blood hydra makes five bite attacks (either death bite, acid bite, or blood bite), and any additional bite attacks it gains from regenerating heads (up to eight attacks when reduced to 248 hit points or fewer).',
				damage: 'and any additional bite attacks it gains from regenerating heads (up to eight attacks when reduced to 248 hit points or fewer)',
				category: 1
			},
			{
				id: 'c47d1f9f-d755-440a-9832-9d2080a71244',
				name: 'Many-Headed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Each time the black blood hydra becomes dazed or stunned, it loses one attack while using hydra fury on its next turn. The hydra can be dazed or stunned multiple times.',
				damage: '',
				category: 0
			},
			{
				id: 'a173b7bd-138a-464e-9c0c-1e953662bae4',
				name: 'Regenerating Heads',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a black blood hydra first reaches 744, 496, and 248 hit points, a head is destroyed. At the start of the hydra’s next turn after a head is destroyed, two heads grow in the lost head’s place, and the hydra gains an additional bite attack with hydra fury.',
				damage: 'When a black blood hydra first reaches 744',
				category: 0
			},
			{
				id: 'ebe5e425-ffa7-4eb0-8065-e719427b76f3',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black blood hydra can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
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

		info: 'Level 26 Solo Brute',
		phenotype: 'Gargantuan elemental beast (reptile)'
	},
	{
		id: '002b6218-3091-4a34-865f-ad85486e2fac',
		name: 'Black Bloodspawn Devourer',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'blind, undead',
		level: 25,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; blindsight 10',
		movement: '6',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 282,
		initiative: 19,
		ac: 37,
		fortitude: 38,
		reflex: 36,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9ca5c3ab-9339-4a24-989a-77c123343c79',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '3d10+10 necrotic damage.',
				damage: '3d10+10 necrotic damage',
				category: 1
			},
			{
				id: '6b72b331-1eba-4a81-a095-bfadfd858333',
				name: 'Devourer’s Tongue',
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
					bonus: 26,
					defence: 2
				},
				description: '',
				details: 'Reach 3; the devourer makes three attacks against the same target; 1d10+5 necrotic damage. If one attack hits, the target is knocked prone. If two attacks hit, the target is knocked prone and dazed until the end of the black bloodspawn’s next turn. If all three attacks hit, the target is knocked prone, stunned until the end of the black bloodspawn’s next turn, and loses a healing surge.',
				damage: '1d10+5 necrotic damage',
				category: 1
			},
			{
				id: '0dbfc764-8807-47f8-a32f-1ec75bd809db',
				name: 'Hive Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black bloodspawn gains combat advantage against any target that is adjacent to two or more black bloodspawn.',
				damage: '',
				category: 0
			},
			{
				id: '90c76c65-db2c-42f3-85f2-ad9f5bc60831',
				name: 'Caustic Blood',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black bloodspawn devourer deals 10 necrotic damage to the attacker.',
				damage: 'the black bloodspawn devourer deals 10 necrotic damage to the attacker',
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Brute',
		phenotype: 'Medium elemental beast (blind, undead)'
	},
	{
		id: '0e3ff883-bc2c-430a-a5b0-56f7c5e2ff8f',
		name: 'Black Bloodspawn Hunter',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'blind, undead',
		level: 25,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; blindsight 10',
		movement: '8, swim 8',
		alignment: 'Chaotic evil',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 229,
		initiative: 23,
		ac: 39,
		fortitude: 37,
		reflex: 39,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b69d93ef-ceec-4fe4-ab44-a7eb7d6f7bff',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '3d6+10 necrotic damage, and the black bloodspawn shifts 1 square.',
				damage: '3d6+10 necrotic damage',
				category: 1
			},
			{
				id: '5671ad91-0d01-4af4-86f2-3edabe418b74',
				name: 'Black Blood Sting',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8+5 necrotic damage, and ongoing 15 poison damage (save ends). The target cannot spend healing surges until it ends the ongoing damage. Miss: The black bloodspawn hunter shifts 3 squares.',
				damage: '2d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'ed22e23c-a849-4022-ab41-10939a3c57f0',
				name: 'Hunter’s Tongue',
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
					bonus: 28,
					defence: 2
				},
				description: '',
				details: 'Reach 3; the hunter makes three attacks against the same target; 1d6+5 necrotic damage. If one attack hits, the target is knocked prone. If two attacks hit, the target is knocked prone and immobilized (save ends). If all three attacks hit, the target is knocked prone, immobilized, weakened (save ends both), and loses a healing surge.',
				damage: '1d6+5 necrotic damage',
				category: 1
			},
			{
				id: '0d1285f9-110c-4dec-bf78-fcc287bfcad7',
				name: 'Hive Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black bloodspawn gains combat advantage against any target that is adjacent to two or more black bloodspawn.',
				damage: '',
				category: 0
			},
			{
				id: '1a13b0dd-1973-4124-8205-f8d836e6a5ed',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black bloodspawn deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the black bloodspawn deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '07d13624-8768-4a17-9d20-c7c5db8345cd',
				name: 'Caustic Blood',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The black bloodspawn hunter deals 10 necrotic damage to the attacker.',
				damage: 'the black bloodspawn hunter deals 10 necrotic damage to the attacker',
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Skirmisher',
		phenotype: 'Medium elemental beast (blind, undead)'
	},
	{
		id: 'db91db4a-4947-495a-8ce9-565026eeeeed',
		name: 'Covenant Cultist',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 21,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'longsword',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 13,
		ac: 33,
		fortitude: 33,
		reflex: 32,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e20794dc-ba6f-4880-94c9-6d311e772136',
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
				details: '12 damage.',
				damage: '12 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '5fb24786-e0ea-4b39-8cb2-9e86e77b3c2a',
		name: 'Decaying Mummy',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12',
		movement: '5',
		alignment: 'Unaligned',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 16,
		ac: 35,
		fortitude: 37,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: '1dc3e611-4674-413d-86f7-3768029f8146',
				name: 'Decaying Aura',
				keywords: '',
				details: '(Necrotic) aura 1; each enemy that enters or starts its turn within the aura takes 5 necrotic damage and is weakened (save ends).'
			}
		],
		powers: [
			{
				id: '78f21b9c-ee41-4a53-94db-4cfe6e9a9723',
				name: 'Decaying Slam',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '14 necrotic damage.',
				damage: '14 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '1f4b4018-de1a-4d76-82e1-955b764d3d16',
		name: 'Deva Fallen Star Servitor',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Arcana +24, History +26, Insight +17, Religion +26',
		equipment: 'implement, rod',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 171,
		initiative: 13,
		ac: 35,
		fortitude: 33,
		reflex: 34,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eece0e2c-848b-4ec9-bc0c-4096496cbefc',
				name: 'Rebuking Rod',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 3
				},
				description: '',
				details: '2d8+6 psychic and radiant damage, and the deva fallen star gains total concealment against the target (save ends).',
				damage: '2d8+6 psychic and radiant damage',
				category: 1
			},
			{
				id: 'e401aaf7-7230-45c9-94e1-5dc1965c3837',
				name: 'Fateful Transposition',
				action: {
					action: 5,
					trigger: 'when an enemy attacks the deva fallen star servitor',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 28,
					defence: 3
				},
				description: '',
				details: 'the target swaps positions with the deva fallen star servitor. The triggering enemy’s attack deals half damage to the fallen star, and the target takes damage equal to half the attack’s damage.',
				damage: 'the triggering enemy’s attack deals half damage to the fallen star',
				category: 5
			},
			{
				id: '3531ded9-0e34-40df-952b-f67d540a083f',
				name: 'Forgetting Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '3d6+6 psychic damage, and the target can use only basic attacks and at-will powers during its next turn.',
				damage: '3d6+6 psychic damage',
				category: 1
			},
			{
				id: '18f24481-f873-4dcd-b16d-eac744666adb',
				name: 'Soul Scourge',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied and again when it uses vile rebirth',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Radiant',
				condition: '',
				range: 'Area burst 2 within 15',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+6 radiant damage, and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '2d6+6 radiant damage',
				category: 5
			},
			{
				id: '69b938d0-9378-43cc-afd9-83f9c1720707',
				name: 'Fate Manipulation',
				action: {
					action: 7,
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
				details: 'The deva fallen star servitor adds 1d8 to or subtracts 1d8 from an attack roll, ability check, or saving throw made by itself or any creature within 10 squares of it.',
				damage: 'The deva fallen star servitor adds 1d8 to or subtracts 1d8 from an attack roll',
				category: 5
			},
			{
				id: 'e7c6b9a4-2cbd-4260-a9eb-0dca7f405bdf',
				name: 'Vile Rebirth',
				action: null,
				keywords: '',
				condition: 'when the deva fallen star servitor is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The deva fallen star servitor does not die and instead remains at 0 hit points until the start of its next turn, when it regains 25 hit points, loses resistance to radiant damage, and gains the undead keyword.',
				damage: 'loses resistance to radiant damage',
				category: 0
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

		info: 'Level 23 Artillery',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'a5959301-6d9b-4e86-b5e2-518872550fb8',
		name: 'Doomguard Merc',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +16',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'longsword',
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
		initiative: 19,
		ac: 36,
		fortitude: 38,
		reflex: 37,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '503c25c1-0ec6-4bab-a614-65e7c34d7bdb',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '14 damage (crit 1d6 + 14 damage).',
				damage: '14 damage (crit 1d6 + 14 damage)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '9d1c8cf6-fb24-4f73-8c5f-aef70a0d5ff9',
		name: 'Flameskull Vestige',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22; truesight 6',
		movement: 'fly 10 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +24',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		constitution: {
			score: 24,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 1,
		initiative: 19,
		ac: 37,
		fortitude: 34,
		reflex: 39,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5e668318-997b-492d-a5ee-7f2b92dedeb8',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '13 damage.',
				damage: '13 damage',
				category: 1
			},
			{
				id: 'b2a409ed-09c8-4959-8c6e-4f5fa84647af',
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
				range: 'Ranged 20',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '13 fire damage, and the target falls prone.',
				damage: '13 fire damage',
				category: 1
			},
			{
				id: '93db1643-f0e7-4848-a259-ac421174f83f',
				name: 'Illumination',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The flameskull vestige sheds bright light out to 5 squares, but it can reduce its brightness to dim light out to 2 squares as a free action.',
				damage: 'The flameskull vestige sheds bright light out to 5 squares',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
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

		info: 'Level 24 Minion',
		phenotype: 'Small natural animate (undead)'
	},
	{
		id: 'bbc53cb2-0935-4de0-a5e4-365a3dfa7b0b',
		name: 'Fleshglutton Bileguard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +24; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +26',
		equipment: 'glaive',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 224,
		initiative: 21,
		ac: 40,
		fortitude: 37,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7b37ba09-5a71-47c3-827e-66d1b31cf30e',
				name: 'Glaive',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 6d4+5 damage, and the target is marked until the end of the fleshglutton bileguard’s next turn.',
				damage: '6d4+5 damage',
				category: 1
			},
			{
				id: 'af584180-5d25-4a88-863b-7c07ad2881ca',
				name: 'Bite',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '2d8+5 plus 2d6 poison damage.',
				damage: '2d8+5 plus 2d6 poison damage',
				category: 1
			},
			{
				id: 'b1cbf76f-296b-4dd4-a8a0-b656cafbb51b',
				name: 'Strike and Lunge',
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
				details: 'The fleshglutton bileguard makes a glaive attack, shifts 1 square, and makes a bite attack.',
				damage: 'shifts 1 square',
				category: 1
			},
			{
				id: 'b3559727-8139-492f-8d63-3de1cc1de2d9',
				name: 'Bilious Blade',
				action: null,
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fleshglutton bileguard deals an extra 2d6 poison damage on opportunity attacks.',
				damage: 'the fleshglutton bileguard deals an extra 2d6 poison damage on opportunity attacks',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '4514c605-cb5d-43d4-a109-7768d6a46e90',
		name: 'Fleshglutton Corpse Eater',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +27',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 273,
		initiative: 19,
		ac: 36,
		fortitude: 37,
		reflex: 34,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'accdae6f-ef06-41dd-8eb3-eb2dde14c6f3',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '3d10+8 damage, and the target is grabbed.',
				damage: '3d10+8 damage',
				category: 1
			},
			{
				id: 'dc857411-49c1-4820-be71-fa427a17ff14',
				name: 'Frenzied Feast',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'Targets a creature grabbed by the fleshglutton corpse eater; the target takes 15 ongoing necrotic damage (save ends). Aftereffect: The target is weakened (save ends).',
				damage: 'the target takes 15 ongoing necrotic damage (save ends)',
				category: 3
			},
			{
				id: '7a46cc31-4a65-497e-8725-c95243a031b6',
				name: 'Devouring Lunge',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fleshglutton corpse eater makes a bite attack against a humanoid living target that has 0 hit points or fewer. On a hit, the fleshglutton corpse eater regains 68 hit points.',
				damage: 'the fleshglutton corpse eater regains 68 hit points',
				category: 5
			},
			{
				id: '63ad15aa-f96c-43a6-8b17-cb4151c2198c',
				name: 'Kill the Weak',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fleshglutton corpse eater deals an extra 2d10 necrotic damage against weakened targets.',
				damage: 'the fleshglutton corpse eater deals an extra 2d10 necrotic damage against weakened targets',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd447e1c5-cd5f-445b-ab9a-668df71fcdea',
		name: 'Fleshglutton Favored One',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 25,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +21; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +24, Insight +26, Religion +24',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		intelligence: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 232,
		initiative: 17,
		ac: 39,
		fortitude: 37,
		reflex: 37,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '57b7b7dc-11d5-435c-a95a-aacb561c473c',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '3d8+6 damage.',
				damage: '3d8+6 damage',
				category: 1
			},
			{
				id: '40b7a8df-2c62-4e23-bd06-769c8a2c74df',
				name: 'Evasive Lunge',
				action: {
					action: 1,
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
				details: 'The fleshglutton favored one makes a bite attack and teleports up to 10 squares.',
				damage: 'The fleshglutton favored one makes a bite attack and teleports up to 10 squares',
				category: 1
			},
			{
				id: '36a70a8b-caa5-499f-9807-64b4728fe8bb',
				name: 'Mind Teeth',
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
					bonus: 29,
					defence: 3
				},
				description: '',
				details: '2d10+9 psychic damage, and one ally of the fleshglutton favored one that is adjacent to the target makes an opportunity attack against the target.',
				damage: '2d10+9 psychic damage',
				category: 1
			},
			{
				id: '43de7353-91a2-4b84-95cd-6d46e90db26c',
				name: 'Ghoul King’s Gift',
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
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is weakened (save ends). In addition, allies within the burst gain a +4 bonus to bite attacks until the end of the fleshglutton favored one’s next turn.',
				damage: 'allies within the burst gain a +4 bonus to bite attacks until the end of the fleshglutton favored one’s next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 25 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '46d095a3-0c04-4b94-b329-50a07a3ba2ec',
		name: 'Fleshglutton Supplicant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +18; low-light vision',
		movement: '6',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1,
		initiative: 21,
		ac: 37,
		fortitude: 35,
		reflex: 36,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '84d54452-b5e6-4f3a-bb86-2a7e9213266d',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '12 damage, and the fleshglutton supplicant shifts 3 squares.',
				damage: '12 damage',
				category: 1
			},
			{
				id: '5ce2b9e3-92ed-4f7b-8ab9-3db510def9c7',
				name: 'Death Lunge',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The fleshglutton supplicant makes a bite attack.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'f90f9308-cb68-4f3c-99b8-1f5927585dd8',
		name: 'Forsaken Hierophant Elder',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead; human',
		level: 25,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +19',
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
		hp: 892,
		initiative: 13,
		ac: 39,
		fortitude: 39,
		reflex: 35,
		will: 41,
		regeneration: {
			value: 10,
			details: 'if a forsaken hierophant elder takes fire damage, regeneration doesn’t function until the end of its next turn'
		},
		auras: [
			{
				id: '56e1d158-a236-4514-84c3-88c66a26ec89',
				name: 'Decaying Hope',
				keywords: '',
				details: '(Fear, Necrotic) aura 5; each enemy within the aura takes a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '2c07db25-d7fb-416a-9dc6-106ccd4f5eb1',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d8+9 damage, and ongoing 10 necrotic damage.',
				damage: '2d8+9 damage',
				category: 1
			},
			{
				id: 'c040b8fd-2b7a-46ff-946f-abf1ea49102f',
				name: 'Forsaken Word',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+9 necrotic and psychic damage, and the target is pushed 3 squares.',
				damage: '2d8+9 necrotic and psychic damage',
				category: 1
			},
			{
				id: '56d79a0b-7dce-454d-b99f-4431680293cf',
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
					bonus: 29,
					defence: 3
				},
				description: '',
				details: 'targets one creature; 2d6+9 psychic damage, and the target is dazed (save ends).',
				damage: '2d6+9 psychic damage',
				category: 3
			},
			{
				id: '691c8d2e-facc-4f6d-97fb-fd6535e175d0',
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
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+9 necrotic damage, and the target is stunned (save ends). Undead in the burst regain 15 hit points.',
				damage: '2d6+9 necrotic damage',
				category: 1
			},
			{
				id: '59389645-794f-439a-bc45-458eb494be81',
				name: 'Mummy’s Curse',
				action: null,
				keywords: 'Disease',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 10',
				attack: {
					bonus: 27,
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

		info: 'Level 25 Solo Controller',
		phenotype: 'Medium natural humanoid (undead; human)'
	},
	{
		id: 'f82091b0-7f81-4dda-be37-2aee25e5cd5a',
		name: 'Ghoul Gatherer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 25,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '8, fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +22, Stealth +25',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
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
		hp: 233,
		initiative: 20,
		ac: 39,
		fortitude: 37,
		reflex: 36,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '56b32955-501d-45fc-87a8-eed8279be647',
				name: 'Ghoul King’s Kiss',
				keywords: '',
				details: '(Psychic) aura 3; each enemy that starts its turn within the aura takes 15 psychic damage and is blinded and dazed until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '9d3de4fa-a5ba-4b04-b505-32e48713d517',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d10+9 damage, and the target is grabbed. Until the grab ends, the target takes 10 necrotic damage at the start of its turn.',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: '310bbe28-a681-4daf-abed-29b9ffe6dd96',
				name: 'Far Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'The ghoul teleports 10 squares before or after the attack; 3d8+9 damage.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: '214ddba6-9032-4747-9d67-4cb5d2ca49a8',
				name: 'Ghoulish Bite',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Target must be grabbed, stunned, or unconscious; 3d8+9 damage, and the target is stunned (save ends).',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: 'f6bd2260-b39c-46fb-9246-f06286805215',
				name: 'Hunger’s Slave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 3
				},
				description: '',
				details: 'Target must be stunned; 2d8+7 psychic damage, and the target is dominated (save ends; -2 penalty to the saving throw).',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '918cac2e-2550-4597-972b-22180266ef44',
				name: 'Kingdom Bound',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: null,
				description: '',
				details: 'targets creatures dominated by the ghoul gatherer; the ghoul gatherer creates a temporary portal (a zone) that leads to Doresain’s Court of Teeth in the inner fane of his palace. The ghoul gatherer commands dominated creatures to go through the portal. The portal functions only for dominated creatures of level 20 or lower. Sustain Minor: The portal persists.',
				damage: 'The portal functions only for dominated creatures of level 20 or lower',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '72148cb8-f54c-4431-a7a9-f144603cfff3',
		name: 'Ghoul King’s Siegewyrm',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'dragon, undead',
		level: 26,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 490,
		initiative: 20,
		ac: 40,
		fortitude: 38,
		reflex: 36,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: 'e1730c57-3819-4c10-9f5f-0e4626ffb652',
				name: 'Jagged Bones',
				keywords: '',
				details: 'aura 3; each creature that enters or starts its turn within the aura takes 15 damage. All creatures treat the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: '6a6e94f4-3b21-412f-a41b-01f6634e30f9',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d6+11 damage, and the target slides 2 squares.',
				damage: '3d6+11 damage',
				category: 1
			},
			{
				id: 'd0f19cf3-a1bd-41e4-8185-21129890231d',
				name: 'Tail Sweep',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '2d8+11 damage, and the target is pushed 2 squares and immobilized (save ends).',
				damage: '2d8+11 damage',
				category: 1
			},
			{
				id: '4ec5a475-d443-428f-80b5-c150ef479f6c',
				name: 'Marrow Sluice',
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
					bonus: 30,
					defence: 2
				},
				description: '',
				details: 'The siegewyrm targets up to three creatures; the first target must be within 10 squares of the siegewyrm, the second target within 10 squares of the first, and the third target within 10 squares of the second; 2d6+11 damage, and the target is pushed 4 squares and knocked prone. Miss: Half damage, and the target is not pushed.',
				damage: '2d6+11 damage',
				category: 1
			},
			{
				id: 'b8c9106f-2879-4e3a-a132-35f97c6711bf',
				name: 'Osseous Cage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 3 within 12',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '4d8+11 damage, and the target is restrained (save ends). Miss: Half damage, and the target is immobilized (save ends). Aftereffect, on Hit Only: The target is immobilized (save ends).',
				damage: '4d8+11 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
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

		info: 'Level 26 Elite Controller',
		phenotype: 'Huge natural animate (dragon, undead)'
	},
	{
		id: '82a241e2-bb2f-459c-8284-5a0a12268c62',
		name: 'Ghoul Ripper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 25,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +24',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 286,
		initiative: 19,
		ac: 37,
		fortitude: 37,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '426c53e5-cc80-4eea-84d4-23326b9e8b5e',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 damage, and the target takes ongoing 10 necrotic damage and is immobilized (save ends both).',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: 'ffa844a9-2392-4a40-b6e1-945621843b94',
				name: 'Dead Blood',
				action: null,
				keywords: '',
				condition: 'when first bloodied and again when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: null,
				description: '',
				details: 'all enemies in the burst take 15 necrotic damage.',
				damage: 'all enemies in the burst take 15 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Brute',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'c76d9c77-61a9-4594-ba90-06ff5b78dbc8',
		name: 'Ghoul Stalker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 25,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '8, fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +33',
		equipment: '',
		category: 'Ghoul',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 231,
		initiative: 23,
		ac: 39,
		fortitude: 36,
		reflex: 37,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a66cecf6-bf66-4822-b98a-36605fa466dd',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '3d8+9 damage, and the target is immobilized (save ends). If the target is a living creature that is already immobilized, stunned, or unconscious, the attack deals an extra 3d6 damage.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: '86bed733-7e92-4294-98da-37d484544943',
				name: 'Stalker’s Bite',
				action: {
					action: 7,
					trigger: 'when the ghoul stalker hits an immobilized; stunned; or unconscious target with a claw attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '1d8+9 damage.',
				damage: '1d8+9 damage',
				category: 5
			},
			{
				id: 'a463e5cf-1809-4cf7-9689-0fff6f098aaf',
				name: 'Flyby Attack',
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
				details: 'The ghoul stalker flies up to 8 squares and makes a claw attack at any point during the move without provoking an opportunity attack from the target.',
				damage: 'The ghoul stalker flies up to 8 squares and makes a claw attack at any point during the move without provoking an opportunity attack from the target',
				category: 1
			},
			{
				id: 'bec53b5a-ad28-4f7c-85c2-6b28de1413d9',
				name: 'Dead Blood',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'all enemies in the burst take 15 necrotic damage.',
				damage: 'all enemies in the burst take 15 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '0399615e-b7c1-4ec7-ac61-8af460e1a7ea',
		name: 'Ghoul Warrior',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 24,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: 'Ghoul',
		strength: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 222,
		initiative: 21,
		ac: 40,
		fortitude: 36,
		reflex: 35,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4f787063-b04e-4ee4-99f8-beb3bf277248',
				name: 'Bone Sword',
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
				details: '2d8+6 necrotic damage (crit 5d6 + 22), and the target takes ongoing 10 necrotic damage (save ends).',
				damage: '2d8+6 necrotic damage (crit 5d6 + 22)',
				category: 1
			},
			{
				id: 'ccb9c679-040a-473a-8267-5c4f819d6672',
				name: 'Ghoulish Bite',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Target must be immobilized, stunned, or unconscious; 3d8+9 damage, and the target is stunned (save ends).',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: '308fd54c-f960-43f3-b858-eff5c797f336',
				name: 'Bone Sword Flurry',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'all enemies in burst; 3d8+9 necrotic damage, and the target is immobilized (save ends; -2 penalty to the saving throw).',
				damage: '3d8+9 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 24 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '7cfbb438-db65-4f43-a52a-1c36dca7a67c',
		name: 'Ghoul Whisperer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +17',
		equipment: '',
		category: 'Ghoul',
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
			score: 20,
			modifier: 5,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 152,
		initiative: 12,
		ac: 29,
		fortitude: 29,
		reflex: 27,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: 'ac2ba196-b825-4d44-87ef-858302703df5',
				name: 'Promise of the White Kingdom',
				keywords: '',
				details: '(Psychic) aura 3; deafened creatures are immune; each enemy that starts its turn within the aura takes 5 psychic damage and is dazed until the start of its next turn'
			}
		],
		powers: [
			{
				id: '68795135-c977-4a12-a62b-e1547eb0d958',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage, and the target is grabbed. Until the grab ends, the target takes 5 necrotic damage at the start of its turn.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '182ee3fb-6228-4a02-9d73-f02a7319f55d',
				name: 'Ghoulish Bite',
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
					defence: 0
				},
				description: '',
				details: 'Target must be grabbed, dazed, or unconscious; 3d6+6 damage, and the target is dazed (save ends).',
				damage: '3d6+6 damage',
				category: 1
			},
			{
				id: 'c7c6104c-b812-4cc2-97e2-b8d9e7b8f608',
				name: 'Hunger’s Promise',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '1d10+6 damage, and the target takes ongoing 10 psychic damage and slides up to its speed each round (save ends both).',
				damage: '1d10+6 damage',
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

		info: 'Level 15 Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '68bae557-84bc-4636-9821-ddfdfb7d11be',
		name: 'Gibbering Orb Acolyte',
		details: '',
		size: 4,
		origin: 0,
		type: 1,
		keywords: '',
		level: 23,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +18; all-around vision, darkvision',
		movement: 'fly 8 (hover)',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
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
			score: 31,
			modifier: 10,
			cost: -1
		},
		hp: 856,
		initiative: 20,
		ac: 37,
		fortitude: 34,
		reflex: 35,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: 'c651cd98-6b62-46ce-a034-993c9a8c579a',
				name: 'Merciless Eyes',
				keywords: '',
				details: 'aura 5; at the start of each enemy’s turn, if that creature is within the aura and in the gibbering orb’s line of sight, the orb uses one random eye ray power against that creature.'
			}
		],
		powers: [
			{
				id: 'b20975ac-c3ff-4fcb-9ad7-21ee5ee3de15',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '4d6+8 damage, and the mouth detaches from the gibbering orb and makes a new bite attack against the target each round at the start of the gibbering orb’s turn. When the mouth misses, it drops off and turns into useless, dead gray flesh.',
				damage: '4d6+8 damage',
				category: 1
			},
			{
				id: '5031e7c6-f72c-469a-ace9-51b6f5b8fd97',
				name: 'Gibbering',
				action: {
					action: 7,
					trigger: 'once on the gibbering orb’s turn before it takes other actions',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: 'deafened creatures are immune; the target is dazed until the end of the gibbering orb’s next turn.',
				damage: '',
				category: 5
			},
			{
				id: '5f7435fd-50f2-477a-848e-61999757f39c',
				name: 'Eye Rays',
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
				details: 'The gibbering orb can use two different eye ray powers (chosen from the list below or rolled randomly). Each power must target a different creature. Using eye rays does not provoke opportunity attacks.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Solo Controller',
		phenotype: 'Huge aberrant beast'
	},
	{
		id: 'cb34bd9e-cdad-4dd0-930e-39a097daa5c8',
		name: 'Marut Castigator Icon',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +23; truesight 10',
		movement: '8, fly 4 (hover), teleport 4',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: 'Acrobatics +24',
		equipment: 'double sword',
		category: 'Marut',
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
			score: 25,
			modifier: 7,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 170,
		initiative: 21,
		ac: 38,
		fortitude: 36,
		reflex: 37,
		will: 36,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: 'c82e569f-de6e-427f-a65a-44f5c7ecc358',
				name: 'Double Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d8+7 damage. The marut castigator can choose to have the attack deal lightning damage.',
				damage: '3d8+7 damage',
				category: 1
			},
			{
				id: '87f5c609-5239-46be-a344-b49de434de3b',
				name: 'Double Attack',
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
				details: 'The marut castigator makes two double sword attacks.',
				damage: '',
				category: 1
			},
			{
				id: '76ac4eda-271f-47a3-b7b2-ac61a6cadb2f',
				name: 'Punisher’s Lash',
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
					bonus: 27,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d6+9 lightning damage, and the target is slowed and cannot teleport until the end of the marut castigator’s next turn.',
				damage: '2d6+9 lightning damage',
				category: 1
			},
			{
				id: 'e330e10b-f7ab-4299-b826-14b6a380eb90',
				name: 'Thunderbolt Strike',
				action: {
					action: 1,
					trigger: 'recharges when both attacks of double attack hit',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation, Thunder',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marut castigator teleports 4 squares and makes a double sword attack that deals 2d6 extra thunder damage.',
				damage: 'the marut castigator teleports 4 squares and makes a double sword attack that deals 2d6 extra thunder damage',
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
		immune: 'sleep',
		tactics: '',

		info: 'Level 24 Skirmisher',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'bbe3b26b-782e-40ff-8972-311edc0307ad',
		name: 'Marut Prosecutor Noble',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +23; truesight 10',
		movement: '8, fly 4 (hover), teleport 4',
		alignment: 'Unaligned',
		languages: 'Supernal',
		skills: 'Insight +23, Intimidate +24',
		equipment: '',
		category: 'Marut',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 171,
		initiative: 15,
		ac: 38,
		fortitude: 35,
		reflex: 36,
		will: 36,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '75df6b90-adc7-4b9d-b527-5303b0af74b2',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage plus 1d10 thunder damage, and the target is slowed (save ends).',
				damage: '1d10+4 damage plus 1d10 thunder damage',
				category: 1
			},
			{
				id: '13d492ef-6ec7-48b0-95a8-45036eb92c39',
				name: 'Dictum',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'the target is immobilized (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '3633901b-4123-4b33-a51f-b8d5ac3bff45',
				name: 'Biting Testimony',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'targets one enemy; 3d6+9 psychic damage, and the target takes a -2 penalty to attack rolls, skill checks, and ability checks (save ends).',
				damage: '3d6+9 psychic damage',
				category: 1
			},
			{
				id: '140f3934-07ee-4de9-8ba8-a3daaab8d9ce',
				name: 'Sigil of Indictment',
				action: {
					action: 3,
					trigger: 'usable only when no creature is affected by this power',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'targets one enemy; until the end of the marut prosecutor’s next turn, the target grants combat advantage to the prosecutor, and the prosecutor and its allies deal 5 extra psychic damage against the creature. Sustain Minor: The effect persists.',
				damage: 'and the prosecutor and its allies deal 5 extra psychic damage against the creature',
				category: 5
			},
			{
				id: '14385b5b-7dc0-4966-9f73-5d744acdbc27',
				name: 'Justice Restrained',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A slowed, immobilized, or restrained creature takes a -2 penalty to attack rolls against a marut prosecutor noble.',
				damage: 'or restrained creature takes a -2 penalty to attack rolls against a marut prosecutor noble',
				category: 0
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
		immune: 'sleep',
		tactics: '',

		info: 'Level 24 Controller (L)',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'a63bcb9d-2227-4809-a527-858720edb91e',
		name: 'Master of the Bridge',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'phane',
		level: 27,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +25; darkvision',
		movement: '10, fly 10',
		alignment: 'Unaligned',
		languages: 'Supernal',
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		intelligence: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 494,
		initiative: 23,
		ac: 41,
		fortitude: 38,
		reflex: 41,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fa1942d9-2223-4033-9779-c2427bf78366',
				name: 'Temporal Touch',
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
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8+10 damage, and the target is slowed until the end of the phane’s next turn. The phane shifts 4 squares before or after making this attack.',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '9d24f7b4-7fb6-42a5-af80-003ca4fb25df',
				name: 'Wizening Ray',
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
					defence: 1
				},
				description: '',
				details: '2d6+9 damage, and the target is dazed and weakened (save ends both). Aftereffect: The target is weakened (save ends). The target appears elderly until the effect of the wizening ray ends.',
				damage: '2d6+9 damage',
				category: 1
			},
			{
				id: '51a43bb9-b0ff-4575-96f5-06a2cb24b637',
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
				details: 'The phane makes either two temporal touch attacks or two wizening ray attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'feb2fcc4-57ce-4ceb-a8f8-cb5bf738f9c1',
				name: 'Wizening Tempest',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 29,
					defence: 1
				},
				description: '',
				details: 'phanes are immune; 2d6+10 damage, and the target is stunned (save ends). Aftereffect: The target is dazed and weakened (save ends both). The target appears elderly until the effect of the wizening tempest ends.',
				damage: '2d6+10 damage',
				category: 5
			},
			{
				id: '25a7434a-4f26-42e6-aca3-d40d3e0a0ab3',
				name: 'Temporal Fugue',
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
				details: 'By moving backward and forward in time, a phane can remove one effect afflicting it.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Controller',
		phenotype: 'Large immortal beast (phane)'
	},
	{
		id: '10d76f13-1b00-4425-a250-39b837df3349',
		name: 'Sewer Revenant',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'aquatic, blind, ooze',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +17; blindsight 15, tremorsense 15',
		movement: '4, swim 8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +21',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 1,
		initiative: 16,
		ac: 36,
		fortitude: 36,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [
			{
				id: '7db0eb8f-96c3-4664-8806-a3d2532f9c9e',
				name: 'Rotting Stench',
				keywords: '',
				details: 'aura 1; creatures that start their turn within the aura take 10 acid damage.'
			}
		],
		powers: [
			{
				id: '2c81ef3a-de62-4487-b9f6-ea5722f29b2f',
				name: 'Slam',
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
					bonus: 25,
					defence: 1
				},
				description: '',
				details: '14 acid damage (crit 18 acid damage).',
				damage: '14 acid damage (crit 18 acid damage)',
				category: 1
			},
			{
				id: 'c94f82af-df2a-4970-9b17-1603aed5d9a1',
				name: 'Sewer Swimmer',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sewer revenant is invisible if any part of it is submerged in water. It does not provoke opportunity attacks while submerged.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'gaze',
		tactics: '',

		info: 'Level 24 Minion',
		phenotype: 'Medium natural beast (aquatic, blind, ooze)'
	},
	{
		id: 'acdb476f-5d2e-44d8-a878-ad8f224f40c3',
		name: 'Slaughter Wight Ripper',
		details: 'A wight is the corpse of a humanoid creature, usually a human. It is gaunt with pallid, leathery skin stretched taut over its bones. Black claws tip its fingers and toes. The creature’s nose is sunken, and its lips are pulled back in a death grimace. Within its hollow eye sockets, motes of vile light glow in place of eyes. This wiry horror has elongated claws,',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '7',
		alignment: 'Chaotic evil',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 212,
		initiative: 15,
		ac: 33,
		fortitude: 33,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c1dca8df-012b-411b-94ca-36422ce2b1a2',
				name: 'Claw',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '3d6+9 necrotic damage, the target loses 1 healing surge and is weakened (save ends), and the slaughter wight regains 15 hit points.',
				damage: '3d6+9 necrotic damage',
				category: 1
			},
			{
				id: '16baf7b1-d791-4e05-af00-94c35c08b17d',
				name: 'Death Wail',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+5 necrotic damage. Undead allies in the burst can make a basic attack as a free action.',
				damage: '2d6+5 necrotic damage',
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
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Brute',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '57be5cf1-770d-46f5-be67-3e70bd05b734',
		name: 'Sorrowsworn Dread Wraith',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 27,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: 'fly 10 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +27',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 150,
		initiative: 26,
		ac: 41,
		fortitude: 36,
		reflex: 39,
		will: 39,
		regeneration: {
			value: 20,
			details: 'if the sorrowsworn dread wraith takes radiant damage, regeneration is negated until the end of the wraith’s next turn'
		},
		auras: [
			{
				id: '35c56b14-0c7a-4c08-ae4f-af7927b50731',
				name: 'Shroud of Night',
				keywords: '',
				details: 'aura 5; within the aura, bright light is reduced to dim light, and dim light becomes darkness.'
			}
		],
		powers: [
			{
				id: '69eef7c5-f7ca-4e0c-ba7c-e244c84a696a',
				name: 'Dread Blade',
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
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d10+10 necrotic damage, and the target is weakened (save ends).',
				damage: '2d10+10 necrotic damage',
				category: 1
			},
			{
				id: '1062c94e-ceea-4528-bc35-b031127da3ae',
				name: 'Death Shriek',
				action: null,
				keywords: 'Psychic',
				condition: 'when first bloodied and again when reduced to 0 hit points',
				range: 'Close blast 3',
				attack: {
					bonus: 29,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d6+10 psychic damage, and the target is dazed (save ends). Miss: Half damage, and the target is not dazed.',
				damage: '4d6+10 psychic damage',
				category: 0
			},
			{
				id: '0a2d8160-9cbf-45a4-baef-ec95650848f2',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sorrowsworn dread wraith deals an extra 3d6 necrotic damage against any target it has combat advantage against.',
				damage: 'the sorrowsworn dread wraith deals an extra 3d6 necrotic damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: 'f4d09941-c1ed-4dd3-9ab6-b9a4d613a663',
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
				details: 'The sorrowsworn dread wraith shifts 6 squares.',
				damage: 'The sorrowsworn dread wraith shifts 6 squares',
				category: 2
			},
			{
				id: '2889494c-f474-4e3d-b423-1c95888f1042',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by the sorrowsworn dread wraith rises as a free-willed dread wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 27 Lurker',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '897df1f8-d67a-44c8-b0dc-2dac204eefd6',
		name: 'Soulspike Devourer Champion',
		details: '',
		size: 4,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 24,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 440,
		initiative: 13,
		ac: 40,
		fortitude: 40,
		reflex: 36,
		will: 39,
		regeneration: null,
		auras: [
			{
				id: 'aac49252-1c69-4e98-8a4c-40ec404af6f0',
				name: 'Soulspike Ward',
				keywords: '',
				details: 'aura 10; the soulspike devourer champion and all allies within the aura gain a bonus to all defenses equal to onehalf the number of soulspiked spirits impaled on the creature.'
			}
		],
		powers: [
			{
				id: 'e1fbf6a4-9afd-4fde-b61d-fcba58bb6440',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8+11 damage. If the attack reduces a humanoid living target to 0 hit points or fewer, the target disappears and becomes a soulspiked spirit impaled on the devourer.',
				damage: '2d8+11 damage',
				category: 1
			},
			{
				id: 'c81738d3-090b-49e5-b976-66f8d4c1b0b2',
				name: 'Double Attack',
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
				details: 'The soulspike devourer makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a3a70e0d-ab34-416d-bcaf-1d6c7cb04dc0',
				name: 'Soul Shatter',
				action: {
					action: 1,
					trigger: 'recharges when the soulspike devourer',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: '5d8+10 necrotic damage, and the target is stunned until the end of the soulspike devourer’s next turn. Aftereffect: The target is weakened (save ends).',
				damage: '5d8+10 necrotic damage',
				category: 5
			},
			{
				id: '39e4d90c-f77f-4aee-83f2-cd55fc6ad308',
				name: 'Devour Spirit',
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
				details: 'The soulspike devourer instantly kills its oldest soulspiked spirit and regains 75 hit points. A dead body appears in a space adjacent to the devourer.',
				damage: 'The soulspike devourer instantly kills its oldest soulspiked spirit and regains 75 hit points',
				category: 1
			},
			{
				id: 'fa1a2776-2d4c-49e3-974b-bf758c43d177',
				name: 'Soulspiked Spirit',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The soulspike devourer begins the encounter with one soulspiked spirit and can impale up to four soulspiked spirits. A soulspiked spirit can take no actions and escapes when the devourer is destroyed. When a creature’s spirit escapes, its body appears in an unoccupied space adjacent to the devourer, in the same state it was in when it disappeared.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '10 radiant (when the soulspike devourer champion takes radiant damage, its newest soulspiked spirit can make a saving throw to escape)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 24 Elite Soldier',
		phenotype: 'Huge shadow humanoid (undead)'
	},
	{
		id: 'ac4f9728-8529-499b-add8-128912a7e3fd',
		name: 'Abyssal Madness Ghoul',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +19',
		movement: '8, climb 4',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +25',
		equipment: '',
		category: 'Abyssal Ghoul',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 22,
		ac: 44,
		fortitude: 41,
		reflex: 42,
		will: 39,
		regeneration: null,
		auras: [
			{
				id: 'd9d35a66-2793-4696-bbe4-3d326a414211',
				name: 'Unending Hunger',
				keywords: '',
				details: 'aura 1; each enemy that starts its turn within the aura takes 10 damage.'
			}
		],
		powers: [
			{
				id: '38693843-f120-48f3-909c-49651c40b511',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '16 necrotic damage, and the target is immobilized (save ends).',
				damage: '16 necrotic damage',
				category: 1
			},
			{
				id: '1653785f-54df-4941-975d-cefe980e2c3d',
				name: 'Maddening Shriek',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the madness ghoul drops to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '12 necrotic damage, and the target is dazed (save ends).',
				damage: '12 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 30 Minion',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '125e79ce-6b7e-4888-abd3-75ee7a22e152',
		name: 'Achree',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'aquatic, demon',
		level: 27,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +26; blindsight 10',
		movement: '4, swim 10 see also relentless attack',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal)',
		skills: '',
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
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
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
		hp: 250,
		initiative: 24,
		ac: 41,
		fortitude: 39,
		reflex: 40,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dda4ab90-3f6c-45d7-9c4b-61f344d2c986',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+9 damage, and the target is grabbed. The achree cannot make bite attacks while it has a creature grabbed, but it can use its vicious rend.',
				damage: '4d8+9 damage',
				category: 1
			},
			{
				id: '35e58190-33f7-4bf5-8269-93eeaba9bf43',
				name: 'Vicious Rend',
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
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'If an achree begins its turn with a target grabbed in its jaws, it makes an attack against the grabbed creature; 4d10+10 damage, and the target slides 5 squares, is knocked prone, and is no longer grabbed. Miss: Half damage, no slide, still grabbed.',
				damage: '4d10+10 damage',
				category: 1
			},
			{
				id: 'f58a7a57-e916-4ef3-bd65-caa98a38ecf9',
				name: 'Relentless Attack',
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
				details: 'The achree moves its speed and can enter enemies’ spaces. This movement provokes opportunity attacks, and the achree must end its move in an unoccupied space. When it enters an enemy’s space, the achree makes a bite attack. Once after a successful bite attack, the achree can end its movement within reach of the same target and make a vicious rend attack against the target.',
				damage: '',
				category: 1
			},
			{
				id: 'b4757434-2186-4bd6-8d64-df19dc71f690',
				name: 'Jaws of Death',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'the achree makes a bite attack against all enemies in the burst.',
				damage: '',
				category: 0
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

		info: 'Level 27 Skirmisher',
		phenotype: 'Large elemental beast (aquatic, demon)'
	},
	{
		id: 'c279dbd4-cb2b-4681-b47a-ab7a148b7e8c',
		name: 'Achree Spawn',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'aquatic, demon',
		level: 26,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +20; blindsight 10',
		movement: '4, swim 10',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal)',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
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
		hp: 1,
		initiative: 22,
		ac: 38,
		fortitude: 36,
		reflex: 38,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd5eee833-789a-4c8e-bc1e-788f44ee1a1f',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 16 damage. Miss: 8 damage.',
				damage: '16 damage',
				category: 1
			},
			{
				id: '484a70cf-2099-48b6-a0c3-7fca3847461f',
				name: 'Jaws of Death',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'the achree spawn makes a bite attack against all enemies in the burst.',
				damage: '',
				category: 0
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

		info: 'Level 26 Minion',
		phenotype: 'Medium elemental beast (aquatic, demon)'
	},
	{
		id: '23068c59-372b-438e-8793-f172c5f78816',
		name: 'Balor Champion',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; truesight 6',
		movement: '8, fly 12 (clumsy)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +22, Insight +26, Intimidate +22',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 1248,
		initiative: 21,
		ac: 39,
		fortitude: 41,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '9c5d3424-e39f-4237-8739-664a2e54330f',
				name: 'Flaming Body',
				keywords: '',
				details: '(Fire) aura 2 (aura 3 while the balor is bloodied); enemies that start their turns in the aura takes 20 fire damage (30 fire damage while the balor is bloodied).'
			}
		],
		powers: [
			{
				id: '95bd08ac-b332-460c-a124-f496bdae53c5',
				name: 'Lightning Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d10+10 lightning damage, or 3d10 + 40 lightning damage on a critical hit.',
				damage: '3d10+10 lightning damage',
				category: 1
			},
			{
				id: 'a3f3cc87-4ce3-4700-8a45-55956388f7db',
				name: 'Flame Whip',
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
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: 'Reach 5; 3d8+5 fire damage, and ongoing 10 fire damage (save ends). Also, the target is pulled into an unoccupied space adjacent to the balor.',
				damage: '3d8+5 fire damage',
				category: 1
			},
			{
				id: '494b78c2-b8e3-4616-91c4-84b8adc23ee1',
				name: 'Balor Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Lightning, Weapon',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '5d10+15 fire and lightning damage, and ongoing 10 fire damage (save ends).',
				damage: '5d10+15 fire and lightning damage',
				category: 1
			},
			{
				id: 'a5b669cf-6990-49db-887c-77d0e2910d5a',
				name: 'Fireburst Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: '2d10+10 fire damage, and the target is dazed (save ends). The balor teleports 5 squares.',
				damage: '2d10+10 fire damage',
				category: 2
			},
			{
				id: '20844adb-1e58-401b-a49c-6aced8d40594',
				name: 'Death Burst',
				action: null,
				keywords: 'Fire',
				condition: 'reduced to 0 hit points',
				range: 'The balor explodes in a burst of flame: close burst 10',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '10d10 fire damage. Miss: Half damage. The balor and its weapons are completely destroyed.',
				damage: '10d10 fire damage',
				category: 0
			},
			{
				id: '92da5d05-880e-4552-8738-efa247427054',
				name: 'Demonic Accuracy',
				action: {
					action: 7,
					trigger: 'when the balor misses with an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The balor rerolls the attack and gains a +5 bonus to the roll.',
				damage: 'The balor rerolls the attack and gains a +5 bonus to the roll',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -40
			},
			{
				type: 1,
				value: -20
			},
			{
				type: 2,
				value: -20
			},
			{
				type: 10,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 27 Solo Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: '7bb5c23d-f4b2-44dd-8cc9-21de568c6a7c',
		name: 'Beholder Eye of Death',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 28,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +18; all-around vision, darkvision',
		movement: 'fly 4 (hover)',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal, Deep Speech)',
		skills: '',
		equipment: '',
		category: 'Beholder',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 632,
		initiative: 21,
		ac: 40,
		fortitude: 38,
		reflex: 38,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '84891231-4f92-472f-abd0-8e355ddd86de',
				name: 'Eyes of the Beholder',
				keywords: '',
				details: 'aura 5; the beholder eye of death uses one random eye ray as a free action against any enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: '36807951-5b3d-4480-83e5-61e930f68276',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '4d8+10 damage.',
				damage: '4d8+10 damage',
				category: 1
			},
			{
				id: '68a01b07-f494-471e-b555-c48c25db899a',
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
					bonus: 29,
					defence: 3
				},
				description: '',
				details: 'the target is slowed and loses necrotic resistance until the end of the beholder eye of death’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: 'b6ca54cf-00ef-4328-8166-7cccf5354f72',
				name: 'Eye Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Varies',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The beholder eye of death uses up to two different eye ray powers (chosen from the list below). Each ray must target a different creature, and using eye ray does not provoke opportunity attacks.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 25
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 28 Elite Brute',
		phenotype: 'Large aberrant beast (undead)'
	},
	{
		id: 'ce3fde06-7d81-4671-9b4b-d7984ad45f94',
		name: 'Beholder Eye of Despair',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 27,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; all-around vision, darkvision',
		movement: 'fly 8 (hover)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Beholder',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 388,
		initiative: 21,
		ac: 39,
		fortitude: 39,
		reflex: 39,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ec5f14a0-59f0-47f8-86b8-4a86725f2482',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '3d6+7 damage.',
				damage: '3d6+7 damage',
				category: 1
			},
			{
				id: '4f228d61-3d36-481a-8d8f-8833fc340f9b',
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
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'and the target cannot use encounter attack powers or daily attack powers until the end of the beholder eye of despair’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '22d031db-bfcb-45d4-b5a2-d41f838f895c',
				name: 'Eyes of the Beholder',
				action: {
					action: 7,
					trigger: 'when an enemy starts its turn within 5 squares of the beholder eye of despair',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The eye of despair uses eye ray against the triggering enemy.',
				damage: '',
				category: 5
			},
			{
				id: 'ff11daab-cc8e-40cb-b0d2-af2dd3fd0522',
				name: 'Eye Rays',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Varies',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The beholder eye of despair uses one eye ray power chosen from the list below. Using eye rays does not provoke opportunity attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'f3e27403-45a8-46e0-a188-be088605ab99',
				name: 'Ripple of Despair',
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
				details: 'Each enemy within 5 squares of the beholder eye of despair is targeted by a random eye ray power as a free action and takes a –2 penalty to all defenses (save ends). The eye of despair then teleports 6 squares as a free action.',
				damage: 'Each enemy within 5 squares of the beholder eye of despair is targeted by a random eye ray power as a free action and takes a –2 penalty to all defenses (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Artillery',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '208b29f5-cde0-46a1-b691-16ce025809eb',
		name: 'Blackstar Battlepawn',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '7',
		alignment: 'Evil',
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 21,
		ac: 42,
		fortitude: 42,
		reflex: 41,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e1874899-a560-417c-863a-0001dfe0710c',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '15 damage (crit 20 damage).',
				damage: '15 damage (crit 20 damage)',
				category: 1
			},
			{
				id: '7964738e-5449-4c02-88e5-c708eec3b246',
				name: 'Blackstar Ricochet',
				action: {
					action: 4,
					trigger: 'when a blackstar battlepawn within 5 squares is reduced to 0 hit points',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 1
				},
				description: '',
				details: 'The blackstar battlepawn shifts 3 squares and collides with an enemy; 10 damage.',
				damage: '10 damage',
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

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental animate'
	},
	{
		id: 'ed999e68-9f3a-4ba7-8913-a5bedd7d277b',
		name: 'Blackstar Decimator',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 30,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +27; darkvision',
		movement: '5, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 210,
		initiative: 24,
		ac: 42,
		fortitude: 42,
		reflex: 44,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '395bf5fb-25d7-4311-b1d7-3115b88b46b0',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '2d8+10 damage, and ongoing 10 damage (save ends).',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '4cdd1c79-e43f-488e-a411-359da7c33871',
				name: 'Meteor Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 35,
					defence: 2
				},
				description: '',
				details: '3d8+10 damage, and the target takes a –2 penalty to saving throws and ongoing 10 damage (save ends both).',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: '01ef2ba7-c7b9-40c2-9e52-eba6e2360dfc',
				name: 'Blackstar Fall',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '4d10 + 9 damage, and the target is pushed 2 squares and knocked prone. Miss: The target is pushed 1 square. If the target cannot be pushed, the blackstar decimator ends its move in an unoccupied square adjacent to the target. Secondary Attack: When it lands, the blackstar decimator attacks: close burst 3',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: 'The blackstar decimator can fly 8 squares and enter an enemy’s space; targets enemies; +33 vs. Reflex; 2d8 + 10 damage, and the target is pushed 1 square and knocked prone. The burst area becomes difficult terrain.',
				damage: '2d8 + 10 damage',
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

		info: 'Level 30 Artillery',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '20bc35f1-1e6c-4334-92fe-63df177f68a8',
		name: 'Blackstar Knight-Commander',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 27,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'greatsword',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 246,
		initiative: 22,
		ac: 43,
		fortitude: 39,
		reflex: 38,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e59c20a3-d5cd-4d31-8c1e-0692bd9e90fc',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '3d10+9 damage, and the target is marked until the end of the blackstar knight-commander’s next turn.',
				damage: '3d10+9 damage',
				category: 1
			},
			{
				id: '419475e3-0f8a-4e88-9bfe-e20b6e0779f0',
				name: 'Deathsword',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; 4d10+9 damage, and if the target is marked by the blackstar knight-commander it takes ongoing 10 damage (save ends).',
				damage: '4d10+9 damage',
				category: 1
			},
			{
				id: '62a8920b-2233-450d-ad81-46f015d04028',
				name: 'Soldier’s Duty',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'close burst 2',
				attack: {
					bonus: 32,
					defence: 2
				},
				description: '',
				details: 'The blackstar knight-commander explodes; targets enemies; 2d10+9 damage; marked targets take an additional 2d10 + 9 damage.',
				damage: '2d10+9 damage',
				category: 0
			},
			{
				id: '136278ac-2219-4203-ba8d-18d211f0ada4',
				name: 'No Escape',
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
				details: 'The blackstar knight-commander can teleport 10 squares as long as it ends in a square adjacent to an enemy marked by the blackstar knight-commander.',
				damage: 'The blackstar knight-commander can teleport 10 squares as long as it ends in a square adjacent to an enemy marked by the blackstar knight-commander',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -15
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Soldier',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '1653f1f7-f88c-4485-8ba5-0f4d00c46485',
		name: 'Bonecrusher Skeleton Hulk',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 25,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'greatclub',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 232,
		initiative: 22,
		ac: 41,
		fortitude: 38,
		reflex: 37,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44d57c11-eed8-497e-8566-e771068afb82',
				name: 'Crushing Blow',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d10+9 damage, and the target is knocked prone.',
				damage: '4d10+9 damage',
				category: 1
			},
			{
				id: 'd0bbdcf3-0d69-474f-9b71-346d92959e96',
				name: 'Swift Retribution',
				action: {
					action: 1,
					trigger: 'whenever an enemy moves into or out of a square within reach of the bonecrusher skeleton',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'opportunity',
				range: '',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+9 damage, and the target is dazed (save ends).',
				damage: '2d10+9 damage',
				category: 5
			},
			{
				id: '0763a6bb-7ea4-42bd-807e-3b8b008a22eb',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A bonecrusher skeleton can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Soldier',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: '128e075c-e926-45ff-be38-f56f1aa03ae7',
		name: 'Canoloth Tracker',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +21; blindsight 10',
		movement: '7',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 24,
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 22,
		ac: 42,
		fortitude: 41,
		reflex: 39,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f149a6d3-69eb-4dbd-933f-9eae26742cdd',
				name: 'Tongue Lash',
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
				details: 'Reach 4; 11 damage, and the target is dazed (save ends). If the target is already dazed, it takes an extra 5 damage instead.',
				damage: '11 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -25
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: '81b01028-ec95-4907-a8f6-2d9bb972653b',
		name: 'Corruption Shard',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: '',
		level: 32,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6, fly 6 (hover)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 219,
		initiative: 21,
		ac: 44,
		fortitude: 43,
		reflex: 43,
		will: 45,
		regeneration: null,
		auras: [
			{
				id: '83305566-6b31-48d8-8fd6-29f21a1a1f44',
				name: 'Corruption Corona',
				keywords: '',
				details: 'aura 2; each enemy that ends its turn within the aura takes 20 damage and is slowed.'
			}
		],
		powers: [
			{
				id: '7781569d-60d2-443a-8d9e-5736a98bfdf6',
				name: 'Corruption Flare',
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
					bonus: 37,
					defence: 2
				},
				description: '',
				details: '2d10+12 damage.',
				damage: '2d10+12 damage',
				category: 1
			},
			{
				id: '10907378-6516-4e5e-9043-b343e866972d',
				name: 'Corruption Bolt',
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
					bonus: 37,
					defence: 3
				},
				description: '',
				details: '3d10+12 damage, and the target is blinded until the end of the corruption shard’s next turn.',
				damage: '3d10+12 damage',
				category: 1
			},
			{
				id: 'ee162258-8945-4f8d-8ecd-19ca9a9ca8cb',
				name: 'Nauseous Form',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is dazed (save ends).',
				damage: '',
				category: 3
			},
			{
				id: 'c53b2c46-6c39-4567-8390-f6a0dcf41777',
				name: 'Seed of Corruption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'when the corruption shard drops to 0 hit points',
				range: 'Close burst 2',
				attack: {
					bonus: 35,
					defence: 3
				},
				description: '',
				details: '2d10+12 damage, and the target takes ongoing 15 damage and is blinded (save ends both).',
				damage: '2d10+12 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			},
			{
				type: 4,
				value: -20
			},
			{
				type: 5,
				value: -20
			},
			{
				type: 10,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, radiant',
		tactics: '',

		info: 'Level 32 Artillery',
		phenotype: 'Medium elemental beast'
	},
	{
		id: '7293d747-2005-44a7-9bf3-fbb6fbf2348c',
		name: 'Deathpriest Necromancer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 30,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19',
		movement: '5',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +24',
		equipment: 'mace; plate armor',
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
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 532,
		initiative: 16,
		ac: 44,
		fortitude: 42,
		reflex: 41,
		will: 44,
		regeneration: null,
		auras: [
			{
				id: 'a6bbf607-83bf-4ade-937c-fa252cb5432d',
				name: 'Aura of Decay',
				keywords: '',
				details: '(Necrotic) aura 5; living enemies within the aura take a –2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '6beaa34e-13fc-4740-9342-fa9887bae8e2',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '2d8+10 damage, and ongoing 15 necrotic damage (save ends).',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '941fe88a-8769-4033-b2e9-3b0339892c92',
				name: 'Spirit Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Spectral forms appear to batter the deathpriest’s enemies. Close blast 3',
				attack: {
					bonus: 34,
					defence: 1
				},
				description: '',
				details: '3d8+10 damage, and the target is pushed 2 squares and immobilized (save ends).',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: '663ec9b4-d8ec-4ce2-9c5f-c73cb491b924',
				name: 'Vision of Death',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 34,
					defence: 3
				},
				description: '',
				details: '3d8+10 psychic damage, and the target is dazed (save ends).',
				damage: '3d8+10 psychic damage',
				category: 1
			},
			{
				id: '47cc8d72-6117-4aa7-abdc-6e28491e932b',
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
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d8+10 necrotic damage, and the target is stunned (save ends). Undead in the burst regain 25 hit points.',
				damage: '2d8+10 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Elite Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '4cf4c254-ee17-4fcc-9d64-1c5a758510e0',
		name: 'Demonic Skeleton Defilade',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 25,
		ac: 46,
		fortitude: 42,
		reflex: 43,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '53545ddd-c954-4b22-b6b0-8e129b224157',
				name: 'Demon Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '15 poison and necrotic damage, and the target is marked until the end of the skeleton’s next turn and slowed (save ends).',
				damage: '15 poison and necrotic damage',
				category: 1
			},
			{
				id: '90709b3b-f6f8-447c-aeef-66c6f71977a4',
				name: 'Speed of the Dead',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever an adjacent enemy performs any action, the skeleton makes an immediate demon blade attack and deals an extra 1d8 damage on a hit.',
				damage: 'the skeleton makes an immediate demon blade attack and deals an extra 1d8 damage on a hit',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 30 Minion',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '5798f8f0-6617-42c3-ac29-f60a896e0677',
		name: 'Dread Wraith Assassin',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 31,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: 'fly 10 (hover); phasing',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Stealth +29',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 206,
		initiative: 28,
		ac: 45,
		fortitude: 41,
		reflex: 43,
		will: 43,
		regeneration: {
			value: 20,
			details: 'if the dread wraith lord takes radiant damage, regeneration is negated until the end of the wraith’s next turn'
		},
		auras: [
			{
				id: '0ecf5de1-0b83-4e87-8280-a063fb3c4bc0',
				name: 'Shroud of Night',
				keywords: '',
				details: '(Necrotic) aura 5; bright light in the aura is reduced to dim light, and dim light becomes darkness.'
			}
		],
		powers: [
			{
				id: 'dc7774f3-cad5-490e-9007-7287d3f35d0b',
				name: 'Dread Blade',
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
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d10+10 necrotic damage, and the target is weakened (save ends).',
				damage: '2d10+10 necrotic damage',
				category: 1
			},
			{
				id: 'b3a92367-f2d8-4cc4-9af7-f3a5b60b3b77',
				name: 'Death Shriek',
				action: null,
				keywords: 'Psychic',
				condition: 'when reduced to 0 hit points',
				range: 'Close blast 3',
				attack: {
					bonus: 32,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d8+10 psychic damage, and the target is dazed (save ends). Miss: Half damage.',
				damage: '4d8+10 psychic damage',
				category: 0
			},
			{
				id: '607d82de-9dc3-449c-99a5-432bfb2f0a42',
				name: 'Combat Advantage',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dread wraith assassin deals 4d6 extra necrotic damage against any target it has combat advantage against.',
				damage: 'the dread wraith assassin deals 4d6 extra necrotic damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: '13600825-ea78-400b-a452-ddbb31056b08',
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
				details: 'The dread wraith assassin shifts 6 squares.',
				damage: 'The dread wraith assassin shifts 6 squares',
				category: 2
			},
			{
				id: 'ede987e0-4cd1-40d4-b69f-bda552e4d9ca',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a dread wraith assassin rises as a free-willed dread wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			}
		],
		resist: 'insubstantial',
		vulnerable: '20 radiant (see also regeneration)',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 31 Lurker',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '30c2bc2a-96ab-4738-900f-711f8ba640dd',
		name: 'Evistro Devastator',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Stealth +28',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 23,
		ac: 40,
		fortitude: 39,
		reflex: 40,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dc7e3647-8fd3-4d98-a2f3-1c3fdb1b0fb4',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '13 damage.',
				damage: '13 damage',
				category: 1
			},
			{
				id: '60ba2a8d-f705-46a2-bd47-08cfddb4cdae',
				name: 'Devastating Bite',
				action: {
					action: 3,
					trigger: 'against bloodied targets only',
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
				details: '18 damage.',
				damage: '18 damage',
				category: 5
			},
			{
				id: 'b694524a-8b42-4778-995c-82453ddef739',
				name: 'Carnage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The evistro devastator gains a +2 bonus to melee attacks if it has one or more allies adjacent to its target. This bonus stacks with combat advantage.',
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
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '9a7b5281-20c6-4a7c-a44e-dd15b2a146da',
		name: 'Fathomal Blight',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: 'fly 8',
		alignment: 'Evil',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 22,
			modifier: 6,
			cost: -1
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
		hp: 1,
		initiative: 15,
		ac: 42,
		fortitude: 38,
		reflex: 42,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '2c0ba5d4-e521-4afa-b058-822722db76fa',
				name: 'Demonic Aura',
				keywords: '',
				details: 'aura 1; each allied demon that starts its turn within the aura gains a +2 power bonus to attack rolls and damage rolls until the end of its turn.'
			}
		],
		powers: [
			{
				id: 'be1bae76-9525-4aaa-ab23-03cf78090ad0',
				name: 'Abyssal Touch',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '10 psychic damage, and the target is stunned (save ends).',
				damage: '10 psychic damage',
				category: 1
			},
			{
				id: 'ed6a0d1f-2acc-40e5-af61-d200d2f0d186',
				name: 'Death Burst',
				action: null,
				keywords: 'Psychic',
				condition: 'when reduced to 0 hit points',
				range: 'The fathomal explodes in a scream of psychic annihilation. Close burst 10',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 16 psychic damage. Miss: Half damage.',
				damage: '16 psychic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -25
			},
			{
				type: 3,
				value: -25
			},
			{
				type: 10,
				value: -25
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: '7a6df799-e2f2-4b68-904c-0083ccb66376',
		name: 'Fathomal Clasp',
		details: '',
		size: 4,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 29,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +26; truesight 6',
		movement: 'fly 10',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 41,
			modifier: 15,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 35,
			modifier: 12,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 660,
		initiative: 19,
		ac: 41,
		fortitude: 43,
		reflex: 37,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '86b6a344-97b0-4d98-8ac6-891453967bb4',
				name: 'Grip of Chaos',
				keywords: '',
				details: '(Psychic) aura 5; each enemy that starts its turn within the aura takes 20 psychic damage.'
			}
		],
		powers: [
			{
				id: '064bdd1d-257c-4700-9f66-db133d3dcf3b',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d10+9 damage, and the target is grabbed. A target trying to escape the grab takes a –4 penalty to the check. A fathomal clasp can grab only one creature at a time, and only creatures that are Large or smaller.',
				damage: '4d10+9 damage',
				category: 1
			},
			{
				id: '14658897-46c5-4988-8f63-9bfb972a0e82',
				name: 'Grab and Hurl',
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
				details: 'The fathomal clasp can make a slam attack. If the slam attack hits, it makes an ally missile attack. If the slam attack misses, or if the ally missile attack would provoke an opportunity attack, the fathomal instead makes a second slam attack.',
				damage: '',
				category: 1
			},
			{
				id: 'a125e17c-d0e7-408c-bcb7-5d63e8ffd813',
				name: 'Filch Foe',
				action: {
					action: 4,
					trigger: 'when an enemy moves adjacent to the fathomal clasp while no creature is grabbed',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fathomal clasp makes a slam attack.',
				damage: '',
				category: 5
			},
			{
				id: 'f4d00d1a-9ac8-4afb-8410-a46e9ba3c96a',
				name: 'Ally Missile',
				action: {
					action: 1,
					trigger: 'while the fathomal clasp has a creature grabbed',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The fathomal clasp hurls the grabbed creature at another foe. Ranged 20',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '3d10+9 damage to the target and the hurled foe, and the target is pushed 2 squares (the hurled foe falls prone in the target’s vacated square). The fathomal clasp can throw the grabbed creature at any open space in range if it has no other targets.',
				damage: '3d10+9 damage to the target and the hurled foe',
				category: 5
			},
			{
				id: '61e0ade3-59ac-4b11-ae8c-c10d68bafd3d',
				name: 'Cry of Anarchy',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 29,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 4d8+10 psychic damage, ongoing 10 psychic damage (save ends), and the target is dazed until the end of the fathomal clasp’s next turn.',
				damage: '4d8+10 psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -25
			},
			{
				type: 5,
				value: -25
			},
			{
				type: 10,
				value: -25
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 29 Elite Brute',
		phenotype: 'Huge elemental beast (demon)'
	},
	{
		id: 'd08bc3cc-47d1-474a-b00e-fe6f9a1c9aec',
		name: 'Fathomal Gnaw',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 28,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +26; truesight 6',
		movement: 'teleport 12',
		alignment: 'Evil',
		languages: '',
		skills: 'Stealth +32',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 36,
			modifier: 13,
			cost: -1
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 205,
		initiative: 31,
		ac: 42,
		fortitude: 38,
		reflex: 41,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '5fb81465-8ce4-4386-a2b8-fd25e859bec3',
				name: 'Self-Inflicted Wounds',
				keywords: '',
				details: '(Psychic) aura 1; each enemy that starts its turn within the aura takes 10 psychic damage and 10 poison damage.'
			}
		],
		powers: [
			{
				id: '9e1f8d8f-9ff2-4f31-8550-fdfb7a81751d',
				name: 'Lash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+10 poison and psychic damage, and the target is slowed (save ends).',
				damage: '4d8+10 poison and psychic damage',
				category: 1
			},
			{
				id: 'ee23984e-1f93-4c0b-ab17-9bc8300b63cc',
				name: 'Blink and Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Poison, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'The fathomal gnaw teleports up to 6 squares and makes an attack. Reach 2; 5d10+9 poison and psychic damage, and the target is immobilized (save ends). Then the fathomal gnaw teleports up to 12 squares.',
				damage: '5d10+9 poison and psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -25
			},
			{
				type: 4,
				value: -25
			},
			{
				type: 5,
				value: -25
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 28 Lurker',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: 'b0178655-233d-48d1-a026-33181091cabd',
		name: 'Fathomal Scream',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 29,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; truesight 6',
		movement: 'fly 10 phasing',
		alignment: 'Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 265,
		initiative: 22,
		ac: 43,
		fortitude: 41,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: 'ad1dd8f2-4b8f-42a3-b2e0-c05727ebb5be',
				name: 'Darkest Memory',
				keywords: '',
				details: '(Psychic) aura 1; each creature within the aura taking ongoing psychic damage takes 5 extra psychic damage.'
			}
		],
		powers: [
			{
				id: '236abd36-0681-465e-9789-e6b639308224',
				name: 'Dreadful Touch',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'Reach 2; 2d10+10 damage (crit 6d10 + 30), and ongoing 10 psychic damage (save ends).',
				damage: '2d10+10 damage (crit 6d10 + 30)',
				category: 1
			},
			{
				id: '4018439e-2ff7-4211-92cb-0554f4e98f2c',
				name: 'Nightmare Dredge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+10 psychic damage, and the target slides 3 squares, takes ongoing 10 psychic damage, and is immobilized (save ends both). When the target fails a saving throw, it slides 3 squares.',
				damage: '2d8+10 psychic damage',
				category: 1
			},
			{
				id: '3c6a0c77-aa9d-4381-84fe-c3c97d8b989e',
				name: 'Mote of Dread',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Fear, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: null,
				description: '',
				details: 'the fathomal scream fashions a phantasmal mote of churning mist. Any creature that enters or begins its turn in the zone takes 15 psychic damage. The mote blocks line of sight. It remains in place until the end of the encounter.',
				damage: 'any creature that enters or begins its turn in the zone takes 15 psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -25
			},
			{
				type: 4,
				value: -25
			},
			{
				type: 6,
				value: -25
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 29 Controller',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: '92d7cad8-1c42-42a6-b506-d04b1466a9d8',
		name: 'Forgeborn Chaos Skulk',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: '',
		level: 27,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; blindsight 10, darkvision',
		movement: '8, climb 8',
		alignment: 'Unaligned',
		languages: '(understands Abyssal, Primordial, and Supernal)',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 193,
		initiative: 26,
		ac: 41,
		fortitude: 39,
		reflex: 41,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0b838460-bb97-48d3-8f4b-16281bc42565',
				name: 'Soul Slam',
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
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 3d8+9 psychic damage, and the chaos skulk becomes invisible to the target until the end of the chaos skulk’s next turn; see also subtle strike.',
				damage: '3d8+9 psychic damage',
				category: 1
			},
			{
				id: '26cb142c-f984-4161-8d6b-b9ea330902a2',
				name: 'Fury of the Forge',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '4d10+9 cold, fire, and lightning damage. Miss: Half damage.',
				damage: 'and lightning damage',
				category: 0
			},
			{
				id: 'b5c46c46-622c-4795-8c87-0cfcadfe9d5e',
				name: 'Soul Shroud',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 30,
					defence: 3
				},
				description: '',
				details: '5d10+9 psychic damage, the target takes ongoing 5 psychic damage, and the chaos skulk becomes invisible to the target (save ends both); see also subtle strike.',
				damage: '5d10+9 psychic damage',
				category: 1
			},
			{
				id: '24d7b8e0-9ec4-43d0-b121-dd2d20c1ba04',
				name: 'Subtle Strike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The chaos skulk deals 3d8 extra damage on attacks when it is invisible to its target.',
				damage: 'the chaos skulk deals 3d8 extra damage on attacks when it is invisible to its target',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'charm, fear, sleep',
		tactics: '',

		info: 'Level 27 Lurker',
		phenotype: 'Large immortal beast'
	},
	{
		id: '594c24e5-f260-48aa-85ba-b285fa6008c9',
		name: 'Forgeborn Darkslayer',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: '',
		level: 28,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '(understands Abyssal, Primordial, and Supernal)',
		skills: '',
		equipment: 'greatsword',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 315,
		initiative: 22,
		ac: 40,
		fortitude: 42,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '26b79f61-6ce0-497d-a8bf-e0a1e2a47791',
				name: 'Shadow Sword',
				action: {
					action: 1,
					trigger: 'usable only while wielding a greatsword',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d10+10 necrotic damage, plus ongoing 10 necrotic damage (save ends).',
				damage: '3d10+10 necrotic damage',
				category: 5
			},
			{
				id: 'ca761026-19f5-4d19-9e83-1f4d47c67b95',
				name: 'Fury of the Forge',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '4d10+9 cold, fire, and lightning damage. Miss: Half damage.',
				damage: 'and lightning damage',
				category: 0
			},
			{
				id: '708da2b2-a303-4ff3-bdfe-b1021c113b0e',
				name: 'Shadow Frenzy',
				action: {
					action: 1,
					trigger: 'usable only while wielding a greatsword',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 29,
					defence: 1
				},
				description: '',
				details: '3d10+10 necrotic damage, and the target is stunned (save ends).',
				damage: '3d10+10 necrotic damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'charm, fear, sleep',
		tactics: '',

		info: 'Level 28 Brute',
		phenotype: 'Large immortal beast'
	},
	{
		id: '44b24672-fffc-43ab-bafd-3dc91a78543f',
		name: 'Forgeborn Firelasher',
		details: '',
		size: 2,
		origin: 3,
		type: 1,
		keywords: '',
		level: 28,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '8, fly 6 (clumsy)',
		alignment: 'Unaligned',
		languages: '(understands Abyssal, Primordial, and Supernal)',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 29,
			modifier: 9,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 200,
		initiative: 23,
		ac: 42,
		fortitude: 40,
		reflex: 41,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aaebdb60-9bf5-44f5-be08-995997da943c',
				name: 'Darkfire Slash',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+10 fire damage, and the target is dazed until the beginning of its next turn.',
				damage: '3d8+10 fire damage',
				category: 1
			},
			{
				id: '102e3848-a0b9-45cc-b0d0-5d0ec5092085',
				name: 'Flame Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '3d8+10 fire damage.',
				damage: '3d8+10 fire damage',
				category: 1
			},
			{
				id: 'd856869e-0830-48e7-b24f-0788999a3923',
				name: 'Defensive Flare',
				action: {
					action: 4,
					trigger: 'when the firelasher is hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'Reach 2; the target is dazed until the end of its next turn. A target already dazed is also weakened until the end of its next turn.',
				damage: 'Reach 2',
				category: 5
			},
			{
				id: '5ac71433-7e35-4a0f-9e58-1bc570459f81',
				name: 'Lash of Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '4d8+10 fire and psychic damage, and the target takes ongoing 15 fire damage (save ends).',
				damage: '4d8+10 fire and psychic damage',
				category: 1
			},
			{
				id: 'c4724ea6-8100-4833-83e8-c701a0b95782',
				name: 'Fury of the Forge',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '4d10+9 cold, fire, and lightning damage. Miss: Half damage.',
				damage: 'and lightning damage',
				category: 0
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
		immune: 'charm, fear, sleep',
		tactics: '',

		info: 'Level 28 Artillery',
		phenotype: 'Medium immortal beast'
	},
	{
		id: '7cf09788-37a1-4af6-a4a7-bce0b1201db8',
		name: 'Forgeborn Fury',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 30,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '(understands Abyssal, Primordial, and Supernal)',
		skills: '',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 1,
		initiative: 23,
		ac: 44,
		fortitude: 42,
		reflex: 43,
		will: 42,
		regeneration: null,
		auras: [
			{
				id: '72b6a9d5-00d8-4a96-aa4f-ca99c318d29e',
				name: 'Elemental Fury',
				keywords: '',
				details: 'aura 1; each allied forgeborn within the aura gains a +2 power bonus to attack rolls and damage rolls.'
			}
		],
		powers: [
			{
				id: '0e91da76-1ca1-4796-b0fe-91df5e85613a',
				name: 'Furious Slam',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '14 damage, and the target loses any resistances (save ends).',
				damage: '14 damage',
				category: 1
			},
			{
				id: '32157ddc-2ea5-4e1d-ba6f-6657ef624c05',
				name: 'Fury of the Forge',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '14 cold, fire, and lightning damage. Miss: Half damage.',
				damage: 'and lightning damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'charm, fear, sleep',
		tactics: '',

		info: 'Level 30 Minion',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: '4fb4ee2e-b82b-433b-abe5-efe34188b48f',
		name: 'Forgeborn Stormstriker',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: '',
		level: 31,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +28; blindsight 10, darkvision',
		movement: '8, teleport 8',
		alignment: 'Unaligned',
		languages: '(understands Abyssal, Primordial, and Supernal)',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 281,
		initiative: 21,
		ac: 45,
		fortitude: 43,
		reflex: 41,
		will: 41,
		regeneration: null,
		auras: [
			{
				id: 'b721e297-9a06-4799-8b9a-a440e39d8b8e',
				name: 'Defenders of the Forge',
				keywords: '',
				details: '(Cold, Fire, Healing, Lightning) aura 5; each immortal ally that starts its turn within the aura regains 20 hit points, while each enemy that starts its turn within the aura takes 15 cold, fire, and lightning damage.'
			}
		],
		powers: [
			{
				id: '02b5a67e-29e7-4f90-9ea5-4776fda002fe',
				name: 'Touch of Chaos',
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
					bonus: 35,
					defence: 3
				},
				description: '',
				details: 'Reach 2; 4d8+10 psychic damage, and the target is dazed until the end of the stormstriker’s next turn.',
				damage: '4d8+10 psychic damage',
				category: 1
			},
			{
				id: '334f4807-d635-4f2f-a231-1812e2bbf1f2',
				name: 'Arc Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 35,
					defence: 2
				},
				description: '',
				details: '3d8+10 lightning damage plus ongoing 10 lightning damage (save ends), the target is dazed until the end of its next turn, and the stormstriker makes a secondary attack against two new targets within 5 squares of the initial target. Secondary Attack: +35 vs. Fortitude; 2d8 + 10 lightning damage and ongoing 10 lightning damage (save ends).',
				damage: '3d8+10 lightning damage plus ongoing 10 lightning damage (save ends)',
				category: 1
			},
			{
				id: 'c8807e48-d267-4dbc-8321-6728ddc03b35',
				name: 'Fury of the Forge',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '4d10+9 cold, fire, and lightning damage. Miss: Half damage.',
				damage: 'and lightning damage',
				category: 0
			},
			{
				id: '3c318497-4c97-43c3-bfd5-89bc5feedeff',
				name: 'Coldfire Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: 'Burst 5 within 10; 3d8+10 cold and fire damage, and crystalline growths make the area of the burst difficult terrain until the end of the encounter.',
				damage: '3d8+10 cold and fire damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -15
			},
			{
				type: 3,
				value: -15
			},
			{
				type: 5,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'charm, fear, sleep',
		tactics: '',

		info: 'Level 31 Controller (L)',
		phenotype: 'Large immortal beast'
	},
	{
		id: '976c2429-681f-456d-a54c-54453642ae64',
		name: 'Glabrezu Gatewarder',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 26,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +20; truesight 6',
		movement: '8, fly 8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +26, Bluff +21, Intimidate +21',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 580,
		initiative: 17,
		ac: 38,
		fortitude: 38,
		reflex: 37,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2dbb68ac-b6fd-4ddd-b1c6-06512eed7e93',
				name: 'Pincer Claw',
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
				details: 'Reach 3; 3d8+9 damage.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: '2ce24038-8457-4acd-a659-e4b7f744e0bd',
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
				details: 'The glabrezu makes two pincer claw attacks. If both claws hit the same target, the target is grabbed if the glabrezu so chooses.',
				damage: '',
				category: 1
			},
			{
				id: '3dfcca6f-fa27-4b49-a21f-04700a5e907b',
				name: 'Abyssal Bolt',
				action: {
					action: 3,
					trigger: '',
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
				details: '4d4+8 damage.',
				damage: '4d4+8 damage',
				category: 3
			},
			{
				id: 'c97695c8-b055-4e61-8f5b-a110bb96b1cb',
				name: 'Blasphemous Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 28,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d12+8 psychic damage, and the target is dazed until the end of the glabrezu’s next turn.',
				damage: '2d12+8 psychic damage',
				category: 3
			},
			{
				id: '3bbc4547-fb1c-4e2a-b892-13aa2bd3c208',
				name: 'Chaos Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d12+8 damage. This damage bypasses all resistances.',
				damage: '2d12+8 damage',
				category: 3
			},
			{
				id: '6b07be74-9299-47c9-a428-351b79b131f2',
				name: 'Arcane Fury',
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
				details: 'The glabrezu teleports 8 squares, recharges its blasphemous word and chaos word powers, and makes an abyssal bolt, blasphemous word, or chaos word attack.',
				damage: 'The glabrezu teleports 8 squares',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 5,
				value: -20
			},
			{
				type: 10,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 26 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: '40818bfe-ffab-437e-a110-716d07950043',
		name: 'Goristro Ripper',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 610,
		initiative: 14,
		ac: 39,
		fortitude: 42,
		reflex: 38,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '46ec7700-afe3-4fd3-b066-97e750416382',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+12 damage.',
				damage: '2d10+12 damage',
				category: 1
			},
			{
				id: 'e0f39f4d-f5e8-4413-ade2-4311bd5fdd9b',
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
				details: 'The goristro makes two slam attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'f936d25c-e97f-4481-9d99-e4a94d6fb84b',
				name: 'Goristro Stomp',
				action: {
					action: 4,
					trigger: 'when a nonadjacent enemy moves adjacent to the goristro',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'The goristro makes an attack against the enemy; 4d8+12 damage, and the target is knocked prone.',
				damage: '4d8+12 damage',
				category: 5
			},
			{
				id: 'c9090a5e-48ad-4998-a5b4-769478d3bd39',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'The goristro makes a charge attack; 3d10+12 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '3d10+12 damage',
				category: 1
			},
			{
				id: 'd461d8aa-5576-48bb-b661-7e8be89f7ab8',
				name: 'Raging Frenzy',
				action: {
					action: 4,
					trigger: 'when attacked by an adjacent enemy while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'The goristro makes a frenzied gore attack against the enemy; 2d8+12 damage.',
				damage: '2d8+12 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '20 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: '095d60ae-4abb-4432-aa3a-b5b925eecadb',
		name: 'Goristro Slavemaster',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +25; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 610,
		initiative: 21,
		ac: 39,
		fortitude: 41,
		reflex: 39,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ffbdea0f-11e5-4250-97af-4a1643e10a1c',
				name: 'Flame Whip',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d10+9 fire damage.',
				damage: '3d10+9 fire damage',
				category: 1
			},
			{
				id: '7fc99483-5fcf-4473-8771-f996f509bbcf',
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
				details: 'The goristro makes two flame whip attacks.',
				damage: '',
				category: 1
			},
			{
				id: '6862fb5c-923b-4dbf-84c1-e0edc6262c09',
				name: 'Goristro Stomp',
				action: {
					action: 4,
					trigger: 'when an enemy moves adjacent to the goristro',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'The goristro makes an attack against the enemy; 4d10+10 damage, and the target is knocked prone.',
				damage: '4d10+10 damage',
				category: 5
			},
			{
				id: '8a36b443-d0f5-4b78-b017-15ead55fa3e2',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'The goristro makes a charge attack; 3d10+10 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '3d10+10 damage',
				category: 1
			},
			{
				id: '71ee9e11-8e8d-444d-8957-424d843dca05',
				name: 'Raging Frenzy',
				action: {
					action: 4,
					trigger: 'when attacked by an adjacent enemy while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '3d8+10 damage, and the target is pushed 2 squares.',
				damage: '3d8+10 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '25 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: 'b746b2ec-e473-41bb-bd1e-d8e191fe0d4b',
		name: 'Gulari',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 25,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +24; truesight 6',
		movement: '8, climb 8 (spider climb)',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal)',
		skills: 'Acrobatics +24, Athletics +23',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 236,
		initiative: 21,
		ac: 41,
		fortitude: 38,
		reflex: 36,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '777d0470-6278-45c5-a6ee-5ec18056c083',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6 + 9 poison damage, and the target is dazed until the end of its next turn.',
				damage: '4d6 + 9 poison damage',
				category: 1
			},
			{
				id: 'c6b13394-5db0-4d20-840a-83e6832aa372',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8 + 9 damage, and the target is knocked prone.',
				damage: '3d8 + 9 damage',
				category: 1
			},
			{
				id: 'd9fc9586-4f85-4b30-9f7c-35ba0edcb148',
				name: 'Shifting Assault',
				action: {
					action: 4,
					trigger: 'when an enemy within 2 squares of the gulari shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gulari shifts to within 2 squares of the triggering creature and makes a bite attack and a slam attack against the triggering creature.',
				damage: 'The gulari shifts to within 2 squares of the triggering creature and makes a bite attack and a slam attack against the triggering creature',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 25 Soldier',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: '3e8b71fb-446c-497c-b991-8f168cc5789c',
		name: 'Gulari Whelp',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 25,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +19; truesight 6',
		movement: '8, climb 8 (spider climb); see also shifting assault',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal)',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 19,
		ac: 40,
		fortitude: 37,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '43e3d07e-fe46-4417-8308-1bd8fe3130c7',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '10 poison damage, and the target is knocked prone.',
				damage: '10 poison damage',
				category: 1
			},
			{
				id: '00461c39-1a2b-48b4-a64a-1eb344744d38',
				name: 'Shifting Assault',
				action: {
					action: 4,
					trigger: 'when an enemy adjacent to the gulari whelp shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The gulari makes a bite attack against the triggering creature.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 25 Minion',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: '508ff86c-8fc3-4b0e-a832-c0c5071f1d01',
		name: 'Hezrou Ripper',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '6 see also demonic step',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Intimidate +21, Stealth +23',
		equipment: '',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 305,
		initiative: 18,
		ac: 39,
		fortitude: 39,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: '2d372782-da3c-457b-afe0-71c951e5e94f',
				name: 'Noxious Stench ',
				keywords: '',
				details: '(Poison) aura 2; enemies in the aura take a –2 penalty to attack rolls. While the hezrou is bloodied, enemies within its aura are also weakened.'
			}
		],
		powers: [
			{
				id: 'cc30b29c-f4f8-47bd-941e-96fb4f3ea98f',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+9 damage.',
				damage: '3d10+9 damage',
				category: 1
			},
			{
				id: '53ec24e4-6f9b-473a-af09-52d98a433596',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 damage.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: 'f7213ab9-3b96-4831-9099-65762abe9b32',
				name: 'Combination Attack',
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
				details: 'The hezrou makes one slam attack and one bite attack.',
				damage: '',
				category: 1
			},
			{
				id: '98826c69-7a3a-4a6a-ba6c-34fc4989bb79',
				name: 'Demonic Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The hezrou ignores difficult terrain, seeming to phase through it.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 4,
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

		info: 'Level 27 Brute',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: '09ae4798-6cb8-48b9-ab7e-186f909ff242',
		name: 'High Aspect of Orcus',
		details: '',
		size: 4,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 29,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision, low-light vision',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +26, History +26, Intimidate +27, Religion +26',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 32,
			modifier: 11,
			cost: -1
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 664,
		initiative: 18,
		ac: 41,
		fortitude: 43,
		reflex: 39,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: 'd0f7be87-715b-4088-9d76-7ed1bdbd0e5f',
				name: 'Lesser Aura of Death',
				keywords: '',
				details: '(Necrotic) aura 10; each enemy that enters or starts its turn in the aura takes 10 necrotic damage (20 necrotic damage while the high aspect of Orcus is bloodied).'
			}
		],
		powers: [
			{
				id: '57868ffa-a494-4a8f-bcaf-d44e2d41ffd1',
				name: 'Skull Mace',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8+10 damage, and the target is weakened (save ends).',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: 'ae8fcc30-944e-4971-9be7-e3253f4dde16',
				name: 'Double Attack',
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
				details: 'The high aspect of Orcus makes two skull mace attacks.',
				damage: '',
				category: 1
			},
			{
				id: '2ec7b934-4ba8-4274-bafb-c1138856f987',
				name: 'Tail Lash',
				action: {
					action: 4,
					trigger: 'when an enemy moves or shifts within 3 squares of the aspect of orcus',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: 'Reach 3; 3d6+12 damage, and the target is knocked prone.',
				damage: '3d6+12 damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			},
			{
				type: 3,
				value: -10
			},
			{
				type: 4,
				value: -10
			},
			{
				type: 9,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 29 Elite Brute',
		phenotype: 'Huge elemental humanoid (demon)'
	},
	{
		id: '697cfac4-7caa-42c2-bdf0-e54f1faa4f87',
		name: 'Immolith Seeker',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon, fire, undead',
		level: 28,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 262,
		initiative: 22,
		ac: 42,
		fortitude: 40,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '42796be2-f9f6-48fc-b453-690d15ccc402',
				name: 'Flaming Aura ',
				keywords: '',
				details: '(Fire) aura 1; each creature that enters or starts its turn in the aura takes 15 fire damage.'
			}
		],
		powers: [
			{
				id: 'ceb2f995-73e2-4a37-8002-561ccd760b7b',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d8+10 fire damage, and ongoing 10 fire damage (save ends).',
				damage: '3d8+10 fire damage',
				category: 1
			},
			{
				id: 'dd843d6d-e331-49d4-bb50-0c07d5af33c7',
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
				details: 'The immolith makes a claw attack (see above) against a Large or smaller target. On a hit, the target slides into a square adjacent to the immolith and is grabbed. While grabbed, the target loses any resistance it has to fire. An immolith can hold up to five grabbed creatures using this power.',
				damage: '',
				category: 1
			},
			{
				id: '2699d162-34b6-40d4-a581-765d9073c4de',
				name: 'Deathfire Curse',
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
					bonus: 32,
					defence: 3
				},
				description: '',
				details: 'the target is slowed (save ends). Aftereffect: The target takes ongoing 10 fire damage (save ends).',
				damage: 'the target takes ongoing 10 fire damage (save ends)',
				category: 3
			},
			{
				id: 'cd24e9de-1fec-4a34-b9b4-52676fcc3b76',
				name: 'Vigor of the Grave',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'undead in the burst (including the immolith) regain 15 hit points.',
				damage: 'undead in the burst (including the immolith) regain 15 hit points',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 4,
				value: -20
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fire, poison',
		tactics: '',

		info: 'Level 28 Controller',
		phenotype: 'Large elemental beast (demon, fire, undead)'
	},
	{
		id: '00b0e797-ef6e-4783-9917-8329221bbd6b',
		name: 'Kazrith Sentinel',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'aquatic, demon',
		level: 26,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; tremorsense 20',
		movement: '6, swim 8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Primordial',
		skills: 'Stealth +27',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 183,
		initiative: 26,
		ac: 40,
		fortitude: 38,
		reflex: 39,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '41e01882-0560-4f2b-8449-c03221d56e36',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6+7 damage, and ongoing 10 acid damage (save ends).',
				damage: '3d6+7 damage',
				category: 1
			},
			{
				id: '393b07cc-2a49-4fb1-a6b3-b0a47009261b',
				name: 'Acidic Retreat',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 29,
					defence: 2
				},
				description: '',
				details: '2d6+7 damage, and ongoing 15 acid damage (save ends). Effect: The kazrith swims its speed.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'a5ecdb60-06d2-434b-8ecf-30137c8f15bf',
				name: 'Acidic Seepage',
				action: null,
				keywords: 'Acid',
				condition: 'usable only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The kazrith gains a +4 bonus to its swim speed, and at the start of its turn creatures adjacent to it take 10 acid damage.',
				damage: 'and at the start of its turn creatures adjacent to it take 10 acid damage',
				category: 0
			},
			{
				id: 'e1194160-b76e-4ee9-9975-710904ababeb',
				name: 'Slippery',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A kazrith makes saving throws against immobilized, restrained, and slowed conditions at the start of its turn as well as at the end of its turn.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			},
			{
				type: 3,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'acid',
		tactics: '',

		info: 'Level 26 Lurker',
		phenotype: 'Large elemental beast (aquatic, demon)'
	},
	{
		id: '46f3088d-f145-4e33-ad9a-b20cc02b5ea1',
		name: 'Laamisha',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 27,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +26; darkvision',
		movement: '6, climb 6',
		alignment: 'Chaotic Evil',
		languages: '(understands Abyssal)',
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
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 246,
		initiative: 24,
		ac: 43,
		fortitude: 39,
		reflex: 40,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '30fccd18-96fd-40b1-956c-be1dd9c88469',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 damage, and the laamisha makes a secondary attack against the same target. Secondary Attack: +32 vs. Fortitude; ongoing 15 poison damage, and the target is immobilized until the end of the laamisha’s next turn.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: '88facc2d-8def-4356-9ee1-4f908e63bec0',
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
				details: 'Reach 2; 3d10+9 damage, and the target is slowed until the end of the laamisha’s next turn.',
				damage: '3d10+9 damage',
				category: 1
			},
			{
				id: 'bb29eed1-3c1c-4881-bded-0e862ceb602a',
				name: 'Tentacle Lash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 5d10+9 damage, and the target is weakened (save ends). A target already weakened takes ongoing 15 poison damage (save ends).',
				damage: '5d10+9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Soldier',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: '34f59c34-3ad3-4a99-af7d-78536ab68f98',
		name: 'Larva Warlord',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'undead',
		level: 27,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17',
		movement: '5 see also squeezing swarm',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +26, Athletics +27, Intimidate +25',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 20,
			modifier: 5,
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
		hp: 608,
		initiative: 21,
		ac: 39,
		fortitude: 39,
		reflex: 38,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: '4a89ce18-0e86-4b46-8883-653f1c26a208',
				name: 'Tactical Feedback',
				keywords: '',
				details: '(Psychic) aura 6; enemies within the aura take 10 psychic damage when they shift.'
			}
		],
		powers: [
			{
				id: '4a728352-5917-4f23-983d-3183217822f0',
				name: 'Mandible Blade',
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
					defence: 1
				},
				description: '',
				details: '3d10+10 necrotic damage.',
				damage: '3d10+10 necrotic damage',
				category: 1
			},
			{
				id: '86996d51-501e-4320-9e21-5fd9296d57f8',
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
				details: 'The larva war master makes two mandible blade attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'c467a2c2-5c71-4d37-85d1-472555ef5e01',
				name: 'Punishing Beetle',
				action: {
					action: 4,
					trigger: 'when a creature regains hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 29,
					defence: 1
				},
				description: '',
				details: '5d10+14 poison damage. Miss: Half damage.',
				damage: '5d10+14 poison damage',
				category: 5
			},
			{
				id: 'c9f308a4-1170-4c53-9521-434220ba3b93',
				name: 'Squeezing Swarm',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'By altering its shape, a larva warlord can squeeze through small openings as if it were a Tiny creature.',
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

		info: 'Level 27 Elite Brute',
		phenotype: 'Medium natural beast (undead)'
	},
	{
		id: 'f1344751-291a-44f2-9f0d-0b9d295f234b',
		name: 'Legion Devil Vanguard',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '7, teleport 3',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: '',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 25,
			modifier: 7,
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 1,
		initiative: 11,
		ac: 44,
		fortitude: 40,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1d2c5c0c-2320-49ec-af35-4f57a9dd3067',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '12 damage.',
				damage: '12 damage',
				category: 1
			},
			{
				id: '64c03573-9ee9-4948-bdd3-40b8eb7d6e22',
				name: 'Squad Defense',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The legion devil vanguard gains a +2 bonus to its defenses when adjacent to at least one other legion devil.',
				damage: 'The legion devil vanguard gains a +2 bonus to its defenses when adjacent to at least one other legion devil',
				category: 0
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

		info: 'Level 28 Minion',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: 'be4cd730-e71d-43e8-b565-b0dbb8f835ef',
		name: 'Marilith Ward Keeper',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: 'scimitar',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 494,
		initiative: 21,
		ac: 41,
		fortitude: 39,
		reflex: 37,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: 'b84f6030-5dac-4ac7-b137-7d1fc0140b3c',
				name: 'Keeper’s Aura',
				keywords: '',
				details: '(Charm) aura 5; each ally within the aura gains a +2 bonus to AC. While the marilith ward keeper is bloodied, the bonus is gained on all defenses.'
			}
		],
		powers: [
			{
				id: '84ecaed7-01ea-49fc-bf42-1dcbd355b053',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+5 damage (crit 3d10 + 35).',
				damage: '3d10+5 damage (crit 3d10 + 35)',
				category: 1
			},
			{
				id: 'd972d71f-1720-429b-9df5-e75da9478b46',
				name: 'Keeper Strike',
				action: {
					action: 1,
					trigger: 'usable only while wielding a scimitar',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+5 damage (crit 3d10 + 35), and the target is dazed until the end of the keeper’s next turn.',
				damage: '3d10+5 damage (crit 3d10 + 35)',
				category: 5
			},
			{
				id: '380b36c4-9d7d-4f1b-92a9-3cd693960eb8',
				name: 'Hacking Blades',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy misses the marilith with a melee attack; usable only while wielding a scimitar',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marilith ward keeper makes a scimitar attack against the triggering creature. If the triggering creatures is dazed, the marilith makes two scimitar attacks.',
				damage: '',
				category: 5
			},
			{
				id: '7f4c8988-b7e1-4af2-bf19-7099752983da',
				name: 'Stunning Steel',
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
				details: 'The marilith makes six scimitar attacks. If two or more attacks hit a single target, that target is knocked prone and stunned (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'f201eec3-f577-463e-8917-aefa921c83bf',
				name: 'Hypnotic Dance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Area burst 5 within 10',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is pulled 6 squares and immobilized (save ends).',
				damage: 'the target is pulled 6 squares and immobilized (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -20
			},
			{
				type: 2,
				value: -20
			},
			{
				type: 3,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Controller',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: 'b3c3b44f-558a-4773-b6a7-ab4d63bad3eb',
		name: 'Mezzodemon Shocktroop',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Stealth +27',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 1,
		initiative: 24,
		ac: 44,
		fortitude: 40,
		reflex: 39,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3ae699ec-c414-409f-97a0-7e09f6da3913',
				name: 'Trident',
				action: {
					action: 1,
					trigger: 'usable only while wielding a trident',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 12 damage.',
				damage: '12 damage',
				category: 5
			},
			{
				id: 'ad48e773-1f59-41e8-97c1-fdeabef35b98',
				name: 'Demon’s Curse',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'enemies in the burst take 10 damage.',
				damage: 'enemies in the burst take 10 damage',
				category: 0
			},
			{
				id: '752d611d-35b2-46fe-a5f1-6770c7bca008',
				name: 'Restraining Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 15 damage and the target is restrained (save ends).',
				damage: '15 damage and the target is restrained (save ends)',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -20
			},
			{
				type: 6,
				value: -10
			},
			{
				type: 10,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '475c9635-fa9f-4bd3-b8ce-18f067115cd4',
		name: 'Mezzodemon Throne Guard',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		intelligence: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 23,
		ac: 43,
		fortitude: 40,
		reflex: 39,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ba498279-1af3-4398-81d7-1f774eea6e56',
				name: 'Trident',
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
				details: 'Reach 2; 11 damage.',
				damage: '11 damage',
				category: 1
			},
			{
				id: '9e09ca85-4bc3-4d9a-a215-019f5f335d2b',
				name: 'Restraining Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 11 damage, and the target is restrained (save ends).',
				damage: '11 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -25
			},
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
		immune: '',
		tactics: '',

		info: 'Level 27 Minion',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: 'ed2aef34-6215-42bc-b14b-3f08b7fcf8c0',
		name: 'Mezzodemon Watchguard',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: 'trident',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 245,
		initiative: 21,
		ac: 43,
		fortitude: 39,
		reflex: 37,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '335c3b65-f4e8-4cdf-aa5a-dae3d3e784c8',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 damage.',
				damage: '3d8+9 damage',
				category: 1
			},
			{
				id: 'd4e125de-caae-4d30-9095-fb96e159ea7f',
				name: 'Skewering Tines',
				action: {
					action: 1,
					trigger: 'usable only while wielding a trident',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+9 damage, and the target takes ongoing 10 damage and is restrained (save ends both).',
				damage: '3d8+9 damage',
				category: 5
			},
			{
				id: 'bf723877-1330-44dd-a28d-b281d50c077c',
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
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 4d6+9 poison damage, and ongoing 15 poison damage (save ends).',
				damage: '4d6+9 poison damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -25
			},
			{
				type: 3,
				value: -15
			},
			{
				type: 4,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Soldier',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '8b3044f4-d3cb-4a5f-969c-74abc934369f',
		name: 'Nycademon Repeller',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 27,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '6, fly 6 (hover)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +23',
		equipment: 'greataxe',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 250,
		initiative: 23,
		ac: 41,
		fortitude: 40,
		reflex: 40,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '521d744b-b282-4095-bd07-eccee0f80c17',
				name: 'Wicked Axe',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: '3d8+7 damage, and ongoing 5 damage (save ends).',
				damage: '3d8+7 damage',
				category: 1
			},
			{
				id: '1db7af01-17e4-4381-87d2-2ccec3193d47',
				name: 'Wicked Edges',
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
				details: 'The nycademon makes two wicked axe attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'c779de5b-6de4-4697-8286-0f113a7a0f42',
				name: 'Repelling Flight',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'The nycademon flies up to 6 squares. This flight does not provoke opportunity attacks. During the flight, the nycademon can make up to three attacks, each at a different target; 1d8+7 damage, and ongoing 5 damage (save ends).',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '948eda5b-b3a4-44df-b382-d64bb48d8a27',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The nycademon deals an extra 2d8 damage against any target it has combat advantage against.',
				damage: 'the nycademon deals an extra 2d8 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Skirmisher',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: '470ee91f-3184-4779-a646-a67ff8f25424',
		name: 'Orcus Empowered',
		details: '',
		size: 5,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 34,
		role: {
			type: 2,
			flag: 2,
			leader: true
		},
		senses: 'Perception +29; darkvision',
		movement: '6, fly 10 (clumsy), teleport 6',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +29, History +29, Intimidate +32, Religion +29',
		equipment: '',
		category: '',
		strength: {
			score: 35,
			modifier: 12,
			cost: -1
		},
		constitution: {
			score: 33,
			modifier: 11,
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 1525,
		initiative: 23,
		ac: 48,
		fortitude: 51,
		reflex: 46,
		will: 49,
		regeneration: null,
		auras: [
			{
				id: '88236686-d825-4657-ab79-81b5afece9d3',
				name: 'Aura of Death',
				keywords: '',
				details: '(Necrotic) aura 20; each enemy that enters the aura or starts its turn there takes 10 necrotic damage (20 necrotic damage while Orcus is bloodied)'
			},
			{
				id: 'f4c28e49-e397-4500-9f8f-1199e035bac5',
				name: 'The Dead Rise',
				keywords: '',
				details: 'aura 6; enemies (including flying ones) treat the area within the aura as difficult terrain, and any dead creature within the aura at the start of Orcus’s turn (except those killed by the Wand of Orcus) rises as an abyssal madness ghoul to fight at Orcus’s command.'
			}
		],
		powers: [
			{
				id: '00e4f497-9531-4e07-b5b1-a45fe4d89eff',
				name: 'Wand of Orcus',
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
					bonus: 38,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d12+12 damage plus 1d12 necrotic damage, and the target is weakened (save ends); see also master of undeath.',
				damage: '3d12+12 damage plus 1d12 necrotic damage',
				category: 1
			},
			{
				id: 'be93cdc8-6f94-4e28-854d-0abbb179ef15',
				name: 'Sweeping Blow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: 'Close blast 4',
				attack: {
					bonus: 36,
					defence: 0
				},
				description: '',
				details: '2d12+12 damage plus 1d12 necrotic damage, and the target is pushed 2 squares and knocked prone; see also master of undeath.',
				damage: '2d12+12 damage plus 1d12 necrotic damage',
				category: 1
			},
			{
				id: '760bbdec-5456-40a1-845c-d9d9dde41edf',
				name: 'Touch of Death',
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
					bonus: 34,
					defence: 1
				},
				description: '',
				details: 'Reach 4; the target is reduced to 0 hit points (resistance or immunity to necrotic damage does not apply). Miss: The target takes necrotic damage equal to its bloodied value.',
				damage: 'the target is reduced to 0 hit points (resistance or immunity to necrotic damage does not apply)',
				category: 1
			},
			{
				id: '2951f70e-cc6c-408e-9686-6d9f1fc47850',
				name: 'Tail Lash',
				action: {
					action: 4,
					trigger: 'when an enemy moves or shifts into a square adjacent to orcus',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '2d8+12 damage, and the target is stunned until the end of Orcus’s next turn and is knocked prone.',
				damage: '2d8+12 damage',
				category: 5
			},
			{
				id: '01e1fa7d-3340-47fb-b63a-206594d2ccef',
				name: 'Necrotic Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 38,
					defence: 1
				},
				description: '',
				details: '2d12+12 necrotic damage, and all undead in the burst regain 20 hit points.',
				damage: '2d12+12 necrotic damage',
				category: 1
			},
			{
				id: '472e1e78-7609-478b-93ec-e98e2b8994e1',
				name: 'Master of Undeath',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'At the start of Orcus’s turn, any creature killed by the Wand of Orcus that is still dead rises as a dread wraith under Orcus’s command.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -20
			},
			{
				type: 2,
				value: -20
			},
			{
				type: 9,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, necrotic',
		tactics: '',

		info: 'Level 34 Solo Brute (L)',
		phenotype: 'Gargantuan elemental humanoid (demon)'
	},
	{
		id: 'd568504b-ffef-4e32-8734-abec829029f0',
		name: 'Pit Fiend Captain',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 30,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +26; darkvision',
		movement: '12, fly 12 (clumsy), teleport 10',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Bluff +29, Insight +26, Intimidate +29, Religion +26',
		equipment: '',
		category: '',
		strength: {
			score: 33,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
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
			score: 29,
			modifier: 9,
			cost: -1
		},
		hp: 550,
		initiative: 24,
		ac: 46,
		fortitude: 43,
		reflex: 39,
		will: 41,
		regeneration: null,
		auras: [
			{
				id: 'b2bf2c11-0ae8-4662-9ee6-ab25fd30e5dd',
				name: 'Aura of Fear ',
				keywords: '',
				details: '(Fear) aura 5; each enemy within the aura takes a –2 penalty to attack rolls.'
			},
			{
				id: '0a81fae9-5b2b-4021-aa65-e50694f6269a',
				name: 'Aura of Fire',
				keywords: '',
				details: '(Fire) aura 5; each enemy that enters or starts its turns in the aura takes 15 fire damage.'
			}
		],
		powers: [
			{
				id: 'c488b0c0-ffb3-412e-a515-68403021ca7b',
				name: 'Flametouched Mace',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+10 fire damage, and ongoing 10 fire damage (save ends).',
				damage: '3d8+10 fire damage',
				category: 1
			},
			{
				id: '2b88d723-4fbe-4532-90ae-9181c15454c9',
				name: 'Tail Sting',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+10 damage, and the pit fiend makes a secondary attack against the same target. Secondary Attack: +35 vs. Fortitude; the target takes ongoing 15 poison damage and is weakened (save ends both).',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '4e5238f5-8917-4db1-b83d-30069258b6aa',
				name: 'Pit Fiend Frenzy',
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
				details: 'The pit fiend makes a flametouched mace attack and a tail sting attack.',
				damage: '',
				category: 1
			},
			{
				id: '4a76df8b-a39d-464d-86c7-67c698c2dfd9',
				name: 'Point of Terror',
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
					bonus: 35,
					defence: 3
				},
				description: '',
				details: 'the target takes a –5 penalty to all defenses until the end of the pit fiend’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '1e5a5b8e-f594-4b8a-a64e-16f627d66e08',
				name: 'Tactical Teleport',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The pit fiend can teleport up to 2 allies within 10 squares of it. The targets appear in any unoccupied squares within 10 squares of the pit fiend.',
				damage: 'The pit fiend can teleport up to 2 allies within 10 squares of it',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -30
			},
			{
				type: 7,
				value: -15
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Elite Soldier (L)',
		phenotype: 'Large immortal humanoid (devil)'
	},
	{
		id: '4a542b00-68f7-4f2f-ae11-a805be578b01',
		name: 'Retriever Holocaust',
		details: '',
		size: 4,
		origin: 3,
		type: 0,
		keywords: '',
		level: 30,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +24; darkvision, truesight 10',
		movement: '10, teleport 10',
		alignment: 'Chaotic Evil',
		languages: '',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1104,
		initiative: 27,
		ac: 46,
		fortitude: 44,
		reflex: 43,
		will: 42,
		regeneration: null,
		auras: [
			{
				id: '9a8c75db-ead0-4f02-99a6-211ec5a41fca',
				name: 'Holocaust Aura',
				keywords: '',
				details: '(Fire) aura 5; each creature that starts its turn within the aura takes 15 fire damage. See also shield of fire.'
			}
		],
		powers: [
			{
				id: 'd2947d37-3968-48d9-99a8-be2b77d648cb',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d8+10 damage.',
				damage: '4d8+10 damage',
				category: 1
			},
			{
				id: '28692342-5254-4843-885f-c2369938f792',
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
				attack: null,
				description: '',
				details: 'The retriever holocaust makes four claw attacks, less one claw for each creature it has grabbed.',
				damage: '',
				category: 1
			},
			{
				id: '72d5dc6d-3cbc-447d-ac16-0fc233abfdf1',
				name: 'Great Retrieve',
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
					bonus: 35,
					defence: 1
				},
				description: '',
				details: 'Reach 3; targets up to four creatures, less one for each creature the retriever already has grabbed; 3d8+10 damage, and the target is grabbed. The retriever can move a creature it has grabbed without making a Strength attack.',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: 'b638718d-f6f2-44a4-af04-7193a8ffff4c',
				name: 'Shield of Fire',
				action: {
					action: 5,
					trigger: 'when a creature within the retriever’s holocaust aura makes an attack roll',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: '4d10+9 fire and necrotic damage, and the triggering attack takes a –2 penalty to the attack roll.',
				damage: '4d10+9 fire and necrotic damage',
				category: 5
			},
			{
				id: '6234abf1-e060-49ed-8428-d4f8c7bf6756',
				name: 'Holocaust Rays',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: 'three attacks at three different targets; 3d10+9 fire and necrotic damage, and the target takes ongoing 5 fire and necrotic damage and is dazed (save ends both). A creature already dazed is stunned (save ends).',
				damage: '3d10+9 fire and necrotic damage',
				category: 1
			},
			{
				id: '2725fc5e-fa10-4861-9417-538e19218eba',
				name: 'Path of Flame',
				action: null,
				keywords: '',
				condition: '',
				range: 'Each time the retriever holocaust teleports, it unleashes a storm of fire at its destination in a close burst 3: +35 vs. Reflex',
				attack: null,
				description: '',
				details: '2d10 + 9 fire damage, and the target is blinded (save ends).',
				damage: '2d10 + 9 fire damage',
				category: 0
			},
			{
				id: '2bde8bd8-9e7b-401a-acc4-a7c7ee50748a',
				name: 'Self-Repair',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The retriever regains 100 hit points and gains a +4 bonus to AC until the start of its next turn.',
				damage: 'The retriever regains 100 hit points and gains a +4 bonus to AC until the start of its next turn',
				category: 5
			},
			{
				id: 'c4fc6dc4-2dc5-4b32-8371-a397917c514c',
				name: 'Unerring Accuracy',
				action: {
					action: 1,
					trigger: 'daily',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The retriever senses the general location of the target or nearest creature of the type it was commanded to locate. The retriever teleports to within 10 squares of the target. The target need not be on the same plane as the retriever.',
				damage: 'The retriever teleports to within 10 squares of the target',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '10 all',
		vulnerable: '',
		immune: 'charm, fear',
		tactics: '',

		info: 'Level 30 Solo Soldier',
		phenotype: 'Huge immortal animate'
	},
	{
		id: '1eef74c2-3071-404a-9600-086280c3da07',
		name: 'Rot Harbinger Reaver',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 28,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +22',
		movement: '6, fly 8 (clumsy)',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 1,
		initiative: 24,
		ac: 44,
		fortitude: 39,
		reflex: 41,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1e98533f-acb9-4e09-b9da-b02aa82e74ae',
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
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '12 damage, and the target is marked until the end of the rot harbinger’s next turn.',
				damage: '12 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, necrotic',
		tactics: '',

		info: 'Level 28 Minion',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '34ae2d78-ddd7-414f-a682-aa3e6280dd91',
		name: 'Shadow Demon Assassin',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 31,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Arcana +26, Bluff +29, Stealth +30',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 30,
			modifier: 10,
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
		hp: 436,
		initiative: 29,
		ac: 45,
		fortitude: 41,
		reflex: 43,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '384d419d-cd06-4c2e-acab-deebd014b258',
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
					bonus: 34,
					defence: 2
				},
				description: '',
				details: 'Two attacks; 3d8+10 necrotic damage; see also combat advantage.',
				damage: '3d8+10 necrotic damage',
				category: 1
			},
			{
				id: '95657179-f69b-4ded-a839-6abaa9be037e',
				name: 'Void Rake',
				action: {
					action: 3,
					trigger: 'requires combat advantage against the target',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow demon makes a single claw attack.',
				damage: '',
				category: 5
			},
			{
				id: 'd002f553-7f03-4e49-9601-76fda53e28dd',
				name: 'Abyssal Void',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 32,
					defence: 1
				},
				description: '',
				details: '4d8+10 necrotic damage. The burst creates a zone of darkness that lasts until the end of the shadow demon’s next turn. The zone of darkness cannot be illuminated, and it blocks line of sight for all creatures that cannot see in darkness. A creature that starts its turn within the zone takes 2d8 + 10 necrotic damage.',
				damage: '4d8+10 necrotic damage',
				category: 5
			},
			{
				id: '5effc4fb-ed08-4c8d-9ffe-1d43d2c07781',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the shadow demon uses a claw attack to damage a target it has combat advantage against, the target cannot spend healing surges until the end of the shadow demon’s next turn.',
				damage: 'when the shadow demon uses a claw attack to damage a target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 2,
				value: -20
			},
			{
				type: 5,
				value: -20
			}
		],
		resist: 'insubstantial',
		vulnerable: 'radiant (if the shadow demon takes 25 or more radiant damage in a single attack, it loses phasing and insubstantial until the end of the attacker’s next turn)',
		immune: '',
		tactics: '',

		info: 'Level 31 Elite Lurker',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: 'fdb05612-d154-4ba4-8627-800d84bb39dd',
		name: 'Shard of Timesus',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 30,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22; darkvision, truesight 6',
		movement: '8, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
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
			score: 8,
			modifier: -1,
			cost: 0
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
		hp: 670,
		initiative: 23,
		ac: 42,
		fortitude: 44,
		reflex: 42,
		will: 41,
		regeneration: null,
		auras: [
			{
				id: '4432aa8a-ce3d-40de-addc-1b1d520371e4',
				name: 'Blackstar Gravity',
				keywords: '',
				details: 'aura 3; each enemy within the aura at the start of the shard’s turn is pulled 2 squares.'
			}
		],
		powers: [
			{
				id: '211f6625-0932-4425-9412-3e24fb37da00',
				name: 'Blackstar Slam',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+10 damage.',
				damage: '4d8+10 damage',
				category: 1
			},
			{
				id: '60356509-fde9-4f84-9d42-14835572b749',
				name: 'Amok Rage',
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
				details: 'The shard of Timesus makes blackstar slam attacks against two different targets.',
				damage: '',
				category: 1
			},
			{
				id: 'f10541cb-72d2-433a-ab73-21672d37948c',
				name: 'Meteor Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '5d10+9 force damage, and the target is pushed 4 squares and knocked prone.',
				damage: '5d10+9 force damage',
				category: 1
			},
			{
				id: '07deefa8-7bdf-48b7-b9dc-76b757933510',
				name: 'Focused Gravity',
				action: {
					action: 3,
					trigger: '1/round',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Ranged sight',
				attack: {
					bonus: 31,
					defence: 1
				},
				description: '',
				details: '2d8+10 force damage, and the target is knocked prone.',
				damage: '2d8+10 force damage',
				category: 5
			},
			{
				id: 'a6933706-f05e-46d6-8fdc-5f670a36c9c2',
				name: 'Starquake',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d8 + 10 damage.',
				damage: '2d8 + 10 damage',
				category: 0
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

		info: 'Level 30 Elite Brute',
		phenotype: 'Large elemental animate'
	},
	{
		id: '68a4a227-8ace-4e63-9cb9-e3cb18758b65',
		name: 'Slaughter Wight Overlord',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 27,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 304,
		initiative: 21,
		ac: 39,
		fortitude: 41,
		reflex: 40,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a80023a8-6ef5-4440-8515-a7efdb21b8db',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '5d6+9 necrotic damage, the target loses a healing surge and is weakened (save ends), and the slaughter wight regains 20 hit points.',
				damage: '5d6+9 necrotic damage',
				category: 1
			},
			{
				id: 'a37f260c-bbd1-4bac-9551-84eafa0e9871',
				name: 'Bloodied Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: 'when first bloodied',
				range: 'Close burst 1',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 4d6+9 necrotic damage, and the target is pushed 1 square and immobilized (save ends).',
				damage: '4d6+9 necrotic damage',
				category: 1
			},
			{
				id: '21d7cbf1-6ebd-4001-9c21-67bfeb038871',
				name: 'Death Wail',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 4d6+9 necrotic damage. Undead allies in the burst can make a basic attack as a free action.',
				damage: '4d6+9 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -25
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 27 Brute',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '0855c8cc-2e4c-4c18-8374-477f7c499096',
		name: 'Solamith Hunter',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 30,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +23',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
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
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 208,
		initiative: 24,
		ac: 42,
		fortitude: 41,
		reflex: 42,
		will: 41,
		regeneration: {
			value: 20,
			details: 'if the solamith takes cold damage, regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: 'ac915851-68af-4152-8051-529a7891a4ef',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+10 fire damage.',
				damage: '2d8+10 fire damage',
				category: 1
			},
			{
				id: '0314c709-0f5f-41cc-89d2-3367826a979a',
				name: 'Soulfire',
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
				attack: null,
				description: '',
				details: 'The solamith chooses one of the following attacks, taking damage as it hurls parts of itself at enemies. The solamith cannot reduce itself to 0 hit points or fewer in this fashion.',
				damage: 'taking damage as it hurls parts of itself at enemies',
				category: 1
			},
			{
				id: '75e333b0-d6ae-4977-a468-e440b297c67f',
				name: 'Soulfire Retort',
				action: {
					action: 4,
					trigger: 'when the solamith takes damage from a melee attack; recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '2d8+10 fire and necrotic damage, and the target is pushed 2 squares.',
				damage: '2d8+10 fire and necrotic damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 4,
				value: -20
			},
			{
				type: 10,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Artillery',
		phenotype: 'Large elemental humanoid (demon)'
	},
	{
		id: 'c7cb517a-634f-4205-ad53-17739d46566a',
		name: 'Storm Devil Thrall',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 27,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: '7, fly 7 (clumsy)',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal, Supernal',
		skills: 'Stealth +26',
		equipment: 'trident',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
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
			score: 16,
			modifier: 3,
			cost: 9
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
		hp: 195,
		initiative: 21,
		ac: 39,
		fortitude: 39,
		reflex: 39,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44a899b5-637f-4b7a-9abe-6d67349b75ac',
				name: 'Trident',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 2
				},
				description: '',
				details: '2d8+9 damage, and the target takes ongoing 10 lightning damage and is dazed (save ends both).',
				damage: '2d8+9 damage',
				category: 1
			},
			{
				id: 'e2665125-9364-4727-907e-4dbf231edf7a',
				name: 'Lightning Fork',
				action: {
					action: 1,
					trigger: 'usable only while wielding a trident',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 32,
					defence: 2
				},
				description: '',
				details: '3d8+10 lightning damage.',
				damage: '3d8+10 lightning damage',
				category: 5
			},
			{
				id: 'f1a5e4f2-9fe8-49ba-b494-cad1d56d6fdf',
				name: 'Infernal Thunderclap',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning, Thunder',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: '4d10+9 lightning and thunder damage, and the target is pushed 3 squares and dazed until the end of its next turn.',
				damage: '4d10+9 lightning and thunder damage',
				category: 1
			},
			{
				id: 'd7be34e2-4a9f-40de-8c68-4f9eaa1209ef',
				name: 'Cyclone',
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
				details: 'The storm devil shifts 3 squares, and any Medium or smaller enemy adjacent to the storm devil at the start of the move is knocked prone.',
				damage: 'The storm devil shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 5,
				value: -20
			},
			{
				type: 10,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Artillery',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: 'e7e37460-d1fb-4699-acd3-e18264e64945',
		name: 'Vampire Lord (Human Fighter)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 28,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '8, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Acrobatics +28, Athletics +29, Intimidate +27',
		equipment: 'broadsword',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
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
		hp: 408,
		initiative: 25,
		ac: 44,
		fortitude: 42,
		reflex: 41,
		will: 40,
		regeneration: {
			value: 15,
			details: 'regeneration does not function while the vampire lord is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: 'ebf15570-8cec-4d9c-b191-098192470e27',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '3d10+5 damage, and the target is marked until the end of the vampire lord’s next turn.',
				damage: '3d10+5 damage',
				category: 1
			},
			{
				id: '3d74e227-f067-4f0e-b435-b5d3fa56f866',
				name: 'Double Strike',
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
				details: 'The vampire lord makes two broadsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: '27d014da-7e00-4ec8-8295-9f45c68e244c',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target; recharges when an adjacent creature becomes bloodied)',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: '4d12+8 damage, the target is weakened (save ends), and the vampire lord regains 102 hit points; see also combat advantage.',
				damage: '4d12+8 damage',
				category: 5
			},
			{
				id: 'e8d9e7b8-4026-4ef8-b6f4-6454e98ffcc7',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends, with a –2 penalty to the saving throw). Aftereffect: The target is dazed (save ends). The vampire lord can dominate only one creature at a time.',
				damage: '',
				category: 3
			},
			{
				id: '3908fd42-e056-4f2b-af6f-518952fac557',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vampire lord deals 2d10 extra damage with its attacks against any target it has marked.',
				damage: 'the vampire lord deals 2d10 extra damage with its attacks against any target it has marked',
				category: 0
			},
			{
				id: '342191be-074d-4d9f-9384-28948c1a09f5',
				name: 'Vampire Lord’s Mark',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vampire lord deals 2d10 extra damage with its attacks against any target it has marked.',
				damage: 'the vampire lord deals 2d10 extra damage with its attacks against any target it has marked',
				category: 0
			},
			{
				id: '546f02f4-ec5a-4bff-91ef-a9f5cb28193f',
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
			},
			{
				id: '04e1e6a2-d855-42c9-b5d7-885b0160ad9a',
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
				details: 'The vampire lord spends a healing surge and regains 102 hit points. The vampire lord gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The vampire lord spends a healing surge and regains 102 hit points',
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 28 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '838de2a1-c682-4d2d-9171-6630d74423fe',
		name: 'War Devil Spearfighter',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 28,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +19; darkvision',
		movement: '8, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Intimidate +23',
		equipment: 'trident',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 316,
		initiative: 21,
		ac: 40,
		fortitude: 40,
		reflex: 38,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b4269ef2-b1d3-4d5f-9ebd-381254e55074',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8+10 damage.',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '01ab5017-abaf-4de9-b6ca-6c75d8651ad9',
				name: 'Savage Spear',
				action: {
					action: 1,
					trigger: 'usable only while wielding a longspear',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8+10 damage, and the target is knocked prone and takes ongoing 10 damage and is dazed (save ends both).',
				damage: '3d8+10 damage',
				category: 5
			},
			{
				id: 'e054a842-8202-4dbd-abef-20454d9bd264',
				name: 'Besieged Foe',
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
				attack: null,
				description: '',
				details: 'automatic hit; the target is marked; allies of the war devil gain a +2 bonus to attack rolls made against the marked target until the end of the encounter or the war devil marks a new target.',
				damage: 'allies of the war devil gain a +2 bonus to attack rolls made against the marked target until the end of the encounter or the war devil marks a new target',
				category: 3
			},
			{
				id: '4e312414-f60d-4d70-8744-0608593c50f0',
				name: 'Devilish Transposition',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 20',
				attack: null,
				description: '',
				details: 'the war devil and an allied devil within range swap positions.',
				damage: '',
				category: 1
			},
			{
				id: '74158b24-c91c-4d5e-977c-59342b660050',
				name: 'Fiendish Tactics',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'affects up to two allied devils of the war devil’s level or lower; each target can take a move action or make a basic attack.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fire',
		tactics: '',

		info: 'Level 28 Brute (L)',
		phenotype: 'Large immortal humanoid (devil)'
	},
	{
		id: 'ae283752-b88c-4675-a347-b18dae60915c',
		name: 'Ancestral Vassal',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 22,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; low-light vision',
		movement: '5, fly 4 (clumsy)',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: '',
		equipment: 'scale armor; short sword',
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
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 418,
		initiative: 16,
		ac: 40,
		fortitude: 37,
		reflex: 36,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'beab64e3-0bf8-460a-aa4b-1f3079fd2991',
				name: 'Short Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d6+8 damage plus 1d6 lightning damage, and the target is marked until the end of the vassal’s next turn.',
				damage: '3d6+8 damage plus 1d6 lightning damage',
				category: 1
			},
			{
				id: '1643b60b-642f-4e92-8213-d06aa035a6c0',
				name: 'Crackling Claw',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d6+8 lightning damage.',
				damage: '3d6+8 lightning damage',
				category: 1
			},
			{
				id: 'a79194d1-fbdc-447c-ae2e-d0b065fcb7f4',
				name: 'Dragonblood Fury',
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
				details: 'The vassal makes both a short sword attack and a crackling claw attack.',
				damage: '',
				category: 1
			},
			{
				id: '61660c27-1693-4c90-9409-fe75b2f91e43',
				name: 'Bloodied Fury',
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
				details: 'The vassal makes a dragonblood fury attack against an adjacent enemy.',
				damage: '',
				category: 4
			},
			{
				id: '73520b96-98c6-47ef-9179-98b275c63508',
				name: 'Lightning Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '3d6+8 lightning damage.',
				damage: '3d6+8 lightning damage',
				category: 1
			},
			{
				id: '036a9eec-7996-461a-a4b1-e68a3ff7452d',
				name: 'Impetuous Spirit',
				action: {
					action: 4,
					trigger: 'when an enemy leaves a square adjacent to the vassal',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The vassal makes a melee basic attack against the triggering enemy, even if the enemy is shifting.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'ace1aaf4-82d2-4367-841f-4b8657863e7f',
				name: 'Martial Recovery',
				action: {
					action: 7,
					trigger: 'when the vassal misses with a melee attack; recharges when the vassal uses impetuous spirit',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The vassal makes another melee attack against the same target.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
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

		info: 'Level 22 Elite Soldier',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: 'b26136a4-d685-4e65-b3db-6b0b1f818a2c',
		name: 'Aric Blacktree',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 0,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7',
		movement: '6, fly 8 (soarsled)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Arcana +8, Bluff +9',
		equipment: 'leather armor; mace',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 15,
			modifier: 2,
			cost: 7
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
		hp: 76,
		initiative: 2,
		ac: 17,
		fortitude: 14,
		reflex: 15,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a44fffb0-52ab-46e6-b98e-c083ea292332',
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
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '81c8dcf1-d3b0-42e2-a7a7-f620d3312b89',
				name: 'Withering Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'targets one or two creatures; 2d6+3 lightning and necrotic damage, and the target is weakened until the end of Aric Blacktree’s next turn.',
				damage: '2d6+3 lightning and necrotic damage',
				category: 1
			},
			{
				id: '9ecc0457-7a77-4a19-8287-72824aa6baa3',
				name: 'Aberrant Inspiration',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'each ally in burst can make a basic attack as a free action, and then takes 5 necrotic damage.',
				damage: 'and then takes 5 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Artillery (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'c6cb4d86-6c6d-4179-8c86-4295753392fa',
		name: 'Ashbound Berserker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shifter',
		level: 2,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +10, Stealth +10',
		equipment: 'battleaxe; light shield',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 43,
		initiative: 7,
		ac: 14,
		fortitude: 13,
		reflex: 15,
		will: 13,
		regeneration: {
			value: 0,
			details: 'longtooth shifting'
		},
		auras: [],
		powers: [
			{
				id: '74725722-886f-4cf3-90cb-aa45582a3167',
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
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '755a0203-43e3-4a16-a262-dc991147091e',
				name: 'Unraveling Strike',
				action: {
					action: 1,
					trigger: 'requires a battleaxe; recharges when first bloodied',
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
				details: '2d8+5 damage, and the target takes a -2 penalty to all defenses (save ends).',
				damage: '2d8+5 damage',
				category: 5
			},
			{
				id: '94bc01bb-948e-42c1-81e1-36591bcde7d2',
				name: 'Longtooth Shifting',
				action: {
					action: 3,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the encounter, the Ashbound berserker gains a +2 bonus to damage rolls, and gains regeneration 2 while bloodied.',
				damage: 'the ashbound berserker gains a +2 bonus to damage rolls',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Brute',
		phenotype: 'Medium natural humanoid (shifter)'
	},
	{
		id: 'ad4e8c50-8bc7-4ff2-a7e4-bf781ff945be',
		name: 'Ashbound Juggernaut',
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
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +8, Intimidate +5',
		equipment: 'greataxe; hide armor',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 46,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 15,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5b239996-fe2f-49cf-bcb9-3095bd31c695',
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
				details: '1d12+3 damage (crit 1d12 + 15).',
				damage: '1d12+3 damage (crit 1d12 + 15)',
				category: 1
			},
			{
				id: '0bb0b978-a502-4896-b443-301fb850cd9b',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
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
				id: '85b69275-154d-4c86-a9da-0cc327c70a6b',
				name: 'Hewing Strike',
				action: {
					action: 1,
					trigger: 'requires a greataxe; recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'close burst 1',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'The Ashbound Juggernaut makes a charge attack; 1d12 damage (crit 1d12 + 12), and ongoing 5 damage (save ends).',
				damage: '1d12 damage (crit 1d12 + 12)',
				category: 5
			},
			{
				id: '0b9980ff-c835-47f9-9fab-068788b8e846',
				name: 'Nature’s Wrath',
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
				details: 'The Ashbound juggernaut shifts 3 squares and makes a basic attack as a free action at any point during this movement.',
				damage: 'The Ashbound juggernaut shifts 3 squares and makes a basic attack as a free action at any point during this movement',
				category: 1
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
		id: '077c5faf-7d64-46f7-b0bf-93bae93079c2',
		name: 'Ashbound Warshaper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shifter',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +8, Intimidate +8, Nature +12',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 120,
		initiative: 4,
		ac: 21,
		fortitude: 19,
		reflex: 16,
		will: 21,
		regeneration: {
			value: 0,
			details: 'aspect of the beast'
		},
		auras: [
			{
				id: '4e6e6d9b-ebcd-4762-8d8f-43ab71f44f9c',
				name: 'Bloodlust',
				keywords: '',
				details: 'aura 2; each ally within the aura gains a +1 bonus to attack rolls.'
			}
		],
		powers: [
			{
				id: '31fe630b-6a2c-4be3-a7d1-efb8784db137',
				name: 'Claw',
				action: {
					action: 1,
					trigger: 'usable only while affected by aspect of the beast',
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
				details: '2d8+3 damage.',
				damage: '2d8+3 damage',
				category: 5
			},
			{
				id: '934a30dc-9219-4585-843e-0743b213e03c',
				name: 'Quarterstaff',
				action: {
					action: 1,
					trigger: 'usable only while not affected by aspect of the beast',
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
				details: '1d8+6 damage, and the warshaper slides the target 2 squares.',
				damage: '1d8+6 damage',
				category: 5
			},
			{
				id: 'eaf5715e-55ba-4afd-8ed2-bc74e348da3e',
				name: 'Claw Flurry',
				action: {
					action: 1,
					trigger: 'usable only while affected by aspect of the beast',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Ashbound warshaper makes two claw attacks.',
				damage: '',
				category: 5
			},
			{
				id: '440dec35-42a7-4b24-aa7f-7481d561c93a',
				name: 'Unleash the Beast',
				action: {
					action: 3,
					trigger: 'usable only while not affected by aspect of the beast',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'the target makes a melee basic attack against an adjacent creature of the Ashbound warshaper’s choice as a free action.',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '5220483e-a90c-4478-8067-7143e715c7bb',
				name: 'Aspect of the Beast',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Ashbound warshaper assumes the form of a primal beast. Until the end of the encounter, the warshaper gains regeneration 5, its speed increases by 2, and it can make claw attacks. While in this form, the Ashbound warshaper cannot make quarterstaff attacks and cannot use unleash the beast.',
				damage: 'the warshaper gains regeneration 5',
				category: 3
			},
			{
				id: '13bcbe12-dd39-447f-a357-c5deb56d66c9',
				name: 'Razorclaw Shifting',
				action: {
					action: 3,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the encounter, the warshaper’s speed increases by 2 and it gains a +1 bonus to AC and Reflex.',
				damage: 'the warshaper’s speed increases by 2 and it gains a +1 bonus to AC and Reflex',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (shifter)'
	},
	{
		id: '142006c9-dc54-439f-a620-78fce61d187f',
		name: 'Aurum Concordian',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dwarf',
		level: 7,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Dwarven',
		skills: 'Bluff +13, Diplomacy +13, History +11, Insight +11',
		equipment: 'chainmail',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 158,
		initiative: 3,
		ac: 23,
		fortitude: 20,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd7a0bfb1-ffc4-4781-8510-7b02756269c5',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'c9cc3a69-a0f4-4b4b-9dec-049c198e6c9c',
				name: 'Dazing Hammerstrike',
				action: {
					action: 1,
					trigger: 'requires a warhammer',
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
				details: '1d0+5 damage, and the target is dazed until the end of the Aurum Concordian’s next turn.',
				damage: '1d0+5 damage',
				category: 5
			},
			{
				id: '142332dc-15ee-4a30-ab05-3c96520abdfe',
				name: 'Silver-Tongued Devil',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'the target is dominated until the end of the Aurum Concordian’s next turn. The Concordian can have only one target dominated at a time.',
				damage: '',
				category: 3
			},
			{
				id: '58793ae8-3236-4d46-b648-b390547c064f',
				name: 'Superior Tactics',
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
				details: 'targets one ally; the Concordian slides the target 1 square.',
				damage: 'the Concordian slides the target 1 square',
				category: 3
			},
			{
				id: 'ecbf9745-c552-43ee-91d9-2607290fb284',
				name: 'Price of Loyalty',
				action: {
					action: 5,
					trigger: 'when the concordian is targeted with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Aurum Concordian can change the triggering attack’s target to an adjacent ally, or to an enemy dominated by its silvertongued devil power.',
				damage: '',
				category: 5
			},
			{
				id: '5d0f98fc-fe7c-4d11-a453-38685bd8ed98',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides an Aurum Concordian, the Concordian moves 1 square less than the effect specifies. Also, a Concordian can make a saving throw to avoid being knocked prone.',
				damage: 'the Concordian moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (dwarf)'
	},
	{
		id: '3648f466-b48c-498d-a9ed-90dbcc3d23b0',
		name: 'Belashyrra',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 28,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +27; all-around vision, darkvision, truesight 4',
		movement: '8',
		alignment: 'Evil',
		languages: 'All',
		skills: 'Insight +27',
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
			score: 21,
			modifier: 5,
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 1024,
		initiative: 19,
		ac: 42,
		fortitude: 40,
		reflex: 40,
		will: 42,
		regeneration: {
			value: 20,
			details: ''
		},
		auras: [
			{
				id: '925ea7a5-05e8-4fc3-b3a0-47e973f83450',
				name: 'Shroud of Madness',
				keywords: '',
				details: 'aura 4; each enemy that starts its turn within the aura takes 20 psychic damage, and takes a -2 penalty to all defenses until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '132702f1-9daa-4ac7-a4d6-61239edb7e4c',
				name: 'Corrupting Touch',
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
					bonus: 32,
					defence: 1
				},
				description: '',
				details: '3d8+10 damage, and the target is weakened until the end of Belashyrra’s next turn.',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: '83ea1b1a-9bce-4f0e-9fdb-cd34fafb9fe6',
				name: 'Tentacle Whip',
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
					defence: 1
				},
				description: '',
				details: 'Reach 3; 3d8+10 damage, and ongoing 15 poison damage (save ends).',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: '2e890c3b-8dd4-4f8f-9c24-bd495b735da6',
				name: 'Gaze of Agony',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(minor',
				range: 'Ranged 10',
				attack: {
					bonus: 32,
					defence: 3
				},
				description: '',
				details: '3d8+8 psychic damage.',
				damage: '3d8+8 psychic damage',
				category: 1
			},
			{
				id: '873a8148-c448-481c-918d-f7e5f5449021',
				name: 'Lashing Flurry',
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
				details: 'Belashyrra makes a corrupting touch attack and a tentacle whip attack.',
				damage: '',
				category: 1
			},
			{
				id: '3306d403-13e5-4643-9344-3c7d312ed104',
				name: 'Swift Corruption',
				action: {
					action: 5,
					trigger: 'when an enemy moves or shifts into a square adjacent to belashyrra',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Belashyrra makes a corrupting touch attack.',
				damage: '',
				category: 5
			},
			{
				id: 'ca9fa7d6-1b7b-4c9b-8f59-2e3ba7db7a79',
				name: 'Hypnotic Gaze',
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
					bonus: 32,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends). Aftereffect: The target is dazed (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '6bb347c0-d9c5-4cd1-92e3-4276ef4a02df',
				name: 'Eye Thief',
				action: {
					action: 3,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target is blinded (save ends). Belashyrra can see through the otherwise blind eyes of the target and use the target as the origin point for his ranged attacks. Second Failed Saving Throw: If the target fails two saving throws against this power, the blindness becomes permanent. The Remove Affliction ritual will remove this effect, but the skill check takes a -15 penalty. Otherwise, only Belashyrra’s death can remove the effect.',
				attack: {
					bonus: 32,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'cc7aecfa-847f-4f39-90af-1bcb81b147c8',
				name: 'Reality Rift',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Teleportation',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '5d8+10 psychic damage. Effect: Belashyrra teleports up to 10 squares or to any square adjacent to a creature currently blinded by eye thief.',
				damage: '5d8+10 psychic damage',
				category: 5
			},
			{
				id: 'ef0bb33f-b8c2-445e-96e0-cd84ef30eb80',
				name: 'Alien Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If an enemy attacks Belashyrra’s Will and hits with a charm or psychic attack or with a mind-reading power, that enemy takes 20 psychic damage and is dazed until the end of its next turn.',
				damage: 'that enemy takes 20 psychic damage and is dazed until the end of its next turn',
				category: 0
			},
			{
				id: 'b58e5e1d-4c57-4a8f-8376-85740e7fe5be',
				name: 'Sight in Blindness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When blinded, Belashyrra has blindsight 20.',
				damage: 'Belashyrra has blindsight 20',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -20
			},
			{
				type: 8,
				value: -20
			}
		],
		resist: '',
		vulnerable: 'radiant (if Belashyrra takes radiant damage, his regeneration doesn’t function on his',
		immune: '',
		tactics: '',

		info: 'Level 28 Solo Controller',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'b3874c9d-4cdb-40cd-9181-9c30c416e7e7',
		name: 'Bladebearer Hobgoblin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +12, Stealth +11',
		equipment: 'leather armor; scimitar',
		category: 'Goblin',
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
		initiative: 8,
		ac: 19,
		fortitude: 18,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9bc3aa6f-e873-40d1-9639-f12b9727dcf9',
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
				details: '1d8+6 damage (crit 1d8+14).',
				damage: '1d8+6 damage (crit 1d8+14)',
				category: 1
			},
			{
				id: 'a856faac-04fa-472d-b204-0e3fed7c15c3',
				name: 'Scimitar',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target; requires a scimitar',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer hobgoblin makes two scimitar attacks.',
				damage: '',
				category: 5
			},
			{
				id: 'ae378861-bb0e-4807-a8fa-1cb583029147',
				name: 'Bladebearer Finesse',
				action: {
					action: 7,
					trigger: 'usable only while charging',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer hobgoblin doesn’t provoke opportunity attacks when leaving the initial square of its charge.',
				damage: '',
				category: 5
			},
			{
				id: 'cdabe787-2786-41b7-ba84-25d17a0d12d8',
				name: 'Dhakaani Footwork',
				action: {
					action: 7,
					trigger: 'when the bladebearer hobgoblin hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer hobgoblin shifts 1 square.',
				damage: 'The Bladebearer hobgoblin shifts 1 square',
				category: 5
			},
			{
				id: 'c7f9da5c-4412-40dc-9577-e4023fa5cca5',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the bladebearer hobgoblin is subjected to an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer hobgoblin rolls a saving throw against the effect.',
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
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9d5f25c2-4f46-4e31-8d2f-b6f2804ede9b',
		name: 'Bren ir’Gadden',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'half-elf',
		level: 1,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: '',
		equipment: 'chainmail; heavy shield; longsword',
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
		hp: 31,
		initiative: 4,
		ac: 16,
		fortitude: 14,
		reflex: 13,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3159b331-5292-4eb8-95a2-89d9b0a8f026',
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
				details: '1d8+3 damage, and the target is marked until the end of Bren’s next turn.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '672439c0-1625-4b5f-a446-394338cf3948',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 5,
					defence: 2
				},
				description: '',
				details: '2d4+1 damage.',
				damage: '2d4+1 damage',
				category: 1
			},
			{
				id: '3a83462a-cc4f-42e9-ba55-658e20b9800f',
				name: 'Inspiring Strike',
				action: {
					action: 1,
					trigger: 'requires a longsword',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage, and one ally within 5 squares of Bren gains a +2 power bonus to its next attack roll against the target before the end of Bren’s next turn.',
				damage: '1d8+7 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Soldier (L)',
		phenotype: 'Medium natural humanoid (half-elf)'
	},
	{
		id: 'a50fa208-9c02-424f-85ee-d6503e45cb37',
		name: 'Bugbear Skinner',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +10, Intimidate +11, Stealth +12',
		equipment: 'leather armor; sickle',
		category: 'Goblin',
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
			score: 12,
			modifier: 1,
			cost: 2
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
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '07c656ac-6f7a-4175-944f-a95b0266dbf5',
				name: 'Sickle',
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
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: 'e66c75f0-5391-4613-9aea-b6c12144ca65',
				name: 'Mocking Rend',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target; requires a sickle; recharges when an enemy within line of sight becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bugbear skinner makes two sickle attacks against the same target. If both attacks hit, the target takes ongoing 5 damage (save ends) and is dazed until the end of the bugbear skinner’s next turn.',
				damage: 'the target takes ongoing 5 damage (save ends) and is dazed until the end of the bugbear skinner’s next turn',
				category: 5
			},
			{
				id: '7f5ebc1b-420c-4e6e-918e-1b0cf2900c09',
				name: 'Horrifying Mockery',
				action: {
					action: 3,
					trigger: 'recharges when an enemy within line of sight is bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'targets one enemy in the burst; the bugbear skinner pushes the target 1 square, and the bugbear skinner shifts 3 squares.',
				damage: 'the bugbear skinner pushes the target 1 square',
				category: 5
			},
			{
				id: '3eb728a1-2b41-4b08-b93a-56d97b0fd224',
				name: 'Bloodied Shift',
				action: {
					action: 7,
					trigger: 'when the bugbear skinner is hit by an attack while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bugbear skinner shifts 1 square.',
				damage: 'The bugbear skinner shifts 1 square',
				category: 5
			},
			{
				id: 'cc781c09-8b25-464b-88b4-cad28aa67a65',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'If a bugbear skinner hits a creature granting combat advantage to it with a melee attack, and that creature is not already taking ongoing damage, then the creature takes ongoing 5 damage (save ends).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '79bf2e6e-b847-45f1-a9c1-113550163e17',
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
				details: 'A bugbear skinner deals 1d6 extra damage on the next attack it makes against a creature granting combat advantage to it. It must apply this bonus before the end of its next turn.',
				damage: 'a bugbear skinner deals 1d6 extra damage on the next attack it makes against a creature granting combat advantage to it',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '47a39afc-0aa3-48e9-a4c2-66b74a3ac5e5',
		name: 'Cannith Magewright',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 6,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Arcana +12',
		equipment: 'implement, wand',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 55,
		initiative: 5,
		ac: 18,
		fortitude: 16,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4cf5a55c-8feb-459b-a13e-fe6de95d353c',
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
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '89de3be7-27b9-4af5-b17f-f6eab61d72d8',
				name: 'Wand Spark',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Implement',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '2d4+8 damage.',
				damage: '2d4+8 damage',
				category: 1
			},
			{
				id: 'f9893b5c-e15d-4e21-b1b7-84e7bbdff11c',
				name: 'Magewright’s Fiery Wand',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d4+4 fire damage, and each enemy adjacent to the target takes 4 fire damage.',
				damage: '1d4+4 fire damage',
				category: 1
			},
			{
				id: '28c569ac-4bfb-40ec-9652-6e881508df7f',
				name: 'Alchemical Explosion',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d6+4 fire damage and ongoing 5 fire damage, and the target is knocked prone.',
				damage: '1d6+4 fire damage and ongoing 5 fire damage',
				category: 1
			},
			{
				id: '2aa114b7-d3e8-431c-add5-adb14d66491d',
				name: 'Lightning Withdrawal',
				action: {
					action: 4,
					trigger: 'when an enemy enters an adjacent square',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning, Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d6+4 lightning damage, and the Cannith magewright teleports 5 squares.',
				damage: '2d6+4 lightning damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Artillery',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'c7a41d3b-84c3-4d71-b74d-dbaedebda311',
		name: 'Carrion Tribe Blessed Champion',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 15,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Athletics +18, Endurance +16',
		equipment: 'hide armor',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 300,
		initiative: 14,
		ac: 33,
		fortitude: 30,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9edfd696-2b61-4e58-a97f-81db0359db5f',
				name: 'Spiked Greatclub',
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
				details: '4d4+5 damage, and the target is marked until the start of the blessed champion’s next turn.',
				damage: '4d4+5 damage',
				category: 1
			},
			{
				id: '05e79ad2-bea0-4b55-a377-7240ba19f26a',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d6+1 damage, and ongoing 5 damage (save ends).',
				damage: '2d6+1 damage',
				category: 3
			},
			{
				id: '5c0d05f2-4698-4d9c-bbdc-93647b8a87f2',
				name: 'Brutal Smash',
				action: {
					action: 1,
					trigger: 'requires a spiked greatclub',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '4d6+8 damage, and the target is dazed (save ends).',
				damage: '4d6+8 damage',
				category: 5
			},
			{
				id: '898c7347-b0c9-4373-987b-cd6d9c92519a',
				name: 'Demonic Wrath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Polymorph',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blessed champion takes on a hideous demonic form until the end of the encounter. Any enemy starting its turn adjacent to the blessed champion in demonic wrath form is marked by the blessed champion and takes a -2 penalty to all defenses until the start of its next turn.',
				damage: 'Any enemy starting its turn adjacent to the blessed champion in demonic wrath form is marked by the blessed champion and takes a -2 penalty to all defenses until the start of its next turn',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '699d21a0-15d9-42ef-bb55-95b2444c282c',
		name: 'Carrion Tribe Degenerate',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 15,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: '',
		equipment: 'greatclub; hide armor',
		category: '',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 14,
		ac: 29,
		fortitude: 28,
		reflex: 27,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eddcd742-ae3b-4a2f-bd31-6af6da2ad4c4',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '8 damage (10 damage against bloodied targets).',
				damage: '8 damage (10 damage against bloodied targets)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'a4803e4a-7e6a-45ed-ac20-1ca099627285',
		name: 'Carrion Tribe Sakah Hunter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'tiefling',
		level: 13,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +17',
		equipment: 'arrow; leather armor; longbow; spear',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
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
		hp: 96,
		initiative: 12,
		ac: 25,
		fortitude: 24,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cbae6b78-eabf-4e35-a400-b8d7feca2f6e',
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
				details: '2d8+3 damage.',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '4cbb1715-9ceb-4f74-a01b-52195ff9ff5b',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 1
			},
			{
				id: '45527c6a-aa30-4d76-bb95-523e7e12f6e3',
				name: 'Infernal Summons',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Conjuration',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'the sakah hunter conjures a Medium beast of smoke and flame in a space adjacent to an enemy in range. Any enemies adjacent to the conjured beast grant combat advantage to the sakah hunter. As a move action, the sakah hunter can move the fiendish beast 5 squares. The fiendish beast cannot be attacked, but it is vulnerable to dispel magic and similar effects. Sustain Minor: The fiendish beast persists.',
				damage: 'the sakah hunter can move the fiendish beast 5 squares',
				category: 3
			},
			{
				id: '182b96d8-8f5d-4cba-8887-20aae02b89e9',
				name: 'Longbow Volley',
				action: {
					action: 1,
					trigger: 'requires longbow',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'targets one or two creatures; 2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 5
			},
			{
				id: 'bbc75ed9-15d1-40cc-b479-ac6b42b88b38',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The sakah hunter’s melee and ranged attacks deal 1d6 extra damage against any creature granting combat advantage to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ceaab61f-8391-4d8e-97af-0633d856bfd4',
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
				details: 'The sakah hunter gains a +1 power bonus to its next attack roll against an enemy that hit it since the hunter’s last turn. If the attack hits and deals damage, the hunter deals 3 extra damage.',
				damage: 'if the attack hits and deals damage',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -11
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Artillery',
		phenotype: 'Medium natural humanoid (tiefling)'
	},
	{
		id: '5dc7963e-cdae-4313-a1dd-3f1547255bda',
		name: 'Carver',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 6,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
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
			score: 2,
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
		hp: 85,
		initiative: 5,
		ac: 18,
		fortitude: 20,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7ac6c3ea-4a56-4abc-8dd8-514ea1435fe1',
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
				details: '1d8+5 damage, and ongoing 3 damage (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '824302b2-41eb-413a-9076-2ffb012f39d2',
				name: 'Talons',
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
				details: '2d4+7 damage.',
				damage: '2d4+7 damage',
				category: 1
			},
			{
				id: '80b8377b-f40d-42e7-92cf-365f80a1da49',
				name: 'Vicious Steed',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 6th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'When a carver’s rider misses with an opportunity attack, the carver makes a talons attack against an enemy within reach as a free action.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Brute',
		phenotype: 'Large natural beast (mount, reptile)'
	},
	{
		id: '5222680d-253f-46fd-9680-e76f254a0562',
		name: 'Chaos Fleet Sailor',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6, swim 6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Primordial',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 27,
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
			score: 23,
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
		hp: 214,
		initiative: 18,
		ac: 37,
		fortitude: 36,
		reflex: 34,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e883dd00-c5f2-4f7f-80cb-3d49e855325c',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '3d6+9 damage.',
				damage: '3d6+9 damage',
				category: 1
			},
			{
				id: '941f3303-5b22-4ab1-b7f0-ff39acfe425d',
				name: 'Rending Pass',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '3d6+9 damage, and the sailor shifts 3 squares.',
				damage: '3d6+9 damage',
				category: 1
			},
			{
				id: '5ac2a17a-e8af-4646-8cd0-f2de8385f385',
				name: 'Elemental Eruption',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 26,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d8+3 cold, fire, or lightning damage (sailor’s choice). Miss: Half damage.',
				damage: 'or lightning damage (sailor’s choice)',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			},
			{
				type: 3,
				value: -20
			},
			{
				type: 5,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Skirmisher',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '7f9bad80-abde-43b3-b74b-f775fadc6804',
		name: 'Child of Winter Doomspeaker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shifter',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +17, Stealth +17',
		equipment: 'leather armor; sickle',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 96,
		initiative: 16,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '47a679ae-dfa0-4ad5-8c97-ad3eaf01b373',
				name: 'Sickle',
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
				details: '2d6+8 damage, and the target is dazed until the end of the doomspeaker’s next turn.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'e4f00dc4-d44d-4f5f-8a51-2eaabc7f9ce8',
				name: 'Hasten Doom',
				action: {
					action: 1,
					trigger: 'requires a sickle',
					sustainAction: 0,
					use: 1,
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
				details: 'targets a creature affected by doom revealed; 4d6+7 damage, and the target is no longer affected by doom revealed.',
				damage: '4d6+7 damage',
				category: 5
			},
			{
				id: '7f27d08d-2a29-4ce2-88d6-a8a82ba1f1e2',
				name: 'Doom Revealed',
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
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'until the end of the doomspeaker’s next turn, whenever the doomspeaker takes damage, the target of this power takes half that much damage. The doomspeaker can designate only one target with its doom revealed power at a time.',
				damage: 'whenever the doomspeaker takes damage',
				category: 1
			},
			{
				id: 'a94377fe-907c-4683-912e-2d4de9a921ed',
				name: 'Razorclaw Shifting',
				action: {
					action: 3,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the encounter, the doomspeaker’s speed increases by 2 and it gains a +1 bonus to AC and Reflex.',
				damage: 'the doomspeaker’s speed increases by 2 and it gains a +1 bonus to AC and Reflex',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Medium natural humanoid (shifter)'
	},
	{
		id: '0e11784f-161e-4e1c-baa9-1b692218bf49',
		name: 'Clawfoot',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
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
		hp: 46,
		initiative: 6,
		ac: 17,
		fortitude: 16,
		reflex: 16,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8a7c63d4-00e8-4496-8d44-eba8f947f7c5',
				name: 'Talons',
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
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '330550ac-0d54-42d7-87c6-8a1ccc469157',
				name: 'Clawfoot Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 3rd level or higher',
				range: 'When a clawfoot’s rider charges, both the clawfoot and the rider make melee basic attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '5ef53377-0ead-4206-a802-c06fd08aa084',
				name: 'Medium Steed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Medium creature can ride a clawfoot.',
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
		phenotype: 'Medium natural beast (mount, reptile)'
	},
	{
		id: 'a27ac980-9eda-46a0-8525-0fa1fa44546f',
		name: 'Deneith Blademark Grunt',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +8',
		equipment: 'heavy shield; leather armor; longsword',
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
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 46,
		initiative: 3,
		ac: 19,
		fortitude: 17,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e856fced-f852-4eed-9c2b-0a4522e00ce2',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'c247aa16-96f1-4b3a-b185-e5680353cc54',
				name: 'Seize the Good Ground',
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
				details: '1d8+5 damage, and the Deneith blademark grunt shifts 3 squares to a space adjacent to the target.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '4c75b642-8432-4c00-8932-62d36b5b8210',
				name: 'Mark of the Sentinel',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Deneith blademark grunt shifts 1 square before or after it makes an opportunity attack.',
				damage: 'A Deneith blademark grunt shifts 1 square before or after it makes an opportunity attack',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'a267be8e-a541-4fe8-a9c2-1e3bd2ec5f79',
		name: 'Dolgaunt Monk',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'blind',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; blindsight 20',
		movement: '8',
		alignment: 'Evil',
		languages: 'Deep Speech, Goblin',
		skills: 'Acrobatics +14, Stealth +14',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 86,
		initiative: 9,
		ac: 22,
		fortitude: 20,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'beddc82a-f4da-45bb-a40a-35ce4953d1f3',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4+5 damage, and the target is grabbed. The dolgaunt monk can’t grab more than two creatures at once; see also clutch of death.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '13987cfc-dcd0-4794-b2d1-07b7fc1642b5',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '141301dd-0755-4846-9ba7-fbdfd822d270',
				name: 'Inexorable Drag',
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
				details: 'Targets a creature grabbed by the dolgaunt monk; the monk slides the target 2 squares.',
				damage: 'the monk slides the target 2 squares',
				category: 3
			},
			{
				id: 'c7b21d45-ce28-4ada-b65d-1089eebea931',
				name: 'Clutch of Death',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dolgaunt monk can grab with up to two tentacles at a time. While grabbing an enemy, it can act normally, but it can’t use that tentacle for another attack. Enemies can attack the tentacle. An attack that hits the tentacle doesn’t harm the dolgaunt monk, but it causes the tentacle to release the grab. The tentacle’s defenses are the same as those of the dolgaunt monk.',
				damage: '',
				category: 0
			},
			{
				id: '753ee102-e39b-482d-8f67-86ad66401edd',
				name: 'Vitality Leech',
				action: null,
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A target that begins its turn grabbed by the dolgaunt monk takes 10 necrotic damage, and the dolgaunt monk gains 10 temporary hit points.',
				damage: 'a target that begins its turn grabbed by the dolgaunt monk takes 10 necrotic damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller',
		phenotype: 'Medium aberrant humanoid (blind)'
	},
	{
		id: '72cc5dd5-2401-4ee1-bc4a-727c4ee75745',
		name: 'Dolgrim Warrior',
		details: '',
		size: 1,
		origin: 0,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Deep Speech, Goblin',
		skills: '',
		equipment: 'arrow; club; crossbow; light shield',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 53,
		initiative: 6,
		ac: 18,
		fortitude: 16,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '37fa4ad4-4b96-490a-888c-2cb3abe0e828',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '2bec340e-23e0-45ca-82ac-6335d31df9ff',
				name: 'Crossbow',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '78b759f3-fcb3-4047-8a4e-74e805f9dc18',
				name: 'Double Actions',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'At the start of combat, the dolgrim warrior makes two initiative checks. Each check corresponds to one of the warrior’s brains, and the warrior takes a turn on both initiative counts. The warrior has a full set of actions on each of these turns, and its ability to take an immediate action refreshes on each turn.',
				damage: '',
				category: 0
			},
			{
				id: '36482aad-9ca4-45c5-8d5e-43fe44850ecd',
				name: 'Dolgrim Tactics',
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
				details: 'The dolgrim warrior shifts 1 square.',
				damage: 'The dolgrim warrior shifts 1 square',
				category: 5
			},
			{
				id: '8717adaa-5a5b-4fef-b5dd-a890a8446cdf',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A dolgrim warrior deals 1d6 extra damage against any creature granting combat advantage to it.',
				damage: 'a dolgrim warrior deals 1d6 extra damage against any creature granting combat advantage to it',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Small aberrant humanoid'
	},
	{
		id: '3973b5a4-2694-420e-9337-22a173006e28',
		name: 'Dragonborn Spearfighter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Any',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +11, Athletics +12, Intimidate +16',
		equipment: 'scale armor; tratnyr',
		category: 'Dragonborn',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 70,
		initiative: 8,
		ac: 20,
		fortitude: 19,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '736b5c3a-f4e9-49c0-a3dd-b598acfdf2b7',
				name: 'Tratnyr',
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
				details: '(+12 while bloodied)1d8+6 damage, and the spearfighter shifts 2 squares.',
				damage: '(+12 while bloodied)1d8+6 damage',
				category: 1
			},
			{
				id: '2b00df24-bc26-482a-949a-b2b4887749a4',
				name: 'Tratnyr',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '(+12 while bloodied)1d8+6 damage, and the spearfighter shifts 2 squares.',
				damage: '(+12 while bloodied)1d8+6 damage',
				category: 1
			},
			{
				id: '03bbe026-c359-4682-8ec7-48e1954481a1',
				name: 'Tripping Tratnyr',
				action: {
					action: 1,
					trigger: 'requires a tratnyr',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 10 or melee',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '(+12 while bloodied)1d8+6 damage, and the target is knocked prone.',
				damage: '(+12 while bloodied)1d8+6 damage',
				category: 5
			},
			{
				id: '2d1131c3-cace-4374-ad9d-65fac39f54a1',
				name: 'Dragon Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '(+11 while bloodied)1d6+5 lightning damage.',
				damage: '(+11 while bloodied)1d6+5 lightning damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: '451cdfb7-5ba5-4a55-9e89-fd743f3ea8c5',
		name: 'Dragonhawk',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount',
		level: 8,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '3, fly 12, overland flight 15',
		alignment: 'Unaligned',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 108,
		initiative: 4,
		ac: 20,
		fortitude: 22,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ec7deb1-c72c-4783-a18b-4e0ee7ae0eda',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the dragonhawk slides the target 1 square.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'e7af94ad-5fd8-4cc0-8617-590a9402d06f',
				name: 'Uncanny Instincts',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 8th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonhawk’s rider rolls initiative twice and uses the higher result. In addition, the rider gains a +2 bonus to Perception checks.',
				damage: 'the rider gains a +2 bonus to Perception checks',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Brute',
		phenotype: 'Large natural beast (mount)'
	},
	{
		id: '8956e749-ad3f-4608-9225-bf93b9858301',
		name: 'Dreaming Dark Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'inspired',
		level: 14,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Quori, telepathy 10',
		skills: 'Bluff +18, Diplomacy +18, Insight +17, Intimidate +18, Stealth +17',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 276,
		initiative: 14,
		ac: 30,
		fortitude: 25,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: '50223539-1de0-4828-8746-7cc1bf443112',
				name: 'Repulsion',
				keywords: '',
				details: 'aura 3; while a Dreaming Dark assassin is bloodied, each enemy (including a flying enemy) treats the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: 'bfd4a5f8-73e1-4f3a-bde4-d8168ced02e6',
				name: 'Nightmare Touch',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d8+5 damage, and ongoing 10 psychic damage (save ends).',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'c3ab5bc9-f6e9-468c-a5f8-eb1082692682',
				name: 'Nightmare Flurry',
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
				details: 'The assassin makes two nightmare touch attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a2176c0b-8aa4-4bdd-b24c-92f94cf8ee0b',
				name: 'Slayer’s Puppets',
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
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends).',
				damage: '',
				category: 3
			},
			{
				id: 'e0b5fda3-c09b-4bd4-993c-a8d35968ceba',
				name: 'Primal Fear',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies taking ongoing psychic damage; 1d8+5 psychic damage, and the target is dazed (save ends).',
				damage: 'targets enemies taking ongoing psychic damage',
				category: 1
			},
			{
				id: '0dce6f2a-0446-4108-9f71-63f21af9b0d1',
				name: 'Psychic Escape',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic, Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '3d8+5 psychic damage. The assassin teleports 10 squares after the attack.',
				damage: '3d8+5 psychic damage',
				category: 1
			},
			{
				id: 'e80f8678-237e-4078-a92d-5799667ab421',
				name: 'Dual Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any creature that attacks an assassin’s Will must make two attack rolls and use the lower result.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (inspired)'
	},
	{
		id: '5569f118-f624-4cb5-9e2e-2b440cd6a2ff',
		name: 'Dreaming Dark Thoughtstealer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'inspired',
		level: 10,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12; truesight 6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Quori, telepathy 10',
		skills: 'Bluff +14, Insight +12, Stealth +13, Streetwise +14, Thievery +14',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 164,
		initiative: 13,
		ac: 26,
		fortitude: 22,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5e285234-cfe7-4056-b64b-4181064055f5',
				name: 'Mindblade',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and ongoing 5 psychic damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'bedd7529-7a47-4658-8203-eeb7482cd009',
				name: 'Thought Theft',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'no attack roll; until the end of the thoughtstealer’s next turn, the thoughtstealer gains a +5 bonus to AC and Reflex against attacks made by the target, and a +5 bonus to Insight checks against the target.',
				damage: 'the thoughtstealer gains a +5 bonus to AC and Reflex against attacks made by the target',
				category: 3
			},
			{
				id: '63854d9f-1b20-44c4-9a43-b7f505c5d0d1',
				name: 'Cloud Minds',
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
				attack: null,
				description: '',
				details: 'no attack roll; each enemy within the burst suffers the effect of thought theft until the end of the thoughtstealer’s next turn.',
				damage: '',
				category: 1
			},
			{
				id: '4e339a41-91f2-49d0-96e4-6377b3d9f6db',
				name: 'Mindblade Whirlwind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'targets enemies under the effect of thought theft; 2d6+5 damage, and ongoing 5 psychic damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '71f2ae04-5e7b-46f5-8c6f-93f950b34932',
				name: 'Weakness Revealed',
				action: null,
				keywords: '',
				condition: '',
				range: 'A thoughtstealer’s melee attacks deal 2d6 extra damage against any target under the effect of thought theft.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '60e2d59f-17a5-49b8-b79a-e43eccefb226',
				name: 'Dual Mind',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any creature that attacks a thoughtstealer’s Will must make two attack rolls and use the lower result.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Lurker',
		phenotype: 'Medium natural humanoid (inspired)'
	},
	{
		id: 'b3b7cce8-c296-41d4-a1da-c0e9bccb4470',
		name: 'Drow Stingblade',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '8, climb 6 (spider climb)',
		alignment: 'Unaligned',
		languages: 'Giant',
		skills: 'Nature +15',
		equipment: 'xen’drik boomerang',
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
			score: 25,
			modifier: 7,
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 138,
		initiative: 16,
		ac: 28,
		fortitude: 22,
		reflex: 26,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd62ae458-231c-4c37-b25e-69ebba7adb46',
				name: 'Stingblade',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '01a7d21a-61e8-45d8-a649-2d34c2dca9c9',
				name: 'Xen’drik Boomerang',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage, and ongoing 5 poison damage (save ends).',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '109bf4d4-8172-43df-a10f-c9d4582cbefc',
				name: 'Whirling Dervish',
				action: {
					action: 1,
					trigger: 'requires a stingblade',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The drow stingblade shifts 4 squares, making a stingblade attack within each square it shifts into against an enemy within reach.',
				damage: 'The drow stingblade shifts 4 squares',
				category: 5
			},
			{
				id: '38162027-93c3-430a-8b0c-e0b4ff6d1d72',
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
				details: 'until the end of the drow stingblade’s next turn, the target grants combat advantage to all attackers and cannot benefi t from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '9b358579-8e66-4bb7-8c0c-9bbc79078a23',
				name: 'Battle Dancer',
				action: null,
				keywords: '',
				condition: '',
				range: 'If, on its turn, a drow stingblade ends its move at least 4 squares away from its starting position, it deals 2d6 extra damage on its melee and ranged attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
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

		info: 'Level 14 Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'f31bb7ff-9b60-4d58-9f93-f78097a5492e',
		name: 'Durastoran the Wyrmbreaker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 29,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +26; darkvision, truesight 10',
		movement: '8, teleport 6',
		alignment: 'Evil',
		languages: 'Common, Abyssal, Draconic, Elven, Giant',
		skills: 'Arcana +27, Bluff +28, Diplomacy +28, History +27, Insight +26, Intimidate +28, Religion +27, Stealth +26, Streetwise +28',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		hp: 466,
		initiative: 21,
		ac: 44,
		fortitude: 41,
		reflex: 43,
		will: 44,
		regeneration: {
			value: 15,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '6567b2e6-57da-4f96-a793-6d22c694a0bd',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage, and the target is stunned until the end of Durastoran’s next turn.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '5a5e84c6-8be9-4486-9c34-8348d3d06edc',
				name: 'Deceiving Lure',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'Durastoran slides the target 5 squares and the target makes a basic attack as a free action against a target of Durastoran’s choice at the end of the move (if possible).',
				damage: 'Durastoran slides the target 5 squares and the target makes a basic attack as a free action against a target of Durastoran’s choice at the end of the move (if possible)',
				category: 1
			},
			{
				id: '7dcf0a3d-f712-4d96-b4a4-3d61a7d1d5b7',
				name: 'Frightful Phantom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: '5d10+7 psychic damage, Durastoran pushes the target 5 squares, and the target is stunned (save ends). Miss: Half damage, and the target is dazed (save ends).',
				damage: '5d10+7 psychic damage',
				category: 1
			},
			{
				id: 'ed3fda99-702f-47f7-b747-f7400c21f71d',
				name: 'Terrifying Visions',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: '4d6+9 psychic damage, and the target is dazed (save ends). First Failed Saving Throw: The target is stunned (save ends).',
				damage: '4d6+9 psychic damage',
				category: 1
			},
			{
				id: '15ad1427-c1d7-4dec-aca4-b07e60c74799',
				name: 'Deadly Phantom',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of Durastoran’s next turn, an enemy that attacks his AC or Reflex must make two attack rolls and use the lower result. If the attack misses, the attacker hits itself with the attack.',
				damage: '',
				category: 3
			},
			{
				id: '6e44a411-e187-4713-a7ec-d33a351c0581',
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
				details: 'Durastoran disguises himself to appear as any Medium humanoid. A successful Insight check (opposed by Durastoran’s Bluff check) pierces the disguise.',
				damage: '',
				category: 3
			},
			{
				id: 'aa2e8566-283d-438e-be2f-d5576fe86660',
				name: 'Prophetic Foreknowledge',
				action: {
					action: 5,
					trigger: 'when an enemy hits durastoran',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering enemy’s successful attack against Durastoran instead fails.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			}
		],
		resist: '20/variable (3/encounter)',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 29 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '8bc28885-d0bb-413f-9479-3dda3187064f',
		name: 'Elemental Drudge',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +18',
		movement: '6, swim 6',
		alignment: 'Chaotic evil',
		languages: '(understands Common and Primordial)',
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
			score: 24,
			modifier: 7,
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 18,
		ac: 35,
		fortitude: 36,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c3c0cf24-e0bc-4dab-97c4-9e3abda259cc',
				name: 'Slam',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '7 damage, and ongoing 2 cold damage (save ends). This ongoing cold damage stacks with that of other drudges, to a maximum of ongoing 10 cold damage (a single save ends all).',
				damage: '7 damage',
				category: 1
			},
			{
				id: 'a25b214e-624b-4b48-8f6a-07a6075188cc',
				name: 'Elemental Dissipation',
				action: null,
				keywords: 'Cold, Fire, Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 24,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 10 cold, fire, and lightning damage.',
				damage: 'and lightning damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			},
			{
				type: 3,
				value: -20
			},
			{
				type: 5,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '173dafca-d18d-496b-bd98-30a6c907b692',
		name: 'Eliza Finch',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Bluff +10',
		equipment: 'crossbow; crossbow bolts (20); leather armor; short sword',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 69,
		initiative: 9,
		ac: 20,
		fortitude: 19,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5cf15a7e-cb5d-4e25-9e3b-3b9b0233d8e9',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '0af21322-e261-47e7-a415-91707df1663d',
				name: 'Crossbow',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '4ff79f0d-81eb-4822-ab11-819d21906235',
				name: 'Poison Shard',
				action: {
					action: 1,
					trigger: 'requires a crossbow',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target takes ongoing 5 poison damage.',
				damage: '2d6+5 damage',
				category: 5
			},
			{
				id: '78b89bda-e7bb-4ead-ad62-e1a78136844d',
				name: 'Hole in the World',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Teleportation, Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '3d10+5 cold damage, and the target falls briefly through a gap between the planes, disappearing (removed from play) until the end of Eliza’s next turn, then reappearing in the same square (or the closest unoccupied square). Aftereffect: After reappearing, the target is dazed until the start of its next turn.',
				damage: '3d10+5 cold damage',
				category: 1
			},
			{
				id: '100a07f1-52f6-4a2f-82e8-68ebc8f9c6d5',
				name: 'Back Off!',
				action: {
					action: 5,
					trigger: 'when an enemy shifts or moves adjacent to eliza',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Eliza shifts 2 squares and makes a crossbow attack against the triggering enemy.',
				damage: 'Eliza shifts 2 squares and makes a crossbow attack against the triggering enemy',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Artillery',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'c340c193-24c1-4d13-be42-b0e4000bc0e3',
		name: 'Emerald Claw Knight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +7',
		equipment: 'flail; heavy shield; scale armor',
		category: 'Emerald Claw',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 46,
		initiative: 3,
		ac: 20,
		fortitude: 16,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e6402be4-64c6-47e2-8622-7bfa1967cd6c',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage, and the target is marked until the end of the Emerald Claw knight’s next turn.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '9e677a0a-770d-4a7e-b63a-8a28c425202c',
				name: 'Smashing Strike',
				action: {
					action: 1,
					trigger: 'requires flail',
					sustainAction: 0,
					use: 1,
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
				details: '1d10+4 damage, the knight slides the target 1 square, and the target is marked until the end of the knight’s next turn.',
				damage: '1d10+4 damage',
				category: 5
			},
			{
				id: '9c4fd47f-0ef9-4e36-ae53-d26a59257ded',
				name: 'Fanatic',
				action: {
					action: 1,
					trigger: 'requires a flail',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The Emerald Claw knight makes a melee basic attack against an adjacent enemy.',
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

		info: 'Level 3 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '73598343-4453-4282-81ff-e1bcfbbb391c',
		name: 'Emerald Claw Marshal',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +9, Streetwise +9',
		equipment: 'heavy flail; plate armor',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 62,
		initiative: 4,
		ac: 21,
		fortitude: 19,
		reflex: 17,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '82b4742e-62ab-4579-8a0a-a7696590f45c',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d6+4 damage, and the target is marked until the end of the Emerald Claw marshal’s next turn.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'f0ff4fa4-836f-49b3-8024-b495b2089372',
				name: 'Crushing Strike',
				action: {
					action: 1,
					trigger: 'requires a heavy flail',
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
				details: 'Targets a creature marked by the Emerald Claw marshal; 2d6+4 damage, the marshal slides the target 2 squares, and the target is slowed (save ends).',
				damage: '2d6+4 damage',
				category: 5
			},
			{
				id: 'bf29527f-2d0a-48da-855f-09d0a1a47f3d',
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
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'each ally within the burst shifts 1 square and gains a +2 bonus to the damage roll of its next attack made before the end of its next turn.',
				damage: 'each ally within the burst shifts 1 square and gains a +2 bonus to the damage roll of its next attack made before the end of its next turn',
				category: 5
			},
			{
				id: 'a5744a28-98fe-4050-8b56-842d0a5f6abe',
				name: 'Merciless Commander',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target immediately provokes an opportunity attack from an adjacent enemy. If that opportunity attack hits, the Emerald Claw marshal or an ally makes a melee basic attack against the attacker.',
				attack: null,
				description: '',
				details: 'Targets an ally within 10 squares',
				damage: 'Targets an ally within 10 squares',
				category: 3
			},
			{
				id: '9b539e6a-e1a8-4313-bde2-e60244a4a3e3',
				name: 'Fanatic',
				action: {
					action: 1,
					trigger: 'requires heavy flail',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The Emerald Claw marshal makes a melee basic attack against an adjacent enemy.',
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

		info: 'Level 5 Skirmisher (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '337e3dc9-f866-4957-8ab4-554f601413b0',
		name: 'Emerald Claw Sergeant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +1',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +7',
		equipment: 'crossbow; crossbow bolts (20); flail; heavy shield; scale armor',
		category: 'Emerald Claw',
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
		hp: 37,
		initiative: 4,
		ac: 16,
		fortitude: 14,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bbfca235-faf0-440c-aa9a-1a3361ce4e25',
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
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d10+1 damage, and one of the Emerald Claw sergeant’s allies within 5 squares of it can shift 1 square.',
				damage: '1d10+1 damage',
				category: 1
			},
			{
				id: 'ef7abe1c-b6ed-42af-8b2a-ad3119209ec9',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '787e1745-8f91-43ae-aecc-11ad889a2977',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'An Emerald Claw sergeant deals 1d6 extra damage on melee and ranged attacks against any creature granting combat advantage to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '7ba61e5a-2cb1-4724-b84f-3b83840051b5',
				name: 'Fanatic',
				action: {
					action: 4,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Emerald Claw sergeant makes a basic attack against an enemy that is adjacent to it.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'cc924bcc-0363-4696-ad6d-13c4347e4800',
		name: 'Emerald Claw Trooper',
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
		senses: 'Perception +2',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'chainmail; flail; heavy shield',
		category: 'Emerald Claw',
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
		initiative: 1,
		ac: 18,
		fortitude: 16,
		reflex: 13,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'db8c0b9f-74a0-45f1-8782-f50cc65fac51',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '3e863536-f304-4078-bceb-71626995da94',
				name: 'Fanatic',
				action: {
					action: 4,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires a flail',
				range: '',
				attack: null,
				description: '',
				details: 'The Emerald Claw trooper makes a melee basic attack against an adjacent enemy.',
				damage: '',
				category: 5
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
		id: '4511f1f5-b188-4815-9cad-35e286c5fa43',
		name: 'Empress Donata',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'magebred',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic, Elven, Goblin',
		skills: 'Arcana +17, Bluff +18, Diplomacy +18, Insight +12, Nature +12',
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
			score: 20,
			modifier: 5,
			cost: -1
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
		hp: 280,
		initiative: 11,
		ac: 30,
		fortitude: 26,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: '8d8a5325-d626-434b-855b-0cbf22dbc756',
				name: 'Close Attachment',
				keywords: '',
				details: 'aura 3; each ally that starts its turn within the aura can shift 1 square as a minor action instead of as a move action.'
			}
		],
		powers: [
			{
				id: '24474392-9895-47c5-83e2-8d0d2ff2c426',
				name: 'Unarmed Throw',
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
				details: '2d6+6 damage, Empress Donata slides the target 3 squares, and the target is knocked prone.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '24554a10-c8ee-4c80-949d-542271778e5e',
				name: 'Dominating Murmur',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'targets one enemy in the burst; the target is dominated until the end of Empress Donata’s next turn. A creature dominated in this way is considered an ally with regard to Empress Donata’s other powers.',
				damage: '',
				category: 1
			},
			{
				id: 'cb6e22d6-2db6-4814-972c-f611c3a33b7e',
				name: 'Perfect Command',
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
				details: 'an ally in the burst makes a basic attack as a free action. Empress Donata cannot use this power on the same creature more than once in a round.',
				damage: '',
				category: 3
			},
			{
				id: '698058a3-ff95-4c65-9218-9647365a5f7d',
				name: 'Extreme Devotion',
				action: {
					action: 5,
					trigger: 'when empress donata is attacked',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An ally within 3 squares of Empress Donata shifts 3 squares, ending the move adjacent to her. Empress Donata gains a +4 bonus to all defenses against the triggering attack. If the attack misses Empress Donata, it instead hits the ally who shifted adjacent to her.',
				damage: 'An ally within 3 squares of Empress Donata shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (magebred)'
	},
	{
		id: '12b04927-aef1-4dbd-8f4c-5546c3f4143f',
		name: 'Fading Dream Fearmonger',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'eladrin',
		level: 16,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Bluff +20, Intimidate +25, Stealth +18, Thievery +18',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 122,
		initiative: 13,
		ac: 28,
		fortitude: 27,
		reflex: 27,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44cf7c99-d2cd-4dd4-8e0e-bc0e5cd4dc79',
				name: 'Dreamblade',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target takes ongoing 5 psychic damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '252586d8-f0b5-4d86-ac1c-cd9881ac600b',
				name: 'Nightmare Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '1d8+5 psychic damage, the fearmonger pushes the target 3 squares, and the target takes ongoing 5 psychic damage (save ends).',
				damage: '1d8+5 psychic damage',
				category: 1
			},
			{
				id: '89c7dcc8-14e2-426f-8dd1-02e352f72b1f',
				name: 'Humbling Terror',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'targets a creature taking ongoing psychic damage; 3d10+7 psychic damage, and the target is knocked prone (save ends).',
				damage: 'targets a creature taking ongoing psychic damage',
				category: 1
			},
			{
				id: '9cd50826-4a70-4368-813d-788a01bcbc43',
				name: 'Terrifying Vision',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'targets a creature taking ongoing psychic damage; 2d8+7 psychic damage, and the target is dazed (save ends).',
				damage: 'targets a creature taking ongoing psychic damage',
				category: 1
			},
			{
				id: 'b3c45a1b-d38d-43f1-954b-1fb2a533e8bb',
				name: 'Dark Step',
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
				details: 'The Fading Dream fearmonger teleports 5 squares and gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The Fading Dream fearmonger teleports 5 squares and gains a +2 bonus to all defenses until the end of its next turn',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 16 Artillery',
		phenotype: 'Medium fey humanoid (eladrin)'
	},
	{
		id: '2a51c7c1-8dbb-4edd-9a8e-fc8d061a814c',
		name: 'Fastieth',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '10',
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
		hp: 36,
		initiative: 5,
		ac: 16,
		fortitude: 15,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5e73e8f4-fdba-4bd4-abcf-8886af9578f3',
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
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '3c297c0a-ba06-44ac-853f-dfad0b8b2601',
				name: 'Fastieth Burst',
				action: {
					action: 2,
					trigger: 'while mounted by a friendly rider of 2nd level or higher',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Mount',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The fastieth shifts 4 squares.',
				damage: 'The fastieth shifts 4 squares',
				category: 5
			},
			{
				id: 'b18f1316-7b7f-4ef1-8ac1-9432e2269f08',
				name: 'Medium Steed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Medium creature can ride a fastieth.',
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
		phenotype: 'Medium natural beast (mount, reptile)'
	},
	{
		id: 'd1c19d4c-cb09-4e2c-b148-767e5bf11394',
		name: 'Finch Household Guard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: '',
		equipment: 'chainmail; longsword',
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
			score: 15,
			modifier: 2,
			cost: 7
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
		hp: 1,
		initiative: 6,
		ac: 22,
		fortitude: 20,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd74e3616-92ad-4e15-83f7-514c16706a37',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '52e283bb-a3dd-4ae0-9208-7d20fa11d2e6',
				name: 'Weight of Numbers',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If two or more Finch household guards hit the same target in the same round, the second attack also slows the target until the end of the second attacker’s next turn.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '1f409e41-d826-4f7b-a783-fef87a7f9e2c',
		name: 'Ghalerath',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech, Giant',
		skills: '',
		equipment: '',
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
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 90,
		initiative: 7,
		ac: 22,
		fortitude: 20,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'c15140e3-42dd-4ad7-875c-1b464e262b1f',
				name: 'Aberrant Endurance',
				keywords: '',
				details: 'aura 3; each ally within the aura gains a +2 bonus to saving throws.'
			}
		],
		powers: [
			{
				id: '4b47a9bb-f101-4dcf-b17c-1b946494bf71',
				name: 'Withering Touch',
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
				details: '1d8+7 necrotic damage, and the target is weakened until the end of its next turn.',
				damage: '1d8+7 necrotic damage',
				category: 1
			},
			{
				id: '978bc3ab-a8bd-4bf3-a0ae-d00302d2906e',
				name: 'Dire Radiance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Radiant',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '2d6+4 radiant damage, and if the target ends its next turn within 3 squares of Ghalerath it takes 10 psychic damage.',
				damage: '2d6+4 radiant damage',
				category: 1
			},
			{
				id: '7f525b51-ac46-4036-881a-eeb59b38b82f',
				name: 'Wracking Word',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d8+3 psychic damage, and the target is dazed (save ends). Aftereffect: The target takes a -2 penalty to attack rolls (save ends).',
				damage: '2d8+3 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '4aa241f0-34f5-4a38-8dae-00f443f1829a',
		name: 'Ghallanda Enclave Guard',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'halfling',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Insight +9',
		equipment: 'arrow; longsword; plate armor; shortbow',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 58,
		initiative: 9,
		ac: 21,
		fortitude: 17,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3874fa65-35eb-4f70-a0cd-9f33cb633aca',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage, and the target is marked until the end of the Ghallanda enclave guard’s next turn. One ally adjacent to the target regains 3 hit points.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'a047096e-6561-401b-9bf1-7b2514e3f862',
				name: 'Shortbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, and the target is marked until the end of the Ghallanda enclave guard’s next turn. One ally adjacent to the target regains 3 hit points.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '7b53e6d0-1b91-43b1-97b8-2dbc9a42b2eb',
				name: 'Advantageous Ground',
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
				details: 'The Ghallanda enclave guard and all allies adjacent to him or her gain a +2 bonus to all defenses until the end of the guard’s next turn.',
				damage: 'The Ghallanda enclave guard and all allies adjacent to him or her gain a +2 bonus to all defenses until the end of the guard’s next turn',
				category: 3
			},
			{
				id: '45e812be-d30f-4b57-86d5-b7e604ab48c6',
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
				id: '7d73c713-811c-4dc6-9e64-4957042f073b',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the enclave guard is hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker must make a new attack roll and use the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier (L)',
		phenotype: 'Small natural humanoid (halfling)'
	},
	{
		id: 'ee052412-394c-42de-880f-64ecc0a2817d',
		name: 'Glidewing',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5, fly 10, overland flight 15',
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
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 77,
		initiative: 9,
		ac: 22,
		fortitude: 19,
		reflex: 20,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4f8d683c-dde6-4541-8c83-ca5558a62e26',
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
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'ee848399-8d52-4ce2-9015-3e86a6aa97c1',
				name: 'Diving Smash',
				action: {
					action: 1,
					trigger: 'usable only while flying',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The glidewing charges and gains a +2 bonus to its attack roll instead of the normal +1 bonus. It shifts 2 squares after the charge.',
				damage: 'The glidewing charges and gains a +2 bonus to its attack roll instead of the normal +1 bonus',
				category: 5
			},
			{
				id: 'fb14d177-fd60-4e3c-b7ba-4a862fa911c1',
				name: 'Aerial Agility',
				action: null,
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 7th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'While flying, a glidewing grants its rider a +1 bonus to all defenses.',
				damage: 'a glidewing grants its rider a +1 bonus to all defenses',
				category: 0
			},
			{
				id: '058851f0-2ee6-4da6-bd74-f4cbacd61e45',
				name: 'Catch the Wind',
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
				details: 'The glidewing gains hover until the end of its next turn.',
				damage: '',
				category: 4
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Large natural beast (mount, reptile)'
	},
	{
		id: '5ab19004-e69f-404f-9010-3cd944be7311',
		name: 'Goblin Archer',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 1,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6, fly 8 (soarsled)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +10, Thievery +10',
		equipment: 'arrow; leather armor; short sword; shortbow',
		category: 'Goblin',
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
		hp: 29,
		initiative: 5,
		ac: 17,
		fortitude: 13,
		reflex: 15,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '316c318a-c1ef-4285-b7fe-4dec8687329b',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage.',
				damage: '1d6+2 damage',
				category: 1
			},
			{
				id: '17726df6-e539-4160-a7dc-021f031e477d',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'cc813ff0-8a01-4c9b-b134-d6c0133b1866',
				name: 'Mobile Ranged Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'at any point during that movement, it makes one ranged attack without provoking an opportunity attack.',
				attack: null,
				description: '',
				details: 'The goblin archer can move up to half its speed',
				damage: '',
				category: 1
			},
			{
				id: '05019a8f-9cff-416e-a5f4-885e5bab46fc',
				name: 'Great Position',
				action: null,
				keywords: '',
				condition: '',
				range: 'If, on its turn, the goblin archer ends its move at least 4 squares away from its starting position, it deals 1d6 extra damage on its ranged attacks until the start of its next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '34eb5a6b-157b-4e61-a352-d90dff90e88c',
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
				details: 'The goblin shifts 1 square. (A goblin archer can’t shift while flying on its soarsled.)',
				damage: 'The goblin shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Skirmisher',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: '1b4f15fa-3c50-4cdc-94c1-7f2e02ebd6ac',
		name: 'Gorodan Ashlord',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'giant',
		level: 17,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +13',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven, Giant, Goblin',
		skills: 'Arcana +13, History +13, Insight +14, Intimidate +17',
		equipment: 'scale armor; waraxe',
		category: '',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 334,
		initiative: 15,
		ac: 35,
		fortitude: 32,
		reflex: 28,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4472a84e-13e2-4034-9701-caf3d1bf46d2',
				name: 'Basic Attack Blazing Waraxe',
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
				details: 'Reach 2; 2d6+8 damage, ongoing 10 fire damage (save ends), and the target is marked until the end of Gorodan’s next turn.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'c82a917c-3c6f-4203-950f-658517fd23e0',
				name: 'Axe Flurry',
				action: {
					action: 1,
					trigger: 'requires a waraxe',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Gorodan makes two blazing waraxe attacks.',
				damage: '',
				category: 5
			},
			{
				id: '6c6177a4-fa11-4816-aea1-aa115e69447a',
				name: 'Blazing Axestorm',
				action: {
					action: 1,
					trigger: 'requires a waraxe; recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Weapon',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d6+8 damage, ongoing 5 fire damage (save ends), and the target is marked until the end of Gorodan’s next turn.',
				damage: '2d6+8 damage',
				category: 5
			},
			{
				id: '60184bec-3f9b-4d64-8901-f7ded3ce650c',
				name: 'Burning Wave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '1d8+7 fire damage, and ongoing 5 fire damage (save ends).',
				damage: '1d8+7 fire damage',
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

		info: 'Level 17 Elite Soldier (L)',
		phenotype: 'Large elemental humanoid (giant)'
	},
	{
		id: '0529eaee-e182-4aa2-93fb-085910609a54',
		name: 'Half-Orc Archer',
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
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Endurance +5, Intimidate +8, Stealth +10',
		equipment: 'arrows (30); handaxe; leather armor; longbow',
		category: 'Half-Orc',
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
		hp: 38,
		initiative: 7,
		ac: 17,
		fortitude: 13,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7bc562b4-6e57-407c-8fcb-c55028d93f3d',
				name: 'Handaxe',
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
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: 'dc1d21d5-35e0-4847-8030-956da6c77a33',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'bff0aa7a-29d4-47ca-aafe-fff1f3236e5f',
				name: 'Furious Assault',
				action: {
					action: 7,
					trigger: 'when the half-orc archer hits an enemy',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attack deals 1d6 extra damage if it was a handaxe attack or 1d10 extra damage if it was a longbow attack.',
				damage: 'the triggering attack deals 1d6 extra damage if it was a handaxe attack or 1d10 extra damage if it was a longbow attack',
				category: 5
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
		id: 'd2d0f4ed-e2db-49c2-89fa-34a3521dcccb',
		name: 'Hand of Orien',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +9, Insight +11',
		equipment: 'dagger',
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
		hp: 77,
		initiative: 5,
		ac: 21,
		fortitude: 18,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dd3a2d94-e2c6-4346-aefe-bb797e983cd3',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage.',
				damage: '1d4+2 damage',
				category: 1
			},
			{
				id: '74ce68c3-1c1a-4f49-9c81-1ba4db00f5df',
				name: 'Disrupting Warp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '2d6+5 force damage, and the Hand of Orien teleports the target 1 square.',
				damage: '2d6+5 force damage',
				category: 1
			},
			{
				id: 'a8f3e1a5-f95d-4195-93b7-dbe253ccc7e2',
				name: 'Painful Jaunt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '3d8+5 damage, and the Hand of Orien causes the target and one ally within range to swap positions.',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: 'd3203bdb-ac84-4ac8-8afc-852953b457c0',
				name: 'Temporal Disruption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'the target is dazed and slowed (save ends both). Aftereffect: The target is slowed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '7dd3e654-497b-46ad-9b22-d705ca1c8376',
				name: 'Dimension Hop',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Hand of Orien teleports 3 squares an gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The Hand of Orien teleports 3 squares an gains a +2 bonus to all defenses until the start of its next turn',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'f1a8e78f-8991-4cc2-ad06-e59e00d2bf34',
		name: 'High Cardinal Krozen',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 10,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +16, History +13, Insight +15, Religion +13',
		equipment: 'holy symbol; mace',
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
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 214,
		initiative: 5,
		ac: 26,
		fortitude: 24,
		reflex: 22,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'acb7aca2-0231-42fa-a6c2-2cabec80fc8a',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d8+4 damage, and the target takes a -2 penalty to attack rolls (save ends).',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: 'a40f6b6d-c5bd-48b1-afdc-f9c6c6eb0d76',
				name: 'Condemnation of the Nonbeliever',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fear, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target is stunned until the end of Krozen’s next turn, and two of Krozen’s allies within 5 squares of the target gain 10 temporary hit points.',
				damage: 'and two of Krozen’s allies within 5 squares of the target gain 10 temporary hit points',
				category: 1
			},
			{
				id: '422b0b5e-b0cb-41c6-98f6-1d0886873fbb',
				name: 'Enthralling Presence',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm, Gaze, Implement',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target is dazed (save ends). First Failed Saving Throw: The target is dazed and immobilized (save ends both).',
				damage: '',
				category: 3
			},
			{
				id: '3957c998-171c-48a4-8fba-dff74a34bfd2',
				name: 'Righteous Conflagration',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Implement, Radiant',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d6+3 fire and radiant damage, and ongoing 5 fire and radiant damage (save ends). Miss: Half damage, and no ongoing damage.',
				damage: '1d6+3 fire and radiant damage',
				category: 1
			},
			{
				id: 'ae2d6d80-281c-4bb3-ae3f-8e213bb463ad',
				name: 'Burden of Faith',
				action: {
					action: 5,
					trigger: 'when krozen is hit by an attack with at least one effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Krozen applies all effects from the triggering attack that a save can end to an ally within 5 squares.',
				damage: 'Krozen applies all effects from the triggering attack that a save can end to an ally within 5 squares',
				category: 5
			},
			{
				id: 'e8e5b233-6b9c-4048-b76b-fc7941577ae6',
				name: 'Burden of Devotion',
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
				details: 'Krozen transfers a marked condition to an ally he can see within 5 squares.',
				damage: 'Krozen transfers a marked condition to an ally he can see within 5 squares',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '42b18a3c-6862-4653-84cc-0b08fa41ff35',
		name: 'Hilt or Pommel',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'construct, homunculus',
		level: 18,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +19',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
			cost: -1
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
		hp: 169,
		initiative: 16,
		ac: 32,
		fortitude: 31,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3b3bb0cb-c253-43c2-ba49-3eec8b3cc1d0',
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
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '562f44f3-4fb5-4367-b602-f6672818f625',
				name: 'Metallic Roar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '3d8+8 thunder damage, and the target is dazed until the end of the attacking homunculus’s next turn.',
				damage: '3d8+8 thunder damage',
				category: 1
			},
			{
				id: 'ec19f017-bca7-42cb-84f8-cdf8b46c1235',
				name: 'Bladed Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Hilt or Pommel deals 1d6 + 3 damage to any creature that grabs it. A creature that continues to grab the homunculus takes 1d6 + 3 damage at the start of its turn.',
				damage: 'hilt or pommel deals 1d6 + 3 damage to any creature that grabs it',
				category: 0
			},
			{
				id: '186c44db-b1b1-4d5c-81d7-4456e413cceb',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Hilt or Pommel has combat advantage against any target that has one of their allies adjacent to it. Whenever Hilt or Pommel hits a target it has combat advantage against, it knocks the target prone, and can then shift 1 square as a free action.',
				damage: 'and can then shift 1 square as a free action',
				category: 0
			},
			{
				id: '1b652807-7c35-4bce-aa4a-660348c76ffb',
				name: 'Guard Anything',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Hilt or Pommel can be assigned to guard an area, object, or creature. It receives a +2 bonus to attack rolls and damage rolls against enemies within its guarded area, attacking its guarded creature, or carrying its guarded object.',
				damage: 'it receives a +2 bonus to attack rolls and damage rolls against enemies within its guarded area',
				category: 0
			},
			{
				id: '5b0fa225-c536-4db9-b92e-8e6b81dd7375',
				name: 'Shifty Charger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Hilt or Pommel can shift 1 square after charging.',
				damage: 'Hilt or Pommel can shift 1 square after charging',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 18 Skirmisher',
		phenotype: 'Medium natural humanoid (construct, homunculus)'
	},
	{
		id: 'ea485245-17f4-4774-a0f8-d9f986197988',
		name: 'Hobgoblin Dirge Singer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Draconic, Goblin',
		skills: 'Diplomacy +12, History +11, Insight +10',
		equipment: 'chainmail; longsword',
		category: 'Goblin',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 72,
		initiative: 4,
		ac: 20,
		fortitude: 18,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '13d1894f-a96e-4948-8d9d-755440ebe0a9',
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'fcb63045-9213-4e0a-a552-68f7dd1656ec',
				name: 'Grave Cry',
				action: {
					action: 1,
					trigger: 'requires a longsword',
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
				details: '1d8+6 damage, and the target takes a -1 penalty to all defenses against attacks by the dirge singer’s allies until the end of the dirge singer’s next turn.',
				damage: '1d8+6 damage',
				category: 5
			},
			{
				id: '5f9d4fbd-a8b1-4b0c-be12-5eaf9a494e43',
				name: 'Battle Chant',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'two allies within the burst shift 5 squares and make a melee basic attack as a free action. If an attack hits, the target of the attack is marked by the ally until the end of the dirge singer’s next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'b407db52-4a77-4e54-983f-49f598a6b2ac',
				name: 'Fateful Keening',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6 thunder damage, and the dirge singer pushes the target 2 squares. Effect: The dirge singer slides each ally in the blast 1 square.',
				damage: '2d6 thunder damage',
				category: 1
			},
			{
				id: '1b156971-4164-4dbb-bd07-8a57dc756589',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the hobgoblin dirge singer is subjected to an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dirge singer rolls a saving throw against the effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c40aa977-191b-427c-9c2b-5c7bb35d226f',
		name: 'Holy Uldra',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'halfling',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +11, Religion +12, Thievery +11',
		equipment: 'leather armor; talenta sharrash',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 89,
		initiative: 6,
		ac: 22,
		fortitude: 19,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '235e2ec7-47eb-44dc-a47b-4eff20ddf44d',
				name: 'Balinor’s Frenzy',
				keywords: '',
				details: 'aura 5; each ally that begins or ends a charge within the aura gains a +2 bonus to damage rolls.'
			}
		],
		powers: [
			{
				id: 'b4e52069-776c-4cbd-ba61-c9b1bf8bd3bd',
				name: 'Talenta Sharrash',
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
				details: '1d8+7 damage, and the target is immobilized until the end of Holy Uldra’s next turn.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '51daf78c-5b26-4a3f-bf70-87584c9812d3',
				name: 'Balinor’s Reaping',
				action: {
					action: 1,
					trigger: 'requires a talenta sharrash',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '(+13 against immobilized targets)2d6+7 damage, and the target is immobilized (save ends).',
				damage: '(+13 against immobilized targets)2d6+7 damage',
				category: 5
			},
			{
				id: '1d9928b5-9d59-4dfd-9bf6-5a51f218ee5c',
				name: 'Frenzy of the Hunt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Healing, Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: '1d10 psychic damage, and the target is immobilized and grants combat advantage to all attackers (save ends both). Holy Uldra and allies within the burst regain 5 hit points.',
				damage: '1d10 psychic damage',
				category: 1
			},
			{
				id: '0bbad6a1-bade-4cf2-8447-315394ca7f1d',
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
				id: 'c2945c58-58a8-4d19-824f-5e19044bdefe',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when holy uldra is hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker must make a second attack roll and use the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller (L)',
		phenotype: 'Small natural humanoid (halfling)'
	},
	{
		id: 'fde221ff-6790-4669-961f-929e2636b80c',
		name: 'Ikar the Black',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'half-orc',
		level: 9,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '5 (7 while charging)',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: 'Athletics +13, Diplomacy +12, Endurance +11, History +10',
		equipment: 'broadsword; light shield; scale armor',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 190,
		initiative: 8,
		ac: 26,
		fortitude: 24,
		reflex: 21,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '05fc0c6a-5f55-4d2f-8a8f-94e467e254c1',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage, and the target is marked until the end of Ikar’s next turn.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '95b65580-2d61-4a1e-ab9f-3c9aca998fa1',
				name: 'Junker’s Smash',
				action: {
					action: 3,
					trigger: 'requires a shield',
					sustainAction: 0,
					use: 1,
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
				details: '1d8+4 damage, and the target is knocked prone.',
				damage: '1d8+4 damage',
				category: 5
			},
			{
				id: '43309307-de11-419e-99c6-e2981f54d0c1',
				name: 'Fair Trade',
				action: {
					action: 7,
					trigger: 'when ikar is hit by an opportunity attack or an immediate action melee attack; requires a broadsword',
					sustainAction: 0,
					use: 0,
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
				details: '3d10+4 damage.',
				damage: '3d10+4 damage',
				category: 5
			},
			{
				id: '50816655-9158-405f-9bcb-6ebfd0c21fe9',
				name: 'Furious Assault',
				action: {
					action: 7,
					trigger: 'when ikar hits an enemy',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering attack deals 1d10 extra damage if it is a broadsword attack or 1d8 extra damage if it is a junker’s smash attack.',
				damage: 'the triggering attack deals 1d10 extra damage if it is a broadsword attack or 1d8 extra damage if it is a junker’s smash attack',
				category: 5
			},
			{
				id: '65eff68c-947d-4a25-8bfd-91d2696a9870',
				name: 'Half-Orc Resilience',
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
				details: 'Ikar gains 5 temporary hit points.',
				damage: 'Ikar gains 5 temporary hit points',
				category: 1
			},
			{
				id: '81609d03-2206-4bd9-9884-fca05c807230',
				name: 'Joint Venture',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable after ikar charges',
				range: '',
				attack: null,
				description: '',
				details: 'An ally with 10 squares makes a charge attack as a free action. That ally’s movement during the charge does not provoke opportunity attacks.',
				damage: 'An ally with 10 squares makes a charge attack as a free action',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (half-orc)'
	},
	{
		id: '9cc091ca-b8a4-47d2-ab40-bbcc4d21322d',
		name: 'Irristia Immiar',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Nature +13, Stealth +14',
		equipment: 'arrow; leather armor; rapier; shortbow',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 97,
		initiative: 11,
		ac: 25,
		fortitude: 20,
		reflex: 22,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6fae39a3-d225-4e2a-b5e9-bdd044c19544',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and the target is marked until the end of Irristia’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '4bc8f5d6-e2af-45a6-ade2-61c8f4f7a299',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage, and the target is marked until the end of Irristia’s next turn.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '09e440df-2a36-4c25-95a0-329403897aed',
				name: 'Twin Fang Charge',
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
				details: 'Irristia charges and then makes two rapier attacks.',
				damage: '',
				category: 1
			},
			{
				id: '36c91c0e-ccb2-4282-b268-3e6ff62b118c',
				name: 'Twin Fang Strike',
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
				details: 'Irristia makes two rapier attacks.',
				damage: '',
				category: 1
			},
			{
				id: '9c1a320c-ef55-4bbc-a8e4-a31f2f62ae51',
				name: 'Draw Attention',
				action: {
					action: 1,
					trigger: 'requires a shortbow',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '3d8+5 damage; the target is marked, and any creature currently marked by the target is no longer marked by the target.',
				damage: '3d8+5 damage',
				category: 5
			},
			{
				id: '282921e7-30d2-4b98-9d36-16a1f97502d3',
				name: 'Sustained Mark',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Irristia ends her turn adjacent to a target marked by her, that target remains marked until the end of her next turn.',
				damage: '',
				category: 0
			},
			{
				id: 'c58689e5-bf13-4dac-9ff5-ff33d5325a03',
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
				details: 'Irristia can reroll an attack roll. She must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '7b3cccdc-b64b-4da3-ab28-59d0f18a3c98',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Irristia ignores difficult terrain when she shifts.',
				damage: '',
				category: 0
			},
			{
				id: 'b0d04f1f-7ea3-4a9b-a028-fcdb56ce482a',
				name: 'Born in the Saddle',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Irristia bestows her wild step power on any mount she rides.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Soldier (L)',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '421e39ae-8cf8-480f-a34c-d510d3457641',
		name: 'Jhorash’tar Bloodspiller',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 6,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Endurance +11, Intimidate +8',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 84,
		initiative: 6,
		ac: 18,
		fortitude: 19,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '85397912-44c1-4dca-9639-35db12517233',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d12+7 damage (crit 1d12 + 19).',
				damage: '1d12+7 damage (crit 1d12 + 19)',
				category: 1
			},
			{
				id: 'd966dc7f-1dc1-4235-840f-e12f8d2fbf3e',
				name: 'Bloodspiller’s Strike',
				action: {
					action: 1,
					trigger: 'requires a gerataxe',
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
				details: '2d12 damage (crit 2d12 + 12), and ongoing 5 damage (save ends).',
				damage: '2d12 damage (crit 2d12 + 12)',
				category: 5
			},
			{
				id: '6a60d495-b697-4a04-a706-b781e6925b10',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: 'usable only while bloodied; requires a greataxe',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Jhorash’tar bloodspiller makes a greataxe attack and regains 21 hit points.',
				damage: 'The Jhorash’tar bloodspiller makes a greataxe attack and regains 21 hit points',
				category: 5
			},
			{
				id: '4c84d3c7-b592-445a-a273-86e934c8bc9a',
				name: 'Howl for Blood',
				action: {
					action: 3,
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
				details: 'each ally in the burst makes a charge attack as a free action, dealing 2 extra damage if the attack hits.',
				damage: 'dealing 2 extra damage if the attack hits',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Brute (L)',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: 'd08d2135-2601-41c8-9804-c13c38b06cf4',
		name: 'Jorasco Field Medic',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'halfling',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Heal +11',
		equipment: 'crossbow bolts (20); hand crossbow; spear',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 45,
		initiative: 2,
		ac: 17,
		fortitude: 16,
		reflex: 16,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c527b857-088e-423d-8923-ebc0dd017fc6',
				name: 'Spear',
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
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '64fd1be2-42e1-41e3-9127-89ac4b08d6f4',
				name: 'Hand Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '529a4667-99a6-461a-8e4d-869500303ff9',
				name: 'Emergency Healing',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'targets one ally; the target regains 5 hit points and can make a saving throw.',
				damage: 'the target regains 5 hit points and can make a saving throw',
				category: 3
			},
			{
				id: '0e70fdeb-e449-4aa6-b0f4-f8a6e4a0967f',
				name: 'Healing Word',
				action: {
					action: 3,
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
				details: 'targets one ally in burst; the target spends a healing surge and regains an additional 1d6 hit points.',
				damage: 'the target spends a healing surge and regains an additional 1d6 hit points',
				category: 3
			},
			{
				id: '92a21198-4f8c-4044-bbf7-1548b950f4d1',
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
				id: '604ebebd-46b9-46e6-b86d-8dc6e1aa6ecd',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the field medic is hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker must make a new attack roll and use the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery (L)',
		phenotype: 'Small natural humanoid (halfling)'
	},
	{
		id: 'bd6120e6-4e02-4e63-afe6-93a7a301711d',
		name: 'Julius Finch',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Intimidate +9',
		equipment: 'greatsword; scale armor',
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
			score: 9,
			modifier: -1,
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
		hp: 107,
		initiative: 6,
		ac: 20,
		fortitude: 21,
		reflex: 19,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '39bc4e83-7b0b-4e0c-9f01-cf278fe38d52',
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
				details: '4d6+5 damage.',
				damage: '4d6+5 damage',
				category: 1
			},
			{
				id: '510f60c8-b879-4102-b827-13521b0affd1',
				name: 'Deadly Sweep',
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
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '2d6+5 damage, and the target is knocked prone until the end of Julius’s next turn.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'bdf0d36f-bee2-454c-b859-bd924fbcd267',
				name: 'Feed the Void',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'targets a bloodied, living enemy; 6d6+5 necrotic damage.',
				damage: '6d6+5 necrotic damage',
				category: 1
			},
			{
				id: '4039b6b0-9de3-4da2-87d5-13fed4bcc827',
				name: 'Brutal Bruiser',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Julius deals 1d6 extra damage on attacks made against slowed or immobilized foes or against any creature granting combat advantage to him.',
				damage: 'julius deals 1d6 extra damage on attacks made against slowed or immobilized foes or against any creature granting combat advantage to him',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Brute',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '7e6cadb5-dfdb-4b9d-ad0f-f1f336764c9d',
		name: 'Karrnathi Skeleton',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'scale armor; scimitar',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 110,
		initiative: 13,
		ac: 25,
		fortitude: 23,
		reflex: 25,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ff34cac-5752-4f09-b369-38a81b765dfd',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage (crit 1d8 + 16), and the target is marked until the end of the Karrnathi skeleton’s next turn.',
				damage: '1d8+8 damage (crit 1d8 + 16)',
				category: 1
			},
			{
				id: 'f4b3f76c-46ca-4fa6-8d0d-422e15794a07',
				name: 'Bone Dance',
				action: {
					action: 4,
					trigger: 'when an adjacent; marked enemy moves or makes an attack that does not include the karrnathi skeleton; requires a scimitar',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The Karrnathi skeleton shifts 1 square and makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '8611e46c-4927-4854-a591-10ccee3e971f',
				name: 'Eviscerating Slash',
				action: {
					action: 1,
					trigger: 'requires a scimitar',
					sustainAction: 0,
					use: 0,
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
				details: '3d8+6 damage (crit 1d8 + 30), and ongoing 10 damage (save ends).',
				damage: '3d8+6 damage (crit 1d8 + 30)',
				category: 5
			},
			{
				id: '2d42360e-6111-4b95-98ba-86079cd03dfe',
				name: 'Razor Storm Strike',
				action: {
					action: 1,
					trigger: 'requires two scimitars',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The Karrnathi skeleton makes two melee basic attacks. The Karrnathi skeleton shifts 1 square before, between, or after the attacks.',
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
				value: 5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '81a21790-01a9-4193-b499-4bb2b342906b',
		name: 'Karrnathi Zombie',
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
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'bastard sword; heavy shield; plate armor',
		category: 'Zombie',
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
			score: 11,
			modifier: 0,
			cost: 1
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
		hp: 138,
		initiative: 6,
		ac: 23,
		fortitude: 25,
		reflex: 21,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0293873b-e581-4284-9b6b-d33f82c4e7b3',
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
				details: '2d10+5 damage.',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: '9b13ba02-463a-43e3-955b-625a5cf15be4',
				name: 'Driving Assault',
				action: {
					action: 1,
					trigger: 'requires a bastard sword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '2d10+5 damage, the zombie pushes the target 2 squares, and the target is knocked prone. Miss: The Karrnathi zombie makes a melee basic attack against an enemy adjacent to it other than the original target.',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'f3e099cd-e9e1-4fd6-b754-64fb455d9e6d',
				name: 'Battle Wrath',
				action: {
					action: 4,
					trigger: 'when hit by a melee attack; usable only while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The Karrnathi zombie makes a melee basic attack against an adjacent enemy.',
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
		id: 'eb38a2fb-f2ac-469c-8624-4f1f446d71bf',
		name: 'King Kaius ir’Wynarn III',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead, vampire',
		level: 15,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '7, climb 3 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Draconic, Dwarven',
		skills: 'Acrobatics +14, Athletics +18, Bluff +17, Diplomacy +17, History +17, Insight +15, Nature +15, Stealth +14',
		equipment: 'light shield; plate armor',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 296,
		initiative: 11,
		ac: 31,
		fortitude: 30,
		reflex: 27,
		will: 29,
		regeneration: {
			value: 10,
			details: 'regeneration does not function while Kaius is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: 'e3431c33-1b6a-4584-9e16-a21dd9d333d2',
				name: 'Soulthief',
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
				details: '1d8+6 damage plus 1d8 necrotic damage, and Kaius gains 5 temporary hit points.',
				damage: '1d8+6 damage plus 1d8 necrotic damage',
				category: 1
			},
			{
				id: 'c7915e9b-a7b3-480e-9ebb-c531598e2310',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target; recharges when an adjacent creature becomes bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '2d12+6 damage, the target is weakened (save ends), and Kaius regains 74 hit points.',
				damage: '2d12+6 damage',
				category: 5
			},
			{
				id: '5778dda5-f865-4ca3-b867-bac97dc1bf41',
				name: 'Throat Rip',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '3d6+7 damage, and ongoing 10 damage (save ends).',
				damage: '3d6+7 damage',
				category: 5
			},
			{
				id: 'f909893e-a835-4085-b098-dde08f2d737a',
				name: 'Whisper Strike',
				action: {
					action: 1,
					trigger: 'requires soulthief',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing, Necrotic, Weapon',
				condition: '',
				range: 'Kaius makes three melee basic attacks. Kaius shifts 1 square before each attack.',
				attack: null,
				description: '',
				details: 'Targets one, two, or three creatures',
				damage: '',
				category: 5
			},
			{
				id: '40d39336-fa97-4281-99c0-dcf548ac9fcf',
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
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends, with a -2 penalty to the saving throw). Aftereffect: The target is dazed (save ends). Kaius can dominate only one creature at a time.',
				damage: 'with a -2 penalty to the saving throw)',
				category: 3
			},
			{
				id: '6d2c0f9f-acff-4324-962f-e2c08bcf0c8a',
				name: 'Human Guise',
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
				details: 'Kaius can mask his undead features to appear as he did in life. A successful Insight check opposed by Kaius’s Bluff check pierces the guise.',
				damage: '',
				category: 3
			},
			{
				id: '893cd6b5-8152-4016-b27e-9ceaad974eb8',
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
				details: 'Kaius becomes insubstantial and gains a fl y speed of 12, but cannot make attacks. He can remain in mist form for up to 1 hour or end the effect as a minor action.',
				damage: 'Kaius becomes insubstantial and gains a fl y speed of 12',
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

		info: 'Level 15 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (undead, vampire)'
	},
	{
		id: '0769a592-d2a5-4df6-92eb-7704ba6a4350',
		name: 'King’s Shield',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '5',
		alignment: 'Lawful good',
		languages: 'Common',
		skills: 'Insight +10, Intimidate +7',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 64,
		initiative: 4,
		ac: 22,
		fortitude: 18,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '29fe544f-4551-46ff-8a9c-eb1411efcaef',
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
				details: '1d8+5 damage, and the target is marked until the end of the Shield’s next turn.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '6872ead2-cc41-4852-b266-99791ffcab69',
				name: 'For Breland!',
				action: {
					action: 1,
					trigger: 'requires a longsword',
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
				details: '2d8+5 damage, and the Shield gains 5 temporary hit points.',
				damage: '2d8+5 damage',
				category: 5
			},
			{
				id: 'c72bcee7-2efa-4c7d-99bc-b456a27fe669',
				name: 'Shield the King',
				action: {
					action: 4,
					trigger: 'when an adjacent enemy moves or shifts; requires a shield',
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
				details: 'Targets the triggering enemy; 1d6+5 damage, the Shield pushes the target 1 square, and the target ends its move action.',
				damage: '1d6+5 damage',
				category: 5
			},
			{
				id: '90839fa2-5e11-41a6-b91c-77a13a44f00d',
				name: 'Lock Shields',
				action: null,
				keywords: '',
				condition: 'requires a shield',
				range: '',
				attack: null,
				description: '',
				details: 'A King’s Shield gains a +2 bonus to AC and Reflex defense while adjacent to another King’s Shield',
				damage: 'A King’s Shield gains a +2 bonus to AC and Reflex defense while adjacent to another King’s Shield',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '8674c7e5-c54f-4c1a-b4b0-50241fea5ea3',
		name: 'King’s Wand',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '5',
		alignment: 'Good',
		languages: 'Common, Elven',
		skills: 'Arcana +13, Bluff +12, Insight +9, Stealth +10',
		equipment: 'implement, wand; short sword',
		category: '',
		strength: {
			score: 9,
			modifier: -1,
			cost: 0
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 52,
		initiative: 5,
		ac: 18,
		fortitude: 15,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3009a5d4-2d8e-4cbd-a254-f10a22f59ca4',
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
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: 'ac031ef6-acd9-4e07-ad08-a732bd693510',
				name: 'Mind Razor',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '2d8+4 psychic damage.',
				damage: '2d8+4 psychic damage',
				category: 1
			},
			{
				id: 'af271f0b-90a7-4396-8cf8-34f0934f256e',
				name: 'Bedeviling Bolts',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion, Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '1d10+5 damage, and the Wand slides the target 1 square.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '6667b98d-7366-4f23-89d4-2ec907e66ad6',
				name: 'Scintillating Pattern',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d8+4 damage, and the target is dazed (save ends).',
				damage: '3d8+4 damage',
				category: 1
			},
			{
				id: 'c000aee2-42e3-4a14-acde-bc9c5bbf8dd4',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when the king’s wand takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The King’s Wand turns invisible until after it hits or misses with an attack or until the end of its next turn.',
				damage: '',
				category: 5
			},
			{
				id: '7c445e07-ff4a-45bd-903e-5dad0a1f7005',
				name: 'Reactive Stealth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a King’s Wand has cover or concealment when it makes an initiative check, it can make a Stealth check to become hidden.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'b5e7ad2f-2005-484a-bcc7-b672e9f208da',
		name: 'King’s Dark Lantern',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +13, Bluff +10, Diplomacy +10, Intimidate +10, Stealth +14, Streetwise +10, Thievery +14',
		equipment: 'arrow; bastard sword; leather armor; longbow',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 136,
		initiative: 13,
		ac: 24,
		fortitude: 22,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '75e0b851-77f9-44b2-a6df-eb45c080a065',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '80e4ec8f-df65-467c-b215-f39130b429f8',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '733a0604-eaec-4d03-b0b3-12cb4db3496d',
				name: 'Blinding Strike',
				action: {
					action: 1,
					trigger: 'requires a bastard sword',
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
				details: '1d10+5 damage, and the Dark Lantern shifts 2 squares and has concealment against the target until the end of the Dark Lantern’s next turn.',
				damage: '1d10+5 damage',
				category: 5
			},
			{
				id: '957dafbd-5f79-4b1d-90d8-8517bbccb2b5',
				name: 'Blend In',
				action: {
					action: 3,
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
				details: 'The Dark Lantern turns invisible until it attacks or until the end of its next turn.',
				damage: '',
				category: 3
			},
			{
				id: '67ec8a40-0423-40a5-87e9-b44f59270dd5',
				name: 'Hunter’s Quarry',
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
				details: 'Targets nearest enemy; the Dark Lantern deals +1d8 damage once per turn against its quarry. Only one creature can be the Dark Lantern’s quarry at a time.',
				damage: 'the dark lantern deals +1d8 damage once per turn against its quarry',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Lurker',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '90569b01-02bc-4f3d-904a-55fb2614cee5',
		name: 'King’s Sword',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Good',
		languages: 'Common',
		skills: '',
		equipment: 'chainmail; greatsword',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 69,
		initiative: 7,
		ac: 20,
		fortitude: 18,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b1fb3809-9795-4143-b63f-0df6e80b3b56',
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
				details: '1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'aa0ab494-5bb8-4817-b3f3-11f04ec20dd7',
				name: 'Deft Blade',
				action: {
					action: 1,
					trigger: 'requires a greatsword',
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
				details: '1d10+6 damage, and the Sword shifts 1 square.',
				damage: '1d10+6 damage',
				category: 5
			},
			{
				id: '50dd5899-65d6-4465-b153-d030f3fa7c33',
				name: 'King’s Blade',
				action: {
					action: 1,
					trigger: 'requires a greatsword',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d10+5 damage. The King’s Sword shifts 2 squares after making this attack.',
				damage: '2d10+5 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'db9d57e6-dba7-4cc8-88e6-efd4ee4845c6',
		name: 'Kundarak Iron Gate Guard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dwarf',
		level: 6,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +7, Endurance +10',
		equipment: 'plate armor; waraxe',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 76,
		initiative: 5,
		ac: 22,
		fortitude: 21,
		reflex: 16,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'beebafaa-523e-4a7b-a2fc-f89c32cee6d1',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d12+5 damage, and the target is marked until the end of the guard’s next turn.',
				damage: '1d12+5 damage',
				category: 1
			},
			{
				id: 'ea8b629d-7577-4e75-b3f0-5b8a42b2aad2',
				name: 'Shield Bash',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '1d6+5 damage, and the Iron Gate guard pushes the target 1 square. If the target is marked by the guard, the guard can shift into the space the target vacates.',
				damage: '1d6+5 damage',
				category: 3
			},
			{
				id: '3945a9fe-14ae-445f-bd42-c6bc8841036f',
				name: 'Guard Ward',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When within 4 squares of a creature or object it is guarding, or within a guarded area, an Iron Gate guard gains a +2 bonus to all defenses and a +1 bonus to attack rolls.',
				damage: 'When within 4 squares of a creature or object it is guarding',
				category: 0
			},
			{
				id: 'c7f7755b-35da-4d80-9638-b642243882e9',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a guard to move—through a pull, a push, or a slide—the guard moves 1 square less than the effect specifies. When an attack would knock a guard prone, the guard can make a saving throw to avoid falling prone.',
				damage: 'or a slide—the guard moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Soldier',
		phenotype: 'Medium natural humanoid (dwarf)'
	},
	{
		id: '7df76a66-fe5b-4c3f-a99d-b3a0e61b4696',
		name: 'Lady Vol',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 19,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +12; darkvision, low-light vision',
		movement: '6, fly 7 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Draconic, Elven',
		skills: 'Arcana +24, Bluff +19, Diplomacy +22, History +21, Insight +17, Religion +21',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
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
		hp: 356,
		initiative: 11,
		ac: 35,
		fortitude: 31,
		reflex: 34,
		will: 35,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: 'b440b37c-aab9-4d05-977c-e245e18c9733',
				name: 'Death Grasp',
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
				details: '3d8+7 necrotic damage.',
				damage: '3d8+7 necrotic damage',
				category: 1
			},
			{
				id: '09746ac0-c93d-46e7-9cd5-ca2930734323',
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
					bonus: 23,
					defence: 2
				},
				description: '',
				details: '3d8+7 necrotic damage.',
				damage: '3d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'abe85df0-3a92-4bc7-af6d-314cbefabafe',
				name: 'Enfeebling Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '2d8+7 necrotic damage, and the target is weakened until the end of Lady Vol’s next turn.',
				damage: '2d8+7 necrotic damage',
				category: 1
			},
			{
				id: '73a98f96-e8ce-4575-bf85-d4bfb3698a7a',
				name: 'Spectral Claw',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'targets two creatures in burst; 2d8+7 necrotic damage, and the target is immobilized (save ends).',
				damage: '2d8+7 necrotic damage',
				category: 1
			},
			{
				id: '5eef5a69-1818-4409-a3d9-508d6bc98ea9',
				name: 'Life Drain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: 'targets living creatures; 4d8+7 necrotic damage, and Lady Vol regains 5 hit points for every creature damaged in this manner.',
				damage: '4d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'a575ed01-b9b6-4b73-a31d-7a019efbcae9',
				name: 'Queen of the Dead',
				action: {
					action: 1,
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
				details: 'three of Lady Vol’s allies in the burst can each make a basic attack.',
				damage: '',
				category: 1
			},
			{
				id: 'e7a1a303-86bf-429d-a60e-d720db53e365',
				name: 'Death Makes Me Stronger',
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
				details: 'Lady Vol’s drain life ability recharges, and she uses it.',
				damage: '',
				category: 5
			},
			{
				id: 'f75eed56-9549-482f-8043-ca8e9f24431e',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Lady Vol’s body and possessions crumble into dust, but she is not destroyed. She reappears (along with her possessions) in 1d10 days within 1 square of her phylactery, unless the phylactery is also found and destroyed.',
				damage: 'She reappears (along with her possessions) in 1d10 days within 1 square of her phylactery',
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
		vulnerable: 'radiant (if Lady Vol takes radiant damage, regeneration doesn’t function on her next turn)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 19 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '28716b37-e229-4a73-bd20-5f21c72de77a',
		name: 'Living Cloudkill',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'blind, ooze',
		level: 19,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; blindsight 10',
		movement: '8 see also engulf',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 314,
		initiative: 14,
		ac: 31,
		fortitude: 33,
		reflex: 31,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dbc40b6f-0115-41c1-b900-fea69ae3998e',
				name: 'Slam',
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
					defence: 1
				},
				description: '',
				details: '3d8+7 poison damage.',
				damage: '3d8+7 poison damage',
				category: 1
			},
			{
				id: '86f809c3-2e90-411e-96b9-a29b1a780436',
				name: 'Engulf',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'Targets one or two Medium or smaller creatures; (automatically hits an immobilized creature)the target is grabbed, pulled into the living cloudkill’s space, dazed until the grab ends, and takes ongoing 15 poison damage until the grab ends. When the grab ends, the target shifts to a square of its choosing adjacent to the living cloudkill. The living cloudkill can move normally while creatures are engulfed within it.',
				damage: 'and takes ongoing 15 poison damage until the grab ends',
				category: 1
			},
			{
				id: 'e817b3b2-f7d3-4fc3-a756-35dc64a97a73',
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
				details: 'The living cloudkill shifts its speed and can move through enemies’ spaces during this movement. It must end this movement in an unoccupied space.',
				damage: '',
				category: 2
			},
			{
				id: 'd7d8cab1-3e8d-4f85-a21f-f6980c6fd313',
				name: 'Choking Move',
				action: null,
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'On its turn, if a living cloudkill moves through a creature’s space, that creature takes 15 poison damage.',
				damage: 'that creature takes 15 poison damage',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -15
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'gaze',
		tactics: '',

		info: 'Level 19 Elite Brute',
		phenotype: 'Large aberrant beast (blind, ooze)'
	},
	{
		id: '37c99134-20d4-4a1a-bc15-6d7efd4af7ba',
		name: 'Lord of Blades',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 21,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Dwarven, Giant',
		skills: 'Arcana +17, Athletics +22, Intimidate +21',
		equipment: 'plate armor',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 388,
		initiative: 15,
		ac: 39,
		fortitude: 35,
		reflex: 30,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '9ff625e3-1810-4d24-9ae3-0588597dd088',
				name: 'Quicken Constructs',
				keywords: '',
				details: 'aura 5; allied constructs and living construct within the aura gain +4 to initiative rolls.'
			}
		],
		powers: [
			{
				id: '46ddfd34-b0b3-42a3-a54a-558c59bb45a5',
				name: 'Adamantine Sixblade',
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
				details: '1d12+11 damage (crit 19–20), the Lord of Blades slides the target 2 squares, and the target is marked until the end of the Lord of Blades’ next turn. Damage from this attack ignores 10 points of resist all.',
				damage: '1d12+11 damage (crit 19–20)',
				category: 1
			},
			{
				id: '8756bbb1-13f1-41c9-ba8e-27e260e723b3',
				name: 'Blade Mark',
				action: {
					action: 5,
					trigger: 'when an adjacent enemy marked by the lord of blades moves or shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The Lord of Blades makes a melee basic attack against the triggering enemy. An enemy hit by this attack stops moving. If this attack hits, the Lord of Blades makes a melee basic attack as a free action against a different target within reach.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '926ad08b-395c-4c1d-a849-7b6427f0514c',
				name: 'Off-Hand Slash',
				action: {
					action: 3,
					trigger: 'requires an adamantine sixblade',
					sustainAction: 0,
					use: 1,
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
				details: '1d12+11 damage (crit 19–20), and the target is marked until the end of the Lord of Blades’ next turn. Damage from this attack ignores 10 points of resist all.',
				damage: '1d12+11 damage (crit 19–20)',
				category: 5
			},
			{
				id: '21f21ff9-29e0-4608-8bde-b5ed9152fcdd',
				name: 'Shoulderbow',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 3
			},
			{
				id: '27ef3a63-372b-49de-af6d-e5138b20956a',
				name: 'Lord of Constructs',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'allied construct and living constructs gain 10 temporary hit points. A bloodied construct or living construct ally also regains 10 hit points.',
				damage: 'allied construct and living constructs gain 10 temporary hit points',
				category: 3
			},
			{
				id: '90a83b57-5fa8-4794-8de1-0c20fa483278',
				name: 'Bladed Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Lord of Blades deals 1d8 + 4 damage to any creature that grabs him. A creature that continues to grab him takes 1d8 + 4 damage at the start of its turn.',
				damage: 'the lord of blades deals 1d8 + 4 damage to any creature that grabs him',
				category: 0
			},
			{
				id: '60dddbfd-0a36-40d7-85ce-26d980b6b287',
				name: 'Powerful Charger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When charging, the Lord of Blades deals 2d6 extra damage and pushes the target 1 square. He then shifts into the square the target vacated.',
				damage: 'the lord of blades deals 2d6 extra damage and pushes the target 1 square',
				category: 0
			},
			{
				id: '00e28c78-9903-4b2f-a3d1-a6ba148218ad',
				name: 'Lordly Resolve',
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
				details: 'The Lord of Blades gains 15 temporary hit points and ends one effect that a save can end. If he uses this power while bloodied, he also regains 15 hit points.',
				damage: 'The Lord of Blades gains 15 temporary hit points and ends one effect that a save can end',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Elite Skirmisher (L)',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '76a8455d-334e-4fdf-820f-2fe8644217dd',
		name: 'Magebred Destrier',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount',
		level: 5,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; low-light vision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +10',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 76,
		initiative: 4,
		ac: 17,
		fortitude: 19,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e511cdef-b1e8-4ea6-af01-59d24294cb5f',
				name: 'Kick',
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
				details: '1d8+9 damage.',
				damage: '1d8+9 damage',
				category: 1
			},
			{
				id: '102af01f-ad5a-46ed-bc1f-26db18fb245b',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'The magebred destrier can move up to its speed and enter enemies’ spaces. This movement provokes opportunity attacks, and the destrier must end its move in an unoccupied space. When it enters an enemy’s space, the destrier makes a trample attack; 1d8+6 damage, and the target is knocked prone.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'b612c494-71d3-4245-89b3-11558f9975cb',
				name: 'Charger',
				action: null,
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 5th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'When a destrier’s rider charges, the rider gains a +6 bonus to damage rolls.',
				damage: 'the rider gains a +6 bonus to damage rolls',
				category: 0
			},
			{
				id: '15f89b1a-00ee-4325-8119-3d5a61c6e9f0',
				name: 'Bonded Mount',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'when a friendly rider of 5th level or higher spends a healing surge',
				range: '',
				attack: null,
				description: '',
				details: 'The magebred destrier gains temporary hit points equal to the rider’s healing surge value.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Brute',
		phenotype: 'Large natural beast (mount)'
	},
	{
		id: '8b91af07-af05-44e2-8b4e-51e1c319771f',
		name: 'Magwroth',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 25,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +16',
		movement: '6, swim 6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Primordial',
		skills: 'Arcana +22',
		equipment: '',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 284,
		initiative: 19,
		ac: 37,
		fortitude: 38,
		reflex: 36,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '71228d69-63db-4b91-a661-9cf79b00db91',
				name: 'Elemental Claw',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d6+9 damage, and ongoing 10 cold, fire, or lightning damage (Magwroth’s choice) (save ends).',
				damage: '2d6+9 damage',
				category: 1
			},
			{
				id: '8604e2a9-2ce2-44dc-abbb-1413831c1ad9',
				name: 'Chaos Retort',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+7 cold, fire, or lightning damage (Magwroth’s choice), Magwroth slides the target 2 squares, and the target makes a basic attack against its nearest ally. Miss: Half damage, and the target is dazed until the end of Magwroth’s next turn.',
				damage: 'or lightning damage (magwroth’s choice)',
				category: 5
			},
			{
				id: '4c6ed03d-8674-44ca-b0f8-dae018290f64',
				name: 'Faster, Ye Swabs!',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 6',
				attack: null,
				description: '',
				details: 'each ally within the burst can take an extra move action immediately.',
				damage: '',
				category: 3
			},
			{
				id: 'f0da050b-92b5-477b-9f3e-34bb6cea61aa',
				name: 'Wail of Anguish',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d10+7 psychic damage.',
				damage: '2d10+7 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '15 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 25 Brute (L)',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '114d64a2-c139-4789-a4d2-dee2534083e1',
		name: 'Medani Inquisitive',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Insight +14',
		equipment: 'crossbow; crossbow bolts (20); dagger',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 87,
		initiative: 6,
		ac: 24,
		fortitude: 18,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3055cbb8-f6c6-4ddf-b2b2-6ec7c211465b',
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
				details: '1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: 'fdc2b216-12fc-4209-980b-72042ab983fb',
				name: 'Repeating Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: 'ed58fa05-5558-463e-9853-a6e81fb39d69',
				name: 'Inquisitive’s Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'targets one enemy; the Medani inquisitive deals 2d6 extra damage on the next attack it makes against the target before the end of the inquisitive’s next turn.',
				damage: 'the medani inquisitive deals 2d6 extra damage on the next attack it makes against the target before the end of the inquisitive’s next turn',
				category: 3
			},
			{
				id: 'f67a7e18-85ac-4725-93c2-7ad0e98bee45',
				name: 'Blinding Powder',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'the target is blinded and slowed (save ends both).',
				damage: '',
				category: 1
			},
			{
				id: '6cfc0eca-a692-4499-bf5b-d83fbfd4ab3b',
				name: 'Slippery Customer',
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
				details: 'The inquisitive shifts 3 squares and ignores difficult terrain.',
				damage: 'The inquisitive shifts 3 squares and ignores difficult terrain',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '91b64d3c-c423-42c0-8765-a4b8dc363791',
		name: 'Mishva Garodya Stormhorn',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Diplomacy +15, Endurance +13, Intimidate +15',
		equipment: 'bastard sword; javelin; scale armor; short sword',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		dexterity: {
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 238,
		initiative: 8,
		ac: 30,
		fortitude: 25,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '43396b33-f820-412e-95fd-be87bb46498b',
				name: 'Frontline Command',
				keywords: '',
				details: 'aura 10; each ally that starts the encounter within the aura gains a +2 bonus to its initiative check.'
			}
		],
		powers: [
			{
				id: '88fcdfcf-e819-4b84-89ef-14b80be6f475',
				name: 'Bastard Sword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Lightning, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '(+20 while bloodied)2d10+5 lightning damage.',
				damage: '(+20 while bloodied)2d10+5 lightning damage',
				category: 1
			},
			{
				id: '0e394561-2fd0-48c9-97f6-22d2531f7d31',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '(+20 while bloodied)2d6+5 damage.',
				damage: '(+20 while bloodied)2d6+5 damage',
				category: 1
			},
			{
				id: 'a634e66a-4224-4ffc-b0da-7c09f0460eef',
				name: 'Javelin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '(+20 while bloodied)2d6+7 damage.',
				damage: '(+20 while bloodied)2d6+7 damage',
				category: 1
			},
			{
				id: '65fdafa0-67f6-4537-a45b-4c0b97d29711',
				name: 'Blue Dragon Strike',
				action: {
					action: 1,
					trigger: 'requires a bastard sword and a short sword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Mishva makes a basic attack with each weapon. If both attacks hit the same target, Mishva pushes that target 2 squares and knocks it prone.',
				damage: 'Mishva pushes that target 2 squares and knocks it prone',
				category: 5
			},
			{
				id: 'ae2d7d44-619d-4833-a251-43aef610cf58',
				name: 'Dragonwing Wedge',
				action: {
					action: 1,
					trigger: 'requires a bastard sword and a short sword; recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Mishva makes a basic attack with each weapon against two different targets. On a hit, Mishva slides the target 2 squares.',
				damage: 'Mishva slides the target 2 squares',
				category: 5
			},
			{
				id: '08544035-965c-4edb-8216-8c4ddaa62426',
				name: 'Dragon Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '2d6+5 lightning damage.',
				damage: '2d6+5 lightning damage',
				category: 3
			},
			{
				id: '17d2c13a-2f1d-491f-8f65-7a02b2c10b34',
				name: 'Stormhorn War Cry',
				action: {
					action: 3,
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
				details: 'targets Mishva and allies in the burst that can hear her; until the end of Mishva’s next turn, the target gains a +2 bonus to attack rolls and damage rolls.',
				damage: 'the target gains a +2 bonus to attack rolls and damage rolls',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: 'd5cc60dd-8fd2-498a-b1c6-2f268f7ca8ce',
		name: 'Mordain the Fleshweaver',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 21,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; all-around vision, darkvision',
		movement: '8, teleport 5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Elven, Goblin',
		skills: 'Arcana +23, Dungeoneering +22, Insight +17, Nature +17',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 27,
			modifier: 8,
			cost: -1
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
		hp: 338,
		initiative: 13,
		ac: 35,
		fortitude: 33,
		reflex: 35,
		will: 33,
		regeneration: {
			value: 15,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '57449983-dfd5-4282-a225-38332e4a1815',
				name: 'Stinging Tentacle',
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
				details: 'Reach 3; 2d8+3 damage, and the target is slowed and takes ongoing 5 damage (save ends both). If the target is already slowed, it is dazed instead.',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '37b31218-c5cb-4d80-ab7b-d3357e53fd71',
				name: 'Unraveling Ray',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '2d6+7 damage, Mordain pushes the target 1 square, and the target takes ongoing 10 damage (save ends). Aftereffect: Ongoing 5 damage (save ends).',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '8e605910-2442-4995-b7ea-429d5408ae19',
				name: 'Fleshweaver’s Fury',
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
				details: 'Mordain makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '2e3c5a4f-c89c-444a-8adf-037ba4ecf168',
				name: 'Burrowing Shard',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: '2d6 damage, and the target is immobilized and takes ongoing 15 damage (save ends both). Aftereffect: The target takes ongoing 5 damage and is slowed (save ends both).',
				damage: '2d6 damage',
				category: 1
			},
			{
				id: '4b5fbbfa-257b-4821-90ed-c3910e0febfc',
				name: 'Unnatural Presence',
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
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of Mordain’s next turn. Aftereffect: The target takes a -2 penalty to attack rolls against Mordain (save ends).',
				damage: 'The target takes a -2 penalty to attack rolls against Mordain (save ends)',
				category: 1
			},
			{
				id: '9309b05b-ef4b-4986-ae6b-f6818938c5fc',
				name: 'Xorlat Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Zone',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6 psychic damage, and the target is slowed (save ends). Effect: The burst creates a zone that lasts until the end of Mordain’s next turn. Any creature that starts its turn within the zone is subject to an attack; +24 vs. Will; 2d6 psychic damage, and the target is slowed (save ends). Sustain Minor: The zone persists.',
				damage: '2d6 psychic damage',
				category: 1
			},
			{
				id: 'f7ae62b5-8e7f-4b19-b00f-678ae4508dca',
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
				details: 'Mordain can alter his physical form to take on the appearance of any Small or Medium humanoid, including a unique individual.',
				damage: '',
				category: 3
			},
			{
				id: '0a70badf-435d-47b3-9985-1dd1c0b29e35',
				name: 'Fleshweaver’s Resurgence',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: 'when mordain is reduced to 0 hit points in a round during which he did not take cold and radiant damage',
				range: '',
				attack: null,
				description: '',
				details: 'Mordain returns to life with 30 hit points at the start of his next turn.',
				damage: 'Mordain returns to life with 30 hit points at the start of his next turn',
				category: 1
			},
			{
				id: '373efc16-9c1e-4c09-9d49-50f32f0a4e9c',
				name: 'Resistance to Scrying',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Attempts to scry upon Mordain, his location, or objects in his possession fail as if the target of the attempt did not exist.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'cold and radiant (if Mordain takes cold and radiant damage, regeneration does not function until the end of his next turn)',
		vulnerable: '',
		immune: 'disease, polymorph',
		tactics: '',

		info: 'Level 21 Elite Controller',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '6c109add-fa84-4e0e-98b0-83aaa4df82c6',
		name: 'Mourner',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 11,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 8 (hover; altitude limit 6)',
		alignment: 'Unaligned',
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
		hp: 80,
		initiative: 10,
		ac: 24,
		fortitude: 23,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cf769256-df46-4349-9dab-8f20124b5d06',
				name: 'Claw',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d6+5 psychic damage, and the target is slowed until the end of the mourner’s next turn.',
				damage: '2d6+5 psychic damage',
				category: 1
			},
			{
				id: '206b23b5-b67d-42bc-a495-a843e92c30bd',
				name: 'Tendril of Mist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d6+7 psychic damage, and the mourner slides the target 2 squares.',
				damage: '2d6+7 psychic damage',
				category: 1
			},
			{
				id: '9a1dc5ea-35a4-4f34-9c6d-e8eb0c85da52',
				name: 'Wall of Anguish',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '3d8+7 psychic damage, and the target is immobilized (save ends).',
				damage: '3d8+7 psychic damage',
				category: 1
			},
			{
				id: 'ce856f27-1832-447c-bfce-f8f9512f32a9',
				name: 'Aura of Doom',
				action: {
					action: 1,
					trigger: 'aura',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'aura 2; any enemy within the aura at the start of its turn takes a -2 penalty to Will defense until the start of its next turn.',
				damage: 'aura 2',
				category: 5
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
		immune: '',
		tactics: '',

		info: 'Level 11 Controller',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'e28834a9-2cdf-438d-ba7b-74e5ff1416a3',
		name: 'Mourning Haunt',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 3,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +7; blindsight 3, darkvision',
		movement: '6 ;phasing',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Stealth +10',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 196,
		initiative: 6,
		ac: 17,
		fortitude: 17,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '0795ad81-31f6-4ef1-9102-37783689d982',
				name: 'Mist Aura',
				keywords: '',
				details: 'aura 2; the aura grants the Mourning haunt concealment from creatures adjacent to it and total concealment from other creatures. The aura ends while the Mourning haunt is bloodied.'
			}
		],
		powers: [
			{
				id: '7336cf22-142e-4489-80e1-f139801ce338',
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
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '16aefc8f-6c08-4086-9672-75d6f3e4450d',
				name: 'Gnashing Jaws',
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
				details: 'The Mourning haunt makes three bite attacks.',
				damage: '',
				category: 1
			},
			{
				id: '2f226c86-22b8-4321-bfe9-8ce0dc961632',
				name: 'Haunting Fog',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 4,
					defence: 1
				},
				description: '',
				details: 'the target is restrained and takes ongoing 5 damage (save ends both).',
				damage: 'the target is restrained and takes ongoing 5 damage (save ends both)',
				category: 5
			},
			{
				id: '2500a744-62e7-4bc2-a900-6cbb075fc7cf',
				name: 'Whirlwind Frenzy',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage, and the Mourning haunt pushes the target 1 square.',
				damage: '1d6+2 damage',
				category: 5
			},
			{
				id: '2e87ce4f-4c05-43e8-b14a-57d1e25c8aed',
				name: 'Reactive Swipe',
				action: {
					action: 5,
					trigger: 'when the mourning haunt is hit by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '1d6+4 damage, and the Mourning haunt teleports 3 squares.',
				damage: '1d6+4 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '5 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Solo Lurker',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '629280fd-4eca-4adf-88c0-54adfb41c4e2',
		name: 'Phiarlan Spy',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 6,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Acrobatics +13, Bluff +15, Insight +11, Nature +8, Stealth +13, Thievery +13',
		equipment: 'dagger',
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
			score: 20,
			modifier: 5,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 55,
		initiative: 12,
		ac: 20,
		fortitude: 17,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cea81842-8e09-4a7a-a082-8a8e74195e0b',
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
				details: '1d4+5 damage. The Phiarlan spy shifts 1 square before or after the attack.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '4d0af858-a289-4dcf-90e2-6fd73446ec2a',
				name: 'Shadow Blade',
				action: {
					action: 1,
					trigger: 'requires dagger and combat advantage against the target',
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
				details: '3d4+5 damage, and the target is slowed and takes ongoing 5 necrotic damage (save ends both). On a hit, this attack recharges shadowform.',
				damage: '3d4+5 damage',
				category: 5
			},
			{
				id: 'c0a68c4f-5917-4d0c-a3c3-a427960b3a76',
				name: 'Shadow Form',
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
				details: 'The Phiarlan spy assumes a shadowy form until the end of its next turn. In this form, it gains total concealment and insubstantial.',
				damage: '',
				category: 3
			},
			{
				id: '9133b6f0-68d1-4a93-9be2-91558c6984dd',
				name: 'Veil of Shadows',
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
				details: 'The Phiarlan spy can disguise itself to appear as any Medium humanoid. A successful Insight check (opposed by the spy’s Bluff check) pierces the disguise.',
				damage: '',
				category: 3
			},
			{
				id: '2dbc84aa-4e57-4428-a212-18c52f3a2743',
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
				details: 'The Phiarlan spy can reroll an attack roll and must use the second roll.',
				damage: '',
				category: 4
			},
			{
				id: '696264b5-2a67-4e62-95fd-cfd6d191581f',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Phiarlan spy ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Lurker',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '9d957415-64eb-4689-aa5f-34a3e2dcf867',
		name: 'Red Jackal Razorclaw',
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
		senses: 'Perception +2; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +11, Stealth +11, Streetwise +7',
		equipment: 'leather armor; scimitar',
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
			score: 13,
			modifier: 1,
			cost: 3
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
				id: 'd0e5b441-5d87-449f-aa48-387193cbae93',
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
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d8+1 damage (crit 9 + 1d8), and the red jackal razorclaw shifts 1 square.',
				damage: '1d8+1 damage (crit 9 + 1d8)',
				category: 1
			},
			{
				id: '8a39ca29-cd4f-463d-9dd0-4781404bf930',
				name: 'Charging Pounce',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the red jackal razorclaw charges, it deals 1d8 extra damage and knocks the target prone.',
				damage: 'it deals 1d8 extra damage and knocks the target prone',
				category: 0
			},
			{
				id: 'f3119b0a-2be8-4143-a785-7b660b98c6c5',
				name: 'Razorclaw Shifting',
				action: {
					action: 3,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Until the end of the encounter, the red jackal razorclaw’s speed increases by 2 and it gains a +1 bonus to AC and Reflex.',
				damage: 'the red jackal razorclaw’s speed increases by 2 and it gains a +1 bonus to AC and Reflex',
				category: 5
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
		id: 'b8511670-a35a-4673-98e3-975b4b61aff9',
		name: 'Rhashaak',
		details: '',
		size: 5,
		origin: 3,
		type: 1,
		keywords: 'aquatic, dragon',
		level: 24,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +19; blindsight 10, darkvision',
		movement: '10, fly 10 (hover), overland flight 15, swim 10',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Draconic',
		skills: 'Arcana +21, Insight +19, Nature +19, Stealth +30',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 884,
		initiative: 24,
		ac: 38,
		fortitude: 36,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd19c7e35-9b0c-4f60-ba98-e4e9dc316c43',
				name: 'Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Acid, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d8+6 damage, and ongoing 15 acid damage (save ends).',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'cd5d9c50-a04e-41aa-a032-b43e1350a0c3',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 1d10+6 damage; a slowed target is also knocked prone.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '09a19db2-c869-4910-a2e7-2192e899a74c',
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
				details: 'Rhashaak makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '88492a08-bf5b-4513-8264-6e2234f6bc4a',
				name: 'Tail Slash',
				action: {
					action: 4,
					trigger: 'when an enemy misses with a melee attack against rhashaak',
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
				details: 'Reach 4; targets the triggering enemy; 1d12+8 damage, and Rhashaak pushes the target 3 squares; a slowed target is also knocked prone.',
				damage: '1d12+8 damage',
				category: 5
			},
			{
				id: '37b5c709-8adc-4492-8470-ca5d8ac2db00',
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
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '4d8+5 and necrotic damage, and the target takes ongoing 15 acid and necrotic damage and a -4 penalty to AC and Reflex (save ends all).',
				damage: '4d8+5 and necrotic damage',
				category: 1
			},
			{
				id: '8701c666-3e45-4434-baf9-42ed273c8516',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Breath weapon recharges, and Rhashaak uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '18fbc886-e5b9-4576-b7eb-b928b94c0ceb',
				name: 'Profane Utterance',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'close burst 10',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: 'Rhashaak speaks an Abyssal word of power; the target is dazed and restrained until the end of Rhashaak’s next turn.',
				damage: '',
				category: 5
			},
			{
				id: 'c314008c-0664-48b2-80dc-c8c88378f536',
				name: 'Scathing Spray',
				action: {
					action: 1,
					trigger: 'while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Cold',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '2d6+5 acid and cold damage, and the target is blinded and slowed until the end of Rhashaak’s next turn. Miss: Half damage.',
				damage: '2d6+5 acid and cold damage',
				category: 5
			},
			{
				id: 'b0df9249-4983-4151-89db-010ca8e376d9',
				name: 'Winterbite Gloom',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Acid, Cold, Zone',
				condition: '',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'the burst creates a zone of acidic, wintry darkness that lasts until the end of Rhashaak’s next turn. The zone blocks line of sight for all creatures except Rhashaak. Each creature entirely within the zone (except Rhashaak) is blinded, and each creature that enters the zone or begins its turn there takes 15 acid and cold damage and is slowed until the end of its next turn. Sustain Minor: The zone persists.',
				damage: 'and each creature that enters the zone or begins its turn there takes 15 acid and cold damage and is slowed until the end of its next turn',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -30
			},
			{
				type: 2,
				value: -15
			},
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Solo Lurker',
		phenotype: 'Gargantuan immortal beast (aquatic, dragon)'
	},
	{
		id: 'ee606c55-0414-4cbb-8e29-1ab4fa5bcf41',
		name: 'Rhesh Turakbar',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'minotaur',
		level: 11,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Goblin',
		skills: 'Dungeoneering +11, Intimidate +14, Nature +11',
		equipment: 'hide armor; spiked gauntlet',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 280,
		initiative: 9,
		ac: 27,
		fortitude: 29,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5d705f65-23da-4f89-a4c4-bcd1f17bce96',
				name: 'Greathammer',
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
				details: '3d8+8 damage.',
				damage: '3d8+8 damage',
				category: 1
			},
			{
				id: '72f66118-4180-4c0c-b623-b0623620bb90',
				name: 'Gauntlet Smash',
				action: {
					action: 3,
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
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 3
			},
			{
				id: 'ae209436-3e35-4e62-8866-ff73cf32bc46',
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
				range: '2d6+7 damage, and the target is knocked prone. Rhesh then shifts 2 squares and makes a melee basic attack.',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Rhesh makes a charge attack',
				damage: '',
				category: 1
			},
			{
				id: '5e525c63-693d-4a3c-8e08-8e2f75808dd4',
				name: 'Blood for Baphomet',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: 'when rhesh drops an enemy to 0 hit points or fewer',
				range: '',
				attack: null,
				description: '',
				details: 'Rhesh regains 30 hit points.',
				damage: 'Rhesh regains 30 hit points',
				category: 1
			},
			{
				id: '4c8fc40e-80fa-4795-899d-7b6d01367bea',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when first bloodied and again when reduced to 0 hit points',
				range: 'Rhesh makes a melee basic attack.',
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

		info: 'Level 11 Elite Brute',
		phenotype: 'Medium natural humanoid (minotaur)'
	},
	{
		id: 'cdf19390-f094-45b0-ae5b-efca528067be',
		name: 'Royal Eyes Agent',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +13, History +9, Insight +10, Streetwise +13, Thievery +12',
		equipment: 'crossbow bolts (20); hand crossbow; leather armor; rapier; thieves’ tools',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 75,
		initiative: 9,
		ac: 21,
		fortitude: 16,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c03c48bb-7f95-4c79-b745-f9adb0b7c565',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage, and if the Royal Eyes agent is marked by the target, that condition ends.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'a8c30515-fbc1-4462-a84b-6db84eb17151',
				name: 'Hand Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '6427c5b6-f8e2-4dbb-a023-e6834ab27837',
				name: 'Flamboyant Strike',
				action: {
					action: 1,
					trigger: 'requires rapier',
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
				details: '2d8+4 damage, the agent slides the target 1 square, and the target is dazed until the end of the agent’s next turn.',
				damage: '2d8+4 damage',
				category: 5
			},
			{
				id: '25e7ccbd-780b-4a2b-84fe-c82b5a29bd4e',
				name: 'Information Is Power',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 10,
					defence: 3
				},
				description: '',
				details: 'one creature in burst; the target grants combat advantage to the Royal Eyes agent (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '1d495f39-c018-4b8f-9552-7b8f73a95c98',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A Royal Eyes agent deals 2d6 extra damage on melee and ranged attacks against any creature granting combat advantage to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '96f6be55-eca6-4df4-9c1e-ab93d8c36a66',
				name: 'Cunning Escape',
				action: {
					action: 3,
					trigger: 'when the royal eyes agent hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the Royal Eyes agent is marked, that condition ends. In addition, the agent shifts 1 square.',
				damage: 'the agent shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'e0c3c575-45c7-4f87-be5d-d6a575e23a12',
		name: 'Royal Eyes Elite Agent',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 10,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +15, Bluff +16, History +12, Insight +13, Streetwise +16, Thievery +15',
		equipment: 'crossbow bolts (20); hand crossbow; leather armor; rapier; thieves’ tools',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 204,
		initiative: 12,
		ac: 27,
		fortitude: 21,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'be6ecc86-5ddc-483f-a773-3b275fa280ec',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '47fcc77b-b05a-4331-849e-1d39ea308ddc',
				name: 'Hand Crossbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+8 damage.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'd9cae91d-a501-4716-bf4d-e19f8a571c3a',
				name: 'Flamboyant Strike',
				action: {
					action: 1,
					trigger: 'requires rapier',
					sustainAction: 0,
					use: 0,
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
				details: '2d8+7 damage, the agent slides the target 1 square, and the target is dazed until the end of the agent’s next turn.',
				damage: '2d8+7 damage',
				category: 5
			},
			{
				id: 'fb6c206c-77d7-4982-97c5-ab589d3cf50e',
				name: 'Information Is Power',
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
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'the target grants combat advantage to the elite agent until the end of its next turn.',
				damage: '',
				category: 3
			},
			{
				id: '5e4c1141-b4ea-41a7-82ce-a484e58258fd',
				name: 'Aundairian Elan',
				action: {
					action: 4,
					trigger: 'when the elite agent is hit by a melee or ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the Royal Eyes elite agent is marked, that condition ends. In addition, the agent shifts 2 squares and makes a basic attack as a free action against the triggering target at any point during this movement.',
				damage: 'the agent shifts 2 squares and makes a basic attack as a free action against the triggering target at any point during this movement',
				category: 5
			},
			{
				id: 'e46a3f7c-4b46-4af6-a5a0-f46f3f77f8e7',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A Royal Eyes elite agent deals 3d6 extra damage on melee and ranged attacks against any creature granting combat advantage to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '9c9e124d-a67c-471a-8d98-abc065897d0b',
				name: 'Disguise Trick',
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
				details: 'The Royal Eyes elite agent takes on the appearance of any Medium humanoid race. Its clothing and equipment alter appearance to reflect this change. The illusion does not adjust sound or texture, so a creature listening to or touching an elite agent might detect the illusion.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '2034c019-330b-4351-b2af-cb39e7b0cf39',
		name: 'Ruus Dhakaan',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'hobgoblin',
		level: 13,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Acrobatics +15, Athletics +17, History +12, Intimidate +15',
		equipment: 'scale armor; shuriken; spiked chain',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 254,
		initiative: 12,
		ac: 27,
		fortitude: 25,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '3731f1a0-8ca9-4eeb-ab57-70b146e69f06',
				name: 'Dhakaani Command',
				keywords: '',
				details: 'aura 5; when Ruus shifts, each ally within the aura can shift 1 square as an immediate reaction.'
			}
		],
		powers: [
			{
				id: '0f838993-b369-40d6-b3d7-b8fc631d9c7c',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d4+5 damage.',
				damage: '4d4+5 damage',
				category: 1
			},
			{
				id: '507843de-cdef-4d1f-b27d-9c966dbc517c',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 6/12',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d4+10 damage.',
				damage: '2d4+10 damage',
				category: 1
			},
			{
				id: '6f26edfb-d009-4fba-9aab-58af0a41da2f',
				name: 'Chain Snag',
				action: {
					action: 1,
					trigger: 'requires a spiked chain',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 4d4+10 damage, and a Large or smaller target is grabbed. Sustain Minor: Ruus sustains the grab, and the grabbed creature takes 2d4 + 10 damage.',
				damage: '4d4+10 damage',
				category: 5
			},
			{
				id: '3db312a2-2c1c-41f1-a71c-3edf5143bb01',
				name: 'Spinning Chain',
				action: {
					action: 1,
					trigger: 'requires a spiked chain',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ruus makes two spiked chain attacks. If both attacks hit the same target, Ruus slides the target 1 square or knocks the target prone (Ruus’s choice).',
				damage: 'Ruus slides the target 1 square or knocks the target prone (Ruus’s choice)',
				category: 5
			},
			{
				id: 'ef1bf1db-263b-4740-97ec-ab2d81e1cf38',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ruus deals 2d6 extra damage against any creature granting combat advantage to him.',
				damage: 'ruus deals 2d6 extra damage against any creature granting combat advantage to him',
				category: 0
			},
			{
				id: 'a4269d60-cc6c-4178-b5f1-1f1170480cf3',
				name: 'Dhakaani Footwork',
				action: {
					action: 7,
					trigger: 'when ruus hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ruus shifts 1 square.',
				damage: 'Ruus shifts 1 square',
				category: 5
			},
			{
				id: 'acb3815a-15e8-4d32-901f-1c5554caa094',
				name: 'Dhakaani Onslaught',
				action: {
					action: 7,
					trigger: 'when ruus charges',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'One ally within 5 squares of Ruus can charge the same target as an immediate reaction.',
				damage: 'One ally within 5 squares of Ruus can charge the same target as an immediate reaction',
				category: 5
			},
			{
				id: '99d654ab-ed03-4029-b6ba-2c4a094f2a98',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when ruus is subjected to an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ruus rolls a saving throw against the effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Skirmisher (L)',
		phenotype: 'Medium natural humanoid (hobgoblin)'
	},
	{
		id: '8aab3758-6b01-4535-b4bd-d46494453997',
		name: 'Scarbrand Orc Berserker',
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
		senses: 'Perception +6; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech, Giant',
		skills: 'Endurance +11, Intimidate +8',
		equipment: '',
		category: 'Orc',
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
		hp: 87,
		initiative: 6,
		ac: 18,
		fortitude: 19,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bb14fec2-a854-4848-97dc-3fba99efdd0d',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d12+5 damage (crit 1d12 + 17).',
				damage: '1d12+5 damage (crit 1d12 + 17)',
				category: 1
			},
			{
				id: '78f9d630-2d75-4fd8-9905-202c89e9b229',
				name: 'Scarbrand Shriek',
				action: {
					action: 1,
					trigger: 'usable only while bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d6+2 psychic damage, and the berserker regains 10 hit points.',
				damage: '1d6+2 psychic damage',
				category: 5
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
		id: '4667e2e6-1e25-471d-917d-06d486464f76',
		name: 'Seren Dragon-Cult Barbarian',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: '',
		equipment: 'hide armor; war pick',
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
		hp: 171,
		initiative: 10,
		ac: 27,
		fortitude: 28,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '01821938-1691-4f15-9033-42ce309b22b6',
				name: 'War Pick',
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
				details: '2d8+7 damage (crit 2d8 + 23).',
				damage: '2d8+7 damage (crit 2d8 + 23)',
				category: 1
			},
			{
				id: '98840b48-e5f7-4d67-bbab-684195ffe51d',
				name: 'Hurling Axe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
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
				id: '3d8bb3e0-c497-47aa-9857-0166675e86d7',
				name: 'Pounding Tide',
				action: {
					action: 1,
					trigger: 'requires a war pick',
					sustainAction: 0,
					use: 1,
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
				details: '2d8+7 damage (crit 2d8 + 23), the barbarian pushes the target 3 squares, and the barbarian shifts 3 squares into a square that is adjacent to the target.',
				damage: '2d8+7 damage (crit 2d8 + 23)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '25a0737a-914b-44c3-8f7d-2cebb8db21ff',
		name: 'Shrouded Sage',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'eladrin',
		level: 18,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6, fly 9 (hover)',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +22, History +22, Insight +19, Intimidate +24',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 348,
		initiative: 13,
		ac: 34,
		fortitude: 30,
		reflex: 32,
		will: 33,
		regeneration: null,
		auras: [
			{
				id: 'e76b1048-b49e-4891-8e7a-b3c3d4f66b97',
				name: 'Shroud of Doubt',
				keywords: '',
				details: 'aura 5; each enemy within the aura does not benefit from resistance to psychic damage.'
			}
		],
		powers: [
			{
				id: '8303e766-4a71-4f69-88d6-2ed9703a98d8',
				name: 'Dark Touch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+5 psychic damage, and the target is stunned until the end of the shrouded sage’s next turn.',
				damage: '2d8+5 psychic damage',
				category: 1
			},
			{
				id: '1e302a99-4bb8-405f-b45d-d832430ec80d',
				name: 'Nightmares Made Real',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Conjuration, Fear, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'the shrouded sage conjures a Medium nightmare spirit into an unoccupied space within range. The spirit cannot be attacked. Any creature that starts its turn next to the spirit is subject to an attack; 2d8+7 psychic damage. Any creature that ends its turn next to the spirit is slowed until the end of its next turn. As a move action, the sage can move the spirit 5 squares. Sustain Minor: The nightmare spirit persists.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '2056465e-cd88-4acc-8553-618d827f738e',
				name: 'Terrifying Delusions',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'targets a creature taking ongoing psychic damage; 2d6+7 psychic damage, and the shrouded sage pushes the target 5 squares.',
				damage: 'targets a creature taking ongoing psychic damage',
				category: 3
			},
			{
				id: '1fb6edba-3b38-4110-b739-2e97b67569f3',
				name: 'Paralyzing Doubt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: '1d10+3 psychic damage, and the target takes ongoing 5 psychic damage and is immobilized (save ends both).',
				damage: '1d10+3 psychic damage',
				category: 1
			},
			{
				id: 'b0c26183-b389-4f36-9e5a-78737c6495e2',
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
				details: 'The shrouded sage teleports 5 squares.',
				damage: 'The shrouded sage teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 18 Elite Controller',
		phenotype: 'Medium fey humanoid (eladrin)'
	},
	{
		id: 'd4ab6b56-5cf7-4b7a-95e7-e9eb33420f1a',
		name: 'Sivis Wordsmith',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: 'gnome',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Elven, Draconic, Giant, Stonespeech',
		skills: 'Arcana +18, History +16, Religion +16, Stealth +9',
		equipment: 'dagger',
		category: '',
		strength: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		constitution: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 123,
		initiative: 7,
		ac: 26,
		fortitude: 25,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bd0dc848-f13d-409e-8565-d68d8c91987f',
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
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '49b68682-1b10-4ac1-9758-86ab735bdc12',
				name: 'Word of Stasis',
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
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d8 psychic damage, and the target is dazed (save ends).',
				damage: '2d8 psychic damage',
				category: 1
			},
			{
				id: 'e1b57ae7-ddd4-4ec6-a696-033eca966380',
				name: 'Dictate Destiny',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'a0361ec2-b48d-4fbf-bb0e-5ba4fb74c9c3',
				name: 'Voice of Reason',
				action: {
					action: 3,
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
				details: 'each ally in the burst can make a saving throw against any charm or fear effect, with a +3 bonus.',
				damage: 'with a +3 bonus',
				category: 3
			},
			{
				id: 'b44975e3-e6e1-4417-90bc-5e3729b1ff20',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when the wordsmith takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Sivis Wordsmith becomes invisible until after he or she attacks or until the end of his or her next turn.',
				damage: '',
				category: 5
			},
			{
				id: '89116433-6323-47cd-82ad-632452ab3aa1',
				name: 'Reactive Stealth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a Sivis Wordsmith has cover or concealment when he or she makes an initiative check at the start of an encounter, he or she can make a Stealth check to remain hidden.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Controller (L)',
		phenotype: 'Small fey humanoid (gnome)'
	},
	{
		id: '3eb60412-2711-49a8-bd8d-14ec0768d68a',
		name: 'Skullborn Necromancer',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +9, Bluff +10, Religion +9',
		equipment: '',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 61,
		initiative: 3,
		ac: 18,
		fortitude: 16,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2fbf91a9-529c-427b-8d01-7106dc5d985c',
				name: 'Draining Touch',
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
				details: '1d8+2 damage, and the target takes a -2 penalty to Fortitude and Will until the end of the Skullborn necromancer’s next turn.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'ba17fe0d-9575-42f0-b29c-21907446351c',
				name: 'Bone Dart',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 9,
					defence: 2
				},
				description: '',
				details: '1d6+3 necrotic damage plus 1d6 cold damage.',
				damage: '1d6+3 necrotic damage plus 1d6 cold damage',
				category: 1
			},
			{
				id: '1157fb60-1b08-4f1f-aba8-14984df59e85',
				name: 'Grave Chill',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Implement, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 9,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d6+3 necrotic damage, and the target is slowed and takes a -2 penalty to attack rolls (save ends both).',
				damage: '1d6+3 necrotic damage',
				category: 1
			},
			{
				id: '88fcaad9-e96b-49e9-8c00-489f5ec8195f',
				name: 'Mortal Terror',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Implement, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d6+3 damage, and the target moves its speed away from the Skullborn necromancer by the safest route possible.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '73c3b15e-b469-4f4a-b1a1-03d267b1bdec',
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
				details: 'The Skullborn necromancer can reroll an attack roll. It must use the second roll even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '033970fc-6f76-496c-a653-d8f18b5c6e2c',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Skullborn necromancer ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Controller',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: 'aafc1d80-4ddc-4f9a-8f64-bb4e01d69a33',
		name: 'Skycoach Pilot',
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
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Unaligned',
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
				id: '980e407f-e278-4501-a8af-9816c969eb88',
				name: 'Basic Attack template',
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
				details: '.',
				damage: '',
				category: 1
			},
			{
				id: 'e1aa89b8-4a23-4395-9570-d806b3e746e0',
				name: 'Special Attack template',
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

		info: 'Level 2 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '98b778b3-ecf0-4f17-9466-19f2102737cd',
		name: 'Sora Katra',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'hag',
		level: 22,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; darkvision, low-light vision',
		movement: '8, teleport 6',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Draconic, Elven, Giant, Goblin',
		skills: 'Arcana +24, Bluff +31, Diplomacy +31, History +24, Insight +24, Intimidate +26, Streetwise +26',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 416,
		initiative: 16,
		ac: 38,
		fortitude: 35,
		reflex: 36,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '5df6cd69-50a6-4fde-a058-98707fde3d3d',
				name: 'Distracting Visions',
				keywords: '',
				details: 'aura 3; each enemy within the aura takes a -5 penalty to Will.'
			}
		],
		powers: [
			{
				id: 'de143151-898d-401a-99f6-8abac07c8fcf',
				name: 'Cunning Claw',
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
				details: '3d8+5 damage, and Sora Katra slides the target 2 squares.',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: '4c24b2c8-58bc-4e21-adc2-6bc9416691b1',
				name: 'Curse of Misfortune',
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
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '2d6+5 damage, and ongoing 5 psychic damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '5c941f50-6900-4258-8f33-73a5db5dc868',
				name: 'False Path',
				action: {
					action: 3,
					trigger: 'aura',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'Sora Katra slides the target 6 squares.',
				damage: 'Sora Katra slides the target 6 squares',
				category: 5
			},
			{
				id: 'daffb8f5-b5fd-446a-b0d8-c8ea64bc76e2',
				name: 'Lost Within',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '2d8+5 psychic damage, and the target takes ongoing 10 psychic damage and is stunned (save ends both).',
				damage: '2d8+5 psychic damage',
				category: 1
			},
			{
				id: 'e185c01d-cad4-4d18-a0c4-6a4501caa6dc',
				name: 'Broken Curse',
				action: {
					action: 5,
					trigger: 'when a creature within 10 squares of sora katra taking ongoing psychic damage makes an attack roll',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets the triggering creature; 2d10+8 damage, and the target must make a second attack roll and use the lower result.',
				damage: '2d10+8 damage',
				category: 5
			},
			{
				id: '1484fbdd-8de9-41bc-8dbb-d47c04fa0d9f',
				name: 'Control Perceptions',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is dominated (save ends). Aftereffect: The target is dazed until the end of its next turn.',
				damage: '',
				category: 1
			},
			{
				id: '2ef83e3f-4572-4506-bceb-8b1431c472c2',
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
				details: 'Sora Katra can alter her physical form to appear as a female of any Medium humanoid race, including a unique individual.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -10
			},
			{
				type: 8,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'charm, disease, fear',
		tactics: '',

		info: 'Level 22 Elite Controller',
		phenotype: 'Medium fey humanoid (hag)'
	},
	{
		id: '59ddb68e-6aa0-48da-8062-b3f85403cd96',
		name: 'Sora Maenya',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'hag',
		level: 22,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22; darkvision, low-light vision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Elven, Giant',
		skills: 'Athletics +27, Bluff +22, Intimidate +22, Nature +22, Stealth +23',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 424,
		initiative: 20,
		ac: 40,
		fortitude: 39,
		reflex: 35,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c363caee-b24c-4f33-898c-0fef50a4b597',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d6+9 necrotic damage, and the target is marked and cannot spend healing surges or regain hit points until the end of Sora Maenya’s next turn.',
				damage: '3d6+9 necrotic damage',
				category: 1
			},
			{
				id: 'cb7bb1a4-70a9-4838-b5d5-a1d7bc0dfc26',
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
				details: 'Sora Maenya makes two claw attacks. If both attacks hit, each target takes 5 extra damage.',
				damage: 'each target takes 5 extra damage',
				category: 1
			},
			{
				id: '0d4f0238-3fdd-4407-800b-1bd8758d59b8',
				name: 'Devastating Strike',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '4d10+6 damage, and the target is stunned until the end of Sora Maenya’s next turn.',
				damage: '4d10+6 damage',
				category: 1
			},
			{
				id: '09119b4e-0bc1-480c-afb0-f93c8f2400f6',
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
					bonus: 27,
					defence: 1
				},
				description: '',
				details: '2d6+6 necrotic damage, and Sora Maenya regains 5 hit points for each creature damaged by this attack.',
				damage: '2d6+6 necrotic damage',
				category: 1
			},
			{
				id: 'f06f8322-0c70-4ee4-9109-9d78ba635755',
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
				details: 'Sora Maenya can alter her physical form to appear as a female of any Medium humanoid race, including a unique individual.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -10
			},
			{
				type: 2,
				value: -10
			},
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
		immune: 'disease, fear',
		tactics: '',

		info: 'Level 22 Elite Soldier',
		phenotype: 'Medium fey humanoid (hag)'
	},
	{
		id: '03d9750b-b673-4b89-8eb9-745bc2ed2119',
		name: 'Sora Teraza',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'blind, hag',
		level: 22,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +26; all-around vision, blindsight 20, truesight 20',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'All',
		skills: 'Arcana +30, Dungeoneering +26, History +30, Insight +31, Nature +25, Religion +30, Streetwise +22',
		equipment: '',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		wisdom: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 416,
		initiative: 16,
		ac: 38,
		fortitude: 32,
		reflex: 36,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cbc6fc50-ef69-4288-a686-28e951bc11d2',
				name: 'Distracting Touch',
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
					bonus: 26,
					defence: 2
				},
				description: '',
				details: '3d10+3 psychic damage, and the target takes a -5 penalty to attack rolls against Sora Teraza until the end of its next turn.',
				damage: '3d10+3 psychic damage',
				category: 1
			},
			{
				id: 'c3546602-1a3a-4f73-89c5-d9c8910779f7',
				name: 'Twist of Fate',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'one ally within range ends a condition that a save can end, and the target gains that condition (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '604e3efb-10a2-44d6-bf08-67276ad753e6',
				name: 'Teraza’s Whisper',
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
					bonus: 26,
					defence: 3
				},
				description: '',
				details: '2d6+3 damage, and the target is blinded and dazed (save ends both).',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: '284be78f-43dd-439d-a98c-4ada9a660ded',
				name: 'Timeslip',
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
				details: 'any ally in the burst can take a standard action immediately.',
				damage: '',
				category: 1
			},
			{
				id: 'f9c00dc4-8df0-48d1-99b8-98429df46744',
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
				details: 'Sora Teraza can alter her physical form to appear as an elderly female of any Medium humanoid race, including a unique individual,',
				damage: '',
				category: 3
			},
			{
				id: '6d6fe626-4bf6-4748-8d22-ed0178dd69da',
				name: 'Prophetic Knowledge',
				action: {
					action: 5,
					trigger: 'when sora teraza is hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker must make a second attack roll and use the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -10
			},
			{
				type: 8,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'charm, disease, fear',
		tactics: '',

		info: 'Level 22 Elite Controller (L)',
		phenotype: 'Medium fey humanoid (blind, hag)'
	},
	{
		id: '67c5862f-0f42-4f51-99a7-ab27befb23dc',
		name: 'Storm Front Cultist',
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
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Athletics +12, Diplomacy +9, Insight +6, Stealth +14',
		equipment: 'implement, wand; leather armor; rapier',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 88,
		initiative: 11,
		ac: 22,
		fortitude: 20,
		reflex: 22,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bfc2109b-0953-47e4-8fdc-88cc76a9998b',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '85f066f6-2f5d-4994-87d7-c6bebe6d7974',
				name: 'Storm Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Lightning',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d8+7 lightning damage, and the cultist slides the target 1 square.',
				damage: '1d8+7 lightning damage',
				category: 1
			},
			{
				id: 'b25ac96b-7bf4-47f1-a8f8-470c8fdc5430',
				name: 'Thundering Advantage',
				action: null,
				keywords: 'Thunder',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Storm Front cultist deals 2d6 extra thunder damage against any creature granting combat advantage to it, and slides the target 1 square.',
				damage: 'the storm front cultist deals 2d6 extra thunder damage against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: '23d08ec8-d9af-4e1d-a179-1b2bc2039b9e',
				name: 'Rapid Shift',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Storm Front cultist can shift 2 squares as a move action.',
				damage: 'A Storm Front cultist can shift 2 squares as a move action',
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
		id: '213007d8-0d72-446f-98f3-7aa82c67c6d5',
		name: 'Sulatar Flamespinner',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'drow',
		level: 18,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Giant, Primordial',
		skills: 'Religion +20',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 174,
		initiative: 12,
		ac: 32,
		fortitude: 31,
		reflex: 29,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '13bf16f9-1f83-45f8-8e45-52597fdb9f05',
				name: 'Burning Touch',
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
				details: '2d8+8 fire damage.',
				damage: '2d8+8 fire damage',
				category: 1
			},
			{
				id: '86a7569e-d367-435e-bdb2-ee2ecc03a412',
				name: 'Flaming Orb',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '2d8+8 fire damage, and the target is dazed until the end of the flamespinner’s next turn.',
				damage: '2d8+8 fire damage',
				category: 1
			},
			{
				id: '497a682c-b529-4ab7-bbd0-46289f5cffd2',
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
				details: 'until the end of the flamespinner’s next turn, the target grants combat advantage to all attackers and cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			},
			{
				id: '8b406d44-da11-4e28-911d-51ae575147e6',
				name: 'Soul Burn',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d8+4 fire damage, and ongoing 5 fire damage.',
				damage: '2d8+4 fire damage',
				category: 1
			},
			{
				id: '3db7de29-a78d-4cfc-9ea4-82c7aab75058',
				name: 'Web of Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire, Zone',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '3d8 fire damage, and the target is restrained (save ends). Effect: The burst creates a zone that lasts until the end of the encounter. Each creature that begins its turn within the zone takes 10 fire damage.',
				damage: '3d8 fire damage',
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

		info: 'Level 18 Controller',
		phenotype: 'Medium fey humanoid (drow)'
	},
	{
		id: 'c669c21b-2b7c-461b-a9c2-2638d6e63cf2',
		name: 'Talon of Tiamat',
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
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Draconic',
		skills: '',
		equipment: 'dagger',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 165,
		initiative: 11,
		ac: 31,
		fortitude: 28,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2af846cf-d50f-4863-a953-23591108de12',
				name: 'Dagger',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage plus 2d6 fire damage.',
				damage: '1d4+5 damage plus 2d6 fire damage',
				category: 1
			},
			{
				id: '04a00cd6-4a43-49f0-8ebb-1ca0925ebee7',
				name: 'Burning Blood Spittle',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '03a36074-acc9-4298-9eac-654eac85cf0f',
				name: 'Corrupting Blood',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 12',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends). The talon of Tiamat can dominate only one creature at a time. Aftereffect: The target is dazed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'afbb3b72-b803-43cd-87d2-a4c45ccd8703',
				name: 'Corrupting Soul',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 12',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'targets a creature dominated by the talon; 2d8+7 psychic damage.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '719abdb3-bb24-4d05-ac2c-ad069f1abf6b',
				name: 'Geyser of Blood',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Zone',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '2d10+5 acid damage, and ongoing 5 acid damage (save ends). Effect: The burst creates a zone that lasts until the end of the encounter. Each creature other than the talon of Tiamat that starts its turn within the zone falls prone.',
				damage: '2d10+5 acid damage',
				category: 1
			},
			{
				id: 'd6ad870a-ba01-463a-8485-c83351905187',
				name: 'Burning Blood Spray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '3d8+7 acid damage, and the target is blinded until the end of the talon’s next turn.',
				damage: '3d8+7 acid damage',
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

		info: 'Level 17 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'fa2db1d3-ad52-4efd-9602-d2bbc9d3d24c',
		name: 'Tarkanan Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 9,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +13, Stealth +17, Streetwise +13, Thievery +14',
		equipment: 'dagger',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 152,
		initiative: 11,
		ac: 26,
		fortitude: 22,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8d92367e-7383-4814-a9be-886297917bc9',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '3e438f40-b978-472a-a111-4ba9fc6324d9',
				name: 'Tear through Space',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'The Tarkanan assassin teleports up to 6 squares, and each enemy adjacent to the square where it appears grants combat advantage to it; the assassin then makes the following attack; 2d4+7 damage.',
				damage: '2d4+7 damage',
				category: 5
			},
			{
				id: '945f55fb-9431-4acc-a6a0-2d3ffb8be5e2',
				name: 'Khyber’s Veil',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: 'Close burst 3',
				attack: null,
				description: '',
				details: 'targets one creature; the Tarkanan assassin is invisible to that target until the end of the assassin’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: 'eb9a2fc6-bb95-4e8b-be19-20bc53a2e692',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Tarkanan assassin deals 2d6 extra damage against any creature granting combat advantage to it.',
				damage: 'a tarkanan assassin deals 2d6 extra damage against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: '35d1d9a1-7608-4d43-88ba-6c8feb5d546b',
				name: 'Fearsome Blade',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Tarkanan assassin can score a critical hit on a roll of 18–20 when making a dagger attack.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '9c39ad16-7298-4136-b423-0516d838d22c',
		name: 'Tarkanan Soldier',
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
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +11, Intimidate +7',
		equipment: 'battleaxe; chainmail; handaxe',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 63,
		initiative: 6,
		ac: 20,
		fortitude: 19,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3f3fe5a4-3dc9-43ef-8c53-2dc00131f1b6',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage, and the target is marked until the start of the Tarkanan soldier’s next turn.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '404298e0-1eb1-4c1e-bcdd-2f0a36fbfad7',
				name: 'Handaxe',
				action: {
					action: 1,
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
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '493bb815-79c1-47f6-ba9a-9caa382fe099',
				name: 'Khyber’s Grasp',
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
					bonus: 9,
					defence: 1
				},
				description: '',
				details: '2d8+4 necrotic damage, and the target is immobilized (save ends).',
				damage: '2d8+4 necrotic damage',
				category: 1
			},
			{
				id: '07ebc13b-f107-484f-9f66-516399902ff3',
				name: 'Watchful Eye',
				action: {
					action: 4,
					trigger: 'when a marked enemy leaves an adjacent square',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The Tarkanan soldier makes a melee basic attack against the enemy, even if the enemy is shifting.',
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
		id: 'eff58906-8e74-41f5-96df-3aa5ee4c7687',
		name: 'Tharashk Hunter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 6,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Goblin',
		skills: 'Athletics +12, Insight +11, Nature +11, Stealth +12',
		equipment: 'arrow; hide armor; longbow; longsword',
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
		hp: 56,
		initiative: 7,
		ac: 18,
		fortitude: 19,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8bed8fa1-d0f8-478e-9ba9-0198d585b139',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '8965ddad-32e4-4429-adfd-f313f11a9ad4',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'c77f9a92-b4af-4bd4-a5a3-31cb31d73bdc',
				name: 'Pinpoint the Prey',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage, and the target grants combat advantage to each ally that can see it (save ends).',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '740e1953-da12-46f3-a2d0-7359f9cc9a4d',
				name: 'Cripple the Prey',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d10+5 damage, and the target is slowed (save ends).',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: '3a1b882a-edff-4331-bcc7-91f69b3c0a5e',
				name: 'Ranged Awareness',
				action: null,
				keywords: '',
				condition: '',
				range: 'A Tharashk hunter gains a +2 bonus to AC against ranged attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '96464e8d-88b0-4591-90b8-c4f46e31fa7b',
				name: 'Swift Stalker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Tharashk hunter can move its speed without taking any penalty to Stealth checks.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Artillery',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '85259bb1-6a92-4878-b5a0-b2a6c6656842',
		name: 'Thelonius and Lucretia Finch',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 10,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Bluff +11, Intimidate +11, Religion +15',
		equipment: 'dagger',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 104,
		initiative: 11,
		ac: 24,
		fortitude: 21,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: '990b3dc5-0c99-4d76-8975-7ceb196d8fac',
				name: 'Repellant Presence',
				keywords: '',
				details: 'aura 3; enemies treat each space within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: 'e58dd9c5-698f-41cf-99c0-34705266263a',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d4+7 damage.',
				damage: '1d4+7 damage',
				category: 1
			},
			{
				id: '19201ea0-630f-4543-87c0-e094d7c458f8',
				name: 'Sluice of Corruption',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 8',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'targets two creatures; 2d6+5 necrotic damage, and the target grants combat advantage to the Finch (save ends).',
				damage: '2d6+5 necrotic damage',
				category: 1
			},
			{
				id: '22fa9a3b-b5ae-4ae8-a996-09a2f47ea5f1',
				name: 'Hands of the Void',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '3d8+5 necrotic damage, and the target is immobilized (save ends). Effect: The burst creates a zone of difficult terrain that lasts until the end of the Finch’s next turn. Each creature that starts its turn immobilized within the zone takes 5 necrotic damage. Sustain Minor: The Finch repeats the attack against any creatures in the zone that are not immobilized, and the zone persists until the end of the Finch’s next turn.',
				damage: '3d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'bb8878b3-2719-40fe-ab8a-d7befc287d32',
				name: 'Tide of Shadow',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'the Finch pushes the target 3 squares.',
				damage: 'the Finch pushes the target 3 squares',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '23af49d7-d980-45d2-be29-46d47e8d4506',
		name: 'Thuranni Assassin',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 10,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Acrobatics +16, Bluff +13, Stealth +16, Thievery +16',
		equipment: 'crossbow; crossbow bolts (20); dagger; leather armor',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 160,
		initiative: 15,
		ac: 24,
		fortitude: 20,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1be88168-f6a4-4401-aa2d-2ad21d400ff2',
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
				details: '1d4+7 damage.',
				damage: '1d4+7 damage',
				category: 1
			},
			{
				id: 'ecaa3181-719c-4b49-a986-f2436f78a328',
				name: 'Crossbow',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '56291b36-d29b-4205-b0b9-e25b09dadfa4',
				name: 'Shadowblind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '2d6+5 damage, and the target is blinded (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '880dd527-b3cc-42f5-aa4b-f5566688e1c2',
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
				details: 'The Thuranni assassin gains total concealment from all creatures until it hits with an attack.',
				damage: '',
				category: 1
			},
			{
				id: '315f526b-1c46-418f-b3f1-5e6c14a9a5f0',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Thuranni assassin deals 2d8 extra damage on attacks against any creature granting combat advantage to it.',
				damage: 'a thuranni assassin deals 2d8 extra damage on attacks against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: 'b1fe4807-1ac5-416d-ae6d-de83855f9172',
				name: 'Mark of Shadow',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a Thuranni assassin misses with an attack while hidden, it remains hidden.',
				damage: '',
				category: 0
			},
			{
				id: '3b2d9371-4a0a-4139-99dd-c0aa9a0e4703',
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
				details: 'A Thuranni assassin can reroll an attack roll and must use the second roll.',
				damage: '',
				category: 4
			},
			{
				id: '52063ad9-db34-4a37-b24b-f84c035d6b97',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A Thuranni assassin ignores difficult terrain when it shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Lurker',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '90354982-d1f2-4d74-a684-2e3aab89f605',
		name: 'Tzaryan Rrac',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'oni mage',
		level: 14,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Draconic, Giant, Goblin',
		skills: 'Arcana +17, Bluff +19, History +17, Insight +14, Religion +17',
		equipment: 'chainmail; glaive',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 182,
		initiative: 10,
		ac: 30,
		fortitude: 27,
		reflex: 25,
		will: 29,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: 'f02719e0-ab00-4ff9-bd19-f7e258a48aaf',
				name: 'Glaive',
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
				details: 'Reach 3; 1d10+5 damage, and Tzaryan Rrac is invisible to the target until the end of his next turn.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '942421d3-5655-45c8-b19a-5faad06c169c',
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
				details: 'Tzaryan Rrac makes two glaive attacks.',
				damage: '',
				category: 1
			},
			{
				id: '0d43b905-97cc-49d6-90f9-8a1ddf9834e1',
				name: 'Deadwinter Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Necrotic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+5 cold and necrotic damage, and the target is slowed (save ends).',
				damage: '2d6+5 cold and necrotic damage',
				category: 1
			},
			{
				id: '8650b98f-972e-4794-a82e-ef15e6aa3e33',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Tzaryan deals 1d10 extra damage on melee attacks against any creature granting combat advantage to him.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '3a9cce54-033f-493f-b6d5-b057ab91689e',
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
				details: 'Tzaryan can disguise himself to appear as any Medium or Large humanoid. A creature that makes a successful Insight check (opposed by Tzaryan’s Bluff check) sees through the disguise.',
				damage: '',
				category: 3
			},
			{
				id: 'ca680d8e-e895-4e32-a697-6cfee29fa649',
				name: 'Invisibility',
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
				details: 'Tzaryan turns invisible until he attacks.',
				damage: '',
				category: 3
			},
			{
				id: '002ee71a-0ace-45be-bec8-a7946a45cee8',
				name: 'Reactive Glamer',
				action: {
					action: 7,
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
				details: 'Tzaryan Rrac uses invisibility.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Lurker',
		phenotype: 'Large natural humanoid (oni mage)'
	},
	{
		id: '56e91d65-7a88-4855-94cf-0b739ba12227',
		name: 'Umbragen Shadow Walker',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'drow',
		level: 9,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Deep Speech, Giant',
		skills: 'Stealth +14',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 154,
		initiative: 13,
		ac: 25,
		fortitude: 20,
		reflex: 24,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '39975d57-b04a-4c95-8434-19f43c849b74',
				name: 'Shadowblade',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d6+5 necrotic and psychic damage.',
				damage: '2d6+5 necrotic and psychic damage',
				category: 1
			},
			{
				id: '29f8a159-39f0-44a3-ac06-e7968c6eab2c',
				name: 'Shadowbolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic',
				condition: '(standard',
				range: 'Ranged 15',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d6+5 necrotic and psychic damage.',
				damage: '2d6+5 necrotic and psychic damage',
				category: 1
			},
			{
				id: 'dbcc2bd1-142b-4121-9bd7-2f78486fa7f2',
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
				details: 'The Umbragen shadow walker makes two shadowblade attacks.',
				damage: '',
				category: 1
			},
			{
				id: '8d0b7d19-3ed0-4c1c-be06-e171caa988bd',
				name: 'Soulblade',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '3d8+5 necrotic and psychic damage, and the target cannot spend healing surges until the end of the shadow walker’s next turn.',
				damage: '3d8+5 necrotic and psychic damage',
				category: 1
			},
			{
				id: 'c4c26453-6a04-4c59-848f-4a51278abbbc',
				name: 'Dancing Shadows',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 3 within 12',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: '1d8+2 psychic damage, and the target is blinded until the end of the shadow walker’s next turn.',
				damage: '1d8+2 psychic damage',
				category: 1
			},
			{
				id: '7f3a0214-251a-4648-afaa-fc5d1293525b',
				name: 'Could of Darkness',
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
				details: 'this power creates a cloud of darkness that remains in place until the end of the shadow walker’s next turn. The cloud blocks line of sight for all creatures except the shadow walker. Any creature entirely within the cloud (except the shadow walker) is blinded until it exits.',
				damage: '',
				category: 3
			},
			{
				id: 'a094d74b-33cf-4755-94b6-55a18b13de98',
				name: 'Shadow Form',
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
				details: 'Until the end of its next turn, the shadow walker gains the insubstantial and phasing qualities, gains a +5 bonus to Stealth checks, and gains vulnerable 5 radiant.',
				damage: 'gains a +5 bonus to Stealth checks',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Lurker',
		phenotype: 'Medium fey humanoid (drow)'
	},
	{
		id: '1b02ebaa-9d23-4f96-a8c7-a5df825919ca',
		name: 'Valaes Tairn Outrider',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Nature +12, Stealth +14',
		equipment: 'arrow; leather armor; shortbow; spear',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 87,
		initiative: 11,
		ac: 22,
		fortitude: 19,
		reflex: 21,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'da64d135-63fe-4e00-8165-f1ed6786b28b',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '668d75b6-018b-4d60-a3f9-ca593147c20a',
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
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: 'c5c6d996-8565-4a74-a3bd-c431a634954a',
				name: 'Spear Charge',
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
				details: 'The outrider makes a charge attack that deals 1d8 extra damage. The charge movement does not provoke opportunity attacks.',
				damage: 'the outrider makes a charge attack that deals 1d8 extra damage',
				category: 1
			},
			{
				id: '98f30082-2cf3-43ab-9fc6-6a4f46f7dc95',
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
				id: 'a98b5280-65db-4eb3-900a-ae67577dea12',
				name: 'Roll With the Punches',
				action: {
					action: 4,
					trigger: 'when an enemy makes a melee attack against the outrider',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The outrider shifts 2 squares.',
				damage: 'The outrider shifts 2 squares',
				category: 5
			},
			{
				id: 'fdf72a28-0a35-4326-be80-114b8da59eea',
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
			},
			{
				id: '045dd319-9154-43ae-a242-876a0384be3f',
				name: 'Born in the Saddle',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An outrider bestows its wild step power on any mount it rides.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '5ee5bf01-e4f9-44c6-8d2e-880e9d2d4f70',
		name: 'Valaes Tairn Plainswalker',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'elf',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Nature +14, Stealth +12',
		equipment: 'arrow; leather armor; shortbow; spear',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 89,
		initiative: 7,
		ac: 22,
		fortitude: 19,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0ea7a5a8-195c-43a2-b538-650bc85ef872',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '24ebae1c-8bb7-48a8-8fef-140c46925ff8',
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
				details: '1d8+7 damage, and the target is slowed until the end of the plainswalker’s next turn.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '77db3c3e-b96f-463c-8dff-8c3bcf13b5b2',
				name: 'Storm Shot',
				action: {
					action: 1,
					trigger: 'requires a shortbow',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder, Weapon',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'targets up to three creatures; 1d8+3 thunder damage, and the target is knocked prone.',
				damage: '1d8+3 thunder damage',
				category: 5
			},
			{
				id: '1ec505d5-0dd8-4e5d-8d66-976b4f0d888d',
				name: 'Thorn Maze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 2 within 12',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '2d4+4 damage, and the target is immobilized (save ends). Effect: The burst creates a zone of difficult terrain that lasts until the end of the encounter.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: '067fc5f3-0b20-43c0-babd-0a65fb8e23f1',
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
				id: 'd3470b08-5056-42fc-9c45-590c81319480',
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
			},
			{
				id: 'beac2426-717c-4877-825b-9aabcb2126b0',
				name: 'Born in the Saddle',
				action: null,
				keywords: '',
				condition: 'encounter',
				range: '',
				attack: null,
				description: '',
				details: 'A plainswalker bestows its wild step power on any mount it rides.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller',
		phenotype: 'Medium fey humanoid (elf)'
	},
	{
		id: '36b016d3-24e9-4bab-bc92-cd5df750a519',
		name: 'Valenar Riding Horse',
		details: '',
		size: 3,
		origin: 2,
		type: 1,
		keywords: 'mount',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; low-light vision',
		movement: '10',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +7',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 37,
		initiative: 7,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a229ca54-f65e-4cfc-90c4-6608254c85e4',
				name: 'Kick',
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
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'ca40cf6a-467d-4a26-9429-27bb53d3ab0c',
				name: 'Nimble Beast',
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
				details: 'The Valenar riding horse shifts 2 squares.',
				damage: 'The Valenar riding horse shifts 2 squares',
				category: 2
			},
			{
				id: 'd873fc9e-066f-4e4f-8ea8-18a4d349120d',
				name: 'Swift Steed',
				action: {
					action: 3,
					trigger: 'while mounted by a friendly rider of 2nd level or higher',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Mount',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Valenar riding horse gains a +4 bonus to speed until the end of its next turn.',
				damage: 'The Valenar riding horse gains a +4 bonus to speed until the end of its next turn',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Large fey beast (mount)'
	},
	{
		id: 'a9286726-b567-4251-87f8-65e06e47e30d',
		name: 'Veln',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 13,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Bluff +15, Diplomacy +15, Stealth +17',
		equipment: 'leather armor; short sword; shuriken',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 102,
		initiative: 16,
		ac: 27,
		fortitude: 24,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '34851310-2dcc-40a3-84ff-e9cffacf31a4',
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
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: 'a0a50736-b237-4780-badb-85111512e4a7',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'cc59c674-7fd9-498f-ae7a-afe04542d914',
				name: 'Diverting Barrage',
				action: {
					action: 1,
					trigger: 'requires a shuriken',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close blast 4',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d6+6 damage, and the target takes a -5 penalty to Perception checks until the end of Veln’s next turn. Effect: Veln is invisible to the target until the end of his next turn.',
				damage: '2d6+6 damage',
				category: 5
			},
			{
				id: 'fc39657d-2c5f-4448-9774-13a11da7b1ad',
				name: 'Hit and Run',
				action: {
					action: 1,
					trigger: 'requires short sword or shuriken',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Veln shifts 2 squares, makes a basic melee or basic ranged attack, then shifts 2 squares.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '91ec022f-62f8-4209-8b43-dc833633292b',
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
				details: 'Veln alters his physical form to take on the appearance of any Medium humanoid, including a unique individual.',
				damage: '',
				category: 3
			},
			{
				id: '950b8b5f-cb1f-4900-b2fc-4473b6bee832',
				name: 'Stealthy at Speed',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When making Stealth checks, Veln takes no penalty when moving his normal speed, and a -5 penalty when running.',
				damage: 'and a -5 penalty when running',
				category: 0
			},
			{
				id: 'a88d196d-b531-4c8d-ba9a-66aca729d2f3',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Veln deals 2d8 extra damage against any creature granting combat advantage to him, and the target is slowed until the end of Veln’s next turn.',
				damage: 'veln deals 2d8 extra damage against any creature granting combat advantage to him',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Lurker',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: 'bc2cd0b1-e227-4747-b863-4e374dcc27c6',
		name: 'Whirling Blade Swarm',
		details: 'A cloud of spinning metal shards darts through the air like a flock',
		size: 2,
		origin: 3,
		type: 0,
		keywords: 'blind, swarm',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; blindsight 10',
		movement: 'fly 10',
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
		hp: 114,
		initiative: 12,
		ac: 25,
		fortitude: 23,
		reflex: 25,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '14de9714-8736-4270-b2d8-78f7f28f5a4c',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; each enemy that starts its turn within the aura takes 5 damage.'
			}
		],
		powers: [
			{
				id: '224a8536-8ec3-49a6-8dca-8fda2545f3c8',
				name: 'Swarm of Blades',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'b43edf7e-d830-4133-9dab-8e899e882849',
				name: 'Relentless Bladestorm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The whirling blade swarm shifts up to 5 squares and can move through enemy-occupied squares as it moves. It makes a melee basic attack against any creature whose space it enters. The swarm cannot attack a target more than once in this fashion, and it must end its movement in an unoccupied square.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: '',
		tactics: '',

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium immortal animate (blind, swarm)'
	},
	{
		id: '53fece15-7786-4415-93ec-296cb70cbde2',
		name: 'Winter Sentinel',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 10,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +11, Intimidate +10, Nature +14',
		equipment: 'heavy shield; hide armor; longsword',
		category: '',
		strength: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 101,
		initiative: 10,
		ac: 26,
		fortitude: 23,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '37e36e58-ff48-4936-a59b-17bc48764983',
				name: 'Longsword',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d6 poison damage, and the target is marked until the end of the sentinel’s next turn.',
				damage: '1d8+5 damage plus 1d6 poison damage',
				category: 1
			},
			{
				id: '76891e4f-a631-4049-8781-e15741be76cc',
				name: 'Winter’s Fang',
				action: {
					action: 1,
					trigger: 'requires a longsword',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d6 poison damage, and the target is marked and immobilized until the end of the winter sentinel’s next turn.',
				damage: '1d8+5 damage plus 1d6 poison damage',
				category: 5
			},
			{
				id: '81271e5c-7651-40c4-ad99-88238a8cd545',
				name: 'Winter Fugue',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Disease',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'targets a creature marked by winter’s fang; the target contracts the winter fugue disease.',
				damage: '',
				category: 4
			},
			{
				id: 'bb9d813d-d5cb-4aab-bba6-ac2fc2234fb9',
				name: 'Winnow the Weak',
				action: null,
				keywords: '',
				condition: '',
				range: 'A winter sentinel’s melee attacks deal 1d6 extra damage against a bloodied target it has marked.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
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

		info: 'Level 10 Soldier',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '389a7355-cf7d-45d5-9a1b-2b5010b3f2fb',
		name: 'Winter Witch',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 11,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +14, Intimidate +13, Nature +15, Religion +10',
		equipment: 'leather armor; sickle',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		wisdom: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 114,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '48596893-e73e-4b86-b6d5-4742212c9985',
				name: 'Sickle',
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
				details: '2d6+7 damage, and the target gains vulnerable 5 necrotic until it moves more than 5 squares away from the winter witch.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '2483cf71-d8b1-41b3-8c14-416a787c4766',
				name: 'Rot Tide',
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
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d10+3 necrotic damage, and the target takes ongoing 5 necrotic damage and is slowed (save ends both).',
				damage: '1d10+3 necrotic damage',
				category: 1
			},
			{
				id: '905656f9-d168-49a0-a0b9-d2e3600e2a5c',
				name: 'Worms of the Earth',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d10+3 necrotic damage, and the target is immobilized (save ends).',
				damage: '2d10+3 necrotic damage',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 11 Controller',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '29ce47e8-70c6-4fbc-bdcb-2d77e82d1a9b',
		name: 'Yllosavax',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 19,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '8, fly 8 (hover), overland flight 12',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Arcana +20, Insight +17, Religion +20',
		equipment: '',
		category: '',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 732,
		initiative: 12,
		ac: 31,
		fortitude: 32,
		reflex: 31,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bfd4d8fa-3b83-42f5-acf1-c41a49102f75',
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
				details: 'Reach 2; 4d6+7 damage.',
				damage: '4d6+7 damage',
				category: 1
			},
			{
				id: '0ce368b4-fd16-4d47-a7a2-2f79e27872c8',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '93f96a84-b382-47d0-aea3-c7a2032bcf0d',
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
				details: 'Yllosavax makes a claw attack against each enemy within reach. She also attacks one creature with a bite.',
				damage: '',
				category: 1
			},
			{
				id: 'af1c4808-d0b3-409c-8a0d-d73b0082ac87',
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
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d8+7 cold damage, and the target gains vulnerable 5 to all damage (save ends). Miss: Half damage.',
				damage: '2d8+7 cold damage',
				category: 1
			},
			{
				id: '2765c397-beab-4fff-b9bc-504308742769',
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
				details: 'Breath weapon recharges, and Yllosavax uses it.',
				damage: '',
				category: 5
			},
			{
				id: '9c210d35-3481-4a34-b126-64e2d56dbaa0',
				name: 'Mesmerizing Reflections',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target makes a basic attack with a +2 bonus to the attack roll and the damage roll against a creature of Yllosavax’s choice.',
				damage: 'the target makes a basic attack with a +2 bonus to the attack roll and the damage roll against a creature of yllosavax’s choice',
				category: 1
			},
			{
				id: 'bd93d7c2-757a-4bc0-9993-75c02befa68b',
				name: 'Silver Backlash',
				action: {
					action: 4,
					trigger: 'when yllosavax is hit by a melee attack while bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: 'area of blast must include the triggering creature; 1d6+5 radiant damage.',
				damage: '1d6+5 radiant damage',
				category: 5
			},
			{
				id: '13b3beb4-fef3-4b67-aa3b-bdcef29b55f5',
				name: 'Door of Fog',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation, Zone',
				condition: '',
				range: 'Close burst 3',
				attack: null,
				description: '',
				details: 'the burst creates a zone of heavily obscured squares that lasts until the end of the encounter. Effect: Yllosavax teleports 20 squares and does not need line of sight to her destination.',
				damage: 'Yllosavax teleports 20 squares and does not need line of sight to her destination',
				category: 2
			},
			{
				id: 'e26e6ffe-6387-4222-a79d-f60da341f921',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Yllosavax can make opportunity attacks against all enemies within her reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: '35267cf4-181b-45d1-92c2-ce2210c88baf',
				name: 'Change Shape',
				action: {
					action: 3,
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
				details: 'Yllosavax alters her physical form to take on the appearance of a young, white-haired female eladrin.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -20
			},
			{
				type: 9,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Solo Brute',
		phenotype: 'Large natural beast (dragon)'
	},
	{
		id: '6bee91e1-8341-4417-a6cb-ce8a300bda84',
		name: 'Ancient Brood Swarm White Dragon',
		details: '',
		size: 5,
		origin: 4,
		type: 1,
		keywords: 'dragon',
		level: 24,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '9 (ice walk), fly 9 (hover), overland flight 12',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Athletics +24',
		equipment: '',
		category: 'Dragon',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1145,
		initiative: 15,
		ac: 38,
		fortitude: 43,
		reflex: 37,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '22700cd6-65fd-4027-83a1-213ff0a29f38',
				name: 'Aura of Winter',
				keywords: '',
				details: '(Cold) aura 5; a creature that enters or begins its turn in the aura takes 30 cold damage. The ground is treated as difficult terrain, and creatures flying in the aura (other than the dragon) move at half speed. Creatures in the aura have concealment against ranged attacks.'
			}
		],
		powers: [
			{
				id: 'aa55bf5e-d37c-4a94-8d91-646d9ea3494f',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d12 + 7 plus 3d12 cold damage (plus an extra 3d12 damage on a successful opportunity attack).',
				damage: '2d12 + 7 plus 3d12 cold damage (plus an extra 3d12 damage on a successful opportunity attack)',
				category: 1
			},
			{
				id: '3798073f-4c89-4c2d-8392-873c3eafd379',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d12 + 7 damage.',
				damage: '2d12 + 7 damage',
				category: 1
			},
			{
				id: '2db731d7-e175-4eeb-935e-b2284b6b5657',
				name: 'Dragon’s Fury',
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
				details: 'The dragon males two claw attacks. If the dragon hits a single target with both claws, it makes a bite attack against the same target.',
				damage: '',
				category: 1
			},
			{
				id: '7e31c374-f62f-4a3c-b7c3-160ecc2dae96',
				name: 'Icy Tomb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'The target is encased in ice; 4d12 + 9 damage, and the target is exposed to brood fever.',
				damage: '4d12 + 9 damage',
				category: 1
			},
			{
				id: '6b6e9bd2-ef40-4201-b279-7c616ceb2995',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Disease',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '8d6 + 9 cold damage, the target is slowed and weakened (save ends both), and the target is exposed to brood fever.',
				damage: '8d6 + 9 cold damage',
				category: 1
			},
			{
				id: '1c58d0c1-9c10-428a-8d7f-390ddd80ec66',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Disease',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dragon’s breath weapon recharges, and the dragon uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '379c22cc-b151-4a24-8a9c-dac59d1aeed5',
				name: 'Frightful Presence',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is stunned until the end of the dragon’s next turn. Aftereffect: the target takes a -2 penalty to attack rolls (save ends).',
				damage: 'the target takes a -2 penalty to attack rolls (save ends)',
				category: 1
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
		immune: '',
		tactics: '',

		info: 'Level 24 Solo Brute',
		phenotype: 'Gargantuan natural beast (dragon)'
	},
	{
		id: '31d28f5e-41c4-4d48-ba29-b66846e9b2b6',
		name: 'Animate Column',
		details: '',
		size: 2,
		origin: 3,
		type: 0,
		keywords: '',
		level: 26,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Endurance +26',
		equipment: 'bastard sword',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 243,
		initiative: 23,
		ac: 42,
		fortitude: 40,
		reflex: 38,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '99d0ca12-ac29-4b73-adec-99a684ac0f6e',
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
				details: '2d10 + 10 damage; Effect: target is marked until the end of the animate column’s next turn.',
				damage: '2d10 + 10 damage',
				category: 1
			},
			{
				id: '3746e3f3-6246-41f2-9e2f-2e44498217cb',
				name: 'Paralyzing Strike',
				action: {
					action: 1,
					trigger: 'requires a bastard sword',
					sustainAction: 0,
					use: 0,
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
				details: '2d10 + 10 damage, and if the target is marked, it’s immobilized (save ends).',
				damage: '2d10 + 10 damage',
				category: 5
			},
			{
				id: 'a11a9ba7-edf2-4734-aa6d-e7276b3c2093',
				name: 'Terror Smash',
				action: {
					action: 1,
					trigger: 'requires a bastard sword',
					sustainAction: 0,
					use: 0,
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
				details: '2d10 + 10 damage, and all enemies that can see the animate column are marked by it until the end of its next turn.',
				damage: '2d10 + 10 damage',
				category: 5
			},
			{
				id: 'fb1a6d3a-ac43-4fd8-be27-ef91360fa419',
				name: 'Smash Back',
				action: {
					action: 5,
					trigger: 'requires a bastard sword; when an opponent first enters an adjacent square',
					sustainAction: 0,
					use: 0,
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
				details: '2d10 + 10 damage, and the target is pushed 2 squares.',
				damage: '2d10 + 10 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 26 Soldier',
		phenotype: 'Medium immortal animate'
	},
	{
		id: 'd9d3f8e7-62cf-4139-a01f-ce4d11dd8083',
		name: 'Aspect of Atropus',
		details: '',
		size: 5,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +22; darkvision, truesight 20',
		movement: '10',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Endurance +29, Intimidate +30',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		hp: 1104,
		initiative: 17,
		ac: 42,
		fortitude: 43,
		reflex: 38,
		will: 41,
		regeneration: null,
		auras: [
			{
				id: '5f64c498-5844-474f-a690-2f99665a85c9',
				name: 'Aura of Fear and Death',
				keywords: '',
				details: '(Fear, Necrotic) aura 5; enemies that enter or start their turn in the aura take 10 necrotic damage (20 necrotic damage when the Aspect of Atropus is bloodied).'
			}
		],
		powers: [
			{
				id: 'a9c54fc6-8ced-428d-89b9-77fce4aa703c',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d12+10 necrotic damage, and the target is weakened until the end of the aspect of Atropus’s next turn.',
				damage: '3d12+10 necrotic damage',
				category: 1
			},
			{
				id: 'f730f265-ae8b-4366-bef5-1bae8df081eb',
				name: 'Slams of Doom',
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
				details: 'The aspect of Atropus makes four basic attacks, no more than two can be on the same target.',
				damage: '',
				category: 1
			},
			{
				id: '01fadd60-74ab-449b-af4a-9fd9b6671ca3',
				name: 'Pounding Strike',
				action: {
					action: 5,
					trigger: 'when an enemy moves or shifts into a square adjacent to the aspect of atropus',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; targets the triggering enemy; 3d12 + 10 necrotic damage, and the target is weakened and immobilized (save ends both) and the Aspect of Atropus shifts 1 square.',
				damage: '3d12 + 10 necrotic damage',
				category: 5
			},
			{
				id: '23cd9931-9f56-4818-a0ea-44fafb33354f',
				name: 'Blight of Darkflame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Close Burst 5',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '4d8+10 fire and necrotic damage, and target takes ongoing 10 fire and necrotic damage (save ends); aftereffect: target takes ongoing 5 fire and necrotic damage (save ends).',
				damage: '4d8+10 fire and necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 30 Solo Brute',
		phenotype: 'Gargantuan elemental humanoid (undead)'
	},
	{
		id: '16b44623-a612-4424-beef-56c994f770e2',
		name: 'Aspect of Sertrous',
		details: '',
		size: 5,
		origin: 3,
		type: 2,
		keywords: 'reptile',
		level: 30,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '10',
		alignment: 'Chaotic Evil',
		languages: 'Supernal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 32,
			modifier: 11,
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 1120,
		initiative: 20,
		ac: 42,
		fortitude: 42,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: '63709417-1432-4461-9a88-2e3099f2ba87',
				name: 'Form of Madness',
				keywords: '',
				details: '(Psychic) aura 2; enemies that start their turn within the aura take 15 psychic damage are slowed until the end of their turn.'
			}
		],
		powers: [
			{
				id: 'ce427784-bc09-450c-84d2-003d7b63b8a3',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d8 + 11 damage, and ongoing 15 poison damage (save ends).',
				damage: '3d8 + 11 damage',
				category: 1
			},
			{
				id: 'df561f3e-7882-48b3-ad40-17d4d5c57544',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d12 + 11 damage.',
				damage: '2d12 + 11 damage',
				category: 1
			},
			{
				id: '4949488f-bda1-400f-aa50-eeb7e008b270',
				name: 'Fury of Sertrous',
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
				details: 'Sertourous makes a bite attack and two claw attacks, each against different targets. If all of the attacks hit, Sertourous can make another bite attack against any creature within reach.',
				damage: '',
				category: 1
			},
			{
				id: '5640862f-8cc1-4610-9001-13df9a1e6361',
				name: 'Awesome Bite',
				action: {
					action: 4,
					trigger: 'when an enemy enters an adjacent square',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Sertros makes a bite attack and on a hit the target is also pushed 2 squares.',
				damage: 'Sertros makes a bite attack and on a hit the target is also pushed 2 squares',
				category: 5
			},
			{
				id: '0311e436-906b-46b8-91c7-4ef9ef2a3c78',
				name: 'Poison Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Poison',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: '4d10 +11 poison damage, and the target is weakened (save ends).',
				damage: '4d10 +11 poison damage',
				category: 1
			},
			{
				id: 'bc0ed77a-6cda-4f74-812f-9b495b72d3dd',
				name: 'Horrific Roar',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'the target is dazed (save ends) and immobilized (save ends).',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'necrotic 20, radiant 20',
		vulnerable: '',
		immune: 'poison',
		tactics: '',

		info: 'Level 30 Solo Brute',
		phenotype: 'Gargantuan immortal humanoid (reptile)'
	},
	{
		id: '966d3f5d-8507-4397-a998-8d7e9301599b',
		name: 'Aspects of Leviathan',
		details: '',
		size: 5,
		origin: 0,
		type: 1,
		keywords: '',
		level: 29,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +21',
		movement: '4, swim 12',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +29',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 660,
		initiative: 14,
		ac: 43,
		fortitude: 45,
		reflex: 32,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '31a5c4e2-a5c0-467a-8ca3-f7125f3458ca',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 4d8 + 11 damage.',
				damage: '4d8 + 11 damage',
				category: 1
			},
			{
				id: '215139e9-c4ad-42bb-a861-d7ba498c0059',
				name: 'Crushing Bite',
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
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'Reach 4; 2d12 +11 damage, and the target is dazed (save ends). Aftereffect: Target is weakened (save ends).',
				damage: '2d12 +11 damage',
				category: 1
			},
			{
				id: 'b1e51cc6-a62e-469a-8aa6-db1e92173e27',
				name: 'Slam Flurry',
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
				details: 'The Leviathan makes three slam attacks against three different targets Reach 4; 4d8 + 11 damage.',
				damage: '4d8 + 11 damage',
				category: 1
			},
			{
				id: '9fc449d4-63a6-4472-a251-2d68bc9b5e13',
				name: 'Swallow Whole',
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
					bonus: 30,
					defence: 2
				},
				description: '',
				details: 'Targets a creature dazed or weakened by crushing bite; 2d12 +11 damage, and a Large or smaller target is swallowed. A swallowed target is grabbed and restrained. A swallowed creature has line of sight and line of effect only to the leviathan swallowing it, and no creatures has line of sight or line of effect to it. A creature that escapes the grab is no longer swallowed and appears in a space adjacent to the leviathan. A leviathan can move normally while it has a target grabbed in this way. When the leviathan dies, the target can escape as a move action, appearing in the leviathan’s former space. Sustain Minor: The leviathan sustains the grab, and the target takes 20 damage.',
				damage: '2d12 +11 damage',
				category: 1
			},
			{
				id: '036d938a-4f14-4227-ad8c-76f7d5e630ce',
				name: 'Chaos Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'close burst 5',
				attack: {
					bonus: 30,
					defence: 3
				},
				description: '',
				details: 'The Leviathan unleashes a surge of pure energy; 3d6 + 11 psychic damage, and the target is blinded and dazed (save ends both) and then pushed 3 squares.',
				damage: '3d6 + 11 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'acid 20, fire 20',
		vulnerable: '',
		immune: 'cold',
		tactics: '',

		info: 'Level 29 Elite Brute',
		phenotype: 'Gargantuan aberrant beast'
	},
	{
		id: 'a79ebaae-51cf-4f20-aa99-e56c711e39fa',
		name: 'Avamerin',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 30,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +18',
		movement: '6, fly 9 (hover); see also sign of vengeance.',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Insight +23, Intimidate +24',
		equipment: 'greatsword; plate armor',
		category: 'Angel',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 548,
		initiative: 26,
		ac: 46,
		fortitude: 42,
		reflex: 42,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e9de8bc6-a4ed-48e9-923a-4dbecf8866cd',
				name: 'Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Fire, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12 + 11 damage plus 1d8 fire damage plus 1d8 cold damage.',
				damage: '1d12 + 11 damage plus 1d8 fire damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: 'fc9917f3-aa37-4a7c-8ffa-8466554e8ef3',
				name: 'Double Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fire, Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Avamerin makes two greatsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: '8a73b518-b342-4aca-aea7-83a7e4a623b1',
				name: 'Sign of Vengeance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged sight',
				attack: null,
				description: '',
				details: 'Avamerin places an invisible sign upon the target. Until the end of the encounter, as a move action, he can teleport adjacent to the target.',
				damage: '',
				category: 3
			},
			{
				id: '0084e536-0df4-479d-8aaa-0beca0ef50d9',
				name: 'Battle Lord Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Avamerin and his allies deal an extra 3d6 damage against enemies that Avamerin flanks.',
				damage: 'avamerin and his allies deal an extra 3d6 damage against enemies that avamerin flanks',
				category: 0
			},
			{
				id: 'a8067235-0784-4b4b-b1ed-265616d6e5a8',
				name: 'Cloak of Vengeance',
				action: null,
				keywords: 'Cold, Fire',
				condition: 'until bloodied',
				range: 'Attacks against Avamerin take a -2 penalty until he is bloodied. While cloak of vengeance is in effect, a creature that makes a successful melee attack against Avamerin takes 1d8 fire damage and 1d8 cold damage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ce732655-9a1d-4b23-9f2c-7db9db5bcfe6',
				name: 'Inspiring Assault',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Whenever Avamerin scores a critical hit, he and all allies within 5 squares of him regains 15 hit points.',
				damage: 'he and all allies within 5 squares of him regains 15 hit points',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -20
			},
			{
				type: 9,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 30 Elite Soldier (L)',
		phenotype: 'Large immortal humanoid (angel)'
	},
	{
		id: 'e926479c-4ffc-44db-97ca-d979e36f5fb3',
		name: 'Axihuatl',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +25',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +23',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		wisdom: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 536,
		initiative: 16,
		ac: 46,
		fortitude: 43,
		reflex: 38,
		will: 44,
		regeneration: {
			value: 10,
			details: 'regeneration does not function while Axihuatl is exposed to direct sunlight'
		},
		auras: [],
		powers: [
			{
				id: '4d0d84d5-1443-422c-9ec1-d6fb7e752a38',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8 + 9 damage.',
				damage: '3d8 + 9 damage',
				category: 1
			},
			{
				id: '4cf62dfd-9db2-48ac-8270-20c429c3feb7',
				name: 'Blood Drain',
				action: {
					action: 1,
					trigger: 'requires combat advantage; recharges when an adjacent creature becomes bloodied)',
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
				details: '3d8 + 9 damage, and the target is weakened (save ends), and Axihuatl heals 134 hit points.',
				damage: '3d8 + 9 damage',
				category: 5
			},
			{
				id: '49e9dbff-15b1-4c43-a3e4-f11963500afb',
				name: 'Stunning Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: '2d10 + 9 psychic damage, and the target is stunned until the end of Axihuatl’s next turn.',
				damage: '2d10 + 9 psychic damage',
				category: 3
			},
			{
				id: 'be120aa5-038e-4f78-ac75-9b75b5bdd727',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends with a -2 penalty to the saving throw). Aftereffect: The target is dazed (save ends). Axihuatl can dominate one creature at a time.',
				damage: 'the target is dominated (save ends with a -2 penalty to the saving throw)',
				category: 3
			},
			{
				id: '373583dd-1cac-4bed-85fd-8124eec53474',
				name: 'Darkburst',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'Burst 2 within 10 squares; targets enemies; 2d8 + 9 necrotic damage, and the target takes ongoing 15 necrotic and is blinded (save ends both).',
				damage: '2d8 + 9 necrotic damage',
				category: 1
			},
			{
				id: '525ccb99-7f63-49b5-b70e-260b308efbc3',
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
				details: 'Axihuatl becomes insubstantial and gains a fly speed of 12, but cannot make attacks. Axihuatl can remain in mist form for up to 1 hour or end the effect as a minor action.',
				damage: 'Axihuatl becomes insubstantial and gains a fly speed of 12',
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
		vulnerable: 'radiant 10',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 30 Elite Controller',
		phenotype: 'Large aberrant humanoid (undead)'
	},
	{
		id: 'd5eb9e1e-4f55-44dd-afc2-b0e223a848c0',
		name: 'Blessed Spawn of Kyuss',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 25,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
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
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 450,
		initiative: 14,
		ac: 39,
		fortitude: 39,
		reflex: 32,
		will: 37,
		regeneration: null,
		auras: [
			{
				id: 'a0c84008-b837-4495-8969-f163107b5748',
				name: 'Fear of Worms',
				keywords: '',
				details: '(Fear) aura 3; any living creature that starts its turn with the aura takes a -2 penalty to attack rolls against blessed spawn of Kyuss.'
			}
		],
		powers: [
			{
				id: '3d74fd11-db07-48c2-93a7-56772df9c5df',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8 + 10 damage.',
				damage: '3d8 + 10 damage',
				category: 1
			},
			{
				id: 'e7792fe7-73c6-4648-8319-f0aeaa8b5816',
				name: 'Dread Smash',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2; targets Medium size or smaller creature; 5d8 + 10 damage, and the target is knocked prone.',
				damage: '5d8 + 10 damage',
				category: 1
			},
			{
				id: '2eb63413-f926-4278-8f07-81c80c765417',
				name: 'Touch of Kyuss',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Disease, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '2d6 + 8 damage and ongoing 10 necrotic damage (save ends). First Failed Saving Throw: The target is exposed to worms of Kyuss (see Open Grave page 218).',
				damage: '2d6 + 8 damage and ongoing 10 necrotic damage (save ends)',
				category: 1
			},
			{
				id: '059b4214-420c-46ca-86f3-2eb7f75c0fa0',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: 'the first time a blessed spawn of kyuss drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Make a new initiative check for the blessed spawn of Kyuss. On its next turn, the blessed spawn rises (as a move action) with 225 hit points.',
				damage: 'the blessed spawn rises (as a move action) with 225 hit points',
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
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 25 Elite Brute',
		phenotype: 'Large natural humanoid (undead)'
	},
	{
		id: '979b5b1b-24a0-416a-a120-b01d3acfabd9',
		name: 'Brood Swarm Barbarian',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 26,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +27, Intimidate +20',
		equipment: 'battleaxe; leather armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 592,
		initiative: 20,
		ac: 40,
		fortitude: 41,
		reflex: 37,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bbb77ed5-02e2-4bd3-8ced-324db491d722',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '3d10 + 9 damage.',
				damage: '3d10 + 9 damage',
				category: 1
			},
			{
				id: '2ca8f7ff-a7b5-424e-b67d-925b9bc4d4bc',
				name: 'Indomitable Strike',
				action: {
					action: 1,
					trigger: 'requires a battleaxe',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: '4d10 + 9 damage, and all enemies within 10 squares of the barbarian are marked until the end of its next turn.',
				damage: '4d10 + 9 damage',
				category: 5
			},
			{
				id: 'f9a9e85f-2fa5-40ae-aefd-795d349d632f',
				name: 'Supreme Strike',
				action: {
					action: 1,
					trigger: 'requires a battleaxe',
					sustainAction: 0,
					use: 0,
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
				details: '6d10 + 9 damage, and target can only make basic attacks (save ends).',
				damage: '6d10 + 9 damage',
				category: 5
			},
			{
				id: '67fbcb9e-00db-4bf0-97a1-68d8641726f0',
				name: 'Freezing Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Disease',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: '3d6 + 8 cold damage, and the target is exposed to brood fever. Miss: Half damage.',
				damage: '3d6 + 8 cold damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 26 Elite Brute',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '919e166e-6cd0-4dc5-8347-d46cadb23ae3',
		name: 'Brood Swarm Frost Giant',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: 'cold, giant',
		level: 18,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14',
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
		hp: 211,
		initiative: 12,
		ac: 32,
		fortitude: 35,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cfbc555e-8116-48e2-a860-544bd2ba2c37',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6+7 (crit 8d6 + 31) cold damage.',
				damage: '4d6+7 (crit 8d6 + 31) cold damage',
				category: 1
			},
			{
				id: 'be955804-475a-4994-9651-c8a9f4493764',
				name: 'Dying Swipe',
				action: null,
				keywords: 'Cold, Weapon',
				condition: 'when the frost giant drops to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: '2d6 + 7 The frost giant makes an icy greataxe attack.',
				damage: '2d6 + 7 The frost giant makes an icy greataxe attack',
				category: 0
			},
			{
				id: 'cf45b140-4fd7-438c-822d-2985d961a5dd',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Reach 2; cold damage, and the target gains vulnerable 10 cold (save ends).',
				damage: 'cold damage',
				category: 1
			},
			{
				id: '80e5e24f-4828-4808-ab1a-b44aa8df29e5',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d8 + 7 cold damage.',
				damage: '2d8 + 7 cold damage',
				category: 1
			},
			{
				id: 'cfdb2de0-621b-4f66-9f14-8e11ee6c425f',
				name: 'Freezing Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Disease',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d6 + 5 modifier cold damage, and the target is exposed to brood fever. Miss: Half damage.',
				damage: '3d6 + 5 modifier cold damage',
				category: 1
			},
			{
				id: '5906ef2e-44c2-4f88-8bd2-b354f4aaed52',
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

		info: 'Level 18 Elite Brute',
		phenotype: 'Large aberrant humanoid (cold, giant)'
	},
	{
		id: '25774dab-6d6d-48f6-8901-a6c3727a5aca',
		name: 'Brood Swarm Worg',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 18,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Stealth +19',
		equipment: '',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 428,
		initiative: 14,
		ac: 32,
		fortitude: 33,
		reflex: 30,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: '20b74e9f-2f1b-4370-b134-0fb889d3f08b',
				name: 'Frightful Growl',
				keywords: '',
				details: '(Fear) aura 3; enemies in the aura take a -1 penalty to attack rolls, and allies in the aura gain a +1 power bonus to attack rolls.'
			}
		],
		powers: [
			{
				id: 'd3bfb9b3-8a00-4f52-8576-5353e421d821',
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
				details: '2d8 + 5 damage, and ongoing 10 damage (save ends).',
				damage: '2d8 + 5 damage',
				category: 1
			},
			{
				id: '0bf9fe2b-3206-41f7-a18d-81c6d1ee3347',
				name: 'Freezing Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Disease',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d6 + 7 modifier cold damage, and the target is exposed to brood fever. Miss: Half damage.',
				damage: '3d6 + 7 modifier cold damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Elite Brute',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'c22091c1-94ad-4356-b6d2-3caac932f73d',
		name: 'Caira Xasten',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 27,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +23',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +26, Diplomacy +26',
		equipment: 'leather armor; rapier',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 492,
		initiative: 22,
		ac: 42,
		fortitude: 36,
		reflex: 38,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '715f6ad0-7d8a-45d0-b8ef-50be31640e3d',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '3d8+4 damage.',
				damage: '3d8+4 damage',
				category: 1
			},
			{
				id: 'facdf779-58c1-4bcc-ae71-69828b9ca0c7',
				name: 'Sinister Flank',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '4d8+4 damage, and one of Caira’s allies within 10 squares can shift their speed and make a melee basic attack.',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '85d7244a-e76e-4034-9db6-5331a0ea1ece',
				name: 'Unspeakable Resilience',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '3d8+4 damage, and allies within 5 squares of Caira can make a saving throw.',
				damage: '3d8+4 damage',
				category: 1
			},
			{
				id: '3765166e-e4bc-479e-8239-4cb5e9523141',
				name: 'Life Scourge',
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
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '4d10+10 necrotic damage, and the target takes a -2 penalty to attack rolls until the end of Caira’s next turn.',
				damage: '4d10+10 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 27 Elite Controller (L)',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'c7bf153c-895c-47d1-b3e3-0d480a192f3a',
		name: 'Century Worm',
		details: '',
		size: 5,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 29,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6, swim 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +28',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 536,
		initiative: 14,
		ac: 44,
		fortitude: 41,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '5c8561ee-b7a8-4edf-88e6-1796baba467e',
				name: 'Keening',
				keywords: '',
				details: '(Psychic) aura 5; enemies that start their turn in the aura take 15 psychic damage.'
			}
		],
		powers: [
			{
				id: '3ad8020d-5f9d-4c45-8e71-e56b0d5ddee0',
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
					bonus: 36,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 3d8 + 11 damage, and the target is grabbed.',
				damage: '3d8 + 11 damage',
				category: 1
			},
			{
				id: '02f51f57-587f-4343-967a-41ab2945cb1a',
				name: 'Swallow',
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
					bonus: 32,
					defence: 1
				},
				description: '',
				details: 'Targets a bloodied Huge or smaller creature the century worm is grabbing; the target is swallowed. A swallowed target is grabbed and restrained. A swallowed creature has line of sight and line of effect only to the century worm, and no creature has line of sight or line of effect to it. A creature that escapes the grab is no longer swallowed and appears in a space adjacent to the century worm. A century worm can move normally while it has a target swallowed. When the century worm dies, the target can escape as a move action, appearing in the century worm’s former space. Sustain Minor: The century worm sustains the grab, and the target takes 20 damage.',
				damage: 'and the target takes 20 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -20
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 29 Elite Soldier',
		phenotype: 'Gargantuan aberrant beast (undead)'
	},
	{
		id: '8640edc5-5939-4eca-9be7-ac25b4c4faed',
		name: 'Corrupture',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'blind, ooze',
		level: 24,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; tremorsense',
		movement: '6 see also crushing surge',
		alignment: 'Evil',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 226,
		initiative: 15,
		ac: 38,
		fortitude: 37,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3031630e-735c-46c9-a6b8-409549be50eb',
				name: 'Slam',
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
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d6 + 9 damage, and ongoing 5 acid damage.',
				damage: '2d6 + 9 damage',
				category: 1
			},
			{
				id: '88417806-87c6-4f17-93a4-f2cd945a25ef',
				name: 'Acid Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '4d12 + 9 acid damage.',
				damage: '4d12 + 9 acid damage',
				category: 1
			},
			{
				id: '00cf40b7-6116-4d36-b6d3-5033cde1c7a1',
				name: 'Crushing Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: {
					bonus: 29,
					defence: 0
				},
				description: '',
				details: 'The corrupture moves up to 8 squares and can move through opponent’s squares as part of the movement. It makes the following attack against the first creature whose space it moves through; 2d6 + 9 damage, and ongoing 5 acid damage, and the target is pushed 2 squares. It makes secondary attacks against any other targets in its path; +27 vs. Reflex; the target is pushed 2 squares. As part of this attack it can only attack any given target once.',
				damage: '2d6 + 9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'acid',
		tactics: '',

		info: 'Level 24 Skirmisher',
		phenotype: 'Huge natural beast (blind, ooze)'
	},
	{
		id: '3bebdd99-9300-421d-85a3-ea118c58993b',
		name: 'Cult Guard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +23, Intimidate +18',
		equipment: 'chainmail; crossbow; longsword',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 216,
		initiative: 19,
		ac: 39,
		fortitude: 36,
		reflex: 34,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5494d78e-7d93-45e4-a865-a79dd8cbd6dd',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 damage, and the target is marked until the end of the cult guard’s next turn.',
				damage: '2d8 + 10 damage',
				category: 1
			},
			{
				id: 'e2fda4a8-113c-4b19-a728-3c66e2d38a70',
				name: 'Light Crossbow',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 damage, and the target is marked until the end of the cult guard’s next turn.',
				damage: '2d8 + 10 damage',
				category: 1
			},
			{
				id: 'd9c30d96-ca42-43de-bee6-a3da8fff320b',
				name: 'Knockdown Strike',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '3d8 + 8 damage, and the target is knocked prone.',
				damage: '3d8 + 8 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '1e98623e-23ca-405a-9967-a237e3c6cec8',
		name: 'Cultist',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 29,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'arrow; longbow; longsword; plate armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 21,
		ac: 45,
		fortitude: 42,
		reflex: 38,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0d2a0eba-b1f3-4a79-ba6f-f8cd27336d52',
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
					bonus: 36,
					defence: 0
				},
				description: '',
				details: '15 damage.',
				damage: '15 damage',
				category: 1
			},
			{
				id: '5638b476-0aa2-47d5-b486-64f27953e69d',
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
					bonus: 36,
					defence: 2
				},
				description: '',
				details: '15 damage.',
				damage: '15 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 29 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '846c2458-e5bf-4ddb-afd4-0d3b8a74da23',
		name: 'Cultist of Zargon',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '6 see also pounce',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Endurance +23, Intimidate +20',
		equipment: 'battleaxe; chainmail; crossbow',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 216,
		initiative: 19,
		ac: 39,
		fortitude: 36,
		reflex: 34,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '682511a5-b865-4828-a09e-6126ae329e77',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d10 + 8 damage.',
				damage: '2d10 + 8 damage',
				category: 1
			},
			{
				id: '02c79c34-496d-4a1a-bcc9-e946626128d0',
				name: 'Light Crossbow',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 damage.',
				damage: '2d8 + 10 damage',
				category: 1
			},
			{
				id: '1dfd5025-0e0b-4e88-bee3-0130de7b1ba0',
				name: 'Crushing Blow',
				action: {
					action: 1,
					trigger: 'requires a battleaxe',
					sustainAction: 0,
					use: 0,
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
				details: '2d10 + 8 damage, and the target is knocked prone and weakened (save ends).',
				damage: '2d10 + 8 damage',
				category: 5
			},
			{
				id: 'b370d7ce-70cc-4dae-a89a-30452f130dc3',
				name: 'Subjugate Interloper',
				action: null,
				keywords: 'Psychic',
				condition: '',
				range: 'When a cultist hits a creature granting it combat advantage with a melee attack, that creature gains ongoing 10 psychic damage and dazed (save ends both).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'ec8477c7-0628-4bd1-89c4-3b6ee46f5305',
				name: 'Pounce',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The cultist moves up to 5 squares, gains combat advantage against all creatures it ends this move adjacent to until the end of its next turn, and makes a basic melee attack.',
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

		info: 'Level 23 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '8eedfc6d-2cfc-4c70-92db-d7474070b7ea',
		name: 'Deathshrieker',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: 'fly 8 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +31',
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
			score: 32,
			modifier: 11,
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 386,
		initiative: 28,
		ac: 42,
		fortitude: 42,
		reflex: 44,
		will: 42,
		regeneration: null,
		auras: [
			{
				id: '2955fa21-1ee4-4cd8-b021-a9a474de7959',
				name: 'Despair',
				keywords: '',
				details: '(Psychic) aura 5; an enemy that starts its turn in the aura takes 10 psychic damage and is slowed.'
			}
		],
		powers: [
			{
				id: '430cd02b-c70d-4d36-8731-85599d25116f',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 necrotic damage.',
				damage: '2d8 + 10 necrotic damage',
				category: 1
			},
			{
				id: '38664786-7872-4c22-998e-a5b5595fc7eb',
				name: 'Scream of Doom',
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
					bonus: 33,
					defence: 3
				},
				description: '',
				details: '3d8 + 10 psychic damage.',
				damage: '3d8 + 10 psychic damage',
				category: 1
			},
			{
				id: 'dabb4ca6-41ae-4b20-8ba8-52991af33020',
				name: 'Death Rattle',
				action: null,
				keywords: 'Necrotic',
				condition: 'when the deathshrieker is reduced to 0 hp',
				range: 'Close burst 10',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: '5d12 + 10 necrotic damage, and the target is weakened.',
				damage: '5d12 + 10 necrotic damage',
				category: 0
			},
			{
				id: '3741f2fa-f54f-4bb1-b36f-788305a75cf1',
				name: 'Screams of the Damned',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: '5d12 + 10 psychic damage, and the target is dazed (save ends).',
				damage: '5d12 + 10 psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 30 Elite Skirmisher',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'd2ed3b46-6718-483a-8240-ee4c37b3ec6c',
		name: 'Dorn',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 22,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6 see also swift strike',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Stealth +24',
		equipment: 'leather armor; rapier',
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
			score: 27,
			modifier: 8,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 416,
		initiative: 21,
		ac: 36,
		fortitude: 35,
		reflex: 35,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: '197cbf71-5ab1-43de-b359-d467ac584ec7',
				name: 'Sickening Slime ',
				keywords: '',
				details: '(Psychic) aura 1; enemies within the aura suffer a -2 penalty to attack rolls against Dorn.'
			}
		],
		powers: [
			{
				id: '7af21cdc-c132-4698-93e0-3ec543314271',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '3d8 + 8 damage.',
				damage: '3d8 + 8 damage',
				category: 1
			},
			{
				id: '76b36e92-0e8a-4785-98fe-70940f990922',
				name: 'Swift Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Dorn can shift 6 squares and make two basic melee attacks against 2 different creatures.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'dd4aabe8-5417-44b3-b19a-a41c0611c977',
				name: 'Acid Spew',
				action: {
					action: 1,
					trigger: 'recharges when dorn is first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 25,
					defence: 2
				},
				description: '',
				details: '4d12 + 8 acid damage, and ongoing 5 acid damage (save ends).',
				damage: '4d12 + 8 acid damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'acid',
		tactics: '',

		info: 'Level 22 Elite Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '75f628f9-fe6e-48f2-89d0-e53503375411',
		name: 'Dread Bonespitter',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'dragon, undead',
		level: 29,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: '10, fly 8',
		alignment: 'Unaligned',
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 34,
			modifier: 12,
			cost: -1
		},
		intelligence: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 210,
		initiative: 26,
		ac: 43,
		fortitude: 42,
		reflex: 43,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6d81e533-aab4-4e8a-8bd9-77d2620c59cc',
				name: 'Tail Slap',
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
				details: 'Reach 3; 2d12 + 10 damage, and the target is pushed 2 squares.',
				damage: '2d12 + 10 damage',
				category: 1
			},
			{
				id: '7af61274-e563-460e-9ba2-810a933fd553',
				name: 'Bone Shard',
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
					bonus: 36,
					defence: 0
				},
				description: '',
				details: '4d10 + 10 damage, and the target is immobilized (save ends).',
				damage: '4d10 + 10 damage',
				category: 1
			},
			{
				id: 'ea603d59-453d-47dd-b535-6722e44a592a',
				name: 'Bone Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Close blast 10',
				attack: {
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '4d10 + 10 damage, and the target is immobilized (save ends). The bonespitter can teleport to any square within the blast’s area. Miss: Half damage, and the target is not immobilized.',
				damage: '4d10 + 10 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
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

		info: 'Level 29 Artillery',
		phenotype: 'Huge natural animate (dragon, undead)'
	},
	{
		id: 'a2f17900-b316-4334-a256-313d1b133a65',
		name: 'Dread Boneyard',
		details: '',
		size: 5,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 30,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +23; darkvision',
		movement: '5, fly 12 (hover)',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 27,
			modifier: 8,
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		hp: 550,
		initiative: 20,
		ac: 44,
		fortitude: 43,
		reflex: 40,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b8c1bdef-fa28-4d80-a75b-d048839482e3',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d12 + 10 damage.',
				damage: '2d12 + 10 damage',
				category: 1
			},
			{
				id: 'b9125d4a-e4af-48ae-aef5-e3932a3a1994',
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
					bonus: 33,
					defence: 2
				},
				description: '',
				details: 'The dread boneyard attacks one or two Large or smaller targets; Reach 3; (automatically hits an immobilized target). On a hit, the target is grabbed and pulled into the dread boneyard’s space; the target is dazed and takes ongoing 15 necrotic damage until it escapes the grab. A creature that escapes the grab shifts to a square of its choosing adjacent to the boneyard. The boneyard can move normally while creatures are engulfed within it.',
				damage: 'the target is dazed and takes ongoing 15 necrotic damage until it escapes the grab',
				category: 1
			},
			{
				id: '275961cc-ba16-485a-b223-4ce6e2bc7b4d',
				name: 'Retributive Bite',
				action: {
					action: 1,
					trigger: 'recharges when the dread boneyard is bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 2d12 + 10 damage, and the target is weakened (save ends).',
				damage: '2d12 + 10 damage',
				category: 5
			},
			{
				id: '062958a1-88da-4bd9-ba05-b5fad56145a8',
				name: 'Field of Bones',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 necrotic damage, and the target is immobilized.',
				damage: '2d8 + 10 necrotic damage',
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

		info: 'Level 30 Elite Controller',
		phenotype: 'Gargantuan aberrant beast (undead)'
	},
	{
		id: '0b03673b-7e37-4594-97cf-6630bde6357e',
		name: 'Dread Rot Harbinger',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 29,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21',
		movement: '6, fly 8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 29,
			modifier: 9,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 269,
		initiative: 24,
		ac: 45,
		fortitude: 41,
		reflex: 41,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd0a8152b-011e-48a9-b856-cf74d67d79cb',
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
				attack: {
					bonus: 36,
					defence: 0
				},
				description: '',
				details: '2d10 + 9 damage, and the target is immobilized and marked until the end of the rot harbinger’s next turn and takes ongoing 15 necrotic damage (save ends).',
				damage: '2d10 + 9 damage',
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

		info: 'Level 29 Soldier',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: '475e9967-c3c9-490f-8871-f8727d4a3752',
		name: 'Dread Wraith Minion',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 27,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: 'fly 10 (hover)',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Stealth +27',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 29,
			modifier: 9,
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
			score: 29,
			modifier: 9,
			cost: -1
		},
		hp: 1,
		initiative: 24,
		ac: 41,
		fortitude: 37,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ac44c81f-a0ad-4110-8a65-d4376744d319',
				name: 'Dread Blade',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 14 necrotic damage, and the target is weakened until the end of the dread wraith minion’s next turn.',
				damage: '14 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 27 Minion',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '7717aeff-aa14-4ceb-9d14-b7b5ca307f49',
		name: 'Edwin Tolstoff',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'human',
		level: 30,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Arcana +27, Religion +27',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 262,
		initiative: 17,
		ac: 44,
		fortitude: 39,
		reflex: 42,
		will: 44,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'be473e71-391c-45cc-a66f-13088d110507',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '3d4 + 8 damage.',
				damage: '3d4 + 8 damage',
				category: 1
			},
			{
				id: '74267cdc-4082-4c89-b7e6-faa3a46155a7',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '4d4 + 8 force damage.',
				damage: '4d4 + 8 force damage',
				category: 1
			},
			{
				id: '9022007c-edbb-4d08-951d-f28490e98ede',
				name: 'Force Cage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Force, Implement',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '3d10 + 8 force damage, and the target is confined until the end of Edwin’s next turn. While confined, it is immobilized, grants combat advantage, and cannot gain line of effect against nonadjacent enemies.',
				damage: '3d10 + 8 force damage',
				category: 1
			},
			{
				id: '43d94da5-70ec-4c7d-b438-5033faf88af7',
				name: 'Acidic Spew',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid, Implement',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: '2d6 + 8 acid damage, and ongoing 10 acid damage (save ends). Miss: half damage, and ongoing 5 acid damage (save ends).',
				damage: '2d6 + 8 acid damage',
				category: 1
			},
			{
				id: 'c516c175-165b-4c4c-8f9a-4b3238b435e4',
				name: 'Meteor Swarm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Fire, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: 'Burst 5 within 20; 8d6 + 8 fire damage. Miss: half damage.',
				damage: '8d6 + 8 fire damage',
				category: 1
			},
			{
				id: '0f0d0e48-ecdb-47a0-beea-7933a5d9211d',
				name: 'Consume Soul',
				action: {
					action: 4,
					trigger: 'when an ally within 5 squares of edwin is reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Edwin regains 15 hit points',
				damage: 'Edwin regains 15 hit points',
				category: 5
			},
			{
				id: '7b3b661a-68c2-43ca-a4f3-947ec08cdbd6',
				name: 'Blink Escape',
				action: {
					action: 1,
					trigger: 'immediate interrupt when a ranged or melee attack hits edwin',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Arcane, Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Edwin teleports 5 squares, and the attack is negated.',
				damage: 'Edwin teleports 5 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Controller',
		phenotype: 'Medium aberrant humanoid (human)'
	},
	{
		id: 'a7cc938a-aa97-4275-9a6b-b56f5d230b5b',
		name: 'Father Llymic',
		details: '',
		size: 4,
		origin: 0,
		type: 1,
		keywords: '',
		level: 28,
		role: {
			type: 7,
			flag: 2,
			leader: false
		},
		senses: 'Perception +26; darkvision',
		movement: '8 (ice walk), fly 6 (hover)',
		alignment: 'Evil',
		languages: 'Abyssal, Common, Far Speech',
		skills: 'Endurance +24, Intimidate +27',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 1048,
		initiative: 22,
		ac: 44,
		fortitude: 41,
		reflex: 39,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: 'eeaf6295-309a-4aaf-86cc-b3668f62ed46',
				name: 'Deadly Chill',
				keywords: '',
				details: '(Cold) aura 6; an enemy that enters or begins its turn in the aura takes 30 cold damage.'
			}
		],
		powers: [
			{
				id: '473c2d21-5f4c-4474-bbd0-bfeefd93c3aa',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8 + 10 damage (crit 24 plus 3d8 + 10 damage), and the target is immobilized until the end of Father Llymic’s next turn.',
				damage: '3d8 + 10 damage (crit 24 plus 3d8 + 10 damage)',
				category: 1
			},
			{
				id: 'e45d445a-849a-4612-afee-f7d705cb9435',
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
				attack: null,
				description: '',
				details: 'Father Llymic can make up to four basic attacks against different targets. When bloodied Father Llymic can instead make up to three basic attacks on a single target or split the attacks between two targets.',
				damage: '',
				category: 1
			},
			{
				id: '8ff55ae6-6899-4fd3-bb9f-97d250afc9f1',
				name: 'Retaliatory Strike',
				action: {
					action: 1,
					trigger: 'when father llymic is hit with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'opportunity action',
				range: 'Father Llymic makes a basic melee attack against the creature that hit him.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '48e470e0-ee83-42de-b200-ffd9ce325e29',
				name: 'Soul Chill',
				action: {
					action: 1,
					trigger: 'at-will when bloodied',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge 5'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: '5d10 + 10 cold damage and slowed (save ends).',
				damage: '5d10 + 10 cold damage and slowed (save ends)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'acid 20, fire 20',
		vulnerable: '',
		immune: 'cold',
		tactics: '',

		info: 'Level 28 Solo Soldier',
		phenotype: 'Huge aberrant beast'
	},
	{
		id: 'e744675f-8cbf-46cd-8ea5-bfb83468e68a',
		name: 'Forest Giant Skeleton',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 29,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Evil',
		languages: 'Giant, understands common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 328,
		initiative: 17,
		ac: 41,
		fortitude: 42,
		reflex: 36,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '17eed8e8-98fd-435b-be5a-7d16c1864e14',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d12 + 10 damage (crit 3d12 + 46).',
				damage: '3d12 + 10 damage (crit 3d12 + 46)',
				category: 1
			},
			{
				id: '67682100-132c-4741-b04f-3abb8af07975',
				name: 'Awesome Smite',
				action: {
					action: 1,
					trigger: 'requires a greataxe',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d12 + 10 damage (crit 3d12 + 58), and the target is dazed (save ends).',
				damage: '4d12 + 10 damage (crit 3d12 + 58)',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 29 Brute',
		phenotype: 'Huge natural animate (undead)'
	},
	{
		id: 'f2d610cc-6672-4782-b5f1-716052eff9e2',
		name: 'Giant Squid',
		details: '',
		size: 5,
		origin: 4,
		type: 1,
		keywords: '',
		level: 30,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20',
		movement: '6, swim 4',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Endurance +29',
		equipment: '',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 5,
			modifier: -3,
			cost: 0
		},
		wisdom: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 339,
		initiative: 15,
		ac: 42,
		fortitude: 43,
		reflex: 38,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ebaedd42-d24b-48da-a61d-89bb12e585e2',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d8 + 10 damage.',
				damage: '2d8 + 10 damage',
				category: 1
			},
			{
				id: 'e8d43c00-3eee-4673-b661-c239aa30cd9a',
				name: 'Biting Grasp',
				action: {
					action: 4,
					trigger: 'when an enemy shifts from an adjacent square',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'The squid makes a bite attack; 2d12 + 9 damage, and grabs the target.',
				damage: '2d12 + 9 damage',
				category: 5
			},
			{
				id: 'f5829cfc-ff1f-4e88-a380-8f25f8aa9e2f',
				name: 'Flurry of Strikes',
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
				details: 'The squid makes two tentacle attacks and a biting grasp attack.',
				damage: '',
				category: 1
			},
			{
				id: '574a5781-61a4-4898-8063-56b09f762c60',
				name: 'Ink Cloud',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Zone',
				condition: '',
				range: 'The squid can move 12 squares and at any point during that movement expel a cloud of ink (close burst 4). The cloud creates a zone of heavy obscured squares that lasts until the end of the encounter.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Brute',
		phenotype: 'Gargantuan natural beast'
	},
	{
		id: '289943e9-4eb1-47ab-aa36-de4afff1beb2',
		name: 'Golothoma',
		details: '',
		size: 4,
		origin: 3,
		type: 1,
		keywords: '',
		level: 29,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17',
		movement: '6, swim 10',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Endurance +28, Intimidate +25',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
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
			score: 4,
			modifier: -3,
			cost: 0
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
		hp: 328,
		initiative: 22,
		ac: 41,
		fortitude: 43,
		reflex: 40,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7b92e4f5-e849-4c38-a76d-94e8837be38d',
				name: 'Tail',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d8 + 11 damage, and ongoing 10 acid damage (save ends), and the target is pushed 1 square.',
				damage: '2d8 + 11 damage',
				category: 1
			},
			{
				id: '3fce81f7-587c-496c-bab2-a6cbe2116eb6',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 4d8 + 11 damage, and the target is pushed 1 square.',
				damage: '4d8 + 11 damage',
				category: 1
			},
			{
				id: '38bc1a5a-dd1c-4d13-aeaf-86a6ca650419',
				name: 'Claw Storm',
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
				details: 'The golothomas makes four claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '14f73ab5-6e2c-4957-b865-9fd0020b9fc0',
				name: 'Dimensional Reach',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'the golothomas can reach between dimensions to strike at distant targets with its claws.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 29 Brute',
		phenotype: 'Huge immortal beast'
	},
	{
		id: '2564b3b4-a5d2-4b05-9292-2dcabe0f000a',
		name: 'Gorguth',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +20; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Athletics +30, Intimidate +25',
		equipment: 'bastard sword; leather armor',
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
			score: 28,
			modifier: 9,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 552,
		initiative: 26,
		ac: 46,
		fortitude: 44,
		reflex: 43,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '992337ef-90a0-4738-abfa-ef483cddead9',
				name: 'Bastard Sword',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '2d10+10 damage, and ongoing 10 necrotic damage and the target is marked by Gorguth (save ends both).',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: 'dcb2d096-f404-439a-8e67-7f200822b780',
				name: 'Frenzy of Slaughter',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '(Gorguth makes two basic melee attacks).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '2c21ac5d-a11f-4f2b-99c1-b1eea119554b',
				name: 'Stunning Strike',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '3d10+10 damage, and the target is stunned (save ends).',
				damage: '3d10+10 damage',
				category: 5
			},
			{
				id: '8e6513e2-828c-4251-9a3d-418688f7d325',
				name: 'Unassailable Dash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Gorguth shifts his speed and makes a basic melee attack at the end of the move.',
				attack: null,
				description: '',
				details: '',
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
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 30 Elite Soldier',
		phenotype: 'Medium immortal humanoid (undead)'
	},
	{
		id: '0df2d273-4df2-42e1-93f6-aa6d1c1b8c42',
		name: 'Gravecrawler',
		details: '',
		size: 1,
		origin: 1,
		type: 1,
		keywords: 'undead',
		level: 27,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +25',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 248,
		initiative: 19,
		ac: 41,
		fortitude: 39,
		reflex: 39,
		will: 39,
		regeneration: null,
		auras: [
			{
				id: '34184caf-d0c1-4063-adcb-f61437cc8f58',
				name: 'Calcifying Aura',
				keywords: '',
				details: 'aura 2; bloodied creatures that end their turn in the aura are slowed (save ends); First Failed Saving Throw: immobilized (save ends); Second Failed Saving Throws: petrified (save ends).'
			}
		],
		powers: [
			{
				id: '61824505-d007-400c-a118-e6141d4762fc',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: '3d8 + 8 damage.',
				damage: '3d8 + 8 damage',
				category: 1
			},
			{
				id: '3ded41cf-ee4c-45d0-8371-2b60b121bd15',
				name: 'Spring Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The gravecrawler can shift 8 squares and make a basic melee attack at any point during its move.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 27 Skirmisher',
		phenotype: 'Small elemental beast (undead)'
	},
	{
		id: 'ed5f21da-227c-496d-9de8-214d43ba4dce',
		name: 'Greater Aspect of Leviathan',
		details: '',
		size: 5,
		origin: 0,
		type: 1,
		keywords: '',
		level: 30,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22',
		movement: '4, swim 12',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +30',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 680,
		initiative: 15,
		ac: 44,
		fortitude: 46,
		reflex: 35,
		will: 38,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7724b1ce-2f3d-4b9e-8f58-3973e25c1b3b',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 4d8 + 11 damage.',
				damage: '4d8 + 11 damage',
				category: 1
			},
			{
				id: 'c473a3f2-e32b-4889-babd-4028e53aaf4e',
				name: 'Crushing Bite',
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
					bonus: 31,
					defence: 1
				},
				description: '',
				details: 'Reach 4; 2d12 +11 damage, and the target is dazed (save ends). Aftereffect: Target is weakened (save ends).',
				damage: '2d12 +11 damage',
				category: 1
			},
			{
				id: '5667973e-24e4-41ef-872e-1981d4abd564',
				name: 'Slam Flurry',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'The Leviathan makes three slam attacks against three different opponents; Reach 4; 4d8 + 11 damage.',
				damage: '4d8 + 11 damage',
				category: 1
			},
			{
				id: 'd76fbbc9-25b8-4de6-9755-c8f87e7c9558',
				name: 'Swallow Whole',
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
					bonus: 31,
					defence: 2
				},
				description: '',
				details: '2d12 +11 damage, and a Large or smaller target is swallowed. A swallowed target is grabbed and restrained. A swallowed creature has line of sight and line of effect only to the leviathan swallowing it, and no creatures has line of sight or line of effect to it. A creature that escapes the grab is no longer swallowed and appears in a space adjacent to the leviathan. A leviathan can move normally while it has a target grabbed in this way. When the leviathan dies, the target can escape as a move action, appearing in the leviathan’s former space. Sustain Minor: The leviathan sustains the grab, and the target takes 20 damage.',
				damage: '2d12 +11 damage',
				category: 1
			},
			{
				id: 'b74bde18-ba7b-4897-b2bd-36ee94b63cc9',
				name: 'Chaos Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'close burst 5',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: 'The Leviathan unleashes a surge of pure energy; 3d6 + 11 psychic damage, and the target is blinded and dazed (save ends both) and then pushed 3 squares.',
				damage: '3d6 + 11 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'acid 20, fire 20',
		vulnerable: '',
		immune: 'cold',
		tactics: '',

		info: 'Level 30 Elite Brute',
		phenotype: 'Gargantuan aberrant beast'
	},
	{
		id: '347b8d83-b541-4ee4-8cf7-ed5d7067ac91',
		name: 'Greathorn Minotaur',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 25,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Dungeoneering +20, Intimidate +19, Nature +15',
		equipment: 'battleaxe; heavy shield; scale armor',
		category: '',
		strength: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 232,
		initiative: 16,
		ac: 41,
		fortitude: 38,
		reflex: 32,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a0191a9f-d3f2-47d5-9df0-8503388e2072',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10 + 10 damage, and the target is marked until the end of the minotaur’s next turn.',
				damage: '2d10 + 10 damage',
				category: 1
			},
			{
				id: 'eea086d1-b68d-474e-94e4-6fd874ff472e',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'The greathorn minotaur makes a charge attack; 3d8 + 10 damage, and the target is knocked prone.',
				damage: '3d8 + 10 damage',
				category: 1
			},
			{
				id: 'a985038f-71bc-4784-9f30-fcea32dadcfb',
				name: 'Crippling Swing',
				action: {
					action: 1,
					trigger: 'requires a battleaxe',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 3d10 +10 and that target is slowed and dazed (save ends).',
				damage: 'Reach 2',
				category: 5
			},
			{
				id: 'f35dda40-961a-4f0d-9457-c722775142dd',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The greathorn minotaur makes a basic melee attack.',
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

		info: 'Level 25 Soldier',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'c4cb3286-b669-451a-b20a-4511cb82cf70',
		name: 'Herald of Kyuss',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 28,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +27; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +30, Diplomacy +30',
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		hp: 520,
		initiative: 22,
		ac: 44,
		fortitude: 42,
		reflex: 40,
		will: 44,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dbe72084-da23-4147-8477-2c90b53c347d',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10 + 6 damage, and the target is immobilized (save ends).',
				damage: '2d10 + 6 damage',
				category: 1
			},
			{
				id: 'a81e7ebb-8572-41f3-8a1f-92db4ac41a1a',
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
					bonus: 31,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d8 + 6 damage, and the target is pushed 2 squares.',
				damage: '2d8 + 6 damage',
				category: 1
			},
			{
				id: '564027bc-c5ac-487e-af2b-76ebf92f666d',
				name: 'Sudden Strike',
				action: {
					action: 4,
					trigger: 'when a foe enters an adjacent square',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Herald of Kyuss makes a bite attack.',
				damage: '',
				category: 5
			},
			{
				id: 'a683802f-8529-493c-8f28-e446f44e0765',
				name: 'Hypnotic Voice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: 'target is stunned (save ends) Aftereffect: Target is dazed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'e1ab4dfe-31e8-41ad-8f75-282f08481da0',
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
				details: 'A Herald of Kyuss can alter its physical form to take on the appearance of any Medium humanoid, including a unique individual (see Change Shape, MM 280).',
				damage: '',
				category: 3
			},
			{
				id: 'd842559c-c7a3-4700-87f2-c0842b963de5',
				name: 'Death’s Gift',
				action: null,
				keywords: 'Healing',
				condition: 'when an enemy within 5 squares of the herald of kyuss is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The Herald of Kyuss regains 15 hit points.',
				damage: 'The Herald of Kyuss regains 15 hit points',
				category: 0
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
		immune: 'cold, disease',
		tactics: '',

		info: 'Level 28 Elite Controller',
		phenotype: 'Large aberrant beast (undead)'
	},
	{
		id: '91aa93f2-f86c-4323-8271-7d69cace1840',
		name: 'Hideous Leechwalker',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 22,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6, swim 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +24',
		equipment: '',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 208,
		initiative: 15,
		ac: 36,
		fortitude: 35,
		reflex: 29,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b559cda5-fecd-4e83-aa0d-9ed72ddde2ae',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d6 + 8 damage.',
				damage: '3d6 + 8 damage',
				category: 1
			},
			{
				id: '585e3a02-77b6-4ea7-8226-534bfa4166b8',
				name: 'Tentacle Rake',
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
				details: 'The hideous leechwalker makes two tentacle attacks, if both hit the same target it also deals ongoing 20 damage (save ends).',
				damage: 'if both hit the same target it also deals ongoing 20 damage (save ends)',
				category: 1
			},
			{
				id: '2c3c2656-58e6-4036-b376-e8af5c8c65bd',
				name: 'Slithering Strike',
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
				details: 'The hideous leechwalker moves up to 6 squares and makes a tentacle attack.',
				damage: 'The hideous leechwalker moves up to 6 squares and makes a tentacle attack',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 22 Skirmisher',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '557d3691-2fd2-49ba-9e1b-b43d97a66f7a',
		name: 'Howling Famine Spirit',
		details: '',
		size: 3,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 28,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: '4 phasing',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 218,
		initiative: 17,
		ac: 38,
		fortitude: 40,
		reflex: 38,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '81ccedc8-0d53-4f00-82b7-af2a1f0a9284',
				name: 'Gaping Howling Maw',
				keywords: '',
				details: 'aura 6; any living creature that starts its turn within the aura is pulled 2 squares and takes 10 thunder damage.'
			}
		],
		powers: [
			{
				id: 'cd083c6a-540e-44da-8703-deec25c1942d',
				name: 'Rending Claws',
				action: {
					action: 1,
					trigger: 'requires a free hand',
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
				details: 'Reach 2; 3d8 + 8 necrotic damage, and the target is grabbed.',
				damage: '3d8 + 8 necrotic damage',
				category: 5
			},
			{
				id: 'b6f57358-9fd0-4547-a5c4-a35c98ab5727',
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
				details: 'Targets a creature grabbed by the famine spirit; 2d8 + 4 necrotic damage, and the target is engulfed, entering the famine spirit’s space and disappearing from sight and removing line of effect to all squares. While engulfed, the target takes ongoing 10 acid damage and is stunned and immobilized (save ends all). The famine spirit gains regeneration 10 while a target is engulfed. When the target saves, it is no longer engulfed. The target reappears in an unoccupied square adjacent to the famine spirit of the target’s choosing. If the famine spirit is killed, an engulfed target is no longer engulfed and reappears in a square previously occupied by the famine spirit. A famine spirit can have only one creature engulfed at a time.',
				damage: '2d8 + 4 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 28 Brute',
		phenotype: 'Large shadow humanoid (undead)'
	},
	{
		id: '13a2cc4e-aa78-4a5b-ae44-9cfe95b7ac32',
		name: 'Hulk of Zoretha (Female)',
		details: '',
		size: 4,
		origin: 3,
		type: 0,
		keywords: '',
		level: 29,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +23; darkvision, tremorsense 5',
		movement: '10',
		alignment: 'Chaotic Evil',
		languages: 'Common, Supernal',
		skills: 'Endurance +29',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 270,
		initiative: 14,
		ac: 43,
		fortitude: 43,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f9428c28-ebff-4c28-9910-8934cc7e151c',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '3d8 + 10 damage.',
				damage: '3d8 + 10 damage',
				category: 1
			},
			{
				id: 'dbdf5f47-999b-4f88-b1e6-ca3920547b67',
				name: 'Many Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The hulk of Zoretha makes two basic melee attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'c7f5778f-f8e5-4043-99a3-ad97082bf0e3',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid, Cold, Electricity or Fire ',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 34,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 3d12 + 22 acid, cold, electricity or fire damage, and the target is weakened (save end). Each of the four hulks has a different damage type for their breath weapon.',
				damage: 'electricity or fire damage',
				category: 1
			},
			{
				id: '34a3a98f-7caa-429d-99cd-3140ab5bde72',
				name: 'Waking Nightmare',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Gaze, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 32,
					defence: 3
				},
				description: '',
				details: 'The hulk’s appearance is so terrifying that it provokes waking nightmares in those seeing it; 3d12 + 22 psychic damage and the target is dazed (save ends).',
				damage: '3d12 + 22 psychic damage and the target is dazed (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'acid 20, cold 20',
		vulnerable: '',
		immune: 'fire',
		tactics: '',

		info: 'Level 29 Controller',
		phenotype: 'Huge immortal animate'
	},
	{
		id: '540c3c57-da2b-4023-b0b3-1b3c0707bd8d',
		name: 'Hulk of Zoretha (Male)',
		details: '',
		size: 4,
		origin: 3,
		type: 0,
		keywords: '',
		level: 29,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +29; darkvision, tremorsense 5',
		movement: '12, fly 8 (clumsy)',
		alignment: 'Chaotic evil',
		languages: 'Common, Supernal',
		skills: 'Endurance +29',
		equipment: '',
		category: '',
		strength: {
			score: 26,
			modifier: 8,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 540,
		initiative: 14,
		ac: 43,
		fortitude: 43,
		reflex: 40,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b28fb986-4743-4bf8-966e-678e20e80481',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '3d8 + 10 damage.',
				damage: '3d8 + 10 damage',
				category: 1
			},
			{
				id: '9d989a2e-e47f-4bd5-b269-1e7eb17e8437',
				name: 'Poisoned Spikes',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 32,
					defence: 2
				},
				description: '',
				details: '2d6 + 5 damage and ongoing 15 poison damage (save ends).',
				damage: '2d6 + 5 damage and ongoing 15 poison damage (save ends)',
				category: 1
			},
			{
				id: '9e18bf81-73b8-4f41-bcf5-ee63c347ab5e',
				name: 'Combination Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'The hulk makes two basic melee attacks',
				attack: null,
				description: '',
				details: 'if both attacks hit the same opponent, it is pushed 8 squares, and it is knocked prone.',
				damage: 'it is pushed 8 squares',
				category: 1
			},
			{
				id: '05d14421-cd67-442f-ba92-df672f4edd66',
				name: 'Hypnotic Gaze',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Gaze',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 32,
					defence: 3
				},
				description: '',
				details: 'Target stunned until the end of the hulk of Zoretha’s next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'acid 20, cold 20',
		vulnerable: '',
		immune: 'fire',
		tactics: '',

		info: 'Level 29 Elite Controller',
		phenotype: 'Huge immortal animate'
	},
	{
		id: '3fbced4e-737e-4294-a880-93b2ff56a605',
		name: 'Irthicax Vane',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 28,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +29',
		movement: '10, teleport 10',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Acrobatics +28, Athletics +26',
		equipment: '',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 1040,
		initiative: 25,
		ac: 42,
		fortitude: 39,
		reflex: 39,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '53878bc0-3fb0-4536-b7b9-772c9d8a94a8',
				name: 'Dazing Palm',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d8 + 9 damage and the target is dazed until the end of Irthicax’s next turn.',
				damage: '2d8 + 9 damage and the target is dazed until the end of irthicax’s next turn',
				category: 1
			},
			{
				id: 'e12d0668-ad1e-43d5-b04b-cd5349af30a6',
				name: 'Evasive Move',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: 'Irthicax can shift 10 squares and make up to four dazing palm attacks each on different creatures at any time during the move; .',
				damage: 'Irthicax can shift 10 squares and make up to four dazing palm attacks each on different creatures at any time during the move',
				category: 1
			},
			{
				id: '861434bb-d3cd-4c01-bd16-985358a06453',
				name: 'Shifting Strike',
				action: {
					action: 4,
					trigger: 'when a foe moves into an adjacent square',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d8 + 9 damage, and Irthicax shifts 2 squares.',
				damage: '2d8 + 9 damage',
				category: 5
			},
			{
				id: 'dc4f8112-a0cc-473c-b1f6-4083623be57b',
				name: 'Stunning Strike',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d8 + 9 damage, and the target is stunned (save ends).',
				damage: '2d8 + 9 damage',
				category: 1
			},
			{
				id: '563c076e-6154-4092-98aa-b4c0f0c88c0b',
				name: 'Immobilizing Flurry',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '3d8 + 9 damage, and the target is pushed 1 square and immobilized (save ends).',
				damage: '3d8 + 9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 28 Solo Skirmisher',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'f54408d9-8a5a-4b95-9042-62713abf25c1',
		name: 'Janwulf the Soulbiter',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'cold, giant',
		level: 24,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +13',
		movement: '7 (ice walk)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +24, Endurance +22',
		equipment: 'greataxe; scale armor',
		category: '',
		strength: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 213,
		initiative: 15,
		ac: 38,
		fortitude: 41,
		reflex: 34,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b3954e19-7bf8-4b43-974b-cc4f70262a9b',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6 + 8 cold damage.',
				damage: '4d6 + 8 cold damage',
				category: 1
			},
			{
				id: '1b5eee5a-de32-45f3-94b6-3571b50f56a1',
				name: 'Ice Viper’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6 + 8 cold damage, the target is slowed until the end of Janwulf’s next turn, and if the target shifts before the start of Janwulf’s next turn, it provokes opportunity attacks from Janwulf’s allies.',
				damage: '2d6 + 8 cold damage',
				category: 1
			},
			{
				id: '14bc881d-7fad-41fd-83b4-1097229d40d4',
				name: 'Blood Runs Cold',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6 + 8 damage, and ongoing 10 cold damage (save ends).',
				damage: '4d6 + 8 damage',
				category: 1
			},
			{
				id: '6fb3036c-ffa0-4047-b309-1a45c2470346',
				name: 'Cold Wind Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: 'targets enemies only; 2d6 + 8 cold damage damage, and the target is dazed until the end of Janwulf’s next turn.',
				damage: '2d6 + 8 cold damage damage',
				category: 1
			},
			{
				id: '1a9e3693-884f-47d9-a562-5ece3915ec1d',
				name: 'Janwulf’s Icy Inspiration',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'One ally within close burst 5',
				attack: null,
				description: '',
				details: 'target gains 10 temporary hit point and can shift as a free action.',
				damage: 'target gains 10 temporary hit point and can shift as a free action',
				category: 3
			},
			{
				id: '7ace8820-77a0-4eec-9059-f2f9c81fdad9',
				name: 'Icebound Footing',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Janwulf moves 2 square fewer than any pull, push, or slide effect specifies. It can make a saving throw to avoid being knocked prone.',
				damage: 'Janwulf moves 2 square fewer than any pull',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Soldier (L)',
		phenotype: 'Large elemental humanoid (cold, giant)'
	},
	{
		id: 'f23c71d2-b0dd-4662-8dc2-f5d38d3420da',
		name: 'Lucather Majii',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +22; darkvision',
		movement: 'fly 12',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Arcana +29',
		equipment: 'implement, wand',
		category: '',
		strength: {
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		wisdom: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 210,
		initiative: 19,
		ac: 42,
		fortitude: 40,
		reflex: 42,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a2fd6ae5-b217-41af-949b-5826b37f662e',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '2d8 + 9 damage.',
				damage: '2d8 + 9 damage',
				category: 1
			},
			{
				id: '151360ab-a70d-47bf-a9c1-ca156db979ae',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '4d4 + 9 damage.',
				damage: '4d4 + 9 damage',
				category: 1
			},
			{
				id: '4d6d88ed-c155-4523-9fa3-d5e5b8ba8c7c',
				name: 'Chain Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement, Lightning',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 35,
					defence: 2
				},
				description: '',
				details: '4d6 + 9 lightning damage. Secondary Attack: +35 vs. Reflex against two creatures within 5 squares of the primary target; 2d6 + 9 lightning damage. Tertiary Attack: Against all other enemies within 20 squares of Lucather; + 35 vs. Reflex; 1d6 + 9 lightning damage.',
				damage: '4d6 + 9 lightning damage',
				category: 1
			},
			{
				id: 'ce66235c-3f97-405f-98e1-a0e14bc98ee2',
				name: 'Black Fire',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Implement, Necrotic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 35,
					defence: 2
				},
				description: '',
				details: '6d6 + 9 fire and necrotic damage.',
				damage: '6d6 + 9 fire and necrotic damage',
				category: 1
			},
			{
				id: '422b8f6d-983e-47e5-9f9a-91f5455ae383',
				name: 'Meteor Swarm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 2
				},
				description: '',
				details: 'Burst 5 within 20 squares; 8d6 + 9 fire damage.',
				damage: '8d6 + 9 fire damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 30 Artillery',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '657edd4e-09d0-4687-afd8-80dae39882a8',
		name: 'Marcus Hape',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 29,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Bluff +24, Stealth +27, Thievery +27',
		equipment: 'dagger; leather armor; short sword',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		dexterity: {
			score: 26,
			modifier: 8,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 246,
		initiative: 22,
		ac: 45,
		fortitude: 49,
		reflex: 57,
		will: 48,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '68090f2d-747b-4a63-a1ae-43a09c27c369',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: '1d6 + 12 damage.',
				damage: '1d6 + 12 damage',
				category: 1
			},
			{
				id: '31d7528e-0c64-4f2a-9134-7db19d510c4f',
				name: 'Deadly Dagger',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 36,
					defence: 0
				},
				description: '',
				details: '1d4 + 10 damage (crit on 18+). The dagger returns to Marcus’s hand after the attack.',
				damage: '1d4 + 10 damage (crit on 18+)',
				category: 1
			},
			{
				id: '11614d65-4486-4bf3-abf7-77d830a038ba',
				name: 'Dastard’s Strike',
				action: {
					action: 1,
					trigger: 'requires combat advantage',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon ',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Marcus can shift his speed before making this attack; 1d6 + 12 damage, and the target is stunned until the end of Marcus’s next turn.',
				damage: '1d6 + 12 damage',
				category: 5
			},
			{
				id: 'bc1b6e48-a957-4cce-935e-b82220ba931d',
				name: 'Blessing of Demogorgon',
				action: {
					action: 3,
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
				details: 'Marcus becomes invisible until the end of his next turn.',
				damage: '',
				category: 3
			},
			{
				id: 'ac5952f7-9b5b-4501-a507-2433cf267b9d',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Marcus does 4d6 extra damage against enemies that grant him combat advantage.',
				damage: 'marcus does 4d6 extra damage against enemies that grant him combat advantage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 29 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '1a0a8065-53c4-4bc7-851d-2ed34ace9d84',
		name: 'Mind Shard of Pandorym',
		details: '',
		size: 4,
		origin: 3,
		type: 0,
		keywords: '',
		level: 30,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +25; darkvision',
		movement: 'fly 6 (hover)',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Arcana +31, History +31',
		equipment: '',
		category: '',
		strength: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		constitution: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		wisdom: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		charisma: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		hp: 552,
		initiative: 17,
		ac: 46,
		fortitude: 42,
		reflex: 46,
		will: 46,
		regeneration: null,
		auras: [
			{
				id: '8fc6e438-2330-4e31-9173-7e58981f3bd9',
				name: 'Mental Subjugation',
				keywords: '',
				details: '(Fear) aura 5; enemies within the aura take a -2 penalty to attack rolls against the mind shard of Pandorym'
			}
		],
		powers: [
			{
				id: '031e4a92-889b-4915-a742-4b4a05542c1f',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8 + 10 necrotic damage and the target is weakened until the end of the mind shard’s next turn.',
				damage: '3d8 + 10 necrotic damage and the target is weakened until the end of the mind shard’s next turn',
				category: 1
			},
			{
				id: '6da79eb5-7d1d-4699-a57b-b812ec068cba',
				name: 'Dominating Ego Whip',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when a creature under the effect of this power’s domination effect is reduced to 0 or fewer hit points or saves against that effect'
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'Range 10; 1d12 +10 psychic damage, and the target takes ongoing 15 psychic damage and is dominated by the mind shard (save ends both).',
				damage: '1d12 +10 psychic damage',
				category: 1
			},
			{
				id: '23b17c39-5fb6-461b-b10f-0ae1e95b27e9',
				name: 'Backlash',
				action: {
					action: 1,
					trigger: 'immediate reaction when the mind shard is hit with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 33,
					defence: 2
				},
				description: '',
				details: 'targets enemies only; 2d12 + 10 force damage, and the target is pushed 5 squares.',
				damage: '2d12 + 10 force damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'acid 20, cold 20, insubstantial',
		vulnerable: '',
		immune: 'fire',
		tactics: '',

		info: 'Level 30 Elite Controller',
		phenotype: 'Huge immortal animate'
	},
	{
		id: '7e3dfcdb-3b39-4642-9213-ef150829ec90',
		name: 'Obligatum VII',
		details: '',
		size: 2,
		origin: 3,
		type: 0,
		keywords: '',
		level: 30,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +29',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Supernal',
		skills: '',
		equipment: 'longsword; plate armor',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 274,
		initiative: 20,
		ac: 44,
		fortitude: 43,
		reflex: 36,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '09a47a45-d2c7-4a8a-aa83-029b01dcfdb4',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: '2d8 + 10 damage.',
				damage: '2d8 + 10 damage',
				category: 1
			},
			{
				id: '65d043f6-1703-484f-b131-89a049b68e52',
				name: 'Enervating Bolt',
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
					bonus: 35,
					defence: 2
				},
				description: '',
				details: '2d8 + 10 necrotic damage, and the target is weakened (save ends).',
				damage: '2d8 + 10 necrotic damage',
				category: 1
			},
			{
				id: 'a10364c0-c0db-472e-a176-4ddabc7cad22',
				name: 'Curse of Death',
				action: {
					action: 1,
					trigger: 'requires a long sword',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 3
				},
				description: '',
				details: '2d8 + 10 damage, and ongoing 10 damage and the target is stunned (save ends both).',
				damage: '2d8 + 10 damage',
				category: 5
			},
			{
				id: 'bcaf7840-7e17-45bf-99ea-522b149bc54f',
				name: 'Vampiric Strike',
				action: {
					action: 1,
					trigger: 'requires a long sword',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: '3d8 + 10 damage, and Obligatum heals 68 hit points.',
				damage: '3d8 + 10 damage',
				category: 5
			},
			{
				id: '415c865d-8d5b-4078-93e8-c87c7ee1791f',
				name: 'Uncanny Perseverance',
				action: {
					action: 4,
					trigger: 'when obligatum is affected by an effect that allows a saving throw',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Obligatum makes an immediate saving throw to throw off the effect',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Soldier',
		phenotype: 'Medium immortal animate'
	},
	{
		id: 'ae77d552-9dc4-4a76-aac6-5bd55e686651',
		name: 'Ogre Tempest',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'heavy flail; hide armor',
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
		initiative: 13,
		ac: 35,
		fortitude: 37,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f3d62c48-3966-467b-891e-4a93ca5d9801',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '16 damage.',
				damage: '16 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Minion',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '2de40759-216d-4d4d-b08b-fa1af1a8b9b1',
		name: 'Scion of Kyuss',
		details: '',
		size: 5,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 30,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: '',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
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
			score: 20,
			modifier: 5,
			cost: -1
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
		hp: 552,
		initiative: 25,
		ac: 46,
		fortitude: 43,
		reflex: 40,
		will: 40,
		regeneration: null,
		auras: [
			{
				id: 'f4e77c81-c5a8-4748-ab11-b99c8e3bba37',
				name: 'Marking Tendrils',
				keywords: '',
				details: '(aura 2); writhing tendrils surround the scion of Kyuss; enemies starting their turn in the aura take 15 damage and are marked by the scion of Kyuss until the end of the scion’s next turn.'
			}
		],
		powers: [
			{
				id: 'bce8d4fe-fef0-426e-80c7-b00921f5d837',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 2d8 + 11 damage, and the scion can choose to immobilize (save ends) or grab the target.',
				damage: '2d8 + 11 damage',
				category: 1
			},
			{
				id: '78d9aa6c-f51b-480e-80c7-ca7df90a18cb',
				name: 'Lashing Tendrils',
				action: {
					action: 1,
					trigger: 'immediate interrupt when a creature marked by the scion moves out of a square adjacent to the scion',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 1; 2d8 + 11 damage, and the target is immobilized (save ends).',
				damage: '2d8 + 11 damage',
				category: 5
			},
			{
				id: '6fd9fcec-d63c-4f1e-bca3-2b17994f21a3',
				name: 'Swallow',
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
					bonus: 33,
					defence: 1
				},
				description: '',
				details: 'Targets a bloodied Huge or smaller creature the scion of Kyuss is grabbing; the target is swallowed. A swallowed target is grabbed and restrained. A swallowed creature has line of sight and line of effect only to the scion of Kyuss, and no creature has line of sight or line of effect to it. A creature that escapes the grab is no longer swallowed and appears in a space adjacent to the scion of Kyuss. A scion of Kyuss can move normally while it has a target swallowed. When the scion of Kyuss dies, the target can escape as a move action, appearing in the scion of Kyuss’s former space. Sustain Minor: The scion of Kyuss sustains the grab, and the target takes 20 damage.',
				damage: 'and the target takes 20 damage',
				category: 1
			},
			{
				id: '5b0e730e-7957-41d1-a181-c063ef21a268',
				name: 'Breath of Kyuss',
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
					bonus: 33,
					defence: 2
				},
				description: '',
				details: 'targets enemies only; 5d12 + 8 necrotic damage, and the target is slowed (save ends). Miss: Half damage, and the target is slowed until the end of the scion’s next turn.',
				damage: '5d12 + 8 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -30
			},
			{
				type: 9,
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 30 Elite Soldier',
		phenotype: 'Gargantuan aberrant humanoid (undead)'
	},
	{
		id: 'e7744588-55b7-4fd8-87bc-10fa752cf379',
		name: 'Seghulerkak',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'reptile; yuan-ti',
		level: 30,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +31',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Intimidate +27, Religion +31, Stealth +21',
		equipment: 'arrow; longbow; plate armor; spiked chain',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 26,
			modifier: 8,
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
			score: 32,
			modifier: 11,
			cost: -1
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 274,
		initiative: 16,
		ac: 44,
		fortitude: 42,
		reflex: 39,
		will: 44,
		regeneration: null,
		auras: [
			{
				id: '119bef2a-471a-46f9-ad22-74530e7a5d75',
				name: 'Aversion ',
				keywords: '',
				details: '(Psychic) aura 5; enemies ending their turn in the aura take 10 psychic damages, and allies in the aura gain a +2 bonus to all defenses.'
			}
		],
		powers: [
			{
				id: '64a4bbcf-e1a4-4cbf-833b-a28427a13911',
				name: 'Spiked Chain',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d4 + 6 damage, and the target takes ongoing 10 poison damage (save ends).',
				damage: '2d4 + 6 damage',
				category: 1
			},
			{
				id: 'fc0c1b8d-ad6c-4411-a915-18e01bf18d3f',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 35,
					defence: 0
				},
				description: '',
				details: '1d10 + 1 damage, and the target is immobilized and takes ongoing 10 poison damage (save ends both).',
				damage: '1d10 + 1 damage',
				category: 1
			},
			{
				id: '1b22b203-0775-4454-be41-101e04d4a63e',
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
					bonus: 33,
					defence: 2
				},
				description: '',
				details: 'the target is pulled 1 square and grabbed (until escape). While grabbed, the target is immobilized. Seghulerkak can only grab one creature at a time.',
				damage: 'the target is pulled 1 square and grabbed (until escape)',
				category: 3
			},
			{
				id: '6b3ca82b-5f72-4a21-b531-9c752e6eb6ed',
				name: 'Soothing Words',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 33,
					defence: 3
				},
				description: '',
				details: 'the target must be able to hear Seghulerkak; the target is dominated (save ends). Aftereffect: The target is dazed (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'poison 20',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Controller (L)',
		phenotype: 'Large natural humanoid (reptile; yuan-ti)'
	},
	{
		id: 'fbe4178c-eabc-4cc6-a18d-db0a16cb85bc',
		name: 'Skindancer',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15',
		movement: '8',
		alignment: 'Evil',
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
			score: 27,
			modifier: 8,
			cost: -1
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
		initiative: 17,
		ac: 40,
		fortitude: 38,
		reflex: 35,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3dc128c4-22ce-4251-bfda-a4b0ee72a883',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 13 damage, and the target is knocked prone.',
				damage: '13 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Minion',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'd9c6fdcf-594e-4b25-8f9a-500e109d1d36',
		name: 'Skyshadow',
		details: '',
		size: 3,
		origin: 3,
		type: 0,
		keywords: 'mount',
		level: 30,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '6, fly 10 (hover), overland flight 12',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Endurance +29, Intimidate +25',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 6,
			modifier: -2,
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
		hp: 338,
		initiative: 24,
		ac: 42,
		fortitude: 43,
		reflex: 42,
		will: 40,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '44872c12-c258-439a-8c38-5d17db4db8d5',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+10 damage.',
				damage: '3d8+10 damage',
				category: 1
			},
			{
				id: '1e68cea9-e98a-4a2c-90bd-d6391e3d6d32',
				name: 'Savage Bite',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+10 damage, and the target is pushed 3 squares and knocked prone.',
				damage: '4d8+10 damage',
				category: 1
			},
			{
				id: 'ddf157e7-a82f-49ef-a4c6-2125319be76d',
				name: 'Frenzy',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Skyshadow makes a melee basic attack against each enemy in the burst.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '6e18ae7a-283b-465b-a8d7-5cd3dd619617',
				name: 'Skyshadow’s Brutality',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 30th level or higher',
				range: 'When Skyshadow’s rider hits with a melee weapon attack, it can choose to push the target 2 squares and knock it prone as part of that attack',
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

		info: 'Level 30 Brute',
		phenotype: 'Large immortal animate (mount)'
	},
	{
		id: 'abd1f794-9237-48c8-b564-f2debb11fb2d',
		name: 'Soelma Nilaenish',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'elf',
		level: 24,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +23, History +23',
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
			score: 21,
			modifier: 5,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 165,
		initiative: 17,
		ac: 36,
		fortitude: 33,
		reflex: 37,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b27a3d06-04d8-487e-8237-cad60ec361e6',
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
				details: '2d4 + 10 damage.',
				damage: '2d4 + 10 damage',
				category: 1
			},
			{
				id: '0027bd26-d6f4-446f-91d1-ff141bdf82e2',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '4d4 + 10 damage.',
				damage: '4d4 + 10 damage',
				category: 1
			},
			{
				id: '75941a18-5249-4e50-8d49-ded0987426fe',
				name: 'Disintegrate',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d10 + 10 damage, and ongoing 10 damage (save ends). If the target saves, it takes ongoing 5 damage (save ends). Miss: 2d10 + 10 damage, and ongoing 5 damage (save ends).',
				damage: '2d10 + 10 damage',
				category: 1
			},
			{
				id: '58b9d435-f905-42d5-87d7-0f4ac2433f03',
				name: 'Acid Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 1
				},
				description: '',
				details: 'Burst 4 within 10 squares; 3d6 + 10 acid damage. The cloud blocks line of sight, providing total concealment to creatures inside it. Any creature that enters the cloud or starts its turn there takes 10 acid damage. The cloud lasts until the end of Soelma’s next turn, or she can dismiss it as a minor action.',
				damage: '3d6 + 10 acid damage',
				category: 1
			},
			{
				id: '95914ace-ba2c-49b7-8892-c6842a0170f6',
				name: 'Combust',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Implement',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: 'Burst 2 within 20 squares; 3d6 + 10 fire damage.',
				damage: '3d6 + 10 fire damage',
				category: 1
			},
			{
				id: '7c1dea0f-5b86-4893-b72d-b57636322807',
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
				details: 'Soelma rerolls an attack roll. She uses the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: 'f57f973a-b56d-4c09-a604-9c9ee48002ae',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Soelma ignores difficult terrain when she shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 24 Artillery',
		phenotype: 'Medium natural humanoid (elf)'
	},
	{
		id: '55312f1a-582e-4d6c-afbe-67fc29d4fc4d',
		name: 'Terrifying Iron Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 30,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '6 (cannot shift)',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'longsword',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 28,
			modifier: 9,
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 552,
		initiative: 21,
		ac: 46,
		fortitude: 46,
		reflex: 40,
		will: 38,
		regeneration: null,
		auras: [
			{
				id: '02f7a9dd-37bf-4748-9d5e-b47ce3df7554',
				name: 'Noxious Fumes',
				keywords: '',
				details: '(Poison) aura 2; while the iron golem is bloodied, each creature that enters the aura or starts its turn there takes 10 poison damage.'
			}
		],
		powers: [
			{
				id: '652758f5-d05e-4c77-b10f-9b9e2049de90',
				name: 'Iron Blade',
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
					bonus: 37,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10 + 7 damage, and the target is marked (save ends).',
				damage: '3d10 + 7 damage',
				category: 1
			},
			{
				id: '512d029f-5b30-4e45-8a3e-9636451b81fc',
				name: 'Cleave',
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
				details: 'The iron golem makes two iron blade attacks, each against a different target.',
				damage: '',
				category: 1
			},
			{
				id: '01402f2a-3c6a-4f75-a7de-2406a204e88b',
				name: 'Dazing Fist',
				action: {
					action: 5,
					trigger: 'when a creature marked by the iron golem and within its reach moves or shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: 'Reach 2; targets the triggering creature; the target is dazed (save ends).',
				damage: 'Reach 2',
				category: 5
			},
			{
				id: 'bb70e5ea-c466-4c01-991c-edf410f314ad',
				name: 'Breath Weapon',
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
					bonus: 35,
					defence: 1
				},
				description: '',
				details: '4d8 + 9 poison damage, and ongoing 10 poison damage (save ends).',
				damage: '4d8 + 9 poison damage',
				category: 1
			},
			{
				id: 'fd2fa094-60b2-4195-853b-5eca62562caa',
				name: 'Toxic Death',
				action: null,
				keywords: 'Poison',
				condition: 'when first bloodied and again when the iron golem drops to 0 hit points',
				range: 'Close burst 3',
				attack: {
					bonus: 35,
					defence: 1
				},
				description: '',
				details: '4d8 + 6 poison damage, and ongoing 15 poison damage (save ends).',
				damage: '4d8 + 6 poison damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 30 Elite Soldier',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'a8bcc5b0-2fff-44c6-b0b0-bc31030c3033',
		name: 'Thrall of Juiblex',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 23,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '5 (7 while charging)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +22',
		equipment: 'chainmail; morningstar',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 264,
		initiative: 13,
		ac: 35,
		fortitude: 36,
		reflex: 30,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62128450-760a-46b5-93a7-e37fdf799adf',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d10 + 11 damage.',
				damage: '2d10 + 11 damage',
				category: 1
			},
			{
				id: '4b76db8e-6f6a-4a05-b944-410235ddb644',
				name: 'Punishing Strike',
				action: {
					action: 1,
					trigger: 'requires a morningstar',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The thrall of Juiblex makes two basic melee attacks. If both hit the same target, that creature is pushed 3 squares and knocked prone.',
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

		info: 'Level 23 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c50cff1f-9b95-4dba-a2ea-96d5808f4325',
		name: 'Vanessa',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'tiefling',
		level: 23,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +24, Bluff +16, Stealth +20',
		equipment: 'crossbow; leather armor; longsword',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		wisdom: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 167,
		initiative: 18,
		ac: 35,
		fortitude: 35,
		reflex: 36,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '46e5261a-d967-46f3-ace5-f912e544d4a2',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d8 + 3 damage.',
				damage: '2d8 + 3 damage',
				category: 1
			},
			{
				id: '0780a547-7717-44b1-9a33-98966e488a65',
				name: 'Magic Missile',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force, Implement',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '4d4 + 9 damage.',
				damage: '4d4 + 9 damage',
				category: 1
			},
			{
				id: 'f0fbd5a5-8c15-4b28-8809-a21e8efcc6d3',
				name: 'Prismatic Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '3d12 + 9 damage, and the target is pushed 4 squares and knocked prone.',
				damage: '3d12 + 9 damage',
				category: 1
			},
			{
				id: '1f737f56-c254-4e36-81f4-dead60dacbb6',
				name: 'Acid Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when first bloodied'
				},
				keywords: 'Acid, Implement',
				condition: '',
				range: 'Area burst 2 within 20 squares',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '3d10 + 8 acid damage.',
				damage: '3d10 + 8 acid damage',
				category: 1
			},
			{
				id: 'e6fb9c22-e711-41c9-9b2f-2769c6268cef',
				name: 'Bloodhunt',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Vanessa gains a +1 racial bonus to hit against bloodied foes.',
				damage: 'Vanessa gains a +1 racial bonus to hit against bloodied foes',
				category: 0
			},
			{
				id: '7b8658fb-7d1f-46c4-ba19-6976f8c95630',
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
				details: 'Vanessa channels her fury to gain a +1 power bonus to her next attack that has hit her since her last turn. If she hits, she deals an extra 3 damage.',
				damage: 'she deals an extra 3 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: 'fire 16',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Artillery',
		phenotype: 'Medium natural humanoid (tiefling)'
	},
	{
		id: '4ec6e1d1-6e37-484d-8cfc-e28b33ea2a3b',
		name: 'Vanguard Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile; yuan-ti',
		level: 28,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17',
		movement: '7 (9); see also slither away',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: '',
		equipment: 'arrow; falchion; leather armor; longbow',
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
			score: 30,
			modifier: 10,
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 254,
		initiative: 26,
		ac: 42,
		fortitude: 39,
		reflex: 41,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '526558ad-8916-433c-b015-e18e766decec',
				name: 'Falchion',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '2d4 + 7 damage, and ongoing 10 poison damage (save ends).',
				damage: '2d4 + 7 damage',
				category: 1
			},
			{
				id: '0c9d3402-3da3-455f-8dbb-dbcc044a82e3',
				name: 'Longbow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 33,
					defence: 0
				},
				description: '',
				details: '1d10 + 10 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d10 + 10 damage',
				category: 1
			},
			{
				id: '1abd3393-7260-4402-ac5c-b2c95050ad52',
				name: 'Sudden Strike',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'The vanguard assassin can move up to 7 squares and attack; 4d4 + 7 damage, and the target is dazed (save ends).',
				damage: '4d4 + 7 damage',
				category: 1
			},
			{
				id: '129dd719-116e-42d9-a7db-dea9f8f9d022',
				name: 'Viper Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 31,
					defence: 3
				},
				description: '',
				details: '6d4 + 7 damage, and the vanguard assassin becomes invisible and can shift 2 squares. The vanguard assassin remains invisible until the start of its next turn. Miss: The target takes half damage, and the vanguard assassin shifts 1 square, but does not turn invisible.',
				damage: '6d4 + 7 damage',
				category: 1
			},
			{
				id: '26185c84-e441-44a2-83e4-9fef759fc079',
				name: 'Slither Away',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While bloodied, the vanguard assassin gains +2 speed and a +2 bonus to all defenses.',
				damage: 'the vanguard assassin gains +2 speed and a +2 bonus to all defenses',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'poison 20',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 28 Skirmisher',
		phenotype: 'Medium natural humanoid (reptile; yuan-ti)'
	},
	{
		id: 'ac5c82c5-11c3-4d95-9fef-fded200733d7',
		name: 'Viper Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'reptile, swarm',
		level: 29,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6, climb 4, swim 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +29',
		equipment: '',
		category: '',
		strength: {
			score: 26,
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 1,
		initiative: 24,
		ac: 57,
		fortitude: 53,
		reflex: 54,
		will: 47,
		regeneration: null,
		auras: [
			{
				id: 'aa5a54ec-76ce-42e3-9048-ac584148a13a',
				name: 'Swarm Attack',
				keywords: '',
				details: '(Poison) aura 1; each enemy that starts its turn within the aura takes 7 poison damage.'
			}
		],
		powers: [
			{
				id: 'e4f00270-a0cc-4bf1-bfcd-7aa84838a5c4',
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
					bonus: 39,
					defence: 0
				},
				description: '',
				details: '14 poison damage.',
				damage: '14 poison damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 29 Minion',
		phenotype: 'Medium natural beast (reptile, swarm)'
	},
	{
		id: '6a6ddc07-d001-4357-8617-a42b0fe5143c',
		name: 'Waterveiled Assassin',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 29,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6, burrow 6',
		alignment: 'Evil',
		languages: 'Common, Primordial',
		skills: 'Stealth +28',
		equipment: '',
		category: '',
		strength: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 21,
			modifier: 5,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 201,
		initiative: 27,
		ac: 43,
		fortitude: 42,
		reflex: 41,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '008f0c36-d944-4a2d-81d1-6a6f873aeb84',
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
					bonus: 34,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8 + 10 damage.',
				damage: '3d8 + 10 damage',
				category: 1
			},
			{
				id: '33af4d0d-8d68-4743-bd36-fbc1039ab396',
				name: 'Watery Embrace',
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
					bonus: 32,
					defence: 2
				},
				description: '',
				details: 'The waterveiled assassin attacks one or two Medium or smaller targets; Reach 2; On a hit, the target is grabbed and pulled up to 3 squares and into the waterveiled assassin’s space; the target takes ongoing 15 damage until it escapes the grab. A creature that escapes the grab shifts to a square of its choosing adjacent to the waterveiled assassin. The waterveiled assassin moves at half speed while creatures are engulfed within it.',
				damage: 'the target takes ongoing 15 damage until it escapes the grab',
				category: 1
			},
			{
				id: '33693bef-abf7-411d-b8be-547081f12bad',
				name: 'Sudden Deluge',
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
					bonus: 32,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 5d12 + 9 damage, and the target is pushed 4 squares and dazed (save ends).',
				damage: '5d12 + 9 damage',
				category: 1
			},
			{
				id: 'aa0bfe35-4f9e-40a0-94ca-5e2bc1f226fa',
				name: 'Liquid Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A waterveiled assassin has complete control over its watery form. It can flow through small cracks and move through earth, walls, and other obstacles. It ignores difficult terrain and can burrow in this manner.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 29 Lurker',
		phenotype: 'Large elemental animate'
	},
	{
		id: 'cd69ab90-325f-433a-968d-0bf599d6ce02',
		name: 'Whelp of Zargon',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'blind, ooze',
		level: 22,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; tremorsense',
		movement: '6, swim 6',
		alignment: 'Evil',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 258,
		initiative: 11,
		ac: 34,
		fortitude: 36,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '10997a63-f0c7-4f55-9705-aff2b76acfa5',
				name: 'Horrific Visage',
				keywords: '',
				details: '(Psychic) aura 1; enemies that end their turn within the aura are weakened until the end of their next turn.'
			}
		],
		powers: [
			{
				id: 'e3d014c2-701c-4ba0-b405-0f8c2d83b09c',
				name: 'Slam',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d6 + 9 damage, and ongoing 10 acid damage.',
				damage: '2d6 + 9 damage',
				category: 1
			},
			{
				id: 'c15803ca-056d-4d20-97fe-d5a53fdf06bb',
				name: 'Noxious Slime',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Acid',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d10 + 10 damage, and the target is grabbed (until escape). The whelp can only have two creatures grabbed at a time. Sustain Minor: Sustain the grab, and the target takes 2d10 + 10 acid damage.',
				damage: '2d10 + 10 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'acid',
		tactics: '',

		info: 'Level 22 Brute',
		phenotype: 'Medium natural beast (blind, ooze)'
	},
	{
		id: '3d3cb1f1-15a0-4ab5-901a-575f40a56922',
		name: 'Whitespawn Berserker',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 23,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Endurance +23, Intimidate +18',
		equipment: 'spiked chain',
		category: 'Dragonspawn',
		strength: {
			score: 28,
			modifier: 9,
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
			score: 7,
			modifier: -2,
			cost: 0
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
		hp: 264,
		initiative: 15,
		ac: 35,
		fortitude: 37,
		reflex: 32,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a3233220-f5b4-452e-8fd7-fdd11ac3ba14',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4 + 9 damage.',
				damage: '2d4 + 9 damage',
				category: 1
			},
			{
				id: 'c79c8dff-b888-4e74-b76c-05d7cc976378',
				name: 'Raging Blow',
				action: {
					action: 1,
					trigger: 'requires a spiked chain',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Reach 2; 8d4 + 9 damage, and the target is knocked prone and immobilized (save ends).',
				damage: '8d4 + 9 damage',
				category: 5
			},
			{
				id: '8a3dadb5-93ba-49b1-9b00-839975627b96',
				name: 'Reaving Strike',
				action: {
					action: 1,
					trigger: 'requires a spiked chain',
					sustainAction: 0,
					use: 0,
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
				details: 'Reach 2; 10d4 +9 damage, and the target is pushed 1 square.',
				damage: '10d4 +9 damage',
				category: 5
			},
			{
				id: '92563958-c4ec-46cf-8f70-3a19d4cca6f8',
				name: 'Swift Step',
				action: {
					action: 4,
					trigger: 'when an adjacent enemy moves away from the whitespawn',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The whitespawn shifts into the vacated square and the triggering enemy grants the whitespan combat advantage until the end of the whitespawn’s next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Brute',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: '0ab4af2c-b86e-498d-90db-e5d0b89d87bb',
		name: 'Zargon',
		details: '',
		size: 4,
		origin: 3,
		type: 1,
		keywords: '',
		level: 25,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +27; darkvision',
		movement: '8, swim 6',
		alignment: 'Evil',
		languages: 'Common, Primordial',
		skills: 'Intimidate +28',
		equipment: '',
		category: '',
		strength: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		constitution: {
			score: 30,
			modifier: 10,
			cost: -1
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		charisma: {
			score: 32,
			modifier: 11,
			cost: -1
		},
		hp: 476,
		initiative: 18,
		ac: 41,
		fortitude: 39,
		reflex: 35,
		will: 37,
		regeneration: {
			value: 15,
			details: '(if Zargon takes radiant damage, regeneration does not function until the end of his next turn).'
		},
		auras: [],
		powers: [
			{
				id: '807dfd31-1a8f-4d51-a752-46e5a06ab46a',
				name: 'Tentacle Slam',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8 + 11 damage.',
				damage: '3d8 + 11 damage',
				category: 1
			},
			{
				id: '8cfed5b5-ab21-4072-a129-02307d38435c',
				name: 'Grab and Crush',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 3d8 + 11 damage, and the target is grabbed. Sustain minor: Zargon sustains the grab and the target takes 2d8 + 11 damage. Zargon’s moves normally while grabbing a creature. Zargon can have up to two creatures grabbed at a time.',
				damage: '3d8 + 11 damage',
				category: 1
			},
			{
				id: 'ee18154b-24f3-4ab3-a9a1-47f5e6fe32b7',
				name: 'Writhing Mass',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'targets enemies only; 3d8 + 11 damage, and the target is pulled 2 squares.',
				damage: '3d8 + 11 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'cold 20, fire 20',
		vulnerable: '',
		immune: 'acid',
		tactics: '',

		info: 'Level 25 Elite Skirmisher',
		phenotype: 'Huge immortal beast'
	},
	{
		id: '90e692fb-ebef-478c-8a24-92c965d55dbd',
		name: 'Zuvexus',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'demon, marilith ',
		level: 30,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +26; darkvision',
		movement: '8',
		alignment: 'Chaotic Evil',
		languages: 'Abyssal',
		skills: 'Bluff +27, Insight +26, Intimidate +27, Stealth +29',
		equipment: 'scimitar',
		category: '',
		strength: {
			score: 31,
			modifier: 10,
			cost: -1
		},
		constitution: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		dexterity: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
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
		hp: 542,
		initiative: 26,
		ac: 44,
		fortitude: 42,
		reflex: 41,
		will: 39,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e16816c7-9753-45e3-b40d-b14e0372fa8e',
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
					bonus: 35,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d12 + 10 damage (crit 6d12 + 34).',
				damage: '2d12 + 10 damage (crit 6d12 + 34)',
				category: 1
			},
			{
				id: '767a2e74-90cf-4fd7-865b-7b77801417dc',
				name: 'Hacking Blades',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy misses zuvexus with a melee attack',
					sustainAction: 0,
					use: 1,
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
				details: 'Zuvexus makes a scimitar attack against the enemy; .',
				damage: '',
				category: 5
			},
			{
				id: '3256962e-24e7-42e8-8687-9db968c849f7',
				name: 'Shroud of Steel',
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
					bonus: 33,
					defence: 0
				},
				description: '',
				details: 'Zuvexus makes two scimitar attacks and uses its other scimitars to parry incoming attacks, gaining a +4 bonus (+1 per scimitar) to AC until the start of its next turn; .',
				damage: 'gaining a +4 bonus (+1 per scimitar) to AC until the start of its next turn',
				category: 1
			},
			{
				id: 'f84c5242-7cb2-493a-a7ab-b96c5eb8aecf',
				name: 'Weapon Dance',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
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
				details: 'Zuvexus makes six scimitar attacks. Each time she hits, she shifts one square; .',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '20 variable (3/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 30 Elite Skirmisher',
		phenotype: 'Large elemental humanoid (demon, marilith )'
	},
	{
		id: '03e7ab7d-a011-4675-9a5e-72366c9cd771',
		name: 'Al-Iborak Warrior',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 26,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +16',
		movement: '5, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Athletics +23, History +22, Intimidate +26',
		equipment: 'bastard sword; heavy shield; plate armor',
		category: '',
		strength: {
			score: 29,
			modifier: 9,
			cost: -1
		},
		constitution: {
			score: 23,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 1,
		initiative: 20,
		ac: 42,
		fortitude: 42,
		reflex: 40,
		will: 41,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9f2417d9-5369-4cd8-bfe9-bf4a35b4d0be',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '10 damage, and the target is marked until the end of the Al-Iborak warrior’s next turn.',
				damage: '10 damage',
				category: 1
			},
			{
				id: '950f2e03-1660-4888-b4f2-da5a2dce196a',
				name: 'Al-Iborak’s Tactics',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Al-lborak guard does 2 extra damage while attacking a marked creature.',
				damage: 'the al-lborak guard does 2 extra damage while attacking a marked creature',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -30
			},
			{
				type: 2,
				value: -30
			},
			{
				type: 3,
				value: -30
			},
			{
				type: 5,
				value: -30
			},
			{
				type: 7,
				value: -30
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 26 Minion',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: '0557dc52-d553-4e9c-8875-d3b938e9e36f',
		name: 'Bloodfiend Locust Swarm',
		details: '',
		size: 2,
		origin: 3,
		type: 1,
		keywords: '',
		level: 22,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '4, fly 6',
		alignment: 'Chaotic Evil',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		dexterity: {
			score: 27,
			modifier: 8,
			cost: -1
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 204,
		initiative: 21,
		ac: 36,
		fortitude: 34,
		reflex: 35,
		will: 30,
		regeneration: null,
		auras: [
			{
				id: 'fae928b1-9023-4dc5-8033-1c222ab4431f',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the bloodfiend locust swarm makes a basic attack as a free action against each enemy that begins its turn within the aura.'
			}
		],
		powers: [
			{
				id: '383c08ad-6a00-449a-878d-5578ebbf51d1',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '4d6 + 7 damage.',
				damage: '4d6 + 7 damage',
				category: 1
			},
			{
				id: '7f774f25-d87a-4225-8884-43c7529b8f9e',
				name: 'Swarm of Teeth',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '4d6 + 7 damage, and ongoing 10 damage (save ends).',
				damage: '4d6 + 7 damage',
				category: 1
			},
			{
				id: '47b468c4-c874-42de-89c4-71484c376a25',
				name: 'Flyby Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'The bloodfiend locust swarm flies 6 squares and makes one melee basic attack at any point during its movement. This movement does not provoke opportunity attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '5 against close and area attacks.',
		immune: '',
		tactics: '',

		info: 'Level 22 Skirmisher',
		phenotype: 'Medium immortal beast'
	},
	{
		id: '29a57f46-b2ea-43a8-a5b2-abe6f0f09883',
		name: 'Calais Archwinter',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'drow',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Diplomacy +15, Religion +11',
		equipment: 'chainmail; holy symbol; mace',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 250,
		initiative: 8,
		ac: 26,
		fortitude: 24,
		reflex: 25,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f41b5242-a48c-47d4-a1f6-f9b362e7a91d',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '52c352ab-d065-4424-991d-bf5cc54d1b15',
				name: 'Lolth’s Sting',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '1d8+9 poison damage and one ally Calais can see gains a +2 power bonus to attack rolls against the target until the end of her next turn.',
				damage: '1d8+9 poison damage and one ally calais can see gains a +2 power bonus to attack rolls against the target until the end of her next turn',
				category: 1
			},
			{
				id: '4e962a0d-5c4f-4d01-9f73-232e8aa34884',
				name: 'Dread Command',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'Calais slides the target 5 squares and the target makes a basic attack against a target of Calais’s choice.',
				damage: 'Calais slides the target 5 squares and the target makes a basic attack against a target of Calais’s choice',
				category: 3
			},
			{
				id: '08647e45-c049-4093-b769-f5d371e99677',
				name: 'Lolth’s Doom',
				action: {
					action: 1,
					trigger: 'recharges when bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '3d8+4 damage and the target takes a –2 penalty to all defenses (save ends).',
				damage: '3d8+4 damage and the target takes a –2 penalty to all defenses (save ends)',
				category: 5
			},
			{
				id: '7cf3fc33-1c07-4c77-8d05-08556dbdd492',
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
				details: 'this power creates a zone of darkness that remains in place until the end of Calais’s next turn. The zone blocks line of sight for all creatures except Calais. Any creature (except Calais) within the area is blinded.',
				damage: '',
				category: 3
			},
			{
				id: 'a8bd4fcc-765c-45c4-8c7f-f72db3570aeb',
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
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'until the end of Calais’s next turn, the target grants combat advantage to all attackers, and the target cannot benefit from invisibility or concealment.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Controller',
		phenotype: 'Medium fey humanoid (drow)'
	},
	{
		id: '9fbd99ec-63e8-4673-be28-b1f9de27858a',
		name: 'Captain Gnash',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'bugbear',
		level: 9,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Intimidate +12, Stealth +15',
		equipment: 'hide armor; rapier',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 236,
		initiative: 8,
		ac: 23,
		fortitude: 22,
		reflex: 23,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '18051786-e0a6-460d-8127-e88d514c047b',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d10+6 damage.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: '5517a9fa-c596-47b3-b877-7854b6a6bf49',
				name: 'Debilitating Strike',
				action: {
					action: 1,
					trigger: 'requires combat advantage against the target; usable only while wielding a rapier',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '3d10+6 damage, and the target is dazed (save ends both).',
				damage: '3d10+6 damage',
				category: 5
			},
			{
				id: '8649d9c7-020c-4400-811d-afaa628bb42b',
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
				range: 'Gnash makes a melee basic attack against the triggering enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '159972c2-b92c-48ee-8612-77706a3411a3',
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
				details: 'Gnash deals 1d6 extra damage on the next attack it makes with combat advantage. It must apply this bonus before the end of its next turn.',
				damage: 'gnash deals 1d6 extra damage on the next attack it makes with combat advantage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Brute',
		phenotype: 'Medium natural humanoid (bugbear)'
	},
	{
		id: '843a364a-ddb4-4a04-aadc-fc61f08575ba',
		name: 'Corrupted Commander',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'human',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +7',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Endurance +12, Intimidate +9',
		equipment: 'battleaxe; longbow; scale armor',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 96,
		initiative: 10,
		ac: 25,
		fortitude: 22,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ab1bf64d-0439-46ed-8d72-7f25cae7b0f9',
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
				range: 'Melee 1',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d10 + 5 damage, and the target is marked until the end of its next turn.',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: '56a768d7-f655-479d-85e9-ed846c882e55',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: 'a11f8b83-c410-4cd8-83dd-d2f616fd00c6',
				name: 'Sickening Blow',
				action: {
					action: 1,
					trigger: 'usable only while wielding a battleaxe',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d10 + 6 necrotic damage, and the target takes a –2 penalty to all defenses (save ends).',
				damage: '2d10 + 6 necrotic damage',
				category: 5
			},
			{
				id: '9702911e-b840-448d-b2f3-187edd92a4b1',
				name: 'Commanding Rally',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon, Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'All allies within line of sight can make a basic attack as a free action and regain 10 hit points.',
				damage: 'All allies within line of sight can make a basic attack as a free action and regain 10 hit points',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Soldier (L)',
		phenotype: 'Medium aberrant humanoid (human)'
	},
	{
		id: '201169d9-7166-423f-a325-c9ba6964716c',
		name: 'Corrupted Warrior',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'human',
		level: 7,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +10, Intimidate +7',
		equipment: 'arrows (30); chainmail; longbow; longsword',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 63,
		initiative: 7,
		ac: 20,
		fortitude: 19,
		reflex: 19,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '29d198ad-3988-416f-ae4a-19981e01be11',
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
				details: '1d8 + 4 damage.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: 'ba7ef026-0461-4b73-bbc3-285be7ed619c',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage.',
				damage: '1d10 + 4 damage',
				category: 1
			},
			{
				id: '9ab02731-9578-45ca-be0b-f08e540043f6',
				name: 'Corruption Shot',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d10 + 4 damage, and the target is weakened until the end of its next turn.',
				damage: '1d10 + 4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Artillery',
		phenotype: 'Medium aberrant humanoid (human)'
	},
	{
		id: '303cbdfc-bb6c-4fdb-97f5-11f4fd843f8a',
		name: 'Draen Ralgael',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6, climb 4 (not in human form)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +12, Stealth +15, Streetwise +12, Thievery +15',
		equipment: 'short sword',
		category: '',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 91,
		initiative: 11,
		ac: 24,
		fortitude: 22,
		reflex: 23,
		will: 21,
		regeneration: {
			value: 5,
			details: 'if Draen takes damage from a silver weapon, his regeneration doesn’t function on its next turn'
		},
		auras: [],
		powers: [
			{
				id: '6db7b7ba-091c-4478-ab9c-151dc8c751f9',
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
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'cf435501-5f0e-40d4-95b6-724924cc8e8f',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage, and the target takes ongoing 5 damage (save ends) and contracts filth fever.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '1e7ef35e-0c3b-4b91-bfbe-fb072674aad3',
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
				details: 'Draen can alter his physical form to appear as a dire rat or a unique human (see Change Shape, Monster Manual 280). He loses his bite in human form',
				damage: '',
				category: 3
			},
			{
				id: '2211a16e-89c7-4a25-950f-9f195d4a1537',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Draen deals 2d6 extra damage on melee attacks against any target he has combat advantage against.',
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

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '0013962c-e86f-469d-ab80-d2f4eb20e19f',
		name: 'Dwarreg',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dwarf',
		level: 10,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +16, Endurance +15',
		equipment: 'chainmail; warhammer',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 208,
		initiative: 5,
		ac: 26,
		fortitude: 24,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd43fc037-a391-40b6-ae97-3a728175f2da',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d10 +5 damage.',
				damage: '1d10 +5 damage',
				category: 1
			},
			{
				id: '6e60faa0-d956-4d86-ab0c-be16f6d00d2f',
				name: 'Knockout',
				action: {
					action: 1,
					trigger: 'usable while wielding a warhammer',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d10+ 10 and the target is dazed (save ends).',
				damage: '2d10+ 10 and the target is dazed (save ends)',
				category: 5
			},
			{
				id: 'bca248cb-a383-4871-80c9-c25e8cfdf228',
				name: 'Sticky Concoction',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'target is immobilized and grants combat advantage to any enemy (save ends both).',
				damage: '',
				category: 3
			},
			{
				id: '3dd4825e-b1ae-45e7-bb76-490a5604d56e',
				name: 'Stand Your Ground',
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
				details: 'When an effect forces a Dwarreg to move—through a push, a pull, or a slide—the dwarf moves 1 square less than the effect specifies. When an attack would knock Dwarreg prone, Dwarreg can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—the dwarf moves 1 square less than the effect specifies',
				category: 1
			},
			{
				id: '2746ef8b-4f59-49e9-b9c3-a419e1e0306a',
				name: 'Sudden Daze',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'Dwarreg’s knockout power recharges and he can use it immediately.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Controller',
		phenotype: 'Medium natural humanoid (dwarf)'
	},
	{
		id: '78715ac2-4210-4b2a-a923-70cb6c278eb6',
		name: 'Edgar Tolstoff',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +12, History +12',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 113,
		initiative: 8,
		ac: 23,
		fortitude: 25,
		reflex: 25,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bcd1a4b7-f61e-482a-8f9a-00e5479e127f',
				name: 'Sickle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Melee 1',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d6 + 6 damage.',
				damage: '1d6 + 6 damage',
				category: 1
			},
			{
				id: 'e6e41451-f762-4245-b529-f0ce9ed3c7ec',
				name: 'Eldritch Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '1d10 + 8 damage.',
				damage: '1d10 + 8 damage',
				category: 1
			},
			{
				id: 'c7d5d0d6-4945-4bd0-8b1c-79b0c43958a7',
				name: 'Dire Radiance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Radiant',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '1d6 + 8 damage. If the target moves nearer to Edgar on its next turn, it takes 1d6 + 8 extra damage.',
				damage: '1d6 + 8 damage',
				category: 1
			},
			{
				id: '24807bd5-4bb5-4f83-956f-e3caaeb9e6be',
				name: 'Fearful Connection',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d8 + 8 8 psychic damage, and when Edgar takes damage the target takes 10 psychic damage (save ends).',
				damage: '2d8 + 8 8 psychic damage',
				category: 1
			},
			{
				id: '93fc6797-be18-4c04-a9b5-ac9283b78e15',
				name: 'Corruption Curse',
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
				attack: null,
				description: '',
				details: 'targets closest enemy; automatically hits; until the end of the encounter, if Edgar hits the target with his eldritch blast, dire radiance, or fearful connection, the target takes 1d8 extra necrotic damage.',
				damage: 'the target takes 1d8 extra necrotic damage',
				category: 3
			},
			{
				id: '24475b63-c7fb-42c3-89de-2b4ebc09a0a4',
				name: 'Far Step',
				action: {
					action: 2,
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
				details: 'Edgar teleports 6 squares. Any enemy adjacent to him before or after the teleportation move grants combat advantage to him until the end of his next turn.',
				damage: 'Edgar teleports 6 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'eaf324a3-5d05-49f4-abfc-fb02f5d44ae3',
		name: 'Emmara Ishandrenn',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 17,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Chaotic Evil',
		languages: 'Common',
		skills: 'Bluff +18, Intimidate +18',
		equipment: 'falchion; leather armor',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 324,
		initiative: 10,
		ac: 29,
		fortitude: 29,
		reflex: 30,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad9c6be9-61ee-41b1-8e7f-21bbe5f95637',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d4+3 damage.',
				damage: '2d4+3 damage',
				category: 1
			},
			{
				id: 'b57dc194-0caa-4ca8-938d-79cd2ba35a54',
				name: 'Eldritch Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d10+10 damage.',
				damage: '1d10+10 damage',
				category: 1
			},
			{
				id: '296eb4b0-4d9c-415a-85c5-53ae4d5ba1d7',
				name: 'Harrowstone',
				action: {
					action: 1,
					trigger: 'recharges when first bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '4d8+4 thunder damage, and push the target 3 squares and knock it prone.',
				damage: '4d8+4 thunder damage',
				category: 5
			},
			{
				id: '3423bdac-e25d-4d16-a61b-b9db70efb935',
				name: 'Thirsting Maw',
				action: {
					action: 1,
					trigger: 'daily; sustain minor',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '4d8+5 damage, and Emmara regains hit points equal to half the damage dealt. Sustain Minor: The target takes 2d8 damage (save ends). Each time the target takes damage, Emmara regains hit points equal to half the damage.',
				damage: '4d8+5 damage',
				category: 5
			},
			{
				id: '380b558b-4c44-4b83-af2e-592bd46926f9',
				name: 'Warlock’s Bargain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'Emmara takes 15 damage, and the target takes 3d10 + 12 damage.',
				damage: 'emmara takes 15 damage',
				category: 1
			},
			{
				id: '3c277dc8-486e-457e-9f0b-84d9c90214ec',
				name: 'Warlock’s Curse',
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
				details: 'Targets closest enemy; no attack roll necessary; Emmara deals 2d6 extra damage to any creature she has cursed.',
				damage: 'emmara deals 2d6 extra damage to any creature she has cursed',
				category: 3
			},
			{
				id: 'f4a0659b-bfdd-4876-86dd-48843e29fa9f',
				name: 'Cloak of Shadows',
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
				details: 'Emmara flies 8 squares. Until the end of her next turn, Emmara is insubstantial and cannot affect, attack, or use powers on creatures or objects',
				damage: 'Emmara flies 8 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '52c6c138-0ebd-42f6-99ac-7fdf008e0aec',
		name: 'Farror',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil, shapechanger',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '6, fly 6',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: 'Bluff +19, Diplomacy +19, Insight +17',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 140,
		initiative: 13,
		ac: 29,
		fortitude: 25,
		reflex: 27,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6476d3b0-e770-4923-8ec2-2143fb8f2126',
				name: 'Corrupting Touch',
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
				details: '2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '4134d3d5-4622-4cde-952f-dcb85b3db86c',
				name: 'Charming Kiss',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target cannot attack Farror, and if the target is adjacent to Farror when Farror is attacked by a melee or ranged attack, the target interposes itself and becomes the target of the attack instead. The effects last until Farror or one of his allies attacks the target or until Farror dies.',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'on a hit, Farror makes a secondary attack against the same target. Secondary Attack: +18 vs. Will',
				damage: '+18 vs',
				category: 1
			},
			{
				name: 'Dominate',
				action: {

