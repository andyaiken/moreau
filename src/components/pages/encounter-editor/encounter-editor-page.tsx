import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Flex } from 'antd';
import { useState } from 'react';

import { Encounter } from '../../../models/encounter';
import { Monster } from '../../../models/monster';

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

	const changeEncounterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
		setEncounter(copy);
	}

	return (
		<div className='encounter-editor-page'>
			<Flex gap='small'>
				<Button icon={<IconCircleCheck />} onClick={() => props.save(encounter)} />
				<Button icon={<IconCircleX />} onClick={() => props.cancel()} />
			</Flex>
			<div className='stat-block-container'>
				<EncounterStatBlock mode='edit' encounter={encounter} monsters={props.monsters} changeValue={changeEncounterValue} />
			</div>
		</div>
	);
};

export { EncounterEditorPage };
