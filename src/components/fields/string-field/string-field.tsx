import { Input } from 'antd';

import './string-field.scss';

interface Props {
	label?: string;
	placeholder?: string;
	value: string;
	disabled?: boolean;
	onChange: (value: string) => void;
}

const StringField = (props: Props) => {
	return (
		<div className='string-field'>
			{props.label ? <div className='string-field-label'>{props.label}</div> : null}
			<Input
				className='string-field-control'
				placeholder={props.placeholder}
				value={props.value}
				disabled={props.disabled}
				allowClear={true}
				onChange={e => props.onChange(e.target.value)}
			/>
		</div>
	);
}

const MultilineField = (props: Props) => {
	return (
		<div className='multiline-field'>
			{props.label ? <div className='multiline-field-label'>{props.label}</div> : null}
			<Input.TextArea
				className='multiline-field-control'
				placeholder={props.placeholder}
				value={props.value}
				disabled={props.disabled}
				rows={5}
				onChange={e => props.onChange(e.target.value)}
			/>
		</div>
	);
}

export { StringField, MultilineField };
