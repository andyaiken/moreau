import { Divider } from '@mui/material';
import { Component } from 'react';

import './welcome-page.css';

interface Props {
};

interface State {
};

export class WelcomePage extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
		};
	};

	render = () => {
		return (
			<div className='welcome-page'>
				<div>
					<div>Welcome to <b>Moreau</b>, the app for D&amp;D 4E.</div>
					<Divider sx={{ margin: '20px 0' }} />
					<div>It's current features are:</div>
					<ul>
						<li>View monster stat blocks - click the <b>Monsters</b> tab at the bottom of the page</li>
					</ul>
				</div>
			</div>
		);
	};
};
