import './number-field.scss';
import { InputNumber } from 'antd';

interface Props {
	label: string;
	value: number;
	disabled?: boolean;
	validate?: (value: number) => boolean;
	onChange: (value: number) => void;
}

const NumberField = (props: Props) => {
	const onChange = (value: number | null) => {
		if (value !== null) {
			if (!props.validate || props.validate(value)) {
				props.onChange(value);
			}
		}
	};

	return (
		<div className='number-field'>
			<div className='number-field-label'>{props.label}</div>
			<InputNumber
				className='number-field-control'
				value={props.value}
				disabled={props.disabled}
				onChange={value => onChange(value)}
			/>
		</div>
	);
}

export { NumberField };
