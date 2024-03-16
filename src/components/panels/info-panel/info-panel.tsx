import './info-panel.scss';

interface Props {
	content: React.ReactNode;
	info?: React.ReactNode;
	actions?: React.ReactNode;
}

const InfoPanel = (props: Props) => {
	let content = null;
	if ((props.content !== null) && (props.content !== undefined)) {
		content = (
			<div className='info-panel-content'>
				{props.content}
			</div>
		);
	}

	let info = null;
	if ((props.info !== null) && (props.info !== undefined)) {
		info = (
			<div className='info-panel-info'>
				{props.info}
			</div>
		);
	}

	let actions = null;
	if ((props.actions !== null) && (props.actions !== undefined)) {
		actions = (
			<div className='info-panel-actions'>
				{props.actions}
			</div>
		);
	}

	return (
		<div className='info-panel'>
			{content}
			{info}
			{actions}
		</div>
	);
}

export { InfoPanel };
