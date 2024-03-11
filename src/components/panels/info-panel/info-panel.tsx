import './info-panel.scss';

interface Props {
	content: React.ReactNode;
	info?: React.ReactNode;
	actions?: React.ReactNode;
}

const InfoPanel = (props: Props) => {
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
		<div className='info-panel'>
			{content}
			{info}
			{actions}
		</div>
	);
}

export { InfoPanel };
