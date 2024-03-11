import { IconCircleCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { Button } from 'antd';
import { useState } from 'react';

import './editable-panel.scss';

interface Props {
	editable: boolean;
	viewer: React.ReactNode;
	editor: React.ReactNode;
	onDelete: (() => void) | null;
}

const EditablePanel = (props: Props) => {
	const [ editing, setEditing ] = useState(false);

	const toggleEditing = () => {
		setEditing(!editing);
	};

	let style = 'editable-panel';
	if (editing) {
		style += ' highlighted';
	}

	return (
		<div className={style}>
			{
				editing ?
					<div className='editable-panel-content'>{props.editor}</div>
					:
					<div className='editable-panel-content'>{props.viewer}</div>
			}
			{
				props.editable ?
					<div className='editable-panel-actions'>
						{!editing ? <Button icon={<IconEdit />} onClick={() => toggleEditing()} /> : null}
						{editing ? <Button icon={<IconCircleCheck />} onClick={() => toggleEditing()} /> : null}
						{editing && props.onDelete ? <Button icon={<IconTrash />} onClick={() => props.onDelete ? props.onDelete() : null} /> : null}
					</div>
					:
					null
			}
		</div>
	);
}

export { EditablePanel };
