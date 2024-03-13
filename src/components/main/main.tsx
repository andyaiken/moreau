import localforage from 'localforage';
import { Menu } from 'antd';
import { useState } from 'react';

import { Factory } from '../../logic/factory';

import { Encounter } from '../../models/encounter';
import { Monster } from '../../models/monster';
import { View } from '../../models/view';

import { Collections } from '../../utils/collections';
import { Utils } from '../../utils/utils';

import { EncounterEditorPage, EncountersPage, HomePage, MonsterEditorPage, MonstersPage } from '../pages';

import './main.scss';

interface Props {
	officialMonsters: Monster[];
	homebrewMonsters: Monster[];
	encounters: Encounter[];
}

const Main = (props: Props) => {
	const [ view, setView ] = useState<View>({ type: 'home', data: null });
	const [ homebrewMonsters, setHomebrewMonsters ] = useState<Monster[]>(props.homebrewMonsters);
	const [ encounters, setEncounters ] = useState<Encounter[]>(props.encounters);

	const persistMonsters = Utils.debounce(() => {
		localforage.setItem<Monster[]>('moreau-homebrew-monsters', homebrewMonsters);
	});

	const persistEncounters = Utils.debounce(() => {
		localforage.setItem<Encounter[]>('moreau-encounters', encounters);
	});

	const getAllMonsters = () => {
		return ([] as Monster[])
			.concat(Collections.sort(homebrewMonsters, m => m.name))
			.concat(Collections.sort(props.officialMonsters, m => m.name));
	};

	const getContent = () => {
		switch (view.type) {
			case 'home':
				return (
					<HomePage />
				);
			case 'monsters':
				if (view.data === null) {
					return (
						<MonstersPage
							officialMonsters={props.officialMonsters}
							homebrewMonsters={homebrewMonsters}
							createMonster={() => {
								const monster = Factory.createMonster();
								monster.category = 'homebrew';
						
								homebrewMonsters.push(monster);
								setHomebrewMonsters(homebrewMonsters);
								persistMonsters();

								return monster;
							}}
							copyMonster={monster => {
								const copy = JSON.parse(JSON.stringify(monster)) as Monster;

								copy.name = `${copy.name} (copy)`;
								copy.id = Utils.guid();
								copy.auras.forEach(a => a.id = Utils.guid());
								copy.powers.forEach(p => p.id = Utils.guid());
								copy.category = 'homebrew';
						
								homebrewMonsters.push(copy);
								setHomebrewMonsters(homebrewMonsters);
								persistMonsters();
						
								return copy;
							}}
							editMonster={monster => {
								const copy = JSON.parse(JSON.stringify(monster)) as Monster;
								setView({ type: 'monsters', data: copy });
							}}
							deleteMonster={monster => {
								setHomebrewMonsters(homebrewMonsters.filter(m => m.id !== monster.id));
								persistMonsters();
							}}
						/>
					);
				} else {
					return (
						<MonsterEditorPage
							monster={view.data as Monster}
							save={monster => {
								const index = homebrewMonsters.findIndex(m => m.id === monster.id);
								if (index !== -1) {
									homebrewMonsters[index] = monster;
									setHomebrewMonsters(homebrewMonsters);
									persistMonsters();
								}
								setView({ type: 'monsters', data: null });
							}}
							cancel={() => {
								setView({ type: 'monsters', data: null });
							}}
						/>
					);
				}
			case 'encounters':
					if (view.data === null) {
						return (
							<EncountersPage
								encounters={encounters}
								monsters={getAllMonsters()}
								createEncounter={() => {
									const encounter = Factory.createEncounter();
							
									encounters.push(encounter);
									setEncounters(encounters);
									persistEncounters();
			
									return encounter;
								}}
								editEncounter={encounter => {
									const copy = JSON.parse(JSON.stringify(encounter)) as Encounter;
									setView({ type: 'encounters', data: copy });
								}}
								deleteEncounter={encounter => {
									setEncounters(encounters.filter(e => e.id !== encounter.id));
									persistEncounters();
								}}
							/>
						);
					} else {
						return (
							<EncounterEditorPage
								encounter={view.data as Encounter}
								monsters={getAllMonsters()}
								save={encounter => {
									const index = encounters.findIndex(e => e.id === encounter.id);
									if (index !== -1) {
										encounters[index] = encounter;
										setEncounters(encounters);
										persistMonsters();
									}
									setView({ type: 'encounters', data: null });
								}}
								cancel={() => {
									setView({ type: 'encounters', data: null });
								}}
							/>
						);
					}
			}

		return null;
	}

	return (
		<div className='main'>
			<Menu
				mode='horizontal'
				items={[
					{
						label: 'Home',
						key: 'home',
						disabled: view.data !== null
					},
					{
						label: 'Monsters',
						key: 'monsters',
						disabled: view.data !== null
					},
					{
						label: 'Encounters',
						key: 'encounters',
						disabled: view.data !== null
					}
				]}
				selectedKeys={[ view.type ]}
				onClick={e => setView({ type: e.key as 'home' | 'monsters' | 'encounters', data: null })}
			/>
			<div className='main-content'>
				{getContent()}
			</div>
			<div className='main-footer'>
				© Andy Aiken 2024
			</div>
		</div>
	);
};

export { Main };
