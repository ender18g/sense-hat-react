import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image, Button } from '@chakra-ui/react';
import Chart from './Chart';
import axios from 'axios';
import ENDPOINT from './Endpoint';

const GenericGraph = (props) => {
	const { data } = props;

	const [ response, setResponse ] = useState(0);
	const [ log, setLog ] = useState([]);
	const [ show, setShow ] = useState(data[0]);

	useEffect(
		() => {
			const intID = setInterval(() => {
				axios.get(ENDPOINT + '/' + show.name).then((res) => {
					console.log(res.data);
					setResponse({ [show.name]: res.data });
				});
			}, 100);

			return () => clearInterval(intID);
		},
		[ show ]
	);

	useEffect(
		() => {
			if (response === 0) return;
			setLog([ ...log.slice(-200), response ]);
		},
		[ response ]
	);

	const toggleData = (i) => {
		setShow(data[i]);
		setLog([]);
		setResponse(0);
	};

	return (
		<Box>
			<Heading my="5" textAlign="center" letterSpacing=".1em">
				Sense Hat Charts
			</Heading>
			<Chart unit={show.unit} data={log} plotKey={show.name} />
			<Flex my="7" justifyContent="center">
				{data.map((item, i) => (
					<Button mx="2" key={i} onClick={() => toggleData(i)} name={item.name}>
						{item.name.toUpperCase()}
					</Button>
				))}
			</Flex>
		</Box>
	);
};

export default GenericGraph;
