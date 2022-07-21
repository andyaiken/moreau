import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

import './expander.css';

interface Props {
	title: string;
	children: React.ReactNode[];
};

interface State {
};

export class Expander extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<Accordion className='expander-container'>
				<AccordionSummary className='expander-title' expandIcon={<ExpandMore />}>
					<b>{this.props.title}</b>
				</AccordionSummary>
				<AccordionDetails className='expander-content'>
					{this.props.children}
				</AccordionDetails>
			</Accordion>
		);
	};
};
