import { IconCamera, IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Divider, Flex, List } from 'antd';
import { useState } from 'react';

import { MonsterOrigin, MonsterType, RoleFlag, RoleType } from '../../../enums/enums';

import { Factory } from '../../../logic/factory';
import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';
import { MonsterFilter } from '../../../models/monster-filter';

import { Collections } from '../../../utils/collections';
import { EnumHelper } from '../../../utils/enum-helper';
import { Utils } from '../../../utils/utils';

import { Expander } from '../../controls';
import { EnumField, NumberField } from '../../fields';
import { InfoPanel, ListItemPanel, MonsterFilterPanel } from '../../panels';
import { MonsterStatBlock } from '../../stat-blocks';

import './monsters-page.scss';

interface Props {
	officialMonsters: Monster[];
	homebrewMonsters: Monster[];
	createMonster: () => Monster;
	copyMonster: (monster: Monster) => Monster;
	editMonster: (monster: Monster) => void;
	deleteMonster: (monster: Monster) => void;
	generateMonster: (level: number, role: RoleType, flag: RoleFlag, origin: MonsterOrigin, type: MonsterType) => Monster;
}

const MonstersPage = (props: Props) => {
	const [ selectedMonster, setSelectedMonster ] = useState<Monster | null>(null);
	const [ monsterFilter, setMonsterFilter ] = useState<MonsterFilter>(Factory.createMonsterFilter());
	const [ generateLevel, setGenerateLevel ] = useState(1);
	const [ generateRoleType, setGenerateRoleType ] = useState(RoleType.Artillery);
	const [ generateRoleFlag, setGenerateRoleFlag ] = useState(RoleFlag.Standard);
	const [ generateOrigin, setGenerateOrigin ] = useState(MonsterOrigin.Natural);
	const [ generateType, setGenerateType ] = useState(MonsterType.Humanoid);

	const createMonster = () => {
		const monster = props.createMonster();
		setSelectedMonster(monster);
	};

	const copyMonster = () => {
		if (selectedMonster) {
			const monster = props.copyMonster(selectedMonster);
			setSelectedMonster(monster);
		}
	};

	const editMonster = () => {
		if (selectedMonster) {
			props.editMonster(selectedMonster);
		}
	};

	const deleteMonster = () => {
		if (selectedMonster) {
			props.deleteMonster(selectedMonster);
			setSelectedMonster(null);
		}
	};

	const generateMonster = () => {
		const monster = props.generateMonster(generateLevel, generateRoleType, generateRoleFlag, generateOrigin, generateType);
		setSelectedMonster(monster);
	};

	const monsters = ([] as Monster[])
		.concat(Collections.sort(props.homebrewMonsters, m => m.name))
		.concat(Collections.sort(props.officialMonsters, m => m.name))
		.filter(m => MonsterLogic.matches(m, monsterFilter));

	return (
		<div className='monsters-page'>
			<div className='monsters-page-column monster-tools'>
				<InfoPanel content='Monsters' info={`${monsters.length} of ${props.homebrewMonsters.length + props.officialMonsters.length}`} />
				<Button block={true} type='primary' onClick={createMonster}>Create Monster</Button>
				<Expander title='Generate Monster'>
					<NumberField label='Level' value={generateLevel} validate={value => (value >= 1) && (value <= 40)} onChange={setGenerateLevel} />
					<EnumField
						label='Role'
						options={[ RoleType.Artillery, RoleType.Brute, RoleType.Controller, RoleType.Lurker, RoleType.Skirmisher, RoleType.Soldier ]}
						value={generateRoleType}
						format={value => EnumHelper.roleType(value as RoleType)}
						isDisabled={() => false}
						onChange={value => setGenerateRoleType(value as RoleType)}
					/>
					<EnumField
						label='Modifiers'
						options={[ RoleFlag.Standard, RoleFlag.Elite, RoleFlag.Solo, RoleFlag.Minion ]}
						value={generateRoleFlag}
						format={value => EnumHelper.roleFlag(value as RoleFlag)}
						isDisabled={() => false}
						onChange={value => setGenerateRoleFlag(value as RoleFlag)}
					/>
					<EnumField
						label='Origin'
						options={[ MonsterOrigin.Aberrant, MonsterOrigin.Elemental, MonsterOrigin.Fey, MonsterOrigin.Immortal, MonsterOrigin.Natural, MonsterOrigin.Shadow ]}
						value={generateOrigin}
						format={value => EnumHelper.monsterOrigin(value as MonsterOrigin)}
						isDisabled={() => false}
						onChange={value => setGenerateOrigin(value as MonsterOrigin)}
					/>
					<EnumField
						label='Type'
						options={[ MonsterType.Animate, MonsterType.Beast, MonsterType.Humanoid, MonsterType.MagicalBeast ]}
						value={generateType}
						format={value => EnumHelper.monsterType(value as MonsterType)}
						isDisabled={() => false}
						onChange={value => setGenerateType(value as MonsterType)}
					/>
					<Divider />
					<Button block={true} onClick={generateMonster}>Generate</Button>
				</Expander>
				<Divider />
				<MonsterFilterPanel filter={monsterFilter} onChange={setMonsterFilter} />
			</div>
			<div className='monsters-page-column monster-list'>
				<List
					dataSource={monsters}
					split={false}
					renderItem={(monster: Monster) => (
						<List.Item key={monster.id}>
							<ListItemPanel
								title={monster.name || 'Unnamed Monster'}
								tags={monster.category ? [ 'Homebrew' ] : []}
								info={[
									MonsterLogic.getLevelAndRole(monster),
									MonsterLogic.getPhenotype(monster)
								]}
								isSelected={(selectedMonster !== null) && (selectedMonster.id === monster.id)}
								onClick={() => setSelectedMonster(monster)}
							/>
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
