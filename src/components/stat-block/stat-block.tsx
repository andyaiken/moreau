import { Button, ButtonGroup } from '@mui/material';
import { Component } from 'react';

import { BooleanField } from '../controls/boolean-field';
import { EnumField } from '../controls/enum-field';
import { NumberField } from '../controls/number-field';
import { StringField } from '../controls/string-field';
import { EditablePanel } from '../editable-panel';
import { InfoPanel } from '../info-panel';
import { AuraEditorPanel, AuraPanel, PowerEditorPanel, PowerPanel, RegenerationEditorPanel, RegenerationPanel } from '../power-panel';

import { RoleFlag, PowerCategory, EnumHelper, ActionType, RoleType, MonsterSize, MonsterOrigin, MonsterType, DamageType } from '../../models/enums';
import { DamageModifier, Monster } from '../../models/monster';
import { Power } from '../../models/power';

import { CommonUtils } from '../../utils/common-utils';
import { Factory } from '../../utils/factory';
import { MonsterUtils } from '../../utils/monster-utils';

import './stat-block.css';

interface Props {
	mode: 'view' | 'edit';
	monster: Monster,
	changeValue: (source: object, field: string, value: any) => void;
};

interface State {
};

export class StatBlock extends Component<Props, State> {
	static defaultProps = {
		mode: 'view',
		changeValue: (source: Monster, field: string, value: any) => null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	getCombatSection = () => {
		let hp = null;
		if (this.props.monster.role.flag === RoleFlag.Minion) {
			hp = (
				<div><b>HP</b> 1; a missed attack never damages a minion.</div>
			);
		} else {
			hp = (
				<EditablePanel
					editable={this.props.mode === 'edit'}
					viewer={<div><b>HP</b> {this.props.monster.hp}, <b>bloodied</b> {Math.floor(this.props.monster.hp / 2)}</div>}
					editor={<NumberField label='HP' value={this.props.monster.hp} validate={value => value > 0} onChange={value => this.props.changeValue(this.props.monster, 'hp', value)} />}
				/>
			);
		}

		let damageModifiers = null;
		if ((this.props.mode === 'edit') || (this.props.monster.damageModifiers.length > 0) || (this.props.monster.immune) || (this.props.monster.resist) || (this.props.monster.vulnerable)) {
			const immune = this.props.monster.damageModifiers.filter(dm => dm.value === 0).map(dm => `${EnumHelper.damageType(dm.type)}`);
			if (this.props.monster.immune) {
				immune.push(this.props.monster.immune);
			}
			const immuneSection = (this.props.mode === 'edit') || (immune.length > 0) ? <span><b>Immune</b> {immune.join(', ') || 'none'}</span> : null;

			const resist = this.props.monster.damageModifiers.filter(dm => dm.value < 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (this.props.monster.resist) {
				resist.push(this.props.monster.resist);
			}
			const resistSection = (this.props.mode === 'edit') || (resist.length > 0) ? <span><b>Resist</b> {resist.join(', ') || 'none'}</span> : null;

			const vuln = this.props.monster.damageModifiers.filter(dm => dm.value > 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (this.props.monster.vulnerable) {
				vuln.push(this.props.monster.vulnerable);
			}
			const vulnSection = (this.props.mode === 'edit') || (vuln.length > 0) ? <span><b>Vulnerable</b> {vuln.join(', ') || 'none'}</span> : null;

			damageModifiers = (
				<EditablePanel
					editable={this.props.mode === 'edit'}
					outlined={true}
					viewer={<div>{immuneSection} {resistSection} {vulnSection}</div>}
					editor={<DamageModsEditorPanel monster={this.props.monster} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
				/>
			);
		}

		let savesMod = 0;
		let ap = 0;
		switch (this.props.monster.role.flag) {
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
			<div className='row'>
				<div className='cell two'>
					{hp}
					<EditablePanel
						editable={this.props.mode === 'edit'}
						outlined={true}
						viewer={<div><b>AC</b> {this.props.monster.ac}, <b>Fortitude</b> {this.props.monster.fortitude}, <b>Reflex</b> {this.props.monster.reflex}, <b>Will</b> {this.props.monster.will}</div>}
						editor={<DefencesEditorPanel monster={this.props.monster} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
					/>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Speed</b> {this.props.monster.movement || '0'}</div>}
						editor={<StringField label='Speed' placeholder='Speed' value={this.props.monster.movement} onChange={value => this.props.changeValue(this.props.monster, 'movement', value)} />}
					/>
					{damageModifiers}
					<div className={savesMod > 0 ? '' : 'hidden'}>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Saving Throws</b> {CommonUtils.signedModifier(savesMod)}, <b>Action Points</b> {ap}</div>}
							editor={<div>Saving throws and action points are set by the monster's role.</div>}
						/>
					</div>
				</div>
				<div className='cell right'>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Initiative</b> {CommonUtils.signedModifier(this.props.monster.initiative)}</div>}
						editor={<NumberField label='Initiative' value={this.props.monster.initiative} onChange={value => this.props.changeValue(this.props.monster, 'initiative', value)} />}
					/>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={this.props.monster.senses}
						editor={<StringField label='Senses' placeholder='Senses' value={this.props.monster.senses} onChange={value => this.props.changeValue(this.props.monster, 'senses', value)} />}
					/>
				</div>
			</div>
		);
	};

	getPowerSection = (category: PowerCategory) => {
		let powers: Power[] = [];
		if (category === PowerCategory.Trait) {
			powers = this.props.monster.powers.filter(p => !p.action);
		} else {
			let actions: ActionType[] = [];
			switch (category) {
			case PowerCategory.Standard:
				actions = [ ActionType.Standard ];
				break;
			case PowerCategory.Move:
				actions = [ ActionType.Move ];
				break;
			case PowerCategory.Minor:
				actions = [ ActionType.Minor ];
				break;
			case PowerCategory.Free:
				actions = [ ActionType.Free ];
				break;
			case PowerCategory.Triggered:
				actions = [ ActionType.Reaction, ActionType.Interrupt, ActionType.Opportunity ];
				break;
			}
			powers = this.props.monster.powers.filter(p => p.action && actions.includes(p.action.action));
		}

		let count = powers.length;
		if (category === PowerCategory.Trait) {
			count += this.props.monster.auras.length;
			if (this.props.monster.regeneration) {
				count += 1;
			}
		}

		if (count === 0) {
			return null;
		}

		let auras = null;
		let regen = null;
		if (category === PowerCategory.Trait) {
			auras = this.props.monster.auras.map(aura => (
				<EditablePanel
					key={aura.id}
					editable={this.props.mode === 'edit'}
					outlined={true}
					viewer={<AuraPanel aura={aura} />}
					editor={<AuraEditorPanel aura={aura} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
					onDelete={() => this.props.changeValue(this.props.monster, 'auras', this.props.monster.auras.filter(a => a.id !== aura.id))}
				/>
			));

			if (this.props.monster.regeneration) {
				regen = (
					<EditablePanel
						editable={this.props.mode === 'edit'}
						outlined={true}
						viewer={<RegenerationPanel regeneration={this.props.monster.regeneration} />}
						editor={<RegenerationEditorPanel regeneration={this.props.monster.regeneration} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
						onDelete={() => this.props.changeValue(this.props.monster, 'regeneration', null)}
					/>
				);
			}
		}

		const items = powers.map(power => (
			<EditablePanel
				key={power.id}
				editable={this.props.mode === 'edit'}
				outlined={true}
				viewer={<PowerPanel power={power} />}
				editor={<PowerEditorPanel power={power} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
				onDelete={() => this.props.changeValue(this.props.monster, 'powers', this.props.monster.powers.filter(p => p.id !== power.id))}
			/>
		));

		return (
			<div>
				<div className='row subheading'>{EnumHelper.powerCategory(category)}s</div>
				{auras}
				{items}
				{regen}
			</div>
		);
	};

	getSkillsSection = () => {
		if ((this.props.mode === 'view') && !this.props.monster.skills) {
			return null;
		}

		return (
			<div className='row dark'>
				<div className='cell'>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Skills</b> {this.props.monster.skills}</div>}
						editor={<StringField label='Skills' placeholder='Skills' value={this.props.monster.skills} onChange={value => this.props.changeValue(this.props.monster, 'skills', value)} />}
					/>
				</div>
			</div>
		);
	};

	getEquipmentSection = () => {
		if ((this.props.mode === 'view') && !this.props.monster.equipment) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Equipment</b> {this.props.monster.equipment}</div>}
						editor={<StringField label='Equipment' placeholder='Equipment' value={this.props.monster.equipment} onChange={value => this.props.changeValue(this.props.monster, 'equipment', value)} />}
					/>
				</div>
			</div>
		);
	};

	getDetailsSection = () => {
		if ((this.props.mode === 'view') && !this.props.monster.details) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Details</b> {this.props.monster.details}</div>}
						editor={<StringField label='Details' placeholder='Details' value={this.props.monster.details} onChange={value => this.props.changeValue(this.props.monster, 'details', value)} />}
					/>
				</div>
			</div>
		);
	};

	getTacticsSection = () => {
		if ((this.props.mode === 'view') && !this.props.monster.tactics) {
			return null;
		}

		return (
			<div className='row'>
				<div className='cell'>
					<EditablePanel
						editable={this.props.mode === 'edit'}
						viewer={<div><b>Tactics</b> {this.props.monster.tactics}</div>}
						editor={<StringField label='Tactics' placeholder='Tactics' value={this.props.monster.tactics} onChange={value => this.props.changeValue(this.props.monster, 'tactics', value)} />}
					/>
				</div>
			</div>
		);
	};

	render = () => {
		return (
			<div className='stat-block'>
				<div className='row monster-top-section'>
					<div className='cell two big'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={this.props.monster.name || 'Unnamed Monster'}
							editor={<StringField label='Name' placeholder='Name' value={this.props.monster.name} onChange={value => this.props.changeValue(this.props.monster, 'name', value)} />}
						/>
					</div>
					<div className='cell right big'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							outlined={true}
							viewer={<div>Level {this.props.monster.level} {MonsterUtils.getRole(this.props.monster.role)}</div>}
							editor={<LevelRoleEditorPanel monster={this.props.monster} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
						/>
					</div>
				</div>
				<div className='row monster-top-section'>
					<div className='cell two'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							outlined={true}
							viewer={MonsterUtils.getPhenotype(this.props.monster)}
							editor={<PhenotypeEditorPanel monster={this.props.monster} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />}
						/>
					</div>
					<div className='cell right'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>XP </b> {MonsterUtils.getXP(this.props.monster.level, this.props.monster.role.flag)}</div>}
							editor={<div>XP is set by the monster's level.</div>}
						/>
					</div>
				</div>
				{this.getCombatSection()}
				{this.getPowerSection(PowerCategory.Trait)}
				{this.getPowerSection(PowerCategory.Standard)}
				{this.getPowerSection(PowerCategory.Move)}
				{this.getPowerSection(PowerCategory.Minor)}
				{this.getPowerSection(PowerCategory.Free)}
				{this.getPowerSection(PowerCategory.Triggered)}
				{this.getSkillsSection()}
				<div className='row dark vcenter'>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Str</b> {this.props.monster.strength.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.strength.score))})</div>}
							editor={<NumberField label='Str' value={this.props.monster.strength.score} onChange={value => this.props.changeValue(this.props.monster.strength, 'score', value)} />}
						/>
					</div>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Dex</b> {this.props.monster.dexterity.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.dexterity.score))})</div>}
							editor={<NumberField label='Dex' value={this.props.monster.dexterity.score} onChange={value => this.props.changeValue(this.props.monster.dexterity, 'score', value)} />}
						/>
					</div>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Wis</b> {this.props.monster.wisdom.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.wisdom.score))})</div>}
							editor={<NumberField label='Wis' value={this.props.monster.wisdom.score} onChange={value => this.props.changeValue(this.props.monster.wisdom, 'score', value)} />}
						/>
					</div>
				</div>
				<div className='row dark vcenter'>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Con</b> {this.props.monster.constitution.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.constitution.score))})</div>}
							editor={<NumberField label='Con' value={this.props.monster.constitution.score} onChange={value => this.props.changeValue(this.props.monster.constitution, 'score', value)} />}
						/>
					</div>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Int</b> {this.props.monster.intelligence.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.intelligence.score))})</div>}
							editor={<NumberField label='Int' value={this.props.monster.intelligence.score} onChange={value => this.props.changeValue(this.props.monster.intelligence, 'score', value)} />}
						/>
					</div>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Cha</b> {this.props.monster.charisma.score} ({CommonUtils.signedModifier(CommonUtils.scoreToModifier(this.props.monster.charisma.score))})</div>}
							editor={<NumberField label='Cha' value={this.props.monster.charisma.score} onChange={value => this.props.changeValue(this.props.monster.charisma, 'score', value)} />}
						/>
					</div>
				</div>
				<div className='row vcenter'>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Alignment</b> {this.props.monster.alignment || 'Unaligned'}</div>}
							editor={<StringField label='Alignment' placeholder='Alignment' value={this.props.monster.alignment} onChange={value => this.props.changeValue(this.props.monster, 'alignment', value)} />}
						/>
					</div>
					<div className='cell'>
						<EditablePanel
							editable={this.props.mode === 'edit'}
							viewer={<div><b>Languages</b> {this.props.monster.languages || 'None'}</div>}
							editor={<StringField label='Languages' placeholder='Languages' value={this.props.monster.languages} onChange={value => this.props.changeValue(this.props.monster, 'languages', value)} />}
						/>
					</div>
				</div>
				{this.getEquipmentSection()}
				{this.getDetailsSection()}
				{this.getTacticsSection()}
			</div>
		);
	};
};

