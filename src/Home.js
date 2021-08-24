import React from 'react';
import {
	ChakraProvider,
	Flex,
	Box,
	Text,
	Heading,
	Link,
	VStack,
	Code,
	Grid,
	theme,
	Image,
	UnorderedList,
	ListItem
} from '@chakra-ui/react';
import raspi from './raspi.webp';
import axis from './sensehat_axis.png';
import ReactMarkdown from 'react-markdown';
import SendText from './SendText';

export default function Home() {
	return (
		<Box>
			<Box m="10">
				<Heading my="3" size="md">
					What is an IMU?
				</Heading>
				<Text my="1">IMU stands for Inertial Measurement Unit. It's actually three sensors in one:</Text>
				<UnorderedList>
					<ListItem>A gyroscope (measures momentum and rotation)</ListItem>
					<ListItem>
						An accelerometer (measures acceleration forces and can be used to find the direction of gravity)
					</ListItem>
					<ListItem>
						A magnetometer (measures the Earth's own magnetic field, so it's a bit like a compass)
					</ListItem>
				</UnorderedList>
			</Box>
			<Flex height="50vh" justifyContent="center">
				<Image src={raspi} objectFit="scale-down" />
			</Flex>
			<Box m="10">
				<Heading my="3" size="md">
					How is orientation represented?
				</Heading>
				<Text my="1">The three axes are:</Text>
				<UnorderedList>
					<ListItem>Pitch (like a plane taking off)</ListItem>
					<ListItem>Roll (the plane doing an aileron roll)</ListItem>
					<ListItem>Yaw (imagine steering the plane like a car)</ListItem>
				</UnorderedList>
			</Box>
			<Flex height="50vh" justifyContent="center">
				<Image objectFit="scale-down" src={axis} />
			</Flex>
			<Box m="10">
				<Heading my="3" size="md">
					How is acceleration represented?
				</Heading>
				<Text my="1">
					The three axes, (x,y,z) are shown above. The Sense Hat provides acceration scaled to Earth's
					Gravity. 1.0 Gs = 9.8 m/s^2
				</Text>
			</Box>
			<SendText />
		</Box>
	);
}
