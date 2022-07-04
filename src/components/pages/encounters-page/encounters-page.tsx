import { Component } from 'react';

import './encounters-page.css';

interface Props {
};

interface State {
};

export class EncountersPage extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
		};
	};

	render = () => {
		return (
			<div className='encounters-page'>
				Encounters
			</div>
		);
	};
};
