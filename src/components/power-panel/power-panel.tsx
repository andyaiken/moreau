import { Component } from 'react';

import { ActionType, EnumHelper } from '../../models/enums';
import { Aura, Regeneration } from '../../models/monster';
import { Power } from '../../models/power';

import './power-panel.css';

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
		// TODO: Set the icon (melee attack, ranged attack, melee basic attack, ranged basic attack, close attack, area attack)
		const icon = null;

		let keywords = '';
		if (this.props.power.keywords) {
			keywords = `(${this.props.power.keywords})`;
		}

		let usage = '';
		if (this.props.power.action) {
			if (this.props.power.action.recharge) {
				usage = '◆ ' + sanitiseText(this.props.power.action.recharge);
			} else {
				usage = '◆ ' + EnumHelper.useType(this.props.power.action.use);
			}
			if (this.props.power.action.sustainAction !== ActionType.None) {
				usage += ' ◆ Sustain: ' + EnumHelper.actionType(this.props.power.action.sustainAction);
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
					{icon} <b>{this.props.power.name}</b> {keywords} {usage}
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
