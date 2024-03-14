import { IconCamera, IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Divider, Flex, List, Slider, Tag } from 'antd';
import { useState } from 'react';

import { RoleType, RoleFlag, MonsterSize, MonsterOrigin, MonsterType } from '../../../enums/enums';

import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';

import { Collections } from '../../../utils/collections';
import { EnumHelper } from '../../../utils/enum-helper';

import { Expander } from '../../controls';
import { InfoPanel } from '../../panels';
import { StringField, EnumField, BooleanField } from '../../fields';
import { MonsterStatBlock } from '../../stat-blocks';

import './monsters-page.scss';
import { Utils } from '../../../utils/utils';

interface Props {
	officialMonsters: Monster[];
	homebrewMonsters: Monster[];
	createMonster: () => Monster;
	copyMonster: (monster: Monster) => Monster;
	editMonster: (monster: Monster) => void;
	deleteMonster: (monster: Monster) => void;
}

interface MonsterFilter {
	text: string;
	level: number[];
	roleType: RoleType;
	roleFlag: RoleFlag;
	roleLeader: boolean;
	roleNonLeader: boolean;
	monsterSize: MonsterSize;
	monsterOrigin: MonsterOrigin;
	monsterType: MonsterType;
	showOfficial: boolean;
	showHomebrew: boolean;
}

