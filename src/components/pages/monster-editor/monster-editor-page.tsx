import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Drawer, Flex, List, Tabs } from 'antd';
import { useState } from 'react';

import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';

import { InfoPanel, ListItemPanel } from '../../panels';
import { MonsterStatBlock } from '../../stat-blocks';

import './monster-editor-page.scss';

interface Props {
	monster: Monster;
	monsters: Monster[];
	save: (monster: Monster) => void;
	cancel: () => void;
}

const MonsterEditorPage = (props: Props) => {
	const [ monster, setMonster ] = useState(props.monster);
	const [ similarMonster, setSimilarMonster ] = useState<Monster | null>(null);

	const changeMonsterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		setMonster(copy);
	};

	const similarMonsters = props.monsters.filter(m => (m.id !== monster.id) && (m.level === monster.level) && (m.role.type === monster.role.type) && (m.role.flag === monster.role.flag));

	return (
		<div className='monster-editor-page'>
			<Flex gap='small'>
				<Button icon={<IconCircleCheck />} onClick={() => props.save(monster)} />
				<Button icon={<IconCircleX />} onClick={() => props.cancel()} />
			</Flex>
			<div className='editor-content'>
				<div className='stat-block-container'>
					<MonsterStatBlock mode='edit' monster={monster} changeValue={changeMonsterValue} />
				</div>
				<div className='editor-sidebar'>
					<Tabs
						items={[
							{
								key: '1',
								label: 'Suggested Statistics',
								children: (
									<div>
										<InfoPanel content='Hit Points' info={MonsterLogic.getHP(monster)} />
										<InfoPanel content='Armor Class' info={MonsterLogic.getAC(monster)} />
										<InfoPanel content='Fortitude' info={MonsterLogic.getNAD(monster)} />
										<InfoPanel content='Reflex' info={MonsterLogic.getNAD(monster)} />
										<InfoPanel content='Will' info={MonsterLogic.getNAD(monster)} />
										<InfoPanel content='Attack Bonus' info={'+' + MonsterLogic.getAttack(monster)} />
										<InfoPanel content='Average Damage' info={MonsterLogic.getAverageDamage(monster)} />
									</div>
								)
							},
							{
								key: '2',
								label: 'Similar Monsters',
								disabled: similarMonsters.length === 0,
								children: (
									<div>
										<List
											dataSource={similarMonsters}
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
														isSelected={false}
														onClick={() => setSimilarMonster(monster)}
													/>
												</List.Item>
											)}
										/>
									</div>
								)
							}
						]}
						defaultActiveKey='1'
					/>
				</div>
			</div>
			<Drawer
				open={similarMonster != null}
				width='50%'
				onClose={() => setSimilarMonster(null)}
			>
				{similarMonster ? <MonsterStatBlock mode='view' monster={similarMonster} changeValue={() => null} /> : null}
			</Drawer>
		</div>
	);
};

export { MonsterEditorPage };
