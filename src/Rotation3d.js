import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import socketIOClient from 'socket.io-client';
import { Heading, Flex, Text, Box } from '@chakra-ui/react';
import ENDPOINT from './Endpoint';

function Cube(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [ hovered, setHover ] = useState(false);
	const [ active, setActive ] = useState(false);

	const [ response, setResponse ] = useState({ roll: 0, pitch: 0, yaw: 0 });

	useEffect(() => {
		console.log('connect to ', ENDPOINT);
		const socket = socketIOClient(ENDPOINT);
		socket.on('imu', (data) => {
			setResponse(data.data.orientation);
		});

		return () => socket.disconnect();
	}, []);

	// Rotate mesh every frame, this is outside of React without overhead
	// useFrame(() => {
	// 	mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	// });
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 2}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}
			rotation={[ -response.roll / 180 * Math.PI, -response.yaw / 180 * Math.PI, 0 ]}
		>
			<boxGeometry args={[ 1, 1, 1 ]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

export default function App() {
	return (
		<Box>
			<Flex justifyContent="center">
				<Heading my="5" textAlign="center" letterSpacing=".1em">
					IMU Demo
				</Heading>
			</Flex>

			<Canvas style={{ width: '100vw', height: '95vh' }}>
				<ambientLight intensity={0.5} />
				<spotLight position={[ 10, 10, 10 ]} angle={0.15} penumbra={1} />
				<pointLight position={[ -10, -10, -10 ]} />
				<Cube position={[ 0, 1, 0 ]} />
			</Canvas>
		</Box>
	);
}