const MonstersPage = (props: Props) => {
	const [ selectedMonster, setSelectedMonster ] = useState<Monster | null>(null);
	const [ monsterFilter, setMonsterFilter ] = useState<MonsterFilter>({
		text: '',
		level: [1, 40],
		roleType: RoleType.Any,
		roleFlag: RoleFlag.Any,
		roleLeader: true,
		roleNonLeader: true,
		monsterSize: MonsterSize.Any,
		monsterOrigin: MonsterOrigin.Any,
		monsterType: MonsterType.Any,
		showOfficial: true,
		showHomebrew: true
	});

	//#region Filter

	const setFilterText = (value: string) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.text = value;
		setMonsterFilter(copy);
	};

	const setFilterLevel = (value: number[]) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.level = value;
		setMonsterFilter(copy);
	};

	const setFilterRoleType = (value: RoleType) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.roleType = value;
		setMonsterFilter(copy);
	};

	const setFilterRoleFlag = (value: RoleFlag) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.roleFlag = value;
		setMonsterFilter(copy);
	};

	const setFilterLeader = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.roleLeader = value;
		setMonsterFilter(copy);
	};

	const setFilterNonLeader = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.roleNonLeader = value;
		setMonsterFilter(copy);
	};

	const setFilterMonsterSize = (value: MonsterSize) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.monsterSize = value;
		setMonsterFilter(copy);
	};

	const setFilterMonsterOrigin = (value: MonsterOrigin) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.monsterOrigin = value;
		setMonsterFilter(copy);
	};

	const setFilterMonsterType = (value: MonsterType) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.monsterType = value;
		setMonsterFilter(copy);
	};

	const setFilterOfficial = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.showOfficial = value;
		setMonsterFilter(copy);
	};

	const setFilterHomebrew = (value: boolean) => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.showHomebrew = value;
		setMonsterFilter(copy);
	};

	const resetFilter = () => {
		const copy = JSON.parse(JSON.stringify(monsterFilter)) as MonsterFilter;
		copy.text = '';
		copy.level = [1, 40];
		copy.roleType = RoleType.Any;
		copy.roleFlag = RoleFlag.Any;
		copy.roleLeader = true;
		copy.roleNonLeader = true;
		copy.monsterSize = MonsterSize.Any;
		copy.monsterOrigin = MonsterOrigin.Any;
		copy.monsterType = MonsterType.Any;
		copy.showOfficial = true;
		copy.showHomebrew = true;
		setMonsterFilter(copy);
	};

	const getFilterIsActive = () => {
		if (monsterFilter.text) {
			return true;
		}

		if (Math.min(...monsterFilter.level) !== 1) {
			return true;
		}

		if (Math.max(...monsterFilter.level) !== 40) {
			return true;
		}

		if (monsterFilter.roleType !== RoleType.Any) {
			return true;
		}

		if (monsterFilter.roleFlag !== RoleFlag.Any) {
			return true;
		}

		if (!monsterFilter.roleLeader) {
			return true;
		}

		if (!monsterFilter.roleNonLeader) {
			return true;
		}

		if (monsterFilter.monsterSize !== MonsterSize.Any) {
			return true;
		}

		if (monsterFilter.monsterOrigin !== MonsterOrigin.Any) {
			return true;
		}

		if (monsterFilter.monsterType !== MonsterType.Any) {
			return true;
		}

		if (!monsterFilter.showOfficial) {
			return true;
		}

		if (!monsterFilter.showHomebrew) {
			return true;
		}

		return false;
	}

	//#endregion

	const createMonster = () => {
		const monster = props.createMonster();
		setSelectedMonster(monster);
	}

	const copyMonster = () => {
		if (selectedMonster) {
			const monster = props.copyMonster(selectedMonster);
			setSelectedMonster(monster);
		}
	}

	const editMonster = () => {
		if (selectedMonster) {
			props.editMonster(selectedMonster);
		}
	}

	const deleteMonster = () => {
		if (selectedMonster) {
			props.deleteMonster(selectedMonster);
			setSelectedMonster(null);
		}
	}

	const monsters = ([] as Monster[])
		.concat(Collections.sort(props.homebrewMonsters, m => m.name))
		.concat(Collections.sort(props.officialMonsters, m => m.name))
		.filter(m => {
			if (!monsterFilter.text) {
				return true;
			}

			if (m.name.toLowerCase().includes(monsterFilter.text.toLowerCase())) {
				return true;
			}

			if (m.category.toLowerCase().includes(monsterFilter.text.toLowerCase())) {
				return true;
			}

			if (m.keywords.toLowerCase().includes(monsterFilter.text.toLowerCase())) {
				return true;
			}

			return false;
		})
		.filter(m => {
			const min = Math.min(...monsterFilter.level);
			const max = Math.max(...monsterFilter.level);
			return (m.level >= min) && (m.level <= max);
		})
		.filter(m => {
			if (monsterFilter.roleType === RoleType.Any) {
				return true;
			}

			return m.role.type === monsterFilter.roleType;
		})
		.filter(m => {
			if (monsterFilter.roleFlag === RoleFlag.Any) {
				return true;
			}

			return m.role.flag === monsterFilter.roleFlag;
		})
		.filter(m => {
			if (m.role.leader && monsterFilter.roleLeader) {
				return true;
			}
			if (!m.role.leader && monsterFilter.roleNonLeader) {
				return true;
			}

			return false;
		})
		.filter(m => {
			if (monsterFilter.monsterSize === MonsterSize.Any) {
				return true;
			}

			return m.size === monsterFilter.monsterSize;
		})
		.filter(m => {
			if (monsterFilter.monsterOrigin === MonsterOrigin.Any) {
				return true;
			}

			return m.origin === monsterFilter.monsterOrigin;
		})
		.filter(m => {
			if (monsterFilter.monsterType === MonsterType.Any) {
				return true;
			}

			return m.type === monsterFilter.monsterType;
		})
		.filter(m => {
			if (!m.category && monsterFilter.showOfficial) {
				return true;
			}
			if (!!m.category && monsterFilter.showHomebrew) {
				return true;
			}

			return false;
		});

	return (
		<div className='monsters-page'>
			<div className='monsters-page-column monster-tools'>
				<Button block={true} type='primary' onClick={createMonster}>Create Monster</Button>
				<InfoPanel content='Monsters' info={monsters.length} />
				<Expander title='Filter Monsters'>
					<StringField placeholder='Name, keywords, etc' value={monsterFilter.text} onChange={value => setFilterText(value)} />
					<hr />
					<div className='filter-level'>
						<InfoPanel content='Show Levels' info={Math.min(...monsterFilter.level) + ' to ' + Math.max(...monsterFilter.level)} />
						<div className='filter-level-slider'>
							<Slider range={true} min={1} max={40} value={monsterFilter.level} onChange={value => setFilterLevel(value as number[])} />
						</div>
					</div>
					<hr />
					<EnumField
						label='Role'
						options={[RoleType.Any, RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier]}
						value={monsterFilter.roleType}
						format={value => EnumHelper.roleType(value as RoleType)}
						isDisabled={() => false}
						onChange={value => setFilterRoleType(value as RoleType)}
					/>
					<EnumField
						label='Modifier'
						options={[RoleFlag.Any, RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion]}
						value={monsterFilter.roleFlag}
						format={value => EnumHelper.roleFlag(value as RoleFlag)}
						isDisabled={() => false}
						onChange={value => setFilterRoleFlag(value as RoleFlag)}
					/>
					<hr />
					<BooleanField label='Show Leaders' value={monsterFilter.roleLeader} onChange={value => setFilterLeader(value)} />
					<BooleanField label='Show Non-Leaders' value={monsterFilter.roleNonLeader} onChange={value => setFilterNonLeader(value)} />
					<hr />
					<EnumField
						label='Size'
						options={[MonsterSize.Any, MonsterSize.Tiny, MonsterSize.Small, MonsterSize.Medium, MonsterSize.Large, MonsterSize.Huge, MonsterSize.Gargantuan]}
						value={monsterFilter.monsterSize}
						format={value => EnumHelper.monsterSize(value as MonsterSize)}
						isDisabled={() => false}
						onChange={value => setFilterMonsterSize(value as MonsterSize)}
					/>
					<EnumField
						label='Origin'
						options={[MonsterOrigin.Any, MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow]}
						value={monsterFilter.monsterOrigin}
						format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
						isDisabled={() => false}
						onChange={value => setFilterMonsterOrigin(value as MonsterOrigin)}
					/>
					<EnumField
						label='Type'
						options={[MonsterType.Any, MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast]}
						value={monsterFilter.monsterType}
						format={value => EnumHelper.monsterType(value as MonsterType)}
						isDisabled={() => false}
						onChange={value => setFilterMonsterType(value as MonsterType)}
					/>
					<hr />
					<BooleanField label='Show Official Monsters' value={monsterFilter.showOfficial} onChange={value => setFilterOfficial(value)} />
					<BooleanField label='Show Homebrew Monsters' value={monsterFilter.showHomebrew} onChange={value => setFilterHomebrew(value)} />
					<hr />
					<Button block={true} disabled={!getFilterIsActive()} onClick={resetFilter}>Reset Filter</Button>
				</Expander>
			</div>
			<div className='monsters-page-column monster-list'>
				<List
					dataSource={monsters}
					renderItem={(monster: Monster) => (
						<List.Item key={monster.id} onClick={() => setSelectedMonster(monster)}>
							<div className={`list-item ${!!selectedMonster && (selectedMonster.id === monster.id) ? 'selected' : ''}`}>
								<Flex gap='small' align='center' justify='space-between'>
									<b>{monster.name || 'Unnamed Monster'}</b>
									{monster.category ? <Tag>Homebrew</Tag> : null}
								</Flex>
								<div>
									Level {monster.level} {MonsterLogic.getRole(monster.role)}
								</div>
								<div>
									{MonsterLogic.getPhenotype(monster)}
								</div>
							</div>
						</List.Item>
					)}
				/>
			</div>
			<div className='monsters-page-column monster-details'>
				{
					selectedMonster ?
						<div className='monster-details-content'>
							<Flex gap='small' align='center'>
								{selectedMonster.category ? null : <Button onClick={copyMonster}>Create a Homebrew Version</Button>}
								{selectedMonster.category ? <Button icon={<IconEdit />} onClick={editMonster} /> : null}
								{selectedMonster.category ? <Button icon={<IconTrash />} onClick={deleteMonster} /> : null}
								<Divider type='vertical' />
								<Button icon={<IconCamera />} onClick={() => Utils.takeScreenshot(selectedMonster.id)} />
							</Flex>
							<div className='stat-block-container'>
								<MonsterStatBlock mode='view' monster={selectedMonster} changeValue={() => null} />
							</div>
						</div>
						: null
				}
			</div>
		</div>
	);
};

export { MonstersPage };
