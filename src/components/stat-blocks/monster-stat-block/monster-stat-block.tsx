import { IconCirclePlus, IconTrash } from '@tabler/icons-react';
import { Button, Flex, Tag } from 'antd';

import { RoleFlag, PowerCategory, RoleType, MonsterSize, MonsterOrigin, MonsterType, DamageType } from '../../../enums/enums';

import { MonsterLogic } from '../../../logic/monster-logic';
import { Factory } from '../../../logic/factory';

import { DamageModifier, Monster } from '../../../models/monster';

import { EnumHelper } from '../../../utils/enum-helper';
import { Format } from '../../../utils/format';
import { Utils } from '../../../utils/utils';

import { BooleanField, EnumField, NumberField, StringField } from '../../fields';
import { AuraPanel, AuraEditorPanel, RegenerationPanel, RegenerationEditorPanel, PowerPanel, PowerEditorPanel } from '../../panels/power-panel/power-panel';
import { EditablePanel, InfoPanel } from '../../panels';

import './monster-stat-block.scss';

interface Props {
	mode: 'view' | 'edit';
	monster: Monster,
	changeValue: (source: object, field: string, value: unknown) => void;
}

const MonsterStatBlock = (props: Props) => {
	const addPower = (category: PowerCategory) => {
		const powers = props.monster.powers;
		powers.push(Factory.createPower(category));
		props.changeValue(props.monster, 'powers', powers);
	};

	const addAura = () => {
		const auras = props.monster.auras;
		auras.push(Factory.createAura());
		props.changeValue(props.monster, 'auras', auras);
	};

	const addRegeneration = () => {
		props.changeValue(props.monster, 'regeneration', Factory.createRegeneration());
	};

	const getCombatSection = () => {
		let hp = null;
		if (props.monster.role.flag === RoleFlag.Minion) {
			hp = (
				<EditablePanel
					editable={false}
					viewer={<div><b>HP</b> 1; a missed attack never damages a minion.</div>}
					editor={null}
				/>
			);
		} else {
			hp = (
				<EditablePanel
					editable={props.mode === 'edit'}
					viewer={<Flex gap='small'><span><b>HP</b> {props.monster.hp}</span><span><b>bloodied</b> {Math.floor(props.monster.hp / 2)}</span></Flex>}
					editor={<NumberField label='HP' value={props.monster.hp} validate={value => value > 0} onChange={value => props.changeValue(props.monster, 'hp', value)} />}
				/>
			);
		}

		let damageModifiers = null;
		if ((props.mode === 'edit') || (props.monster.damageModifiers.length > 0) || (props.monster.immune) || (props.monster.resist) || (props.monster.vulnerable)) {
			const immune = props.monster.damageModifiers.filter(dm => dm.value === 0).map(dm => `${EnumHelper.damageType(dm.type)}`);
			if (props.monster.immune) {
				immune.push(props.monster.immune);
			}
			const immuneSection = (props.mode === 'edit') || (immune.length > 0) ? <span><b>Immune</b> {immune.join(', ') || 'none'}</span> : null;

			const resist = props.monster.damageModifiers.filter(dm => dm.value < 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (props.monster.resist) {
				resist.push(props.monster.resist);
			}
			const resistSection = (props.mode === 'edit') || (resist.length > 0) ? <span><b>Resist</b> {resist.join(', ') || 'none'}</span> : null;

			const vuln = props.monster.damageModifiers.filter(dm => dm.value > 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (props.monster.vulnerable) {
				vuln.push(props.monster.vulnerable);
			}
			const vulnSection = (props.mode === 'edit') || (vuln.length > 0) ? <span><b>Vulnerable</b> {vuln.join(', ') || 'none'}</span> : null;

			damageModifiers = (
				<EditablePanel
					editable={props.mode === 'edit'}
					viewer={<Flex gap='small'>{immuneSection}{resistSection}{vulnSection}</Flex>}
					editor={<DamageModsEditorPanel monster={props.monster} changeValue={props.changeValue} />}
				/>
			);
		}

		let savesMod = 0;
		let ap = 0;
		switch (props.monster.role.flag) {
		case RoleFlag.Elite:
			savesMod = 2;
			ap = 1;
			break;
		case RoleFlag.Solo:
			savesMod = 5;
			ap = 2;
			break;
		}

		return (
			<div className='row top-section'>
				<div className='cell wide'>
					{hp}
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<Flex gap='small'><span><b>AC</b> {props.monster.ac}</span><span><b>Fortitude</b> {props.monster.fortitude}</span><span><b>Reflex</b> {props.monster.reflex}</span><span><b>Will</b> {props.monster.will}</span></Flex>}
						editor={<DefencesEditorPanel monster={props.monster} changeValue={props.changeValue} />}
					/>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Speed</b> {props.monster.movement || '0'}</div>}
						editor={<StringField label='Speed' value={props.monster.movement} onChange={value => props.changeValue(props.monster, 'movement', value)} />}
					/>
					{damageModifiers}
					<div className={savesMod > 0 ? '' : 'hidden'}>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={<Flex gap='small'><span><b>Saving Throws</b> {Format.toSigned(savesMod)}</span><span><b>Action Points</b> {ap}</span></Flex>}
							editor={<div>Saving throws and action points are set by the monster's role.</div>}
						/>
					</div>
				</div>
				<div className='cell right'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Initiative</b> {Format.toSigned(props.monster.initiative)}</div>}
						editor={<NumberField label='Initiative' value={props.monster.initiative} onChange={value => props.changeValue(props.monster, 'initiative', value)} />}
					/>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={props.monster.senses}
						editor={<StringField label='Senses' value={props.monster.senses} onChange={value => props.changeValue(props.monster, 'senses', value)} />}
					/>
				</div>
			</div>
		);
	};

	const getPowerSection = (category: PowerCategory) => {
		const powers = props.monster.powers.filter(p => MonsterLogic.getPowerCategory(p) === category);

		let count = powers.length;
		if (category === PowerCategory.Trait) {
			count += props.monster.auras.length;
			if (props.monster.regeneration) {
				count += 1;
			}
		}

		if ((props.mode === 'view') && (count === 0)) {
			return null;
		}

		let auras = null;
		let regen = null;
		if (category === PowerCategory.Trait) {
			auras = props.monster.auras.map(aura => (
				<EditablePanel
					key={aura.id}
					editable={props.mode === 'edit'}
					viewer={<AuraPanel aura={aura} />}
					editor={<AuraEditorPanel aura={aura} changeValue={props.changeValue} />}
					onDelete={() => props.changeValue(props.monster, 'auras', props.monster.auras.filter(a => a.id !== aura.id))}
				/>
			));

			if (props.monster.regeneration) {
				regen = (
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<RegenerationPanel regeneration={props.monster.regeneration} />}
						editor={<RegenerationEditorPanel regeneration={props.monster.regeneration} changeValue={props.changeValue} />}
						onDelete={() => props.changeValue(props.monster, 'regeneration', null)}
					/>
				);
			}
		}

		const items = powers.map(power => (
			<EditablePanel
				key={power.id}
				editable={props.mode === 'edit'}
				viewer={<PowerPanel power={power} />}
				editor={<PowerEditorPanel power={power} category={category} changeValue={props.changeValue} />}
				onDelete={() => props.changeValue(props.monster, 'powers', props.monster.powers.filter(p => p.id !== power.id))}
			/>
		));
		if (items.length === 0) {
			items.push(<EditablePanel key='empty' editable={false} viewer='None' editor={null} />);
		}

		return (
			<div>
				<div className='row subheading'>
					<InfoPanel
						content={
							<div>{EnumHelper.powerCategory(category)}s</div>
						}
						actions={
							props.mode === 'edit' ?
								<Flex gap='small'>
									<Button icon={<IconCirclePlus />} onClick={() => addPower(category)} />
									{category === PowerCategory.Trait ? <Button onClick={addAura}>Add Aura</Button> : null}
									{(category === PowerCategory.Trait) && (props.monster.regeneration === null) ? <Button onClick={addRegeneration}>Add Regen</Button> : null}
								</Flex>
								: null
						}
					/>
				</div>
				{auras}
				{items}
				{regen}
			</div>
		);
	};

	const getSkillsSection = () => {
		if ((props.mode === 'view') && !props.monster.skills) {
			return null;
		}

		return (
			<div className='row dark'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Skills</b> {props.monster.skills || 'None'}</div>}
						editor={<StringField label='Skills' value={props.monster.skills} onChange={value => props.changeValue(props.monster, 'skills', value)} />}
					/>
				</div>
			</div>
		);
	};

	const getEquipmentSection = () => {
		if ((props.mode === 'view') && !props.monster.equipment) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Equipment</b> {props.monster.equipment || 'None'}</div>}
						editor={<StringField label='Equipment' value={props.monster.equipment} onChange={value => props.changeValue(props.monster, 'equipment', value)} />}
					/>
				</div>
			</div>
		);
	};

	const getDetailsSection = () => {
		if ((props.mode === 'view') && !props.monster.details) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Details</b> {props.monster.details || 'None'}</div>}
						editor={<StringField label='Details' value={props.monster.details} onChange={value => props.changeValue(props.monster, 'details', value)} />}
					/>
				</div>
			</div>
		);
	};

	const getTacticsSection = () => {
		if ((props.mode === 'view') && !props.monster.tactics) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Tactics</b> {props.monster.tactics || 'None'}</div>}
						editor={<StringField label='Tactics' value={props.monster.tactics} onChange={value => props.changeValue(props.monster, 'tactics', value)} />}
					/>
				</div>
			</div>
		);
	};

	return (
		<div id={props.monster.id} className='monster-stat-block'>
			<div className='main-header'>
				<div className='row'>
					<div className='cell wide big'>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={props.monster.name || 'Unnamed Monster'}
							editor={<StringField label='Name' value={props.monster.name} onChange={value => props.changeValue(props.monster, 'name', value)} />}
						/>
					</div>
					<div className='cell right'>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={<div>{MonsterLogic.getLevelAndRole(props.monster)}</div>}
							editor={<LevelRoleEditorPanel monster={props.monster} changeValue={props.changeValue} />}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='cell wide'>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={
								<Flex gap='small' align='center'>
									{MonsterLogic.getPhenotype(props.monster)}
									{
										props.monster.keywords ?
											<div>
												{
													props.monster.keywords
														.split(', ')
														.map((keyword, n) => <Tag key={n}>{keyword.trim()}</Tag>)
												}
											</div>
											: null
									}
								</Flex>
							}
							editor={<PhenotypeEditorPanel monster={props.monster} changeValue={props.changeValue} />}
						/>
					</div>
					<div className='cell right'>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={<div>{MonsterLogic.getXP(props.monster.level, props.monster.role.flag)} XP</div>}
							editor={<div>XP is set by the monster's level.</div>}
						/>
					</div>
				</div>
			</div>
			{getCombatSection()}
			{getPowerSection(PowerCategory.Trait)}
			{getPowerSection(PowerCategory.Standard)}
			{getPowerSection(PowerCategory.Move)}
			{getPowerSection(PowerCategory.Minor)}
			{getPowerSection(PowerCategory.Free)}
			{getPowerSection(PowerCategory.Triggered)}
			{getSkillsSection()}
			<div className='row dark vcenter'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Str</b> {props.monster.strength.score} ({Format.toSigned(Format.toModifier(props.monster.strength.score))})</div>}
						editor={<NumberField label='Str' value={props.monster.strength.score} onChange={value => props.changeValue(props.monster.strength, 'score', value)} />}
					/>
				</div>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Dex</b> {props.monster.dexterity.score} ({Format.toSigned(Format.toModifier(props.monster.dexterity.score))})</div>}
						editor={<NumberField label='Dex' value={props.monster.dexterity.score} onChange={value => props.changeValue(props.monster.dexterity, 'score', value)} />}
					/>
				</div>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Wis</b> {props.monster.wisdom.score} ({Format.toSigned(Format.toModifier(props.monster.wisdom.score))})</div>}
						editor={<NumberField label='Wis' value={props.monster.wisdom.score} onChange={value => props.changeValue(props.monster.wisdom, 'score', value)} />}
					/>
				</div>
			</div>
			<div className='row dark vcenter'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Con</b> {props.monster.constitution.score} ({Format.toSigned(Format.toModifier(props.monster.constitution.score))})</div>}
						editor={<NumberField label='Con' value={props.monster.constitution.score} onChange={value => props.changeValue(props.monster.constitution, 'score', value)} />}
					/>
				</div>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Int</b> {props.monster.intelligence.score} ({Format.toSigned(Format.toModifier(props.monster.intelligence.score))})</div>}
						editor={<NumberField label='Int' value={props.monster.intelligence.score} onChange={value => props.changeValue(props.monster.intelligence, 'score', value)} />}
					/>
				</div>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Cha</b> {props.monster.charisma.score} ({Format.toSigned(Format.toModifier(props.monster.charisma.score))})</div>}
						editor={<NumberField label='Cha' value={props.monster.charisma.score} onChange={value => props.changeValue(props.monster.charisma, 'score', value)} />}
					/>
				</div>
			</div>
			<div className='row vcenter'>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Alignment</b> {props.monster.alignment || 'Unaligned'}</div>}
						editor={<StringField label='Alignment' value={props.monster.alignment} onChange={value => props.changeValue(props.monster, 'alignment', value)} />}
					/>
				</div>
				<div className='cell'>
					<EditablePanel
						editable={props.mode === 'edit'}
						viewer={<div><b>Languages</b> {props.monster.languages || 'None'}</div>}
						editor={<StringField label='Languages' value={props.monster.languages} onChange={value => props.changeValue(props.monster, 'languages', value)} />}
					/>
				</div>
			</div>
			{getEquipmentSection()}
			{getDetailsSection()}
			{getTacticsSection()}
		</div>
	);
}

