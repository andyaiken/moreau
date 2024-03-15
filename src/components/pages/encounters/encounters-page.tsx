import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Flex, List } from 'antd';
import { useState } from 'react';

import { Encounter } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

import { InfoPanel, ListItemPanel } from '../../panels';
import { EncounterStatBlock } from '../../stat-blocks';

import './encounters-page.scss';
import { EncounterLogic } from '../../../logic/encounter-logic';

interface Props {
	encounters: Encounter[];
	monsters: Monster[];
	createEncounter: () => Encounter;
	editEncounter: (encounter: Encounter) => void;
	deleteEncounter: (encounter: Encounter) => void;
}

const EncountersPage = (props: Props) => {
	const [ selectedEncounter, setSelectedEncounter ] = useState<Encounter | null>(null);

	const createEncounter = () => {
		const encounter = props.createEncounter();
		setSelectedEncounter(encounter);
	}

	const editEncounter = () => {
		if (selectedEncounter) {
			props.editEncounter(selectedEncounter);
		}
	}

	const deleteEncounter = () => {
		if (selectedEncounter) {
			props.deleteEncounter(selectedEncounter);
			setSelectedEncounter(null);
		}
	}

	return (
		<div className='encounters-page'>
			<div className='encounters-page-column encounter-tools'>
				<Button block={true} type='primary' onClick={createEncounter}>Create Encounter</Button>
				<InfoPanel content='Encounters' info={props.encounters.length} />
			</div>
			<div className='encounters-page-column encounter-list'>
				<List
					dataSource={props.encounters}
					split={false}
					renderItem={(encounter: Encounter) => (
						<List.Item key={encounter.id}>
							<ListItemPanel
								title={encounter.name || 'Unnamed Encounter'}
								info={[
									`${EncounterLogic.getMonsterCount(encounter)} monsters`,
									`${EncounterLogic.getXP(encounter, props.monsters)} XP`
								]}
								isSelected={(selectedEncounter !== null) && (selectedEncounter.id === encounter.id)}
								onClick={() => setSelectedEncounter(encounter)}
							/>
						</List.Item>
					)}
				/>
			</div>
			<div className='encounters-page-column encounter-details'>
				{
					selectedEncounter ?
						<div className='encounter-details-content'>
							<Flex gap='small' align='center'>
								<Button icon={<IconEdit />} onClick={editEncounter} />
								<Button icon={<IconTrash />} onClick={deleteEncounter} />
							</Flex>
							<div className='stat-block-container'>
								<EncounterStatBlock mode='view' encounter={selectedEncounter} monsters={props.monsters} changeValue={() => null} />
							</div>
						</div>
						: null
				}
			</div>
		</div>
	);
};

export { EncountersPage };
