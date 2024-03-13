import { Divider, Flex, Tag } from 'antd';

import { ActionType, DefenceType, PowerCategory, UsageType } from '../../../enums/enums';

import { Factory } from '../../../logic/factory';

import { Aura, Regeneration } from '../../../models/monster';
import { Power, PowerAction, PowerAttack } from '../../../models/power';

import { EnumHelper } from '../../../utils/enum-helper';
import { Format } from '../../../utils/format';

import { BooleanField, EnumField, NumberField, StringField, MultilineField } from '../../fields';

import './power-panel.scss';

import iconMelee from '../../../assets/power-icons/melee.png';
import iconMeleeBasic from '../../../assets/power-icons/melee-basic.png';
import iconRanged from '../../../assets/power-icons/ranged.png';
import iconRangedBasic from '../../../assets/power-icons/ranged-basic.png';
import iconBurst from '../../../assets/power-icons/burst.png';
import iconBurstBasic from '../../../assets/power-icons/burst-basic.png';
import iconBlast from '../../../assets/power-icons/blast.png';
import iconBlastBasic from '../../../assets/power-icons/blast-basic.png';

interface PowerPanelProps {
	power: Power
}

const PowerPanel = (props: PowerPanelProps) => {
	let icon = null;
	if (props.power.attack) {
		const isBasic = props.power.action && (props.power.action.use === UsageType.Basic);
		let src = '';
		let desc = '';
		if (props.power.range.toLowerCase().includes('blast')) {
			src = isBasic ? iconBlastBasic : iconBlast;
			desc = isBasic ? 'Blast Basic Attack' : 'Blast Attack';
		} else if (props.power.range.toLowerCase().includes('burst')) {
			src = isBasic ? iconBurstBasic : iconBurst;
			desc = isBasic ? 'Burst Basic Attack' : 'Burst Attack';
		} else if (props.power.range.toLowerCase().includes('ranged')) {
			src = isBasic ? iconRangedBasic : iconRanged;
			desc = isBasic ? 'Ranged Basic Attack' : 'Ranged Attack';
		} else {
			src = isBasic ? iconMeleeBasic : iconMelee;
			desc = isBasic ? 'Melee Basic Attack' : 'Melee Attack';
		}
		icon = (
			<img src={src} alt={desc} />
		);
	}

	let usage = null;
	let sustain = null;
	if (props.power.action) {
		if (props.power.action.recharge) {
			usage = <span>◆ {Format.sanitize(props.power.action.recharge)}</span>;
		} else {
			switch (props.power.action.use) {
			case UsageType.Encounter:
			case UsageType.Daily:
				usage = <span>◆ {EnumHelper.usageType(props.power.action.use)}</span>;
				break;
			}
		}
		if (props.power.action.sustainAction !== ActionType.None) {
			sustain = <span>◆ Sustain: {EnumHelper.actionType(props.power.action.sustainAction)}</span>;
		}
	}

	let keywords = null;
	if (props.power.keywords) {
		keywords = (
			<div>
				{
					props.power.keywords
						.split(', ')
						.map((keyword, n) => <Tag key={n}>{keyword.trim()}</Tag>)
				}
			</div>
		);
	}

	let requirement = null;
	if (props.power.condition) {
		requirement = (
			<div><i>Requirement</i>: {Format.sanitize(props.power.condition)}</div>
		);
	}

	let trigger = null;
	if (props.power.action && props.power.action.trigger) {
		trigger = (
			<div><i>Trigger</i>: {Format.sanitize(props.power.action.trigger)}</div>
		);
	}

	let attack = null;
	if (props.power.attack) {
		let start = 'Attack';
		if (props.power.action) {
			if ((props.power.action.action === ActionType.Reaction) || (props.power.action.action === ActionType.Interrupt) || (props.power.action.action === ActionType.Opportunity)) {
				start = `Attack (${EnumHelper.actionType(props.power.action.action)})`;
			}
		}
		let roll = `${props.power.attack.bonus >= 0 ? '+' : ''}${props.power.attack.bonus} vs ${EnumHelper.defenceType(props.power.attack.defence)}`;
		if (props.power.range) {
			roll = props.power.range + '; ' + roll;
		}
		attack = (
			<div><i>{start}</i>: {roll}</div>
		);
	} else {
		if (props.power.action) {
			if ((props.power.action.action === ActionType.Reaction) || (props.power.action.action === ActionType.Interrupt) || (props.power.action.action === ActionType.Opportunity)) {
				attack = (
					<div><i>{EnumHelper.actionType(props.power.action.action)}</i></div>
				);
			}
		}
	}

	return (
		<div className='power-panel'>
			<Flex gap='small' className='top-line'>
				<div className='power-icon'>{icon}</div>
				<div className='power-name'>{props.power.name || 'Unnamed Power'}</div>
				{usage}
				{sustain}
				{keywords}
			</Flex>
			<div className='description'>
				<i>{Format.sanitize(props.power.description)}</i>
			</div>
			<div className='content'>
				{requirement}
				{trigger}
				{attack}
				<div>{Format.sanitize(props.power.details || 'No details')}</div>
			</div>
		</div>
	);
}