interface LevelRoleEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const LevelRoleEditorPanel = (props: LevelRoleEditorPanelProps) => {
	return (
		<div className='level-role-editor-panel'>
			<NumberField label='Level' value={props.monster.level} validate={value => (value >= 1) && (value <= 40)} onChange={value => props.changeValue(props.monster, 'level', value)} />
			<EnumField
				label='Role'
				options={[RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier]}
				value={props.monster.role.type}
				format={value => EnumHelper.roleType(value as RoleType)}
				isDisabled={() => false}
				onChange={value => props.changeValue(props.monster.role, 'type', value)}
			/>
			<EnumField
				label='Role Modifier'
				options={[RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion]}
				value={props.monster.role.flag}
				format={value => EnumHelper.roleFlag(value as RoleFlag)}
				isDisabled={() => false}
				onChange={value => props.changeValue(props.monster.role, 'flag', value)}
			/>
			<BooleanField label='Leader' value={props.monster.role.leader} onChange={value => props.changeValue(props.monster.role, 'leader', value)} />
		</div>
	);
}

interface PhenotypeEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const PhenotypeEditorPanel = (props: PhenotypeEditorPanelProps) => {
	return (
		<div className='phenotype-editor-panel'>
			<EnumField
				label='Size'
				options={[MonsterSize.Tiny, MonsterSize.Small, MonsterSize.Medium, MonsterSize.Large, MonsterSize.Huge, MonsterSize.Gargantuan]}
				value={props.monster.size}
				format={value => EnumHelper.monsterSize(value as MonsterSize)}
				isDisabled={() => false}
				onChange={value => props.changeValue(props.monster, 'size', value)}
			/>
			<EnumField
				label='Origin'
				options={[MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow]}
				value={props.monster.origin}
				format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
				isDisabled={() => false}
				onChange={value => props.changeValue(props.monster, 'origin', value)}
			/>
			<EnumField
				label='Type'
				options={[MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast]}
				value={props.monster.type}
				format={value => EnumHelper.monsterType(value as MonsterType)}
				isDisabled={() => false}
				onChange={value => props.changeValue(props.monster, 'type', value)}
			/>
			<StringField label='Keywords' value={props.monster.keywords} onChange={value => props.changeValue(props.monster, 'keywords', value)} />
		</div>
	);
}

