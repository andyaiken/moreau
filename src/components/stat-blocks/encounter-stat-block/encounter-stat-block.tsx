import { IconCircleMinus, IconCirclePlus, IconTrash } from '@tabler/icons-react';
import { Button, Drawer, Empty, Flex } from 'antd';
import { useState } from 'react';

import { ThreatType } from '../../../enums/enums';

import { EncounterLogic } from '../../../logic/encounter-logic';
import { Factory } from '../../../logic/factory';
import { MonsterLogic } from '../../../logic/monster-logic';

import { Encounter, EncounterSlot, EncounterWave } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

import { Collections } from '../../../utils/collections';

import { StringField } from '../../fields';
import { EditablePanel, InfoPanel, ListItemPanel } from '../../panels';

import './encounter-stat-block.scss';
import { MonsterStatBlock } from '..';

interface Props {
	mode: 'view' | 'edit';
	encounter: Encounter,
	monsters: Monster[];
	changeValue: (source: object, field: string, value: unknown) => void;
}

const EncounterStatBlock = (props: Props) => {
	const [ selectedMonster, setSelectedMonster ] = useState<Monster | null>(null);

	const addWave = () => {
		const waves = props.encounter.waves;
		waves.push(Factory.createEncounterWave());
		props.changeValue(props.encounter, 'waves', waves);
	};

	const removeWave = (wave: EncounterWave) => {
		const waves = props.encounter.waves.filter(w => w.id !== wave.id);
		props.changeValue(props.encounter, 'waves', waves);
	};

	const changeCount = (wave: EncounterWave, slot: EncounterSlot, delta: number) => {
		const count = slot.count + delta;
		if (count > 0) {
			props.changeValue(slot, 'count', count);
		} else {
			const slots = wave.slots.filter(s => s.id !== slot.id);
			props.changeValue(wave, 'slots', slots);
		}
	};

	const getWave = (wave: EncounterWave) => {
		return (
			<div key={wave.id} className='wave-section'>
				<div className='subheading'>
					<InfoPanel
						content={wave.name}
						info={[ `${Collections.sum(wave.slots.filter(slot => slot.threatType === ThreatType.Monster), slot => slot.count)} monsters` ]}
						actions={
							props.mode === 'edit' ?
								<Flex gap='small'>
									{props.encounter.waves.length > 1 ? <Button icon={<IconTrash />} onClick={() => removeWave(wave)} /> : null}
								</Flex>
								: null
						}
					/>
				</div>
				{wave.slots.map(slot => getSlot(wave, slot))}
				{wave.slots.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Empty' /> : null}
			</div>
		);
	};

	const getSlot = (wave: EncounterWave, slot: EncounterSlot) => {
		let name = '';
		const info = [];
		let onClick = undefined;
		switch (slot.threatType) {
			case ThreatType.Monster: {
				const monster = props.monsters.find(m => m.id === slot.threatID);
				if (monster) {
					name = monster.name;
					info.push(MonsterLogic.getLevelAndRole(monster));
					info.push(MonsterLogic.getPhenotype(monster));
					onClick = () => setSelectedMonster(monster);
				} else {
					name = 'Monster Not Found';
				}
				break;
			}
		}

		return (
			<div key={slot.id} className='slot-section'>
				<InfoPanel
					content={
						<ListItemPanel
							title={name}
							info={info}
							onClick={onClick}
						/>
					}
					info={`x${slot.count}`}
					actions={
						props.mode === 'edit' ?
							<Flex gap='small'>
								<Button icon={<IconCircleMinus />} onClick={() => changeCount(wave, slot, -1)} />
								<Button icon={<IconCirclePlus />} onClick={() => changeCount(wave, slot, 1)} />
							</Flex>
							: null
					}
				/>
			</div>
		);
	};

	return (
		<div id={props.encounter.id} className='encounter-stat-block'>
			<div className='main-header'>
				<div className='row'>
					<div className='cell wide big'>
						<EditablePanel
							editable={props.mode === 'edit'}
							viewer={props.encounter.name || 'Unnamed Encounter'}
							editor={<StringField label='Name' value={props.encounter.name} onChange={value => props.changeValue(props.encounter, 'name', value)} />}
						/>
					</div>
					<div className='cell right big'>
						<EditablePanel
							editable={false}
							viewer={<div>{EncounterLogic.getXP(props.encounter, props.monsters)} XP</div>}
							editor={null}
						/>
					</div>
				</div>
			</div>
			{props.encounter.waves.map(getWave)}
			{
				props.mode === 'edit' ?
					<div className='subheading'>
						<InfoPanel
							content=''
							actions={<Button icon={<IconCirclePlus />} onClick={addWave} />}
						/>
					</div>
					: null
			}
			<Drawer
				open={selectedMonster != null}
				width='50%'
				onClose={() => setSelectedMonster(null)}
			>
				{selectedMonster ? <MonsterStatBlock mode='view' monster={selectedMonster} changeValue={() => null} /> : null}
			</Drawer>
		</div>
	);
}

export { EncounterStatBlock };
