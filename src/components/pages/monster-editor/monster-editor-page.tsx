import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { Button, Flex, Typography } from 'antd';
import { useState } from 'react';

import { MonsterLogic } from '../../../logic/monster-logic';

import { Monster } from '../../../models/monster';

import { InfoPanel } from '../../panels';
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
	};

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
					<Typography.Title level={4}>Suggested Stats</Typography.Title>
					<InfoPanel content='Hit Points' info={MonsterLogic.getHP(monster)} />
					<InfoPanel content='Armor Class' info={MonsterLogic.getAC(monster)} />
					<InfoPanel content='Fort / Reflex / Will' info={MonsterLogic.getNAD(monster)} />
					<InfoPanel content='Attack Bonus' info={'+' + MonsterLogic.getAttack(monster)} />
					<InfoPanel content='Average Damage' info={MonsterLogic.getAverageDamage(monster)} />
				</div>
			</div>
		</div>
	);
};

export { MonsterEditorPage };
