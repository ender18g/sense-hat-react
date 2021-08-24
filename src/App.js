import React from 'react';
import { ChakraProvider, Flex, Box, Text, Heading, Link, VStack, Code, Grid, theme, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Rotation from './Rotation';
import Graph from './Graph';
import Home from './Home';
import { Route, Switch, NavLink } from 'react-router-dom';
import Rotation3d from './Rotation3d';
import GenericGraph from './GenericGraph';
import AccelGraph from './AccelGraph';
import SendText from './SendText';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Flex flexDir="column" justifyContent="space-between" minH="100vh" minW="100vw">
				<Box>
					<Flex boxShadow="lg" bg="teal" alignItems="center" justifyContent="space-between" px="5" py="2">
						<Box p="2">
							<NavLink to="/">
								<Heading color="white" size="lg" fontWeight="200" letterSpacing=".1em">
									Sense Hat Demo
								</Heading>
							</NavLink>
						</Box>
						<NavLink to="/">
							<Text color="white">Home</Text>
						</NavLink>
						<NavLink to="/spaceship">
							<Text color="white">Space Ship</Text>
						</NavLink>
						<NavLink to="/3d">
							<Text color="white">3D</Text>
						</NavLink>
						<NavLink to="/imu_graph">
							<Text color="white">IMU Graph</Text>
						</NavLink>
						<NavLink to="/tph_graph">
							<Text color="white">TPH Graph</Text>
						</NavLink>
						<NavLink to="/accel_graph">
							<Text color="white">Accel Graph</Text>
						</NavLink>
						<NavLink to="/send_text">
							<Text color="white">Send Text</Text>
						</NavLink>
						<ColorModeSwitcher />
					</Flex>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/spaceship" component={Rotation} />
						<Route exact path="/imu_graph" component={Graph} />
						<Route exact path="/accel_graph" component={AccelGraph} />
						<Route exact path="/3d" component={Rotation3d} />
						<Route exact path="/send_text" component={SendText} />
						<Route
							exact
							path="/tph_graph"
							render={() => (
								<GenericGraph
									data={[
										{ name: 'temperature', value: 75, unit: 'Degrees Farenheit' },
										{ name: 'pressure', value: 1022, unit: 'mbar' },
										{ name: 'humidity', value: 30, unit: 'Percent (%)' }
									]}
								/>
							)}
						/>

						<Route
							exact
							path="/temperature_graph"
							render={() => <GenericGraph name="temperature" init={73} />}
						/>

						<Route exact path="/humidity_graph" render={() => <GenericGraph name="humidity" init={73} />} />
					</Switch>
				</Box>
				<Flex boxShadow="lg" bg="teal" alignItems="center" justifyContent="center" p="2" boxShadow="lg">
					<Text fontWeight="300" color="white" textAlign="center">
						Created By Allan Elsberry
					</Text>
				</Flex>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
