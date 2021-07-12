import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image, Button } from '@chakra-ui/react';

import Chart from './Chart';

import ENDPOINT from './Endpoint';

const Rotation = () => {
	const [ response, setResponse ] = useState({ roll: 0, pitch: 0, yaw: 0 });
	const [ log, setLog ] = useState([]);
	const [ show, setShow ] = useState('roll');

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.on('imu', (data) => {
			setResponse(data.data.orientation);
		});

		return () => socket.disconnect();
	}, []);

	useEffect(
		() => {
			setLog([ ...log.slice(-50), response ]);
		},
		[ response ]
	);

	const toggleData = (event) => {
		setShow(event.target.name);
	};

	return (
		<Box>
			<Heading my="5" textAlign="center" letterSpacing=".1em">
				IMU Charts
			</Heading>
			<Chart data={log} plotKey={show} />
			<Flex my="7" justifyContent="center">
				{Object.keys(response).map((k, i) => (
					<Button mx="2" key={i} onClick={toggleData} name={k}>
						{k.toUpperCase()}
					</Button>
				))}
			</Flex>
		</Box>
	);
};

export default Rotation;