interface LevelRoleEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: any) => void;
};

interface LevelRoleEditorPanelState {
};

class LevelRoleEditorPanel extends Component<LevelRoleEditorPanelProps, LevelRoleEditorPanelState> {
	constructor(props: LevelRoleEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='level-role-editor-panel'>
				<NumberField label='Level' value={this.props.monster.level} validate={value => (value >= 1) && (value <= 40)} onChange={value => this.props.changeValue(this.props.monster, 'level', value)} />
				<EnumField
					label='Role'
					options={[RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier]}
					value={this.props.monster.role.type}
					format={value => EnumHelper.roleType(value as RoleType)}
					onChange={value => this.props.changeValue(this.props.monster.role, 'type', value)}
				/>
				<EnumField
					label='Role Modifier'
					options={[RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion]}
					value={this.props.monster.role.flag}
					format={value => EnumHelper.roleFlag(value as RoleFlag)}
					onChange={value => this.props.changeValue(this.props.monster.role, 'flag', value)}
				/>
				<BooleanField label='Leader' value={this.props.monster.role.leader} onChange={value => this.props.changeValue(this.props.monster.role, 'leader', value)} />
			</div>
		);
	};
};

interface PhenotypeEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: any) => void;
};

interface PhenotypeEditorPanelState {
};

