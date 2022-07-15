import { Close, Delete, Edit, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Divider, IconButton, Slider, Stack, Typography } from '@mui/material';
import { Component, ReactElement } from 'react';

import { BooleanField } from '../../controls/boolean-field';
import { EnumField } from '../../controls/enum-field';
import { StringField } from '../../controls/string-field';
import { InfoPanel } from '../../info-panel';

import { EnumHelper, MonsterOrigin, MonsterSize, MonsterType, RoleFlag, RoleType } from '../../../models/enums';
import { Monster } from '../../../models/monster';

import { CommonUtils } from '../../../utils/common-utils';
import { MonsterUtils } from '../../../utils/monster-utils';

import './monsters-page.css';

class MonsterFilter {

	text: string = '';
	level: number[] = [1, 40];
	roleType: RoleType = RoleType.Any;
	roleFlag: RoleFlag = RoleFlag.Any;
	roleLeader: boolean = true;
	roleNonLeader: boolean = true;
	monsterSize: MonsterSize = MonsterSize.Any;
	monsterOrigin: MonsterOrigin = MonsterOrigin.Any;
	monsterType: MonsterType = MonsterType.Any;
	showCustom: boolean = true;
	showOfficial: boolean = true;

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

		if (!this.roleLeader) {
			return true;
		}

		if (!this.roleNonLeader) {
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

		if (!this.showCustom) {
			return true;
		}

		if (!this.showOfficial) {
			return true;
		}

		return false;
	};

	reset = () => {
		this.text = '';
		this.level = [1, 40];
		this.roleType = RoleType.Any;
		this.roleFlag = RoleFlag.Any;
		this.roleLeader = true;
		this.roleNonLeader = true;
		this.monsterSize = MonsterSize.Any;
		this.monsterOrigin = MonsterOrigin.Any;
		this.monsterType = MonsterType.Any;
		this.showCustom = true;
		this.showOfficial = true;
	};

	execute = (customMonsters: Monster[], officialMonsters: Monster[]) => {
		const customIDs = customMonsters.map(m => m.id);
		return [...customMonsters, ...officialMonsters]
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
				if (m.role.leader && this.roleLeader) {
					return true;
				}
				if (!m.role.leader && this.roleNonLeader) {
					return true;
				}

				return false;
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
			})
			.filter(m => {
				if (customIDs.includes(m.id) && this.showCustom) {
					return true;
				}
				if (!customIDs.includes(m.id) && this.showOfficial) {
					return true;
				}

				return false;
			});
	};
};

interface Props {
	monsters: Monster[];
	officialMonsters: Monster[];
	selectMonster: (monster: Monster) => void;
	createMonster: (category: string) => void;
	deleteMonster: (monster: Monster) => void;
	editMonster: (monster: Monster) => void;
};

interface State {
	filter: MonsterFilter;
	selectedCategory: string | null;
};

