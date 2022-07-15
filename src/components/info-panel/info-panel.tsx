import React from 'react';

import './info-panel.css';

interface Props {
	content: React.ReactNode;
	info: React.ReactNode;
	actions: React.ReactNode;
	outlined: boolean;
	selected: boolean;
	onClick: (() => void) | null;
};

interface State {
};

export class InfoPanel extends React.Component<Props, State> {
	static defaultProps = {
		content: null,
		info: null,
		actions: null,
		outlined: false,
		selected: false,
		onClick: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		let style = 'info-panel';
		if (this.props.outlined) {
			style += ' outlined';
		}
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

		let actions = null;
		if (this.props.actions) {
			actions = (
				<div className='info-panel-actions'>
					{this.props.actions}
				</div>
			);
		}

		return (
			<div className={style} onClick={() => this.props.onClick ? this.props.onClick() : null}>
				{content}
				{info}
				{actions}
			</div>
		);
	}
}
