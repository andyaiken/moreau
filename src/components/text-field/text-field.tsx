import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import './text-field.css';

interface Props {
	className: string;
	text: string;
	placeholder: string;
	multiLine: boolean;
	minLength: number;
	disabled: boolean;
	debounce: boolean;
	onChange: (value: string) => void;
}

interface State {
}

export class TextField extends React.Component<Props, State> {
	public static defaultProps = {
		className: '',
		placeholder: '',
		multiLine: false,
		minLength: 0,
		disabled: false,
		debounce: true,
		onPressEnter: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	public render() {
		let style = 'text-field';
		if (this.props.className) {
			style += ' ' + this.props.className;
		}
		if (this.props.disabled) {
			style += ' disabled';
		}

		if (this.props.multiLine) {
			return (
				<DebounceInput
					element={'textarea'}
					minLength={this.props.minLength}
					debounceTimeout={this.props.debounce ? 500 : 100}
					className={style}
					value={this.props.text}
					placeholder={this.props.placeholder}
					rows={5}
					onChange={event => this.props.onChange(event.target.value)}
				/>
			);
		}

		return (
			<DebounceInput
				minLength={this.props.minLength}
				debounceTimeout={this.props.debounce ? 500 : 100}
				className={style}
				value={this.props.text}
				placeholder={this.props.placeholder}
				onChange={event => this.props.onChange(event.target.value)}
			/>
		);
	}
}
