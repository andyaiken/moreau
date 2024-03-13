import { Divider, Flex, Typography } from 'antd';

import './home-page.scss';

const HomePage = () => {
	return (
		<div className='home-page'>
			<Flex vertical={true} gap='small'>
				<Typography.Title>Welcome to Moreau.</Typography.Title>
				<Divider />
				<div>Moreau is an app for D&D 4E DMs.</div>
				<Divider />
				<div>Moreau helps you to <b>create unforgettable monsters</b>.</div>
				<ul>
					<li>Thing One</li>
					<li>Thing Two</li>
				</ul>
				<Divider />
				<div>Moreau helps you to <b>design exciting encounters</b>.</div>
				<ul>
					<li>Thing One</li>
					<li>Thing Two</li>
				</ul>
			</Flex>
		</div>
	);
};

export { HomePage };
