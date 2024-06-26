import { Divider, Flex, Typography } from 'antd';

import './home-page.scss';

const HomePage = () => {
	return (
		<div className='home-page'>
			<Flex className='container' vertical={true} gap='small'>
				<Typography.Title>Welcome to Moreau.</Typography.Title>
				<Divider />
				<div>Moreau is an app for DMs running D&D 4E.</div>
				<Divider />
				<div>Moreau helps you to <b>create unforgettable monsters</b> and <b>design exciting encounters</b>.</div>
			</Flex>
		</div>
	);
};

export { HomePage };