class PhenotypeEditorPanel extends Component<PhenotypeEditorPanelProps, PhenotypeEditorPanelState> {
	constructor(props: PhenotypeEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='phenotype-editor-panel'>
				<EnumField
					label='Size'
					options={[MonsterSize.Tiny, MonsterSize.Small, MonsterSize.Medium, MonsterSize.Large, MonsterSize.Huge, MonsterSize.Gargantuan]}
					value={this.props.monster.size}
					format={value => EnumHelper.monsterSize(value as MonsterSize)}
					onChange={value => this.props.changeValue(this.props.monster, 'size', value)}
				/>
				<EnumField
					label='Origin'
					options={[MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow]}
					value={this.props.monster.origin}
					format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
					onChange={value => this.props.changeValue(this.props.monster, 'origin', value)}
				/>
				<EnumField
					label='Type'
					options={[MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast]}
					value={this.props.monster.type}
					format={value => EnumHelper.monsterType(value as MonsterType)}
					onChange={value => this.props.changeValue(this.props.monster, 'type', value)}
				/>
				<StringField label='Keywords' placeholder='Keywords' value={this.props.monster.keywords} onChange={value => this.props.changeValue(this.props.monster, 'keywords', value)} />
			</div>
		);
	};
};

interface DamageModsEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: any) => void;
};

