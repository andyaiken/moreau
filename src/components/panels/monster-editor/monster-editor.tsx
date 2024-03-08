import { Monster } from '../../../models/monster';
import { StatBlock } from '../stat-block/stat-block';

import './monster-editor.css';

interface Props {
	monster: Monster;
	changeValue: (source: object, field: string, value: unknown) => void;
}

const MonsterEditor = (props: Props) => {
	return (
		<div className='monster-editor'>
			<div className='stat-block-section scrollable'>
				<StatBlock mode='edit' monster={props.monster} changeValue={(source, field, value) => props.changeValue(source, field, value)} />
			</div>
			<div className='editor-section scrollable hidden'>
			</div>
		</div>
	);
}

export { MonsterEditor };
