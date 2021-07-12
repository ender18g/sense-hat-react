import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image, Button } from '@chakra-ui/react';
import Chart from './Chart';
import axios from 'axios';
import ENDPOINT from './Endpoint';

const PressureGraph = () => {
	const [ response, setResponse ] = useState({ pressure: 1022 });
	const [ log, setLog ] = useState([]);
	const [ show, setShow ] = useState('pressure');

	useEffect(() => {
		const intID = setInterval(() => {
			axios.get(ENDPOINT + '/pressure').then((res) => {
				console.log(res.data);
				setResponse({ pressure: res.data });
			});
		}, 100);

		return () => clearInterval(intID);
	}, []);

	useEffect(
		() => {
			setLog([ ...log.slice(-200), response ]);
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
		</Box>
	);
};

export default PressureGraph;
