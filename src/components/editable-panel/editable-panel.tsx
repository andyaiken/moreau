import { Delete, Done, Edit } from '@mui/icons-material';
import { ButtonGroup, IconButton } from '@mui/material';
import React from 'react';

import './editable-panel.css';

interface Props {
	editable: boolean;
	outlined: boolean;
	viewer: React.ReactNode;
	editor: React.ReactNode;
	onDelete: (() => void) | null;
}

interface State {
	editing: boolean;
}

export class EditablePanel extends React.Component<Props, State> {
	static defaultProps = {
		editable: true,
		outlined: false,
		onDelete: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			editing: false
		};
	};

	toggleEditing = () => {
		this.setState({
			editing: !this.state.editing
		});
	};

	render() {
		let style = 'editable-panel';
		if (this.state.editing && this.props.outlined) {
			style += ' outlined';
		}

		let actions = null;
		if (this.props.editable) {
			actions = (
				<ButtonGroup className='editable-panel-actions' variant='text' orientation='vertical'>
					{!this.state.editing ? <IconButton onClick={() => this.toggleEditing()}><Edit /></IconButton> : null}
					{this.state.editing ? <IconButton onClick={() => this.toggleEditing()}><Done /></IconButton> : null}
					{this.state.editing && this.props.onDelete ? <IconButton onClick={() => this.props.onDelete ? this.props.onDelete() : null}><Delete /></IconButton> : null}
				</ButtonGroup>
			);
		}

		return (
			<div className={style}>
				{this.state.editing ? <div className='editable-panel-content'>{this.props.editor}</div> : <div className='editable-panel-content'>{this.props.viewer}</div>}
				{actions}
			</div>
		);
	};
}
