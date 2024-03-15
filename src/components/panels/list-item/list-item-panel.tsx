import { Flex, Tag } from 'antd';

import './list-item-panel.scss';

interface Props {
	title: string;
	tags?: string[];
	info?: string[];
	isSelected?: boolean;
	onClick?: () => void;
}

const ListItemPanel = (props: Props) => {
	const onClick = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	let className = 'list-item-panel';
	if (props.onClick) {
		className += ' selectable';
	}
	if (props.isSelected) {
		className += ' selected';
	}

	return (
		<div className={className} onClick={onClick}>
			<Flex gap='small' align='center' justify='space-between'>
				<b>{props.title}</b>
				{(props.tags || []).map((text, n) => <Tag key={n}>{text}</Tag>)}
			</Flex>
			{(props.info || []).map((text, n) => <div key={n} className='info'>{text}</div>)}
		</div>
	);
}

export { ListItemPanel };
