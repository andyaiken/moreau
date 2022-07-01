import { AppBar, Backdrop, Button, Drawer, MenuItem, Select, Slider, Stack, Switch, Toolbar, Typography } from '@mui/material';
import { Component } from 'react';

import { StatBlock } from '../stat-block';
import { TextField } from '../text-field';

import { monsters } from '../../data/monsters';

import { EnumHelper, MonsterOrigin, MonsterSize, MonsterType, RoleFlag, RoleType } from '../../models/enums';
import { Monster } from '../../models/monster';

import { MonsterUtils } from '../../utils/monster-utils';
import { GeneralUtils } from '../../utils/general-utils';

import './moreau.css';
import { InfoPanel } from '../info-panel';

class MonsterFilter {

	text: string = '';
	level: number[] = [1, 40];
	roleType: RoleType = RoleType.Any;
	roleFlag: RoleFlag = RoleFlag.Any;
	roleLeader: boolean = false;
	monsterSize: MonsterSize = MonsterSize.Any;
	monsterOrigin: MonsterOrigin = MonsterOrigin.Any;
	monsterType: MonsterType = MonsterType.Any;

	isActive = () => {
		if (this.text) {
			return true;
		}

		if (Math.min(...this.level) !== 1) {
			return true;
		}

		if (Math.max(...this.level) !== 40) {
			return true;
		}

		if (this.roleType !== RoleType.Any) {
			return true;
		}

		if (this.roleFlag !== RoleFlag.Any) {
			return true;
		}

		if (this.roleLeader) {
			return true;
		}

		if (this.monsterSize !== MonsterSize.Any) {
			return true;
		}

		if (this.monsterOrigin !== MonsterOrigin.Any) {
			return true;
		}

		if (this.monsterType !== MonsterType.Any) {
			return true;
		}

		return false;
	};

	reset = () => {
		this.text = '';
		this.level = [1, 40];
		this.roleType = RoleType.Any;
		this.roleFlag = RoleFlag.Any;
		this.roleLeader = false;
		this.monsterSize = MonsterSize.Any;
		this.monsterOrigin = MonsterOrigin.Any;
		this.monsterType = MonsterType.Any;
	};

	execute = (monsters: Monster[]) => {
		return monsters
			.filter(m => {
				if (!this.text) {
					return true;
				}

				if (m.name.toLowerCase().includes(this.text.toLowerCase())) {
					return true;
				}

				if (m.category.toLowerCase().includes(this.text.toLowerCase())) {
					return true;
				}

				if (m.keywords.toLowerCase().includes(this.text.toLowerCase())) {
					return true;
				}

				return false;
			})
			.filter(m => {
				const min = Math.min(...this.level);
				const max = Math.max(...this.level);
				return (m.level >= min) && (m.level <= max);
			})
			.filter(m => {
				if (this.roleType === RoleType.Any) {
					return true;
				}

				return m.role.type === this.roleType;
			})
			.filter(m => {
				if (this.roleFlag === RoleFlag.Any) {
					return true;
				}

				return m.role.flag === this.roleFlag;
			})
			.filter(m => {
				if (this.roleLeader && !m.role.leader) {
					return false;
				}

				return true;
			})
			.filter(m => {
				if (this.monsterSize === MonsterSize.Any) {
					return true;
				}

				return m.size === this.monsterSize;
			})
			.filter(m => {
				if (this.monsterOrigin === MonsterOrigin.Any) {
					return true;
				}

				return m.origin === this.monsterOrigin;
			})
			.filter(m => {
				if (this.monsterType === MonsterType.Any) {
					return true;
				}

				return m.type === this.monsterType;
			});
	};
}

interface Props {
};

interface State {
	monsters: Monster[];
	filter: MonsterFilter;
	selectedCategory: string | null;
	selectedMonster: Monster | null;
};

