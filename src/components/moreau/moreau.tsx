import { Backdrop, Button, ButtonGroup, Drawer } from '@mui/material';
import { Component } from 'react';

import { CommandBar } from '../command-bar';
import { MonsterEditor } from '../monster-editor';
import { EncountersPage } from '../pages/encounters-page';
import { MonstersPage } from '../pages/monsters-page';
import { WelcomePage } from '../pages/welcome-page';
import { StatBlock } from '../stat-block';

import { monsters as officialMonsters } from '../../data/monsters';

import { Encounter } from '../../models/encounter';
import { Monster } from '../../models/monster';

import { CommonUtils } from '../../utils/common-utils';
import { Factory } from '../../utils/factory';

import './moreau.css';

interface DrawerInfo {
	mode: string;
	data: any;
};

interface Props {
};

interface State {
	monsters: Monster[];
	encounters: Encounter[];
	selectedPage: string | null;
	drawer: DrawerInfo | null;
};

export class Moreau extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		let monsters: Monster[] = [];
		try {
			const str = window.localStorage.getItem('data-monsters');
			if (str) {
				monsters = JSON.parse(str);
			}
		} catch (ex) {
			console.error('Could not parse JSON: ', ex);
		}

		let encounters: Encounter[] = [];
		try {
			const str = window.localStorage.getItem('data-encounters');
			if (str) {
				encounters = JSON.parse(str);
			}
		} catch (ex) {
			console.error('Could not parse JSON: ', ex);
		}

		this.state = {
			monsters: monsters,
			encounters: encounters,
			selectedPage: 'monsters', // TODO: Make this null when we have another page ready
			drawer: null
		};
	};

	setSelectedPage = (page: string) => {
		this.setState({
			selectedPage: page
		});
	};

	setDrawer = (drawer: DrawerInfo | null) => {
		this.setState({
			drawer: drawer
		});
	};

	//#region Monsters page

	viewMonster = (monster: Monster | null) => {
		let drawer = null;
		if (monster) {
			drawer = {
				mode: 'view-monster',
				data: monster
			};
		}
		this.setState({
			drawer: drawer
		});
	};

	createMonster = (category: string) => {
		const monster = Factory.createMonster();
		monster.category = category;

		const monsters = this.state.monsters;
		monsters.push(monster);

		this.setState({
			monsters: monsters
		}, () => {
			this.viewMonster(monster);
		});
	};

	deleteMonster = (monster: Monster) => {
		const monsters = this.state.monsters.filter(m => m.id !== monster.id);
		this.setState({
			monsters: monsters
		});
	};

	copyMonster = (monster: Monster) => {
		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		copy.id = CommonUtils.guid();
		copy.name = `${monster.name} (copy)`;

		const monsters = this.state.monsters;
		monsters.push(copy);

		this.setState({
			monsters: monsters
		}, () => {
			this.viewMonster(copy);
		});
	};

	editMonster = (monster: Monster) => {
		const copy = JSON.parse(JSON.stringify(monster)) as Monster;
		this.setState({
			drawer: {
				mode: 'edit-monster',
				data: {
					monster: copy,
					accept: () => {
						const monsters = this.state.monsters;
						const index = monsters.findIndex(m => m.id === copy.id);
						if (index !== -1) {
							monsters[index] = copy;
							this.setState({
								monsters: monsters,
							}, () => this.viewMonster(copy));
						}
					},
					cancel: () => {
						this.viewMonster(monster);
					}
				}
			}
		});
	};

	//#endregion

	changeValue = (source: object, field: string, value: any) => {
		(source as any)[field] = value;

		this.setState({
			monsters: this.state.monsters,
			encounters: this.state.encounters,
			drawer: this.state.drawer
		});
	};

	//#region Saving

	componentDidUpdate = () => {
		this.saveAfterDelay();
	};

	saveAfterDelay = CommonUtils.debounce(() => {
		this.saveKey(this.state.monsters, 'data-monsters');
		this.saveKey(this.state.encounters, 'data-encounters');
	}, 5 * 1000);

	saveKey = (data: any, key: string) => {
		try {
			const json = JSON.stringify(data);
			window.localStorage.setItem(key, json);
		} catch (ex) {
			console.error('Could not stringify data: ', ex);
		}
	};

	//#endregion

	render = () => {
		let content = null;
		switch (this.state.selectedPage) {
		case 'monsters':
			content = (
				<MonstersPage
					monsters={this.state.monsters}
					officialMonsters={officialMonsters}
					selectMonster={monster => this.viewMonster(monster)}
					createMonster={category => this.createMonster(category)}
					deleteMonster={monster => this.deleteMonster(monster)}
					editMonster={monster => this.editMonster(monster)}
				/>
			);
			break;
		case 'encounters':
			content = (
				<EncountersPage
					encounters={this.state.encounters}
				/>
			);
			break;
		}
		if (!content) {
			content = (
				<WelcomePage />
			);
		}

		let fullWidth = false;
		let drawerHeader = null;
		let drawerContent = null;
		let drawerClosable = false;
		if (this.state.drawer) {
			switch (this.state.drawer.mode) {
			case 'view-monster': {
					const monster = this.state.drawer.data as Monster;
					if (this.state.monsters.includes(monster)) {
						drawerHeader = (
							<CommandBar
								left={
									<ButtonGroup variant='text'>
										<Button onClick={() => this.editMonster(monster)}>Edit</Button>
										<Button onClick={() => this.deleteMonster(monster)}>Delete</Button>
									</ButtonGroup>
								}
								right={
									<Button onClick={() => this.setDrawer(null)}>Close</Button>
								}
							/>
						);
					} else {
						drawerHeader = (
							<CommandBar
								left={
									<Button onClick={() => this.copyMonster(monster)}>Create A Copy</Button>
								}
								right={
									<Button onClick={() => this.setDrawer(null)}>Close</Button>
								}
							/>
						);
					}
					drawerContent = (
						<div className='scrollable'>
							<StatBlock monster={monster} />
						</div>
					);
					drawerClosable = true;
				}
				break;
			case 'edit-monster': {
					const monster = this.state.drawer.data.monster as Monster;
					fullWidth = true;
					drawerContent = (
						<MonsterEditor monster={monster} changeValue={(source, field, value) => this.changeValue(source, field, value)} />
					);
					drawerHeader = (
						<CommandBar
							left={
								<Button onClick={() => (this.state.drawer as DrawerInfo).data.accept()}>Save Changes</Button>
							}
							right={
								<Button onClick={() => (this.state.drawer as DrawerInfo).data.cancel()}>Cancel</Button>
							}
						/>
					);
					drawerClosable = false;
				}
				break;
			};
		}

		return (
			<div className='moreau'>
				<HeaderPanel />
				{content}
				<FooterPanel selectedPage={this.state.selectedPage} onSelect={page => this.setSelectedPage(page)} />
				<Backdrop open={this.state.drawer !== null} onClick={() => drawerClosable ? this.setDrawer(null) : null} />
				<Drawer className={fullWidth ? 'drawer-container full-width' : 'drawer-container'} anchor='right' variant='persistent' open={this.state.drawer !== null}>
					<div className='drawer-header'>
						{drawerHeader}
					</div>
					<div className='drawer-content'>
						{drawerContent}
					</div>
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

	getTab = (text: string, key: string) => {
		let style = 'footer-tab';
		if (this.props.selectedPage === key) {
			style += ' selected';
		}

		return (
			<div className={style} onClick={() => this.props.onSelect(key)}>
				{text}
			</div>
		);
	};

	render = () => {
		return null;

		// TODO: Uncomment this when we want the user to be able to change pages
		/*
		return (
			<div className='footer-panel'>
				{this.getTab('Monsters', 'monsters')}
				{this.getTab('Encounters', 'encounters')}
			</div>
		);
		*/
	};
};
