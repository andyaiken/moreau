import { IconCircleMinus, IconCirclePlus, IconTrash } from '@tabler/icons-react';
import { Button, Empty, Flex } from 'antd';

import { ThreatType } from '../../../enums/enums';

import { EncounterLogic } from '../../../logic/encounter-logic';
import { Factory } from '../../../logic/factory';

import { Encounter, EncounterSlot, EncounterWave } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

import { StringField } from '../../fields';
import { EditablePanel, InfoPanel } from '../../panels';

import './encounter-stat-block.scss';

interface Props {
	mode: 'view' | 'edit';
	encounter: Encounter,
	monsters: Monster[];
	changeValue: (source: object, field: string, value: unknown) => void;
}

const EncounterStatBlock = (props: Props) => {
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
						content={wave.name || 'Wave'} 
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
		switch (slot.threatType) {
			case ThreatType.Monster: {
				const monster = props.monsters.find(m => m.id === slot.threatID);
				name = monster ? (monster.name || 'Unknown Monster') : 'Monster Not Found';
				break;
			}
		}

		return (
			<div key={slot.id} className='slot-section'>
				<InfoPanel
					content={name}
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
							content={null} 
							actions={<Button icon={<IconCirclePlus />} onClick={addWave} />}
						/>
					</div>
					: null
			}
		</div>
	);
}

export { EncounterStatBlock };