interface DamageModsEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const DamageModsEditorPanel = (props: DamageModsEditorPanelProps) => {
	const addDamageMod = (value: number) => {
		const mod = Factory.createDamageModifier();
		mod.value = value;
		props.monster.damageModifiers.push(mod);
		props.changeValue(props.monster, 'damageModifiers', props.monster.damageModifiers);
	};

	const removeDamageMod = (mod: DamageModifier) => {
		const mods = props.monster.damageModifiers.filter(dm => dm !== mod);
		props.changeValue(props.monster, 'damageModifiers', mods);
	};

	const list = props.monster.damageModifiers.map(mod => {
		let typeSection = 'Immunity';
		let valueSection = null;
		if (mod.value > 0) {
			typeSection = 'Vulnerability';
			valueSection = <NumberField label='Value' value={mod.value} onChange={value => props.changeValue(mod, 'value', value)} />;
		} else if (mod.value < 0) {
			typeSection = 'Resistance';
			valueSection = <NumberField label='Value' value={mod.value * -1} onChange={value => props.changeValue(mod, 'value', value * -1)} />;
		}

		return (
			<div key={Utils.guid()} className='damage-mod'>
				<InfoPanel
					content={(
						<div>
							<div><b>{typeSection}</b></div>
							<EnumField
								label='Damage Type'
								options={[DamageType.Acid, DamageType.Cold, DamageType.Fire, DamageType.Force, DamageType.Lightning, DamageType.Necrotic, DamageType.Poison, DamageType.Psychic, DamageType.Radiant, DamageType.Thunder]}
								value={mod.type}
								format={value => EnumHelper.damageType(value as DamageType)}
								isDisabled={() => false}
								onChange={value => props.changeValue(mod, 'type', value)}
							/>
							{valueSection}
						</div>
						)}
					actions={(
						<Button icon={<IconTrash />} onClick={() => removeDamageMod(mod)} />
					)}
				/>
			</div>
		);
	});

