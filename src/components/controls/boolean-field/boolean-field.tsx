import { Switch } from '@mui/material';
import React from 'react';

import './boolean-field.css';

interface Props {
	label: string;
	value: boolean;
	onChange: (value: boolean) => void;
};

interface State {
};

export class BooleanField extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className='boolean-field'>
				<div>{this.props.label}</div>
				<Switch checked={this.props.value} onChange={e => this.props.onChange(e.target.checked)} />
			</div>
		);
	};
};
