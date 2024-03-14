import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Divider, Flex, List, Tabs } from 'antd';
import { useState } from 'react';

import { RoleFlag, ThreatType } from '../../../enums/enums';

import { Factory } from '../../../logic/factory';
import { MonsterLogic } from '../../../logic/monster-logic';

import { Encounter, EncounterWave } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

import { ListItemPanel, MonsterFilterPanel } from '../../panels';
import { EncounterStatBlock } from '../../stat-blocks';

import './encounter-editor-page.scss';
import { EnumField } from '../../fields';
import { MonsterFilter } from '../../../models/monster-filter';

interface Props {
	encounter: Encounter;
	monsters: Monster[];
	save: (encounter: Encounter) => void;
	cancel: () => void;
}

const EncounterEditorPage = (props: Props) => {
	const [ encounter, setEncounter ] = useState(props.encounter);
	const [ selectedWaveID, setSelectedWaveID ] = useState(props.encounter.waves[0].id);
	const [ monsterFilter, setMonsterFilter ] = useState<MonsterFilter>(Factory.createMonsterFilter());

	const changeEncounterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
		setEncounter(copy);
	};

	const addMonster = (monster: Monster, waveID: string) => {
		const wave = encounter.waves.find(w => w.id === waveID) as EncounterWave;
		const slot = wave.slots.find(s => (s.threatType === ThreatType.Monster) && (s.threatID === monster.id));
		if (slot) {
			slot.count += (monster.role.flag === RoleFlag.Minion) ? 5 : 1;
		} else {
			const slot = Factory.createEncounterSlot();
			slot.threatType = ThreatType.Monster;
			slot.threatID = monster.id;
			slot.count = (monster.role.flag === RoleFlag.Minion) ? 5 : 1;

			wave.slots.push(slot);
		}

		const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
		setEncounter(copy);
	};

	return (
		<div className='encounter-editor-page'>
			<Flex gap='small'>
				<Button icon={<IconCircleCheck />} onClick={() => props.save(encounter)} />
				<Button icon={<IconCircleX />} onClick={() => props.cancel()} />
			</Flex>
			<div className='editor-content'>
				<div className='stat-block-container'>
					<EncounterStatBlock mode='edit' encounter={encounter} monsters={props.monsters} changeValue={changeEncounterValue} />
				</div>
				<div className='editor-sidebar'>
					<Tabs
						items={[
							{
								key: '1',
								label: 'Difficulty',
								children: (
									null
								)
							},
							{
								key: '2',
								label: 'Monsters',
								children: (
									<div>
										{
											encounter.waves.length > 1 ?
												<EnumField
													label='Add to wave'
													options={encounter.waves.map(w => w.id)}
													value={selectedWaveID}
													format={waveID => {
														const wave = encounter.waves.find(w => w.id === waveID) as EncounterWave;
														return wave.name || 'Wave';
													}}
													isDisabled={() => false}
													onChange={waveID => setSelectedWaveID(waveID as string)}
												/>
												: null
										}
										<MonsterFilterPanel filter={monsterFilter} onChange={setMonsterFilter} />
										<Divider />
										<List
											dataSource={props.monsters.filter(m => MonsterLogic.matches(m, monsterFilter))}
											split={false}
											renderItem={(monster: Monster) => (
												<List.Item key={monster.id} onClick={() => addMonster(monster, selectedWaveID)}>
													<ListItemPanel
														title={monster.name || 'Unnamed Monster'}
														tags={monster.category ? [ 'Homebrew' ] : []}
														info={[
															`Level ${monster.level} ${MonsterLogic.getRole(monster.role)}`,
															MonsterLogic.getPhenotype(monster)
														]}
														isSelected={false}
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
		</div>
	);
};

export { EncounterEditorPage };
