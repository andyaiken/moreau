import localforage from 'localforage';
import { useState } from 'react';

import { Monster } from '../../models/monster';
import { View } from '../../models/view';

import { Utils } from '../../utils/utils';

import { MonsterEditorPage } from '../pages/monster-editor/monster-editor-page';
import { MonstersPage } from '../pages/monsters/monsters-page';

import './main.scss';

interface Props {
	officialMonsters: Monster[];
	homebrewMonsters: Monster[];
}

const Main = (props: Props) => {
	const [ view, setView ] = useState<View>({ type: 'monster-list', data: null });
	const [ homebrewMonsters, setHomebrewMonsters ] = useState<Monster[]>(props.homebrewMonsters);

	const persistMonsters = Utils.debounce(() => {
		localforage.setItem<Monster[]>('moreau-homebrew-monsters', homebrewMonsters);
	});

	const getContent = () => {
		switch (view.type) {
			case 'monster-list':
				return <MonstersPage
					officialMonsters={props.officialMonsters}
					homebrewMonsters={props.homebrewMonsters}
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
						setView({ type: 'monster-editor', data: copy });
					}}
					deleteMonster={monster => {
						const filtered = homebrewMonsters.filter(m => m.id !== monster.id);
						setHomebrewMonsters(filtered);
						persistMonsters();
					}}
				/>;
			case 'monster-editor':
				return <MonsterEditorPage
					monster={view.data as Monster}
					save={monster => {
						const index = homebrewMonsters.findIndex(m => m.id === monster.id);
						if (index !== -1) {
							homebrewMonsters[index] = monster;
							setHomebrewMonsters(homebrewMonsters);
							persistMonsters();
						}
						setView({ type: 'monster-list', data: null });
					}}
					cancel={() => {
						setView({ type: 'monster-list', data: null });
					}}
				/>;
		}

		return null;
	}

	return (
		<div className='main'>
			<div className='main-header'>
				Moreau
			</div>
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
