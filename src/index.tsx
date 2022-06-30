import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { Moreau } from './components/moreau';

const element = document.getElementById('root');
if (element) {
	ReactDOM
		.createRoot(element)
		.render(
			<StrictMode>
				<CssBaseline />
				<Moreau />
			</StrictMode>
		);
}