export class MonstersPage extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			filter: new MonsterFilter(),
			selectedCategory: null
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

	setFilterNonLeader = (value: boolean) => {
		const filter = this.state.filter;
		filter.roleNonLeader = value;

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

	setFilterCustom = (value: boolean) => {
		const filter = this.state.filter;
		filter.showCustom = value;

		this.setState({
			filter: filter
		});
	};

	setFilterOfficial = (value: boolean) => {
		const filter = this.state.filter;
		filter.showOfficial = value;

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

	setSelectedCategory = (category: string | null) => {
		this.setState({
			selectedCategory: category
		});
	};

	render = () => {
		const filteredMonsters = this.state.filter.execute(this.props.monsters, this.props.officialMonsters);

		const categories = CommonUtils.distinct(filteredMonsters.map(m => m.category)).sort();
		let categoryList: ReactElement | ReactElement[] = categories.map(category => (
			<InfoPanel
				key={category}
				content={category || 'Uncategorised'}
				info={filteredMonsters.filter(m => m.category === category).length}
				selected={category === this.state.selectedCategory}
				onClick={() => this.setSelectedCategory(category)}
			/>
		));
		if (categories.length === 0) {
			categoryList = (
				<div className='empty'>There are no monsters in any category that match the filter.</div>
			);
		}

		const monstersInCategory = CommonUtils.sort(filteredMonsters.filter(m => m.category === this.state.selectedCategory));
		let monsterList: ReactElement | ReactElement[] = monstersInCategory.map(m => {
			let actions = null;
			if (this.props.monsters.includes(m)) {
				actions = (
					<ButtonGroup orientation='vertical'>
						<IconButton onClick={e => { e.stopPropagation(); this.props.editMonster(m); }}><Edit /></IconButton>
						<IconButton onClick={e => { e.stopPropagation(); this.props.deleteMonster(m); }}><Delete /></IconButton>
					</ButtonGroup>
				);
			}

			return (
				<InfoPanel
					key={m.id}
					content={(
						<div className='monster-name'>
							{m.name || 'Unnamed Monster'}
						</div>
					)}
					info={(
						<div>
							<div>Level {m.level} {MonsterUtils.getRole(m.role)}</div>
							<div>{MonsterUtils.getPhenotype(m)}</div>
						</div>
					)}
					actions={actions}
					onClick={() => this.props.selectMonster(m)}
				/>
			);
		});
		if (this.state.selectedCategory === null) {
			monsterList = (
				<div className='empty'>Select a category from the list.</div>
			);
		} else {
			monsterList.unshift(
				<Divider key='divider' />
			);

			if (monstersInCategory.length === 0) {
				monsterList = (
					<div className='empty'>There are no monsters in this category that match the filter.</div>
				);
			}
		}

		let monsterListHeading = null;
		if (this.state.selectedCategory !== null) {
			monsterListHeading = (
				<InfoPanel
					content={(
						<div className='category-header'>
							{this.state.selectedCategory || 'Uncategorised'}
						</div>
					)}
					info={(
						<IconButton onClick={() => this.setSelectedCategory(null)}>
							<Close />
						</IconButton>
					)}
				/>
			);
		}

		return (
			<div className='monsters-page'>
				<div className='filter-column'>
					<Stack spacing={1}>
						<Button variant='contained' fullWidth={true} onClick={() => this.props.createMonster(this.state.selectedCategory || '')}>Create A Monster</Button>
						<Divider />
						<StringField label='' placeholder='Search...' value={this.state.filter.text} onChange={value => this.setFilterText(value)} />
						<Divider />
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMore />}>
								<Typography>Filter Monsters</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Stack spacing={1}>
									<div className='filter-level'>
										<InfoPanel content='Show Levels' info={Math.min(...this.state.filter.level) + ' to ' + Math.max(...this.state.filter.level)} />
										<div className='filter-level-slider'>
											<Slider min={1} max={40} value={this.state.filter.level} onChange={(e, value) => this.setFilterLevel(value as number[])} />
										</div>
									</div>
									<Divider />
									<EnumField
										label='Role'
										options={[RoleType.Any, RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier]}
										value={this.state.filter.roleType}
										format={value => EnumHelper.roleType(value as RoleType)}
										onChange={value => this.setFilterRoleType(value as RoleType)}
									/>
									<EnumField
										label='Role Modifier'
										options={[RoleFlag.Any, RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion]}
										value={this.state.filter.roleFlag}
										format={value => EnumHelper.roleFlag(value as RoleFlag)}
										onChange={value => this.setFilterRoleFlag(value as RoleFlag)}
									/>
									<Divider />
									<BooleanField label='Show Leaders' value={this.state.filter.roleLeader} onChange={value => this.setFilterLeader(value)} />
									<BooleanField label='Show Non-Leaders' value={this.state.filter.roleNonLeader} onChange={value => this.setFilterNonLeader(value)} />
									<Divider />
									<EnumField
										label='Size'
										options={[MonsterSize.Any, MonsterSize.Tiny, MonsterSize.Small, MonsterSize.Medium, MonsterSize.Large, MonsterSize.Huge, MonsterSize.Gargantuan]}
										value={this.state.filter.monsterSize}
										format={value => EnumHelper.monsterSize(value as MonsterSize)}
										onChange={value => this.setFilterMonsterSize(value as MonsterSize)}
									/>
									<EnumField
										label='Origin'
										options={[MonsterOrigin.Any, MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow]}
										value={this.state.filter.monsterOrigin}
										format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
										onChange={value => this.setFilterMonsterOrigin(value as MonsterOrigin)}
									/>
									<EnumField
										label='Type'
										options={[MonsterType.Any, MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast]}
										value={this.state.filter.monsterType}
										format={value => EnumHelper.monsterType(value as MonsterType)}
										onChange={value => this.setFilterMonsterType(value as MonsterType)}
									/>
									<Divider />
									<BooleanField label='Show Custom Monsters' value={this.state.filter.showCustom} onChange={value => this.setFilterCustom(value)} />
									<BooleanField label='Show Official Monsters' value={this.state.filter.showOfficial} onChange={value => this.setFilterOfficial(value)} />
									<Divider />
									<Button variant='outlined' fullWidth={true} disabled={!this.state.filter.isActive()} onClick={() => this.resetFilter()}>Reset Filter</Button>
								</Stack>
							</AccordionDetails>
						</Accordion>
					</Stack>
				</div>
				<div className='category-list'>
					<Stack spacing={1}>{categoryList}</Stack>
				</div>
				<div className='monster-list'>
					{monsterListHeading}
					<Stack spacing={1}>{monsterList}</Stack>
				</div>
			</div>
		);
	};
};
