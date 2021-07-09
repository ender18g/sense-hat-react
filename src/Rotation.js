import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image } from '@chakra-ui/react';
import spaceShip from './spaceShip.svg';

const ENDPOINT = `http://${window.location.hostname}:5000`;

const Rotation = () => {
	const [ response, setResponse ] = useState({ roll: 0, pitch: 0, yaw: 0 });

	useEffect(() => {
		console.log('connect to ', ENDPOINT);
		const socket = socketIOClient(ENDPOINT);
		socket.on('imu', (data) => {
			setResponse(data.data.orientation);
		});

		return () => socket.disconnect();
	}, []);

	return (
		<Box>
			<Heading my="5" textAlign="center" letterSpacing=".1em">
				IMU Demo
			</Heading>
			<Flex my="5" justifyContent="center">
				<Flex justifyContent="space-between">
					{Object.keys(response).map((item, i) => (
						<Text mx="2" key={i}>
							{item}: {response[item].toFixed(1)}
						</Text>
					))}
				</Flex>
			</Flex>
			<Flex
				style={{
					transform: `rotate(${response.pitch.toFixed(2)}deg)`
				}}
				justifyContent="center"
				height="50vh"
			>
				<Image src={spaceShip} />
			</Flex>
		</Box>
	);
};

export default Rotation;
