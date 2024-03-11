import { Collapse } from 'antd';

import './expander.scss';

interface Props {
	title: string;
	children: React.ReactNode[];
}

const Expander = (props: Props) => {
	const items = [
		{
			key: '1',
			label: props.title,
			children: props.children,
		}
	];
	return (
		<Collapse items={items} />
	);
}

export { Expander };
