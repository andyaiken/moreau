import { Backdrop, Drawer } from '@mui/material';
import { Component } from 'react';

import { EncountersPage } from '../pages/encounters-page';
import { MonstersPage } from '../pages/monsters-page';
import { WelcomePage } from '../pages/welcome-page';
import { StatBlock } from '../stat-block';

import { Monster } from '../../models/monster';

import './moreau.css';

interface Props {
};

interface State {
	selectedPage: string | null;
	selectedMonster: Monster | null;
};

export class Moreau extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			selectedPage: null,
			selectedMonster: null
		};
	};

	setSelectedPage = (page: string) => {
		this.setState({
			selectedPage: page
		});
	};

	setSelectedMonster = (monster: Monster | null) => {
		this.setState({
			selectedMonster: monster
		});
	};

	render = () => {
		let content = null;
		switch (this.state.selectedPage) {
		case 'monsters':
			content = (
				<MonstersPage onSelectMonster={monster => this.setSelectedMonster(monster)} />
			);
			break;
		case 'encounters':
			content = (
				<EncountersPage />
			);
			break;
		}
		if (!content) {
			content = (
				<WelcomePage />
			);
		}

		let drawer = null;
		if (this.state.selectedMonster) {
			drawer = (
				<div className='drawer-content'>
					<StatBlock monster={this.state.selectedMonster as Monster} />
				</div>
			);
		}

		return (
			<div className='moreau'>
				<HeaderPanel />
				{content}
				<FooterPanel selectedPage={this.state.selectedPage} onSelect={page => this.setSelectedPage(page)} />
				<Backdrop open={this.state.selectedMonster !== null} onClick={() => this.setSelectedMonster(null)} />
				<Drawer anchor='right' variant='persistent' open={this.state.selectedMonster !== null}>
					{drawer}
				</Drawer>
			</div>
		);
	};
};

interface HeaderPanelProps {
};

interface HeaderPanelState {
};

class HeaderPanel extends Component<HeaderPanelProps, HeaderPanelState> {
	constructor(props: HeaderPanelProps) {
		super(props);

		this.state = {
		};
	};

	render = () => {
		return (
			<div className='header-panel'>
				<div className='app-title'>Moreau</div>
			</div>
		);
	};
};

interface FooterPanelProps {
	selectedPage: string | null;
	onSelect: (page: string) => void;
};

interface FooterPanelState {
};

class FooterPanel extends Component<FooterPanelProps, FooterPanelState> {
	constructor(props: FooterPanelProps) {
		super(props);

		this.state = {
		};
	};

	render = () => {
		return (
			<div className='footer-panel'>
				<div className={this.props.selectedPage === 'monsters' ? 'footer-tab selected' : 'footer-tab'} onClick={() => this.props.onSelect('monsters')}>Monsters</div>
				<div className={this.props.selectedPage === 'encounters' ? 'footer-tab selected' : 'footer-tab'} onClick={() => this.props.onSelect('encounters')}>Encounters</div>
			</div>
		);
	};
};
