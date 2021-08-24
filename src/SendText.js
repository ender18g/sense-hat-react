import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Flex, Text, Box, Heading, Image, Button, Input, Form } from '@chakra-ui/react';
import Chart from './Chart';
import axios from 'axios';
import ENDPOINT from './Endpoint';

const SendText = () => {
	const [ data, setData ] = useState({ text: 'EW370', color: '#1bd5fa', speed: 0.08 });

	const handleSubmit = (e) => {
		if (e) e.preventDefault();
		axios.get(ENDPOINT + '/message', { params: data });
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				}
			: null;
	}

	useEffect(
		() => {
			const interval = setInterval(() => {
				handleSubmit(false);
			}, 5 * 1000);
			return () => clearInterval(interval);
		},
		[ data ]
	);

	useEffect(
		() => {
			console.log(data.color);
			setData({ ...data, ...hexToRgb(data.color) });
		},
		[ data.color ]
	);

	return (
		<Box my="2">
			<Heading size="md" fontWeight="300" textAlign="center">
				Send Text to Sense Hat
			</Heading>
			<Flex my="1" justifyContent="center">
				<Flex p="5" bg="gray.50" boxShadow="lg" borderRadius="md">
					<form onSubmit={handleSubmit}>
						<Flex>
							<Input name="text" value={data.text} onChange={handleChange} />
							<Button type="submit" colorScheme="blue">
								Send
							</Button>
							<Flex>
								<Input
									border="none"
									borderRadius="lg"
									width="100px"
									height="40px"
									name="color"
									type="color"
									value={data.color}
									onChange={handleChange}
								/>
							</Flex>
						</Flex>
					</form>
				</Flex>
			</Flex>
		</Box>
	);
};

export default SendText;
