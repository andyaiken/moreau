import { Component } from 'react';

import { NumberField } from '../controls/number-field';
import { StringField } from '../controls/string-field';

import { ActionType, DefenceType, EnumHelper, UseType } from '../../models/enums';
import { Aura, Regeneration } from '../../models/monster';
import { Power, PowerAction, PowerAttack } from '../../models/power';

import './power-panel.css';

import iconMelee from '../../resources/power-icons/melee.png';
import iconMeleeBasic from '../../resources/power-icons/melee-basic.png';
import iconRanged from '../../resources/power-icons/ranged.png';
import iconRangedBasic from '../../resources/power-icons/ranged-basic.png';
import iconBurst from '../../resources/power-icons/burst.png';
import iconBurstBasic from '../../resources/power-icons/burst-basic.png';
import iconBlast from '../../resources/power-icons/blast.png';
import iconBlastBasic from '../../resources/power-icons/blast-basic.png';
import { BooleanField } from '../controls/boolean-field';
import { Factory } from '../../utils/factory';
import { EnumField } from '../controls/enum-field';

const sanitiseText = (text: string) => {
	// Capitalise the first character
	if (text.length > 0) {
		text = text[0].toUpperCase() + text.substring(1);
	}

	// If the string ends with something odd [;:,] replace it with a full stop
	if (text.endsWith(';') || text.endsWith(':') || text.endsWith(',')) {
		text = text.substring(0, text.length - 1) + '.';
	}

	return text;
};

interface PowerPanelProps {
	power: Power
};

interface PowerPanelState {
};

export class PowerPanel extends Component<PowerPanelProps, PowerPanelState> {
	constructor(props: PowerPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		let icon = null;
		if (this.props.power.attack) {
			const isBasic = this.props.power.action && (this.props.power.action.use === UseType.Basic);
			let src = '';
			let desc = '';
			if (this.props.power.range.toLowerCase().includes('blast')) {
				src = isBasic ? iconBlastBasic : iconBlast;
				desc = isBasic ? 'Blast Basic Attack' : 'Blast Attack';
			} else if (this.props.power.range.toLowerCase().includes('burst')) {
				src = isBasic ? iconBurstBasic : iconBurst;
				desc = isBasic ? 'Burst Basic Attack' : 'Burst Attack';
			} else if (this.props.power.range.toLowerCase().includes('ranged')) {
				src = isBasic ? iconRangedBasic : iconRanged;
				desc = isBasic ? 'Ranged Basic Attack' : 'Ranged Attack';
			} else {
				src = isBasic ? iconMeleeBasic : iconMelee;
				desc = isBasic ? 'Melee Basic Attack' : 'Melee Attack';
			}
			icon = (
				<img className='power-icon' src={src} alt={desc} />
			);
		}

		let keywords = null;
		if (this.props.power.keywords) {
			keywords = <span>({this.props.power.keywords})</span>;
		}

		let usage = null;
		let sustain = null;
		if (this.props.power.action) {
			if (this.props.power.action.recharge) {
				usage = <span>◆ {sanitiseText(this.props.power.action.recharge)}</span>;
			} else {
				switch (this.props.power.action.use) {
				case UseType.Encounter:
				case UseType.Daily:
					usage = <span>◆ {EnumHelper.useType(this.props.power.action.use)}</span>;
					break;
				}
			}
			if (this.props.power.action.sustainAction !== ActionType.None) {
				sustain = <span>◆ Sustain: {EnumHelper.actionType(this.props.power.action.sustainAction)}</span>;
			}
		}

		let requirement = null;
		if (this.props.power.condition) {
			requirement = (
				<div><i>Requirement</i>: {sanitiseText(this.props.power.condition)}</div>
			);
		}

		let trigger = null;
		if (this.props.power.action && this.props.power.action.trigger) {
			trigger = (
				<div><i>Trigger</i>: {sanitiseText(this.props.power.action.trigger)}</div>
			);
		}

		let attack = null;
		if (this.props.power.attack) {
			let start = 'Attack';
			if (this.props.power.action) {
				if ((this.props.power.action.action === ActionType.Reaction) || (this.props.power.action.action === ActionType.Interrupt) || (this.props.power.action.action === ActionType.Opportunity)) {
					start = `Attack (${EnumHelper.actionType(this.props.power.action.action)})`;
				}
			}
			let roll = `${this.props.power.attack.bonus >= 0 ? '+' : ''}${this.props.power.attack.bonus} vs ${EnumHelper.defenceType(this.props.power.attack.defence)}`;
			if (this.props.power.range) {
				roll = this.props.power.range + '; ' + roll;
			}
			attack = (
				<div><i>{start}</i>: {roll}</div>
			);
		}

		return (
			<div className='power-panel'>
				<div className='top-line'>
					{icon}
					<b>{this.props.power.name}</b>
					{keywords}
					{usage}
					{sustain}
				</div>
				<div className='description'>
					<i>{sanitiseText(this.props.power.description)}</i>
				</div>
				<div className='content'>
					{requirement}
					{trigger}
					{attack}
					<div>{sanitiseText(this.props.power.details)}</div>
				</div>
			</div>
		);
	};
};

