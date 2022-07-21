import { MenuItem, Select } from '@mui/material';
import React from 'react';

import './enum-field.css';

interface Props {
	label: string;
	options: any[];
	value: any;
	format: (id: any) => string;
	onChange: (id: any) => void;
};

interface State {
};

export class EnumField extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className='enum-field'>
				<div>{this.props.label}</div>
				<Select className='dropdown' value={this.props.value} onChange={e => this.props.onChange(e.target.value)}>
					{this.props.options.map(option => <MenuItem key={option} value={option}>{this.props.format(option)}</MenuItem>)}
				</Select>
			</div>
		);
	};
};
