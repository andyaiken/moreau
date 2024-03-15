import { IconCamera, IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Divider, Flex, List } from 'antd';
import { useState } from 'react';

import { Factory } from '../../../logic/factory';
import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';
import { MonsterFilter } from '../../../models/monster-filter';

import { Collections } from '../../../utils/collections';
import { Utils } from '../../../utils/utils';

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
}

const MonstersPage = (props: Props) => {
	const [ selectedMonster, setSelectedMonster ] = useState<Monster | null>(null);
	const [ monsterFilter, setMonsterFilter ] = useState<MonsterFilter>(Factory.createMonsterFilter());

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
		.filter(m => MonsterLogic.matches(m, monsterFilter));

	return (
		<div className='monsters-page'>
			<div className='monsters-page-column monster-tools'>
				<Button block={true} type='primary' onClick={createMonster}>Create Monster</Button>
				<InfoPanel content='Monsters' info={`${monsters.length} of ${props.homebrewMonsters.length + props.officialMonsters.length}`} />
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