export class Moreau extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			monsters: monsters,
			filter: new MonsterFilter(),
			selectedCategory: null,
			selectedMonster: null
		};
	};

	setFilterText = (value: string) => {
		const filter = this.state.filter;
		filter.text = value;

		this.setState({
			filter: filter
		});
	};

	setFilterLevel = (value: number[]) => {
		const filter = this.state.filter;
		filter.level = value;

		this.setState({
			filter: filter
		});
	};

	setFilterRoleType = (value: RoleType) => {
		const filter = this.state.filter;
		filter.roleType = value;

		this.setState({
			filter: filter
		});
	};

	setFilterRoleFlag = (value: RoleFlag) => {
		const filter = this.state.filter;
		filter.roleFlag = value;

		this.setState({
			filter: filter
		});
	};

	setFilterLeader = (value: boolean) => {
		const filter = this.state.filter;
		filter.roleLeader = value;

		this.setState({
			filter: filter
		});
	};

	setFilterMonsterSize = (value: MonsterSize) => {
		const filter = this.state.filter;
		filter.monsterSize = value;

		this.setState({
			filter: filter
		});
	};

	setFilterMonsterOrigin = (value: MonsterOrigin) => {
		const filter = this.state.filter;
		filter.monsterOrigin = value;

		this.setState({
			filter: filter
		});
	};

	setFilterMonsterType = (value: MonsterType) => {
		const filter = this.state.filter;
		filter.monsterType = value;

		this.setState({
			filter: filter
		});
	};

	resetFilter = () => {
		const filter = this.state.filter;
		filter.reset();

		this.setState({
			filter: filter
		});
	};

	setSelectedCategory = (category: string) => {
		this.setState({
			selectedCategory: category
		});
	};

	setSelectedMonster = (monster: Monster | null) => {
		this.setState({
			selectedMonster: monster
		});
	};

	render = () => {
		const filteredMonsters = this.state.filter.execute(this.state.monsters);
		const monsters = GeneralUtils.sort(filteredMonsters.filter(m => m.category === this.state.selectedCategory));

		const groupList = GeneralUtils.distinct(filteredMonsters.map(m => m.category))
			.sort()
			.map(category => {
				const count = filteredMonsters.filter(m => m.category === category).length;
				return (
					<InfoPanel
						key={category}
						content={category || 'Uncategorised'}
						info={count}
						selected={category === this.state.selectedCategory}
						onClick={() => this.setSelectedCategory(category)}
					/>
				);
			});

		let monsterList: React.ReactNode = monsters.map(m => (
			<InfoPanel
				key={m.id}
				content={(
					<Typography variant='h6' noWrap={true}>{m.name}</Typography>
				)}
				info={(
					<div>
						<div>Level {m.level} {MonsterUtils.getRole(m.role)}</div>
						<div>{MonsterUtils.getPhenotype(m)}</div>
					</div>
				)}
				onClick={() => this.setSelectedMonster(m)}
			/>
		));
		if (this.state.selectedCategory && (monsters.length === 0)) {
			monsterList = (
				<div className='empty'>There are no monsters in this category that match the filter.</div>
			);
		}

		let monsterColumnHeading = null;
		if (this.state.selectedCategory === null) {
			monsterColumnHeading = (
				<div className='empty'>Select a category from the list</div>
			);
		} else {
			monsterColumnHeading = (
				<div className='category-header'>{this.state.selectedCategory || 'Uncategorised'}</div>
			);
		}

		let drawer = null;
		if (this.state.selectedMonster) {
			drawer = (
				<div className='drawer-content'>
					<StatBlock monster={this.state.selectedMonster as Monster} />
				</div>
			);
		}

		return (
			<div className='moreau'>
				<AppBar position='sticky'>
					<Toolbar className='toolbar'>
						<Typography variant='h6' noWrap={true}>Moreau</Typography>
					</Toolbar>
				</AppBar>
				<div className='page-content'>
					<div className='filter-column'>
						<Stack spacing={1}>
							<TextField placeholder='Search...' text={this.state.filter.text} onChange={value => this.setFilterText(value)} />
							<div>Show Levels {Math.min(...this.state.filter.level)} to {Math.max(...this.state.filter.level)}</div>
							<Slider min={1} max={40} value={this.state.filter.level} onChange={(e, value) => this.setFilterLevel(value as number[])} />
							<Select value={this.state.filter.roleType} onChange={e => this.setFilterRoleType(e.target.value as RoleType)}>
								<MenuItem value={RoleType.Any}>Any Role</MenuItem>
								<MenuItem value={RoleType.Artillery}>{EnumHelper.roleType(RoleType.Artillery)}</MenuItem>
								<MenuItem value={RoleType.Brute}>{EnumHelper.roleType(RoleType.Brute)}</MenuItem>
								<MenuItem value={RoleType.Controller}>{EnumHelper.roleType(RoleType.Controller)}</MenuItem>
								<MenuItem value={RoleType.Lurker}>{EnumHelper.roleType(RoleType.Lurker)}</MenuItem>
								<MenuItem value={RoleType.Skirmisher}>{EnumHelper.roleType(RoleType.Skirmisher)}</MenuItem>
								<MenuItem value={RoleType.Soldier}>{EnumHelper.roleType(RoleType.Soldier)}</MenuItem>
							</Select>
							<Select value={this.state.filter.roleFlag} onChange={e => this.setFilterRoleFlag(e.target.value as RoleFlag)}>
								<MenuItem value={RoleFlag.Any}>Any Role Modifier</MenuItem>
								<MenuItem value={RoleFlag.Standard}>{EnumHelper.roleFlag(RoleFlag.Standard)}</MenuItem>
								<MenuItem value={RoleFlag.Elite}>{EnumHelper.roleFlag(RoleFlag.Elite)}</MenuItem>
								<MenuItem value={RoleFlag.Solo}>{EnumHelper.roleFlag(RoleFlag.Solo)}</MenuItem>
								<MenuItem value={RoleFlag.Minion}>{EnumHelper.roleFlag(RoleFlag.Minion)}</MenuItem>
							</Select>
							<div className='filter-control-row'>
								<div>Leaders Only</div>
								<Switch checked={this.state.filter.roleLeader} onChange={e => this.setFilterLeader(e.target.checked)} />
							</div>
							<Select value={this.state.filter.monsterSize} onChange={e => this.setFilterMonsterSize(e.target.value as MonsterSize)}>
								<MenuItem value={MonsterSize.Any}>Any Size</MenuItem>
								<MenuItem value={MonsterSize.Tiny}>{EnumHelper.monsterSize(MonsterSize.Tiny)}</MenuItem>
								<MenuItem value={MonsterSize.Small}>{EnumHelper.monsterSize(MonsterSize.Small)}</MenuItem>
								<MenuItem value={MonsterSize.Medium}>{EnumHelper.monsterSize(MonsterSize.Medium)}</MenuItem>
								<MenuItem value={MonsterSize.Large}>{EnumHelper.monsterSize(MonsterSize.Large)}</MenuItem>
								<MenuItem value={MonsterSize.Huge}>{EnumHelper.monsterSize(MonsterSize.Huge)}</MenuItem>
								<MenuItem value={MonsterSize.Gargantuan}>{EnumHelper.monsterSize(MonsterSize.Gargantuan)}</MenuItem>
							</Select>
							<Select value={this.state.filter.monsterOrigin} onChange={e => this.setFilterMonsterOrigin(e.target.value as MonsterOrigin)}>
								<MenuItem value={MonsterOrigin.Any}>Any Origin</MenuItem>
								<MenuItem value={MonsterOrigin.Aberrant}>{EnumHelper.monsterOrigin(MonsterOrigin.Aberrant)}</MenuItem>
								<MenuItem value={MonsterOrigin.Elemental}>{EnumHelper.monsterOrigin(MonsterOrigin.Elemental)}</MenuItem>
								<MenuItem value={MonsterOrigin.Fey}>{EnumHelper.monsterOrigin(MonsterOrigin.Fey)}</MenuItem>
								<MenuItem value={MonsterOrigin.Immortal}>{EnumHelper.monsterOrigin(MonsterOrigin.Immortal)}</MenuItem>
								<MenuItem value={MonsterOrigin.Natural}>{EnumHelper.monsterOrigin(MonsterOrigin.Natural)}</MenuItem>
								<MenuItem value={MonsterOrigin.Shadow}>{EnumHelper.monsterOrigin(MonsterOrigin.Shadow)}</MenuItem>
							</Select>
							<Select value={this.state.filter.monsterType} onChange={e => this.setFilterMonsterType(e.target.value as MonsterType)}>
								<MenuItem value={MonsterType.Any}>Any Type</MenuItem>
								<MenuItem value={MonsterType.Animate}>{EnumHelper.monsterType(MonsterType.Animate)}</MenuItem>
								<MenuItem value={MonsterType.Beast}>{EnumHelper.monsterType(MonsterType.Beast)}</MenuItem>
								<MenuItem value={MonsterType.Humanoid}>{EnumHelper.monsterType(MonsterType.Humanoid)}</MenuItem>
								<MenuItem value={MonsterType.MagicalBeast}>{EnumHelper.monsterType(MonsterType.MagicalBeast)}</MenuItem>
							</Select>
							<Button variant='outlined' fullWidth={true} disabled={!this.state.filter.isActive()} onClick={() => this.resetFilter()}>Reset Filter</Button>
						</Stack>
					</div>
					<div className='group-list'>
						<Stack spacing={1}>{groupList}</Stack>
					</div>
					<div className='monster-list'>
						{monsterColumnHeading}
						<Stack spacing={1}>{monsterList}</Stack>
					</div>
				</div>
				<Backdrop open={this.state.selectedMonster !== null} onClick={() => this.setSelectedMonster(null)} />
				<Drawer anchor='right' variant='persistent' open={this.state.selectedMonster !== null}>
					{drawer}
				</Drawer>
			</div>
		);
	};
};
