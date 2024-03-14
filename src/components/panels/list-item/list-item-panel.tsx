import { Flex, Tag } from 'antd';

import './list-item-panel.scss';

interface Props {
	title: string;
	tags?: string[];
	info?: string[];
	isSelected?: boolean;
}

const ListItemPanel = (props: Props) => {
	let className = 'list-item-panel';
	if (props.isSelected) {
		className += ' selected';
	}

	return (
		<div className={className}>
			<Flex gap='small' align='center' justify='space-between'>
				<b>{props.title}</b>
				{(props.tags || []).map((text, n) => <Tag key={n}>{text}</Tag>)}
			</Flex>
			{(props.info || []).map((text, n) => <div key={n} className='info'>{text}</div>)}
		</div>
	);
}

export { ListItemPanel };
