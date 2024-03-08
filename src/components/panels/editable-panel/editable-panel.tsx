import { CheckCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {  useState } from 'react';

import './editable-panel.css';

interface Props {
	editable: boolean;
	outlined: boolean;
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
	if (editing && props.outlined) {
		style += ' outlined';
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
						{!editing ? <Button onClick={() => toggleEditing()}><EditOutlined /></Button> : null}
						{editing ? <Button onClick={() => toggleEditing()}><CheckCircleOutlined /></Button> : null}
						{editing && props.onDelete ? <Button onClick={() => props.onDelete ? props.onDelete() : null}><DeleteOutlined /></Button> : null}
					</div>
					:
					null
			}
		</div>
	);
}

export { EditablePanel };
