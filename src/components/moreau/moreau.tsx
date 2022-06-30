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

interface Props {
};

interface State {
	monsters: Monster[];
	filterText: string;
	filterLevel: number[];
	filterRoleType: RoleType;
	filterRoleFlag: RoleFlag;
	filterLeader: boolean;
	filterMonsterSize: MonsterSize;
	filterMonsterOrigin: MonsterOrigin,
	filterMonsterType: MonsterType,
	selectedCategory: string | null;
	selectedMonster: Monster | null;
};

export class Moreau extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			monsters: monsters,
			filterText: '',
			filterLevel: [1, 40],
			filterRoleType: RoleType.Any,
			filterRoleFlag: RoleFlag.Any,
			filterLeader: false,
			filterMonsterSize: MonsterSize.Any,
			filterMonsterOrigin: MonsterOrigin.Any,
			filterMonsterType: MonsterType.Any,
			selectedCategory: null,
			selectedMonster: null
		};
	};

	setFilterText = (text: string) => {
		this.setState({
			filterText: text
		});
	};

	setFilterLevel = (value: number[]) => {
		this.setState({
			filterLevel: value
		});
	};

	setFilterRoleType = (type: RoleType) => {
		this.setState({
			filterRoleType: type
		});
	};

	setFilterRoleFlag = (flag: RoleFlag) => {
		this.setState({
			filterRoleFlag: flag
		});
	};

	setFilterLeader = (value: boolean) => {
		this.setState({
			filterLeader: value
		});
	};

	setFilterMonsterSize = (size: MonsterSize) => {
		this.setState({
			filterMonsterSize: size
		});
	};

	setFilterMonsterOrigin = (origin: MonsterOrigin) => {
		this.setState({
			filterMonsterOrigin: origin
		});
	};

	setFilterMonsterType = (type: MonsterType) => {
		this.setState({
			filterMonsterType: type
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
		const filteredMonsters = this.state.monsters
			.filter(m => {
				if (!this.state.filterText) {
					return true;
				}

				if (m.name.toLowerCase().includes(this.state.filterText.toLowerCase())) {
					return true;
				}

				if (m.category.toLowerCase().includes(this.state.filterText.toLowerCase())) {
					return true;
				}

				if (m.keywords.toLowerCase().includes(this.state.filterText.toLowerCase())) {
					return true;
				}

				return false;
			})
			.filter(m => {
				const min = Math.min(...this.state.filterLevel);
				const max = Math.max(...this.state.filterLevel);
				return (m.level >= min) && (m.level <= max);
			})
			.filter(m => {
				if (this.state.filterRoleType === RoleType.Any) {
					return true;
				}

				return m.role.type === this.state.filterRoleType;
			})
			.filter(m => {
				if (this.state.filterRoleFlag === RoleFlag.Any) {
					return true;
				}

				return m.role.flag === this.state.filterRoleFlag;
			})
			.filter(m => {
				if (this.state.filterLeader && !m.role.leader) {
					return false;
				}

				return true;
			})
			.filter(m => {
				if (this.state.filterMonsterSize === MonsterSize.Any) {
					return true;
				}

				return m.size === this.state.filterMonsterSize;
			})
			.filter(m => {
				if (this.state.filterMonsterOrigin === MonsterOrigin.Any) {
					return true;
				}

				return m.origin === this.state.filterMonsterOrigin;
			})
			.filter(m => {
				if (this.state.filterMonsterType === MonsterType.Any) {
					return true;
				}

				return m.type === this.state.filterMonsterType;
			});

		// TODO: Filter by min / max level

		const groups = GeneralUtils.distinct(filteredMonsters.map(m => m.category))
			.sort()
			.map(category => {
				const count = filteredMonsters.filter(m => m.category === category).length;
				return (
					<div key={category}>
						<Button variant={category === this.state.selectedCategory ? 'contained' : 'outlined'} onClick={() => this.setSelectedCategory(category)} fullWidth={true}>
							{category || '(none)'} ({count})
						</Button>
					</div>
				);
			});

		const monsters = GeneralUtils.sort(filteredMonsters.filter(m => m.category === this.state.selectedCategory))
			.map(m => (
				<Button key={m.id} variant={m.id === this.state.selectedMonster?.id ? 'contained' : 'outlined'} onClick={() => this.setSelectedMonster(m)}>
					<Stack spacing={1}>
						<Typography variant='h6' noWrap={true}>{m.name}</Typography>
						<div>Level {m.level} {MonsterUtils.getRole(m.role)}</div>
						<div>{MonsterUtils.getPhenotype(m)}</div>
					</Stack>
				</Button>
			));

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
							<TextField placeholder='Search...' text={this.state.filterText} onChange={value => this.setFilterText(value)} />
							<div>Show Levels {Math.min(...this.state.filterLevel)} to {Math.max(...this.state.filterLevel)}</div>
							<Slider min={1} max={40} value={this.state.filterLevel} onChange={(e, value) => this.setFilterLevel(value as number[])} />
							<Select value={this.state.filterRoleType} onChange={e => this.setFilterRoleType(e.target.value as RoleType)}>
								<MenuItem value={RoleType.Any}>Any Role</MenuItem>
								<MenuItem value={RoleType.Artillery}>{EnumHelper.roleType(RoleType.Artillery)}</MenuItem>
								<MenuItem value={RoleType.Brute}>{EnumHelper.roleType(RoleType.Brute)}</MenuItem>
								<MenuItem value={RoleType.Controller}>{EnumHelper.roleType(RoleType.Controller)}</MenuItem>
								<MenuItem value={RoleType.Lurker}>{EnumHelper.roleType(RoleType.Lurker)}</MenuItem>
								<MenuItem value={RoleType.Skirmisher}>{EnumHelper.roleType(RoleType.Skirmisher)}</MenuItem>
								<MenuItem value={RoleType.Soldier}>{EnumHelper.roleType(RoleType.Soldier)}</MenuItem>
							</Select>
							<Select value={this.state.filterRoleFlag} onChange={e => this.setFilterRoleFlag(e.target.value as RoleFlag)}>
								<MenuItem value={RoleFlag.Any}>Any Role Modifier</MenuItem>
								<MenuItem value={RoleFlag.Standard}>{EnumHelper.roleFlag(RoleFlag.Standard)}</MenuItem>
								<MenuItem value={RoleFlag.Elite}>{EnumHelper.roleFlag(RoleFlag.Elite)}</MenuItem>
								<MenuItem value={RoleFlag.Solo}>{EnumHelper.roleFlag(RoleFlag.Solo)}</MenuItem>
								<MenuItem value={RoleFlag.Minion}>{EnumHelper.roleFlag(RoleFlag.Minion)}</MenuItem>
							</Select>
							<div className='filter-control-row'>
								<div>Leaders Only</div>
								<Switch checked={this.state.filterLeader} onChange={e => this.setFilterLeader(e.target.checked)} />
							</div>
							<Select value={this.state.filterMonsterSize} onChange={e => this.setFilterMonsterSize(e.target.value as MonsterSize)}>
								<MenuItem value={MonsterSize.Any}>Any Size</MenuItem>
								<MenuItem value={MonsterSize.Tiny}>{EnumHelper.monsterSize(MonsterSize.Tiny)}</MenuItem>
								<MenuItem value={MonsterSize.Small}>{EnumHelper.monsterSize(MonsterSize.Small)}</MenuItem>
								<MenuItem value={MonsterSize.Medium}>{EnumHelper.monsterSize(MonsterSize.Medium)}</MenuItem>
								<MenuItem value={MonsterSize.Large}>{EnumHelper.monsterSize(MonsterSize.Large)}</MenuItem>
								<MenuItem value={MonsterSize.Huge}>{EnumHelper.monsterSize(MonsterSize.Huge)}</MenuItem>
								<MenuItem value={MonsterSize.Gargantuan}>{EnumHelper.monsterSize(MonsterSize.Gargantuan)}</MenuItem>
							</Select>
							<Select value={this.state.filterMonsterOrigin} onChange={e => this.setFilterMonsterOrigin(e.target.value as MonsterOrigin)}>
								<MenuItem value={MonsterOrigin.Any}>Any Origin</MenuItem>
								<MenuItem value={MonsterOrigin.Aberrant}>{EnumHelper.monsterOrigin(MonsterOrigin.Aberrant)}</MenuItem>
								<MenuItem value={MonsterOrigin.Elemental}>{EnumHelper.monsterOrigin(MonsterOrigin.Elemental)}</MenuItem>
								<MenuItem value={MonsterOrigin.Fey}>{EnumHelper.monsterOrigin(MonsterOrigin.Fey)}</MenuItem>
								<MenuItem value={MonsterOrigin.Immortal}>{EnumHelper.monsterOrigin(MonsterOrigin.Immortal)}</MenuItem>
								<MenuItem value={MonsterOrigin.Natural}>{EnumHelper.monsterOrigin(MonsterOrigin.Natural)}</MenuItem>
								<MenuItem value={MonsterOrigin.Shadow}>{EnumHelper.monsterOrigin(MonsterOrigin.Shadow)}</MenuItem>
							</Select>
							<Select value={this.state.filterMonsterType} onChange={e => this.setFilterMonsterType(e.target.value as MonsterType)}>
								<MenuItem value={MonsterType.Any}>Any Type</MenuItem>
								<MenuItem value={MonsterType.Animate}>{EnumHelper.monsterType(MonsterType.Animate)}</MenuItem>
								<MenuItem value={MonsterType.Beast}>{EnumHelper.monsterType(MonsterType.Beast)}</MenuItem>
								<MenuItem value={MonsterType.Humanoid}>{EnumHelper.monsterType(MonsterType.Humanoid)}</MenuItem>
								<MenuItem value={MonsterType.MagicalBeast}>{EnumHelper.monsterType(MonsterType.MagicalBeast)}</MenuItem>
							</Select>
						</Stack>
					</div>
					<div className='group-list'>
						<Stack spacing={1}>{groups}</Stack>
					</div>
					<div className='monster-list'>
						<Stack spacing={1}>{monsters}</Stack>
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
