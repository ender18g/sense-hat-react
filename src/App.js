import React from 'react';
import { ChakraProvider, Flex, Box, Text, Heading, Link, VStack, Code, Grid, theme, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Rotation from './Rotation';
import Graph from './Graph';
import Home from './Home';
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box>
				<Flex bg="teal" alignItems="center" justifyContent="space-between">
					<Heading m="4" color="white" size="lg" fontWeight="400" letterSpacing=".1em">
						Sense Hat Demo
					</Heading>
					<NavLink to="/">
						<Text color="white">Home</Text>
					</NavLink>
					<NavLink to="/spaceship">
						<Text color="white">Space Ship</Text>
					</NavLink>
					<NavLink to="/graph">
						<Text color="white">Graph</Text>
					</NavLink>
					<ColorModeSwitcher />
				</Flex>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/spaceship" component={Rotation} />
					<Route exact path="/graph" component={Graph} />
				</Switch>
			</Box>
		</ChakraProvider>
	);
}

export default App;
