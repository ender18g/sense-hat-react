import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image, Button } from '@chakra-ui/react';
import Chart from './Chart';
import ENDPOINT from './Endpoint';
import axios from 'axios';

const AccelGraph = () => {
	const [ response, setResponse ] = useState({ x: 0, y: 0, z: 0 });
	const [ log, setLog ] = useState([]);
	const [ show, setShow ] = useState('x');

	useEffect(
		() => {
			const intID = setInterval(() => {
				axios.get(ENDPOINT + '/accelerometer').then((res) => {
					console.log(res.data);
					setResponse(res.data);
				});
			}, 100);

			return () => clearInterval(intID);
		},
		[ show ]
	);

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
				Accelerometer Charts
			</Heading>
			<Chart unit="G" data={log} plotKey={show} />
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

export default AccelGraph;
