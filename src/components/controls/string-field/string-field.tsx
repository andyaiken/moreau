import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import './string-field.css';

interface Props {
	label: string;
	value: string;
	placeholder: string;
	multiLine: boolean;
	minLength: number;
	debounce: boolean;
	onChange: (value: string) => void;
};

interface State {
};

export class StringField extends React.Component<Props, State> {
	static defaultProps = {
		placeholder: '',
		multiLine: false,
		minLength: 0,
		debounce: true,
		onPressEnter: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		if (this.props.multiLine) {
			return (
				<div className='string-field multi-line'>
					<div>{this.props.label}</div>
					<DebounceInput
						element={'textarea'}
						placeholder={this.props.placeholder}
						minLength={this.props.minLength}
						debounceTimeout={this.props.debounce ? 500 : 100}
						value={this.props.value}
						rows={5}
						onChange={event => this.props.onChange(event.target.value)}
					/>
				</div>
			);
		}

		let style = 'string-field single-line';
		if (!this.props.label) {
			style += ' full-width';
		}

		return (
			<div className={style}>
				<div>{this.props.label}</div>
				<DebounceInput
					minLength={this.props.minLength}
					debounceTimeout={this.props.debounce ? 500 : 100}
					value={this.props.value}
					placeholder={this.props.placeholder}
					onChange={event => this.props.onChange(event.target.value)}
				/>
			</div>
		);
	}
}
