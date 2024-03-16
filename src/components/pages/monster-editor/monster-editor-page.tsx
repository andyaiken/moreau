import { IconCircleCheck, IconCirclePlus, IconCircleX } from '@tabler/icons-react';
import { Button, Divider, Drawer, Flex, List, Statistic, Tabs } from 'antd';
import { useState } from 'react';

import { PowerCategory, RoleFlag } from '../../../enums/enums';

import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';
import { Power } from '../../../models/power';

import { Collections } from '../../../utils/collections';
import { EnumHelper } from '../../../utils/enum-helper';
import { Utils } from '../../../utils/utils';

import { EnumField } from '../../fields';
import { BarChartPanel, InfoPanel, ListItemPanel, PowerPanel } from '../../panels';
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
	const [ powerCategory, setPowerCategory ] = useState(PowerCategory.Standard);
	const [ similarMonster, setSimilarMonster ] = useState<Monster | null>(null);

	const changeMonsterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		setMonster(copy);
	};

	const addPower = (power: Power) => {
		const p = JSON.parse(JSON.stringify(power)) as Power;
		p.id = Utils.guid();
		monster.powers.push(p);

		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		setMonster(copy);
	};

	const similarMonsters = props.monsters.filter(m => (m.id !== monster.id) && (m.level === monster.level) && (m.role.type === monster.role.type) && (m.role.flag === monster.role.flag));
	const similarPowers = Collections.sort(similarMonsters.flatMap(m => m.powers.filter(p => MonsterLogic.getPowerCategory(p) === powerCategory)), p => p.name);

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
										{
											monster.role.flag !== RoleFlag.Minion ?
												<div>
													<Divider orientation='left'>Hit Points</Divider>
													<div className='stat-row'>
														<div className='stat-value'>
															<Statistic title='Hit Points' value={MonsterLogic.getHP(monster)} />
														</div>
														<div className='stat-chart'>
															<BarChartPanel
																min={Collections.min(similarMonsters.map(m => m.hp), n => n) ?? 0}
																max={Collections.max(similarMonsters.map(m => m.hp), n => n) ?? 100}
																highlights={[
																	{ x: monster.hp, label: 'Current' },
																	{ x: MonsterLogic.getHP(monster), label: 'Suggested' }
																]}
																getValue={key => similarMonsters.filter(m => m.hp === key).length}
															/>
														</div>
													</div>
												</div>
												: null
										}
										<Divider orientation='left'>Defences</Divider>
										<div className='stat-row'>
											<div className='stat-value'>
												<Statistic title='Armor Class' value={MonsterLogic.getAC(monster)} />
											</div>
											<div className='stat-chart'>
												<BarChartPanel
													min={Collections.min(similarMonsters.map(m => m.ac), n => n) ?? 0}
													max={Collections.max(similarMonsters.map(m => m.ac), n => n) ?? 100}
													highlights={[
														{ x: monster.ac, label: 'Current' },
														{ x: MonsterLogic.getAC(monster), label: 'Suggested' }
													]}
													getValue={key => similarMonsters.filter(m => m.ac === key).length}
												/>
											</div>
										</div>
										<div className='stat-row'>
											<div className='stat-value'>
												<Statistic title='Fortitude' value={MonsterLogic.getNAD(monster)} />
											</div>
											<div className='stat-chart'>
												<BarChartPanel
													min={Collections.min(similarMonsters.map(m => m.fortitude), n => n) ?? 0}
													max={Collections.max(similarMonsters.map(m => m.fortitude), n => n) ?? 100}
													highlights={[
														{ x: monster.fortitude, label: 'Current' },
														{ x: MonsterLogic.getNAD(monster), label: 'Suggested' }
													]}
													getValue={key => similarMonsters.filter(m => m.fortitude === key).length}
												/>
											</div>
										</div>
										<div className='stat-row'>
											<div className='stat-value'>
												<Statistic title='Reflex' value={MonsterLogic.getNAD(monster)} />
											</div>
											<div className='stat-chart'>
												<BarChartPanel
													min={Collections.min(similarMonsters.map(m => m.reflex), n => n) ?? 0}
													max={Collections.max(similarMonsters.map(m => m.reflex), n => n) ?? 100}
													highlights={[
														{ x: monster.reflex, label: 'Current' },
														{ x: MonsterLogic.getNAD(monster), label: 'Suggested' }
													]}
													getValue={key => similarMonsters.filter(m => m.reflex === key).length}
												/>
											</div>
										</div>
										<div className='stat-row'>
											<div className='stat-value'>
												<Statistic title='Will' value={MonsterLogic.getNAD(monster)} />
											</div>
											<div className='stat-chart'>
												<BarChartPanel
													min={Collections.min(similarMonsters.map(m => m.will), n => n) ?? 0}
													max={Collections.max(similarMonsters.map(m => m.will), n => n) ?? 100}
													highlights={[
														{ x: monster.will, label: 'Current' },
														{ x: MonsterLogic.getNAD(monster), label: 'Suggested' }
													]}
													getValue={key => similarMonsters.filter(m => m.will === key).length}
												/>
											</div>
										</div>
										<Divider orientation='left'>Powers</Divider>
										<InfoPanel content='Attack Bonus' info={'+' + MonsterLogic.getAttack(monster)} />
										<InfoPanel content='Damage (typical)' info={MonsterLogic.getDamage(monster, false, false)} />
										<InfoPanel content='Damage (limited use)' info={MonsterLogic.getDamage(monster, true, false)} />
										<InfoPanel content='Damage (multiple targets)' info={MonsterLogic.getDamage(monster, false, true)} />
										<Divider orientation='left'>Other Statistics</Divider>
										<InfoPanel content='Number Of Traits' info={MonsterLogic.getPowerCount(PowerCategory.Trait, similarMonsters)} />
										<InfoPanel content='Number Of Standard Actions' info={MonsterLogic.getPowerCount(PowerCategory.Standard, similarMonsters)} />
										<InfoPanel content='Number Of Move Actions' info={MonsterLogic.getPowerCount(PowerCategory.Move, similarMonsters)} />
										<InfoPanel content='Number Of Minor Actions' info={MonsterLogic.getPowerCount(PowerCategory.Minor, similarMonsters)} />
										<InfoPanel content='Number Of Triggered Actions' info={MonsterLogic.getPowerCount(PowerCategory.Triggered, similarMonsters)} />
										<InfoPanel content='Number Of Free Actions' info={MonsterLogic.getPowerCount(PowerCategory.Free, similarMonsters)} />
									</div>
								)
							},
							{
								key: '2',
								label: 'Similar Monsters',
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
							},
							{
								key: '3',
								label: 'Powers From Similar Monsters',
								children: (
									<div>
										<EnumField
											label='Category'
											options={[ PowerCategory.Trait, PowerCategory.Standard, PowerCategory.Move, PowerCategory.Minor, PowerCategory.Triggered, PowerCategory.Free ]}
											value={powerCategory}
											format={value => EnumHelper.powerCategory(value as PowerCategory)}
											isDisabled={() => false}
											onChange={value => setPowerCategory(value as PowerCategory)}
										/>
										<Divider />
										<List
											dataSource={similarPowers}
											split={false}
											renderItem={(power: Power) => (
												<List.Item key={power.id}>
													<InfoPanel
														content={<PowerPanel power={power} />}
														actions={(
															<Button icon={<IconCirclePlus />} onClick={() => addPower(power)} />
														)}
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
