import { Switch } from 'antd';

import './boolean-field.scss';

interface Props {
	label: string;
	value: boolean;
	disabled?: boolean;
	onChange: (value: boolean) => void;
}

const BooleanField = (props: Props) => {
	return (
		<div className='boolean-field'>
			<div className='boolean-field-label'>{props.label}</div>
			<Switch
				className='boolean-field-control'
				checked={props.value}
				disabled={props.disabled}
				onChange={props.onChange}
			/>
		</div>
	);
}

export { BooleanField };
