// React
import React from 'react';

// React Native
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';

type CalculatorScreenProps = {
	content: string;
}

export function CalculatorScreen({ content }: CalculatorScreenProps) {

	return (
		<View style={styles.container}>
			<Text style={styles.content}>{ content }</Text>
		</View>
	);
}