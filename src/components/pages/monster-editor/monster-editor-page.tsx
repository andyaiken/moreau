import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Flex } from 'antd';
import { useState } from 'react';

import { Monster } from '../../../models/monster';

import { MonsterStatBlock } from '../../stat-blocks';

import './monster-editor-page.scss';

interface Props {
	monster: Monster;
	save: (monster: Monster) => void;
	cancel: () => void;
}

const MonsterEditorPage = (props: Props) => {
	const [ monster, setMonster ] = useState(props.monster);

	const changeMonsterValue = (source: object, field: string, value: unknown) => {
		(source as { [field: string]: unknown })[field] = value;

		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		setMonster(copy);
	}

	return (
		<div className='monster-editor-page'>
			<Flex gap='small'>
				<Button icon={<IconCircleCheck />} onClick={() => props.save(monster)} />
				<Button icon={<IconCircleX />} onClick={() => props.cancel()} />
			</Flex>
			<div className='stat-block-container'>
				<MonsterStatBlock mode='edit' monster={monster} changeValue={changeMonsterValue} />
			</div>
		</div>
	);
};

export { MonsterEditorPage };
