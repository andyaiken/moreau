import { Slider, Button, Divider } from 'antd';

import { RoleType, RoleFlag, MonsterSize, MonsterOrigin, MonsterType } from '../../../enums/enums';

import { Factory } from '../../../logic/factory';

import { MonsterFilter } from '../../../models/monster-filter';

import { EnumHelper } from '../../../utils/enum-helper';

import { InfoPanel } from '..';
import { Expander } from '../../controls';
import { StringField, EnumField, BooleanField } from '../../fields';

import './monster-filter-panel.scss';

interface Props {
	filter: MonsterFilter
	onChange: (filter: MonsterFilter) => void;
};

const MonsterFilterPanel = (props: Props) => {
	const setFilterText = (value: string) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.text = value;
		props.onChange(copy);
	};

	const setFilterLevel = (value: number[]) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.level = value;
		props.onChange(copy);
	};

	const setFilterRoleType = (value: RoleType) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.roleType = value;
		props.onChange(copy);
	};

	const setFilterRoleFlag = (value: RoleFlag) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.roleFlag = value;
		props.onChange(copy);
	};

	const setFilterLeader = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.roleLeader = value;
		props.onChange(copy);
	};

	const setFilterNonLeader = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.roleNonLeader = value;
		props.onChange(copy);
	};

	const setFilterMonsterSize = (value: MonsterSize) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.monsterSize = value;
		props.onChange(copy);
	};

	const setFilterMonsterOrigin = (value: MonsterOrigin) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.monsterOrigin = value;
		props.onChange(copy);
	};

	const setFilterMonsterType = (value: MonsterType) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.monsterType = value;
		props.onChange(copy);
	};

	const setFilterOfficial = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.showOfficial = value;
		props.onChange(copy);
	};

	const setFilterHomebrew = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(props.filter)) as MonsterFilter;
		copy.showHomebrew = value;
		props.onChange(copy);
	};

	const resetFilter = () => {
		props.onChange(Factory.createMonsterFilter());
	};

	const getFilterIsActive = () => {
		if (props.filter.text) {
			return true;
		}

		if (Math.min(...props.filter.level) !== 1) {
			return true;
		}

		if (Math.max(...props.filter.level) !== 5) {
			return true;
		}

		if (props.filter.roleType !== RoleType.Any) {
			return true;
		}

		if (props.filter.roleFlag !== RoleFlag.Any) {
			return true;
		}

		if (!props.filter.roleLeader) {
			return true;
		}

		if (!props.filter.roleNonLeader) {
			return true;
		}

		if (props.filter.monsterSize !== MonsterSize.Any) {
			return true;
		}

		if (props.filter.monsterOrigin !== MonsterOrigin.Any) {
			return true;
		}

		if (props.filter.monsterType !== MonsterType.Any) {
			return true;
		}

		if (!props.filter.showOfficial) {
			return true;
		}

		if (!props.filter.showHomebrew) {
			return true;
		}

		return false;
	}

	return (
		<Expander title='Filter Monsters'>
			<StringField placeholder='Name, keywords, etc' value={props.filter.text} onChange={value => setFilterText(value)} />
			<Divider />
			<div className='filter-level'>
				<InfoPanel content='Show Levels' info={Math.min(...props.filter.level) + ' to ' + Math.max(...props.filter.level)} />
				<div className='filter-level-slider'>
					<Slider
						range={{ draggableTrack: true }}
						min={1}
						max={40}
						value={props.filter.level}
						onChange={(value: number[]) => setFilterLevel(value)}
					/>
				</div>
			</div>
			<Divider />
			<EnumField
				label='Role'
				options={[RoleType.Any, RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier]}
				value={props.filter.roleType}
				format={value => EnumHelper.roleType(value as RoleType)}
				isDisabled={() => false}
				onChange={value => setFilterRoleType(value as RoleType)}
			/>
			<EnumField
				label='Modifier'
				options={[RoleFlag.Any, RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion]}
				value={props.filter.roleFlag}
				format={value => EnumHelper.roleFlag(value as RoleFlag)}
				isDisabled={() => false}
				onChange={value => setFilterRoleFlag(value as RoleFlag)}
			/>
			<Divider />
			<BooleanField label='Show Leaders' value={props.filter.roleLeader} onChange={value => setFilterLeader(value)} />
			<BooleanField label='Show Non-Leaders' value={props.filter.roleNonLeader} onChange={value => setFilterNonLeader(value)} />
			<Divider />
			<EnumField
				label='Size'
				options={[MonsterSize.Any, MonsterSize.Tiny, MonsterSize.Small, MonsterSize.Medium, MonsterSize.Large, MonsterSize.Huge, MonsterSize.Gargantuan]}
				value={props.filter.monsterSize}
				format={value => EnumHelper.monsterSize(value as MonsterSize)}
				isDisabled={() => false}
				onChange={value => setFilterMonsterSize(value as MonsterSize)}
			/>
			<EnumField
				label='Origin'
				options={[MonsterOrigin.Any, MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow]}
				value={props.filter.monsterOrigin}
				format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
				isDisabled={() => false}
				onChange={value => setFilterMonsterOrigin(value as MonsterOrigin)}
			/>
			<EnumField
				label='Type'
				options={[MonsterType.Any, MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast]}
				value={props.filter.monsterType}
				format={value => EnumHelper.monsterType(value as MonsterType)}
				isDisabled={() => false}
				onChange={value => setFilterMonsterType(value as MonsterType)}
			/>
			<Divider />
			<BooleanField label='Show Official Monsters' value={props.filter.showOfficial} onChange={value => setFilterOfficial(value)} />
			<BooleanField label='Show Homebrew Monsters' value={props.filter.showHomebrew} onChange={value => setFilterHomebrew(value)} />
			<Divider />
			<Button block={true} disabled={!getFilterIsActive()} onClick={resetFilter}>Reset Filter</Button>
		</Expander>
	);
}

export { MonsterFilterPanel };
