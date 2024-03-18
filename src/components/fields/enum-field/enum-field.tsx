import { Select } from 'antd';

import './enum-field.scss';

interface Props {
	label: string;
	options: unknown[];
	value: unknown;
	disabled?: boolean;
	format: (value: unknown) => string;
	isDisabled: (value: unknown) => boolean;
	onChange: (value: unknown) => void;
}

const EnumField = (props: Props) => {
	const options = props.options.map(o => {
		return {
			value: o,
			label: props.format(o),
			disabled: props.isDisabled(o)
		};
	});

	return (
		<div className='enum-field'>
			<div className='enum-field-label'>{props.label}</div>
			<Select
				className='enum-field-control'
				defaultValue='Select...'
				options={options}
				value={props.value}
				disabled={props.disabled}
				onChange={props.onChange}
			/>
		</div>
	);
}

export { EnumField };
