import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	ReferenceLine,
	ReferenceArea,
	ReferenceDot,
	Tooltip,
	CartesianGrid,
	Legend,
	Brush,
	ErrorBar,
	AreaChart,
	Area,
	Label,
	LabelList
} from 'recharts';

import { Flex, Text, Box, Heading, Image } from '@chakra-ui/react';

export default function Chart(props) {
	const { data, plotKey } = props;
	return (
		<Box>
			<Flex justifyContent="center">
				<Heading color="blue.700" mx="2" size="md">
					{plotKey.toUpperCase()}:
				</Heading>
				<Heading mx="3" size="md" color="gray">
					{data.length > 10 && data.slice(-1)[0][plotKey].toFixed(1)}
				</Heading>
			</Flex>
			<Flex justifyContent="center">
				<LineChart width={700} height={400} data={props.data}>
					<YAxis type="number" unit="" width={80}>
						<Label value="Degrees" position="insideLeft" angle={90} />
					</YAxis>
					<XAxis dataKey="name">
						<Label value="Time" angle={0} />
					</XAxis>
					<Tooltip />
					<CartesianGrid stroke="#f5f5f5" />
					<Line type="monotone" dataKey={props.plotKey} stroke="#ffb14a" strokeWidth={3} yAxisId={0} />
				</LineChart>
			</Flex>
		</Box>
	);
}