	return (
		<div className='damage-mods-editor-panel'>
			<Flex gap='small'>
				<Button onClick={() => addDamageMod(0)}>Add Damage Immunity</Button>
				<Button onClick={() => addDamageMod(-5)}>Add Damage Resistance</Button>
				<Button onClick={() => addDamageMod(5)}>Add Damage Vulnerability</Button>
			</Flex>
			{list}
			<StringField label='Other Immunities' value={props.monster.immune} onChange={value => props.changeValue(props.monster, 'immune', value)} />
			<StringField label='Other Resistances' value={props.monster.resist} onChange={value => props.changeValue(props.monster, 'resist', value)} />
			<StringField label='Other Vulnerabilities' value={props.monster.vulnerable} onChange={value => props.changeValue(props.monster, 'vulnerable', value)} />
		</div>
	);
}

interface DefencesEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const DefencesEditorPanel = (props: DefencesEditorPanelProps) => {
	return (
		<div className='defences-editor-panel'>
			<NumberField label='AC' value={props.monster.ac} validate={value => value >= 1} onChange={value => props.changeValue(props.monster, 'ac', value)} />
			<NumberField label='Fortitude' value={props.monster.fortitude} validate={value => value >= 1} onChange={value => props.changeValue(props.monster, 'fortitude', value)} />
			<NumberField label='Reflex' value={props.monster.reflex} validate={value => value >= 1} onChange={value => props.changeValue(props.monster, 'reflex', value)} />
			<NumberField label='Will' value={props.monster.will} validate={value => value >= 1} onChange={value => props.changeValue(props.monster, 'will', value)} />
		</div>
	);
}

export { MonsterStatBlock };
