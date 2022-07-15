import React from 'react';

import './number-field.css';

interface Props {
	label: string;
	value: number;
	validate: (value: number) => boolean;
	onChange: (value: number) => void;
};

interface State {
};

export class NumberField extends React.Component<Props, State> {
	static defaultProps = {
		validate: (value: number) => true
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	onChange = (value: string) => {
		const n = parseInt(value);
		if (this.props.validate(n)) {
			this.props.onChange(n);
		}
	};

	render() {
		return (
			<div className='number-field'>
				<div className='number-field-label'>{this.props.label}</div>
				<input type='number' value={this.props.value} onChange={e => this.onChange(e.target.value)} />
			</div>
		);
	};
};