interface PowerEditorPanelProps {
	power: Power;
	changeValue: (source: object, field: string, value: any) => void;
};

interface PowerEditorPanelState {
};

export class PowerEditorPanel extends Component<PowerEditorPanelProps, PowerEditorPanelState> {
	constructor(props: PowerEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='power-editor-panel'>
				<StringField label='Name' placeholder='Name' value={this.props.power.name} onChange={value => this.props.changeValue(this.props.power, 'name', value)} />
				<StringField label='Keywords' placeholder='Keywords' value={this.props.power.keywords} onChange={value => this.props.changeValue(this.props.power, 'keywords', value)} />
				<StringField label='Description' placeholder='Description' value={this.props.power.description} onChange={value => this.props.changeValue(this.props.power, 'description', value)} />
				<StringField label='Requirements' placeholder='Requirements' value={this.props.power.condition} onChange={value => this.props.changeValue(this.props.power, 'condition', value)} />
				<BooleanField label='Action' value={this.props.power.action !== null} onChange={value => this.props.changeValue(this.props.power, 'action', value ? Factory.createPowerAction() : null)} />
				{this.props.power.action !== null ? <EnumField
					label='Action Type'
					options={[ActionType.None, ActionType.Standard, ActionType.Move, ActionType.Minor, ActionType.Reaction, ActionType.Interrupt, ActionType.Opportunity, ActionType.Free]}
					value={this.props.power.action.action}
					format={value => EnumHelper.actionType(value as ActionType)}
					onChange={value => this.props.changeValue(this.props.power.action as PowerAction, 'action', value)}
				/> : null}
				{this.props.power.action !== null ? <StringField label='Trigger' placeholder='Trigger' value={this.props.power.action.trigger} onChange={value => this.props.changeValue(this.props.power.action as PowerAction, 'trigger', value)} /> : null}
				{this.props.power.action !== null ? <EnumField
					label='Sustain Action'
					options={[ActionType.None, ActionType.Standard, ActionType.Move, ActionType.Minor, ActionType.Reaction, ActionType.Interrupt, ActionType.Opportunity, ActionType.Free]}
					value={this.props.power.action.sustainAction}
					format={value => EnumHelper.actionType(value as ActionType)}
					onChange={value => this.props.changeValue(this.props.power.action as PowerAction, 'sustainAction', value)}
				/> : null}
				{this.props.power.action !== null ? <EnumField
					label='Use'
					options={[UseType.Encounter, UseType.AtWill, UseType.Basic, UseType.Daily]}
					value={this.props.power.action.use}
					format={value => EnumHelper.useType(value as UseType)}
					onChange={value => this.props.changeValue(this.props.power.action as PowerAction, 'use', value)}
				/> : null}
				{this.props.power.action !== null ? <StringField label='Recharge' placeholder='Recharge' value={this.props.power.action.recharge} onChange={value => this.props.changeValue(this.props.power.attack as PowerAttack, 'recharge', value)} /> : null}
				<BooleanField label='Attack' value={this.props.power.attack !== null} onChange={value => this.props.changeValue(this.props.power, 'attack', value ? Factory.createPowerAttack() : null)} />
				{this.props.power.attack !== null ? <StringField label='Range' placeholder='Range' value={this.props.power.range} onChange={value => this.props.changeValue(this.props.power, 'range', value)} /> : null}
				{this.props.power.attack !== null ? <NumberField label='Bonus' value={this.props.power.attack.bonus} onChange={value => this.props.changeValue(this.props.power.attack as PowerAttack, 'bonus', value)} /> : null}
				{this.props.power.attack !== null ? <EnumField
					label='Defence'
					options={[DefenceType.AC, DefenceType.Fortitude, DefenceType.Reflex, DefenceType.Will]}
					value={this.props.power.attack.defence}
					format={value => EnumHelper.defenceType(value as DefenceType)}
					onChange={value => this.props.changeValue(this.props.power.attack as PowerAttack, 'defence', value)}
				/> : null}
				<StringField label='Details' placeholder='Details' multiLine={true} value={this.props.power.details} onChange={value => this.props.changeValue(this.props.power, 'details', value)} />
			</div>
		);
	};
};

