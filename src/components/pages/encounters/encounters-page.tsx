import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Flex, List } from 'antd';
import { useState } from 'react';

import { EncounterLogic } from '../../../logic/encounter-logic';

import { Encounter } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

import { Expander } from '../../controls';
import { EnumField, NumberField } from '../../fields';
import { InfoPanel, ListItemPanel } from '../../panels';
import { EncounterStatBlock } from '../../stat-blocks';

import './encounters-page.scss';

interface Props {
	encounters: Encounter[];
	monsters: Monster[];
	encounterTemplates: Encounter[];
	createEncounter: () => Encounter;
	createEncounterFromTemplate: (templateID: string, level: number) => Encounter;
	editEncounter: (encounter: Encounter) => void;
	deleteEncounter: (encounter: Encounter) => void;
}

const EncountersPage = (props: Props) => {
	const [ selectedEncounter, setSelectedEncounter ] = useState<Encounter | null>(null);
	const [ selectedTemplateID, setSelectedTemplateID ] = useState<string>(props.encounterTemplates[0].id);
	const [ selectedTemplateLevel, setSelectedTemplateLevel ] = useState(1);

	const createEncounter = () => {
		const encounter = props.createEncounter();
		setSelectedEncounter(encounter);
	};

	const editEncounter = () => {
		if (selectedEncounter) {
			props.editEncounter(selectedEncounter);
		}
	};

	const deleteEncounter = () => {
		if (selectedEncounter) {
			props.deleteEncounter(selectedEncounter);
			setSelectedEncounter(null);
		}
	};

	const createEncounterFromTemplate = () => {
		if (selectedTemplateID) {
			const encounter = props.createEncounterFromTemplate(selectedTemplateID, selectedTemplateLevel);
			setSelectedEncounter(encounter);
		}
	};

	return (
		<div className='encounters-page'>
			<div className='encounters-page-column encounter-tools'>
				<InfoPanel content='Encounters' info={props.encounters.length} />
				<Button block={true} type='primary' onClick={createEncounter}>Create Encounter</Button>
				<Expander title='Create Using A Template'>
					<EnumField
						options={props.encounterTemplates.map(et => et.id)}
						value={selectedTemplateID}
						format={value => props.encounterTemplates.find(et => et.id === value as string)?.name ?? ''}
						isDisabled={() => false}
						onChange={value => setSelectedTemplateID(value as string)}
					/>
					<NumberField
						label='Level'
						value={selectedTemplateLevel}
						onChange={setSelectedTemplateLevel}
					/>
					<Button block={true} onClick={createEncounterFromTemplate}>Create Encounter</Button>
				</Expander>
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
								<EncounterStatBlock
									mode='view'
									encounter={selectedEncounter}
									monsters={props.monsters}
									onTemplateSelected={() => null}
									changeValue={() => null}
								/>
							</div>
						</div>
						: null
				}
			</div>
		</div>
	);
};

export { EncountersPage };
