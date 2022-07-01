import { Component } from 'react';

import { AuraPanel, PowerPanel, RegenerationPanel } from '../power-panel';

import { RoleFlag, PowerCategory, EnumHelper, ActionType } from '../../models/enums';
import { Monster } from '../../models/monster';
import { Power } from '../../models/power';

import { MonsterUtils } from '../../utils/monster-utils';

import './stat-block.css';

interface Props {
	monster: Monster
};

interface State {
};

export class StatBlock extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
		};
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
			auras = this.props.monster.auras.map(a => <AuraPanel key={a.id} aura={a} />);

			if (this.props.monster.regeneration) {
				regen = (
					<RegenerationPanel regeneration={this.props.monster.regeneration} />
				);
			}
		}

		const items = powers.map(p => <PowerPanel key={p.id} power={p} />);

		return (
			<div>
				<div className='row subheading'>{EnumHelper.powerCategory(category)}s</div>
				{auras}
				{regen}
				{items}
			</div>
		);
	};

	render = () => {
		let hp = null;
		if (this.props.monster.role.flag === RoleFlag.Minion) {
			hp = (
				<span>
					1; a missed attack never damages a minion.
				</span>
			);
		} else {
			hp = (
				<span>
					{this.props.monster.hp}, <b>bloodied</b> {Math.floor(this.props.monster.hp / 2)}
				</span>
			);
		}

		let damageModifiers = null;
		if ((this.props.monster.damageModifiers.length > 0) || (this.props.monster.immune) || (this.props.monster.resist) || (this.props.monster.vulnerable)) {
			const immune = this.props.monster.damageModifiers.filter(dm => dm.value === 0).map(dm => `${EnumHelper.damageType(dm.type)}`);
			if (this.props.monster.immune) {
				immune.push(this.props.monster.immune);
			}
			const immuneSection = (immune.length > 0) ? <span><b>Immune</b> {immune.join(', ')}</span> : null;

			const resist = this.props.monster.damageModifiers.filter(dm => dm.value < 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (this.props.monster.resist) {
				resist.push(this.props.monster.resist);
			}
			const resistSection = (resist.length > 0) ? <span><b>Resist</b> {resist.join(', ')}</span> : null;

			const vuln = this.props.monster.damageModifiers.filter(dm => dm.value > 0).map(dm => `${EnumHelper.damageType(dm.type)} ${Math.abs(dm.value)}`);
			if (this.props.monster.vulnerable) {
				vuln.push(this.props.monster.vulnerable);
			}
			const vulnSection = (vuln.length > 0) ? <span><b>Vulnerable</b> {vuln.join(', ')}</span> : null;

			damageModifiers = (
				<div className='value'>
					{immuneSection} {resistSection} {vulnSection}
				</div>
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

		let savingThrows = null;
		if (savesMod > 0) {
			savingThrows = (
				<div className='value'>
					<b>Saving Throws</b> {savesMod > 0 ? '+' : ''}{savesMod}, <b>Action Points</b> {ap}
				</div>
			);
		}

		let equip = null;
		if (this.props.monster.equipment) {
			equip = (
				<div className='row'>
					<div className='cell'>
						<div className='value'>
							<b>Equipment</b> {this.props.monster.equipment}
						</div>
					</div>
				</div>
			);
		}

		let details = null;
		if (this.props.monster.details) {
			details = (
				<div className='row'>
					<div className='cell'>
						<div className='value'>
							{this.props.monster.details}
						</div>
					</div>
				</div>
			);
		}

		let tactics = null;
		if (this.props.monster.tactics) {
			tactics = (
				<div className='row'>
					<div className='cell'>
						<div className='value'>
							<b>Tactics</b> {this.props.monster.tactics}
						</div>
					</div>
				</div>
			);
		}

		const traits = this.getPowerSection(PowerCategory.Trait);
		const standardActions = this.getPowerSection(PowerCategory.Standard);
		const moveActions = this.getPowerSection(PowerCategory.Move);
		const minorActions = this.getPowerSection(PowerCategory.Minor);
		const freeActions = this.getPowerSection(PowerCategory.Free);
		const triggeredActions = this.getPowerSection(PowerCategory.Triggered);

		return (
			<div className='stat-block'>
				<div className='row monster-top-section'>
					<div className='cell'>
						<div className='value big'>
							{this.props.monster.name}
						</div>
						<div className='value'>
							{MonsterUtils.getPhenotype(this.props.monster)}
						</div>
					</div>
					<div className='cell right'>
						<div className='value big'>
							Level {this.props.monster.level} {MonsterUtils.getRole(this.props.monster.role)}
						</div>
						<div className='value'>
							<b>XP </b> {MonsterUtils.getXP(this.props.monster.level, this.props.monster.role.flag)}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='cell two'>
						<div className='value'>
							<b>HP</b> {hp}
						</div>
						<div className='value'>
							<b>AC</b> {this.props.monster.ac}, <b>Fortitude</b> {this.props.monster.fortitude}, <b>Reflex</b> {this.props.monster.reflex}, <b>Will</b> {this.props.monster.will}
						</div>
						<div className='value'>
							<b>Speed</b> {this.props.monster.movement}
						</div>
						{damageModifiers}
						{savingThrows}
					</div>
					<div className='cell right'>
						<div className='value'>
							<b>Initiative</b> {this.props.monster.initiative >= 0 ? '+' : ''}{this.props.monster.initiative}
						</div>
						<div className='value'>
							{this.props.monster.senses}
						</div>
					</div>
				</div>
				{traits}
				{standardActions}
				{moveActions}
				{minorActions}
				{freeActions}
				{triggeredActions}
				<div className='row dark'>
					<div className='cell'>
						<div className='value'>
							<b>Skills</b> {this.props.monster.skills}
						</div>
					</div>
				</div>
				<div className='row dark'>
					<div className='cell'>
						<div className='value'>
							<b>Str</b> {this.props.monster.strength.score} ({this.props.monster.strength.modifier >= 0 ? '+' : ''}{this.props.monster.strength.modifier})
						</div>
					</div>
					<div className='cell'>
						<div className='value'>
							<b>Dex</b> {this.props.monster.dexterity.score} ({this.props.monster.dexterity.modifier >= 0 ? '+' : ''}{this.props.monster.dexterity.modifier})
						</div>
					</div>
					<div className='cell'>
						<div className='value'>
							<b>Wis</b> {this.props.monster.wisdom.score} ({this.props.monster.wisdom.modifier >= 0 ? '+' : ''}{this.props.monster.wisdom.modifier})
						</div>
					</div>
				</div>
				<div className='row dark'>
					<div className='cell'>
						<div className='value'>
							<b>Con</b> {this.props.monster.constitution.score} ({this.props.monster.constitution.modifier >= 0 ? '+' : ''}{this.props.monster.constitution.modifier})
						</div>
					</div>
					<div className='cell'>
						<div className='value'>
							<b>Int</b> {this.props.monster.intelligence.score} ({this.props.monster.intelligence.modifier >= 0 ? '+' : ''}{this.props.monster.intelligence.modifier})
						</div>
					</div>
					<div className='cell'>
						<div className='value'>
							<b>Cha</b> {this.props.monster.charisma.score} ({this.props.monster.charisma.modifier >= 0 ? '+' : ''}{this.props.monster.charisma.modifier})
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='cell'>
						<div className='value'>
							<b>Alignment</b> {this.props.monster.alignment}
						</div>
					</div>
					<div className='cell'>
						<div className='value'>
							<b>Languages</b> {this.props.monster.languages}
						</div>
					</div>
				</div>
				{equip}
				{tactics}
				{details}
			</div>
		);
	};
};