interface AuraPanelProps {
	aura: Aura
};

interface AuraPanelState {
};

export class AuraPanel extends Component<AuraPanelProps, AuraPanelState> {
	constructor(props: AuraPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		// TODO: Set the icon (aura)
		const icon = null;

		let keywords = '';
		if (this.props.aura.keywords) {
			keywords = `(${this.props.aura.keywords})`;
		}

		let details = sanitiseText(this.props.aura.details);
		if (!details.toLowerCase().startsWith('aura')) {
			details = 'Aura ' + details;
		}

		return (
			<div className='power-panel'>
				<div className='top-line'>
					{icon} <b>{this.props.aura.name}</b> {keywords}
				</div>
				<div className='content'>
					<div>{details}</div>
				</div>
			</div>
		);
	};
};

interface AuraEditorPanelProps {
	aura: Aura;
	changeValue: (source: object, field: string, value: any) => void;
};

interface AuraEditorPanelState {
};

export class AuraEditorPanel extends Component<AuraEditorPanelProps, AuraEditorPanelState> {
	constructor(props: AuraEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='aura-editor-panel'>
				<StringField label='Name' placeholder='Name' value={this.props.aura.name} onChange={value => this.props.changeValue(this.props.aura, 'name', value)} />
				<StringField label='Keywords' placeholder='Keywords' value={this.props.aura.keywords} onChange={value => this.props.changeValue(this.props.aura, 'keywords', value)} />
				<StringField label='Details' placeholder='Details' multiLine={true} value={this.props.aura.details} onChange={value => this.props.changeValue(this.props.aura, 'details', value)} />
			</div>
		);
	};
};

interface RegenerationPanelProps {
	regeneration: Regeneration
};

interface RegenerationPanelState {
};

export class RegenerationPanel extends Component<RegenerationPanelProps, RegenerationPanelState> {
	constructor(props: RegenerationPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='power-panel'>
				<div className='top-line'>
					<b>Regeneration {this.props.regeneration.value}</b> (healing)
				</div>
				<div className='content'>
					<div>{sanitiseText(this.props.regeneration.details)}</div>
				</div>
			</div>
		);
	};
};

interface RegenerationEditorPanelProps {
	regeneration: Regeneration;
	changeValue: (source: object, field: string, value: any) => void;
};

interface RegenerationEditorPanelState {
};

export class RegenerationEditorPanel extends Component<RegenerationEditorPanelProps, RegenerationEditorPanelState> {
	constructor(props: RegenerationEditorPanelProps) {
		super(props);
		this.state = {
		};
	};

	render = () => {
		return (
			<div className='regeneration-editor-panel'>
				<NumberField label='Value' value={this.props.regeneration.value} validate={value => value >= 0} onChange={value => this.props.changeValue(this.props.regeneration, 'value', value)} />
				<StringField label='Details' placeholder='Details' multiLine={true} value={this.props.regeneration.details} onChange={value => this.props.changeValue(this.props.regeneration, 'details', value)} />
			</div>
		);
	};
};
