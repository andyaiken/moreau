import { Monster } from '../../models/monster';

const monsters: Monster[] = [
	{
		id: 'c6f04dc4-4744-4d27-88ce-45b938191e0c',
		name: 'Human Cultist Archer',
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
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'arrow; leather armor; longbow; longsword',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
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
				id: '2e5121b5-31e4-411b-acc4-1d1229527f1a',
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
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: '2e038acf-3fa5-419e-97fa-4a59b899dad1',
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
				range: '1d10+4 damage, and the cultist archer grants an ally within 5 squares of it a +2 bonus to its next ranged attack against the same target.',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'fb96a76f-8813-4f37-a14e-6957873dae55',
				name: 'Cultist Hysteria',
				action: {
					action: 4,
					trigger: 'when bloodied',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The cultist archer gets an immediate saving throw against any ongoing affects it might be suffering.',
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
		id: 'a24bc660-5eee-4033-b1e7-cf193ad235d0',
		name: 'Ichyrot (Kyton)',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 11,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Intimidate +11',
		equipment: '',
		category: '',
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
		hp: 116,
		initiative: 14,
		ac: 25,
		fortitude: 22,
		reflex: 24,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '998c7ca7-eb87-45b8-8ad0-7f0002fa367a',
				name: 'Spiked Chain',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d4+7 damage.',
				damage: '2d4+7 damage',
				category: 1
			},
			{
				id: '596d85e5-9686-41fe-82a8-ed186a56dc0a',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Ichyrot makes two spiked chain attacks.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'ae00e211-f11e-492c-8b5b-dd492b8beaef',
				name: 'Chains of Vengeance',
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
				details: 'Ichyrot makes two spiked chain attacks.',
				damage: '',
				category: 5
			},
			{
				id: '57799bac-508e-48e3-9477-2514b4d338db',
				name: 'Hellish Chain',
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
				details: 'the target is wrapped in chains and restrained (save ends). Ichyrot can only use its chains to restrain one creature at a time.',
				damage: '',
				category: 1
			},
			{
				id: '9f119305-2014-48ea-adea-5854a93d56b4',
				name: 'Dance of Battle',
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
				details: 'Ichyrot shifts 1 square.',
				damage: 'Ichyrot shifts 1 square',
				category: 3
			},
			{
				id: 'f6f8ab12-4c61-48cc-8d38-2cc507ca1961',
				name: 'Dance of Defiance',
				action: {
					action: 5,
					trigger: 'when a melee attack is made against ichyrot',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges after ichyrot uses chains of vengeance'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Ichyrot shifts 1 square.',
				damage: 'Ichyrot shifts 1 square',
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

		info: 'Level 11 Skirmisher',
		phenotype: 'Medium immortal humanoid (devil)'
	},
	{
		id: '2194c1cc-9768-4647-b180-8665554de346',
		name: 'Kalad the Paladin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '5',
		alignment: 'Lawful good',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +6, Endurance +11, Heal +9, History +7, Religion +7',
		equipment: 'greataxe; plate armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 54,
		initiative: 4,
		ac: 21,
		fortitude: 17,
		reflex: 14,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eb1cbccc-a942-4263-85c3-e139ae0b91c1',
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
				details: '1d12+3 damage,(crit 1d12+18), and the target is marked until the end of Kalad’s next turn. if the target moves or makes an attack that does not include Kalad as the target, the target takes 5 radiant damage.',
				damage: '1d12+3 damage',
				category: 1
			},
			{
				id: '391b5378-e5d4-4a9e-88fa-622fedaeeca3',
				name: 'Arcing Smite',
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
				details: 'One or two creatures; 1d12 + 3 damage (crit 1d12 + 18) damage, and the target is marked until end of Kalad’s next turn.; One or two creatures; +8 vs AC; 1d6+4 damage.',
				damage: '1d12 + 3 damage (crit 1d12 + 18) damage',
				category: 1
			},
			{
				id: 'fe8911b4-fbdb-410b-886f-7d7f538bb0c2',
				name: 'Holy Smite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12+3 damage (crit 1d12+18) radiant damage, and if Kalad marked the target, he deals an extra 2 radiant damage.',
				damage: '1d12+3 damage (crit 1d12+18) radiant damage',
				category: 1
			},
			{
				id: '59f0c412-be25-4373-a449-0cf701c96143',
				name: 'Sacred Circle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Close burst 3',
				attack: null,
				description: '',
				details: 'the burst creates a zone that, until the end of the encounter, gives Kalad and allies within it a +1 power bonus to AC.',
				damage: 'gives Kalad and allies within it a +1 power bonus to AC',
				category: 1
			},
			{
				id: 'e8042877-1da8-4a09-af54-2702cc41e4bd',
				name: 'Divine Strength',
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
				details: 'Kalad applies his Strength modifier as extra damage on his next attack this turn.',
				damage: 'kalad applies his strength modifier as extra damage on his next attack this turn',
				category: 3
			},
			{
				id: '29d242e1-c5b2-4459-82a1-44e1ce0cca47',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces Kalad to move—through a pull, a push, or a slide—he moves 1 square less than the effect specifies. When an attack would knock Kalad prone, he can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—he moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '407744bb-131b-4e09-8512-6bdb6c3a7d56',
		name: 'Madrick',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '5',
		alignment: 'Good',
		languages: 'Common, Elven',
		skills: 'Arcana +4, Stealth +11, Thievery +9',
		equipment: 'adventurer’s kit; dagger; leather armor',
		category: '',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 44,
		initiative: 6,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1efca690-4d21-4082-90d2-ad384858117e',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d4+1 damage.',
				damage: '1d4+1 damage',
				category: 1
			},
			{
				id: '431bd184-8f6e-4be7-90b8-8808ad4eac48',
				name: 'Dagger',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
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
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '0eff711d-e4ab-4cc3-a22b-26512f4efa01',
				name: 'Sly Flourish',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'melee 1 or ranged 5/10',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Requires dagger; 1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: '18773d40-e1bd-470c-925b-fc0ce9695208',
				name: 'Positioning Strike',
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
					defence: 3
				},
				description: '',
				details: 'Requires dagger; 1d4+3 damage, and slide the target 3 squares.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '8394da82-5152-4750-8b9c-138f5da9f7da',
				name: 'Sneak Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Once per round, Madrick’s attack deals an extra 2d6 damage to a target he has combat advantage against.',
				damage: 'madrick’s attack deals an extra 2d6 damage to a target he has combat advantage against',
				category: 0
			},
			{
				id: 'c389b8a7-a9ea-4841-9868-7d17f22df4a9',
				name: 'Fade Away',
				action: {
					action: 4,
					trigger: 'when madrick takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Madrick is invisible until he attacks or until the end of his next turn.',
				damage: '',
				category: 5
			},
			{
				id: 'af32f61c-928e-4ed3-a892-a2bf421fc3bb',
				name: 'Reactive Stealth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Madrick has cover or concealment when he makes an initiative check, he can make a Stealth check to escape notice.',
				damage: '',
				category: 0
			},
			{
				id: 'df7812fc-e7d3-41d5-81e8-8434f21d5d69',
				name: 'Fleeting Ghost',
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
				details: 'Madrick can move his speed and make a Stealth check. He does not take the normal penalty from movement on this check.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '9530ad54-384b-42f6-9f68-504b5433ee9d',
		name: 'Massive Stormrage Shambler',
		details: '',
		size: 3,
		origin: 2,
		type: 0,
		keywords: 'plant',
		level: 15,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '8 (swamp walk)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
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
			score: 8,
			modifier: -1,
			cost: 0
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
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 302,
		initiative: 6,
		ac: 29,
		fortitude: 29,
		reflex: 22,
		will: 24,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [
			{
				id: '4d443929-a785-4b22-bca3-b87a996e1cb2',
				name: 'Lightning Aura',
				keywords: '',
				details: '(Lightning) aura 2; enemies that enter or start their turns in the aura take 5 lightning damage.'
			}
		],
		powers: [
			{
				id: '603c6307-9544-4567-b935-00f1a66a605e',
				name: 'Tendrils',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+7 damage plus 1d8 lightning damage. While bloodied, the stormrage shambler deals an extra 5 lightning damage.',
				damage: '1d8+7 damage plus 1d8 lightning damage',
				category: 1
			},
			{
				id: 'ddaeac15-def4-4f41-ae62-1e3f7346c015',
				name: 'Double Attack',
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
				attack: null,
				description: '',
				details: 'The stormrage shambler makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '875ee5ac-d7b3-4731-b11a-6e70bd769ae3',
				name: 'Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '3d8+8 lightning damage. Miss: Half damage.',
				damage: '3d8+8 lightning damage',
				category: 1
			},
			{
				id: 'f5549045-0927-4603-9902-92301eaea645',
				name: 'Lightning Affinity',
				action: {
					action: 4,
					trigger: 'when hit by a lightning attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The stormrage shambler regains 10 hit points. The stormrage shambler cannot attack itself to heal in this fashion.',
				damage: 'The stormrage shambler regains 10 hit points',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'lightning',
		tactics: '',

		info: 'Level 15 Elite Controller',
		phenotype: 'Large fey animate (plant)'
	},
	{
		id: 'f412a837-626e-414f-b7fd-b6ef46081dbe',
		name: 'Megan Swiftblade',
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
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Good',
		languages: 'Common, Goblin',
		skills: 'Intimidate +6',
		equipment: 'adventurer’s kit; arrow; light shield; longbow; longsword; scale armor',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 12,
			modifier: 1,
			cost: 2
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 44,
		initiative: 4,
		ac: 19,
		fortitude: 18,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5cb22c9e-1b02-47b1-bcbd-2bd6cdb5e525',
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
				details: '1d8+5 damage, and the target is marked until the end of Megan’s next turn.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '4232a929-8edb-4829-9bd4-88385e601a33',
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
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d10+1 damage.',
				damage: '1d10+1 damage',
				category: 1
			},
			{
				id: '3bf456ad-4ea2-46f2-b356-875635f620d9',
				name: 'Sure Strike',
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
				details: '1d8+1 damage.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: '1126ac4b-8d22-4b56-a503-ec4a355f4c54',
				name: 'Tide of Iron',
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
				details: 'Requires shield; 1d8+5 damage, and the target, if Large or smaller, is pushed 1 square. The target is marked until the end of Megan’s next turn. Megan can shift into the space the pushed target vacated.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'd149dc60-7068-4829-9b41-0bddffb708dd',
				name: 'Dance of Steel',
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
				details: '2d8+5 damage, and the target is marked and slowed until the end of Megan’s next turn.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '46c88a8e-45d3-4e04-b6fc-00e16de8ac9d',
				name: 'No Opening',
				action: {
					action: 5,
					trigger: 'when an enemy attacks and has combat advantage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Megan cancels the combat advantage she was about to grant.',
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
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '66bafcc4-89d9-47d5-ac53-d950b85ddc34',
		name: 'Miner Battle Wight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +14',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 98,
		initiative: 7,
		ac: 25,
		fortitude: 22,
		reflex: 18,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6f967042-1931-44e5-b29a-39e507cab45e',
				name: 'Souldraining Pickaxe',
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
				details: '1d8+5 damage, and the target loses 1 healing surge and is immobilized (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'a032d77f-20e1-4ec4-9b5a-b06b417074ff',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'affects an immobilized target only; 2d8+5 necrotic damage, and the battle wight regains 10 hit points.',
				damage: '2d8+5 necrotic damage',
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
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '213cc40a-d262-4df7-9139-61490346150a',
		name: 'Orc Bolt Thrower',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 1,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Stealth +7',
		equipment: 'battleaxe; leather armor',
		category: 'Orc',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 26,
		initiative: 2,
		ac: 13,
		fortitude: 14,
		reflex: 14,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4cce0b5f-6e69-4ef0-bc3b-ab7f3fdfd6e5',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '546d1438-a5fa-41de-9353-1aa02f476e04',
				name: 'Bellybow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the creature uses a move action to reload it'
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 20/40',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d12+2 damage, and the target is pushed 1 square.',
				damage: '1d12+2 damage',
				category: 1
			},
			{
				id: '853d060d-5d71-4f12-897b-1ac6f48793df',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: 'usable only while bloodied',
				range: 'The orc bolt thrower makes a melee basic attack and regains 6 hit points.',
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

		info: 'Level 1 Artillery',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: 'e5320034-005d-4190-8868-06d0ab83b3e3',
		name: 'Orc Bombardier',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 1,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception -2; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'battleaxe',
		category: 'Orc',
		strength: {
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 24,
		initiative: 3,
		ac: 13,
		fortitude: 13,
		reflex: 15,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '03ccc5e8-00af-4b89-a9ec-305af3ab6228',
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
				details: '1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: '32f3d05a-5baa-4b34-a10a-5dc714e0fb3e',
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
				range: 'The orc bombardier makes a melee basic attack and regains 6 hit points.',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 1
			},
			{
				id: 'e51e41cc-4837-4d64-a4c6-6b61588a4101',
				name: 'Cinderbomb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '1d8+3 fire damage, and ongoing 5 fire damage (save ends). On a crit, the orc bombadier knocks the target prone. Miss: Half damage, and no ongoing damage.',
				damage: '1d8+3 fire damage',
				category: 1
			},
			{
				id: '6e010ea7-b462-4e66-bd44-94cc6203800c',
				name: 'Detonation',
				action: {
					action: 0,
					trigger: 'when reduced to 0 hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: 'no action',
				range: '',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: 'The orc bombadier must have at least one cinderbomb left; 1d8+3 fire damage, and ongoing 5 fire damage (save ends)(crit knock prone). Miss: Half damage, and no ongoing damage.',
				damage: '1d8+3 fire damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Artillery',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '4355bf47-9a5c-411f-9c91-cd7b964056ff',
		name: 'Orc Freak',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 2,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +9',
		equipment: 'battleaxe; hide armor',
		category: 'Orc',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 38,
		initiative: 5,
		ac: 15,
		fortitude: 15,
		reflex: 14,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2fbdce27-b965-4728-92c1-f39bf6f1e014',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: 'be1c1c9f-bfc4-448b-b5b5-36b19fc60da4',
				name: 'Savage Strike',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'Make two attacks; 1d10+3 damage per attack. If both attacks hit the same target, the target also takes ongoing 5 damage (save ends).',
				damage: '1d10+3 damage per attack',
				category: 1
			},
			{
				id: '1aba024f-0ed2-4f2f-9874-f304a1db9766',
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
				attack: null,
				description: '',
				details: 'The orc freak makes a melee basic attack and regains 9 hit points.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Skirmisher',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '9433e743-b560-400a-879a-960c636f0056',
		name: 'Orc Scout',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 3,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +9, Endurance +8, Intimidate +5, Stealth +8',
		equipment: 'arrow; leather armor; longbow; scimitar',
		category: 'Orc',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 46,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 15,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e8c42980-240f-40b8-97ce-52c2eb5aa3e6',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage (crit +1d8).',
				damage: '1d8+3 damage (crit +1d8)',
				category: 1
			},
			{
				id: '0c9063f5-84f3-401b-b3ff-8ff865c3e3d6',
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
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: 'fcfff18b-3625-41c8-8160-cf0884e3d593',
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
				range: 'The orc scout makes a melee basic attack and regains 11 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '14134f68-eb4b-4c2d-a5fe-ee22930011f0',
				name: 'Overeager',
				action: {
					action: 4,
					trigger: 'when the orc scout drops an enemy with a ranged attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The orc scout draws its scimitar and charges the closest enemy.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Skirmisher',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: '6024f6e6-edab-4146-87ab-d6624dffc022',
		name: 'Orc Sergeant',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'orc',
		level: 3,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Endurance +5, Intimidate +5',
		equipment: 'chainmail; glaive',
		category: 'Orc',
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
			score: 9,
			modifier: -1,
			cost: 0
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 46,
		initiative: 2,
		ac: 19,
		fortitude: 17,
		reflex: 13,
		will: 14,
		regeneration: null,
		auras: [
			{
				id: 'efa8fca1-fcd4-4c2e-a5e2-aed3a9aef8cf',
				name: 'Lead by Fear',
				keywords: '',
				details: 'aura 1; orcs inside the aura gain a +1 power bonus to attack rolls.'
			}
		],
		powers: [
			{
				id: '752d6fbe-febc-4bbf-8f6e-d737039a6e7f',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4+4 damage.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: 'bf919893-2c36-4f46-9349-9af946d8af38',
				name: 'Warrior’s Surge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: 'usable only while bloodied',
				range: 'The orc sergeant makes a melee basic attack and regains 11 hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '02a13fb5-b738-4c9e-9d62-8aa60da524b3',
				name: 'Back to the Front!',
				action: {
					action: 4,
					trigger: 'when orc ally within 5 squares is forcibly moved',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Slide triggering ally 1 square.',
				damage: 'Slide triggering ally 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Soldier (L)',
		phenotype: 'Medium natural humanoid (orc)'
	},
	{
		id: 'c30d9105-1798-4e23-9291-21ccab0141a1',
		name: 'Orog Militant',
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
		senses: 'Perception +2; low-light vision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'bastard sword; hide armor; plate armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 48,
		initiative: 3,
		ac: 20,
		fortitude: 17,
		reflex: 13,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '904003e7-5e8f-4aca-850f-af197e7fa081',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage, and the target is marked until the end of the orog militant’s next turn.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'f3acb1b8-4274-4a59-8549-86e6e6434a64',
				name: 'Relentless',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: 'Requires bastard sword; 1d10+4 damage, and the target is pushed 1 square. the target is marked until the orog’s next turn. The orog militant can shift into the vacated square as a free action.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '6a464edc-020f-42a1-a00e-ba0fc6edb74a',
				name: 'Fierce Counterstrike',
				action: {
					action: 4,
					trigger: 'when adjacent ally is first bloodied',
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
				details: 'Requires bastard sword; 2d10+4 damage, an the target is pushed 1 square. the orog militant can shift into the vacated square as a free action.',
				damage: '2d10+4 damage',
				category: 5
			},
			{
				id: '77b00756-9379-4895-80e2-62d147381ff8',
				name: 'Discipline',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Orogs gain a +2 bonus to saving throws against any ongoing effects when adjacent to an ally.',
				damage: 'Orogs gain a +2 bonus to saving throws against any ongoing effects when adjacent to an ally',
				category: 0
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
		id: 'e5a112dc-a65f-43d0-a57d-051765785db2',
		name: 'Orog Scarred Champion',
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
		senses: 'Perception +8; low-light vision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Intimidate +6',
		equipment: 'greataxe; plate armor',
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
		hp: 66,
		initiative: 2,
		ac: 17,
		fortitude: 19,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '21cbc49a-2248-41fd-accd-22a8f4a63eeb',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage, and the target is marked until the end of the orog scarred champion’s next turn.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'a6265749-18ef-4c61-b3fd-33d3a6ecc06f',
				name: 'Winnowing Slash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'close burst 1',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: 'Requires greatsword; 2d10+5 damage, and the target is pushed 1 square.',
				damage: '2d10+5 damage',
				category: 1
			},
			{
				id: 'ea92fb92-0b49-402d-b0bd-1295be2421b6',
				name: 'Champion’s Scorn',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'the target becomes the object of the orog’s scorn. The orog scarred champion’s melee attacks deal an extra 1d10 damage to the target, and if the scarred champion reduces the target to 0 hit points, it regains 16 hit points.',
				attack: null,
				description: '',
				details: 'one creature',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6f3f98f6-630e-4861-886c-90500866abb4',
		name: 'Quickling Renegade',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 6,
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
		hp: 104,
		initiative: 14,
		ac: 25,
		fortitude: 21,
		reflex: 25,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ae78559a-ab77-46c9-b5d4-892dd71249b2',
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
				details: '1d6+7 damage.',
				damage: '1d6+7 damage',
				category: 1
			},
			{
				id: '88ed357c-b42c-4ceb-8d20-f5559f0878be',
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
				range: '',
				attack: {
					bonus: 13,
					defence: 0
				},
				description: '',
				details: 'The quickling renegade moves its speed. At any two points during its move, the quickling makes a basic attack at a -2 penalty. The quickling renegade cannot use this power while immobilized or slowed.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '0fd438ca-b66f-466b-b4ef-1270fabf42be',
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
				details: 'The quickling renegade shifts 10 squares.',
				damage: 'The quickling renegade shifts 10 squares',
				category: 1
			},
			{
				id: '56efc88c-e54c-4e6f-b39d-7570b9874e64',
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
				details: 'An immobilized quickling renegade is no longer immobilized.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Skirmisher',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '64c6dafa-5030-423b-8265-0b57bc53023d',
		name: 'Ragnum Dourstone',
		details: '',
		size: 2,
		origin: 4,
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
		alignment: 'Lawful good',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +6, Endurance +5, Religion +6',
		equipment: 'adventurer’s kit; chainmail; crossbow; crossbow bolts (20); holy symbol; warhammer',
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
		initiative: 1,
		ac: 17,
		fortitude: 16,
		reflex: 13,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '733e4afd-b881-4292-ab12-a632a480ab3d',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '6b05583f-1f16-4225-b16a-5a477e630462',
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
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '1d8 damage.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: '573beaf0-5322-4975-b0e6-8b01d2cd61dd',
				name: 'Priest’s Shield',
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
				details: '1d10+4 damage, and Ragnum or one adjacent ally gains a +1 power bonus to AC until the end of Ragnum’s next turn.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'f919a1da-aeda-4fe2-9494-76b6c8458ce0',
				name: 'Wrathful Thunder',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '1d10+4 thunder damage, and the target is dazed until the end of Ragnum’s next turn.',
				damage: '1d10+4 thunder damage',
				category: 1
			},
			{
				id: 'a0f99a50-f6c0-415a-811f-7699b1a40c04',
				name: 'Healing Word',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '[1/round]',
				range: '',
				attack: null,
				description: '',
				details: 'One ally; the target spends a healing surge and regains an additional 1d6+3 hit points.',
				damage: 'the target spends a healing surge and regains an additional 1d6+3 hit points',
				category: 3
			},
			{
				id: 'ab2299ac-84d7-4c9f-bfb6-361e5d5569ac',
				name: 'Cure Light Wounds',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'Melee touch',
				attack: null,
				description: '',
				details: 'the target regains a number of hit points equal to its surge value +3.',
				damage: 'the target regains a number of hit points equal to its surge value +3',
				category: 1
			},
			{
				id: '9a157eae-629c-48f9-b141-86684c70825b',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a dwarf to move—through a pull, a push, or a slide—the dwarf moves 1 square less than the effect specifies. When an attack would knock the dwarf prone, the dwarf can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—the dwarf moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'cf9a9e17-9106-49b0-b08a-82218b633c25',
		name: 'Rufus Crumley',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Infernal, Supernal',
		skills: 'Arcana +16, Religion +13',
		equipment: 'dagger',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 188,
		initiative: 7,
		ac: 25,
		fortitude: 20,
		reflex: 24,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '46e3d1a3-e578-4224-8655-5cb83cf72b42',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '3adc9c94-9ff2-4c74-9e7d-9098df0623af',
				name: 'Ray of Rot',
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
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '1d6+6 necrotic damage, and the target is slowed until the end of Rufus’s next turn.',
				damage: '1d6+6 necrotic damage',
				category: 1
			},
			{
				id: '2b46c5f7-1d67-410c-a46f-e91cff694e27',
				name: 'A Grave Wind',
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
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d8+6 necrotic damage. A swirling cloud of souls appear in the area and remains until the end of Rufus’s next turn. It grants concealment, and any creature that starts its turn in the area takes 6 necrotic damage.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: '8ec4da33-237a-4c3c-a66b-9003e2c070e2',
				name: 'Invisibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 1,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Rufus can turn invisible until the end of his next turn.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'fb8fc5b9-41e1-434f-aed3-368f0d73e04a',
		name: 'Saffrenia Movrymm',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '6',
		alignment: 'Good',
		languages: 'Common, Elven',
		skills: 'Arcana +14, Bluff +11, Diplomacy +11',
		equipment: 'implement, staff',
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
		hp: 122,
		initiative: 8,
		ac: 27,
		fortitude: 23,
		reflex: 25,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '266af322-ea12-45c0-9881-8de8e9579d47',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage, and the target is dazed (save ends).',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '0bcb0105-268f-498f-b795-c7412d0584ad',
				name: 'Gust of the Frozen North',
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
				details: '2d8+6 cold damage, and ongoing 5 cold damage (save ends).',
				damage: '2d8+6 cold damage',
				category: 1
			},
			{
				id: '580d7f7d-ad59-4c9b-9ec4-4590d3846c1e',
				name: 'Autumn’s Lure',
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
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'the target slides 5 squares.',
				damage: 'the target slides 5 squares',
				category: 1
			},
			{
				id: 'c9eecd7d-6c26-4302-bde1-be2c061e88bb',
				name: 'Healing Touch',
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
				details: 'With a touch, Saffrenia allows the target to spend a healing surge and regain an additional 2d6 hit points.',
				damage: 'Saffrenia allows the target to spend a healing surge and regain an additional 2d6 hit points',
				category: 3
			},
			{
				id: '5f6d23eb-267c-4aff-84b1-0e45d5d18741',
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
				details: 'Saffrenia can teleport 5 squares.',
				damage: 'Saffrenia can teleport 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Controller (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '29042f69-272b-4ba5-86c5-e4dee8d0062a',
		name: 'Sylen Leafrunner',
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
		movement: '7',
		alignment: 'Good',
		languages: 'Common, Elven',
		skills: 'Nature +10, Stealth +10',
		equipment: 'adventurer’s kit; arrows (30); leather armor; longbow; longsword',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 44,
		initiative: 7,
		ac: 19,
		fortitude: 15,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [
			{
				id: 'd81fb77d-b774-42fb-a47b-4aba38a870e1',
				name: 'Group Awareness',
				keywords: '',
				details: 'aura 5; all allies inside the aura gain a +1 racial bonus to Perception checks.'
			}
		],
		powers: [
			{
				id: 'e315323a-5a8d-4a94-b953-75f240e5ff99',
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
				id: '3e331208-c8e2-4eb8-b1f1-ddd78e221ecb',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '2a096755-3db5-418e-ab30-ae0e2db58d29',
				name: 'Twin Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'ranged 20/40',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Requires longbow; two attacks; 1d10 damage per attack.',
				damage: '1d10 damage per attack',
				category: 1
			},
			{
				id: '2ff511a6-1050-437d-972a-a044f1ce9e0a',
				name: 'Cut and Run',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Requires longbow; 1d10 + 4 damage per attack. Sylen can shift up to 3 squares after the first or second attack.; Requires longbow; +9 vs AC; 3d6+3 damage.',
				damage: '1d10 + 4 damage per attack',
				category: 1
			},
			{
				id: 'e9167f90-d8e2-40ed-8e10-3fcc2e4b5173',
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
				details: 'Sylen can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '8ea9d0d2-5f2e-4926-9885-db2c6d82da87',
				name: 'Hunter’s Quarry',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'at-will [1/round]',
				range: '',
				attack: null,
				description: '',
				details: 'Closest enemy becomes Sylen’s quarry. Once per round, Sylen can deal an extra 1d6 damage on an attack against his quarry. Sylen can have just one quarry at a time.',
				damage: 'sylen can deal an extra 1d6 damage on an attack against his quarry',
				category: 3
			},
			{
				id: '4d28433d-a1c9-46be-818f-ebbb92f057aa',
				name: 'Yield Ground',
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
				details: 'Sylen can shift 2 squares and gains a +2 power bonus to all defenses until the end of his next turn.',
				damage: 'Sylen can shift 2 squares and gains a +2 power bonus to all defenses until the end of his next turn',
				category: 5
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
		id: '9acda4ac-c324-42ae-b402-ebf563eb4b7f',
		name: 'Trilleste the Howling Hag',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Bluff +11, Insight +10, Intimidate +11, Nature +10',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 83,
		initiative: 7,
		ac: 21,
		fortitude: 20,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: 'eca7400f-9da3-4574-bffe-8cdf738f696b',
				name: 'Baleful Whispers',
				keywords: '',
				details: '(Psychic) aura 5; an enemy that ends its turn in the aura takes 1d6 psychic damage.'
			}
		],
		powers: [
			{
				id: 'e42c6b53-6a90-44eb-b4b8-6753a0ed3600',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'acd644f1-09d7-46f5-86ee-a53b341e0772',
				name: 'Howl',
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
					bonus: 10,
					defence: 1
				},
				description: '',
				details: '1d6+4 thunder damage, and the target is pushed 3 squares.',
				damage: '1d6+4 thunder damage',
				category: 1
			},
			{
				id: 'd2f78650-5120-425a-abca-cccc1e653f9a',
				name: 'Shriek of Pain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '3d6+4 thunder damage, or 3d6+9 thunder damage if Trilleste is bloodied. Miss: Half damage.',
				damage: '3d6+4 thunder damage',
				category: 1
			},
			{
				id: '026904d6-ce13-4e25-b56d-b081eaa94db5',
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
				details: 'Trilleste can alter her physical form to appear as an old crone of any Medium humanoid race.',
				damage: '',
				category: 3
			},
			{
				id: '9d81c77e-ee4c-4e45-9d5b-a8c0f7b64f2b',
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
				details: 'Trilleste can teleport 10 squares.',
				damage: 'Trilleste can teleport 10 squares',
				category: 2
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

		info: 'Level 7 Controller',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'd4e15edf-d84b-42c9-a877-a78ad03cef96',
		name: 'Twisted Destrachan',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'blind',
		level: 10,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; blindsight 10',
		movement: '6, climb 3',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: 'Bluff +10, Stealth +14',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 86,
		initiative: 9,
		ac: 23,
		fortitude: 25,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '75c4f13b-eb9f-4576-b92a-9af197b34af1',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'fc72d96e-3939-4631-b422-0b9144dd606a',
				name: 'Sound Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'Range 10; 2d6+5 thunder damage.',
				damage: '2d6+5 thunder damage',
				category: 1
			},
			{
				id: '23a98fad-fe55-4b45-82c8-a3dcda7d21d2',
				name: 'Bellowing Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d6+5 thunder damage, and the target is dazed (save ends).',
				damage: '2d6+5 thunder damage',
				category: 1
			},
			{
				id: '673b01b0-7543-4adf-92c4-9abb7a1e526a',
				name: 'Curse Carrier',
				action: null,
				keywords: 'Charm, Polymorph',
				condition: 'when reduced to 0 hit points',
				range: 'Close blast 1',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: '70746f4c-b52a-47d6-995e-e799662d342b',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
				damage: '',
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
		immune: 'gaze',
		tactics: '',

		info: 'Level 10 Artillery',
		phenotype: 'Large aberrant beast (blind)'
	},
	{
		id: '7299622a-0be9-4b9d-8728-95b1c4e89495',
		name: 'Twisted Foulmaw',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 0,
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
			score: 16,
			modifier: 3,
			cost: 9
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
		hp: 172,
		initiative: 7,
		ac: 25,
		fortitude: 22,
		reflex: 23,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '87793084-551c-4693-8ef6-89cc0db5cf71',
				name: 'Bone Staff',
				action: {
					action: 1,
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '82c864fd-4087-402f-b07c-8a098e0a2178',
				name: 'Disrupting Orb',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '1d10+5 damage, and the target is dazed (save ends).',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '2be3a60c-21dc-43af-9122-5517da0823e0',
				name: 'Curse Carrier',
				action: null,
				keywords: 'Charm, Polymorph',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: '87735756-eb7a-41d6-9288-08faa14c6540',
				name: 'Corrupt Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Charm, Polymorph',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d8+6 damage, and the target is cursed with twisted domination.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'e9537700-2e8d-4c4d-bddd-f3fded98f250',
				name: 'Twisted Connection',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+4 psychic damage, and one effect currently affecting the twisted foulmaw immediately ends on the foulmaw and is transferred to the target. If the effect has a fixed duration, that duration begins again on the new character.',
				damage: '2d6+4 psychic damage',
				category: 1
			},
			{
				id: '9f98e283-c597-493d-a32a-4d89091337ee',
				name: 'Distort Space',
				action: {
					action: 5,
					trigger: 'when the twisted foulmaw would be hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The twisted foulmaw teleports 2 squares and makes a disrupting orb attack against the attacker.',
				damage: 'The twisted foulmaw teleports 2 squares and makes a disrupting orb attack against the attacker',
				category: 5
			},
			{
				id: '63e61732-d866-4bcd-b7b4-9961d6312049',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Elite Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '547e8653-3035-446f-a542-e140228d3224',
		name: 'Twisted Hulk',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7',
		alignment: 'Evil',
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
		hp: 150,
		initiative: 8,
		ac: 24,
		fortitude: 27,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fb0f991f-ee79-4d59-9c13-53a1a511cbe4',
				name: 'Clobber',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d8+8 damage, and the target is pushed 1 square.',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: '61087ffa-0641-4769-ba1f-b0176222867a',
				name: 'Bestow Curse',
				action: {
					action: 7,
					trigger: 'when the twisted hulk’s attack bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'Bloodied targets only; the target is cursed with twisted domination.',
				damage: '',
				category: 5
			},
			{
				id: '121e0b05-b9e9-4579-b6f0-f67a95305439',
				name: 'Curse Carrier',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: '02178dcd-49ef-40f9-a011-2783e67458ff',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'd081ca9a-081a-4718-80aa-54a7a5a896d0',
		name: 'Twisted One Minion',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12; darkvision',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 10,
		ac: 26,
		fortitude: 24,
		reflex: 26,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '368d09a0-f52e-466a-99d8-86b57a3bbc71',
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
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '51b12dda-0bda-40d5-94ab-b78ec402f8ff',
				name: 'Curse Carrier',
				action: null,
				keywords: 'Charm, Polymorph',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: 'bc458e7f-b11c-4770-b492-bc417f22d0f9',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3309385a-677f-46d9-92b4-648c8c6bcf69',
		name: 'Twisted One Pickfighter',
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
		senses: 'Perception +12; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Dungeoneering +12, Stealth +13',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 118,
		initiative: 10,
		ac: 26,
		fortitude: 24,
		reflex: 26,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7e4d505a-872d-4d9e-8da4-a7c36b32914c',
				name: 'Pickaxe',
				action: {
					action: 1,
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
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '17db49b9-cf44-4122-aed2-fec223c40f27',
				name: 'Curse Carrier',
				action: null,
				keywords: 'Charm, Polymorph',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: 'e1388a1d-7825-4ca4-bfce-9fefa7b85238',
				name: 'Careful Weave',
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
				details: 'An adjacent enemy slides into the twisted miner’s space, and the twisted miner shifts 2 squares.',
				damage: 'and the twisted miner shifts 2 squares',
				category: 2
			},
			{
				id: '7af85834-36d2-43bf-beb8-e881be8074f2',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
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
		id: '9af98ea4-e280-43c9-bcd5-08d710880995',
		name: 'Twisted Shardmaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +11, Stealth +14',
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
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 9,
		ac: 25,
		fortitude: 23,
		reflex: 24,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0680f11b-2b1e-44ae-8115-75d4f1e754a6',
				name: 'Bone Shard',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '10 damage.',
				damage: '10 damage',
				category: 1
			},
			{
				id: 'd102dad9-5862-4b2b-bbe0-2f6c0b52ac0c',
				name: 'Curse Carrier',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: 'the target is cursed with twisted domination.',
				damage: '',
				category: 0
			},
			{
				id: 'f831ebd0-2095-40d1-9864-e3290d6cb052',
				name: 'Sense Master',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A twisted one can sense the distance and direction of the creature or remains whose tomb it is driven to guard.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ddf804cb-c2c6-4a70-a5ed-dc942a741620',
		name: 'Avonathemon',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +13',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +10, Insight +12, Intimidate +10, Religion +9',
		equipment: 'chainmail; dagger; holy symbol',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 110,
		initiative: 6,
		ac: 18,
		fortitude: 19,
		reflex: 17,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'd856dd83-1819-4894-b41d-99728b26b6ac',
				name: 'Ring of Hands',
				keywords: '',
				details: 'aura 5; creatures in the aura cannot regain hit points. Undead in the aura gain a +1 bonus to attack rolls, damage rolls, and defenses.'
			}
		],
		powers: [
			{
				id: '4986848e-c25b-49ab-b44d-fe552d11767f',
				name: 'Dagger',
				action: {
					action: 1,
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
				details: '1d4+4 plus 1d6 necrotic damage.',
				damage: '1d4+4 plus 1d6 necrotic damage',
				category: 1
			},
			{
				id: 'b076ee2b-ad85-493d-83dc-1676bcfe7129',
				name: 'Death Bolt',
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
				details: '1d6+6 necrotic damage and the target is immobilized (save ends).',
				damage: '1d6+6 necrotic damage and the target is immobilized (save ends)',
				category: 1
			},
			{
				id: 'fda8cd7a-94a6-4db9-b057-82760247f659',
				name: 'Hurl into Darkness',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: '3d6+6 necrotic damage and the character teleports into the column of darkness that is streaming down on the altar. The character is stunned until the end of Avonathemon’s next turn and weakened (save ends). Afterward, the character falls to the floor next to the altar, taking 1d10 falling damage.',
				damage: '3d6+6 necrotic damage and the character teleports into the column of darkness that is streaming down on the altar',
				category: 3
			},
			{
				id: '4cdabefe-e057-4631-a413-0c2e88df4882',
				name: 'Touch of Corruption',
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
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'the target is dominated (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '966daecf-513d-4fc2-a5d8-c314f6920e37',
		name: 'Cult Berserker',
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
		alignment: 'Any',
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
		initiative: 3,
		ac: 15,
		fortitude: 15,
		reflex: 14,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '80929fbd-c2ea-4adf-b360-f27765dbaf60',
				name: 'Greataxe',
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
				details: '1d12+4 damage (crit 1d12+16).',
				damage: '1d12+4 damage (crit 1d12+16)',
				category: 1
			},
			{
				id: '80e50ae0-1d50-491c-b8aa-c7b2462db656',
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
				range: 'The cult berserker makes a melee basic attack with a +4 bonus to the attack roll and deals an extra 1d6 damage on a hit.',
				attack: {
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '3d8+4 damage.',
				damage: '3d8+4 damage',
				category: 5
			},
			{
				id: '2ea62683-1516-48ff-a29e-0f9d5ae11bcf',
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

		info: 'Level 4 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '09016603-275a-414f-adb6-dbeaa01eae18',
		name: 'Dark Haunter',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +13, Thievery +13',
		equipment: 'dagger; scimitar',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 57,
		initiative: 12,
		ac: 20,
		fortitude: 17,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f6607ab8-2873-4e94-a206-f5d5f3a3c8ee',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage (crit 1d8 + 11).',
				damage: '1d8+3 damage (crit 1d8 + 11)',
				category: 1
			},
			{
				id: '3dbdd93a-701c-4bf8-b67d-2ac31287855c',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '1ec2af02-b597-4186-a495-330a9db9dada',
				name: 'Dark Fog',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 4 within 10',
				attack: null,
				description: '',
				details: 'creates a zone of darkness that blocks line of sight (creatures with darkvision ignore this effect).',
				damage: '',
				category: 1
			},
			{
				id: '4bbf8518-b8ff-41c2-b131-8bb4017b8bab',
				name: 'Killing Dark',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'targets enemies; each target is blinded (save ends). When slain, a dark haunter explodes in a spout of darkness.',
				damage: '',
				category: 0
			},
			{
				id: 'a0cc3c89-b7f6-41e7-b20f-03a280b473ad',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The dark haunter deals an extra 2d6 damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '920a56fe-1a0a-4f18-9c1b-c0517c83ed4b',
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
				details: 'The dark haunter moves up to 4 squares, gains a +4 bonus to AC against opportunity attacks, and gains combat advantage against any target that it ends its move adjacent to.',
				damage: 'The dark haunter moves up to 4 squares',
				category: 2
			},
			{
				id: '02799ab6-764f-4d79-b841-8dbd1c7f0704',
				name: 'Invisibility',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The dark haunter becomes invisible until the end of its next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Lurker',
		phenotype: 'Small shadow humanoid'
	},
	{
		id: 'bc385b9b-2fcd-4431-be74-e75a46d370ee',
		name: 'Death Boar',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'mount',
		level: 6,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +2',
		movement: '8',
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
			score: 2,
			modifier: -4,
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
		hp: 170,
		initiative: 3,
		ac: 19,
		fortitude: 23,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '765b4f90-3b3e-4a65-9e5d-90a1867fdcf0',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage, or 1d10 + 9 damage against a prone target.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '74a2773d-04c5-4532-a6ad-79f9830b5151',
				name: 'Frenzied Gore',
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
				details: 'The death boar makes two gore attacks. If it hits with both attacks against the same target, the target is knocked prone; 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '34aefc8f-1150-4c72-b472-d18dc5a9add4',
				name: 'Death Strike',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The death boar makes a gore attack.',
				damage: '',
				category: 0
			},
			{
				id: 'e23948d7-74eb-4303-9d90-6b487523fd12',
				name: 'Furious Charge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a death boar charges, its gore attacks deal an extra 5 damage, pushes the targets 2 squares, and knocks the targets prone on a hit.',
				damage: 'its gore attacks deal an extra 5 damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Elite Brute',
		phenotype: 'Huge natural beast (mount)'
	},
	{
		id: '411ee07b-4246-40e8-8ae0-17a7182ab9f7',
		name: 'Dire Piranha Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'aquatic, swarm',
		level: 17,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: 'swim 8 can enter or move through an enemy’s space (this movement does not provoke opportunity attacks)',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 164,
		initiative: 18,
		ac: 31,
		fortitude: 29,
		reflex: 32,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: 'c20519ca-6a64-414b-ab27-f168b3e169cb',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the dire piranha swarm makes a basic attack as a free action against each enemy that begins its turn in the aura.'
			}
		],
		powers: [
			{
				id: 'e737b063-c669-4423-be90-2ae164872c1c',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+7 damage, or 3d8+7 damage against a bloodied target.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'dced69c1-53dd-47bf-9ab9-81f8e14e2456',
				name: 'Disperse',
				action: {
					action: 5,
					trigger: 'when hit by a melee or ranged attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The swarm takes half damage from the attack.',
				damage: 'the swarm takes half damage from the attack',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'forced movement from melee and ranged',
		tactics: '',

		info: 'Level 17 Skirmisher',
		phenotype: 'Medium natural beast (aquatic, swarm)'
	},
	{
		id: '9446ee7f-3d8e-42e9-a0dc-168fc9711951',
		name: 'Dwarf Buccaneer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Athletics +18, Dungeoneering +11, Endurance +18, Intimidate +12',
		equipment: 'leather armor',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 139,
		initiative: 15,
		ac: 28,
		fortitude: 27,
		reflex: 27,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cc3dd67d-736f-48e3-be64-6cf70d6b9b57',
				name: 'Cutlass',
				action: {
					action: 1,
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
				details: '2d8+6 damage (crit 22 + 2d8).',
				damage: '2d8+6 damage (crit 22 + 2d8)',
				category: 1
			},
			{
				id: '5cfd141b-5915-4243-ba1f-cea5b73b3903',
				name: 'Stalwart Shift',
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
				details: 'The dwarf buccaneer shifts 1 square and one dwarf ally within 5 can also shift one square.',
				damage: 'The dwarf buccaneer shifts 1 square and one dwarf ally within 5 can also shift one square',
				category: 2
			},
			{
				id: 'be676373-4cef-4d62-87ee-40d8e7a49ce9',
				name: 'Nerves of Steel',
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
				details: 'The dwarf buccaneer makes a saving throw against one effect that a save can end.',
				damage: '',
				category: 3
			},
			{
				id: '7bfb6e52-d0c4-4f01-8189-46847816e5bd',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a dwarf to move, the dwarf moves 1 square less than the effect specifies. When an attack would knock the dwarf prone, the dwarf can roll a saving throw to avoid falling prone.',
				damage: 'the dwarf moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '10f0af77-d91b-4264-a556-e97807f5fe77',
		name: 'Dwarf Dark Arcanist',
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
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: 'Arcana +19, Dungeoneering +11, Endurance +11',
		equipment: 'implement, wand',
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
			score: 9,
			modifier: -1,
			cost: 0
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 104,
		initiative: 6,
		ac: 26,
		fortitude: 23,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '09c5598a-de47-473c-bcb3-dc137fcede09',
				name: 'Unarmed Attack',
				action: {
					action: 1,
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
				details: '1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: 'f8832e8d-9a84-441f-95be-a41fae8fd8a5',
				name: 'Necrotic Ray',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d10+4 necrotic damage, and ongoing 5 necrotic (save ends).',
				damage: '1d10+4 necrotic damage',
				category: 1
			},
			{
				id: '0f110f43-2404-4aae-a2d8-587bb20c09ec',
				name: 'Dark Flames',
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
					bonus: 18,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d10+6 fire and necrotic damage.',
				damage: '1d10+6 fire and necrotic damage',
				category: 1
			},
			{
				id: 'e6653887-7d1c-4320-b427-cee789ea8665',
				name: 'Arcane Leech',
				action: null,
				keywords: '',
				condition: '',
				range: 'When the dark arcanist is hit by an Arcane attack, his next ranged or area attack deals an extra 1d10 damage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '7c722e20-44c7-46d2-a187-70bb4f78072d',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces a dwarf to move, the dwarf moves 1 square less than the effect specifies. When an attack would knock the dwarf prone, the dwarf can roll a saving throw to avoid falling prone.',
				damage: 'the dwarf moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '97ca0b8e-2161-4d09-b973-d9fa804ca338',
		name: 'Gondra',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Dwarven, Elven',
		skills: 'Acrobatics +21, Athletics +17, Bluff +19, Diplomacy +19, History +18',
		equipment: 'rapier',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 320,
		initiative: 18,
		ac: 33,
		fortitude: 29,
		reflex: 33,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd9afb648-f800-459f-884f-d1d26c1aecd6',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage, and ongoing 5 damage (save ends).',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: 'd248ae92-00b5-47e7-abb6-828779b84034',
				name: 'Double Stab',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Gondra makes two rapier attacks and can shift 1 before or after each one.; 2d8+7 damage.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'caecb1a4-51b3-4319-b3f2-2b1bf6598ba0',
				name: 'Chill Blade',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '3d8+9 cold damage, and the target is slowed. Effect: Gondra shifts 3 squares.',
				damage: '3d8+9 cold damage',
				category: 1
			},
			{
				id: 'fc6460f6-79e6-4d9e-b5f5-170f5e049d50',
				name: 'Acrobatic Stance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Stance',
				condition: '',
				range: 'Gondra takes half damage from ranged and area attacks in this stance.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
			},
			{
				id: '9309d83f-fb57-4478-a17d-2ef8d8dd64a5',
				name: 'Riposte Stance',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Stance',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While in this stance, Gondra deals 1d8 + 3 damage to any adjacent creature that attacks him.',
				damage: 'gondra deals 1d8 + 3 damage to any adjacent creature that attacks him',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Elite Skirmisher (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6e883e94-9f88-42a7-9d43-ce76e344c16a',
		name: 'Human Archer Minion',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'arrow; leather armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 13,
		ac: 25,
		fortitude: 24,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4214568e-4005-4b88-9b6a-49aa6f4dce15',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			},
			{
				id: '6527d67b-4739-4e46-a94b-1c3c190a902c',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '8 damage.',
				damage: '8 damage',
				category: 1
			},
			{
				id: 'f987ba1d-ea33-4063-9870-1251d814279f',
				name: 'Coordinated Shot',
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
				details: 'The human archer makes a basic attack. The next human archer to attack the same target gains a +2 power bonus to the attack roll.',
				damage: 'The next human archer to attack the same target gains a +2 power bonus to the attack roll',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '5d979a5e-4e00-4b59-9979-227104fb6ef7',
		name: 'Human Blademaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 13,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +18, Athletics +15, Stealth +18',
		equipment: 'dagger; leather armor; short sword',
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
			score: 24,
			modifier: 7,
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 256,
		initiative: 15,
		ac: 29,
		fortitude: 25,
		reflex: 29,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '45d45bad-a4c8-4b40-bbd5-22174b5041a9',
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
				details: '2d6+7 damage.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: 'a0fe6d64-dbb6-46bc-99c0-a0516ef26ae7',
				name: 'Dual Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The blademaster makes two melee basic attacks, and can shift 1 before, between, or after the attacks.',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '277873a0-844f-4397-8fe2-d8c9add3fc56',
				name: 'Secret Poison',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d6+7 damage, and the target takes ongoing 10 poison damage (save ends).',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '5340926f-e44a-4b96-8f2f-81b13012f698',
				name: 'Smoke Bomb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Area burst 1 within 5',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'blinded until the end of the blademaster’s next turn. Squares in the area are lightly obscured until the end of the encounter.',
				damage: '',
				category: 1
			},
			{
				id: 'c36b157f-910b-4dbf-be9d-7635d79c23f2',
				name: 'Secret Stride',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The blademaster takes no penalties to Stealth for moving up to its speed.',
				damage: '',
				category: 0
			},
			{
				id: '29e2d004-5569-4ea2-8bcb-c965151cc95b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The blademaster’s melee attacks deal an extra 2d6 damage against any target it has combat advantage against.',
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

		info: 'Level 13 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: '2f634f09-fc1f-4ad8-b761-5ac25a9075da',
		name: 'Human Sniper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +19',
		equipment: 'crossbow',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 111,
		initiative: 14,
		ac: 27,
		fortitude: 24,
		reflex: 29,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1017d1b6-7725-4671-8763-51fa0278fd13',
				name: 'Bayonet',
				action: {
					action: 1,
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
				details: '2d4+5 damage.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: 'c9410ac3-2277-4e08-a845-666301a5a10d',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'c29e8f02-9724-4227-a41c-0b5c3ae85b58',
				name: 'Bleeding Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 15/30',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target takes ongoing 5 damage (save ends). Aftereffect: Weakened until the end of the sniper’s next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '3323e44d-2988-41f4-b281-12ca8f8e2c45',
				name: 'Acrid Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Weapon',
				condition: '',
				range: 'Area burst 1 within 15',
				attack: null,
				description: '',
				details: '2d10+3 acid damage.',
				damage: '2d10+3 acid damage',
				category: 1
			},
			{
				id: 'bfe72fc9-4b26-4907-8f4b-b82780bf39ce',
				name: 'Sharp Eye',
				action: null,
				keywords: '',
				condition: '',
				range: 'When making a ranged attack, the human sniper ignores concealment (but not total concealment).',
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

		info: 'Level 15 Artillery',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'a5dde5c4-bbfc-4ca8-96ea-84c20e519521',
		name: 'Human Soldier Minion',
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
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: '',
		equipment: 'glaive; leather armor',
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
		initiative: 15,
		ac: 30,
		fortitude: 26,
		reflex: 28,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c603d74e-cfb6-4766-93a6-e6898ea84228',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '7 damage.',
				damage: '7 damage',
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
		id: 'ee93ec78-527d-4d88-b246-2f712c490f69',
		name: 'Kuo-toa Piranha Shamans',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic',
		level: 16,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6, swim 6',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: 'Arcana +15, Nature +17',
		equipment: 'light shield',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 117,
		initiative: 13,
		ac: 28,
		fortitude: 25,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8cc692a9-6a35-42af-a257-3026bff07e86',
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
				details: '1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'abe3a870-c8b9-42a9-952f-3c2e2fdb6c59',
				name: 'Psychic Fangs',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: 'e35914b2-eb39-44cc-a86c-29aa3951e5ce',
				name: 'Bane Lightning',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Lightning, Poison',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '1d10+6 lightning damage, and the target takes ongoing 10 poison (save ends).',
				damage: '1d10+6 lightning damage',
				category: 1
			},
			{
				id: '64ca117b-1bfb-4ded-9539-b4be96e770c3',
				name: 'Psychic Wave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '3d10+7 psychic damage, and the target is slowed (save ends). Effect: The kuo-toa shifts its speed.',
				damage: '3d10+7 psychic damage',
				category: 1
			},
			{
				id: 'c81ac604-48b2-4817-96e0-49bcbfc99e6f',
				name: 'Piranha Command',
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
				details: 'A piranha swarm within sight shifts 1. If the swarm is in a creature’s space, that creature moves with the swarm.',
				damage: 'A piranha swarm within sight shifts 1',
				category: 3
			},
			{
				id: '97dfd246-509a-4ca0-9663-37b2912e627e',
				name: 'Slick Maneuver',
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
				details: 'A kuo-toa adjacent to an enemy shifts to any other square adjacent to that enemy.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Artillery',
		phenotype: 'Medium natural humanoid (aquatic)'
	},
	{
		id: 'f0e959ad-7bb2-4732-a3f9-3d7cba2b2410',
		name: 'Mallum',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Acrobatics +23, Athletics +21, Bluff +18, Stealth +21, Thievery +23',
		equipment: 'kukri; leather armor',
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
			score: 26,
			modifier: 8,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 240,
		initiative: 20,
		ac: 33,
		fortitude: 27,
		reflex: 33,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '32f74449-a18a-45b8-a58f-c9475102199e',
				name: 'Kukri',
				action: {
					action: 1,
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
				details: '2d6+6 damage (reroll all 1s on damage), and slide the target 1 square.',
				damage: '2d6+6 damage (reroll all 1s on damage)',
				category: 1
			},
			{
				id: 'ad1cddf0-2575-4501-b5a1-492802b0d95f',
				name: 'Thrown Kukri',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage (reroll all 1s on damage).',
				damage: '2d6+6 damage (reroll all 1s on damage)',
				category: 1
			},
			{
				id: '5eccfb77-ca8e-44c3-8e29-d6e8742e94da',
				name: 'Blood in the Water',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when a creature saves against this power'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d6+6 damage, and ongoing 10 damage (save ends). Miss: Ongoing 5 damage (save ends). Effect: Mallum gains a +2 bonus to attack and defense against an enemy with ongoing damage from this power.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: 'a395c2f1-e352-413f-bfbe-86a633232baf',
				name: 'Blinding Counterattack',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Reach 1 or ranged 5/10',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'the creature that hit her; the target is blinded (save ends).',
				damage: '',
				category: 5
			},
			{
				id: '0cbf1caa-879f-4669-9c4b-37519bd6a9c2',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Mallum deals an extra 2d8 damage on melee attacks against any targets she has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'a6c12ed4-0e85-4a69-a66f-aeb026beb0ed',
				name: 'Bloodied Disappearance',
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
				details: 'Mallum becomes invisible until the end of her next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Elite Lurker',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '66502539-11c8-4c6a-a32a-06d2200ec335',
		name: 'Minotaur Mercenaries',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Intimidate +13, Nature +13',
		equipment: 'battleaxe; heavy shield; scale armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 150,
		initiative: 12,
		ac: 31,
		fortitude: 29,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '615b4a71-5337-4e5c-8c31-f238c0017b78',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d12+3 damage, and the target is marked until the end of the minotaur mercenary’s next turn.',
				damage: '2d12+3 damage',
				category: 1
			},
			{
				id: '8559248d-7f34-4327-9822-622760bbe629',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'The minotaur mercenary makes a charge attack; 2d6+7 damage, and the target is knocked prone.',
				damage: '2d6+7 damage',
				category: 1
			},
			{
				id: '7161f94c-afcd-4563-909d-a8fe34c8093d',
				name: 'Ferocity',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'The minotaur mercenary makes a melee basic attack.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '6be0c345-e046-486a-a7da-357e69813d1e',
				name: 'Shield Spikes',
				action: {
					action: 7,
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
				details: 'The attacker takes 2d6 damage.',
				damage: 'the attacker takes 2d6 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '54bca3d3-a5be-46b3-8a28-202d575a13ce',
		name: 'Ogre Umbral Savage',
		details: '',
		size: 3,
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
		movement: '8',
		alignment: 'Chaotic evil',
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
		hp: 81,
		initiative: 2,
		ac: 16,
		fortitude: 18,
		reflex: 13,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ee425dd-fd73-4662-9acb-1bcdd37b84be',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+3 damage.',
				damage: '2d10+3 damage',
				category: 1
			},
			{
				id: 'b6c8257d-b2c4-459c-a561-091d8abcbe7b',
				name: 'Flatten',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'The ogre umbral savage makes a greatclub attack; on a hit, the target is also pushed 1 square and knocked prone.; 3d8+4 damage.',
				damage: '3d8+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '17fa136b-a10d-497b-9a03-c50c3cdd7017',
		name: 'Ogre Umbral Skirmisher',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2',
		movement: '8',
		alignment: 'Chaotic evil',
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
		hp: 67,
		initiative: 2,
		ac: 19,
		fortitude: 19,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '27bcd9ff-c05a-4010-8c38-4d98f148f3d0',
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
				details: 'Reach 2; 1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: 'af76abfb-bf1d-4a31-ac7a-6bb967cf64df',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'd7bc8748-bdf4-4ee7-99c6-443dd6a7b654',
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
				details: 'The ogre umbral skirmisher makes a javelin attack followed by a charge attack.',
				damage: '',
				category: 1
			},
			{
				id: '5bb8d5e9-dc56-4fd2-b33c-224637296ba3',
				name: 'Skirmish +1d8',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If, on its turn, the ogre umbral skirmisher ends its move at least 4 squares away from its starting point, it deals an extra 1d8 damage on it attacks until the start of its next turn.',
				damage: 'it deals an extra 1d8 damage on it attacks until the start of its next turn',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Skirmisher',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'cfe8f700-39f1-45f6-b247-d7ed3a21115a',
		name: 'Prine',
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
		senses: 'Perception +11; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Dwarven, Elven',
		skills: 'Arcana +20, Diplomacy +20, Insight +18',
		equipment: 'staff of power',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		intelligence: {
			score: 25,
			modifier: 7,
			cost: -1
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
		hp: 302,
		initiative: 10,
		ac: 32,
		fortitude: 26,
		reflex: 31,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '10f39f06-4bf9-43d4-8534-faf7f783a9a0',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 1
			},
			{
				id: '73ebfa2f-828d-46f5-8aa6-48ddda9dc64d',
				name: 'Frost Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'two targets; 2d6+9 cold damage, and the target is slowed (save ends).',
				damage: '2d6+9 cold damage',
				category: 1
			},
			{
				id: '47cfc525-dda3-4068-80b8-0621f1ccfb26',
				name: 'Acid Tendrils',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'two targets; 1d8+7 acid damage, ongoing 5 acid damage (save ends), and slide the target 3 squares.',
				damage: '1d8+7 acid damage',
				category: 1
			},
			{
				id: 'ed91eaa6-7373-4b72-9e27-9e9dbe4e000d',
				name: 'Transferring Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force, Teleportation',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d12+7 force damage, and the target is immobilized. Prine teleports to a square within 2 of the target.',
				damage: '2d12+7 force damage',
				category: 1
			},
			{
				id: '2e0f2fe8-b637-4d8c-a434-f314bf5f9f1a',
				name: 'Enfeebling Defense',
				action: {
					action: 5,
					trigger: 'when hit by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker is weakened until the end of Prine’s next turn.',
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
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '096d4dcc-5bd7-4761-ba4e-6010e8efaf00',
		name: 'Psychic Mage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Arcana +19, Bluff +17',
		equipment: '',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		intelligence: {
			score: 25,
			modifier: 7,
			cost: -1
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
		hp: 141,
		initiative: 8,
		ac: 29,
		fortitude: 23,
		reflex: 26,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: '24db51d0-c4fe-4a84-81dd-8dd75fa971d4',
				name: 'Psychic Ripples',
				keywords: '',
				details: 'aura 2; enemies starting their turns in the area take 5 psychic damage. Allies in the aura gain a +2 power bonus to Will defense.'
			}
		],
		powers: [
			{
				id: 'a40a7439-2a5e-4502-9e7f-aabab8d0a437',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d4+5 damage.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: 'f1642959-a39c-451d-b633-52213cf1c7a6',
				name: 'Mental Block',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '2d8+6 psychic damage, and a creature of the psychic mage’s choice is invisible to the target until the end of the psychic mage’s next turn.',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: '76ecb43c-a010-48ee-9bf0-30ff2222e83f',
				name: 'Mesmerize',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Charm',
				condition: '',
				range: 'Ranged sight',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'the target is stunned (save ends).',
				damage: '',
				category: 1
			},
			{
				id: 'd3e8ba67-21bc-4a46-b016-675bdd21b15c',
				name: 'Frightful Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Area burst 2 within 20',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '2d6+7 psychic damage, and the target uses its first action on its next turn to move at least three squares away from the psychic mage.',
				damage: '2d6+7 psychic damage',
				category: 1
			},
			{
				id: 'ed877141-1aca-4488-8116-fa8bf46ba1fb',
				name: 'Numb to Pain',
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
				details: 'One ally within 10 squares gains 15 temporary hit points.',
				damage: 'One ally within 10 squares gains 15 temporary hit points',
				category: 3
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
		immune: '',
		tactics: '',

		info: 'Level 15 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '61a40862-c543-4f35-ab91-5d60c3efad13',
		name: 'Seething Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +13',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 76,
		initiative: 8,
		ac: 19,
		fortitude: 16,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [
			{
				id: '465d384d-85b6-48bd-8ebf-ced45c61b43b',
				name: 'Seething Whispers',
				keywords: '',
				details: '(Psychic) aura 3; deafened creatures are immune; any enemy in the aura at the start of its turn takes 5 psychic damage and is dazed until the start of its next turn. (If the mad wraith takes radiant damage, the aura is negated until the end of the seething wraith’s next turn.)'
			}
		],
		powers: [
			{
				id: 'ea86446c-332d-44f8-a660-0ce2eaa35f94',
				name: 'Touch of Hate',
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
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '1d6+5 psychic damage, and the target takes a -2 penalty to Will defense (save ends).',
				damage: '1d6+5 psychic damage',
				category: 1
			},
			{
				id: '2587eb03-6a93-4228-86c2-f690944162ce',
				name: 'Touch of Chaos',
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
					bonus: 10,
					defence: 3
				},
				description: '',
				details: '2d6+4 psychic damage, and the target moves up to its speed and makes a basic attack against its nearest ally as a free action.',
				damage: '2d6+4 psychic damage',
				category: 1
			},
			{
				id: 'a860b552-a14a-4769-bb24-efae1fef526b',
				name: 'Spawn Wraith',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any humanoid killed by a seething wraith rises as a freewilled seething wraith at the start of its creator’s next turn, appearing in the space where it died (or in the nearest unoccupied space). Raising the slain creature (using the Raise Dead ritual) does not destroy the spawned wraith.',
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

		info: 'Level 7 Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '2d5f270d-b3b2-498b-870b-f8c9d67d6720',
		name: 'Shadow Beetle',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: '',
		level: 5,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
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
			score: 10,
			modifier: 0,
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 62,
		initiative: 2,
		ac: 19,
		fortitude: 17,
		reflex: 13,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '45663783-09e2-45a6-93d4-3ee38bd46e54',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '54679de8-0879-4e95-a33f-2d2249c7105c',
				name: 'Shadow Spray',
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
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '2d6+2 damage, plus the target is immobilized and all creatures have concealment against it (save ends).',
				damage: '2d6+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Controller',
		phenotype: 'Large shadow beast'
	},
	{
		id: '2b7412f0-db75-44ff-9d01-08259985ed26',
		name: 'Shadowgoblin Mauler',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'goblin',
		level: 8,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +10, Stealth +11',
		equipment: 'mace',
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
				id: '8c3cabba-2d56-4df5-ba71-44298a248b4e',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'f1a212c7-cfe7-4c18-8572-f167dda0e561',
				name: 'Shadowgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the shadowgoblin mauler suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The mauler makes a saving throw against the effect.',
				damage: '',
				category: 5
			},
			{
				id: '1e31227e-de57-4bd2-8eee-e58954a07685',
				name: 'Shadow Soldier',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadowgoblin mauler gains concealment while at least one shadowgoblin ally is adjacent to it.',
				damage: '',
				category: 0
			},
			{
				id: 'ad280346-9673-4c50-9f83-0fe873517ea5',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The shadowgoblin mauler deals an extra 2 damage on melee attacks against any target it has combat advantage against.',
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

		info: 'Level 8 Minion',
		phenotype: 'Medium shadow humanoid (goblin)'
	},
	{
		id: '10e12317-d7c4-47b3-b9b5-9d08d08b1e40',
		name: 'Shadowgoblin Snarler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 5,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +6, Stealth +11',
		equipment: 'arrows (30); leather armor; longbow; longsword',
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
		hp: 51,
		initiative: 6,
		ac: 18,
		fortitude: 14,
		reflex: 16,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cdc1f1bf-8e9e-47d6-a56e-192c53db9ec7',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'e91d4070-b3d1-4bef-8ff4-3ace19686c22',
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
				range: '1d10+5 damage, and the hobgoblin archer grants an ally within 5 squares of it a +2 bonus to its next ranged attack roll against the same target.',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '3fa727b8-a1dc-48d0-9550-5d4aedb1c00f',
				name: 'Snarling Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 20/40',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage, and the target is immobilized by strands of shadow (save ends).',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '76aa061e-d90a-43e5-8f2c-aaac0bf59bc4',
				name: 'Shadowgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the shadowgoblin snarler suffers an effect that a save can end',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The snarler makes a saving throw against the effect.',
				damage: '',
				category: 5
			},
			{
				id: 'f735c4b9-ce30-47a2-a228-8eb728d1c54e',
				name: 'Shadow Soldier',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The shadowgoblin snarler gains concealment while at least one shadowgoblin ally is adjacent to it.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Artillery',
		phenotype: 'Medium natural humanoid (goblin)'
	},
	{
		id: '90ef16d5-e5f5-490b-afe2-55e7e2df14b1',
		name: 'Umbral Panther',
		details: '',
		size: 2,
		origin: 5,
		type: 1,
		keywords: '',
		level: 6,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +13',
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
			score: 21,
			modifier: 5,
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
		hp: 76,
		initiative: 12,
		ac: 20,
		fortitude: 19,
		reflex: 21,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aa2b8d5f-27bc-47a3-a338-05552a56cf44',
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
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'b9101e81-4cd6-4b7a-8d2a-38b2d93dc888',
				name: 'Tail Spike',
				action: {
					action: 4,
					trigger: 'when an enemy moves or shifts into a square adjacent to the umbral panther',
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
				details: '1d6+1 damage.',
				damage: '1d6+1 damage',
				category: 5
			},
			{
				id: '5cfd6126-a298-4c20-8d34-b2e6bd9a3232',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The umbral panther deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the umbral panther deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: 'cb14e166-2fef-4a4a-b60e-08021b9bb94a',
				name: 'Invisibility',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while in spectral form',
				range: '',
				attack: null,
				description: '',
				details: 'The umbral panther is invisible until it makes an attack. It can end this effect on its turn as a free action.',
				damage: '',
				category: 1
			},
			{
				id: 'b031a8fb-2ddf-45e1-8652-97d2e49c0952',
				name: 'Spectral Form',
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
				details: 'The umbral panther becomes insubstantial. It gains a +5 power bonus to Stealth checks but deals only half damage with its attacks. It can end this effect on its turn as a free action.',
				damage: 'it gains a +5 power bonus to stealth checks but deals only half damage with its attacks',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Lurker',
		phenotype: 'Medium shadow beast'
	},
	{
		id: '87723cbd-3a5d-4fdf-95b3-8645f416dcf4',
		name: 'Vecnite Mage',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
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
		fortitude: 13,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e94c12ff-916b-4ba6-a7d5-b740b313a599',
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
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '1d4 damage.',
				damage: '1d4 damage',
				category: 1
			},
			{
				id: '29b60038-acae-4c12-b0e8-b5b745bb74ee',
				name: 'Thunder Blast',
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
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d6+5 thunder damage, and the target is pushed 3 squares.',
				damage: '1d6+5 thunder damage',
				category: 1
			},
			{
				id: 'b77c6739-e2cd-4da4-9888-7ff234edddbf',
				name: 'Lightning Arcs',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'The mage makes a separate attack against 3 different targets: Ranged 10',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d8+5 lightning damage.',
				damage: '1d8+5 lightning damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '5ac2d296-f7e9-4869-9abd-0f3a93dd55cf',
		name: 'Vecnite Thug',
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
		senses: 'Perception +1; low-light vision',
		movement: '6',
		alignment: 'Any',
		languages: 'Common',
		skills: 'Stealth +9, Streetwise +7, Thievery +9',
		equipment: 'club; dagger; leather armor',
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
				id: 'c81cca7b-f489-4790-8d80-9f8f37858116',
				name: 'Club',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d6+1 damage, and the target is pushed 1 square.',
				damage: '1d6+1 damage',
				category: 1
			},
			{
				id: '01957734-c447-43e2-abb5-c23b481446e4',
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
				id: 'f80c4d8a-303e-45c3-91b3-fb07fcfece7f',
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
				details: 'Requires club; 1d8+1 damage, the target is dazed until the end of the Vecnite thug’s next turn, and the Vecnite thug shifts 1 square.',
				damage: '1d8+1 damage',
				category: 1
			},
			{
				id: 'e4f0bd93-e6eb-4564-b8b3-3d3ea6a6c61b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The Vecnite thug deals an extra 1d6 damage on melee and ranged attacks against any target it has combat advantage against.',
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
		id: '56fd9ec4-327b-42a6-ae3a-affacaebe4d3',
		name: 'Water Archon Wavecrasher',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'aquatic, water',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '7, swim 10',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'plate armor',
		category: 'Archon',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 175,
		initiative: 14,
		ac: 27,
		fortitude: 25,
		reflex: 29,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b8ee6bcf-368b-4c0b-9103-dde73dc536bd',
				name: 'Coral Crescent',
				action: {
					action: 1,
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
				details: '1d6+6 damage (crit 11 + 2d6).',
				damage: '1d6+6 damage (crit 11 + 2d6)',
				category: 1
			},
			{
				id: '2f9c3e73-24dd-42b6-8195-afcc2290ac31',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'The water archon makes two coral crescent attacks.; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'edcdfa1e-9c1a-48d3-a28c-f3af639bdbfc',
				name: 'Wave Crash',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '4d6+6 damage, and the target is dazed until the end of the archon’s next turn.',
				damage: '4d6+6 damage',
				category: 1
			},
			{
				id: '97039544-92dd-4b04-a11a-a548880bfdf4',
				name: 'Bloodied Whirlpool',
				action: null,
				keywords: '',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '2d6+6 damage, and slide the target 5 squares. The target must remain within the burst during the slide.',
				damage: '2d6+6 damage',
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
		immune: 'disease',
		tactics: '',

		info: 'Level 15 Brute',
		phenotype: 'Medium elemental humanoid (aquatic, water)'
	},
	{
		id: 'bed7bf0f-7989-4835-bdf1-f5833d1ff8fd',
		name: 'Ancient Ziggurat Mummy',
		details: '',
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
		senses: 'Perception +16; darkvision',
		movement: '6',
		alignment: 'Unaligned',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 246,
		initiative: 12,
		ac: 32,
		fortitude: 35,
		reflex: 30,
		will: 32,
		regeneration: {
			value: 10,
			details: 'if the mummy takes radiant damage, regeneration doesn’t function on its next turn'
		},
		auras: [
			{
				id: '2fea4592-fa4d-4df0-a03c-52157922bdeb',
				name: 'Tomb Rot',
				keywords: '',
				details: '(Necrotic) aura 1; enemies that start their turn in the aura take 10 necrotic damage.'
			}
		],
		powers: [
			{
				id: '03321dba-56c3-402d-abdc-c62a139f5cff',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d6+6 necrotic damage, and the target contracts level 21 mummy rot.',
				damage: '2d6+6 necrotic damage',
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
		id: '017a4bcb-ef6d-4897-ba30-82f921ea9c59',
		name: 'Betrayer Spirit Reaver',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: '',
		equipment: 'greataxe',
		category: '',
		strength: {
			score: 24,
			modifier: 7,
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 202,
		initiative: 19,
		ac: 37,
		fortitude: 34,
		reflex: 33,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '187adb27-ddf1-4840-9a52-076d94755a39',
				name: 'Greataxe',
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
				details: '2d12+7 damage (crit 3d12+31), and the target is dazed (save ends). Aftereffect: The target is dazed and weakened (save ends both).',
				damage: '2d12+7 damage (crit 3d12+31)',
				category: 1
			},
			{
				id: '808b45aa-36e4-46cc-8c22-afaa7dc44b8f',
				name: 'Murderous Gaze',
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
				details: 'must target a living creature; if the target is weakened, it is reduced to 0 hit points. Otherwise, the target takes 3d6 + 7 necrotic damage and loses a healing surge.',
				damage: 'the target takes 3d6 + 7 necrotic damage and loses a healing surge',
				category: 1
			},
			{
				id: '4c8b494a-8f20-4018-8389-17f5513cbcc5',
				name: 'Death Drinker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a living creature is reduced to 0 hit points within 5 squares of the betrayer spirit reaver, the reaver gains a +1 bonus to attack rolls until the end of its next turn as well as 15 temporary hit points.',
				damage: 'If a living creature is reduced to 0 hit points within 5 squares of the betrayer spirit reaver',
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

		info: 'Level 21 Soldier',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'c362e13a-7197-4661-8a80-84b33633e257',
		name: 'Betrayer Wight',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '7',
		alignment: 'Chaotic evil',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 244,
		initiative: 16,
		ac: 33,
		fortitude: 36,
		reflex: 33,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4e17ced8-8c1a-4f7d-9141-1ad5803f83ab',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d8+9 necrotic damage, and the target is weakened. To end the weakened condition, the target must spend a healing surge (a free action). If the target does so, the wight regains 15 hit points.',
				damage: '2d8+9 necrotic damage',
				category: 1
			},
			{
				id: '9fca7d62-43ff-4008-a0ad-31b4fdfde32e',
				name: 'Death Wail',
				action: null,
				keywords: 'Necrotic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 5',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+7 necrotic damage. Undead allies in the burst can make a basic attack as a free action.',
				damage: '2d6+7 necrotic damage',
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
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '50a41a60-81dc-4aef-9f1f-402e61343da1',
		name: 'Frost Goblin Cutter',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'cold; goblin',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '6 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: '',
		equipment: 'javelin; leather armor; short sword',
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
		hp: 1,
		initiative: 3,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ee4cf6a2-68f2-4ee2-8d52-af4975515c1f',
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
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '4 damage (5 damage if the frost goblin cutter has combat advantage against the target).',
				damage: '4 damage (5 damage if the frost goblin cutter has combat advantage against the target)',
				category: 1
			},
			{
				id: 'dc4e5cc1-5dbc-47d8-b05e-4db811e3f5af',
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
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Small natural humanoid (cold; goblin)'
	},
	{
		id: 'f178c8be-1075-45d4-a556-326b0073ed58',
		name: 'Frost Goblin Hexer',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'cold; goblin',
		level: 3,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +2; low-light vision',
		movement: '6 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Stealth +10, Thievery +10',
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
		hp: 92,
		initiative: 3,
		ac: 19,
		fortitude: 17,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1a1ae9ee-7a80-492d-bf96-5c7280d5c42e',
				name: 'Hexer Rod',
				action: {
					action: 1,
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
				details: '1d6+1 damage.',
				damage: '1d6+1 damage',
				category: 1
			},
			{
				id: 'e2703df1-b020-49ef-b148-e1bfb9b42e88',
				name: 'Freezing Hex',
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
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '2d6+1 cold damage, and the target is slowed (save ends).',
				damage: '2d6+1 cold damage',
				category: 1
			},
			{
				id: 'cbf9fb89-f40f-4d9b-bf8e-e0f3b66fb66d',
				name: 'Icebound Hex',
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
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'the target takes 3d6 + 1 cold damage if it moves during its turn (save ends).',
				damage: 'the target takes 3d6 + 1 cold damage if it moves during its turn (save ends)',
				category: 1
			},
			{
				id: '73355e7c-6c57-424f-8466-488e6d78db3a',
				name: 'Freezing Cloud',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Zone',
				condition: '',
				range: 'Area burst 3 within 10',
				attack: null,
				description: '',
				details: 'automatic hit; all squares within the zone are treated as difficult terrain (creatures with the ice walk ability can ignore this effect). The zone grants concealment to the frost goblin hexer and its allies. The frost goblin hexer can sustain the zone as a minor action, moving it up to 5 squares.',
				damage: 'moving it up to 5 squares',
				category: 1
			},
			{
				id: '369eea55-6e93-4093-b86f-34954694490a',
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
				attack: null,
				description: '',
				details: 'the targeted ally can shift 2 additional squares and make an attack.',
				damage: 'the targeted ally can shift 2 additional squares and make an attack',
				category: 5
			},
			{
				id: '1f256674-1d91-4556-8fd3-4d1e6ace810c',
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
				details: 'The frost goblin shifts 1 square.',
				damage: 'The frost goblin shifts 1 square',
				category: 5
			},
			{
				id: '4d27e4d5-745b-4c79-8d37-0a6d81d8ae0d',
				name: 'Lead from the Rear',
				action: {
					action: 5,
					trigger: 'when targeted by a ranged attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost goblin hexer can change the attack’s target to an adjacent ally of its level or lower.',
				damage: '',
				category: 5
			},
			{
				id: 'a229263b-19af-497f-85d0-6d82460c4a70',
				name: 'Body of Ice',
				action: null,
				keywords: '',
				condition: '',
				range: 'Any creature that hits the frost goblin hexer with a melee attack is slowed until the end of that creature’s next turn.',
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
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 3 Elite Controller (L)',
		phenotype: 'Small natural humanoid (cold; goblin)'
	},
	{
		id: '5d598f3e-db65-4dd4-8e2c-75214e12584e',
		name: 'Frost Goblin Sharpshooter',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'cold; goblin',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +2; low-light vision',
		movement: '6 (ice walk)',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: '',
		equipment: 'crossbow bolts (20); hand crossbow; leather armor; short sword',
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
		fortitude: 12,
		reflex: 14,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7d173a7b-f6e7-4b18-aeaf-8d9a70e9cde4',
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
				id: 'aa301248-5ced-4264-a6d1-415233bcb52d',
				name: 'Hand Crossbow',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '11f89440-bd5e-4df2-bc83-469a1e931478',
				name: 'Sniper',
				action: null,
				keywords: '',
				condition: '',
				range: 'When a frost goblin sharpshooter makes a ranged attack from hiding and misses, it is still considered to be hiding.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'a0c36b9f-689a-4c8c-9f6e-b53c79d31be9',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The frost goblin sharpshooter deals an extra 1d6 damage against any target it has combat advantage against.',
				damage: 'the frost goblin sharpshooter deals an extra 1d6 damage against any target it has combat advantage against',
				category: 0
			},
			{
				id: 'ce9537e9-0a9c-485e-b116-1ac8ca5c785e',
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
				details: 'The frost goblin shifts 1 square.',
				damage: 'The frost goblin shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Small natural humanoid (cold; goblin)'
	},
	{
		id: '9cd35217-a7ac-415b-8fd0-aceb2b25ff03',
		name: 'Holy Ziggurat Guardian',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 20,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6, climb 6',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Athletics +21',
		equipment: 'spear',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 193,
		initiative: 18,
		ac: 36,
		fortitude: 33,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1d48ee2f-c3eb-47fe-afef-df0dc12d4025',
				name: 'Holy Spear',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '2d10+6 radiant damage, and the target takes ongoing 10 radiant damage (save ends) and is marked until the end of the ziggurat guardian’s next turn.',
				damage: '2d10+6 radiant damage',
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
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 20 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '0fcff095-dd7c-44df-9dfa-b3abf711d237',
		name: 'Holy Ziggurat Slinger',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 22,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '6, climb 6',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Athletics +21',
		equipment: 'sling',
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
		hp: 165,
		initiative: 18,
		ac: 34,
		fortitude: 35,
		reflex: 34,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fedfe44c-213c-4748-b779-f595f2aa5f03',
				name: 'Slam',
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
				details: '2d6+5 damage, and the target takes ongoing 10 radiant damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '2f92e5a6-9a05-4e78-9cb6-e0060ed23483',
				name: 'Holy Sling',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d6+9 radiant damage, and the target is weakened and takes a -2 penalty to saving throws (save ends both).',
				damage: '2d6+9 radiant damage',
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
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 22 Artillery',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'c6e32b2a-23da-4c35-a4ff-877119601a56',
		name: 'Ice Warrior Frostling',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'cold',
		level: 4,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8',
		movement: '6 (ice walk)',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: 'Intimidate +13',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 54,
		initiative: 4,
		ac: 18,
		fortitude: 16,
		reflex: 14,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '34422397-9eb9-467f-af65-11c6937bbe0b',
				name: 'Icy Aura',
				keywords: '',
				details: '(Cold) aura 5 (not active while bloodied); cold creatures in the area gain regeneration 2. Enemies treat the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: '3470434b-be2d-4f70-9a0c-85e4e4f38def',
				name: 'Ice Shard',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+5 cold damage.',
				damage: '1d8+5 cold damage',
				category: 1
			},
			{
				id: '74d9b2ab-b1e3-44be-bf4d-0b53594c7821',
				name: 'Freezing Shot',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+4 cold damage, the target is slowed until the end of the binder’s next turn, and one ally within 3 squares of the target can shift 3 to a space adjacent to the target.',
				damage: '1d6+4 cold damage',
				category: 1
			},
			{
				id: 'c89f612a-23ec-4aae-a9ba-2b09c0e41618',
				name: 'Icy Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Area burst 1 within 5',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: '1d10+4 cold damage and the target is slowed (save ends). First Failed Saving Throw: The target is immobilized (save ends).',
				damage: '1d10+4 cold damage and the target is slowed (save ends)',
				category: 1
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 4 Controller (L)',
		phenotype: 'Medium elemental animate (cold)'
	},
	{
		id: 'd470ea7c-7895-449c-b737-60b01b3c4c36',
		name: 'Ice Warrior Icicle Hurler',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'cold',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8',
		movement: '6 (ice walk)',
		alignment: 'Chaotic evil',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 32,
		initiative: 4,
		ac: 15,
		fortitude: 14,
		reflex: 15,
		will: 14,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd00a73a2-2c18-4ead-86ca-d7a982ba6917',
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
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d4+3 damage plus 1d4 cold damage.',
				damage: '1d4+3 damage plus 1d4 cold damage',
				category: 1
			},
			{
				id: 'fde19085-ad02-4e4b-a055-92bbe74663cb',
				name: 'Flying Icicle',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d6+2 damage plus 1d6 cold damage.',
				damage: '1d6+2 damage plus 1d6 cold damage',
				category: 1
			},
			{
				id: 'd5f924d5-822b-49bf-9812-c29f45fe7803',
				name: 'Icicle Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Area burst 3 within 20',
				attack: {
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d10+1 cold damage.',
				damage: '1d10+1 cold damage',
				category: 1
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Artillery',
		phenotype: 'Medium elemental animate (cold)'
	},
	{
		id: '7f8cf743-8364-4bc2-89e4-9bf1783913ef',
		name: 'Ice Warrior Raider',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'cold',
		level: 2,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6 (ice walk)',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: '',
		equipment: 'maul',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 42,
		initiative: 5,
		ac: 17,
		fortitude: 15,
		reflex: 13,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ba728003-700b-447e-af0f-e65c962b92a4',
				name: 'Maul',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage, and the target is slowed (save ends). Against a slowed target, +1d6 cold damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '82c848ad-768c-478d-8183-dd966ffb1a5e',
				name: 'Ice Embrace',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 7,
					defence: 1
				},
				description: '',
				details: 'the target is immobilized by ice (save ends).',
				damage: '',
				category: 3
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium elemental animate (cold)'
	},
	{
		id: 'd1ebf095-45c8-4292-9634-280d27602f43',
		name: 'Ice Warrior Shardling',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'cold',
		level: 1,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6 (ice walk)',
		alignment: 'Chaotic evil',
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
		initiative: 2,
		ac: 16,
		fortitude: 14,
		reflex: 12,
		will: 11,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '20c1017b-cbd6-4699-a99a-740fda269251',
				name: 'Ice Shard',
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
					bonus: 5,
					defence: 0
				},
				description: '',
				details: '4 cold damage.',
				damage: '4 cold damage',
				category: 1
			},
			{
				id: '23e8d986-8b67-4087-8ca3-b0c609d91743',
				name: 'Ice Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '(standard',
				range: 'Ranged 5/10',
				attack: {
					bonus: 4,
					defence: 0
				},
				description: '',
				details: '4 cold damage.',
				damage: '4 cold damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 2,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 1 Minion',
		phenotype: 'Medium elemental animate (cold)'
	},
	{
		id: 'bd6f6ed2-28dd-46ef-8427-f84687bb5587',
		name: 'Iron Cobra Guardian',
		details: 'Homunculi come in many different forms. This creature resembles a hooded cobra with a body made of articulated metal rings.',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +10',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 5,
			modifier: -3,
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
		hp: 75,
		initiative: 7,
		ac: 20,
		fortitude: 20,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fd8d8102-ef01-48ba-bc48-0a7f1a802f8f',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'd3c3faae-230f-432c-9c21-a42aaa450079',
				name: 'Poison the Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'only affects creatures taking ongoing poison damage; the target is dazed and slowed (save ends both).',
				damage: 'only affects creatures taking ongoing poison damage',
				category: 1
			},
			{
				id: 'e53ae451-89b6-44a0-b69d-1f0090dc51e2',
				name: 'Guard Area',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The iron cobra has been attuned to guard the landing of the stairwell, as well as the first 2 squares up and down the adjacent stairs. It defends this area with its life. The iron cobra can use its poison the mind power against any creature in its guarded area, even if the power hasn’t recharged and even if the target isn’t taking ongoing poison damage.',
				damage: 'even if the power hasn’t recharged and even if the target isn’t taking ongoing poison damage',
				category: 0
			},
			{
				id: '5e24b303-8d66-4d06-bc48-6158b37f133b',
				name: 'Slithering Shift',
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
				details: 'The iron cobra shifts 3 squares as a move action.',
				damage: 'The iron cobra shifts 3 squares as a move action',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural animate (construct, homunculus)'
	},
	{
		id: '5422ae67-cae5-4d7a-a1af-779d39957b6f',
		name: 'Juvenile Behir Thunderlance',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'reptile',
		level: 10,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '8, climb 4',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Athletics +14',
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
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 87,
		initiative: 6,
		ac: 22,
		fortitude: 24,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62c02fc2-babc-40e2-b1c3-c6007960efaa',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'bfe8a190-65ec-4211-8662-1c08d863fb25',
				name: 'Lightning Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'Area blast 1 within 10; 3d6+5 lightning damage, and all creatures adjacent to the target takes 5 lightning damage. Miss: Half damage.',
				damage: '3d6+5 lightning damage',
				category: 1
			},
			{
				id: 'eb9b6b97-050a-412c-ac43-34150c989227',
				name: 'Thunder Lance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'The behir thunderlance sends a spear of crackling electricity from its mouth. The behir thunderlance targets up to two creatures with its thunder lance; the first target must be within 10 squares of the behir, and the second target must be within 10 squares of the first; 3d8+5 lightning damage, and the target is pushed 2 and knocked prone.',
				damage: '3d8+5 lightning damage',
				category: 1
			},
			{
				id: '63df7010-e08b-46fe-9ffd-baff534a6863',
				name: 'Devour',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: 'recharge when no creature is affected by this power'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+4 damage and the target is grabbed (until escape). While grabbed, the grabbed creature is pulled into the behir’s space, is restrained, and can only target the behir. The behir thunderlance can sustain the power as a minor action, dealing 10 damage and maintaining the grab. After escaping, the target is placed in any square adjacent to the behir.',
				damage: '2d8+4 damage and the target is grabbed (until escape)',
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

		info: 'Level 10 Artillery',
		phenotype: 'Large natural beast (reptile)'
	},
	{
		id: '44834a92-03bc-4bb4-8459-16213a4f3392',
		name: 'Lesser Berbalang',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6, fly 8',
		alignment: 'Evil',
		languages: 'Supernal',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 312,
		initiative: 13,
		ac: 22,
		fortitude: 19,
		reflex: 22,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '503ed4c3-1676-42db-9fc1-aa819fc6a59c',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'bbc86939-57a1-4179-9733-11cbb6a64d83',
				name: 'Sacrifice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 1 centered on a duplicate',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: 'the berbalang can cause one of its duplicates to explode in a burst of psychic gore; 2d8+5 psychic damage, plus the target is dazed (save ends). Miss: No damage, but the target is dazed (save ends). Hit or Miss: The berbalang takes 15 damage.',
				damage: '2d8+5 psychic damage',
				category: 1
			},
			{
				id: '3850b4f0-c7c6-48ac-8e26-012486b29ace',
				name: 'Summon Duplicate',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Conjuration, Psychic',
				condition: 'not while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The berbalang manifests an exact duplicate of itself in an unoccupied adjacent square. It can have no more than four duplicates at once, and duplicates cannot summon other duplicates. When a duplicate appears, it makes an initiative check and joins the battle on that initiative count. All damage a duplicate deals is treated as psychic damage. A duplicate has the same statistics as the berbalang except for its hit points. When the berbalang manifests a duplicate, the berbalang loses one-quarter of its current hit points and the duplicate appears with that quantity of hit points. The berbalang’s maximum number of hit points remains the same. Duplicates last until the berbalang reaches 0 hit points, absorbs them, or uses sacrifice. A duplicate must stay within 10 squares of the berbalang at all times or it disappears.',
				damage: 'all damage a duplicate deals is treated as psychic damage',
				category: 3
			},
			{
				id: '0de9f732-afbd-4ee2-83ec-2b9fa8958001',
				name: 'Absorb Duplicate',
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
				details: 'The berbalang absorbs a duplicate adjacent to it and regains 30 hit points',
				damage: 'The berbalang absorbs a duplicate adjacent to it and regains 30 hit points',
				category: 1
			},
			{
				id: 'a99500ea-01a7-47c5-8759-5d9266fe709e',
				name: 'Berbalang Sneak Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'A berbalang or a duplicate that flanks an enemy with another duplicate deals an extra 1d8 damage on melee attacks against that enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '33299a1f-75a1-4003-89fb-63589e263732',
				name: 'Psychic Deflection',
				action: {
					action: 4,
					trigger: 'when the berbaland is damaged by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The berbalang can deflect the damage it takes from an attack to one of its duplicates. Any effects or secondary attacks included in the attack are also deflected to the duplicate. The damage a duplicate takes in this way is considered',
				damage: 'the berbalang can deflect the damage it takes from an attack to one of its duplicates',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Solo Skirmisher',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '99891076-9a30-41e8-a407-816d4a88df48',
		name: 'Lesser Mezzodemon',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 7,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Intimidate +11',
		equipment: '',
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
		hp: 113,
		initiative: 9,
		ac: 23,
		fortitude: 21,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '343db36b-b97a-4968-b470-02983f72fdea',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Requires trident; reach 2; 1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '54a5438d-1880-4995-bfc6-c4de9fe8d23d',
				name: 'Skewering Tines',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 1,
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
				details: 'Reach 2; 1d8+4 damage, ongoing 5 damage and the target is restrained (save ends both). While the target is restrained, the mezzodemon can’t make trident attacks.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '5e33f851-959c-45af-b678-f23e7bc0fb59',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+2 poison damage, and ongoing 5 poison damage (save ends).',
				damage: '2d6+2 poison damage',
				category: 1
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

		info: 'Level 7 Soldier',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: '8f5e403f-a95c-4dbc-b687-55fce3904088',
		name: 'Painwrought Helmed Horror',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'construct',
		level: 20,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +22; darkvision, truesight 10',
		movement: '8, fly 8 (clumsy)',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Insight +22',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 380,
		initiative: 18,
		ac: 38,
		fortitude: 35,
		reflex: 33,
		will: 34,
		regeneration: {
			value: 10,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '300fb96c-8c26-4573-a9df-25dfac0df29d',
				name: 'Elemental Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon; Cold, Fire, Lightning, or Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '1d10+8 damage plus 1d10 cold, fire, lightning, or thunder damage (painwrought helmed horror’s choice).',
				damage: '1d10+8 damage plus 1d10 cold',
				category: 1
			},
			{
				id: '42159f4c-a79d-4d76-950b-f75b76fe7ffd',
				name: 'Blade Sweep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon; Cold, Fire, Lightning, or Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'The painwrought helmed horror makes an elemental greatsword attack against two different targets within reach.; 4d10+7 damage.',
				damage: '4d10+7 damage',
				category: 1
			},
			{
				id: 'd848010a-6cc6-42fb-aab0-6b1dc1f2dd52',
				name: 'Painful Elemental Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic; Cold, Fire, Lightning, or Thunder',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+7 psychic and cold, fire, lightning, or thunder damage (painwrought helmed horror’s choice), and the target is pushed 2 squares.',
				damage: 'or thunder damage (painwrought helmed horror’s choice)',
				category: 1
			},
			{
				id: 'a69f6fca-d05a-46b0-8274-2d61cba24865',
				name: 'Tactical Step',
				action: {
					action: 7,
					trigger: 'when the greater helmed horror hits with an opportunity attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The painwrought helmed horror shifts 3 squares.',
				damage: 'The painwrought helmed horror shifts 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 20 Elite Soldier',
		phenotype: 'Medium elemental animate (construct)'
	},
	{
		id: 'b9a461b7-e689-4976-b8fa-797b0fd08f2d',
		name: 'Sebacean Gleaner',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 23,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; darkvision',
		movement: '6, climb 4',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +23, History +23',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
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
			score: 25,
			modifier: 7,
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
		hp: 215,
		initiative: 15,
		ac: 37,
		fortitude: 34,
		reflex: 35,
		will: 36,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f2586bad-14c3-4212-a3d4-c9772e353e3c',
				name: 'Limb Blades',
				action: {
					action: 1,
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
				details: '2d10+7 damage.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: 'f98ad42b-cab5-457e-88c5-4229c8a5fcf0',
				name: 'Toxic Spittle',
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
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '2d8+7 damage, and the target is slowed (save ends).',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: 'cae62478-878c-4693-81f5-19ef415d2793',
				name: 'Cocoon Prison',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when no enemy is restrained by this power'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 27,
					defence: 2
				},
				description: '',
				details: '1d10+6 acid damage, and the target is restrained (save ends).',
				damage: '1d10+6 acid damage',
				category: 1
			},
			{
				id: '55cf2b14-8fa2-4fc6-93dd-c55cb67ac6fe',
				name: 'Hypnotic Toxin',
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
					bonus: 27,
					defence: 3
				},
				description: '',
				details: 'Reach 2; 2d10+3 damage, and the target is dominated (save ends).',
				damage: '2d10+3 damage',
				category: 1
			},
			{
				id: '537af6b5-ff31-4cc6-8d6c-e3fbaff0e538',
				name: 'Adaptive Resistance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A sebacean gains resist 20 against the first damage type that damages it during an encounter. The resist lasts until the end of the encounter.',
				damage: 'a sebacean gains resist 20 against the first damage type that damages it during an encounter',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 adaptive',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 23 Controller',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'bbbf5834-d491-411a-8441-86ed41833405',
		name: 'Sebacean Glider',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 20,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6, fly 10',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: 'Stealth +23',
		equipment: '',
		category: '',
		strength: {
			score: 19,
			modifier: 4,
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
		hp: 191,
		initiative: 20,
		ac: 34,
		fortitude: 32,
		reflex: 34,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ce3f09cc-b973-41c4-bccf-37aeda4210de',
				name: 'Limb Blades',
				action: {
					action: 1,
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
				details: '2d10+7 damage.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: '9292c5f2-c9d5-4d43-b304-330b9f557223',
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
				range: 'The sebacean glider flies up to 10 squares and makes one melee basic attack at any point during that movement. The glider doesn’t provoke opportunity attacks when moving away from the target of the attack.',
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '8139feab-d6f1-4fc9-b2bc-ad1c9547741f',
				name: 'Reactive Teleport',
				action: {
					action: 4,
					trigger: 'when the glider takes damage',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'The glider teleports 2 squares and attacks an adjacent creature; 1d10+7 damage.',
				damage: '1d10+7 damage',
				category: 5
			},
			{
				id: 'c83fcc92-c41c-4b4e-8d64-a248fb5b6f7d',
				name: 'Adaptive Resistance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A sebacean gains resist 20 against the first damage type that damages it during an encounter. The resist lasts until the end of the encounter.',
				damage: 'a sebacean gains resist 20 against the first damage type that damages it during an encounter',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 adaptive',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 20 Skirmisher',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '2b1d64ad-5cc2-4c5e-a6d3-93fe77181e6d',
		name: 'Sebacean Gorger',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 22,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6, climb 4',
		alignment: 'Evil',
		languages: 'Deep Speech',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 258,
		initiative: 15,
		ac: 34,
		fortitude: 36,
		reflex: 31,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1801f0a8-3d60-4948-8d04-d04934a8d831',
				name: 'Limb Blades',
				action: {
					action: 1,
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
				details: 'Reach 2; (+27 while bloodied)2d10+8 (2d10 + 10 while bloodied) damage, and ongoing 5 damage (save ends).',
				damage: '(+27 while bloodied)2d10+8 (2d10 + 10 while bloodied) damage',
				category: 1
			},
			{
				id: '05217736-ec8a-4040-bae5-bd5d6f988b8c',
				name: 'Blade Shred',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when an adjacent enemy becomes bloodied'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '(+26 while bloodied)2d10+8 (2d10+10 while bloodied) damage, and ongoing 5 damage (save ends).',
				damage: '(+26 while bloodied)2d10+8 (2d10+10 while bloodied) damage',
				category: 1
			},
			{
				id: 'e4378282-bdfb-4609-8e11-7451dae87173',
				name: 'Bloodied Fury',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The sebacean gorger gains +2 to attack rolls and damage rolls while bloodied (included above).',
				damage: 'the sebacean gorger gains +2 to attack rolls and damage rolls while bloodied (included above)',
				category: 0
			},
			{
				id: '749ca4d2-d19d-4f4f-90e1-20d7e4bf6df0',
				name: 'Adaptive Resistance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A sebacean gains resist 20 against the first damage type that damages it during an encounter. The resist lasts until the end of the encounter.',
				damage: 'a sebacean gains resist 20 against the first damage type that damages it during an encounter',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 adaptive',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 22 Brute',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'edee63db-ba1c-4c6b-a17c-71e2c0fa9abb',
		name: 'Sebacean Guardian',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 21,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '6, climb 4',
		alignment: 'Evil',
		languages: 'Deep Speech',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 199,
		initiative: 14,
		ac: 37,
		fortitude: 35,
		reflex: 29,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a1fe420e-9397-45a4-8e10-ff1e7c02824e',
				name: 'Limb Blades',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '2d10+7 damage and until the sebacean guardian’s next turn, when the target shifts, the sebacean guardian can make a melee basic attack against it.',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2',
				damage: 'Reach 2',
				category: 1
			},
			{
				id: '93870fa0-5ebd-4960-a438-3f86cf88a181',
				name: 'Heuristic Strike',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10+10 damage. One condition that a save can end on the sebacean guardian ends, and the target gains that condition (save ends).',
				damage: '1d10+10 damage',
				category: 1
			},
			{
				id: 'ded92e10-9a54-4888-bcbd-1b142253ce89',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A sebacean guardian can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			},
			{
				id: '7bc921e8-0e73-4065-9ef0-0c94aac24fd5',
				name: 'Adaptive Resistance',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A sebacean gains resist 20 against the first damage type that damages it during an encounter. The resist lasts until the end of the encounter.',
				damage: 'a sebacean gains resist 20 against the first damage type that damages it during an encounter',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '20 adaptive',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Soldier',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'af3fe9aa-f3a3-458c-817d-6519ed238453',
		name: 'Sebacean Mutant Ape',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: '',
		level: 18,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '8, climb 8',
		alignment: 'Evil',
		languages: 'Deep Speech',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 14,
		ac: 32,
		fortitude: 32,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fb3ac905-36ae-4ec3-9c71-03c1284640a2',
				name: 'Limb Blades',
				action: {
					action: 1,
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
				details: '9 damage.',
				damage: '9 damage',
				category: 1
			},
			{
				id: '7eb3df68-d631-419b-826f-27dd2beb2487',
				name: 'Dying Howl',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Each other sebacean mutant ape within 10 squares gains +1 bonus to attack rolls until the end of its next turn. This bonus stacks with that from other sebacean mutant apes’ dying howls.',
				damage: 'Each other sebacean mutant ape within 10 squares gains +1 bonus to attack rolls until the end of its next turn',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Minion',
		phenotype: 'Medium aberrant beast'
	},
	{
		id: 'a2bfc58c-5d01-4b6c-913d-f509a6c97d32',
		name: 'Sebacean Mutant Nightwalker',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, telepathy 20',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		wisdom: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 490,
		initiative: 16,
		ac: 35,
		fortitude: 36,
		reflex: 34,
		will: 35,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dd0daac6-97a2-4d28-bdd2-a5077c3aba19',
				name: 'Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Psychic, Necrotic',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+9 damage plus 2d8 psychic and necrotic damage.',
				damage: '1d8+9 damage plus 2d8 psychic and necrotic damage',
				category: 1
			},
			{
				id: 'ddaf5d52-7f7c-4668-9c8b-a43f35588ea1',
				name: 'Mind Annihilation',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Gaze, necrotic, Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: 'affects a bloodied target only; the target drops to 0 hit points. Miss: The target is dazed until the end of the sebacean mutant nightwalker’s next turn. Resistance does not apply to this power.',
				damage: '',
				category: 1
			},
			{
				id: '68c296b9-cefb-476b-b498-2933e07e2b7b',
				name: 'Void Lure',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Necrotic, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8+7 necrotic and psychic damage, and the target is pulled 3 squares.',
				damage: '1d8+7 necrotic and psychic damage',
				category: 3
			}
		],
		damageModifiers: [
			{
				type: 8,
				value: -20
			},
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

		info: 'Level 21 Elite Brute',
		phenotype: 'Large aberrant humanoid (undead)'
	},
	{
		id: '265a93dd-93a9-4d1e-a249-e3c382e87a30',
		name: 'Sebacean Mutant Treant',
		details: '',
		size: 4,
		origin: 0,
		type: 1,
		keywords: 'plant, undead',
		level: 21,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6 (forest walk)',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: '',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 400,
		initiative: 16,
		ac: 38,
		fortitude: 36,
		reflex: 33,
		will: 34,
		regeneration: null,
		auras: [
			{
				id: '51963639-cd74-4099-b97b-ced24a80aed3',
				name: 'Screaming Tree',
				keywords: '',
				details: '(Psychic) aura 2; an enemy in the aura at the start of its turn takes 10 psychic damage.'
			}
		],
		powers: [
			{
				id: '55e09f7b-1ac1-4f3e-94c2-a72d687a79fa',
				name: 'Slam',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d6+9 damage, and ongoing 5 psychic damage (save ends).',
				damage: '2d6+9 damage',
				category: 1
			},
			{
				id: '9c488181-aaae-491e-899e-e6b4208decdd',
				name: 'Psychic Roots',
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
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'Reach 4; the target is knocked prone and immobilized (save ends).',
				damage: 'Reach 4',
				category: 3
			},
			{
				id: 'd4937f56-a96c-43d7-9a51-d013bd5d65e9',
				name: 'Psychic Shock',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A creature hit by the treant’s opportunity attack is immobilized until the end of the treant’s next turn.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 21 Elite Soldier',
		phenotype: 'Huge aberrant beast (plant, undead)'
	},
	{
		id: 'd64aab9d-7a00-4802-a360-6e96e7bffdfe',
		name: 'Spirit of Winter',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: 'cold',
		level: 3,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6 (ice walk)',
		alignment: 'Unaligned',
		languages: 'telepathy 20',
		skills: 'Athletics +15',
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
		hp: 250,
		initiative: 2,
		ac: 18,
		fortitude: 19,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [
			{
				id: '453d8bae-63a2-4f43-ad44-bc5ddddf625d',
				name: 'Choke Frost Aura',
				keywords: '',
				details: '(Cold) aura 2 (not active while bloodied); creatures that start their turns or enter the area of the aura are slowed (save ends).'
			}
		],
		powers: [
			{
				id: '90deb77a-516a-46c2-a8fd-b66f17598008',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d6+4 plus 1d6 cold damage (plus an extra 1d6 cold damage against a creature that is under the effects of choke frost).',
				damage: '1d6+4 plus 1d6 cold damage (plus an extra 1d6 cold damage against a creature that is under the effects of choke frost)',
				category: 1
			},
			{
				id: '2785ace6-565b-4ddc-ba6b-dfbf6cddc72a',
				name: 'Frost Fury',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit of winter makes two slam attacks.',
				damage: '',
				category: 1
			},
			{
				id: '9d0cd041-b60f-47d5-b4a7-1d20f489a8ed',
				name: 'Blast of Cold',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 10 from frost gem',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: 'two targets; 2d8+1 cold damage. This attack does not provoke opportunity attacks.',
				damage: '2d8+1 cold damage',
				category: 3
			},
			{
				id: '201b6a1d-be54-4df5-be51-56bc601e3879',
				name: 'Freezing Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 4,
					defence: 2
				},
				description: '',
				details: '1d6+4 cold damage, and the target is pushed 2 squares and knocked prone. Miss: The target is pushed 1 square and not knocked prone.',
				damage: '1d6+4 cold damage',
				category: 1
			},
			{
				id: 'c0e5f8d3-3f5a-4db7-9685-5f3db58aea54',
				name: 'Bloodied Burst',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit of winter’s freezing burst recharges, and the spirit of winter uses it immediately.',
				damage: '',
				category: 1
			},
			{
				id: 'b4a66717-85c6-43f5-b284-ea5ceb94786f',
				name: 'Gem Bound',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The spirit of winter is bound to the frost gem. Attacking either damages the spirit of winter, and when the spirit of winter reaches 0 hit points or fewer, the gem is also destroyed. The gem’s defenses are identical to the spirit of winter’s, and the gem has resist 5 all.',
				damage: 'attacking either damages the spirit of winter',
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

		info: 'Level 3 Solo Brute',
		phenotype: 'Large fey humanoid (cold)'
	},
	{
		id: '4d85325c-54eb-4db0-85d6-f4a826e34508',
		name: 'Tower Iron Defender',
		details: 'Homunculi come in many different forms. This construct resembles a large hound or wardog made of iron.',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 2,
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
			score: 15,
			modifier: 2,
			cost: 7
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
		hp: 39,
		initiative: 5,
		ac: 17,
		fortitude: 15,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0d5a61b3-bacd-48c4-9c8f-adb756498d24',
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
				details: '1d8+3 damage.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '5565142e-b680-4409-a72b-8ef482d66733',
				name: 'Guard Area',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The tower iron defender gains a +1 bonus to all defenses (not included above) when it is within 5 squares of the tower. However, it does not hesitate to pursue foes who step beyond this area. The tower iron defender does not pursue creatures that flee the area entirely, since its focus is on guarding the tower.',
				damage: 'The tower iron defender gains a +1 bonus to all defenses (not included above) when it is within 5 squares of the tower',
				category: 0
			},
			{
				id: 'd41453a2-d4c7-496b-9d2b-989ea6b963b5',
				name: 'Pursue and Attack',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the tower iron defender makes an opportunity attack, it shifts 1 square before or after the attack.',
				damage: 'it shifts 1 square before or after the attack',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 2 Soldier',
		phenotype: 'Medium natural animate (construct, homunculus)'
	},
	{
		id: '1247247f-72ea-46ac-9848-d33b0b4bc4d4',
		name: 'Troglodyte Spear Warrior',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Draconic',
		skills: 'Athletics +14, Endurance +13',
		equipment: 'light shield; longspear',
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
		initiative: 6,
		ac: 25,
		fortitude: 25,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'c6279d8d-02c5-45d4-9d7c-04b14381c198',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 1; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: 'f18fc5f5-c0c9-4875-af4c-bbdfb1b4c3c1',
				name: 'Longspear',
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
				details: 'Reach 2; 7 damage.',
				damage: '7 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: 'c4fc4bfd-5528-4560-9bbd-f7703106777b',
		name: 'Undead Gibbering Abomination',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: 'undead',
		level: 18,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; all-around vision, darkvision',
		movement: '6, fly 4 (hover; maximum altitude 1)',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 168,
		initiative: 13,
		ac: 32,
		fortitude: 31,
		reflex: 30,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fbb1110f-0230-47de-91fc-08b5a8496d0a',
				name: 'Tentacles',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+5 damage, and ongoing 5 psychic damage (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '1b78e1b1-1b1e-406d-9e53-bf182b473a2a',
				name: 'Gibbering',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: 'once on the undead gibbering abomination’s turn before it takes other actions',
				range: 'Close burst 5',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'deafened creatures are immune; the target is dazed until the end of the gibbering abomination’s next turn.',
				damage: '',
				category: 4
			},
			{
				id: '8e79b856-9fb8-4eab-b4fe-1e939c0b1a85',
				name: 'Eye of Despair',
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
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '3d8+4 psychic damage, and the target is immobilized (save ends).',
				damage: '3d8+4 psychic damage',
				category: 1
			},
			{
				id: 'e4b74988-ea2c-4a5b-aa58-e0e424d42b31',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gibbering abomination deals an extra 2d6 psychic damage on melee and ranged attacks against any target it has combat advantage against.',
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
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 18 Controller',
		phenotype: 'Medium aberrant beast (undead)'
	},
	{
		id: 'b42efb37-49f1-48ac-98a7-97389aeb6853',
		name: 'Ziggurat Ghost',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 21,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Unaligned',
		languages: 'Common',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 152,
		initiative: 19,
		ac: 32,
		fortitude: 30,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '87110e2a-618f-4355-ac4c-bd7fdbfb3ca0',
				name: 'Blinding Touch',
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
					defence: 2
				},
				description: '',
				details: '2d8+7 necrotic damage, and the target is blinded (save ends).',
				damage: '2d8+7 necrotic damage',
				category: 1
			},
			{
				id: '5452dfc2-5d9c-4c71-8845-9bd4e9b7538b',
				name: 'Ghostly Possession',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Charm',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'Target must be a living humanoid; the ghost enters the target’s space and is removed from play, and the target is dominated (save ends). The ghost can use this power against only one creature at a time. When the target is no longer dominated, or when the ghost chooses to end its ghostly possession (a free action), the ghost reappears in a square adjacent to the target.',
				damage: '',
				category: 1
			},
			{
				id: '8edc1e37-52ab-41a2-b240-c4784ce49fec',
				name: 'Terrifying Shriek',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 24,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d8+7 psychic damage, and the target is pushed 3 squares and knocked prone.',
				damage: '3d8+7 psychic damage',
				category: 1
			},
			{
				id: '30ee50cc-77c4-4b5b-a65a-78c1b4e14227',
				name: 'Ghostly Terrain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 1,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 25,
					defence: 3
				},
				description: '',
				details: 'the area is filled with ghostly lights, wisps of mist, and the faint whispers of the dead. The zone is difficult terrain and lightly obscured. Any creature that enters or ends its turn in the zone is subject to an attack; the target is immobilized (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '1d988a97-6c23-47ac-8d6e-a3ed3da6c464',
				name: 'Death Shriek',
				action: null,
				keywords: 'Fear, Psychic',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The ziggurat ghost recharges and uses its terrifying shriek immediately.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 21 Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'f0ca3e81-f577-4551-9fcd-506a3615948e',
		name: 'Abyssal Wretch',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Chaotic evil',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		dexterity: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 3,
		ac: 18,
		fortitude: 17,
		reflex: 15,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e7398b21-abad-446f-89c9-0ba566389575',
				name: 'Twisted Claw',
				action: {
					action: 1,
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
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'cb006b1b-d824-4624-9049-2f17a591df77',
				name: 'Inspire Revulsion',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets one enemy in burst; 6 psychic damage, and the target takes a -2 penalty on attack rolls until the end of the abyssal wretch’s next turn.',
				damage: '6 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Minion',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: 'c51b09ab-28c7-4f66-8aef-efa39439fa51',
		name: 'Advanced Rancid Tide',
		details: '',
		size: 5,
		origin: 4,
		type: 0,
		keywords: 'dragon, undead',
		level: 25,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '8',
		alignment: 'Unaligned',
		languages: '',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 366,
		initiative: 14,
		ac: 39,
		fortitude: 40,
		reflex: 36,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd3857776-9763-4f16-b07b-3ded51e64ba1',
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
				details: 'Reach 4; 2d6+10 damage.',
				damage: '2d6+10 damage',
				category: 1
			},
			{
				id: 'e2bb6323-06b8-458f-9e14-f9350b47f0c2',
				name: 'Black Bile Spittle',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 15',
				attack: {
					bonus: 30,
					defence: 2
				},
				description: '',
				details: '2d8+10 necrotic damage, and the target is weakened until the end of the rancid tide’s next turn.',
				damage: '2d8+10 necrotic damage',
				category: 1
			},
			{
				id: 'a50bbc71-c00c-4e52-be1d-1cf63af66028',
				name: 'Unholy Tears',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: 'Ranged 12',
				attack: {
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '2d8+10 necrotic damage, and the target takes a -4 penalty to AC and Reflex defense (save ends).',
				damage: '2d8+10 necrotic damage',
				category: 1
			},
			{
				id: '1b4bc025-9f63-474d-9bce-76cdab71d676',
				name: 'Torrent of Terror',
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
				details: 'The rancid tide makes a black bile spittle and an unholy tears attack, each against a different target.',
				damage: '',
				category: 1
			},
			{
				id: '39c7611e-2d4e-4a7d-97ef-e8ec4ee3f63c',
				name: 'Rancid Flood',
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
				attack: {
					bonus: 30,
					defence: 1
				},
				description: '',
				details: 'burst 5; 2d8+8 necrotic damage, and the target is pushed 3 squares.',
				damage: '2d8+8 necrotic damage',
				category: 5
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -20
			}
		],
		resist: '',
		vulnerable: '25 critical hits, radiant (a rancid tide that takes radiant damage is dazed [save ends])',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 25 Elite Artillery',
		phenotype: 'Gargantuan natural animate (dragon, undead)'
	},
	{
		id: '19733d3e-7df7-43cc-a9be-434e0e20473d',
		name: 'Amyria',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 6,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Lawful good',
		languages: 'Common, Draconic, Supernal',
		skills: 'Diplomacy +13, Religion +15',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 200,
		initiative: 11,
		ac: 24,
		fortitude: 19,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: 'f263ad36-f480-419d-a345-0acba75c412e',
				name: 'Aura of Recovery',
				keywords: '',
				details: 'aura 2; allies that start their turn in Amyria’s aura gain a +1 bonus to all saves until the start of their next turn.'
			}
		],
		powers: [
			{
				id: '99b4a338-4177-45c1-8fae-451c12fa7a6e',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d6 radiant damage.',
				damage: '1d8+5 damage plus 1d6 radiant damage',
				category: 1
			},
			{
				id: 'b324e405-fadf-4d5d-9e87-24a04154237f',
				name: 'Crusader’s Assault',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Requires longsword; 1d8+5 damage plus 1d6 radiant damage, and one of Amyria’s allies within 10 squares makes a basic attack as a free action against the same target.',
				damage: '1d8+5 damage plus 1d6 radiant damage',
				category: 1
			},
			{
				id: '601dfcd8-65b4-4f21-b823-9c2be26e9ded',
				name: 'Radiant Rebuke',
				action: {
					action: 5,
					trigger: 'when targeted by a melee attack',
					sustainAction: 0,
					use: 1,
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
				details: '2d6+5 radiant damage.',
				damage: '2d6+5 radiant damage',
				category: 5
			},
			{
				id: '7577a76b-3f03-44a0-b43b-5a75aafe7e73',
				name: 'Memory of A Thousand Lifetimes',
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
				details: 'Amyria adds 1d6 to a d20 roll she just made.',
				damage: 'Amyria adds 1d6 to a d20 roll she just made',
				category: 4
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

		info: 'Level 10 Elite Skirmisher (L)',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'd21a0f0a-d4b0-4989-9cb4-bcf17fc497d9',
		name: 'Anchor Troll',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: 'Athletics +18, Endurance +16',
		equipment: '',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 139,
		initiative: 12,
		ac: 28,
		fortitude: 27,
		reflex: 27,
		will: 23,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '6dac307f-9cc8-4c4f-b33b-662fde5f4fd6',
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
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '1e7c3df2-3564-46eb-989d-129d180c501c',
				name: 'Wrapping Chain',
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
					defence: 2
				},
				description: '',
				details: 'Reach 5; 1d6+6 damage, and the target is restrained (save ends). The restrained effect ends if the troll and the target move more than 5 squares apart.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '1237ff86-47d0-4eff-8aa6-591736f9f934',
				name: 'Chain Slam',
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
					defence: 1
				},
				description: '',
				details: 'This attack can be used only against a creature restrained by wrapping chain. The troll swings the chain that has snared its target, and slams the creature against the ground. Move the target to any square within 5 of the troll and make an attack; 4d8+6 damage, and the target is knocked prone. Effect: The target is no longer restrained.',
				damage: '4d8+6 damage',
				category: 1
			},
			{
				id: '6935ed24-7cf8-4d2a-917f-ccf7df8aeacb',
				name: 'Anchor Tornado',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '3d8+6 damage, and the target is knocked prone.',
				damage: '3d8+6 damage',
				category: 1
			},
			{
				id: 'b5040d6a-7257-42dc-962d-d78503eccde8',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 15 hit points.',
				damage: 'if the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Controller',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '156b0687-e26f-4253-a53f-cd7b59f61665',
		name: 'Bladerager Troll Enforcer',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: 'Athletics +17, Endurance +16',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 151,
		initiative: 10,
		ac: 24,
		fortitude: 26,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'faab0af4-9393-4039-bdeb-431198676c48',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+6 damage.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: 'cb384aef-766c-4460-becc-05b23b5a33a7',
				name: 'Bladerager Rend',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d10+6 damage, and ongoing 5 damage (save ends).',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: '4c099dc6-4f02-4c21-a0d5-13f72631b5e0',
				name: 'Death Burst',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points or less',
				range: 'The bladerager troll enforcer explodes in a burst of shrapnel. Close burst 2',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'a9b93926-2780-43df-a39e-4a5d06b1b08e',
		name: 'Book Storm',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'swarm',
		level: 24,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +20; blindsight 20',
		movement: '2 (clumsy), fly 12 (hover)',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 30,
			modifier: 10,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 27,
			modifier: 8,
			cost: -1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 225,
		initiative: 24,
		ac: 40,
		fortitude: 35,
		reflex: 38,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '1865a06d-59a1-42f9-b0ae-e7217240c06b',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the book storm makes a basic attack as a free action against each enemy that begins its turn in the aura.'
			}
		],
		powers: [
			{
				id: '8bb76edd-2195-49ec-a44c-ac217aac81fa',
				name: 'Slicing Pages',
				action: {
					action: 1,
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
					defence: 1
				},
				description: '',
				details: 'Reach 0; 2d8+9 damage, ongoing 5 damage, and the target is slowed until the end of the book storm’s next turn.',
				damage: '2d8+9 damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: 15
			}
		],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 24 Soldier',
		phenotype: 'Large natural animate (swarm)'
	},
	{
		id: '6059b72b-0b54-4067-802b-5c3333337a83',
		name: 'Bounty Hunter Snaremaster',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: '',
		equipment: 'bola; leather armor; rapier',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 61,
		initiative: 7,
		ac: 19,
		fortitude: 18,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b2b50eba-5d83-48cd-b5dc-cb9b5d6145b4',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: 'dd6d1042-d74c-449d-9b89-5ff36186bf65',
				name: 'Bolas',
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
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '2d4+5 damage, and the target is restrained (save ends).',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: 'bd25eb13-af3c-4cd9-bbbc-70a374e336c9',
				name: 'Keep ’Em Separated',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'ranged 10/20',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'Requires bolas; three targets in range; 4d4+5 damage, and the target slides 2 squares and is restrained (save ends).',
				damage: '4d4+5 damage',
				category: 1
			},
			{
				id: '51f25953-7cce-4181-af26-11a2fb87596a',
				name: 'Second Chance',
				action: {
					action: 5,
					trigger: 'when the bounty hunter snaremaster would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bounty hunter snaremaster forces the attacker to reroll the attack and take the new result.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Artillery',
		phenotype: 'Small natural humanoid'
	},
	{
		id: '6172217b-050b-4ef2-9403-8a9439eaabc2',
		name: 'Bounty Hunter Strongarm',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 2,
			flag: 0,
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
		hp: 98,
		initiative: 4,
		ac: 19,
		fortitude: 20,
		reflex: 17,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e91c5f8f-7a75-485d-90c1-69704e1f23a6',
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
				details: '1d12+8 damage.',
				damage: '1d12+8 damage',
				category: 1
			},
			{
				id: '2112b42c-fa45-4357-8c0d-d812cb2f3360',
				name: 'Clear The Area',
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
				id: 'f959ce37-9666-47e2-8f4f-16c6a059c15b',
				name: 'Brute Rush',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a bounty hunter strongarm makes a bull rush attack, he pushes the target 2 squares instead of 1 square.',
				damage: 'he pushes the target 2 squares instead of 1 square',
				category: 0
			},
			{
				id: '2a28e6a7-a845-4cb9-b6a7-64245923d6ac',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces the bounty hunter strongarm to move—through a push, a pull, or a slide—the bounty hunter strongarm moves 1 square less than the effect specifies. When an attack would knock the bounty hunter strongarm prone, the bounty hunter strongarm can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—the bounty hunter strongarm moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9d005d97-62c7-4205-ab7f-e4e650a7b4fb',
		name: 'Bounty Hunter Subduer',
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
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Nature +10',
		equipment: 'leather armor; maul',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 76,
		initiative: 8,
		ac: 21,
		fortitude: 20,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '68a587f9-9a1a-4998-a00a-f4ff8c8b4751',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '3aad0a1e-bbfe-4adf-a5c0-77b5fe81548e',
				name: 'Knockout Blow',
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
					defence: 1
				},
				description: '',
				details: 'Requires maul; 4d6+5 damage, and the target is knocked prone and dazed (save ends).',
				damage: '4d6+5 damage',
				category: 1
			},
			{
				id: '13ed6a63-5b1e-4ba0-8de9-e25ef05fdbad',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The bounty hunter subduer deals an extra 2d6 damage on melee attacks against any target it has combat advantage against.',
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

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '3227bc0f-2a36-4729-8307-fa61a9b94866',
		name: 'Cyclops Earthquake Shaman',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: '',
		level: 19,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +21; truesight 6',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: '',
		equipment: 'earthshaker staff; leather armor',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 284,
		initiative: 13,
		ac: 33,
		fortitude: 33,
		reflex: 31,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3d1f95cc-1586-4fef-81df-cde91f34b3b9',
				name: 'Earthshaker Staff',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Force, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4+8 force damage, and the target is dazed until the end of the shaman’s next turn.',
				damage: '2d4+8 force damage',
				category: 1
			},
			{
				id: '741b186d-b195-4b9b-a23a-c0795d67ac30',
				name: 'Fury Quake',
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
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+8 force damage.',
				damage: '2d8+8 force damage',
				category: 1
			},
			{
				id: 'e9669a12-075b-41da-8bc3-1903e08c9aa9',
				name: 'Evil Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 2-0',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'the shaman can designate only one target with its evil eye at a time. The target takes -2 to defenses, and takes 1d6 extra damage when hit by the shaman’s allies (save ends).',
				damage: 'and takes 1d6 extra damage when hit by the shaman’s allies (save ends)',
				category: 3
			},
			{
				id: '59edd89a-1e27-47d5-9c00-837e00b9e6f1',
				name: 'Quake Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '2d8+8 force damage, and the target is knocked prone.',
				damage: '2d8+8 force damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 19 Elite Artillery',
		phenotype: 'Large fey humanoid'
	},
	{
		id: '7b13a81e-f990-494b-baf7-910b679f7a35',
		name: 'Cyclops Rambler Zombie',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: 'undead',
		level: 15,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'chainmail',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 92,
		initiative: 9,
		ac: 27,
		fortitude: 29,
		reflex: 25,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5e47c8c0-006f-49ec-a33b-7c0d60fb7b21',
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
				details: 'Reach 2; 2d8+6 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'cf72d740-4cfb-472c-a60e-99502d5ec414',
				name: 'Double Slam',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'The zombie makes two slam attacks against different targets.; 4d8+6 damage.',
				damage: '4d8+6 damage',
				category: 1
			},
			{
				id: 'fafcca62-22ee-4a94-8727-b3c6bbf26ff6',
				name: 'Undead Eye',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 20',
				attack: null,
				description: '',
				details: 'the cyclops rambler zombie can designate only one target with its undead eye at a time. If it hits the designated creature, the cyclops rambler zombie deals 1d8 extra necrotic damage.',
				damage: 'the cyclops rambler zombie deals 1d8 extra necrotic damage',
				category: 3
			},
			{
				id: 'f15daaa3-9788-4fb5-afab-10dc8e4fdede',
				name: 'Zombie Weakness',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Any critical hit to the cyclops rambler zombie reduces it to 0 hit points instantly.',
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

		info: 'Level 15 Brute',
		phenotype: 'Large fey humanoid (undead)'
	},
	{
		id: 'b2b657ce-9ce0-4fa1-aa2e-6e7ee14b0fdb',
		name: 'Cyclops Reaver',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: '',
		level: 18,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; truesight 6',
		movement: '8',
		alignment: 'Unaligned',
		languages: 'Elven',
		skills: '',
		equipment: 'battleaxe; chainmail; light shield',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 174,
		initiative: 14,
		ac: 34,
		fortitude: 32,
		reflex: 27,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '81005607-3f1e-4a91-8e0f-66dbd7162806',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d12+11 damage.',
				damage: '1d12+11 damage',
				category: 1
			},
			{
				id: '2705f529-97cd-4b60-b065-ed373213f26a',
				name: 'Evil Eye',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Ranged 20',
				attack: null,
				description: '',
				details: 'the cyclops reaver can designate only one target with its evil eye at a time and gains the following effects:',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Soldier',
		phenotype: 'Large fey humanoid'
	},
	{
		id: '501ef982-e637-4c4d-b75f-7360ea02a829',
		name: 'Darkland Voidsoul Specter',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 24,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +24',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 25,
			modifier: 7,
			cost: -1
		},
		hp: 119,
		initiative: 25,
		ac: 36,
		fortitude: 34,
		reflex: 38,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: 'e8fa6405-4e11-42e9-9103-43348beaa947',
				name: 'Spectral Cold',
				keywords: '',
				details: 'aura 1; an enemy that starts its turn in the aura takes 10 cold damage and takes a -2 penalty to all defenses until the start of its next turn.'
			}
		],
		powers: [
			{
				id: 'f355a0fa-f2c0-4036-a16b-fef62719674a',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d12+6 necrotic damage.',
				damage: '2d12+6 necrotic damage',
				category: 1
			},
			{
				id: 'c995fcde-1e74-4d2d-8fc3-b75bf93b10b5',
				name: 'Life Siphon',
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
					bonus: 27,
					defence: 1
				},
				description: '',
				details: '2d12+6 necrotic damage, and the darkland voidsoul specter regains 5 hit points for every creature damaged by the attack.',
				damage: '2d12+6 necrotic damage',
				category: 1
			},
			{
				id: 'cb842c02-6a75-4ab4-bdfe-2ad98f95545a',
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
				details: 'The darkland voidsoul specter becomes invisible until it attacks or until it is hit by an attack. It remains invisible while using life siphon.',
				damage: '',
				category: 3
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
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 24 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '716780bc-eba5-4895-8a68-69569d70600f',
		name: 'Death Squad Assassin',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'shapechanger',
		level: 7,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Bluff +10, Insight +11, Stealth +12',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 61,
		initiative: 11,
		ac: 21,
		fortitude: 18,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9c38098c-1660-4c59-a8cb-b4057fead7b1',
				name: 'Assassin’s Longblade',
				action: {
					action: 1,
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
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'c76ba1df-7077-46f4-93c9-bce491c40fb5',
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
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'the death squad assassin gains combat advantage against the target until the end of the death squad assassin’s next turn.',
				damage: '',
				category: 3
			},
			{
				id: '11cd61e9-a5c8-4250-9513-6cd0f11f7f46',
				name: 'Assassin’s Quarry',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '3d6+8 damage, and ongoing 5 damage (save ends).',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '1d21d2b3-4ee2-454a-a1c4-56fbb4c4dad4',
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
			},
			{
				id: 'a33a5b6d-7f11-46e1-a2f2-dbbc1c417a40',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The death squad assassin deals an extra 2d6 damage against any target it has combat advantage against.',
				damage: 'the death squad assassin deals an extra 2d6 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Lurker',
		phenotype: 'Medium natural humanoid (shapechanger)'
	},
	{
		id: '3a1e0c1e-57e5-4e6d-be45-2ca9fed88e54',
		name: 'Desert Wrath',
		details: '',
		size: 4,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 24,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +19; truesight 5',
		movement: '10',
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
			score: 24,
			modifier: 7,
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 560,
		initiative: 19,
		ac: 37,
		fortitude: 40,
		reflex: 36,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a647711b-c9a1-4381-88b4-b15aed381596',
				name: 'Slam',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fire, Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+10 damage plus 1d10 fire and radiant damage.',
				damage: '2d10+10 damage plus 1d10 fire and radiant damage',
				category: 1
			},
			{
				id: 'fd6e4e9d-2269-4c84-8217-675e2e94bc19',
				name: 'Grinding Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 27,
					defence: 0
				},
				description: '',
				details: 'The desert wrath makes two slam attacks.; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '57ce3ec0-3fa6-401c-8f3f-fea8c53da4c2',
				name: 'Burning Flaywind',
				action: {
					action: 7,
					trigger: 'when the desert wrath hits a target with its slam attack',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Fire, Radiant',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 24,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d12+10 damage and ongoing 10 fire and radiant damage, and the target slides 3 squares and is immobilized (save ends).',
				damage: '2d12+10 damage and ongoing 10 fire and radiant damage',
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 24 Elite Brute',
		phenotype: 'Huge natural animate (construct)'
	},
	{
		id: 'a0ccc6a7-9ef9-40e6-bedf-f93c3f129097',
		name: 'Disciple of Yeenoghu',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +14',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 62,
		initiative: 7,
		ac: 19,
		fortitude: 18,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9461d8de-ca5f-4b5f-854f-b711ee19b338',
				name: 'Sacrificial Dagger',
				action: {
					action: 1,
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
				details: '2d4+5 damage, or 2d4+7 damage while bloodied.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '8b4731c9-44dd-4234-af58-871639177233',
				name: 'Ray of Destruction',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '2d8+5 necrotic damage, or 2d8+10 necrotic damage while bloodied.',
				damage: '2d8+5 necrotic damage',
				category: 1
			},
			{
				id: '175ee071-f73f-4fda-8c5e-941b32bf7ac2',
				name: 'Ruinous Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '3d10+5 fire and necrotic damage, or 3d10+5 fire and necrotic damage while bloodied.',
				damage: '3d10+5 fire and necrotic damage',
				category: 1
			},
			{
				id: '0b7d2cb7-b68f-401a-b883-80fb71eaf91b',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The disciple of Yeenoghu deals an extra 5 damage on melee and ranged attacks against an enemy that has two or more of the disciple’s allies adjacent to it.',
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

		info: 'Level 7 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'f8c0cb9e-d97c-482e-9ba4-9a11f3ac347d',
		name: 'Drow Necromancer',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +9; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +19, Bluff +14, Intimidate +19, Stealth +12',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 142,
		initiative: 10,
		ac: 29,
		fortitude: 25,
		reflex: 28,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: '7ffd548d-8d33-4d71-b5b3-70afc560920f',
				name: 'Orcus’s Rage',
				keywords: '',
				details: 'aura 10; living allies in the aura gain a +2 power bonus to attack rolls and take a -2 penalty to defenses.'
			}
		],
		powers: [
			{
				id: '3147a7c3-6094-4046-b24a-4f3755d08abf',
				name: 'Skull Rod',
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
				details: '1d8+6 necrotic damage.',
				damage: '1d8+6 necrotic damage',
				category: 1
			},
			{
				id: '4c0609a7-9123-43a3-9e48-143b88a1350d',
				name: 'Skull Ray',
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
					defence: 1
				},
				description: '',
				details: '1d6+6 necrotic damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d6+6 necrotic damage',
				category: 1
			},
			{
				id: '47e6a632-0fc6-4cbf-9f4d-93ab599207da',
				name: 'Dark Enervation',
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
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'each enemy in burst; 1d10+6 necrotic damage, the target is pushed 1, and the target is weakened until the end of the necromancer’s next turn.',
				damage: '1d10+6 necrotic damage',
				category: 1
			},
			{
				id: 'b70a6dc5-46eb-4f51-bbbe-91aa76047a70',
				name: 'Voices of Undeath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '3d8+6 necrotic damage, and the target is deafened (save ends). Until the target is no longer deafened, he or she has vulnerable 5 necrotic.',
				damage: '3d8+6 necrotic damage',
				category: 1
			},
			{
				id: 'cb63f66c-d7f3-481c-a7f6-a9501b7a94f8',
				name: 'Zombify',
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
				attack: null,
				description: '',
				details: 'target a cyclops rambler that has been reduced to 0 hit points or fewer. It becomes a cyclops rambler zombie, and is now alive with full hit points (but still prone). Roll initiative for the creature.',
				damage: '',
				category: 3
			},
			{
				id: 'd9cce51c-6a40-45cb-86ee-49c4d2ba7908',
				name: 'Life Leech',
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
				details: 'Each ally within 10 takes 5 damage, and the drow necromancer regains hit points equal to the total damage dealt.',
				damage: 'each ally within 10 takes 5 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Controller (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'bc5fb0f3-4fbf-42d3-9ca5-6e5e8a1daf03',
		name: 'Elderwood Falcon',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: '',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '2, fly 6 (hover)',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 70,
		initiative: 9,
		ac: 20,
		fortitude: 17,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd61d6b12-fb89-4490-9f39-a49f6e0fd253',
				name: 'Talon',
				action: {
					action: 1,
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
				details: '2d4+4 damage, and the target slides 1 square.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: '2acc3197-6229-4fb6-bffd-2b3bbfe7559e',
				name: 'Swoop',
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
				details: 'The elderwood falcon shifts 1 square, makes a talon attack, then shifts 1 square.; 1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural animate'
	},
	{
		id: '698f11b8-f56b-4e89-81ac-2506156bc4cd',
		name: 'Githzerai Psionic Echo',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Githzerai',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 92,
		initiative: 9,
		ac: 25,
		fortitude: 20,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ceb351e3-480b-4bf2-a176-c03aafe6a1b4',
				name: 'Unarmed Strike',
				action: {
					action: 1,
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
				id: 'af1c0285-8b82-4abc-a3a4-bd9693f5d399',
				name: 'Lesser Mindstrike',
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
					bonus: 14,
					defence: 3
				},
				description: '',
				details: '1d10+9 psychic damage.',
				damage: '1d10+9 psychic damage',
				category: 1
			},
			{
				id: '1acd35e2-90d5-4ff3-8118-a16ff2526cee',
				name: 'psionic Strike',
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
				details: '2d8+9 damage plus 1d8 psychic damage; until the end of its next turn, the target has vulnerable 10 psychic.',
				damage: '2d8+9 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '22c27322-bce8-4b9b-8d77-94fdc50b9016',
				name: 'Iron Mind',
				action: {
					action: 5,
					trigger: 'when the githzerai psionic echo would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githzerai psionic echo gains a +2 bonus to all defenses until the end of its next turn.',
				damage: 'The githzerai psionic echo gains a +2 bonus to all defenses until the end of its next turn',
				category: 5
			},
			{
				id: 'b4e57546-c174-4ca0-a8b4-ef48f20bf8fb',
				name: 'Unstable Manifestation',
				action: {
					action: 4,
					trigger: 'when the githzerai psionic echo takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githzerai psionic echo becomes insubstantial until the end of its next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Soldier',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: 'f4307217-f2cf-45e5-baba-633f24b4d185',
		name: 'Ironwood Hound',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: '',
		level: 6,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Intimidate +7',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 69,
		initiative: 6,
		ac: 22,
		fortitude: 18,
		reflex: 17,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd97049e4-edde-4ec4-860b-4aed9daf0949',
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
				details: '2d6+2 damage, and the target is marked until the end of the ironwood hound’s next turn.',
				damage: '2d6+2 damage',
				category: 1
			},
			{
				id: 'fa7e712a-99b0-4f1a-b38b-a10daed9fefa',
				name: 'Drive Back',
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
					defence: 1
				},
				description: '',
				details: '2d6+2 damage, and the target is pushed 2 squares and the ironwood hound can shift 2 squares. The ironwood hound must end its shift adjacent to the target’s new position.',
				damage: '2d6+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Soldier',
		phenotype: 'Medium natural animate'
	},
	{
		id: '242e36cd-1fe1-4f53-b81b-99bb64d05f5c',
		name: 'Lost One Kidnapper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +9',
		equipment: 'leather armor; longsword',
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
			score: 13,
			modifier: 1,
			cost: 3
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 79,
		initiative: 6,
		ac: 23,
		fortitude: 20,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bd6dea07-a5df-4936-a613-4a744457a1c6',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '55aef852-abc4-4f8a-8e47-977112807ce7',
				name: 'Grab and Go',
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
					defence: 1
				},
				description: '',
				details: '1d8+5 damage, and the Lost One kidnapper slides 2 squares, then slides the target 2 squares. The target must end its slide adjacent to the kidnapper’s new position.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '6af2831d-0828-417f-b90a-12fe73c0d3a4',
				name: 'Kidnap',
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
				details: 'When the Lost One kidnapper hits a target with its Grab and Go ability, the distance both creatures slide is increased to 4 squares.',
				damage: 'the distance both creatures slide is increased to 4 squares',
				category: 4
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9b2b38a0-4746-4ab1-ac2f-6140c59fc3eb',
		name: 'Lost One Underboss',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +7',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Dwarven',
		skills: 'Bluff +12, Intimidate +12, Stealth +11',
		equipment: 'dagger; leather armor',
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
			score: 14,
			modifier: 2,
			cost: 5
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 87,
		initiative: 9,
		ac: 22,
		fortitude: 19,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '57858d53-63b8-4abd-9612-4b5c54e81a8b',
				name: 'Underboss’s Presence',
				keywords: '',
				details: 'aura 2; at the start of each ally’s turn, if that ally is within the aura and the Lost One underboss’s line of sight, the ally gains 4 temporary hit points.'
			}
		],
		powers: [
			{
				id: '87323f17-668d-4030-ad36-88d1ee429a21',
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
				details: '2d4+4 damage.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: 'f9a182c4-d460-46c7-a48b-1694621815ad',
				name: 'Storm of Daggers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'area burst 1 within 10',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'Requires a number of daggers equal to number of enemies in burst; targets enemies the Lost One Underboss can see; 2d4+4 damage.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: '72e4f3a0-b7eb-47ff-8ccd-ab44c8fc9312',
				name: 'Get Into Position',
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
				details: 'One ally within 10 squares shifts 1 square.',
				damage: 'One ally within 10 squares shifts 1 square',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '592d8f1f-2937-4937-90ae-12b7a9e89f6f',
		name: 'Mindscrambler',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 8,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Primordial',
		skills: 'Intimidate +12',
		equipment: '',
		category: '',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 89,
		initiative: 9,
		ac: 22,
		fortitude: 20,
		reflex: 20,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '126610a1-bbf9-4c74-93e9-db52c92b95f4',
				name: 'Chaos Touch',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d6+7 psychic damage.',
				damage: '1d6+7 psychic damage',
				category: 1
			},
			{
				id: '2201df7b-9493-4d5e-b5bd-625a11d71d07',
				name: 'Scrambled Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: '1d6+7 psychic damage, and the target makes a melee basic attack against one of its adjacent allies.',
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
				id: '11e264d5-7a42-4b0c-94e2-14414c0c9597',
				name: 'Dizzying Touch',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '3d6+7 psychic damage, and the target slides 3 squares and is dazed (save ends).',
				damage: '3d6+7 psychic damage',
				category: 1
			},
			{
				id: '3a62a7de-0be6-4d24-8a55-301ff5fe98cd',
				name: 'Misdirection',
				action: {
					action: 5,
					trigger: 'when an enemy within 10 squares moves or shifts',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'the target is pushed 3 squares and may not continue its movement.',
				damage: 'the target is pushed 3 squares and may not continue its movement',
				category: 5
			},
			{
				id: 'e98de6f6-7129-4ac7-9d22-968a62a00615',
				name: 'Trace Chance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the next melee attack made against the target gains a +5 power bonus to the attack roll and, if it hits, it is automatically a critical hit.',
				attack: null,
				description: '',
				details: 'Range 5; no attack roll required',
				damage: 'Range 5',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Skirmisher',
		phenotype: 'Medium elemental animate'
	},
	{
		id: '60554d06-19f9-4eec-b7bc-449caafa3613',
		name: 'Ravenous Attack Dog',
		details: '',
		size: 1,
		origin: 4,
		type: 1,
		keywords: '',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Intimidate +6',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 80,
		initiative: 7,
		ac: 21,
		fortitude: 19,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '48412a8f-dffc-4824-bd1f-0c05e24625e6',
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
				details: '1d4+7 damage.',
				damage: '1d4+7 damage',
				category: 1
			},
			{
				id: '54877922-5ecd-4c1d-9b70-9d6235526c44',
				name: 'Tripping Lunge',
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
					defence: 2
				},
				description: '',
				details: '2d4+9 damage, and the target is knocked prone.',
				damage: '2d4+9 damage',
				category: 1
			},
			{
				id: '62cca011-39bb-4799-9908-3d60aea42060',
				name: 'Drag off Prey',
				action: {
					action: 5,
					trigger: 'when an adjacent opponent moves away',
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
				details: '1d4+3 damage, and the ravenous attack dog slides 1 square, then slides the target 1 square. The target must end its slide adjacent to the attack dog’s new position.',
				damage: '1d4+3 damage',
				category: 5
			},
			{
				id: '2c490e10-5673-45b0-86f9-d03cbf170b12',
				name: 'Circle for the Kill',
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
				details: 'The ravenous attack dog shifts 2 squares.',
				damage: 'The ravenous attack dog shifts 2 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Small natural beast'
	},
	{
		id: '096032d2-4d96-44bd-8358-38684aafca77',
		name: 'Ruin-Touched Beastcaller',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Religion +11',
		equipment: 'hide armor; javelin',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 81,
		initiative: 7,
		ac: 21,
		fortitude: 19,
		reflex: 19,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '70df594a-e9ba-4e4a-bfc0-3f1ef6261d23',
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
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: 'a4b94c7e-cf1a-45bc-9340-7d7b49a963ff',
				name: 'Javelin',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: '688c18b8-d6c8-4dc8-bf43-fd756ae73d25',
				name: 'Murderous Flock',
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
				details: 'A flock of carrion birds (crows, ravens, and the like) appear from nowhere to descend briefly upon the battlefield, screeching and clawing: Burst 3 within 20; 2d4+5 damage, plus the target is blinded and takes ongoing 5 damage (save ends both). Miss: Half damage, and no ongoing damage or blindness.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '5abaa7b2-dfed-4be4-afd5-57fd4ef528ea',
				name: 'Erupting Swarm',
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
					defence: 1
				},
				description: '',
				details: 'Rats, serpents, and insects boil from the earth, ravaging all in their path: Burst 3 within 10 (targets on the ground only); 2d4+5 damage, plus the target is immobilized and takes ongoing 5 damage (save ends both). Miss: Half damage, and no ongoing damage or immobilization.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: 'cd68076a-e79e-4c02-9d98-cb16b0f821f1',
				name: 'Against the Tide',
				action: {
					action: 7,
					trigger: 'when the beastcaller hits with an area attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Divine',
				condition: 'but only once per round',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: 'The beastcaller may choose one of the targets hit by its area attack; the target slides up to 3 squares or falls prone (beastcaller’s choice).',
				damage: 'the target slides up to 3 squares or falls prone (beastcaller’s choice)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c7b806ef-f276-46fa-865f-0b52e7e1a8f8',
		name: 'Ruin-Touched Bloodwalker',
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
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +13, Religion +10, Stealth +14',
		equipment: 'hide armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 95,
		initiative: 11,
		ac: 23,
		fortitude: 20,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0c890053-7535-4d3d-afc1-77dfa325a1c0',
				name: 'Jagged Sickle',
				action: {
					action: 1,
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
				details: '(or +24 if the bloodwalker attacks immediately after using its bloodwalk teleport ability)2d6+5 damage (plus 1d6 on a crit).',
				damage: '(or +24 if the bloodwalker attacks immediately after using its bloodwalk teleport ability)2d6+5 damage (plus 1d6 on a crit)',
				category: 1
			},
			{
				id: 'a9181743-7699-4ac2-ab00-e12984b971f3',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '(or +24 if the bloodwalker attacks immediately after using its bloodwalk teleport ability)1d8+5 damage.',
				damage: '(or +24 if the bloodwalker attacks immediately after using its bloodwalk teleport ability)1d8+5 damage',
				category: 1
			},
			{
				id: '9f3f3e6e-fea0-404e-a916-54682adf2a1c',
				name: 'Bloodwalk',
				action: {
					action: 2,
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
				details: 'When the bloodwalker is first bloodied in an encounter, keep track of the square in which he was bloodied, and of the foe who bloodied him. (If using a battlemap, a token or even a scrap of paper can be used to mark the square.) Until the end of the encounter, the bloodwalker can use its bloodwalk ability to teleport either to the square in which he was bloodied, or to any unoccupied square adjacent to the foe who bloodied him, up to a maximum distance of 20 squares.',
				damage: 'up to a maximum distance of 20 squares',
				category: 2
			},
			{
				id: 'b2169adb-8634-4dd0-a379-b0dc99b85c71',
				name: 'Blood Rage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a bloodied bloodwalker attacks the foe who bloodied it, it deals an additional 1d6 damage.',
				damage: 'it deals an additional 1d6 damage',
				category: 0
			},
			{
				id: '53951cc8-8816-47bd-9d0d-ba54c95ebfdd',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The bloodwalker deals an extra 5 damage on melee attacks against an enemy that has two or more of the bloodwalker’s allies adjacent to it.',
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

		info: 'Level 9 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'eec366f4-ca2f-472d-b9d4-584c33d34888',
		name: 'Slaughterfang Hyena',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '8',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 71,
		initiative: 8,
		ac: 20,
		fortitude: 19,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62deda42-5314-4c44-9b62-ba9040024e2e',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'bacb96f8-3950-4389-9ae0-4ea9148650fa',
				name: 'Harrier',
				action: null,
				keywords: '',
				condition: '',
				range: 'If a slaughterfang is adjacent to an enemy, all other creatures have combat advantage against that enemy when making melee attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'b67ff99b-ce02-43f0-b79a-05f6bda05ff4',
				name: 'Pack Attack',
				action: null,
				keywords: 'Mount',
				condition: '',
				range: 'The slaughterfang hyena deals an extra 5 damage on melee attacks against an enemy that has two or more of the hyena’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '41ffcf8c-0928-4566-bc38-e278068e082b',
				name: 'Ravaging Charge',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'when mounted by a friendly rider of 6th level or higher who also has the pack attack trait',
				range: '',
				attack: null,
				description: '',
				details: 'When making a charge attack, the slaughterfang hyena and its rider both deal extra damage as per their pack attack power, even if they have no other allies adjacent to the foe. If they do have at least one other ally adjacent to the foe, their pack attack deals an extra point of damage (that is, 6 rather than 5).',
				damage: 'the slaughterfang hyena and its rider both deal extra damage as per their pack attack power',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Large natural beast'
	},
	{
		id: '4732f4cb-e430-439e-916d-540fec5023c0',
		name: 'Stoneform Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 24,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6 can’t shift',
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
			score: 27,
			modifier: 8,
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 8,
		ac: 37,
		fortitude: 37,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a646aa2c-2417-46a3-869a-d1661b89e0cf',
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
				details: 'Reach 2; 5 damage, and the target slides 4 squares.',
				damage: '5 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 24 Minion',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'c00bdd20-ff98-417e-899b-f882d3b3d1b3',
		name: 'Stonewalker Spirit',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'earth',
		level: 7,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: 'fly 6 (hover)',
		alignment: 'Unaligned',
		languages: 'Abyssal, Primordial',
		skills: 'Stealth +11',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 45,
		initiative: 10,
		ac: 21,
		fortitude: 19,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1bfe4682-4f8d-4771-9fd1-32f40fc8ea4b',
				name: 'Spectral Grasp',
				action: {
					action: 1,
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
					defence: 2
				},
				description: '',
				details: '2d4+7 damage.',
				damage: '2d4+7 damage',
				category: 1
			},
			{
				id: 'c3b654df-45f9-474d-82c3-5553589da5c7',
				name: 'Petrifying Touch',
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
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'the target is slowed (save ends). First Failed Save: The target is immobilized instead of slowed (save ends). Second Failed Save: The target is petrified (no save), and is considered to be a statue for the purposes of the possess statue ability.',
				damage: '',
				category: 1
			},
			{
				id: '1d033005-44d3-42a3-beb5-aa1ae3616910',
				name: 'Possess Statue',
				action: {
					action: 7,
					trigger: 'when entering the same space as a statue',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The stonewalker spirit assumes the form of a possessed statue. Use the possessed statue stat block instead of the stonewalker spirit’s stat block. The spirit can leave the statue as a free action.',
				damage: '',
				category: 5
			},
			{
				id: '4cd8cd5d-f072-4d83-9ad2-826e95a8a0b2',
				name: 'Flee the Form',
				action: {
					action: 7,
					trigger: 'when a possessed statue is reduced to 0 hit points',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The stonewalker spirit takes 16 damage (ignores insubstantial) as it reverts to its normal form, then moves up to its speed.',
				damage: 'the stonewalker spirit takes 16 damage (ignores insubstantial) as it reverts to its normal form',
				category: 5
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, petrification, poison',
		tactics: '',

		info: 'Level 7 Lurker',
		phenotype: 'Medium elemental beast (earth)'
	},
	{
		id: '05bcbc1c-9312-4d96-9d71-94245df6ec59',
		name: 'Thorn',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Bluff +9, Insight +12, Nature +12, Stealth +14, Thievery +14',
		equipment: 'crossbow bolts (20); hand crossbow; leather armor; longsword; net',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 388,
		initiative: 11,
		ac: 25,
		fortitude: 21,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '690a94dd-f902-4d3c-a0e3-65526b29aca3',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '463f94e1-95b9-493d-9a11-929163c6ac70',
				name: 'Hand Crossbow',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: 'e226c838-a9eb-4e5f-ba3e-8e50cbadb609',
				name: 'Double Bolts',
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
				details: 'Thorn makes two hand crossbow attacks.',
				damage: '',
				category: 1
			},
			{
				id: '759a02fe-9fb4-4aaf-a5cc-20d602d4fa11',
				name: 'Gripping Net',
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
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'Requires net; target is restrained (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '2737a1a4-9234-4259-aa71-8fcf5f0b7bf6',
				name: 'Pepper Bomb',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: 'Requires pepper bomb; target is blinded (save ends).',
				damage: '',
				category: 3
			},
			{
				id: '5049c41a-aa29-44da-939b-8d82a551d85a',
				name: 'Retaliatory Shot',
				action: {
					action: 4,
					trigger: 'when hit by a ranged or area attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Thorn makes a hand crossbow attack against the target that hit him.',
				damage: '',
				category: 5
			},
			{
				id: '1fdae629-4400-4d72-84c4-dad9eaa39dd1',
				name: 'Bolt Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'area burst 2 within 10',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Requires hand crossbow; 3d6+8 damage.',
				damage: '3d6+8 damage',
				category: 1
			},
			{
				id: '8f7760a6-1e9c-4a36-894a-c98fd495669b',
				name: 'Desperate Bolt Storm',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Thorn’s bolt storm recharges, and he uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '6968f701-0952-4efc-8641-f5aecadbbe2b',
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
				details: 'Thorn can reroll an attack roll. He must use the second roll, even if it is lower.',
				damage: '',
				category: 4
			},
			{
				id: '5477a42d-0c1b-42ad-b513-c5ac743446ba',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Thron ignores difficult terrain when he shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Solo Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '8d60810e-11a0-45a9-9d8f-b506dbb23602',
		name: 'Troll Timber Slinger',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12',
		movement: '8',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: 'Athletics +15, Endurance +15',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 109,
		initiative: 10,
		ac: 24,
		fortitude: 25,
		reflex: 23,
		will: 21,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '30fe7c81-dfbf-43fc-9f2f-74c6d68a9c2d',
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
				details: 'Reach 2; 2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'cb290192-0417-4744-9ac8-5b5d40aee372',
				name: 'Timber Toss',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Area burst 1 within 15',
				attack: {
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '2d6+5 damage. If you hit the creature in the origin square of the burst, that creature takes 1d6 extra damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'f13cb0c0-24be-49ca-a1f2-5bad2226110d',
				name: 'Timber Swing',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Reach 3; 4d8+3 damage, and the target is pushed 3 squares.',
				damage: '4d8+3 damage',
				category: 1
			},
			{
				id: 'ef97463a-4011-4fc1-848a-228c5678013a',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Artillery',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'eeb6a8ee-9ffb-435a-9545-c90ffff1c603',
		name: 'Wicked Fang Guard',
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
		senses: 'Perception +4; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: 'greatsword; hide armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 74,
		initiative: 7,
		ac: 22,
		fortitude: 19,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6f4a23e8-c3e9-4201-951e-b86220f73558',
				name: 'Shadar-Kai',
				action: {
					action: 1,
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
				details: '1d12+7 damage (crit 1d12 + 19), or 1d12 + 9 damage (crit 1d12 + 21) while bloodied, and the target is marked until the end of the gnoll guard’s next turn.',
				damage: '1d12+7 damage (crit 1d12 + 19)',
				category: 1
			},
			{
				id: '925dfd13-e867-4dd4-80e7-dbde574f70c3',
				name: 'Pinning Attack',
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
					defence: 1
				},
				description: '',
				details: 'Requires greatsword; 1d12+7 damage (crit 1d12 + 19), or 1d12 + 9 damage (crit 1d12 + 21) while bloodied, and the target is immobilized until the end of the gnoll guard’s next turn.',
				damage: '1d12+7 damage (crit 1d12 + 19)',
				category: 1
			},
			{
				id: '7cd3425f-d854-4f12-afff-3f5353b22ffe',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll guard deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll guard’s allies adjacent to it.',
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
		id: 'ef19ba28-e2ce-4a3d-b48d-299410cc77a3',
		name: 'Wicked Fang Keeper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +11',
		equipment: 'hide armor',
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
		initiative: 9,
		ac: 24,
		fortitude: 20,
		reflex: 23,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '76a93ade-b38e-4e50-a08c-852aac03cf25',
				name: 'Shadar-Kai',
				action: {
					action: 1,
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
				details: '2d6+5 damage (crit 1d6+17), or 2d6+7 damage (crit 1d6+19) while bloodied.',
				damage: '2d6+5 damage (crit 1d6+17)',
				category: 1
			},
			{
				id: '48a06d5a-d3a2-4993-a0ad-ee0d6910c852',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage (crit 1d6+17), or 2d6+7 damage (crit 1d6+19) while bloodied.',
				damage: '2d6+5 damage (crit 1d6+17)',
				category: 1
			},
			{
				id: 'b88d9743-c3a8-45a2-8e7a-1e69ae1bf87f',
				name: 'Rain of Blades',
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
				details: 'The gnoll keeper makes three handaxe attacks, each of which must be against a different target.',
				damage: '',
				category: 1
			},
			{
				id: '6da36aff-8ef2-4e51-b81f-eb06819171ad',
				name: 'No Escape This Time',
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
				details: 'Requires short sword; 2d6+5 damage (crit 1d6 + 17), or 2d6 + 7 damage (crit 1d6 + 19) while bloodied and the target is knocked prone.',
				damage: '2d6+5 damage (crit 1d6 + 17)',
				category: 1
			},
			{
				id: '369624bc-a355-4cf2-9902-1d6d59eb5167',
				name: 'Keeper’s Shackles',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'Targets adjacent prone creature; target is restrained (until escape).',
				damage: '',
				category: 3
			},
			{
				id: 'f5194f74-9e85-44b5-bbbf-d8b6026bc77d',
				name: 'Caltrops',
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
				details: 'The gnoll keeper can designate a 1-square burst area within 5 squares; that area is filled with caltrops. Until the end of the encounter, any creature that enters a square filled with caltrops without treating it as difficult terrain takes 1d6 + 4 damage.',
				damage: 'any creature that enters a square filled with caltrops without treating it as difficult terrain takes 1d6 + 4 damage',
				category: 3
			},
			{
				id: '0bab8029-15ae-4259-825a-386e21b8d483',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll keeper deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll keeper’s allies adjacent to it.',
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

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '867e7ab1-5dc2-4fbe-96f3-f0191e79366d',
		name: 'Wicked Fang Lasher',
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
		senses: 'Perception +7; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Stealth +14',
		equipment: 'hide armor',
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
		hp: 93,
		initiative: 11,
		ac: 23,
		fortitude: 21,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2679badb-0d3e-4b8c-8a46-c37bf6c17f11',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+4 damage (or 1d8 + 6 damage while bloodied) and ongoing 5 damage (save ends).',
				damage: '1d8+4 damage (or 1d8 + 6 damage while bloodied) and ongoing 5 damage (save ends)',
				category: 1
			},
			{
				id: 'd0af7671-2912-473a-bb14-46ed95165511',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Requires barbed whip; reach 2; 3d8+7 damage (or 3d8 + 9 damage while bloodied) and ongoing 10 damage (save ends).',
				damage: '3d8+7 damage (or 3d8 + 9 damage while bloodied) and ongoing 10 damage (save ends)',
				category: 1
			},
			{
				id: '31e728c3-dd7e-4421-9013-7a5321e9ae8a',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'Requires barbed whip; reach 2; 2d8+5 damage (or 2d8 + 7 damage while bloodied) and the target slides 3 squares.',
				damage: '2d8+5 damage (or 2d8 + 7 damage while bloodied) and the target slides 3 squares',
				category: 1
			},
			{
				id: '49c92ff0-7e61-4285-bed5-177878e0070d',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll lasher deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll lasher’s allies adjacent to it.',
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

		info: 'Level 9 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c7cd8f36-829f-49d7-bcff-288cbabf9eca',
		name: 'Wicked Fang Mauler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Athletics +13',
		equipment: 'greatsword; hide armor',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 94,
		initiative: 4,
		ac: 19,
		fortitude: 20,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a06cb410-3fb4-4421-ba73-64312134800a',
				name: 'Shadar-Kai Greatsword',
				action: {
					action: 1,
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
				details: '1d12+8 damage (crit 1d12+20), or 1d12+10 damage (crit 1d12+22) while bloodied.',
				damage: '1d12+8 damage (crit 1d12+20)',
				category: 1
			},
			{
				id: '5605c16d-93a5-4a83-bde4-aed5b081766e',
				name: 'Backhand',
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
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6+8 damage, or 1d6+10 damage while bloodied, and the target is knocked prone.',
				damage: '1d6+8 damage',
				category: 3
			},
			{
				id: '72045ee5-d02d-4fbc-8eb9-ea7c37698f67',
				name: 'Beast Back',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d12+8 damage (crit 1d12+20), or 1d12+10 damage (crit 1d12+22) while bloodied, and the target is pushed 2 squares.',
				damage: '1d12+8 damage (crit 1d12+20)',
				category: 1
			},
			{
				id: '62fdf9d9-a01e-46fd-a8cb-45d103f9b516',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll mauler deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll mauler’s allies adjacent to it.',
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

		info: 'Level 7 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd7078d2c-35e9-4a6f-a648-f277c70139a3',
		name: 'Wicked Fang Recruit',
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
		senses: 'Perception +5; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: 'greatsword; hide armor',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 7,
		ac: 22,
		fortitude: 20,
		reflex: 18,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '771f0a4a-6dbe-4828-98ca-c7726af8578d',
				name: 'Shadar-Kai Greatsword',
				action: {
					action: 1,
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
				details: '8 damage, or 10 damage while bloodied.',
				damage: '8 damage',
				category: 1
			},
			{
				id: 'cb5c787b-f603-4441-97e4-136760a6a5ad',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll recruit deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll recruit’s allies adjacent to it.',
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

		info: 'Level 8 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '244d8f0e-f9ef-417e-a4ba-dedf43dc886a',
		name: 'Wicked Fang Scout',
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
		senses: 'Perception +10; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: 'crossbow bolts (20); hand crossbow; hide armor',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 77,
		initiative: 7,
		ac: 21,
		fortitude: 19,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '57dfe09f-730d-4418-bce6-aa1ca3811d62',
				name: 'Shadar-Kai Short Sword',
				action: {
					action: 1,
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
				details: '1d6+9 damage (crit 1d6+15), or 1d6+11 damage (crit 1d6+17) while bloodied.',
				damage: '1d6+9 damage (crit 1d6+15)',
				category: 1
			},
			{
				id: 'c3ea19fc-f8db-4525-be8c-e3045c6c4b55',
				name: 'Hand Crossbow',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d6+9 damage, or 1d6+11 damage while bloodied.',
				damage: '1d6+9 damage',
				category: 1
			},
			{
				id: '7fa30d62-d6a5-419e-aa31-e4193fad2c6a',
				name: 'Cowardly Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'ranged 10/20',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Requires hand crossbow; 1d6+9 damage, or 1d6+11 damage while bloodied; the gnoll scout can shift 2 squares both before and after making the attack.',
				damage: '1d6+9 damage',
				category: 1
			},
			{
				id: '6600df50-50ac-474f-a4c9-92c3efc244ce',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll scout deals an extra 5 damage on melee and ranged attacks against an enemy that has two or more of the scout’s allies adjacent to it.',
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

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a9a3579a-c7d4-4fd4-b1c6-b8a504714936',
		name: 'Wicked Fang Sentry',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: '',
		equipment: 'greatsword; hide armor',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 80,
		initiative: 6,
		ac: 23,
		fortitude: 20,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6faae0b6-0dc1-4f34-892d-49ebb001f1a4',
				name: 'Shadar-Kai Greatsword',
				action: {
					action: 1,
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
				details: '1d12+5 damage (crit 1d12 + 17), or 1d12 + 7 damage (crit 1d12 + 19) while bloodied, and the target is marked until the end of the gnoll sentry’s next turn.',
				damage: '1d12+5 damage (crit 1d12 + 17)',
				category: 1
			},
			{
				id: '14c4d63a-f575-46e5-869b-f261b499357e',
				name: 'Defend the Pack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d12+5 damage, or 1d12 + 7 damage while bloodied, and the target is marked until the end of the gnoll sentry’s next turn.',
				damage: '1d12+5 damage',
				category: 1
			},
			{
				id: '4eef51fd-b060-4192-9cfb-3733a817ae24',
				name: 'Defensive Lure',
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
				details: 'The gnoll sentry shifts 3 squares, then pulls all targets it has marked 3 squares.',
				damage: 'The gnoll sentry shifts 3 squares',
				category: 2
			},
			{
				id: '6a706cbe-cbbc-46bb-89f7-7e22542b1cb8',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll sentry deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll sentry’s allies adjacent to it.',
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

		info: 'Level 7 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '9baac3c7-9353-4435-b62c-2d6bd091aa1e',
		name: 'Wicked Fang Warmaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 8,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +7; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +10',
		equipment: 'hide armor; wicked fang',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 107,
		initiative: 6,
		ac: 20,
		fortitude: 20,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '72bb8101-fdf2-4e70-86ab-fbe9efc7220e',
				name: 'Warmaster’s Aura',
				keywords: '',
				details: 'aura 5; the gnoll warmaster gains a +1 bonus to AC and all defenses for each ally within the aura (maximum +5)'
			}
		],
		powers: [
			{
				id: '69e0b8d7-98c4-43ef-b2be-11d254429ff2',
				name: 'Wicked Fang',
				action: {
					action: 1,
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
				details: '2d8+8 damage (crit 3d8+24), or 2d8+10 (crit 3d8+26) damage while bloodied.',
				damage: '2d8+8 damage (crit 3d8+24)',
				category: 1
			},
			{
				id: '17554e62-d0a4-40d6-b596-d5e892e414b1',
				name: 'Forward the Wicked Fang',
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
				details: 'Requires Wicked Fang; 4d8+8 damage (crit 3d8 + 40), or 4d8 + 10 damage (crit 3d8 + 42) while bloodied, and all gnoll allies within the warmaster’s aura make a basic attack; see also pack attack.',
				damage: '4d8+8 damage (crit 3d8 + 40)',
				category: 1
			},
			{
				id: '73855f58-b898-407d-9613-fe4019903869',
				name: 'Pack Attack',
				action: null,
				keywords: '',
				condition: '',
				range: 'The gnoll warmaster deals an extra 5 damage on melee attacks against an enemy that has two or more of the gnoll warmaster’s allies adjacent to it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'bbd3fb04-ee30-459f-acd4-77c5ff754276',
				name: 'Wicked Fang Power',
				action: {
					action: 7,
					trigger: 'when an attack with the weapon keyword hits',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The target also takes ongoing 13 damage (save ends).',
				damage: 'the target also takes ongoing 13 damage (save ends)',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Brute (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '7b7f65b6-4b59-4073-9fe5-d8e4bde66c37',
		name: 'Windrage Harpy',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14',
		movement: '6, fly 8 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: '',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 118,
		initiative: 12,
		ac: 27,
		fortitude: 27,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: 'dfa281b1-5e5c-452f-9826-382eb2031a8a',
				name: 'Windrage Song',
				keywords: '',
				details: '(Acid) aura 10; an enemy that starts its turn in the aura takes 10 acid damage (deafened creatures take 5 acid damage).'
			}
		],
		powers: [
			{
				id: 'dffb3387-d788-4be4-b206-8d40a424a8f4',
				name: 'Claw',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '2d8+6 acid damage.',
				damage: '2d8+6 acid damage',
				category: 1
			},
			{
				id: '403aa1d8-0845-40d2-b7d7-c3433bb87950',
				name: 'Acid Gale',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '2d8+6 acid damage, and the target is blinded (save ends).',
				damage: '2d8+6 acid damage',
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

		info: 'Level 15 Artillery',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '8a64be5a-c5f1-4485-b3c4-a8c30bda2806',
		name: 'Corroded Helmed Horror',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: 'construct',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '6, fly 6 (clumsy)',
		alignment: 'Unaligned',
		languages: 'Common, Primordial',
		skills: 'Insight +15',
		equipment: 'greatsword',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 112,
		initiative: 10,
		ac: 27,
		fortitude: 23,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '91b992be-66fd-4a5a-bfb3-5294f43efd3c',
				name: 'Elemental Greatsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon, Cold, Fire, Lightning or Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage plus 1d10 cold, fire lightning, or thunder damage (helmed horror’s choice).',
				damage: '1d10+7 damage plus 1d10 cold',
				category: 1
			},
			{
				id: '72589fac-cd34-4e63-83db-c5809f090819',
				name: 'Blade Sweep',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon, Cold, Fire, Lightning or Thunder',
				condition: '',
				range: '',
				attack: {
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'The helmed horror makes an elemental greatsword attack against two different targets within reach.; 4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: 'a344b469-f91a-4501-9fe7-21a201f07c48',
				name: 'Tactical Step',
				action: {
					action: 7,
					trigger: 'when the helmed horror hits with an opportunity attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The helmed horror shifts 2 squares.',
				damage: 'The helmed horror shifts 2 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'charm, disease, fear, poison, sleep',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium elemental animate (construct)'
	},
	{
		id: 'd42ffc92-8783-4f4b-aae9-24a4fe0f1d92',
		name: 'Darkpact Ghoul Initiate',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +16',
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
		hp: 264,
		initiative: 13,
		ac: 29,
		fortitude: 27,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '36dd3e4d-c444-44b5-b90a-c1a11e662991',
				name: 'Nauseating Stench',
				keywords: '',
				details: 'aura 6; a living creature that enters or starts its turn in the aura takes a –2 penalty to attack rolls, skill checks, and ability checks.'
			}
		],
		powers: [
			{
				id: 'd1b220a3-0ed0-4f16-9e66-25661f35bf80',
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
				details: '2d10+4 damage, and the target is immobilized (save ends).',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: 'eb26efaa-b8d7-4f9d-b008-7bf9e316a5ad',
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
				id: '37ab049d-e1aa-4757-947a-150b80d5a68a',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Targets a bloodied creature; 2d12+6 damage or 3d12+6 damage and weakened (save ends) against an immobilized target.',
				damage: '2d12+6 damage or 3d12+6 damage and weakened (save ends) against an immobilized target',
				category: 1
			},
			{
				id: 'b0b2768f-4a62-4d2a-8239-5ecee2dabd06',
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
				details: 'The ghoul teleports up to 6 squares. Each enemy adjacent to the ravenous ghoul after it teleports is dazed until the end of the ravenous ghoul’s next turn.',
				damage: 'The ghoul teleports up to 6 squares',
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

		info: 'Level 13 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'ac39ab4a-5efb-4783-a50a-5f2ad45548be',
		name: 'Denva',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +4; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech',
		skills: 'Athletics +15, Insight +9, Intimidate +14',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 206,
		initiative: 7,
		ac: 28,
		fortitude: 23,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '95980142-7618-4d77-b107-650db2f79533',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'bab40826-ceb9-42aa-9a4d-59306ff68f50',
				name: 'Whirling Slashes',
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
				details: 'Denva makes two longsword attacks. Each one that hits also slides the target 2 squares.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'ce758026-ed39-4310-b575-78ebcd2e64b5',
				name: 'Crushing Vice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '2d8+6 damage, and one ally adjacent to the target can make a melee basic attack against it as a free action, adding +4 to the damage roll.',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'beaf265e-cb74-485e-8c77-df95c269f3ca',
				name: 'Aberrant Howl',
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
				details: '2d8+6 damage, and Denva and one ally within 5 squares regain 15 hit points. This power can bring a creature reduced to 0 hp back to life.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'bbc00ace-438c-4ce5-b72f-c16689763f4f',
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
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: 'one ally takes a move action as a free action.',
				damage: '',
				category: 2
			},
			{
				id: 'e8f75f16-db95-4b1b-b6ac-1d16de455265',
				name: 'Slimy Skin',
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
				details: 'If Denva is adjacent to an enemy, she shifts to any other square adjacent to that enemy. She can also use this power with the escape action, gaining +2 to the check to escape. If she escapes, she can shift 1 square.',
				damage: 'gaining +2 to the check to escape',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '05de46f0-720c-4f2a-9f5a-a65596e91afc',
		name: 'Destrachan Farspeaker',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: 'blind',
		level: 11,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; blindsight 10',
		movement: '6, climb 4',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: 'Bluff +9, Stealth +14',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 117,
		initiative: 9,
		ac: 25,
		fortitude: 24,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0c572e63-c907-4fff-a505-e89acff2a194',
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
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'd604846a-42da-4bb4-a48e-4aa90157d5ed',
				name: 'Sound Pulse',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d6+6 thunder damage.',
				damage: '2d6+6 thunder damage',
				category: 1
			},
			{
				id: '42f12c0f-7d54-462f-a3e3-6687639bf802',
				name: 'Buffeting Bellow',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d8+5 thunder damage, and the target is pushed 3 squares.',
				damage: '2d8+5 thunder damage',
				category: 1
			},
			{
				id: '78e1ecee-4f9c-401c-bac8-6e2351c607ca',
				name: 'Drowsing Thrum',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '1d6+3 thunder damage, and the target is dazed (save ends). First Failed Save: The target falls unconscious (save ends).',
				damage: '1d6+3 thunder damage',
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
		vulnerable: '',
		immune: 'gaze',
		tactics: '',

		info: 'Level 11 Controller',
		phenotype: 'Large aberrant beast (blind)'
	},
	{
		id: 'be0f7d01-698d-4857-8a51-bd2f751969ed',
		name: 'Elomir',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech, Elven',
		skills: 'Athletics +17, Intimidate +16',
		equipment: 'heavy shield; longsword; scale armor',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 238,
		initiative: 12,
		ac: 30,
		fortitude: 27,
		reflex: 25,
		will: 26,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [
			{
				id: '11b8d154-6fc4-4117-b7a1-738d5e6895f1',
				name: 'Psychic Vortex',
				keywords: '',
				details: '(Psychic) aura 1; if an enemy Elomir has marked starts its turn in the aura, that enemy takes 5 psychic damage and is slowed until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '972db707-5c39-4221-990e-4024b143ad58',
				name: 'Psychic Agony Longsword',
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
				details: '1d8+6 damage, ongoing 5 psychic damage, and the target is marked (save ends both).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '8fbd0ea1-87da-483d-9f96-79a7f8507d26',
				name: 'Dual Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: 'Elomir makes two melee basic attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'c7602d3b-6cf7-4e2f-b465-9c4ee185202d',
				name: 'Shared Agony',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Must target an enemy Elomir has marked; 1d8+8 damage, ongoing 10 psychic damage, and if an ally of the target starts a turn adjacent to the target, that creature takes 10 psychic damage (save ends both).',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '3c566f78-ce65-4697-a341-f560df02880e',
				name: 'Disruptive Smite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+8 damage, and whenever the target is the target of a power that has the healing keyword, it takes 10 necrotic damage (save ends).',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: 'b43b51c4-e4ef-440e-be3e-35dae46bc7da',
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
				details: 'Elomir can reroll an attack roll. It must use the second roll, even if it’s lower.',
				damage: '',
				category: 4
			},
			{
				id: '38746db5-d4ce-4693-a1bb-f29f8e6df2ed',
				name: 'Wild Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Elomir ignores difficult terrain when he shifts.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Soldier',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'ada91b47-91a3-465b-90dd-462815a95a9f',
		name: 'Eskade',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +12, Bluff +14, Stealth +9',
		equipment: 'implement, rod; leather armor; morningstar',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 168,
		initiative: 7,
		ac: 24,
		fortitude: 22,
		reflex: 22,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e41962b0-8637-4d0d-8848-3158404bf2c0',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '1d10+2 damage.',
				damage: '1d10+2 damage',
				category: 1
			},
			{
				id: '2234174c-1a3b-465c-98aa-ee583fb6b025',
				name: 'Malachi’s Radiance',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d6+5 radiant damage, ongoing 5 radiant damage, and the target cannot move close to Eskade (save ends both). Another target within 5 squares takes 1d6+5 radiant damage.',
				damage: '2d6+5 radiant damage',
				category: 1
			},
			{
				id: 'a73aed8e-17bd-438c-84c8-791d74e53cc0',
				name: 'Bad Starsign',
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
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '4d8+5 damage, and the target takes -2 to attack rolls (save ends).',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: 'dcf07287-6576-4c76-8fd4-2b42873e250f',
				name: 'Starfire Veil',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire',
				condition: 'while bloodied',
				range: 'Close burst 1',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '2d8+5 fire damage, and the target is blinded (save ends).',
				damage: '2d8+5 fire damage',
				category: 3
			},
			{
				id: '9c6d99d9-2cfc-475e-8b7c-c39218c11959',
				name: 'Star Curse',
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
				details: 'Eskade curses the nearest enemy that she can see. Her attacks deal a cursed enemy an extra 1d8 damage.',
				damage: 'her attacks deal a cursed enemy an extra 1d8 damage',
				category: 3
			},
			{
				id: '0e50414b-4318-44f6-81b7-41a44b466f62',
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
				details: 'Eskade gains a +1 power bonus to her next attack roll against an enemy that hit her since her last turn. If the attack hits and deals damage, it deals an extra 7 damage.',
				damage: 'if the attack hits and deals damage',
				category: 3
			},
			{
				id: '879d4872-e1ad-444f-8d5d-7ab5cd5eb049',
				name: 'Shadow Walk',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Eskade moves at least 3 squares on her turn, she gains concealment until the end of her next turn.',
				damage: 'If Eskade moves at least 3 squares on her turn',
				category: 0
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

		info: 'Level 10 Elite Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '61f330b5-2445-4e96-a5ac-76b30e062cce',
		name: 'Eye of Malachi',
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
		senses: 'Perception +8',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Nature +9, Stealth +12',
		equipment: 'battleaxe; handaxe; hide armor',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 95,
		initiative: 9,
		ac: 23,
		fortitude: 21,
		reflex: 21,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9ebf1cf6-ac83-4c17-b484-d8dc721494d0',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d10+3 damage.',
				damage: '1d10+3 damage',
				category: 1
			},
			{
				id: '44b35cba-17ad-4650-89b5-19b4011c1e16',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d6+3 damage.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '92e62179-1fd1-473e-b726-8c64fb0796da',
				name: 'Malachi’s Fangs',
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
				attack: null,
				description: '',
				details: 'The eye of Malachi makes a battleaxe attack and a handaxe attack. If both attacks hit, one target takes ongoing 5 psychic damage (save ends).',
				damage: 'one target takes ongoing 5 psychic damage (save ends)',
				category: 1
			},
			{
				id: 'f1839d3f-7ca4-4f22-bcb1-c968cb302983',
				name: 'Scream for Malachi',
				action: null,
				keywords: 'Psychic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+2 psychic damage.',
				damage: '2d6+2 psychic damage',
				category: 0
			},
			{
				id: '301e4bac-035d-49a4-ba28-27dcc1f6d701',
				name: 'Pain Slide',
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
				details: 'Creatures taking ongoing damage can’t attack the eye of Malachi for moving or shifting.',
				damage: 'creatures taking ongoing damage can’t attack the eye of malachi for moving or shifting',
				category: 2
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
		id: 'a0bb8169-af86-4602-a127-420428718107',
		name: 'Feaster',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 10,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; darkvision',
		movement: '5, swim 5',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +11',
		equipment: '',
		category: '',
		strength: {
			score: 22,
			modifier: 6,
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 214,
		initiative: 10,
		ac: 29,
		fortitude: 26,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '69d16f24-032d-44a7-b00a-e4e58e0ca085',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 1d12+6 damage, and the target is pulled 2 squares and grabbed.',
				damage: '1d12+6 damage',
				category: 1
			},
			{
				id: '42a69a15-7135-40dc-815b-579d54fe8cc6',
				name: 'Tentacle Flurry',
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
				details: 'Feaster makes two tentacle attacks. It can grab up to two targets.; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '9f816a76-ae38-4169-bebe-fe24dd10e9cf',
				name: 'Bite',
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
					defence: 0
				},
				description: '',
				details: 'Target must be immobilized, stunned, or unconscious; 2d12+6 damage, ongoing 10 necrotic damage (save ends). First Failed Save: The target contracts festering doom.',
				damage: '2d12+6 damage',
				category: 1
			},
			{
				id: '7bf1939e-c424-423b-a613-0aeff69d1465',
				name: 'Spying Eye',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Feaster can hide in such a way that it leaves only its eyestalk exposed, it gains a +5 bonus to Stealth. The bonus ends if Feaster moves.',
				damage: 'it gains a +5 bonus to Stealth',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 10 Elite Soldier',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '1e818a52-1146-492a-a8ac-838916cba79a',
		name: 'Garen',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech, Dwarven',
		skills: 'Acrobatics +15, Bluff +14, Stealth +15, Thievery +15',
		equipment: 'kukri; leather armor; shuriken; thieves’ tools',
		category: '',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 208,
		initiative: 13,
		ac: 28,
		fortitude: 20,
		reflex: 26,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2e019d2b-429a-4392-9b97-cddae871b393',
				name: 'Kukri',
				action: {
					action: 1,
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
				details: '2d6+5 damage; reroll any result of 1 on a damage die.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'ff6a84a2-dee8-46f4-9723-ae8c1cca76ef',
				name: 'Twin Stars',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires two shuriken',
				range: 'ranged 6/12',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Two attacks; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'bd0c65ac-c3c0-49af-92bf-0a899df78486',
				name: 'Bleeding Slash',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires kukri',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage, and ongoing 10 damage (save ends). Reroll any result of 1 on a damage die.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '47de3d79-e0b5-4fc7-84bc-4d170f65e636',
				name: 'Tentacle Eye Feint',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'Reach 2; the target slides 1 square and grants Garen combat advantage until the end of his next turn.',
				damage: 'Reach 2',
				category: 3
			},
			{
				id: 'f97734db-1edf-4c03-ad1e-53bc08c3ac23',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Garen deals an extra 2d8 damage to a target he has combat advantage against.',
				damage: 'garen deals an extra 2d8 damage to a target he has combat advantage against',
				category: 0
			},
			{
				id: 'cec70864-ace6-416a-b6b0-ff7460d7415d',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When Garen is subject to forced movement, he moves 1 square fewer than the effect specifies. When an attack would knock Garen prone, he can roll a saving throw to avoid falling prone.',
				damage: 'he moves 1 square fewer than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Skirmisher',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'df9cfa3c-e4cf-42d8-8971-62ba009d5faa',
		name: 'Grovald',
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
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Religion +12',
		equipment: 'chainmail; longsword',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 194,
		initiative: 5,
		ac: 25,
		fortitude: 21,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '29d74937-628d-4d38-9008-5696f9464fd1',
				name: 'Unhallowed Resilience',
				keywords: '',
				details: 'aura 3; when allies enter the aura or start their turns there, they gain a +1 bonus to all saving throws.'
			}
		],
		powers: [
			{
				id: 'efef0678-3abc-4d54-a01d-68ad0c2080e1',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Force, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 13,
					defence: 1
				},
				description: '',
				details: '1d6+5 damage, plus 1d6 force damage and push 3.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '6afe970d-263b-4dfc-a268-4be7a406cadd',
				name: 'Phantom Spear',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Ranged 12',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '1d8+5 force damage, and the target is immobilized until the end of Grovald’s next turn.',
				damage: '1d8+5 force damage',
				category: 1
			},
			{
				id: 'd9ed04b8-ba0e-46b9-8a61-893730af552f',
				name: 'Twin Spears',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Grovald makes two phantom spear attacks.',
				damage: '',
				category: 1
			},
			{
				id: '373de844-6bf9-4263-ae5c-38c510c324ca',
				name: 'Phantom Spikes',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Force, Zone',
				condition: '',
				range: 'Area burst 1 within 15',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '3d8+5 force damage. Aftereffect: Any enemy that begins its turn in the area takes 5 force damage, and Grovald’s enemies treat the zone as difficult terrain. Grovald can sustain or dismiss the zone as a minor action.',
				damage: '3d8+5 force damage',
				category: 1
			},
			{
				id: 'cde63e6d-7773-421e-b2da-a2a6607bbfc5',
				name: 'Phantom Riposte',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: 'immediate reaction when hit or missedby a melee attack',
				range: '',
				attack: null,
				description: '',
				details: 'Grovald makes an immediate phantom spear attack against the triggering enemy. This use of phantom spear does not provoke opportunity attacks.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'f1d7bda5-3085-40be-9f11-1d4f69f29560',
		name: 'Harrowfolk Hunter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Unaligned',
		languages: 'Common, Giant',
		skills: '',
		equipment: 'javelin; leather armor; spear',
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
		initiative: 7,
		ac: 24,
		fortitude: 23,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5a392d0c-4144-4b0f-a9d7-f3b184dd32f0',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'd29d1fb9-3c1a-4c46-962a-9d0f66feac85',
				name: 'Javelin',
				action: {
					action: 1,
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

		info: 'Level 10 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2da57be7-28c0-4b75-bf5e-7dbaeba7f53d',
		name: 'Harrowfolk Nature Priest',
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
		senses: 'Perception +9; low-light vision',
		movement: '6 (8 when charging)',
		alignment: 'Unaligned',
		languages: 'Common, Giant',
		skills: 'Endurance +9, Intimidate +7, Nature +14',
		equipment: 'leather armor; spear',
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
		hp: 74,
		initiative: 7,
		ac: 21,
		fortitude: 21,
		reflex: 20,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd171395b-01e7-464a-83bc-9c333e920429',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'ead5a056-3066-4a4b-bcdb-1ac2a4fa38a6',
				name: 'Thorn Bolt',
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
				attack: null,
				description: '',
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '291ae4f2-75fc-4704-adc6-b204fdad1c5b',
				name: 'Leeching Earth',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: '3d6+5 damage, and the target takes ongoing 5 damage and is slowed (save ends both).',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: '210a7b6c-9291-4716-9801-8e558d5ef0ac',
				name: 'Furious Assault',
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
				details: 'When the half-orc hits an enemy, it can deal +1[W] damage with a weapon attack or +1d8 damage with a nonweapon attack.',
				damage: 'it can deal +1[w] damage with a weapon attack or +1d8 damage with a nonweapon attack',
				category: 4
			},
			{
				id: 'bed9cab0-267e-4b23-ab76-abfe1d9844ea',
				name: 'Half-Orc Resilience',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When first bloodied, the half-orc gains 5 temporary hit points.',
				damage: 'the half-orc gains 5 temporary hit points',
				category: 0
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
		id: '8b0a45b6-a832-44df-9eaf-47c0f9b02b98',
		name: 'Harrowfolk Warrior',
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
		senses: 'Perception +7; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Unaligned',
		languages: 'Common, Giant',
		skills: 'Endurance +9, Intimidate +6, Nature +12',
		equipment: 'battleaxe; handaxe; leather armor',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 88,
		initiative: 7,
		ac: 22,
		fortitude: 21,
		reflex: 20,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c2754df3-7a19-4f4a-8622-ceb7cccf963a',
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
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '24f47e69-2a75-49e8-8c38-cdc567f13de8',
				name: 'Handaxe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 5/10 or melee 1',
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
				id: '996fdf0d-cca4-431d-94cf-8e003f68b0fb',
				name: 'Chop Chop',
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
				details: 'The Harrowfolk warrior makes a battleaxe attack and a handaxe attack, adding no +4 to the handaxe damage. The warrior can shift 2 squares, dividing them before, between, or after the attacks.',
				damage: 'adding no +4 to the handaxe damage',
				category: 1
			},
			{
				id: '1599470c-7661-4ddf-afd1-9c3305167e20',
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
				range: 'The Harrowfolk warrior makes a ranged handaxe attack followed by a charge attack. .',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'ee3477ea-d100-463b-90fa-f2f9228714ab',
				name: 'Furious Assault',
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
				details: 'When the half-orc hits an enemy, it can deal +1[W] damage with a weapon attack or +1d8 damage with a nonweapon attack.',
				damage: 'it can deal +1[w] damage with a weapon attack or +1d8 damage with a nonweapon attack',
				category: 4
			},
			{
				id: 'ddd522d6-36b3-4048-b010-d608c84035dc',
				name: 'Half-Orc Resilience',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When first bloodied, the half-orc gains 5 temporary hit points.',
				damage: 'the half-orc gains 5 temporary hit points',
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
		id: '2f843f86-fd1e-4ac1-8d8d-0c7ef237c549',
		name: 'Horrid Grell',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: 'blind',
		level: 9,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; blindsight 12',
		movement: '1 (clumsy), fly 6 (hover)',
		alignment: 'Evil',
		languages: 'Deep Speech',
		skills: 'Stealth +18',
		equipment: '',
		category: '',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 192,
		initiative: 11,
		ac: 26,
		fortitude: 21,
		reflex: 22,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '761a6ad6-a6c1-4956-8601-a28bf3f77848',
				name: 'Tentacle Rake',
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
					defence: 0
				},
				description: '',
				details: 'Reach 2; 3d8+5 damage, and the target is slowed and takes a -2 penalty to attack rolls (save ends both).',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: '81f80564-577f-48dd-8f10-fd2662b0a46f',
				name: 'Tentacle Grab',
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
				details: 'Reach 2; 2d8+5 damage, and the target is grabbed. The grell can grab only one creature at a time.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '20ea6350-9688-403c-9840-b1cd14ef9d07',
				name: 'Venomous Bite',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Grabbed targets only; 1d8+5 damage, and the target is stunned (save ends).',
				damage: '1d8+5 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'gaze',
		tactics: '',

		info: 'Level 9 Elite Soldier',
		phenotype: 'Medium aberrant beast (blind)'
	},
	{
		id: '3acbe5a6-d22e-439e-bb75-0256087a1fc4',
		name: 'Klaus',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Athletics +15, Dungeoneering +13, Nature +13',
		equipment: 'hide armor; longsword; short sword',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 204,
		initiative: 11,
		ac: 26,
		fortitude: 23,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9ca7c37b-ef7b-48f0-8f1b-68d682f754e0',
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '8ca09bd9-4fe3-4b78-9808-167754ddcea6',
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
				details: '1d8+6 damage.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '4b75c04d-123f-447c-9d90-0810a7f6bfa0',
				name: 'Bloody Rending',
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
				details: 'Klaus makes a longsword attack and a short sword attack. If he hits one target with both attacks, that target takes ongoing 5 damage (save ends).',
				damage: 'that target takes ongoing 5 damage (save ends)',
				category: 1
			},
			{
				id: '55934871-1837-4fd5-a650-f905f5a13f84',
				name: 'Skirmish +2d8',
				action: null,
				keywords: '',
				condition: '',
				range: 'If Klaus moves 3 squares away from his starting point, he deals an extra 2d8 damage with melee attacks until the start of his next turn.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '60daba1f-128b-4bbd-a698-abf113a5a283',
				name: 'Unmarked Speed',
				action: {
					action: 2,
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
				details: 'Klaus ends any mark affecting him and shifts 2 squares or moves 4 squares. The creature that marked him takes 5 psychic damage.',
				damage: 'the creature that marked him takes 5 psychic damage',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Skirmisher',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'fcd8e4a0-ea29-48a0-adc4-8bb9d37d4ebf',
		name: 'Marching Hamer',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		dexterity: {
			score: 8,
			modifier: -1,
			cost: 0
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 129,
		initiative: 4,
		ac: 23,
		fortitude: 23,
		reflex: 17,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7ba94312-e754-4fa7-9c4e-c3053bf34804',
				name: 'Hammer Hand',
				action: {
					action: 1,
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
				details: '3d6+5 damage.',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: 'ac47ab7e-0c0e-4c75-b17a-5199588a6ae9',
				name: 'Hammering Charge',
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
				details: 'The marching hammer can use this power as a part of a charge; 3d6+5 damage, plus target is knocked prone.',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: 'c17d0cc9-dfd4-41d0-9471-6d996136f09e',
				name: 'Beat Them When They’re Down',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marching hammer deals 1d6 extra damage when attacking a prone enemy.',
				damage: 'the marching hammer deals 1d6 extra damage when attacking a prone enemy',
				category: 0
			},
			{
				id: '49c8ef47-0eb4-4bf6-b8f7-2abe39fb5d9d',
				name: 'Guard Area',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A marching hammer can make a hammering charge attack against any creature in its guarded area, even if the power hasn’t recharged. If the marching hammer uses a charge attack to make its hammering charge, its speed increases to 8 when making that charge.',
				damage: 'its speed increases to 8 when making that charge',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Small natural animate (construct, homunculus)'
	},
	{
		id: '465165fd-0d20-4ee9-8cce-162c85ca720e',
		name: 'Plague-changed Ghoul Eater',
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
		senses: 'Perception +6; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
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
		hp: 129,
		initiative: 12,
		ac: 29,
		fortitude: 25,
		reflex: 26,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '57c351ca-ff94-4ff7-b339-c0f4ac337684',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target is immobilized (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '049dd2bd-377c-424b-b88a-1919d4fcbe82',
				name: 'Gut Tongue',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the plague-changed ghoul eater damages an immobilized, stunned, or unconscious target with its claws attack, the target also takes ongoing 10 acid damage (save ends).',
				damage: 'when the plague-changed ghoul eater damages an immobilized',
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

		info: 'Level 13 Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'd5823fb3-ee2c-4a38-b831-ca2eaaae213c',
		name: 'Plague-changed Ghoul King',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; darkvision',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
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
		hp: 258,
		initiative: 12,
		ac: 31,
		fortitude: 26,
		reflex: 28,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd8b3a5a8-bd3c-4ad2-a3fa-44b6eb1cd242',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target is immobilized until the end of the plague-changed ghoul king’s next turn (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '7c0f82f0-849a-4d3d-8fe8-3cc92b261392',
				name: 'Ghoul Pack',
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
				details: 'Before the attack, the plague-changed ghoul king lets one adjacent ally or an ally adjacent to its target shift 1 square; 2d6+5 damage, and the target is immobilized until the end of the plague-changed ghoul king’s next turn.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'dc22140e-6d91-4920-99a9-12ad8920ac87',
				name: 'Ghoul Fervor',
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
				details: 'One ally within line of sight makes an immediate basic attack.',
				damage: '',
				category: 3
			},
			{
				id: 'fb31516f-939d-4c13-b7c8-2b07e4defb87',
				name: 'Gut Tongue',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the plague-changed ghoul king damages an immobilized, stunned, or unconscious target with its claws or ghoul pack attacks, the target also takes ongoing 10 acid damage (save ends).',
				damage: 'when the plague-changed ghoul king damages an immobilized',
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

		info: 'Level 13 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'f1d60ac8-124f-4ebb-b490-24a9617fee98',
		name: 'Possessed Citizen',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'History +11, Insight +11',
		equipment: 'greatsword; leather armor',
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
		hp: 101,
		initiative: 10,
		ac: 26,
		fortitude: 23,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '393640de-a5ab-4dee-ba43-9f1e0a8b28f1',
				name: 'Greatsword',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d12+4 damage, plus 3d6 extra psychic damage if the target is immobilized, and the target takes a -2 penalty to',
				damage: '1d12+4 damage',
				category: 1
			},
			{
				id: 'de0eca52-343c-49be-8fad-66a87a2cb4fa',
				name: 'Telekinetic Grasp',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'Medium or smaller target; the target is immobilized (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '83cea557-3599-4a58-974b-b58852d187bb',
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
				details: 'the possessed citizen can fly 5 squares.',
				damage: 'the possessed citizen can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '43f41fd6-cc25-4da4-90ba-792d82411277',
		name: 'Rathoraiax',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'dragon, undead',
		level: 13,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '4, fly 8 (clumsy)',
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
			score: 9,
			modifier: -1,
			cost: 0
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
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 328,
		initiative: 5,
		ac: 27,
		fortitude: 29,
		reflex: 22,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1c13bcdf-2e09-48c1-ab44-54bbd77abf67',
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
				details: 'Reach 2; 2d10+6 damage, and the target is knocked prone if it is Large size or smaller.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: '3273272b-4491-44b5-a85c-27587e288b12',
				name: 'Tail Crush',
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
					defence: 1
				},
				description: '',
				details: 'Reach 2; prone targets only; 3d8+6 damage.',
				damage: '3d8+6 damage',
				category: 3
			},
			{
				id: '7094ebf0-f19d-43f7-b247-a46f1e08b741',
				name: 'Savage Fury',
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
				details: 'Rathoraiax makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: '25377f93-f753-4c19-88a7-1c61d54fcf73',
				name: 'Breath of the Grave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Necrotic, Poison',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '4d10+6 poison and necrotic damage, plus the target takes ongoing 10 poison and necrotic damage and is weakened (save ends both).',
				damage: '4d10+6 poison and necrotic damage',
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
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Elite Brute',
		phenotype: 'Large natural animate (dragon, undead)'
	},
	{
		id: 'd226523c-eb48-4e51-a617-508d29e5d6a0',
		name: 'Slystone Dwarf Ruffian',
		details: '',
		size: 1,
		origin: 2,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Athletics +14',
		equipment: 'leather armor',
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
		hp: 104,
		initiative: 12,
		ac: 26,
		fortitude: 23,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dab0c31d-0a1c-43f4-99dc-c9f8cb548ca8',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target is marked until the end of the slystone ruffian’s next turn.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '01292bb5-cbd7-4ae2-92c8-43c8a95943c7',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '3d8+5 damage, and the target is pushed 3 squares. The slystone dwarf ruffian can use this power as part of a charge.',
				damage: '3d8+5 damage',
				category: 1
			},
			{
				id: '6ef69044-f089-4682-8bf8-1a491f7cda1f',
				name: 'Mad Dash',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the slystone dwarf ruffian makes a charge attack, the enemy is knocked prone on a hit, in addition to any other effects of the attack.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Soldier',
		phenotype: 'Small fey humanoid'
	},
	{
		id: '8f32b799-1b05-4bf2-aefe-565f9211c17d',
		name: 'Spitting Troll',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +8',
		movement: '6, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +13, Endurance +14',
		equipment: 'javelin; leather armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 106,
		initiative: 12,
		ac: 26,
		fortitude: 22,
		reflex: 23,
		will: 22,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '39008ad9-6271-464c-bac7-eca711fa07a2',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, plus 1d6 poison damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: '29b3c448-8850-4b09-8476-165bb315c871',
				name: 'Javelin',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison, Weapon',
				condition: '(standard',
				range: 'Ranged 10/20',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage, plus 1d6 poison damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'ae4b62a9-e088-4b61-8a8c-047b83072868',
				name: 'Acid Spit',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d6 acid damage.',
				damage: '1d6 acid damage',
				category: 3
			},
			{
				id: '943ec45d-f9a9-4184-84ec-e05c26827db3',
				name: 'Regenerative Empowerment',
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
				details: 'One troll within 10 squares whose regeneration is currently inactive (as a result of taking acid or fire damage) immediately reactivates the regeneration.',
				damage: 'one troll within 10 squares whose regeneration is currently inactive (as a result of taking acid or fire damage) immediately reactivates the regeneration',
				category: 3
			},
			{
				id: 'b3cb7ea0-ae56-4e7a-8ab0-abec608f23c7',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Soldier (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd3cc37fd-a946-4fb6-9148-6edeb7502ad1',
		name: 'Streetwise Thug',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Athletics +11, Thievery +8',
		equipment: 'crossbow; crossbow bolts (20); leather armor; longsword',
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
		initiative: 3,
		ac: 21,
		fortitude: 19,
		reflex: 16,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '512267b0-c38a-46ae-a8d6-798a32e5ab2d',
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
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'd6bd25d9-acb4-499d-9667-133cc7c0bc6b',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '90c6fcd8-06a5-4351-83a4-60696d5d4ba4',
				name: 'Murder is a Team Sport',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a streetwise thug is flanking an enemy, it deals 1 extra point of damage per ally adjacent to the flanked enemy (including the ally who is granting the flank), to a maximum of +4.',
				damage: 'it deals 1 extra point of damage per ally adjacent to the flanked enemy (including the ally who is granting the flank)',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'cce0e9f3-59b7-4cdd-aebb-799bab0e0f56',
		name: 'Two-Headed Troll',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: '',
		equipment: 'hide armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 264,
		initiative: 5,
		ac: 25,
		fortitude: 27,
		reflex: 19,
		will: 20,
		regeneration: {
			value: 10,
			details: 'if the troll takes acid or fire damage, regeneration does not function until the end of its next turn'
		},
		auras: [],
		powers: [
			{
				id: '5adb57eb-d637-41c4-9e97-612242af0f78',
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
				details: 'Reach 2; 3d6+7 damage.',
				damage: '3d6+7 damage',
				category: 1
			},
			{
				id: '970fa6d9-4d32-4127-9eba-790e3d1c58a1',
				name: 'Smackdown',
				action: {
					action: 4,
					trigger: 'when an enemy moves into a position that flanks the two-headed troll',
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
				details: 'The two-headed troll targets one creature flanking it; the target is knocked prone.',
				damage: '',
				category: 5
			},
			{
				id: 'd3f9d677-cabf-4bb9-b33b-c463269f6397',
				name: 'Double Actions',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A two-headed troll rolls initiative twice, gets two turns during a round, and has a full set of actions (standard, move, minor) on each turn. Each set of actions corresponds to a different head. The troll’s ability to take immediate actions refreshes on each of its turns.',
				damage: '',
				category: 0
			},
			{
				id: '40a1b044-b6be-4d7a-ae79-ea35da394e21',
				name: 'Dual Brain',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'At the end of its turn, the two-headed troll automatically succeeds on all saving throws against the dazed and stunned conditions and against charm effects that a save can end.',
				damage: '',
				category: 0
			},
			{
				id: 'ee1057c9-dc8b-44f5-8648-87a13121f9c3',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Elite Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '4e8fffa3-2c0e-401d-80cc-06e146ef4074',
		name: 'Vaymeer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11; low-light vision',
		movement: '6 (8 while charging)',
		alignment: 'Unaligned',
		languages: 'Common, Giant',
		skills: 'Athletics +14, Endurance +10, Intimidate +10, Nature +11',
		equipment: 'greataxe; hide armor',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 276,
		initiative: 9,
		ac: 26,
		fortitude: 26,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '37648b1b-db1e-4b87-a5c0-b63775215d12',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '2d12+6 damage (crit 2d12+30).',
				damage: '2d12+6 damage (crit 2d12+30)',
				category: 1
			},
			{
				id: '679a0f44-e8af-44a1-80f1-062ddbf9bba0',
				name: 'Axe Reaction',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'immediate reaction when an enemy hits or misses vaymeer',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Targets the triggering enemy; 3d12+6 damage (crit 2d12+42).',
				damage: '3d12+6 damage (crit 2d12+42)',
				category: 1
			},
			{
				id: '81d0f69a-66f1-4a86-9a3c-5400445041fc',
				name: 'Earth’s Wellspring',
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
				details: 'Vaymeer gains 15 temporary hit points, and he ends any marked condition affecting him.',
				damage: 'Vaymeer gains 15 temporary hit points',
				category: 3
			},
			{
				id: 'a9febf26-5599-4c17-8975-37767036af95',
				name: 'Furious Assault',
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
				details: 'When Vaymeer hits an enemy, he can deal +1[W] damage with a weapon attack or +1d8 damage with a nonweapon attack.',
				damage: 'he can deal +1[w] damage with a weapon attack or +1d8 damage with a nonweapon attack',
				category: 4
			},
			{
				id: '7e00c144-d193-49e6-b713-9600f31dc5d7',
				name: 'Half-Orc Resilience',
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
				details: 'When first bloodied, Vaymeer gains 10 temporary hit points.',
				damage: 'Vaymeer gains 10 temporary hit points',
				category: 1
			},
			{
				id: 'b94db83c-66c2-40ac-8b66-18716226e107',
				name: 'Savage Cleave',
				action: null,
				keywords: '',
				condition: '',
				range: 'Whenever Vaymeer hits with a melee attack, he can make a melee basic attack against another adjacent enemy as a free action, taking -2 to the second attack roll.',
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
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '0933723d-94f8-4517-bd20-440bb8db916e',
		name: 'Warped Ghoul',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '8, climb 4',
		alignment: 'Chaotic evil',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 130,
		initiative: 8,
		ac: 22,
		fortitude: 23,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b4d4a303-4534-49d6-a926-f6fcf1a00d61',
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
				details: '1d10+5 damage, and ongoing 5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '5e5b8726-3af9-46f7-9b31-bf899f606880',
				name: 'Gut Maw',
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
					defence: 2
				},
				description: '',
				details: 'Provokes opportunity attacks unless the target is immobilized; 2d8+5 damage, and the ghoul regains 10 hit points.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: 'a9d41ffe-9e76-40d9-beb2-958afb2b61a7',
				name: 'Passing Consumption',
				action: {
					action: 4,
					trigger: 'when missed by a melee attack made by an adjacent attacker',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ghoul can make a gut maw attack that doesn’t provoke opportunity attacks.',
				damage: '',
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

		info: 'Level 10 Brute',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: '3e286835-8711-43b7-b803-258f92fda21e',
		name: 'Warped Grick',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: '',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '6, climb 4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Endurance +11, Stealth +9',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 96,
		initiative: 4,
		ac: 19,
		fortitude: 19,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ce3da167-093d-4a6c-9228-a3429fe08e4c',
				name: 'Tentacle Rake',
				action: {
					action: 1,
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
				details: '2d6+4 damage, and ongoing 5 damage (save ends).',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'd108c937-374a-4c99-9e8e-27fce42a93ff',
				name: 'Expert Flanker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The warped grick gains a +2 bonus to attack rolls against an enemy it is flanking.',
				damage: 'The warped grick gains a +2 bonus to attack rolls against an enemy it is flanking',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '5 against effects that target AC',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Medium aberrant beast'
	},
	{
		id: '94821e6f-8814-4abd-ab28-cc721f9e4aad',
		name: 'Warped Grick Alpha',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 11,
		role: {
			type: 2,
			flag: 0,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '7, climb 4',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +10',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 7,
			modifier: -2,
			cost: 0
		},
		hp: 116,
		initiative: 5,
		ac: 23,
		fortitude: 25,
		reflex: 21,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f3000e49-8555-439d-b2cf-5c0856cd265b',
				name: 'Tentacle Rake',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d8+5 damage, ongoing 5 damage (save ends), and the target is grabbed.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '13449676-e23f-4525-9765-b8ce947bd1ff',
				name: 'Vicious Bite',
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
					defence: 0
				},
				description: '',
				details: 'Grabbed target only; automatic hit; 1d8 + 5 damage.; 2d6+5 damage.',
				damage: '1d8 + 5 damage',
				category: 1
			},
			{
				id: '386c5f51-414b-41d6-b90b-4efb978da7d7',
				name: 'Expert Flanker',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The grick gains a +2 bonus to attack rolls against an enemy it is flanking.',
				damage: 'The grick gains a +2 bonus to attack rolls against an enemy it is flanking',
				category: 0
			},
			{
				id: 'ce51268e-c2ab-4eae-b88a-6a83fc12ab14',
				name: 'Pinning Grip',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The warped grick alpha’s allies gain a +2 bonus to attack rolls against an enemy grabbed by this creature.',
				damage: 'The warped grick alpha’s allies gain a +2 bonus to attack rolls against an enemy grabbed by this creature',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '5 against effects that target AC',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Brute (L)',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '91ba89de-107c-46ea-ac59-29f15983a404',
		name: 'Warped Grimlock Zombie',
		details: '',
		size: 2,
		origin: 0,
		type: 0,
		keywords: 'blind, undead',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; blindsight 5',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Deep Speech',
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
		ac: 25,
		fortitude: 24,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '84f84f6c-c0fe-4d44-a271-76aeb8c2ecab',
				name: 'Viscera Grab',
				action: {
					action: 1,
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
				details: 'Reach 2; 7 damage, and the target is grabbed (escape ends). The zombie can grab only one target at a time, but the zombie can maintain the grab as long as it remains within 2 squares of the target.',
				damage: '7 damage',
				category: 1
			},
			{
				id: '139d35c9-e015-4434-b861-23f921e2103b',
				name: 'Burrowing Entrails',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'grabbed target only',
				range: '',
				attack: null,
				description: '',
				details: '10 necrotic damage.',
				damage: '10 necrotic damage',
				category: 1
			},
			{
				id: '59139414-09c6-4254-bd59-2250b65264f2',
				name: 'Corpse Seeming',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the zombie is inactive, it appears to be a corpse (DC 18 Insight to see through the ruse).',
				damage: 'it appears to be a corpse (DC 18 Insight to see through the ruse)',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, gaze, poison',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium aberrant animate (blind, undead)'
	},
	{
		id: '5d2cd637-0cca-417c-8095-e8acdc2379d9',
		name: 'Writhing Chain',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 10,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +13',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 131,
		initiative: 10,
		ac: 23,
		fortitude: 23,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8723fda0-9172-4a91-b6db-73a574287bad',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'efbd6ff5-5acc-4f09-bcf2-2ed985357ce2',
				name: 'Winding Strike',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage, and the target slides 2 squares and is grabbed and restrained.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'a1a14255-9e68-44b9-b087-de419dee0f6e',
				name: 'Guarded Area',
				action: null,
				keywords: '',
				condition: '',
				range: 'When making attacks against a creature in its guarded area, the writhing chain gains a +2 bonus to hit, and can stretch itself, granting itself reach 3 on all melee attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '278c27e5-61b6-4be0-8b1d-2f05a0303a10',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: 'with guarded area only',
				range: '',
				attack: null,
				description: '',
				details: 'This creature can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			},
			{
				id: '089dbf26-c416-4298-ba91-06dc01e5db4b',
				name: 'Serpentine Strike',
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
				details: 'The chain shifts 3 squares.',
				damage: 'The chain shifts 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 10 Skirmisher',
		phenotype: 'Medium natural animate (construct, homunculus)'
	},
	{
		id: '10dbb637-0561-432a-916e-e8c7ed1d0206',
		name: 'Advanced Foulspawn Seer',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10; low-light vision',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 95,
		initiative: 8,
		ac: 24,
		fortitude: 21,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: '05dcc5d9-9436-41b1-be8b-e4f86b5ba528',
				name: 'Foul Insight',
				keywords: '',
				details: 'aura 10; allies in the aura that can hear the foulspawn seer gain a +2 power bonus to one attack roll, skill check, ability check, or saving throw on their turn.'
			}
		],
		powers: [
			{
				id: '125d6d58-30ca-42f5-b295-97f7b3ebe5e0',
				name: 'Twisted Staff',
				action: {
					action: 1,
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
				details: '1d8+6 damage, and the target is pushed 1 square.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '05d0549e-6dea-4b9b-9ba5-ffe1586769f4',
				name: 'Warp Orb',
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
					bonus: 16,
					defence: 2
				},
				description: '',
				details: '1d8+6 damage, and the target is dazed (save ends).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '63419cfe-4935-47f1-a810-3667b364b0e2',
				name: 'Distortion Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d8+6 damage, and the target is dazed (save ends). Aberrant creatures take half damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: 'c2696210-72e2-4ff0-8f02-cd4dd064b0ab',
				name: 'Bend Space',
				action: {
					action: 5,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn seer teleports 3 squares.',
				damage: 'The foulspawn seer teleports 3 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Artillery (L)',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'ad7a7160-0f48-4456-ae55-853fbc76dc6c',
		name: 'Angel of Prophecy',
		details: '',
		size: 4,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 23,
		role: {
			type: 6,
			flag: 2,
			leader: false
		},
		senses: 'Perception +23',
		movement: '8, fly 12 (hover)',
		alignment: 'Any',
		languages: 'Supernal',
		skills: 'Acrobatics +23, Insight +23, Intimidate +24',
		equipment: 'katar; plate armor',
		category: 'Angel',
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
			score: 24,
			modifier: 7,
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
			score: 27,
			modifier: 8,
			cost: -1
		},
		hp: 981,
		initiative: 20,
		ac: 40,
		fortitude: 38,
		reflex: 37,
		will: 37,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '62e62cf7-7e1c-42a7-a845-7f095f8db522',
				name: 'Katar',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 1d10+8 damage plus 2d8 cold and radiant damage (crit 18 + 1d10 damage plus 16 cold and radiant damage).',
				damage: '1d10+8 damage plus 2d8 cold and radiant damage (crit 18 + 1d10 damage plus 16 cold and radiant damage)',
				category: 1
			},
			{
				id: '62a42e36-120d-438a-b8d4-a5b7ad18890b',
				name: 'Katar Death Dance',
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
				details: 'The angel of prophecy can make katar attacks against four different enemies. After each attack (hit or miss), the angel can shift 2 squares.',
				damage: 'the angel can shift 2 squares',
				category: 1
			},
			{
				id: '31aa0d17-a711-4490-a9ca-31ab4bc54548',
				name: 'Mark of Prophecy',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target is under the effect of the angel mark of prophecy. The angel can have only one creature under the effect of a mark of prophecy at a time. The mark of prophecy has the following effect: the target is marked by the angel of prophecy, and while marked and within sight of the angel, when the target hits the angel, the angel can force it to reroll the attack with a -2 penalty. Also, once on each of its turns as a free action, if the angel misses the target with a melee attack, the angel can reroll that attack.',
				attack: {
					bonus: 26,
					defence: 3
				},
				description: '',
				details: 'Reach 3',
				damage: 'Reach 3',
				category: 3
			},
			{
				id: '00d86c29-1588-47d1-bbd5-6dff86f294c6',
				name: 'Word of Prophecy',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Thunder, Fear',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '3d8+9 thunder damage, and the target is pushed 3 squares and takes ongoing 10 psychic and is slowed (save ends both).',
				damage: '3d8+9 thunder damage',
				category: 5
			},
			{
				id: 'd6d2ec77-4eae-4ff9-9168-69312b1b4093',
				name: 'Angelic Presence',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'aura',
				range: '',
				attack: null,
				description: '',
				details: 'Attacks against the angel of prophecy take a -2 penalty until the angel of prophecy is bloodied.',
				damage: 'Attacks against the angel of prophecy take a -2 penalty until the angel of prophecy is bloodied',
				category: 1
			},
			{
				id: '5630c4ac-47ce-4893-ae6b-d317f9e0000c',
				name: 'Prophecy of Rebirth',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The first time each day that the angel is reduced to 0 or fewer hit points it gains regeneration 10 until it regains hit points equal to his bloodied amount or is reduced to 0 or fewer hit points again, whichever comes first.',
				damage: 'The first time each day that the angel is reduced to 0 or fewer hit points it gains regeneration 10 until it regains hit points equal to his bloodied amount or is reduced to 0 or fewer hit points again',
				category: 0
			},
			{
				id: '262504ba-8761-4824-b3d8-ca48e5feae72',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: 'encounter',
				range: '',
				attack: null,
				description: '',
				details: 'The angel of prophecy can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 10,
				value: -15
			},
			{
				type: 2,
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

		info: 'Level 23 Solo Skirmisher',
		phenotype: 'Huge immortal humanoid (angel)'
	},
	{
		id: 'b722a0cc-0555-46bb-94b7-5089ceef51f1',
		name: 'Ascendant Hellsword',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 2,
			flag: 1,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '6, fly 6 (clumsy)',
		alignment: 'Evil',
		languages: 'Common, Supernal',
		skills: '',
		equipment: 'chainmail; double sword',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 300,
		initiative: 9,
		ac: 26,
		fortitude: 27,
		reflex: 24,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f6d97de1-f9f0-456e-9638-b8450c38da7f',
				name: 'Double Sword',
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
				details: '1d8+7 damage plus 2d6 fire damage.',
				damage: '1d8+7 damage plus 2d6 fire damage',
				category: 1
			},
			{
				id: 'd8d44b61-f164-4eaf-8540-08ec3aea4c7c',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'The ascendant hellsword makes two double sword attacks.; .',
				damage: '',
				category: 1
			},
			{
				id: '06a2fe8a-1315-486c-b3a2-06eff4680b01',
				name: 'Commanding Deviltry',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An ally within 10 squares can make a basic attack as a free action.',
				damage: 'An ally within 10 squares can make a basic attack as a free action',
				category: 3
			},
			{
				id: '6b66d0e3-5f3d-425f-904e-200120eae031',
				name: 'Whirlwind Charge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When the ascendant hellsword charges an enemy, it can make a double sword attack against each enemy within its reach at the end of its charge.',
				damage: '',
				category: 0
			},
			{
				id: 'd7b8ed66-e5de-4129-b648-bfad1aecbaae',
				name: 'Triumphant Surge',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The ascendant hellsword gains 10 temporary hit points each time it bloodies an enemy or reduces an enemy to 0 or fewer hit points.',
				damage: 'The ascendant hellsword gains 10 temporary hit points each time it bloodies an enemy or reduces an enemy to 0 or fewer hit points',
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

		info: 'Level 12 Elite Brute (L)',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: '8bb7c104-5e8a-4521-8a22-4b3b15a0c8d1',
		name: 'Chain Guardian',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6, climb 3',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +13',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 248,
		initiative: 8,
		ac: 27,
		fortitude: 29,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7ca7cbac-58a5-465e-8b6c-b4ab5c2356f2',
				name: 'Whipping Chain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'Melee 3',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage, and the target is grabbed. The chain guardian can grab 2 creatures at a time.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '3b4c0373-e0a2-4ff1-9a9e-86d243d06d2f',
				name: 'Crushing Chain',
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
					defence: 1
				},
				description: '',
				details: 'Targets a creature the chain guardian has grabbed; 1d10+6 damage, and the target is dazed (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'abba5bf8-fdcc-4a04-b83e-1e663ec9f117',
				name: 'Chain Burst',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'Burst 3; 2d10+6 damage, and the target is pulled 2 squares and grabbed. The chain guardian can damage all creatures in the burst, but it can still grab only 2 creatures at a time.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: 'c4818956-01b4-4b32-8c46-cb5a631cc4e1',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'This creature can make opportunity attacks against all enemies within its reach (3 squares).',
				damage: '',
				category: 0
			},
			{
				id: '03211e00-e8c9-4d93-81ae-fb10d29640e5',
				name: 'Chain Form',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The chain guardian can appear as normal chain, allowing it to make a Stealth check at +4 to hide in plain sight before an encounter begins.',
				damage: 'allowing it to make a Stealth check at +4 to hide in plain sight before an encounter begins',
				category: 0
			},
			{
				id: '9224413c-17cc-4b41-9e4a-17697f92b9e3',
				name: 'Stable',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The chain guardian ignores difficult terrain.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: '86723947-d657-4c2a-8615-8ffb79865d26',
		name: 'Crazed Carrion Crawler',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6, climb 6 (spider climb)',
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
			score: 2,
			modifier: -4,
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
		hp: 238,
		initiative: 10,
		ac: 28,
		fortitude: 26,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c6d1aadc-2581-468d-98af-0416b0eb3cd8',
				name: 'Tentacles',
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
					defence: 1
				},
				description: '',
				details: 'Reach 2; 1d4+6 damage, and the target takes ongoing 5 poison and is slowed (save at -2 ends both). First Failed Saving Throw: The target is immobilized instead of slowed (save at -2 ends). Second Failed Saving Throw: The target is stunned instead of immobilized (save at -2 ends).',
				damage: '1d4+6 damage',
				category: 1
			},
			{
				id: 'be83f8c2-b438-4e20-843f-2d69d5f452c2',
				name: 'Snapping Bite',
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
					defence: 0
				},
				description: '',
				details: 'Targets a creature that is immobilized, restrained, stunned, or unconscious; 1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 3
			},
			{
				id: '01fd3942-49d8-49d1-bbdc-02d14ca28acd',
				name: 'Wounded Fury',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'usable when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The crazed carrion crawler moves up to 6 squares and makes a tentacles attack and a snapping bite against a creature within reach. It prefers to target the creature that bloodied it.',
				damage: 'The crazed carrion crawler moves up to 6 squares and makes a tentacles attack and a snapping bite against a creature within reach',
				category: 5
			},
			{
				id: 'c0029c45-c420-4276-a36a-9d5c014fe012',
				name: 'Threatening Reach',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The crazed carrion crawler can make opportunity attacks against all enemies within its reach (2 squares).',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Large aberrant beast'
	},
	{
		id: '61131872-66ae-47ad-8a3f-57e5a870cbfb',
		name: 'Dergan Ironhammer',
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
		senses: 'Perception +3; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: '',
		equipment: 'maul',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 72,
		initiative: 3,
		ac: 17,
		fortitude: 18,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd45361cd-2e2a-469d-a819-ff0bc11ad7ca',
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
				range: 'Melee 1',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '2d6+3 damage.',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: 'a50de278-ca11-400c-a7dd-1c0edd52841f',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Dergan reduces any forced movement he’s subjected to by 1 square. If he would be knocked prone, he can roll a saving throw to avoid falling prone.',
				damage: 'Dergan reduces any forced movement he’s subjected to by 1 square',
				category: 0
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
		id: 'e134a632-d9ef-4a4c-90ee-7bb7fdb0210d',
		name: 'False Sir Keegan (Sir Drzak)',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 24,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +11; darkvision',
		movement: '6, fly 6',
		alignment: 'Evil',
		languages: 'Abyssal, Common',
		skills: 'Bluff +20',
		equipment: 'light shield; longsword; plate armor',
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
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 440,
		initiative: 16,
		ac: 40,
		fortitude: 36,
		reflex: 36,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '94b46bb7-e177-47e8-9e36-1f2a366036a3',
				name: 'Marshal Undead',
				keywords: '',
				details: 'aura 10; every undead ally of a level lower than Sir Drzak that is within the aura gains a +2 bonus to its attack rolls.'
			}
		],
		powers: [
			{
				id: '261e3937-5b47-4a3b-a93c-791b94f9fe37',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d12+18 damage plus 10 necrotic damage (crit 3d6 + 42 damage plus 10 necrotic damage).',
				damage: '2d12+18 damage plus 10 necrotic damage (crit 3d6 + 42 damage plus 10 necrotic damage)',
				category: 1
			},
			{
				id: '51ae9c3e-3d5c-4629-9796-efd8c8311a0c',
				name: 'Icy Death Strike',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Requires soulsword; 2d12+18 damage plus 10 necrotic and cold damage and the target is dazed (save ends).',
				damage: '2d12+18 damage plus 10 necrotic and cold damage and the target is dazed (save ends)',
				category: 1
			},
			{
				id: '82302c63-3e7b-4751-bbcd-023a81e33cd7',
				name: 'Warrior’s Challenge',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Requires soulsword; 3d12+18 damage plus 10 necrotic damage, and the target is pushed 2 squares. The all within 2 squares of the target are marked until the end of the death knight’s next turn.',
				damage: '3d12+18 damage plus 10 necrotic damage',
				category: 1
			},
			{
				id: '597eeba5-1d78-426b-a8b1-25ad2e5e1399',
				name: 'Unholy Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: '6d10+18 fire and necrotic damage to living creatures. Undead creatures within the burst (including the death knight) deal an extra 3d8 fire damage with melee attacks until the end of the death knight’s next turn.',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '678efc0c-5f32-4572-9c76-34fd7e3c7fd1',
				name: 'Combat Challenge',
				action: null,
				keywords: '',
				condition: '',
				range: 'Every time the death knight attacks an enemy, whether that attack hits or misses, the death knight marks the target. The mark lasts until the end of the death knight’s next turn. In addition, whenever an enemy adjacent to the death knight shifts, the death knight makes a melee basic attack against that enemy as an immediate interrupt.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'a13cd2be-5370-4f09-b87a-533fb66227d3',
				name: 'Indestructible',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When Sir Drzak is reduced to 0 hit points, his body and possessions crumble into dust, but he is not destroyed. He reappears (along with its possessions) in 1d10 days within 1 square of his phylactery, unless the phylactery is also found and destroyed.',
				damage: 'He reappears (along with its possessions) in 1d10 days within 1 square of his phylactery',
				category: 0
			},
			{
				id: '1751f832-f55b-4321-af85-f69d23c6599d',
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
				details: 'The death knight spends a healing surge and regains 110 hit points. The death knight gains a +2 bonus to all defenses until the start of its next turn.',
				damage: 'The death knight spends a healing surge and regains 110 hit points',
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
				value: 15
			}
		],
		resist: '',
		vulnerable: '',
		immune: 'disease, fear, poison',
		tactics: '',

		info: 'Level 24 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '35e3983c-36fc-4ba4-8233-f32d9a809b0d',
		name: 'Fist of Malachi',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +13',
		equipment: 'light shield; scale armor; war pick',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 111,
		initiative: 11,
		ac: 27,
		fortitude: 24,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '393b1bd9-04c4-42d8-b109-623176fd7773',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage (1d8+10 to a bloodied foe); (crit 2d8+15 or 2d8+20 to a bloodied foe) plus ongoing 5 damage and the target is marked (save ends both).',
				damage: '1d8+5 damage (1d8+10 to a bloodied foe)',
				category: 1
			},
			{
				id: '5685e2fc-310b-4f7a-abeb-cdac923b9be6',
				name: 'Scream for Malachi',
				action: null,
				keywords: 'Psychic',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+3 psychic damage (2d6+8 psychic damage to a bloodied target).',
				damage: '2d6+3 psychic damage (2d6+8 psychic damage to a bloodied target)',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '261adab5-48fb-4239-8606-e554bf6680f8',
		name: 'Foul Gibberer',
		details: '',
		size: 2,
		origin: 0,
		type: 1,
		keywords: '',
		level: 13,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; all-around vision',
		movement: '5, swim 5',
		alignment: 'Chaotic evil',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 675,
		initiative: 10,
		ac: 28,
		fortitude: 26,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '6cf7058e-ce8b-4291-8913-2ad8830559ed',
				name: 'Warped Ground',
				keywords: '',
				details: 'aura 3; enemies treat the area within the aura as difficult terrain.'
			}
		],
		powers: [
			{
				id: '20513b6c-ac48-4e4c-af37-4a742a12ff38',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+4 damage, and ongoing 10 acid damage (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '04c92592-7ab0-48aa-ba30-a0f64341b605',
				name: 'Braking Bite',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: 'usable when a creature moves or shifts within 2 squares of the foul gibberer',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Targets the triggering creature; reach 2; 1d8+4 damage, ongoing 10 acid damage (save ends), and the target stops moving.',
				damage: '1d8+4 damage',
				category: 5
			},
			{
				id: 'afe1e6e8-9c4d-4417-bd6a-f9951aab758d',
				name: 'Gnashing Teeth',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 1d8+4 damage, and ongoing 5 acid damage (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'ad8c565e-0937-4aae-b97c-b670fe9fb545',
				name: 'Caustic Spew',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '3d6+6 acid damage, and the target is blinded until the end of the foul gibberer’s next turn.',
				damage: '3d6+6 acid damage',
				category: 1
			},
			{
				id: 'b23fdb47-5b96-4dc5-9076-f5c7da2499f8',
				name: 'Gibbering',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 14,
					defence: 3
				},
				description: '',
				details: 'deafened creatures are immune; the target takes -2 to attack rolls and all defenses (save ends both). First Failed Save: The target takes -2 to attack rolls and is dazed (save ends both).',
				damage: 'the target takes -2 to attack rolls and all defenses (save ends both)',
				category: 4
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

		info: 'Level 13 Solo Controller',
		phenotype: 'Medium aberrant beast'
	},
	{
		id: 'f21c3ae7-2b1f-423e-92f2-561dd290c362',
		name: 'Foulspawn Berserker Thrall',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; low-light vision',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Deep Speech, telepathy 10',
		skills: '',
		equipment: 'greatsword',
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
			score: 2,
			modifier: -4,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 120,
		initiative: 10,
		ac: 27,
		fortitude: 27,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '0c3356ca-2718-4677-a321-cc34a7466898',
				name: 'Berserker Aura',
				keywords: '',
				details: 'aura 1; when a creature in the aura makes a melee attack, it targets a random creature within its reach.'
			}
		],
		powers: [
			{
				id: '242c9e6b-5015-4ed6-acb4-7c0fea9a7c54',
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
				details: '(+19 while bloodied)1d10+7 damage, or 1d10+9 damage while bloodied.',
				damage: '(+19 while bloodied)1d10+7 damage',
				category: 1
			},
			{
				id: '67bab1f4-a0dd-42c6-bb26-cd3e4a64814c',
				name: 'Berserker Charge',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The foulspawn berserker thrall charges and deals an extra 10 damage if its melee basic attack hits.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '39d76105-446e-470c-8f41-b16142350275',
				name: 'Mental Feedback',
				action: null,
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the foulspawn berserker thrall is attacked by a charm effect, the foulspawn berserker and its attacker take 10 psychic damage.',
				damage: 'the foulspawn berserker and its attacker take 10 psychic damage',
				category: 0
			},
			{
				id: '697eda08-5516-40b1-9718-36138d8a6dc4',
				name: 'Illithid Thrall',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn berserker thrall is considered a mind flayer’s thrall.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'ab9fcce4-a9d9-4337-8c4e-07e6ef6f9cf7',
		name: 'Foulspawn Chirurgeon',
		details: '',
		size: 1,
		origin: 0,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6 (8 while bloodied)',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: 'Dungeoneering +14, Stealth +17',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 121,
		initiative: 14,
		ac: 26,
		fortitude: 23,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'db44e345-d66e-405d-8e65-484bfca47395',
				name: 'Bone Sickle',
				action: {
					action: 1,
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
				details: '1d6+6 damage.',
				damage: '1d6+6 damage',
				category: 1
			},
			{
				id: '2e648806-a8f0-49e2-9314-1581ee204051',
				name: 'Cutter’s Caper',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'The foulspawn chirurgeon makes four bone sickle attacks and shifts 1 square after each attack.; 4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: '19c2d76c-3ab8-4acb-b375-edaa0d1664e0',
				name: 'Surgical Precision',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Weapon',
				condition: 'requires combat advantage',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn chirurgeon makes a bone sickle attack at +2 to the attack roll. A hit is treated as a critical hit, and the ongoing damage from combat advantage is doubled to 10. The foulspawn chirurgeon can also shift 3 squares.',
				damage: 'and the ongoing damage from combat advantage is doubled to 10',
				category: 1
			},
			{
				id: '8b8f2c76-97fe-43ab-9d1f-10de14f11f3b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'When the foulspawn chirurgeon has combat advantage against a target, its melee attacks also deal ongoing 5 damage (save ends) to that target.',
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
		phenotype: 'Small aberrant humanoid'
	},
	{
		id: '760a9777-d7ec-4109-bb5d-f7184ca7fe42',
		name: 'Foulspawn Hulk Thrall',
		details: '',
		size: 3,
		origin: 0,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
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
		hp: 150,
		initiative: 8,
		ac: 24,
		fortitude: 27,
		reflex: 22,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '74b92aa0-c1bf-4d0f-90d7-7ebf10bb1885',
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
				details: 'Reach 2; (+17 while bloodied)2d8+7 damage, or 3d8+9 while bloodied.',
				damage: '(+17 while bloodied)2d8+7 damage',
				category: 1
			},
			{
				id: 'ade5fc5a-73f2-4009-a25c-bbd4ebb70264',
				name: 'Illithid Thrall',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn hulk thrall is considered a mind flayer’s thrall.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear',
		tactics: '',

		info: 'Level 12 Brute',
		phenotype: 'Large aberrant humanoid'
	},
	{
		id: '8fb594cc-d6c8-41e8-a882-e43dcd4bf718',
		name: 'Foulspawn Mangler Thrall',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '7 (9 while bloodied)',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: 'Athletics +14, Stealth +16',
		equipment: 'dagger',
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 119,
		initiative: 13,
		ac: 26,
		fortitude: 23,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4565c7bd-0a11-4b34-835c-e055c04c1f46',
				name: 'Bone Dagger',
				action: {
					action: 1,
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
				details: '1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '9945058a-bd03-4ebe-ad75-56390b02f6e1',
				name: 'Dagger Dance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'The foulspawn render makes four bone dagger attacks and shifts 1 square after each attack.; 4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: '9f2e62c2-c3b0-4e34-994d-6b424d7fdb2d',
				name: 'Bone Daggers',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The foulspawn render makes two bone dagger attacks. Ranged 5/10',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage per hit.',
				damage: '1d4+5 damage per hit',
				category: 1
			},
			{
				id: '365379c9-a77c-46b2-8130-053f34496f0b',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn mangler deals an extra 3d6 damage to any target it has combat advantage against.',
				damage: 'the foulspawn mangler deals an extra 3d6 damage to any target it has combat advantage against',
				category: 0
			},
			{
				id: 'b29279bf-a695-4f3c-8a0e-7d1285da1661',
				name: 'Thrall’s Escape',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn mangler thrall gains a +5 racial bonus to AC against opportunity attacks provoked by movement. If the opportunity attack misses, the mangler can move 1 extra square during the movement that provoked.',
				damage: 'The foulspawn mangler thrall gains a +5 racial bonus to AC against opportunity attacks provoked by movement',
				category: 0
			},
			{
				id: 'f4ae94ba-dd30-4e41-833d-e2d00e756e99',
				name: 'Illithid Thrall',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn mangler thrall is considered a mind flayer’s thrall.',
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
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'd173d14d-9e6c-4879-bad2-05bb5cd8bce5',
		name: 'Foulspawn Mystic',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 0,
			flag: 1,
			leader: true
		},
		senses: 'Perception +7; low-light vision',
		movement: '6, teleport 3',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: 'Arcana +20, Intimidate +18',
		equipment: 'implement, staff',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 218,
		initiative: 12,
		ac: 30,
		fortitude: 26,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: 'fd86102d-b5da-4382-b567-0462959baddf',
				name: 'Foul Insight',
				keywords: '',
				details: 'aura 10; each ally in the aura can reroll one attack roll, check, or saving throw on its turn.'
			}
		],
		powers: [
			{
				id: 'ad9a9005-22fc-4ec4-a0a2-eaae7f8772a1',
				name: 'Twisted Staff',
				action: {
					action: 1,
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
				details: '1d8+4 damage, and the target is dazed until the end of the foulspawn mystic’s next turn, pushed 4 squares, and knocked prone.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '3d1eda6a-032c-4026-a35d-9dc25cd3c3fe',
				name: 'Forking Warp',
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
				details: 'targets two different creatures; 1d10+6 damage, and the target is dazed (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'be83a61f-f97d-4f07-af3d-76d54964ab23',
				name: 'hole in the Sky',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the foulspawn mystic uses bend space'
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'targets hit by the attack vanish into an extradimensional space that measures 10-squares-by-10-squares (save ends). When a creature saves, it returns in a safe, unoccupied space of the foulspawn mystic’s choosing. Aftereffect: The creature is dazed (save ends). Aberrant creatures gain +2 to saving throws against this power.',
				damage: 'targets hit by the attack vanish into an extradimensional space that measures 10-squares-by-10-squares (save ends)',
				category: 1
			},
			{
				id: '051f0605-6227-424d-a5f1-e016e689b2b9',
				name: 'Bend Space',
				action: {
					action: 5,
					trigger: 'when the foulspawn mystic would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The foulspawn mystic teleports 4 squares.',
				damage: 'The foulspawn mystic teleports 4 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Artillery (L)',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'ee6b5ea7-0228-416a-9b62-e42115bedd29',
		name: 'Foulspawn Skintaker',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'shapechanger',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		wisdom: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 95,
		initiative: 14,
		ac: 26,
		fortitude: 23,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a0e1d766-e34b-40ba-bd03-38fdc6bd7aef',
				name: 'Disruptive Touch',
				action: {
					action: 1,
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
				details: '1d10+6 damage, and the target cannot spend healing surges (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '84ddb5df-94af-44d2-a693-4222a0405e01',
				name: 'Steal Skin',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the foulspawn skintaker has no one under the effect of this power'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '3d6+5 damage. The foulspawn skintaker assumes the appearance of the target until the end of the encounter. Whenever the target uses a healing surge, the foulspawn skintaker regains half the hit points and the target regains the other half.',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: '690a7cac-3c4b-4e09-a19a-a8fd9b85ce20',
				name: 'Identity Crisis',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'usable while bloodied when subject to a melee or ranged attack and adjacent to a target on which the foulspawn skintaker has used steal skin',
				range: '',
				attack: null,
				description: '',
				details: 'The target of steal skin becomes the attack’s target instead of the foulspawn skintaker.',
				damage: '',
				category: 5
			},
			{
				id: '551d9deb-f7a9-49e0-a8ae-51ab7945296a',
				name: 'Twin Sympathy',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: 'usable when attacked while within 5 squares of the target whose appearance it has assumed using steal skin',
				range: '',
				attack: null,
				description: '',
				details: 'The target of steal skin takes half the attack’s damage and the foulspawn skintaker takes the other half.',
				damage: 'the target of steal skin takes half the attack’s damage and the foulspawn skintaker takes the other half',
				category: 4
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Medium aberrant humanoid (shapechanger)'
	},
	{
		id: '8c63f9ac-2751-4abb-b728-26ffbd85c49e',
		name: 'Frostblight Treant',
		details: '',
		size: 4,
		origin: 2,
		type: 1,
		keywords: 'plant',
		level: 25,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17; low-light vision',
		movement: '6 (ice walk)',
		alignment: 'Unaligned',
		languages: 'Elven',
		skills: 'Nature +22, Stealth +23',
		equipment: '',
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
			score: 28,
			modifier: 9,
			cost: -1
		},
		hp: 476,
		initiative: 20,
		ac: 43,
		fortitude: 39,
		reflex: 36,
		will: 35,
		regeneration: null,
		auras: [
			{
				id: '8a837fff-66ce-4d96-a747-0900c53d5e31',
				name: 'Frostblight Aura',
				keywords: '',
				details: '(Necrotic) aura 3; enemies that start their turn in the aura are slow and take 10 necrotic damage.'
			}
		],
		powers: [
			{
				id: '8102d043-8bd5-4ec5-9b11-07acfcea6aa0',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 3; 2d10+9 damage, and ongoing 10 cold damage (save ends).',
				damage: '2d10+9 damage',
				category: 1
			},
			{
				id: 'b6ced016-e39c-40cd-8ef3-edc17934aa2f',
				name: 'Freezing Roots',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 28,
					defence: 2
				},
				description: '',
				details: 'Reach 4; the target takes 2d6+4 cold damage and is restrained (save ends). Aftereffect: Immobilized until the end of the target’s next turn.',
				damage: 'the target takes 2d6+4 cold damage and is restrained (save ends)',
				category: 3
			},
			{
				id: '073ba4bb-b48e-4389-8d02-1885677d3abf',
				name: 'Shake the Shards',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'targets enemies only; 2d8+6 cold damage, and the target loses any cold resistance (save ends).',
				damage: '2d8+6 cold damage',
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
		vulnerable: 'fire (a frostblight treant takes ongoing 5 fire damage [save ends] when damaged by fire).',
		immune: '',
		tactics: '',

		info: 'Level 25 Elite Soldier',
		phenotype: 'Huge fey beast (plant)'
	},
	{
		id: 'd6d58187-dd7f-4e2d-bb65-684cf114e585',
		name: 'Frostfury Ice Troll',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 26,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19',
		movement: '8 (ice walk)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +27, Endurance +25',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
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
		hp: 287,
		initiative: 20,
		ac: 38,
		fortitude: 39,
		reflex: 38,
		will: 36,
		regeneration: {
			value: 20,
			details: ''
		},
		auras: [
			{
				id: 'e9d16013-2fd3-4a66-b612-a23735296837',
				name: 'Emanating Cold',
				keywords: '',
				details: 'aura 1; any enemy that starts its turn in the aura is slowed by the numbing cold until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '9d27ec30-c799-4e3a-8bed-19a52c234168',
				name: 'Claws',
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
				details: 'Reach 2; 2d12+11 damage, and the target takes ongoing 15 cold damage (save ends).',
				damage: '2d12+11 damage',
				category: 1
			},
			{
				id: '15a2e08b-c045-4be0-8c79-0d8183d779c6',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when a troll’s attack bloodies an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The troll makes two claw attacks. This attack scores a critical hit on a roll of 16-20.',
				damage: 'This attack scores a critical hit on a roll of 16-20',
				category: 5
			},
			{
				id: '4fa8f02f-ff74-48bc-84b5-6fba6c6c6813',
				name: 'Frostfury',
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
				details: 'The troll makes a claw attack against every enemy within reach. This attack scores a critical hit on a roll of 16-20.',
				damage: 'This attack scores a critical hit on a roll of 16-20',
				category: 5
			},
			{
				id: '0c5d604a-87eb-4f4b-9697-1f831296a257',
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
		vulnerable: 'acid or fire (if the troll takes acid or fire damage, its regeneration does not function until the end of its next turn)',
		immune: '',
		tactics: '',

		info: 'Level 26 Brute',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '855006eb-5056-42dd-868e-3383ddbbed81',
		name: 'Horrid Spawn',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 9,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'understands Common and Primordial',
		skills: '',
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
			score: 4,
			modifier: -3,
			cost: 0
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 120,
		initiative: 7,
		ac: 21,
		fortitude: 23,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: 'bc7ad92d-364d-46fb-9651-b0690bc86f7f',
				name: 'Sickening Stench',
				keywords: '',
				details: 'aura 2; any living enemy that starts its turn within the aura takes a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '653d2633-2499-4281-a88c-3b7ca7392db2',
				name: 'Toothy Tentacle',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d6+5 damage, and if the target moves, shifts, or is forcibly moved before the start of the horrid spawn’s next turn, it takes 5 extra damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '97391524-9417-4d0b-b732-8a8352f4d5fd',
				name: 'Mutilating Rend',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when a horrid spawn reduces an enemy to 0 hit points'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d6+5 damage, and ongoing 5 damage (save ends). Aftereffect: The target is dazed until the end of its next turn.',
				damage: '4d6+5 damage',
				category: 1
			},
			{
				id: '1ef62796-bf13-4d8e-ae01-273f595a4c76',
				name: 'Shuddering Delight',
				action: null,
				keywords: '',
				condition: 'when a horrid spawn reduces an enemy to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'The horrid spawn gains 20 temporary hit points, but grants combat advantage to any enemy until the start of its next turn.',
				damage: 'The horrid spawn gains 20 temporary hit points',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'chaos phage, fear',
		tactics: '',

		info: 'Level 9 Brute',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '87c26b45-10ae-49a2-ab79-e07f36f0ca5e',
		name: 'Ice Troll Rimehammer',
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
		senses: 'Perception +18',
		movement: '8 (ice walk)',
		alignment: 'Chaotic evil',
		languages: 'Common, Giant',
		skills: 'Athletics +27, Endurance +25',
		equipment: 'maul; scale armor',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
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
		hp: 227,
		initiative: 21,
		ac: 41,
		fortitude: 39,
		reflex: 37,
		will: 36,
		regeneration: {
			value: 20,
			details: ''
		},
		auras: [
			{
				id: '01ab32ec-7571-4c23-967f-0f81bf417e4b',
				name: 'Emanating Cold',
				keywords: '',
				details: 'aura 1; any enemy that starts its turn in the aura is slowed by the numbing cold until the start of its next turn.'
			}
		],
		powers: [
			{
				id: '3f8d8e9d-e293-4f5d-886f-d3a65352db69',
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
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+10 damage, and the target takes ongoing 15 cold damage (save ends).',
				damage: '2d8+10 damage',
				category: 1
			},
			{
				id: '39380770-2d6e-4d83-afd3-6b817ebef331',
				name: 'Bull Rush',
				action: {
					action: 1,
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
					defence: 1
				},
				description: '',
				details: 'the ice troll pushes the target 1 square and shifts into the vacated space.',
				damage: 'the ice troll pushes the target 1 square and shifts into the vacated space',
				category: 1
			},
			{
				id: 'c0662b78-8e36-475b-963a-54e657e09306',
				name: 'Frenzied Strike',
				action: {
					action: 7,
					trigger: 'when a troll’s attack bloodied an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The troll makes a maul attack.',
				damage: '',
				category: 5
			},
			{
				id: '8e5c1b09-86ad-4a69-9a3a-db199ed7bcc5',
				name: 'Rimehammer',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 32,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 4d8+10 damage and the target takes ongoing 10 cold damage and is immobilized (save ends both).',
				damage: '4d8+10 damage and the target takes ongoing 10 cold damage and is immobilized (save ends both)',
				category: 1
			},
			{
				id: '613a8bd0-5b26-41da-b8f8-ca1af4393761',
				name: 'Troll Healing',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage, it rises on its next turn (as a move action) with 10 hit points.',
				damage: 'if the troll is reduced to 0 hit points by an attack that does not deal acid or fire damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'acid or fire (if the troll takes acid or fire damage, its regeneration does not function until the end of its next turn)',
		immune: '',
		tactics: '',

		info: 'Level 25 Soldier',
		phenotype: 'Large natural humanoid'
	},
	{
		id: 'e8f787c1-a48c-4afc-b002-508c4933f526',
		name: 'Iceling Slasher',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'cold',
		level: 23,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; low-light vision',
		movement: '10 (ice walk), fly 6 (clumsy)',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Insight +26, Stealth +32',
		equipment: '',
		category: '',
		strength: {
			score: 17,
			modifier: 3,
			cost: 12
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
			score: 22,
			modifier: 6,
			cost: -1
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
		hp: 210,
		initiative: 22,
		ac: 37,
		fortitude: 35,
		reflex: 37,
		will: 34,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5a4c6d6a-6c92-48b0-b3ec-1e94b8065373',
				name: 'Claw',
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
					bonus: 28,
					defence: 0
				},
				description: '',
				details: '2d10+8 cold damage.',
				damage: '2d10+8 cold damage',
				category: 1
			},
			{
				id: '936573ae-b581-4196-827f-392e70ae7a4f',
				name: 'Slick Assault',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The iceling makes 2 claw attacks against different targets. If both attacks hit, the iceling shifts 5 squares as a free action.',
				damage: 'The iceling makes 2 claw attacks against different targets',
				category: 1
			},
			{
				id: 'af5a10ad-b0aa-4068-a17a-292611ddc2c6',
				name: 'Frost Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Cold, Teleportation',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 1
				},
				description: '',
				details: 'target is immobilized and takes ongoing 15 cold damage (save ends both).',
				damage: 'target is immobilized and takes ongoing 15 cold damage (save ends both)',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'cold',
		tactics: '',

		info: 'Level 23 Skirmisher',
		phenotype: 'Medium fey humanoid (cold)'
	},
	{
		id: 'c0002391-6bde-46a7-9505-e60d4e28c500',
		name: 'Kalan the Avenger',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 14,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +12; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Dwarven',
		skills: '',
		equipment: 'plate armor; warhammer',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		intelligence: {
			score: 9,
			modifier: -1,
			cost: 0
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
		hp: 141,
		initiative: 10,
		ac: 28,
		fortitude: 28,
		reflex: 24,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '31178a8d-9ca3-417b-a1d0-2b2412244e9a',
				name: 'Flames of Vengeance',
				keywords: '',
				details: '(Fire) aura 1; allies who start their turns within the aura deal 5 extra fire damage on melee attacks.'
			}
		],
		powers: [
			{
				id: 'd8aad699-bff5-40d4-ba23-9d1ad452125f',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d10+7 damage plus 1d6 fire damage, and the target is marked until the end of Dalan’s next turn.',
				damage: '1d10+7 damage plus 1d6 fire damage',
				category: 1
			},
			{
				id: 'a8ed03a0-ca26-4927-a966-5b2d30bee4b5',
				name: 'Volcanic Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d6+5 fire damage, and the target is pulled 5 squares.',
				damage: '1d6+5 fire damage',
				category: 1
			},
			{
				id: 'b54869e3-a724-4cf2-a713-d9677b4eb447',
				name: 'Back on Your Feet',
				action: {
					action: 4,
					trigger: 'when an ally within line of sight is reduced to 0 hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: 'The ally regains 20 hit points, stands immediately, and makes a melee basic attack as a free action.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'e402e75d-9ed1-4849-a581-af6fe3cbccc9',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces Dalan to move—through a pull, a push, or a slide—Dalan moves 1 square less than the effect specifies. When an attack would knock Dalan prone, he can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—Dalan moves 1 square less than the effect specifies',
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

		info: 'Level 14 Soldier (L)',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '73f4f145-c748-4317-85d6-e9c10fb903f1',
		name: 'Malachi’s Herald',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 0,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Bluff +16, Stealth +13',
		equipment: 'dagger; implement, rod; leather armor',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 23,
			modifier: 6,
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 202,
		initiative: 8,
		ac: 26,
		fortitude: 26,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '76f0b286-0ccc-4a3f-855f-60f1dc22b183',
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
				details: '(+15 against a bloodied target)2d4+3 damage.',
				damage: '(+15 against a bloodied target)2d4+3 damage',
				category: 1
			},
			{
				id: 'd0c9eff8-b0c5-473a-858f-ec0d13834e7a',
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
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '(+18 against a bloodied target)2d6+7 damage.',
				damage: '(+18 against a bloodied target)2d6+7 damage',
				category: 1
			},
			{
				id: '93e85d92-823f-461d-8ef7-ed01436e9e19',
				name: 'Soul Flaying',
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
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '(+18 against a bloodied target)4d6+7 necrotic damage, and the target can’t use healing surges until the end of the herald’s next turn.',
				damage: '(+18 against a bloodied target)4d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'b88a00a8-4483-4efa-b572-c67304c37712',
				name: 'Elder Voice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Thunder',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '(+17 against a bloodied target)4d6+7 thunder damage, and the target is pushed 4 squares.',
				damage: '(+17 against a bloodied target)4d6+7 thunder damage',
				category: 1
			},
			{
				id: '479bfe97-d1df-461e-8217-ac8a035b9644',
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
				details: 'Malachi’s Herald gains a +1 power bonus to its next attack roll against an enemy that hit it since the herald’s last turn. If the attack hits and deals damage, it deals extra 5 damage.',
				damage: 'if the attack hits and deals damage',
				category: 3
			},
			{
				id: 'fa858a94-0f62-48fd-9c5d-f2e5ed9e49b3',
				name: 'Hellfire Swap',
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
				details: 'Malachi’s Herald exchanges positions with a single ally within 10 squares or teleports 3 squares. Those adjacent to the herald or its ally when this teleportation occurs take 5 fire damage.',
				damage: 'those adjacent to the herald or its ally when this teleportation occurs take 5 fire damage',
				category: 2
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

		info: 'Level 12 Elite Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '00ce51df-7f2f-4793-a3d2-ed5e3831422e',
		name: 'Mutated Thrall',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4',
		movement: '7',
		alignment: 'Chaotic evil',
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
		hp: 1,
		initiative: 10,
		ac: 24,
		fortitude: 21,
		reflex: 24,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c42ddff9-80d8-4d9e-b91c-e9dc1e057e33',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '6 damage, and slide the target 1 square.',
				damage: '6 damage',
				category: 1
			},
			{
				id: 'cf461421-d470-42e6-9110-5ac7e2bbbe66',
				name: 'Gobs of Filth',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '6 poison damage.',
				damage: '6 poison damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Minion',
		phenotype: 'Medium elemental humanoid'
	},
	{
		id: '7bc26b71-b0f7-4412-a4ee-c147381ef119',
		name: 'Obsen',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Primordial',
		skills: 'Arcana +17, Dungeoneering +10, History +17, Nature +10',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 256,
		initiative: 9,
		ac: 29,
		fortitude: 24,
		reflex: 27,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '70eb6437-cd77-4d00-9132-4556eb7bab74',
				name: 'Entropic Imperative',
				keywords: '',
				details: 'aura 3; allies who start their turns within the aura gain a +2 bonus to attack rolls and damage rolls.'
			}
		],
		powers: [
			{
				id: '9749b510-2e82-4143-9b84-c0c426531093',
				name: 'Chaos Blade',
				action: {
					action: 1,
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
				details: '1d4+3 damage, and the target is stunned until the end of Obsen’s next turn.',
				damage: '1d4+3 damage',
				category: 1
			},
			{
				id: '1a3e929f-bdba-4c11-b295-e2988d617d6a',
				name: 'Tumescent Nodule',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Poison',
				condition: 'usable 4/day',
				range: 'Obsen rips a nodule from his body and hurls it at an enemy within range: Obsen takes 5 damage: ranged 5/10',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d6+5 acid damage, and ongoing 5 poison damage (save ends). Each creature adjacent to the target takes 5 acid damage.',
				damage: '1d6+5 acid damage',
				category: 1
			},
			{
				id: 'b8f4c8dc-a64a-4be5-a213-309469da8fab',
				name: 'Chaos Seed',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'on a hit, the target is dazed and makes a melee basic attack against one ally adjacent to it. Miss: The target is dazed and does not make an attack. Effect: The burst creates a zone that persists until the end of Obsen’s next turn. Obsen can sustain the effect by spending a minor action, and can move the zone 3 squares by spending a move action. Any creature that starts its turn inside the zone is subject to another attack.',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies',
				damage: '',
				category: 1
			},
			{
				id: 'e846c35a-d0f6-44bf-a046-a35fd4b88f79',
				name: 'Chaos Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '2d8+6 damage, and the target grants combat advantage to any enemy (save ends). Aftereffect: The target takes 5 damage.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '56911f19-1b65-4587-926f-2774a699d643',
				name: 'Writhing Chaos',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Three ribbons of light appear in the air and attack: ranged 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'three targets; (three attacks)1d8+6 damage, and the target teleports to a square of Obsen’s choosing within 5 squares of him.',
				damage: '(three attacks)1d8+6 damage',
				category: 1
			},
			{
				id: 'c1780b9b-b67b-45a2-840d-ee763d948806',
				name: 'Chaos Stride',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when first bloodied'
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '1d8+6 damage, and the target is dazed (save ends). After the attack, Obsen teleports 1 square for each enemy he hit with this attack.',
				damage: '1d8+6 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c9dcdf1d-217e-423e-a65b-6bba5a6bd6ac',
		name: 'Risenguard of Drzak',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 22,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11; darkvision',
		movement: '8',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: '',
		equipment: 'fullblade; longbow; plate armor',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 11,
		ac: 25,
		fortitude: 25,
		reflex: 24,
		will: 22,
		regeneration: null,
		auras: [
			{
				id: 'f1590f0d-a36a-4548-b41c-fb5a7a25d062',
				name: 'Death’s Icy Grasp',
				keywords: '',
				details: 'aura 1; living creature that start their turn in the aura take 5 cold damage and are slowed until the end of their next turn.'
			}
		],
		powers: [
			{
				id: '1fe93619-5d62-491a-95b7-f7a8f78771d0',
				name: 'Fullblade',
				action: {
					action: 1,
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
				details: '13 damage (crit 16 damage).',
				damage: '13 damage (crit 16 damage)',
				category: 1
			},
			{
				id: '48784d0d-95ad-4d60-abc5-d2244293e954',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '13 damage.',
				damage: '13 damage',
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
		immune: '',
		tactics: '',

		info: 'Level 22 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '6d981682-d039-4d72-8fa9-7d1b7d1050c7',
		name: 'Saimos',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Acrobatics +20, Athletics +16, Bluff +16, Stealth +20',
		equipment: 'dagger; leather armor; rapier',
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
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 270,
		initiative: 15,
		ac: 30,
		fortitude: 27,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1dbb6146-fad4-43fe-9b6f-6a79bf081a10',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+8 damage.',
				damage: '1d8+8 damage',
				category: 1
			},
			{
				id: '01ab4f89-9f69-4325-90aa-4a6e33441f43',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d4+8 damage.',
				damage: '1d4+8 damage',
				category: 1
			},
			{
				id: '51ac60ef-3299-4e4e-a678-3bd0f3ea6b77',
				name: 'Flashing Blades',
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
				details: 'Saimos makes a rapier attack and a dagger attack, or two dagger attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'ec3a9569-47ad-4407-84be-b9d3ac8af0d2',
				name: 'Disfiguring Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Weapon',
				condition: 'requires combat advantage',
				range: '',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: '2d8+8 damage, the target takes ongoing 5 damage, is dazed (save ends), and slides 3 squares. Allies of the target within 3 squares take a -2 penalty to attack rolls against Saimos (save ends).',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: '6ae00323-7751-45d0-8676-b54afb0adfd1',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Saimos hits a target he has combat advantage against, that target is weakened (save ends) or takes an extra 2d6 damage (Saimos’ choice).',
				damage: 'that target is weakened (save ends) or takes an extra 2d6 damage (saimos’ choice)',
				category: 0
			},
			{
				id: '6f90030a-10a1-456e-a2ba-fe824569058e',
				name: 'Dark Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation, Zone',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Saimos teleports 4 squares and becomes insubstantial until the start of his next turn. A zone of darkness (burst 1) appears within 1 square of his starting square, blocking line of sight until the end of his next turn. If he ends his teleportation within 2 squares of a creature, he has combat advantage against that creature until the end of his next turn.',
				damage: 'Saimos teleports 4 squares and becomes insubstantial until the start of his next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Skirmisher',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '866ccdfa-a33d-483e-bff8-28dd7d8764ab',
		name: 'Shathrax',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 4,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Deep Speech, telepathy 10',
		skills: 'Bluff +20, Dungeoneering +16, Stealth +18',
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
		hp: 242,
		initiative: 17,
		ac: 32,
		fortitude: 30,
		reflex: 31,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e89a86bb-be52-4ea0-968c-e39d9fe0bc7d',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '3d6+5 damage, and the target is grabbed.',
				damage: '3d6+5 damage',
				category: 1
			},
			{
				id: '5ebd62bc-64cc-4ad0-8fd2-dce2d22b9df5',
				name: 'Bore into Brain',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'or that shathrax is grabbing',
				range: '',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '4d8+5 damage, and the target is dazed (save ends). If this power reduces the target to 0 hit points or fewer, Shathrax devours that target’s brain or makes it a thrall (see below).',
				damage: '4d8+5 damage',
				category: 1
			},
			{
				id: '5c6a387a-7a82-4cb6-80dd-17e3c8ef0a72',
				name: 'Mind Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'mind flayers and their thralls are immune; 3d6+7 psychic damage, and the target is dazed (save ends). If the target is already dazed, it is stunned until the end of Shathrax’s next turn. Miss: Half damage, and the target is not dazed.',
				damage: '3d6+7 psychic damage',
				category: 1
			},
			{
				id: 'e5ec1ebd-88da-41a5-a106-bb1913b2105c',
				name: 'Stalk the Senseless',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Shathrax is invisible to dazed or stunned creatures.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Elite Lurker',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '234ead94-70a0-4d11-a38b-866cdf0a8d02',
		name: 'Skeletal Hammerer',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'warhammer',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 126,
		initiative: 10,
		ac: 23,
		fortitude: 22,
		reflex: 23,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1372b546-c597-48e7-9238-86b4fed50760',
				name: 'Pounding Hammers',
				action: {
					action: 1,
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
				details: 'The skeletal hammerer makes two warhammer attacks against the same target; 1d10+4 damage. If both attacks hit the same target, it is pushed 2 squares after the attack.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'e11dd6e6-b580-49f7-b10e-881beee4217e',
				name: 'Hammerfall',
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
				details: 'The skeletal hammerer makes two pounding hammer attacks (four attacks total).; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '20631e33-0340-44f4-ab60-750a6e4029b8',
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
				range: 'The skeletal hammer makes a melee basic attack against the enemy that triggered the attack.',
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

		info: 'Level 10 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '34c8e214-af1b-4c82-b63a-3422b061ccca',
		name: 'Stormstone Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 21,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6 can’t shift',
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
			score: 27,
			modifier: 8,
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
		hp: 406,
		initiative: 11,
		ac: 37,
		fortitude: 35,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bf77d57e-8d50-4ecf-b60b-9a931bda897a',
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
				details: 'Reach 2; 3d6+9 damage, and the target is pushed 1 square and dazed (save ends).',
				damage: '3d6+9 damage',
				category: 1
			},
			{
				id: '9bf7c90b-b5cf-4d3e-83cd-43774e43ef93',
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
				details: 'The stone golem makes two slam attacks.',
				damage: '',
				category: 1
			},
			{
				id: '2aae4fdf-a365-4993-bc47-6f6e4a07aa1a',
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
				details: 'The stormstone golem moves up to its speed plus 2 and can move through enemies’ spaces, provoking opportunity attacks as normal. When it enters a creature’s space (ally or enemy), the golem makes a slam attack against that creature. The creature remains in its space, and the golem must leave the space after it attacks. The golem must end its rampage in an unoccupied space.',
				damage: 'The stormstone golem moves up to its speed plus 2 and can move through enemies’ spaces',
				category: 1
			},
			{
				id: '8cccb56c-d8a7-479c-bbee-cb20250fb4a4',
				name: 'Death Burst',
				action: null,
				keywords: 'Lightning',
				condition: 'when reduced to 0 hit points',
				range: 'close burst 1',
				attack: {
					bonus: 28,
					defence: 0
				},
				description: '',
				details: 'The stormstone golem explodes in a burst of jagged stones and lightning; 3d6+7 lightning damage, and the space it occupied is difficult terrain until cleared.',
				damage: '3d6+7 lightning damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, sleep',
		tactics: '',

		info: 'Level 21 Elite Soldier',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'fec0b5c0-9360-4eca-8bbf-bb0e6e4d95ce',
		name: 'Suppurating Eidolon',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: 'construct',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Chaotic evil',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 123,
		initiative: 8,
		ac: 27,
		fortitude: 25,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '54335d39-f9a0-4c0b-8f73-d7f630c5e11b',
				name: 'Fearless Followers',
				keywords: '',
				details: 'aura 5; allies within the aura are immune to fear.'
			}
		],
		powers: [
			{
				id: '266ef758-167f-412b-84b5-7715c0508805',
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
				details: 'Reach 2; 2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '4e02947e-b16d-4f10-9765-65b35c8f0a20',
				name: 'Curse of Madness',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the eidolon while unspeakable stance is active',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Tendrils of filthy darkness penetrate the creature that triggered the attack: close burst 10',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'targets the triggering enemy; 1d8+5 psychic damage, and the target is dominated until the end of the suppurating eidolon’s next turn. Miss: Half damage, and the target is instead dazed until the end of the suppurating eidolon’s next turn.',
				damage: '1d8+5 psychic damage',
				category: 5
			},
			{
				id: 'd624edda-a79d-4d19-885c-846f934a84eb',
				name: 'Caustic Inundation',
				action: {
					action: 4,
					trigger: 'when an enemy kills one of the suppurating eidolon’s allies in the eidolon’s line of sight',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d8+5 acid damage.',
				damage: '1d8+5 acid damage',
				category: 5
			},
			{
				id: 'f5866341-325f-4f24-9100-b123c6e68d88',
				name: 'Unspeakable Stance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'The suppurating eidolon assumes a meditative stance. Until the end of its next turn, the eidolon gains resist 20 to all damage, and allies in its line of sight deal 1d6 extra psychic damage on their melee attacks. If the eidolon moves, the effect ends.',
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

		info: 'Level 12 Controller (L)',
		phenotype: 'Large elemental animate (construct)'
	},
	{
		id: '1b0fb434-e688-4fbe-96e7-6e436d963ba3',
		name: 'Tomb Guardian Thrall',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 22,
		role: {
			type: 9,
			flag: 3,
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
		hp: 1,
		initiative: 19,
		ac: 34,
		fortitude: 33,
		reflex: 34,
		will: 32,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '609f1216-4fee-44e8-b0b8-731267327458',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'The skeletal tomb guardian makes two scimitar attacks against the same target; 5 damage (7 damage on a crit). This also holds true for opportunity attacks.',
				damage: '5 damage (7 damage on a crit)',
				category: 1
			},
			{
				id: '31c54e3a-0f91-41b7-863e-9ef4cbc9dfbc',
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
				details: 'The skeletal tomb guardian makes two twin scimitar strike attacks (four scimitar attacks total).',
				damage: '',
				category: 1
			},
			{
				id: '2c8a9e9a-f235-446b-9f81-27718a3c6cc1',
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
				range: 'The skeletal tomb guardian makes a melee basic attack against the enemy.',
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

		info: 'Level 22 Minion',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '75f39ca1-27a5-4c5b-b143-6a865f32b009',
		name: 'Wellspring Horror',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +9; low-light vision',
		movement: '6, climb 3',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Athletics +17',
		equipment: '',
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
		hp: 635,
		initiative: 10,
		ac: 29,
		fortitude: 28,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '131c614f-6d0c-40b3-95ac-e77580468fc1',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+6 damage, and the target is grabbed. The Wellspring horror can grab up to three targets.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '2b76fa7e-2f28-4ef5-b375-dfee1d655420',
				name: 'Bite',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Targets a creature the Wellspring horror has grabbed; 1d6+6 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d6+6 damage',
				category: 3
			},
			{
				id: '4b76c2de-8a69-4a62-8033-be22bfcbedc6',
				name: 'Tentacle Rip',
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
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'Targets a creature the Wellspring horror has grabbed; 5d6+6 damage, and the target is pushed 3 squares, knocked prone, and no longer grabbed.',
				damage: '5d6+6 damage',
				category: 1
			},
			{
				id: 'fb154fb4-1c0d-435e-8c71-ec30eb84904a',
				name: 'Tentacle Flurry',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage, and the target slides 1 square and is knocked prone.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '7d41f44f-21e1-4808-96ec-ec4c2ff718ca',
				name: 'Tentacle Block',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires a target the wellspring horror has grabbed',
				range: '',
				attack: null,
				description: '',
				details: 'The Wellspring horror changes the attack’s target from itself to a creature it is grabbing other than the attacker.',
				damage: '',
				category: 5
			},
			{
				id: '48710140-c663-4dd4-8496-878d9b68894e',
				name: 'Tentacle Scuttle',
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
				details: 'The Wellspring horror shifts 2 squares.',
				damage: 'The Wellspring horror shifts 2 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Solo Controller',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '08836778-3099-4fb8-826a-e58c24730f4d',
		name: 'Wellspring Rioter',
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
		senses: 'Perception +4',
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
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 1,
		initiative: 4,
		ac: 17,
		fortitude: 18,
		reflex: 17,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '9c9bbfa9-11a3-4976-9b79-3dd449fc1957',
				name: 'Mob Rule',
				keywords: '',
				details: 'aura 1; the Wellspringer riot makes a melee basic attack as a free action against each enemy that starts its turn in the aura.'
			}
		],
		powers: [
			{
				id: '5e756c80-36f9-47b4-b96e-2802e609ec5b',
				name: 'Torch and Pitchfork',
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
					bonus: 8,
					defence: 0
				},
				description: '',
				details: '4 damage, and ongoing 3 fire damage (save ends).',
				damage: '4 damage',
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
		id: '46752878-b18e-4f7e-9476-5956fa3329f6',
		name: 'Wellspringer Riot',
		details: '',
		size: 4,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +4',
		movement: '5',
		alignment: 'Unaligned',
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
			score: 9,
			modifier: -1,
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
		hp: 125,
		initiative: 8,
		ac: 22,
		fortitude: 23,
		reflex: 22,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '6f90e0eb-46c7-49c7-80f9-729dfcb960d7',
				name: 'Mob Attack',
				keywords: '',
				details: 'aura 1; the Wellspringer riot makes a melee basic attack as a free action against each enemy that starts its turn in the aura.'
			}
		],
		powers: [
			{
				id: '6fe5be53-f7d5-4894-9896-e0598ecbfc2b',
				name: 'Torches and pitchforks',
				action: {
					action: 1,
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
				details: '1d8+4 damage, and ongoing 5 fire damage (save ends).',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: '530903c0-c0ed-43e6-8429-9b4bfc492679',
				name: 'Panicked Stampede',
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
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'The Wellspringer riot moves 5 squares away from the creature that bloodied it. It attacks each creature whose space it moves through; 2d6 + 4 damage, and the target is pushed 2 squares and knocked prone.',
				damage: '2d6 + 4 damage',
				category: 5
			},
			{
				id: 'f2daead8-1ffc-4a32-aedf-fe97e14aeace',
				name: 'Stragglers',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'and when it is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Each square the Wellspringer riot formerly occupied now contains one Wellspring rioter, who acts just after the riot.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Huge natural humanoid'
	},
	{
		id: '1e3dcad9-fc2b-4382-b11a-68c9288cce7e',
		name: 'Aberrant Flinger',
		details: '',
		size: 2,
		origin: 0,
		type: 0,
		keywords: 'construct',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '8',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 10,
		ac: 25,
		fortitude: 27,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5c349b1d-459f-4763-b476-064c8ada4298',
				name: 'Tentacle Knot',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 8 acid damage, and the target is grabbed. A grabbed target takes 8 acid damage at the start of each of the aberrant flinger’s turns.',
				damage: '8 acid damage',
				category: 1
			},
			{
				id: 'e4e3e61d-4bd5-484a-aa4c-6a607ab9b824',
				name: 'Fling',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'Targets a creature the aberrant flinger is grabbing; 5 damage, and the target slides 3 squares and is knocked prone. The target is no longer grabbed. Miss: The target is no longer grabbed.',
				damage: '5 damage',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, petrification',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Medium aberrant animate (construct)'
	},
	{
		id: '2bf18326-ed5d-425d-bcee-8506b28a74f9',
		name: 'Advanced Eye of Malachi',
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
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Nature +10, Stealth +17',
		equipment: 'battleaxe; handaxe; hide armor',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 95,
		initiative: 9,
		ac: 23,
		fortitude: 21,
		reflex: 21,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '726136d8-3ded-49bc-aa59-733c7aab0ed3',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'bcd3d423-b1dc-46ce-abd4-e5fe1357687a',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: 'b4b33f7c-931c-404c-b682-b53a67543557',
				name: 'Malachi’s Fangs',
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
				attack: null,
				description: '',
				details: 'The eye of Malachi makes a battleaxe attack and a handaxe attack. If both attacks hit, one target takes ongoing 5 psychic damage (save ends).',
				damage: 'one target takes ongoing 5 psychic damage (save ends)',
				category: 1
			},
			{
				id: 'a8cfbad5-9f65-40c9-a2e3-c8dfca2026bf',
				name: 'Scream for Malachi',
				action: null,
				keywords: 'Psychic',
				condition: 'when reduced to 0 hp',
				range: 'Close burst 1',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+5 psychic damage.',
				damage: '2d6+5 psychic damage',
				category: 0
			},
			{
				id: '60c85c6f-0537-4e54-8ca1-be42e2216e3b',
				name: 'Pain Slide',
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
				details: 'Creatures taking ongoing damage can’t attack the eye of Malachi for moving or shifting.',
				damage: 'creatures taking ongoing damage can’t attack the eye of malachi for moving or shifting',
				category: 2
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
		id: '2d941488-8185-459a-9406-b72b7d8ccee2',
		name: 'Arctide Spiralith',
		details: '',
		size: 3,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 12,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '7',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 7,
			modifier: -2,
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
		hp: 97,
		initiative: 12,
		ac: 24,
		fortitude: 23,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad4060e1-ea4d-4c4f-b7e4-174ffa4aac8b',
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
				range: 'Melee 1',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage.',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'a59b7e39-f911-4ccf-8dda-0fe9a95c6de3',
				name: 'Arcane Arc',
				action: {
					action: 5,
					trigger: 'when an enemy moves adjacent to the arctide spiralith',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Melee 1',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d8+5 lightning damage.',
				damage: '1d8+5 lightning damage',
				category: 5
			},
			{
				id: '8f21d6d1-89fa-406e-abbd-81507a82e59d',
				name: 'Focused Strike',
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
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '2d8+5 lightning damage.',
				damage: '2d8+5 lightning damage',
				category: 1
			},
			{
				id: '7b14769e-3cc1-48ea-b33b-65872739bbdb',
				name: 'Bloodied Shock',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d8+5 lightning damage, and the target is dazed (save ends).',
				damage: '1d8+5 lightning damage',
				category: 5
			},
			{
				id: '16026f4c-353a-45d0-b0c3-26a1f2ec71e4',
				name: 'Charged Lightning Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d8+5 lightning damage. The attack deals 1 extra lightning damage for each creature in the burst. Any ally damaged by the attack gains a +1 bonus to any recharge rolls at the start of its next turn. If the bonus causes a recharge roll to exceed six, the result is considered six.',
				damage: '1d8+5 lightning damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '15 variable (2/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Artillery',
		phenotype: 'Large elemental beast (demon)'
	},
	{
		id: '8270a37a-3c6e-4d7e-8c6f-919a76059a75',
		name: 'Arrow of Malachi',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +15',
		equipment: 'arrows (30); hide armor; longbow; longsword',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 90,
		initiative: 12,
		ac: 27,
		fortitude: 24,
		reflex: 27,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '158133ec-5969-450d-83cc-05777da9a52f',
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
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'd17055bc-7250-4e95-abdf-6d1e57c850fd',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d10+8 damage.',
				damage: '1d10+8 damage',
				category: 1
			},
			{
				id: '3885af04-80ec-4a50-9bf1-967e146a074e',
				name: 'Staggering Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: 'requires longbow',
				range: 'Ranged 20',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d10+8 damage, and the target slides 2 squares.',
				damage: '2d10+8 damage',
				category: 1
			},
			{
				id: '5d816533-8225-4b70-b9eb-c3294e9d543b',
				name: 'Aberrant hiss',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8+4 psychic damage, and the target is pushed 2 squares.',
				damage: '1d8+4 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Artillery',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '37ebc43d-8ea6-4d55-98de-feefc24f644a',
		name: 'Battle Wight Bodyguard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 11,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +4; darkvision',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +15',
		equipment: '',
		category: '',
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
		hp: 230,
		initiative: 9,
		ac: 29,
		fortitude: 26,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b4bb5399-8ba6-4681-9fc3-441cf62047b9',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d8+5 necrotic damage, and the target loses 1 healing surge and is immobilized (save ends).',
				damage: '1d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'f074e3be-2ed2-4c79-85ba-fd7bd8395036',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'affects an immobilized target only; 2d8+5 necrotic damage, and the battle wight regains 10 hit points.',
				damage: '2d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'b85f14aa-a049-42ee-94c4-fc96d820e53e',
				name: 'Chosen Target',
				action: {
					action: 5,
					trigger: 'when a marked enemy shifts or makes an attack that does not include the bodyguard',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'The battle wight bodyguard makes a melee basic attack against the triggering creature.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '2db26cec-e624-472a-9d39-1de55180e79f',
				name: 'Indomitable Presence',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Each time a bodyguard attacks an enemy, the target is marked until the end of the bodyguard’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: '6c60a203-5eb3-44e2-9001-740e6fce6e98',
				name: 'Shieldbearer',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Allies adjacent to the bodyguard gain a +2 power bonus to AC.',
				damage: 'Allies adjacent to the bodyguard gain a +2 power bonus to AC',
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

		info: 'Level 11 Elite Soldier',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'ef5c13a0-7e49-42be-9b7c-15af094aeb88',
		name: 'Blightfire Wretch',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '7 (ice walk)',
		alignment: 'Evil',
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
			score: 4,
			modifier: -3,
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
		hp: 1,
		initiative: 8,
		ac: 26,
		fortitude: 27,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b0c79a69-1d69-47c1-8459-d11fc853d16e',
				name: 'Blightfire Claw',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '7 cold damage, and ongoing 3 cold and necrotic damage.',
				damage: '7 cold damage',
				category: 1
			},
			{
				id: '5792bcfe-f78f-48d6-a9f7-1405843ba189',
				name: 'Rise Again',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If a blightfire skeleton wretch is reduced to 0 hit points by an attack that does not deal fire damage or radiant damage, the creature falls prone and appears to be destroyed. At the start of its next turn it regains 1 hit point. However, if it is destroyed 3 times, it is destroyed for good.',
				damage: 'if a blightfire skeleton wretch is reduced to 0 hit points by an attack that does not deal fire damage or radiant damage',
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
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '111f2bc6-eb77-4b4e-a476-59ded90f0446',
		name: 'Canoloth Warbrute',
		details: '',
		size: 2,
		origin: 1,
		type: 1,
		keywords: 'demon',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; blindsight 10',
		movement: '7',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: 'Athletics +15',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 116,
		initiative: 11,
		ac: 27,
		fortitude: 24,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8e28c0e9-f941-4a5a-b207-53988a288a76',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d8+5 damage.',
				damage: '2d8+5 damage',
				category: 1
			},
			{
				id: '9e706ef2-14ed-488c-a0a1-9bc69e6bb4d7',
				name: 'Tongue Lash',
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
				details: 'Reach 4; 1d8+5 damage, and the target is dazed (save ends).',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '7c554876-539e-480d-b583-ff01b7e037b3',
				name: 'Tongue Seize',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Targets a dazed, stunned, unconscious, or helpless creature; reach 4; the target is pulled into an unoccupied space adjacent to the canoloth.',
				damage: 'reach 4',
				category: 3
			},
			{
				id: '97da080f-8357-48e7-b0a7-5c6dd4fa9e94',
				name: 'Canoloth Yowl',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets creatures without the demon keyword; 2d8+3 psychic damage, and the target takes a -2 penalty to all defenses (save ends).',
				damage: '2d8+3 psychic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 7,
				value: -10
			}
		],
		resist: '10 variable (1/encounter)',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium elemental beast (demon)'
	},
	{
		id: 'a39f5d4b-29f4-4090-a0c5-76068bef3247',
		name: 'Chaos Mauler',
		details: '',
		size: 3,
		origin: 1,
		type: 0,
		keywords: '',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7',
		movement: '6',
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
		hp: 1,
		initiative: 9,
		ac: 23,
		fortitude: 25,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4a86462e-caa4-4f32-891d-db57b29befc6',
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
					bonus: 14,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 8 fire damage.',
				damage: '8 fire damage',
				category: 1
			},
			{
				id: '65b7aa70-4bea-4db7-8bb4-8518539d1423',
				name: 'Liquid Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The chaos mauler is perfectly adapted to living in blood chaos. It can move through blood chaos without penalty and takes no damage from contact with blood chaos.',
				damage: 'it can move through blood chaos without penalty and takes no damage from contact with blood chaos',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Large elemental animate'
	},
	{
		id: '309c91d8-21ae-4b49-b005-5742bb8dec78',
		name: 'Darkpact Cyclops Guard',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13; darkvision, truesight 6',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Elven',
		skills: '',
		equipment: 'battleaxe; heavy shield; hide armor',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 8,
		ac: 27,
		fortitude: 26,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0c6ef6da-3b08-4dec-b528-c7ec3c9bde8d',
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
				range: 'Melee 2',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '4 damage.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '6bf1ac0b-0d59-47b4-9ba2-3adfd4343147',
				name: 'Evil Eye',
				action: {
					action: 4,
					trigger: 'when a melee attack misses the darkpact cyclops guard',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The darkpact cyclops guard makes a melee basic attack against the attacker.',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Large fey humanoid'
	},
	{
		id: '8f5c20e9-4a37-401e-b122-e75f7b9ae7f4',
		name: 'Darkpact Shadar-Kai Chainfighter',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Acrobatics +14, Stealth +14',
		equipment: 'leather armor; magic weapon; spiked chain',
		category: 'Shadar-Kai',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 68,
		initiative: 9,
		ac: 20,
		fortitude: 19,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad3d8e7c-44d1-4b0b-b600-64da25f678ed',
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
				range: 'Melee 2',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '2d4+3 damage.',
				damage: '2d4+3 damage',
				category: 1
			},
			{
				id: '9988036c-7303-4359-88f4-bb9a106fa8ba',
				name: 'Dance of Death',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'The darkpact shadar-kai chainfighter shifts 6 squares and makes 3 spiked chain attacks at any points during its move. It can attack a given enemy only once, but it deals 1d6 extra necrotic damage with each successful hit.; 3d8+4 damage.',
				damage: 'but it deals 1d6 extra necrotic damage with each successful hit',
				category: 1
			},
			{
				id: 'd66fb022-2f1e-40fc-aba1-7b235fdc514c',
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
				details: 'The darkpact shadar-kai chainfighter teleports 3 squares and becomes insubstantial until the start of its next turn.',
				damage: 'The darkpact shadar-kai chainfighter teleports 3 squares and becomes insubstantial until the start of its next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'ec982bfb-038c-4034-9fc2-70d5db05431f',
		name: 'Darkpact Stalker',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +15, Thievery +15',
		equipment: 'dagger; keen weapon; scimitar',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 81,
		initiative: 14,
		ac: 24,
		fortitude: 21,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cec8ed01-36cf-4d9c-8fbc-37153a71a74c',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage (crit 1d8+13).',
				damage: '1d8+5 damage (crit 1d8+13)',
				category: 1
			},
			{
				id: '3158c745-2f1a-4c23-bb57-95e458529ea8',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d4+5 damage.',
				damage: '1d4+5 damage',
				category: 1
			},
			{
				id: '0079aac4-90c1-4ad5-8cda-c2aa5b135cd4',
				name: 'Killing Dark',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: null,
				description: '',
				details: 'targets enemies; each target is blinded (save ends). When slain, a darkpact stalker explodes in a spout of darkness.',
				damage: '',
				category: 0
			},
			{
				id: '41bdd9f7-29ec-4d52-a1da-61806c506cdf',
				name: 'Dark Fog',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 0,
					recharge: ''
				},
				keywords: 'Zone',
				condition: '',
				range: 'Area burst 4 within 10',
				attack: null,
				description: '',
				details: 'creates a zone of darkness that blocks line of sight (creatures with darkvision ignore this effect).',
				damage: '',
				category: 1
			},
			{
				id: 'd8909701-42d6-4063-8948-559d3f818254',
				name: 'Keen Scimitar',
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
				details: 'Requires scimitar; if the next attack the darkpact stalker makes before the end of its next turn is a hit, treat it as a critical hit.',
				damage: '',
				category: 3
			},
			{
				id: '1d07dbeb-be61-4f72-8095-405bfa22f0a0',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The darkpact stalker deals 2d6 extra damage on melee and ranged attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '16a9f70b-1434-40fb-9db2-31c84992b899',
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
				details: 'The darkpact stalker moves 4 squares, gains a +4 bonus to AC against opportunity attacks, and gains combat advantage against any target that it ends its move adjacent to.',
				damage: 'The darkpact stalker moves 4 squares',
				category: 2
			},
			{
				id: '7f74d7bf-3d77-4159-af04-e42767589e33',
				name: 'Invisibility',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 3-6'
				},
				keywords: 'Illusion',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The darkpact stalker becomes invisible until the end of its next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Lurker',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '0f849e37-fc82-46e6-bfa2-7c9d8d6eee1c',
		name: 'Elder Troglodyte Curse Chanter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'reptile',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +15; darkvision',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Draconic',
		skills: 'Dungeoneering +15, Endurance +17, Religion +11',
		equipment: 'quarterstaff',
		category: '',
		strength: {
			score: 16,
			modifier: 3,
			cost: 9
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 127,
		initiative: 7,
		ac: 27,
		fortitude: 26,
		reflex: 21,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '923322e9-625c-441f-99fa-aaf75b980dfa',
				name: 'Troglodyte Stench',
				keywords: '',
				details: 'aura 1; living enemies in the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: '05fb1d79-bbed-4058-ae4e-b3bfadda4c6a',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage.',
				damage: '1d8+4 damage',
				category: 1
			},
			{
				id: 'b2c28f65-61b8-4de8-89c3-ad8bf0b39dcd',
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
				details: '1d4+4 damage.',
				damage: '1d4+4 damage',
				category: 1
			},
			{
				id: 'ca957e3e-4feb-400d-97c0-15204692dbbc',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '1d8+6 poison damage, and the target is weakened (save ends).',
				damage: '1d8+6 poison damage',
				category: 1
			},
			{
				id: '7f0f163c-6fab-4ad3-a3ff-92a688715cf8',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'the target takes ongoing 5 necrotic damage and is slowed (save ends both).',
				damage: 'the target takes ongoing 5 necrotic damage and is slowed (save ends both)',
				category: 1
			},
			{
				id: '782a0112-db00-4bc9-8965-89ddb5e1ad7a',
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
				details: 'all allies in the burst gain +5 speed until the end of the troglodyte curse chanter’s next turn.',
				damage: 'all allies in the burst gain +5 speed until the end of the troglodyte curse chanter’s next turn',
				category: 3
			},
			{
				id: '0b2c7425-11b0-486e-aea6-6c14fc92d944',
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

		info: 'Level 12 Controller (L)',
		phenotype: 'Medium natural humanoid (reptile)'
	},
	{
		id: 'f9ad3dd6-d570-4ef4-bd19-e6e5d84d188e',
		name: 'Elomir (undead)',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Deep Speech, Elven',
		skills: 'Athletics +19, Intimidate +18',
		equipment: 'heavy shield; longsword; scale armor',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 270,
		initiative: 14,
		ac: 30,
		fortitude: 27,
		reflex: 25,
		will: 26,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [
			{
				id: 'a06e5c31-e912-4ecf-b8e9-1fa27d625a24',
				name: 'Mind Undead',
				keywords: '',
				details: 'aura 5; undead allies within the aura deal an extra 5 psychic damage with melee attacks.'
			}
		],
		powers: [
			{
				id: '47fbaa32-f56f-4be5-a7df-a85fc070315b',
				name: 'Mindripping Soulsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Necrotic, Psychic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, ongoing 5 necrotic and psychic damage, and the target is marked (save ends both).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'bd0b8060-3453-461e-a548-8431800b9a11',
				name: 'Dual Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Necrotic, Psychic, Weapon',
				condition: 'requires mindripping soulsword',
				range: 'Elomir makes two melee basic attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '0c22904c-5110-47d1-978f-ff40cd92a33d',
				name: 'Disruptive Smite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Necrotic, Psychic, Weapon',
				condition: 'requires mindripping soulsword',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d8+8 damage, ongoing 5 necrotic and psychic damage, and whenever the target is the target of a power that has the healing keyword, it takes 10 necrotic damage (save ends both).',
				damage: '2d8+8 damage',
				category: 1
			},
			{
				id: 'b200b801-bfdb-4238-9493-50e66faa558c',
				name: 'Fires of Unmaking',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Fire, Necrotic, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'living creatures take 4d8+5 fire and necrotic damage, and ongoing 10 necrotic and psychic damage (save ends). Undead creatures in the burst deal an extra 2d6 necrotic and fire damage until the end of Elomir’s next turn.',
				damage: 'living creatures take 4d8+5 fire and necrotic damage',
				category: 1
			},
			{
				id: 'b625e9ed-9ab2-4731-9654-8ccaa8253c3d',
				name: 'Deathly Step',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Elomir ignores difficult terrain when he shifts.',
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

		info: 'Level 14 Elite Soldier (L)',
		phenotype: 'Medium aberrant humanoid (undead)'
	},
	{
		id: 'c4c6a0a8-e600-4e61-9245-a109d2b6f3d1',
		name: 'Far Eidolon',
		details: '',
		size: 2,
		origin: 0,
		type: 0,
		keywords: 'construct',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '4',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 276,
		initiative: 9,
		ac: 25,
		fortitude: 29,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd0c51f7c-1fde-4b18-a664-7acaa71b3f16',
				name: 'Twisting Slam',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and ongoing 10 psychic damage (save ends). While taking this ongoing damage, the target deals 5 psychic damage to any of its allies that are adjacent to it at the start of its turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '36619920-0357-4b31-8c40-7768e372e098',
				name: 'Unnatural Retribution',
				action: {
					action: 4,
					trigger: 'when an enemy attacks the eidolon while it is in mindbending stance',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 1d8+4 psychic damage, and ongoing 5 psychic damage (save ends).',
				damage: '1d8+4 psychic damage',
				category: 5
			},
			{
				id: '5d16cdae-9973-4462-bd65-589ad66d273b',
				name: 'Mindbending Stance',
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
				details: 'Until the end of the eidolon’s next turn, enemies that start their turns within 5 squares of it take 5 psychic damage, and a -2 penalty to attack rolls and defenses. If the eidolon moves, the effect ends.',
				damage: 'enemies that start their turns within 5 squares of it take 5 psychic damage',
				category: 1
			},
			{
				id: 'fc4d7d6b-6699-4f83-9fa7-52bae9f2811a',
				name: 'Statue Form',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the far eidolon remains still, it looks like a statue. In this form, it has resist 10 all and it can be recognized as a creature with a DC 30 Perception check.',
				damage: 'it has resist 10 all and it can be recognized as a creature with a DC 30 Perception check',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, petrification',
		tactics: '',

		info: 'Level 14 Elite Controller',
		phenotype: 'Medium aberrant animate (construct)'
	},
	{
		id: '648baf84-f278-4dd8-8eea-35bcdc14b0ae',
		name: 'Ghost Harpy',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: 'fly 8 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Stealth +15',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 169,
		initiative: 10,
		ac: 28,
		fortitude: 27,
		reflex: 27,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4ab20b6e-cbb1-40cb-849c-26ff63c0830d',
				name: 'Spirit Claw',
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
				details: '1d10+6 necrotic damage.',
				damage: '1d10+6 necrotic damage',
				category: 1
			},
			{
				id: '26cd403c-3f04-4df5-ae0b-93c4e50f6b13',
				name: 'Death Kiss',
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
					bonus: 16,
					defence: 3
				},
				description: '',
				details: '2d6+6 psychic damage, and the target takes a -2 penalty to Fortitude (save ends).',
				damage: '2d6+6 psychic damage',
				category: 3
			},
			{
				id: 'ebfbc965-7a32-456c-8cb0-ef73bb9a2318',
				name: 'Spirit Call',
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
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'deafened creatures are immune; the target is pulled 4 squares and immobilized (save ends). Sustain Minor: Any target that has not yet saved against the effect is pulled 4 squares and immobilized (save ends).',
				damage: 'the target is pulled 4 squares and immobilized (save ends)',
				category: 1
			},
			{
				id: '770b338f-e01a-4d5c-ac50-23958853a347',
				name: 'Despairing Screech',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d6+6 thunder damage, and the target is dazed (save ends).',
				damage: '2d6+6 thunder damage',
				category: 1
			},
			{
				id: '0cace4ad-7f6e-4803-8848-894af1fe6c14',
				name: 'Lurking Voice',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'As long as it doesn’t move or otherwise attack, the harpy ghost can use Stealth to hide while using spirit’s call.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 10,
				value: -10
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'eb24d31e-f7ec-43d7-a931-8454f39be2dc',
		name: 'Githyanki Thug',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Githyanki',
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
		hp: 1,
		initiative: 6,
		ac: 24,
		fortitude: 26,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '71338d4a-adb0-4873-b31a-960650f0fcb7',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '6 damage, and the target is immobilized (save ends).',
				damage: '6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Large natural humanoid'
	},
	{
		id: '41d16cfc-f57f-46fd-ae27-768cff3e5376',
		name: 'Icetomb Wight',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '6 (ice walk)',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 148,
		initiative: 12,
		ac: 32,
		fortitude: 28,
		reflex: 26,
		will: 27,
		regeneration: {
			value: 0,
			details: 'special (see Resist)'
		},
		auras: [],
		powers: [
			{
				id: '69291e3f-242c-48da-ba34-a10c3b7c3220',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d6+7 cold damage, and the target is marked (save ends).',
				damage: '2d6+7 cold damage',
				category: 1
			},
			{
				id: 'cc089dbe-c0b1-4186-9a77-34774ca9da6f',
				name: 'Freezing Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: 'Reach 2; 2d6+7 cold damage, and the target is grabbed. If the icetomb wight uses this power on a target it has already grabbed, that target loses a healing surge.',
				damage: '2d6+7 cold damage',
				category: 1
			},
			{
				id: 'c7d0ab92-1d2f-40dd-90b7-c45b3462058e',
				name: 'Encase in Ice',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: 'requires a grabbed target',
				range: '',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'Targets the creature the icetomb wight is grabbing; 2d6+7 cold damage, and the target is no longer grabbed but is restrained and takes ongoing 10 cold damage (save ends both), and it is knocked prone. Aftereffect: The target is slowed and takes ongoing 5 cold damage (save ends both).',
				damage: '2d6+7 cold damage',
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
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '10 cold (if the wight takes cold damage, it gains regeneration 5 until it takes fire or radiant damage, or until the end of the encounter)',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Large natural humanoid (undead)'
	},
	{
		id: '71bb9264-dbfc-4001-90b1-739f7315fb1c',
		name: 'Icewight Castellan',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +14; darkvision',
		movement: '6 (ice walk)',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
		equipment: 'heavy shield; longsword; plate armor',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 284,
		initiative: 12,
		ac: 30,
		fortitude: 28,
		reflex: 25,
		will: 27,
		regeneration: {
			value: 0,
			details: 'special (see Resist)'
		},
		auras: [],
		powers: [
			{
				id: '7d8ba07c-5527-4edf-b386-9294b40ab96e',
				name: 'Blightfire Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Cold, Necrotic, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d8+6 necrotic damage, and the target is immobilized and takes ongoing 10 cold and necrotic damage (save ends both). If this attack hits a creature taking ongoing cold or necrotic damage, the icewight warrior also drains a healing surge.',
				damage: '2d8+6 necrotic damage',
				category: 1
			},
			{
				id: 'b339fb80-3756-4090-9181-17d2706d1632',
				name: 'Soul Harvest',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Healing, Necrotic',
				condition: 'or helpless target',
				range: 'Ranged 5',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '2d8+7 necrotic damage, and the icewight warrior and all undead allies within 2 squares regain 10 hit points.',
				damage: '2d8+7 necrotic damage',
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
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: '10 cold (if the wight takes cold damage, it gains regeneration 5 until it takes fire or radiant damage, or until the end of the encounter)',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '6d8cdd22-79d8-4e32-ab23-65a9e0e8db7c',
		name: 'Kaorti Fallen',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; darkvision',
		movement: '7, climb 4 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +18, Intimidate +17, Stealth +18',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		intelligence: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 145,
		initiative: 15,
		ac: 30,
		fortitude: 26,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c94cbd4e-7ed2-4cff-972e-543774255c90',
				name: 'Ribbon Dagger',
				action: {
					action: 1,
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
				details: '2d4+6 damage, and ongoing 5 damage (save ends).',
				damage: '2d4+6 damage',
				category: 1
			},
			{
				id: 'b216e4ea-ced6-4610-989c-d9851ef62c6b',
				name: 'Twisting Ray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '1d10+7 psychic damage, and the target is weakened (save ends).',
				damage: '1d10+7 psychic damage',
				category: 1
			},
			{
				id: 'e0fed45c-0307-43c6-9ab4-9be4417aa77d',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Kaorti fallen deals an extra 2d6 damage to creatures it has combat advantage against.',
				damage: 'the kaorti fallen deals an extra 2d6 damage to creatures it has combat advantage against',
				category: 0
			},
			{
				id: '6e14c648-a05b-4e3f-ac8a-353118159f14',
				name: 'Mind Slide',
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
				details: 'The Kaorti fallen can shift 3 squares, including through an enemy’s space. It must end its shift in an unoccupied space. It doesn’t provoke opportunity or immediate action attacks for shifting this way.',
				damage: 'The Kaorti fallen can shift 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '10 acid and 10 psychic',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Skirmisher',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '24fbba0d-b79f-4cf3-b945-b7e433992063',
		name: 'Kaorti Skybleeder',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10; all-around vision, darkvision',
		movement: '6, fly 6 (hover)',
		alignment: 'Chaotic evil',
		languages: 'Deep Speech',
		skills: '',
		equipment: '',
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
			score: 20,
			modifier: 5,
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 168,
		initiative: 12,
		ac: 26,
		fortitude: 28,
		reflex: 26,
		will: 25,
		regeneration: {
			value: 5,
			details: 'if the skybleeder takes fire or force damage, its regeneration does not function until the end of its next turn'
		},
		auras: [
			{
				id: '3b4d8f81-a333-4e64-82b8-58be9d845081',
				name: 'Acidic Mist',
				keywords: '',
				details: '(Acid) aura 1; a creature in the aura takes 5 acid damage at the start of its turn.'
			}
		],
		powers: [
			{
				id: '6e489586-d206-4452-959d-7aac2b77b040',
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
				details: 'Reach 2; 1d6+7 damage.',
				damage: '1d6+7 damage',
				category: 1
			},
			{
				id: 'ece0f88a-2d9c-4bf0-862e-98a97ab894e5',
				name: 'Skybleeder Fury',
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
				details: 'The skybleeder makes two claw attacks, or three claw attacks at -2 to each attack roll.',
				damage: 'or three claw attacks at -2 to each attack roll',
				category: 1
			},
			{
				id: '6d3f4eb7-6df1-4508-8a72-63105f68cdc5',
				name: 'Lashing Tentacles',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d4+7 acid damage (3d4 + 7 acid damage against a target the skybleeder is grabbing), and the target is pulled 2 squares and grabbed. A skybleeder can grab up to three targets.',
				damage: '1d4+7 acid damage (3d4 + 7 acid damage against a target the skybleeder is grabbing)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '10 acid and 10 psychic',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'b45197c6-2aa2-4f36-8523-5f9a7c91cecc',
		name: 'Kaorti Thrall',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '6, climb 4',
		alignment: 'Chaotic evil',
		languages: 'Deep Speech',
		skills: '',
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
			score: 25,
			modifier: 7,
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 16,
		ac: 28,
		fortitude: 27,
		reflex: 28,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cb8bf33b-dd25-49ec-a271-b6d424b97515',
				name: 'Ribbon Dagger',
				action: {
					action: 1,
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
				id: 'f139f813-1d27-4e86-b221-44574082c8ea',
				name: 'Mind Shift',
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
				details: 'The Kaorti thrall shifts 1 square. It doesn’t provoke opportunity or immediate action attacks for shifting this way.',
				damage: 'The Kaorti thrall shifts 1 square',
				category: 3
			},
			{
				id: 'cbb0add8-37d9-4951-9c9c-ac1251450fee',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Kaorti thrall deals an extra 3 damage to foes it has combat advantage against.',
				damage: 'the kaorti thrall deals an extra 3 damage to foes it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '10 acid and 10 psychic',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Minion',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: 'cffd3c2a-5c02-4317-b5d1-437faa65c0ff',
		name: 'Keening Spirit',
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
		senses: 'Perception +11; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: '',
		skills: '',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 15,
		ac: 30,
		fortitude: 26,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: '122731bd-ab6d-4ada-98a9-c91a0667b412',
				name: 'Tormenting Keening',
				keywords: '',
				details: 'aura 1; any enemy within the aura that takes damage from a power that has the thunder or psychic keyword takes 5 extra psychic damage.'
			}
		],
		powers: [
			{
				id: 'cffd95a9-4271-42db-93cc-56e9e33190c8',
				name: 'Passing Strike',
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
					bonus: 17,
					defence: 2
				},
				description: '',
				details: 'The keening spirit can shift up to 1 square before or after the attack; 7 thunder damage.',
				damage: '7 thunder damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			},
			{
				type: 10,
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
		id: 'eae1e003-cbc6-4ef7-bd62-7f543658f0fd',
		name: 'Lingering Specter',
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
		senses: 'Perception +12; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 66,
		initiative: 16,
		ac: 26,
		fortitude: 23,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: '21711268-a218-443f-8c6d-4fc96fe848cd',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: '340686d2-8a59-408d-879f-1fb635e73372',
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
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d8+5 necrotic damage.',
				damage: '2d8+5 necrotic damage',
				category: 1
			},
			{
				id: 'd11d08a7-1885-4f1f-84aa-c0cbb95909e9',
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
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d6 psychic damage, and the target is knocked prone.',
				damage: '3d6 psychic damage',
				category: 1
			},
			{
				id: '581d19f4-ffdc-4a0a-83eb-d97e47414de5',
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
				value: -15
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

		info: 'Level 12 Lurker',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '1d080fe2-0609-4a35-8478-29780c9a1965',
		name: 'Malachi',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common, Deep Speech',
		skills: 'Arcana +20, History +20',
		equipment: 'implement, orb',
		category: '',
		strength: {
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 314,
		initiative: 9,
		ac: 30,
		fortitude: 38,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'aebdf5b0-ead3-4695-a97a-876bdcab127d',
				name: 'Disrupting Claws',
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
				details: '2d8+3 necrotic damage, and the target regains only half the number of hit points granted by healing powers (save ends).',
				damage: '2d8+3 necrotic damage',
				category: 1
			},
			{
				id: 'eb5d0717-e131-4431-8521-def97cf75d69',
				name: 'Psychic Assault',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 1d10+7 psychic damage.',
				damage: '1d10+7 psychic damage',
				category: 3
			},
			{
				id: '2016b30e-dec7-473f-a5c9-8035a6126742',
				name: 'Distortion Field',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Conjuration, Psychic, Zone',
				condition: '',
				range: 'Close burst 2',
				attack: null,
				description: '',
				details: 'a rippling field of energy causes disturbing reality distortions; enemies that start their turns in the zone take 5 psychic damage and -2 to defenses until the start of their next turn. The distortion field moves with Malachi. While the field persists, Malachi gains +5 to checks to escape a grab and +5 saving throws against the immobilized, restrained, and slowed conditions. Sustain Minor: The zone persists.',
				damage: 'enemies that start their turns in the zone take 5 psychic damage and -2 to defenses until the start of their next turn',
				category: 1
			},
			{
				id: '353bbaf6-ad44-44bb-b548-95c1ff7fcd4a',
				name: 'Unraveling Blast',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '2d10+7 psychic damage, and ongoing 10 psychic damage (save ends). If the target has created any effect that has a duration (save ends, until end of turn, until end of encounter) or can be sustained, that effect ends. Miss: 1d10+7 psychic damage and ongoing 5 psychic damage (save ends).',
				damage: '2d10+7 psychic damage',
				category: 1
			},
			{
				id: '5c077c97-918f-4d45-b959-516fa92f616b',
				name: 'Mindbending Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Malachi teleports 5 squares. Malachi can choose a creature that he starts or arrives adjacent to, forcing that creature to make a melee basic attack against another adjacent creature as a free action.',
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

		info: 'Level 16 Elite Controller',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '1293f3f4-921d-4a1f-9eb3-51713d7c5e5c',
		name: 'Malachi’s Butcher',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 14,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: '4',
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
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 564,
		initiative: 10,
		ac: 26,
		fortitude: 29,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'bd7ac8ca-a3f9-455f-8de7-6301c319ea66',
				name: 'Cleaver',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d10+7 damage, and ongoing 5 damage (save ends). On a critical hit, the ongoing damage increases to 10 and has Aftereffect: ongoing 5 damage (save ends). Against a grabbed target, the butcher scores a critical hit on a natural roll of 18-20.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: 'b9ed121a-d14c-49da-9b46-5d7d45566fc4',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8+7 damage, and the target is grabbed. The butcher can grab only one creature at a time, and it can’t make claw attacks while grabbing.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '2bfa05fa-7081-4eb2-aa34-1f1b37029bbf',
				name: 'Butchery',
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
				details: 'The butcher makes a cleaver and a claw attack.',
				damage: '',
				category: 1
			},
			{
				id: '8b6f1fc9-77ea-43c7-aee3-dea5129adcfd',
				name: 'Mangling Maw',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires a grabbed target',
				range: '',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Targets a creature the butcher is grabbing; 2d10+5 damage, and the butcher regains 5 hit points.',
				damage: '2d10+5 damage',
				category: 3
			},
			{
				id: 'c0d071de-1058-4c05-a920-64effba3a689',
				name: 'Spew Meat Mote',
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
				details: 'Malachi’s butcher takes 10 damage. A meat mote appears in a square of the butcher’s choice within 2 squares. It acts right after the butcher. The butcher can have only four active meat motes at a time.',
				damage: 'malachi’s butcher takes 10 damage',
				category: 3
			},
			{
				id: '96bee3c9-72ab-4415-8d7c-b5cfdd4de393',
				name: 'Rupture',
				action: null,
				keywords: '',
				condition: 'when reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'Four meat motes appear in the butcher’s space. They take their turn immediately after the butcher is reduced to 0 hit points.',
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

		info: 'Level 14 Solo Brute',
		phenotype: 'Large natural animate (undead)'
	},
	{
		id: '595432a3-0f5a-4126-a5a1-f36b7d281b6b',
		name: 'Malachi’s Shade Witch',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +17, Stealth +14',
		equipment: 'leather armor',
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
			score: 9,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 228,
		initiative: 9,
		ac: 26,
		fortitude: 24,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd6b4fe8c-b6db-462b-ae8a-f10b68a1c6ce',
				name: 'Shadowfire Touch',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+4 fire and necrotic damage, and the shade witch is invisible to the target until she attacks.',
				damage: '2d6+4 fire and necrotic damage',
				category: 1
			},
			{
				id: '1c3e0152-b974-4cc9-8a6c-1060fab8c9ef',
				name: 'Shadowed Eye',
				action: {
					action: 0,
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
					defence: 2
				},
				description: '',
				details: '2d6+5 psychic damage, and the target has no line of sight to anything beyond 2 squares until the end of the shade witch’s next turn.',
				damage: '2d6+5 psychic damage',
				category: 1
			},
			{
				id: 'fea833b4-f869-44ab-96da-760f0eedfdae',
				name: 'Shadow Fury',
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
				details: 'Malachi’s shade witch makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a08f9bd9-0740-47f8-8f20-92f34c201ac3',
				name: 'Soul Flaying',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when a target within sight becomes bloodied'
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '4d8+7 necrotic damage, and the target can’t use healing surges until the end of the shade witch’s next turn.',
				damage: '4d8+7 necrotic damage',
				category: 1
			},
			{
				id: 'f1956990-584f-4358-97aa-e85ad7167d0b',
				name: 'Shade Voice',
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
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '3d6+7 necrotic damage, and the target is dazed (save ends).',
				damage: '3d6+7 necrotic damage',
				category: 1
			},
			{
				id: 'f71373dd-bcb8-4284-9ccc-64b501a53558',
				name: 'Shadowbite Jaunt',
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
				details: 'Malachi’s shade witch teleports 6 squares and becomes insubstantial until the start of her next turn. Enemies adjacent to her when she teleports take 1d10 + 5 necrotic damage and are knocked prone.',
				damage: 'enemies adjacent to her when she teleports take 1d10 + 5 necrotic damage and are knocked prone',
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
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '71d470c2-4411-4c48-887a-41d266425488',
		name: 'Meat Mote',
		details: '',
		size: 0,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 12,
		role: {
			type: 9,
			flag: 3,
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		wisdom: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 1,
		initiative: 15,
		ac: 28,
		fortitude: 23,
		reflex: 28,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6c75e2c1-903a-44f4-97df-2c252b44c496',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '5 damage, and the target is slowed until the end of the meat mote’s next turn.',
				damage: '5 damage',
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
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Tiny natural animate (undead)'
	},
	{
		id: 'f25aead5-b35b-47ad-94a1-48fe7ce757e1',
		name: 'Mezzodemon Beastlord',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'demon',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: true
		},
		senses: 'Perception +15; darkvision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +12',
		equipment: 'trident',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 132,
		initiative: 11,
		ac: 30,
		fortitude: 27,
		reflex: 24,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '38a22e36-df1d-4899-ad38-a0df0e8fc6f1',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+6 damage, and the mezzodemon slides the target 2 squares.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'c014a740-6977-4952-a3d8-8f3f74e18614',
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
					bonus: 17,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d8+5 poison damage, and ongoing 5 poison damage (save ends).',
				damage: '2d8+5 poison damage',
				category: 1
			},
			{
				id: '64ac53f9-056b-4488-bba9-92a5e3cb1bf5',
				name: 'Beastly Command',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'One allied elemental beast within 5 squares of the mezzodemon beastlord makes a melee attack as a free action.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 3
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

		info: 'Level 13 Soldier (L)',
		phenotype: 'Medium elemental humanoid (demon)'
	},
	{
		id: 'f25e6bec-06d3-4b3a-83f9-9d3f250ace20',
		name: 'Roper Eidolon',
		details: '',
		size: 3,
		origin: 4,
		type: 3,
		keywords: '',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +12',
		movement: '4',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 280,
		initiative: 10,
		ac: 28,
		fortitude: 27,
		reflex: 24,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c5ed9ce5-5664-4e6a-a4de-173c0900d139',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d10+10 damage.',
				damage: '2d10+10 damage',
				category: 1
			},
			{
				id: 'd75afad6-2b8d-4cf1-9912-6bcb2f8aaa5c',
				name: 'Tentacle',
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
					defence: 2
				},
				description: '',
				details: 'Reach 10; 2d10+4 damage, and the target is grabbed. While the target is grabbed, it is also weakened.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: 'df17ac31-d55c-42eb-a0d3-8f894dcbe5a7',
				name: 'Double Attack',
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
				details: 'The roper makes two tentacle attacks.',
				damage: '',
				category: 1
			},
			{
				id: '3ea27b72-a752-4889-bfbe-1b60f0bda01b',
				name: 'Reel',
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
					bonus: 18,
					defence: 1
				},
				description: '',
				details: 'Targets a creature the roper eidolon has grabbed; on a hit, the target is pulled 5 squares.',
				damage: 'the target is pulled 5 squares',
				category: 3
			},
			{
				id: '0eb93a40-f523-44fc-b235-76e88d182fae',
				name: 'Pillar Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If the roper eidolon that does not move, retracts its tentacles, and keeps its eye and mouth closed resembles a rough-hewn pillar. In this form, it has resist 10 all and it can be recognized as a creature with a DC 30 Perception check.',
				damage: 'it has resist 10 all and it can be recognized as a creature with a DC 30 Perception check',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison, petrification',
		tactics: '',

		info: 'Level 14 Elite Controller',
		phenotype: 'Large natural magical beast'
	},
	{
		id: '88f40dd4-a321-4960-a7bd-a2e47e0b6729',
		name: 'Sarshan',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +15; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Abyssal, Common, Elven, Deep Speech',
		skills: 'Arcana +23, Diplomacy +23',
		equipment: '',
		category: '',
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
			score: 19,
			modifier: 4,
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 650,
		initiative: 10,
		ac: 28,
		fortitude: 25,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: 'd6edd3bf-ea86-426d-abe0-4e271c93881f',
				name: 'Blood Chaos',
				keywords: '',
				details: 'aura 2; an enemy that ends its turn in the aura takes ongoing 10 acid damage (save ends).'
			}
		],
		powers: [
			{
				id: 'c0753581-cecc-4ac8-8037-633f0e4e887b',
				name: 'Katar',
				action: {
					action: 1,
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
				details: '1d10+6 damage, and ongoing 5 acid damage (save ends).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '0df69418-9b6a-402c-9e1b-3dc28aab34f3',
				name: 'Triple Attack',
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
				details: 'Sarshan makes three katar attacks.',
				damage: '',
				category: 1
			},
			{
				id: '370563af-1095-499d-b4c1-173e5e07a7fb',
				name: 'Shadow Attack',
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
				details: 'Sarshan teleports 6 squares, makes a triple attack and teleports 6 more squares, then becomes insubstantial until the start of his next turn.',
				damage: 'Sarshan teleports 6 squares',
				category: 1
			},
			{
				id: '08bc98ad-4e97-48be-9909-b7c75c8fc701',
				name: 'Blood Chaos Flare',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'the target takes ongoing 10 acid damage (save ends). First Failed Saving Throw: The target is slowed and takes ongoing 10 acid damage (save ends). Second Failed Saving Throw: The target is transformed into a mass of slime (treat as petrified; no save). The Remove Affliction ritual can reverse this effect.',
				damage: 'the target takes ongoing 10 acid damage (save ends)',
				category: 1
			},
			{
				id: 'd22e1fb0-814f-482c-92ed-dfb3883408b7',
				name: 'Chaos Nova',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 15,
					defence: 1
				},
				description: '',
				details: '4d10+5 acid damage. Miss: Half damage.',
				damage: '4d10+5 acid damage',
				category: 1
			},
			{
				id: '4d79536f-5b82-43f6-bf4f-1a0c4158de44',
				name: 'Chaos Scream',
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
				details: 'Sarshan makes a blood chaos flare attack.',
				damage: '',
				category: 5
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
		immune: '',
		tactics: '',

		info: 'Level 12 Solo Controller',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: '436c1936-2339-460e-a150-1b47180745d0',
		name: 'Scion of Chaos',
		details: '',
		size: 4,
		origin: 1,
		type: 0,
		keywords: '',
		level: 11,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 120,
		initiative: 9,
		ac: 25,
		fortitude: 24,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [
			{
				id: 'c31ee498-8d49-4a05-b9d3-527df28d1edd',
				name: 'Whirling Tentacles',
				keywords: '',
				details: 'aura 2; the scion of chaos slides any creature that starts its turn in the aura 2 squares.'
			}
		],
		powers: [
			{
				id: '11dd1f62-a131-4328-b5eb-f85f297263e9',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+4 fire damage.',
				damage: '2d8+4 fire damage',
				category: 1
			},
			{
				id: '59d2d2f6-e4f3-4ace-adc6-84359e6d7b29',
				name: 'Staggering Strike',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 14,
					defence: 1
				},
				description: '',
				details: '2d6+6 damage and the target is pushed 3 squares.',
				damage: '2d6+6 damage and the target is pushed 3 squares',
				category: 1
			},
			{
				id: 'c71eff64-6982-4b7a-a837-70f12cbf733d',
				name: 'Coils of Immobility',
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
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'targets enemies only; 2d8+4 damage and the target is restrained (save ends).',
				damage: '2d8+4 damage and the target is restrained (save ends)',
				category: 1
			},
			{
				id: 'caa88d68-4ea3-4717-8257-615edaf97cbb',
				name: 'Liquid Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The scion of chaos is perfectly adapted to living in blood chaos. It can move through blood chaos without penalty and takes no damage from contact with blood chaos.',
				damage: 'it can move through blood chaos without penalty and takes no damage from contact with blood chaos',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'acid 10, fire 10',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Controller',
		phenotype: 'Huge elemental animate'
	},
	{
		id: '75e702ee-a279-449f-a896-8129904d10da',
		name: 'Shadow Hook Horror',
		details: '',
		size: 3,
		origin: 5,
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
				id: 'fbc1f4ea-7283-4e00-8940-698b11ea2089',
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
				details: 'reach 2; 1d12+7 damage, and the target is pulled 1 square.',
				damage: '1d12+7 damage',
				category: 1
			},
			{
				id: '552e864f-1091-47de-8a4e-e6666fd9467b',
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
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'The shadow hook horror makes two hook attacks, each at a -2 penalty. If both hooks hit the same target, the hook horror deals an extra 1d12 damage and the target can be grabbed.; 2d8+6 damage.',
				damage: 'the hook horror deals an extra 1d12 damage and the target can be grabbed',
				category: 1
			},
			{
				id: '9ff0828f-4dfc-465d-8a32-4146da8993b3',
				name: 'Bite',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires a grabbed target',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Targets a creature the shadow hook horror has grabbed; 1d8+7 damage.',
				damage: '1d8+7 damage',
				category: 3
			},
			{
				id: '810df1f5-0bdb-44c8-bfc1-228a878956a7',
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
			},
			{
				id: '12ed8298-9a6d-4f05-8076-49fb6977aa03',
				name: 'Shadow Cloak',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: 'requires activation in an area of dim light',
				range: '',
				attack: null,
				description: '',
				details: 'The shadow hook horror becomes invisible until the end of its next turn.',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Large shadow beast'
	},
	{
		id: '10225626-4b55-435f-8269-62d91210e4ab',
		name: 'Shattered Wraith',
		details: '',
		size: 1,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 16,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +10; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic evil',
		languages: '',
		skills: 'Stealth +19',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		constitution: {
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 18,
		ac: 31,
		fortitude: 25,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'af48359e-f744-48b1-8cb8-efe114d20590',
				name: 'Shatter Touch',
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
				details: '5 necrotic damage, and the target gains vulnerable necrotic 5.',
				damage: '5 necrotic damage',
				category: 1
			},
			{
				id: '183f79f2-836b-4847-9f60-8ac0bf5fe3de',
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
				details: 'The shattered wraith shifts 6 squares.',
				damage: 'The shattered wraith shifts 6 squares',
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

		info: 'Level 16 Minion',
		phenotype: 'Small shadow humanoid (undead)'
	},
	{
		id: '29a1a9d4-f41e-4454-9aaa-568e959aa209',
		name: 'Skulking Terror',
		details: '',
		size: 2,
		origin: 1,
		type: 0,
		keywords: '',
		level: 11,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6, fly 6',
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
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 83,
		initiative: 13,
		ac: 25,
		fortitude: 21,
		reflex: 23,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f14138f6-6962-41e6-813e-3898d71d7477',
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
				details: '2d6+6 damage.',
				damage: '2d6+6 damage',
				category: 1
			},
			{
				id: '599e13aa-b9b1-4e00-918d-bb6822dcb58d',
				name: 'Lethargic Countenance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target is slowed and grants combat advantage to the skulking terror until the end of the skulking terror’s next turn. After all attacks are resolved, the skulking terror teleports 8 squares and gains a +4 power bonus to all defenses against ranged and area attacks.',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'bccad8f3-17d5-4059-9b0b-7104acb0367f',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'The skulking terror deals an extra 2d6 damage on melee attacks against any target it has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '2b767b45-5b70-402c-b5f0-2c39fe9a0a25',
				name: 'Liquid Body',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The skulking terror is perfectly adapted to living in blood chaos. It can move through blood chaos without penalty and takes no damage from contact with blood chaos.',
				damage: 'it can move through blood chaos without penalty and takes no damage from contact with blood chaos',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Lurker',
		phenotype: 'Medium elemental animate'
	},
	{
		id: 'b59bf058-d93c-4856-873d-3c3e8a487699',
		name: 'Skull Lord Servitor',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 0,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +18, Insight +15, Intimidate +18',
		equipment: 'implement, staff; ritual book',
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
			score: 18,
			modifier: 4,
			cost: 16
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 55,
		initiative: 12,
		ac: 28,
		fortitude: 25,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: '1cefedef-9234-467a-87f9-74d1daba60c7',
				name: 'Master of the Grave',
				keywords: '',
				details: 'aura 2; undead allies in the aura gain regeneration 5 and a +2 bonus to saving throws. This aura ends when the skull of death’s command is destroyed.'
			}
		],
		powers: [
			{
				id: 'da49ba30-2362-4f00-ad87-b30e8380ffe4',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+4 damage plus 1d6 necrotic damage.',
				damage: '1d8+4 damage plus 1d6 necrotic damage',
				category: 1
			},
			{
				id: '6851333e-f7cf-4d88-94ec-92b6ca3349d4',
				name: 'Skull of Bonechilling Fear',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Fear',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '1d10+3 cold damage, and the target is pushed 5 squares.',
				damage: '1d10+3 cold damage',
				category: 3
			},
			{
				id: 'af0f84db-1dda-4659-b915-089d3cfddc42',
				name: 'Skull of Death’s Command',
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
				details: 'the skull lord restores a destroyed undead minion within range. The restored undead minion’s level must be no higher than the skull lord’s level +2. The restored minion stands in the space where it fell (or in any adjacent space if that space is occupied) as a free action, has full normal hit points, and can take actions (as normal) on its next turn.',
				damage: 'The restored undead minion’s level must be no higher than the skull lord’s level +2',
				category: 3
			},
			{
				id: '7d8fa0c0-648d-49c3-8c19-e14743fefa3e',
				name: 'Skull of Withering Flame',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: '2d6+5 fire and necrotic damage.',
				damage: '2d6+5 fire and necrotic damage',
				category: 3
			},
			{
				id: '2c878719-a8b0-47bf-92a4-38bb4d26eb18',
				name: 'Triple Skulls',
				action: null,
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When a skull lord is reduced to 0 hit points, one of its skulls (determined randomly from the three powers above) is destroyed, and it loses the ability to use that power. If the creature has any skulls remaining, it instantly heals to full hit points (55 hit points). When all three skulls are destroyed, the skull lord is destroyed as well.',
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

		info: 'Level 14 Artillery (L)',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'adf056cb-daa7-4090-a43a-2e6139bf72fb',
		name: 'Storm Abishai Sniper',
		details: '',
		size: 2,
		origin: 3,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +23; low-light vision',
		movement: '8, fly 6, overland flight 12',
		alignment: 'Evil',
		languages: 'Common, Draconic',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 98,
		initiative: 9,
		ac: 24,
		fortitude: 24,
		reflex: 24,
		will: 22,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: '9fc92179-1925-4600-a2b9-b5dcc3d06ce6',
				name: 'Sting',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d6+7 lightning damage.',
				damage: '2d6+7 lightning damage',
				category: 1
			},
			{
				id: 'e5e104f1-6ee9-428e-ae69-1d9d3af63664',
				name: 'Lightning Discharge',
				action: {
					action: 4,
					trigger: 'when an enemy hits the abishai with a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 17,
					defence: 2
				},
				description: '',
				details: '1d6+8 lightning damage, and the triggering enemy is pushed 1 square and stunned until the end of its next turn.',
				damage: '1d6+8 lightning damage',
				category: 5
			},
			{
				id: '7fef6330-e305-4c3a-b3c4-6ba52bfe396f',
				name: 'Thunderbolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Thunder',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '2d6+8 thunder damage.',
				damage: '2d6+8 thunder damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 5,
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

		info: 'Level 12 Artillery',
		phenotype: 'Medium immortal beast'
	},
	{
		id: 'be23e391-8574-49d1-b58a-c63a4870d02f',
		name: 'Volarn',
		details: '',
		size: 2,
		origin: 0,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 0,
			flag: 1,
			leader: true
		},
		senses: 'Perception +12; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +19, Insight +12, Religion +19',
		equipment: '',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 22,
			modifier: 6,
			cost: -1
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
		hp: 246,
		initiative: 12,
		ac: 28,
		fortitude: 27,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cdef1e0c-07b2-4f7f-9b6e-1469cee07885',
				name: 'Ribbon Dagger',
				action: {
					action: 1,
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
				details: '4d4+4 damage, and ongoing 15 damage (save ends).',
				damage: '4d4+4 damage',
				category: 1
			},
			{
				id: 'c8bb9cf3-5eef-48d2-8841-0c48c9408725',
				name: 'Mind Knives',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '2d8+7 psychic damage, and ongoing 5 psychic damage.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: 'd8e26935-dd4d-4f51-af4e-49d542b79cd3',
				name: 'Twisting Orb',
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
					defence: 2
				},
				description: '',
				details: '2d10+7 psychic damage, and the target is stunned until the end of Volarn’s next turn.',
				damage: '2d10+7 psychic damage',
				category: 1
			},
			{
				id: '2d9b92be-2e9d-4901-ab47-6ca3f603147e',
				name: 'Mind Warp',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Teleportation',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+7 psychic damage, and the target slides 2 squares. Volarn can teleport anywhere in the burst.',
				damage: '2d8+7 psychic damage',
				category: 1
			},
			{
				id: '004ec26b-125e-4f8d-88ab-e00524aeb35d',
				name: 'Out of Nowhere',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Volarn teleports 6 squares and makes one mind knives attack while teleporting. He has combat advantage against his target and deals an extra 5 psychic damage.',
				damage: 'he has combat advantage against his target and deals an extra 5 psychic damage',
				category: 2
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -10
			},
			{
				type: 8,
				value: -10
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Elite Artillery (L)',
		phenotype: 'Medium aberrant humanoid'
	},
	{
		id: '7a872b8c-1522-43c3-8c3f-0ee6e99bcddc',
		name: 'Young Shadow Hulk',
		details: '',
		size: 3,
		origin: 5,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision, tremorsense 5',
		movement: '6, burrow 2 (tunneling); phasing',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 252,
		initiative: 11,
		ac: 28,
		fortitude: 30,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '94c9571d-728f-4522-85e2-54a702ce5fe2',
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
				details: 'Reach 2; 2d6+8 damage.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'b0a9959d-2bd2-4211-b234-0dbdcbc27c03',
				name: 'Grabbing Double Attack',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'The young shadow hulk makes two claw attacks. If both claw attacks hit the same target, the target can be grabbed. A grabbed target takes ongoing 10 damage from the young shadow hulk’s mandibles until it escapes. While grabbing a target, the only melee attack the young shadow hulk can make is a single claw attack against the grabbed target.',
				attack: {
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d6+5 damage.',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: 'a7ef1d68-b1e8-4841-b3f1-a170b43ce5f9',
				name: 'Dazing Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is dazed (save ends).',
				damage: '',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Soldier',
		phenotype: 'Large shadow beast'
	},
	{
		id: '84a93001-b51f-4ccf-b837-d66e2af070b0',
		name: 'Bone Archivist',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'undead',
		level: 14,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +19; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: '',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 23,
			modifier: 6,
			cost: -1
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
		hp: 109,
		initiative: 9,
		ac: 26,
		fortitude: 25,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ba629024-09b3-40b8-82c6-6dcffa1a0989',
				name: 'Mind Touch',
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
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '1d10+6 psychic damage, and the target takes a -2 penalty to Will and is slowed until the end of the bone archivist’s next turn. The bone archivist can shift 3 squares.',
				damage: '1d10+6 psychic damage',
				category: 1
			},
			{
				id: '0ec1d4ae-e5fe-44e8-970d-722cf6406722',
				name: 'Siphon Memory',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '2d4+6 psychic damage, and the target can make only basic attacks or use at-will powers until the end of the bone archivist’s next turn.',
				damage: '2d4+6 psychic damage',
				category: 1
			},
			{
				id: '1532d7e5-4cb3-4f59-a2dd-720000e7d4f9',
				name: 'Knowledge Barrage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Area burst 2 within 10',
				attack: {
					bonus: 17,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 3d6+6 damage, and the target is dazed (save ends).',
				damage: '3d6+6 damage',
				category: 1
			}
		],
		damageModifiers: [
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
		immune: 'disease',
		tactics: '',

		info: 'Level 14 Artillery',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: 'fd2cbc57-8751-47ee-8a36-8a454f4ecee5',
		name: 'Bone Scribe',
		details: '',
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
		senses: 'Perception +11; darkvision',
		movement: '7',
		alignment: 'Evil',
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		wisdom: {
			score: 8,
			modifier: -1,
			cost: 0
		},
		charisma: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		hp: 1,
		initiative: 9,
		ac: 27,
		fortitude: 25,
		reflex: 26,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '02075e2f-ca6f-4e72-9978-4d384f2a0a7f',
				name: 'Mind Touch',
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
					defence: 3
				},
				description: '',
				details: '4 psychic damage, and the target takes a -2 penalty to Will and is slowed until the end of the bone scribe’s next turn. The bone scribe can shift 1 square.',
				damage: '4 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Medium natural humanoid (undead)'
	},
	{
		id: '9dc8e30c-6cf7-4cfd-96bc-276cded90e82',
		name: 'Cockroach Swarm',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'swarm',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6, climb 6 (spider climb)',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +17',
		equipment: '',
		category: '',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 124,
		initiative: 14,
		ac: 28,
		fortitude: 24,
		reflex: 25,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '8dd73631-30b0-453c-9ff9-a399188d168e',
				name: 'Stench',
				keywords: '',
				details: '(Poison) aura 2; enemies within the aura take a –2 penalty to attack rolls.'
			},
			{
				id: 'cd5e6ff8-cf5d-48ea-81f6-a2d34c45d962',
				name: 'Swarm Attack',
				keywords: '',
				details: 'aura 1; the cockroach swarm makes a melee basic attack against each enemy that begins its turn within the aura.'
			}
		],
		powers: [
			{
				id: '869257ba-c2eb-4b86-bdc6-9240b3014fbd',
				name: 'Corrosive Surge',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d8+5 acid damage, and ongoing 5 acid damage (save ends).',
				damage: '1d8+5 acid damage',
				category: 1
			},
			{
				id: '6c887ca5-ec1a-4eb9-8c2e-d8aafade1562',
				name: 'Scuttling Mass',
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
				details: 'The cockroach swarm shifts 3 squares.',
				damage: 'The cockroach swarm shifts 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: 'half damage from melee or ranged attacks',
		vulnerable: '10 against close or area attacks',
		immune: '',
		tactics: '',

		info: 'Level 12 Skirmisher',
		phenotype: 'Medium natural beast (swarm)'
	},
	{
		id: '1bb19e9b-0cca-4318-97d5-6f0d58973d3b',
		name: 'Crusty',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 11,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +16',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		charisma: {
			score: 3,
			modifier: -4,
			cost: 0
		},
		hp: 94,
		initiative: 11,
		ac: 27,
		fortitude: 27,
		reflex: 26,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'eeed3bdc-d2d8-443c-8bea-09958f6d28fe',
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
				details: '1d8+5 damage.',
				damage: '1d8+5 damage',
				category: 1
			},
			{
				id: '4a634f2a-fb67-443a-9d62-c8236b4df37e',
				name: 'Roach Barrel',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: '1d6+5 damage, and the target is slowed and takes ongoing 10 damage (save ends both).',
				damage: '1d6+5 damage',
				category: 1
			},
			{
				id: 'df793e4d-c32e-4b70-b6ee-eb2e32b058d9',
				name: 'Eruption of Maggots',
				action: null,
				keywords: 'Fear',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'the target is dazed (save ends). The crusty explodes in a fountain of squirming maggots.',
				damage: '',
				category: 0
			},
			{
				id: '0c386c03-d118-4707-ab6d-94ee6ff3358a',
				name: 'Crusty Hide',
				action: null,
				keywords: '',
				condition: 'while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The crusty takes a -2 penalty to AC and Fortitude.',
				damage: 'The crusty takes a -2 penalty to AC and Fortitude',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Artillery',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: 'bb392688-98a3-401b-b1b9-287dbabcefcf',
		name: 'Eater of the Dead',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 10,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Chaotic evil',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		charisma: {
			score: 6,
			modifier: -2,
			cost: 0
		},
		hp: 1,
		initiative: 11,
		ac: 28,
		fortitude: 26,
		reflex: 26,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3355a8e2-e269-4c64-b800-dd14b260baa9',
				name: 'Hatchet',
				action: {
					action: 1,
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
				details: '7 damage.',
				damage: '7 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'd944ca4b-31b7-44e8-a538-cffc3d26faf4',
		name: 'Eluron Bladewhisper',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 7,
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
		hp: 120,
		initiative: 12,
		ac: 21,
		fortitude: 19,
		reflex: 21,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fe875239-d214-49d9-9ed4-601971ac64ef',
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
				details: '1d10+5 damage.',
				damage: '1d10+5 damage',
				category: 1
			},
			{
				id: '40dead3a-e18f-4d6f-9abc-92990b42324e',
				name: 'Finishing Move',
				action: {
					action: 7,
					trigger: 'when an adjacent enemy becomes bloodied',
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
				details: 'Eluron Bladewhisper targets the enemy that has just become bloodied; 2d10+8 damage, ongoing 10 damage, and the target grants combat advantage (save ends both).',
				damage: '2d10+8 damage',
				category: 5
			},
			{
				id: '21a317eb-a1f1-4e2f-9c05-702b997b5a1b',
				name: 'Shadow Throw',
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
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d6+5 damage, and the target slides 2 squares and is knocked prone. Eluron can make a Stealth check to become hidden from the thrown enemy.',
				damage: '1d6+5 damage',
				category: 3
			},
			{
				id: '1c4126c0-9b83-43c3-b0ad-6d99fd8b5cb8',
				name: 'Gloomstrike',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'If Eluron Bladewhisper hits a target that can’t see her, the target is blinded until the end of Eluron Bladewhisper’s next turn.',
				damage: '',
				category: 0
			},
			{
				id: '9a493899-7b8d-4d44-b9cf-6b769d00a683',
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
				details: 'Eluron Bladewhisper teleports 3 squares and becomes insubstantial until the start of her next turn.',
				damage: 'Eluron Bladewhisper teleports 3 squares and becomes insubstantial until the start of her next turn',
				category: 2
			},
			{
				id: 'cbf729f5-bfe8-48f7-a04f-efa5a169e13a',
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
				details: 'Eluron Bladewhisper turns invisible until the end of her turn and moves up to her speed. Eluron Bladewhisper cannot use this power while bloodied.',
				damage: '',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Elite Lurker',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'ab0503b7-2727-41a1-9768-80854e125f2a',
		name: 'Filth King',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Bluff +18, Intimidate +18, Stealth +14, Thievery +14',
		equipment: 'hide armor; holy symbol',
		category: '',
		strength: {
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 23,
			modifier: 6,
			cost: -1
		},
		hp: 278,
		initiative: 9,
		ac: 28,
		fortitude: 25,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b0455c0-4369-4b88-8a46-b14f04c9c95a',
				name: 'Festering Scratch',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d4+2 damage, and ongoing 10 poison damage (save ends).',
				damage: '1d4+2 damage',
				category: 1
			},
			{
				id: 'b8c72173-567c-43d1-94f3-8a94ae92cc1c',
				name: 'Awaken Greed',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Psychic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: '2d8+6 psychic damage, and the target slides 4 squares and is slowed until the end of the Beggar King’s next turn.',
				damage: '2d8+6 psychic damage',
				category: 1
			},
			{
				id: '9ff38a99-230d-4059-b753-dd61bfd4ab62',
				name: 'Driving Sickness',
				action: null,
				keywords: 'Poison',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Beggar King makes two festering scratch attacks. If both hit the same target, on its next turn, the target must move away from the Beggar King or the ongoing damage increases by 5 points (maximum 15).',
				damage: 'the target must move away from the beggar king or the ongoing damage increases by 5 points (maximum 15)',
				category: 0
			},
			{
				id: '2be69970-33b8-4bd6-84bb-3c270891c32a',
				name: 'Flanker Strike',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Poison',
				condition: 'usable when an enemy flanks the beggar king',
				range: '',
				attack: null,
				description: '',
				details: 'The Beggar King makes a festering scratch attack against the triggering enemy.',
				damage: '',
				category: 5
			},
			{
				id: 'bb047ec2-6241-4bbf-a7dc-5d7952593caf',
				name: 'Vitriolic Spray',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Implement',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: '1d10+4 acid damage, and the target is blinded until the end of the Beggar King’s next turn.',
				damage: '1d10+4 acid damage',
				category: 1
			},
			{
				id: '9bb3a028-9c51-4a10-9e4e-201b16cbce8c',
				name: 'Vengeful Return',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 3,
					recharge: ''
				},
				keywords: '',
				condition: 'when the filth king is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'For 5 minutes, the Beggar King appears dead and gains all the effects of the unconscious condition, but he cannot die. He can still see and hear. After 5 minutes, his body is restored, and he regains 20 hit points.',
				damage: 'For 5 minutes',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Controller',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c5bb4da7-61be-4c6c-9d08-15060187b54d',
		name: 'Flesh Spider',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'living construct',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: '8, climb 4 (spider climb)',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +16',
		equipment: '',
		category: '',
		strength: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		constitution: {
			score: 11,
			modifier: 0,
			cost: 1
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 1,
		initiative: 11,
		ac: 27,
		fortitude: 23,
		reflex: 25,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '237782dd-41f7-44f3-8b13-2aac9c873e05',
				name: 'Slobbering Fangs',
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
				details: '5 damage (7 damage with combat advantage).',
				damage: '5 damage (7 damage with combat advantage)',
				category: 1
			},
			{
				id: 'd22cc157-cea3-488e-aac0-de7fac1aa8fa',
				name: 'Evasive Scuttle',
				action: {
					action: 5,
					trigger: 'when the target of a melee or close attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The flesh spider shifts 4 squares.',
				damage: 'The flesh spider shifts 4 squares',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural animate (living construct)'
	},
	{
		id: '673be843-b2bd-4e18-a3f0-f08db8387dc7',
		name: 'Gallia',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +15, Athletics +9, Insight +13',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 108,
		initiative: 14,
		ac: 27,
		fortitude: 22,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '8efcc08f-2569-4914-b466-270c425b65e5',
				name: 'Unarmed Strike',
				action: {
					action: 1,
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
				details: '2d8+3 damage.',
				damage: '2d8+3 damage',
				category: 1
			},
			{
				id: '7a65e5eb-9b06-4607-8163-6b0e037e7a24',
				name: 'Stunning Strike',
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
				details: '1d8+3 damage, and the target is stunned until the end of Gallia’s next turn.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '82e9e29f-8691-409c-9686-5354ad735f88',
				name: 'Relentless Pursuit',
				action: {
					action: 4,
					trigger: 'when an adjacent enemy shifts away from gallia',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Gallia shifts to remain adjacent to the enemy. Gallia cannot use this power if the enemy shifts using a movement mode Gallia does not possess.',
				damage: '',
				category: 5
			},
			{
				id: 'c8832668-d7a7-4ddb-ae87-d0e996b092d1',
				name: 'Iron Mind',
				action: {
					action: 5,
					trigger: 'when gallia would be hit by an attack',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Gallia gains a +2 bonus to all defenses until the end of her next turn.',
				damage: 'Gallia gains a +2 bonus to all defenses until the end of her next turn',
				category: 5
			},
			{
				id: '6f4c35b0-4131-4ca3-a64f-583b7e3e8e32',
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
				details: 'Gallia can fly 5 squares.',
				damage: 'Gallia can fly 5 squares',
				category: 2
			},
			{
				id: '68081f67-a70d-4049-b56a-e24470ad206f',
				name: 'Trace Chance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'the next melee attack Gallia makes against the target gains a +5 power bonus to the attack roll and, if it hits, it is automatically a critical hit.',
				attack: null,
				description: '',
				details: 'no attack roll required',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a49f8b6e-68df-42d3-ba29-3589fb4c923c',
		name: 'Giant Cockroach',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; darkvision',
		movement: '6, climb 6 (spider climb)',
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
		hp: 1,
		initiative: 14,
		ac: 28,
		fortitude: 23,
		reflex: 25,
		will: 20,
		regeneration: null,
		auras: [
			{
				id: '8d2fceca-fccf-4683-b758-56a3450e510c',
				name: 'Stench',
				keywords: '',
				details: '(Poison) aura 2; enemies within the aura take a -2 penalty to attack rolls.'
			}
		],
		powers: [
			{
				id: 'a96dcf45-d0cb-49f8-a97a-fc19b8a9f79a',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '2d7aaef4-c3d2-443d-a0ee-ae7738a444ce',
				name: 'Scuttle',
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
				details: 'The giant cockroach shifts 3 squares.',
				damage: 'The giant cockroach shifts 3 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium natural beast'
	},
	{
		id: '1e7d8b23-9562-480e-8161-1743233250fb',
		name: 'Githyanki Captain',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +10',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Arcana +15, History +17',
		equipment: 'plate armor',
		category: 'Githyanki',
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
			score: 19,
			modifier: 4,
			cost: -1
		},
		charisma: {
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 256,
		initiative: 11,
		ac: 29,
		fortitude: 26,
		reflex: 25,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ba0bf7e7-1d71-4f32-84e4-1123766adc21',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '1d10+6 damage plus 1d10 psychic damage, plus an extra 2d10 psychic damage against an immobilized target.',
				damage: '1d10+6 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: 'b3df9547-4443-4f02-8f0b-28fdf3994cab',
				name: 'Mindhook',
				action: {
					action: 0,
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
				details: '2d8+3 psychic damage, and the githyanki captain or an ally of the captain’s choice marks the target (save ends).',
				damage: '2d8+3 psychic damage',
				category: 1
			},
			{
				id: '8df03708-a490-45f0-b34f-65da96729e1a',
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
				details: 'The githyanki captain makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a4c212f1-3f2c-4bb4-91e9-c03d9e78a700',
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
				details: 'the githyanki captain or an ally within range can fly up to 8 squares.',
				damage: 'the githyanki captain or an ally within range can fly up to 8 squares',
				category: 2
			},
			{
				id: '8c518677-9da0-4973-9265-2aad92bc5596',
				name: 'Psychic Upheaval',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 2d10+4 psychic damage, and the target is immobilized (save ends). Allies within the area gain 10 temporary hit points.',
				damage: '2d10+4 psychic damage',
				category: 1
			},
			{
				id: 'c5a15589-a0c3-47a7-8211-58ef019a134b',
				name: 'Astral Engagement',
				action: {
					action: 2,
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
				details: 'The captain teleports 6 squares to a square adjacent to an enemy, and one ally within 5 squares of the captain’s start or end point can charge the same enemy.',
				damage: 'The captain teleports 6 squares to a square adjacent to an enemy',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2d933315-acbe-443e-a70c-84e3c24215b0',
		name: 'Githyanki Dragonknight',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +11',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +17, Athletics +17',
		equipment: 'scale armor',
		category: 'Githyanki',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 272,
		initiative: 14,
		ac: 28,
		fortitude: 27,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6bbd1cb8-037d-4726-9d83-bd7e03e82b7c',
				name: 'Psychic Lance',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+5 psychic damage, and if the githyanki dragonknight charged, the target is pushed 2 squares.',
				damage: '2d10+5 psychic damage',
				category: 1
			},
			{
				id: '55d27201-496d-4373-81ab-9b91b67d011f',
				name: 'Silver Bastard Sword',
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
				details: '1d10+5 damage plus 1d10 psychic damage, and the dragonknight or its mount can shift 2 squares.',
				damage: '1d10+5 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: '16910d9b-661d-41a5-946f-6b4b128ca0ae',
				name: 'Mindslice',
				action: {
					action: 0,
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
				details: '2d8+3 psychic damage.',
				damage: '2d8+3 psychic damage',
				category: 1
			},
			{
				id: '3cb78494-49ef-4d45-a57a-864043809623',
				name: 'Knightly Prowess',
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
				details: 'The githyanki dragonknight can make two basic attacks. If the dragonknight charged and made a psychic lance attack, the dragonkight or its mount can instead shift 2 squares, then the dragonknight makes a silver longsword attack.',
				damage: 'the dragonkight or its mount can instead shift 2 squares',
				category: 1
			},
			{
				id: 'b464eb16-2695-4bcb-9258-05b2d26aaa87',
				name: 'Hatred’s Juggernaut',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Reach 2; the githyanki dragonknight moves up to it or its mount’s speed, making a psychic lance against any enemy that comes within reach.',
				damage: 'Reach 2',
				category: 1
			},
			{
				id: 'dcda9542-4196-46c8-a974-f797af59727e',
				name: 'Telekinetic Tether',
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
				details: 'The githyanki dragonknight can fly up to 12 squares, fly back to its mount’s saddle, or fall to the ground without taking falling damage.',
				damage: 'or fall to the ground without taking falling damage',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Elite Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c79c63a2-7f06-4f99-9d1e-413ffbc1caf1',
		name: 'Githyanki Lancer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +16',
		equipment: 'scale armor',
		category: 'Githyanki',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 134,
		initiative: 15,
		ac: 28,
		fortitude: 26,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '227e1721-243b-49ea-8832-21bcc0092c3c',
				name: 'Psychic Lance',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+5 psychic damage, and if the githyanki lancer charged, the target is pushed 2 squares.',
				damage: '2d10+5 psychic damage',
				category: 1
			},
			{
				id: '23c45f8c-f208-495d-94b3-144a838ff411',
				name: 'Silver Longsword',
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
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '1d8+5 damage plus 1d8 psychic damage, and the githyanki lancer or its mount can shift 1 square.',
				damage: '1d8+5 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: 'bcc5aeed-f43a-4026-8583-cb2de90958f7',
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
					bonus: 17,
					defence: 3
				},
				description: '',
				details: '2d8+5 psychic damage.',
				damage: '2d8+5 psychic damage',
				category: 1
			},
			{
				id: '73010e85-d8d2-40bc-91e4-d619e46e7d60',
				name: 'Telekinetic Tether',
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
				details: 'The githyanki lancer can fly up to 10 squares, fly back to its mount’s saddle, or fall to the ground without taking falling damage.',
				damage: 'or fall to the ground without taking falling damage',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a983f1f2-d72e-45a6-994d-a41a7700fe1c',
		name: 'Githyanki Myrmidon',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5',
		alignment: 'Chaotic evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'chainmail',
		category: 'Githyanki',
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
		hp: 1,
		initiative: 12,
		ac: 28,
		fortitude: 24,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5c16fd20-7687-49d8-b58a-df2f435ab714',
				name: 'Silver Short Sword',
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
				details: '7 damage, plus an extra 5 psychic damage if the target is immobilized.',
				damage: '7 damage',
				category: 1
			},
			{
				id: '11b61065-90ef-4b80-804d-2c1441958c29',
				name: 'Telekinetic Grasp',
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
					bonus: 15,
					defence: 1
				},
				description: '',
				details: 'medium or smaller target; the target is immobilized (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c8000a88-ef40-495d-8496-064f83da627b',
		name: 'Gluttonous Cube',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'blind, ooze',
		level: 13,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; tremorsense 10',
		movement: '4',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +14',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 1,
			modifier: -5,
			cost: 0
		},
		hp: 324,
		initiative: 9,
		ac: 27,
		fortitude: 26,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd9de6532-350a-4dbd-bf82-abd586188dc0',
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
					defence: 1
				},
				description: '',
				details: '2d6+5 damage, and the target is immobilized (save ends).',
				damage: '2d6+5 damage',
				category: 1
			},
			{
				id: '6f56d3c3-7f65-4b63-ac85-bc2559ee4db5',
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
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'The gluttonous cube attacks one or two Medium or smaller targets; the target is dazed and takes ongoing 15 acid damage until it escapes the grab. A creature that escapes the grab shifts to a square of its choosing adjacent to the cube. The cube can move normally while creatures are engulfed within it.',
				damage: 'the target is dazed and takes ongoing 15 acid damage until it escapes the grab',
				category: 1
			},
			{
				id: 'aa43901c-af81-4b12-9abb-1fbd75283a02',
				name: 'Translucent',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'A gluttonous cube is invisible until seen (Perception DC 29) or until it attacks. Creatures that fail to notice the gluttonous cube might walk into it, automatically becoming engulfed.',
				damage: '',
				category: 0
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
		immune: 'gaze',
		tactics: '',

		info: 'Level 13 Elite Brute',
		phenotype: 'Large natural beast (blind, ooze)'
	},
	{
		id: '78f19464-c60a-4714-bebc-e20d62ffc96b',
		name: 'Grim Tailor',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7, climb 3 (spider climb)',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +12, Stealth +18',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 126,
		initiative: 13,
		ac: 29,
		fortitude: 25,
		reflex: 28,
		will: 23,
		regeneration: null,
		auras: [
			{
				id: 'adf21fd2-bdaa-445b-a708-01829ab108ff',
				name: 'Snagging Thread',
				keywords: '',
				details: 'aura 1; enemies starting their turns within the aura are slowed until the start of their next turns.'
			}
		],
		powers: [
			{
				id: '5e2e5a5a-3fcb-48eb-a674-5ac0c697d104',
				name: 'Needle',
				action: {
					action: 1,
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
				details: '2d8+4 damage, and the target is slowed (save ends). Targets take a -2 penalty to saving throws against this slowed condition.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: '5f836b85-73ca-437e-84f7-c87d4a7eda6f',
				name: 'Expert Stitch',
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
					defence: 1
				},
				description: '',
				details: 'Slowed targets only; target is restrained (save ends). Aftereffect: The target is immobilized (save ends). Targets take a -2 penalty to saving throws against this restrained condition.',
				damage: 'Targets take a -2 penalty to saving throws against this restrained condition',
				category: 1
			},
			{
				id: '37aeffa9-beee-4506-a2f0-1d8fa7695d81',
				name: 'Tuck Away',
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
				details: 'The Tailor enters an adjacent restrained creature’s space and pulls the target onto its back. The target takes a -2 to attack rolls the Tailor while it is tucked away. Whenever the Tailor moves, the target moves with it. When the target is no longer restrained, it escapes into an empty adjacent square.',
				damage: 'The target takes a -2 to attack rolls the Tailor while it is tucked away',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: 'c400b418-1a4c-477a-a0c3-bafdcb229fd5',
		name: 'Ham',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'blind, living construct',
		level: 14,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; blindsight 10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +11',
		equipment: 'hide armor',
		category: '',
		strength: {
			score: 23,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 25,
			modifier: 7,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 9,
			modifier: -1,
			cost: 0
		},
		hp: 175,
		initiative: 10,
		ac: 25,
		fortitude: 29,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '453793e7-6898-4031-b488-91364d662a89',
				name: 'Cleaver',
				action: {
					action: 1,
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
				details: '2d6+3 damage, and ongoing 5 damage (save ends).',
				damage: '2d6+3 damage',
				category: 1
			},
			{
				id: '0483f152-c1aa-4c36-a274-c00a12fa2005',
				name: 'Head Butt',
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
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d6+8 damage, and the target is dazed (save ends).',
				damage: '1d6+8 damage',
				category: 3
			},
			{
				id: '686a8d6c-5672-4db1-9f9c-cc250feeaaf7',
				name: 'Slice and Dice',
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
					defence: 0
				},
				description: '',
				details: 'Dazed, stunned, or helpless targets only; 2d6+8 damage, and ongoing 10 damage (save ends).',
				damage: '2d6+8 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Brute',
		phenotype: 'Medium natural humanoid (blind, living construct)'
	},
	{
		id: '2e04d4c4-eea4-48d5-965b-da2277b8f451',
		name: 'Human Murderer',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'human',
		level: 10,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Intimidate +9, Stealth +13',
		equipment: 'battleaxe; hide armor',
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
		hp: 128,
		initiative: 8,
		ac: 22,
		fortitude: 22,
		reflex: 19,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '67960e44-0434-4556-9a00-6347ab30ac3d',
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
				details: '2d10+6 damage, and the target is slowed until the end of the murderer’s next turn.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: 'd4bfd531-478e-4d20-a2d1-91807ef0bf45',
				name: 'Executioner’s Swing',
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
				details: 'Slowed creatures only; 3d10+6 damage.',
				damage: '3d10+6 damage',
				category: 1
			},
			{
				id: '5eb96abc-7916-4cfc-89bc-105b0cd83a0c',
				name: 'Deadly Arc',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '2d10+6 damage, ongoing 5 damage (save ends), and the target is slowed until the end of the murderer’s next turn.',
				damage: '2d10+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 10 Brute',
		phenotype: 'Medium natural humanoid (human)'
	},
	{
		id: 'dd3a59e3-cbfd-46a5-87ac-a492c26c2c3a',
		name: 'Joaquin Tantelroy',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +14; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Dwarven, Elven',
		skills: 'Acrobatics +17, Bluff +16, Diplomacy +18, History +16, Insight +11',
		equipment: 'parrying dagger; rapier',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 232,
		initiative: 14,
		ac: 26,
		fortitude: 23,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '266c05fe-f08d-4679-bfb9-bbf7e01594a2',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d8+6 damage, and Joaquin can shift 1 square. Miss: No damage, but Joaquin can still shift 1 square.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '4164a0bb-a585-471b-976c-36a739506be7',
				name: 'Dagger',
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
					bonus: 15,
					defence: 0
				},
				description: '',
				details: '1d4+6 damage.',
				damage: '1d4+6 damage',
				category: 3
			},
			{
				id: 'ec7072fc-1329-4c6f-867f-b78469883ea5',
				name: 'Cruel Taunt',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'one enemy; the target is pulled 1 square, and grants Joaquin combat advantage until the start of his next turn.',
				damage: 'the target is pulled 1 square',
				category: 3
			},
			{
				id: '08f22cb2-e42d-4211-bdac-021bd2bb1277',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Joaquin’s melee attacks deal 3d6 extra damage to targets he has combat advantage against.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '2e1ca96e-9f7c-449d-b043-10d91d0a1c88',
				name: 'Acrobatic Retreat',
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
				details: 'If Joaquin is marked, end this condition. Joaquin shifts 1 square and then moves up to his speed.',
				damage: 'Joaquin shifts 1 square and then moves up to his speed',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6c9f4809-386e-47ee-8f5a-3920e158ab9b',
		name: 'Laughing Shadow Groveler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Bluff +16, Stealth +15',
		equipment: 'katar; leather armor; shuriken',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 103,
		initiative: 14,
		ac: 27,
		fortitude: 24,
		reflex: 26,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f399fe87-15ad-4a13-98f0-0613cfeae7d4',
				name: 'Katar',
				action: {
					action: 1,
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
				details: '2d6+6 damage (crit 18+2d6).',
				damage: '2d6+6 damage (crit 18+2d6)',
				category: 1
			},
			{
				id: '914b5b0a-b236-475c-b787-a045377841be',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 6/12',
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
				id: '5c2426a1-91f5-4d5e-9d4f-fd7aac34b6c4',
				name: 'Covert Attack',
				action: {
					action: 4,
					trigger: 'when an ally attacks an enemy the ally has marked because of cringe',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires katar or shuriken',
				range: '',
				attack: null,
				description: '',
				details: 'Targets the enemy the triggering ally attacked; the groveler makes a katar attack against an adjacent enemy or a shuriken attack against a nonadjacent enemy. Hit: 4d6 + 6 damage (with katar, crit 30 damage + 2d6).',
				damage: '4d6 + 6 damage (with katar',
				category: 5
			},
			{
				id: 'eab43bf7-aed2-45e1-9f17-e3aa84905a86',
				name: 'Cringe',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'requires an ally in the area',
				range: 'Close burst 10',
				attack: null,
				description: '',
				details: 'the groveler chooses up to one ally in the area per enemy in the area. The enemy is considered to be marked by the chosen ally until the end of the groveler’s next turn. Each ally can mark only one enemy in this way. The groveler gains +2 to all defenses against marked enemies.',
				damage: 'The groveler gains +2 to all defenses against marked enemies',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Lurker',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '74888a58-5ccc-46ad-9a21-74a4c12db93e',
		name: 'Laughing Shadow Scrabbler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Bluff +10, Stealth +15',
		equipment: 'chainmail; short sword; shuriken',
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 12,
		ac: 27,
		fortitude: 25,
		reflex: 27,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1262c51f-650b-4de5-a5f9-8b56bee25829',
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
				details: '8 damage, and the scrabbler can shift 2 squares, ignoring difficult terrain.',
				damage: '8 damage',
				category: 1
			},
			{
				id: '6c729438-94c2-49c7-9f8c-5eaf6d0be771',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 6/12',
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
				id: '1ecacda2-6bdd-45b9-96d5-7446f8ef500f',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The scrabbler deals an extra 5 damage against any target it has combat advantage against.',
				damage: 'the scrabbler deals an extra 5 damage against any target it has combat advantage against',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '840da84d-1ac5-403e-ac1e-64862e012841',
		name: 'Laughing Shadow Sentry',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Streetwise +11',
		equipment: 'crossbow; crossbow bolts (20); halberd; scale armor',
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
		hp: 47,
		initiative: 9,
		ac: 27,
		fortitude: 24,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5a95330c-3ad2-4b27-be3b-00cad5e749fc',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+4 damage, and the target is marked until the end of the sentry’s next turn.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: 'fdeba13e-8892-4a43-8491-f668b81de553',
				name: 'halberd Sweep',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'usable when a target the sentry has marked leaves a square within reach',
				range: '',
				attack: {
					bonus: 16,
					defence: 1
				},
				description: '',
				details: 'Reach 2; 1d10+4 damage, and the target’s movement ends and it slides 2 squares.',
				damage: '1d10+4 damage',
				category: 5
			},
			{
				id: 'bc4f81e6-7f27-494b-a96d-8fede52caf4d',
				name: 'Halberd Trip',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires halberd',
				range: '',
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d10+4 damage, and the target is knocked prone.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: '17cc426b-8988-4581-a14b-ae7d13ac7a1c',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '2d8+2 damage.',
				damage: '2d8+2 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '2e410090-8fb1-487b-b512-ff9921e50ae7',
		name: 'Laughing Shadow Streetfighter',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 13,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Bluff +13, Intimidate +13, Stealth +15',
		equipment: 'chainmail; katar; shuriken',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 128,
		initiative: 12,
		ac: 29,
		fortitude: 26,
		reflex: 25,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f2375eaf-56cf-4347-81ba-873bab6daedf',
				name: 'Katar',
				action: {
					action: 1,
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
				details: '2d6+6 damage (crit 18+1d6), and the target is slowed until the end of the streetfighter’s next turn.',
				damage: '2d6+6 damage (crit 18+1d6)',
				category: 1
			},
			{
				id: '16b0f517-876c-459f-860d-bfd2fcf474a4',
				name: 'Shuriken',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Ranged 6/12',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: '2d4+4 damage.',
				damage: '2d4+4 damage',
				category: 1
			},
			{
				id: '46cf795e-f637-4fea-839b-9f26d5783d6b',
				name: 'Cheap Shot',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires katar',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d6+6 damage, and the target’s movement ends.',
				damage: '2d6+6 damage',
				category: 5
			},
			{
				id: '15d7898b-6658-4add-85ea-13a8f1908168',
				name: 'Streetfighter Flourish',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: '',
				condition: 'requires katar',
				range: 'Close burst 1',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d6+6 damage, and the target is slowed (save ends).',
				damage: '2d6+6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Soldier',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '8b8d1f84-281c-4c7f-a55b-3982f93f68d0',
		name: 'Pennel',
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
		senses: 'Perception +17',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +18, Insight +17, Stealth +18, Thievery +18',
		equipment: '',
		category: '',
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
			score: 23,
			modifier: 6,
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 276,
		initiative: 15,
		ac: 30,
		fortitude: 25,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '15942d19-a02c-4f30-ae30-999e683ad11a',
				name: 'Crystal Dagger',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '3d4+8 psychic damage, and the target is marked until the end of Pennel’s next turn.',
				damage: '3d4+8 psychic damage',
				category: 1
			},
			{
				id: '763b0144-1903-4b07-aa98-ba25c13fc02e',
				name: 'Crystal Strands',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '3d4+7 damage, and the target is pulled 3 squares.',
				damage: '3d4+7 damage',
				category: 1
			},
			{
				id: '4cd7accd-0aa0-40c9-84a1-aa6800e30279',
				name: 'Crystal Bloom',
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
				attack: null,
				description: '',
				details: 'Pennel makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '0513e0c7-049e-4ea0-a6bc-befa179284e0',
				name: 'Cut Off',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable when a target pennel has marked leaves a square adjacent to pennel or enters a square adjacent to telicanthus',
				range: '',
				attack: null,
				description: '',
				details: 'Pennel can make a basic attack against the target. If the attack hits, the target’s movement ends.',
				damage: '',
				category: 5
			},
			{
				id: '261f3329-7527-4ee6-93f7-5b3f14fe891b',
				name: 'Crystal Shards',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 18,
					defence: 2
				},
				description: '',
				details: '2d4+7 psychic damage, and the target is immobilized (save ends). Miss: Half damage, and the target is slowed until the end of Pennel’s next turn.',
				damage: '2d4+7 psychic damage',
				category: 1
			},
			{
				id: 'f9164805-e3a2-4726-bb7e-261b12a28253',
				name: 'Psychic Redirection',
				action: {
					action: 5,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable when an attack hits telicanthus',
				range: '',
				attack: null,
				description: '',
				details: 'Pennel redirects the triggering attack to himself.',
				damage: '',
				category: 5
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
		id: 'c6610fe3-0be0-4d13-b248-ad9bec206aca',
		name: 'Slippery',
		details: 'This creature is a mess of gooey flesh.',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common',
		skills: 'Stealth +16',
		equipment: '',
		category: '',
		strength: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		constitution: {
			score: 8,
			modifier: -1,
			cost: 0
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
			score: 8,
			modifier: -1,
			cost: 0
		},
		hp: 1,
		initiative: 11,
		ac: 25,
		fortitude: 20,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'df3e3dde-ffbc-408f-a337-eafa8e8286df',
				name: 'Gooey Attack',
				action: {
					action: 1,
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
				details: '6 damage and slide the target 1square.',
				damage: '6 damage and slide the target 1square',
				category: 1
			},
			{
				id: '48ce398d-c5d0-400e-90b9-db24c2ffc69f',
				name: 'Slimy Death',
				action: null,
				keywords: 'Zone',
				condition: 'when reduced to 0 hit points',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'the burst creates a zone of slime that lasts until the end of the encounter. Any creature that ends its movement within the zone is slowed until the end of its next turn.; 4d8+5 damage.',
				damage: '4d8+5 damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '3d5626b2-1680-4022-9d68-8423105c5e01',
		name: 'The Patriarch',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common, Elven',
		skills: 'Arcana +20, Heal +10, History +15',
		equipment: 'longsword',
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
			score: 25,
			modifier: 7,
			cost: -1
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
		hp: 244,
		initiative: 14,
		ac: 26,
		fortitude: 24,
		reflex: 27,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: '4ad38b4a-4550-455a-a1a0-52733afc50f7',
				name: 'Swirling Madness',
				keywords: '',
				details: '(Fear) aura 1; the Patriarch makes a mind rend attack against each enemy that starts its turn within the aura.'
			}
		],
		powers: [
			{
				id: 'fe07de06-1dc5-4e27-af23-ac5e1eaf3578',
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
				details: '2d8+4 damage, and if the Patriarch is marked, end this condition.',
				damage: '2d8+4 damage',
				category: 1
			},
			{
				id: 'beb82499-f237-4db3-90e8-201cd2bd051b',
				name: 'Mind Rend',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Fear',
				condition: '',
				range: '',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'the target is dazed until the end of the Partiarch’s next turn.',
				damage: '',
				category: 1
			},
			{
				id: 'db51b27f-7a46-4e45-9d5b-dc044d1cf0d9',
				name: 'Flesh-Splitter',
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
				details: 'Make a longsword attack against two targets. The Patriarch can shift before or after each attack. If both attacks hit, both targets are slowed (save ends).',
				damage: '',
				category: 1
			},
			{
				id: '5b841f81-d4cc-40d8-8ce2-7f985f693924',
				name: 'Haunted by the Past',
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
				details: 'targets enemies; the target is dazed (save ends). First Failed Saving Throw: The target is dominated instead of stunned (save ends). Aftereffect: The target takes 10 psychic damage.',
				damage: 'the target takes 10 psychic damage',
				category: 1
			},
			{
				id: '724278ec-3b18-4cae-b7d2-fed1393eba88',
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
				details: 'The Patriarch teleports 5 squares.',
				damage: 'The Patriarch teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Elite Skirmisher',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '063407e6-c46f-4f14-b726-a1fb331439f6',
		name: 'Treasure Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 14,
		role: {
			type: 2,
			flag: 2,
			leader: false
		},
		senses: 'Perception +6; darkvision, tremorsense 5',
		movement: '6 can’t shift',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		dexterity: {
			score: 10,
			modifier: 0,
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
		hp: 700,
		initiative: 5,
		ac: 26,
		fortitude: 30,
		reflex: 24,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ad790cff-b41f-4f9a-b2b8-e81c6c1d08c1',
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
				details: 'Reach 2; 2d10+6 damage, and the target slides 2 squares or is knocked prone.',
				damage: '2d10+6 damage',
				category: 1
			},
			{
				id: '08e7afbb-7dc0-46cd-8ebd-6ffed0849d09',
				name: 'Gleamshard',
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
					bonus: 26,
					defence: 0
				},
				description: '',
				details: '3d6+7 force damage, and the target slides 2 squares or is knocked prone.',
				damage: '3d6+7 force damage',
				category: 1
			},
			{
				id: '910dbae7-f8f5-4f16-ae0a-0f206261a336',
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
				details: 'The treasure golem makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'cc1fa2df-5917-479f-8a9b-81b504f51bb8',
				name: 'Berserk Attacks',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable when damaged by an attack while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The treasure golem makes two basic attacks against random targets.',
				damage: '',
				category: 5
			},
			{
				id: '6db36f6a-45ab-4244-910a-d972dadf189b',
				name: 'Horrid Blast',
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
					bonus: 22,
					defence: 1
				},
				description: '',
				details: '2d10+7 damage, and prone targets cannot stand until the end of the golem’s next turn. Miss: Half damage. Effect: The golem bursts into its component pieces, filling the area and gaining insubstantial until the start of its next turn, when it reappears within 5 squares of its last space.',
				damage: '2d10+7 damage',
				category: 1
			},
			{
				id: '9a600b9a-fe2d-49c4-9882-7783cd2474f7',
				name: 'Weight of Greed',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: '1d10+7 psychic damage, and the target is dominated until the end of the golem’s next turn. Miss: Half damage.',
				damage: '1d10+7 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 14 Solo Brute',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: 'f293bdc7-cd34-4706-8860-112311f8b771',
		name: 'Troll Shade',
		details: '',
		size: 3,
		origin: 5,
		type: 0,
		keywords: '',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: 'fly 8',
		alignment: 'Chaotic evil',
		languages: 'Giant',
		skills: '',
		equipment: '',
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
		hp: 1,
		initiative: 5,
		ac: 23,
		fortitude: 25,
		reflex: 20,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '075e4321-64be-426d-bb6a-4edd0bd5b096',
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
				details: 'Reach 2; 9 damage.',
				damage: '9 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Large shadow animate'
	},
	{
		id: '5159fd49-c952-46f8-8140-c4b8f77ea95d',
		name: 'Vicious Wrack Abishai',
		details: '',
		size: 2,
		origin: 3,
		type: 1,
		keywords: '',
		level: 8,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6, fly 6, overland flight 12',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Stealth +12',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 69,
		initiative: 11,
		ac: 22,
		fortitude: 20,
		reflex: 19,
		will: 21,
		regeneration: {
			value: 5,
			details: ''
		},
		auras: [],
		powers: [
			{
				id: 'd4790e86-2be0-4407-9efc-89a44715c1de',
				name: 'Sting',
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
					bonus: 13,
					defence: 0
				},
				description: '',
				details: '2d6+4 acid damage.',
				damage: '2d6+4 acid damage',
				category: 1
			},
			{
				id: '8915d5b1-d6cd-4c3d-afc3-8bda1658ecc0',
				name: 'Acidic Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Acid',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d6+5 acid damage, and the target is pushed 2 squares and blinded (save ends).',
				damage: '1d6+5 acid damage',
				category: 1
			},
			{
				id: '7d9cf26b-d281-45d1-84e1-9423084fe359',
				name: 'Shadow Meld',
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
				details: 'The vicious wrack abishai turns invisible and moves 6 squares. It remains invisible until the end of its next turn.',
				damage: 'The vicious wrack abishai turns invisible and moves 6 squares',
				category: 1
			},
			{
				id: 'dabbbce3-6258-40dd-8e2b-b065707d6e71',
				name: 'Deadly Ambush',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The vicious wrack abishai deals 1d10 extra damage to a target that cannot see it, and that target is dazed (save ends).',
				damage: 'the vicious wrack abishai deals 1d10 extra damage to a target that cannot see it',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 1,
				value: -5
			}
		],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Lurker',
		phenotype: 'Medium immortal beast'
	},
	{
		id: 'f41b50f5-ef82-4fc3-9640-07c4adecdc2b',
		name: 'Virarr',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 11,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +8',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Arcana +10, Intimidate +13, Religion +10',
		equipment: 'bastard sword; holy symbol; scale armor',
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
		hp: 228,
		initiative: 7,
		ac: 25,
		fortitude: 24,
		reflex: 22,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0c95af2f-135b-4d26-bac1-ba6c7af2bb64',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '(+17 while bloodied)1d10+5 damage.',
				damage: '(+17 while bloodied)1d10+5 damage',
				category: 1
			},
			{
				id: '23b591fc-87fd-4ef4-8e4f-9547f83ee403',
				name: 'Smite the Bold',
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
					bonus: 16,
					defence: 0
				},
				description: '',
				details: '(+17 while bloodied)1d10 damage, and the target is pushed 2 square.',
				damage: '(+17 while bloodied)1d10 damage',
				category: 3
			},
			{
				id: 'dbf9433e-7f11-4652-8c98-d056a41591e0',
				name: 'Forking Tongue',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Radiant',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 2
				},
				description: '',
				details: 'two targets; (+16 while bloodied)2d6+3 radiant damage, and one ally within sight gains 6 temporary hit points or makes a saving throw.',
				damage: '(+16 while bloodied)2d6+3 radiant damage',
				category: 1
			},
			{
				id: '71acb23d-38a1-4df7-9ea5-fcf21fe4764b',
				name: 'Breath of Tiamat',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire, Lightning, Poison',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 14,
					defence: 2
				},
				description: '',
				details: 'targets enemies; (+14 while bloodied)2d6+4 acid, cold, fire, lightning, and poison damage.',
				damage: 'and poison damage',
				category: 1
			},
			{
				id: 'eabecd60-1e0e-46f1-941a-d571cde11cd2',
				name: 'Maws of Tiamat',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire, Implement, Lightning, Poison',
				condition: '',
				range: 'Close burst 4',
				attack: {
					bonus: 15,
					defence: 0
				},
				description: '',
				details: 'targets enemies; (+14 while bloodied)3d10+4 acid, cold, fire, lightning, and poison damage, and the target is slowed (save ends).',
				damage: 'and poison damage',
				category: 1
			},
			{
				id: '3c569d4f-d98e-4e7b-98ea-01b0339c85c2',
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

		info: 'Level 11 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'ab0be905-3a40-4130-b6ee-e282aa2b0b72',
		name: 'Woodcutter’s Ghost',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Evil',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 91,
		initiative: 8,
		ac: 23,
		fortitude: 23,
		reflex: 23,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '69322ef5-69d5-4877-8a1b-619ae0802946',
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
				details: '1d10+2 necrotic damage.',
				damage: '1d10+2 necrotic damage',
				category: 1
			},
			{
				id: 'f21b0013-a092-45f8-8926-dd174b6d6d28',
				name: 'Death’s Visage',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: '2d6+3 psychic damage, and the target takes a -2 penalty to all defenses.',
				damage: '2d6+3 psychic damage',
				category: 1
			},
			{
				id: 'f600c41a-9833-4cf9-844e-6c3185896f6b',
				name: 'Terrifying Shriek',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fear, Psychic',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 15,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d8+3 psychic damage, the target is pushed 5 squares and is immobilized (save ends).',
				damage: '2d8+3 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 12 Controller',
		phenotype: 'Medium shadow humanoid'
	},
	{
		id: 'e4a25dae-9e90-4294-ab2f-b8172dbabe0f',
		name: 'Arctic Dire Shark',
		details: '',
		size: 4,
		origin: 4,
		type: 1,
		keywords: 'aquatic, mount',
		level: 14,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: 'swim 10 (12 on a charge)',
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
		hp: 139,
		initiative: 16,
		ac: 28,
		fortitude: 26,
		reflex: 28,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6b04dd4a-c6fe-495d-aeed-e69f6e62604c',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '(+19 against creatures without a swim speed)3d6+5 damage.',
				damage: '(+19 against creatures without a swim speed)3d6+5 damage',
				category: 1
			},
			{
				id: 'd1473cb3-f41f-48cd-97b9-4b268f0c3cd0',
				name: 'Deft Swimmer',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'while mounted by a friendly rider of 14th level or higher',
				range: '',
				attack: null,
				description: '',
				details: 'The dire shark’s rider gains a +2 bonus to AC against opportunity attacks. While in water, the rider also gains a +2 bonus to attack rolls against creatures without a swim speed.',
				damage: 'The dire shark’s rider gains a +2 bonus to AC against opportunity attacks',
				category: 1
			},
			{
				id: '8f35c501-8caa-46c1-a75d-022321be5725',
				name: 'Waterborn',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While in water, the icetouched dire shark gains a +2 bonus to attack rolls against creatures without a swim speed.',
				damage: 'the icetouched dire shark gains a +2 bonus to attack rolls against creatures without a swim speed',
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
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Skirmisher',
		phenotype: 'Huge natural beast (aquatic, mount)'
	},
	{
		id: '80447f10-a23e-471d-bd08-7d62f87e40d1',
		name: 'Arctic Sahuagin Baron',
		details: '',
		size: 3,
		origin: 4,
		type: 2,
		keywords: 'aquatic, cold',
		level: 15,
		role: {
			type: 2,
			flag: 1,
			leader: true
		},
		senses: 'Perception +8; low-light vision',
		movement: '5 (7 on a charge; icewalk), swim 7 (9 on a charge)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +15',
		equipment: 'javelin; trident',
		category: 'Sahuagin',
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
		hp: 360,
		initiative: 11,
		ac: 27,
		fortitude: 28,
		reflex: 26,
		will: 27,
		regeneration: null,
		auras: [
			{
				id: 'ce001276-34d6-484e-b825-3e78acd4c45b',
				name: 'Blood Healing',
				keywords: '',
				details: '(Healing) aura 10; any ally within the aura that starts its turn adjacent to a bloodied enemy regains 5 hit points.'
			}
		],
		powers: [
			{
				id: '834630b5-e824-466e-9f1e-a4ec29b11573',
				name: 'Trident',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+20 against a bloodied target)1d10+7 (1d10 + 12 against a bloodied target) damage plus 1d10 cold damage; see also blood hunger.',
				damage: '(+20 against a bloodied target)1d10+7 (1d10 + 12 against a bloodied target) damage plus 1d10 cold damage',
				category: 1
			},
			{
				id: '9ef05670-2498-4250-b111-82fe148e2c42',
				name: 'Bloodchill Claw',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+20 against a bloodied target)1d6+7 (1d6 + 12 against a bloodied target) damage, and ongoing 5 cold damage and the target is slowed (save ends both).',
				damage: '(+20 against a bloodied target)1d6+7 (1d6 + 12 against a bloodied target) damage',
				category: 1
			},
			{
				id: '4cb17d13-8e05-4fb9-a875-5503aa1ed33e',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+20 against a bloodied target)2d8+7 (2d8 + 12 against a bloodied target) damage.',
				damage: '(+20 against a bloodied target)2d8+7 (2d8 + 12 against a bloodied target) damage',
				category: 1
			},
			{
				id: 'bd8caacd-310d-42be-9118-6bec0c4209a6',
				name: 'Baron’s Fury',
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
				attack: null,
				description: '',
				details: 'The arctic sahuagin baron makes a trident attack and two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'ba643698-159b-4f82-96d1-acfeae29e81a',
				name: 'Blood Hunger',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The arctic sahuagin baron gains a +2 bonus to attack rolls and a +5 bonus to damage rolls against bloodied enemies.',
				damage: 'the arctic sahuagin baron gains a +2 bonus to attack rolls and a +5 bonus to damage rolls against bloodied enemies',
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
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Brute (L)',
		phenotype: 'Large natural humanoid (aquatic, cold)'
	},
	{
		id: '2df29694-59ca-461f-bfc4-a8d0f5092ce2',
		name: 'Arctic Sahuagin Guard',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic',
		level: 11,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '5 (7 on a charge, ice walk), swim 6 (7 on a charge)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: '',
		equipment: 'javelin; trident',
		category: 'Sahuagin',
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
		initiative: 10,
		ac: 27,
		fortitude: 24,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1a73d150-942c-4676-a0ae-d5501d0d8b42',
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
				details: '(+19 against a bloodied target)7 damage (10 damage to a bloodied target), and the target is marked until the end of the arctic sahuagin guard’s next turn.',
				damage: '(+19 against a bloodied target)7 damage (10 damage to a bloodied target)',
				category: 1
			},
			{
				id: 'c1c72bed-8065-4f25-8b15-124a709c8a2b',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+19 against a bloodied target)7 damage (10 damage to a bloodied target).',
				damage: '(+19 against a bloodied target)7 damage (10 damage to a bloodied target)',
				category: 1
			},
			{
				id: '03b943fb-f791-4d2c-8a73-fa44182ac76c',
				name: 'Blood Frenzy',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The arctic sahuagin gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies.',
				damage: 'the arctic sahuagin gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Minion',
		phenotype: 'Medium natural humanoid (aquatic)'
	},
	{
		id: 'c936cd38-fbc3-4772-820a-9708a1d0c73b',
		name: 'Arctic Sahuagin Priest',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic',
		level: 13,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +12; low-light vision',
		movement: '5 (7 during a double move, ice walk), swim 5 (7 during a double move)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal, Common',
		skills: 'Intimidate +15',
		equipment: 'holy symbol; trident',
		category: 'Sahuagin',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 101,
		initiative: 11,
		ac: 25,
		fortitude: 24,
		reflex: 25,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5898bdcc-3412-41f6-9ff8-f56ce63648f7',
				name: 'Longspear',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: 'Reach 2; (+18 against a bloodied target)1d10+4 (1d10 + 6 to a bloodied target) damage plus 1d8 cold damage, and the target slides 1 square.',
				damage: '(+18 against a bloodied target)1d10+4 (1d10 + 6 to a bloodied target) damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: 'f7cf51c3-29ac-4708-99a9-b64fb041513a',
				name: 'Freezing Bolt',
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
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '(+19 against a bloodied target)2d6+6 (2d6 + 8 to a bloodied target) cold damage, and the target is slowed until the end of the arctic sahuagin priest’s next turn.',
				damage: '(+19 against a bloodied target)2d6+6 (2d6 + 8 to a bloodied target) cold damage',
				category: 1
			},
			{
				id: 'e2ac868f-e6bc-4dd9-8a9a-4192f5d70c1d',
				name: 'Arctic Jaws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when no target is affected by this power'
				},
				keywords: 'Cold',
				condition: '',
				range: 'Ranged 20',
				attack: {
					bonus: 18,
					defence: 3
				},
				description: '',
				details: 'icy shark jaws appear and bite the target; (+19 against a bloodied target)2d6+6 (2d6 + 8 to a bloodied target) cold damage, and target gains vulnerable 5 cold and is slowed (save ends both).',
				damage: '(+19 against a bloodied target)2d6+6 (2d6 + 8 to a bloodied target) cold damage',
				category: 1
			},
			{
				id: '9a6e281e-a427-43c7-b60a-0f06de54c8c1',
				name: 'Blood Frenzy',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The arctic sahuagin priest gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies.',
				damage: 'the arctic sahuagin priest gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies',
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
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 13 Artillery',
		phenotype: 'Medium natural humanoid (aquatic)'
	},
	{
		id: '10eacc53-7538-4431-bb5b-ecd9ca57e40d',
		name: 'Arctic Sahuagin Raider',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'aquatic',
		level: 11,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '5 (7 on a charge, icewalk), swim 5 (7 on a charge)',
		alignment: 'Chaotic evil',
		languages: 'Abyssal',
		skills: '',
		equipment: 'trident',
		category: 'Sahuagin',
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
		hp: 112,
		initiative: 11,
		ac: 27,
		fortitude: 24,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '256a6f55-37b2-4d8d-b07c-f356b20162b2',
				name: 'Trident',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+19 against a bloodied target)1d8+5 (1d8 + 7 to a bloodied target) damage plus 1d8 cold damage, and the target is marked until the end of the arctic sahuagin raider’s next turn.',
				damage: '(+19 against a bloodied target)1d8+5 (1d8 + 7 to a bloodied target) damage plus 1d8 cold damage',
				category: 1
			},
			{
				id: 'b43ab79b-94d5-4e4c-bf03-09c1a53f75d8',
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
					bonus: 18,
					defence: 0
				},
				description: '',
				details: '(+19 against a bloodied target)2d6+5 (2d6 + 7 to a bloodied target) damage.',
				damage: '(+19 against a bloodied target)2d6+5 (2d6 + 7 to a bloodied target) damage',
				category: 1
			},
			{
				id: 'ca6ff1d9-7069-46fa-a59b-9becf05a3d35',
				name: 'Opportunistic Strike',
				action: {
					action: 4,
					trigger: 'when a flankedenemy shifts',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'The arctic sahuagin raider makes a melee basic attack against the enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: '7937035e-6381-4175-b65a-e3b132ce1f9b',
				name: 'Sliding Strike',
				action: {
					action: 5,
					trigger: 'when a marked enemy makes an attack that doesn’t include the arctic sahuagin raider',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'The arctic sahuagin raider shifts 7 squares adjacent to the triggering enemy, and makes a melee basic attack against that enemy.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 5
			},
			{
				id: 'fe7c4251-c3c8-4a94-a171-608b8ba1a3c8',
				name: 'Blood Frenzy',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The arctic sahuagin raider gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies.',
				damage: 'the arctic sahuagin raider gains a +1 bonus to attack rolls and a +2 bonus to damage rolls against bloodied enemies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 11 Soldier',
		phenotype: 'Medium natural humanoid (aquatic)'
	},
	{
		id: '5f313ef8-e530-45d7-a9b3-1a57fa66afcc',
		name: 'Dragonborn Brigand',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 4,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Bluff +9, History +4, Intimidate +6, Stealth +8',
		equipment: 'chainmail; heavy flail',
		category: 'Dragonborn',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 66,
		initiative: 4,
		ac: 18,
		fortitude: 17,
		reflex: 14,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd674899d-237f-4d36-a257-21c330502aab',
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
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '(+8 while bloodied)2d6+4 damage. Bloodstinger Poison: If this is the weapon’s first hit; +6 vs. Fortitude; ongoing 5 poison damage (save ends).',
				damage: '(+8 while bloodied)2d6+4 damage',
				category: 1
			},
			{
				id: '27685c1c-676f-4b21-992c-01cf1ce37e5e',
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
				range: 'Close blast 3',
				attack: {
					bonus: 6,
					defence: 2
				},
				description: '',
				details: '(+7 while bloodied)1d6+4 poison damage.',
				damage: '(+7 while bloodied)1d6+4 poison damage',
				category: 3
			},
			{
				id: '5e94f9a8-003d-4dc6-a2d2-de70eebfbd35',
				name: 'Dragonborn Fury',
				action: null,
				keywords: '',
				condition: 'only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonborn gains a +1 racial bonus to attack rolls.',
				damage: 'A dragonborn gains a +1 racial bonus to attack rolls',
				category: 0
			},
			{
				id: '325dad20-e438-4c31-ab0a-27b71090cc9e',
				name: 'Erratic Maneuver',
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
				details: 'Make a Bluff check to gain combat advantage.',
				damage: '',
				category: 2
			},
			{
				id: '89d7049e-ab69-4efe-b154-90315ca888ed',
				name: 'Vicious Strike',
				action: null,
				keywords: 'Weapon',
				condition: '',
				range: 'the dragonborn brigand deals an extra 1d6 damage on melee attacks.',
				attack: null,
				description: '',
				details: 'Requires flail and combat advantage',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Brute',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: '7b3498df-fb05-4c29-bb92-d92f9d003f26',
		name: 'Dragonborn Sniper',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'dragonborn',
		level: 4,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'History +5, Intimidate +7, Stealth +10',
		equipment: 'arrows (30); hide armor; longbow; longsword',
		category: 'Dragonborn',
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
		hp: 44,
		initiative: 6,
		ac: 18,
		fortitude: 14,
		reflex: 17,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd7d7ee49-6caa-4e81-9d5d-52ec56b22203',
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
				details: '(+9 while bloodied)1d8+3 damage.',
				damage: '(+9 while bloodied)1d8+3 damage',
				category: 1
			},
			{
				id: 'ac9d646e-c76d-4887-93cc-f0cb06ce0d35',
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
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '(+11 while bloodied)1d10+4 damage. Bloodstinger Poison: If this is the weapon’s first hit; +6 vs. Fortitude; ongoing 5 poison damage (save ends).',
				damage: '(+11 while bloodied)1d10+4 damage',
				category: 1
			},
			{
				id: '297c1c8a-e3da-4859-8200-2937cfe844d4',
				name: 'Disruptive Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
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
				details: 'Requires longbow; (+9 while bloodied)1d10+4 damage, and the dragonborn sniper grants allies adjacent to target combat advantage until the end of their next turn.',
				damage: '(+9 while bloodied)1d10+4 damage',
				category: 1
			},
			{
				id: 'd0c75663-df7f-4f8d-bf52-6be36c384fc6',
				name: 'Versatile Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Poison',
				condition: '',
				range: 'Area burst 2 within 10 squares or close blast 3',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '(+9 while bloodied)1d6+4 poison damage.',
				damage: '(+9 while bloodied)1d6+4 poison damage',
				category: 3
			},
			{
				id: 'fd47ebcc-4184-4838-87fe-efc99aff4908',
				name: 'Dragonborn Fury',
				action: null,
				keywords: '',
				condition: 'only while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'A dragonborn gains a +1 racial bonus to attack rolls.',
				damage: 'A dragonborn gains a +1 racial bonus to attack rolls',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 4 Artillery',
		phenotype: 'Medium natural humanoid (dragonborn)'
	},
	{
		id: 'a432b475-1733-4851-9b2c-61427c44a074',
		name: 'Dragonborn Specter',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead; dragonborn',
		level: 4,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +6; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Evil',
		languages: 'Draconic',
		skills: 'Stealth +9',
		equipment: '',
		category: 'Dragonborn',
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
		hp: 30,
		initiative: 8,
		ac: 16,
		fortitude: 16,
		reflex: 16,
		will: 17,
		regeneration: null,
		auras: [
			{
				id: '45af19da-3ef0-4c90-9427-1ebe347c882a',
				name: 'Spectral Chill',
				keywords: '',
				details: '(Cold) aura 1; enemies in the aura take a -2 penalty to all defenses.'
			}
		],
		powers: [
			{
				id: 'a86e8476-8464-46d4-a46f-97cb268afca6',
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
					bonus: 7,
					defence: 2
				},
				description: '',
				details: '1d6+2 necrotic damage.',
				damage: '1d6+2 necrotic damage',
				category: 1
			},
			{
				id: 'b66bee75-0b8e-4236-b4e0-7973e6b3d831',
				name: 'Spectral Breath',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge when bloodied'
				},
				keywords: 'Illusion, Psychic',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 7,
					defence: 3
				},
				description: '',
				details: 'targets enemies; 2d6+2 psychic damage, and the target is knocked prone.',
				damage: '2d6+2 psychic damage',
				category: 3
			},
			{
				id: '6a7a1d03-6faf-4265-a5b5-ec32e16bcaf4',
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

		info: 'Level 4 Lurker',
		phenotype: 'Medium shadow humanoid (undead; dragonborn)'
	},
	{
		id: '9887167d-55ad-4974-b003-a504d31f49bb',
		name: 'Frost Giant Scout',
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
		senses: 'Perception +17',
		movement: '9 (ice walk)',
		alignment: 'Evil',
		languages: 'Giant',
		skills: 'Athletics +16, Stealth +18',
		equipment: 'arrow; hide armor; longbow; spear',
		category: 'Giant',
		strength: {
			score: 19,
			modifier: 4,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 115,
		initiative: 13,
		ac: 28,
		fortitude: 26,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ee568e3c-683a-4dfc-bb2f-418d6fc267e6',
				name: 'Icy Spear',
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
				details: 'Reach 2; 1d10+6 cold damage.',
				damage: '1d10+6 cold damage',
				category: 1
			},
			{
				id: 'fbcb14a6-3782-4292-9bcc-59de9a6a9ca6',
				name: 'Icy Arrow',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold, Weapon',
				condition: 'requires longbow',
				range: 'Ranged 20/40',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '1d12+8 cold damage, and the target is slowed until the end of the frost giant scout’s next turn.',
				damage: '1d12+8 cold damage',
				category: 1
			},
			{
				id: '392f9de5-9987-4c18-ae92-0fcc171e0bdd',
				name: 'Chillshards',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Weapon',
				condition: '',
				range: 'Area burst 1 within 20',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '1d12+8 cold damage, and the target is slowed and cannot take immediate or opportunity actions until the end of the frost giant scout’s next turn. Aftereffect: The target is slowed until the end of the frost giant scout’s next turn.',
				damage: '1d12+8 cold damage',
				category: 1
			},
			{
				id: '5e4057fa-06cb-4170-88fa-b2fe084a04fe',
				name: 'Tundra Hunter',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: '',
				range: 'The frost giant makes a melee or ranged attack. If the attack hits, the target gains vulnerable 10 cold (save ends). Aftereffect: The target gains vulnerable 5 cold (save ends).',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '63880834-4204-45b9-81e9-790d09b22b8c',
				name: 'Quick Release',
				action: null,
				keywords: '',
				condition: '',
				range: 'The frost giant scout does not provoke opportunity attacks when it makes ranged or area attacks.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: '0eb1257e-dd00-44d2-9f6b-3f8b632812fc',
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
		id: '045e7993-f5e1-4252-b657-48c731cbd3f3',
		name: 'Ice Gargoyle',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'cold',
		level: 12,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; darkvision',
		movement: '6, fly 8',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: 'Stealth +18',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 96,
		initiative: 14,
		ac: 26,
		fortitude: 25,
		reflex: 23,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e445c5ce-42e7-4792-afd8-dd6750453e5c',
				name: 'Claw',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '1d6+5 damage plus 1d6+4 cold damage.',
				damage: '1d6+5 damage plus 1d6+4 cold damage',
				category: 1
			},
			{
				id: '18747088-856e-4533-b074-9515b6a6d0db',
				name: 'Flyby Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges after using ice prison'
				},
				keywords: '',
				condition: '',
				range: 'The ice gargoyle flies 8 squares and makes a melee basic attack at the end of that movement. If the attack hits, the target is grabbed. The ice gargoyle can try to move the grabbed target as part of its next move action. If it succeeds, it can move or fly at full speed, pulling the target with it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '95103853-8610-45db-ba0c-74c56475be29',
				name: 'Ice Prison',
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
				details: 'The ice gargoyle encases itself and anyone it is grabbing in ice. In this form, the ice gargoyle and any target it is grabbing gain resist 15 all, except against the cold damage dealt by this power. Both can still see their surroundings, but they cannot use other normal senses. A target the ice gargoyle is grabbing is stunned, restrained, and takes ongoing 20 cold damage (save ends all, ending the grab and the ice prison). Aftereffect: The target is slowed until the end of the ice gargoyle’s next turn.',
				damage: 'except against the cold damage dealt by this power',
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
		vulnerable: 'fire (the ice gargoyle is dazed until the end of the attacker’s next turn)',
		immune: 'slow',
		tactics: '',

		info: 'Level 12 Lurker',
		phenotype: 'Medium elemental humanoid (cold)'
	},
	{
		id: 'd0d544ee-57e5-4595-ac10-c5f5999c412c',
		name: 'Ice Gargoyle Reaver',
		details: '',
		size: 3,
		origin: 1,
		type: 2,
		keywords: 'earth',
		level: 15,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +17; darkvision',
		movement: '6, fly 8',
		alignment: 'Evil',
		languages: 'Primordial',
		skills: 'Stealth +19',
		equipment: '',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 5,
			modifier: -3,
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
		hp: 116,
		initiative: 17,
		ac: 29,
		fortitude: 28,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [
			{
				id: '38f64b77-d7ba-496b-8c24-4ec86f70a661',
				name: 'Freezing Gaze',
				keywords: '',
				details: '(Cold) aura 2; requires the ice gargoyle reaver to be in its ice prison; an enemy that enters or starts its turn within the aura is weakened until the start of its next turn and takes 5 cold damage.'
			}
		],
		powers: [
			{
				id: 'a21b6e99-4da8-4c70-9f4c-025892894a0b',
				name: 'Claw',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8+6 damage, and ongoing 5 cold damage (save ends).',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: 'bd7a9cfc-ade1-4cce-8f44-f6fb57bea59e',
				name: 'Bloodchill Bite',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Cold, Healing',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d6+5 cold damage (3d6 + 5 cold damage against a weakened target), the target gains vulnerable 5 cold (save ends), and the ice gargoyle reaver regains 5 hit points.',
				damage: '2d6+5 cold damage (3d6 + 5 cold damage against a weakened target)',
				category: 1
			},
			{
				id: 'd3525109-8a4f-4d5f-a1b9-976b6884f36c',
				name: 'Flying Grab',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges after using ice prison'
				},
				keywords: '',
				condition: '',
				range: 'The ice gargoyle reaver flies 8 squares and makes a melee basic attack at the end of that movement. If the attack hits, the target is grabbed. The ice gargoyle reaver can try to move the grabbed target as part of its next move action. If it succeeds, it can move or fly at full speed, pulling the target with it.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: '24b73362-c262-4a08-a9b6-cb989d434778',
				name: 'Ice Prison',
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
				details: 'The ice gargoyle reaver encases itself and anyone it is grabbing in ice. In this form, the ice gargoyle reaver and any target it is grabbing gain resist 20 all, except against the cold damage dealt by this power. Both can still see their surroundings, but they cannot use other normal senses. A target the ice gargoyle reaver is grabbing is stunned, restrained, and takes ongoing 20 cold damage (save ends all, ending the grab and ice prison). Aftereffect: The target is slowed and weakened until the end of the ice gargoyle reaver’s next turn.',
				damage: 'except against the cold damage dealt by this power',
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
		vulnerable: 'fire (the ice gargoyle reaver grants combat advantage until the end of the attacker’s next turn)',
		immune: 'slow',
		tactics: '',

		info: 'Level 15 Lurker',
		phenotype: 'Large elemental humanoid (earth)'
	},
	{
		id: 'c331b26a-98c5-4ca9-a3e2-3a20afa8f3a5',
		name: 'Icetouched Umber Hulk',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 12,
		role: {
			type: 7,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; darkvision, tremorsense 5',
		movement: '5 (ice walk), burrow 2 (tunneling)',
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 248,
		initiative: 11,
		ac: 30,
		fortitude: 33,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '360fc2da-a167-409c-b6c9-b478ddae388f',
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
				details: 'Reach 2; 2d6+8 damage.',
				damage: '2d6+8 damage',
				category: 1
			},
			{
				id: 'fea4fef4-2ca0-4131-84d1-eaa921c03619',
				name: 'Grabbing Double Attack',
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
				details: 'The icetouched umber hulk makes two claw attacks. If both claw attacks hit the same target, the target is grabbed. A grabbed target takes ongoing 10 damage from the icetouched umber hulk’s mandibles until it escapes. The icetouched umber hulk cannot make any other attacks while grabbing a creature.',
				damage: 'a grabbed target takes ongoing 10 damage from the icetouched umber hulk’s mandibles until it escapes',
				category: 1
			},
			{
				id: 'f5501453-945f-496f-9bd0-bcaa191412b9',
				name: 'Confusing Gaze',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Gaze, Psychic',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 16,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target slides 5 squares and is dazed (save ends).',
				damage: 'the target slides 5 squares and is dazed (save ends)',
				category: 3
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

		info: 'Level 12 Elite Soldier',
		phenotype: 'Large natural beast'
	},
	{
		id: '96ba9bdb-1e90-4d6c-a811-183a7b636c9f',
		name: 'Practice Mannequin',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5',
		movement: '6',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'longsword',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 80,
		initiative: 7,
		ac: 20,
		fortitude: 19,
		reflex: 20,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '774cd25e-e91c-48c7-bef3-2a2a32a4b5e6',
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
				details: '1d8+2 damage.',
				damage: '1d8+2 damage',
				category: 1
			},
			{
				id: 'f7a18a00-9c53-40be-96f4-1d08a8bc4ee2',
				name: 'Adjustment Pattern',
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
					defence: 2
				},
				description: '',
				details: 'One or two creatures; 1d8 damage, and slide the target 1 square.',
				damage: '1d8 damage',
				category: 1
			},
			{
				id: 'af523daa-3dc4-4c7b-b534-c9455b26acc6',
				name: 'Training Ripost',
				action: {
					action: 4,
					trigger: 'when a melee attack misses the mannequin',
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
				details: 'The triggering creature; 1d8+2 damage, and the target takes a -2 penalty to all defenses until the end of the mannequin’s next turn.',
				damage: '1d8+2 damage',
				category: 5
			},
			{
				id: '37604e54-d8d8-4707-b3da-8322c5ac08bd',
				name: 'Overbearing Flank',
				action: null,
				keywords: '',
				condition: 'when the mannequin hits a creature it flanks with an attack',
				range: '',
				attack: null,
				description: '',
				details: 'The creature is knocked prone.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 7 Controller',
		phenotype: 'Medium natural animate (construct)'
	},
	{
		id: 'f65da93e-0063-4dbd-9115-ecab301e5470',
		name: 'Spell Weaver Collector',
		details: '',
		size: 2,
		origin: 3,
		type: 2,
		keywords: '',
		level: 7,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6, teleport 6',
		alignment: 'Unaligned',
		languages: 'telepathy (sight)',
		skills: 'Arcana +18, Insight +16',
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
		hp: 312,
		initiative: 5,
		ac: 21,
		fortitude: 17,
		reflex: 21,
		will: 21,
		regeneration: null,
		auras: [
			{
				id: 'd6f3983c-1203-4a1d-9b1c-eba48b982a5c',
				name: 'Arcane Bolster',
				keywords: '',
				details: 'aura 2; at the start of the spell weaver’s turn, it gains temporary hit points equal to the level of the highest level magic item within the aura.'
			}
		],
		powers: [
			{
				id: '42f2a18a-31d5-4a5d-96b6-1ff2e8318aab',
				name: 'Esoteric Touch',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d6+3 force damage, and the target takes ongoing 5 force damage (save ends).',
				damage: '1d6+3 force damage',
				category: 1
			},
			{
				id: '6b14184c-43a0-48d7-af8c-513e29e1c798',
				name: 'Esoteric Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning, Thunder',
				condition: '(minor',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d6+3 lightning damage, and the target is blinded (save ends), and each creature adjacent to the target takes 1d6+3 thunder damage.',
				damage: '1d6+3 lightning damage',
				category: 1
			},
			{
				id: 'c0367d85-a8c4-4cc5-b994-3322858d24c3',
				name: 'Banishing Sign',
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
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'the target disappears to a place where it can see reflections of itself in every direction (save ends). While there, the target cannot target any creature or be targeted by any creature. When the target saves, he returns to his previous space, or the nearest unoccupied space.',
				damage: '',
				category: 3
			},
			{
				id: 'f60f4c6d-f708-4396-a37e-31459e44f2bd',
				name: 'Repulsing Touch',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '2d6+4 force damage, and push the target 5 squares.',
				damage: '2d6+4 force damage',
				category: 3
			},
			{
				id: '0e19286d-874b-4c8a-af32-fc4ea94b724e',
				name: 'Extract Arcane Soul',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Healing, Psychic',
				condition: 'requires chromatic disk',
				range: 'Ranged 5',
				attack: {
					bonus: 13,
					defence: 3
				},
				description: '',
				details: 'bloodied arcane targets only; 1d8+9 psychic damage, and the target is dazed (save ends). Miss: Half damage. Effect: The spell weaver regains 24 hit points.',
				damage: '1d8+9 psychic damage',
				category: 3
			},
			{
				id: 'de7b0d1c-3d07-4c98-831c-1b92852c9965',
				name: 'Flametrap Invocation',
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
					bonus: 11,
					defence: 2
				},
				description: '',
				details: '1d8+4 fire damage, and the target is immobilized and each creature adjacent to the target at the start of the target’s turn takes 1d8 + 4 fire damage (save ends).',
				damage: '1d8+4 fire damage',
				category: 3
			},
			{
				id: '06da1a19-aaa0-4792-9370-4507f0dc1e33',
				name: 'Sharing of Minds',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '1d6+3 psychic damage, and the target is dazed and attacks the nearest creature with its standard action on its turn (save ends both).',
				damage: '1d6+3 psychic damage',
				category: 3
			},
			{
				id: 'bd310740-440d-4691-9ce1-ca9c9e03a665',
				name: 'Arctic Rune',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Cold',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: '1d6+3 cold damage, and slide the target 1 square.',
				damage: '1d6+3 cold damage',
				category: 3
			},
			{
				id: '932e6449-b018-4251-a7b3-c7177133b90d',
				name: 'Battle Arcana',
				action: {
					action: 4,
					trigger: 'when the spell weaver takes damage',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge 5'
				},
				keywords: '',
				condition: 'or at-will while bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'The spell weaver takes a minor action or a move action.',
				damage: '',
				category: 5
			},
			{
				id: 'e2ec1712-0a1f-4617-8a84-3c1d62419e15',
				name: 'Multitasking Brain',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When dazed, a spell weaver takes a standard action and a minor action on its turn, instead of just a standard action, and can still take immediate actions.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Solo Controller',
		phenotype: 'Medium immortal humanoid'
	},
	{
		id: 'a569a8fa-7ac9-4e36-9cd8-89818bcd6828',
		name: 'Warwing Drake',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: 'mount, reptile',
		level: 4,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9',
		movement: '8, fly 8, overland flight 12',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +11',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 14,
			modifier: 2,
			cost: 5
		},
		hp: 56,
		initiative: 6,
		ac: 18,
		fortitude: 17,
		reflex: 15,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2843e411-302d-4fd5-a33e-07f3b626e570',
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
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: 'f9212c34-e306-4013-81c0-bece81d03fd0',
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
					bonus: 7,
					defence: 0
				},
				description: '',
				details: '1d6+4 damage.',
				damage: '1d6+4 damage',
				category: 1
			},
			{
				id: '39880cc0-c938-4f0b-adfb-5ef31bf48855',
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
				details: 'The warwing drake flies up to 8 squares and makes two claw attacks at any point during that movement. The drake doesn’t provoke opportunity attacks when moving away from a target of either attack.',
				damage: 'The warwing drake flies up to 8 squares and makes two claw attacks at any point during that movement',
				category: 1
			},
			{
				id: 'fe4cfc0d-734f-4ec3-9f97-e64152b863e8',
				name: 'Fearless Flight',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Mount',
				condition: 'no action',
				range: '',
				attack: null,
				description: '',
				details: 'Attackers can’t target the warwing drake’s rider when the drake’s movement provokes opportunity attacks.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'fear (while flying)',
		tactics: '',

		info: 'Level 4 Skirmisher',
		phenotype: 'Large natural beast (mount, reptile)'
	},
	{
		id: '6cb72f12-f54d-4942-85c2-94b22672de4b',
		name: 'Boneshard Mongrel',
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
		hp: 70,
		initiative: 5,
		ac: 17,
		fortitude: 16,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'da54d4d3-9e9e-4d3d-8f52-a02b7b3a466c',
				name: 'Boneshard Bite',
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
				details: '1d8+3 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'c50d7f9c-89f1-4819-b9b8-b29f406188ba',
				name: 'Bite and Hurl',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage, and ongoing 5 necrotic damage (save ends), and the target slides 2 squares and is knocked prone.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '2f8a1096-21e7-432c-ba4e-b1036e0ad849',
				name: 'Boneshard Maul',
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
					bonus: 9,
					defence: 0
				},
				description: '',
				details: 'Targets a prone creature; 1d8+3 necrotic damage.',
				damage: '1d8+3 necrotic damage',
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

		info: 'Level 5 Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '041c529a-9eea-4a6b-87bd-59f9eba5de20',
		name: 'Bram Ironfell',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 12,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +10; low-light vision',
		movement: '5',
		alignment: 'Unaligned',
		languages: 'Common, Deep Speech, Dwarven, Elven',
		skills: 'Bluff +17, Diplomacy +17, Dungeoneering +15, History +14',
		equipment: 'dagger',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 123,
		initiative: 9,
		ac: 26,
		fortitude: 24,
		reflex: 23,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6da369b7-063a-474c-9aae-295ba659a925',
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
					bonus: 17,
					defence: 0
				},
				description: '',
				details: '2d4+5 damage.',
				damage: '2d4+5 damage',
				category: 1
			},
			{
				id: '3cd32fb0-3bcc-4864-a1b5-54956b2dea9c',
				name: 'Coward’s Slice',
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
				details: 'Bram makes a dagger attack, then shifts half his speed. If the attack hits, the target is marked by one of Bram’s allies within 5 squares of the target. The mark lasts until the end of Bram’s next turn.',
				damage: 'the target is marked by one of Bram’s allies within 5 squares of the target',
				category: 1
			},
			{
				id: 'c568b100-125f-466f-86d6-01bfc7116531',
				name: 'Ambassador’s Sanction',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: 'the target can move half its speed and make a melee basic attack. The target receives a +2 bonus to the attack roll if it attacks a creature marked by the it.',
				attack: null,
				description: '',
				details: 'targets one ally in burst',
				damage: '',
				category: 1
			},
			{
				id: '3692c686-b5e0-46db-ad01-8c76d0900f34',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect forces Bram Ironfell to move—through a pull, a push, or a slide—he moves 1 square less than the effect specifies. When an attack would knock Bram prone, he can roll a saving throw to avoid falling prone.',
				damage: 'or a slide—he moves 1 square less than the effect specifies',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 12 Skirmisher (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '0ac3ab08-161e-4328-8591-e79871f71383',
		name: 'Cauldron Corpse',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 5,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +3',
		movement: '4',
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
		hp: 152,
		initiative: 4,
		ac: 18,
		fortitude: 17,
		reflex: 16,
		will: 15,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5b57965e-f05f-42a3-9b4a-094ffb2a4618',
				name: 'Necrotic Slam',
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
					defence: 1
				},
				description: '',
				details: '1d8+3 damage, and ongoing 5 necrotic damage (save ends).',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '4a244758-2ca5-4632-8ba7-96126d05a8e9',
				name: 'Necrotic Spew',
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
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d8+3 necrotic damage, and the target is dazed until the end of the cauldron corpse’s next turn.',
				damage: '1d8+3 necrotic damage',
				category: 1
			},
			{
				id: '66ef8627-b34e-4f6d-b4a0-32c3799ae19a',
				name: 'Necrotic Spray',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Necrotic',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 8,
					defence: 1
				},
				description: '',
				details: '1d8+3 necrotic damage, and the cauldron corpse releases one cauldron mote.',
				damage: '1d8+3 necrotic damage',
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
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Brute',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: '812da511-b942-4504-8c75-a5fdb952f52a',
		name: 'Cyclops Slaver',
		details: '',
		size: 3,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15; truesight',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Elven',
		skills: 'Stealth +19',
		equipment: 'leather armor; net; shuriken; spear',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 10,
			modifier: 0,
			cost: 0
		},
		hp: 149,
		initiative: 14,
		ac: 29,
		fortitude: 27,
		reflex: 29,
		will: 25,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '86d1e74f-c365-46c9-8f4e-0e12355e6c90',
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
				details: 'Reach 2; 2d10+4 damage.',
				damage: '2d10+4 damage',
				category: 1
			},
			{
				id: '2ea06257-2812-4939-aaa4-9ad550adb073',
				name: 'Shuriken',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '(standard',
				range: 'Ranged 6/12',
				attack: {
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d6+4 damage.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '2274366d-551d-422a-b01e-44bcec0de158',
				name: 'Evil Eye',
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
				details: 'the target takes a -2 penalty to attack rolls against the cyclops slaver until the end of the encounter or until the slaver uses evil eye against a different target.',
				damage: 'the target takes a -2 penalty to attack rolls against the cyclops slaver until the end of the encounter or until the slaver uses evil eye against a different target',
				category: 3
			},
			{
				id: '5ea6482c-1551-49fa-abcc-6f62bcd622a4',
				name: 'Barbed Net',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: 'requires net',
				range: 'Close blast 4',
				attack: {
					bonus: 19,
					defence: 2
				},
				description: '',
				details: '1d10+6 damage, and the target is restrained and takes ongoing 10 damage (save ends both).',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: 'b66d8a57-41e8-4ae2-a233-448caff00849',
				name: 'Sleep Powder Flask',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Sleep',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 19,
					defence: 1
				},
				description: '',
				details: 'the target is slowed (save ends). First Failed Saving Throw: The target is knocked unconscious instead of slowed (save ends).',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Controller',
		phenotype: 'Large fey humanoid'
	},
	{
		id: '7d46c6bc-0346-4e0b-b923-aa8b2aa2cc26',
		name: 'Drow Underling',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: '',
		equipment: 'dagger; leather armor; short sword',
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
		initiative: 15,
		ac: 28,
		fortitude: 24,
		reflex: 27,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3ea691c1-dece-469d-9477-7fb238f644ea',
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
				details: '6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '2c88efe8-919c-4648-ba6b-0f9a5823b774',
				name: 'Thrown Dagger',
				action: {
					action: 0,
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
				details: '6 poison damage.',
				damage: '6 poison damage',
				category: 1
			},
			{
				id: '417ebeb0-6c86-4669-9a62-de260c1dfbc3',
				name: 'Darkfire Sacrifice',
				action: null,
				keywords: '',
				condition: 'when the drow underling is reduced to 0 hit points',
				range: '',
				attack: null,
				description: '',
				details: 'An ally within 5 squares of the drow underling gains combat advantage and ignores concealment on its next attack.',
				damage: 'An ally within 5 squares of the drow underling gains combat advantage and ignores concealment on its next attack',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '21d4dc51-e80b-4866-87f1-dc5786be5c57',
		name: 'Druemmeth Goldtemple',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 15,
		role: {
			type: 6,
			flag: 0,
			leader: true
		},
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: 'Diplomacy +15, History +17, Insight +14',
		equipment: 'chainmail; longsword',
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
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 144,
		initiative: 16,
		ac: 29,
		fortitude: 27,
		reflex: 29,
		will: 25,
		regeneration: null,
		auras: [
			{
				id: '9e4911ec-4d17-4fe1-8370-b7bbd1d440ee',
				name: 'Fey Quickness',
				keywords: '',
				details: 'aura 10; an eladrin ally within the aura can use fey step as a minor action.'
			}
		],
		powers: [
			{
				id: '30423a6c-0c69-4778-b17d-42351366a87d',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d8+6 damage, and the target grants combat advantage until the end of its next turn.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '43238c33-2351-4803-8ad9-6d10571cf3a3',
				name: 'Nimbus of Battle',
				action: {
					action: 4,
					trigger: 'when an ally within 10 damages an enemy',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Healing',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The triggering ally regains 1d10 hit points.',
				damage: 'The triggering ally regains 1d10 hit points',
				category: 5
			},
			{
				id: '17e6c9ba-d122-42b9-8ef6-dbd9b09072ad',
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
				details: 'Druemmeth Goldtemple teleports 5 squares.',
				damage: 'Druemmeth Goldtemple teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Skirmisher (L)',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: 'cc76d2b1-a885-4327-a5be-f4fcc04302b2',
		name: 'Eladrin Feydark Gladiator',
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
		senses: 'Perception +9; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Common, Elven',
		skills: '',
		equipment: 'scale armor; spear',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 154,
		initiative: 17,
		ac: 32,
		fortitude: 28,
		reflex: 30,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '05c0624f-46e4-4a2e-b9a7-3020563d9c52',
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
				details: '2d8+7 damage, and the target is marked until the end of the gladiator’s next turn.',
				damage: '2d8+7 damage',
				category: 1
			},
			{
				id: '560a7a23-82d1-4e4f-aa83-ac50fbd4dda6',
				name: 'Bloodletting Stab',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: '3d8+7 damage. If the gladiator has combat advantage against the target, the target takes ongoing 10 damage (save ends).',
				damage: '3d8+7 damage',
				category: 1
			},
			{
				id: 'f802b45d-46a1-40ac-925a-fed34d7721d7',
				name: 'Gladiator’s Cage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'An enemy flanked by the gladiator takes a -5 penalty to attack rolls.',
				damage: 'An enemy flanked by the gladiator takes a -5 penalty to attack rolls',
				category: 0
			},
			{
				id: 'c0ec7663-ffcd-4872-aba2-f464526f3d15',
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
				details: 'The eladrin Feydark gladiator teleports 5 squares.',
				damage: 'The eladrin Feydark gladiator teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Soldier',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '89370f5a-6c2d-4137-b69c-3cf02ef7a13b',
		name: 'Eladrin Winter Blade',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: '',
		level: 14,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '6',
		alignment: 'Unaligned',
		languages: 'Elven',
		skills: '',
		equipment: 'leather armor; longsword',
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
			score: 23,
			modifier: 6,
			cost: -1
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 15,
		ac: 30,
		fortitude: 26,
		reflex: 27,
		will: 24,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '32583e89-aba6-42e9-9487-5b5920dd7379',
				name: 'Winter Longsword',
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
				details: '8 cold damage.',
				damage: '8 cold damage',
				category: 1
			},
			{
				id: '26316c23-c67c-4820-b985-6f0c8880d451',
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
				details: 'The eladrin winter blade teleports 5 squares.',
				damage: 'The eladrin winter blade teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 14 Minion',
		phenotype: 'Medium fey humanoid'
	},
	{
		id: '75f5ba96-49fd-40bd-b709-8c5a963cca58',
		name: 'Jeras Falck',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 5,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +2',
		movement: '4',
		alignment: 'Evil',
		languages: 'Common, Elven',
		skills: 'Arcana +9, History +9, Religion +9',
		equipment: 'dagger; orb implement',
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
			score: 9,
			modifier: -1,
			cost: 0
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
		hp: 114,
		initiative: 1,
		ac: 19,
		fortitude: 16,
		reflex: 17,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '686b04f1-b5fd-47a6-9d27-ed9cb22d0d06',
				name: 'Dagger of Pain',
				action: {
					action: 1,
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
				details: '2d4+2 damage, and the target slides 2 squares.',
				damage: '2d4+2 damage',
				category: 1
			},
			{
				id: '72990d05-08ee-4600-9eec-ce9bec348594',
				name: 'Pain Bolt',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Implement, Necrotic',
				condition: '(standard',
				range: 'Ranged 20',
				attack: {
					bonus: 8,
					defence: 2
				},
				description: '',
				details: '1d6+4 necrotic damage, and the target takes -2 to all defenses until the end of Jeras’s next turn.',
				damage: '1d6+4 necrotic damage',
				category: 1
			},
			{
				id: '199cf9f2-1db0-4360-a2af-b6ab54453597',
				name: 'Flurry of Pain',
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
				details: 'Jeras makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '6242d268-d692-4e66-bf06-3ede37dcf309',
				name: 'Crimson Claws',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when falck does not have a creature immobilized with this power'
				},
				keywords: 'Implement',
				condition: '',
				range: 'Ranged 10',
				attack: null,
				description: '',
				details: '2d6+4 damage, and ongoing 5 damage and the target is immobilized (save ends both). While Falck has a target immobilized with this power, he gains regeneration 3.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: 'e7719b26-b8ba-46dd-a2ca-fde91d59138c',
				name: 'Overwhelming Wounds',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Implement',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: '2d6+4 damage, and if the target is bloodied after the damage, that target is dazed until the end of Falck’s next turn.',
				damage: '2d6+4 damage',
				category: 1
			},
			{
				id: '00875cd1-790e-4c97-b1aa-60da91dd284a',
				name: 'Command Undead',
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
				details: 'Undead allies within 10 squares of Jeras Falck can shift 2 squares as a free action. One destroyed undead minion rises again with 1 hit point and stands as a free action.',
				damage: 'Undead allies within 10 squares of Jeras Falck can shift 2 squares as a free action',
				category: 2
			},
			{
				id: 'eb6d8352-d9bf-4817-a299-9f66b9865517',
				name: 'Wraithform',
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
				details: 'Jeras Falck becomes insubstantial and gains phasing until the end of his next turn.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 5 Elite Controller (L)',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '26a632d9-15f5-4d10-baef-398590f7ed17',
		name: 'Scarred Bulette',
		details: '',
		size: 3,
		origin: 4,
		type: 1,
		keywords: '',
		level: 15,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +10; darkvision, tremorsense 20',
		movement: '6, burrow 6',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Athletics +20, Endurance +19',
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
			score: 21,
			modifier: 5,
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
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 304,
		initiative: 14,
		ac: 29,
		fortitude: 28,
		reflex: 25,
		will: 23,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3fbe1eb8-97bc-431f-afe5-f6318073f64e',
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
				details: 'Before it bites, the bulette can make a standing long jump (as a free action) without provoking opportunity attacks; 2d8+6 damage, or 4d8+6 damage against a prone target.',
				damage: '2d8+6 damage',
				category: 1
			},
			{
				id: '4989f81f-9441-4770-8571-437e2b4e8678',
				name: 'Earth Furrow',
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
					bonus: 14,
					defence: 1
				},
				description: '',
				details: 'The scarred bulette moves its burrow speed just below the surface of the ground, avoiding opportunity attacks as it passes underneath other creatures’ spaces. As it burrows beneath the space of a Medium or smaller creature on the ground, the bulette makes an attack against the creature; the target is knocked prone.',
				damage: '',
				category: 2
			},
			{
				id: 'fcb59f7e-9f28-41c8-abc3-375e4c8651e8',
				name: 'Rising Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'the bulette must have emerged from the ground after burrowing this turn',
				range: 'Close burst 2',
				attack: {
					bonus: 19,
					defence: 0
				},
				description: '',
				details: 'the bulette sprays rocks and dirt into the air when it rises out of the ground; 1d10+6 damage.',
				damage: '1d10+6 damage',
				category: 1
			},
			{
				id: '630846c2-bab6-4d40-a06a-d5958b43eb73',
				name: 'Spray of Tainted Blood',
				action: null,
				keywords: '',
				condition: 'when an adjacent creature hits the scarred bulette with a melee attack',
				range: '',
				attack: null,
				description: '',
				details: 'The attacker takes a -2 penalty to Fortitude until the end of the scarred bulette’s next turn.',
				damage: 'The attacker takes a -2 penalty to Fortitude until the end of the scarred bulette’s next turn',
				category: 0
			},
			{
				id: '03ca17cc-c94e-4021-a5e2-792a563d979b',
				name: 'Habituated to Torture',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While the scarred bulette is bloodied, it gains a +2 bonus to all defenses and to speed.',
				damage: 'it gains a +2 bonus to all defenses and to speed',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: 'charm (a tortured bulette hit by a charm attack is immobilized until the end of its next turn)',
		immune: '',
		tactics: '',

		info: 'Level 15 Elite Skirmisher',
		phenotype: 'Large natural beast'
	},
	{
		id: '53de897c-b4d3-4903-ab0a-1b24a336d3a8',
		name: 'Skeleton Archer',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'undead',
		level: 2,
		role: {
			type: 0,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3; darkvision',
		movement: '5',
		alignment: 'Unaligned',
		languages: '',
		skills: '',
		equipment: 'arrow; longbow; short sword',
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
		hp: 31,
		initiative: 6,
		ac: 16,
		fortitude: 13,
		reflex: 14,
		will: 13,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '905d144f-743c-479b-a297-5ab766ff001f',
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
				id: '8a00fc40-f14d-4e2c-9722-1ec453b82a1b',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d10+4 damage.',
				damage: '1d10+4 damage',
				category: 1
			},
			{
				id: '22c75b53-37a3-4d5b-a603-f689012da560',
				name: 'Shake the Mark',
				action: {
					action: 4,
					trigger: 'when the skeleton archer is marked',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The skeleton archer is no longer marked.',
				damage: '',
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

		info: 'Level 2 Artillery',
		phenotype: 'Medium natural animate (undead)'
	},
	{
		id: 'e9eb663b-5b16-4276-b7d5-91bd2d15e127',
		name: 'Sorik Orvash',
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
		senses: 'Perception +2; low-light vision',
		movement: '5',
		alignment: 'Good',
		languages: 'Common, Dwarven',
		skills: 'Dungeoneering +9, Endurance +10',
		equipment: 'leather armor',
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
			score: 13,
			modifier: 1,
			cost: 3
		},
		charisma: {
			score: 11,
			modifier: 0,
			cost: 1
		},
		hp: 1,
		initiative: 1,
		ac: 14,
		fortitude: 14,
		reflex: 12,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'fd4acaa1-bfd5-415d-a124-6d5e7fdc22d7',
				name: 'Pick',
				action: {
					action: 1,
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
				details: '4 damage, and Sorik shifts 1 square.',
				damage: '4 damage',
				category: 1
			},
			{
				id: '3ffae054-269c-458d-8095-2404671394c2',
				name: 'Roll With It',
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
				details: 'Sorik can roll a saving throw to avoid damage from the attack. If he succeeds, he can shift 2 squares.',
				damage: 'sorik can roll a saving throw to avoid damage from the attack',
				category: 5
			},
			{
				id: '0ab96824-556c-4b06-a24b-f33ed46bd79f',
				name: 'Stand Your Ground',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'When an effect pulls, pushes, or slides Sorik, Sorik moves 1 square less than the effect specifies. When an attack could knock Sorik prone, a successful save negates that effect.',
				damage: 'Sorik moves 1 square less than the effect specifies',
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
		id: 'b1a848b3-ee2e-4435-b890-46df0ec2dc1d',
		name: 'Yellowskull Bandit',
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
		senses: 'Perception -1',
		movement: '6',
		alignment: 'Chaotic evil',
		languages: 'Common',
		skills: 'Stealth +10, Streetwise +6, Thievery +10',
		equipment: 'crossbow; crossbow bolt; leather armor; mace',
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
		hp: 36,
		initiative: 7,
		ac: 16,
		fortitude: 12,
		reflex: 14,
		will: 12,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '09bc4dee-c9fd-4d85-a7e5-e7c3494f548a',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: '1d8+3 damage, and the bandit shifts 1 square.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: 'b97399d4-6540-4c75-a6e8-3d47dd442596',
				name: 'Dazing Strike',
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
					bonus: 6,
					defence: 0
				},
				description: '',
				details: 'Requires mace or crossbow; 1d8+3 damage, the target is dazed until the end of the bandit’s next turn, and the bandit shifts 1 square.',
				damage: '1d8+3 damage',
				category: 1
			},
			{
				id: '0be4a990-afdc-4c1d-a3c2-560875140fc4',
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
				details: '1d6+3 damage, and the bandit shifts 1 square.',
				damage: '1d6+3 damage',
				category: 1
			},
			{
				id: '450eea15-372e-4caf-8f23-f413da2a0b50',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The bandit deals 1d6 extra damage to any target granting combat advantage to it.',
				damage: 'the bandit deals 1d6 extra damage to any target granting combat advantage to it',
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
		id: 'a9160900-9725-4a6d-ad5b-1ffbbf77fe86',
		name: 'Astral Shade',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +11; blindsight 10, darkvision',
		movement: 'fly 10 (hover), teleport 6 phasing',
		alignment: 'Unaligned',
		languages: 'Common',
		skills: 'Stealth +20',
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 448,
		initiative: 19,
		ac: 29,
		fortitude: 28,
		reflex: 30,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '220ade77-deba-4b8e-bee4-eec8fd3b8b77',
				name: 'Astral Slam',
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
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '3d8 + 4 radiant damage and the target gains vulnerable 10 to radiant damage until the end of the astral shade’s next turn. If the astral shade is bloodied, the target is also restrained (save ends).',
				damage: '3d8 + 4 radiant damage and the target gains vulnerable 10 to radiant damage until the end of the astral shade’s next turn',
				category: 1
			},
			{
				id: '5460f63e-7d3c-4a30-82c7-0d124a8da73b',
				name: 'Radiant Ray',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '(minor',
				range: '',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: 'One or two targets; 3d8 radiant damage, and the target slides 1 square. If the astral shade is bloodied, the attack instead deals 3d8 + 5 radian damage and slides the target 2 squares.',
				damage: '3d8 radiant damage',
				category: 1
			},
			{
				id: 'ba2252ee-c635-4efc-819d-c6b10d8a7d1a',
				name: 'Wrathful Strike',
				action: {
					action: 4,
					trigger: 'when damaged by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The astral shade teleports 4 squares and makes an astral slam attack or a radiant ray attack.',
				damage: 'The astral shade teleports 4 squares and makes an astral slam attack or a radiant ray attack',
				category: 5
			},
			{
				id: 'd0bd12a5-90f6-4aae-a3fb-4aafce60bd18',
				name: 'Astral Shockwave',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when the astral shade takes force damage'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '3d8 + 5 force damage and the target is pushed 5 squares.',
				damage: '3d8 + 5 force damage and the target is pushed 5 squares',
				category: 1
			},
			{
				id: '9b463276-c87d-4416-814f-e05640ae5473',
				name: 'Radiant Chains',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Radiant',
				condition: '',
				range: 'Close burst 3',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '3d8 + 5 radiant damage and the target is immobilized (save ends).',
				damage: '3d8 + 5 radiant damage and the target is immobilized (save ends)',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: 'force (the next attack against the astral shade ignores its insubstantial)',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 17 Solo Lurker',
		phenotype: 'Large immortal humanoid'
	},
	{
		id: 'b7385abf-31f0-4da3-964b-55cca70ef601',
		name: 'Astral Whitewings',
		details: '* A whitewing in this encounter flees if its corsair cutter rider',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'reptile',
		level: 15,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +18; low-light vision',
		movement: '4, fly 8 (hover); see also astral wings',
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
			score: 24,
			modifier: 7,
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
		hp: 146,
		initiative: 16,
		ac: 30,
		fortitude: 27,
		reflex: 28,
		will: 26,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '7c70679f-c00f-4365-a88f-948d03760b0a',
				name: 'Tail Slam',
				action: {
					action: 1,
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
				details: 'Reach 2; 2d8 + 7 damage.',
				damage: '2d8 + 7 damage',
				category: 1
			},
			{
				id: '91b54305-cc62-4c75-aab0-d55bfb2349d3',
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
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'The astral whitewing moves its fly speed and makes one tail slam attack at any point during that movement. The whitewing does not provoke opportunity attacks when moving away from the target of the attack.; .',
				damage: '',
				category: 1
			},
			{
				id: 'b28e5c4e-868b-4379-babe-387f44ad2d76',
				name: 'Stunning Shriek',
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
				details: 'the target is stunned until the end of its next turn.; 5; .',
				damage: '5',
				category: 1
			},
			{
				id: '272f3375-43a5-4e46-8c5e-c6e9cdd39884',
				name: 'Astral Jaunt',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Mount, Teleportation',
				condition: 'must be mounted by a friendly githyanki rider',
				range: '',
				attack: null,
				description: '',
				details: 'The astral whitewing and its rider teleport a distance equal to the whitewing’s fly speed.',
				damage: '',
				category: 2
			},
			{
				id: '223e902c-856a-401a-9888-815ec362fcb7',
				name: 'Astral Wings',
				action: null,
				keywords: '',
				condition: 'encounter',
				range: '',
				attack: null,
				description: '',
				details: 'While in the Astral Sea, the whitewing’s fly speed increases to 12 squares.',
				damage: 'the whitewing’s fly speed increases to 12 squares',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 15 Skirmisher',
		phenotype: 'Large immortal beast (reptile)'
	},
	{
		id: '54fa7d55-135f-4dab-b452-662abca8ca68',
		name: 'Bladebearer Strangler',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'bugbear',
		level: 8,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +7; low-light vision',
		movement: '7',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Acrobatics +13, Intimidate +11, Stealth +15',
		equipment: 'battleaxe; garrote; leather armor',
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
		hp: 88,
		initiative: 12,
		ac: 22,
		fortitude: 21,
		reflex: 20,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'c1f90c88-d7b9-4362-84ad-10357802e524',
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
				details: '1d12 + 6 Damage.',
				damage: '1d12 + 6 damage',
				category: 1
			},
			{
				id: '5dbeab61-768b-412a-88bf-235c7d001b39',
				name: 'Strangle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'requires combat advantage and a garrote',
				range: '',
				attack: {
					bonus: 11,
					defence: 2
				},
				description: '',
				details: 'Can be used as part of a charge; 1d10 + 5 damage, and the target is grabbed (-4 penalty to escape). Sustain Standard: When it sustains this power, the bugbear deals the target 1d10 + 5 damage and sustains the grab.',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: 'ee66a43d-7a7f-4c5f-8f78-5ba129e50c23',
				name: 'Body Shield',
				action: {
					action: 5,
					trigger: 'when targeted by a melee or a ranged attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer strangler makes its grabbed victim the target instead. The Bladebearer strangler cannot use this power to redirect attacks made by a creature it is currently grabbing.',
				damage: '',
				category: 5
			},
			{
				id: 'e6cafe11-cfa0-40cc-ad24-0f8889c4f085',
				name: 'Strangler’s Alacrity',
				action: {
					action: 7,
					trigger: 'when a creature the bladebearer strangler has grabbed drops to 0 or fewer hit points',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer strangler can make a charge attack.',
				damage: '',
				category: 5
			},
			{
				id: '0f92cb4f-ad1f-46e1-ba13-c64a417610f3',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Bladebearer strangler deals 1d6 extra damage against any creature granting combat advantage to it.',
				damage: 'the bladebearer strangler deals 1d6 extra damage against any creature granting combat advantage to it',
				category: 0
			},
			{
				id: 'f5da5391-3acf-458a-9715-525aa68bad8b',
				name: 'Strangler’s Cover',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'While the Bladebearer strangler is grabbing a creature, that creature’s allies consider the grabbed creature to be an enemy for determining cover.',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Lurker',
		phenotype: 'Medium natural humanoid (bugbear)'
	},
	{
		id: '641a821a-e89c-4530-9c8a-997b565122c6',
		name: 'Calmachia',
		details: '',
		size: 3,
		origin: 4,
		type: 3,
		keywords: 'dragon, living construct',
		level: 9,
		role: {
			type: 3,
			flag: 2,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '6, fly 8 (hover)',
		alignment: 'Unaligned',
		languages: 'Common, Draconic',
		skills: 'Arcana +13, Intimidate +14',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 400,
		initiative: 4,
		ac: 23,
		fortitude: 23,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '00068fa8-4554-44db-8d17-32610646cbb0',
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
				details: 'Reach 2; 2d8 + 6 damage, and the target is grabbed.',
				damage: '2d8 + 6 damage',
				category: 1
			},
			{
				id: 'e09c8b79-f182-41c2-a14f-874e9d4e57e2',
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
				details: 'Reach 2; 1d10 + 6 damage, and the target slides 2 squares.',
				damage: '1d10 + 6 damage',
				category: 1
			},
			{
				id: 'cec51ee6-86cf-477c-9150-31c69f9ba12c',
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
				details: 'Calmachia makes two claw attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'b12bc7db-e94b-42ac-9cfc-4d13ee0c68ea',
				name: 'Fling',
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
					defence: 1
				},
				description: '',
				details: 'Targets a creature Calmachia has grabbed; 1d8+6 damage, and the target is pushed 6 squares and knocked prone. Miss: The target is pushed 2 squares.',
				damage: '1d8+6 damage',
				category: 1
			},
			{
				id: '8093c7c2-84e7-49e1-abbb-7be33587c315',
				name: 'Arcing Backlash',
				action: {
					action: 4,
					trigger: 'when hit by an attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Lightning',
				condition: '',
				range: 'Close burst 10',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: 'targets only the attacker; 1d8 + 5 lightning damage, and the enemy is pushed 2 squares and knocked prone.',
				damage: '1d8 + 5 lightning damage',
				category: 5
			},
			{
				id: '4f0d22a8-c69b-4d00-903c-364beaa1cfb2',
				name: 'Breath Weapon',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 13,
					defence: 2
				},
				description: '',
				details: '2d6 + 5 force damage, and the target is slowed (save ends) and pushed 3 squares.',
				damage: '2d6 + 5 force damage',
				category: 1
			},
			{
				id: 'ebef7cb0-aaf6-4f61-88b1-908634497a7d',
				name: 'Bloodied Breath',
				action: {
					action: 7,
					trigger: 'when first bloodied',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Calmachia’s breath weapon recharges, and she uses it immediately.',
				damage: '',
				category: 5
			},
			{
				id: '69032fc4-3cb1-4664-8162-8f99fcfac7fe',
				name: 'Commanding Voice',
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
					bonus: 11,
					defence: 3
				},
				description: '',
				details: 'targets enemies; the target is dominated until the end of Calmachia’s next turn. Miss: The target is dazed until the end of Calmachia’s next turn.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 9 Solo Controller',
		phenotype: 'Large natural magical beast (dragon, living construct)'
	},
	{
		id: '8d6a8319-13ec-4617-96a8-4efecba6f719',
		name: 'Dakai',
		details: '',
		size: 1,
		origin: 4,
		type: 2,
		keywords: 'goblin',
		level: 7,
		role: {
			type: 3,
			flag: 0,
			leader: true
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Arcana +16, Bluff +10, Stealth +5, Thievery +10',
		equipment: 'leather armor; mace; rod implement',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 13,
			modifier: 1,
			cost: 3
		},
		hp: 80,
		initiative: 3,
		ac: 22,
		fortitude: 21,
		reflex: 22,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd6961146-4b0f-4b58-9f8e-2a886a53bf5d',
				name: 'Mace',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Arcane, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8 + 4 damage, and the next of Dakai’s allies to attack the target gains +2 to its attack roll.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: 'ad08a922-808a-4c41-a800-1c3dcdd4a6e3',
				name: 'Rod Arc',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Arcane, Implement, Lightning',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'Dakai ignores the target’s cover; 10; 1d8 + 4 lightning damage, and the target takes -3 to its next damage roll.',
				damage: '1d8 + 4 lightning damage',
				category: 1
			},
			{
				id: 'f5cacf8e-8f5d-4dee-8320-74793d1d8e3a',
				name: 'Shard Orb',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Arcane, Force, Implement, Zone',
				condition: '',
				range: 'Area burst 1 within 10',
				attack: {
					bonus: 10,
					defence: 1
				},
				description: '',
				details: 'targets enemies; 1d10 + 4 force damage, and the target is knocked prone. Effect: The burst creates a zone that lasts until the end of Dakai’s next turn. An enemy who ends its turn in this zone takes 1d10 + 4 force damage.',
				damage: '1d10 + 4 force damage',
				category: 1
			},
			{
				id: '2df58015-4da8-4d02-8c4d-81f60f050dd0',
				name: 'Resistive Formula',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Healing',
				condition: '',
				range: 'Close burst 5',
				attack: null,
				description: '',
				details: 'allies in the burst gain +1 to AC and can end this bonus as a free action to gain 5 temporary hit points.',
				damage: 'allies in the burst gain +1 to AC and can end this bonus as a free action to gain 5 temporary hit points',
				category: 3
			},
			{
				id: '2c21fb97-dd5e-4df8-bdb6-1d38ffba5ed7',
				name: 'Goblin Tactics',
				action: {
					action: 4,
					trigger: 'when missed by a meleeattack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Dakai shifts 1 square.',
				damage: 'Dakai shifts 1 square',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Controller (L)',
		phenotype: 'Small natural humanoid (goblin)'
	},
	{
		id: 'b568e12d-e785-43ed-93c4-af383a49082f',
		name: 'Decrepit Flesh Golem',
		details: '',
		size: 3,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 8,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +5; darkvision',
		movement: '5 can’t shift',
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
		hp: 210,
		initiative: 4,
		ac: 20,
		fortitude: 23,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2eda4b66-c21b-493a-814e-f65f33b08192',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d8 + 5 damage, and the target is pushed 2 squares.',
				damage: '2d8 + 5 damage',
				category: 1
			},
			{
				id: '3bc14122-6e39-4f2e-bfcd-cc0c666ecba4',
				name: 'Berserk Attack',
				action: {
					action: 4,
					trigger: 'when damaged by anattack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The flesh golem makes a slam attack against a random enemy within its reach.',
				damage: '',
				category: 5
			},
			{
				id: 'ac5270f0-23d8-4d32-8894-9b3441ec64c4',
				name: 'Golem Rampage',
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
				details: 'The decrepit flesh golem moves its speed and can move through enemies’ spaces. When it enters a creature’s space, the golem makes a slam attack against that creature.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Brute',
		phenotype: 'Large natural animate (construct)'
	},
	{
		id: '9e79b4ba-285c-47c7-88dc-0eaae2d42245',
		name: 'Decrepit Warforged',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 6,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3',
		movement: '5',
		alignment: 'Unaligned',
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
		hp: 1,
		initiative: 5,
		ac: 18,
		fortitude: 20,
		reflex: 18,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'ced36678-32ee-4a4e-a09c-ae354d5361e3',
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
				details: '6 damage; on a critical hit, the target is also knocked prone.',
				damage: '6 damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 6 Minion',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: '0846f651-cf91-4a7e-894e-f3920f229cc8',
		name: 'Fomorian Guards',
		details: '',
		size: 4,
		origin: 2,
		type: 2,
		keywords: 'giant',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13; truesight 6',
		movement: '8',
		alignment: 'Evil',
		languages: 'Deep Speech, Elven',
		skills: '',
		equipment: 'chainmail; halberd',
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
			score: 20,
			modifier: 5,
			cost: -1
		},
		charisma: {
			score: 15,
			modifier: 2,
			cost: 7
		},
		hp: 1,
		initiative: 16,
		ac: 33,
		fortitude: 30,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'cfc932a3-23fa-4345-8ac8-ae065a5ef0fc',
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
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'Reach 4; 8 damage (13 damage against immobilized targets) and the target is marked until the end of the fomorian guard’s next turn.',
				damage: '8 damage (13 damage against immobilized targets) and the target is marked until the end of the fomorian guard’s next turn',
				category: 1
			},
			{
				id: 'c64222ec-984b-417e-851e-ffd0190d0c6b',
				name: 'Evil Eye',
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
					bonus: 20,
					defence: 3
				},
				description: '',
				details: 'the target is immobilized until the end of the fomorian guard’s turn.; 5; .',
				damage: '5',
				category: 3
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Minion',
		phenotype: 'Huge fey humanoid (giant)'
	},
	{
		id: 'ff8819a6-ad9d-48c9-bcba-5352883d1ba8',
		name: 'Forge Drake',
		details: 'This winged drake is made of shining steel',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6, fly 4 (clumsy)',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 4,
			modifier: -3,
			cost: 0
		},
		hp: 79,
		initiative: 9,
		ac: 21,
		fortitude: 19,
		reflex: 20,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '054c4b14-31b9-457a-901f-d296c4c406d6',
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
				details: '2d6 + 4 damage.',
				damage: '2d6 + 4 damage',
				category: 1
			},
			{
				id: 'ff68e636-4e86-4813-986b-53ce7e7067c5',
				name: 'Shifting Bite',
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
					defence: 0
				},
				description: '',
				details: '2d4 + 3 damage. The forge drake can shift 1 square before or after the attack.',
				damage: '2d4 + 3 damage',
				category: 1
			},
			{
				id: '3b9e8903-9816-47a8-8336-5e4bd251ce50',
				name: 'Guard Creature',
				action: {
					action: 4,
					trigger: 'when an enemyattacks a creature guarded by the forge drake',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The forge drake shifts 2 squares toward or around the triggering creature. If the drake is adjacent to the triggering creature after shifting, it can make a claw attack against that creature.',
				damage: 'The forge drake shifts 2 squares toward or around the triggering creature',
				category: 5
			},
			{
				id: 'b514132c-3e1e-4370-9067-68629dd19c46',
				name: 'Force Breath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: 'Close blast 3',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: '3d6 + 4 force damage, and target is pushed 2 squares and knocked prone.',
				damage: '3d6 + 4 force damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural animate (construct, homunculus)'
	},
	{
		id: '9f48a10f-361b-4746-a608-191be2f198e4',
		name: 'Forge Wisp Wraith',
		details: '',
		size: 2,
		origin: 5,
		type: 2,
		keywords: 'undead',
		level: 7,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +3',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Chaotic Evil',
		languages: '',
		skills: 'Stealth +9',
		equipment: '',
		category: '',
		strength: {
			score: 4,
			modifier: -3,
			cost: 0
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
		initiative: 4,
		ac: 19,
		fortitude: 20,
		reflex: 18,
		will: 19,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5c4a0957-d636-47aa-bb21-2b88c94abef6',
				name: 'Kindling Touch',
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
					defence: 1
				},
				description: '',
				details: '2 necrotic damage, and ongoing 5 fire damage (save ends).',
				damage: '2 necrotic damage',
				category: 1
			},
			{
				id: '1c7b876c-2454-4302-b89b-00650c4c4bc1',
				name: 'Explosive End',
				action: null,
				keywords: 'Fire',
				condition: 'when reduced to 0 hp',
				range: 'Close burst 1',
				attack: {
					bonus: 7,
					defence: 2
				},
				description: '',
				details: 'ongoing 5 fire damage (save ends).',
				damage: 'ongoing 5 fire damage (save ends)',
				category: 0
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, fire, necrotic, poison',
		tactics: '',

		info: 'Level 7 Minion',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '17577c53-b56a-4292-b03d-c85a18fe9341',
		name: 'Forgewraith',
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
		senses: 'Perception +9; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Arcana +13, Intimidate +14, Stealth +10',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 123,
		initiative: 5,
		ac: 20,
		fortitude: 19,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a7e95f99-0783-4f6c-9030-240edd9bcf83',
				name: 'Pain Hammer',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '1d6 + 5 fire and necrotic damage, and the target is pushed 2 squares and knocked prone.',
				damage: '1d6 + 5 fire and necrotic damage',
				category: 1
			},
			{
				id: '27a0880b-ef02-406d-9253-e2e9023b6ab9',
				name: 'Soulburn',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d6 + 5 fire and necrotic damage, the forgewraith slides the target 2 squares, and the target takes a -2 penalty to all defenses until the end of the forgewraith’s next turn.',
				damage: '1d6 + 5 fire and necrotic damage',
				category: 1
			},
			{
				id: '281de7e5-27ac-4c86-a761-4694afd1edca',
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
				details: 'The forgewraith makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '89adb0f3-7af6-4b7c-9861-74ad9d06606b',
				name: 'Forge Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '10; 2d10 + 5 fire damage, and ongoing 10 fire damage (save ends), and the target is knocked prone. Each time a target takes ongoing damage from this attack, the forgewraith gains 5 temporary hit points.',
				damage: '2d10 + 5 fire damage',
				category: 1
			},
			{
				id: 'b34e2510-4c54-4d78-a521-a38ac9f5f664',
				name: 'Forge’s Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Teleportation, Illusion, Psychic',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 11,
					defence: 3
				},
				description: '',
				details: '2d6 + 5 psychic damage, and if the target leaves its space, it takes 2d6 + 5 psychic damage (save ends). While the target remains in its space, all other creatures have concealment against the target. Miss: Half damage. Effect: The forgewraith can teleport to any square in the area of effect.',
				damage: '2d6 + 5 psychic damage',
				category: 1
			},
			{
				id: '755c1be0-ec32-4cea-a6cf-06a1e672ff99',
				name: 'Bloodied Wrath',
				action: {
					action: 0,
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
				details: 'Forge’s wrath recharges, and the forgewraith uses it.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, nonmagical fire, poison',
		tactics: '',

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: '6c45d52e-40ff-4acc-bffc-d917a215da8b',
		name: 'Githyanki Blademaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +9',
		movement: '5 see also telekinetic jump',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'plate armor',
		category: 'Githyanki',
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 15,
		ac: 28,
		fortitude: 25,
		reflex: 23,
		will: 22,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '4b613515-5332-40b9-bee2-8d36776eb44b',
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
				details: '8 psychic damage.',
				damage: '8 psychic damage',
				category: 1
			},
			{
				id: 'e3038122-ddc9-43c9-a4cd-0c68514c8bf3',
				name: 'Twin Longsword Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: 'requires combat advantage against the target',
				range: '',
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: '12 psychic damage.',
				damage: '12 psychic damage',
				category: 1
			},
			{
				id: 'ad956467-f927-40ba-9b7f-3ad6950c1652',
				name: 'Telekinetic Jump',
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
				details: 'The githyanki blademaster flies 5 squares.',
				damage: 'The githyanki blademaster flies 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'a99fe9c7-929d-4467-b8e5-a94e8ab2a5dc',
		name: 'Githyanki Corsair Cutters',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +13',
		movement: '5 see also telekinetic jump',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'leather armor; light shield',
		category: 'Githyanki',
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
			score: 23,
			modifier: 6,
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
			score: 16,
			modifier: 3,
			cost: 9
		},
		hp: 1,
		initiative: 16,
		ac: 31,
		fortitude: 28,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'd8914bcc-04dd-419b-bf56-9e2732d480bf',
				name: 'Silver Longsword',
				action: {
					action: 1,
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
				details: '10 damage.',
				damage: '10 damage',
				category: 1
			},
			{
				id: 'a5b3d20f-b56a-48f4-9a13-1a5cd1fa5880',
				name: 'Telekinetic Jump',
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
				details: 'The githyanki blademaster flies 5 squares.',
				damage: 'The githyanki blademaster flies 5 squares',
				category: 2
			},
			{
				id: 'c261362f-11de-4371-b605-79fdb1fdc1da',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A githyanki corsair cutter deals 3 extra damage on melee attacks against any target that is granting combat advantage to it.',
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

		info: 'Level 17 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'c9cbde43-caea-4751-b428-0187e60c7589',
		name: 'Githyanki Corsair Shipmaster',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 19,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +15',
		movement: '6 see also telekinetic leap',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'Acrobatics +21, Insight +20',
		equipment: 'leather armor; light shield',
		category: 'Githyanki',
		strength: {
			score: 22,
			modifier: 6,
			cost: -1
		},
		constitution: {
			score: 19,
			modifier: 4,
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 179,
		initiative: 18,
		ac: 33,
		fortitude: 31,
		reflex: 32,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '411d0fb8-21e6-447b-a8c8-3988a23d7109',
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
				details: '2d8 + 5 damage plus 1d6 psychic damage, and if the githyanki corsair shipmaster has combat advantage against the target, it can shift 3 squares.',
				damage: '2d8 + 5 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: '41de62da-1117-4afa-9001-39934af90797',
				name: 'Blade Dance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
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
				details: '3d8 + 6 damage plus 1d8 psychic damage, and the target is dazed until the end of the githyanki corsair shipmaster’s next turn. Effect: The shipmaster can shift up to 3 squares before or after making this attack.',
				damage: '3d8 + 6 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '99b93170-0144-4aff-b5c0-2b2e2457d3b3',
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
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'the githyanki corsair shipmaster or an ally within range can fly 5 squares; 10; .',
				damage: 'the githyanki corsair shipmaster or an ally within range can fly 5 squares',
				category: 2
			},
			{
				id: 'd276f13b-d434-431f-80eb-a881bef2629a',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'A githyanki corsair shipmaster deals 1d6 extra damage on melee attacks against any target that is granting combat advantage to it.',
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

		info: 'Level 19 Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '26da5d75-20ee-4024-b565-64837426da54',
		name: 'Githyanki Gish Crusaders',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5 see also astral stride',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'chainmail',
		category: 'Githyanki',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 1,
		initiative: 14,
		ac: 30,
		fortitude: 29,
		reflex: 28,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f0623b72-d67c-4421-bb34-98ccdc0159fb',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '10 psychic damage.',
				damage: '10 psychic damage',
				category: 1
			},
			{
				id: 'af9b9acd-36df-42b3-ad96-f1725d16268f',
				name: 'Astral Bolt',
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
					bonus: 20,
					defence: 2
				},
				description: '',
				details: '10; 10 psychic damage.',
				damage: '10 psychic damage',
				category: 1
			},
			{
				id: '516b53cb-50e4-4e8a-8fdf-9a98ffd07ec6',
				name: 'Astral Stride',
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
				details: 'The githyanki gish crusader teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn.',
				damage: 'The githyanki gish crusader teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6f7d15a8-92a1-41e5-9752-a13ff13c209d',
		name: 'Githyanki Gish Warmasters',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +17',
		movement: '5 see also astral stride',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +20',
		equipment: 'chainmail',
		category: 'Githyanki',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 330,
		initiative: 14,
		ac: 33,
		fortitude: 28,
		reflex: 32,
		will: 30,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1f0f92b7-7342-46d0-9107-2fe8fca2e010',
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
				details: '2d8 + 3 damage plus 1d8 psychic damage.',
				damage: '2d8 + 3 damage plus 1d8 psychic damage',
				category: 1
			},
			{
				id: '9dfee34a-16f0-4442-a5f5-8d14b38d6b0a',
				name: 'Astral Strike',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Radiant',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: '5; 2d8 + 6 radiant damage.',
				damage: '2d8 + 6 radiant damage',
				category: 1
			},
			{
				id: 'f7d90c1f-2175-4ac0-aa63-a4ffb5e5736a',
				name: 'Double Attack',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'The githyanki gish warmaster makes two silver longsword attacks. If it hits two different targets, each target takes an additional 1d8 psychic damage; .',
				damage: 'each target takes an additional 1d8 psychic damage',
				category: 1
			},
			{
				id: '23be70b7-2cbc-48ad-b403-d43dc870bde1',
				name: 'Astral Storm',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Radiant',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 1
				},
				description: '',
				details: 'The githyanki gish warmaster makes four attacks, no more than two of them against a single target:; 5; 3d8 + 6 psychic and radiant damage.',
				damage: '3d8 + 6 psychic and radiant damage',
				category: 1
			},
			{
				id: 'ebed6467-7fdb-4fb4-b688-6244ee8544df',
				name: 'Astral Stride',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: 'Lightning',
				condition: '',
				range: '',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'burst 1 within 10; 4d8 + 6 lightning damage.',
				damage: '4d8 + 6 lightning damage',
				category: 1
			},
			{
				id: '94554fc2-2f8a-4717-b22f-0464e2bf097e',
				name: 'Astral Stride',
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
				details: 'The githyanki gish warmaster teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn.',
				damage: 'The githyanki gish warmaster teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Elite Skirmisher',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '6cce3710-b938-4435-bf1c-12f061d0726a',
		name: 'Githyanki Guardian Shade',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 20,
		role: {
			type: 4,
			flag: 2,
			leader: false
		},
		senses: 'Perception +21; darkvision',
		movement: '8, fly 8',
		alignment: 'Unaligned',
		languages: 'understands Common, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Githyanki',
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 756,
		initiative: 20,
		ac: 34,
		fortitude: 30,
		reflex: 32,
		will: 28,
		regeneration: null,
		auras: [
			{
				id: '9abca227-0e9c-4752-a7e8-ab0760ca9fc8',
				name: 'Guardian Presence',
				keywords: '',
				details: '(Psychic) while the githyanki guardian shade is bloodied, each creature that starts its turn adjacent to it takes 5 psychic damage.'
			}
		],
		powers: [
			{
				id: '16b80de9-a2b7-4e7a-a621-c4c9403134a4',
				name: 'Ghost Sword',
				action: {
					action: 1,
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
				details: '2d10 + 7 damage and the target takes a –2 penalty to all defenses and is slowed (save ends both).',
				damage: '2d10 + 7 damage and the target takes a –2 penalty to all defenses and is slowed (save ends both)',
				category: 1
			},
			{
				id: '002eeb30-3559-401a-9479-2b75b318379a',
				name: 'Spirit Rake',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '(minor',
				range: '',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '5; 1d8 + 5 psychic damage, and the target takes a –2 penalty to all defenses (save ends).',
				damage: '1d8 + 5 psychic damage',
				category: 1
			},
			{
				id: '819d4a94-ffdd-49df-9edf-7ad303e4e765',
				name: 'Bladed Wrath',
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
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'Burst 3; targets enemies; the githyanki guardian shade pulls the target 2 squares, then makes a ghost sword attack against each adjacent enemy. Effect: The githyanki guardian shade teleports up to 8 squares.; .',
				damage: 'Burst 3',
				category: 1
			},
			{
				id: '9f8c5985-cacd-4ca6-83bb-a0aaa2170534',
				name: 'Guardian Fury',
				action: {
					action: 4,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 1
				},
				description: '',
				details: 'Burst 2; 2d8 + 4 force damage and the target is pushed 3 squares.',
				damage: '2d8 + 4 force damage and the target is pushed 3 squares',
				category: 5
			},
			{
				id: 'd5880f7c-a89f-44da-bdb4-c0c5713c15df',
				name: 'Soul Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharge 4 while bloodied'
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'Slowed targets only; 4d10 + 10 radiant damage, and the target gains vulnerable 15 psychic until the end of its next turn.',
				damage: '4d10 + 10 radiant damage',
				category: 1
			},
			{
				id: 'df3532b5-bdf6-432f-a00c-4474aca0778e',
				name: 'Soul Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Psychic',
				condition: '',
				range: '',
				attack: {
					bonus: 23,
					defence: 3
				},
				description: '',
				details: '10; 2d8 + 5 psychic damage, and the target is stunned until the end of the githyanki guardian shade’s next turn. Miss: Half damage, and the target is dazed until the end of the githyanki guardian shade’s next turn.',
				damage: '2d8 + 5 psychic damage',
				category: 1
			},
			{
				id: 'a53f88c9-c507-40b3-b89d-1859c5d61661',
				name: 'Astral Soul',
				action: {
					action: 4,
					trigger: 'when the githyanki guardian shade takes damage',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The githyanki guardian shade becomes insubstantial and gains phasing until the end of its next turn.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 20 Solo Lurker',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: 'e838aa43-7240-4f07-9781-7836c9254323',
		name: 'Githyanki Mindlasher',
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
		senses: 'Perception +20',
		movement: '8 see also telekinetic leap',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'History +11, Insight +12',
		equipment: '',
		category: 'Githyanki',
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
			score: 25,
			modifier: 7,
			cost: -1
		},
		intelligence: {
			score: 20,
			modifier: 5,
			cost: -1
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
		hp: 132,
		initiative: 16,
		ac: 30,
		fortitude: 29,
		reflex: 33,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e9d87753-c181-40fb-9594-e3fdd4a1feed',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: '2d8 + 4 psychic damage.',
				damage: '2d8 + 4 psychic damage',
				category: 1
			},
			{
				id: '87f6af9f-f8be-4642-9e90-f6dec57a76a6',
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
				attack: {
					bonus: 23,
					defence: 0
				},
				description: '',
				details: 'the githyanki mindlasher or an ally within range can fly 5 squares.; 10; .',
				damage: 'the githyanki mindlasher or an ally within range can fly 5 squares',
				category: 2
			},
			{
				id: '44ad5458-d203-4e79-b661-519ecdd651e5',
				name: 'Mind Crush',
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
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'burst 2 within 20; 1d10 damage, and ongoing 5 psychic damage (save ends). Aftereffect: The target gains vulnerable 10 psychic and can make only basic attacks (save ends).',
				damage: '1d10 damage',
				category: 1
			},
			{
				id: '19b2f38c-3f08-4896-8cec-6f77a7d316cf',
				name: 'Psychic Slam',
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
					bonus: 23,
					defence: 3
				},
				description: '',
				details: 'burst 2 within 10; 2d8 psychic damage, and the target is knocked prone.',
				damage: '2d8 psychic damage',
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
		id: '3e4ef4a1-46dd-4f64-b6cc-92b2f14327d5',
		name: 'Githyanki Psychic Archers',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 16,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +11',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'leather armor; longbow',
		category: 'Githyanki',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		wisdom: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 1,
		initiative: 10,
		ac: 28,
		fortitude: 27,
		reflex: 28,
		will: 27,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6af51732-f48d-4693-abc2-a51cab3b0bbd',
				name: 'Silver Dagger',
				action: {
					action: 1,
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
				details: '15/30; 6 damage.',
				damage: '6 damage',
				category: 1
			},
			{
				id: '535ddd34-3b1f-4d1b-917d-ef57305ab6b1',
				name: 'Psychic Shot',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: 'requires longbow',
				range: '',
				attack: {
					bonus: 21,
					defence: 3
				},
				description: '',
				details: '15/30; 8 psychic damage and the target is dazed until the end of its next turn.',
				damage: '8 psychic damage and the target is dazed until the end of its next turn',
				category: 1
			},
			{
				id: '9ae1a72d-03e0-490b-8120-1b57d7818f23',
				name: 'Telekinetic Jump',
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
				details: 'The githyanki psychic archer flies 5 squares',
				damage: 'The githyanki psychic archer flies 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 16 Minion',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: '59aa95cd-76cc-45e2-92b1-0585459ee5b9',
		name: 'Githyanki Reavers',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: '',
		level: 17,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +10',
		movement: '5 see also telekinetic leap',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'plate armor',
		category: 'Githyanki',
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
			score: 21,
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 197,
		initiative: 13,
		ac: 29,
		fortitude: 30,
		reflex: 28,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '5e579d0f-f3aa-4a47-840b-045ad9c08061',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: '2d12 + 4 (crit 2d12 + 28) plus 1d6 psychic damage, plus an extra 3d6 psychic damage if the target is immobilized.',
				damage: '2d12 + 4 (crit 2d12 + 28) plus 1d6 psychic damage',
				category: 1
			},
			{
				id: 'edf06bb1-a986-4ed0-ae01-eccd62020531',
				name: 'Reaving Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Reliable, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 18,
					defence: 1
				},
				description: '',
				details: '3d12 + 4 damage plus 1d6 psychic damage, and the target is immobilized (save ends).',
				damage: '3d12 + 4 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: 'd3ebc99b-ad95-422b-af92-37b7f6130778',
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
				attack: {
					bonus: 18,
					defence: 0
				},
				description: '',
				details: 'the githyanki reaver or an ally within range can fly 5 squares; 10; .',
				damage: 'the githyanki reaver or an ally within range can fly 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 17 Brute',
		phenotype: 'Medium natural humanoid'
	},
	{
		id: 'b67f3756-f4c3-448d-bc32-ed736a5c602b',
		name: 'Githyanki Shade',
		details: '',
		size: 2,
		origin: 1,
		type: 2,
		keywords: 'undead',
		level: 16,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +16; darkvision',
		movement: '8, fly 8',
		alignment: 'Unaligned',
		languages: 'Understands Common, Deep Speech',
		skills: '',
		equipment: '',
		category: 'Githyanki',
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
			score: 24,
			modifier: 7,
			cost: -1
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
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 120,
		initiative: 19,
		ac: 30,
		fortitude: 26,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '35575391-2a95-454e-a70a-0a69a5fd0ee4',
				name: 'Ghost Sword',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: '2d10 + 5 damage.',
				damage: '2d10 + 5 damage',
				category: 1
			},
			{
				id: '46e5c1db-b4e6-482d-a6e4-39466ee088a6',
				name: 'Spirit Rake',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fear, Psychic',
				condition: '(standard',
				range: '',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '5; 2d8 + 7 psychic damage, and the target takes a –2 penalty to all defenses (save ends).',
				damage: '2d8 + 7 psychic damage',
				category: 1
			},
			{
				id: '1741fb1b-17d7-4dae-ad2f-1b0ef6575e5c',
				name: 'Bladed Wrath',
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
					bonus: 21,
					defence: 0
				},
				description: '',
				details: 'Burst 1; 1d10 + 5 damage, and the target takes a –2 penalty to all defenses and is slowed (save ends both).',
				damage: '1d10 + 5 damage',
				category: 1
			},
			{
				id: 'e7f02b3d-a99a-456e-a893-1861457d5808',
				name: 'Soul Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Radiant, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: 'Slowed targets only; 4d10 + 5 radiant damage, and the target gains vulnerable 10 psychic until the end of its next turn.',
				damage: '4d10 + 5 radiant damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 16 Lurker',
		phenotype: 'Medium elemental humanoid (undead)'
	},
	{
		id: 'ba37f6d4-1c09-4a54-b13c-263d2ec3abd0',
		name: 'Githyanki Warmongers',
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
		senses: 'Perception +11',
		movement: '6 see also telekinetic leap',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: '',
		equipment: 'plate armor',
		category: 'Githyanki',
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
			score: 17,
			modifier: 3,
			cost: 12
		},
		charisma: {
			score: 21,
			modifier: 5,
			cost: -1
		},
		hp: 162,
		initiative: 15,
		ac: 33,
		fortitude: 29,
		reflex: 31,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '2004e323-3af9-4032-9cbd-d4d9fe144fb5',
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
					bonus: 24,
					defence: 0
				},
				description: '',
				details: '2d10 damage plus 1d10 psychic damage, plus 3d8 extra psychic damage if the target is immobilized or stunned.',
				damage: '2d10 damage plus 1d10 psychic damage',
				category: 1
			},
			{
				id: '7d7775ae-5220-4c96-abf9-f55186ee19c4',
				name: 'Telekinetic Crush',
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
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'Medium or smaller target; 5; 1d10 damage, and the target is immobilized (save ends).',
				damage: '1d10 damage',
				category: 1
			},
			{
				id: 'cca955fa-62e5-4ed7-b77b-8bcce6489774',
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
				attack: {
					bonus: 22,
					defence: 0
				},
				description: '',
				details: 'the githyanki warrior or an ally within range can fly 5 squares.; .',
				damage: 'the githyanki warrior or an ally within range can fly 5 squares',
				category: 2
			},
			{
				id: 'f78856bc-3ecf-4f0c-9508-f570db926504',
				name: 'Soulsword Burst',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: 'requires silver greatsword',
				range: 'Close burst 1',
				attack: {
					bonus: 22,
					defence: 3
				},
				description: '',
				details: '3d10 damage, and the target takes ongoing 5 psychic damage and is stunned (save ends both).',
				damage: '3d10 damage',
				category: 1
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
		id: '019deae4-dbaa-47e2-af1e-a736fd22d173',
		name: 'Haestus',
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
		senses: 'Perception +9; darkvision',
		movement: 'fly 6 (hover); phasing',
		alignment: 'Evil',
		languages: 'Common, Draconic',
		skills: 'Arcana +13, Intimidate +14, Stealth +10',
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
			score: 10,
			modifier: 0,
			cost: 0
		},
		charisma: {
			score: 20,
			modifier: 5,
			cost: -1
		},
		hp: 123,
		initiative: 5,
		ac: 20,
		fortitude: 19,
		reflex: 20,
		will: 21,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'a0f178a5-53cd-4ad1-b931-0d0bdc511e61',
				name: 'Pain Hammer',
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
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '1d6 + 5 fire and necrotic damage, and the target is pushed 2 squares and knocked prone.',
				damage: '1d6 + 5 fire and necrotic damage',
				category: 1
			},
			{
				id: '57e561f8-67f3-4d6d-829a-a206c28095c7',
				name: 'Soulburn',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Fire, Necrotic',
				condition: '(standard',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 2
				},
				description: '',
				details: '1d6 + 5 fire and necrotic damage, and the target slides 2 squares and takes a -2 penalty to all defenses until the end of Haestus’s next turn.',
				damage: '1d6 + 5 fire and necrotic damage',
				category: 1
			},
			{
				id: 'cd6eca2b-9b7d-4c91-a336-a897fc0b6c14',
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
				details: 'Haestus makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: '22626587-daba-45a3-aa1c-42caf41f2449',
				name: 'Forge Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: '2d10 + 5 fire damage, and ongoing 10 fire damage (save ends), and the target is knocked prone. Each time a target takes ongoing damage from this attack, the forgewraith gains 5 temporary hit points.',
				damage: '2d10 + 5 fire damage',
				category: 1
			},
			{
				id: 'dba20a71-36e1-4f0c-b44e-929108537bed',
				name: 'Forge’s Wrath',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Illusion, Psychic, Teleportation',
				condition: '',
				range: 'Close burst 2',
				attack: {
					bonus: 12,
					defence: 3
				},
				description: '',
				details: '2d6 + 5 psychic damage, and the target believes it is surrounded by fire; if the target leaves its space, it takes 2d6 + 5 psychic damage (save ends). While the target remains in its space, all other targets have concealment against the target. Miss: Half damage. Effect: Haestus can teleport to any square in the area of effect.',
				damage: '2d6 + 5 psychic damage',
				category: 1
			},
			{
				id: 'f8949807-9af9-4e10-9b48-21d242833c17',
				name: 'Bloodied Wrath',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Illusion, Psychic, Teleportation',
				condition: 'when first bloodied',
				range: '',
				attack: null,
				description: '',
				details: 'Forge’s wrath recharges, and Haestus uses it immediately.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 3,
				value: -5
			},
			{
				type: 9,
				value: 5
			}
		],
		resist: 'insubstantial',
		vulnerable: '',
		immune: 'disease, nonmagical fire, poison',
		tactics: '',

		info: 'Level 8 Elite Controller',
		phenotype: 'Medium shadow humanoid (undead)'
	},
	{
		id: 'f226a39a-76c4-46f1-bc84-6830fd82b027',
		name: 'Incomplete Forge Drake',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct',
		level: 7,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +4',
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
		ac: 22,
		fortitude: 18,
		reflex: 17,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '76cba3ee-ffbf-4977-be94-96357e6e762d',
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
				details: '5 damage, and the incomplete forge drake can shift 1 square.',
				damage: '5 damage',
				category: 1
			},
			{
				id: 'd8bea6bb-a79a-4211-ab8c-9f44c740e730',
				name: 'Guarding Flash',
				action: {
					action: 5,
					trigger: 'when an ally within 5 squares is the target of an attack that could instead target the incomplete forge drake',
					sustainAction: 0,
					use: 0,
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
				details: 'Targets the creature making the attack; the target must instead make its attack against the incomplete forge drake or include the forge drake in the area of the attack.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Minion',
		phenotype: 'Medium natural animate (construct)'
	},
	{
		id: 'afa7065f-3c11-444c-aed7-ef1f99821e12',
		name: 'Infiltrator Warforged Prototype',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'living construct',
		level: 7,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +3',
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
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 80,
		initiative: 9,
		ac: 19,
		fortitude: 19,
		reflex: 20,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '0a8f5f41-4414-414c-aea6-f7bd5562b967',
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
				details: '1d8 + 4 damage, and the infiltrator warforged prototype shifts 1 square.',
				damage: '1d8 + 4 damage',
				category: 1
			},
			{
				id: 'a1bc566c-b1cf-4e7c-b713-df05d1b8b97d',
				name: 'Infiltrator Feint',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges after the infiltrator warforged prototype hits with impersonator’s strike'
				},
				keywords: '',
				condition: '',
				range: '',
				attack: {
					bonus: 10,
					defence: 2
				},
				description: '',
				details: 'the infiltrator prototype gains combat advantage against the target.',
				damage: '',
				category: 3
			},
			{
				id: 'f73bac12-e115-432e-8022-eb81a90248fa',
				name: 'Impersonatror’s Strike',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Fear',
				condition: '',
				range: '',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'The infiltrator warforged prototype mimics the target or one of the target’s allies in some way; 2d8 + 4 damage, and the target takes a -2 penalty to attack rolls until the end of infiltrator warforged prototype’s next turn.',
				damage: '2d8 + 4 damage',
				category: 1
			},
			{
				id: '252fb3cc-4949-4d04-b12f-2e2402db1e0b',
				name: 'Arcane Empowerment',
				action: null,
				keywords: '',
				condition: '',
				range: 'While the arcane generator functions, whenever a infiltrator warforged prototype hits with a melee attack, it gains 3 temporary hit points.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			},
			{
				id: 'bf14eb82-8e23-4f4d-abe6-69f48565c052',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'An infiltrator warforged prototype deals 1d8 extra damage on melee attacks against any target granting combat advantage to it.',
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

		info: 'Level 7 Skirmisher',
		phenotype: 'Medium natural humanoid (living construct)'
	},
	{
		id: 'f7e2a011-c63c-4ccb-aeb5-e118e15ea8f1',
		name: 'Jelia',
		details: '',
		size: 2,
		origin: 2,
		type: 2,
		keywords: 'eladrin',
		level: 8,
		role: {
			type: 3,
			flag: 1,
			leader: true
		},
		senses: 'Perception +6; low-light vision',
		movement: '6 see also construct space and fey step',
		alignment: 'Unaligned',
		languages: 'Common, Elven, Goblin',
		skills: 'Arcana +16, History +16, Thievery +12',
		equipment: 'implement, rod; leather armor; longsword',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 176,
		initiative: 6,
		ac: 22,
		fortitude: 19,
		reflex: 21,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '3f6f0c51-b4a1-4682-aad0-1cb02e264e78',
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
				details: '1d8 + 5 damage, and the next among Jelia and her allies to hit the target gains a +3 bonus to the damage roll.',
				damage: '1d8 + 5 damage',
				category: 1
			},
			{
				id: 'b616dfcf-1e2d-444f-a8f8-98ebc26e9b2d',
				name: 'Eldritch Discharge',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Force',
				condition: '(standard',
				range: 'Close burst 10',
				attack: {
					bonus: 12,
					defence: 1
				},
				description: '',
				details: 'Jelia or one ally (primary target) gains a +1 bonus to AC until the end of Jelia’s next turn. An enemy adjacent to the primary target is attacked; 1d8 + 5 force damage, and the enemy is pushed 1 square away from the primary target.',
				damage: '1d8 + 5 force damage',
				category: 1
			},
			{
				id: '4f2845fd-dd14-4f9a-af19-ddcf542151b0',
				name: 'Artificer’s Expertise',
				action: {
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
				details: 'Jelia makes two basic attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a632d5f2-3de0-43e7-8019-ddb28b99672a',
				name: 'Resistive Formula',
				action: {
					action: 3,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Arcane, Healing',
				condition: '',
				range: 'Close burst 5',
				attack: {
					bonus: 11,
					defence: 1
				},
				description: '',
				details: 'allies in the burst gain +1 to AC and can end this bonus as a free action to gain 10 temporary hit points.; .',
				damage: 'allies in the burst gain +1 to AC and can end this bonus as a free action to gain 10 temporary hit points',
				category: 3
			},
			{
				id: 'a4cb2287-f07f-4352-8c26-bb0ba4a909d7',
				name: 'Staggering Motes',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Force',
				condition: '',
				range: 'Close blast 5',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: 'targets enemies; 2d10 + 5 force damage, and the target slides 2 squares. It also slides 2 squares each time an attack hits it (save ends).',
				damage: '2d10 + 5 force damage',
				category: 1
			},
			{
				id: '157fd259-0e5f-4821-b9d0-8a514541bea7',
				name: 'Construct Space',
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
				details: 'Jelia switches spaces with a construct or living construct within 5 squares. That creature becomes the attack’s target.',
				damage: 'Jelia switches spaces with a construct or living construct within 5 squares',
				category: 5
			},
			{
				id: '9fa4e2e5-b30d-4582-b386-55ebd9d6cba1',
				name: 'Fey Step',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Jelia teleports 5 squares',
				damage: 'Jelia teleports 5 squares',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Controller (L)',
		phenotype: 'Medium fey humanoid (eladrin)'
	},
	{
		id: '87b04119-14b8-40e1-86e2-03478ec19108',
		name: 'Jelia’s Iron Cobra',
		details: '',
		size: 2,
		origin: 4,
		type: 0,
		keywords: 'construct, homunculus',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '7 see also slithering shift',
		alignment: 'Unaligned',
		languages: '',
		skills: 'Stealth +10',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 5,
			modifier: -3,
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
		hp: 75,
		initiative: 7,
		ac: 20,
		fortitude: 20,
		reflex: 18,
		will: 17,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'e00cda04-e302-4d55-938c-91cae4b792af',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '1d8 + 3 damage, and ongoing 5 poison damage (save ends).',
				damage: '1d8 + 3 damage',
				category: 1
			},
			{
				id: '2939f504-7527-4cc1-8122-fb4cc4296e01',
				name: 'Poison the Mind',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 10',
				attack: {
					bonus: 8,
					defence: 3
				},
				description: '',
				details: 'affects only creatures taking ongoing poison damage; affects only creatures taking ongoing poison damage; (the target is dazed and slowed (save ends both); see also guard creature).',
				damage: 'affects only creatures taking ongoing poison damage',
				category: 1
			},
			{
				id: '86288123-f993-443f-96b0-0b6643519803',
				name: 'Guard Creature',
				action: null,
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Jelia’s iron cobra can use its poison the mind power against any creature that has attacked Jelia since the end of the iron cobra’s last turn, even if the power hasn’t recharged and even if the target isn’t taking ongoing poison damage.',
				damage: 'even if the power hasn’t recharged and even if the target isn’t taking ongoing poison damage',
				category: 0
			},
			{
				id: 'b6e821eb-1f67-4295-baf4-d9cc370c8b21',
				name: 'Slithering Shift',
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
				details: 'The iron cobra shifts 3 squares as a move action.',
				damage: 'The iron cobra shifts 3 squares as a move action',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Medium natural animate (construct, homunculus)'
	},
	{
		id: 'a85bbf3c-2ff7-401b-aee3-1c390a2f83c3',
		name: 'Marauder Planestalkers',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 17,
		role: {
			type: 4,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; low-light vision',
		movement: '7, teleport 5 see also planar evasion, planephase form',
		alignment: 'Unaligned',
		languages: 'Deep Speech',
		skills: 'Bluff +14, Insight +18, Stealth +20',
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
		hp: 129,
		initiative: 19,
		ac: 31,
		fortitude: 28,
		reflex: 29,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'dd5497e3-c320-4db4-9527-3f5a469545e9',
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
				details: 'Reach 2; 3d6 + 6 damage.',
				damage: '3d6 + 6 damage',
				category: 1
			},
			{
				id: 'c67eac7e-1d1c-4714-a716-188c36b327df',
				name: 'Body Snatch',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: 'usable only in planephase form',
				range: '',
				attack: {
					bonus: 21,
					defence: 1
				},
				description: '',
				details: '4d6 + 6 damage, and both the target and the marauder planestalker are teleported to an extradimensional space that completely encloses both creatures. The space is 2 squares high and 4 squares wide on each side. Other creatures do not have line of effect or line of sight to the target or the planestalker, and the target and planestalker do not have line of sight or line of effect to other creatures. If the planestalker takes 25 damage, if it is killed, or if the target is killed, the target and the planestalker return to the spaces they occupied before being teleported, or to the nearest available spaces.',
				damage: '4d6 + 6 damage',
				category: 1
			},
			{
				id: '14d3195a-911d-4dbe-8194-d4b5bcf1b2bd',
				name: 'Dimensional Disjunction',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '2d6 + 3 damage, and the target takes 10 extra damage from melee attacks (save ends).',
				attack: {
					bonus: 19,
					defence: 3
				},
				description: '',
				details: '',
				damage: '',
				category: 1
			},
			{
				id: 'b59520e6-9236-426e-b0ac-51ad40623fbe',
				name: 'Planar Evasion',
				action: {
					action: 4,
					trigger: 'when the marauder planestalker is hit by a melee attack',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Teleportation',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marauder planestalker teleports 3 squares.',
				damage: 'The marauder planestalker teleports 3 squares',
				category: 5
			},
			{
				id: '5cfd4834-f51f-4156-a694-6bcf3dfc6b47',
				name: 'Planephase Form',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 3,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The marauder planestalker partially phases into another plane, gaining the insubstantial and phasing qualities until the end of its next turn or until it attacks. Sustain Minor: The effect persists.',
				damage: '',
				category: 1
			}
		],
		damageModifiers: [],
		resist: 'see planephase form',
		vulnerable: 'psychic, a marauder planestalker that takes psychic damage immediately ends planephase form.',
		immune: '',
		tactics: '',

		info: 'Level 17 Lurker',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'df3023d0-079e-42ae-bc6d-d56dd6894481',
		name: 'Tomb Mote Swarms',
		details: '',
		size: 2,
		origin: 4,
		type: 1,
		keywords: 'swarm, undead',
		level: 7,
		role: {
			type: 2,
			flag: 0,
			leader: false
		},
		senses: 'Perception +9; darkvision',
		movement: '6',
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
		hp: 87,
		initiative: 8,
		ac: 14,
		fortitude: 14,
		reflex: 15,
		will: 10,
		regeneration: null,
		auras: [
			{
				id: '0cbd3400-c8e3-4b82-9517-2b94aff8cf20',
				name: 'Swarm Attack',
				keywords: '',
				details: '(Necrotic) aura 1; each enemy that starts its turn within the aura takes 5 necrotic damage plus 3 extra necrotic damage per tomb mote swarm adjacent to the enemy.'
			}
		],
		powers: [
			{
				id: 'e946c64c-2861-418e-aee9-359a857e46c2',
				name: 'Swarm of Bones',
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
					defence: 2
				},
				description: '',
				details: '1d6 + 1 necrotic damage, and ongoing 5 necrotic damage (save ends). A creature already taking ongoing 5 necrotic damage instead takes ongoing 10 necrotic damage (save ends).',
				damage: '1d6 + 1 necrotic damage',
				category: 1
			}
		],
		damageModifiers: [
			{
				type: 6,
				value: -10
			}
		],
		resist: 'half damage from melee and ranged attacks',
		vulnerable: '10 against close and area attacks',
		immune: 'disease, poison',
		tactics: '',

		info: 'Level 7 Brute',
		phenotype: 'Medium natural beast (swarm, undead)'
	},
	{
		id: '9b72b9c7-76d9-48c4-a082-dc6fb78d9c8f',
		name: 'Valsath',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'hobgoblin',
		level: 8,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +8; low-light vision',
		movement: '6 see also Dhakaani footwork',
		alignment: 'Evil',
		languages: 'Common, Goblin',
		skills: 'Athletics +14, History +12, Intimidate +10',
		equipment: 'light shield; plate armor; scimitar',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		charisma: {
			score: 12,
			modifier: 1,
			cost: 2
		},
		hp: 178,
		initiative: 9,
		ac: 23,
		fortitude: 21,
		reflex: 19,
		will: 20,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '247d13c3-49f9-4111-b9d9-58e3178d51cb',
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
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8 + 7 damage (crit 1d8 + 15), the target is marked until the end of Valsath’s next turn.',
				damage: '1d8 + 7 damage (crit 1d8 + 15)',
				category: 1
			},
			{
				id: '5fc58205-65bb-4c1c-93bd-b17a875a189b',
				name: 'Scimitar Rend',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Weapon',
				condition: 'requires a scimitar',
				range: '',
				attack: {
					bonus: 12,
					defence: 0
				},
				description: '',
				details: '1d8 + 7 damage (crit 2d8 + 22), and ongoing 10 damage and the target takes –2 to AC (save ends both).',
				damage: '1d8 + 7 damage (crit 2d8 + 22)',
				category: 1
			},
			{
				id: '6c451750-71a9-439c-a601-b6db9a926004',
				name: 'Bladebearer Riposte',
				action: {
					action: 4,
					trigger: 'when hit or missed by a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: '',
				range: 'Valsath shifts 1 square and makes a melee basic attack against the triggering target. See also bloodblade dance.',
				attack: {
					bonus: 11,
					defence: 0
				},
				description: '',
				details: '.',
				damage: '',
				category: 5
			},
			{
				id: '0d510304-89d9-4496-b192-a0730b4ce769',
				name: 'Bladebearer Finesse',
				action: {
					action: 7,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: 'usable only while charging',
				range: '',
				attack: null,
				description: '',
				details: 'Valsath doesn’t provoke opportunity attacks when leaving the initial square of her charge.',
				damage: '',
				category: 4
			},
			{
				id: '7f51c8ba-a196-432c-b318-13cd988461cc',
				name: 'Bloodblade Dance',
				action: null,
				keywords: '',
				condition: '(while bloodied)',
				range: '',
				attack: null,
				description: '',
				details: 'The use of Bladebearer riposte becomes a free action 2/round.',
				damage: '',
				category: 0
			},
			{
				id: '81ac91cd-8ca7-47dc-9952-a58df25cef0a',
				name: 'Dhakaani Footwork',
				action: {
					action: 7,
					trigger: 'when valsath hits with a melee attack',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Valsath shifts 1 square.',
				damage: 'Valsath shifts 1 square',
				category: 5
			},
			{
				id: 'b10e69de-b772-4202-84ef-c162d4253fad',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when valsath becomes subject to an effect',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'Valsath rolls a saving throw against the effect.',
				damage: '',
				category: 5
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 8 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (hobgoblin)'
	},
	{
		id: '1a0bf4f6-222a-4c0c-946b-1b82563e2731',
		name: 'Valsath’s Warriors',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'hobgoblin',
		level: 7,
		role: {
			type: 9,
			flag: 3,
			leader: false
		},
		senses: 'Perception +5; low-light vision',
		movement: '6',
		alignment: 'evil',
		languages: 'goblin, common',
		skills: 'Athletics +9, History +5',
		equipment: 'arrow; light shield; longbow; longsword; scale armor',
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
		hp: 1,
		initiative: 8,
		ac: 23,
		fortitude: 20,
		reflex: 19,
		will: 18,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '31f3e2cf-1d65-45ae-9d17-78afeb239eb8',
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
				details: '5 damage, and the target is marked until the end of the hobgoblin’s next turn.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '77ab7e8c-c492-4a74-b560-bebacfaca271',
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
					bonus: 11,
					defence: 0
				},
				description: '',
				details: 'Range 20; 5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '7ed5d908-9eb1-4cf3-ade5-29f66bd0a19b',
				name: 'Hobgoblin Resilience',
				action: {
					action: 4,
					trigger: 'when the hobgoblin becomes subject to an effect',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: '',
				condition: '',
				range: '',
				attack: null,
				description: '',
				details: 'The Valsath’s Warrior makes a saving throw against the triggering effect.',
				damage: '',
				category: 5
			},
			{
				id: '6fe201ca-abdd-4f63-bba3-de1c8b2f083a',
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
				details: 'The Valsath’s Warrior gains a 2 bonus to AC while at least one Valsath’s Warrior ally is adjacent to it.',
				damage: 'The Valsath’s Warrior gains a 2 bonus to AC while at least one Valsath’s Warrior ally is adjacent to it',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 7 Minion',
		phenotype: 'Medium natural humanoid (hobgoblin)'
	},
	{
		id: 'be61f7ad-9689-478e-9633-99ec18e51aeb',
		name: 'Whirling Blades Automatons',
		details: '',
		size: 1,
		origin: 4,
		type: 0,
		keywords: 'blind, construct',
		level: 6,
		role: {
			type: 6,
			flag: 0,
			leader: false
		},
		senses: 'Perception +1; blindsight 10',
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
			score: 10,
			modifier: 0,
			cost: 0
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
			score: 6,
			modifier: -2,
			cost: 0
		},
		charisma: {
			score: 2,
			modifier: -4,
			cost: 0
		},
		hp: 66,
		initiative: 9,
		ac: 20,
		fortitude: 18,
		reflex: 20,
		will: 16,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'f7702704-9e7e-4b5c-be2b-3f45cddb3f02',
				name: 'Whirling Blades',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: '',
				condition: '(standard',
				range: 'Close burst 1',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d6 + 4 damage, and the automaton can shift 1 square for each target it hits up to 3 squares.',
				damage: '1d6 + 4 damage',
				category: 1
			},
			{
				id: '7b8396d8-6aac-4641-b784-84a263512097',
				name: 'Remove Mark',
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
				attack: {
					bonus: 9,
					defence: 3
				},
				description: '',
				details: 'the target’s mark is removed from the whirling blade automaton.',
				damage: '',
				category: 3
			},
			{
				id: '98ec66d8-49e4-4b89-9aa5-cde7026a3ffd',
				name: 'Bladed Destruction',
				action: null,
				keywords: '',
				condition: 'when the automaton drops to 0 hit points',
				range: 'The whirling blade automaton explodes, launching blades in all directions. Close burst 5',
				attack: {
					bonus: 10,
					defence: 0
				},
				description: '',
				details: '1d10 + 2 damage.',
				damage: '1d10 + 2 damage',
				category: 0
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'disease, knocked prone, poison',
		tactics: '',

		info: 'Level 6 Skirmisher',
		phenotype: 'Small natural animate (blind, construct)'
	},
	{
		id: '9c2d05c5-0435-4739-9cd5-119f1f69de90',
		name: '“Mother” Bone Naga',
		details: '',
		size: 3,
		origin: 3,
		type: 1,
		keywords: 'undead',
		level: 16,
		role: {
			type: 3,
			flag: 1,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7',
		alignment: 'Unaligned',
		languages: 'Draconic, Supernal',
		skills: 'Arcana +18, History +18, Insight +18, Religion +18',
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
			score: 26,
			modifier: 8,
			cost: -1
		},
		hp: 328,
		initiative: 11,
		ac: 32,
		fortitude: 32,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: '784de170-9585-4b7e-b546-dfd156b12c17',
				name: 'Death Rattle',
				keywords: '',
				details: '(Necrotic) aura 2; enemies that start their turn in the aura are dazed.'
			}
		],
		powers: [
			{
				id: '895a3846-4826-46eb-9578-bb75261f0733',
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
					bonus: 20,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 2d4 + 6 damage, and ongoing 5 necrotic damage (save ends). Aftereffect: The target is weakened (save ends).',
				damage: '2d4 + 6 damage',
				category: 1
			},
			{
				id: '0bdba862-9206-4a9a-810d-6a91b09d5ed0',
				name: 'Death Sway',
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
					bonus: 21,
					defence: 3
				},
				description: '',
				details: 'blind creatures are immune; the target is dazed (save ends). If the target is already dazed, it takes 2d6 + 6 necrotic damage instead.',
				damage: 'it takes 2d6 + 6 necrotic damage instead',
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

		info: 'Level 16 Elite Controller',
		phenotype: 'Large immortal beast (undead)'
	},
	{
		id: 'db045e0e-926f-4f89-b1fd-58926252a82b',
		name: 'Angel of Tiamat',
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
		alignment: 'Evil',
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
		ac: 49,
		fortitude: 47,
		reflex: 43,
		will: 42,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '9b5de4a5-f923-45c7-afc9-3774362285ce',
				name: 'Greatsword',
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
					bonus: 31,
					defence: 0
				},
				description: '',
				details: '18 fire damage.',
				damage: '18 fire damage',
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
		id: '3111aa31-f4c7-4b82-a06b-e4be02ba00a9',
		name: 'Angel of Tiamat’s Vengeance',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'angel',
		level: 19,
		role: {
			type: 2,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16',
		movement: '8, fly 12 (hover); see also sign of vengeance',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Insight +21, Intimidate +22',
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
			score: 18,
			modifier: 4,
			cost: 16
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
		hp: 446,
		initiative: 13,
		ac: 34,
		fortitude: 33,
		reflex: 29,
		will: 33,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '1295919c-8eb1-4234-a2b7-5c60ecc0a56d',
				name: 'Longsword',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire, Lightning, Poison, Weapon',
				condition: '',
				range: '',
				attack: {
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d10 + 9 damage plus 1d8 acid, cold, fire, lightning, or poison damage plus 1d8 acid, cold, fire, lightning, or poison damage.',
				damage: '1d10 + 9 damage plus 1d8 acid',
				category: 1
			},
			{
				id: '243a1def-16ac-4733-a49d-584471f938d5',
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
				details: 'The angel of vengeance makes two longsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: '241ccf87-b196-4822-8fb3-4120c5c23f27',
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
				details: 'the angel of vengeance places an invisible sign upon the target. Until the end of the encounter, as a move action, the angel can teleport adjacent to the target.',
				damage: '',
				category: 3
			},
			{
				id: 'e8ea0c59-e1b1-42e1-88a6-09bb82a92d8e',
				name: 'Chromatic Pillar',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Acid, Cold, Fire Lightning, Poison, Polymorph',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'The angel transforms into a 30-foot-high pillar of draconic energies; 1d8 + 9 acid, cold, fire, lightning, or poison damage plus 1d8 + 9 acid, cold, fire, lightning, or poison damage. The angel of Tiamat’s vengeance is immune to all damage until the start of its next turn.',
				damage: 'or poison damage plus 1d8 + 9 acid',
				category: 1
			},
			{
				id: 'cdfa0160-9511-4ce1-a962-66c72dce7692',
				name: 'Chromatic Cloak',
				action: null,
				keywords: 'Acid, Cold, Fire, Lightning, Poison',
				condition: 'until bloodied',
				range: 'Attacks against the angel of vengeance take a −2 penalty until the angel is bloodied. While cloak of vengeance is in effect, a creature that makes a successful melee attack against the angel takes 1d8 acid or cold damage and 1d8 fire, lightning, or poison damage.',
				attack: null,
				description: '',
				details: '',
				damage: '',
				category: 0
			}
		],
		damageModifiers: [
			{
				type: 9,
				value: -15
			}
		],
		resist: '15 variable (3/ encounter, acid, cold, fire, lightning, or poison only, see “Resist”, Monster Manual, page 282), see also Chromatic Pillar',
		vulnerable: '',
		immune: 'disease, fear',
		tactics: '',

		info: 'Level 19 Elite Brute',
		phenotype: 'Large immortal humanoid (angel)'
	},
	{
		id: 'df7638a1-24cc-4eda-b092-9729db39b9da',
		name: 'Barbed Devil Veteran',
		details: '',
		size: 3,
		origin: 3,
		type: 2,
		keywords: 'devil',
		level: 20,
		role: {
			type: 7,
			flag: 0,
			leader: false
		},
		senses: 'Perception +13; darkvision',
		movement: '7, teleport 7',
		alignment: 'Evil',
		languages: 'Supernal',
		skills: 'Athletics +23, Intimidate +21',
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
			score: 22,
			modifier: 6,
			cost: -1
		},
		hp: 191,
		initiative: 18,
		ac: 37,
		fortitude: 33,
		reflex: 31,
		will: 31,
		regeneration: null,
		auras: [
			{
				id: '99eaab60-f7aa-4e8e-8ee7-95af1ba5d941',
				name: 'Grasping Barbs',
				keywords: '',
				details: 'aura 1; an enemy that enters or leaves the aura takes 5 damage and is marked until the end of its next turn.'
			}
		],
		powers: [
			{
				id: 'cb60dca1-15cc-4ad2-af0e-33bec0ac3f9b',
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
					bonus: 27,
					defence: 0
				},
				description: '',
				details: '1d8 + 8 damage, and the target is pushed 1 square.',
				damage: '1d8 + 8 damage',
				category: 1
			},
			{
				id: 'e04d6da0-dd1a-401d-8035-4d9ed726bf3e',
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
					bonus: 24,
					defence: 2
				},
				description: '',
				details: '5 damage.',
				damage: '5 damage',
				category: 1
			},
			{
				id: '3e87aa2b-38db-4ec4-8591-83907fbfd326',
				name: 'Hurl Flame',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 5-6'
				},
				keywords: 'Fire',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 22,
					defence: 2
				},
				description: '',
				details: '1d10 + 8 fire damage, and the target takes ongoing 5 fire damage and is dazed (save ends both).',
				damage: '1d10 + 8 fire damage',
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

		info: 'Level 20 Soldier',
		phenotype: 'Large immortal humanoid (devil)'
	},
	{
		id: '7feb0a77-68fc-4054-8eba-6bd74c3b6ff3',
		name: 'Chosen Gish’sarath',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'githyanki',
		level: 18,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +16',
		movement: '5 see also astral stride',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +19, History +16, Insight +16',
		equipment: 'chainmail',
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
			score: 15,
			modifier: 2,
			cost: 7
		},
		intelligence: {
			score: 21,
			modifier: 5,
			cost: -1
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
		hp: 342,
		initiative: 13,
		ac: 32,
		fortitude: 29,
		reflex: 30,
		will: 31,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '6a63a109-d517-4c10-96c0-4bb9e83fa4a3',
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
				details: '1d8 + 7 damage, plus 1d8 psychic damage.',
				damage: '1d8 + 7 damage',
				category: 1
			},
			{
				id: 'f26015f1-5757-4f54-9132-fa057ab7e51c',
				name: 'Double Attack',
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
				attack: null,
				description: '',
				details: 'The gish’sarath makes two silver longsword attacks.',
				damage: '',
				category: 1
			},
			{
				id: 'a02eaced-ee4e-4bd7-8a38-d44a194435f2',
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
					bonus: 21,
					defence: 2
				},
				description: '',
				details: '3d6 + 5 force damage and the gish’sarath pushes the target 1 square.',
				damage: '3d6 + 5 force damage and the gish’sarath pushes the target 1 square',
				category: 1
			},
			{
				id: '55ffb5c2-4c03-433d-83ac-2f9187cbbde2',
				name: 'Storm of Stars',
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
				details: 'The gish’sarath makes four attacks, no more than two of',
				damage: '',
				category: 1
			},
			{
				id: '2ac0aa27-339e-4cb2-87ff-37bbe857c35b',
				name: 'Astral Stride',
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
				details: 'The chosen gith’sarath teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn.',
				damage: 'The chosen gith’sarath teleports 6 squares and gains the insubstantial and phasing qualities until the start of its next turn',
				category: 2
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: '',
		tactics: '',

		info: 'Level 18 Elite Skirmisher',
		phenotype: 'Medium natural humanoid (githyanki)'
	},
	{
		id: '9cea29c2-5a7e-4f2d-8f2f-b094aa9064c6',
		name: 'Elite Githyanki Dragonknight',
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
		senses: 'Perception +16',
		movement: '5',
		alignment: 'Evil',
		languages: 'Common, Deep Speech',
		skills: 'History +11, Insight +16',
		equipment: 'heavy shield; plate armor',
		category: 'Githyanki',
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
			score: 18,
			modifier: 4,
			cost: 16
		},
		hp: 165,
		initiative: 15,
		ac: 33,
		fortitude: 31,
		reflex: 26,
		will: 28,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: 'b07bd1b2-90b5-4fe9-b388-130d79e257f4',
				name: 'Silver Bastard Sword',
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
				details: '1d10+7 damage plus 1d6 psychic damage, plus 3d6 extra psychic damage against an immobilized target.',
				damage: '1d10+7 damage plus 1d6 psychic damage',
				category: 1
			},
			{
				id: '58aade9e-57f0-4648-aa78-1ea90fce9500',
				name: 'Lance',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 2,
					recharge: ''
				},
				keywords: 'Weapon',
				condition: 'must be mounted',
				range: '',
				attack: {
					bonus: 24,
					defence: 0
				},
				description: '',
				details: 'Reach 2; 1d8 + 9 damage (2d8 + 9 damage when charging).',
				damage: '1d8 + 9 damage (2d8 + 9 damage when charging)',
				category: 1
			},
			{
				id: '00f21d35-eb8c-4b2f-9e6a-d14bad4a503b',
				name: 'Impaling Charge',
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
					bonus: 25,
					defence: 0
				},
				description: '',
				details: 'Requires lance and mount; the githyanki dragonknight makes a charge attack; reach 2; 3d8 + 7 damage, and the target is immobilized (save ends). Effect: The githyanki dragonknight cannot make lance attacks until the end of the encounter.',
				damage: '3d8 + 7 damage',
				category: 1
			},
			{
				id: '7a0ea0e8-0877-4239-9044-700d1e051101',
				name: 'Telekinetic Fist',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 6'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 22,
					defence: 1
				},
				description: '',
				details: 'Medium or small target; 1d6 + 7 damage, and the target slides 2 squares and is immobilized (save ends).',
				damage: '1d6 + 7 damage',
				category: 1
			},
			{
				id: 'c0b76281-5dba-4f45-8993-4d6077a4e1c7',
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
				details: 'the githyanki dragonknight or an ally within range can fly 5 squares.',
				damage: 'the githyanki dragonknight or an ally within range can fly 5 squares',
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
		id: 'ca789542-0184-40ae-bcfe-49cb4dd98196',
		name: 'Emperor Zetch’r’r',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'githyanki',
		level: 23,
		role: {
			type: 7,
			flag: 1,
			leader: true
		},
		senses: 'Perception +18',
		movement: '6',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Diplomacy +23, History +18, Insight +18, Intimidate +23',
		equipment: 'plate armor',
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
			score: 15,
			modifier: 2,
			cost: 7
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 428,
		initiative: 15,
		ac: 39,
		fortitude: 36,
		reflex: 32,
		will: 36,
		regeneration: null,
		auras: [
			{
				id: '012aa2ab-a68b-469e-927b-c26b6d154455',
				name: 'Despair',
				keywords: '',
				details: '(Fear) aura 1; any enemy within the aura takes a −2 penalty to all defenses and saving throws.'
			}
		],
		powers: [
			{
				id: '0008dd31-4cff-427b-acf9-a5f0d8887935',
				name: 'Silver Sword',
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
					bonus: 30,
					defence: 0
				},
				description: '',
				details: '2d6 + 6 damage plus 2d6 psychic damage, and the target is marked until the end of Zetch’r’r’s next turn. Against an immobilized target, this attack deals 4d6 extra damage and slides the target 2 squares.',
				damage: '2d6 + 6 damage plus 2d6 psychic damage',
				category: 1
			},
			{
				id: '87ba2c76-7837-4d21-9421-69e353a4613a',
				name: 'Double Attack',
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
				attack: null,
				description: '',
				details: 'Zetch’r’r makes a silver sword attack against two different targets.',
				damage: '',
				category: 1
			},
			{
				id: '05952af7-213c-4769-978f-26a2edc88196',
				name: 'Parrying Maneuver',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Psychic, Weapon',
				condition: 'requires silver sword',
				range: '',
				attack: null,
				description: '',
				details: 'Zetch’r’r makes a silver sword attack; on a hit, the target also grants combat advantage to Zetch’r’r until the end of his next turn.',
				damage: '',
				category: 1
			},
			{
				id: '35a9b18b-5067-4f3a-9d42-ca24ee6311bd',
				name: 'Folded Space',
				action: {
					action: 2,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Teleportation',
				condition: '',
				range: 'Ranged 5',
				attack: null,
				description: '',
				details: 'no attack roll; Zetch’r’r and the target swap spaces.',
				damage: '',
				category: 2
			},
			{
				id: '13b91fa3-1b29-4047-bc18-8d0ff7cb7d11',
				name: 'Telekinetic Vise',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: 'recharges when first bloodied'
				},
				keywords: '',
				condition: '',
				range: 'Ranged 5',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: '2d10 + 8 damage, and the target is immobilized (save ends).',
				damage: '2d10 + 8 damage',
				category: 1
			},
			{
				id: '80e18649-d46b-42de-8057-4f89ce359eff',
				name: 'Telekinetic Thrust',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: '',
				condition: '',
				range: 'Close burst 1',
				attack: {
					bonus: 28,
					defence: 1
				},
				description: '',
				details: 'targets enemies; the target is pushed 1 square and is immobilized (save ends). Miss: The target is pushed 1 square.',
				damage: 'the target is pushed 1 square and is immobilized (save ends)',
				category: 1
			},
			{
				id: '34a26c0b-b1c9-43cc-98df-b29031714967',
				name: 'Combat Advantage',
				action: null,
				keywords: '',
				condition: '',
				range: 'Emperor Zetch’r’r’s melee attacks deal 4d6 extra damage against any target granting combat advantage to him.',
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

		info: 'Level 23 Elite Soldier (L)',
		phenotype: 'Medium natural humanoid (githyanki)'
	},
	{
		id: 'e16cdef5-abbe-4765-bc6d-c3473ccbe2cb',
		name: 'Ghorfal the Voracious Neogi Great Old Master',
		details: '',
		size: 3,
		origin: 0,
		type: 1,
		keywords: '',
		level: 16,
		role: {
			type: 3,
			flag: 0,
			leader: false
		},
		senses: 'Perception +8; darkvision',
		movement: '6, climb 4 (spider climb)',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, telepathy 12',
		skills: 'Bluff +20, Diplomacy +20, Insight +18, Intimidate +20',
		equipment: '',
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
			score: 24,
			modifier: 7,
			cost: -1
		},
		hp: 157,
		initiative: 9,
		ac: 30,
		fortitude: 27,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [
			{
				id: 'a6b432eb-bae8-4f68-a366-53261a93f1db',
				name: 'Thrall Field',
				keywords: '',
				details: 'aura 1; each enemy within the aura takes a –4 penalty to saving throws.'
			}
		],
		powers: [
			{
				id: '47583f09-133e-44a4-89dd-b57876ca8909',
				name: 'Scythe Claw',
				action: {
					action: 1,
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
				details: 'Reach 3; 2d8 + 7 damage, and the target is knocked prone.',
				damage: '2d8 + 7 damage',
				category: 1
			},
			{
				id: '7b9ffb15-57de-4078-859c-8546e9cd5ccc',
				name: 'Enslaving Bolt',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 1,
					recharge: ''
				},
				keywords: 'Charm, Psychic',
				condition: '',
				range: 'Ranged 12',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '2d6 + 7 psychic damage, and the target is slowed (save ends). First Failed Saving Throw: The target takes a –2 penalty to attack rolls on attacks that include the neogi great old master as a target. Second Failed Saving Throw: The target is dominated (save ends). Third Failed Saving Throw: If the target is bloodied, it is dominated until it takes an extended rest.',
				damage: '2d6 + 7 psychic damage',
				category: 1
			},
			{
				id: 'de7ee6f6-8430-4b9f-92c8-30079e8235e1',
				name: 'Larva Burst',
				action: {
					action: 0,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: ''
				},
				keywords: 'Zone',
				condition: 'when first bloodied',
				range: 'Close burst 2',
				attack: {
					bonus: 20,
					defence: 2
				},
				description: '',
				details: 'targets enemies; 2d10 + 5 damage, and the target is slowed (save ends). Effect: The burst creates a zone of squirming grubs and larvae that lasts until the end of the encounter. The zone is difficult terrain.',
				damage: '2d10 + 5 damage',
				category: 1
			},
			{
				id: 'c85bcde1-f7e6-41c4-9773-589964b99829',
				name: 'Psychic Shackle',
				action: {
					action: 1,
					trigger: '',
					sustainAction: 0,
					use: 0,
					recharge: 'Recharges on 4-6'
				},
				keywords: 'Psychic',
				condition: '',
				range: 'Close blast 4',
				attack: {
					bonus: 20,
					defence: 3
				},
				description: '',
				details: '3d6 + 7 psychic damage, and the target is dazed until the start of the neogi great old master’s next turn.',
				damage: '3d6 + 7 psychic damage',
				category: 1
			}
		],
		damageModifiers: [],
		resist: '',
		vulnerable: '',
		immune: 'dazed',
		tactics: '',

		info: 'Level 16 Controller',
		phenotype: 'Large aberrant beast'
	},
	{
		id: 'e1756e2c-1898-4f8a-8dc4-2573b6f992f2',
		name: 'Gish’sarath',
		details: '',
		size: 2,
		origin: 4,
		type: 2,
		keywords: 'githyanki',
		level: 16,
		role: {
			type: 6,
			flag: 1,
			leader: false
		},
		senses: 'Perception +15',
		movement: '5 see also astral stride',
		alignment: 'Evil',
		languages: 'Common, Deep Speech, Draconic',
		skills: 'Arcana +17, History +14, Insight +15',
		equipment: 'chainmail',
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
			score: 14,
			modifier: 2,
			cost: 5
		},
		charisma: {
			score: 17,
			modifier: 3,
			cost: 12
		},
		hp: 306,
		initiative: 12,
		ac: 30,
		fortitude: 27,
		reflex: 28,
		will: 29,
		regeneration: null,
		auras: [],
		powers: [
			{
				id: '96e8d0ce-b15c-454d-93f9-8f76da9cd131',
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
					bonus: 21,
					defence: 0
				},
			},