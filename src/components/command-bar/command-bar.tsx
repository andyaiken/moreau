import React from 'react';

import './command-bar.css';

interface Props {
	left: React.ReactNode;
	right: React.ReactNode;
};

interface State {
};

export class CommandBar extends React.Component<Props, State> {
	static defaultProps = {
		left: null,
		right: null
	};

	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className='command-bar'>
				{this.props.left}
				{this.props.right}
			</div>
		);
	}
}
