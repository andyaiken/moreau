import React from 'react';

import './info-panel.css';

interface Props {
	content: React.ReactNode;
	info: React.ReactNode;
	selected: boolean;
	onClick: (() => void) | null;
}

interface State {
}

export class InfoPanel extends React.Component<Props, State> {
	public static defaultProps = {
		content: null,
		info: null,
		selected: false,
		onClick: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	public render() {
		let style = 'info-panel';
		if (this.props.onClick) {
			style += ' clickable';
		}
		if (this.props.selected) {
			style += ' selected';
		}

		let content = null;
		if (this.props.content) {
			content = (
				<div className='info-panel-content'>
					{this.props.content}
				</div>
			);
		}

		let info = null;
		if (this.props.info) {
			info = (
				<div className='info-panel-info'>
					{this.props.info}
				</div>
			);
		}

		return (
			<div className={style} onClick={() => this.props.onClick ? this.props.onClick() : null}>
				{content}
				{info}
			</div>
		);
	}
}
