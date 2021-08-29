// React
import React, { useState } from 'react';

// React Native
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';

// Components
import { Keypad } from '../../components/Keypad';
import { CalculatorScreen } from '../../components/CalculatorScreen';

export function Main() {
	const [expression, setExpression] = useState('');

	return (
		<View style={styles.container}>
			<CalculatorScreen 
				content={expression}
			/>

			<Keypad 
				setExpression={setExpression}
			/>
		</View>
	);
}