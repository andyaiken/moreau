import './info-panel.css';

interface Props {
	content: React.ReactNode;
	info?: React.ReactNode;
	actions?: React.ReactNode;
	outlined?: boolean;
	selected?: boolean;
}

const InfoPanel = (props: Props) => {
	let style = 'info-panel';
	if (props.outlined) {
		style += ' outlined';
	}
	if (props.selected) {
		style += ' selected';
	}

	let content = null;
	if (props.content) {
		content = (
			<div className='info-panel-content'>
				{props.content}
			</div>
		);
	}

	let info = null;
	if (props.info) {
		info = (
			<div className='info-panel-info'>
				{props.info}
			</div>
		);
	}

	let actions = null;
	if (props.actions) {
		actions = (
			<div className='info-panel-actions'>
				{props.actions}
			</div>
		);
	}

	return (
		<div className={style}>
			{content}
			{info}
			{actions}
		</div>
	);
}

export { InfoPanel };