interface PowerEditorPanelProps {
	power: Power;
	category: PowerCategory;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const PowerEditorPanel = (props: PowerEditorPanelProps) => {
	const getAction = () => {
		if (!props.power.action) {
			return null;
		}

		return (
			<div>
				{
					props.category === PowerCategory.Triggered ?
						<EnumField
							label='Action Type'
							options={[ ActionType.Reaction, ActionType.Interrupt, ActionType.Opportunity ]}
							value={props.power.action.action}
							format={value => EnumHelper.actionType(value as ActionType)}
							isDisabled={() => false}
							onChange={value => props.changeValue(props.power.action as PowerAction, 'action', value)}
						/>
						: null
				}
				{
					props.category === PowerCategory.Triggered ?
						<StringField label='Trigger' value={props.power.action.trigger} onChange={value => props.changeValue(props.power.action as PowerAction, 'trigger', value)} />
						: null
				}
				<EnumField
					label='Sustain Action'
					options={[ ActionType.None, ActionType.Standard, ActionType.Move, ActionType.Minor, ActionType.Reaction, ActionType.Interrupt, ActionType.Opportunity, ActionType.Free ]}
					value={props.power.action.sustainAction}
					format={value => EnumHelper.actionType(value as ActionType)}
					isDisabled={() => false}
					onChange={value => props.changeValue(props.power.action as PowerAction, 'sustainAction', value)}
				/>
				<Divider />
				<EnumField
					label='Use'
					options={[ UsageType.Basic, UsageType.AtWill, UsageType.Encounter, UsageType.Daily ]}
					value={props.power.action.use}
					disabled={props.power.action.recharge !== ''}
					format={value => EnumHelper.usageType(value as UsageType)}
					isDisabled={() => false}
					onChange={value => props.changeValue(props.power.action as PowerAction, 'use', value)}
				/>
				<StringField label='Recharge' value={props.power.action.recharge} onChange={value => props.changeValue(props.power.action as PowerAction, 'recharge', value)} />
			</div>
		);
	};

	const getAttack = () => {
		return (
			<div>
				<BooleanField label='Attack' value={props.power.attack !== null} onChange={value => props.changeValue(props.power, 'attack', value ? Factory.createPowerAttack() : null)} />
				{
					props.power.attack !== null ?
						<StringField label='Range' value={props.power.range} onChange={value => props.changeValue(props.power, 'range', value)} />
						: null
				}
				{
					props.power.attack !== null ?
						<NumberField label='Bonus' value={props.power.attack.bonus} onChange={value => props.changeValue(props.power.attack as PowerAttack, 'bonus', value)} />
						: null
				}
				{
					props.power.attack !== null ?
						<EnumField
							label='Defence'
							options={[ DefenceType.AC, DefenceType.Fortitude, DefenceType.Reflex, DefenceType.Will ]}
							value={props.power.attack.defence}
							format={value => EnumHelper.defenceType(value as DefenceType)}
							isDisabled={() => false}
							onChange={value => props.changeValue(props.power.attack as PowerAttack, 'defence', value)}
						/>
						: null
				}
			</div>
		);
	};

	return (
		<div className='power-editor-panel'>
			<StringField label='Name' value={props.power.name} onChange={value => props.changeValue(props.power, 'name', value)} />
			<StringField label='Keywords' value={props.power.keywords} onChange={value => props.changeValue(props.power, 'keywords', value)} />
			<StringField label='Description' value={props.power.description} onChange={value => props.changeValue(props.power, 'description', value)} />
			<StringField label='Requirements' value={props.power.condition} onChange={value => props.changeValue(props.power, 'condition', value)} />
			<Divider />
			{getAction()}
			<Divider />
			{getAttack()}
			<Divider />
			<MultilineField label='Details' value={props.power.details} onChange={value => props.changeValue(props.power, 'details', value)} />
		</div>
	);
}

interface AuraPanelProps {
	aura: Aura
}

const AuraPanel = (props: AuraPanelProps) => {
	let keywords = null;
	if (props.aura.keywords) {
		keywords = <Tag>{props.aura.keywords}</Tag>;
	}

	let details = Format.sanitize(props.aura.details);
	if (!details.toLowerCase().startsWith('aura')) {
		details = 'Aura ' + details;
	}

	return (
		<div className='power-panel'>
			<Flex gap='small' className='top-line'>
				<div className='power-icon'></div>
				<div className='power-name'>{props.aura.name}</div>
				{keywords}
			</Flex>
			<div className='content'>
				<div>{details}</div>
			</div>
		</div>
	);
}

interface AuraEditorPanelProps {
	aura: Aura;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const AuraEditorPanel = (props: AuraEditorPanelProps) => {
	return (
		<div className='aura-editor-panel'>
			<StringField label='Name' value={props.aura.name} onChange={value => props.changeValue(props.aura, 'name', value)} />
			<StringField label='Keywords' value={props.aura.keywords} onChange={value => props.changeValue(props.aura, 'keywords', value)} />
			<MultilineField label='Details' value={props.aura.details} onChange={value => props.changeValue(props.aura, 'details', value)} />
		</div>
	);
}

interface RegenerationPanelProps {
	regeneration: Regeneration
}

const RegenerationPanel = (props: RegenerationPanelProps) => {
	return (
		<div className='power-panel'>
			<Flex gap='small' className='top-line'>
				<div className='power-icon'></div>
				<div className='power-name'>Regeneration {props.regeneration.value}</div>
				<Tag>Healing</Tag>
			</Flex>
			<div className='content'>
				<div>{Format.sanitize(props.regeneration.details)}</div>
			</div>
		</div>
	);
}

interface RegenerationEditorPanelProps {
	regeneration: Regeneration;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const RegenerationEditorPanel = (props: RegenerationEditorPanelProps) => {
	return (
		<div className='regeneration-editor-panel'>
			<NumberField label='Value' value={props.regeneration.value} validate={value => value >= 0} onChange={value => props.changeValue(props.regeneration, 'value', value)} />
			<MultilineField label='Details' value={props.regeneration.details} onChange={value => props.changeValue(props.regeneration, 'details', value)} />
		</div>
	);
}

export {
	PowerPanel,
	PowerEditorPanel,
	AuraPanel,
	AuraEditorPanel,
	RegenerationPanel,
	RegenerationEditorPanel
};
