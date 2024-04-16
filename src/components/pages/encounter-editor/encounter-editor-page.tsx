import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Divider, Drawer, Flex, List, Statistic, Tabs } from 'antd';
import { useState } from 'react';

import { RoleFlag, ThreatType } from '../../../enums/enums';

import { EncounterLogic } from '../../../logic/encounter-logic';
import { Factory } from '../../../logic/factory';
import { MonsterLogic } from '../../../logic/monster-logic';

import { Encounter, EncounterSlot, EncounterWave } from '../../../models/encounter';
import { Monster } from '../../../models/monster';
import { MonsterFilter } from '../../../models/monster-filter';

import { EnumHelper } from '../../../utils/enum-helper';

import { EnumField, NumberField } from '../../fields';
import { InfoPanel, ListItemPanel, MonsterFilterPanel } from '../../panels';
import { EncounterStatBlock } from '../../stat-blocks';

import './encounter-editor-page.scss';

interface Props {
	encounter: Encounter;
	monsters: Monster[];
	save: (encounter: Encounter) => void;
	cancel: () => void;
}

const EncounterEditorPage = (props: Props) => {
	const [ encounter, setEncounter ] = useState(props.encounter);
	const [ selectedWaveID, setSelectedWaveID ] = useState(props.encounter.waves[0].id);
	const [ selectedTemplateSlot, setSelectedTemplateSlot ] = useState<EncounterSlot | null>(null);
	const [ partySize, setPartySize ] = useState(5);
	const [ partyLevel, setPartyLevel ] = useState(1);
	const [ monsterFilter, setMonsterFilter ] = useState<MonsterFilter>(Factory.createMonsterFilter());

	const selectedWave = encounter.waves.find(w => w.id === selectedWaveID) as EncounterWave;
	const monsters = props.monsters.filter(m => !selectedWave.slots.find(slot => (slot.threatType === ThreatType.Monster) && (slot.threatID === m.id)) && MonsterLogic.matches(m, monsterFilter));

	const xp = EncounterLogic.getXP(encounter, props.monsters);
	const level = EncounterLogic.getLevel(xp, partySize);
	const diff = EncounterLogic.getDifficulty(level, partyLevel);

	const changeEncounterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
		setEncounter(copy);
	};

	const addMonster = (monster: Monster) => {
		const slot = selectedWave.slots.find(s => (s.threatType === ThreatType.Monster) && (s.threatID === monster.id));
		if (slot) {
			slot.count += (monster.role.flag === RoleFlag.Minion) ? 5 : 1;
		} else {
			const slot = Factory.createEncounterSlot();
			slot.threatType = ThreatType.Monster;
			slot.threatID = monster.id;
			slot.count = (monster.role.flag === RoleFlag.Minion) ? 5 : 1;

			selectedWave.slots.push(slot);
		}

		const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
		setEncounter(copy);
	};

	const getTemplateSlotEditor = (slot: EncounterSlot) => {
		return (
			<div>
				{
					props.monsters
						.filter(m => slot.templateFlag === m.role.flag)
						.filter(m => slot.templateRoles.includes(m.role.type))
						.filter(m => slot.templateLevel === m.level)
						.map(monster => {
							return (
								<InfoPanel
									key={monster.id}
									content={
										<ListItemPanel
											title={monster.name}
											info={[
												MonsterLogic.getPhenotype(monster),
												MonsterLogic.getLevelAndRole(monster)
											]}
											onClick={() => {
												slot.threatType = ThreatType.Monster;
												slot.threatID = monster.id;
												slot.count = (monster.role.flag === RoleFlag.Minion) ? 5 : 1;
												setSelectedTemplateSlot(null);
											}}
										/>
									}
								/>
						)})
				}
			</div>
		);
	};

	return (
		<div className='encounter-editor-page'>
			<Flex gap='small'>
				<Button icon={<IconCircleCheck />} onClick={() => props.save(encounter)} />
				<Button icon={<IconCircleX />} onClick={() => props.cancel()} />
			</Flex>
			<div className='editor-content'>
				<div className='stat-block-container'>
					<EncounterStatBlock
						mode='edit'
						encounter={encounter}
						monsters={props.monsters}
						onTemplateSelected={setSelectedTemplateSlot}
						changeValue={changeEncounterValue}
					/>
				</div>
				<div className='editor-sidebar'>
					<Tabs
						items={[
							{
								key: '1',
								label: 'Difficulty',
								children: (
									<div>
										<NumberField label='Party Size' value={partySize} onChange={value => setPartySize(value)} />
										<NumberField label='Party Level' value={partyLevel} onChange={value => setPartyLevel(value)} />
										<Divider />
										<Flex justify='space-evenly'>
											<Statistic title='XP' value={xp} />
											<Statistic title='Level' value={level} />
											<Statistic title='Difficulty' value={EnumHelper.difficultyLevel(diff)} />
										</Flex>
									</div>
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
														isSelected={false}
														onClick={() => addMonster(monster)}
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
				open={selectedTemplateSlot !== null}
				width='50%'
				onClose={() => setSelectedTemplateSlot(null)}
			>
				{selectedTemplateSlot ? getTemplateSlotEditor(selectedTemplateSlot) : null}
			</Drawer>
		</div>
	);
};

export { EncounterEditorPage };
