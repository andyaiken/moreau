import React from 'react';

import { StatBlock } from '../stat-block';

import { Monster } from '../../models/monster';

import './monster-editor.css';

interface Props {
	monster: Monster;
	changeValue: (source: object, field: string, value: any) => void;
};

interface State {
	currentTab: number;
};

export class MonsterEditor extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentTab: 0
		};
	};

	setCurrentTab = (value: number) => {
		this.setState({
			currentTab: value
		});
	};

	render() {
		return (
			<div className='monster-editor'>
				<div className='stat-block-section scrollable'>
					<StatBlock mode='edit' monster={this.props.monster} changeValue={(source, field, value) => this.props.changeValue(source, field, value)} />
				</div>
				<div className='editor-section scrollable hidden'>
				</div>
			</div>
		);
	}
}