interface DamageModsEditorPanelState {
};

class DamageModsEditorPanel extends Component<DamageModsEditorPanelProps, DamageModsEditorPanelState> {
	constructor(props: DamageModsEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		const addDamageMod = (value: number) => {
			const mod = Factory.createDamageModifier();
			mod.value = value;
			this.props.monster.damageModifiers.push(mod);
			this.props.changeValue(this.props.monster, 'damageModifiers', this.props.monster.damageModifiers);
		};

		const removeDamageMod = (mod: DamageModifier) => {
			const mods = this.props.monster.damageModifiers.filter(dm => dm !== mod);
			this.props.changeValue(this.props.monster, 'damageModifiers', mods);
		};

		const list = this.props.monster.damageModifiers.map(mod => {
			let typeSection = 'Immunity';
			let valueSection = null;
			if (mod.value > 0) {
				typeSection = 'Vulnerability';
				valueSection = <NumberField label='Value' value={mod.value} validate={value => true} onChange={value => this.props.changeValue(mod, 'value', value)} />;
			} else if (mod.value < 0) {
				typeSection = 'Resistance';
				valueSection = <NumberField label='Value' value={mod.value * -1} validate={value => true} onChange={value => this.props.changeValue(mod, 'value', value * -1)} />;
			}

			return (
				<InfoPanel
					key={CommonUtils.guid()}
					outlined={true}
					content={(
						<div>
							<div><b>{typeSection}</b></div>
							<EnumField
								label='Damage Type'
								options={[DamageType.Acid, DamageType.Cold, DamageType.Fire, DamageType.Force, DamageType.Lightning, DamageType.Necrotic, DamageType.Poison, DamageType.Psychic, DamageType.Radiant, DamageType.Thunder]}
								value={mod.type}
								format={value => EnumHelper.damageType(value as DamageType)}
								onChange={value => this.props.changeValue(mod, 'type', value)}
							/>
							{valueSection}
						</div>
						)}
					actions={(
						<Button onClick={() => removeDamageMod(mod)}>Remove</Button>
					)}
				/>
			);
		});

		return (
			<div className='damage-mods-editor-panel'>
				<ButtonGroup variant='text'>
					<Button onClick={() => addDamageMod(0)}>Add Damage Immunity</Button>
					<Button onClick={() => addDamageMod(-5)}>Add Damage Resistance</Button>
					<Button onClick={() => addDamageMod(5)}>Add Damage Vulnerability</Button>
				</ButtonGroup>
				{list}
				<StringField label='Other Immunities' placeholder='Immunities' value={this.props.monster.immune} onChange={value => this.props.changeValue(this.props.monster, 'immune', value)} />
				<StringField label='Other Resistances' placeholder='Resistances' value={this.props.monster.resist} onChange={value => this.props.changeValue(this.props.monster, 'resist', value)} />
				<StringField label='Other Vulnerabilities' placeholder='Vulnerabilities' value={this.props.monster.vulnerable} onChange={value => this.props.changeValue(this.props.monster, 'vulnerable', value)} />
			</div>
		);
	};
};

interface DefencesEditorPanelProps {
	monster: Monster;
	changeValue: (source: object, field: string, value: any) => void;
};

interface DefencesEditorPanelState {
};

class DefencesEditorPanel extends Component<DefencesEditorPanelProps, DefencesEditorPanelState> {
	constructor(props: DefencesEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='defences-editor-panel'>
				<NumberField label='AC' value={this.props.monster.ac} validate={value => value >= 1} onChange={value => this.props.changeValue(this.props.monster, 'ac', value)} />
				<NumberField label='Fortitude' value={this.props.monster.fortitude} validate={value => value >= 1} onChange={value => this.props.changeValue(this.props.monster, 'fortitude', value)} />
				<NumberField label='Reflex' value={this.props.monster.reflex} validate={value => value >= 1} onChange={value => this.props.changeValue(this.props.monster, 'reflex', value)} />
				<NumberField label='Will' value={this.props.monster.will} validate={value => value >= 1} onChange={value => this.props.changeValue(this.props.monster, 'will', value)} />
			</div>
		);
	};
};
